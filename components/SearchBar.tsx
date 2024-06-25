"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import SearchTeams from './SearchTeams';
import SeasonFilter from './SeasonFilter';
import { getFootballPlayers } from '@/utils';
import { SearchBarProps } from '@/types';

const SearchButton = ({ otherClasses }: {otherClasses: string}) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image 
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={30}
            height={30}
            className="object-contain"
        />
    </button>
)

const SearchBar = ({ search, setSearch, team, setTeam, season, setSeason, updateSearchParams }: SearchBarProps) => {
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (team.value != "" && season === "") {
            return alert("Please fill in season")
        } else if (team.value === "" && season != "") {
            return alert("Please fill in team")
        } else if (search === "" && team.value === "" && season === "") {
            return alert("Please fill in a name and/or team and season")
        }

        updateSearchParams(search.toLowerCase(), team.value.toLowerCase(), season.toLowerCase())
    };

    

    // function updateUIWithPlayers(players) {
    //     // Implement your logic to update the UI with the players data
    //     console.log("Updating UI with players:", players);
    // }

    return (
        <form className="flex w-full items-center justify-center relative gap-4 flex-col sm:flex-row" onSubmit={handleSearch}>
            <div>
                <input 
                    type="text"
                    name="player"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Player Name"
                    className="text-black w-full p-1 rounded-smw-full"
                    autoComplete="off"
                />
            </div>
            <div className="z-20">
                <SearchTeams team={team} setTeam={setTeam} />
            </div>
            <div className="flex flex-row gap-2">
                <SeasonFilter season={season} setSeason={setSeason} />
                <SearchButton otherClasses="" />
            </div>
        </form>
    )
}

export default SearchBar