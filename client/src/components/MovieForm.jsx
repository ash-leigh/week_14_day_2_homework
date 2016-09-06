var React = require('react');
var SearchButton = require('./SearchButton');

var MovieForm = React.createClass({

  getInitialState: function(){
    return{forename: null, surname: null}
  },

  setForename: function(forename){
    this.setState({forename: forename})
  },

  setSurname: function(surname){
    this.setState({surname: surname})
  },

  render: function(){
    return(
      <div>
        <input id='forename' type='text' placeholder='Forename' onChange={this.setForename}/>
        <input id='surname' type='text' placeholder='Surname' onChange={this.setForename}/>
        <SearchButton handleClick={this.props.handleClick} forename={this.state.forename} surname={this.state.surname}/>
      </div>
    )
  }

})


module.exports = MovieForm;