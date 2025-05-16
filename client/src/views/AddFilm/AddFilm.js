import React, { useState } from 'react'
import './AddFilm.css'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function AddFilm() {
    const navigate = useNavigate();
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
        const emptyField = Object.entries(film).find(([key, value]) => !value.trim());

        if (emptyField) {
            const [fieldName] = emptyField;
            toast.error(`Please fill in the "${fieldName}" field`);
            return; // stop here if validation fails
        }
        try {
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
            toast.success(response.data.message);
            setTimeout(() => {
                navigate("/");
            }, 1000);

        } catch (err) {
            console.error("Add film failed:", err.response || err);
            toast.error(err?.response?.data?.message || "Something went wrong");
        }
    };

    const handleCancel = () => {
        setTimeout(() => {
            navigate('/');
        }, 1000); // 1 second delay
    };
    return (
        <div >
            <h1 className='add-film-heading'>Add Film</h1>
            <div className='add-film-form'>
                <Input
                    label="Title"
                    value={film.title}
                    onChange={(val) => { setFilms({ ...film, title: val }) }}
                    placeholder={"Enter a title of the film"}
                    required
                />
                <Input
                    label="Short Description"
                    value={film.shortDescription}
                    onChange={(val) => { setFilms({ ...film, shortDescription: val }) }}
                    placeholder={"Enter a short description of the film"}
                    required
                />
                <Input
                    label="Director"
                    value={film.director}
                    onChange={(val) => { setFilms({ ...film, director: val }) }}
                    placeholder={"Enter a director name of the film"}
                    required
                />
                <Input
                    label="Poster"
                    value={film.poster}
                    onChange={(val) => { setFilms({ ...film, poster: val }) }}
                    placeholder={"Enter a URL of the poster"}
                    required
                />
                <Input
                    label="ReleaseYear"
                    value={film.releaseYear}
                    onChange={(val) => { setFilms({ ...film, releaseYear: val }) }}
                    placeholder={"Enter a releaseYear of the film"}
                    required
                />
                <Input
                    label="Category"
                    value={film.category}
                    onChange={(val) => { setFilms({ ...film, category: val }) }}
                    placeholder={"Enter a category of the film"}
                    required
                />
                <Input
                    label="Language"
                    value={film.language}
                    onChange={(val) => { setFilms({ ...film, language: val }) }}
                    placeholder={"Enter a language of the film"}
                    required
                />
                <Input
                    label="Rating"
                    value={film.rating}
                    onChange={(val) => { setFilms({ ...film, rating: val }) }}
                    placeholder={"Enter a rating of the film"}
                    required
                />
                <Input
                    label="Countries"
                    value={film.countries}
                    onChange={(val) => { setFilms({ ...film, countries: val }) }}
                    placeholder={"Enter a countries of the film"}
                    required
                />
                <Input
                    label="Awards"
                    value={film.awards}
                    onChange={(val) => { setFilms({ ...film, awards: val }) }}
                    placeholder={"Enter a awards of the film"}
                    required
                />
                <div className='btn-container'>
                    <Button
                        type="submit"
                        title="Add Film"
                        onClick={() => { addFilm() }}
                        variant="secondary"
                    />
                    <Button
                        title="Cancel"
                        onClick={() => { handleCancel() }}
                        variant="primary"
                    />

                </div>

            </div>
            <Toaster toastOptions={{
                style: {
                    fontSize: '12px',
                    padding: '6px 12px',
                    maxWidth: '200px',
                },
            }} />
        </div>
    )
}

export default AddFilm