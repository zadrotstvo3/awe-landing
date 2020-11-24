(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/announcementsList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/announcementsList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "announcementsList",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['getArticlesList'])),
  created: function created() {
    this.getArticles();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getArticles']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_white_announcementsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/white/announcementsList */ "./resources/js/components/white/announcementsList.vue");
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
  name: "AnnouncementsWhite",
  components: {
    announcementsList: _js_components_white_announcementsList__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/announcementsList.vue?vue&type=style&index=0&id=e120702e&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/announcementsList.vue?vue&type=style&index=0&id=e120702e&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".announcements-list[data-v-e120702e] {\n  padding: 15px 0;\n}\n.announcements-list__title[data-v-e120702e] {\n  width: 100%;\n  max-width: 500px;\n  margin-left: 20%;\n  font-size: 120px;\n  font-weight: 800;\n  text-align: right;\n  text-transform: uppercase;\n  letter-spacing: 30px;\n  color: white;\n}\n.announcements-list__list[data-v-e120702e] {\n  position: relative;\n  padding: 15px;\n}\n.list[data-v-e120702e] {\n  width: 100%;\n  max-width: 1300px;\n  margin: -100px auto 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n}\n.list__item[data-v-e120702e] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.list__item:nth-child(even) .announce[data-v-e120702e] {\n  flex-direction: row-reverse;\n}\n.list__step[data-v-e120702e] {\n  width: 100%;\n  max-width: 100px;\n  align-self: stretch;\n  display: flex;\n  justify-content: space-between;\n  border-left: 1px solid #E4DFD8;\n}\n.list__step--name[data-v-e120702e] {\n  margin-left: 10px;\n  font-size: 14px;\n}\n.list__dot[data-v-e120702e] {\n  margin-left: -15px;\n}\n.list__announce[data-v-e120702e] {\n  margin-top: -100px;\n  padding: 100px 0;\n  width: 100%;\n}\n.announce[data-v-e120702e] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.announce__text[data-v-e120702e] {\n  padding: 0 35px;\n  align-self: flex-start;\n}\n.announce__title[data-v-e120702e] {\n  margin-bottom: 10px;\n  font-size: 32px;\n  line-height: 140%;\n  flex-grow: 1;\n}\n.announce__description[data-v-e120702e] {\n  font-size: 20px;\n  line-height: 140%;\n  font-weight: 200;\n}\n.announce__img[data-v-e120702e] {\n  width: 100%;\n  max-width: 600px;\n  height: auto;\n  border-radius: 30px;\n  flex-grow: 0;\n}\n@media only screen and (max-width: 1770px) {\n.announcements-list__title[data-v-e120702e] {\n    font-size: 80px;\n}\n}\n@media only screen and (max-width: 1440px) {\n.announcements-list__title[data-v-e120702e] {\n    margin-left: 30%;\n    font-size: 50px;\n}\n.list[data-v-e120702e] {\n    margin: -50px auto 0 auto;\n}\n.announce__img[data-v-e120702e] {\n    max-width: 450px;\n}\n.announce__title[data-v-e120702e] {\n    font-size: 22px;\n}\n.announce__description[data-v-e120702e] {\n    font-size: 16px;\n}\n}\n@media only screen and (max-width: 990px) {\n.announcements-list__title[data-v-e120702e] {\n    margin-left: 20%;\n    font-size: 30px;\n    text-align: left;\n}\n.list[data-v-e120702e] {\n    margin: 0 auto;\n}\n.announce__img[data-v-e120702e] {\n    max-width: 250px;\n}\n.announce__title[data-v-e120702e] {\n    font-size: 16px;\n}\n.announce__description[data-v-e120702e] {\n    font-size: 12px;\n}\n}\n@media only screen and (max-width: 690px) {\n.announcements-list__title[data-v-e120702e] {\n    max-width: 100%;\n    padding: 0 15px;\n    margin-left: 0;\n    font-size: 20px;\n    text-align: center;\n    letter-spacing: 0;\n}\n.list[data-v-e120702e] {\n    margin: 0 auto;\n}\n.list__item:nth-child(even) .announce[data-v-e120702e] {\n    flex-direction: column;\n}\n.list__step[data-v-e120702e] {\n    width: 70px;\n}\n.list__step--name[data-v-e120702e] {\n    margin: 0 5px;\n    font-size: 8px;\n}\n.list__announce[data-v-e120702e] {\n    padding: 20px 0;\n    margin-top: -60px;\n}\n.announce[data-v-e120702e] {\n    padding: 15px 0;\n    flex-direction: column;\n}\n.announce__img[data-v-e120702e] {\n    max-width: 100%;\n    margin-bottom: 10px;\n    height: 200px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n.announce__text[data-v-e120702e] {\n    padding: 0;\n}\n.announce__title[data-v-e120702e] {\n    font-size: 16px;\n}\n.announce__description[data-v-e120702e] {\n    font-size: 12px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=style&index=0&id=8940eaae&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=style&index=0&id=8940eaae&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".announcements__title[data-v-8940eaae] {\n  padding: 160px 160px 0 160px;\n}\n.title[data-v-8940eaae] {\n  font-size: 200px;\n  color: #F8F7F3;\n}\n.title--small[data-v-8940eaae] {\n  position: relative;\n  margin-bottom: -160px;\n  font-size: 40px;\n  font-weight: 600;\n  color: black;\n  text-transform: uppercase;\n}\n.text-decoration[data-v-8940eaae] {\n  font-weight: 700;\n  text-shadow: -2px -2px 0 #E4DFD8, 2px -2px 0 #E4DFD8, -2px 2px 0 #E4DFD8, 2px 2px 0 #E4DFD8;\n}\n@media only screen and (max-width: 1440px) {\n.announcements__title[data-v-8940eaae] {\n    padding: 100px 60px 0 60px;\n}\n.title[data-v-8940eaae] {\n    font-size: 120px;\n}\n.title--small[data-v-8940eaae] {\n    margin-bottom: -100px;\n    font-size: 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.announcements__title[data-v-8940eaae] {\n    padding: 50px 60px 0 60px;\n}\n.title[data-v-8940eaae] {\n    font-size: 70px;\n}\n.title--small[data-v-8940eaae] {\n    margin-bottom: -60px;\n    font-size: 10px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/announcementsList.vue?vue&type=style&index=0&id=e120702e&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/announcementsList.vue?vue&type=style&index=0&id=e120702e&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./announcementsList.vue?vue&type=style&index=0&id=e120702e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/announcementsList.vue?vue&type=style&index=0&id=e120702e&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=style&index=0&id=8940eaae&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=style&index=0&id=8940eaae&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Announcements.vue?vue&type=style&index=0&id=8940eaae&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=style&index=0&id=8940eaae&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/announcementsList.vue?vue&type=template&id=e120702e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/announcementsList.vue?vue&type=template&id=e120702e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "announcements-list" }, [
    _c("div", { staticClass: "announcements-list__title" }, [
      _c("h2", { staticClass: "title" }, [
        _vm._v(_vm._s(_vm.$t("announcementsTitle")))
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "announcements-list__list" },
      _vm._l(_vm.getArticlesList, function(article, articleIndex) {
        return articleIndex === _vm.$i18n.locale
          ? _c(
              "ul",
              { key: articleIndex, staticClass: "list" },
              _vm._l(article, function(item, index) {
                return item.title
                  ? _c("li", { key: index, staticClass: "list__item" }, [
                      _c("div", { staticClass: "list__step" }, [
                        _c("div", { staticClass: "list__dot" }, [
                          _c(
                            "svg",
                            {
                              attrs: {
                                width: "30",
                                height: "30",
                                viewBox: "0 0 30 30",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                              }
                            },
                            [
                              _c("circle", {
                                attrs: {
                                  cx: "15",
                                  cy: "15",
                                  r: "14.5",
                                  fill: "#F8F6F3",
                                  stroke: "#DED8D0"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "list__step--name" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(item.date) +
                              "\n          "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "list__announce" }, [
                        _c("div", { staticClass: "announce" }, [
                          _c("img", {
                            staticClass: "announce__img",
                            attrs: { src: item.full_image_url, alt: "image" }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "announce__text" }, [
                            _c("h3", { staticClass: "announce__title" }, [
                              _vm._v(_vm._s(item.title))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "announce__description" }, [
                              _vm._v(_vm._s(item.description))
                            ])
                          ])
                        ])
                      ])
                    ])
                  : _vm._e()
              }),
              0
            )
          : _vm._e()
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=template&id=8940eaae&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=template&id=8940eaae&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "announcements" }, [
    _c("div", { staticClass: "announcements__title" }, [
      _c("div", { staticClass: "title--small" }, [
        _vm._v(
          "\n      " + _vm._s(_vm.$t("announcementsTitleSmall")) + "\n    "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "title text-decoration" }, [
        _vm._v("\n      " + _vm._s(_vm.$t("announcementsTitleBig")) + "\n    ")
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "announcements__list" },
      [_c("announcementsList")],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/white/announcementsList.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/white/announcementsList.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _announcementsList_vue_vue_type_template_id_e120702e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcementsList.vue?vue&type=template&id=e120702e&scoped=true& */ "./resources/js/components/white/announcementsList.vue?vue&type=template&id=e120702e&scoped=true&");
/* harmony import */ var _announcementsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcementsList.vue?vue&type=script&lang=js& */ "./resources/js/components/white/announcementsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _announcementsList_vue_vue_type_style_index_0_id_e120702e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcementsList.vue?vue&type=style&index=0&id=e120702e&scoped=true&lang=scss& */ "./resources/js/components/white/announcementsList.vue?vue&type=style&index=0&id=e120702e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _announcementsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _announcementsList_vue_vue_type_template_id_e120702e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _announcementsList_vue_vue_type_template_id_e120702e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e120702e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/announcementsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/announcementsList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/white/announcementsList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./announcementsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/announcementsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/announcementsList.vue?vue&type=style&index=0&id=e120702e&scoped=true&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/white/announcementsList.vue?vue&type=style&index=0&id=e120702e&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementsList_vue_vue_type_style_index_0_id_e120702e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./announcementsList.vue?vue&type=style&index=0&id=e120702e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/announcementsList.vue?vue&type=style&index=0&id=e120702e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementsList_vue_vue_type_style_index_0_id_e120702e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementsList_vue_vue_type_style_index_0_id_e120702e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementsList_vue_vue_type_style_index_0_id_e120702e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementsList_vue_vue_type_style_index_0_id_e120702e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/announcementsList.vue?vue&type=template&id=e120702e&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/white/announcementsList.vue?vue&type=template&id=e120702e&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementsList_vue_vue_type_template_id_e120702e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./announcementsList.vue?vue&type=template&id=e120702e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/announcementsList.vue?vue&type=template&id=e120702e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementsList_vue_vue_type_template_id_e120702e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementsList_vue_vue_type_template_id_e120702e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/AWE_White_paiges/Announcements.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/AWE_White_paiges/Announcements.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Announcements_vue_vue_type_template_id_8940eaae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Announcements.vue?vue&type=template&id=8940eaae&scoped=true& */ "./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=template&id=8940eaae&scoped=true&");
/* harmony import */ var _Announcements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Announcements.vue?vue&type=script&lang=js& */ "./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Announcements_vue_vue_type_style_index_0_id_8940eaae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Announcements.vue?vue&type=style&index=0&id=8940eaae&scoped=true&lang=scss& */ "./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=style&index=0&id=8940eaae&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Announcements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Announcements_vue_vue_type_template_id_8940eaae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Announcements_vue_vue_type_template_id_8940eaae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8940eaae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/AWE_White_paiges/Announcements.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Announcements.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=style&index=0&id=8940eaae&scoped=true&lang=scss&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=style&index=0&id=8940eaae&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcements_vue_vue_type_style_index_0_id_8940eaae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Announcements.vue?vue&type=style&index=0&id=8940eaae&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=style&index=0&id=8940eaae&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcements_vue_vue_type_style_index_0_id_8940eaae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcements_vue_vue_type_style_index_0_id_8940eaae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcements_vue_vue_type_style_index_0_id_8940eaae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcements_vue_vue_type_style_index_0_id_8940eaae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=template&id=8940eaae&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=template&id=8940eaae&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcements_vue_vue_type_template_id_8940eaae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Announcements.vue?vue&type=template&id=8940eaae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_White_paiges/Announcements.vue?vue&type=template&id=8940eaae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcements_vue_vue_type_template_id_8940eaae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcements_vue_vue_type_template_id_8940eaae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);