<template>
  <div class="table-container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" class="num-col">#</th>
          <th scope="col" class="email-col">Email</th>
          <th scope="col" class="name-col">Name</th>
          <th scope="col" class="group-col">Group</th>
          <th scope="col" class="role-col">Role</th>
          <th class="actions-col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in users" :key="user.id">
          <th scope="row">{{ i + 1 }}</th>

          <td>{{ user.email }}</td>

          <td v-if="editedUserId !== user.id">{{ user.name }}</td>
          <td v-if="editedUserId === user.id">
            <Input
              :value="editedUser.name"
              @onChange="editProperty(user, 'name', $event)"
              placeholder="Name"
              type="text"
              size="sm"
              :disabled="saving"
            ></Input>
          </td>

          <td v-if="editedUserId !== user.id">{{ user.group }}</td>
          <td v-if="editedUserId === user.id">
            <Input
              :value="editedUser.group"
              @onChange="editProperty(user, 'group', $event)"
              placeholder="Group"
              type="text"
              size="sm"
              :disabled="saving"
            ></Input>
          </td>

          <td v-if="editedUserId !== user.id">{{ user.role.name }}</td>
          <td v-if="editedUserId === user.id">
            <Select
              :options="roles"
              :selected="editedUser.role"
              property="name"
              @onChange="editProperty(user, 'role', $event)"
              :disabled="saving"
            ></Select>
          </td>

          <td class="actions-cell">
            <IconButton
              v-if="editedUserId !== user.id"
              @click="handleEdit(user)"
              icon="edit"
              :disabled="!!editedUserId"
            ></IconButton>
            <IconButton
              v-if="editedUserId === user.id"
              @click="handleSaveEdit()"
              icon="check"
              :disabled="!wasModified"
            ></IconButton>
            <IconButton
              v-if="editedUserId === user.id"
              @click="handleCancelEdit()"
              icon="ban"
            ></IconButton>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import User from "@/models/interfaces/User";
import { fetchAllRoles, fetchAllUsers, updateUser } from "@/utils/firebase";
import { Options, Vue } from "vue-class-component";
import IconButton from "@/components/common/IconButton.vue";
import Input from "../common/Input.vue";
import * as _ from "lodash";
import Select from "../common/Select.vue";
import Role from "@/models/interfaces/Role";

@Options({
  components: {
    IconButton,
    Input,
    Select,
  },
})
export default class UserManagementTable extends Vue {
  users: User[] = [];
  roles: Role[] = [];
  editedUserId = "";
  editedUser = {} as User;
  wasModified = false;
  saving = false;

  async created(): Promise<void> {
    await this.loadUsers();
    this.roles = await fetchAllRoles();
  }

  async loadUsers(): Promise<void> {
    this.users = (await fetchAllUsers()).sort((a, b) =>
      a.role >= b.role ? -1 : a.role <= b.role ? 1 : 0
    );
  }

  async handleSaveEdit(): Promise<void> {
    if (this.wasModified) {
      this.saving = true;
      await updateUser(
        this.editedUserId,
        this.editedUser.email,
        this.editedUser.name,
        this.editedUser.group,
        this.editedUser.role.name
      );
      await this.loadUsers();
      this.editedUserId = "";
      this.editedUser = {} as User;
      this.wasModified = false;
      this.saving = false;
    }
  }

  handleCancelEdit(): void {
    this.editedUserId = "";
    this.editedUser = {} as User;
    this.wasModified = false;
  }

  handleEdit(user: User): void {
    if (!this.editedUserId) {
      this.editedUserId = user.id;
      this.editedUser = { ...user };
    }
  }

  editProperty(user: User, key: string, value: any): void {
    this.editedUser = {
      ...this.editedUser,
      [key]: value,
    };
    this.wasModified = !_.isEqual(user, this.editedUser);
  }
}
</script>

<style scoped lang="scss">
.table-container {
  width: 80%;
  max-width: 1250px;

  th {
    &.num-col {
      width: 5%;
    }

    &.email-col {
      width: 25%;
    }

    &.name-col {
      width: 25%;
    }

    &.group-col {
      width: 20%;
    }

    &.role-col {
      width: 15%;
    }

    &.actions-col {
      width: 10%;
    }
  }

  td {
    vertical-align: middle;

    &.actions-cell {
      display: flex;
      justify-content: flex-end;
    }

    .input-container {
      max-width: 90%;
    }
  }
}
</style>