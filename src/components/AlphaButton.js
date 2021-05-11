import React from 'react'

export default function AlphaButton(props) {
    function sort(movies){
        if (movies.length <= 1){
            alert("Lägg till två filmer för att kunna sortera dem")
        }else{
        movies.sort(function(a, b) {
            var textA = a.title.toLowerCase();
            var textB = b.title.toLowerCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        
        props.setMovies([...movies]);
        }
    }
    return (
        <button className="btn btn-warning mt-3" onClick={() => sort(props.movies)}>Sortera Alfabetiskt</button>
    )
}
