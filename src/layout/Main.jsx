import React from "react"
import { MovieList } from '../components/MovieList'
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=f67062&s=matrix')
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data.Search })
            })
    }

    searchMovies = (str, type = 'all') => {
        const searchType = type !== 'all' ? `&type=${type}` : '';
        const newUrl = `http://www.omdbapi.com/?apikey=f67062&s=${str}${searchType}`;

        fetch(newUrl)
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data.Search });
            })
    }

    render() {
        const { movies } = this.state;

        return (
            <main className="container content" >
                <Search searchMovies={this.searchMovies} />
                {
                    movies.length
                        ? (<MovieList movies={this.state.movies} />)
                        : (<Preloader />)
                }

            </main>
        )
    }

}

export { Main };
