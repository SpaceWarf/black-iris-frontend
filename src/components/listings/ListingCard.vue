<template>
  <div class="card" v-on:click="setActiveListing(listing)">
    <div class="image">
      <img :src="getImgUrl()" alt="Item Image">
    </div>
    <div class="body">
      <p class="item-name">{{ getItemNameFromId(listing.itemId) }}</p>
      <div class="details-row">
        <p class="quantity">{{ listing.quantity }}</p>
        <p class="separator">items at</p>
        <p class="price">{{ formatAsCurrency(getHighestBid()) }}</p>
        <p class="separator">per</p>
      </div>
      <p class="end-date"><font-awesome-icon icon="clock"/> {{ listing.endDate }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ListingDetails from '@/models/interfaces/ListingDetails';
import { useStore } from '@/store';
import { mapMutations } from 'vuex';
import { formatAsCurrency } from '@/utils/currency';
import { getItemNameFromId } from '@/utils/item-ids';

@Options({
  props: {
    listing: {} as ListingDetails,
  },
  store: useStore(),
  methods: {
    ...mapMutations(["setActiveListing"]),
    formatAsCurrency,
    getItemNameFromId
  },
})
export default class ListingCard extends Vue {
  listing!: ListingDetails;

  getHighestBid(): number {
    return this.listing.bids.length
      ? Math.max(
        ...this.listing.bids.map(bid => bid.price)
      )
      : this.listing.basePrice;
  }

  getImgUrl(): string {
    const images = require.context('@/assets/guns', false, /\.png$/);
    return images(`./${this.listing.itemId}.png`);
  }
}
</script>