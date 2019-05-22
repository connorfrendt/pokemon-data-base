<template>
    <div>
        
    </div>
</template>

<script>
import api from '../services/api'

export default {
    methods: {
        searchPokedex() {
            api.getPokedex()
                .then(response => {
                    console.log('*** RESULTS ***', response);
                })
        }
    }
}
</script>

<style>

</style>
