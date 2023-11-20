import { useQuery } from '@tanstack/react-query';
import { axiosClient } from '../network/axios';
import { MovieList } from '../types/movieList';

export function useFetchData<T>(endpoint: string) {
  const { data, isLoading, isError } = useQuery({
    // queryKey: ['movieList'],
    // queryFn: () => axiosClient.get<MovieList>('discover/movie'),
    queryKey: [endpoint],
    queryFn: async () => await axiosClient.get<T>(endpoint),
  });
  return { data, isLoading, isError };
}
