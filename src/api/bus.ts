import { IBus, IResponseApi } from "../interfaces/IBus";
import { useFetch, useUpdate } from "../utils/reactQuery";

export const useGetBus = (id:string) => useFetch<IResponseApi>(`/api/bus/${id}`)

export const useUpdateBus = () => useUpdate(`/api/bus/edit-bus/`)