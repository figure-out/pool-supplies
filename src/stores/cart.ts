import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { CartItem } from '@/types';

export const useCartStore = defineStore(
  'cart',
  () => {
    const cart: Ref<Array<CartItem>> = ref([]);

    const cartQuantity = computed(() => {
      return cart.value.reduce((total, item) => total + item.quantity, 0);
    });

    const cartTotal = computed(() => {
      return cart.value.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
    });

    const addItem = (item: CartItem) => {
      const existingCartItem = cart.value.find((cartItem) => cartItem.sku === item.sku);

      if (existingCartItem) {
        existingCartItem.quantity = existingCartItem.quantity + item.quantity;
        return;
      }

      cart.value.push(item);
    };

    const removeItem = (sku: string) => {
      cart.value = cart.value.filter((cartItem) => cartItem.sku !== sku);
    };

    const updateQuantity = (sku: string, newQuantity: number) => {
      const existingCartItem = cart.value.find((cartItem) => cartItem.sku === sku);

      if (existingCartItem) {
        existingCartItem.quantity = newQuantity;
      }
    };

    const clear = () => {
      cart.value = [];
    };

    return {
      cart,
      cartQuantity,
      cartTotal,
      addItem,
      clear,
      removeItem,
      updateQuantity,
    };
  },
  {
    persist: true,
  },
);
