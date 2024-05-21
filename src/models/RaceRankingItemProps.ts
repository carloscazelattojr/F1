interface Driver {
    abbr: string | null;
    id: number;
    image: string;
    name: string;
    number: number;
}

interface Team {
    id: number;
    logo: string;
    name: string;
}

export interface RaceRanking {
    gap: string | null;
    grid: number;
    laps: number;
    pits: number;
    position: number;
    time: string;
    driver: Driver;
    team: Team;
}

export interface RaceRankingsProps {
    errors: any[];
    get: string;
    parameters: {
        race: number;
    };
    response: RaceRanking[];
    results: number;
}