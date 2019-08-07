<template>
  <div class="poll">
    <b-container v-if="!loading">
      <div class="d-none d-md-block">
        <b-row class="text-center">
          <b-col md="5" >
            <b-card v-on:click="vote(cat1.id)" :img-src="cat1.url" :img-alt="cat1.id">
              <b-card-text>Miaou +1</b-card-text>
            </b-card>
          </b-col>
          <b-col md="2">
             <img class="img-vs-cat lg" height="275" src="../assets/vs.png"/>
          </b-col>
          <b-col md="5">
            <b-card v-on:click="vote(cat2.id)" :img-src="cat2.url" :img-alt="cat2.id">
              <b-card-text>Miaou +1</b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row v-if="msg" id="msg" class="text-center">
          <b-col offset="3" cols="5" >
            <div class="alert alert-success" role="alert">
              {{ msg }}
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="d-md-none">
        <b-row class="text-center ">
          <b-col md="4" >
            <b-card img-height="200" v-on:click="vote(cat1.id)" :img-src="cat1.url" :img-alt="cat1.id">
              <b-card-text>Miaou +1</b-card-text>
            </b-card>
          </b-col>
          <b-col md="2">
            <img class="img-vs-cat md" width="50" src="../assets/vs.png"/>
          </b-col>
          <b-col md="4">
            <b-card img-height="200" v-on:click="vote(cat2.id)" :img-src="cat2.url" :img-alt="cat2.id">
              <b-card-text>Miaou +1</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>
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
  name: 'CatPoll',
  data() {
    return {
        cat1: {},
        cat2: {},
        msg: null,
        loading: true
    }
  },
  created() {
    this.load();
  },
  methods: {
      load: function() {
          this.loading = true;
          fetch(process.env.VUE_APP_ROOT_API + "/cats/random")
              .then(response => response.json())
              .then(json => {
                  this.cat1 = json[0];
                  this.cat2 = json[1];
                  this.loading = false;
              })
              .catch( () => this.$router.push('/error'))
      },
      vote: function (id) {
          this.msg = null;
          this.loading = true;
          fetch(process.env.VUE_APP_ROOT_API + "/cats/" + id + "/vote", {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              }
          })
          .then(() => {
              this.msg = "Votre vote a bien été pris en compte.";
              this.load();
          })
          .catch( () => this.$router.push('/error'))

      }
  }
}

</script>

<style>
  #spinner {
    margin-top: 200px;
    margin-bottom: 30px;
  }
  #msg {
    margin-top: 25px;
    margin-bottom: 45px;
  }
  .img-vs-cat.lg {
    margin-top: 100px;
  }
  .img-vs-cat.md {
    margin-bottom: 25px;
  }
</style>