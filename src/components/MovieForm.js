import React from 'react'

export default function MovieForm(props) {

    const [title, setTitle] = React.useState("");
    const [rating, setRating] = React.useState(0);

    //Validation för formuläret, sen skickas det iväg och lägger till en film
    function checkForm (e){
        e.preventDefault();

        if (title === "" ){
            alert("Lägg till en titel");
        }else if(parseInt(rating,10) === 0){
            alert("Lägg till ett betyg");
        }else{
            props.addMovie(title,rating);
            setTitle("");
            setRating(0);
            document.getElementById("add-movie").reset();
            
        }
    }

    return (
            <form id="add-movie" onSubmit = {checkForm}>
                <fieldset>
                    <legend>Lägg till en film</legend>
                    <label htmlFor="title">Titel:</label>
                    <input type="text" id="title" className="form-control" onChange={e => setTitle(e.target.value)}/>
                    <label htmlFor="rating">Betyg:</label>
                    <select type="text" id="rating" className="form-control" onChange={e => setRating(e.target.value)}>
                        <option value={0}>Välj betyg här...</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </fieldset>
            </form>
    )
}
