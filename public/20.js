(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/teamList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/teamList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_white_modal_modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/white/modal/modal.vue */ "./resources/js/components/white/modal/modal.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "teamList",
  components: {
    modal: _js_components_white_modal_modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      modal: false
    };
  },
  mounted: function mounted() {
    this.getTeamList();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['getMembersList', 'getVideo'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['getTeamList'])), {}, {
    closeModal: function closeModal() {
      this.modalContent = '';
      this.modal = false;
    },
    openContent: function openContent() {
      this.modalContent = {
        type: 'video',
        contentPath: this.getVideo
      };
      this.modal = true;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_white_teamList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/white/teamList */ "./resources/js/components/white/teamList.vue");
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
  name: "ourTeam",
  components: {
    teamList: _js_components_white_teamList__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/teamList.vue?vue&type=style&index=0&id=403e0a4c&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/teamList.vue?vue&type=style&index=0&id=403e0a4c&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".team-list[data-v-403e0a4c] {\n  width: 100%;\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 50px 15px;\n}\n.list[data-v-403e0a4c] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n}\n.list__item[data-v-403e0a4c] {\n  width: 100%;\n  max-width: 300px;\n  list-style: none;\n  justify-self: center;\n}\n.list__item[data-v-403e0a4c]:first-child {\n  grid-area: 1/1/2/2;\n}\n.list__item:first-child img[data-v-403e0a4c] {\n  border-radius: 80px 80px 0 80px;\n}\n.list__item[data-v-403e0a4c]:nth-child(2) {\n  grid-area: 1/2/2/3;\n}\n.list__item:nth-child(2) img[data-v-403e0a4c] {\n  border-radius: 80px 80px 0 0;\n}\n.list__item[data-v-403e0a4c]:nth-child(3) {\n  grid-area: 1/3/2/4;\n}\n.list__item:nth-child(3) img[data-v-403e0a4c] {\n  border-radius: 80px 80px 80px 0;\n}\n.list__item[data-v-403e0a4c]:nth-child(4) {\n  grid-area: 2/1/3/2;\n}\n.list__item:nth-child(4) img[data-v-403e0a4c] {\n  border-radius: 80px 0 0 80px;\n}\n.list__item[data-v-403e0a4c]:nth-child(5) {\n  transform: scale(1.3);\n  grid-area: 2/2/3/3;\n}\n.list__item[data-v-403e0a4c]:nth-child(6) {\n  grid-area: 2/3/3/4;\n}\n.list__item:nth-child(6) img[data-v-403e0a4c] {\n  border-radius: 0 80px 80px 0;\n}\n.list__item[data-v-403e0a4c]:nth-child(7) {\n  grid-area: 3/1/4/2;\n}\n.list__item:nth-child(7) img[data-v-403e0a4c] {\n  border-radius: 80px 0 80px 80px;\n}\n.list__item[data-v-403e0a4c]:nth-child(8) {\n  grid-area: 3/2/4/3;\n}\n.list__item:nth-child(8) img[data-v-403e0a4c] {\n  border-radius: 0 0 80px 80px;\n}\n.list__item[data-v-403e0a4c]:last-child {\n  grid-area: 3/3/4/4;\n}\n.list__item:last-child img[data-v-403e0a4c] {\n  border-radius: 0 80px 80px 80px;\n}\n.list__image[data-v-403e0a4c] {\n  width: 100%;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.list__name[data-v-403e0a4c] {\n  margin-top: 15px;\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n}\n.list__position[data-v-403e0a4c] {\n  margin-top: 10px;\n}\n.item[data-v-403e0a4c] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.item__video[data-v-403e0a4c] {\n  width: 100%;\n  max-width: 420px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n}\n.item__play[data-v-403e0a4c] {\n  opacity: 0;\n}\n.item img[data-v-403e0a4c] {\n  width: 300px;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.item:hover .item__play[data-v-403e0a4c] {\n  opacity: 1;\n  transition: 0.3s ease-in-out;\n}\n@media only screen and (max-width: 1240px) {\n.item__video[data-v-403e0a4c] {\n    height: auto;\n}\n}\n@media only screen and (max-width: 660px) {\n.team-list[data-v-403e0a4c] {\n    width: 100%;\n    max-width: 300px;\n    margin: 0 auto;\n    padding: 20px 5px;\n}\n.list[data-v-403e0a4c] {\n    grid-column-gap: 5px;\n    grid-row-gap: 5px;\n}\n.list__name[data-v-403e0a4c] {\n    margin-top: 5px;\n    font-size: 14px;\n}\n.list__position[data-v-403e0a4c] {\n    margin-top: 0;\n    font-size: 10px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=style&index=0&id=29e40fa6&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=style&index=0&id=29e40fa6&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".team[data-v-29e40fa6] {\n  padding: 160px 160px 0 160px;\n  background-image: url(" + escape(__webpack_require__(/*! @/js/assets/SVG/DNA.svg */ "./resources/js/assets/SVG/DNA.svg")) + ");\n  background-position: top right;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.title[data-v-29e40fa6] {\n  font-size: 200px;\n  color: white;\n}\n.title--small[data-v-29e40fa6] {\n  position: relative;\n  margin-bottom: -160px;\n  font-size: 40px;\n  font-weight: 600;\n  color: black;\n  text-transform: uppercase;\n}\n.text-decoration[data-v-29e40fa6] {\n  font-weight: 700;\n  text-shadow: -2px -2px 0 #E4DFD8, 2px -2px 0 #E4DFD8, -2px 2px 0 #E4DFD8, 2px 2px 0 #E4DFD8;\n}\n@media only screen and (max-width: 1440px) {\n.team[data-v-29e40fa6] {\n    padding: 100px 60px 0 60px;\n}\n.title[data-v-29e40fa6] {\n    font-size: 120px;\n}\n.title--small[data-v-29e40fa6] {\n    margin-bottom: -100px;\n    font-size: 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.team[data-v-29e40fa6] {\n    padding: 50px 20px 0 20px;\n}\n.title[data-v-29e40fa6] {\n    font-size: 70px;\n}\n.title--small[data-v-29e40fa6] {\n    margin-bottom: -60px;\n    font-size: 10px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/teamList.vue?vue&type=style&index=0&id=403e0a4c&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/teamList.vue?vue&type=style&index=0&id=403e0a4c&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./teamList.vue?vue&type=style&index=0&id=403e0a4c&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/teamList.vue?vue&type=style&index=0&id=403e0a4c&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=style&index=0&id=29e40fa6&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=style&index=0&id=29e40fa6&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./OurTeam.vue?vue&type=style&index=0&id=29e40fa6&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=style&index=0&id=29e40fa6&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/teamList.vue?vue&type=template&id=403e0a4c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/teamList.vue?vue&type=template&id=403e0a4c&scoped=true& ***!
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
    { staticClass: "team-list" },
    [
      _c(
        "ul",
        { staticClass: "list" },
        _vm._l(_vm.getMembersList, function(item, index) {
          return _c("li", { key: index, staticClass: "list__item" }, [
            index !== 4
              ? _c("div", { staticClass: "item" }, [
                  _c("img", {
                    staticClass: "list__image",
                    attrs: { src: item.full_avatar_url, alt: "avatar" }
                  }),
                  _vm._v(" "),
                  _c("p", { staticClass: "list__name" }, [
                    _vm._v(
                      _vm._s("" + (item.first_name + " " + item.last_name))
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "list__position" }, [
                    _vm._v(_vm._s(item.position))
                  ])
                ])
              : _c("div", { staticClass: "item" }, [
                  _c(
                    "div",
                    {
                      staticClass: "item__video",
                      on: { click: _vm.openContent }
                    },
                    [
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
                      ])
                    ]
                  )
                ])
          ])
        }),
        0
      ),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=template&id=29e40fa6&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=template&id=29e40fa6&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "team" }, [
    _c("div", { staticClass: "team__title" }, [
      _c("div", { staticClass: "title--small" }, [
        _vm._v("\n      " + _vm._s(_vm.$t("ourTeamSmall")) + "\n    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "title text-decoration" }, [
        _vm._v("\n      " + _vm._s(_vm.$t("ourTeamBig")) + "\n    ")
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "team-list" }, [_c("teamList")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/white/teamList.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/white/teamList.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _teamList_vue_vue_type_template_id_403e0a4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teamList.vue?vue&type=template&id=403e0a4c&scoped=true& */ "./resources/js/components/white/teamList.vue?vue&type=template&id=403e0a4c&scoped=true&");
/* harmony import */ var _teamList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teamList.vue?vue&type=script&lang=js& */ "./resources/js/components/white/teamList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _teamList_vue_vue_type_style_index_0_id_403e0a4c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teamList.vue?vue&type=style&index=0&id=403e0a4c&scoped=true&lang=scss& */ "./resources/js/components/white/teamList.vue?vue&type=style&index=0&id=403e0a4c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _teamList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _teamList_vue_vue_type_template_id_403e0a4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _teamList_vue_vue_type_template_id_403e0a4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "403e0a4c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/teamList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/teamList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/white/teamList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./teamList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/teamList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/teamList.vue?vue&type=style&index=0&id=403e0a4c&scoped=true&lang=scss&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/white/teamList.vue?vue&type=style&index=0&id=403e0a4c&scoped=true&lang=scss& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_teamList_vue_vue_type_style_index_0_id_403e0a4c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./teamList.vue?vue&type=style&index=0&id=403e0a4c&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/teamList.vue?vue&type=style&index=0&id=403e0a4c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_teamList_vue_vue_type_style_index_0_id_403e0a4c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_teamList_vue_vue_type_style_index_0_id_403e0a4c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_teamList_vue_vue_type_style_index_0_id_403e0a4c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_teamList_vue_vue_type_style_index_0_id_403e0a4c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/teamList.vue?vue&type=template&id=403e0a4c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/white/teamList.vue?vue&type=template&id=403e0a4c&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teamList_vue_vue_type_template_id_403e0a4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./teamList.vue?vue&type=template&id=403e0a4c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/teamList.vue?vue&type=template&id=403e0a4c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teamList_vue_vue_type_template_id_403e0a4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teamList_vue_vue_type_template_id_403e0a4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/AWE_White_paiges/OurTeam.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/AWE_White_paiges/OurTeam.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OurTeam_vue_vue_type_template_id_29e40fa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OurTeam.vue?vue&type=template&id=29e40fa6&scoped=true& */ "./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=template&id=29e40fa6&scoped=true&");
/* harmony import */ var _OurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OurTeam.vue?vue&type=script&lang=js& */ "./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OurTeam_vue_vue_type_style_index_0_id_29e40fa6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OurTeam.vue?vue&type=style&index=0&id=29e40fa6&scoped=true&lang=scss& */ "./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=style&index=0&id=29e40fa6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OurTeam_vue_vue_type_template_id_29e40fa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OurTeam_vue_vue_type_template_id_29e40fa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "29e40fa6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/AWE_White_paiges/OurTeam.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OurTeam.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=style&index=0&id=29e40fa6&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=style&index=0&id=29e40fa6&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_style_index_0_id_29e40fa6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./OurTeam.vue?vue&type=style&index=0&id=29e40fa6&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=style&index=0&id=29e40fa6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_style_index_0_id_29e40fa6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_style_index_0_id_29e40fa6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_style_index_0_id_29e40fa6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_style_index_0_id_29e40fa6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=template&id=29e40fa6&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=template&id=29e40fa6&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_template_id_29e40fa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OurTeam.vue?vue&type=template&id=29e40fa6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/OurTeam.vue?vue&type=template&id=29e40fa6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_template_id_29e40fa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_template_id_29e40fa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);