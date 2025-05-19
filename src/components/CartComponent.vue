<template>
  <v-btn @click="handleTogglePreview" stacked>
    <v-badge :content="cartStore.cartQuantity" color="secondary">
      <v-icon>mdi-cart-outline</v-icon>
    </v-badge>
  </v-btn>

  <Teleport to="body">
    <Transition name="slide-fade">
      <div v-if="showPreview" class="cart__preview">
        <h3>In your cart:</h3>
        <div v-for="item in cartStore.cart" :key="item.sku" class="cart__items">
          <img :src="item.image" alt="" class="cart__item_image" />
          <span>{{ item.title }}</span>
          <span>{{ item.quantity }}</span>

          <v-btn
            @click="handleRemoveClick(item.sku)"
            icon="mdi-close-circle"
            alt="Remove"
            variant="plain"
          />
        </div>
        <div v-if="cartStore.cartQuantity === 0">Cart is empty</div>
        <div v-else>
          <v-btn to="/checkout" @click="handleTogglePreview" variant="flat" base-color="secondary"
            >Checkout</v-btn
          >
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useToast } from 'vue-toast-notification';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const toast = useToast();

const showPreview = ref(false);

const handleTogglePreview = () => {
  showPreview.value = !showPreview.value;
};

const handleRemoveClick = (sku: string) => {
  cartStore.removeItem(sku);
  toast.default('Item removed');
};
</script>

<style scoped>
.cart__preview {
  box-sizing: border-box;
  color: var(--color-text);
  position: fixed;
  right: 0.5rem;
  top: 5rem;
  width: 100%;
  padding: 1rem;
  background-color: var(--color-light);
  border: 1px solid var(--color-secondary);
  height: fit-content;
  z-index: 1;

  @media screen and (min-width: 480px) {
    width: 20rem;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
}

.cart__items {
  display: grid;
  grid-template-columns: 2rem 1fr 1rem 1rem;
  column-gap: 0.5rem;
  row-gap: 2rem;
  align-items: center;
}

.cart__item_image {
  width: 100%;
  aspect-ratio: 1;
}
</style>
