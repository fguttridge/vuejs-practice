<template>
    <div id="layout-two">
        <b-container fluid class="this">
            <b-row>
                <b-col cols="2" class="side-bar">
                    <span class="nav-item nav-item-selected">
                        <h4>Dashboard</h4>
                        <div class="arrow-left"></div>
                    </span>
                    <span class="nav-item">
                        <h4>Item 2</h4>
                        <div class="arrow-left" hidden></div>
                    </span>
                    <span class="nav-item">
                        <h4>Item 3</h4>
                        <div class="arrow-left" hidden></div>
                    </span>
                    <span class="nav-item">
                        <h4>Item 4</h4>
                        <div class="arrow-left" hidden></div>
                    </span>
                </b-col>
                <b-col cols="10" class="display-port">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: "layout-two"
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
    padding-left: 1.5rem;
    padding-top: 1rem;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
        margin-bottom: 0;
    }
}
.arrow-left {
  width: 0; 
  height: 0; 
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent; 
  border-right:25px solid map-get($layoutTwo, backgroundColor); 
  float: right;
}
.nav-item-selected {
    color: map-get($layoutTwo, highlight)
}
</style>