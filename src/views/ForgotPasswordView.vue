<template>
  <div class="content">
    <ForgotPassword></ForgotPassword>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ForgotPassword from "@/components/login/ForgotPassword.vue";

@Options({
  components: {
    ForgotPassword,
  },
})
export default class ForgotPasswordView extends Vue {}
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
