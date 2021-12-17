<template>
  <div :class="['counter', 'counter--orange', customStyleClass]">
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
    customStyleClass: {
      type: String,
      default: "",
    },
    value: {
      type: Number,
      default: 0,
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
      event.target.value = value || 0;
      this.$emit("addIngredient", this.itemType, event.target.value);
    },
  },
};
</script>

<style></style>
