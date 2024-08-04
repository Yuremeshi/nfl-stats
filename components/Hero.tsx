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
      <div className="flex items-center w-full bg-center bg-cover bg-no-repeat justify-center" style={{ backgroundImage: "url('/background.png')" }}>
        <div className="flex flex-col">
          <h1 className="text-5xl max-w-xl text-center text-white font-serif">
            Unleash your {` `}
            <span className="inline-block relative bg-gradient-to-r from-yellow-300 via-green-400 to-purple-500 text-transparent bg-clip-text">
              Fantasy
              <img
                src="./curve.png"
                className="absolute top-full left-0 w-full xl:mt-2"
                width={300}
                height={28}
                alt="Curve"
              />
            </span>
            <br />
            <br />
            On the road to {` `}
            <span className="text-amber-400">Greatness</span>
          </h1>
          <br />
          <h3 className="font-serif text-center text-xl">
            Take your game to the Next Level with NFL Fantasy Stats.
          </h3>
        </div>
        <img src="./mahomes2.png" alt="Mahomes" />
      </div>
      <div className="flex flex-col pt-8 px-4 items-center sm:px-8 md:px-16 relative max-w-[700px] gap-2">
        <div>        
          <h1 className="text-4xl font-serif">
              Search for your next Gamebreaker
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
      <div className="text-center columns-3">
          <SearchResults searchlist={searchlist} season={season} setSeason={setSeason} team={team} />
      </div>
    </div>
  )
}

export default Hero