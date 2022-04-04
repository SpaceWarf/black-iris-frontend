import firebase from "firebase";
import Role from "./Role";

export default interface UserDetails {
  firebaseDetails: firebase.User;
  group: string;
  role: Role;
}