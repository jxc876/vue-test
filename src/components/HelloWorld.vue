<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>
        <p class="subheading font-weight-regular">
          Here is the message
          <span name="myMsg">{{msg}}</span>
          <v-chip>Example Chip</v-chip>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["msg"],
  data: () => ({
    name: "mike"
  })
};
</script>

<style>
</style>
