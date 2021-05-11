import React from 'react';
import MovieForm from './MovieForm';
import Movie from './Movie';
import SaveButton from './SaveButton';
import AlphaButton from './AlphaButton';
import RatingButton from './RatingButton';

export default function MovieList() {
    const [movies, setMovies] = React.useState([{
        id:0,
        title:"Harry Potter",
        rating: 5
    },
    {
        id:1,
        title:"Avatar",
        rating: 3 
    }]);

    return (
        <div>
            <MovieForm/> 
            <ul className="list-group">
                {movies.map((movie) => (<Movie key={movie.id} item={movie} />))}
            </ul>           
        </div>
    )
}