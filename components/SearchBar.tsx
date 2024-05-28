"use client";

import Image from 'next/image';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import SearchTeams from './SearchTeams';

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
    const router = useRouter();

    return (
        <div className="flex w-full items-center justify-center relative gap-4">
            <SearchTeams team={team} setTeam={setTeam} />
            <SearchButton otherClasses="" />
        </div>
    )
}

export default SearchBar