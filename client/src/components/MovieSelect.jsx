var React = require('react');

var MovieSelect = React.createClass({

  getInitialState: function(){
    return{selectedIndex: null}
  },

  handleChange: function(event){
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});
    this.props.setCurrentMovie(this.props.movies[newIndex]);
  },

  render: function(){
    var movieNodes = this.props.movies.map(function(movie, index){
      return(
        <option value={index} key={index}>
          {movie.show_title}
        </option>
      )
    })
    return(
      <select value={this.state.selectedIndex} onChange={this.handleChange}>
        {movieNodes}
      </select>
    )
  }

})

module.exports = MovieSelect;