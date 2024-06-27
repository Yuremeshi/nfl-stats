"use client";

import { PlayerCardProps, StatsProps } from '@/types'
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import PlayerDetails from './PlayerDetails';
import { getPlayerStats } from '@/utils';

const PlayerCard = ({ player, season, team }: PlayerCardProps) => {
    const { id, name, number, position, height, image } = player;

    const [isOpen, setIsOpen] = useState(false);

    const [playerStats, setPlayerStats] = useState([]);

    const handleClick = async (id: string,  season: string, team: string) => {
        try {
            const statistics = await getPlayerStats({
                id: id,
                team: team,
                season: season,
            })

            setPlayerStats(statistics.response);
        } catch (error) {
            console.error("Error fetching stats", error);
        }
    }

    useEffect(() => {
        console.log(playerStats);
    }, [playerStats]);

    return (
        <div>
            <div className="border-2 border-white p-3 cursor-pointer" onClick={() => {
                handleClick(id, season, team.value);
                setIsOpen(true);
                }}>
                {number} {name} {position}
            </div>

            <PlayerDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} player={player} stats={playerStats} />
        </div>
    )
}

export default PlayerCard