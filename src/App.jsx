import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import CardsBox from './components/CardsBox'
import Header from './components/Header'
import Search from './components/Search'
import useFetch from './hooks/useFetch'

function App() {

  let num = Math.floor(Math.random() * 126)

  const planet = useFetch(`https://rickandmortyapi.com/api/location/${num}`)


  return (
    <div className="App">
      <Header />
      <section id='main'>
      {planet &&  <Search planet={planet} />}
        {planet && <CardsBox planet={planet} />}
      </section>
    </div>
  )
}

export default App
