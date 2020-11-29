import React from 'react'
import HotdogItem from '../HotdogItem/HotdogItem'
import './HotdogItems.css'

const HotdogItems = ({ hotdogs, fetchData }) => {
  return (
    <div className="hotdogItems">
      {hotdogs.map(hotdog => (
        <HotdogItem key={hotdog.id} hotdog={hotdog} fetchData={fetchData} />
      ))}
    </div>
  )
}

export default HotdogItems
