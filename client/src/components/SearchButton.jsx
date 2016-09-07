var React = require('react');

var SearchButton = React.createClass({

  handleClick: function(){
    this.props.handleClick(this.props.forename, this.props.surname)
  },

  render: function(){
    return(
      <button onClick={this.handleClick}></button>
    )
  }

})

module.exports = SearchButton;

