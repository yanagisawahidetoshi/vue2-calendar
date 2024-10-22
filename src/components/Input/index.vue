<template>
  <input
    :name="name"
    :type="type"
    class="input"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
    :required="required"
  />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    value: String,
  },
};
</script>

<style scoped>
.input {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: rgb(60, 64, 67);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}
</style>
