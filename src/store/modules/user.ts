import { getRoleAuthorityLevel, Role } from "@/models/enums/Roles";
import UserDetails from "@/models/interfaces/UserDetails";

export interface UserState {
  authenticated: boolean;
  user: UserDetails;
}

export default {
  state: (): UserState => ({
    authenticated: false,
    user: {} as UserDetails
  }),
  mutations: {
    logInUser: (state: UserState, user: UserDetails): void => {
      state.user = user;
      state.authenticated = true;
    },
    logOutUser: (state: UserState): void => {
      state.user = {} as UserDetails;
      state.authenticated = false;
    },
    setUserDetails: (state: UserState, details: {group: string, role: Role}): void => {
      state.user.group = details.group;
      state.user.role = details.role;
    }
  },
  getters: {
    isAuthenticated: (state: UserState): boolean => {
      return state.authenticated;
    },
    getEmail: (state: UserState): string => {
      return state.user?.firebaseDetails?.email ?? '';
    },
    getRole: (state: UserState): string => {
      return state.user?.role ?? '';
    },
    isAdmin: (state: UserState): boolean => {
      return getRoleAuthorityLevel(state.user.role) <= getRoleAuthorityLevel(Role.Admin);
    },
    isSuperAdmin: (state: UserState): boolean => {
      return getRoleAuthorityLevel(state.user.role) <= getRoleAuthorityLevel(Role.SuperAdmin);
    },
    areDetailsSet: (state: UserState): boolean => {
      return !!state.user.role && !!state.user.group;
    }
  }
};
