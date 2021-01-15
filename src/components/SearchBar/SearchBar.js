import React from 'react'
import {connect} from 'react-redux'
import {getMovies} from '../../actions'

class SearchBar extends React.Component {

  state={search:""}

  onFormSubmit=(e)=>{
    e.preventDefault()
    this.props.getMovies(this.state.search) 
    this.setState({search:""})
  }

  render(){
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
        <label htmlFor=""></label>
        <input type="text" 
        value={this.state.search} 
        placeholder="Search for some movies..."
        onChange={e=>this.setState({search: e.target.value})}
        />
        </div>
      </form>
    </div>
  )
}
}

export default connect(null,{getMovies})(SearchBar)
