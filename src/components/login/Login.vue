<template>
  <div class="login-content">
    <CardWithContent>
      <div class="login-card-content">
        <h2><b>Sign In</b></h2>
        <Input @onChange="email = $event" placeholder="Email" type="text"></Input>
        <Input @onChange="password = $event" placeholder="Password" type="password"></Input>
        <Button @onClick="handleLogin" text="Sign In"></Button>
        <p class="hyperlink" @click="handleForgotPassword()">Forgot Password?</p>
      </div>
    </CardWithContent>
    <CardWithContent>
      <b>Don't have an account?</b>
      <Button @onClick="handleRequestAccess" text="Request Access" :secondary="true"></Button>
    </CardWithContent>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CardWithContent from "./CardWithContent.vue";
import Button from "../common/Button.vue";
import Input from "../common/Input.vue";
import { logIn } from "@/utils/firebase";
import router from "@/router";

@Options({
  components: { CardWithContent, Button, Input },
})
export default class Login extends Vue {
  email = '';
  password = '';

  handleLogin(): void {
    logIn(this.email, this.password);
  }

  handleRequestAccess(): void {
    console.log("request access");
  }

  handleForgotPassword(): void {
    router.push('/forgotPassword');
  }
}
</script>

<style scoped lang="scss">
.login-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 450px;

  .login-card-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>