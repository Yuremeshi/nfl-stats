import React from 'react'
import { SearchResultsProps } from '@/types'
import PlayerCard from './PlayerCard'

const SearchResults = ({ searchlist }: SearchResultsProps) => {
  return (
    <div className="flex flex-col gap-2">
      {searchlist?.map((player) => (
        <PlayerCard player={player} />
      ))}
    </div>
  )
}

export default SearchResults