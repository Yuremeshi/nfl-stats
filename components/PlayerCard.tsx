import { PlayerCardProps } from '@/types'
import React from 'react'

const PlayerCard = ({ player }: PlayerCardProps) => {
    const { id, name, number, position, height } = player;

    return (
        <div>
            <div>
            {number} {name} {position} {height}
            </div>
        </div>
    )
}

export default PlayerCard