var React = require('react');

var SearchButton = function(props){
  return(
    <button onClick={props.handleClick('Johnny', 'Depp')}></button>
  )
}

module.exports = SearchButton;

