import React from 'react'
import Cards from './Cards'
import SectionBar from './SectionBar'

const DashBoard = () => {
  return (
    <>
      <h1>Discover Events</h1>
      <SectionBar />
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
