import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import './Header.css'

function Header({ fetchData }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://images.ichkoche.at/data/image/variations/365x283/6/default-img-58120.jpg"
          alt="logo"
          className="header__left__logo"
        />
        <div className="header__left__text">CRUD</div>
      </div>
      <div className="header__right">
        <div className="header__right__create" onClick={() => setIsOpen(true)}>
          Add hot-dog
        </div>
        <Modal
          fetchData={fetchData}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  )
}

export default Header
