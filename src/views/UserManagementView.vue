<template>
  <PageHeader></PageHeader>
  <div class="content">
    <UserManagementTable></UserManagementTable>
  </div>
</template>

<script lang="ts">
import PageHeader from "@/components/header/PageHeader.vue";
import UserManagementTable from "@/components/user-management/UserManagementTable.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    PageHeader,
    UserManagementTable
  }
})
export default class UserManagementView extends Vue {}
</script>

<style scoped lang="scss">
@import "../assets/scss/index";
.content {
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: 10px;
}
</style>
