import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../assets/js/axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userList: []
	},
	mutations: {
		changeList(state,data) {
			state.userList = data
		}
	},
	actions: {
		getList({commit}, data) {
			axios.post('/api/userlist').then((res) => {
				if(res.code == 0){
					console.log('请求成功', res)
					commit('changeList', res.data)
				}
			})
		}
	},
	modules: {

	}
})
