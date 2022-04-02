import UserDetails from "@/models/UserDetails";

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
    }
  },
  getters: {
    isAuthenticated: (state: UserState): boolean => {
      return state.authenticated;
    },
    getEmail: (state: UserState): string => {
      return state.user.firebaseDetails.email ?? '';
    }
  }
};
