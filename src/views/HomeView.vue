<template>
  <main>
    <h2>Welcome to {{ COMPANY_NAME }}</h2>

    <v-row justify="start" no-gutters>
      <v-col cols="12" md="6">
        <div class="home__blurb">
          <h3>Welcome to the Fun Side of Pool Supplies</h3>

          <p>
            At {{ COMPANY_NAME }}, we believe your pool should be more than just water — it should
            be a place where fun, relaxation, and a little bit of wow come together. That's why we
            supply everything you need to turn your pool into the best part of your home (or
            business!). Whether you're filling it up for the first time, adding exciting features,
            or just keeping it sparkling clean, we're here to help make it happen.
          </p>

          <h3>Big Splashes, Bright Ideas</h3>

          <p>
            Looking for a custom-built waterslide? A waterblaster platform for soaking your
            unsuspecting friends? Or maybe just a whole lot of clean, clear water delivered straight
            to your pool? You've come to the right place. We offer tailored pool solutions that fit
            your space, your vibe, and your wildest splash-filled dreams. No cookie-cutter kits here
            — just clever ideas, quality gear, and a team that gets it.
          </p>

          <h3>Let's Dive In</h3>

          <p>
            From backyard blowouts to resort-ready upgrades, we've got what it takes to keep your
            pool the place to be. Explore our products, ask us anything, and let's get your pool
            looking and feeling its best. With {{ COMPANY_NAME }}, you bring the swimsuits — we'll
            bring the splash.
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-carousel>
          <v-carousel-item src="/pool-supplies/images/warehouse-1.jpeg" cover></v-carousel-item>
          <v-carousel-item src="/pool-supplies/images/warehouse-2.jpeg" cover></v-carousel-item>
          <v-carousel-item src="/pool-supplies/images/warehouse-3.jpeg" cover></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <br />
    <hr />
    <br />
    <h3>Product Categories</h3>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card variant="outlined">
            <v-card-title>Pools</v-card-title>
            <v-card-text>
              <img src="/images/water-tanker-small-1.jpeg" alt="" class="home__category-image" />
            </v-card-text>
            <v-card-actions>
              <v-btn to="/products/pools" variant="tonal" base-color="secondary" width="100%"
                >View Pools</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card variant="outlined">
            <v-card-title>Waterslides</v-card-title>
            <v-card-text>
              <img src="/images/waterslide-1.jpeg" alt="" class="home__category-image" />
            </v-card-text>
            <v-card-actions>
              <v-btn to="/products/waterslides" variant="tonal" base-color="secondary" width="100%"
                >View Waterslides</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card variant="outlined">
            <v-card-title>Waterblaster Platforms</v-card-title>
            <v-card-text>
              <img src="/images/waterblaster-platform-1.jpeg" alt="" class="home__category-image" />
            </v-card-text>
            <v-card-actions>
              <v-btn
                to="/products/waterblaster-platforms"
                variant="tonal"
                base-color="secondary"
                width="100%"
                >View Pools</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { COMPANY_NAME } from '@/constants';
</script>

<style scoped>
.home__category-image {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
}

.home__blurb {
  padding-right: 2rem;
}
</style>
