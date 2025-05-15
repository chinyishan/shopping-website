<template>
  <div>
    <header class="p-4 bg-gray-100 flex gap-4">
      <NuxtLink to="/">首頁</NuxtLink>
      <NuxtLink to="/cart">購物車 ({{ cart.items.length }})</NuxtLink>
    </header>
    <NuxtPage />
  </div>
</template>

<script setup>
const cart = useCartStore();
</script>
