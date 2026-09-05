import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { cacheTag } from "next/cache";

export const metadata = {
    title: 'Pokemons List',
    description: 'Pokemons List',
}

const getPokemons = async (limit: number = 20, offset: number = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));

    // throw new Error('Something went wrong');

    return pokemons;
}

export default async function PokemonsPage() {
    'use cache';

    cacheTag('pokemons');

    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemons List <small className="text-blue-500">static</small></span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}