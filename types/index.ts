export interface FootballFilterProps {
    team: string,
    season: string,
    search: string,
}

export interface SearchTeamProps {
    team: string,
    setTeam: (team: string) => void;
}

export interface SeasonFilterProps {
    season: string,
    setSeason: (season: string) => void;
}

export interface OptionProps {
    title: string;
    value: string;
}