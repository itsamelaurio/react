import React from 'react';
import MovieForm from './MovieForm';
import Movie from './Movie';
import SaveButton from './SaveButton';
import AlphaButton from './AlphaButton';
import RatingButton from './RatingButton';

export default function MovieList() {
    //ExempelFilmer, går att ta bort men lättare att testa med dem
    const [movies, setMovies] = React.useState([{
        id:0,
        title:"Harry Potter",
        rating: 4
    },
    {
        id:1,
        title:"Avatar",
        rating: 3 
    },

    {
        id:2,
        title:"Good Will Hunting",
        rating: 5
    },
    {
        id:3,
        title:"Pulp Fiction",
        rating: 1 
    },
    {
        id:4,
        title:"Spirited Away",
        rating: 4
    },
    {
        id:5,
        title:"Shutter Island",
        rating: 5 
    }]);

    //Lägger till en Film med en titel och betyg och skapar ett nytt id till den
    function addMovie(title,rating){
        const id = movies.length > 0 ? movies[movies.length - 1].id + 1 : 0;
        setMovies([...movies, {
            id: id,
            title: title,
            rating: rating
        }])
    }
    //Tar bort filmen med id:t som skcikas in
    function deleteMovie(id){
        setMovies(movies.filter((movie) => movie.id !== id));
    }

    return (
        <div>
            <MovieForm addMovie={addMovie}/>
            <SaveButton/>
            <ul className="list-group margin-sm">
                {movies.map((movie) => (<Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} />))}
            </ul>
            <AlphaButton setMovies = {setMovies} movies = {movies}/>
            <RatingButton setMovies = {setMovies} movies = {movies}/>
                     
        </div>
    )
}