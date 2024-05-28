import React from 'react'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-16 relative">
        <h1 className="text-4xl">
            Search for Stats
        </h1>
        <SearchBar />
    </div>
  )
}

export default Hero