<template>
  <section class="photo-card-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="buttons-block">
            <b-button @click="$router.go(-1)" variant="info">Вернуться назад</b-button>
            <b-button v-if="photoCard.user" @click="$router.push({name: 'about-user', params: {id: photoCard.user.username }})" variant="info">
              {{ photoCard.user.name }}
            </b-button>
          </div>
          <img v-if="photoCard.urls" class="photo-card__img__bg" :src="photoCard.urls.raw" alt="">
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Photo_card",
  data() {
    return {
      photoCard: [],
    }
  },

  mounted() {
    this.$store.dispatch('FETCH_PHOTO_CARD', this.$route.params.id)
        .then(json => {
          this.photoCard = json
        })
  }
}
</script>

<style lang="sass" scoped>
.photo-card-section
  position: relative

  .container

    .photo-card__img__bg
      left: 0
      top: 0
      position: absolute
      width: 100%
      z-index: -1

    .buttons-block
      display: flex
      flex-direction: column
      align-items: flex-start

      button
        margin-top: 30px
</style>
