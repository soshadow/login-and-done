import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: "",
    userStatus: "", // 0 -> 普通 1 -> vip 2-> 高级vip
    vipLevel: "",
  },
  mutations: {
    login(state, v) {
      state.userInfo = v
  },
  setMemberInfo(state, v) {
      state.userStatus = v.userStatus
      state.vipLevel = v.vipLevel
  }
  },
  actions: {
    buyVip({ commit }, e) {
      return new Promise((resolve, reject) => {
          // mock api 交互
          setTimeout(() => {
              // 修改本地state
              commit("setMemberInfo", {
                  userStatus: e.userStatus,
                  vipLevel: e.vipLevel
              })
              resolve("购买成功")
          }, 1000)
      })
  },
  getFreeVip({ commit, state }) {
      // mock api 交互
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (state.userStatus === 0) {
                  commit("setMemberInfo", {
                      userStatus: 1,
                      vipLevel: 0
                  })
                  resolve("分享成功，您已获得一个月的高级vip会员")
              } else {
                  resolve("分享成功")
              }
          }, 1000)
      })
  }
  },
  getters:{
    memberInfo(state) {
      switch (state.userStatus) {
          case 0:
              return "普通会员"
          case 1:
              return "vip会员"
          case 2:
              return `高级V${state.vipLevel}会员`
          default:
              return "普通会员"
      }
  }
  },
  modules: {
  }
})
