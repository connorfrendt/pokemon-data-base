<template>
    <li>
        POKEMON
    </li>
</template>

<script>
import api from '../services/api'

export default {
    props: {
        pokemon: Object
    }
    // methods: {
    //     searchPokedex() {
    //         api.getPokedex()
    //             .then(response => {
    //                 console.log('*** RESULTS ***', response);
    //             })
    //     }
    // }
}
</script>

<style>

</style>
