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

        const teamValue = team?.value || "";

        if (teamValue != "" && season === "") {
            return alert("Please fill in season")
        } else if (teamValue === "" && season != "") {
            return alert("Please fill in team")
        } else if (search === "" && teamValue === "" && season === "") {
            return alert("Please fill in a name and/or team and season")
        }
        
        updateSearchParams(search.toLowerCase(), teamValue.toLowerCase(), season.toLowerCase())
    };

    return (
        <form className="flex w-full items-center justify-center relative gap-4 flex-col sm:flex-row" onSubmit={handleSearch}>
            <div className="sm:w-56">
                <input 
                    type="text"
                    name="player"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Player Name"
                    className="text-black w-full p-1 rounded-sm"
                    autoComplete="off"
                />
            </div>
            <div className="z-20 sm:w-56">
                <SearchTeams team={team} setTeam={setTeam} />
            </div>
            <div className="flex flex-row gap-2">
                <SeasonFilter season={season} setSeason={setSeason} />
                <SearchButton otherClasses="ml-1" />
            </div>
        </form>
    )
}

export default SearchBar