<template>
  <div class="add-to-cart">
    <v-number-input
      v-model="quantityToAdd"
      min="1"
      controlVariant="split"
      variant="outlined"
    ></v-number-input>
    <v-btn
      @click="handleAddClick"
      prepend-icon="mdi-plus-circle"
      rounded="lg"
      variant="tonal"
      base-color="secondary"
      size="x-large"
    >
      Add to Cart
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import { useCartStore } from '@/stores/cart';
import { type Product } from '@/types';

type Props = {
  product: Product;
};

const props = defineProps<Props>();

const cartStore = useCartStore();
const toast = useToast();

const quantityToAdd = ref(1);

const handleAddClick = () => {
  const item = {
    ...props.product,
    quantity: quantityToAdd.value,
    ƒ,
  };
  cartStore.addItem(item);
  toast.default(`${item.title} added to cart`);
};
</script>

<style scoped>
.add-to-cart {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
