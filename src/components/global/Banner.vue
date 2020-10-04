<template>
  <section class="banner-section">
    <div class="banner-photo-block">
      <img :src="randomPhoto" alt="">
    </div>
  </section>
</template>

<script>

export default {
  name: "Banner",
  data () {
    return {
      randomPhoto: ''
    }
  },
  mounted() {
    this.$store.dispatch('FETCH_RANDOM_PHOTO')
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'UPDATE_RANDOM_PHOTO') {
        this.randomPhoto = state.randomPhoto
      }
    });
  }
}
</script>

<style scoped>

</style>
