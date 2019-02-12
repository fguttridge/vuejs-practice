<template>
  <div class="help">
      <div class="page-nav">
        <router-link to="/help/dumb"><button class="nav-button">Dumb</button></router-link>
        <router-link to="/help/date"><button class="nav-button">Date</button></router-link>
      </div>
      <div class="help-view-port">
        <p>Simple page state caching & http request example</p>
        <div class="http-test"><HttpTest/></div>
        <keep-alive>
          <router-view class="helper" name="helper"/>
        </keep-alive>
      </div>
  </div>
</template>

<script>
import HttpTest from "@/components/HttpTest.vue";
import sjcl from "sjcl";

export default {
  name: "help",
  components: {
    HttpTest
  },
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
    console.log(sjcl);
    var keys = sjcl.ecc.ecdsa.generateKeys(256);
    console.log(keys);
    var ciphertext = sjcl.encrypt("password", "Hello World!");
    var plaintext = sjcl.decrypt("password", ciphertext);

    console.log(ciphertext);
    console.log(plaintext);
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
.page-nav {
  width: 10%;
  height: 100%;
  float: right;
  position: fixed;
}
.help-view-port {
  display: block;
  text-align: center;
  align-content: center;
}
.http-test {
  display: block;
  align-self: center;
  padding: 0 30rem 0 30rem;
}
</style>
