import { useQuery } from "@tanstack/solid-query";
import data from '@mockJson/hero.json';

export function getLocalJson() {
  return Promise.resolve(data);
}

export const useData_1=()=> {
  return useQuery(() => ({
    queryKey: ['todos'],
    queryFn: getLocalJson,
    staleTime: 1000 * 30,
    retry:3,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  }))
}