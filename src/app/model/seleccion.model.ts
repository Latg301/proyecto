export interface Equipo{

    name: string;
    countryname: string;
    alternativename: string;
    colors: string[];
    wontitles: string[];
    captainName: string;
    coachname: string;
    logo: string;
    abbreviation: string;
    TopScorer: topScorer;
    Estadio: estadio;
    Jugadores: jugador[];

   
}

export interface topScorer{
    name: string;
    number: number;
}

export interface estadio{
    name: string;
    nickname: string;
    location: string;
    capacity: number;

}


export interface jugador{
    nombre: string;
    edad: string;
    altura: string;
    lugarDeNacimiento: string;
    posición: string;
    clubActual: string;
    numeroCamiseta: string;
}

