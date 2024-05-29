import React from 'react'
import { SearchBar } from "./";

const Hero = () => {
  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-16 relative">
      <div>        
        <h1 className="text-4xl">
            Search for Stats
        </h1>
      </div>
      <SearchBar />
    </div>
  )
}

export default Hero