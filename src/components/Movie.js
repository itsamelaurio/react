import React from 'react'

export default function Movie(props) {
    let [stars, setStars] = React.useState("");

    React.useEffect(()=>{
        let star = []
        for(let i = 0; i < props.movie.rating;i++){
           star.push(<i className="fa fa-star checked" style={{color: "orange"}} key={i}></i>);
        }
        setStars(star);
        
    }, [props.movie] );
    

    return (
        <li className="list-group-item">
            { props.movie.title }
            <span id = "stars">
                {stars}
            </span>
            <button className="btn btn-sm btn-danger float-end" onClick={() => props.deleteMovie(props.movie.id)}>Ta Bort</button>
        </li>
    )
}
