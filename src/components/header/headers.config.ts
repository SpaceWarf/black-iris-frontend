import { Role } from "@/models/enums/Roles";

export interface Header {
  title: string;
  link: string;
  auth: Role
}

export const getHeadersByRole = (role: Role): Header[] => {
  return headers.filter(header => header.auth === role);
}

const headers: Header[] = [
  { title: 'Weapons', link: 'weapons', auth: Role.User },
  { title: 'Drugs', link: 'drugs', auth: Role.User },
  { title: 'User Management', link: 'userManagement', auth: Role.SuperAdmin },
];

export default headers;