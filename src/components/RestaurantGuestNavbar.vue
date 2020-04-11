<template>
  <v-toolbar dark class="primary white--text">
    <v-toolbar-title>
      <span class="font-weight-light">COD</span>
      <SPAN>JER</SPAN>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-if="!isRegister"
      text
      class="white--text"
      router
      :to="{ name: 'RestaurantRegister' }"
    >
      <v-icon left small>mdi-lock</v-icon>
      <span>REGISTER</span>
    </v-btn>
    <v-btn
      v-if="isRegister"
      text
      class="white--text"
      router
      :to="{ name: 'RestaurantLogin' }"
    >
      <v-icon left small>mdi-lock</v-icon>
      <span>LOGIN</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "RestaurantGuestMenu",
  data() {
    return {
      isRegister: false
    };
  },
  created() {
    this.$router.currentRoute.name == "RestaurantRegister"
      ? (this.isRegister = true)
      : this.isRegister;
  }
};
</script>
