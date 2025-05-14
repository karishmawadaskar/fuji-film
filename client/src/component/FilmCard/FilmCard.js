import React from 'react'
import './FilmCard.css'
import ratingImg from '../../Assets/star.png'
import awardImg from '../../Assets/trophy.png'
import deleteImg from '../../Assets/delete.png'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'


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
}) {

    const navigate = useNavigate();
    const deleteFilm = async () => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}/films/${_id}`);

            toast.success(response.data.message);
            window.location.reload();
        } catch(err) {
            toast.error(err?.response?.data?.message || "Delete failed");
            console.error("Delete film failed:", err);
        }
    };
    return (
        <div className='film-card-content'>
            <div>
                <h1 className='film-card-title'>{title}</h1>
                <p className='releaseyear'>{releaseYear}</p>
            </div>
            <div className='film-card'>

                <div>
                    <img src={poster || null} alt='posterimg' className='film-card-poster'></img>
                </div>
                <div>
                    <div>
                        <p className='shortDescription'>{shortDescription}</p>
                    </div>
                    <div className='rating-container'>
                        <span className='rating'><img src={ratingImg} className='ratingImg' alt='ratingImg' />{rating}</span>
                        <span className='film-card-director'>Director : {director}</span>
                    </div>
                    <div>
                        <span className='category'>category : {category}</span>
                        <span className='category'>language : {language}</span>
                    </div>
                    <div className='buttons'>                      
                        <span className='category'>countries : {countries}</span>
                        <span className='category'> <img src={awardImg} className='ratingImg' alt='ratingImg' />{awards}</span>
                        <span><Button title={"Edit"} onClick={()=>{navigate(`/film/edit/${_id}`)}}/></span>
                        <Button
                            title={"delete"}
                            className='deletebtn'
                            alt='deleteImg'
                            src={deleteImg}
                            onClick={() => { deleteFilm() }}
                        />
                       
                    </div>
                </div>

            </div>
            < Toaster />
        </div>

    )
}

export default FilmCard