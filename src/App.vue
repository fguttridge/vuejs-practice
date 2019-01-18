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
  color: map-get($theme, textBodyColor);
  background-color: map-get($theme, backgroundColor);
  width: 100%;
  min-height: 100%;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: map-get($theme, textBodyColor);
    &.router-link-exact-active {
      color: map-get($theme, linkSelected);
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
html {
  min-height: 100%;
  color: map-get($theme, textBodyColor);
  background-color: map-get($theme, backgroundColor);
}
/* Turn on custom 8px wide scrollbar */
::-webkit-scrollbar {
  width: 7px; /* 1px wider than Lion. */
  /* This is more usable for users trying to click it. */
  background-color: rgba(0,0,0,0);
  -webkit-border-radius: 100px;
}
/* hover effect for both scrollbar area, and scrollbar 'thumb' */
::-webkit-scrollbar:hover {
  background-color: rgba(0, 0, 0, 0.09);
}

/* The scrollbar 'thumb' ...that marque oval shape in a scrollbar */
::-webkit-scrollbar-thumb:vertical {
  /* This is the EXACT color of Mac OS scrollbars. 
     Yes, I pulled out digital color meter */
  background: rgba(0,0,0,0.5);
  -webkit-border-radius: 100px;
}
::-webkit-scrollbar-thumb:vertical:active {
  background: rgba(0,0,0,0.61); /* Some darker color when you click it */
  -webkit-border-radius: 100px;
}
</style>
