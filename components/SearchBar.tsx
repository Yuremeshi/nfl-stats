"use client";

import Image from 'next/image';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import SearchTeams from './SearchTeams';
import SeasonFilter from './SeasonFilter';
import { getFootballPlayers } from '@/utils';

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
    const [team, setTeam] = useState({
        value: "",
        title: "",
    });
    const [season, setSeason] = useState("");
    const [searchlist, setSearchlist] = useState([]);
    const router = useRouter();

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

    const updateSearchParams = async (search: string, team: string, season: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (search) {
            searchParams.set("search", search)
        } else {
            searchParams.delete("search")
        }

        if (team) {
            searchParams.set("team", team)
        } else {
            searchParams.delete("team")
        }

        if (season) {
            searchParams.set("season", season)
        } else {
            searchParams.delete("season")
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathname, {scroll: false})

        try {
            const players = await getFootballPlayers({
                search: search,
                team: team,
                season: season,
            });

            setSearchlist(players);
            console.log(searchlist);

            // For example, you can update the UI with the fetched data
            // updateUIWithPlayers(players);
        } catch (error) {
            console.error("Error fetching players:", error);
        }
    }

    // function updateUIWithPlayers(players) {
    //     // Implement your logic to update the UI with the players data
    //     console.log("Updating UI with players:", players);
    // }

    return (
        <form className="flex w-full items-center justify-center relative gap-4" onSubmit={handleSearch}>
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
            <SearchTeams team={team} setTeam={setTeam} />
            <SeasonFilter season={season} setSeason={setSeason} />
            <SearchButton otherClasses="" />
        </form>
    )
}

export default SearchBar