import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        articlesList: ''
    },
    getters: {
        getArticlesList: (state) => state.articlesList
    },
    mutations: {
        setArticlesList(state, action){
            state.articlesList = action
        }
    },
    actions: {
        async logIn({state, commit}, action) {
            axios.defaults.withCredentials = true;

            await axios.get('/airlock/csrf-cookie').then(() => {

                axios.post('api/login', action)
                    .then((resp)=>{
                        if(resp.data.message === 'Login successful'){
                            return resp.data.message
                        }
                    })
                    .catch(err => console.log(err))

            })
        },
        async getArticles({state, commit}, action){
            await axios.get('api/article?limit=2&page=1')
                .then((resp) => {
                    console.log(resp.data.data)
                    const data = resp.data.data || ''
                    if(data){
                        commit('setArticlesList', [...data])
                    }
                })
        },
        async createArticle({state, commit}, action) {
            axios.defaults.withCredentials = true;
            await axios.post('api/article', action)
                .then((resp)=> {
                    console.log(resp.data)
                })
        }
    }
})
export default store
