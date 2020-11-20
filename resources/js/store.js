import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        status: '',
        articlesList: ''
    },
    getters: {
        getStatus: (state) => state.status,
        getArticlesList: (state) => state.articlesList
    },
    mutations: {
        setStatus(state, action){
          state.status = action
        },
        setArticlesList(state, action){
            state.articlesList = action
        }
    },
    actions: {
        async logIn({state, commit}, action) {
            await axios.get('/airlock/csrf-cookie').then(() => {
                return  axios.post('api/login', action)
                    .then((resp)=>{
                        if(resp.data.message === 'Login successful'){
                            const status = resp.data.message
                            commit('setStatus', status)
                        }
                    })
                    .catch(err => console.log(err))

            })
        },
        async logOut({state, commit}) {
          return axios.get('api/logout')
              .then((resp) => {
                  const status = resp.data.message
                  commit('setStatus', status)
              })
        },
        async getArticles({state, commit}, action){
            return await axios.get('api/article?limit=10&page=1')
                .then((resp) => {
                    const data = resp.data.data || ''
                    if(data){
                        commit('setArticlesList', [...data])
                    }
                    return true
                })
                .catch(err => console.log(err))
        },
        async createArticle({state, commit}, action) {
            return await axios.post('api/article', action)
                .then((resp)=> {
                    if(resp){
                        return true
                    }
                })
                .catch(err => console.log(err))

        },
        async deleteArticle({state, commit}, action){
            return await axios.delete(`api/article/${action}`)
                .then((resp)=> {
                    if(resp){
                        return true
                    }
                })
                .catch(err => console.log(err))
        },
        async uploadImage({state, commit}, action){
            return await axios.post('api/file/upload', action)
                .then((resp) => {
                    console.log(resp.data)
                    return resp.data
                })
                .catch(err => console.log(err))
        }
    }
})
const articlesDistruction = function (array){
    const ru = []
    const uk = []
    const en =[]
    array.map((item) => {
        const {
            created_at = '',
            eng_article = {},
            fu_image_ulr = ''
        } = item
    })
}
export default store
