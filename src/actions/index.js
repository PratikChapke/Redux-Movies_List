
export const ADD_MOVIES = 'ADD_MOVIES';

export const ADD_FAVOURITES = 'ADD_FAVOURITES';
//  action creator 

export function addMovies(movies){

    return {
        type: 'ADD_MOVIES',
        movies 
    }
}

//  action creator 
export function addFavourites(movies) {

    return {
        type: 'ADD_FAVOURITES',
        movies 
    }
}
