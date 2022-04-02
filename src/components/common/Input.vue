<template>
  <div class="input-container">
    <input
      :value="value"
      :placeholder="placeholder"
      :class="{ 'with-icon': unit || type === 'password' }"
      :type="showPassword ? 'text' : type"
      @input="$emit('onChange', $event.target.value)"
    />
    <p v-if="unit">{{ unit }}</p>
    <p v-if="type === 'password'" class="show-password">
      <font-awesome-icon @click="showPassword = !showPassword" :icon="showPassword ? 'eye-slash' : 'eye'" />
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
    type: String
  },
})
export default class Input extends Vue {
  showPassword = false;
}
</script>
