<template>
  <div id="app-header">
    <b-navbar id="nav" variant="success" toggleable="md">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Brand Name</b-navbar-brand>
        <b-navbar-nav class="navigation-menu">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/help">Help</b-nav-item>
            <b-nav-item-dropdown text="Layouts" right class="nav-dropdown">
              <b-dropdown-item to="/layouts/layout-one">Layout 1</b-dropdown-item>
              <b-dropdown-item to="/layouts/layout-two">Layout 2</b-dropdown-item>
              <b-dropdown-item href="/layouts/layout-three">Layout 3</b-dropdown-item>
              <b-dropdown-item href="#">Layout 4</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
    <div class="bottom-bar">
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  components: {}
};
</script>

<!-- Don't scope css to change bootstrap view functionality -->
<style lang="scss">
#nav {
  width: 100%;
  height: 5%;
  background-color: map-get($theme, primary) !important;
}
.navigation-menu {
  background-color: map-get($theme, primary) !important;
  color: map-get($theme, textBodyColor) !important;
}
.dropdown-menu {
  background-color: map-get($layoutOne, secondary) !important;
  :hover {
    background-color: map-get($layoutOne, highlight) !important;
  }
}
.bottom-bar {
  display: block;
  background-color: map-get($theme, textBodyColor);
  height: 0.25em;
  width: 100%;
}
</style>
