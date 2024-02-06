import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import {action,trending,horrorMovies } from "./constants/url";

function App() {
  return (
    <div>
    <Navbar/>  
    <Banner/>
    <Rowpost url={trending}title="Trending"isSmall={true}/>
    <Rowpost url={action}title="Actions" isSmall={true}/>
    <Rowpost url={horrorMovies}title="Horror" isSmall={true}/>
    </div>
  )
}

export default App
