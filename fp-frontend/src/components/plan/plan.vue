<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
        <v-list two-line>
            <v-list-group v-model="category.active" v-for="category in categories" :key="category.muscleId" >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>{{category.muscleName}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <plan-category-component :category="category" />
            </v-list-group>
        </v-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import * as _ from "lodash";
import PlanCategoryComponent from "./planCategory.vue";
import { muscleCategories } from "json/data";

export default Vue.extend({
  components: {
    PlanCategoryComponent
  },
  data() {
    return {
      categories: muscleCategories
    };
  },
  created() {
    let first = _.first(this.categories)
    // first.active = true;
  },
  methods: {}
});
</script>