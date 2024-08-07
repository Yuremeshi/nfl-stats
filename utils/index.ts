import { FootballFilterProps, Params, PlayerIdProps, StatParams, ESPNFiltersProps } from "@/types";
const axios = require('axios');

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export async function getFootballPlayers(filters: FootballFilterProps) {
    const { team, season, search } = filters;

    const options = {
        method: 'GET',
        url: "https://api-american-football.p.rapidapi.com/players",
        params: (() => {
            const params: Params = {};
            if ( team !== "" && season !== "" && search !== "" ) {
                params.team = team;
                params.season = season;
                params.search = search;
            } else if ( team == "" && season == "" && search !== "" ) {
                params.search = search;
            } else if ( team !== "" && season !== "" && search == "" ) {
                params.team = team;
                params.season = season;
            }
            return params;
        })(),
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const data = await response.data;

        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getPlayerStats(filters: PlayerIdProps) {
    const { id, team, season } = filters;

    const options = {
        method: 'GET',
        url: "https://api-american-football.p.rapidapi.com/players/statistics",
        params: (() => {
            const params: StatParams = {};
            if ( team !== "" && season !== "" && id !== "" ) {
                params.team = team;
                params.season = season;
                params.id = id;
            } else if ( team == "" && season == "" && id !== "" ) {
                params.season = "2023";
                params.id = id;
            } else if (team == "" && season !== "" && id !== "") {
                params.season = season;
                params.id = id;
            }
            return params;
        })(),
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const data = await response.data;

        return data;
    } catch (error) {
        console.error(error);
    }
}

//ESPN API https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/3139477/stats?region=us&lang=en&contentorigin=espn
// 3139477 is the id for the athlete.
// How do I make the API call...?

export async function fetchESPNStats(ESPNFilters: ESPNFiltersProps) {
    const { id } = ESPNFilters

    const response = await fetch(`https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${id}/stats?region=us&lang=en&contentorigin=espn`)

    const result = await response.json();
    
    return result;
}