<template>
  <div>
    <admin-header />
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
    <div class="panel" id="page-wrap">
      <blogList
          :sendPreviewItem="showPreviewItem"
          :sendEditItem="showEdtItem"
          :addNewArticle="createNewArticle"
          :deleteArticle="deleteArticle"
          :addActiveClass="addActiveClass"
          :list="blogList"
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
import adminHeader from '@/js/components/admin/admin-header'
import blogEdit from "@/js/components/admin/blogEdit";
import blogPreview from "@/js/components/admin/blogPreview";
import blogList from "@/js/components/admin/blogList";
export default {
name: "adminPanel",
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
  created(){
    this.setListLocale(this.$t('announcementsList'))
  },
  methods: {
        setListLocale(list){
            this.blogList = list.map((item) => {
                return {
                    description: item.description,
                    imgPath: item.imgPath,
                    step: item.step,
                    title: item.title,
                    isActive: false
                }
            })
        },
        showPreviewItem(item){
          this.previewItem = ''
          this.editItem = ''
          this.previewItem = item
        },
        showEdtItem(item) {
          this.previewItem = ''
          this.editItem = item
        },
        createNewArticle() {
          const newItem = {
            description: '',
            imgPath: '',
            step: '',
            title: '',
            isActive: false
          }
          this.previewItem = ''
          this.editItem = newItem
        },
        addToList(item){
          this.blogList.push(item)
          this.previewItem = ''
          this.editItem = ''
        },
        deleteArticle(item){
          if(item){
            const index = this.blogList.indexOf(item)
            if(index > -1){
              this.blogList.splice(index, 1)
              this.previewItem = ''
              this.editItem = ''
            }
          }
        },
        addActiveClass(item){
          this.blogList.forEach((article) =>
              article === item ?
                  article.isActive = true :
                  article.isActive = false
          )
        },
      changeLanguage(lang){
          this.$i18n.locale = lang
          this.previewItem = ''
          this.editItem = ''
          this.setListLocale(this.$t('announcementsList'))
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
