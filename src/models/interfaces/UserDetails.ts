import firebase from "firebase";
import { Role } from "../enums/Roles";

export default interface UserDetails {
  firebaseDetails: firebase.User;
  group: string;
  role: Role;
}