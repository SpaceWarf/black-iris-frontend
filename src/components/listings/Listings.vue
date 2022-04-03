<template>
  <div id="store">
    <div class="listings-section">
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
    <Sidebar></Sidebar>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListingCard from "./ListingCard.vue";
import CollapsableSection from "../common/CollapsableSection.vue";
import ListingDetails from "@/models/interfaces/ListingDetails";
import Sidebar from "./Sidebar.vue";

export enum Categories {
  HANDGUNS = "Handguns",
  SMGS = "SMGs",
  SHOTGUNS = "Shotguns",
  ASSAULTRIFLES = "Assault Rifles",
  SNIPERRIFLES = "Sniper Rifles",
}

@Options({
  props: {},
  components: {
    ListingCard,
    CollapsableSection,
    Sidebar,
  },
})
export default class Listings extends Vue {
  listings: ListingDetails[] = [
    {
      id: "cb710547-585b-4fca-a2b4-955a4cb2921a",
      itemId: "vintage-pistol",
      category: "Handguns",
      quantity: 78,
      basePrice: 33075,
      bids: [],
      endDate: "2021-02-22 21:11:18",
    },
    {
      id: "6de29b3d-14af-4e54-95c6-28900e7c21e5",
      itemId: "double-action-revolver",
      category: "Handguns",
      quantity: 26,
      basePrice: 193998,
      bids: [
        {
          id: "0f42c297-4035-483d-8846-f1149a7dfb79",
          bidder: "Grimm",
          date: "2021-06-27 16:15:38",
          price: 88405,
        },
        {
          id: "4046db50-1fd8-4e9b-9e59-1bc84b0023eb",
          bidder: "Genesis",
          date: "2021-07-01 09:50:51",
          price: 301435,
        },
        {
          id: "31d60000-ec7f-41f9-8e23-9246debbddc3",
          bidder: "Good Family",
          date: "2021-05-18 01:55:57",
          price: 192429,
        },
      ],
      endDate: "2022-01-23 01:55:48",
    },
    {
      id: "dc48b891-1335-44be-a520-cf765920a41b",
      itemId: "gusenberg",
      category: "SMGs",
      quantity: 34,
      basePrice: 83224,
      bids: [
        {
          id: "f888ab51-e6ac-4a1b-aed3-f232805c9dee",
          bidder: "Marinos",
          date: "2021-02-01 13:32:47",
          price: 361234,
        },
        {
          id: "6d837513-ede5-48e5-a152-d5ad85894340",
          bidder: "Marinos",
          date: "2021-06-03 03:42:48",
          price: 233463,
        },
      ],
      endDate: "2021-07-10 09:19:15",
    },
    {
      id: "019b6165-abfb-41d2-bd9e-d0e21410ddfc",
      itemId: "sawed-off-shotgun",
      category: "Shotguns",
      quantity: 33,
      basePrice: 208581,
      bids: [
        {
          id: "b9798a1b-36b0-4aa7-89f6-c2ac96e8522a",
          bidder: "Genesis",
          date: "2022-02-16 23:21:27",
          price: 35003,
        },
      ],
      endDate: "2021-05-15 16:39:15",
    },
    {
      id: "2923a819-c1a5-4eb5-bda2-b1a2cd08cfca",
      itemId: "carbine-rifle",
      category: "Assault Rifles",
      quantity: 10,
      basePrice: 14207,
      bids: [
        {
          id: "49a8f705-621b-4a9c-a75d-bc435f073c78",
          bidder: "Grimm",
          date: "2021-12-24 07:16:32",
          price: 307143,
        },
        {
          id: "6b2f1fe9-5cc9-4936-b3c5-e42ea5b639ee",
          bidder: "Marinos",
          date: "2021-03-12 06:53:14",
          price: 27499,
        },
      ],
      endDate: "2021-10-22 21:54:08",
    },
    {
      id: "b6d9403c-c1e5-4a35-8aa6-4defb7fb7c19",
      itemId: "pistol-50",
      category: "Handguns",
      quantity: 23,
      basePrice: 299182,
      bids: [
        {
          id: "810ce6f5-2a24-420e-990e-72c2bf62f796",
          bidder: "MS-13",
          date: "2021-03-16 12:47:49",
          price: 349794,
        },
        {
          id: "f570bbd6-96ec-4674-abd6-a0eaa21faa3e",
          bidder: "MS-13",
          date: "2021-12-09 13:33:48",
          price: 251731,
        },
        {
          id: "88e4cb6b-aec5-40d3-8dfc-e5a3c29bccfc",
          bidder: "Genesis",
          date: "2021-07-16 23:52:36",
          price: 161190,
        },
      ],
      endDate: "2021-08-13 00:32:43",
    },
    {
      id: "69e8ca00-298c-4c65-b613-7791105c5a28",
      itemId: "pump-shotgun",
      category: "Shotguns",
      quantity: 83,
      basePrice: 343266,
      bids: [
        {
          id: "e4b3e570-eebc-4898-8ab5-386c37d3984b",
          bidder: "MS-13",
          date: "2021-08-17 13:58:51",
          price: 333574,
        },
        {
          id: "216f5380-72ac-4584-b1d5-ff6279cc6a80",
          bidder: "Marinos",
          date: "2021-09-19 06:37:36",
          price: 377704,
        },
        {
          id: "acb8d4e9-6a4b-45b4-8e97-1d22055c368f",
          bidder: "Good Family",
          date: "2021-10-29 05:40:44",
          price: 380355,
        },
      ],
      endDate: "2021-02-15 06:23:56",
    },
    {
      id: "7abb5e76-2eeb-47c1-9c2d-55e2b1b7890d",
      itemId: "combat-pistol",
      category: "Handguns",
      quantity: 4,
      basePrice: 188923,
      bids: [
        {
          id: "dba1bb15-1f08-43f6-ae69-dd4c596336c2",
          bidder: "MS-13",
          date: "2021-09-18 14:46:24",
          price: 131720,
        },
        {
          id: "663ea793-78f9-45b1-977e-dd8f4d744ae2",
          bidder: "Genesis",
          date: "2021-09-23 00:14:40",
          price: 121835,
        },
        {
          id: "b4c7d2f8-1c51-4b38-b2f4-ef0d21617b4e",
          bidder: "Marinos",
          date: "2021-08-08 08:20:51",
          price: 487438,
        },
      ],
      endDate: "2022-02-19 09:51:26",
    },
    {
      id: "7f045481-31af-4fd9-887b-e538996048b3",
      itemId: "smg-mk2",
      category: "SMGs",
      quantity: 86,
      basePrice: 491111,
      bids: [
        {
          id: "7a3d39c2-eae9-4664-a6b0-01edd0e114c8",
          bidder: "MS-13",
          date: "2021-10-18 21:31:51",
          price: 483877,
        },
      ],
      endDate: "2021-08-08 14:31:33",
    },
    {
      id: "f85483f7-8e52-4f87-9c3d-48ab79971bb9",
      itemId: "special-carbine",
      category: "Assault Rifles",
      quantity: 34,
      basePrice: 365817,
      bids: [],
      endDate: "2021-02-17 07:26:34",
    },
  ];
  Categories = Categories;

  getCategories(): Categories[] {
    return Object.values(Categories).filter((category) =>
      this.categoryHasListings(category)
    );
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
  display: flex;
  height: 100%;

  h1 {
    height: $store-header-height;
  }

  .listings-section {
    width: 100%;
    flex: 1;
    padding: 10px 0 0 20px;

    .listing-categories {
      height: calc(100% - $store-header-height);
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-bottom: 20px;
      overflow: scroll;

      .listings {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-left: calc(30px - $card-margin);
      }
    }
  }
}
</style>
