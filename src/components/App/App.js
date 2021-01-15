import SearchBar from '../SearchBar/SearchBar';
import Results from '../Results/Results';
import SavedMovies from '../SavedMovies/SavedMovies';
import {BrowserRouter, Route} from 'react-router-dom'

import Pagination from '../Pagination'
import { useState } from 'react';
import {connect} from 'react-redux'


function App(props) {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = props.movies.slice(indexOfFirstPost, indexOfLastPost);

   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="ui container">
      <BrowserRouter>
      <Route path="/">
      <SearchBar/>
      <SavedMovies />
      <hr />
      {props.movies.length>0?<div>
        <h1>Your search results</h1>
      <Results movies={currentPosts}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={props.movies.length}
        paginate={paginate}
      />
      </div>
      :""}
      </Route>
      </BrowserRouter>      
    </div>
  );
}

const mapStateToProps=(state)=>({
  movies: state.movies,
})

export default connect(mapStateToProps)(App)
