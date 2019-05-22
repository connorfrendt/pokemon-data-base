<template>
    <div>
        <h1 id='poke-page'>POKEDEX PAGE</h1>
        <Pokemon />
    </div>
</template>

<script>

import Pokemon from './Pokemon'

export default {
    components: {
        Pokemon
    }
}
</script>

<style>
#poke-page {
    text-align: center;
    background: white;
    border-radius: 5px;
}
</style>