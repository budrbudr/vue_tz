<template>
  <section class="user-card-section">
    <div class="container">
      <div class="wrap">
        <b-button @click="$router.go(-1)" variant="info">Вернуться назад</b-button>
        <b-card header-tag="header" header-bg-variant="info" footer-tag="footer">
          <template v-slot:header>
            <h2 class="mb-0">{{ about.username }}</h2>
          </template>
          <b-card-text>
            <img v-if="about.profile_image" :src="about.profile_image.medium" alt="">
          </b-card-text>
          <b-card-text>
            <span>First Name: {{about.first_name}}</span>
          </b-card-text>
          <b-card-text>
            <span>Followers: {{about.followers_count}}</span>
          </b-card-text>
          <b-card-text>
            <span>Instagram username: {{about.instagram_username}}</span>
          </b-card-text>
          <b-card-text>
            <span>Total photos: {{about.total_photos}}</span>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "User_card",
  data() {
    return {
      about: [],
    }
  },
  mounted() {
    this.$store.dispatch('FETCH_PROFILE', this.$route.params.id)
        .then(json => {
          this.about = json
        })
  }
}
</script>

<style lang="sass" scoped>
.user-card-section
  .wrap
    button
      margin: 30px 0
</style>
