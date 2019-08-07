<template>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#"><img id="logo" src="../assets/logo.png" alt="catmash" />
                Cat Mash</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#"><router-link class="nav-link" :to="{name: 'home'}">Voter pour votre chat préféré</router-link>
                    </b-nav-item>
                    <b-nav-item href="#"> <router-link class="nav-link" :to="{name: 'list'}">Afficher la liste</router-link></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
</template>

<script>
    export default {
        name: 'Menu'
    }
</script>

<style>
    #app nav {
        margin-bottom: 50px;
    }

    #logo {
        margin-right: 20px;
    }
</style>
