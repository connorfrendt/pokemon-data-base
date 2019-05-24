<template>
    <div>
        <Header />
        <h1>Pokémon DataBase HOME</h1>
        <Pokedex v-bind:pokemons="pokemons"/>
    </div>
</template>

<script>
import Pokedex from './Pokedex.vue';
import Header from './Header.vue'
import pokemons from '../services/pokedex.js'
// import api from '../services/api.js'

export default {
    data() {
        return {
            pokemons
        }
    },
    components: {
        Header,
        Pokedex
    }
}
</script>


<style></style>