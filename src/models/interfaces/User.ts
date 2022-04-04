import Role from "./Role";

export default interface User {
  id: string;
  uid: string;
  email: string;
  name: string;
  group: string;
  role: Role;
}