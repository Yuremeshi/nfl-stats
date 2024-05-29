export interface FootballFilterProps {
    team: string,
    season: string,
    search: string,
}

export interface SearchTeamProps {
    team: {
        value: string,
        title: string,
    },
    setTeam: (team: {
        value: string, 
        title: string,
    }) => void;
}

export interface SeasonFilterProps {
    season: string,
    setSeason: (season: string) => void;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface HomeProps {
    searchParams: FootballFilterProps;
}