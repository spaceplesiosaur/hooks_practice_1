import React, { useState, useEffect } from 'react'
import './Form.css'

const Form = ({makeNewCard}) => {

  const [name, nameSetter] = useState('')
  const [status, statusSetter] = useState('')
  const [interests, interestSetter] = useState('')

  const handleNameChange = (e) => {
    return nameSetter(e.target.value)
  }

  const handleStatusChange = (e) => {
    return statusSetter(e.target.value)
  }

  const handleInterestChange = (e) => {
    return interestSetter(e.target.value)
  }

  const addNewCard = () => {
    makeNewCard({id: Date.now(), name: name, status: status, interests: interests})
  }

  return (
    <section className="form">
      <div className="formBox">
        <label for="name">Name</label>
        <input className="formInput" type="text" name="name" value={name} onChange={handleNameChange}></input>
      </div>
      <div>
        <label for="name">Status</label>
        <input className="formInput" type="text" name="status" value={status} onChange={handleStatusChange}></input>
      </div>
      <div>
        <label for="name">Interests</label>
        <input className="formInput" type="text" name="interests" value={interests} onChange={handleInterestChange}></input>
      </div>
      <button onClick={addNewCard}>Submit</button>
    </section>
  )
}

export default Form;
