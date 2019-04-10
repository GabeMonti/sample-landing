import Vue from 'vue'
// import store from './store'

Vue.prototype.$hub = new Vue({
    created() {
      //
    },
    methods: {
      storeLoaded() {
        this.$emit('update')
      }
    }
})


