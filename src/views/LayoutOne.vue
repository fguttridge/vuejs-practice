<template>
    <div id="layout-one">
        <b-card no-body class="text-center video-back">
            <div class="overlay">
              <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4">
              </video>
            </div>
            <div class="container h-100">
                <div class="d-flex h-100 text-center align-items-center">
                    <div class="text-white">
                        <h1 class="card-text">Video Header</h1>
                        <h2>With HTML5 Video and Bootstrap 4</h2>
                    </div>
                </div>
            </div>
        </b-card>
        <b-card no-body class="text-center">
            some text
        </b-card>
    </div>
</template>

<script>
export default {
  name: "layout-one"
};
</script>

<style scoped>
#layout-one {
  text-align: center;
}
.video-back {
  height: 50vh;
  min-height: 25rem;
  overflow: hidden;
  width: 100%;
  opacity: 0.9;
  background-color: black;
  text-align: center;
  align-items: center;
}
.video-back video {
  max-width: 100%;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateY(-25%);
  -moz-transform: translateY(-25%);
  -webkit-transform: translateY(-25%);
  transform: translateY(-25%);
}
.container {
  position: absolute;
  text-align: center;
  align-content: center;
  justify-content: center;
  z-index: 2;
  margin: 0 auto;
}
.h-100 {
  justify-content: center;
}
.overlay {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
}
</style>
