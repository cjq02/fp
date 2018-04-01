<template>
  <v-tabs v-model="activeTab" color="blue-grey lighten-5" slider-color="yellow" show-arrows>
    <v-tab v-for="(month, key) in months" :key="key" ripple>
      {{ dateFormat(key, 'mmmm') }}
    </v-tab>
    <v-tab-item v-for="(month, key) in months" :key="key">
      <v-card flat>
        <v-card-text>
          <history-dates-component :dates="month" />
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import Vue from "vue";
import * as _ from "lodash";
import { fpDB } from "db/fpDB";
import { RecordItem } from "model/IRecordItem";
import HistoryDatesComponent from "./historyDates.vue";

let dateFormat = require("dateformat");

export default Vue.extend({
  components: {
    HistoryDatesComponent
  },
  data() {
    return {
      fpDB: new fpDB(),
      activeTab: "0",
      months: {}
    };
  },
  created() {
    this.generateHistoryData();
  },
  computed: {
    dateFormat() {
      return dateFormat;
    }
  },
  methods: {
    async generateHistoryData() {
      let list = await this.fpDB.recordItem.reverse().sortBy("date");
      // console.log(JSON.stringify(list))
      this.months = _.groupBy(
        list.map(entity =>
          Object.assign({ yearMonth: entity.date.slice(0, 7) }, entity)
        ),
        "yearMonth"
      );
    },
  }
});
</script>
