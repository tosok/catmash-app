<template>
    <div class="error">
        <b-container>
            <b-row class="text-center">
                <b-col >
                    <img src="../assets/error.png" width="300" img-alt="error" />
                    <h5>Sorry, an error occured. <br>Try later ! :3</h5>
                    <hr>
                    <b-button squared><router-link class="button-reload" :to="{name: 'home'}">RELOAD</router-link></b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Error'
    }
</script>

<style>
    .button-reload {
        color: white;
    }
</style>