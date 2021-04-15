import { Component } from "react";
import MovieList from './MovieList'



class MovieListPage extends Component {

  constructor() {
    super()

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.getAllMovies()
  }

  getAllMovies = () => {
    fetch('http://localhost:8080/movies')
    .then(response => response.json())
    .then(movies => {
      this.setState({
        movies: movies
      })
    })
  }

  render() {
    return (
     <MovieList movies = {this.state.movies} />
    )
  }

}

export default MovieListPage;