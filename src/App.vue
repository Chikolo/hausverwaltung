<template>
  <v-app>
    <Nav/>
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Nav from './components/Nav.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld, Nav,
  },

  data: () => ({
    //
  }),
});
</script>
