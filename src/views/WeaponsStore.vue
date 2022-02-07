<template>
  <div class="content">
    <Listings></Listings>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Listings from '@/components/listings/Listings.vue';

@Options({
  components: {
    Listings,
  },
})
export default class WeaponsStore extends Vue {}
</script>
