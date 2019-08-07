<template>
  <div class="poll">
    <b-container>
      <b-row class="text-center">
        <b-col cols="4" >
          <b-card v-on:click="vote(cat1.id)" :img-src="cat1.url" :img-alt="cat1.id">
            <b-card-text>Miaou +1</b-card-text>
          </b-card>
        </b-col>
        <b-col cols="3" >
          <img id="img-vs-cat" height="500" src="../assets/vs.png"/>
        </b-col>
        <b-col cols="4" >
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
        msg: null
    }
  },
  created() {
    fetch(process.env.VUE_APP_ROOT_API + "/cats/random")
      .then(response => response.json())
      .then(json => {
          this.cat1 = json[0];
          this.cat2 = json[1];
      })
  },
  methods: {
      load: function() {
          fetch(process.env.VUE_APP_ROOT_API + "/cats/random")
              .then(response => response.json())
              .then(json => {
                  this.cat1 = json[0];
                  this.cat2 = json[1];
              })
      },
      vote: function (id) {
          this.msg = null;
          fetch(process.env.VUE_APP_ROOT_API + "/cats/" + id + "/vote", {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              }
          })
          .then(response => {
              this.msg = "Votre vote a bien été pris en compte.";
              this.load();
          })
          .catch(error => {
              this.msg = "Une erreur s'est produite, veuillez réessayer plus tard.";
          })
      }
  }
}

</script>

<style>
#msg, #img-vs-cat {
  margin-top: 30px;
}
</style>