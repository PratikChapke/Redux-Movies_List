import React from "react";
//  import Css fils below
import {data } from '../data'
import Navbar from "./Navbar";
import MovieCard  from './MovieCard';
import { ADD_MOVIES } from "../actions";

class App extends React.Component {

   componentDidMount(){
    // we use 
     const {store}=this.props;   // inside store has array list and we will add favourites
    store.subscribe(()=>{
      console.log('UPDATED ')
      this.forceUpdate();
    })
    // dispatch to redux file 
    store.dispatch(addMovies(data))

     console.log('STATES' , this.props.store.getState());
   }

  render(){
    // fatch data from root file using props and 
     const {list }= this.props.store.getState() 
     console.log('render' , this.props.store.getState())                       //   // inside store has array list and we will add favourites

  
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">

            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>

          </div>
          <div className="List">
          
          { list.map((movie, index)=>{
            return <MovieCard movie ={movie} key={index}/>
          })}
          </div>
          
        </div>
      </div>
    );
    }
}
import { addMovies } from "../actions";

export default App;
