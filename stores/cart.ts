// stores/cart.ts
// import { defineStore } from "pinia";
// import { ref, computed } from "vue";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export const useCartStore = defineStore("cart", () => {
  const items = ref<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existing = items.value.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (id: number) => {
    items.value = items.value.filter((item) => item.id !== id);
  };

  const increaseQuantity = (id: number) => {
    const item = items.value.find((item) => item.id === id);
    if (item) item.quantity++;
  };

  const decreaseQuantity = (id: number) => {
    const item = items.value.find((item) => item.id === id);
    if (item && item.quantity > 1) item.quantity--;
  };

  const total = computed((): string =>
    items.value
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2)
  );

  return {
    items,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    total,
  };
});
