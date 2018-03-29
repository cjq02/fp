<template>
  <v-card>
    <v-layout row>
      <v-flex xs6>
        <v-subheader>Summary</v-subheader>
        <v-list dense>
          <v-list-tile>
            <v-list-tile-content>Average Weight:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{summary.averageWeight}} kg</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Total Reps:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{summary.totalReps}} rep</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Total Time:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{totalMinutes}} m {{restSeconds}} s</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex xs6>
        <v-card-media :src="require(`../../assets/images/${imgName}`)" height="180px" contain></v-card-media>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import * as _ from "lodash";
import { muscleItems as items } from "json/data";

export default Vue.extend({
  props: ["summary"],
  data() {
    return {
      itemId: this.$route.params.itemId,
      imgName: String()
    };
  },
  created() {
    this.imgName = this.getImgName();
  },
  computed: {
    totalMinutes() : number {
      return Math.floor(this.summary.totalTime / 60);
    },
    restSeconds() : number {
      return this.summary.totalTime - this.totalMinutes * 60;
    }
  },
  methods: {
    getImgName() {
      let item = _.find(items, { itemId: _.parseInt(this.itemId) });
      return item.imgName;
    }
  }
});
</script>