<template>
  <h2>Pools</h2>
  <p>
    Our reliable water tanker delivery service brings pristine, crystal-clear water straight to your
    premises—perfect for filling new pools, topping up existing ones, or managing commercial water
    needs.
  </p>
  <p>
    Choose from two convenient sizes: 7,000 litres for smaller jobs or 12,000 litres for larger
    volumes. Every drop we deliver is sourced from approved, clean supplies and rigorously tested to
    meet high purity standards
  </p>
  <p>
    Whether you're preparing for summer fun or opening a public pool, our fast and efficient service
    ensures you're never left high and dry. Trust us to deliver safe, swim-ready water when and
    where you need it.
  </p>
  <product-component v-for="product in products" :key="product.sku" :product="product" />
</template>

<script setup lang="ts">
import ProductComponent from '@/components/ProductComponent.vue';
import { type Product } from '@/types';

const products: Array<Product> = [
  {
    sku: 'WATER_TANKER_LARGE',
    title: 'Large water tanker',
    description:
      'Our larger sized water tanker, with a 12,000 litre capacity. Ideal for larger pools.',
    saleUnit: '12,000 L',
    unitPrice: 50000,
    image: '/pool-supplies/images/water-tanker-large-1.jpeg',
  },
  {
    sku: 'WATER_TANKER_SMALL',
    title: 'Small water tanker',
    description: 'Our smaller 7,000 litre capacity tanker.',
    saleUnit: '7,000 L',
    unitPrice: 30000,
    image: '/pool-supplies/images/water-tanker-small-1.jpeg',
  },
  {
    sku: 'WATERPROOF_PAINT',
    title: 'Waterproof paint',
    description: 'Waterproof paint, specially formulated for pools. Comes in a 15 litre tub',
    saleUnit: '15 L',
    unitPrice: 12000,
    image: '/pool-supplies/images/waterproof-paint-1.jpeg',
  },
];
</script>
