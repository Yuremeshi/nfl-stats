import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { links } from '@/constants'

const Header = () => {
  return (
    <header className="w-full z-10 sticky top-0 left-0 right-0 bg-slate-900">
        <nav className="flex justify-between items-center mx-6 py-4 rounded-md">
            <Link href="/" className="flex justify-center items-center hover:opacity-70">
                <Image 
                    src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg"
                    alt="NFL logo"
                    width={50}
                    height={60}
                />
                <p className="text-white text-3xl font-semibold font-serif">
                    Stats
                </p>
            </Link>
            <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="text-2xl text-white font-serif hover:opacity-70">Leagues</MenuButton>
                <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    <MenuItems anchor="bottom" className="z-20 w-24 rounded-md border border-white/5 bg-gray-500 text-sm/6 py-1 text-white focus:outline-none">
                        {links.map((link) => (
                            <MenuItem key={link.href}>
                                <a href={link.href} className="block data-[focus]:bg-gray-400 w-full text-left pl-1 m-0">{link.label}</a>
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Transition>
            </Menu>
        </nav>
    </header>
  )
}

export default Header