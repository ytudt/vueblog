import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from '../mutationss/'
import state from '../states/'
import mutations from '../mutationss/'

Vue.use(Vuex)
const store = new Vuex.Store({ state, mutations,strict: process.env.NODE_ENV !== 'production' })
export default store
