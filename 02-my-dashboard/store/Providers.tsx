'use client';

import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { setFavouritePokemons } from "./pokemons/pokemonsSlice";

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
        //     return favorites;

        store.dispatch(setFavouritePokemons(favorites));
    }, [])


    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};