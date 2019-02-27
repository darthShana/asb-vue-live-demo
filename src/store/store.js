import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        candidateList: [
            {
                candidateName: 'Dharshana',
                candidateDescription: 'hes pretty average'
            }
            ]
    },

    mutations: {
        add_candidate(state, candidate){
            state.candidateList.push(candidate)
        },
        set_candidates(state, candidates){
            state.candidateList = candidates
        }
    },

    actions: {
        new_candidate( {dispatch}, candidate) {
            axios.post('http://localhost:8083/candidates', candidate)
                .then(function (response) {
                    dispatch('load_candidates', response)
                })
        },
        load_candidates({commit}) {
            axios.get('http://localhost:8083/candidates')
                .then(r => r.data)
                .then(candidates => commit('set_candidates', candidates))
        }
    }
})