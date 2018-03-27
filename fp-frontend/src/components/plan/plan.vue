<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
        <v-list two-line>
            <v-card v-for="category in categories" :key="category.muscleId">
              <plan-category-component :category="category" />
            </v-card>
        </v-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import PlanCategoryComponent from "./planCategory.vue";
import { muscleCategories } from "../../json/data";

export default Vue.extend({
  components: {
    PlanCategoryComponent
  },
  data() {
    return {
      categories: muscleCategories
    };
  },
  methods: {}
});
</script>