<template>
  <div class="collapsable-header">
    <AnimatedIcon
      icon="chevron-down"
      toggledIcon="chevron-right"
      v-on:click="collapsed = !collapsed"
    ></AnimatedIcon>
    <h2>{{ header }}</h2>
  </div>
  <div
    class="collapsable-content"
    :class="{ collapsed: collapsed }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AnimatedIcon from './AnimatedIcon.vue';

@Options({
  props: {
    header: String
  },
  components: {
    AnimatedIcon
  }
})
export default class CollapsableSection extends Vue {
  header!: string;
  collapsed = false;
}
</script>
