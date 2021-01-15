import React,{ useState, useEffect } from 'react'
import {connect} from 'react-redux'
import Loader from "../Loader/Loader";
import {removeMovie, getMovie} from '../../actions'
import './SavedMovies.css'

const SavedMovies = (props) => {

  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(()=>{
    if(props.selectedMovies.length>=0){
    localStorage.setItem("selected-movies", JSON.stringify(props.selectedMovies))
    }
  },[props.selectedMovies])

  const onTitleClick = (movie,index) => {
    props.getMovie(movie.Title)
    if(index===activeIndex){
      setActiveIndex(null)
    }else{
    setActiveIndex(index);
    }
  }
 if(props.selectedMovies.length>0){
  return (
    <div>
      <h1> Your Movie Selection</h1>
      
      {props.selectedMovies.length===5? <h2 className="ui red header"> You have selected 5 movies </h2>: <h2> You can nominate {5-props.selectedMovies.length} more movies</h2> }
    <div className="ui styled accordion">
      {props.selectedMovies.map((movie, index)=>{
        return(
          <React.Fragment key={movie.imdbID}>
            
          <div className={(index===activeIndex)?"title active":"title"}
      onClick={()=> onTitleClick(movie,index)}>
             <i className="dropdown icon"></i>
            {movie.Title}     
    <div onClick={()=>props.removeMovie(movie)} className="ui red button right floated btnRight mini"> 
        <i className="fas fa-trash-alt"></i> Remove</div>
        </div>

        <div className={(index===activeIndex)?"content active":"content"}>
        {!props.movieInfo? <div className="loader-video"> <Loader /></div>:
    
    <p className="transition">
    <strong> Released year: </strong>{movie.Year} 
    <br />
    <strong>Actors: </strong>{props.movieInfo.Actors}
    <br />
    <strong>Awards: </strong>{props.movieInfo.Awards}
    <br />
    <strong>Plot: </strong>{props.movieInfo.Plot}
    </p>}
  </div>

          
          </React.Fragment>
        )
      })}
    </div>
    </div>
  )


}else{
  return (
    <div>
            <h1> Your Movie Selection</h1>
      You haven't nominated any movies. You can nominate up to 5 movies

    </div>
  )
}
}


const mapStateToProps=(state)=>({
  selectedMovies:state.selectedMovies,
  movieInfo:state.movieInfo
})

export default connect(mapStateToProps, {removeMovie, getMovie})(SavedMovies)
