const state = {
  count: 3,
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
  },
  mutPushCatalog (state) {
    state.catalogs.push({id: state.count++, name: 'push'+state.count, link: "/about/"}) 
  },
  mutPopCatalog (state) {
    state.catalogs.pop()
    state.count--
  },
}
const actions = {
  increment: ({ commit }, amount) => commit('INCREMENT', amount),
  deincrement: ({ commit }, amount) => commit('DE_INCREMENT', amount),
  actPushCatalog: ({ commit }, amount) => commit('mutPushCatalog'),
  actPopCatalog: ({ commit }, amount) => commit('mutPopCatalog')
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