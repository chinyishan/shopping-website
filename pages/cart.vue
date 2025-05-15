<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">購物車</h1>
    <div v-if="cart.items.length === 0">購物車是空的。</div>

    <div v-else>
      <div v-for="item in cart.items" :key="item.id" class="border-b py-4">
        <div class="flex justify-between items-center">
          <div>
            <h2 class="font-semibold">{{ item.title }}</h2>
            <p>${{ item.price }} x {{ item.quantity }}</p>
          </div>
          <div class="flex items-center gap-2">
            <button @click="cart.decreaseQuantity(item.id)">➖</button>
            <button @click="cart.increaseQuantity(item.id)">➕</button>
            <button @click="cart.removeFromCart(item.id)" class="text-red-500">
              移除
            </button>
          </div>
        </div>
      </div>

      <div class="mt-6 text-right text-lg font-bold">
        總金額：${{ cart.total }}
      </div>
    </div>
  </div>
</template>

<script setup>
const cart = useCartStore();
</script>
