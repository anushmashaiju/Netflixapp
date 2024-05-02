import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import {action,trending,horrorMovies, documentary, romanticMovies, comedyMovies, animation, crime } from "./constants/url";


function App() {
  return (
    <div> 
  
    <Navbar/>  
    <Banner/>
    <Rowpost url={trending}title="Trending"isSmall={false}/>
    <Rowpost url={action}title="Actions" isSmall={true}/>
    <Rowpost url={horrorMovies}title="Horror" isSmall={true}/>  
    <Rowpost url={comedyMovies}title="Comedy" isSmall={true}/>
    <Rowpost url={romanticMovies}title="Romance" isSmall={true}/>
    <Rowpost url={documentary}title="Documentary" isSmall={true}/>
    <Rowpost url={crime}title="Crime" isSmall={true}/>
    <Rowpost url={animation}title="Animation" isSmall={true}/>
    </div>
  )
}

export default App
