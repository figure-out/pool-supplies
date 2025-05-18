<template>
  <v-navigation-drawer
    @update:modelValue="handleDrawerUpdate"
    :model-value="showNavDrawer"
    temporary
  >
    <v-list nav>
      <v-list-item to="/" color="primary">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item to="/products/pools" color="primary">
        <v-list-item-title>Pools</v-list-item-title>
      </v-list-item>
      <v-list-item to="/products/waterslides" color="primary">
        <v-list-item-title>Waterslides</v-list-item-title>
      </v-list-item>
      <v-list-item to="/products/waterblaster-platforms" color="primary">
        <v-list-item-title>Waterblaster Platforms</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item to="/checkout" color="primary">
        <v-list-item-title>Checkout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { COMPANY_NAME } from '@/constants';

const route = useRoute();

interface Props {
  showNavDrawer: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(['toggle-drawer']);

const handleDrawerUpdate = () => {
  emit('toggle-drawer');
};
</script>
