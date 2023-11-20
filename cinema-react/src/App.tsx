import './App.css';
import { useFetchData } from './hook/useMovies';
import { MovieList } from './types/movieList';

function App() {
  const { data, isError, isLoading } =
    useFetchData<MovieList>('discover/movie');

  return (
    <div>
      {data?.data.results.map((movie) => {
        return <div key={movie.id}>{movie.title}</div>;
      })}
    </div>
  );
}

export default App;
