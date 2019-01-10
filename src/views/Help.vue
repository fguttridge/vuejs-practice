<template>
  <div class="help">
      <p>This is a help class</p>
      <nav>
        <router-link to="/help/dumb"><button class="nav-button">Dumb</button></router-link>
        <router-link to="/help/date"><button class="nav-button">Date</button></router-link>
      </nav>
      <keep-alive>
        <router-view class="helper" name="helper"/>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: "help",
  methods: {
    storeState(url) {
      this.$store.dispatch("changeHelpRoute", { newRoute: url });
    },
    resolve() {
      this.$router.push(this.$store.state.helpPage.subRoute);
    }
  },
  created() {
    this.resolve();
  },
  updated() {
    /* questionable strategy, would rather only cache on nav, but it looks
      like that would require router hooks */
    this.storeState(this.$router.currentRoute.path);
  }
};
</script>

<style scoped>
p {
  color: #42b983;
}
nav {
  float: left;
  position: fixed;
  height: 100%;
  width: 10%;
}
.nav-button {
  width: 100%;
  background-color: #42b983;
}
</style>
