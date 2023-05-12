import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Glorious Silent Llama</title>
        <meta property="og:title" content="Glorious Silent Llama" />
      </Helmet>
      <h1>Model Implementation</h1>
      <div className="home-container1">
        <label>Give an instruction</label>
        <input type="text" placeholder="placeholder" className="input" />
        <button className="button">Button</button>
      </div>
    </div>
  )
}

export default Home
