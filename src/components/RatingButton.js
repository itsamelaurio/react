import React from 'react'

export default function RatingButton(props) {
    function sort(movies){
        if (movies.length <= 1){
            alert("Lägg till två filmer för att kunna sortera dem")
        }else{
        movies.sort(function(a, b) {
            var numA = a.rating;
            var numB = b.rating;
            return (numA > numB) ? -1 : (numA < numB) ? 1 : 0;
        });
        
        props.setMovies([...movies]);
        }
    }
    return (
        <button className="btn btn-warning mt-3" onClick={() => sort(props.movies)}>Sortera på Betyg</button>
    )
}
