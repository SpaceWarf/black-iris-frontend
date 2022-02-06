<template>
  <div class="card" v-on:click="onClick()">
    <div class="image">
      <img :src="getImgUrl()" alt="Item Image">
    </div>
    <div class="body">
      <div class="title-row">
        <p class="item-name">Combat Pistol</p>
        <p class="end-date">2022-01-08 <font-awesome-icon icon="clock"/></p>
      </div>
      <div class="details-row">
        <p class="quantity">5</p>
        <p class="separator">items at</p>
        <p class="price">5,000$</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ListingDetails } from './Listings.vue';

@Options({
  props: {
    listing: {} as ListingDetails,
  },
})
export default class ListingCard extends Vue {
  listing!: ListingDetails;

  getImgUrl(): string {
    const images = require.context('@/assets/guns', false, /\.png$/);
    return images(`./${this.listing.asset}`);
  }

  onClick(): void {
    console.log("click: ", this.listing);
  }
}
</script>

<style scoped lang="scss">

</style>
