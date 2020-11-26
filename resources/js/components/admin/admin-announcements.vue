<template>
    <div>
        <adminHeader/>
        <div class="language-panel">
            <ul class="language-panel__list">
                <li
                    class="language-panel__item"
                    v-for="(lang, index) in languageSelect"
                    :key="index"
                    :class="[lang === $i18n.locale ? 'language-panel__active': '']"
                    @click="changeLanguage(lang)"
                >
                    {{lang.toUpperCase()}}
                </li>
            </ul>
        </div>
        <div class="panel">
            <blogList
                v-for="(item, index) in getArticlesList"
                :key="index"
                v-if="index === $i18n.locale"
                :sendPreviewItem="showPreviewItem"
                :sendEditItem="showEdtItem"
                :addNewArticle="createNewArticle"
                :deleteArticle="deleteItem"
                :addActiveClass="addActiveClassName"
                :list="item"
            />
            <blogPreview
                v-if="previewItem"
                :item="previewItem"
            />
            <blogEdit
                v-if="editItem"
                :editItem="editItem"
                @addItem="addToList"
            />
        </div>
    </div>
</template>
<script>
import blogEdit from "@/js/components/admin/blogEdit";
import blogPreview from "@/js/components/admin/blogPreview";
import blogList from "@/js/components/admin/blogList";
import adminHeader from '@/js/components/admin/admin-header'
import {mapActions, mapGetters} from "vuex";
export default {
    name: "admin-announcements",
    components: {
        blogList,
        blogPreview,
        blogEdit,
        adminHeader
    },
    data(){
        return {
            previewItem: '',
            editItem: '',
            blogList: '',
            languageSelect: ['en', 'ru', 'uk']
        }
    },
    computed:{
        ...mapGetters(['getArticlesList', 'getStatus']),
    },
    mounted(){
        return window.Laravel.isLoggedin ?
        this.getArticles() : this.$router.push('/admin')
    },
    methods: {
        ...mapActions(['deleteArticle', 'getArticles']),
        showPreviewItem(item){
            this.previewItem = ''
            this.editItem = ''
            this.previewItem = item
        },
        showEdtItem(item) {
            this.previewItem = ''
            this.editItem = item
            console.log(this.editItem)
        },
        createNewArticle() {
            const newItem = {
                description: '',
                image: '',
                full_image_url: '',
                title: '',
                language: this.$i18n.locale,
                article_id: null,
            }
            this.previewItem = ''
            this.editItem = newItem
        },
        addToList(){
            this.previewItem = ''
            this.editItem = ''
        },
        deleteItem(item){
            this.deleteArticle(item)
                .then((resp)=>{
                    if(resp){
                        this.getArticles()
                    }
                })
            this.previewItem = ''
            this.editItem = ''
        },
        addActiveClassName(item){
            this.getArticlesList[this.$i18n.locale].forEach((article) =>
                article === item ?
                    article.isActive = true :
                    article.isActive = false
            )
        },
        changeLanguage(lang){
            this.$i18n.locale = lang
            this.previewItem = ''
            this.editItem = ''
        }
    }
}
</script>

<style scoped lang="scss">
.panel {
    width: 100%;
    height:100vh;
    padding: 0 35px;
    display: flex;
    justify-content: space-between;
}
.language-panel {
    display: flex;
    justify-content: flex-end;
    padding:  35px;
    margin-left: 50px;
&__list {
     width: 100%;
     max-width: 150px;
     display: flex;
     justify-content: space-between;
 }
&__item {
     list-style: none;
     opacity: .4;
     cursor: pointer;
 }
&__active {
     text-decoration: underline;
     opacity: 1;
 }
}
@media only screen and (max-width: 770px) {
    .panel {
        flex-direction: column;
    }
}
</style>
