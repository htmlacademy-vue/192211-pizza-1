<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <RadioButton
          v-for="size in data"
          :key="size.id"
          :custom-style-class="[
            'diameter__input',
            `diameter__input--${size.type}`,
          ]"
          name="diameter"
          :value="size.type"
          @onChangeValue="changeSize"
          :checked="defaultSize === size.type"
        >
          <span>{{ size.name }}</span>
        </RadioButton>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "../../../common/components/RadioButton";

export default {
  name: "SizeSelector",
  components: { RadioButton },
  props: {
    data: {
      type: Array,
      required: true,
    },
    defaultSize: {
      type: String,
      default: "small",
    },
  },
  methods: {
    changeSize(size) {
      this.$emit("addSize", size);
    },
  },
};
</script>

<style></style>
