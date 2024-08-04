"use client";

import { PlayerDetailsProps } from '@/types'
import React from 'react'
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

const PlayerDetails = ({ isOpen, closeModal, player, categories }: PlayerDetailsProps) => {
    console.log(player);

    const names: string[] = player.name.split(" ");

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-30" onClose={closeModal}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-60"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-60"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="relative w-full overflow-y-auto transform rounded-2xl bg-slate-800
                                p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                                    <div>
                                        <button onClick={closeModal} className="flex items-center justify-center text-white w-8 h-8 text-4xl fixed right-4 top-2 hover:bg-slate-600 rounded-lg p-1 pb-3">
                                            &times;
                                        </button>
                                        <div className="text-white">                                            
                                            {categories && categories.length > 0 ? (
                                                <>
                                                    <div className="flex mb-4 justify-center">
                                                        <Image src={player.image} width={120} height={120} alt="Player Image" />
                                                        <div className="flex flex-col pl-4">
                                                            <h1 className="text-3xl">{names[0]}</h1>
                                                            <h1 className="text-3xl font-semibold">{names[1]}</h1>
                                                            <p className="text-sm">{player.position} - #{player.number}</p>
                                                        </div>
                                                        <div className="ml-6 gap-2">
                                                            <div className="flex gap-2">
                                                                <p className="text-gray-400">HT/WT:</p>
                                                                <p>{player.height}, {player.weight}</p>
                                                            </div>
                                                            <div className="flex gap-2">
                                                                <p className="text-gray-400">Age</p>
                                                                <p>{player.age}</p>
                                                            </div>
                                                            <div className="flex gap-2">
                                                                <p className="text-gray-400">College:</p>
                                                                <p>{player.college}</p>
                                                            </div>
                                                            <div className="flex gap-2">
                                                                <p className="text-gray-400">Experience:</p>
                                                                <p>{player.experience} Years</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            
                                                        </div>
                                                    </div>
                                                    {categories.map((category, categoryIndex) => (
                                                        <>
                                                            <div className="font-bold">{category.displayName}</div>
                                                            <div className="flex">
                                                                <table className="table-fixed whitespace-nowrap text-center">
                                                                    <thead>
                                                                        <tr className="border-y">
                                                                            <th className="px-2">Season</th>
                                                                            <th className="px-2">Team</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {category.statistics.map((statistic, statisticsIndex) => (
                                                                            <tr key={statisticsIndex} className="border-y border-gray-600 gap-4">
                                                                                <td>{statistic.season.year}</td>
                                                                                <td className="flex items-center justify-center"><Image alt="KC" width="30" height="30" title="KC" src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/kc.png&amp;h=40&amp;w=40" />KC</td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                                <table className="table-fixed w-full whitespace-nowrap text-center">
                                                                    <thead>                                                                    
                                                                        <tr key={categoryIndex} className="border-y">
                                                                            {category.labels.map((label, labelsIndex) => (
                                                                                <th key={labelsIndex}>{label}</th>
                                                                            ))}
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {category.statistics.map((statistic, statisticsIndex) => (
                                                                            <tr key={statisticsIndex} className="border-y border-gray-600">                                                                    
                                                                                {statistic.stats.map((stat, statIndex) => (
                                                                                    <td key={statIndex}>{stat}</td>
                                                                                ))}
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </>
                                                    ))}
                                                </>
                                            ) : (
                                                <p>No data available</p>
                                            )}
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default PlayerDetails