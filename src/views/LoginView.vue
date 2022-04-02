<template>
  <div class="content">
    <Login></Login>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Login from "@/components/home/Login.vue";

@Options({
  components: {
    Login,
  },
})
export default class LoginView extends Vue {}
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
