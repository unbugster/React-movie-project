import React from "react"
import { MovieList } from '../components/MovieList'
import { Preloader } from "../components/Preloader";

class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=f67062&s=matrix')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ movies: data.Search })
            })
    }

    render() {
        const { movies } = this.state;

        return (
            <main className="container content" >
                {
                    movies.length
                        ? (<MovieList movies={this.state.movies} />)
                        : (<Preloader />)
                }

            </main>
        )
    }

}

export { Main }