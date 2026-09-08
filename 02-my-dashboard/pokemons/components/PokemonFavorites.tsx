'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const PokemonFavorites = () => {
    const storedPokemons = useAppSelector(state => Object.values(state.pokemons.favorites));

    // const [pokemons, setPokemons] = useState(storedPokemons);

    // useEffect(() => {
    //     setPokemons(storedPokemons);
    // }, [storedPokemons])

    return (
        <>
            {
                storedPokemons.length
                    ? <PokemonGrid pokemons={storedPokemons} />
                    : <NoFavorites />
            }
        </>
    );
};

export const NoFavorites = () => {
    return (
        <div
            className="flex flex-col h-[50vh] items-center justify-center"
        >
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No favorites</span>
        </div>
    )
}