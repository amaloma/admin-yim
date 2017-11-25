import firebase from 'firebase'
import 'firebase/firestore'
import config from './config'

firebase.initializeApp(config)
const firestore = firebase.firestore()
const fireauth = firebase.auth()
export default ({
  fireauth,
  firestore
})