import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import CardsBox from './components/CardsBox.jsx'
import Header from './components/Header.jsx'
import Search from './components/Search'

function App() {
  const [randomPlanet, setRandomPlanet] = useState()
  const [planet, setPlanet] = useState()

  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/location/'
    axios.get(url)
      .then(res => (
        setRandomPlanet(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random() * res?.data?.results.length)}`)))
      .catch(err => console.log(err))

  }, [])

  useEffect(() => {
    if (randomPlanet) {
      axios.get(randomPlanet)
        .then(res => (setPlanet(res.data)))
    }
  }, [randomPlanet])

  // console.log(planet)


  return (
    <div className="App">
      <Header />
      <section id='main'>
        <Search planet={planet} />
        {planet && <CardsBox planet={planet} />}
      </section>
    </div>
  )
}

export default App
