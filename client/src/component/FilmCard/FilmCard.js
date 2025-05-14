import React from 'react'
import './FilmCard.css'

function FilmCard({
    title,
    shortDescription,
    director,
    poster,
    releaseYear,
    category,
    language,
    rating,
    countries,
    awards,
    _id
 }) 
    {
    return (
        <div className='film-card'>
          { title}
            </div>
    )
}

export default FilmCard