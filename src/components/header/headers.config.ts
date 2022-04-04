export interface Header {
  title: string;
  link: string;
  authLevel: number
}

export const getHeadersByAuthLevel = (authLevel: number): Header[] => {
  return headers.filter(header => header.authLevel === authLevel);
}

const headers: Header[] = [
  { title: 'Weapons', link: 'weapons', authLevel: 2 },
  { title: 'Listing Management', link: 'listingManagement', authLevel: 1 },
  { title: 'User Management', link: 'userManagement', authLevel: 0 },
];

export default headers;