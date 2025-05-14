import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
function Home() {
  const[films,setFilms]=useState([])

  const loadFilms=async()=>{
    try{
    const response = await axios.get(`http://localhost:5000/films`)
    setFilms(response.data.data);
    toast.success(response.data.message);
    }
    catch(e){
      toast.error(e.response.data.message||e.message);
    }
  
  }
  useEffect(()=>{
    loadFilms()
  },[])

  return (
    <div>
      <h1>Home</h1>
      <Toaster />
    </div>
  )
}

export default Home