<template>
  <p><b>Please enter your slide requirements below and click "Add to Cart" when done.</b></p>
  <div
    v-for="[key, parameter] in Object.entries(slideParameters)"
    :key="key"
    class="slide-parameters__inputs"
  >
    <span>{{ parameter.description }}</span>
    <span>{{ formatCurrency(parameter.unitPrice) }} per metre</span>
    <span class="slide-parameters__number-input">
      <v-number-input
        v-model.number="parameter.quantity"
        type="number"
        :precision="2"
        min="0"
        controlVariant="split"
        variant="outlined"
      />
      metres
    </span>
  </div>
  <br />
  <div>Slide price: {{ formatCurrency(slidePrice) }} (including GST)</div>
  <br />
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
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import { useCartStore } from '@/stores/cart';
import { type Product } from '@/types';
import formatCurrency from '@/utils/formatCurrency';

type Props = {
  product: Product;
};

const props = defineProps<Props>();

const cartStore = useCartStore();
const toast = useToast();

const slideParameters = ref({
  slideHeight: {
    description: 'Height of slide (m)',
    unitPrice: 400,
    quantity: 0,
  },
  slideLength: {
    description: 'Length of slide (m)',
    unitPrice: 2400,
    quantity: 0,
  },
  slideBaseLength: {
    description: 'Length of slide base (m)',
    unitPrice: 700,
    quantity: 0,
  },
});

const slidePrice = computed(() => {
  return Object.values(slideParameters.value).reduce((total, parameter) => {
    return total + parameter.unitPrice * parameter.quantity;
  }, 0);
});

const customSku = computed(() => {
  const flatParams = Object.entries(slideParameters.value)
    .map(([key, parameter]) => {
      return `${key}_${parameter.quantity}`;
    })
    .join('_');
  return `SLIDE_${flatParams};`;
});

const handleAddClick = () => {
  const item = {
    ...props.product,
    sku: customSku.value,
    parameters: JSON.parse(JSON.stringify(slideParameters.value)),
    quantity: 1,
    unitPrice: slidePrice.value,
  };
  cartStore.addItem(item);
  toast.default('Slide added to cart');
};
</script>

<style scoped>
.slide-parameters__inputs {
  display: grid;
  grid-template-columns: 0.6fr 0.6fr 0.6fr;
  align-items: center;
}

.slide-parameters__number-input {
  display: flex;
  align-items: center;
}
</style>
