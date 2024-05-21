export interface CircuitProps {
    id: number;
    image: string;
    name: string;
}

export interface LocationProps {
    city: string;
    country: string;
}

export interface CompetitionProps {
    id: number;
    location: LocationProps;
    name: string;
}

export interface RaceProps {
    date: string;
    distance: string;
    id: number;
    season: number;
    status: string;
    timezone: string;
    type: string;
    weather: null | any; // Se o tipo para "weather" for conhecido, substitua "any" pelo tipo apropriado
    circuit: CircuitProps;
    competition: CompetitionProps;
}

export interface RaceItemProps {
    item: RaceProps;

} 