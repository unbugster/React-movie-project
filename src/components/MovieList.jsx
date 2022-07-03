import { Movie } from './Movie';

function MovieList({ movies }) {

    return (
        <div className="movies">
            {movies.map((movie) => {
                return <Movie key={movie.imdbID} {...movie} />
            })}
        </div>
    )
}

export { MovieList };
