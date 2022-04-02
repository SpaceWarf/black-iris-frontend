import firebase from "firebase";

export default interface UserDetails {
  firebaseDetails: firebase.User;
  group: string;
  role: string;
}