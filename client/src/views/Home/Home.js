import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import FilmCard from '../../component/FilmCard/FilmCard'
import toast, { Toaster } from 'react-hot-toast'
function Home() {
  const [films, setFilms] = useState([])

  const loadFilms = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/films`)
      setFilms(response.data.data);
      toast.success(response.data.message);
    }
    catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }

  }
  useEffect(() => {
    loadFilms()
  }, [])

  return (
    <div>
      <h1>Home</h1>
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
      <Toaster />
    </div>
  )
}

export default Home