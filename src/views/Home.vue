<template>
  <section class="home">
    <Banner/>
    <Gallery_list :items="items"/>
  </section>
</template>

<script>


import Gallery_list from "@/components/Gallery_list";
import Banner from "@/components/global/Banner";
export default {
  name: 'Home',
  components: {
    Banner,
    Gallery_list
  },
  data() {
    return {
      items: [],
    }
  },
  methods: {

  },
  mounted() {
    this.$store.dispatch('FETCH_DATA')
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'UPDATE_PHOTO_LIST') {
        this.items = state.photos
      }
    });
  }
}
</script>
