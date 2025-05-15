<!-- pages/products/[id].vue -->
<template>
  <div>
    <NuxtLink to="/" class="text-blue-500 underline">← 回商品列表</NuxtLink>
    <div class="mt-4 p-4 border rounded">
      <img
        :src="product.image"
        alt=""
        class="h-60 object-contain mx-auto mb-4"
      />
      <h1 class="text-xl font-bold">{{ product.title }}</h1>
      <p class="text-gray-600 mt-2">{{ product.description }}</p>
      <p class="text-lg font-semibold mt-4">${{ product.price }}</p>
    </div>
    <button
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      @click="handleAddToCart"
    >
      加入購物車
    </button>
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const { data: product } = await useFetch(
  `${config.public.apiBase}/products/${route.params.id}`
);

const cart = useCartStore();
function handleAddToCart() {
  cart.addToCart(product.value);
}
</script>
