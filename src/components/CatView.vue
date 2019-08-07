<template>
  <div class="cat-view">
    <b-container v-if="!loading">
      <b-row class="text-center">
        <b-col cols="6" v-for="cat in cats" >
          <b-card :img-src="cat.url" :img-alt="cat.id">
            <b-card-text>{{ cat.rank }} vote(s)</b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-if="loading">
      <b-row class="text-center">
        <b-col>
          <b-spinner id="spinner" type="grow" label="Spinning"></b-spinner><br>
          Chargement...
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'CatView',
  data() {
    return {
        cats: [],
        loading: true
    }
  },
  created() {
    fetch(process.env.VUE_APP_ROOT_API + "/cats")
      .then(response => response.json())
      .then(json => {
          this.cats = json;
          this.loading = false;
      })
      .catch( () => this.$router.push('/error'))
  }
}

</script>

<style>
.card {
  margin-bottom: 30px;
}
</style>