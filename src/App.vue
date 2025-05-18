<template>
  <v-layout>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="showNavDrawer = !showNavDrawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="title">{{ COMPANY_NAME }}</v-toolbar-title>
      <cart-component />
    </v-app-bar>
    <navigation-panel @toggle-drawer="handleDrawerToggle" :showNavDrawer="showNavDrawer" />
    <div class="content">
      <RouterView />
    </div>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import CartComponent from '@/components/CartComponent.vue';
import NavigationPanel from '@/components/NavigationPanel.vue';
import { COMPANY_NAME } from '@/constants';

const showNavDrawer = ref(false);

const handleDrawerToggle = () => {
  showNavDrawer.value = !showNavDrawer.value;
};
</script>

<style type="css">
.title {
  font-family: 'Space Grotesk';
  font-size: 1.8rem;
  text-align: center;
}

.content {
  width: 100%;
  margin-top: 3rem;
  padding: 2rem;
}
</style>
