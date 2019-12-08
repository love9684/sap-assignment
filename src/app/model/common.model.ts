export interface CharacterResponse {
    results: Character[];
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    created: string;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
}
