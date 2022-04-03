<template>
  <div class="content">
    401 Not Authorized
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class NotAuthorizedView extends Vue {}
</script>

<style scoped lang="scss">
@import "../assets/scss/index";
.content {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  height: 100%;
}
</style>
