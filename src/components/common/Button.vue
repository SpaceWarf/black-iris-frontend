<template>
  <div class="button-container" :class="{ secondary, disabled }">
    <button v-on:click="$emit('onClick')">{{ text }}</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    text: String,
    secondary: false,
    disabled: false,
  },
})
export default class Button extends Vue {}
</script>