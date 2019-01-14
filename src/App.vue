<template>
  <div id="app">
    <app-header></app-header>
    <div class="view-port">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/AppHeader.vue";

export default {
  name: "app",
  components: {
    "app-header": Header
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
* {
  margin: 0;
}
.view-port {
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 2%;
  padding-right: 2%;
}
</style>
