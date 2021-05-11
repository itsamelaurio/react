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

    function addMovie(title,rating){
        const id = movies.length > 0 ? movies[movies.length - 1].id + 1 : 0;
        setMovies([...movies, {
            id: id,
            title: title,
            rating: rating
        }])
    }

    function deleteMovie(id){
        setMovies(movies.filter((movie) => movie.id !== id));
    }

    return (
        <div>
            <MovieForm addMovie={addMovie}/> 
            <ul className="list-group">
                {movies.map((movie) => (<Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} />))}
            </ul>           
        </div>
    )
}