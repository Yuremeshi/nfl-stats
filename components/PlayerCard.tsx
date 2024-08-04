"use client";

import { PlayerCardProps } from '@/types'
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import PlayerDetails from './PlayerDetails';
import { fetchESPNStats, getPlayerStats } from '@/utils';

const PlayerCard = ({ player, season, setSeason, team }: PlayerCardProps) => {
    const { id, name, number, position, height, image } = player;

    const [isOpen, setIsOpen] = useState(false);

    const [playerStats, setPlayerStats] = useState([]);

    const handleClick = async (id: string,  season: string, team: string) => {
        try {
            const statistics = await fetchESPNStats({
                id: "3139477",
            })

            console.log('stats', statistics)
            setPlayerStats(statistics['categories']);
        } catch (error) {
            console.error("Error fetching stats", error);
        }
    }

    return (
        <div>
            <div className="border-2 border-gray-400 p-3 cursor-pointer mb-2 rounded-md" onClick={() => {
                handleClick(id, season, team.value);
                setIsOpen(true);
                }}>
                {number} {name} {position}
            </div>

            <PlayerDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} player={player} categories={playerStats} />
        </div>
    )
}

export default PlayerCard