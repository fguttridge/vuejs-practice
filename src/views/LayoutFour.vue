<template>
    <div id="layout-four">
        <h3 class="heading">Send a Payment</h3>
        <div class="divider-grey"/>
        <div class="content-body">
            <b-container fluid class="fixed-padding-container">
            <b-card-group deck class="mb-2">
            <b-col cols="4">
                <b-card class="text-center">    
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
                    <b-row class="full-width">
                        <b-col cols="6">
                        <strong>Public Key </strong>
                        </b-col>
                        <b-col cols="6">
                            ABXZ0019ASKZ
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col cols="8">
                <b-card class="text-center"> 
                    <div class="form-left-align">
                    <b-form >
                        <b-form-group id="user-id-group"
                                        label="Send To:"
                                        label-for="send-to"/>
                        <b-form-input id="user-id"
                                        required
                                        label-for="user-id"
                                        placeholder="Enter User ID"
                                        class="form-input"
                                        v-model="userId"/>
                        <b-form-group id="amount-group"
                                        label="Amount:"
                                        label-for="amount"/>
                        <b-form-input id="amount"
                                        type="number"
                                        required
                                        placeholder="Enter Amount in $"
                                        class="form-input form-bottom"
                                        v-model="amount"/>
                    <div class="divider-grey"/>                    
                    <b-button type="button" variant="primary" @click="submitForm()">Submit</b-button>
                    <b-button type="reset" variant="danger" @click="resetForm()">Reset</b-button>
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
  components: {  },
  data() {
      return {
          userId: '',
          amount: '',
      }
  },
  methods: {
      submitForm() {
          console.log(this.userId, this.amount);
          let data = {userId: this.userId, amount: this.amount};
          this.$appHttp.post("https://localhost:8080/v1/pay", data).subscribe(result => console.log(result));
      },
      resetForm() {
          this.userId = '';
          this.amount = '';
      }
      
  }
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
  border: 1px solid map-get($layoutOne, cardColor);
  background-color: map-get($layoutTwo, cardColor);
  box-shadow: 6px 8px 8px 5px rgba(0, 0, 0, 0.2), 8px 10px 20px 0 rgba(0, 0, 0, 0.19)
  }
  .card-header {
    background-color: map-get($layoutTwo, highlight);
    color: map-get($layoutTwo, backgroundColor);
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
  background-color: map-get($layoutTwo, dividerColor);
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
.form-bottom {
    margin-bottom: 1rem;
}
.fixed-padding-container {
    padding-left: 5rem;
    padding-right: 5rem;

}
</style>
