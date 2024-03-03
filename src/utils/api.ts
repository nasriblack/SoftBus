import axios from 'axios';

export const api = (baseUrl: string) => ({
  get: <T>(url: string, params?: object) =>
    axios.get<T>(`${baseUrl}${url}`, {
      ...params,
    }),
  post: <T>(url: string, data: any) => axios.post<T>(`${baseUrl}${url}`, data),
  patch: <T>(url: string, data: any) => {
    return axios.patch<T>(`${baseUrl}${url}`, data);
  },
  delete: <T>(url: string) => axios.delete<T>(`${baseUrl}${url}`),
});

export const baseUrl = 'http://localhost:7000';

export const myApi = api(baseUrl);
