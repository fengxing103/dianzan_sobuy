import Vue from 'vue'
import Vuex, { mapState,mapGetters,mapActions } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ApiUrl: localStorage['CurrLine'] || ApiUrl,
    InitData: localStorage['InitData']?JSON.parse(localStorage['InitData']):{
      BanksList: [],
      UserGradeList: [],
      bannerList: [],
      projectgrouplist: [],
      kefu: {},
      memberList: [],
      noticelist: [{content: ''}],
      taskclasslist: [],
      userviplist: [],
    },
    UserInfo: localStorage['UserInfo']?JSON.parse(localStorage['UserInfo']):'',
    BankCardList: localStorage['BankCardList']?JSON.parse(localStorage['BankCardList']):[],
    MiUserInfo: localStorage['MiUserInfo']?JSON.parse(localStorage['MiUserInfo']):'',
    ChatData: localStorage['ChatData']?JSON.parse(localStorage['ChatData']):'',
    FriendInfo: localStorage['FriendInfo']?JSON.parse(localStorage['FriendInfo']):'',
    SoFriendInfo: localStorage['SoFriendInfo']?JSON.parse(localStorage['SoFriendInfo']):'',
    GroupInfo: localStorage['GroupInfo']?JSON.parse(localStorage['GroupInfo']):'',
    SoGroupInfo: localStorage['SoGroupInfo']?JSON.parse(localStorage['SoGroupInfo']):'',
    FriendList: localStorage['FriendList']?JSON.parse(localStorage['FriendList']):'',
    GroupList: localStorage['GroupList']?JSON.parse(localStorage['GroupList']):'',
    GroupMember: localStorage['GroupMember']?JSON.parse(localStorage['GroupMember']):'',
  },
  getters: {
    VipList: state => {
      return state.InitData.UserGradeList.filter(item=>item.grade!=1)
    },
  },
  mutations: {
    UpdateApiUrl (state, payload) {
      state.ApiUrl = payload.data;
      localStorage['ApiUrl'] = JSON.stringify(payload.data);
    },
    UpdateInitData (state, payload) {
      state.InitData = payload.data;
      localStorage['InitData'] = JSON.stringify(payload.data);
    },
    UpdateUserInfo (state, payload) {
      state.UserInfo = payload.data;
      localStorage['UserInfo'] = JSON.stringify(payload.data);
    },
    UpdateBankCardList (state, payload) {
      state.BankCardList = payload.data;
      localStorage['BankCardList'] = JSON.stringify(payload.data);
    },
    UpdateMiUserInfo(state, payload) {
      state.MiUserInfo = payload.data;
      localStorage['MiUserInfo'] = JSON.stringify(payload.data);
    },
    UpdateChatData(state, payload) {
      state.ChatData = payload.data;
      localStorage['ChatData'] = JSON.stringify(payload.data);
    },
    UpdateFriendInfo(state, payload) {
      state.FriendInfo = payload.data;
      localStorage['FriendInfo'] = JSON.stringify(payload.data);
    },
    UpdateSoFriendInfo(state, payload) {
      state.SoFriendInfo = payload.data;
      localStorage['SoFriendInfo'] = JSON.stringify(payload.data);
    },
    UpdateGroupInfo(state, payload) {
      state.GroupInfo = payload.data;
      localStorage['GroupInfo'] = JSON.stringify(payload.data);
    },
    UpdateSoGroupInfo(state, payload) {
      state.SoGroupInfo = payload.data;
      localStorage['SoGroupInfo'] = JSON.stringify(payload.data);
    },
    UpdateFriendList(state, payload) {
      state.FriendList = payload.data;
      localStorage['FriendList'] = JSON.stringify(payload.data);
    },
    UpdateGroupList(state, payload) {
      state.GroupList = payload.data;
      localStorage['GroupList'] = JSON.stringify(payload.data);
    },
    UpdateGroupMember(state, payload) {
      state.GroupMember = payload.data;
      localStorage['GroupMember'] = JSON.stringify(payload.data);
    },
  },
  actions: {
    UpdateApiUrl: ({ commit },data) => commit('UpdateApiUrl',{data}),
    UpdateInitData: ({ commit },data) => commit('UpdateInitData',{data}),
    UpdateUserInfo: ({ commit },data) => commit('UpdateUserInfo',{data}),
    UpdateBankCardList: ({ commit },data) => commit('UpdateBankCardList',{data}),
    UpdateMiUserInfo: ({ commit },data) => commit('UpdateMiUserInfo',{data}),
    UpdateChatData: ({ commit },data) => commit('UpdateChatData',{data}),
    UpdateFriendInfo: ({ commit },data) => commit('UpdateFriendInfo',{data}),
    UpdateSoFriendInfo: ({ commit },data) => commit('UpdateSoFriendInfo',{data}),
    UpdateGroupInfo: ({ commit },data) => commit('UpdateGroupInfo',{data}),
    UpdateSoGroupInfo: ({ commit },data) => commit('UpdateSoGroupInfo',{data}),
    UpdateFriendList: ({ commit },data) => commit('UpdateFriendList',{data}),
    UpdateGroupList: ({ commit },data) => commit('UpdateGroupList',{data}),
    UpdateGroupMember: ({ commit },data) => commit('UpdateGroupMember',{data}),
  },
  modules: {

  }
})

Vue.mixin({
  computed: {
    ...mapState([
      'ApiUrl',
      'InitData',
      'UserInfo',
      'BankCardList',
      'MiUserInfo',
      'ChatData',
      'FriendInfo',
      'SoFriendInfo',
      'GroupInfo',
      'SoGroupInfo',
      'FriendList',
      'GroupList',
      'GroupMember',
    ]),
    ...mapGetters([
      'VipList',
    ])
  },
  methods: {
    ...mapActions([
      'UpdateApiUrl',
      'UpdateInitData',
      'UpdateUserInfo',
      'UpdateBankCardList',
      'UpdateMiUserInfo',
      'UpdateChatData',
      'UpdateFriendInfo',
      'UpdateSoFriendInfo',
      'UpdateGroupInfo',
      'UpdateSoGroupInfo',
      'UpdateFriendList',
      'UpdateGroupList',
      'UpdateGroupMember',
    ])
  },
})
