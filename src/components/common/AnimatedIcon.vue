<template>
  <div
    class="animated-icon"
    v-on:click="toggled = !toggled"
  >
    <font-awesome-icon
      :class="{ toggled }"
      :icon="icon"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    icon: String,
    toggledIcon: String
  },
})
export default class AnimatedIcon extends Vue {
  icon!: string;
  toggledIcon!: string;
  toggled = false;
}
</script>
