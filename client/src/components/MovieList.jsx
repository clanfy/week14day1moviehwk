var React = require('react');
var Movie = require('./Movie.jsx');

var MovieList = React.createClass({
  render: function(){
    var movieComponents = this.props.movies.map(function(movieObject)
    {
      return (
        <Movie
        key={movieObject.id}>
        <a href={movieObject.url}>
        {movieObject.name}
        </a>
        </Movie>
        )
    });
    return (
      <div className='movie-list'>
      {movieComponents}
      </div>
      )}
  })

module.exports = MovieList;