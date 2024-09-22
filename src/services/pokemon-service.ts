import Pokemon from "../models/pokemon";


export default class PokemonService {
    static getPokemons(): Promise<Pokemon[]> {
        return fetch('http://localhost:3001/pokemons')
            .then(response => response.json())
            .catch(this.handleError);
    }

    static async getPokemon(id: number): Promise<Pokemon | null> {
        return fetch(`http://localhost:3001/pokemons/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null : data)
            .catch(this.handleError);
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(response: Error): void {
        console.error(response);
    }

    static deletePokemon(id: number): Promise<{}> {
        return fetch(`http://localhost:3001/pokemons/${id}`, {method: 'DELETE'})
            .then(response => response.json())
            .catch(this.handleError);
    }

    static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
        return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pokemon)
        })
            .then(response => response.json())
            .catch(this.handleError);
    }

    static addPokemon(pokemon: Pokemon): Promise<Pokemon> {
        delete pokemon.created;

        return fetch(`http://localhost:3001/pokemons`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pokemon)
        })
            .then(response => response.json())
            .catch(this.handleError);
    }

    static searchPokemon(term: string): Promise<Pokemon[]> {
        console.log(term);
        return fetch(`http://localhost:3001/pokemons?q=${term}`)
            .then(response => response.json())
            .catch(this.handleError);
    }
}