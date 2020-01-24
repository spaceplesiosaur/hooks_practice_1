import React, { useState, useEffect } from 'react';
import Form from '../Form/Form'
import RenderArea from '../RenderArea/RenderArea'
import { getData } from '../../apiCalls.js'
import './App.css';

const App = () => {
  const [error, setError] = useState('')
  const [pictureSource, changePicture] = useState('')
  const cardsState = useState([])
  //useState is a function that takes in an initial value for the state and returns a two-element array: the first element is the state, the second element is a function that sets the state.
  const cards = cardsState[0]
  const setCards = cardsState[1]
  //this is getting those two elements out of the array that useState returns and assigning them variables to make our life easier.

  //if we wanted to do this the destructured way, we'd do it like this:

  // const [cards, setCards] = useState([])

  const postNewCard = (newCard) => {
    setCards([...cards, newCard])
  }

  const deleteCard = (id) => {
    const shortCardList = cards.filter(card => {
      return card.id !== id
    })

    setCards(shortCardList)
  }

  const getScreamingFace = async () => {
    const resolution = await getData('https://color-seasons.herokuapp.com/hosts/3/')
    const fetchedPic = resolution.picture

    changePicture(fetchedPic)
  }

  useEffect(() => {
    getScreamingFace()
  }, [])
  //everything in the array is what it depends on to run.  Here it doesn't depend on something, but if it depended on something like a user id, you'd put that prop or piece of state in there and it would change when that changed

  return (
    <main className="App">
      <h1>My GirlSquad</h1>
      <img src={pictureSource} className="screamingPic"></img>
      <Form
      makeNewCard={postNewCard}/>
      <RenderArea
      cards={cards}
      remove={deleteCard}
      />
    </main>
  )
}

export default App
