<template>
  <p><b>Please enter your ladder requirements below and click "Add to Cart" when done.</b></p>
  <div
    v-for="[key, parameter] in Object.entries(ladderParameters)"
    :key="key"
    class="ladder-parameters__inputs"
  >
    <span>{{ parameter.description }}</span>
    <span>{{ formatCurrency(parameter.unitPrice) }} per metre</span>
    <span class="ladder-parameters__number-input">
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
  <div>Ladder price: {{ formatCurrency(ladderPrice) }} (including GST)</div>
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

const ladderParameters = ref({
  ladderHeight: {
    description: 'Ladder length (m)',
    unitPrice: 2400,
    quantity: 0,
  },
});

const ladderPrice = computed(() => {
  return Object.values(ladderParameters.value).reduce((total, parameter) => {
    console.log(JSON.stringify(parameter));
    return total + parameter.unitPrice * parameter.quantity;
  }, 0);
});

const customSku = computed(() => {
  const flatParams = Object.entries(ladderParameters.value)
    .map(([key, parameter]) => {
      return `${key}_${parameter.quantity}`;
    })
    .join('_');
  return `LADDER_${flatParams};`;
});

const handleAddClick = () => {
  const item = {
    ...props.product,
    sku: customSku.value,
    parameters: ladderParameters.value,
    quantity: 1,
    unitPrice: ladderPrice.value,
  };
  cartStore.addItem(item);
  toast.default('Ladder added to cart');
};
</script>

<style scoped>
.ladder-parameters__inputs {
  display: grid;
  grid-template-columns: 0.4fr 0.4fr 1fr;
  align-items: center;
}

.ladder-parameters__number-input {
  display: flex;
  align-items: center;
}
</style>
