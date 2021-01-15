import {combineReducers} from 'redux'

let data =localStorage.getItem('selected-movies')
if(!data){
data=[]
}else{
  data=JSON.parse(data)
}

const getMoviesReducers=(movies=[], action)=>{
  switch (action.type){
    case 'SEARCH_MOVIE':
      return action.payload
    default:
      return movies
  }
}


const selectMovieReducer=(selectedMovies=data, action)=>{
  switch (action.type){
  case 'SELECT_MOVIE':
    return [...selectedMovies,action.payload]
  case 'REMOVE_MOVIE':
    return selectedMovies.filter(movie=>movie.imdbID !==action.payload.imdbID)
  default:
    return selectedMovies
  }
}
const getMovieInfoReducers=(movieInfo=[], action)=>{
  switch (action.type){
    case 'MOVIE_DETAIL':
      return action.payload
    default:
      return movieInfo
  }
}

export default combineReducers({
  movies:getMoviesReducers,
  movieInfo:getMovieInfoReducers,
  selectedMovies: selectMovieReducer
})