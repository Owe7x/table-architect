import Vue from 'vue'
import { make, set, dispatch } from 'vuex-pathify'
import router from '@/router'
import i18n from '../../i18n';

const state = {
  user: null,

}

const mutations = {
  ...make.mutations(state),
}

const getters = {
}

const actions = {
  async logOut({ commit, state }) {
    let response = await this._vm.$areYouSure("Exit?")
    if (response) {
      let logout = await this._vm.$firebase.auth().signOut()
      commit("SET_USER", null)
    }
  },
  async retrieveUser({ commit, state, dispatch }, uid) {
    let currentUser = this._vm.$firebase.auth().currentUser
    let snapshot = await this._vm.$firebase.firestore().collection('users').doc(uid).get()
    if (snapshot.exists) {
      let user = snapshot.data()
      commit("SET_USER", user)
    }
    else {
      let [name, lastName] = (currentUser.displayName || "").split(" ")
      await commit("SET_USER", {
        uid: currentUser.uid,
        photoURL: currentUser.photoURL || "",
        email: currentUser.email || "",
        telephone: currentUser.phoneNumber || "",
        name: name || "",
        lastName: lastName || "",
      })
    }
  },
}



export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

