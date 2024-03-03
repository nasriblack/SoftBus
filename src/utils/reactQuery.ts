
import axios, { AxiosError, AxiosResponse } from 'axios';
import { api, myApi } from './api';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from 'react-query';
import { QueryFunctionContext } from 'react-query/types/core/types';


// const api = axios.create({
//     baseURL: 'localhost:7000', // Set your backend URL here
//   });

const useGenericMutation = <T, S>(
  func: (data: T | S) => Promise<AxiosResponse<S>>,
  url: string,
  params?: object,
  updater?: ((oldData: T, newData: S) => T) | undefined
) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError, T | S>(func, {
    onMutate: async (data) => {
      await queryClient.cancelQueries([url!, params]);

      const previousData = queryClient.getQueryData([url!, params]);

      queryClient.setQueryData<T>([url!, params], (oldData) => {
        return updater ? updater(oldData!, data as S) : (data as T);
      });

      return previousData;
    },
    onError: (err, _, context) => {
      queryClient.setQueryData([url!, params], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries([url!, params]);
    },
  });
};


type QueryKeyT = [string, object | undefined];

export const fetcher = async <T>({
    queryKey,
    pageParam,
  }: QueryFunctionContext<QueryKeyT>): Promise<any> => {
    try {
        const [url, params] = queryKey;
    const res = await myApi
        .get<T>(url, { params: { ...params, pageParam } });
    return res.data;
    } catch (error) {
        console.log('error', error)
    }
    
  };


export const useFetch = <T>(
    url: string | null,
    params?: object,
    config?: UseQueryOptions<T, Error, T, QueryKeyT>
  ) => {
    const context = useQuery<T, Error, T, QueryKeyT>(
      [url!, params],
      fetcher,
      {
        enabled: !!url,
        ...config,
      }
    );
  
    return context;
  };

  export const useUpdate = <T, S>(
    url: string,
    params?: object,
    updater?: (oldData: T, newData: S) => T
  ) => {
    return useGenericMutation<T, S>(
      (payload:any) => myApi.patch<S>(`${url}${payload.id}`, payload.data),
      url,
      params,
      updater
    );
  };
  
  