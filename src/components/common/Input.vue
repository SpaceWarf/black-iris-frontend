<template>
  <div class="input-container">
    <p v-if="title" class="title">{{ title }}</p>
    <input
      :value="value"
      :placeholder="placeholder"
      :class="[{ 'with-icon': unit || type === 'password', disabled }, size]"
      :type="showPassword ? 'text' : type"
      @input="$emit('onChange', $event.target.value)"
      @focus="disabled && $event.target.blur()"
      :disabled="disabled"
    />
    <p v-if="unit" class="icon">{{ unit }}</p>
    <p v-if="type === 'password'" class="icon show-password">
      <font-awesome-icon
        @click="showPassword = !showPassword"
        :icon="showPassword ? 'eye-slash' : 'eye'"
      />
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    placeholder: String,
    unit: String,
    value: String,
    type: String,
    title: String,
    size: {
      default: "lg",
      type: String,
    },
    disabled: false
  },
})
export default class Input extends Vue {
  showPassword = false;
}
</script>
