"use client";

import React, { useState, useEffect } from 'react'
import { SearchBar, SearchResults } from "./";
import { useRouter } from 'next/navigation';
import { getFootballPlayers } from '@/utils';

const Hero = () => {
  const [search, setSearch] = useState("");
  const [team, setTeam] = useState({
      value: "",
      title: "",
  });
  const [season, setSeason] = useState("");
  const [searchlist, setSearchlist] = useState([]);
  const router = useRouter();

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

        setSearchlist(players.response);
        // For example, you can update the UI with the fetched data
        // updateUIWithPlayers(players);
    } catch (error) {
        console.error("Error fetching players:", error);
    }
  }

  useEffect(() => {
      console.log(searchlist);
  }, [searchlist]);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex flex-col px-4 items-center sm:px-8 md:px-16 relative max-w-[700px] gap-2">
        <div>        
          <h1 className="text-4xl">
              Search for Stats
          </h1>
        </div>
        <SearchBar
          search={search} 
          setSearch={setSearch} 
          team={team} 
          setTeam={setTeam} 
          season={season} 
          setSeason={setSeason} 
          updateSearchParams={updateSearchParams}
        />
      </div>
      <div className="w-96">
          <SearchResults searchlist={searchlist} season={season} team={team} />
      </div>
    </div>
  )
}

export default Hero