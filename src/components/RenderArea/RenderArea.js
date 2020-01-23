import React, { Component } from 'react'
import NameCard from '../NameCard/NameCard'
import './RenderArea.css'

export default class RenderArea extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  generateCards = () => {
    return this.props.cards.map((card) => {
      return (<NameCard
              id={Date.now()}
              name={card.name}
              status={card.status}
              interests={card.interests}
              remove={this.props.remove}
            />)
    })
  }
  render() {
    return (
      <section className="renderArea">
        {this.generateCards()}
      </section>
    )
  }
}
