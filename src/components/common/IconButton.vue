<template>
  <div class="icon-button-container" :class="{ secondary, disabled }">
    <button v-on:click="$emit('onClick')">
      <font-awesome-icon :icon="icon" />
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    icon: String,
    secondary: false,
    disabled: false
  },
})
export default class IconButton extends Vue {}
</script>