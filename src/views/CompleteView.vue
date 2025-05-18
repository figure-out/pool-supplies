<template>
  <div class="complete">
    <h2>Thank you for your order</h2>
    <p>Your products will be dispatched shortly.</p>
    <img src="/images/box.jpg" alt="" width="400" />
    <p class="complete__total">Total: {{ formatCurrency(cartStore.cartTotal) }}</p>
    <p class="complete__gst-warning">Please note: All prices are inclusive of GST</p>
    <p>Please do not refresh this page or you will lose your total.</p>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import formatCurrency from '@/utils/formatCurrency';

const cartStore = useCartStore();
</script>

<style scoped>
.complete {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.complete__home-link {
  color: var(--color-brand);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.complete__total {
  font-size: 2rem;
}

.complete__gst-warning {
  font-size: 1.5rem;
  color: var(--color-brand);
}
</style>
