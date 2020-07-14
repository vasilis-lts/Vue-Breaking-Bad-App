<template>
  <div id="app">
    <div id="nav">
      <img src="@/assets/bb-logo.png" alt="Breaking Bad logo" class="logo-header" />
      <router-link to="/">Home</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-link to="/randomizer">Randomizer!</router-link>
    </div>
    <div id="view-area">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Footer
  }
})
export default class App extends Vue {
  //
}
</script>

<style lang="scss">
@import "./scss/colors.scss";
@import "./scss/general-rules.scss";

/* ================
   Variables
   ================ */
$headerHeight: 55px;

/* ================
   App component
   ================ */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $darkblue;
}

#nav {
  position: fixed;
  height: $headerHeight;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  background: rgba(0, 36, 25, 0.8);
  border-bottom: 1px solid $gray;

  a {
    font-weight: 200;
    font-size: 20px;
    margin: 0 10px;
    color: #ccc;
    text-decoration: none;

    &.router-link-exact-active {
      color: #66bb6a;
      text-decoration: underline;
    }

    &:hover {
      color: lighten(#ccc, 10%);
    }

    &.router-link-exact-active:hover {
      color: lighten(#66bb6a, 10%);
      text-decoration: underline;
    }
  }
}
.logo-header {
  width: 35px;
  margin: 0 20px 0 10px;
}

#view-area {
  margin-top: $headerHeight;
  padding: 15px 0;
  min-height: calc(100% - #{$headerHeight} * 2);
}
#footer {
  background: rgba(0, 0, 0, 0.5);
  border-top: 1px solid $gray;
}
</style>
