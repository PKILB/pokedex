import {appState} from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { pokeApi } from "./Axios.js"


class PokemonsService {
async getPokemonByIndex(index) {
    const res = await pokeApi.get(index)
    console.log('[get by index]', res.data)
    appState.pokemon = new Pokemon(res.data)
    console.log('i see the pokemon!', appState.pokemon)
}


async getPokemons() {
const res = await pokeApi.get()
appState.pokemons = res.data.results
}
}

export const pokemonsService = new PokemonsService()