import BidDetails from "./BidDetails";

export default interface ListingDetails {
  id: string;
  itemId: string;
  category: string;
  quantity: number;
  basePrice: number;
  bids: BidDetails[];
  endDate: string;
}