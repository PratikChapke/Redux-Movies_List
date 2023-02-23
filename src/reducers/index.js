import {ADD_MOVIES , ADD_FAVOURITES } from '../actions'


const initialMoviesState ={
    list : [] ,
    favourites: []
}

export default function movies (state=initialMoviesState, action){
   
    switch(true){
    case ADD_MOVIES :
        return {
            ...state ,
            list : action.movies
        }
        case ADD_FAVOURITES:
            return {
                ...state ,
                favourites: [action.movies, ...state.favourites]
            }
        default :
        return state ;

}
}
