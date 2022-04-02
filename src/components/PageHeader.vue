<template>
  <div id="header">
    <div></div>
    <div id="nav">
      <router-link to="weapons">Weapons</router-link>
      <router-link to="drugs">Drugs</router-link>
    </div>
    <div class="account-dropdown"><font-awesome-icon @click="handleLogOut" icon="user" /></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { logOut } from "@/utils/firebase";

@Options({})
export default class PageHeader extends Vue {
  handleLogOut(): void {
    logOut();
  }
}
</script>