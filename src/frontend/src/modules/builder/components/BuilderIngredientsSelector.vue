<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>
      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>
          <RadioButton
            class="radio ingredients__input"
            v-for="sauce in dataSauces"
            :key="sauce.id"
            name="sauce"
            :value="sauce.type"
            @onChangeValue="addSauce"
            :checked="defaultSauce === sauce.type"
          >
            <span>{{ sauce.name }}</span>
          </RadioButton>
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>
          <ul class="ingredients__list">
            <li
              class="ingredients__item"
              v-for="ingredient in dataIngredients"
              :key="ingredient.id"
            >
              <AppDrag
                :transfer-data="ingredient"
                :draggable="ingredient.count < 3"
              >
                <span :class="['filling', `filling--${ingredient.type}`]">{{
                  ingredient.name
                }}</span>
                <ItemCounter
                  class="counter counter--orange customStyleClass ingredients__counter"
                  :itemType="ingredient.type"
                  :value="ingredient.count"
                  :max-value="3"
                  @addIngredient="changeIngredient(ingredient, $event)"
                />
              </AppDrag>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCounter from "../../../common/components/ItemCounter";
import RadioButton from "../../../common/components/RadioButton";
import AppDrag from "../../../common/components/AppDrag";

export default {
  name: "IngredientsSelector",
  components: { AppDrag, ItemCounter, RadioButton },
  props: {
    dataIngredients: {
      type: Array,
      default: () => [],
    },
    dataSauces: {
      type: Array,
      default: () => [],
    },
    defaultSauce: {
      type: String,
      default: "tomato",
    },
  },

  methods: {
    changeIngredient(oldIngredient, value) {
      this.$emit("updateIngredient", oldIngredient, value);
    },

    addSauce(sauce) {
      this.$emit("addSauce", sauce);
    },
  },
};
</script>

<style></style>
