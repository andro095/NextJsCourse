import { PokemonFavorites } from "@/pokemons";
import { cacheTag } from "next/cache";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
    title: 'Pokemons Favourites',
    description: 'Pokemons Favourites',
}


export default async function PokemonsPage() {
    // 'use cache';

    // cacheTag('pokemons');

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemons Favourites <small className="text-blue-500">Global state</small></span>
            <PokemonFavorites />
        </div>
    );
}

