<template>
  <AppDrop class="content__constructor" @drop="moveIngredient">
    <div :class="['pizza', `pizza--foundation--${size}-${sauce}`]">
      <div class="pizza__wrapper">
        <div
          v-for="ingredient in ingredients"
          :key="ingredient.id"
          :class="['pizza__filling', `pizza__filling--${ingredient.type}`]"
        ></div>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import AppDrop from "../../../common/components/AppDrop";
export default {
  name: "PizzaView",
  components: { AppDrop },
  props: {
    size: {
      type: String,
      required: true,
    },
    sauce: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    moveIngredient(value) {
      this.$emit("dropIngredient", value);
    },
  },
};
</script>

<style></style>
