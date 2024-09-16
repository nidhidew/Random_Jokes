import React, { useState } from 'react'
import Buttons from './Buttons'

const Joke = () => {
    const [Joke, setJoke] = useState("");
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke))
    }
  return (
    <div>
      <Buttons callApi={fetchApi}/>
      <p>{Joke}</p>
    </div>
  )
}

export default Joke
