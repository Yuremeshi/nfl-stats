import { FootballFilterProps } from "@/types";

const axios = require('axios');

const apiKey = process.env.API_KEY

export async function getFootballPlayers(filters: FootballFilterProps) {
    const { team, season, search } = filters;

    const options = {
    method: 'GET',
    url: `{https://api-american-football.p.rapidapi.com/players?team=${team}&season=${season}&search=${search}}`,
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}