"use client";

import { PlayerDetailsProps } from '@/types'
import React from 'react'
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

const PlayerDetails = ({ isOpen, closeModal, player }: PlayerDetailsProps) => {
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
                            <DialogPanel className="relative w-full overflow-y-auto transform rounded=2xl bg-slate-800
                            p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                                <div>
                                    {player.number} {player.name}
                                    <Image src={player.image} width={100} height={100} alt="Player Image" />
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