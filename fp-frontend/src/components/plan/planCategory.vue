<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
        <v-card-title>{{category.muscleName}}</v-card-title>
        <template v-for="item in category.items">
          <v-list-tile :key="item.itemName" @click="gotoRecord(item.itemId)">
            <v-list-tile-avatar>
              <img :src="require('../../assets/images/' + item.imgName)">
            </v-list-tile-avatar>
            <v-list-tile-content>
            <v-list-tile-title>{{item.itemName}}</v-list-tile-title>
            <v-list-tile-sub-title>LAST: 30kg * 12, 360kg, 48reps</v-list-tile-sub-title>
          </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="item.itemId" inset></v-divider>
        </template>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["category"],
  methods: {
    gotoRecord: function(itemId: number) {
      this.$router.push({path: `/record/${itemId}`})
    }
  }
})

</script>