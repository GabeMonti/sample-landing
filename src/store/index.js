import Vuex from 'vuex'
import { stat } from 'fs';

const store = new Vuex.Store({
    state: {
        languages: '',
        currentLanguage: 'us'
    },
    actions: {
        UPDATE_CURRENT_LANGUAGE({ commit }, payload){
            commit("update_language", payload)
        }
    },
    mutations: {
        update_language(state, payload) {
            state.currentLanguage = payload
        },
    },
    getters: {
        languages: state => {
            return state.languages
        },
        current_language(state) {
            return state.currentLanguage
        }
    }
})

export default store
