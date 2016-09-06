var React = require('react');

var MovieDetails = function(props){
  if(!props.movie){
    return(
      <h4>Select a movie</h4>
    )
  }
  return(
    <div>
      <h4>{props.movie.show_title}</h4>
      <p>Summary</p>
      <p>{props.movie.summary}</p>
    </div>
  )
}

module.exports = MovieDetails;