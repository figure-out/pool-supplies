<template>
  <div class="product">
    <div class="product__wrapper">
      <div class="product__image-wrapper">
        <img :src="props.product.image" alt="" class="product__image" />
      </div>
      <div class="product__details">
        <h3>{{ props.product.title }}</h3>
        <p class="product__description" v-html="props.product.description" />
        <slot>
          <div>
            <span v-html="props.product.saleUnit" />
            - {{ formatCurrency(props.product.unitPrice) }} (including GST)
            <p>
              <add-to-cart :product="props.product" />
            </p>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import AddToCart from './AddToCart.vue';
import { type Product } from '@/types';
import formatCurrency from '@/utils/formatCurrency';

type Props = {
  product: Product;
};
const props = defineProps<Props>();
</script>

<style scoped>
.product {
  border: 1px solid var(--color-secondary);
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 1rem;
  max-width: min(60rem, 100%);
}

.product__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.product__image-wrapper {
  width: 15rem;
}

.product__image {
  max-width: 100%;
  height: auto;
}

.product__details {
  flex-grow: 1;
}
</style>
