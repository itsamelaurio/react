import React from 'react'

export default function SaveButton() {
    return (
            //form-attributet gör knappen kopplad till formuläret med samma id
            <div className="text-center margin-bottom-sm">
                <button form='add-movie' className="btn btn-success mt-3" type="submit">Spara Film</button>
            </div>
        
    )
}
