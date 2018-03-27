<template>
  <v-card>
    <v-subheader>Current Records</v-subheader>
    <v-list class="scroll" two-line subheader dense>
      <template v-for="(record, index) in currentRecords">
        <v-list-tile :key="record.set">
          <v-list-tile-avatar>
            <v-avatar class="purple" size="30">
              <span class="white--text headline">{{record.set}}</span>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{record.weight}} kg X {{record.rep}} rep</v-list-tile-title>
            <v-list-tile-sub-title>{{record.time}} secs</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-icon v-if="index==currentRecords.length-1" @click="removeRecord" color="blue-grey darken-2">delete_forever</v-icon>
        </v-list-tile>
        <v-divider :key="record.set+'_divider'" inset></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["currentRecords"],
  methods: {
    removeRecord() {
      this.$emit("removeRecord");
    }
  }
});
</script>