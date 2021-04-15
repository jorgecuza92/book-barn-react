import { Component } from "react";
import './MovieListStyles.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

class MovieList extends Component {

  render() {
    console.log(this.props.movies)
    const movies = this.props.movies

    const movieItems = movies.map((movie) => {
      return <Container>
                <Card style={{ width: '18rem' }}>
                   <div key = {movie.id}>
                 <li><img src={movie.imageURL} /></li>
                          <li>{movie.title}</li>
                          <li>{movie.director}</li> 
                          <li>{movie.genre}</li> 
                          <li>{movie.year} </li>
                      </div>
                </Card>
               </Container>
            
    })

    return (
      <div>
        <h1>Welcome to Movie List</h1>
        {movieItems}
      </div>

    )
  }

}

export default MovieList;