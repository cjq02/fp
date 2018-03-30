<template>
  <v-toolbar dark color="primary">
    <v-icon v-if="showHome">home</v-icon>
    <v-icon v-if="!showHome" @click="goBack">keyboard_arrow_left</v-icon>
    <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue";
import * as _ from "lodash";
import { muscleItems as items } from "json/data";

export default Vue.extend({
  data() {
    return {
      title: String()
    };
  },
  created() {
    this.title = this.getTitle(this.$route);
  },
  computed: {
    showHome() : boolean {
      return this.$route.name === 'Home' 
    }
  },
  watch: {
    $route: function() {
      this.title = this.getTitle(this.$route);
    }
  },
  methods: {
    getTitle(route: any) {
      if (route.name === "Record") {
        let item = _.find(items, { itemId: _.parseInt(route.params.itemId) });
        return item.itemName;
      }
      return route.name;
    },
    goBack() {
      this.$router.go(-1);
    }
  }
});
</script>