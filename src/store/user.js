import { fireauth } from '../firebase/'

const state = {
  currentUser: null,
}
const mutations = {
  setUser (state, payload) {
    state.currentUser = payload
  },
}
const actions = {
  actSignin: ({ commit }, payload) => {
    fireauth.signInWithEmailAndPassword(payload.email, payload.password)
    .then(     
      user => { //es6          
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        console.log('currentUser', newUser);
        commit('setUser', newUser)
      }
    )
    .catch(function(error) { //es5
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      // console.log(error);
    })
  },
}
const getters = {
  currentUser: state => state.currentUser,
}
export default {
  state,
  getters,
  mutations,
  actions
}