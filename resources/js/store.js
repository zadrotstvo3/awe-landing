import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        status: '',
        articlesList: '',
        teamList: [],
        video: 'https://www.youtube.com/embed/nvq_lvC1MRY'
    },
    getters: {
        getStatus: (state) => state.status,
        getArticlesList: (state) => state.articlesList,
        getMembersList: (state) => state.teamList || [],
        getVideo: (state) => state.video
    },
    mutations: {
        setStatus(state, action){
          state.status = action
        },
        setArticlesList(state, action){
            state.articlesList = action
        },
        setTeamList(state, action){
            state.teamList = action
        },
        setNewVideo(state, action){
            state.video = action
        }
    },
    actions: {
        async logIn({state, commit}, action) {
            await axios.get('/airlock/csrf-cookie').then(() => {
                return  axios.post('api/login', action)
                    .then((resp)=>{
                        if(resp.data.message === 'Login successful'){
                            const status = resp.data.message
                            window.Laravel.isLoggedin = true
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
                  window.Laravel.isLoggedin = false
                  commit('setStatus', status)
              })
              .catch(err => console.log(err))
        },
        async getArticles({state, commit}, action){
            return await axios.get('api/article?limit=10&page=1')
                .then((resp) => {
                    const data = resp.data.data || ''
                    if(data){
                        const languages = articlesDistruction(data)
                        commit('setArticlesList', languages)
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
        async updateArticle({state, commit}, action){
            return await axios.put(`api/article/${action.article_id}`, action)
                .then((resp)=> {
                    if(resp) {
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
                    return resp.data
                })
                .catch(err => console.log(err))
        },
        async getTeamList({state, commit}){
            return await axios.get('api/team/member?limit=10&page=1')
                .then((resp)=>{
                    const data = resp.data.data || ''
                    commit('setTeamList', data)
                    return true
                })
                .catch(err => console.log(err))
        },
        async addTeamMember({state, commit}, action){
            return await axios.post('api/team/member', action)
                .then((resp) => {
                    if(resp){
                        return true
                    }
                })
                .catch(err => console.log(err))
        },
        async editCurrentMember({state, commit}, action){
            return axios.put(`api/team/member/${action.id}`, action)
                .then((resp)=>{
                    return true
                })
                .catch(err => console.log(err))
        },
        async deleteMember({state, commit}, action){
            return await axios.delete(`api/team/member/${action}`)
                .then((resp)=>{
                    return true
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
            rus_article = {},
            urk_article = {},
            full_image_url = '',
            id= '',
            image = '',
            user_id = '',
            updated_at = '',
            isActive = false
        } = item
        const date = new Date(created_at).toLocaleDateString("en-US")
        const newItemRu = {
            date,
            ...rus_article,
            full_image_url,
            id,
            image,
            user_id,
            updated_at,
            isActive
        }
        const newItemUk = {
            date,
            ...urk_article,
            full_image_url,
            id,
            image,
            user_id,
            updated_at,
            isActive
        }
        const newItemEn = {
            date,
            ...eng_article,
            full_image_url,
            id,
            image,
            user_id,
            updated_at,
            isActive
        }
        ru.push(newItemRu)
        en.push(newItemEn)
        uk.push(newItemUk)
    })
    const languages = {
        ru,
        en,
        uk
    }
    return languages
}
export default store
