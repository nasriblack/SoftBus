
import axios from 'axios';
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
    console.log('checking the url', url)
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
  