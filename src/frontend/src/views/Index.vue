<template>
  <AppLayout>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <DoughSelector :data="dough" @addDough="addDough" />

          <SizeSelector :data="sizes" @addSize="addSize" />

          <IngredientsSelector
            :data="getIngredientsAndSauces"
            :data-ingredients="ingredients"
            :data-sauces="sauces"
            @updateIngredient="updateIngredientsData"
            @addSauce="addSauce"
          />

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <PizzaView
              :sauce="order.sauce.type"
              :size="order.dough.type === 'light' ? 'small' : 'big'"
              :ingredients="order.ingredients"
              @dropIngredient="dropAddIngredients"
            />

            <PriceCounter :order="order" />
          </div>
        </div>
      </form>
    </main>
  </AppLayout>
</template>

<script>
import misc from "../static/misc.json";
import { dough, ingredients, sauces, sizes } from "../static/pizza.json";
import user from "../static/user.json";
import {
  normalizeDough,
  normalizeIngredients,
  normalizeSauces,
  normalizeSizes,
} from "../common/helpers";
import DoughSelector from "../modules/builder/components/BuilderDoughSelector";
import IngredientsSelector from "../modules/builder/components/BuilderIngredientsSelector";
import SizeSelector from "../modules/builder/components/BuilderSizeSelector";
import PriceCounter from "../modules/builder/components/BuilderPriceCounter";
import PizzaView from "../modules/builder/components/BuilderPizzaView";
import AppLayout from "../layouts/AppLayout";

export default {
  name: "PizzaConstructor",
  components: {
    AppLayout,
    SizeSelector,
    IngredientsSelector,
    DoughSelector,
    PriceCounter,
    PizzaView,
  },
  data() {
    return {
      misc,
      dough: dough.map(normalizeDough),
      ingredients: ingredients.map(normalizeIngredients),
      sauces: sauces.map(normalizeSauces),
      sizes: sizes.map(normalizeSizes),
      user,
      order: {},
    };
  },
  created() {
    this.order = {
      dough: this.dough[0],
      size: this.sizes[0],
      sauce: this.sauces[0],
      ingredients: [],
    };
  },
  methods: {
    updateIngredientsData(ingredient, value) {
      ingredient.count = value;
      this.updateIngredientsInOrder(ingredient);
    },

    updateIngredientsInOrder(ingredient) {
      const ingredientsInOrder = this.order.ingredients;
      const foundIngredientIndex = ingredientsInOrder.findIndex(
        (i) => i.type === ingredient.type
      );

      if (ingredient.count > 0) {
        this.addIngredientToOrder(foundIngredientIndex, ingredient);
      } else {
        this.removeIngredientFromOrder(foundIngredientIndex);
      }
    },

    addIngredientToOrder(indexIngredientInOrder, ingredient) {
      if (indexIngredientInOrder >= 0) {
        this.order.ingredients[indexIngredientInOrder] = ingredient;
      } else {
        this.order.ingredients.push(ingredient);
      }
    },

    removeIngredientFromOrder(indexIngredientInOrder) {
      const oldOrderIngredients = this.order.ingredients;
      this.order.ingredients = [
        ...oldOrderIngredients.slice(0, indexIngredientInOrder),
        ...oldOrderIngredients.slice(indexIngredientInOrder + 1),
      ];
    },

    updateIngredient(ingredient) {
      this.updateIngredientsData(ingredient.type, ingredient);
      this.updateIngredientsInOrder(ingredient);
    },

    dropAddIngredients(ingredient) {
      const foundIngredient = this.ingredients.find(
        (i) => i.type === ingredient.type
      );
      foundIngredient.count++;
      this.updateIngredientsInOrder(foundIngredient);
    },

    addSauce(sauce) {
      this.order.sauce = this.sauces.find((s) => s.type === sauce);
    },

    addDough(doughType) {
      this.order.dough = this.dough.find((d) => d.type === doughType);
    },

    addSize(sizeType) {
      this.order.size = this.sizes.find((s) => s.type === sizeType);
    },
  },
  computed: {
    getIngredientsAndSauces() {
      return {
        ingredients: this.ingredients,
        sauces: this.sauces,
      };
    },
  },
};
</script>

<style></style>
