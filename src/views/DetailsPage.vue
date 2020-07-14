<template>
  <div class="details-page">
    <div v-if="Object.keys(charInfo).length">
      <div class="char-panel">
        <div class="char-panel-left">
          <div
            :style="{ 'background-image': 'url(' + charInfo.img + ')' }"
            class="char-list-thumbnail featured-thumbnail"
          ></div>
        </div>
        <div class="char-panel-right">
          <h3>Character Info</h3>
          <hr />
          <p>Name: {{ charInfo.name }}</p>
          <p>Nickname: {{ charInfo.nickname }}</p>
          <p>Birthday: {{ charInfo.birthday }}</p>
          <p>Occupation: {{ charInfo.occupation.join(",") }}</p>
          <p>Status: {{ charInfo.status }}</p>
        </div>
      </div>
    </div>
    <div v-if="seeAlsoList.length" class="see-also-list">
      <h3>See also:</h3>
      <div class="char-list">
        <div v-for="el in seeAlsoList" :key="el.name" @click="updateCharacter(el)">
          <div
            :style="{ 'background-image': 'url(' + el.img + ')' }"
            class="see-also-list-thumbnail char-list-thumbnail"
          ></div>
          <p>{{el.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

const SEE_ALSO_LIMIT = 3;

@Component
export default class DetailsPage extends Vue {
  @Prop({}) listData!: [];
  charInfo: Record<string, any> = {};
  seeAlsoList: Record<string, any>[] = [];
  showSeeALso = false;

  mounted() {
    this.getClickedCharacterInfo();
  }

  getClickedCharacterInfo() {
    // get id from url
    const id: number = parseInt(window.location.href.split("&")[1], 10);

    if (this.listData.length) {
      this.charInfo = this.listData.find(el => el["char_id"] === id) || {};

      if (this.charInfo) {
        this.getRandomSeeAlsoCharacters(this.charInfo["char_id"]);
      }
    } else {
      // if user enters url without link or refreshes
      // go to the homepage (for now)
      this.$router.push({ path: "/" });
    }
  }

  getRandomSeeAlsoCharacters(excludeCharId: number) {
    this.seeAlsoList = [];

    while (this.seeAlsoList.length < SEE_ALSO_LIMIT) {
      const random = Math.floor(Math.random() * this.listData.length);
      const randomCharId = this.listData[random]["char_id"];
      // eslint-disable-next-line
      if (
        randomCharId !== excludeCharId &&
        !this.seeAlsoList.find(el => el["char_id"] === randomCharId)
      ) {
        this.seeAlsoList.push(this.listData[random]);
      }
    }
    this.showSeeALso = true;
  }

  updateCharacter(char: Record<string, any>) {
    this.charInfo = char;
    this.getRandomSeeAlsoCharacters(this.charInfo["char_id"]);
  }
}
</script>

<style lang="scss" scoped>
.char-panel {
  margin: 0 auto;
  display: flex;
  max-width: 500px;
  border: 1px solid #777;
}
.char-panel-right {
  text-align: left;
}
.featured-thumbnail {
  cursor: default;
}
.featured-thumbnail:hover {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.see-also-list-thumbnail {
  width: 120px;
  height: 220px;
}
</style>
