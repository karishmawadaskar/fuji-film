import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditFilm.css'
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';
import toast, { Toaster } from 'react-hot-toast';
import './../../component/FilmCard/FilmCard.css';

function EditFilm() {
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
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const loadFilmDetails = async () => {
    if (!id) return;
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/films/${id}`);
    setFilms(response.data.data);
  };

  useEffect(() => {
    loadFilmDetails();
  }, []);

  const updateFilm = async () => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/films/${id}`, {
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
       setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (err) {
      console.error(err);
      toast.error("Failed to update film");
    }
  };

  return (
    <div>
      <h1 className='edit-film-heading'>Edit Film</h1>
      <div className='add-film-form'>
        <Input label="Title" value={film.title} onChange={(val) => setFilms({ ...film, title: val })} placeholder="Enter a title of the film" required/>
        <Input label="Short Description" value={film.shortDescription} onChange={(val) => setFilms({ ...film, shortDescription: val })} placeholder="Enter a short description of the film" required/>
        <Input label="Director" value={film.director} onChange={(val) => setFilms({ ...film, director: val })} placeholder="Enter a director name of the film" required />
        <Input label="Poster" value={film.poster} onChange={(val) => setFilms({ ...film, poster: val })} placeholder="Enter a URL of the poster" required/>
        <Input label="ReleaseYear" value={film.releaseYear} onChange={(val) => setFilms({ ...film, releaseYear: val })} placeholder="Enter a release year" required/>
        <Input label="Category" value={film.category} onChange={(val) => setFilms({ ...film, category: val })} placeholder="Enter a category" required/>
        <Input label="Language" value={film.language} onChange={(val) => setFilms({ ...film, language: val })} placeholder="Enter a language" required/>
        <Input label="Rating" value={film.rating} onChange={(val) => setFilms({ ...film, rating: val })} placeholder="Enter a rating" required/>
        <Input label="Countries" value={film.countries} onChange={(val) => setFilms({ ...film, countries: val })} placeholder="Enter countries"required />
        <Input label="Awards" value={film.awards} onChange={(val) => setFilms({ ...film, awards: val })} placeholder="Enter awards" required/>

        <div className='btn-container'>
          <Button title="Update Film" onClick={updateFilm} variant="secondary" />
        </div>
      </div>
      <Toaster toastOptions={{
          style: {
            fontSize: '12px',
            padding: '6px 12px',
            maxWidth: '200px',
          },
        }}/>
    </div>
  );
}

export default EditFilm;
