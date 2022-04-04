import firebase from "firebase";
import router from "@/router";
import store from "@/store";
import User from "@/models/interfaces/User";
import Role from "@/models/interfaces/Role";

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

// TODO: refactor
export const fetchUserDetails = async (uid: string): Promise<void> => {
  if (!store.getters.areDetailsSet) {
    const result = await firebase.firestore().collection('users').where('uid', '==', uid).get();

    if (!result.empty) {
      const details = result.docs[0].data();
      const role: Role = (await details.roleRef.get()).data();
      store.commit('setUserDetails', { role, group: details.group });
    } else {
      throw new Error(`Could not find user details for uid ${uid}`);
    }
  }
}

export const fetchAllUsers = async (): Promise<User[]> => {
  const result = await firebase.firestore().collection('users').get();

  return Promise.all(result.docs.map(async doc => {
    const docData = doc.data();
    return {
      id: doc.id,
      uid: docData.uid,
      email: docData.email,
      name: docData.name,
      group: docData.group,
      role: (await docData.roleRef.get()).data()
    };
  }))
}

export const fetchUserById = async (id: string): Promise<User> => {
  const result = await firebase.firestore().collection('users').doc(id).get();
  const data = result.data();
  if (data) {
    return {
      id: result.id,
      uid: data.uid,
      email: data.email,
      name: data.name,
      group: data.group,
      role: (await data.roleRef.get()).data()
    };
  } else {
    throw new Error(`Could not find user for id ${id}`);
  }
}

export const updateUser = async (id: string, email: string, name: string, group: string, role: string): Promise<void> => {
  const roleDoc = await firebase.firestore().collection("roles").where('name', '==', role).get();
  await firebase.firestore().collection("users").doc(id).update({ email, name, group, roleRef: roleDoc.docs[0].ref });
};

export const fetchAllRoles = async (): Promise<Role[]> => {
  const result = await firebase.firestore().collection("roles").get();
  return result.docs
    .map(doc => doc.data() as Role)
    .sort((a, b) =>
      a.authority < b.authority ? -1 : a.authority > b.authority ? 1 : 0
    );
}