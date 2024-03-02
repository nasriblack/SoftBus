import { IBus } from "../interfaces/IBus";
import { useFetch } from "../utils/reactQuery";

export const useGetBus = (id:string) => useFetch<IBus[]>(`/api/bus/${id}`)