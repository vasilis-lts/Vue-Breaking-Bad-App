<template>
  <div class="char-list">
    <div v-for="el in listData" :key="el.char_id" class="thumb-container">
      <router-link
        :to="{
          name: 'DetailsPage',
          params: { id: el.char_id, listData: listData }
        }"
      >
        <div :style="{ 'background-image': 'url(' + el.img + ')' }" class="char-list-thumbnail"></div>
        <div class="thumb-name">{{ el.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CharList extends Vue {
  @Prop({ default: [] }) listData!: object[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.thumb-container {
  margin: 10px 0;
}
.char-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px auto;
  max-width: 1200px;
}
.char-list-thumbnail {
  width: 220px;
  height: 300px;
  background-position: center;
  background-size: cover;
  margin: 0 10px;
  cursor: pointer;
  transition: 0.25s;
}
.char-list-thumbnail:hover {
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
}
.thumb-name {
  margin: 5px 0;
}
</style>
