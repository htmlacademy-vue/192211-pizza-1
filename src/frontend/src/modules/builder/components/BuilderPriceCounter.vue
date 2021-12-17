<template>
  <div class="content__result">
    <p>Итого: {{ getTotalPrice }} ₽</p>
    <button type="button" class="button" disabled>Готовьте!</button>
  </div>
</template>

<script>
export default {
  name: "PriceCounter",
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getTotalPrice() {
      let sum = 0;
      sum += this.order.dough.price;
      sum += this.order.sauce.price;
      sum += this.order.ingredients.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
      return sum * this.order.size.multiplier;
    },
  },
};
</script>

<style></style>
