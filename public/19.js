(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/our-team.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/our-team.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_admin_warningModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/admin/warningModal */ "./resources/js/components/admin/warningModal.vue");
/* harmony import */ var _js_components_white_modal_modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/white/modal/modal.vue */ "./resources/js/components/white/modal/modal.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "our-team",
  components: {
    warningModal: _js_components_admin_warningModal__WEBPACK_IMPORTED_MODULE_0__["default"],
    modal: _js_components_white_modal_modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      first_name: '',
      last_name: '',
      position: '',
      avatar: '',
      social_medias: [],
      teamList: [],
      warningModal: false,
      modal: false,
      currentItem: '',
      uploadedImage: '',
      modalContent: ''
    };
  },
  created: function created() {
    var list = [{
      firstName: "John ",
      lastName: "Doe",
      position: "manager",
      avatar: "1-person.png"
    }, {
      firstName: "John ",
      lastName: "Doe",
      position: "manager",
      avatar: "1-person.png"
    }, {
      firstName: "John ",
      lastName: "Doe",
      position: "manager",
      avatar: "1-person.png"
    }];
    var array = new Array(9).fill().map(function (item, index) {
      if (index < list.length) {
        list[index].showEdit = false;
        return list[index];
      } else {
        return {
          first_name: "",
          last_name: "",
          position: "",
          avatar: "",
          social_medias: [],
          showEdit: true
        };
      }
    });
    array.splice(5, 0, 'https://www.youtube.com/embed/nvq_lvC1MRY');
    return this.teamList = _toConsumableArray(array);
  },
  methods: {
    toggleModal: function toggleModal(item) {
      this.currentItem = item;
      this.modal = !this.modal;
    },
    deleteTeamMate: function deleteTeamMate(item) {
      console.log(item);
    },
    changeImage: function changeImage(event) {
      var files = event.target.files || event.dataTransfer.files;

      if (!files.length) {
        return;
      }

      this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var _this = this;

      var reader = new FileReader();

      reader.onload = function (event) {
        _this.uploadedImage = event.target.result;
        var data = {
          image: _this.uploadedImage
        }; // this.uploadImage(data)
        //     .then((resp) => {
        //         console.log(resp)
        //         // this.editedItem.image = resp.url
        //         // this.editedItem.full_image_url = resp.full_url
        //     })
      };

      reader.readAsDataURL(file);
    },
    openVideo: function openVideo(item) {
      var content = {
        type: 'video',
        contentPath: item
      };
      this.modalContent = content;
      this.modal = !this.modal;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/warningModal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/warningModal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "warningModal",
  methods: {
    close: function close() {
      this.$emit('close');
    },
    deleteItem: function deleteItem() {
      this.$emit('deleteItem');
      this.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/our-team.vue?vue&type=style&index=0&id=4bc70b09&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/our-team.vue?vue&type=style&index=0&id=4bc70b09&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".team-list[data-v-4bc70b09] {\n  width: 100%;\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 50px 15px;\n}\n.list[data-v-4bc70b09] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-column-gap: 30px;\n  grid-row-gap: 30px;\n}\n.list__item[data-v-4bc70b09] {\n  width: 100%;\n  max-width: 300px;\n  list-style: none;\n  justify-self: center;\n}\n.list__item[data-v-4bc70b09]:first-child {\n  grid-area: 1/1/2/2;\n}\n.list__item:first-child .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:first-child .item__image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 50px 50px 0 50px;\n}\n.list__item:first-child .item__image img[data-v-4bc70b09] {\n  border-radius: 50px 50px 0 50px;\n}\n.list__item[data-v-4bc70b09]:nth-child(2) {\n  grid-area: 1/2/2/3;\n}\n.list__item:nth-child(2) .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:nth-child(2) .item__image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 50px 50px 0 0;\n}\n.list__item:nth-child(2) .item__image img[data-v-4bc70b09] {\n  border-radius: 50px 50px 0 0;\n}\n.list__item[data-v-4bc70b09]:nth-child(3) {\n  grid-area: 1/3/2/4;\n}\n.list__item:nth-child(3) .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:nth-child(3) .item__image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 50px 50px 50px 0;\n}\n.list__item:nth-child(3) .item__image img[data-v-4bc70b09] {\n  border-radius: 50px 50px 50px 0;\n}\n.list__item[data-v-4bc70b09]:nth-child(4) {\n  grid-area: 2/1/3/2;\n}\n.list__item:nth-child(4) .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:nth-child(4) .item__image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 50px 0 0 50px;\n}\n.list__item:nth-child(4) .item__image img[data-v-4bc70b09] {\n  border-radius: 50px 0 0 50px;\n}\n.list__item[data-v-4bc70b09]:nth-child(5) {\n  grid-area: 2/2/3/3;\n}\n.list__item[data-v-4bc70b09]:nth-child(6) {\n  grid-area: 2/3/3/4;\n}\n.list__item:nth-child(6) .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:nth-child(6) .item__image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 0 50px 50px 0;\n}\n.list__item:nth-child(6) .item__image img[data-v-4bc70b09] {\n  border-radius: 0 50px 50px 0;\n}\n.list__item[data-v-4bc70b09]:nth-child(7) {\n  grid-area: 3/1/4/2;\n}\n.list__item:nth-child(7) .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:nth-child(7) .item__image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 50px 0 50px 50px;\n}\n.list__item:nth-child(7) .item__image img[data-v-4bc70b09] {\n  border-radius: 50px 0 50px 50px;\n}\n.list__item[data-v-4bc70b09]:nth-child(8) {\n  grid-area: 3/2/4/3;\n}\n.list__item:nth-child(8) .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:nth-child(8) .item__image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 0 0 50px 50px;\n}\n.list__item:nth-child(8) .item__image img[data-v-4bc70b09] {\n  border-radius: 0 0 50px 50px;\n}\n.list__item[data-v-4bc70b09]:last-child {\n  grid-area: 3/3/4/4;\n}\n.list__item:last-child .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:last-child .item__image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 0 50px 50px 50px;\n}\n.list__item:last-child .item__image img[data-v-4bc70b09] {\n  border-radius: 0 50px 50px 50px;\n}\n.list__image[data-v-4bc70b09] {\n  width: 100%;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.list__name[data-v-4bc70b09] {\n  margin-top: 15px;\n  font-size: 24px;\n  font-weight: 600;\n}\n.list__position[data-v-4bc70b09] {\n  margin-top: 10px;\n}\n.item[data-v-4bc70b09] {\n  position: relative;\n}\n.item__preview[data-v-4bc70b09] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.item__image[data-v-4bc70b09] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.item__image--label img[data-v-4bc70b09] {\n  width: 100px;\n}\n.item__image input[data-v-4bc70b09] {\n  display: none;\n}\n.item__image .preview[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.item__input[data-v-4bc70b09], .item__links[data-v-4bc70b09] {\n  padding: 10px 0;\n}\n.item__input input[data-v-4bc70b09], .item__links input[data-v-4bc70b09] {\n  width: 100%;\n  margin: 5px;\n  padding: 10px;\n  outline: none;\n}\n.item__close[data-v-4bc70b09] {\n  position: relative;\n}\n.item__close .icon[data-v-4bc70b09] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n.item__video[data-v-4bc70b09] {\n  width: 100%;\n  max-width: 420px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n}\n.item__hover[data-v-4bc70b09] {\n  padding: 15px 35px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  z-index: -2;\n}\n.item__hover img[data-v-4bc70b09] {\n  margin: 0 10px;\n  width: 35px;\n  cursor: pointer;\n}\n.item:hover .item__hover[data-v-4bc70b09] {\n  opacity: 1;\n  visibility: visible;\n  z-index: 2;\n  transition: 0.3s ease-in-out;\n}\n@media only screen and (max-width: 1240px) {\n.item__video[data-v-4bc70b09] {\n    height: auto;\n}\n}\n@media only screen and (max-width: 660px) {\n.team-list[data-v-4bc70b09] {\n    width: 100%;\n    max-width: 300px;\n    margin: 0 auto;\n    padding: 20px 5px;\n}\n.list[data-v-4bc70b09] {\n    grid-column-gap: 5px;\n    grid-row-gap: 5px;\n}\n.list__name[data-v-4bc70b09] {\n    margin-top: 5px;\n    font-size: 14px;\n}\n.list__position[data-v-4bc70b09] {\n    margin-top: 0;\n    font-size: 10px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/warningModal.vue?vue&type=style&index=0&id=3d417f88&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/warningModal.vue?vue&type=style&index=0&id=3d417f88&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal[data-v-3d417f88] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.8);\n}\n.modal__container[data-v-3d417f88] {\n  width: 100%;\n  max-width: 450px;\n  background-color: #fff;\n}\n.modal__close[data-v-3d417f88] {\n  padding: 15px;\n  display: flex;\n  justify-content: flex-end;\n}\n.modal__content[data-v-3d417f88] {\n  padding: 35px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.modal__buttons[data-v-3d417f88] {\n  width: 100%;\n  margin-top: 30px;\n  padding: 15px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal__buttons button[data-v-3d417f88] {\n  width: 100%;\n  max-width: 150px;\n  padding: 15px;\n  font-size: 18px;\n  background-color: #fff;\n  border: 1px solid black;\n  border-radius: 35px;\n  transition: 0.3s ease-in-out;\n}\n.modal__buttons button[data-v-3d417f88]:hover {\n  cursor: pointer;\n  background-color: black;\n  color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/our-team.vue?vue&type=style&index=0&id=4bc70b09&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/our-team.vue?vue&type=style&index=0&id=4bc70b09&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./our-team.vue?vue&type=style&index=0&id=4bc70b09&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/our-team.vue?vue&type=style&index=0&id=4bc70b09&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/warningModal.vue?vue&type=style&index=0&id=3d417f88&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/warningModal.vue?vue&type=style&index=0&id=3d417f88&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./warningModal.vue?vue&type=style&index=0&id=3d417f88&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/warningModal.vue?vue&type=style&index=0&id=3d417f88&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/our-team.vue?vue&type=template&id=4bc70b09&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/our-team.vue?vue&type=template&id=4bc70b09&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "panel" },
    [
      _c("div", { staticClass: "team-list" }, [
        _c(
          "ul",
          { staticClass: "list" },
          _vm._l(_vm.teamList, function(item, index) {
            return _c("li", { key: index, staticClass: "list__item" }, [
              index !== 4
                ? _c("div", { staticClass: "item" }, [
                    !item.showEdit
                      ? _c("div", { staticClass: "item__preview" }, [
                          _c("img", {
                            staticClass: "list__image",
                            attrs: {
                              src: __webpack_require__("./resources/js/assets/team_list sync recursive ^\\.\\/.*$")("./" +
                                item.avatar),
                              alt: "avatar"
                            }
                          }),
                          _vm._v(" "),
                          _c("p", { staticClass: "list__name" }, [
                            _vm._v(
                              _vm._s(
                                "" + (item.firstName + " " + item.lastName)
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "list__position" }, [
                            _vm._v(_vm._s(item.position))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "item__hover" }, [
                            _c("img", {
                              attrs: {
                                src: __webpack_require__(/*! @/js/assets/edit.svg */ "./resources/js/assets/edit.svg"),
                                alt: "edit icon"
                              },
                              on: {
                                click: function($event) {
                                  item.showEdit = !item.showEdit
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("img", {
                              attrs: {
                                src: __webpack_require__(/*! @/js/assets/x-mark.svg */ "./resources/js/assets/x-mark.svg"),
                                alt: "delete icon"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.toggleModal(item)
                                }
                              }
                            })
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    item.showEdit
                      ? _c("div", [
                          _c("div", { staticClass: "item__image" }, [
                            !_vm.uploadedImage
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "item__image--label",
                                    attrs: { for: "image" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "item__icon",
                                      attrs: {
                                        src: __webpack_require__(/*! @/js/assets/plus.svg */ "./resources/js/assets/plus.svg"),
                                        alt: "avatar"
                                      }
                                    })
                                  ]
                                )
                              : _c("div", { staticClass: "item__close" }, [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "icon",
                                      staticStyle: {
                                        width: "24px",
                                        height: "24px"
                                      },
                                      attrs: { viewBox: "0 0 24 24" },
                                      on: {
                                        click: function($event) {
                                          _vm.uploadedImage = ""
                                        }
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          fill: "white",
                                          d:
                                            "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("img", {
                                    staticClass: "preview",
                                    attrs: {
                                      src: _vm.uploadedImage,
                                      alt: "image"
                                    }
                                  })
                                ]),
                            _vm._v(" "),
                            _c("input", {
                              attrs: { type: "file", id: "image" },
                              on: {
                                change: function($event) {
                                  return _vm.changeImage($event)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "item__input" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.firstName,
                                  expression: "item.firstName"
                                }
                              ],
                              attrs: {
                                type: "text",
                                placeholder: "First name"
                              },
                              domProps: { value: item.firstName },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "firstName",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.lastName,
                                  expression: "item.lastName"
                                }
                              ],
                              attrs: { type: "text", placeholder: "Last name" },
                              domProps: { value: item.lastName },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "lastName",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: item.position,
                                  expression: "item.position"
                                }
                              ],
                              attrs: { type: "text", placeholder: "Position" },
                              domProps: { value: item.position },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item,
                                    "position",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              attrs: { type: "submit", value: "Save" },
                              on: {
                                click: function($event) {
                                  item.showEdit = !item.showEdit
                                }
                              }
                            })
                          ])
                        ])
                      : _vm._e()
                  ])
                : _c(
                    "div",
                    {
                      staticClass: "item",
                      on: {
                        click: function($event) {
                          return _vm.openVideo(item)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "item__video" }, [
                        _c("div", { staticClass: "item__play" }, [
                          _c(
                            "svg",
                            {
                              attrs: {
                                width: "36",
                                height: "42",
                                viewBox: "0 0 36 42",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M35 19.268C36.3333 20.0378 36.3333 21.9623 35 22.7321L3.5 40.9186C2.16667 41.6884 0.500002 40.7261 0.500002 39.1865L0.500004 2.81347C0.500004 1.27387 2.16667 0.311614 3.5 1.08142L35 19.268Z",
                                  fill: "white"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(item))])
                      ])
                    ]
                  )
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _vm.warningModal
        ? _c("warningModal", {
            on: {
              close: _vm.toggleModal,
              deleteItem: function($event) {
                return _vm.deleteTeamMate(_vm.currentItem)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.modal
        ? _c("modal", {
            attrs: { content: _vm.modalContent },
            on: { close: _vm.closeModal }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/warningModal.vue?vue&type=template&id=3d417f88&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/warningModal.vue?vue&type=template&id=3d417f88&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal", on: { click: _vm.close } }, [
    _c(
      "div",
      {
        staticClass: "modal__container",
        on: {
          click: function($event) {
            $event.stopPropagation()
          }
        }
      },
      [
        _c("div", { staticClass: "modal__close" }, [
          _c(
            "svg",
            {
              staticClass: "close__icon",
              staticStyle: { width: "24px", height: "24px" },
              attrs: { viewBox: "0 0 24 24" },
              on: { click: _vm.close }
            },
            [
              _c("path", {
                attrs: {
                  fill: "currentColor",
                  d:
                    "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal__content" }, [
          _c("h2", { staticClass: "modal__title" }, [
            _vm._v(
              "\n        Are you sure you want to delete this article?\n      "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal__buttons" }, [
            _c("button", { on: { click: _vm.deleteItem } }, [_vm._v("Yes")]),
            _vm._v(" "),
            _c("button", { on: { click: _vm.close } }, [_vm._v("No")])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/team_list sync recursive ^\\.\\/.*$":
/*!*****************************************************!*\
  !*** ./resources/js/assets/team_list sync ^\.\/.*$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1-person.png": "./resources/js/assets/team_list/1-person.png",
	"./2-person.png": "./resources/js/assets/team_list/2-person.png",
	"./3-person.png": "./resources/js/assets/team_list/3-person.png",
	"./4-person.png": "./resources/js/assets/team_list/4-person.png",
	"./5-person.png": "./resources/js/assets/team_list/5-person.png",
	"./6-person.png": "./resources/js/assets/team_list/6-person.png",
	"./7-person.png": "./resources/js/assets/team_list/7-person.png",
	"./8-person.png": "./resources/js/assets/team_list/8-person.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/assets/team_list sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/js/components/admin/our-team.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/admin/our-team.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _our_team_vue_vue_type_template_id_4bc70b09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./our-team.vue?vue&type=template&id=4bc70b09&scoped=true& */ "./resources/js/components/admin/our-team.vue?vue&type=template&id=4bc70b09&scoped=true&");
/* harmony import */ var _our_team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./our-team.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/our-team.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _our_team_vue_vue_type_style_index_0_id_4bc70b09_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./our-team.vue?vue&type=style&index=0&id=4bc70b09&scoped=true&lang=scss& */ "./resources/js/components/admin/our-team.vue?vue&type=style&index=0&id=4bc70b09&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _our_team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _our_team_vue_vue_type_template_id_4bc70b09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _our_team_vue_vue_type_template_id_4bc70b09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4bc70b09",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/our-team.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/our-team.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/our-team.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_our_team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./our-team.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/our-team.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_our_team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/our-team.vue?vue&type=style&index=0&id=4bc70b09&scoped=true&lang=scss&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/admin/our-team.vue?vue&type=style&index=0&id=4bc70b09&scoped=true&lang=scss& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_our_team_vue_vue_type_style_index_0_id_4bc70b09_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./our-team.vue?vue&type=style&index=0&id=4bc70b09&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/our-team.vue?vue&type=style&index=0&id=4bc70b09&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_our_team_vue_vue_type_style_index_0_id_4bc70b09_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_our_team_vue_vue_type_style_index_0_id_4bc70b09_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_our_team_vue_vue_type_style_index_0_id_4bc70b09_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_our_team_vue_vue_type_style_index_0_id_4bc70b09_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/admin/our-team.vue?vue&type=template&id=4bc70b09&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/our-team.vue?vue&type=template&id=4bc70b09&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_our_team_vue_vue_type_template_id_4bc70b09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./our-team.vue?vue&type=template&id=4bc70b09&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/our-team.vue?vue&type=template&id=4bc70b09&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_our_team_vue_vue_type_template_id_4bc70b09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_our_team_vue_vue_type_template_id_4bc70b09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/warningModal.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/warningModal.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warningModal_vue_vue_type_template_id_3d417f88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warningModal.vue?vue&type=template&id=3d417f88&scoped=true& */ "./resources/js/components/admin/warningModal.vue?vue&type=template&id=3d417f88&scoped=true&");
/* harmony import */ var _warningModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warningModal.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/warningModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _warningModal_vue_vue_type_style_index_0_id_3d417f88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warningModal.vue?vue&type=style&index=0&id=3d417f88&scoped=true&lang=scss& */ "./resources/js/components/admin/warningModal.vue?vue&type=style&index=0&id=3d417f88&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _warningModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _warningModal_vue_vue_type_template_id_3d417f88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _warningModal_vue_vue_type_template_id_3d417f88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d417f88",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/warningModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/warningModal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/warningModal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_warningModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./warningModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/warningModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_warningModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/warningModal.vue?vue&type=style&index=0&id=3d417f88&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/admin/warningModal.vue?vue&type=style&index=0&id=3d417f88&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_warningModal_vue_vue_type_style_index_0_id_3d417f88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./warningModal.vue?vue&type=style&index=0&id=3d417f88&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/warningModal.vue?vue&type=style&index=0&id=3d417f88&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_warningModal_vue_vue_type_style_index_0_id_3d417f88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_warningModal_vue_vue_type_style_index_0_id_3d417f88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_warningModal_vue_vue_type_style_index_0_id_3d417f88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_warningModal_vue_vue_type_style_index_0_id_3d417f88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/admin/warningModal.vue?vue&type=template&id=3d417f88&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/warningModal.vue?vue&type=template&id=3d417f88&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warningModal_vue_vue_type_template_id_3d417f88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./warningModal.vue?vue&type=template&id=3d417f88&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/warningModal.vue?vue&type=template&id=3d417f88&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warningModal_vue_vue_type_template_id_3d417f88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warningModal_vue_vue_type_template_id_3d417f88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);