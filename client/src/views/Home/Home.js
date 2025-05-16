import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import FilmCard from '../../component/FilmCard/FilmCard'
import toast, { Toaster } from 'react-hot-toast'
import imgAddFilm from './../../Assets/add.png';
import { useNavigate } from 'react-router-dom'


function Home() {
  const [films, setFilms] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const loadFilms = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/films`)
        setFilms(response.data.data);
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      catch (e) {
        toast.error(e?.response?.data?.message || e.message);
      }

    }

    loadFilms()
  }, [])

  return (
    <div className='home-container'>
      <h1 className='home-heading'>Fuji-Film</h1>
      {
        films.map((film) => {
          const {
            _id,
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
          } = film;

          return (
            <FilmCard
              key={_id}
              _id={_id}
              title={title}
              shortDescription={shortDescription}
              director={director}
              poster={poster}
              releaseYear={releaseYear}
              category={category}
              language={language}
              rating={rating}
              countries={countries}
              awards={awards}
            />
          );
        })

      }
      <Toaster
        toastOptions={{
          style: {
            fontSize: '12px',
            padding: '6px 12px',
            maxWidth: '200px',
          },
        }}
      />
      <img src={imgAddFilm} className='imgAddFilm' alt='addimage' onClick={() => { navigate(`/addfilm`) }} />
    </div>
  )
}

export default Home