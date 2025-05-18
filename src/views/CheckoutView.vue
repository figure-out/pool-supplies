<template>
  <h2>Checkout</h2>
  <div v-if="cartStore.cartQuantity === 0">Your cart is currently empty!</div>
  <div v-else>
    <table>
      <caption :style="{ display: 'none' }">
        Cart contents
      </caption>
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Parameters</th>
          <th>Unit price</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartStore.cart" :key="item.sku">
          <td><img :src="item.image" alt="" class="checkout__item_image" /></td>
          <td>{{ item.title }}</td>
          <td>
            <div v-for="[key, parameter] in Object.entries(item.parameters || {})" :key="key">
              {{ parameter.description }}: {{ parameter.quantity }}
            </div>
          </td>
          <td>{{ formatCurrency(item.unitPrice) }}</td>
          <td>
            <v-number-input
              v-model.number="item.quantity"
              type="number"
              min="1"
              controlVariant="split"
              variant="outlined"
            />
          </td>
          <td>{{ formatCurrency(item.quantity * item.unitPrice) }}</td>
          <td>
            <v-btn
              @click="handleRemoveClick(item.sku)"
              icon="mdi-close-circle"
              alt="Remove"
              variant="plain"
              base-color="secondary"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <p class="checkout__total">Total: {{ formatCurrency(cartStore.cartTotal) }}</p>
    <p class="checkout__gst-warning">Please note: All prices are inclusive of GST</p>
    <v-btn @click="handleCompleteClick" variant="flat" base-color="secondary" size="x-large">
      Complete Order
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toast-notification';
import { useCartStore } from '@/stores/cart';
import formatCurrency from '@/utils/formatCurrency';

const router = useRouter();
const cartStore = useCartStore();
const toast = useToast();

const handleRemoveClick = (sku: string) => {
  cartStore.removeItem(sku);
  toast.default('Item removed');
};

const handleCompleteClick = () => {
  router.push('/complete');
};
</script>

<style scoped>
th {
  text-align: left;
}

th,
td {
  @media screen and (min-width: 480px) {
    padding: 1rem;
  }
}

.checkout__item_image {
  max-width: 4rem;
  max-height: 4rem;
  width: 100%;
  aspect-ratio: 1;
}

.checkout__total {
  font-size: 2rem;
}

.checkout__gst-warning {
  font-size: 1.5rem;
  color: var(--color-brand);
}
</style>
