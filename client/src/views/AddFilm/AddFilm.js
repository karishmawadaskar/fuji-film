import React, { useState } from 'react'
import './AddFilm.css'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import axios from 'axios'
import toast from 'react-hot-toast'

function AddFilm() {

    const [film, setFilms] = useState({
        title: "",
        shortDescription: "",
        director: "",
        poster: "",
        releaseYear: "",
        category: "",
        language: "",
        rating: "",
        countries: "",
        awards: "",
    })
    const addFilm = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/films`, {
            title: film.title,
            shortDescription: film.shortDescription,
            director: film.director,
            poster: film.poster,
            releaseYear: film.releaseYear,
            category: film.category,
            language: film.language,
            rating: film.rating,
            countries: film.countries,
            awards: film.awards,
        });

        toast.success(response.data.message);
        setFilms({
            title: "",
            shortDescription: "",
            director: "",
            poster: "",
            releaseYear: "",
            category: "",
            language: "",
            rating: "",
            countries: "",
            awards: "",
        })
    }
    return (
        <div>
            <h1>Add Film</h1>
            <div className='add-film-form'>
                <Input
                    lable="title"
                    value={film.title}
                    onchange={(val) => { setFilms({ ...film, title: val }) }}
                    placeholder={"Enter a title of the film"}
                />
                <Input
                    lable="shortDescription"
                    value={film.shortDescription}
                    onchange={(val) => { setFilms({ ...film, shortDescription: val }) }}
                    placeholder={"Enter a short description of the film"}
                />
                <Input
                    lable="director"
                    value={film.director}
                    onchange={(val) => { setFilms({ ...film, director: val }) }}
                    placeholder={"Enter a director name of the film"}
                />
                <Input
                    lable="poster"
                    value={film.poster}
                    onchange={(val) => { setFilms({ ...film, poster: val }) }}
                    placeholder={"Enter a URL of the poster"}
                />
                <Input
                    lable="releaseYear"
                    value={film.releaseYear}
                    onchange={(val) => { setFilms({ ...film, releaseYear: val }) }}
                    placeholder={"Enter a releaseYear of the film"}
                />
                <Input
                    lable="category"
                    value={film.category}
                    onchange={(val) => { setFilms({ ...film, category: val }) }}
                    placeholder={"Enter a category of the film"}
                />
                <Input
                    lable="language"
                    value={film.language}
                    onchange={(val) => { setFilms({ ...film, language: val }) }}
                    placeholder={"Enter a language of the film"}
                />
                <Input
                    lable="rating"
                    value={film.rating}
                    onchange={(val) => { setFilms({ ...film, rating: val }) }}
                    placeholder={"Enter a rating of the film"}
                />
                <Input
                    lable="countries"
                    value={film.countries}
                    onchange={(val) => { setFilms({ ...film, countries: val }) }}
                    placeholder={"Enter a countries of the film"}
                />
                <Input
                    lable="awards"
                    value={film.awards}
                    onchange={(val) => { setFilms({ ...film, awards: val }) }}
                    placeholder={"Enter a awards of the film"}
                />
                <div className='btn-container'>
                    <Button
                        title="Add Film"
                        onClick={() => { addFilm() }}
                        variant="secondary"
                    />
                    <Button
                        title="Cancel"
                        onClick={() => { }}
                        variant="primary"
                    />

                </div>

            </div>
        </div>
    )
}

export default AddFilm