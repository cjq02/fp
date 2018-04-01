<template>
  <v-expansion-panel popout>
    <v-expansion-panel-content v-for="(date, key) in getMonthDetail(dates)" :key="key" :value="key === currentDate">
      <div slot="header" class="text-xs-left">
        <v-chip color="teal" text-color="white">
          <v-avatar class="teal  darken-4">{{ dateFormat(key, "ddd") }}</v-avatar>
          {{ dateFormat(key, "longDate") }}
        </v-chip>
      </div>
      <v-card>
        <history-items-component :items="date" />
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>

  <!-- <v-list>
    <v-list-group v-model="date.active" v-for="(date, key) in getMonthDetail(dates)" :key="key">
      <v-list-tile slot="activator">
        <v-list-tile-content>
          <v-list-tile-title>
            <v-chip color="teal" text-color="white">
              <v-avatar class="teal  darken-4">{{ dateFormat(key, "ddd") }}</v-avatar>
              {{ dateFormat(key, "longDate") }}
            </v-chip>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <history-items-component :items="date" />
    </v-list-group>
  </v-list> -->
</template>

<script lang="ts">
import Vue from "vue";
import * as _ from "lodash";
import HistoryItemsComponent from "./historyItems.vue"
import { muscleItems } from "json/data";
import { RecordItem } from "model/IRecordItem";

let dateFormat = require("dateformat");

export default Vue.extend({
  components: {
    HistoryItemsComponent
  },
  props: ["dates"],
  data() {
    return {
      currentDate: dateFormat(new Date(), "yyyy-mm-dd")
    }
  },
  computed: {
    dateFormat() {
      return dateFormat;
    }
  },
  methods: {
    getMonthDetail(thisMonth: RecordItem[]) {
      // let result: any[] = [];
      // _.forEach(_.groupBy(thisMonth, "date"), (value, key) => {
      //   result.push({
      //     date: key,
      //     items: value
      //   });
      // });
      // if (!_.isEmpty(result)) {
      //   result[0].active = true;
      // }
      // return result;
      let result = _.groupBy(thisMonth, "date")
      return result;
    }
  }
});
</script>
