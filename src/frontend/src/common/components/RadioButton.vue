<template>
  <label>
    <input
      type="radio"
      :name="name"
      :value="value"
      class="visually-hidden"
      @change="changeValueHandler($event.target.value)"
      :checked="checked"
    />
    <slot />
  </label>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    changeValueHandler(value) {
      this.$emit("onChangeValue", value);
    },
  },
};
</script>

<style></style>
