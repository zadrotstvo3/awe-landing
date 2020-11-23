(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/canvas.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/canvas.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "canvasComponent",
  data: function data() {
    return {
      particleCanvas: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    __webpack_require__(/*! particles.js */ "./node_modules/particles.js/particles.js");

    this.$nextTick(function () {
      _this.initParticlesJS();
    });
  },
  methods: {
    initParticlesJS: function initParticlesJS() {
      /* eslint-disable */
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 2500
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.2,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 2.0301930307533627,
              "opacity_min": 0.09744926547616141,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 31.67101127975246,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 160.3412060865523,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 71.92807192807193,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    delete this.initParticlesJS;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__actions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__actions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_black_modal_profileOfferModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/black/modal/profileOfferModal */ "./resources/js/components/black/modal/profileOfferModal.vue");
/* harmony import */ var _js_components_black_modal_tokenOfferModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/black/modal/tokenOfferModal */ "./resources/js/components/black/modal/tokenOfferModal.vue");
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
  name: "actions",
  components: {
    profileOfferModal: _js_components_black_modal_profileOfferModal__WEBPACK_IMPORTED_MODULE_0__["default"],
    tokenOfferModal: _js_components_black_modal_tokenOfferModal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showProfileModal: false,
      showTokenModal: false
    };
  },
  methods: {
    toggleProfileModal: function toggleProfileModal() {
      this.showProfileModal = !this.showProfileModal;
    },
    toggleTokenModal: function toggleTokenModal() {
      this.showTokenModal = !this.showTokenModal;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
  name: "mainGallery",
  data: function data() {
    return {};
  },
  methods: {
    showItemList: function showItemList(option) {
      option.showList = !option.showList;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__head.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__head.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
  name: 'mainHead',
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__info.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__info.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "info"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_black_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/black/canvas */ "./resources/js/components/black/canvas.vue");
/* harmony import */ var _js_components_black_sandBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/black/sandBox */ "./resources/js/components/black/sandBox.vue");
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
  name: "mainSandbox",
  components: {
    canvasComponent: _js_components_black_canvas__WEBPACK_IMPORTED_MODULE_0__["default"],
    sandBox: _js_components_black_sandBox__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  methods: {
    getClassName: function getClassName(name) {
      return "list__".concat(name);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/profileOfferList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "profileOfferList"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/profileOfferModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_black_modal_profileOfferList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/black/modal/profileOfferList */ "./resources/js/components/black/modal/profileOfferList.vue");
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
  name: "profileOfferModal",
  components: {
    profileOfferList: _js_components_black_modal_profileOfferList__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  methods: {
    close: function close() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
  name: "tokenOfferModal",
  data: function data() {
    return {
      currency: [{
        name: 'USD',
        symbol: '$',
        rate: 2
      }, {
        name: 'EUR',
        symbol: '€',
        rate: 1.5
      }, {
        name: 'UAH',
        symbol: '₴',
        rate: 60
      }],
      counterNumber: 0,
      counterCurrency: '',
      counterResult: ''
    };
  },
  computed: {
    getTotalPrice: function getTotalPrice() {
      if (this.counterNumber <= 0) {
        return;
      }

      if (this.counterCurrency) {
        return this.counterNumber * this.counterCurrency.rate + "".concat(this.counterCurrency.symbol);
      }

      return '';
    }
  },
  methods: {
    close: function close() {
      this.$emit('close');
    },
    countThePrice: function countThePrice(item) {
      this.counterCurrency = item;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/sandBox.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/sandBox.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/main_paiges/aweBlack.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/main_paiges/aweBlack.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_black_main_paiges_main_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/black/main_paiges/main__head */ "./resources/js/components/black/main_paiges/main__head.vue");
/* harmony import */ var _js_components_black_main_paiges_main_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/black/main_paiges/main__gallery */ "./resources/js/components/black/main_paiges/main__gallery.vue");
/* harmony import */ var _js_components_black_main_paiges_main_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/black/main_paiges/main__sandbox */ "./resources/js/components/black/main_paiges/main__sandbox.vue");
/* harmony import */ var _js_components_black_main_paiges_main_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/black/main_paiges/main__actions */ "./resources/js/components/black/main_paiges/main__actions.vue");
/* harmony import */ var _js_components_black_main_paiges_main_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/components/black/main_paiges/main__info */ "./resources/js/components/black/main_paiges/main__info.vue");
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
  name: 'Home',
  components: {
    mainHead: _js_components_black_main_paiges_main_head__WEBPACK_IMPORTED_MODULE_0__["default"],
    mainGallery: _js_components_black_main_paiges_main_gallery__WEBPACK_IMPORTED_MODULE_1__["default"],
    mainSandbox: _js_components_black_main_paiges_main_sandbox__WEBPACK_IMPORTED_MODULE_2__["default"],
    actions: _js_components_black_main_paiges_main_actions__WEBPACK_IMPORTED_MODULE_3__["default"],
    info: _js_components_black_main_paiges_main_info__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__actions.vue?vue&type=style&index=0&id=063853ed&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__actions.vue?vue&type=style&index=0&id=063853ed&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".actions[data-v-063853ed] {\n  position: relative;\n  margin: -100px 0 -100px 0;\n  padding: 0 50px;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.actions__item[data-v-063853ed] {\n  width: 100%;\n  max-width: 400px;\n  padding: 37px 60px;\n  display: flex;\n  justify-content: flex-end;\n}\n.actions__item p[data-v-063853ed] {\n  position: relative;\n  text-transform: uppercase;\n}\n.actions__item p[data-v-063853ed]:after {\n  position: absolute;\n  top: 25px;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  content: url(" + escape(__webpack_require__(/*! @/js/assets/blackSVGs/green-line.svg */ "./resources/js/assets/blackSVGs/green-line.svg")) + ");\n}\n.actions__image[data-v-063853ed] {\n  padding: 0;\n  pointer-events: none;\n  max-width: 900px;\n}\n.actions__image img[data-v-063853ed] {\n  width: 100%;\n}\n.actions__buy-profile[data-v-063853ed] {\n  background: #080808;\n  background: linear-gradient(15deg, rgba(8, 8, 8, 0) 70%, rgba(142, 142, 142, 0.3) 100%);\n  border-radius: 0 30px 0 0;\n  transition: 0.3s ease-in;\n}\n.actions__buy-profile[data-v-063853ed]:hover {\n  cursor: pointer;\n  background: #080808;\n  background: linear-gradient(15deg, rgba(8, 8, 8, 0) 70%, #8e8e8e 100%);\n}\n.actions__buy-token[data-v-063853ed] {\n  justify-content: flex-start;\n  border-radius: 30px 0 0 0;\n  background: #8e8e8e;\n  background: linear-gradient(165deg, rgba(142, 142, 142, 0.3) 0%, rgba(8, 8, 8, 0) 40%);\n}\n.actions__buy-token[data-v-063853ed]:hover {\n  cursor: pointer;\n  background: #8e8e8e;\n  background: linear-gradient(165deg, #8e8e8e 0%, rgba(8, 8, 8, 0) 30%);\n}\n.fade-enter-active[data-v-063853ed], .fade-leave-active[data-v-063853ed] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-063853ed], .fade-leave-to[data-v-063853ed] {\n  opacity: 0;\n}\n@media screen and (max-width: 770px) {\n.actions[data-v-063853ed] {\n    margin: -150px 0 100px 0;\n    padding: 10px;\n    flex-direction: column;\n}\n.actions__item[data-v-063853ed] {\n    width: 100%;\n    order: 1;\n}\n.actions__image[data-v-063853ed] {\n    max-width: 400px;\n}\n.actions__image img[data-v-063853ed] {\n    width: 100%;\n}\n.actions__buy-token[data-v-063853ed], .actions__buy-profile[data-v-063853ed] {\n    order: 2;\n    border-radius: 0 0 0 0;\n    justify-content: center;\n}\n}\n@media screen and (max-width: 330px) {\n.actions[data-v-063853ed] {\n    margin: -50px 0 100px 0;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=style&index=0&id=26ab4fc2&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=style&index=0&id=26ab4fc2&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gallery[data-v-26ab4fc2] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.list[data-v-26ab4fc2] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  overflow: visible;\n}\n.list__item[data-v-26ab4fc2] {\n  position: relative;\n  padding: 20px;\n  flex: 0 1 20%;\n  height: 100%;\n  min-height: 290px;\n  display: flex;\n  list-style: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.list__item[data-v-26ab4fc2]:nth-child(4) {\n  flex: 0 1 20%;\n}\n.list__item[data-v-26ab4fc2]:nth-child(4):before {\n  content: url(" + escape(__webpack_require__(/*! @/js/assets/blackSVGs/dots-horisontal.svg */ "./resources/js/assets/blackSVGs/dots-horisontal.svg")) + ");\n  position: absolute;\n  bottom: -10px;\n}\n.list__item[data-v-26ab4fc2]:nth-child(4):after {\n  content: url(" + escape(__webpack_require__(/*! @/js/assets/blackSVGs/dots-vertical.svg */ "./resources/js/assets/blackSVGs/dots-vertical.svg")) + ");\n  position: absolute;\n  top: 10px;\n  right: 0;\n}\n.item[data-v-26ab4fc2] {\n  width: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n}\n.item__head[data-v-26ab4fc2] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  cursor: pointer;\n}\n.item__icon[data-v-26ab4fc2] {\n  margin-right: 25px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.item__icon svg[data-v-26ab4fc2] {\n  fill: white;\n}\n.item__icon[data-v-26ab4fc2]:hover {\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.item__title[data-v-26ab4fc2] {\n  font-size: 25px;\n  color: white;\n}\n.item__body[data-v-26ab4fc2] {\n  padding: 20px;\n}\n.item__outerText[data-v-26ab4fc2] {\n  margin-bottom: 50px;\n  color: white;\n  align-content: center;\n  align-self: center;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0s;\n}\n.item__outerText span[data-v-26ab4fc2] {\n  display: block;\n  margin: 5px 0;\n  font-size: 24px;\n}\n.item__outerText span[data-v-26ab4fc2]:last-child {\n  font-size: 34px;\n}\n.sublist__item[data-v-26ab4fc2] {\n  margin: 5px 0;\n  font-size: 12px;\n  color: white;\n}\n.title[data-v-26ab4fc2] {\n  position: relative;\n  margin: -40px 0;\n  text-align: center;\n  letter-spacing: 20px;\n  font-size: 120px;\n  font-weight: 700;\n  color: white;\n  text-transform: uppercase;\n}\n.fade-enter-active[data-v-26ab4fc2], .fade-leave-active[data-v-26ab4fc2] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-26ab4fc2], .fade-leave-to[data-v-26ab4fc2] {\n  opacity: 0;\n}\n.big-text[data-v-26ab4fc2] {\n  font-size: 80px;\n}\n@media only screen and (max-width: 1300px) {\n.list__item[data-v-26ab4fc2] {\n    flex: 0 1 33%;\n}\n.list__item[data-v-26ab4fc2]:nth-child(4) {\n    flex: 0 1 66%;\n}\n.title[data-v-26ab4fc2] {\n    margin: -20px 0;\n    font-size: 70px;\n}\n}\n@media only screen and (max-width: 990px) {\n.list__item[data-v-26ab4fc2] {\n    flex: 0 1 50%;\n}\n.list__item[data-v-26ab4fc2]:nth-child(4) {\n    flex: 0 1 50%;\n}\n}\n@media only screen and (max-width: 670px) {\n.list__item[data-v-26ab4fc2] {\n    flex: 0 1 100%;\n    min-height: 0;\n}\n.list__item[data-v-26ab4fc2]:nth-child(4) {\n    flex: 0 1 100%;\n}\n.list[data-v-26ab4fc2] {\n    order: 2;\n}\n.big-text[data-v-26ab4fc2] {\n    font-size: 34px;\n}\n.item__outerText[data-v-26ab4fc2] {\n    display: none;\n}\n.title[data-v-26ab4fc2] {\n    margin: 30px 0;\n    padding: 15px;\n    order: 1;\n    font-size: 34px;\n    letter-spacing: 5px;\n    text-align: left;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__head.vue?vue&type=style&index=0&id=4deda0a0&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__head.vue?vue&type=style&index=0&id=4deda0a0&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head[data-v-4deda0a0] {\n  width: 100%;\n  height: calc(100vh - 100px);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  color: white;\n  background-image: url(" + escape(__webpack_require__(/*! @/js/assets/map_fon.jpg */ "./resources/js/assets/map_fon.jpg")) + ");\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.head__top[data-v-4deda0a0] {\n  width: 100%;\n  padding: 20px;\n}\n.top[data-v-4deda0a0] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.top__banner[data-v-4deda0a0] {\n  position: relative;\n}\n.top__text[data-v-4deda0a0] {\n  position: relative;\n  padding: 10px 0;\n  display: flex;\n  vertical-align: baseline;\n  align-items: center;\n  font-size: 32px;\n}\n.top__image[data-v-4deda0a0] {\n  margin: -20px 0 0 5px;\n}\n.top__image:hover + .top__help[data-v-4deda0a0] {\n  opacity: 1;\n  visibility: visible;\n}\n.top__help[data-v-4deda0a0] {\n  position: absolute;\n  width: 100px;\n  padding: 15px;\n  opacity: 0;\n  visibility: hidden;\n  top: -40px;\n  right: -70px;\n  font-size: 16px;\n  color: black;\n  background-color: #fff;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 88%, 38% 88%, 26% 100%, 28% 88%, 0 88%);\n          clip-path: polygon(0 0, 100% 0, 100% 88%, 38% 88%, 26% 100%, 28% 88%, 0 88%);\n}\n.top__small-text[data-v-4deda0a0] {\n  margin-right: 30px;\n  font-size: 16px;\n  font-weight: lighter;\n}\n.top__test-mode[data-v-4deda0a0] {\n  margin-top: 30px;\n  padding: 15px;\n  text-transform: uppercase;\n  color: black;\n  background-color: #fff;\n}\n.top__test-mode span[data-v-4deda0a0] {\n  margin-left: 30px;\n}\n.bottom[data-v-4deda0a0] {\n  width: 100%;\n  padding: 0 40px;\n  display: flex;\n  justify-content: flex-start;\n}\n.values__item[data-v-4deda0a0] {\n  width: 100%;\n  margin: 10px 0;\n  padding: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  text-align: left;\n  list-style: none;\n}\n.values__name[data-v-4deda0a0] {\n  position: relative;\n  width: 320px;\n  padding: 15px 10px;\n  font-size: 16px;\n  font-weight: 200;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-left: none;\n}\n.values__name span[data-v-4deda0a0] {\n  margin-left: 10px;\n  font-weight: 700;\n}\n.values__name[data-v-4deda0a0]:after {\n  position: absolute;\n  content: url(" + escape(__webpack_require__(/*! @/js/assets/blackSVGs/coube-white.svg */ "./resources/js/assets/blackSVGs/coube-white.svg")) + ");\n  top: -2px;\n  right: -1px;\n}\n.values__name[data-v-4deda0a0]:before {\n  position: absolute;\n  content: url(" + escape(__webpack_require__(/*! @/js/assets/blackSVGs/coube-white.svg */ "./resources/js/assets/blackSVGs/coube-white.svg")) + ");\n  bottom: 0;\n  right: -1px;\n}\n.values__amount[data-v-4deda0a0] {\n  position: relative;\n  width: 100px;\n  padding: 15px 10px;\n  margin-left: 10px;\n  display: flex;\n  font-size: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-right: none;\n}\n.values__amount img[data-v-4deda0a0] {\n  margin-left: 10px;\n}\n.values__amount[data-v-4deda0a0]:after {\n  position: absolute;\n  content: url(" + escape(__webpack_require__(/*! @/js/assets/blackSVGs/coube-white.svg */ "./resources/js/assets/blackSVGs/coube-white.svg")) + ");\n  top: -2px;\n  left: -1px;\n}\n.values__amount[data-v-4deda0a0]:before {\n  position: absolute;\n  content: url(" + escape(__webpack_require__(/*! @/js/assets/blackSVGs/coube-white.svg */ "./resources/js/assets/blackSVGs/coube-white.svg")) + ");\n  bottom: 0;\n  left: -1px;\n}\n.values__reserved[data-v-4deda0a0] {\n  position: absolute;\n  top: 3.3rem;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.values__icon[data-v-4deda0a0] {\n  width: 25px;\n  height: 25px;\n  margin-left: 5px;\n  align-self: flex-start;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.values__icon img[data-v-4deda0a0] {\n  width: 15px;\n  height: 15px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.border--small[data-v-4deda0a0] {\n  padding: 1px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.lock[data-v-4deda0a0] {\n  width: 100%;\n  height: 100%;\n  margin-right: 150px;\n}\n.lock__item[data-v-4deda0a0] {\n  position: relative;\n}\n.lock__item:hover .lock__active[data-v-4deda0a0] {\n  cursor: pointer;\n  opacity: 2;\n  z-index: 2;\n  transition: 0.3s ease-in-out;\n}\n.lock__active[data-v-4deda0a0], .lock__static[data-v-4deda0a0] {\n  position: absolute;\n  opacity: 0;\n  z-index: 0;\n  transition: 0.3s ease-in-out;\n}\n.lock__static[data-v-4deda0a0] {\n  opacity: 1;\n  z-index: 1;\n}\n@media screen and (max-width: 770px) {\n.head[data-v-4deda0a0] {\n    height: 100vh;\n    background-size: cover;\n}\n.top__text[data-v-4deda0a0] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.top__image[data-v-4deda0a0] {\n    position: absolute;\n    right: 0;\n}\n.top__test-mode[data-v-4deda0a0] {\n    font-size: 14px;\n}\n.top__test-mode span[data-v-4deda0a0] {\n    margin-left: 10px;\n}\n.top__big-text[data-v-4deda0a0], .top__small-text[data-v-4deda0a0] {\n    padding: 5px;\n    display: block;\n    text-align: center;\n}\n.top__big-text[data-v-4deda0a0] {\n    font-size: 18px;\n}\n.top__small-text[data-v-4deda0a0] {\n    margin-right: 0;\n}\n.bottom[data-v-4deda0a0] {\n    padding: 0;\n}\n.bottom__values[data-v-4deda0a0] {\n    width: 100%;\n}\n.values[data-v-4deda0a0] {\n    width: 100%;\n}\n.values__item[data-v-4deda0a0] {\n    width: 320px;\n    margin: 10px auto;\n}\n.values__name[data-v-4deda0a0], .values__amount[data-v-4deda0a0] {\n    font-size: 11px;\n}\n.values__name img[data-v-4deda0a0], .values__amount img[data-v-4deda0a0] {\n    width: 20px;\n}\n.values__name[data-v-4deda0a0]:before {\n    bottom: -2px;\n}\n.values__name[data-v-4deda0a0]:after {\n    top: -10px;\n}\n.values__amount[data-v-4deda0a0]:before {\n    bottom: -2px;\n}\n.values__amount[data-v-4deda0a0]:after {\n    top: -10px;\n}\n.values__reserved[data-v-4deda0a0] {\n    top: 45px;\n    left: 0;\n    font-size: 9px;\n}\n}\n@media screen and (max-width: 590px) {\n.top__banner[data-v-4deda0a0] {\n    display: none;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__info.vue?vue&type=style&index=0&id=c9ebbf24&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__info.vue?vue&type=style&index=0&id=c9ebbf24&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".info[data-v-c9ebbf24] {\n  width: 100%;\n  max-width: 1800px;\n  margin: 100px auto 0 auto;\n  padding-bottom: 100px;\n  display: flex;\n  flex-direction: row;\n  color: white;\n}\n.info__block[data-v-c9ebbf24] {\n  position: relative;\n  width: 33.33%;\n  padding: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-right: 1px solid;\n  border-top: 1px solid;\n  border-image-source: linear-gradient(-140deg, rgba(95, 95, 95, 0.2), black);\n  border-image-slice: 1;\n  transition: 0.3s ease-in-out;\n}\n.info__block[data-v-c9ebbf24]:last-child {\n  border-right: none;\n  border-left: 1px solid;\n  border-image-source: linear-gradient(40deg, rgba(95, 95, 95, 0.2), black);\n}\n.info__block[data-v-c9ebbf24]:last-child:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: url(" + escape(__webpack_require__(/*! @/js/assets/blackSVGs/coube-white.svg */ "./resources/js/assets/blackSVGs/coube-white.svg")) + ");\n}\n.info__block[data-v-c9ebbf24]:before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  content: url(" + escape(__webpack_require__(/*! @/js/assets/blackSVGs/coube-white.svg */ "./resources/js/assets/blackSVGs/coube-white.svg")) + ");\n}\n.info__block[data-v-c9ebbf24]:hover {\n  cursor: pointer;\n  background: linear-gradient(40deg, rgba(95, 95, 95, 0.2), black);\n}\n.info__images[data-v-c9ebbf24] {\n  width: 33.33%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.info__images img[data-v-c9ebbf24] {\n  margin: 0 5px;\n}\n.fade-enter-active[data-v-c9ebbf24], .fade-leave-active[data-v-c9ebbf24] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-c9ebbf24], .fade-leave-to[data-v-c9ebbf24] {\n  opacity: 0;\n}\n@media screen and (max-width: 770px) {\n.info[data-v-c9ebbf24] {\n    padding-bottom: 20px;\n    flex-direction: column;\n}\n.info__block[data-v-c9ebbf24] {\n    width: 100%;\n    order: 2;\n}\n.info__images[data-v-c9ebbf24] {\n    order: 1;\n    width: 100%;\n    margin: 10px 0;\n    flex-direction: column;\n}\n.info__images img[data-v-c9ebbf24] {\n    margin: 5px 0;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=style&index=0&id=6703d4b7&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=style&index=0&id=6703d4b7&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sandBox[data-v-6703d4b7] {\n  position: relative;\n  width: 100%;\n  height: 1200px;\n  color: white;\n}\n.sandBox__bg[data-v-6703d4b7] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n}\n.sandBox__content[data-v-6703d4b7] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  padding: 30px 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n.sandBox__title[data-v-6703d4b7] {\n  width: 70%;\n  margin: -100px auto 0 auto;\n  font-size: 150px;\n  letter-spacing: 30px;\n  color: white;\n  opacity: 1;\n}\n.sandBox__title img[data-v-6703d4b7] {\n  width: 100%;\n  min-height: 200px;\n  opacity: 0.3;\n}\n.sandBox__clocks[data-v-6703d4b7] {\n  position: relative;\n  width: 100%;\n  max-width: 790px;\n  min-height: 790px;\n  margin: -50px auto 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px dotted rgba(255, 255, 255, 0.5);\n  border-radius: 100%;\n  background-color: #000000;\n}\n.sandTime[data-v-6703d4b7] {\n  width: 300px !important;\n  height: 400px !important;\n  background-color: black;\n}\n.list__item[data-v-6703d4b7] {\n  flex: 0 0 50%;\n  align-self: center;\n}\n.list__title[data-v-6703d4b7] {\n  margin-bottom: 20px;\n}\n.list__sublist[data-v-6703d4b7] {\n  width: 180px;\n}\n.list__AI[data-v-6703d4b7] {\n  position: absolute;\n  top: 100px;\n  left: -80px;\n}\n.list__BLOCKCHAIN[data-v-6703d4b7] {\n  position: absolute;\n  top: 100px;\n  right: -80px;\n}\n.list__ML[data-v-6703d4b7] {\n  position: absolute;\n  bottom: 10px;\n  left: -80px;\n}\n.list__SMART[data-v-6703d4b7] {\n  position: absolute;\n  bottom: 10px;\n  right: -80px;\n}\n.list__AI[data-v-6703d4b7], .list__ML[data-v-6703d4b7] {\n  transform: rotateY(180deg);\n  text-align: right;\n}\n.list__AI .list__title[data-v-6703d4b7], .list__AI .list__sublist-text[data-v-6703d4b7], .list__ML .list__title[data-v-6703d4b7], .list__ML .list__sublist-text[data-v-6703d4b7] {\n  transform: rotateY(180deg);\n  text-align: right;\n}\n.list__title[data-v-6703d4b7]:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n@media screen and (max-width: 770px) {\n.sandBox[data-v-6703d4b7] {\n    position: relative;\n    height: 650px;\n    margin: 0;\n}\n.sandBox__title[data-v-6703d4b7] {\n    margin-top: -50px;\n    width: 65%;\n}\n.sandBox__title img[data-v-6703d4b7] {\n    min-height: auto;\n    opacity: 1;\n}\n.sandBox__content[data-v-6703d4b7] {\n    display: block;\n}\n.sandBox__clocks[data-v-6703d4b7] {\n    margin: 0;\n    max-width: 100%;\n    min-height: auto;\n    position: static;\n    justify-content: center;\n    align-items: flex-start;\n    border: none;\n    background-color: transparent;\n}\n.sandBox__clocks .sandTime[data-v-6703d4b7] {\n    display: none;\n}\n.sandBox__list[data-v-6703d4b7] {\n    position: static;\n    width: 100%;\n    max-width: 500px;\n    display: flex;\n}\n.list[data-v-6703d4b7] {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n.list__item[data-v-6703d4b7] {\n    margin: 22px 0;\n}\n.list__AI[data-v-6703d4b7], .list__BLOCKCHAIN[data-v-6703d4b7], .list__ML[data-v-6703d4b7], .list__SMART[data-v-6703d4b7] {\n    position: static;\n}\n.list__AI[data-v-6703d4b7], .list__ML[data-v-6703d4b7] {\n    transform: rotateY(0deg);\n    text-align: left;\n}\n.list__AI .list__title[data-v-6703d4b7], .list__AI .list__sublist-text[data-v-6703d4b7], .list__ML .list__title[data-v-6703d4b7], .list__ML .list__sublist-text[data-v-6703d4b7] {\n    transform: rotateY(0deg);\n    text-align: left;\n}\n}\n@media screen and (max-width: 770px) {\n.sandBox[data-v-6703d4b7] {\n    position: relative;\n}\n.list[data-v-6703d4b7] {\n    padding: 15px;\n    font-size: 12px;\n}\n.list__sublist[data-v-6703d4b7] {\n    width: 130px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferList.vue?vue&type=style&index=0&id=153f50ee&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/profileOfferList.vue?vue&type=style&index=0&id=153f50ee&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profiles[data-v-153f50ee] {\n  margin-top: 50px;\n  width: 100%;\n  padding: 15px;\n}\n.profiles__list[data-v-153f50ee] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n.profiles__item[data-v-153f50ee] {\n  margin: 5px;\n  padding: 15px;\n  width: 100%;\n  max-width: 350px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  list-style: none;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  transition: 0.3s ease-in-out;\n  background-color: #fff;\n  color: black;\n}\n.profiles__item[data-v-153f50ee]:hover {\n  cursor: pointer;\n  border-color: transparent;\n  transform: scale(1.1);\n}\n.profiles__title[data-v-153f50ee] {\n  font-size: 24px;\n  text-align: center;\n}\n.profiles__action[data-v-153f50ee] {\n  margin: 20px 0;\n  width: 100%;\n  max-width: 200px;\n  padding: 15px;\n  font-size: 20px;\n  text-transform: uppercase;\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  background-color: #3aca3a;\n  color: white;\n}\n.item[data-v-153f50ee] {\n  margin-top: 20px;\n}\n.item__value[data-v-153f50ee] {\n  position: relative;\n  margin: 25px 0;\n  list-style: none;\n  font-size: 18px;\n}\n.item__value[data-v-153f50ee]:before {\n  position: absolute;\n  content: url(" + escape(__webpack_require__(/*! @/js/assets/check-mark.svg */ "./resources/js/assets/check-mark.svg")) + ");\n  width: 25px;\n  left: -50px;\n  top: 0;\n}\n@media screen and (max-width: 570px) {\n.profiles[data-v-153f50ee] {\n    padding: 0;\n}\n.profiles__list[data-v-153f50ee] {\n    flex-direction: column;\n}\n.profiles__item[data-v-153f50ee] {\n    margin: 15px 0;\n}\n.profiles__item[data-v-153f50ee]:hover {\n    cursor: pointer;\n    border-color: transparent;\n    transform: scale(1);\n}\n.profiles__action[data-v-153f50ee] {\n    margin: 5px 0;\n}\n.item[data-v-153f50ee] {\n    margin-top: 0;\n}\n.item__value[data-v-153f50ee] {\n    margin: 15px 0;\n}\n.item__value[data-v-153f50ee]:before {\n    left: -30px;\n    width: 15px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferModal.vue?vue&type=style&index=0&id=5f95b90d&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/profileOfferModal.vue?vue&type=style&index=0&id=5f95b90d&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal[data-v-5f95b90d] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.8);\n}\n.modal__container[data-v-5f95b90d] {\n  width: 100%;\n  height: 800px;\n  max-width: 1350px;\n  padding: 35px;\n  display: flex;\n  flex-direction: column;\n  background-color: #010101;\n  border: 1px solid white;\n}\n.modal__close[data-v-5f95b90d] {\n  padding: 0 0 15px 0;\n  display: flex;\n  justify-content: flex-end;\n}\n.modal__content[data-v-5f95b90d] {\n  color: white;\n}\n.content[data-v-5f95b90d] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.content__title[data-v-5f95b90d] {\n  margin-top: -50px;\n  padding: 15px 0;\n  font-size: 44px;\n  text-transform: uppercase;\n}\n@media only screen and (max-width: 770px) {\n.modal__container[data-v-5f95b90d] {\n    width: 100%;\n    max-width: 450px;\n    height: 600px;\n    overflow-y: scroll;\n}\n.content__title[data-v-5f95b90d] {\n    padding: 10px 0;\n    font-size: 22px;\n}\n}\n@media only screen and (max-width: 370px) {\n.modal__container[data-v-5f95b90d] {\n    padding: 15px;\n    max-width: 300px;\n    height: 400px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=style&index=0&id=7a08b01d&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=style&index=0&id=7a08b01d&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal[data-v-7a08b01d] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.8);\n}\n.modal__container[data-v-7a08b01d] {\n  width: 100%;\n  max-width: 750px;\n  padding: 35px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\n.modal__close[data-v-7a08b01d] {\n  padding: 0 0 15px 0;\n  display: flex;\n  justify-content: flex-end;\n}\n.modal__content[data-v-7a08b01d] {\n  color: black;\n}\n.content[data-v-7a08b01d] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.content__description[data-v-7a08b01d] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.content__title[data-v-7a08b01d] {\n  padding: 15px 0;\n  font-size: 44px;\n  text-transform: uppercase;\n}\n.content__text[data-v-7a08b01d] {\n  padding: 15px 0;\n}\n.content__counter[data-v-7a08b01d] {\n  width: 100%;\n  max-width: 550px;\n  padding: 15px;\n  margin: 0 15px;\n  background-color: #EDEDED;\n}\n.content__action[data-v-7a08b01d] {\n  padding: 15px 0;\n}\n.content__action .action[data-v-7a08b01d] {\n  margin: 15px 0;\n  width: 250px;\n  padding: 15px;\n  background-color: #35b135;\n  font-size: 24px;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  color: white;\n  text-transform: uppercase;\n}\n.counter[data-v-7a08b01d] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n}\n.counter__input[data-v-7a08b01d] {\n  width: 100%;\n  margin: 15px 0;\n  padding: 15px;\n  background-color: #fff;\n  border: none;\n  outline: none;\n}\n.counter__icon[data-v-7a08b01d] {\n  position: relative;\n}\n.counter__icon[data-v-7a08b01d]:after {\n  content: url(" + escape(__webpack_require__(/*! @/js/assets/SVG/Nh.svg */ "./resources/js/assets/SVG/Nh.svg")) + ");\n  position: absolute;\n  top: 30px;\n  right: -110px;\n  z-index: 2;\n}\n.counter__select[data-v-7a08b01d] {\n  position: relative;\n  margin: 15px 0;\n  padding: 12px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  font-size: 20px;\n  background-color: #fff;\n}\n.counter__select--text[data-v-7a08b01d] {\n  font-size: 18px;\n  text-decoration: underline;\n}\n.counter__select img[data-v-7a08b01d] {\n  width: 12px;\n  margin-left: 10px;\n}\n.counter__select--list[data-v-7a08b01d] {\n  padding: 5px;\n  display: none;\n  position: absolute;\n  bottom: -105px;\n  left: 0;\n  right: 0;\n  background-color: #EDEDED;\n}\n.counter__select:hover .counter__select--list[data-v-7a08b01d] {\n  cursor: pointer;\n  display: block;\n}\n.counter__result[data-v-7a08b01d] {\n  width: 100%;\n  font-size: 24px;\n}\n.counter__icon img[data-v-7a08b01d] {\n  margin: 0 10px 0 5px;\n  width: 35px;\n}\n.list[data-v-7a08b01d] {\n  background-color: #EDEDED;\n}\n.list__item[data-v-7a08b01d] {\n  margin: 7px 0;\n  list-style: none;\n}\n.list__item[data-v-7a08b01d]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n@media only screen and (max-width: 770px) {\n.modal__container[data-v-7a08b01d] {\n    width: 100%;\n    max-width: 300px;\n    min-height: 500px;\n}\n.content[data-v-7a08b01d] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n.content__title[data-v-7a08b01d] {\n    font-size: 22px;\n    padding: 5px 0;\n}\n.content__text[data-v-7a08b01d] {\n    margin: 0;\n    padding: 5px 0;\n    font-size: 12px;\n}\n.content__counter[data-v-7a08b01d] {\n    width: 100%;\n    padding: 0 15px;\n    margin: 0;\n}\n.content__action[data-v-7a08b01d] {\n    width: 100%;\n    padding: 0;\n}\n.content__action .action[data-v-7a08b01d] {\n    width: 100%;\n}\n.counter__input[data-v-7a08b01d] {\n    width: 100%;\n    padding: 12px;\n}\n.counter__icon[data-v-7a08b01d]:after {\n    top: 25px;\n    right: -90px;\n}\n.counter__select[data-v-7a08b01d] {\n    margin: 0 5px;\n    padding: 12px 15px;\n    width: 100%;\n}\n.counter__select--list[data-v-7a08b01d] {\n    top: 45px;\n}\n.counter__result[data-v-7a08b01d] {\n    margin-top: 15px;\n    font-size: 14px;\n}\n}\n@media only screen and (max-width: 370px) {\n.modal__container[data-v-7a08b01d] {\n    padding: 15px;\n    min-height: 300px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__actions.vue?vue&type=style&index=0&id=063853ed&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__actions.vue?vue&type=style&index=0&id=063853ed&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__actions.vue?vue&type=style&index=0&id=063853ed&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__actions.vue?vue&type=style&index=0&id=063853ed&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=style&index=0&id=26ab4fc2&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=style&index=0&id=26ab4fc2&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__gallery.vue?vue&type=style&index=0&id=26ab4fc2&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=style&index=0&id=26ab4fc2&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__head.vue?vue&type=style&index=0&id=4deda0a0&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__head.vue?vue&type=style&index=0&id=4deda0a0&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__head.vue?vue&type=style&index=0&id=4deda0a0&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__head.vue?vue&type=style&index=0&id=4deda0a0&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__info.vue?vue&type=style&index=0&id=c9ebbf24&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__info.vue?vue&type=style&index=0&id=c9ebbf24&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__info.vue?vue&type=style&index=0&id=c9ebbf24&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__info.vue?vue&type=style&index=0&id=c9ebbf24&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=style&index=0&id=6703d4b7&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=style&index=0&id=6703d4b7&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__sandbox.vue?vue&type=style&index=0&id=6703d4b7&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=style&index=0&id=6703d4b7&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferList.vue?vue&type=style&index=0&id=153f50ee&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/profileOfferList.vue?vue&type=style&index=0&id=153f50ee&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profileOfferList.vue?vue&type=style&index=0&id=153f50ee&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferList.vue?vue&type=style&index=0&id=153f50ee&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferModal.vue?vue&type=style&index=0&id=5f95b90d&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/profileOfferModal.vue?vue&type=style&index=0&id=5f95b90d&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profileOfferModal.vue?vue&type=style&index=0&id=5f95b90d&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferModal.vue?vue&type=style&index=0&id=5f95b90d&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=style&index=0&id=7a08b01d&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=style&index=0&id=7a08b01d&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tokenOfferModal.vue?vue&type=style&index=0&id=7a08b01d&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=style&index=0&id=7a08b01d&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/canvas.vue?vue&type=template&id=d4ce559a&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/canvas.vue?vue&type=template&id=d4ce559a&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "particles-js" } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__actions.vue?vue&type=template&id=063853ed&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__actions.vue?vue&type=template&id=063853ed&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "actions" },
    [
      _c(
        "div",
        {
          staticClass: "actions__item actions__buy-profile",
          on: {
            click: function($event) {
              _vm.showProfileModal = !_vm.showProfileModal
            }
          }
        },
        [_c("p", { staticClass: "action" }, [_vm._v("Купить Профиль")])]
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "actions__item actions__buy-token",
          on: {
            click: function($event) {
              _vm.showTokenModal = !_vm.showTokenModal
            }
          }
        },
        [_c("p", { staticClass: "action" }, [_vm._v("Купить Токен")])]
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade", mode: "in-out" } },
        [
          _vm.showProfileModal
            ? _c("profileOfferModal", { on: { close: _vm.toggleProfileModal } })
            : _vm._e(),
          _vm._v(" "),
          _vm.showTokenModal
            ? _c("tokenOfferModal", { on: { close: _vm.toggleTokenModal } })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "actions__item actions__image" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(/*! @/js/assets/phone_black.png */ "./resources/js/assets/phone_black.png"),
          alt: "phone image"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=template&id=26ab4fc2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=template&id=26ab4fc2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "gallery" }, [
    _c(
      "ul",
      { staticClass: "list" },
      _vm._l(_vm.$t("blackGallery"), function(option, index) {
        return _c(
          "li",
          {
            key: index,
            staticClass: "list__item",
            style: [
              option.showList
                ? {
                    backgroundImage:
                      "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9) ),\n        url(" +
                      __webpack_require__("./resources/js/assets/galleryBlack sync recursive ^\\.\\/.*$")("./" + option.colorImage) +
                      ")"
                  }
                : {
                    backgroundImage:
                      "url(" +
                      __webpack_require__("./resources/js/assets/galleryBlack sync recursive ^\\.\\/.*$")("./" + option.colorImage) +
                      ")"
                  }
            ]
          },
          [
            _c(
              "div",
              { staticClass: "item" },
              [
                _c(
                  "div",
                  {
                    staticClass: "item__head",
                    on: {
                      click: function($event) {
                        return _vm.showItemList(option)
                      }
                    }
                  },
                  [
                    _c("span", { staticClass: "item__icon" }, [
                      !option.showList
                        ? _c(
                            "svg",
                            {
                              staticStyle: { width: "24px", height: "24px" },
                              attrs: { viewBox: "0 0 24 24" }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                                }
                              })
                            ]
                          )
                        : _c(
                            "svg",
                            {
                              staticStyle: { width: "24px", height: "24px" },
                              attrs: { viewBox: "0 0 24 24" }
                            },
                            [_c("path", { attrs: { d: "M19,13H5V11H19V13Z" } })]
                          )
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "item__title" }, [
                      _vm._v(_vm._s(option.title))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("transition", { attrs: { name: "fade", mode: "in-out" } }, [
                  option.showList
                    ? _c("div", { staticClass: "item__body" }, [
                        _c(
                          "ul",
                          { staticClass: "sublist" },
                          _vm._l(option.list, function(item) {
                            return _c(
                              "li",
                              { key: item.text, staticClass: "sublist__item" },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(item.text) +
                                    "\n              "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  option.title === "No" && !option.showList
                    ? _c("div", { staticClass: "item__outerText" }, [
                        _c("span", [_vm._v("как на етом")]),
                        _vm._v(" "),
                        _c("span", [_vm._v("заработать")])
                      ])
                    : _vm._e()
                ])
              ],
              1
            )
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__head.vue?vue&type=template&id=4deda0a0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__head.vue?vue&type=template&id=4deda0a0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "head" }, [
    _c("div", { staticClass: "head__top" }, [
      _c("div", { staticClass: "top" }, [
        _c("div", { staticClass: "top__text" }, [
          _c("span", { staticClass: "top__small-text" }, [
            _vm._v(_vm._s(_vm.$t("blackMainHeaderTextOne")))
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "top__big-text" }, [
            _vm._v(_vm._s(_vm.$t("blackMainHeaderTextOneNumber")))
          ]),
          _vm._v(" "),
          _c("img", {
            staticClass: "top__image",
            attrs: {
              src: __webpack_require__(/*! @/js/assets/blackSVGs/help-circle.svg */ "./resources/js/assets/blackSVGs/help-circle.svg"),
              alt: "help"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "top__help" }, [_vm._v("Help")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "top__banner" },
          [_c("Title", { attrs: { loop: true } })],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "top__text" }, [
          _c("span", { staticClass: "top__small-text" }, [
            _vm._v(_vm._s(_vm.$t("blackMainHeaderTextTwo")))
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "top__big-text" }, [
            _vm._v(_vm._s(_vm.$t("blackMainHeaderTextTwoNumber")))
          ]),
          _vm._v(" "),
          _c("img", {
            staticClass: "top__image",
            attrs: {
              src: __webpack_require__(/*! @/js/assets/blackSVGs/help-circle.svg */ "./resources/js/assets/blackSVGs/help-circle.svg"),
              alt: "help"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "top__help" }, [_vm._v("Help.")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "top__test-mode" }, [
          _vm._v(
            "\n        " +
              _vm._s(_vm.$t("blackMainHeaderTextThree")) +
              "\n        "
          ),
          _c("span", [_vm._v(_vm._s(_vm.$t("blackMainHeaderTextThreeTime")))])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "head__bottom" }, [
      _c("div", { staticClass: "bottom" }, [
        _c("div", { staticClass: "bottom__values" }, [
          _c(
            "ul",
            { staticClass: "values" },
            _vm._l(_vm.$t("blackMainHeaderList"), function(amount) {
              return _c(
                "li",
                { key: amount.plan, staticClass: "values__item" },
                [
                  _c("div", { staticClass: "values__name" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(amount.title) +
                        "\n             "
                    ),
                    _c("span", [
                      _vm._v(
                        "\n               " +
                          _vm._s(amount.plan) +
                          "\n             "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "values__amount",
                      class: { "values__under-text": amount.reserved }
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(amount.value) +
                          "\n              "
                      ),
                      amount.value === "Free"
                        ? _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! @/js/assets/blackSVGs/infinity.svg */ "./resources/js/assets/blackSVGs/infinity.svg"),
                              alt: "infinity icon"
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      amount.reserved
                        ? _c("p", { staticClass: "values__reserved" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.$t("blackMainHeaderListReserved")) +
                                "\n              "
                            )
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  amount.closeIcon
                    ? _c("div", { staticClass: "values__icon border--small" }, [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! @/js/assets/blackSVGs/close.svg */ "./resources/js/assets/blackSVGs/close.svg"),
                            alt: "close icon"
                          }
                        })
                      ])
                    : _c("div", { staticClass: "values__icon border--small" }, [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! @/js/assets/blackSVGs/complete.svg */ "./resources/js/assets/blackSVGs/complete.svg"),
                            alt: "complete icon"
                          }
                        })
                      ])
                ]
              )
            }),
            0
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__info.vue?vue&type=template&id=c9ebbf24&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__info.vue?vue&type=template&id=c9ebbf24&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "info" }, [
    _c(
      "div",
      {
        staticClass: "info__block",
        on: {
          click: function($event) {
            return _vm.$router.push("/for-investors")
          }
        }
      },
      [_c("h3", { staticClass: "info__title" }, [_vm._v("Інвесторам")])]
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info__images" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(/*! @/js/assets/blackSVGs/GooglePlay-green.svg */ "./resources/js/assets/blackSVGs/GooglePlay-green.svg"),
          alt: "google button"
        }
      }),
      _vm._v(" "),
      _c("img", {
        attrs: {
          src: __webpack_require__(/*! @/js/assets/blackSVGs/AppStore-green.svg */ "./resources/js/assets/blackSVGs/AppStore-green.svg"),
          alt: "apple button"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info__block" }, [
      _c("h3", { staticClass: "info__title" }, [_vm._v("Користувачам")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=template&id=6703d4b7&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=template&id=6703d4b7&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "sandBox" },
    [
      _c("canvasComponent", { staticClass: "sandBox__bg" }),
      _vm._v(" "),
      _c("div", { staticClass: "sandBox__content" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "sandBox__clocks" },
          [
            _c("sand-box", { staticClass: "sandTime" }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "sandBox__list list" },
              _vm._l(_vm.$t("blackValueList"), function(list) {
                return _c(
                  "li",
                  {
                    key: list.title,
                    staticClass: "list__item",
                    class: _vm.getClassName(list.title)
                  },
                  [
                    _c("div", { staticClass: "list__title" }, [
                      _c("h3", [
                        _vm._v(
                          "\n              " +
                            _vm._s(list.title) +
                            "\n            "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "list__sublist" },
                      _vm._l(list.sublist, function(item, index) {
                        return _c(
                          "li",
                          { key: index, staticClass: "list__sublist-item" },
                          [
                            _c("div", { staticClass: "list__sublist-text" }, [
                              _vm._v(
                                "\n                " +
                                  _vm._s(item.text) +
                                  "\n              "
                              )
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ]
                )
              }),
              0
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sandBox__title" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(/*! @/js/assets/blackSVGs/evolution.svg */ "./resources/js/assets/blackSVGs/evolution.svg"),
          alt: "title"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferList.vue?vue&type=template&id=153f50ee&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/profileOfferList.vue?vue&type=template&id=153f50ee&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "profiles" }, [
    _c(
      "ul",
      { staticClass: "profiles__list" },
      _vm._l(3, function(item, index) {
        return _c("li", { key: index, staticClass: "profiles__item" }, [
          _c("h4", { staticClass: "profiles__title" }, [
            _vm._v("\n        Basic\n      ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "item" }, [
            _c(
              "ul",
              { staticClass: "item__values" },
              _vm._l(7, function(item, index) {
                return _c("li", { key: index, staticClass: "item__value" }, [
                  _c("p", [_vm._v("Lorem ipsum dolor.")])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "profiles__action" }, [
            _vm._v("\n        Buy now\n      ")
          ])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferModal.vue?vue&type=template&id=5f95b90d&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/profileOfferModal.vue?vue&type=template&id=5f95b90d&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
                  fill: "white",
                  d:
                    "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal__content" }, [
          _c(
            "div",
            { staticClass: "content" },
            [
              _c("h3", { staticClass: "content__title" }, [
                _vm._v("Our offers")
              ]),
              _vm._v(" "),
              _c("profileOfferList")
            ],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=template&id=7a08b01d&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=template&id=7a08b01d&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
                  fill: "black",
                  d:
                    "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal__content" }, [
          _c("div", { staticClass: "content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "content__counter" }, [
              _c("div", { staticClass: "counter" }, [
                _c("label", {
                  staticClass: "counter__icon",
                  attrs: { for: "counter__input" }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.counterNumber,
                      expression: "counterNumber"
                    }
                  ],
                  staticClass: "counter__input",
                  attrs: { id: "counter__input", type: "text" },
                  domProps: { value: _vm.counterNumber },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.counterNumber = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "counter__select" }, [
                  _c("span", { staticClass: "counter__select--text" }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          "" +
                            (_vm.counterCurrency === ""
                              ? "Currency"
                              : _vm.counterCurrency.name)
                        ) +
                        "\n              "
                    )
                  ]),
                  _vm._v(" "),
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! @/js/assets/SVG/arrow-down-sign-to-navigate.svg */ "./resources/js/assets/SVG/arrow-down-sign-to-navigate.svg"),
                      alt: "arrow"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "counter__select--list" }, [
                    _c(
                      "ul",
                      { staticClass: "list" },
                      _vm._l(_vm.currency, function(item, index) {
                        return _c(
                          "li",
                          {
                            key: index,
                            staticClass: "list__item",
                            on: {
                              click: function($event) {
                                return _vm.countThePrice(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(item.name) +
                                "\n                  "
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "counter__result" }, [
                  _vm._v(
                    "\n              = " +
                      _vm._s(_vm.getTotalPrice) +
                      "\n            "
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(1)
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content__description" }, [
      _c("h3", { staticClass: "content__title" }, [_vm._v("Buy tokens")]),
      _vm._v(" "),
      _c("p", { staticClass: "content__text" }, [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet animi aspernatur consequatur consequuntur deleniti dolorem, enim esse ex exercitationem fugiat fugit labore maiores minima molestias natus officia omnis perspiciatis, possimus provident quam quidem quos sapiente soluta, veniam voluptatum. Cumque, dicta excepturi harum inventore laboriosam molestiae porro quam voluptatum."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content__action" }, [
      _c("button", { staticClass: "action" }, [_vm._v("buy")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/sandBox.vue?vue&type=template&id=99954648&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/sandBox.vue?vue&type=template&id=99954648&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("sandTime", { attrs: { loop: true } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/main_paiges/aweBlack.vue?vue&type=template&id=5c4d70c5&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/main_paiges/aweBlack.vue?vue&type=template&id=5c4d70c5& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "main" }, [
    _c("section", { staticClass: "head" }, [_c("mainHead")], 1),
    _vm._v(" "),
    _c("section", { staticClass: "gallery" }, [_c("mainGallery")], 1),
    _vm._v(" "),
    _c("section", { staticClass: "sandbox" }, [_c("mainSandbox")], 1),
    _vm._v(" "),
    _c("section", { staticClass: "actions" }, [_c("actions")], 1),
    _vm._v(" "),
    _c("section", { staticClass: "info" }, [_c("info")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/SVG/Nh.svg":
/*!****************************************!*\
  !*** ./resources/js/assets/SVG/Nh.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Nh.svg?1c441b0c01d4632e39abe48c21c5bcff";

/***/ }),

/***/ "./resources/js/assets/blackSVGs/AppStore-green.svg":
/*!**********************************************************!*\
  !*** ./resources/js/assets/blackSVGs/AppStore-green.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/AppStore-green.svg?d54ab1d918ed5963e2ae04d634f8ffd8";

/***/ }),

/***/ "./resources/js/assets/blackSVGs/GooglePlay-green.svg":
/*!************************************************************!*\
  !*** ./resources/js/assets/blackSVGs/GooglePlay-green.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/GooglePlay-green.svg?63484550434a087e66076af2f5df0cce";

/***/ }),

/***/ "./resources/js/assets/blackSVGs/close.svg":
/*!*************************************************!*\
  !*** ./resources/js/assets/blackSVGs/close.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/close.svg?2a9d7fe03dd17b031260b19ba5dddaa8";

/***/ }),

/***/ "./resources/js/assets/blackSVGs/complete.svg":
/*!****************************************************!*\
  !*** ./resources/js/assets/blackSVGs/complete.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/complete.svg?7e6a339d8451119ca89ba4a49691e336";

/***/ }),

/***/ "./resources/js/assets/blackSVGs/coube-white.svg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/blackSVGs/coube-white.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/coube-white.svg?a82d1b51501ca5971370453e7d95b8f2";

/***/ }),

/***/ "./resources/js/assets/blackSVGs/dots-horisontal.svg":
/*!***********************************************************!*\
  !*** ./resources/js/assets/blackSVGs/dots-horisontal.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/dots-horisontal.svg?45daf44a7a5a055e721bdb9d87d8ec1b";

/***/ }),

/***/ "./resources/js/assets/blackSVGs/dots-vertical.svg":
/*!*********************************************************!*\
  !*** ./resources/js/assets/blackSVGs/dots-vertical.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/dots-vertical.svg?63a568f5068fc412f72321208d4e0f0f";

/***/ }),

/***/ "./resources/js/assets/blackSVGs/evolution.svg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/blackSVGs/evolution.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/evolution.svg?5a11914aaff04c9b5d7189fb2d988637";

/***/ }),

/***/ "./resources/js/assets/blackSVGs/green-line.svg":
/*!******************************************************!*\
  !*** ./resources/js/assets/blackSVGs/green-line.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/green-line.svg?8c6fdb72de820b17b10917aa73edee8d";

/***/ }),

/***/ "./resources/js/assets/blackSVGs/help-circle.svg":
/*!*******************************************************!*\
  !*** ./resources/js/assets/blackSVGs/help-circle.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/help-circle.svg?e350a0efa8e46a66a79cba2502d86f2d";

/***/ }),

/***/ "./resources/js/assets/blackSVGs/infinity.svg":
/*!****************************************************!*\
  !*** ./resources/js/assets/blackSVGs/infinity.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/infinity.svg?97acf1650a108412f32dec414b787384";

/***/ }),

/***/ "./resources/js/assets/check-mark.svg":
/*!********************************************!*\
  !*** ./resources/js/assets/check-mark.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/check-mark.svg?b23ac45f93a91b159cafa95dd7d9fc5f";

/***/ }),

/***/ "./resources/js/assets/galleryBlack sync recursive ^\\.\\/.*$":
/*!********************************************************!*\
  !*** ./resources/js/assets/galleryBlack sync ^\.\/.*$ ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.svg": "./resources/js/assets/galleryBlack/1.svg",
	"./2.svg": "./resources/js/assets/galleryBlack/2.svg",
	"./3.svg": "./resources/js/assets/galleryBlack/3.svg",
	"./4-black.png": "./resources/js/assets/galleryBlack/4-black.png",
	"./5-black.png": "./resources/js/assets/galleryBlack/5-black.png",
	"./play.svg": "./resources/js/assets/galleryBlack/play.svg"
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
webpackContext.id = "./resources/js/assets/galleryBlack sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/js/assets/galleryBlack/1.svg":
/*!************************************************!*\
  !*** ./resources/js/assets/galleryBlack/1.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/1.svg?cc998f66ae718b39e083c480a77b0f10";

/***/ }),

/***/ "./resources/js/assets/galleryBlack/2.svg":
/*!************************************************!*\
  !*** ./resources/js/assets/galleryBlack/2.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/2.svg?ac4af9d992b7e00c8602d1d6bbfdb22e";

/***/ }),

/***/ "./resources/js/assets/galleryBlack/3.svg":
/*!************************************************!*\
  !*** ./resources/js/assets/galleryBlack/3.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/3.svg?e18d8c44a025bccfd7fcdbf7bf83a884";

/***/ }),

/***/ "./resources/js/assets/galleryBlack/4-black.png":
/*!******************************************************!*\
  !*** ./resources/js/assets/galleryBlack/4-black.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/4-black.png?749ea818c26c69eb4e9e1320314cfe0a";

/***/ }),

/***/ "./resources/js/assets/galleryBlack/5-black.png":
/*!******************************************************!*\
  !*** ./resources/js/assets/galleryBlack/5-black.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/5-black.png?834dd6324b49232dd465aa7bdad06d98";

/***/ }),

/***/ "./resources/js/assets/galleryBlack/play.svg":
/*!***************************************************!*\
  !*** ./resources/js/assets/galleryBlack/play.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/play.svg?7a987263e70a1f6e6d80f368c852934e";

/***/ }),

/***/ "./resources/js/assets/map_fon.jpg":
/*!*****************************************!*\
  !*** ./resources/js/assets/map_fon.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/map_fon.jpg?0526cf70e88c9ba83b2aaaa8406590c9";

/***/ }),

/***/ "./resources/js/assets/phone_black.png":
/*!*********************************************!*\
  !*** ./resources/js/assets/phone_black.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/phone_black.png?60148ef244134d5b6f4fc5756c35f1f2";

/***/ }),

/***/ "./resources/js/components/black/canvas.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/black/canvas.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_vue_vue_type_template_id_d4ce559a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.vue?vue&type=template&id=d4ce559a&scoped=true& */ "./resources/js/components/black/canvas.vue?vue&type=template&id=d4ce559a&scoped=true&");
/* harmony import */ var _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas.vue?vue&type=script&lang=js& */ "./resources/js/components/black/canvas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _canvas_vue_vue_type_template_id_d4ce559a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _canvas_vue_vue_type_template_id_d4ce559a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d4ce559a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/canvas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/canvas.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/black/canvas.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./canvas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/canvas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/black/canvas.vue?vue&type=template&id=d4ce559a&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/black/canvas.vue?vue&type=template&id=d4ce559a&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_template_id_d4ce559a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./canvas.vue?vue&type=template&id=d4ce559a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/canvas.vue?vue&type=template&id=d4ce559a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_template_id_d4ce559a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_template_id_d4ce559a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__actions.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__actions.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_actions_vue_vue_type_template_id_063853ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main__actions.vue?vue&type=template&id=063853ed&scoped=true& */ "./resources/js/components/black/main_paiges/main__actions.vue?vue&type=template&id=063853ed&scoped=true&");
/* harmony import */ var _main_actions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main__actions.vue?vue&type=script&lang=js& */ "./resources/js/components/black/main_paiges/main__actions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _main_actions_vue_vue_type_style_index_0_id_063853ed_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main__actions.vue?vue&type=style&index=0&id=063853ed&scoped=true&lang=scss& */ "./resources/js/components/black/main_paiges/main__actions.vue?vue&type=style&index=0&id=063853ed&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_actions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_actions_vue_vue_type_template_id_063853ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_actions_vue_vue_type_template_id_063853ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "063853ed",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/main_paiges/main__actions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__actions.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__actions.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_actions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__actions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__actions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_actions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__actions.vue?vue&type=style&index=0&id=063853ed&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__actions.vue?vue&type=style&index=0&id=063853ed&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_actions_vue_vue_type_style_index_0_id_063853ed_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__actions.vue?vue&type=style&index=0&id=063853ed&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__actions.vue?vue&type=style&index=0&id=063853ed&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_actions_vue_vue_type_style_index_0_id_063853ed_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_actions_vue_vue_type_style_index_0_id_063853ed_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_actions_vue_vue_type_style_index_0_id_063853ed_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_actions_vue_vue_type_style_index_0_id_063853ed_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__actions.vue?vue&type=template&id=063853ed&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__actions.vue?vue&type=template&id=063853ed&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_actions_vue_vue_type_template_id_063853ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__actions.vue?vue&type=template&id=063853ed&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__actions.vue?vue&type=template&id=063853ed&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_actions_vue_vue_type_template_id_063853ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_actions_vue_vue_type_template_id_063853ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__gallery.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__gallery.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_gallery_vue_vue_type_template_id_26ab4fc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main__gallery.vue?vue&type=template&id=26ab4fc2&scoped=true& */ "./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=template&id=26ab4fc2&scoped=true&");
/* harmony import */ var _main_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main__gallery.vue?vue&type=script&lang=js& */ "./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _main_gallery_vue_vue_type_style_index_0_id_26ab4fc2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main__gallery.vue?vue&type=style&index=0&id=26ab4fc2&scoped=true&lang=scss& */ "./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=style&index=0&id=26ab4fc2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_gallery_vue_vue_type_template_id_26ab4fc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_gallery_vue_vue_type_template_id_26ab4fc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "26ab4fc2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/main_paiges/main__gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=style&index=0&id=26ab4fc2&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=style&index=0&id=26ab4fc2&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_gallery_vue_vue_type_style_index_0_id_26ab4fc2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__gallery.vue?vue&type=style&index=0&id=26ab4fc2&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=style&index=0&id=26ab4fc2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_gallery_vue_vue_type_style_index_0_id_26ab4fc2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_gallery_vue_vue_type_style_index_0_id_26ab4fc2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_gallery_vue_vue_type_style_index_0_id_26ab4fc2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_gallery_vue_vue_type_style_index_0_id_26ab4fc2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=template&id=26ab4fc2&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=template&id=26ab4fc2&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_gallery_vue_vue_type_template_id_26ab4fc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__gallery.vue?vue&type=template&id=26ab4fc2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__gallery.vue?vue&type=template&id=26ab4fc2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_gallery_vue_vue_type_template_id_26ab4fc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_gallery_vue_vue_type_template_id_26ab4fc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__head.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__head.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_head_vue_vue_type_template_id_4deda0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main__head.vue?vue&type=template&id=4deda0a0&scoped=true& */ "./resources/js/components/black/main_paiges/main__head.vue?vue&type=template&id=4deda0a0&scoped=true&");
/* harmony import */ var _main_head_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main__head.vue?vue&type=script&lang=js& */ "./resources/js/components/black/main_paiges/main__head.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _main_head_vue_vue_type_style_index_0_id_4deda0a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main__head.vue?vue&type=style&index=0&id=4deda0a0&scoped=true&lang=scss& */ "./resources/js/components/black/main_paiges/main__head.vue?vue&type=style&index=0&id=4deda0a0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_head_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_head_vue_vue_type_template_id_4deda0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_head_vue_vue_type_template_id_4deda0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4deda0a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/main_paiges/main__head.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__head.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__head.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_head_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__head.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__head.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_head_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__head.vue?vue&type=style&index=0&id=4deda0a0&scoped=true&lang=scss&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__head.vue?vue&type=style&index=0&id=4deda0a0&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_head_vue_vue_type_style_index_0_id_4deda0a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__head.vue?vue&type=style&index=0&id=4deda0a0&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__head.vue?vue&type=style&index=0&id=4deda0a0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_head_vue_vue_type_style_index_0_id_4deda0a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_head_vue_vue_type_style_index_0_id_4deda0a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_head_vue_vue_type_style_index_0_id_4deda0a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_head_vue_vue_type_style_index_0_id_4deda0a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__head.vue?vue&type=template&id=4deda0a0&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__head.vue?vue&type=template&id=4deda0a0&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_head_vue_vue_type_template_id_4deda0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__head.vue?vue&type=template&id=4deda0a0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__head.vue?vue&type=template&id=4deda0a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_head_vue_vue_type_template_id_4deda0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_head_vue_vue_type_template_id_4deda0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__info.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__info.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_info_vue_vue_type_template_id_c9ebbf24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main__info.vue?vue&type=template&id=c9ebbf24&scoped=true& */ "./resources/js/components/black/main_paiges/main__info.vue?vue&type=template&id=c9ebbf24&scoped=true&");
/* harmony import */ var _main_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main__info.vue?vue&type=script&lang=js& */ "./resources/js/components/black/main_paiges/main__info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _main_info_vue_vue_type_style_index_0_id_c9ebbf24_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main__info.vue?vue&type=style&index=0&id=c9ebbf24&scoped=true&lang=scss& */ "./resources/js/components/black/main_paiges/main__info.vue?vue&type=style&index=0&id=c9ebbf24&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_info_vue_vue_type_template_id_c9ebbf24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_info_vue_vue_type_template_id_c9ebbf24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c9ebbf24",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/main_paiges/main__info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__info.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__info.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__info.vue?vue&type=style&index=0&id=c9ebbf24&scoped=true&lang=scss&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__info.vue?vue&type=style&index=0&id=c9ebbf24&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_info_vue_vue_type_style_index_0_id_c9ebbf24_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__info.vue?vue&type=style&index=0&id=c9ebbf24&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__info.vue?vue&type=style&index=0&id=c9ebbf24&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_info_vue_vue_type_style_index_0_id_c9ebbf24_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_info_vue_vue_type_style_index_0_id_c9ebbf24_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_info_vue_vue_type_style_index_0_id_c9ebbf24_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_info_vue_vue_type_style_index_0_id_c9ebbf24_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__info.vue?vue&type=template&id=c9ebbf24&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__info.vue?vue&type=template&id=c9ebbf24&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_info_vue_vue_type_template_id_c9ebbf24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__info.vue?vue&type=template&id=c9ebbf24&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__info.vue?vue&type=template&id=c9ebbf24&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_info_vue_vue_type_template_id_c9ebbf24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_info_vue_vue_type_template_id_c9ebbf24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__sandbox.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__sandbox.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_sandbox_vue_vue_type_template_id_6703d4b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main__sandbox.vue?vue&type=template&id=6703d4b7&scoped=true& */ "./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=template&id=6703d4b7&scoped=true&");
/* harmony import */ var _main_sandbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main__sandbox.vue?vue&type=script&lang=js& */ "./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _main_sandbox_vue_vue_type_style_index_0_id_6703d4b7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main__sandbox.vue?vue&type=style&index=0&id=6703d4b7&scoped=true&lang=scss& */ "./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=style&index=0&id=6703d4b7&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_sandbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_sandbox_vue_vue_type_template_id_6703d4b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_sandbox_vue_vue_type_template_id_6703d4b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6703d4b7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/main_paiges/main__sandbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_sandbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__sandbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_sandbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=style&index=0&id=6703d4b7&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=style&index=0&id=6703d4b7&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_sandbox_vue_vue_type_style_index_0_id_6703d4b7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__sandbox.vue?vue&type=style&index=0&id=6703d4b7&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=style&index=0&id=6703d4b7&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_sandbox_vue_vue_type_style_index_0_id_6703d4b7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_sandbox_vue_vue_type_style_index_0_id_6703d4b7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_sandbox_vue_vue_type_style_index_0_id_6703d4b7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_sandbox_vue_vue_type_style_index_0_id_6703d4b7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=template&id=6703d4b7&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=template&id=6703d4b7&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_sandbox_vue_vue_type_template_id_6703d4b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main__sandbox.vue?vue&type=template&id=6703d4b7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/main_paiges/main__sandbox.vue?vue&type=template&id=6703d4b7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_sandbox_vue_vue_type_template_id_6703d4b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_sandbox_vue_vue_type_template_id_6703d4b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/black/modal/profileOfferList.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/black/modal/profileOfferList.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profileOfferList_vue_vue_type_template_id_153f50ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileOfferList.vue?vue&type=template&id=153f50ee&scoped=true& */ "./resources/js/components/black/modal/profileOfferList.vue?vue&type=template&id=153f50ee&scoped=true&");
/* harmony import */ var _profileOfferList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profileOfferList.vue?vue&type=script&lang=js& */ "./resources/js/components/black/modal/profileOfferList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _profileOfferList_vue_vue_type_style_index_0_id_153f50ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profileOfferList.vue?vue&type=style&index=0&id=153f50ee&scoped=true&lang=scss& */ "./resources/js/components/black/modal/profileOfferList.vue?vue&type=style&index=0&id=153f50ee&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _profileOfferList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profileOfferList_vue_vue_type_template_id_153f50ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profileOfferList_vue_vue_type_template_id_153f50ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "153f50ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/modal/profileOfferList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/modal/profileOfferList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/black/modal/profileOfferList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profileOfferList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/black/modal/profileOfferList.vue?vue&type=style&index=0&id=153f50ee&scoped=true&lang=scss&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/black/modal/profileOfferList.vue?vue&type=style&index=0&id=153f50ee&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferList_vue_vue_type_style_index_0_id_153f50ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profileOfferList.vue?vue&type=style&index=0&id=153f50ee&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferList.vue?vue&type=style&index=0&id=153f50ee&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferList_vue_vue_type_style_index_0_id_153f50ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferList_vue_vue_type_style_index_0_id_153f50ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferList_vue_vue_type_style_index_0_id_153f50ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferList_vue_vue_type_style_index_0_id_153f50ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/black/modal/profileOfferList.vue?vue&type=template&id=153f50ee&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/black/modal/profileOfferList.vue?vue&type=template&id=153f50ee&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferList_vue_vue_type_template_id_153f50ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profileOfferList.vue?vue&type=template&id=153f50ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferList.vue?vue&type=template&id=153f50ee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferList_vue_vue_type_template_id_153f50ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferList_vue_vue_type_template_id_153f50ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/black/modal/profileOfferModal.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/black/modal/profileOfferModal.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profileOfferModal_vue_vue_type_template_id_5f95b90d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileOfferModal.vue?vue&type=template&id=5f95b90d&scoped=true& */ "./resources/js/components/black/modal/profileOfferModal.vue?vue&type=template&id=5f95b90d&scoped=true&");
/* harmony import */ var _profileOfferModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profileOfferModal.vue?vue&type=script&lang=js& */ "./resources/js/components/black/modal/profileOfferModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _profileOfferModal_vue_vue_type_style_index_0_id_5f95b90d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profileOfferModal.vue?vue&type=style&index=0&id=5f95b90d&scoped=true&lang=scss& */ "./resources/js/components/black/modal/profileOfferModal.vue?vue&type=style&index=0&id=5f95b90d&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _profileOfferModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profileOfferModal_vue_vue_type_template_id_5f95b90d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profileOfferModal_vue_vue_type_template_id_5f95b90d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f95b90d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/modal/profileOfferModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/modal/profileOfferModal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/black/modal/profileOfferModal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profileOfferModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/black/modal/profileOfferModal.vue?vue&type=style&index=0&id=5f95b90d&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/black/modal/profileOfferModal.vue?vue&type=style&index=0&id=5f95b90d&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferModal_vue_vue_type_style_index_0_id_5f95b90d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profileOfferModal.vue?vue&type=style&index=0&id=5f95b90d&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferModal.vue?vue&type=style&index=0&id=5f95b90d&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferModal_vue_vue_type_style_index_0_id_5f95b90d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferModal_vue_vue_type_style_index_0_id_5f95b90d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferModal_vue_vue_type_style_index_0_id_5f95b90d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferModal_vue_vue_type_style_index_0_id_5f95b90d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/black/modal/profileOfferModal.vue?vue&type=template&id=5f95b90d&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/black/modal/profileOfferModal.vue?vue&type=template&id=5f95b90d&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferModal_vue_vue_type_template_id_5f95b90d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profileOfferModal.vue?vue&type=template&id=5f95b90d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/profileOfferModal.vue?vue&type=template&id=5f95b90d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferModal_vue_vue_type_template_id_5f95b90d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileOfferModal_vue_vue_type_template_id_5f95b90d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/black/modal/tokenOfferModal.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/black/modal/tokenOfferModal.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tokenOfferModal_vue_vue_type_template_id_7a08b01d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenOfferModal.vue?vue&type=template&id=7a08b01d&scoped=true& */ "./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=template&id=7a08b01d&scoped=true&");
/* harmony import */ var _tokenOfferModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenOfferModal.vue?vue&type=script&lang=js& */ "./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tokenOfferModal_vue_vue_type_style_index_0_id_7a08b01d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokenOfferModal.vue?vue&type=style&index=0&id=7a08b01d&scoped=true&lang=scss& */ "./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=style&index=0&id=7a08b01d&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tokenOfferModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tokenOfferModal_vue_vue_type_template_id_7a08b01d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tokenOfferModal_vue_vue_type_template_id_7a08b01d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7a08b01d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/modal/tokenOfferModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tokenOfferModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tokenOfferModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tokenOfferModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=style&index=0&id=7a08b01d&scoped=true&lang=scss&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=style&index=0&id=7a08b01d&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tokenOfferModal_vue_vue_type_style_index_0_id_7a08b01d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tokenOfferModal.vue?vue&type=style&index=0&id=7a08b01d&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=style&index=0&id=7a08b01d&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tokenOfferModal_vue_vue_type_style_index_0_id_7a08b01d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tokenOfferModal_vue_vue_type_style_index_0_id_7a08b01d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tokenOfferModal_vue_vue_type_style_index_0_id_7a08b01d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tokenOfferModal_vue_vue_type_style_index_0_id_7a08b01d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=template&id=7a08b01d&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=template&id=7a08b01d&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tokenOfferModal_vue_vue_type_template_id_7a08b01d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tokenOfferModal.vue?vue&type=template&id=7a08b01d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/tokenOfferModal.vue?vue&type=template&id=7a08b01d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tokenOfferModal_vue_vue_type_template_id_7a08b01d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tokenOfferModal_vue_vue_type_template_id_7a08b01d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/black/sandBox.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/black/sandBox.vue ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sandBox_vue_vue_type_template_id_99954648_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sandBox.vue?vue&type=template&id=99954648&scoped=true& */ "./resources/js/components/black/sandBox.vue?vue&type=template&id=99954648&scoped=true&");
/* harmony import */ var _sandBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sandBox.vue?vue&type=script&lang=js& */ "./resources/js/components/black/sandBox.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sandBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sandBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sandBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sandBox_vue_vue_type_template_id_99954648_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sandBox_vue_vue_type_template_id_99954648_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "99954648",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/sandBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/sandBox.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/black/sandBox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sandBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./sandBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/sandBox.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sandBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sandBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sandBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sandBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sandBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/black/sandBox.vue?vue&type=template&id=99954648&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/black/sandBox.vue?vue&type=template&id=99954648&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sandBox_vue_vue_type_template_id_99954648_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./sandBox.vue?vue&type=template&id=99954648&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/sandBox.vue?vue&type=template&id=99954648&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sandBox_vue_vue_type_template_id_99954648_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sandBox_vue_vue_type_template_id_99954648_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/main_paiges/aweBlack.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/main_paiges/aweBlack.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aweBlack_vue_vue_type_template_id_5c4d70c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aweBlack.vue?vue&type=template&id=5c4d70c5& */ "./resources/js/pages/main_paiges/aweBlack.vue?vue&type=template&id=5c4d70c5&");
/* harmony import */ var _aweBlack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aweBlack.vue?vue&type=script&lang=js& */ "./resources/js/pages/main_paiges/aweBlack.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _aweBlack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _aweBlack_vue_vue_type_template_id_5c4d70c5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _aweBlack_vue_vue_type_template_id_5c4d70c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/main_paiges/aweBlack.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/main_paiges/aweBlack.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/main_paiges/aweBlack.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aweBlack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./aweBlack.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/main_paiges/aweBlack.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aweBlack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/main_paiges/aweBlack.vue?vue&type=template&id=5c4d70c5&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/main_paiges/aweBlack.vue?vue&type=template&id=5c4d70c5& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_aweBlack_vue_vue_type_template_id_5c4d70c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./aweBlack.vue?vue&type=template&id=5c4d70c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/main_paiges/aweBlack.vue?vue&type=template&id=5c4d70c5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_aweBlack_vue_vue_type_template_id_5c4d70c5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_aweBlack_vue_vue_type_template_id_5c4d70c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);