<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue";
import * as _ from "lodash";
import { muscleItems as items } from "../json/data";

export default Vue.extend({
  data() {
    return {
      title: getTitle(this.$route)
    };
  },
  watch: {
    $route: function() {
      this.title = getTitle(this.$route);
    }
  }
});

let getTitle = (route: any) => {
  if (route.name === "Record") {
    let item = _.find(items, {'itemId': _.parseInt(route.params.itemId)})
    return item.itemName;
  }
  return route.name;
};
</script>