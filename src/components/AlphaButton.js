import React from 'react'

export default function AlphaButton(props) {
    
    //Sorterar filmerna på titel i alfabetisk ordning och sätter sen den gamla filmlistan till den sorterade
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
        <div className="margin-sm text-center margin-bottom-sm">
            <button className="btn btn-warning mt-3" onClick={() => sort(props.movies)}>Sortera Alfabetiskt</button>
        </div>
        )
}
