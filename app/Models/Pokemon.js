

export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.user = data.user
    }

get BigActivePokemonTemplate() {
    return /*html*/`
    <div class="col-10 m-auto">
    <div class="row m-auto p-4 bg-light rounded elevation-2 border border-danger border-2 text-center">
      <div>
        <h1 class="fs-3">Bulbasaur</h1>
      </div>
    </div>
    <div class="row m-auto my-5 p-4 text-center">
      <div>
        <img height="140" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur">
      </div>
    </div>
    <div class="row m-auto my-5 p-4 bg-light rounded elevation-2 border border-danger border-2 text-center">
      <span class="col-6 text-start">
        <h1 class="fs-5">Height: </h1>
      </span>
      <span class="col-6 text-end">
        <h1 class="fs-5">Weight: </h1>
      </span>
      <span class="text-start">
        <h1 class="fs-5">Type: </h1>
      </span>
      <div class="text-end">
        <button class="btn btn-outline-danger">Catch!</button>
      </div>
    </div>
  </div>
    
    `
}

    static PokemonListTemplate(pokemon) {
        return  /*html*/`
        <div class="col-12 text-center">
            <button onclick="app.pokemonsController.getPokemonByIndex('${pokemon.index}')" class="mb-3 btn btn-outline-danger w-100 fw-bold">${pokemon.name}</button>
          </div>
        `
    }
}