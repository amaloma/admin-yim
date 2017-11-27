<template>
  <f7-page>
    <f7-navbar title="Signin" back-link="Back" sliding></f7-navbar>
    <!-- <f7-block-title>Signin</f7-block-title> -->
    <f7-list form >
      <f7-list-item>
        <f7-label floating>E-mail</f7-label>
        <f7-input type="email" placeholder="E-mail" v-model="email"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label floating>Password</f7-label>
        <f7-input type="password" placeholder="Password" v-model="password"></f7-input>
      </f7-list-item>   
      <f7-list-item>
        <f7-button fill @click="onSignin()">Signin</f7-button>
      </f7-list-item>     
    </f7-list>
    <!-- <f7-block inner>
      <p><f7-button fill>Button Fill</f7-button></p>      
    </f7-block> -->
  </f7-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'signin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
    ])
  },
  methods: {
    // ...mapActions([
    //   'actSignin',
    // ])
    onSignin () {
      this.$store.dispatch('actSignin', {email: this.email, password: this.password})
    },
  },
  created () {
    // console.log('created ()', ...mapGetters(['currentUser']) );
  },
}
</script>