import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(../cotufas.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <hr />
    <br />
      <h1 className="mb-5 text-5xl font-bold text-primary">Las Mejores Series Y Peliculas </h1>
      <p className="mb-5 font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <hr />
      <br />
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero