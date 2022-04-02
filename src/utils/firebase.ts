import firebase from "firebase";
import router from "@/router";

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
      router.push('/login')
    })
    .catch(error => {
      console.log(error)
      alert(error.message);
    });
}