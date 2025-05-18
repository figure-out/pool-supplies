<template>
  <h2>Waterslides</h2>
  <p>
    Make a Splash with a Custom-Built Waterslide!</p>
  <p>
    Transform your pool into the ultimate fun zone with a professionally built waterslide, tailored to your exact
    specifications. Whether you're after a towering thrill or a gentle glide, we build to your chosen height, slide
    length, and base length for the perfect fit and feel.
  </p>
  <p>Our slides are constructed using high-quality, durable
    materials designed to withstand the elements and deliver years of safe, smooth rides. With expert installation and
    attention to detail, we ensure your waterslide not only performs brilliantly but looks fantastic too. From backyard
    fun to commercial-grade excitement, we bring your waterslide vision to life.
  </p>
  <product-component :product="product">
    <slide-parameters :product="product" />
  </product-component>
</template>

<script setup lang="ts">
import ProductComponent from '@/components/ProductComponent.vue';
import SlideParameters from '@/components/SlideParameters.vue';
import { type Product } from '@/types';

const product: Product = {
  sku: 'SLIDE_CUSTOM',
  title: 'Slide',
  description:
    'Custom slide, manufactured in high-strength plastic.<br><br>Our waterslide packages contain all you need - you do not require any additional hardware.',
  saleUnit: 'CUSTOM',
  unitPrice: 0,
  image: '/pool-supplies/images/waterslide-1.jpeg',
};
</script>
