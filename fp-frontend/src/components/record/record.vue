<template>
  <v-layout row wrap class="record">
    <v-flex xs12>
      <record-summary-component :summary="summary" />
    </v-flex>
    <v-flex xs12>
      <v-card>
          <v-layout row wrap>
            <v-flex xs6>
              <record-list-component :current-records="currentRecords" @removeRecord="removeRecord" />
            </v-flex>
            <v-flex xs6>
              <record-picker-component @addRecord="addRecord" />
            </v-flex>
          </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import * as _ from "lodash";
import RecordSummaryComponent from "./recordSummary.vue";
import RecordListComponent from "./recordList.vue";
import RecordPickerComponent from "./recordPicker.vue";
import { fpDB } from "db/fpDB";
import { IRecordItem, RecordItem } from "model/IRecordItem";
import { IRecord } from "model/IRecord";
import { ISummary } from "model/ISummary";

let dateFormat = require("dateformat");

export default Vue.extend({
  components: {
    RecordSummaryComponent,
    RecordListComponent,
    RecordPickerComponent
  },
  data() {
    return {
      fpDB: new fpDB(),
      currentRecords: Array<IRecord>(),
      itemId: _.parseInt(this.$route.params.itemId),
      currentRecordItem: new RecordItem(),
      summary: {} as ISummary,
      currentDate: dateFormat(new Date(), "yyyy-mm-dd")
    };
  },
  created() {
    this.loadRecords();
  },
  watch: {
    async currentRecords() {
      this.updateSummary();
      this.saveRecords();
    }
  },
  methods: {
    addRecord(record: IRecord) {
      let newSet: number = 1;
      if (!_.isEmpty(this.currentRecords)) {
        let lastRecord: IRecord = _.findLast(this.currentRecords);
        newSet = lastRecord.set + 1;
      }

      let newRecord: IRecord = {
        set: newSet,
        time: record.time,
        weight: record.weight,
        rep: record.rep
      };
      this.currentRecords.push(newRecord);
    },
    removeRecord() {
      this.currentRecords.pop();
    },
    async saveRecords() {
      if (_.isUndefined(this.currentRecordItem)) {
        this.currentRecordItem = {
          itemId: this.itemId,
          date: this.currentDate,
          sync: false,
          summary: this.summary,
          records: this.currentRecords
        };
        this.fpDB.recordItem.add(this.currentRecordItem);

        return;
      }

      this.fpDB.recordItem.update(
        [this.itemId, this.currentDate],
        this.currentRecordItem
      );
    },
    updateSummary() {
      let totalWeight = 0;
      let averageWeight = 0;
      let totalReps = 0;
      let totalTime = 0;
      let totalMinutes = 0;
      let totalSeconds = 0;
      let setCount = this.currentRecords.length;

      _.forEach(this.currentRecords, (record, index) => {
        totalWeight += record.weight;
        totalReps += record.rep;
        totalTime += record.time;
      });

      this.summary = {
        averageWeight: _.round(totalWeight / setCount, 1),
        averageRep: _.round(totalReps / setCount),
        totalWeight: totalWeight,
        totalReps: totalReps,
        totalTime: totalTime
      };
    },
    async loadRecords() {
      this.currentRecordItem = await this.fpDB.recordItem
        .where(["itemId+date"])
        .equals([this.itemId, this.currentDate])
        .first();

      if (!_.isUndefined(this.currentRecordItem)) {
        this.summary = this.currentRecordItem.summary;
        this.currentRecords = this.currentRecordItem.records;
      }
    }
  }
});
</script>

<style lang="sass-loader">
.scroll {
  height: 450px;
  overflow-y: scroll;
}
</style>
