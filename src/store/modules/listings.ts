import ListingDetails from "@/models/ListingDetails";

export interface ListingsState {
  activeListing: ListingDetails;
}

export default {
  state: (): ListingsState => ({
    activeListing: {} as ListingDetails
  }),
  mutations: {
    setActiveListing: (state: ListingsState, listing: ListingDetails): void => {
      state.activeListing = listing;
    }
  },
  getters: {
    getBidCount: (state: ListingsState): number => {
      return state.activeListing.bids.length;
    },
    getHighestBid: (state: ListingsState): number => {
      return state.activeListing.bids.length
        ? Math.max(
          ...state.activeListing.bids.map(bid => bid.price)
        )
        : 0;
    }
  }
};
