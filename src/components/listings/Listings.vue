<template>
  <div id="store">
    <h1>Listings</h1>
    <div class="listing-categories">
      <div
        v-for="category in getCategories()"
        :key="category"
        class="listing-category"
      >
        <CollapsableSection :header="category">
          <div class="listings">
            <ListingCard
              v-for="listing in getListingsFromCategory(category)"
              :key="listing.id"
              :listing="listing"
            ></ListingCard>
          </div>
        </CollapsableSection>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ListingCard from './ListingCard.vue';
import CollapsableSection from '../common/CollapsableSection.vue';

export interface BidDetails {
  id: string;
  bidder: string;
  date: Date;
  price: number;
}

export interface ListingDetails {
  id: string;
  itemId: string;
  category: string;
  asset: string;
  quantity: number;
  bids: BidDetails[];
  endDate: Date;
}

export enum Categories {
  HANDGUNS = 'Handguns',
  SMGS = 'SMGs',
  SHOTGUNS = 'Shotguns',
  ASSAULTRIFLES = 'Assault Rifles',
  SNIPERRIFLES = 'Sniper Rifles',
}

@Options({
  props: {
  },
  components: {
    ListingCard,
    CollapsableSection
  },
})
export default class Listings extends Vue {
  listings: ListingDetails[] = [
    {
      id: '12345',
      itemId: 'ak-47',
      category: Categories.ASSAULTRIFLES,
      asset: 'ak-47.png',
      quantity: 5,
      bids: [{
        id: '12345',
        bidder: 'Grimm',
        date: new Date(),
        price: 5000,
      }],
      endDate: new Date(),
    },
    {
      id: '12345',
      itemId: 'combat-pistol',
      asset: 'combat-pistol.png',
      category: Categories.HANDGUNS,
      quantity: 5,
      bids: [{
        id: '12345',
        bidder: 'Grimm',
        date: new Date(),
        price: 5000,
      }],
      endDate: new Date(),
    },
    {
      id: '12345',
      itemId: 'combat-pistol',
      asset: 'combat-pistol.png',
      category: Categories.HANDGUNS,
      quantity: 5,
      bids: [{
        id: '12345',
        bidder: 'Grimm',
        date: new Date(),
        price: 5000,
      }],
      endDate: new Date(),
    },
  ];
  Categories = Categories;

  getCategories(): Categories[] {
    return Object.values(Categories)
      .filter(category => this.categoryHasListings(category));
  }

  categoryHasListings(category: Categories): boolean {
    return this.listings.some((listing) => listing.category === category);
  }

  getListingsFromCategory(category: Categories): ListingDetails[] {
    return this.listings.filter((listing) => listing.category === category);
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/index";
#store {
  .listing-categories {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .listings {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-left: calc(30px - $card-margin);
  }
}
</style>
