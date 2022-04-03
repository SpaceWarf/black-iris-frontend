import firebase from "firebase";
import router from "@/router";
import store from "@/store";

export const getUser = (): Promise<firebase.User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject)
  })
}

export const logIn = (email: string, password: string): void => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Successfully logged in!');
      fetchUserDetails(email);
      router.push('/weapons');
    })
    .catch(error => {
      console.log(error)
      alert(error.message);
    });
}

export const logOut = (): void => {
  firebase.auth().signOut()
    .then(() => {
      console.log('Successfully signed out!');
      router.push('/login');
    })
    .catch(error => {
      console.log(error)
      alert(error.message);
    });
}

export const resetPassword = (email: string): void => {
  console.log("reset password: ", email);
}

export const fetchUserDetails = async (email: string): Promise<void> => {
  if (!store.getters.areDetailsSet) {
    const result = await firebase.firestore().collection('users').where('email', '==', email).get();

    if (!result.empty) {
      const details = result.docs[0].data();
      const role = (await details.roleRef.get()).data().name;
      store.commit('setUserDetails', {role, group: details.group});
    } else {
      throw new Error(`Could not find user details for email ${email}`);
    }
  }
}