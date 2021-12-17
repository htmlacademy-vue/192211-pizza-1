<template>
  <AppDrop class="content__constructor" @drop="moveIngredient">
    <div :class="['pizza', `pizza--foundation--${size}-${sauce}`]">
      <div class="pizza__wrapper">
        <div
          v-for="ingredient in ingredients"
          :key="ingredient.id"
          :class="[
            'pizza__filling',
            `pizza__filling--${ingredient.type}`,
            getClassByCount(ingredient.count),
          ]"
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
      if (value.count < 3) {
        this.$emit("dropIngredient", value);
      }
    },

    getClassByCount(count) {
      let className = "";
      if (count === 2) {
        className = "pizza__filling--second";
      }
      if (count === 3) {
        className = "pizza__filling--third";
      }
      return className;
    },
  },
};
</script>

<style></style>
