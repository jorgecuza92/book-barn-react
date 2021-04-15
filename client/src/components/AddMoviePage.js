import { Component } from "react";
import Button from 'react-bootstrap/Button';


class AddMoviePage extends Component {

  constructor() {
    super()
    this.state = {
      title: '',
      director: '',
      genre: '',
      year: '',
      imageURL: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
     /* [e.target.director]: e.target.value,
      [e.target.genre]: e.target.value,
      [e.target.year]: e.target.value,
      [e.target.imageURL]: e.target.value */
    })
  }

  handleSave = () => {
    fetch('http://localhost:8080/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        director: this.state.director,
        genre: this.state.genre,
        year: this.state.year,
        imageURL: this.state.imageURL,

      })
    }).then(response => response.json())
      .then(result => {
        if(result.success) {
          this.props.history.push('/movies')
        }
      })
  }




  render() {

    return (
      <div>
        <h1>Add Movies Here!</h1>
        <input type='text' onChange = {this.handleOnChange} placeholder='Title' name = 'title'/>
        <input type='text' onChange = {this.handleOnChange} placeholder='Director' name = 'director'/>
        <input type='text' onChange = {this.handleOnChange} placeholder='Genre' name = 'genre' />
        <input type='text' onChange = {this.handleOnChange} placeholder='Year' name = 'year'/>
        <input type='text' onChange = {this.handleOnChange} placeholder='Paste Movie Poster URL' name = 'imageURL' />
        <Button onClick = {this.handleSave}>Save</Button>

      </div>

    )
  }

}

export default AddMoviePage;