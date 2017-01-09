var React = require('react');

var Movie = React.createClass({
  render: function(){
    return (
      <div className='movie'>
      <h6 className='movieName'>
      {this.props.name}
      </h6>
      <p> {this.props.children} </p>
      </div>
      );
    }
  });

  module.exports = Movie;