export default {
    getPokedex() {
        return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`)
            .then(response => response.json());
    }
};