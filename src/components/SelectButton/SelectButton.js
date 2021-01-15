import React from 'react'
import {connect} from 'react-redux'
import {selectMovie} from '../../actions'
import './SelectButton.css'

const SelectButton = (props) => {
  let selection=false
  if(props.selectedMovies.length>0 && props.selectedMovies.length<5){
    props.selectedMovies.map(selectedMovie=>{
      if (selectedMovie.imdbID===props.movie.imdbID){
        selection=true
      }
    })
  }else if (props.selectedMovies.length===5){
  return (
    <div>
<button className="ui button primary mini">Maximum Selection Reached</button>
    </div>
  )
  }
  return (
    <div>
      {selection? <button className="ui button mini" disabled>Nominated</button>: <button 
        onClick={()=> props.selectMovie(props.movie)}
        className="ui button primary mini">Nominate</button>}
    </div>
  )}

const mapStateToProps=(state)=>({
  movies: state.movies,
  selectedMovies:state.selectedMovies

})

export default connect(mapStateToProps,{selectMovie})(SelectButton)
