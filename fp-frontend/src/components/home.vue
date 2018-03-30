<template>
  <v-card>
    <v-jumbotron :gradient="gradient" dark height="700px">
      <v-card-media :src="require(`images/fitness.jpg`)" height="200px" contain></v-card-media>
      <v-container>
        <v-layout align-center>
          <v-flex xs12 class="text-xs-center">
            <v-btn outline large color="blue-grey darken-1">History</v-btn>
            <v-btn outline large color="blue-grey darken-1" @click="gotoPlan">
              Go To Plan
              <span slot="loader" class="custom-loader">
                <v-icon light>cached</v-icon>
              </span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    gradient: "to top, #BDBDBD, #F5F5F5"
  }), 
  methods: {
    gotoPlan() {
      this.$router.push({path: `/plan`})
    }
  }
});
</script>

<style lang="sass-loader">

</style>
