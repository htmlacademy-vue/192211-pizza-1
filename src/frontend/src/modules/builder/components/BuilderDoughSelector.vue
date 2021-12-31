<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <RadioButton
          v-for="dough in data"
          :key="dough.id"
          :class="['dough__input', `dough__input--${dough.type}`]"
          name="dough"
          :value="dough.type"
          @onChangeValue="changeDough"
          :checked="defaultDough === dough.type"
        >
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
        </RadioButton>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "../../../common/components/RadioButton";

export default {
  name: "doughSelector",
  components: { RadioButton },
  props: {
    data: {
      type: Array,
      required: true,
    },
    defaultDough: {
      type: String,
      default: "light",
    },
  },
  methods: {
    changeDough(dough) {
      this.$emit("addDough", dough);
    },
  },
};
</script>

<style></style>
