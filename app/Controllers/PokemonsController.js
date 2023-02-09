import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"
import { pokemonsService } from "../Services/PokemonsService.js"



function _drawPokemons() {
    let template = ''
    appState.pokemons.forEach(p => template += Pokemon.PokemonListTemplate(p))
    setHTML('wild-pokemon', template)
}

function _drawPokemon() {
    if(appState.pokemon) {
        setHTML('wild', appState.pokemon.BigActivePokemonTemplate)
    }
}

export class PokemonsController {
    constructor() {
        this.getPokemons()
        appState.on('pokemons', _drawPokemons)
        appState.on('pokemon', _drawPokemon)
    }

    async getPokemons() {
        try {
            await pokemonsService.getPokemons()
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }

    async getPokemonByIndex(index) {
        try {
            await pokemonsService.getPokemonByIndex(index)
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }
}