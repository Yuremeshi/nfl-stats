"use client";

import Image from 'next/image';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import SearchTeams from './SearchTeams';
import SeasonFilter from './SeasonFilter';

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

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [team, setTeam] = useState("");
    const [season, setSeason] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


    }

    return (
        <div className="flex w-full items-center justify-center relative gap-4">
            <div>
                <input 
                    type="text"
                    name="player"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Player Name"
                    className="text-black w-full p-1 rounded-smw-full"
                />
            </div>
            <SearchTeams team={team} setTeam={setTeam} />
            <SeasonFilter season={season} setSeason={setSeason} />
            <SearchButton otherClasses="" />
        </div>
    )
}

export default SearchBar