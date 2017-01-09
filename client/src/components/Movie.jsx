var React = require('react');

var Movie = React.createClass({
  render: function(){
    return (
      <div className='movie'>
      <p className='movie-name'>
      {this.props.name}
      </p>
      <p>{this.props.children}</p>
      </div>
      )
  }
});

module.exports = Movie;