import { Movie } from './Movie';

function MovieList({ movies = [] }) {

    return (
        <div className="movies">
            {movies.length
                ?
                movies.map((movie) => {
                    return <Movie
                        key={movie.imdbID}
                        {...movie}
                    />
                })
                : <h4>Nothing found</h4>
            }
        </div>
    )
}

export { MovieList };
