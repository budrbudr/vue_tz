<template>
  <section class="gallery-section">
    <div class="container">
      <div class="row">
        <div class="col-3 gallery-item" v-for="photo in items">
          <router-link :to="{name: 'photo-card', params: {id: photo.id}}">
            <img class="gallery__img" :src="photo.urls.raw" :alt="photo.alt_description">
          </router-link>
        </div>
      </div>
      <b-button v-show="$route.path === '/'" variant="success" @click="showMore">Show more</b-button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Gallery_list",
  props: ['items'],
  data() {
    return {
      counter: 2,
    }
  },
  methods: {
    showMore() {
      this.$store.dispatch('FETCH_SHOW_MORE_PHOTO', this.counter)
          .then(json => {
            json.forEach(item => {
              this.items.push(item)
            })
          })
      this.counter += 1
    }
  },
}
</script>

<style scoped>

</style>
