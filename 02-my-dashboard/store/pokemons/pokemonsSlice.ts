import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon }
}

// const getInitialState = (): PokemonsState => {
//     // if (typeof localStorage === 'undefined') return {};

//     const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
//     return favorites;
// }

const initialState: PokemonsState = {
    favorites: {}
    // ...getInitialState(),
    // '1': {
    //     id: '1',
    //     name: 'bulbasaur',
    // },
    // '2': {
    //     id: '2',
    //     name: 'ivysaur',
    // },
    // '3': {
    //     id: '3',
    //     name: 'venusaur',
    // },
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toogleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
            const pokemon = action.payload;
            if (state.favorites[pokemon.id]) {
                delete state.favorites[pokemon.id];
            } else {
                state.favorites[pokemon.id] = pokemon;
            }

            //! Don't do this in a real app
            localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))

        },

        setFavouritePokemons: (state, action: PayloadAction<{ [key: string]: SimplePokemon }>) => {
            state.favorites = action.payload;
        }
    }
});

export const { toogleFavorite, setFavouritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer