import React from 'react'

export default function MovieForm() {
    return (
        <div>
            <form id="add-movie">
                <fieldset>
                    <legend>Lägg till en film</legend>
                    <label htmlFor="title">Titel:</label>
                    <input type="text" id="title" className="form-control" />
                    <label htmlFor="rating">Betyg:</label>
                    <select type="text" id="rating" className="form-control">
                        <option value={0}>Välj betyg här...</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <input type="submit" class="btn btn-success mt-3" value="Spara film"></input>
                </fieldset>
            </form>
        </div>
    )
}
