export interface FootballFilterProps {
    team?: string,
    season?: string,
    search?: string,
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
    title: string,
    value: string,
}

export interface HomeProps {
    searchParams: FootballFilterProps;
}

export interface Params {
    team?: string,
    season?: string,
    search?: string,
}

export interface StatParams {
    team?: string,
    season?: string,
    id?: string,
}

export interface SearchBarProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    team: {
        value: string,
        title: string,
    };
    setTeam: React.Dispatch<React.SetStateAction<{value: string, title: string,}>>;
    season: string;
    setSeason: React.Dispatch<React.SetStateAction<string>>;
    updateSearchParams: (search: string, team: string, season: string) => Promise<void>;
}

export interface Player {
    age: number,
    college: string,
    experience: number,
    group: string,
    height: string,
    id: string,
    image: string,
    name: string,
    number: number,
    position: string,
    salary: string,
    weight: string,
}

export interface PlayerStatistics {
    
}

export interface PlayerCardProps {
    player: Player,
    season: string,
    setSeason: React.Dispatch<React.SetStateAction<string>>;
    team: {
        value: string,
        title: string,
    },
}

interface Statistic {
    name: string,
    value: string | number | null,
}

interface Group {
    name: string,
    statistics: Statistic[],
}

interface Team {
    groups: Group[];
}

interface PlayerStat {
    id: number,
    name: string,
    image: string,
    number: string,
    position: string,
}

export interface StatsProps {
    player: PlayerStat,
    teams: Team[],
}

export interface PlayerDetailsProps {
    isOpen: boolean,
    closeModal: () => void;
    player: Player,
    stats: StatsProps[],
}

export interface SearchResultsProps {
    searchlist: Player[],
    season: string,
    setSeason: React.Dispatch<React.SetStateAction<string>>;
    team: {
        value: string,
        title: string,
    },
}

export interface PlayerIdProps {
    id: string,
    team?: string,
    season: string,
}