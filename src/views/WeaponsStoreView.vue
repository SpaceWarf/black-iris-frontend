<template>
  <PageHeader></PageHeader>
  <div class="content">
    <Listings></Listings>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Listings from '@/components/listings/Listings.vue';
import PageHeader from '@/components/PageHeader.vue';

@Options({
  components: {
    Listings,
    PageHeader
  },
})
export default class WeaponsStoreView extends Vue {}
</script>
