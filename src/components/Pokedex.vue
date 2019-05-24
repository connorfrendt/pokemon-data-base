<template>
    <div>
        <h1 id='poke-page'>POKEDEX PAGE</h1>
        <ul>
            <Pokemon v-for="pokemon in pokemons"
                v-bind:key="pokemon.pokemon"
                v-bind:pokemon="pokemon" />
        </ul>
    </div>
</template>

<script>
import Pokemon from './Pokemon.vue'

export default {
    props: {
        pokemons: Array
    },
    components: {
        Pokemon
    }
};
</script>

<style>
#poke-page {
    text-align: center;
    background: white;
    border-radius: 5px;
}
</style>