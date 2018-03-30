<template>
  <section>
    <template v-for="(item, index) in category.items">
      <v-list-tile :key="item.itemName" @click="gotoRecord(item.itemId)">
        <v-list-tile-avatar>
          <img :src="require(`images/${item.imgName}`)">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{item.itemName}}</v-list-tile-title>
          <v-list-tile-sub-title>LAST: 30kg * 12, 360kg, 48reps</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider v-if="index + 1 < category.items.length" :key="'devider_' + index" inset></v-divider>
    </template>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["category"],
  methods: {
    gotoRecord(itemId: number) {
      this.$router.push({ path: `/record/${itemId}` });
    }
  }
});
</script>