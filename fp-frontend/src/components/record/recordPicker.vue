<template>
  <v-layout row>
    <v-flex xs8>
      <v-card>
        <v-card-title class="blue-grey lighten-5">
          <v-layout row>
            <v-flex xs9>
              <v-btn absolute left top fab small color="success" class="text-xs-center" v-on:click="add">{{timer}}</v-btn>
            </v-flex>
            <v-flex xs3>
              <v-badge left class="picker-badge">
                <span slot="badge">{{selectedWeight}}</span>
                <v-icon small>KG</v-icon>
              </v-badge>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-divider></v-divider>
        <v-list dense id="weightList" class="scroll">
          <v-list-tile v-for="weight in weights" :key="weight" @click="selectWeight(weight)">
            <v-list-tile-content class="align-end">
              {{weight | weightConvert}}
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title class="blue-grey lighten-5">
          <v-badge left class="picker-badge">
            <span slot="badge">{{selectedRep}}</span>
            <v-icon small>REP</v-icon>
          </v-badge>
        </v-card-title>
        <v-divider></v-divider>
        <v-list dense id="repList" class="scroll">
          <v-list-tile v-for="rep in reps" :key="rep" @click="selectRep(rep)">
            <v-list-tile-content>
              x {{rep}}
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { IRecord } from "../../model/IRecord";

let generateList = function(count: number) {
  let list: Array<number> = [];
  for (let i = 0; i <= count; i++) {
    list.push(i);
  }
  return list;
};

export default Vue.extend({
  data() {
    return {
      timer: Number(),
      weightType: "kg",
      weights: generateList(120),
      reps: generateList(50),
      selectedWeight: Number(),
      selectedRep: Number()
    };
  },
  mounted() {
    setInterval(this.timeIncrement, 1000);
  },
  methods: {
    timeIncrement() {
      this.timer++;
    },
    add: function() {
      let record: IRecord = {
        time: this.timer,
        weight: this.selectedWeight,
        rep: this.selectedRep
      };
      this.timer = 0;
      this.$emit("addRecord", record);
    },
    selectWeight: function(weight: number) {
      this.selectedWeight = weight;
    },
    selectRep: function(rep: number) {
      this.selectedRep = rep;
    }
  },
  filters: {
    weightConvert: (weight: number) => {
      let str: string = "";
      let rate: number = 2.2;
      str =
        weight.toString() +
        " kg / " +
        Math.round(weight * rate).toString() +
        " bl";
      return str;
    }
  }
});
</script>