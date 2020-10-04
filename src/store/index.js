import Vue from 'vue'
import Vuex from 'vuex'
import fetch_mixin from "../mixins/fetch_mixin";
Vue.use(Vuex)


export default new Vuex.Store({
    mixins: [fetch_mixin],
    getters: {
    },
    state: {
        photos: [],
        showMore: [],
        randomPhoto: '',
        categoryNavList: [],
        categoryPhotos: [],
        photoCard: [],
        userProfile: []
    },
    mutations: {
        UPDATE_PHOTO_LIST(state, data) {
            state.photos = data
        },
        UPDATE_RANDOM_PHOTO(state, data) {
            state.randomPhoto = data
        },
        UPDATE_CATEGORY_NAV_LIST(state, data) {
            let list = data.map(item => {
                return {
                    id: item.id,
                    title: item.title
                }
            })
            state.categoryNavList = list
        },
        UPDATE_CATEGORY_PHOTO_LIST(state, data) {
            state.categoryPhotos = data
        },
        UPDATE_SHOW_MORE_PHOTOS(state, data) {
            state.showMore = data
        },
        UPDATE_PHOTO_CARD(state, data) {
            state.photoCard = data
        },
        UPDATE_USER_PROFILE(state, data) {
            state.userProfile = data
        },
    },
    actions: {
        async FETCH_DATA(ctx) {
            let resp = await fetch_mixin.fetchMixin({
                request: 'photos?&per_page=20&page=1',
            })
                .then(resp => resp.json())
                .then(json => ctx.commit('UPDATE_PHOTO_LIST', json))
                .catch(err => console.warn(err))
            return resp
        },

        async FETCH_RANDOM_PHOTO(ctx) {
            let resp = await fetch_mixin.fetchMixin({
                request: 'photos/random',
            })
                .then(resp => resp.json())
                .then(json => ctx.commit('UPDATE_RANDOM_PHOTO', json.urls.raw))
                .catch(err => console.warn(err))
            return resp
        },
        async FETCH_CATEGORY(ctx) {
            let resp = await fetch_mixin.fetchMixin({
                request: 'collections?&title',
            })
                .then(resp => resp.json())
                .then(json => ctx.commit('UPDATE_CATEGORY_NAV_LIST', json))
                .catch(err => console.warn(err))
            return resp
        },
        async FETCH_CATEGORY_PHOTO(ctx, id) {
            let resp = await fetch_mixin.fetchMixin({
                request: `collections/${id}/photos`,
            })
                .then(resp => resp.json())
                .then(json => {
                    ctx.commit('UPDATE_CATEGORY_PHOTO_LIST', json)
                    return json
                })
                .catch(err => console.warn(err))
            return resp
        },
        async FETCH_SHOW_MORE_PHOTO(ctx, page) {
            let resp = await fetch_mixin.fetchMixin({
                request: `photos?&per_page=20&page=${page}`,
            })
                .then(resp => resp.json())
                .then(json => {
                    ctx.commit('UPDATE_SHOW_MORE_PHOTOS', json)
                    return json
                })
                .catch(err => console.warn(err))
            return resp
        },
        async FETCH_PHOTO_CARD(ctx, id) {
            let resp = await fetch_mixin.fetchMixin({
                request: `photos/${id}`,
            })
                .then(resp =>  resp.json())
                .then(json => {
                    ctx.commit('UPDATE_PHOTO_CARD', json)
                    return json
                })
                .catch(err => console.warn(err))
            return resp
        },
        async FETCH_PROFILE(ctx, username) {

            let resp = await fetch_mixin.fetchMixin({
                request: `users/${username}`,
            })
                .then(resp => resp.json())
                .then(json => {
                    ctx.commit('UPDATE_PHOTO_CARD', json)
                    return json
                })
                .catch(err => console.warn(err))
            return resp
        },
    },
    modules: {}
})
