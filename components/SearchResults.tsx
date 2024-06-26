import React from 'react'
import { SearchResultsProps } from '@/types'
import PlayerCard from './PlayerCard'

const SearchResults = ({ searchlist, team, season }: SearchResultsProps) => {
  return (
    <div className="flex flex-col gap-2">
      {searchlist?.map((player) => (
        <PlayerCard player={player} team={team} season={season} />
      ))}
    </div>
  )
}

export default SearchResults