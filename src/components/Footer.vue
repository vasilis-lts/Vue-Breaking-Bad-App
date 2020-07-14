<template>
  <div id="footer">
    <h3 class="footer-header">Sitemap</h3>
    <div class="routes">
      <router-link
        v-for="route in $router.options.routes.filter(route => route.name !== 'DetailsPage')"
        :key="route.name"
        :to="route.path"
      >{{ route.name }}</router-link>
    </div>
    <div class="credits">Developed with Vue.js</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import router from "@/router";

@Component
export default class Footer extends Vue {
  //
}
</script>

<style scoped lang="scss">
#footer {
  padding: 20px 0;
}
.footer-header {
  margin: 0;
}
.routes {
  padding: 10px 0;
  a {
    margin: 0 10px;
  }
}
.credits {
  padding-top: 20px;
}
</style>