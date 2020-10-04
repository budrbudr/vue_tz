<template>
  <section class="category">
    <Banner/>
    <Gallery_list :items="photos"/>
  </section>
</template>

<script>
import Gallery_list from "@/components/Gallery_list";
import Banner from "@/components/global/Banner";

export default {
  name: "Category",
  components: {Banner, Gallery_list},
  data(){
    return {
      photos:[],
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch('FETCH_CATEGORY_PHOTO', this.$route.params.id)
        .then((json)=> {
          this.photos = json
        })
    next()
  },
  mounted() {
    this.$store.dispatch('FETCH_CATEGORY_PHOTO', this.$route.params.id)
    .then((json)=> {
      this.photos = json
    })
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'UPDATE_CATEGORY_PHOTO_LIST') {
        this.photos = state.photos
      }
    });
  },
}

</script>

<style scoped>

</style>
