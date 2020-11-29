import axios from 'axios'
import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ onClose, open, fetchData }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = () => {
    axios.post('https://intense-ocean-79745.herokuapp.com/api/hotdogs', {
      name,
      price,
      description,
      image
    }).then(() => fetchData())
  }

  if (!open) return null

  return (
    <div className="modal">
      <h5 className="title">Add new hot-dog</h5>
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          required
          onChange={e => setName(e.target.value)}
          className="input"
        />
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          required
          onChange={e => setPrice(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Description"
          onChange={e => setDescription(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Image"
          required
          onChange={e => setImage(e.target.value)}
          className="input"
        />
        <div className="modal__buttons">
          <button onClick={onClose} className="modal__button">
            No Thanks
          </button>
          <button
            className="modal__button"
            onClick={() => {
              handleSubmit()
              onClose()
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
