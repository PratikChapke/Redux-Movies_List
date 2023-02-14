import React from 'react'


class MovieCard extends React.Component {
    render() {
  // In App.js  send movies  data through props hare we 
   //   here we use data in html component 
      const {  movie } = this.props ;
 

      return (
        <div className='movie-card'>
            <div className='left'>
                <img alt='movie-poster' src={movie.Poster} />
            </div>
            <div className='right'>
             <div className='title'>{movie.Title}</div>
             
             <div className='plot'>{movie.Plot}</div>
             
             <div className='footer'>
               <div className='rating'>{movie.imdbRating}</div>
               <button className='=favourite-btn'>favourite</button>
             </div>
             </div>
            
      </div>
      
   )
 }
}

export default MovieCard ;