"use client";

import { useState, Fragment } from "react";
import { SearchTeamProps } from "@/types";
import { teams } from "@/constants";
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";
import { timeStamp } from "console";

const SearchTeams = ({ team, setTeam }: SearchTeamProps) => {
    const [query, setQuery] = useState("");

    const filteredTeams = query === "" ? teams : teams.filter((item) => (
        item.title.toLowerCase().includes(query.toLowerCase())
    ));

    return (
        <div className="flex-1 max-sm:w-full flex justify-start items-center">
            <Combobox value={team} onChange={setTeam} immediate={true}>
                <div className="relative w-full">
                    <ComboboxInput
                        placeholder="NFL Team"
                        displayValue={(team: { title: string, value: string }) => team?.title || ""}
                        onChange={(e) => setQuery(e.target.value)}
                        className="text-black w-full p-1 rounded-sm"
                    />

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="scale-95 opacity-0"
                        enterTo="scale-100 opacity-100"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        afterLeave={() => setQuery("")}
                    >
                        <ComboboxOptions className="max-h-60 overflow-y-auto absolute w-full">
                            {
                                filteredTeams.map((item) => (
                                    <ComboboxOption
                                        key={item.value}
                                        className={({ focus }) => `relative w-full rounded-sm py-[2px] px-1 cursor-pointer ${focus ? "bg-gray-600 text-white" : "bg-gray-700 text-gray-300"}`}
                                        value={item}
                                    >
                                        {({ selected, focus }) => (
                                            <div className={`${focus ? "group flex gap-2" : ""}`}>
                                                {item.title}
                                            </div>
                                        )}
                                    </ComboboxOption>
                                ))
                            }
                        </ComboboxOptions>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchTeams