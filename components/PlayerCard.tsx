import { PlayerCardProps } from '@/types'
import React from 'react'

const PlayerCard = ({ player }: PlayerCardProps) => {
    const { id, name, number, position, height } = player;

    return (
        <div>
            <div className="border-2 border-white p-3">
                {number} {name} {position} {height}
            </div>
        </div>
    )
}

export default PlayerCard