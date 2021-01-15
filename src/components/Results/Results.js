import React from 'react'
import {connect} from 'react-redux'
import {selectMovie} from '../../actions'
import SelectButton from '../SelectButton/SelectButton'
import './Results.css'
import poster from "./No-Photo-Available.jpg";

const Results=(props)=>{
  let movies
  
  if(props.movies.length>0){
  //  movies=props.movies.map(movie=>{
   movies=props.movies.map(movie=>{
     if(movie.Type==="movie"){
     return(
    <div key={movie.imdbID} className="column">
      <div className="containerOverlay">
        {movie.Poster!=="N/A"?<img src={movie.Poster} alt={movie.title} className="image"/>: <img src={poster} alt={movie.title} className="image"/>

}
      <div className="overlay">
      <div className="text">
      <span className="year">{movie.Year}</span>
        {movie.Title}
        </div>
      <SelectButton movie={movie} />
      </div>
      </div>
    </div>
     )}
   }
    )
  return (
<div className="ui grid">
  <div className="doubling three column row">
        {movies}
        </div>
    </div>
  )
  }
  return (
    <h1>Search for a movie</h1>
  )
}

const mapStateToProps=(state)=>({
  // movies: state.movies,
  selectedMovies:state.selectedMovies

})

export default connect(mapStateToProps,{selectMovie})(Results)

