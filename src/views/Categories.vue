<template>
  <div id="categories">
    <h1>
      No specs for this page
      <br />but here are all the categories from the API
    </h1>
    <div class="categories flex-col">
      <div class="category-item flex">
        <div class="category-link">
          <a target="_blank" :href="baseUrl+'/characters'">All Characters</a>
        </div>
        <div class="category-info">
          <span>Endpoint to retrieve information from all characters.</span>
        </div>
      </div>
      <div class="category-item flex">
        <div class="category-link">
          <a target="_blank" :href="baseUrl+'/episodes?series=Breaking+Bad'">All Episodes</a>
        </div>
        <div class="category-info">
          <span>Endpoint to retrieve all Episodes</span>
        </div>
      </div>

      <div class="category-item flex">
        <div class="category-link">
          <a target="_blank" :href="baseUrl+'/quotes'">Quotes</a>
        </div>

        <div class="category-info">
          <span>Endpoint to retrieve all Quotes</span>
        </div>
      </div>

      <div class="category-item flex">
        <div class="category-link">
          <a target="_blank" :href="baseUrl+'/deaths'">Deaths</a>
        </div>

        <div class="category-info">
          <span>Endpoint to retrieve information about every death in Breaking Bad.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CONSTANTS from "@/constants";

@Component
export default class Categories extends Vue {
  baseUrl: string = CONSTANTS.BASE_URL;
  //
}
</script>

<style scoped lang="scss">
.categories {
  border: 1px solid #ccc;
  max-width: 650px;
  margin: 30px auto;
}
.category-item {
  border-bottom: 1px solid #cccccc;
  div {
    padding: 10px 5px;
  }
}
.category-link {
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.category-info {
  width: 100%;
  display: flex;
  border-left: 1px solid #ccc;
  justify-content: center;
}
</style>
