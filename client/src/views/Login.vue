<template>
    <div id="login">
        <b-container fluid class="this">
            <b-row>
                <b-col cols="4">
                </b-col>
                <b-col cols="4">
                    <b-card class="text-center" header="Login">
                    <b-form >
                        <b-form-group id="user-id-group"/>
                        <b-form-input id="user-id"
                                        required
                                        label-for="user-id"
                                        placeholder="Enter login ID"
                                        class="form-input form-bottom"
                                        v-model="userId"/>
                    <div class="divider-grey"/>                    
                    <b-button type="button" variant="primary" @click="submitForm()">Login</b-button>
                    </b-form>
                    </b-card>
                </b-col>
                <b-col cols="4">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: "login",
  components: { }
};
</script>

<style lang="scss">
#login {
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
  background-color: map-get($layoutTwo, backgroundColor);
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19)
  }
  .card-header {
    background-color: map-get($layoutTwo, highlight);
    color: map-get($layoutTwo, backgroundColor);
  }
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
.form-bottom {
    margin-bottom: 1rem;
}

</style>
