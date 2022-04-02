<template>
  <div class="forgot-password-content">
    <CardWithContent>
      <div class="forgot-password-card-content">
        <h2><b>Forgot Password</b></h2>
        <Input @onChange="email = $event" placeholder="Email" type="text"></Input>
        <Button @onClick="handleSendRequest" text="Send Reset Request"></Button>
        <p class="hyperlink" @click="handleBack()">Back To Login</p>
      </div>
    </CardWithContent>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CardWithContent from "./CardWithContent.vue";
import Button from "../common/Button.vue";
import Input from "../common/Input.vue";
import { resetPassword } from "@/utils/firebase";
import router from "@/router";

@Options({
  components: { CardWithContent, Button, Input },
})
export default class Login extends Vue {
  email = '';

  handleSendRequest(): void {
    resetPassword(this.email);
  }

  handleBack(): void {
    router.push('/login');
  }
}
</script>

<style scoped lang="scss">
.forgot-password-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 450px;

  .forgot-password-card-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>