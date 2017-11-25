const state = {
  count: 0,
  catalogs: [
    {id: 1, name: 'about', link: "/about/"},
    {id: 2, name: 'form', link: "/form/"},
  ]
}
const mutations = {
  INCREMENT (state, payload) {
    state.count += payload
  },
  DE_INCREMENT (state, payload) {
    state.count -= payload
  }
}
const actions = {
  increment: ({ commit }, amount) => commit('INCREMENT', amount),
  deincrement: ({ commit }, amount) => commit('DE_INCREMENT', amount)
}
const getters = {
  getCounter: state => state.count,
  getCatalogs: state => state.catalogs
}
export default {
  state,
  getters,
  mutations,
  actions
}