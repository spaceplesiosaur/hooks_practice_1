import React, { Component } from 'react'
import NameCard from '../NameCard/NameCard'
import './RenderArea.css'

const RenderArea = ({cards, remove}) => {

  const generateCards = () => {
    return cards.map((card) => {
      return (<NameCard
              id={card.id}
              name={card.name}
              status={card.status}
              interests={card.interests}
              remove={remove}
            />)
    })
  }

  return (
    <section className="renderArea">
      {generateCards()}
    </section>
  )
}

export default RenderArea
