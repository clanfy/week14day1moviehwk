var React = require('react');
var MovieList = require('./MovieList.jsx');

var MovieBox = React.createClass({
  render: function(){
    return (
      <div className='movie-box'>
      Hello World! I am the movie box!
      <MovieList />
      </div>
      );
  }
});

module.exports = MovieBox;