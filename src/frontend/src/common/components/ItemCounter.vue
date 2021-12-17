<template>
  <div>
    <button
      type="button"
      :disabled="value <= 0"
      class="counter__button counter__button--minus"
      @click="addIngredient(-1)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="value"
      @input="inputCount"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="addIngredient(1)"
      :disabled="value >= maxValue"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    itemType: {
      type: String,
      default: "",
    },
    value: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {};
  },
  methods: {
    addIngredient(addValue) {
      this.$emit("addIngredient", this.itemType, this.value + addValue);
    },

    inputCount(event) {
      const value =
        "" + event.target.value.replace(/^0/, "").replace(/\D/g, "");
      if (value && value > 3) {
        event.target.value = 3;
      }

      this.$emit("addIngredient", this.itemType, +event.target.value || 0);
    },
  },
};
</script>

<style></style>
