(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/our-team.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/our-team.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_admin_warningModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/admin/warningModal */ "./resources/js/components/admin/warningModal.vue");
/* harmony import */ var _js_components_admin_admin_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/admin/admin-header */ "./resources/js/components/admin/admin-header.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    adminHeader: _js_components_admin_admin_header__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      teamList: [],
      modal: false,
      currentItem: '',
      uploadedImage: '',
      editVideo: false,
      videoLink: '',
      activeVideoLink: ''
    };
  },
  created: function created() {
    return window.Laravel.isLoggedin ? this.createList() : this.$router.push('/admin');
  },
  mounted: function mounted() {
    var _this = this;

    this.getTeamList().then(function (resp) {
      if (resp) {
        _this.createList();
      }
    });
    this.activeVideoLink = this.getVideo;
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['getMembersList', 'getVideo'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(['uploadImage', 'getTeamList', 'addTeamMember', 'editCurrentMember', 'deleteMember', 'setNewVideo'])), {}, {
    createList: function createList() {
      var _this2 = this;

      var array = new Array(9).fill().map(function (item, index) {
        if (index < _this2.getMembersList.length) {
          _this2.getMembersList[index].showEdit = false;
          return _objectSpread({}, _this2.getMembersList[index]);
        } else {
          return {
            first_name: "",
            last_name: "",
            position: "",
            avatar: "",
            full_avatar_url: '',
            social_medias: [],
            showEdit: true
          };
        }
      });
      return this.teamList = _toConsumableArray(array);
    },
    addNewVideo: function addNewVideo() {
      this.setNewVideo(this.videoLink);
      this.activeVideoLink = this.videoLink;
      this.editVideo = !this.editVideo;
      this.videoLink = '';
    },
    toggleModal: function toggleModal(item) {
      this.currentItem = item;
      this.modal = !this.modal;
    },
    toggleEditBlock: function toggleEditBlock(item) {
      item.showEdit = !item.showEdit;
    },
    deleteTeamMember: function deleteTeamMember(item) {
      var _this3 = this;

      this.deleteMember(item.id).then(function (resp) {
        if (resp) {
          _this3.getTeamList().then(function (resp) {
            if (resp) {
              _this3.createList();
            }
          });
        }
      });
    },
    changeImage: function changeImage(event, item) {
      var files = event.target.files || event.dataTransfer.files;

      if (!files.length) {
        return;
      }

      this.createImage(files[0], item);
    },
    createImage: function createImage(file, item) {
      var _this4 = this;

      var reader = new FileReader();

      reader.onload = function (event) {
        _this4.uploadedImage = event.target.result;
        var data = {
          image: _this4.uploadedImage
        };

        _this4.uploadImage(data).then(function (resp) {
          console.log(resp);
          console.log(item);
          item.avatar = resp.url;
          item.full_avatar_url = resp.full_url;
        });
      };

      reader.readAsDataURL(file);
    },
    addMember: function addMember(item) {
      var _this5 = this;

      delete item.showEdit;
      this.addTeamMember(item).then(function (resp) {
        if (resp) {
          _this5.getTeamList().then(function (resp) {
            if (resp) {
              _this5.createList();
            }
          });
        }
      });
    },
    editMember: function editMember(item) {
      var _this6 = this;

      delete item.showEdit;
      item.social_medias = null;
      this.editCurrentMember(item).then(function (resp) {
        if (resp) {
          _this6.getTeamList().then(function (resp) {
            if (resp) {
              _this6.createList();
            }
          });
        }
      });
    }
  })
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
exports.push([module.i, ".team-list[data-v-4bc70b09] {\n  width: 100%;\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 50px 15px;\n}\n.list[data-v-4bc70b09] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-column-gap: 30px;\n  grid-row-gap: 30px;\n}\n.list__item[data-v-4bc70b09] {\n  width: 100%;\n  max-width: 300px;\n  list-style: none;\n  justify-self: center;\n}\n.list__item[data-v-4bc70b09]:first-child {\n  grid-area: 1/1/2/2;\n}\n.list__item:first-child .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:first-child .item__image[data-v-4bc70b09], .list__item:first-child .item__preview--image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 80px 80px 0 80px;\n}\n.list__item:first-child .item__image img[data-v-4bc70b09], .list__item:first-child .item__preview--image img[data-v-4bc70b09] {\n  border-radius: 80px 80px 0 80px;\n}\n.list__item[data-v-4bc70b09]:nth-child(2) {\n  grid-area: 1/2/2/3;\n}\n.list__item:nth-child(2) .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:nth-child(2) .item__image[data-v-4bc70b09], .list__item:nth-child(2) .item__preview--image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 80px 80px 0 0;\n}\n.list__item:nth-child(2) .item__image img[data-v-4bc70b09], .list__item:nth-child(2) .item__preview--image img[data-v-4bc70b09] {\n  border-radius: 80px 80px 0 0;\n}\n.list__item[data-v-4bc70b09]:nth-child(3) {\n  grid-area: 1/3/2/4;\n}\n.list__item:nth-child(3) .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:nth-child(3) .item__image[data-v-4bc70b09], .list__item:nth-child(3) .item__preview--image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 80px 80px 80px 0;\n}\n.list__item:nth-child(3) .item__image img[data-v-4bc70b09], .list__item:nth-child(3) .item__preview--image img[data-v-4bc70b09] {\n  border-radius: 80px 80px 80px 0;\n}\n.list__item[data-v-4bc70b09]:nth-child(4) {\n  grid-area: 2/1/3/2;\n}\n.list__item:nth-child(4) .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:nth-child(4) .item__image[data-v-4bc70b09], .list__item:nth-child(4) .item__preview--image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 80px 0 0 80px;\n}\n.list__item:nth-child(4) .item__image img[data-v-4bc70b09], .list__item:nth-child(4) .item__preview--image img[data-v-4bc70b09] {\n  border-radius: 80px 0 0 80px;\n}\n.list__item[data-v-4bc70b09]:nth-child(5) {\n  grid-area: 2/2/3/3;\n}\n.list__item[data-v-4bc70b09]:nth-child(6) {\n  grid-area: 2/3/3/4;\n}\n.list__item:nth-child(6) .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:nth-child(6) .item__image[data-v-4bc70b09], .list__item:nth-child(6) .item__preview--image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 0 80px 80px 0;\n}\n.list__item:nth-child(6) .item__image img[data-v-4bc70b09], .list__item:nth-child(6) .item__preview--image img[data-v-4bc70b09] {\n  border-radius: 0 80px 80px 0;\n}\n.list__item[data-v-4bc70b09]:nth-child(7) {\n  grid-area: 3/1/4/2;\n}\n.list__item:nth-child(7) .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:nth-child(7) .item__image[data-v-4bc70b09], .list__item:nth-child(7) .item__preview--image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 80px 0 80px 80px;\n}\n.list__item:nth-child(7) .item__image img[data-v-4bc70b09], .list__item:nth-child(7) .item__preview--image img[data-v-4bc70b09] {\n  border-radius: 80px 0 80px 80px;\n}\n.list__item[data-v-4bc70b09]:nth-child(8) {\n  grid-area: 3/2/4/3;\n}\n.list__item:nth-child(8) .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:nth-child(8) .item__image[data-v-4bc70b09], .list__item:nth-child(8) .item__preview--image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 0 0 80px 80px;\n}\n.list__item:nth-child(8) .item__image img[data-v-4bc70b09], .list__item:nth-child(8) .item__preview--image img[data-v-4bc70b09] {\n  border-radius: 0 0 80px 80px;\n}\n.list__item[data-v-4bc70b09]:last-child {\n  grid-area: 3/3/4/4;\n}\n.list__item:last-child .item[data-v-4bc70b09] {\n  width: 100%;\n  height: 100%;\n}\n.list__item:last-child .item__image[data-v-4bc70b09], .list__item:last-child .item__preview--image[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  background-color: #e3e3e3;\n  border-radius: 0 80px 80px 80px;\n}\n.list__item:last-child .item__image img[data-v-4bc70b09], .list__item:last-child .item__preview--image img[data-v-4bc70b09] {\n  border-radius: 0 80px 80px 80px;\n}\n.list__image[data-v-4bc70b09] {\n  width: 100%;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.list__name[data-v-4bc70b09] {\n  margin-top: 15px;\n  font-size: 24px;\n  font-weight: 600;\n}\n.list__position[data-v-4bc70b09] {\n  margin-top: 10px;\n}\n.item[data-v-4bc70b09] {\n  position: relative;\n}\n.item__preview[data-v-4bc70b09] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.item__image[data-v-4bc70b09] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.item__image--label img[data-v-4bc70b09] {\n  width: 100px;\n}\n.item__image input[data-v-4bc70b09] {\n  display: none;\n}\n.item__image .preview[data-v-4bc70b09] {\n  width: 300px;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.item__input[data-v-4bc70b09], .item__links[data-v-4bc70b09] {\n  padding: 10px 0;\n}\n.item__input input[data-v-4bc70b09], .item__links input[data-v-4bc70b09] {\n  width: 100%;\n  margin: 5px;\n  padding: 10px;\n  outline: none;\n}\n.item__close[data-v-4bc70b09] {\n  position: relative;\n}\n.item__close .icon[data-v-4bc70b09] {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n}\n.item__close .icon__back[data-v-4bc70b09] {\n  position: absolute;\n  top: 27px;\n  left: 30px;\n  width: 20px;\n}\n.item__video[data-v-4bc70b09] {\n  width: 100%;\n  max-width: 420px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n}\n.item__video--content[data-v-4bc70b09] {\n  height: 100%;\n}\n.item__video--edit[data-v-4bc70b09] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.item__video--edit input[data-v-4bc70b09] {\n  margin: 10px 0;\n  padding: 15px;\n}\n.item__edit[data-v-4bc70b09] {\n  width: 45px;\n  position: absolute;\n  top: 20px;\n  left: 20px;\n}\n.item__hover[data-v-4bc70b09] {\n  padding: 15px 35px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  z-index: -2;\n}\n.item__hover img[data-v-4bc70b09] {\n  margin: 0 10px;\n  width: 35px;\n  cursor: pointer;\n}\n.item:hover .item__hover[data-v-4bc70b09] {\n  opacity: 1;\n  visibility: visible;\n  z-index: 2;\n  transition: 0.3s ease-in-out;\n}\n@media only screen and (max-width: 1240px) {\n.item__video[data-v-4bc70b09] {\n    height: auto;\n}\n}\n@media only screen and (max-width: 660px) {\n.team-list[data-v-4bc70b09] {\n    width: 100%;\n    max-width: 300px;\n    margin: 0 auto;\n    padding: 20px 5px;\n}\n.list[data-v-4bc70b09] {\n    grid-column-gap: 5px;\n    grid-row-gap: 5px;\n}\n.list__name[data-v-4bc70b09] {\n    margin-top: 5px;\n    font-size: 14px;\n}\n.list__position[data-v-4bc70b09] {\n    margin-top: 0;\n    font-size: 10px;\n}\n}", ""]);

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
    [
      _c("adminHeader"),
      _vm._v(" "),
      _c(
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
                        item.showEdit
                          ? _c("div", [
                              _c("div", { staticClass: "item__image" }, [
                                !item.full_avatar_url
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
                                              item.full_avatar_url = ""
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
                                        staticClass: "icon__back",
                                        attrs: {
                                          src: __webpack_require__(/*! @/js/assets/undo.svg */ "./resources/js/assets/undo.svg"),
                                          alt: "back icon"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.toggleEditBlock(item)
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("img", {
                                        staticClass: "preview",
                                        attrs: {
                                          src: item.full_avatar_url,
                                          alt: "image"
                                        }
                                      })
                                    ]),
                                _vm._v(" "),
                                _c("input", {
                                  attrs: { type: "file", id: "image" },
                                  on: {
                                    change: function($event) {
                                      return _vm.changeImage($event, item)
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "item__text" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "item__input" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.first_name,
                                      expression: "item.first_name"
                                    }
                                  ],
                                  attrs: {
                                    type: "text",
                                    placeholder: "First name"
                                  },
                                  domProps: { value: item.first_name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "first_name",
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
                                      value: item.last_name,
                                      expression: "item.last_name"
                                    }
                                  ],
                                  attrs: {
                                    type: "text",
                                    placeholder: "Last name"
                                  },
                                  domProps: { value: item.last_name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "last_name",
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
                                  attrs: {
                                    type: "text",
                                    placeholder: "Position"
                                  },
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
                                item.id
                                  ? _c("input", {
                                      attrs: {
                                        type: "submit",
                                        value: "Confirm edit"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.editMember(item)
                                        }
                                      }
                                    })
                                  : _c("input", {
                                      attrs: { type: "submit", value: "Add" },
                                      on: {
                                        click: function($event) {
                                          return _vm.addMember(item)
                                        }
                                      }
                                    })
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !item.showEdit
                          ? _c("div", { staticClass: "item__preview" }, [
                              _c("img", {
                                staticClass: "item__preview--image",
                                attrs: {
                                  src: item.full_avatar_url,
                                  alt: "avatar"
                                }
                              }),
                              _vm._v(" "),
                              _c("p", { staticClass: "list__name" }, [
                                _vm._v(
                                  _vm._s(
                                    "" +
                                      (item.first_name + " " + item.last_name)
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
                                      return _vm.toggleEditBlock(item)
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
                          : _vm._e()
                      ])
                    : _c("div", { staticClass: "item" }, [
                        !_vm.editVideo
                          ? _c("div", { staticClass: "item__video" }, [
                              _c("iframe", {
                                staticClass: "item__video--content",
                                attrs: { src: _vm.activeVideoLink }
                              }),
                              _vm._v(" "),
                              _c("img", {
                                staticClass: "item__edit",
                                attrs: {
                                  src: __webpack_require__(/*! @/js/assets/edit-white.svg */ "./resources/js/assets/edit-white.svg"),
                                  alt: "edit icon"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.editVideo = !_vm.editVideo
                                  }
                                }
                              })
                            ])
                          : _c("div", { staticClass: "item__video--edit" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.videoLink,
                                    expression: "videoLink"
                                  }
                                ],
                                attrs: {
                                  type: "text",
                                  placeholder: "Insert link"
                                },
                                domProps: { value: _vm.videoLink },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.videoLink = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                attrs: { type: "submit", value: "Save" },
                                on: { click: _vm.addNewVideo }
                              })
                            ])
                      ])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _vm.modal
            ? _c("warningModal", {
                on: {
                  close: _vm.toggleModal,
                  deleteItem: function($event) {
                    return _vm.deleteTeamMember(_vm.currentItem)
                  }
                }
              })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/edit-white.svg":
/*!********************************************!*\
  !*** ./resources/js/assets/edit-white.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/edit-white.svg?9cc0aa63f8c0a5fea38e3f5f67555969";

/***/ }),

/***/ "./resources/js/assets/plus.svg":
/*!**************************************!*\
  !*** ./resources/js/assets/plus.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/plus.svg?82b63f68ca2843f459e8c4b5376a9f72";

/***/ }),

/***/ "./resources/js/assets/undo.svg":
/*!**************************************!*\
  !*** ./resources/js/assets/undo.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/undo.svg?edd4d07073089617600eed9baa72a55b";

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



/***/ })

}]);