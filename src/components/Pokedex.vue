<template>
    <h1>POKEDEX PAGE</h1>
</template>

<script>
import api from '../services/api'

export default {
    searchPokemon() {
        api.getPokedex()
            .then(response => {
                console.log('*** RESULTS ***', response)
            })
    }
}
</script>

<style>

</style>