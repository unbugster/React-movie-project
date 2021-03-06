import React from "react"
import { MovieList } from '../components/MovieList'
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        console.log(process.env.REACT_APP_API_KEY)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data.Search, loading: false })
            })
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false })
            });
    };

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        const searchType = type !== 'all' ? `&type=${type}` : '';
        const newUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${searchType}`;

        fetch(newUrl)
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data.Search, loading: false });
            })
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false })
            });
    };

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
    };

};

export { Main };
