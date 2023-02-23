import React from 'react'
import {  addFavourites } from '../actions';


class MovieCard extends React.Component {
    render() {
  // In App.js  send movies  data through props hare we 
   //   here we use data in html component 
   const  { movie , isFavourites } = this.props ;
     
     handleFavourites = () => {
      const {movie} = this.props ;
      this.props.dispatch(addFavourites(movie)) ;
  }
  handleUnFavourites = ()=>{
  }

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
               isFavourites 
                ? <button className='=unfavourite-btn' onClick={this.handleUnFavourites}>Unfavourite</button>
                : <button className='=favourite-btn' onClick={this.handleFavourites}>favourite</button>
               
             </div>
             </div>
            
      </div>
      
   )
 }
}

export default MovieCard ;