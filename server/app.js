const express = require('express')
const cors = require('cors')
const app = express()
const models = require('./models')
var bcrypt = require('bcryptjs')
const session = require('express-session')
// const authenticate = require('./authentication/auth')npm 



app.use(cors())
app.use(express.json())

app.use(session({
  secret: 'moviesarelife',
  saveUninitialized: true
}))

let movies = [
  {title: 'The Fly', genre: 'Horror', director: 'David Cronenberg' , year: '1986', imageURL: 'https://i.pinimg.com/originals/ea/e8/3e/eae83e737a0a3cd4c480a6c0ed2baa0e.jpg'},
  {title: 'From Beyond', genre: 'Horror', director: 'Stuart Gordon' , year:'1986', imageURL: 'https://alternativemovieposters.com/wp-content/uploads/2020/07/deaditecorpse_frombeyond.jpg'}
]


// Registration
app.get('/register', (req,res) => {
  
  res.json('register')

})

app.post('/register', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  bcrypt.genSalt(10, function (error, salt) {

    bcrypt.hash(password, salt, function (error, hash) {
      if (!error) {
        let user = models.User.build({

          username: username,
          password: hash
        })
        user.save().then(savedUser => {
          res.send('user registered')
          // res.redirect('/login')
        }).catch(error => {
          res.redirect('/register')
        })
      }
    })

  })

})



// getting all movies
app.get('/movies', (req, res) => {
  models.Movie.findAll({})
      .then(movies => {
          res.json(movies)
              // res.render('movies', { movies: movies })rs
      })
})
app.post('/movies', (req,res) => {
  console.log(req.body)
  const title = req.body.title
  const genre = req.body.genre
  const director = req.body.director
  const year = req.body.year
  const imageURL = req.body.imageURL

  let movie = models.Movie.build({
    title: title,
    genre: genre,
    director: director,
    year: year,
    imageURL: imageURL
  })
  movie.save().then((savedMovie) => {
    console.log(savedMovie)
    res.json({success: true, message: 'Movie is Saved!'})
  })
})

app.listen(8080, () => {
  console.log('Server is running...')
})
