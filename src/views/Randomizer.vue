<template>
  <div class="randomizer">
    <h3>Breaking bad quote randomizer!</h3>
    <h1 class="quote">{{quote}}</h1>
    <div v-if="quote">
      <button @click="getRandomQuote()">Get another one!</button>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import CONSTANTS from "@/constants";

@Component
export default class Randomizer extends Vue {
  quotesData: Record<string, any>[] = [];
  quote = "";

  mounted() {
    this.getQuotes();
  }

  async getQuotes() {
    const res = await this.fetchData();
    if (res && res.length) {
      this.quotesData = res;
      this.getRandomQuote();
    } else {
      alert("Request error!");
      // Good enough
    }
  }

  getRandomQuote() {
    const random = Math.floor(Math.random() * this.quotesData.length);
    this.quote = this.quotesData[random].quote;
  }

  async fetchData(): Promise<Array<object>> {
    const req = new Request(CONSTANTS.BASE_URL + "/quotes");
    let res;

    await fetch(req)
      .then(response => {
        return response.json();
      })
      .then(data => {
        res = data;
      })
      .catch(error => {
        console.log(error);
        res = error;
      });

    return res || [];
  }
}
</script>

<style scoped lang="scss">
.randomizer {
  padding-top: 50px;
}
.quote {
  margin: 50px 0;
}
</style>
