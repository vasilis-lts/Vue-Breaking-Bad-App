<template>
  <div class="home">
    <h1>List of characters</h1>
    <div class="flex jcc">
      <span>Sort by:&nbsp;</span>
      <a
        @click="sortCharList('char_id')"
        class="opt-sort"
        :class="sortOption === 'char_id' ? 'active' : ''"
      >id</a>
      /
      <a
        @click="sortCharList('name')"
        class="opt-sort"
        :class="sortOption === 'name' ? 'active' : ''"
      >name</a>
    </div>

    <div v-if="listData.length">
      <CharList :listData="listData" />
    </div>
    <div v-else class="loading">Loading...</div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import CharList from "@/components/CharList.vue";
import CONSTANTS from "@/constants";

const CHARACTERS_AMOUNT = 10;

@Component({
  components: {
    CharList
  }
})
export default class Home extends Vue {
  listData: object[] = [];
  sortOption = "char_id";

  mounted() {
    this.fetchData();
  }

  fetchData(): void {
    const req = new Request(
      CONSTANTS.BASE_URL + "/characters?limit=" + CHARACTERS_AMOUNT
    );

    fetch(req)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.listData = data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  sortCharList(property: string) {
    this.sortOption = property;

    // eslint-disable-next-line
    this.listData.sort((a: Record<string, any>, b: Record<string, any>) =>
      a[property] > b[property] ? 1 : -1
    );
  }
}
</script>

<style scoped lang="scss">
.opt-sort {
  cursor: pointer;
  margin: 0 5px;
  color: #777;

  &.active {
    color: white;
  }
}
.loading {
  margin-top: 50px;
}
</style>
