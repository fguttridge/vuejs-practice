<template>
    <div id="http-test">
        <div class="inline-text">{{ data[1] }}</div>
    </div>
</template>

<script>
export default {
  name: "HttpTest",
  data() {
    return {
      data: {}

    };
  },
  mounted() {
      this.$appHttp.get('https://jsonplaceholder.typicode.com/users').subscribe(result => this.data = result);
  },
  beforeDestroy() {
    clearInterval(this.$options.interval);
  },
  methods: {
    updateTime() {
      let now = new Date();
      this.date = Date.now();
      this.hours = now.getHours();
      this.minutes = now.getMinutes();
      this.seconds = now.getSeconds();
    },
    parseNumberForDate(number) {
      if (number < 10) return "0" + number;
      else return number;
    }
  }
};
</script>

<style>
</style>