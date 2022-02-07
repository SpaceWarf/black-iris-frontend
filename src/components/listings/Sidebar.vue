<template>
  <div class="sidebar" :class="{ collapsed: !listings.activeListing.id }">
    <div class="content" v-if="listings.activeListing.id">
      <div class="sidebar-header">
        <h1>Place Bid</h1>
      </div>
      <div class="image-header">
        <img :src="getImgUrl(listings.activeListing.itemId)" />
        <h2>{{ getItemNameFromId(listings.activeListing.itemId) }}</h2>
      </div>
      <div class="bid-details">
        <div class="detail">
          <p class="detail-label">Quantity</p>
          <p class="detail-value">{{ listings.activeListing.quantity }}</p>
        </div>
        <div class="detail">
          <p class="detail-label">Base Price</p>
          <p class="detail-value">{{ formatAsCurrency(listings.activeListing.basePrice) }}</p>
        </div>
        <div class="detail">
          <p class="detail-label">Bid Count</p>
          <p class="detail-value">{{ getBidCount }}</p>
        </div>
        <div class="detail">
          <p class="detail-label">Highest Bid</p>
          <p class="detail-value">{{ formatAsCurrency(getHighestBid) }}</p>
        </div>
        <div class="detail large-detail">
          <p class="detail-label">Ends On</p>
          <p class="detail-value">{{ listings.activeListing.endDate }}</p>
        </div>
      </div>
      <div class="latest-bids">
        <p>Latest Bids</p>
      </div>
      <div class="place-bid">
        <p>Bid Amount</p>
        <div class="input-container">
          <input v-model="bidAmount" placeholder="Enter a bid..." />
          <p>$</p>
        </div>
        <div class="button-container">
          <button v-on:click="onPlaceBid()">Place Bid</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "@/store";
import { mapGetters, mapState } from "vuex";
import { formatAsCurrency } from '@/utils/currency';
import { getItemNameFromId } from '@/utils/item-ids';

@Options({
  store: useStore(),
  computed: {
    ...mapState(["listings"]),
    ...mapGetters(["getBidCount", "getHighestBid"]),
  },
  methods: {
    formatAsCurrency,
    getItemNameFromId
  }
})
export default class ListingCard extends Vue {
  bidAmount = 0;

  onPlaceBid(): void {
    console.log(this.bidAmount);
  }

  getImgUrl(id: string): string {
    const images = require.context("@/assets/guns", false, /\.png$/);
    return images(`./${id}.png`);
  }
}
</script>
