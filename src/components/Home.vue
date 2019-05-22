<template>
    <div>
        <Header />
        <h1>Pokémon DataBase HOME</h1>
        <Pokedex />
    </div>
</template>

<script>
import api from '../services/api.js';
import Pokedex from './Pokedex';
import Header from './Header'

export default {
    components: {
        Header,
        Pokedex
    }
}
</script>


<style></style>