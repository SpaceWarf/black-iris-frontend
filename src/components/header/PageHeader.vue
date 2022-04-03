<template>
  <div id="header">
    <div></div>
    <div id="nav">
      <div>
        <router-link
          v-for="header in getHeadersByRole(Role.User)"
          :key="header.title"
          :to="header.link"
          >{{ header.title }}</router-link
        >
      </div>
      <!-- <div v-if="isAdmin">
        <div class="header-separator"></div>
        <router-link
          v-for="header in getHeadersByRole(Role.Admin)"
          :key="header.title"
          :to="header.link"
          >{{ header.title }}</router-link
        >
      </div> -->
      <div v-if="isSuperAdmin">
        <div class="header-separator"></div>
        <router-link
          v-for="header in getHeadersByRole(Role.SuperAdmin)"
          :key="header.title"
          :to="header.link"
          >{{ header.title }}</router-link
        >
      </div>
    </div>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <font-awesome-icon icon="user" />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a class="dropdown-item" @click="handleMyAccount">My Account</a>
        </li>
        <li><a class="dropdown-item" @click="handleLogOut">Log Out</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { logOut } from "@/utils/firebase";
import router from "@/router";
import { mapGetters } from "vuex";
import headers, { getHeadersByRole } from "./headers.config";
import { Role } from "@/models/enums/Roles";

@Options({
  computed: {
    ...mapGetters(["isAdmin", "isSuperAdmin"]),
  },
  methods: {
    getHeadersByRole,
  }
})
export default class PageHeader extends Vue {
  Role = Role;
  headers = headers;

  handleMyAccount(): void {
    router.push("/myAccount");
  }

  handleLogOut(): void {
    logOut();
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/index";
.dropdown {
  button {
    background-color: transparent;
    border: none;
    box-shadow: none;
    outline: none;
    font-size: 1.2rem;
    color: $white;

    &::after {
      display: none;
    }

    &:hover {
      color: $primary-light;
    }
  }

  .dropdown-item {
    cursor: pointer;
    color: $primary;

    &:hover {
      background-color: $primary-light;
      color: $primary;
    }
  }
}
</style>