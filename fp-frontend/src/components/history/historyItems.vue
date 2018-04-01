<template>
  <v-layout row wrap>
    <v-flex xs12 v-for="item in getDateDetail(items)" :key="item.itemId">
      <v-card>
        <v-layout row>
          <v-flex xs12>
            <v-list>
              <v-list-tile>
                <v-list-tile-avatar>
                  <img :src="require(`images/${item.itemDetail.imgName}`)">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.itemDetail.itemName }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs6>
            <p class="text-xs-center" v-for="record in item.records" :key="record.set">
              {{record.weight}} kg x {{record.rep}} rep
            </p>
          </v-flex>
          <v-flex xs6>
            <v-card color="blue-grey darken-4">
              <v-list dense >
                <v-list-tile>
                  <v-list-tile-content>Average Weight:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.summary.averageWeight}} kg</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Total Reps:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{item.summary.totalReps}} rep</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Total Time:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{getTotalTime(item.summary.totalTime)}}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import * as _ from "lodash";
import { muscleItems } from "json/data";
import { RecordItem } from "model/IRecordItem";
import { DateTimeUtil } from "src/utils/DateTimeUtil";

let dateFormat = require("dateformat");

export default Vue.extend({
  props: ["items"],
  methods: {
    getDateDetail(thisDate: RecordItem[]) {
      let items = thisDate.map(entity =>
        Object.assign(
          { itemDetail: _.find(muscleItems, { itemId: entity.itemId }) },
          entity
        )
      );
      return items;
    },
    getTotalTime(totalTime: number): string {
      return DateTimeUtil.convertToMinutes(totalTime);
    }
  }
})
</script>

