import React, { useState } from 'react'
import './HotdogItem.css'
import axios from 'axios'

const HotdogItem = ({ hotdog, fetchData }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState(hotdog.name)
  const [price, setPrice] = useState(hotdog.price)
  const [description, setDescription] = useState(hotdog.description)
  const [image, setImage] = useState(hotdog.image)

  const handleEdit = () => {
    setIsEdit(true)
  }

  const handleDelete = () => {
    axios.delete(`https://hot-dogs-store.herokuapp.com/api/hotdogs/${hotdog.id}`).then(() => {
      fetchData()
    })
  }

  const handleUpgrade = () => {
    if (name && image) {
      axios
        .put(`https://hot-dogs-store.herokuapp.com/api/hotdogs/${hotdog.id}`, {
          name,
          price,
          description,
          image
        })
        .then(() => {
          fetchData()
          setIsEdit(false)
        })
        .catch(() => alert('Name and image must be unique'))
    } else {
      alert('Name and image must be filled')
    }
  }

  return (
    <div className="hotdogItem">
      <img src={image} alt="Invalid link" className="image" />
      {isEdit ? (
        <div>
          <input
            type="text"
            className="edit__input"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
          <input
            type="text"
            className="edit__input"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            className="edit__input"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <textarea
            className="edit__description"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
          <button className="edit__button" onClick={handleUpgrade}>
            Upgrade
          </button>
          <button className="edit__button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      ) : (
        <div>
          <h2 className="name">{name}</h2>
          <div className="price">{price}$</div>
          <div className="description">{description}</div>
          <button className="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  )
}

export default HotdogItem
