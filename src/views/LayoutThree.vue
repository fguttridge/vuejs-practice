<template>
    <div id="layout-three">
      <div class="content-body">
        <h3 class="heading">Dashboard</h3>
        <div class="divider-grey"/>
        <b-card-group deck class="mb-2">
          <b-card class="text-center" header="Card">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper ipsum ut suscipit rutrum. Donec eu aliquet odio. Phasellus commodo euismod elit, eget efficitur est pretium ut. Nunc porttitor ligula vitae urna viverra, nec sollicitudin dolor porttitor. Mauris pellentesque felis vel imperdiet tincidunt. Nunc et pretium tortor. Aenean in placerat justo. Quisque congue turpis ac tellus molestie vestibulum quis id sapien. Nam pharetra, erat in euismod ultrices, urna nibh elementum velit, sed dictum diam lacus nec nulla. Nunc aliquet augue vestibulum enim viverra lacinia."
          </b-card>
          <b-card class="text-center" header="Card">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper ipsum ut suscipit rutrum. Donec eu aliquet odio. Phasellus commodo euismod elit, eget efficitur est pretium ut. Nunc porttitor ligula vitae urna viverra, nec sollicitudin dolor porttitor. Mauris pellentesque felis vel imperdiet tincidunt. Nunc et pretium tortor. Aenean in placerat justo. Quisque congue turpis ac tellus molestie vestibulum quis id sapien. Nam pharetra, erat in euismod ultrices, urna nibh elementum velit, sed dictum diam lacus nec nulla. Nunc aliquet augue vestibulum enim viverra lacinia."
          </b-card>
          <b-card class="text-center" header="Card">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper ipsum ut suscipit rutrum. Donec eu aliquet odio. Phasellus commodo euismod elit, eget efficitur est pretium ut. Nunc porttitor ligula vitae urna viverra, nec sollicitudin dolor porttitor. Mauris pellentesque felis vel imperdiet tincidunt. Nunc et pretium tortor. Aenean in placerat justo. Quisque congue turpis ac tellus molestie vestibulum quis id sapien. Nam pharetra, erat in euismod ultrices, urna nibh elementum velit, sed dictum diam lacus nec nulla. Nunc aliquet augue vestibulum enim viverra lacinia."
          </b-card>
          </b-card-group>
          <b-card-group>
            <b-card class="chart-card">
              <graph-display :width="450" :height="450"/>
            </b-card>
        </b-card-group>
      </div>
    </div>
</template>

<script>
import GraphDisplay from '../components/GraphDisplay'
export default {
  name: "layout-three",
  components: { GraphDisplay }
};
</script>

<style lang="scss">
#layout-three {
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
  padding: 2em;
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
.divider-grey {
  background-color: map-get($layoutTwo, cardColor);
  height: 3px;
  width: 100%;
  min-width:100%;
}
.heading {
  text-align: left;
}

</style>
