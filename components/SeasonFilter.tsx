"use client";

import { useState, Fragment } from "react";
import { SeasonFilterProps } from "@/types";
import { Listbox, Transition, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import { seasons } from '@/constants';
import Image from "next/image";

const SeasonFilter = ({ season, setSeason }: SeasonFilterProps) => {
  const [ selected, setSelected ] = useState(seasons[0]); 

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={setSelected}
      >
        <div className="relative w-fit">
          <ListboxButton className="relative w-full flex justify-between items-center cursor-default p-1 rounded-sm bg-white text-left shadow-md border; text-black">
            <span className="block truncate">{selected.title}</span>
            <Image 
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron"
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <ListboxOptions
              className="max-h-60 overflow-y-auto absolute w-fit"
              >
              {seasons.map((item) => (
                <ListboxOption
                  key={item.value}
                  value={item}
                  className={({ focus }) => `relative w-full rounded-sm py-[2px] px-1 cursor-pointer ${focus ? "bg-gray-600 text-white" : "bg-gray-700 text-gray-300"}`}
                >
                  {({selected, focus}) => (
                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                      {item.title}
                  </span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default SeasonFilter