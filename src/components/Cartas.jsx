import React from 'react'
const ruta = "https://image.tmdb.org/t/p/w500";
const Cartas = ({pelicula}) => {
  return (
    <>
    
  <div className="card w-96 glass my-6">
  <div className='object-fill h-auto'>
  <figure><img className='object-fill' src={ruta+pelicula.poster_path} alt="car!"/></figure>
  </div>
  <div className="card-body">
    <h2 className="card-title">{pelicula.title}{pelicula.original_name}</h2>
    <p>Votos de la comunidad: <span className='text-green-700 font-bold'>{pelicula.vote_average}</span></p>
    </div>
    <div className="card-actions justify-end"></div>
    <button className="btn btn-primary">Ver</button>
    
    
  </div>
  
  </>


  )
}

export default Cartas