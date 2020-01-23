import React, { Component } from 'react';
import Form from '../Form/Form'
import RenderArea from '../RenderArea/RenderArea'
import { getData } from '../../apiCalls.js'
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }
  //no API

  postNewCard = (newCard) => {
    this.setState({cards: [...this.state.cards, newCard]})
  }

  deleteCard = (id) => {
    const shortCardList = this.state.cards.filter(card => {
      return !card.id === id
    })

    this.setState({cards: [...shortCardList]})
  }

  //with API
  //
  // componentDidMount() {
  //   return getData("url", 'thing')
  //   .then(data => data.map((cardInfo) => {
  //     this.setState({cards: [...this.state.cards, cardInfo]})
  //   }))
  // }
  //
  // postNewCard = (newCard) => {
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(
  //       {id: 5, ...newCard}
  //     ),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }
  //
  //   return fetch('url', options)
  //           .then(res => {
  //             if(!res.ok) {
  //               throw Error('Something is not right, try again later')
  //             }
  //             return res.json()})
  //             .then(data => ({cards: [...this.state.cards, data]}))
  // }
  //
  // deleteCard = (id) => {
  //     const options = {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //
  //     fetch(`url/${id}`, options)
  //       .then(() => fetch('url'))
  //       .then(response => response.json())
  //       .then(data => this.setState({cards: [...this.state.cards, data] }))
  //       .catch(error => this.setState({ error: error.message }));
  //   }

  render() {
    return (
      <main className="App">
        <h1>My Anarcho Syndicalist Band</h1>
        <Form
        makeNewCard={this.postNewCard}/>
        <RenderArea
        cards={this.state.cards}
        remove={this.deleteCard}
        />
      </main>
    )
  }

}
