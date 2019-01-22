<template>
    <div id="layout-two">
        <b-container fluid class="this">
            <b-row>
                <b-col cols="2" class="side-bar">
                    <h3 class="nav-heading">Navigation</h3>
                    <div class="divider-grey"/>
                    <div class="nav-item" v-bind:class="{'nav-item-selected': this.active === 'LayoutThree'}" v-on:click="active = 'LayoutThree'" >
                        <Landing class="dashboard-svg" v-bind:class="{'nav-item-selected': this.active === 'LayoutThree'}"/>
                        <h4>Dashboard</h4>
                        <div class="arrow-left" v-if="active == 'LayoutThree'"></div>
                    </div>
                    <div class="nav-item">
                        <Payment class="dashboard-svg"/>
                        <h4>Pay</h4>
                        <div class="arrow-left" hidden></div>
                    </div>
                    <span class="nav-item">
                        <User class="dashboard-svg"/>
                        <h4>User Profile</h4>
                        <div class="arrow-left" hidden></div>
                    </span>
                    <span class="nav-item" v-bind:class="{'nav-item-selected': this.active === 'LayoutOne'}" v-on:click="active = 'LayoutOne'">
                        <Heart class="dashboard-svg" v-bind:class="{'nav-item-selected': this.active === 'LayoutOne'}"/>
                        <h4>About Us</h4>
                        <div class="arrow-left" v-if="active === 'LayoutOne'"></div>
                    </span>
                </b-col>
                <b-col cols="10" class="display-port">
                    <component :is="active"></component>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import LayoutThree from '@/views/LayoutThree.vue';
import LayoutOne from '@/views/LayoutOne.vue'
import Landing from '@/assets/landing-page.svg';
import User from '@/assets/man.svg';
import Payment from '@/assets/payment.svg';
import Heart from '@/assets/heart.svg';

export default {
  name: "layout-two",
  components: {
      LayoutThree,
      LayoutOne,
      Landing,
      User,
      Payment,
      Heart
  },
  data() {
    return {
      active: "LayoutThree",
    };
  },
  computed: {
      activationCheck: function() {
          return {
              'nav-item-selected': this.active === 'LayoutOne'
          }
      }
  }
};
</script>

<style scoped lang="scss">
#layout-two {
  text-align: center;
  overflow: auto;
  border-style: solid;
  border-width: 4px 4px 4px 4px;
  border-radius: 5px;
  border-color: #8E7B7B;
  background-color: map-get($layoutOne, backgroundColor);
  padding: 0;
  color: map-get($layoutOne, textBodyColor);
}
#layout-one, #layout-three {
    border-style: none !important;
    background-color: map-get($layoutTwo, backgroundColor) !important;
}
.side-bar {
    // display:inline-block;
    height: 40rem;
    background-color: map-get($layoutTwo, navbar);
    padding: 0;
    margin: 0;
    padding-top: 2rem;
}
.display-port {
    height: 40rem;
    background-color: map-get($layoutTwo, backgroundColor);
    padding: 0;
    margin: 0;
}
div.this.container {
    padding: 0 !important;
    margin: 0 !important;
}
.nav-item {
    color: map-get($layoutTwo, backgroundColor);
    padding-left: 1rem;
    margin-top: 1em;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
        margin-bottom: 0;
        margin-right: 2rem;
    }
}
.nav-item:hover {
    color: map-get($layoutTwo, highlight);
    fill: map-get($layoutTwo, highlight);
    cursor: pointer;
}
.arrow-left {
  width: 0; 
  height: 0; 
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent; 
  border-right:25px solid map-get($layoutTwo, backgroundColor); 
  position: absolute;
  right: 0;
  z-index: 100;
}
.nav-item-selected {
    color: map-get($layoutTwo, highlight) !important;
    fill: map-get($layoutTwo, highlight) !important;
}
.dashboard-svg {
    max-height: 100%;
    height: 3rem;
    width: 3rem;
    fill: map-get($layoutTwo, backgroundColor); 
}
.divider-grey {
  background-color: map-get($layoutTwo, cardColor);
  height: 3px;
  width: 85%;
  min-width:85%;
  margin-left: 7.5%;
}
.nav-heading {
    color: map-get($layoutTwo, backgroundColor) !important;
    align-self: right;
    text-align: left;
    margin-left: 7.5%;
}
</style>