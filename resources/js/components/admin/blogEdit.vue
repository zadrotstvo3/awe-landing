<template>
    <div class="edit">
      <div class="edit__form">
        <div class="edit__show">
          <button class="show" @click="showPreview = !showPreview">
            {{showPreview ? 'Hide' : 'Preview'}}
          </button>
        </div>
        <div class="edit__form" v-if="!showPreview">
          <div class="edit__box--image">
            <div class="edit__image">
              <label for="image">
                Add/Change image
                <img src="@/js/assets/change-image.svg" alt="image icon">
              </label>
              <input type="file" id="image" @change="changeImage($event)">
            </div>
            <div class="edit__image__preview">
              <img
                   :src="editedItem.full_image_url"
                   class="announce__img"
                   alt="uploaded image">
            </div>
          </div>
          <div class="edit__box">
            <div class="edit__title">
              <input type="text" v-model="editedItem.title">
            </div>
            <div class="edit__text">
              <textarea v-model="editedItem.description"></textarea>
            </div>
          </div>
        </div>
        <blog-preview v-else :item="editedItem"/>
        <div class="edit__submit">
          <button
              class="submit"
              @click="addItem"
              :disabled="disableButton"
              :class="{disabled: disableButton}"
          >
              {{ `${editedItem.article_id === null ? 'Create post' : 'Save'}` }}
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import blogPreview from "@/js/components/admin/blogPreview";
import {mapActions} from 'vuex'
export default {
  name: "blogEdit",
  components: {
    blogPreview
  },
  props: {
    editItem: {
      type: Object,
      default: ()=>{}
    }
  },
  data(){
    return {
      editedItem: {},
      uploadedImage: '',
      showPreview: false
    }
  },
  computed: {
    disableButton(){
      return Object.values(this.editedItem).includes('')
    }
  },
  mounted() {
    if(this.editItem){
      this.editedItem = Object.assign({}, this.editItem)
    }
  },
  watch: {
    editItem(newVal){
      this.editedItem = Object.assign({}, newVal)
    }
  },
  methods: {
      ...mapActions(['createArticle', 'getArticles', 'uploadImage', 'updateArticle']),
    changeImage(event){
         const files = event.target.files || event.dataTransfer.files
          if(!files.length){
            return
          }
          this.createImage(files[0])
    },
    createImage(file){
      const reader = new FileReader()
      reader.onload = (event) => {
        this.uploadedImage = event.target.result
        const data = {
            image: this.uploadedImage
        }
        this.uploadImage(data)
          .then((resp) => {
              console.log(resp)
              this.editedItem.image = resp.url
              this.editedItem.full_image_url = resp.full_url
          })
      }
      reader.readAsDataURL(file)
    },
    addItem() {
        if (this.editedItem.article_id === null) {
            this.createNewItem()
        } else if(this.editedItem.article_id) {
            this.updateItem()
        } else {
            this.createNewLangForItem()
        }
    },
    createNewItem(){
        const item = this.editedItem
        this.createArticle(item)
            .then(() => {
                this.getArticles()
                    .then(() => {
                        this.$emit('addItem')
                    })
            })
    },
    updateItem(){
        delete this.editedItem.isActive
        const item = {
            title: this.editedItem.title,
            description: this.editedItem.description,
            image: this.editedItem.image,
            language: this.$i18n.locale,
            article_id: this.editedItem.article_id
        }
        this.updateArticle(item)
            .then(() => {
                this.getArticles()
                    .then(() => {
                        this.$emit('addItem')
                    })
            })
    },
    createNewLangForItem(){
        delete this.editedItem.isActive
        const item = {
            title: this.editedItem.title,
            description: this.editedItem.description,
            image: this.editedItem.image,
            language: this.$i18n.locale,
            article_id: this.editedItem.article_id || this.editedItem.id
        }
        this.createArticle(item)
            .then(() => {
                this.getArticles()
                    .then(() => {
                        this.$emit('addItem')
                    })
            })
    }
  }
}
</script>

<style scoped lang="scss">
.edit {
  width: 100%;
  margin: 50px 10px;

  &__show, &__submit {
    padding: 0 15px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    .show, .submit {
      width: 100%;
      max-width: 150px;
      padding: 15px;
      border: 1px solid black;
      background-color: #fff;
      outline: none;
      font-size: 18px;

      &:hover {
        cursor: pointer;
        background-color: black;
        color: white;
      }
    }
    .submit {
      background-color: #000000;
      color: white;
    }
    .disabled {
      background-color: gray;
    }
  }

  &__form {
    width: 100%;
    margin: 15px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__box {
    flex-grow: 1;
    margin: 0 15px;

    &--image {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  &__date {
    width: 100%;
    input {
      width: 100%;
      padding: 15px;
      font-size: 14px;
      outline: none;
    }
  }

  &__image {
    max-width: 450px;
    label {
      padding: 15px 0;
      display: flex;
      align-items: center;
    }
    img {
      margin-left: 15px;
      width: 45px;
    }
    input {
      display: none;
    }
  }

  &__title {
    margin: 15px 0;
    width: 100%;
    input {
      width: 100%;
      padding: 15px;
      font-size: 16px;
      outline: none;
    }
  }
  &__text {
    textarea {
      width: 100%;
      height: 300px;
      padding: 15px;
      font-size: 18px;
      outline: none;
    }
  }
}

.announce {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__text {
    padding: 0 35px;
  }
  &__title {
    margin-bottom: 10px;
    font-size: 32px;
    line-height: 140%;
  }
  &__description  {
    font-size: 20px;
    line-height: 140%;
    font-weight: 200;
  }
  &__img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 30px;
  }
}
@media only screen and (max-width: 1070px) {
  .edit__box{
    margin: 0;
  }
  .edit__submit {
    padding: 0;
  }
}

</style>
