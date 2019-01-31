<template>
    <div id="date-display">
        {{parseNumberForDate(hours)}} : {{parseNumberForDate(minutes)}} : {{parseNumberForDate(seconds)}} 
    </div>
</template>

<script>
export default {
  name: "DateDisplay",
  data() {
    return {
      date: "",
      hours: "",
      minutes: "",
      seconds: "",
      intervalid: ""
    };
  },
  mounted() {
    this.updateTime();
    this.intervalid = setInterval(this.updateTime, 1000);
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
