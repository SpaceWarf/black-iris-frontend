<template>
  <div class="content">
    <StoreListing></StoreListing>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import StoreListing from '@/components/listings/Listings.vue';

@Options({
  components: {
    StoreListing,
  },
})
export default class Store extends Vue {}
</script>
