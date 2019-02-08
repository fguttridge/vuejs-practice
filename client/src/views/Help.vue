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
import u2fServer from "node-u2flib-server";
import u2f from "@/assets/js/u2f-api.js";
import mockData from "../mocks/mockData.json";
export default {
  name: "help",
  components: {
    HttpTest,
    u2f,
    u2fServer
  },
  data () {
    return {
      mockData: mockData
    }
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
    // console.log(u2f);
    // console.log(this.mockData.users[0].registeredKey.keyHandle);
    // var register = u2fServer.startRegistration("https://localhost:8080");
    // var register = {
    //   "version": "U2F_V2",
    //   "appId": "https://localhost:8080",
    //   "challenge": "Ysr24TmqJZjCXk58Hn-HBdZJArLyugqUAaaqKL05yy0"
    // }
    // console.log(register);
    // var registrationResult = u2f.register(register.appId, [register], [], function(data) {
    //         console.log(data);
    //         let registerResult = u2fServer.finishRegistration(register, data);
    //         console.log(registerResult);
    //       }, 30);
    // console.log(registrationResult);
    var startAuthen = u2fServer.startAuthentication("https://localhost:8080", this.mockData.users[2].registeredKey);
        startAuthen.challenge = "eyJyYW5kb20iOiAiZGF0YSIsICJvYmplY3QiOiAidmFsdWUifQ==";
    var result = u2f.sign(startAuthen.appId, startAuthen.challenge,
    [ {version: startAuthen.version, keyHandle: startAuthen.keyHandle} ],
      function(data) {
          console.log( "Calling u2f key to sign some data, place down finger...");
          console.log(data);
          let authentication = u2fServer.finishAuthentication(
          startAuthen,
          data,
          this.mockData.users[2].registeredKey);
          console.log("User Authenticated", authentication);
      }.bind(this), 30)
      console.log(result);
      setTimeout( () => {
      }, 5000);
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
