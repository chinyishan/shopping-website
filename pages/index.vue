<!-- pages/index.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">商品列表</h1>
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="p-4 border rounded hover:shadow cursor-pointer"
        @click="goToDetail(product.id)"
      >
        <img :src="product.image" alt="" class="h-40 object-contain mx-auto" />
        <h2 class="mt-2 font-semibold">{{ product.title }}</h2>
        <p class="text-sm text-gray-600">${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { data: products } = await useFetch(`${config.public.apiBase}/products`);

const router = useRouter();
function goToDetail(id) {
  router.push(`/products/${id}`);
}
</script>
