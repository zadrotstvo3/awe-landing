<template>
  <div class="blog-list">
    <div class="blog-list__button">
      <button class="button" @click="addNewArticle()">
        Add new +
      </button>
    </div>
    <ul class="blog-list__list">
      <li
          class="blog-list__item"
          v-for="(item, index) in list"
          :key="index"
          @click="addActiveClass(item)"
          :class="{activeClass: item.isActive}"
      >
        <p>{{item.title}}</p>
        <div class="blog-list__images">
          <img src="@/js/assets/enable.svg" alt="preview icon"  @click="sendPreviewItem(item)">
          <img src="@/js/assets/edit.svg" alt="edit icon" @click="sendEditItem(item)">
          <img src="@/js/assets/x-mark.svg" alt="delete icon" @click="toggleModal(item)">
        </div>
      </li>
    </ul>
    <warningModal
        v-if="modal"
        @close="toggleModal"
        @deleteItem="deleteArticle(currentItem.id)"
    />
  </div>
</template>

<script>
import warningModal from "@/js/components/admin/warningModal";
export default {
  name: "blogList",
  components: {
    warningModal
  },
  props: {
    list: {
      type: Array,
      default: () => {}
    },
    sendPreviewItem: {
      type: Function,
      default: () => {}
    },
    sendEditItem: {
      type: Function,
      default: () => {}
    },
    addNewArticle: {
      type: Function,
      default: () => {}
    },
    deleteArticle: {
      type: Function,
      default: () => {}
    },
    addActiveClass: {
      type: Function,
      default: () => {}
    },
  },
  data(){
    return {
      modal: false,
      currentItem: ''
    }
  },
  methods: {
    toggleModal(item){
      this.currentItem = item
      this.modal = !this.modal
    },
  }
}
</script>

<style scoped lang="scss">
.blog-list {
  width: 100%;
  max-width: 450px;

  margin: 50px;
  &__list {
    height: 70%;
      overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
  &__item {
    margin: 15px 0;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #a7a7a7;
    border-radius: 35px;
    list-style: none;
    img {
      width: 25px;
      margin: 0 5px;
      opacity: .5;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
  &__images {
    width: 100%;
    max-width: 100px;
    display: flex;
  }
  &__button {
    width: 100%;
    max-width: 150px;
      margin-bottom: 20px;
    .button {
      width: 100%;
      padding: 15px;
      font-size: 24px;
      background-color: #fff;
      border: 1px solid black;
      border-radius: 30px;
      outline: none;
      transition: .3s ease-in-out;
      &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
      }
    }
  }
}
.activeClass {
  border: 2px solid black;
}
@media only screen and (max-width: 770px) {
    .blog-list {
        margin: 0;
    }
}
</style>
