<template>
  <div class="card-background">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class CardWithContent extends Vue {
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/index";
.card-background {
  padding: 30px;
  border: 1px solid $gray;
  border-radius: 5px;
}
</style>