import { RESTDataSource } from "@apollo/datasource-rest";

export class PokemonAPI extends RESTDataSource {
    override baseURL = "https://pokeapi.co/api/v2";

    async getByName(name: string) {
        return this.get(`pokemon-species/${encodeURIComponent(name)}`);
    }
}
