import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header/Header'
import HotdogItems from './components/HotdogItems/HotdogItems'
import './App.css'

function App() {
  const [hotdogs, setHotdogs] = useState([])

  const fetchData = () => {
    axios('https://hot-dogs-store.herokuapp.com/api/hotdogs')
      .then(data => setHotdogs(data.data))
      .catch(err => console.log(err.message))
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="App">
      <Header fetchData={fetchData} />
      <h4 className="title">All hot-dogs</h4>
      <HotdogItems hotdogs={hotdogs} fetchData={fetchData} />
    </div>
  )
}

export default App
