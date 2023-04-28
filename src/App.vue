<!--template>
  <v-app>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
</script-->

<script setup lang="ts">
import Login from "./components/Login.vue";
//import VuetifySample from "./components/VuetifySample.vue";
</script>
<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<div id="app"></div>
