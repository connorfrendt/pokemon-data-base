<template>
    <li>
        <h3>{{pokemon.pokemon}}</h3>
        <img v-bind:src="pokemon.url_image" />
    </li>
</template>

<script>

export default {
    props: {
        pokemon: Object
    }
}
</script>

<style>
    img {
        height: 100px;
    }
</style>
