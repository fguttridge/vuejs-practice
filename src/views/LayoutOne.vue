<template>
    <div id="layout-one">
        <b-card no-body class="text-center video-back">
            <div class="overlay">
              <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4">
              </video>
            </div>
            <div class="video-container h-100">
                <div class="d-flex h-100 text-center align-items-center">
                    <div class="text-white">
                        <h1 class="card-text">Typical Video Part Header</h1>
                        <h2>For all your Cool Viewing Needs</h2>
                    </div>
                </div>
            </div>
        </b-card>
        <div class="content-body">
            <b-container fluid>
                <b-row class="row-showcase">
                    <b-col cols="5" class="col-align-left">
                        <img src="../assets/target.svg">
                    </b-col>
                    <b-col cols="7" class="col-align-right">
                        <div class="pretty-print">
                            <h2>"Remember, this website provides several layouts, each of which is easily converted into a full scale site"</h2>
                        </div>
                    </b-col>
                </b-row>
                <b-row class="row-showcase">
                    <b-col cols="7" class="col-align-left">
                        <div class="pretty-print">
                            <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper ipsum ut suscipit rutrum. Donec eu aliquet odio. Phasellus commodo euismod elit, eget efficitur est pretium ut. Nunc porttitor ligula vitae urna viverra, nec sollicitudin dolor porttitor. Mauris pellentesque felis vel imperdiet tincidunt. Nunc et pretium tortor. Aenean in placerat justo. Quisque congue turpis ac tellus molestie vestibulum quis id sapien. Nam pharetra, erat in euismod ultrices, urna nibh elementum velit, sed dictum diam lacus nec nulla. Nunc aliquet augue vestibulum enim viverra lacinia."</h2>
                        </div>
                    </b-col>
                    <b-col cols="5" class="col-align-right">
                        <img src="../assets/research.svg">
                    </b-col>
                </b-row>

            </b-container>
          <!-- <b-card-group deck class="mb-2">
          <b-card class="text-center" header="Card">
              some text
          </b-card>
          <b-card class="text-center" header="Card">
            some text
          </b-card>
          </b-card-group>
          <b-card-group>
            <b-card overlay
            img-src="/images/skyline.jpg"
            img-alt="Card Image"
            title="This is an Image Card"
            class="image-card mb-4">
            </b-card>
          </b-card-group> -->
        </div>
    </div>
</template>

<script>
export default {
  name: "layout-one"
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');
#layout-one {
  text-align: center;
  overflow: auto;
  border-style: solid;
  border-width: 4px 4px 4px 4px;
  border-radius: 10px;
  border-color: #8E7B7B;
  background-color: map-get($layoutOne, backgroundColor);
  padding: 0;
  color: map-get($layoutOne, textBodyColor);
  max-height:100%;
  height: 50rem;
}
.video-back {
  height: 50vh;
  min-height: 35rem;
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
.video-container {
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
.content-body {
  .card {
  margin-top: 2em !important;
  background-color: map-get($layoutOne, cardColor);
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19)
  }
  .card-header {
    background-color: map-get($layoutOne, highlight);
    color: map-get($layoutOne, backgroundColor);
  }
}
.image-card {
  color: map-get($layoutOne, backgroundColor) !important;
  width: 50%;
  max-width:20rem;
  img {
    opacity: 0.9;
  }
}
.row-showcase {
    border-bottom: 5px double;
    padding-top: 0.5rem;
}
.pretty-print {
    display: flex;
    font-family: 'Dancing Script', cursive;
    text-align: center;
    align-items: center;
    justify-content: center;
    text-justify: center;
    width: 60rem;
    height: 100%;
}
.col-align-left {
    align-items: left;
    img {
      height: 30rem;
      width: 30rem;
      float: left;
      padding-bottom: 0.5rem;
    }
}
.col-align-right {
    align-items: right;
    img {
      height: 30rem;
      width: 30rem;
      float: right;
      padding-bottom: 0.5rem;
    }
}
  /* width */
    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: map-get($theme, primary)
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: map-get($theme, highlight); 
    }
</style>
