import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cartas from "../components/Cartas";
const APIPelPopularesCine='https://api.themoviedb.org/3/discover/movie?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&with_genres=';
const APIPelPopularesTv  ='https://api.themoviedb.org/3/discover/tv?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&with_genres=';

const Categorias = () => {
  const [datos, setDatos] = useState([]);
  const params = useParams()
  let tipo="";
  let titulo="";
  let API="";
  
  if(params.tipo=="cine") {
      API=APIPelPopularesCine + params.id;
      titulo="Populares en el Cine";
      tipo="cine";
  } else{   
      API=APIPelPopularesTv+params.id;
      titulo="Populares en TV";
      tipo="tv";
  } 

 
  const getDatos = async () => {  
   
      try {
        const response = await fetch(API);
        const data = await response.json();
        //console.log(data);
        setDatos(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      getDatos();
    }, [params.id]);
  return (
    <>
<div className="hero max-w-screen" style={{backgroundImage: 'url(../cotufas.jpg)'}}>
<div className="hero-overlay bg-opacity-10"></div>
<div className="my-auto container flex flex-center mx-auto">
<div className="grid grid-cols-4 gap-8 flex-center">
    
 {datos && datos.map((pelicula)=>(

<Cartas key={pelicula.id} pelicula={pelicula} tipo={tipo}/>


))}
</div>
</div>
</div>

</>
  )
}

export default Categorias