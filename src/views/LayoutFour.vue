<template>
    <div id="layout-four">
        <h3 class="heading">Send a Payment</h3>
        <div class="divider-grey"/>
        <div class="content-body">
            <b-container fluid class="fixed-padding-container">
            <b-card-group deck class="mb-2">
            <b-col cols="4">
                <b-card class="text-center" header="Your Info">    
                    <b-row class="full-width">
                        <b-col cols="6">
                        <strong>Username </strong>
                        </b-col>
                        <b-col cols="6">
                            Joel1234
                        </b-col>
                    </b-row>
                    <b-row class="full-width">
                        <b-col cols="6">
                        <strong>Balance </strong>
                        </b-col>
                        <b-col cols="6">
                            $1,234.00
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col cols="8">
                <b-card class="text-center" header="Transfer Form"> 
                    <div class="form-left-align">
                    <b-form >
                        <b-form-group id="exampleInputGroup1"
                                        label="Send To:"
                                        label-for="exampleInput1"/>
                        <b-form-input id="exampleInput1"
                                        required
                                        placeholder="Enter User ID"
                                        class="form-input"/>
                        <b-form-group id="exampleInputGroup1"
                                        label="Amount:"
                                        label-for="exampleInput1"/>
                        <b-form-input id="exampleInput1"
                                        type="number"
                                        required
                                        placeholder="Enter Amount in $"
                                        class="form-input"/>
                    </b-form>
                    </div>
                </b-card>
            </b-col>
            </b-card-group>
        </b-container>
        </div>
    </div>
</template>

<script>
export default {
  name: "layout-four",
  components: {  }
};
</script>

<style lang="scss">
#layout-four {
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
.full-width {
    width: 100%;
    min-width: 100%;
    display: flex;
    font-size: 1rem;
    margin-bottom: 2rem;
}
.divider-grey {
  background-color: map-get($layoutTwo, cardColor);
  height: 3px;
  width: 100%;
  min-width:100%;
  margin-bottom: 2rem;
}
.heading {
  text-align: left;
}
.form-left-align {
    text-align: left;
}
.form-input {
    width: 50%;
}
.fixed-padding-container {
    padding-left: 5rem;
    padding-right: 5rem;

}
</style>
