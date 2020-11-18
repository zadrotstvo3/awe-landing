<template>
  <div>
    <admin-header />
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
    }
  },
  created(){
    const list = this.$t('announcementsList')
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
  methods: {
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
  }
}
</script>

<style scoped lang="scss">
.panel {
  width: 100%;
  height:100vh;
  padding: 35px;
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 770px) {
  .panel {
    flex-direction: column;
  }
}
</style>
