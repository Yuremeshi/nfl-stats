export interface FootballFilterProps {
    team: string,
    season: string,
    search: string,
}

export interface SearchTeamProps {
    team: string,
    setTeam: (team: string) => void;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface OptionProps {
    title: string;
    value: string;
}