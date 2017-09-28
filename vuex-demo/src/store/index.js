import Vue from 'vue'
import Vuex from 'vuex'
import * as index from '../api/index'

Vue.use(Vuex)

const state = {
  all: [],
  value: 0
}

const getters = {
  allData: state => state.all,
  getValue: state => state.value
}

const mutations = {
  receiveData(state, data) {
    state.all = data
  },
  setdata(state, data) {
    state.all.push(data)
  },
  switchRoom(state, value) {
    state.value = value
  }
}

const actions = {
  getData({commit}) {
    index.getAllMessages((data) => {
      commit('receiveData', data)
    })
  },
  setData({commit}, {text, thread}) {
    index.createMessage({text, thread}, (data) => {
      commit('setdata', data)
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
