import { RoleName } from "../enums/Role";

export default interface Role {
  name: RoleName;
  authority: number;
}