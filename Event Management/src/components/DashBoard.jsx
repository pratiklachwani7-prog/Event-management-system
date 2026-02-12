import React from 'react'
import Cards from './Cards'

const DashBoard = () => {
  return (
    <>
      <h1>Discover Events</h1>
      <div className="cardContainer">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  )
}

export default DashBoard
