import api from '../Api/omdbapi'

export const getMovies=(movie)=> async dispatch=>{
  const response= await api.get('/',{
    params:{
      s:movie  
    }})
    if(response.data.Response==="True"){
    dispatch({
    type:'SEARCH_MOVIE',
    payload: response.data.Search
  })
}else{
  alert(response.data.Error)
}
}

export const selectMovie=(movie)=>{
  return{
    type: 'SELECT_MOVIE',
    payload:movie
  }
}

export const removeMovie=(movie)=>{
  return{
    type: 'REMOVE_MOVIE',
    payload:movie
  }
}

export const getMovie=(title)=> async dispatch=>{
  const response= await api.get('',{
    params:{
      t:title  
    }})
    if(response.data.Response==="True"){
    dispatch({
    type:'MOVIE_DETAIL',
    payload: response.data 
  })
}else{
  alert(response.data.Error)
}
}