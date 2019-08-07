<template>
  <div class="cat-view">
    <b-container>
      <b-row class="text-center">
        <b-col cols="6" v-for="cat in cats" >
          <b-card :img-src="cat.url" :img-alt="cat.id">
            <b-card-text>{{ cat.rank }} vote(s)</b-card-text>
          </b-card>
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
        cats: []
    }
  },
  created() {
    fetch(process.env.VUE_APP_ROOT_API + "/cats")
      .then(response => response.json())
      .then(json => {
          this.cats = json;
      })
  }
}

</script>

<style>
.card {
  margin-bottom: 30px;
}
</style>