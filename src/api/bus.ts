import { IBus, IResponseApi } from "../interfaces/IBus";
import { useFetch } from "../utils/reactQuery";

export const useGetBus = (id:string) => useFetch<IResponseApi>(`/api/bus/${id}`)