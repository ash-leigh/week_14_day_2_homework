var React = require('react');
var MovieForm = require('./MovieForm');
var MovieSelect = require('./MovieSelect');
var MovieDetails = require('./MovieDetails');
var _ = require('lodash');

var MoviesBox = React.createClass({

  getInitialState: function(){
    return{movies: [], currentMovie: null};
  },

  setCurrentMovie: function(movie){
    this.setState({currentMovie: movie});
  },

  handleClick: function(forename, surname){
    this.makeApiCall(forename, surname)
  },

  makeApiCall: function(forename, surname){
    var url = 'http://netflixroulette.net/api/api.php?actor=' + forename + '%20' + surname + ''
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      if(request.status === 200){
        var data = JSON.parse(request.responseText);
        this.setState({movies: data});
      }
    }.bind(this)
    request.send(null);
  },

  render: function(){
    return(
      <div>
        <MovieForm handleClick={this.handleClick}/>
        <MovieSelect movies={this.state.movies} setCurrentMovie={this.setCurrentMovie}/>
        <MovieDetails movie={this.state.currentMovie}/>
      </div>
    )
  }

})

module.exports = MoviesBox;