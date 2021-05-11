import React from 'react'

export default function RatingButton(props) {
    
    //Sorterar filmerna på betyg i omvänd ordning och sätter sen den gamla filmlistan till den sorterade
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
        <div className="text-center">
            <button className="btn btn-warning mt-3 " style = {{margin:"auto"}}onClick={() => sort(props.movies)}>Sortera på Betyg</button>
        </div>
        )
}
