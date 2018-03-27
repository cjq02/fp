<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
        <v-list two-line>
            <v-card v-for="category in categories" :key="category.muscleId">
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
                        <!-- <v-list-tile-sub-title>TODAY: 0kg * 0 |  0kg,  0reps</v-list-tile-sub-title> -->
                      </v-list-tile-content>
                      </v-list-tile>
                      <v-divider :key="item.itemId" inset></v-divider>
                    </template>
                   </v-card>
                 </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        </v-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { createCategories } from "../../json/data";

export default Vue.extend({
  data() {
    return {
      categories: createCategories()
    };
  },
  methods: {
    gotoRecord: function(itemId: number) {
      this.$router.push({path: `/record/${itemId}`})
    }
  }
});
</script>