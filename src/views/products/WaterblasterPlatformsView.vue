<template>
  <h2>Waterblaster Platforms</h2>
  <p>
    Add an extra level of excitement to your poolside with our Waterblaster Platform—an elevated
    spraying station that guarantees laughs and thrills. Easily accessed via a sturdy ladder, this
    platform lets users drench friends and family below with a powerful water blaster, making it a
    hit at parties, resorts, and recreational pools.
  </p>
  <p>
    Built for safety and fun, the platform features non-slip surfaces and secure handrails, while
    the blaster delivers a satisfying stream without excessive pressure. Customisable in height and
    layout to suit your pool space, it’s the perfect interactive feature to keep everyone engaged.
    Let the soaking battles begin!
  </p>
  <p>
    Our platforms are available to order in whatever height you require. Simply select the size of
    the ladder in metres, add it to the cart and we'll do the rest.
  </p>
  <product-component :key="ladderProduct.sku" :product="ladderProduct">
    <ladder-parameters :product="ladderProduct" />
  </product-component>
</template>

<script setup lang="ts">
import LadderParameters from '@/components/LadderParameters.vue';
import ProductComponent from '@/components/ProductComponent.vue';
import { type Product } from '@/types';

const ladderProduct: Product = {
  sku: 'LADDER',
  title: 'Plastic safety ladder',
  description: 'Made from high-quality, durable plastic with non-slip steps and twin handrails.',
  saleUnit: 'Ladder length (metre)',
  unitPrice: 2400,
  image: '/pool-supplies/images/waterblaster-platform-1.jpeg',
};
</script>
