<template>
  <header>
      <nav>
        <router-link to="/">
          <b-iconstack font-scale="3">
            <b-icon stacked icon="camera" variant="info" scale="0.75"></b-icon>
            <b-icon stacked icon="slash-circle" variant="danger"></b-icon>
          </b-iconstack>
        </router-link>
        <ul>
          <li v-for="item in categoryNavList">
            <router-link :to="{name: 'category', params: {id: item.id}}">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      categoryNavList: [],
    }
  },
  methods: {

  },
  mounted() {
    this.$store.dispatch('FETCH_CATEGORY')
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'UPDATE_CATEGORY_NAV_LIST') {
        this.categoryNavList = state.categoryNavList
      }
    });
  }
}
</script>

<style scoped>

</style>
