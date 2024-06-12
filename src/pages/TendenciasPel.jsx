import React, { useEffect, useState } from 'react'
import Cartas from '../components/Cartas';
const API  ='https://api.themoviedb.org/3/trending/movie/day?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE'; 

const TendenciasPel = () => {
    const [datos, setDatos] = useState([]);
    const getDatos = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data);
        setDatos(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      getDatos();
    }, []);
  return (    
<>
<div className="hero max-w-screen" style={{backgroundImage: 'url(../cotufas.jpg)'}}>
<div className="hero-overlay bg-opacity-10"></div>
<div className="my-auto container flex flex-center mx-auto">
<div className="grid grid-cols-4 gap-8 flex-center">
    
 {datos && datos.map((pelicula)=>(

<Cartas key={pelicula} pelicula={pelicula}/>


))}
</div>
</div>
</div>

</>


  )
}

export default TendenciasPel