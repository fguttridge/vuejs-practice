<template>
  <div id="app-header">
    <b-navbar id="nav" type="light" variant="success" toggleable="md">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Brand Name</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/help">Help</b-nav-item>
            <b-nav-item-dropdown text="Layouts" right>
              <b-dropdown-item to="/layouts/layout-one">Layout 1</b-dropdown-item>
              <b-dropdown-item href="#">Layout 2</b-dropdown-item>
              <b-dropdown-item href="#">Layout 3</b-dropdown-item>
              <b-dropdown-item href="#">Layout 4</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  components: {}
};
</script>

<style scoped>
#nav {
  width: 100%;
  height: 10%;
}
</style>
