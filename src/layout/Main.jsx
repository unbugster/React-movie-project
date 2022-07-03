import React from "react"
import { MovieList } from '../components/MovieList'
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=f67062&s=matrix')
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data.Search, loading: false })
            })
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        const searchType = type !== 'all' ? `&type=${type}` : '';
        const newUrl = `http://www.omdbapi.com/?apikey=f67062&s=${str}${searchType}`;

        fetch(newUrl)
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data.Search, loading: false });
            })
    }

    render() {
        const { movies, loading } = this.state;

        return (
            <main className="container content" >
                <Search searchMovies={this.searchMovies} />
                {
                    loading
                        ? (<Preloader />)
                        : (<MovieList movies={movies} />)
                }

            </main>
        )
    }

}

export { Main };
