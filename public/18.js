(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/cards.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/cards.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "cards"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/covid.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/covid.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "covid"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/gallery.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/gallery.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
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
  name: "gallery",
  methods: {
    showItemList: function showItemList(option) {
      option.showList = !option.showList;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/grid.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/grid.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "grid"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/info.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/info.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "info",
  data: function data() {
    return {
      daysUntilBasic: '',
      daysUntilPro: '',
      daysUntilUltra: ''
    };
  },
  created: function created() {
    this.daysUntilBasic = this.getUntilBasicDate(2020, 11, 14);
    this.daysUntilPro = this.getUntilBasicDate(2021, 0, 14);
    this.daysUntilUltra = this.getUntilBasicDate(2021, 1, 4);
  },
  methods: {
    getUntilBasicDate: function getUntilBasicDate(year, month, day) {
      var date = new Date();
      var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      var finalDate = new Date(year, month, day);
      var oneDay = 1000 * 60 * 60 * 24;

      if (today < finalDate) {
        return "".concat(Math.ceil((finalDate.getTime() - today.getTime()) / oneDay));
      } else {
        return "Started";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/main-header.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/main-header.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'main-header',
  methods: {
    goToBlack: function goToBlack() {
      this.$router.push('/home');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/offers.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/offers.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_white_modal_offersDetailModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/white/modal/offersDetailModal */ "./resources/js/components/white/modal/offersDetailModal.vue");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/swiper-bundle.css */ "./node_modules/swiper/swiper-bundle.css");
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "offers",
  components: {
    Swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["Swiper"],
    SwiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["SwiperSlide"],
    offersDetailModal: _js_components_white_modal_offersDetailModal__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 60,
        centeredSlides: true,
        notNextTick: true,
        loop: true,
        initialSlide: 0,
        speed: 500,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      windowWidth: window.innerWidth,
      showModal: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      window.addEventListener('resize', _this.onResize);
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    toggleModal: function toggleModal() {
      this.showModal = !this.showModal;
    },
    onResize: function onResize() {
      this.windowWidth = window.innerWidth;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/video.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/video.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_white_modal_modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/white/modal/modal.vue */ "./resources/js/components/white/modal/modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "videoComponent",
  components: {
    modal: _js_components_white_modal_modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      modal: false,
      modalContent: '',
      list: [{
        contentType: 'image',
        contentPath: '/gallery/1.jpg',
        contentColor: '#F3F0EC'
      }, {
        contentType: 'image',
        contentPath: '/gallery/2.jpg',
        contentColor: '#E4DFD8'
      }, {
        contentType: 'video',
        contentPath: 'https://www.youtube.com/embed/nvq_lvC1MRY',
        contentColor: '#F8F6F3'
      }, {
        contentType: 'video',
        contentPath: 'https://www.youtube.com/embed/SMKPKGW083c',
        contentColor: '#E4DFD8'
      }, {
        contentType: 'image',
        contentPath: '/gallery/3.jpg',
        contentColor: '#F3F0EC'
      }, {
        contentType: 'image',
        contentPath: '/gallery/4.jpg',
        contentColor: '#F8F6F3'
      }, {
        contentType: 'image',
        contentPath: '/gallery/5.jpg',
        contentColor: '#E4DFD8'
      }, {
        contentType: 'video',
        contentPath: 'https://www.youtube.com/embed/TxbE79-1OSI',
        contentColor: ' #F3F0EC'
      }, {
        contentType: 'image',
        contentPath: '/gallery/1.jpg',
        contentColor: '#E4DFD8'
      }]
    };
  },
  methods: {
    openContent: function openContent(item) {
      this.modalContent = item;
      this.modal = true;
    },
    closeModal: function closeModal() {
      this.modalContent = '';
      this.modal = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersDetailModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/modal/offersDetailModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_white_modal_offersValueList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/white/modal/offersValueList */ "./resources/js/components/white/modal/offersValueList.vue");
/* harmony import */ var _js_components_white_modal_offersValueNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/white/modal/offersValueNames */ "./resources/js/components/white/modal/offersValueNames.vue");
//
//
//
//
//
//
//
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
  name: "offersDetailModal",
  components: {
    offersValueNames: _js_components_white_modal_offersValueNames__WEBPACK_IMPORTED_MODULE_1__["default"],
    offersValueList: _js_components_white_modal_offersValueList__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      hoverData: ''
    };
  },
  methods: {
    close: function close() {
      this.$emit('close');
    },
    showHover: function showHover(index) {
      this.hoverData = index;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/modal/offersValueList.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "offersValueList",
  props: ['selected']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueNames.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/modal/offersValueNames.vue?vue&type=script&lang=js& ***!
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
  name: "offersValueNames",
  methods: {
    showHover: function showHover(index) {
      this.$emit('triggreHover', index);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/slider/header-slider.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/slider/header-slider.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/swiper-bundle.css */ "./node_modules/swiper/swiper-bundle.css");
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
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
  name: "header-slider",
  components: {
    Swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"],
    SwiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0__["SwiperSlide"]
  },
  data: function data() {
    return {
      swiperOption: {
        centeredSlides: true,
        notNextTick: true,
        loop: true,
        initialSlide: 1,
        autoplay: {
          disableOnInteraction: false
        },
        speed: 500,
        grabCursor: true
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/main_paiges/aweWhite.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/main_paiges/aweWhite.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_white_main_paiges_main_header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/white/main_paiges/main-header.vue */ "./resources/js/components/white/main_paiges/main-header.vue");
/* harmony import */ var _js_components_white_slider_header_slider_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/white/slider/header-slider.vue */ "./resources/js/components/white/slider/header-slider.vue");
/* harmony import */ var _js_components_white_main_paiges_gallery_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/white/main_paiges/gallery.vue */ "./resources/js/components/white/main_paiges/gallery.vue");
/* harmony import */ var _js_components_white_main_paiges_cards_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/white/main_paiges/cards.vue */ "./resources/js/components/white/main_paiges/cards.vue");
/* harmony import */ var _js_components_white_main_paiges_grid_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/components/white/main_paiges/grid.vue */ "./resources/js/components/white/main_paiges/grid.vue");
/* harmony import */ var _js_components_white_main_paiges_offers_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/js/components/white/main_paiges/offers.vue */ "./resources/js/components/white/main_paiges/offers.vue");
/* harmony import */ var _js_components_white_main_paiges_video_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/js/components/white/main_paiges/video.vue */ "./resources/js/components/white/main_paiges/video.vue");
/* harmony import */ var _js_components_white_main_paiges_info_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/js/components/white/main_paiges/info.vue */ "./resources/js/components/white/main_paiges/info.vue");
/* harmony import */ var _js_components_white_main_paiges_covid_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/js/components/white/main_paiges/covid.vue */ "./resources/js/components/white/main_paiges/covid.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    mainHeader: _js_components_white_main_paiges_main_header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    headerSlider: _js_components_white_slider_header_slider_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    gallery: _js_components_white_main_paiges_gallery_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    cards: _js_components_white_main_paiges_cards_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    grid: _js_components_white_main_paiges_grid_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    offers: _js_components_white_main_paiges_offers_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    videoComponent: _js_components_white_main_paiges_video_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    info: _js_components_white_main_paiges_info_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    covid: _js_components_white_main_paiges_covid_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/cards.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/cards.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cards__block {\n  margin-top: 20px;\n  position: relative;\n  display: flex;\n}\n.card {\n  padding: 100px 20px;\n  display: flex;\n  flex-direction: column-reverse;\n}\n.card__year {\n  position: relative;\n  margin-left: -60px;\n  font-size: 320px;\n  color: white;\n  align-self: flex-end;\n}\n.card__year:before {\n  position: absolute;\n  content: url(" + escape(__webpack_require__(/*! @/js/assets/SVG/arrows.svg */ "./resources/js/assets/SVG/arrows.svg")) + ");\n  width: 60px;\n  height: 60px;\n  top: 200px;\n  left: 220px;\n}\n.card__text {\n  margin-top: -40px;\n  margin-left: 40px;\n  font-size: 240px;\n  color: #F8F7F3;\n}\n.card__image {\n  margin-bottom: -100px;\n  position: relative;\n  z-index: 1;\n}\n.card__image .image {\n  width: 100%;\n  margin-top: 30px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.card__icon {\n  margin-top: -200px;\n  transform: translateY(70px);\n  display: flex;\n  justify-content: flex-end;\n  z-index: 0;\n}\n.location-end {\n  align-self: flex-end;\n}\n.small {\n  width: 100%;\n  max-width: 500px;\n  margin-top: -150px;\n  margin-left: 220px;\n  margin-bottom: -250px;\n  font-size: 80px;\n  text-transform: uppercase;\n  background-color: #F8F7F3;\n}\n.text-decoration {\n  font-weight: 700;\n  text-shadow: -2px -2px 0 #E4DFD8, 2px -2px 0 #E4DFD8, -2px 2px 0 #E4DFD8, 2px 2px 0 #E4DFD8;\n}\n.left {\n  width: 40%;\n  padding: 20px;\n  overflow: visible;\n  background-color: #fff;\n}\n.right {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  background: #F8F7F3;\n}\n@media only screen and (max-width: 1600px) {\n.cards__block {\n    height: 100%;\n}\n.cards {\n    position: static;\n}\n.cards__item {\n    width: 200px;\n    height: 200px;\n}\n.card__image--right {\n    margin-top: 20px;\n}\n.card__icon {\n    margin-top: -200px;\n    align-self: flex-end;\n}\n.card__icon img {\n    width: 150px;\n}\n.card__text {\n    font-size: 160px;\n}\n.card__year {\n    font-size: 190px;\n}\n.small {\n    font-size: 60px;\n    margin-top: -50px;\n    margin-left: 100px;\n}\n}\n@media only screen and (max-width: 1400px) {\n.cards__block {\n    margin-top: 70px;\n}\n.card__year {\n    margin-left: -20px;\n    font-size: 120px;\n}\n.card__year:before {\n    display: none;\n}\n.card__text {\n    margin-left: 20px;\n    font-size: 90px;\n}\n.small {\n    font-size: 50px;\n    margin-top: -30px;\n    margin-left: 80px;\n}\n.card__image {\n    margin-bottom: 0;\n}\n.card__image--right {\n    margin-top: 70px;\n}\n}\n@media only screen and (max-width: 990px) {\n.cards__block {\n    flex-direction: column;\n}\n.card__year {\n    font-size: 170px;\n}\n.card__text {\n    font-size: 190px;\n}\n.small {\n    margin-top: -90px;\n    font-size: 70px;\n}\n.left, .right {\n    width: 100%;\n}\n.card__image {\n    margin-bottom: -40px;\n    width: 100%;\n}\n.card__image .image {\n    margin-left: 20px;\n}\n.card__image--right {\n    margin-top: 20px;\n}\n}\n@media only screen and (max-width: 770px) {\n.cards__block {\n    height: auto;\n}\n.card__year {\n    margin-left: -20px;\n    font-size: 120px;\n}\n.card__text {\n    margin-left: 20px;\n    font-size: 100px;\n}\n.card__icon {\n    margin-top: -150px;\n}\n.card__icon img {\n    height: 150px;\n    width: 150px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n.small {\n    margin-top: -40px;\n    margin-left: 50px;\n    font-size: 56px;\n}\n.cards__item {\n    width: 130px;\n    height: 150px;\n}\n.card__image {\n    margin-bottom: -40px;\n    width: 100%;\n}\n.card__image .image {\n    margin-left: 20px;\n}\n.card__image--right {\n    margin: 140px auto 0 auto;\n}\n}\n@media only screen and (max-width: 550px) {\n.cards__block {\n    margin: 0;\n}\n.card__year {\n    font-size: 80px;\n}\n.card__text {\n    margin-top: 20px;\n    margin-left: 20px;\n    font-size: 90px;\n}\n.card__image {\n    margin-bottom: -10px;\n}\n.card__image--right {\n    margin-left: 0;\n}\n.card__icon {\n    display: none;\n}\n.small {\n    margin-top: -30px;\n    margin-left: 40px;\n    font-size: 36px;\n}\n.cards__item {\n    width: 100px;\n    height: 120px;\n}\n.card__image--right {\n    margin-top: 150px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/covid.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/covid.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".covid {\n  margin-top: -100px;\n  padding-bottom: 10px;\n}\n.covid__text {\n  padding: 10px 0;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n@media only screen and (max-width: 1400px) {\n.covid {\n    margin-top: -50px;\n}\n}\n@media only screen and (max-width: 770px) {\n.covid {\n    margin-top: -100px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/gallery.vue?vue&type=style&index=0&id=7d0d07a5&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/gallery.vue?vue&type=style&index=0&id=7d0d07a5&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gallery__list[data-v-7d0d07a5] {\n  margin-top: -100px;\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.list[data-v-7d0d07a5] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  overflow: visible;\n}\n.list--left[data-v-7d0d07a5] {\n  flex-direction: row-reverse;\n}\n.list--left .list__item[data-v-7d0d07a5] {\n  flex: 0 1 calc(25% - 1em);\n  display: flex;\n}\n.list--left .list__item .item[data-v-7d0d07a5] {\n  display: flex;\n  flex-direction: column-reverse;\n}\n.list__item[data-v-7d0d07a5] {\n  padding: 20px;\n  flex: 0 1 calc(33% - 1em);\n  height: 100%;\n  min-height: 290px;\n  list-style: none;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.item[data-v-7d0d07a5] {\n  position: relative;\n  width: 100%;\n}\n.item__head[data-v-7d0d07a5] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  cursor: pointer;\n}\n.item__icon[data-v-7d0d07a5] {\n  margin-right: 25px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.item__icon svg[data-v-7d0d07a5] {\n  fill: white;\n}\n.item__icon[data-v-7d0d07a5]:hover {\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.item__title[data-v-7d0d07a5] {\n  font-size: 25px;\n  color: white;\n}\n.item__body[data-v-7d0d07a5] {\n  padding: 20px;\n}\n.item__outerText[data-v-7d0d07a5] {\n  color: white;\n  align-content: flex-end;\n  align-self: flex-end;\n  transition: 0s;\n}\n.item__outerText span[data-v-7d0d07a5] {\n  display: block;\n  margin: 5px 0;\n  font-size: 24px;\n}\n.sublist__item[data-v-7d0d07a5] {\n  margin: 5px 0;\n  font-size: 12px;\n  color: white;\n}\n.title[data-v-7d0d07a5] {\n  position: relative;\n  margin: -40px 0;\n  text-align: center;\n  letter-spacing: 20px;\n  font-size: 120px;\n  font-weight: 700;\n  color: white;\n  text-transform: uppercase;\n}\n.fade-enter-active[data-v-7d0d07a5], .fade-leave-active[data-v-7d0d07a5] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-7d0d07a5], .fade-leave-to[data-v-7d0d07a5] {\n  opacity: 0;\n}\n.big-text[data-v-7d0d07a5] {\n  font-size: 80px;\n}\n@media only screen and (max-width: 1300px) {\n.list--left .list__item[data-v-7d0d07a5] {\n    flex: 0 1 25%;\n}\n.list__item[data-v-7d0d07a5] {\n    flex: 0 1 33%;\n}\n.title[data-v-7d0d07a5] {\n    margin: -20px 0;\n    font-size: 70px;\n}\n}\n@media only screen and (max-width: 990px) {\n.list__item[data-v-7d0d07a5] {\n    flex: 0 1 50%;\n}\n.list--left .list__item[data-v-7d0d07a5] {\n    flex: 0 1 50%;\n}\n}\n@media only screen and (max-width: 670px) {\n.gallery__list[data-v-7d0d07a5] {\n    margin-top: -150px;\n}\n.list__item[data-v-7d0d07a5] {\n    flex: 0 1 100%;\n    min-height: 0;\n}\n.list[data-v-7d0d07a5] {\n    order: 2;\n}\n.list--left[data-v-7d0d07a5] {\n    order: 3;\n}\n.list--left .list__item[data-v-7d0d07a5] {\n    flex: 0 1 100%;\n    min-height: 100%;\n}\n.list--left .list__item .item[data-v-7d0d07a5] {\n    flex-direction: column;\n}\n.big-text[data-v-7d0d07a5] {\n    font-size: 34px;\n}\n.item__outerText[data-v-7d0d07a5] {\n    display: none;\n}\n.title[data-v-7d0d07a5] {\n    margin: 20px 0;\n    padding: 15px;\n    order: 1;\n    font-size: 30px;\n    letter-spacing: 5px;\n    text-align: left;\n}\n}\n@media only screen and (max-width: 470px) {\n.gallery__list[data-v-7d0d07a5] {\n    margin-top: -200px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/grid.vue?vue&type=style&index=0&id=f63d73fa&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/grid.vue?vue&type=style&index=0&id=f63d73fa&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-container[data-v-f63d73fa] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 1fr 1fr;\n  gap: 0px 0px;\n  grid-template-areas: \"guaranties guaranties values values values\" \"guaranties guaranties values values values\" \"comfort comfort comfort comfort comfort\";\n}\n.guaranties[data-v-f63d73fa] {\n  padding: 50px;\n  grid-area: guaranties;\n  display: flex;\n  align-items: center;\n}\n.guaranties__name[data-v-f63d73fa] {\n  font-size: 50px;\n  font-weight: 900;\n  -ms-writing-mode: tb-lr;\n      writing-mode: vertical-lr;\n  -webkit-text-orientation: upright;\n          text-orientation: upright;\n  text-transform: uppercase;\n  color: white;\n}\n.guaranties__title[data-v-f63d73fa] {\n  margin-left: 10px;\n  font-size: 30px;\n  font-weight: 900;\n  -ms-writing-mode: tb-lr;\n      writing-mode: vertical-lr;\n  -webkit-text-orientation: upright;\n          text-orientation: upright;\n  text-transform: uppercase;\n}\n.guaranties__list[data-v-f63d73fa] {\n  flex-grow: 1;\n}\n.values[data-v-f63d73fa] {\n  margin-top: 100px;\n  padding: 50px;\n  grid-area: values;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: #FFFFFF;\n}\n.values__name[data-v-f63d73fa] {\n  font-size: 100px;\n  font-weight: 900;\n  letter-spacing: 90px;\n  text-transform: uppercase;\n  color: #F8F7F3;\n}\n.values__title[data-v-f63d73fa] {\n  margin-top: -70px;\n  margin-bottom: 100px;\n  width: 100%;\n  padding: 20px 0;\n  font-weight: 900;\n  text-align: left;\n  text-transform: uppercase;\n}\n.values__list[data-v-f63d73fa] {\n  width: 100%;\n  flex-grow: 1;\n}\n.comfort[data-v-f63d73fa] {\n  padding: 50px;\n  grid-area: comfort;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: #F3F0EC;\n}\n.comfort__name[data-v-f63d73fa] {\n  font-size: 150px;\n  font-weight: 700;\n  letter-spacing: 90px;\n  text-transform: uppercase;\n  color: #F8F7F3;\n}\n.comfort__title[data-v-f63d73fa] {\n  margin-top: -100px;\n  padding: 50px 0;\n  text-align: center;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.comfort__list[data-v-f63d73fa] {\n  padding: 50px 0;\n  width: 100%;\n}\n.list[data-v-f63d73fa] {\n  padding: 0 50px;\n  display: flex;\n  flex-direction: column;\n}\n.list__item[data-v-f63d73fa] {\n  margin: 20px 0;\n  line-height: 30px;\n}\n.row[data-v-f63d73fa] {\n  flex-direction: row;\n  justify-content: space-around;\n}\n.row .list__item[data-v-f63d73fa] {\n  width: 100%;\n  max-width: 360px;\n  margin: 0 25px;\n}\n@media only screen and (max-width: 1670px) {\n.values__name[data-v-f63d73fa], .comfort__name[data-v-f63d73fa] {\n    font-size: 50px;\n    letter-spacing: 40px;\n}\n.guaranties .list[data-v-f63d73fa], .values .list[data-v-f63d73fa], .comfort .list[data-v-f63d73fa] {\n    padding: 0 0 0 20px;\n}\n.guaranties .list__item[data-v-f63d73fa], .values .list__item[data-v-f63d73fa], .comfort .list__item[data-v-f63d73fa] {\n    margin: 10px;\n}\n}\n@media only screen and (max-width: 1070px) {\n.grid-container[data-v-f63d73fa] {\n    grid-template-areas: \"values values values values values\" \"guaranties guaranties guaranties guaranties guaranties\" \"comfort comfort comfort comfort comfort\";\n}\n.guaranties[data-v-f63d73fa] {\n    flex-direction: column;\n}\n.guaranties__name[data-v-f63d73fa] {\n    -ms-writing-mode: lr-tb;\n        writing-mode: horizontal-tb;\n    -webkit-text-orientation: unset;\n            text-orientation: unset;\n    letter-spacing: 25px;\n}\n.guaranties__title[data-v-f63d73fa] {\n    margin-top: -30px;\n    -ms-writing-mode: lr-tb;\n        writing-mode: horizontal-tb;\n    -webkit-text-orientation: unset;\n            text-orientation: unset;\n}\n}\n@media only screen and (max-width: 770px) {\n.row[data-v-f63d73fa] {\n    flex-direction: column;\n    justify-content: space-around;\n}\n}\n@media only screen and (max-width: 550px) {\n.guaranties[data-v-f63d73fa], .values[data-v-f63d73fa], .comfort[data-v-f63d73fa] {\n    padding: 10px;\n}\n.guaranties__name[data-v-f63d73fa], .values__name[data-v-f63d73fa], .comfort__name[data-v-f63d73fa] {\n    font-size: 34px;\n    letter-spacing: 20px;\n}\n.guaranties__name[data-v-f63d73fa], .values__name[data-v-f63d73fa], .comfort__name[data-v-f63d73fa] {\n    text-align: center;\n    width: 100%;\n    font-size: 24px;\n}\n.guaranties__title[data-v-f63d73fa], .values__title[data-v-f63d73fa], .comfort__title[data-v-f63d73fa] {\n    text-align: center;\n    margin-top: -25px;\n    margin-bottom: 0;\n    padding: 10px 0;\n}\n.guaranties__list[data-v-f63d73fa], .values__list[data-v-f63d73fa], .comfort__list[data-v-f63d73fa] {\n    padding: 15px;\n}\n.list[data-v-f63d73fa] {\n    margin: 0 auto;\n    padding: 0 10px;\n}\n.list__item[data-v-f63d73fa] {\n    margin: 20px 0;\n}\n.row[data-v-f63d73fa] {\n    flex-direction: column;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/info.vue?vue&type=style&index=0&id=7c872b6b&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/info.vue?vue&type=style&index=0&id=7c872b6b&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".underline[data-v-7c872b6b] {\n  text-decoration: underline;\n}\n.info[data-v-7c872b6b] {\n  padding: 150px 60px;\n  display: flex;\n  justify-content: space-between;\n}\n.info__box[data-v-7c872b6b] {\n  width: 40%;\n  padding: 0 20px;\n  margin: 0 20px;\n  flex-grow: 1;\n  font-size: 32px;\n  line-height: 140%;\n}\n.info__bg[data-v-7c872b6b] {\n  background-image: url(" + escape(__webpack_require__(/*! @/js/assets/SVG/world.svg */ "./resources/js/assets/SVG/world.svg")) + ");\n  background-position: top right;\n  background-size: 50%;\n  background-repeat: no-repeat;\n}\n.logo-box[data-v-7c872b6b] {\n  padding: 50px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  flex-grow: 0;\n  background-color: #fff;\n}\n.logo-box__top[data-v-7c872b6b] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.logo-box__rocket[data-v-7c872b6b], .logo-box__counter[data-v-7c872b6b], .logo-box__logo[data-v-7c872b6b] {\n  margin: 20px 0;\n}\n.logo-box__rocket[data-v-7c872b6b] {\n  min-height: 260px;\n}\n.logo-box__bottom img[data-v-7c872b6b] {\n  width: 100%;\n  max-width: 130px;\n  margin: 0 10px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.red[data-v-7c872b6b] {\n  color: red;\n}\n.counter[data-v-7c872b6b] {\n  width: 100%;\n  max-width: 300px;\n  margin: 10px auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.counter__name[data-v-7c872b6b] {\n  width: 33%;\n}\n.counter__interval-box[data-v-7c872b6b] {\n  width: 100%;\n  max-width: 100px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.counter__interval[data-v-7c872b6b] {\n  padding: 0 10px;\n  margin: 0 2px;\n  text-align: center;\n  border: 1px solid black;\n  border-radius: 3px;\n  background-color: black;\n  color: white;\n}\n.counter__end-date[data-v-7c872b6b] {\n  font-size: 12px;\n}\n.box__title[data-v-7c872b6b] {\n  padding: 20px 0;\n  font-weight: 600;\n  font-size: 24px;\n}\n.box__description[data-v-7c872b6b] {\n  font-size: 18px;\n  line-height: 150%;\n}\n.quote[data-v-7c872b6b] {\n  text-align: right;\n  font-style: italic;\n}\n@media only screen and (max-width: 1470px) {\n.info[data-v-7c872b6b] {\n    padding: 75px 30px;\n}\n.info__box[data-v-7c872b6b] {\n    font-size: 22px;\n}\n}\n@media only screen and (max-width: 1170px) {\n.info[data-v-7c872b6b] {\n    padding: 75px 10px;\n    flex-direction: column;\n}\n.info__box[data-v-7c872b6b] {\n    width: auto;\n    margin: 20px auto;\n    font-size: 22px;\n}\n.info .logo-box[data-v-7c872b6b] {\n    width: 100%;\n    max-width: 520px;\n}\n}\n@media only screen and (max-width: 770px) {\n.info__box[data-v-7c872b6b] {\n    width: 100%;\n    padding: 25px 10px;\n}\n.info__bg[data-v-7c872b6b] {\n    background-position: top right;\n    background-size: 70%;\n}\n}\n@media only screen and (max-width: 550px) {\n.info__box[data-v-7c872b6b] {\n    font-size: 12px;\n}\n.logo-box__rocket[data-v-7c872b6b] {\n    width: 70px;\n    height: auto;\n    min-height: auto;\n    margin: 0 auto;\n}\n.logo-box__logo[data-v-7c872b6b] {\n    width: 80px;\n    margin: 0 auto 30px auto;\n}\n.logo-box__bottom[data-v-7c872b6b] {\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    align-self: center;\n    justify-content: center;\n}\n.logo-box__bottom img[data-v-7c872b6b] {\n    margin: 0 5px;\n    width: 40%;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/main-header.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/main-header.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".information {\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.information__title {\n  font-family: \"Axiforma\", sans-serif;\n}\n.information__title .parent {\n  position: relative;\n  font-size: 220px;\n  font-weight: 200;\n  line-height: 135px;\n  z-index: 2;\n}\n.information__box {\n  margin-top: 150px;\n  width: 90%;\n  display: flex;\n}\n.information__action {\n  height: 200px;\n  width: 200px;\n  margin-left: 20px;\n}\n.information__subtitle {\n  margin-top: -50px;\n  font-size: 20px;\n  line-height: 35px;\n  font-weight: 200;\n}\n.information__subtitle .subtitle {\n  margin: 15px 0;\n  width: 100%;\n  max-width: 700px;\n}\n.lock {\n  width: 100%;\n  height: 100%;\n  margin-left: -10px;\n}\n.lock__item {\n  position: relative;\n}\n.lock__item:hover .lock__active {\n  cursor: pointer;\n  opacity: 2;\n  z-index: 2;\n  transition: 0.3s ease-in-out;\n}\n.lock__active, .lock__static {\n  position: absolute;\n  opacity: 0;\n  z-index: 0;\n  transition: 0.3s ease-in-out;\n}\n.lock__static {\n  opacity: 1;\n  z-index: 1;\n}\n.parent {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n}\n.parent__key {\n  position: absolute;\n  right: 15%;\n  bottom: -50%;\n}\n.parent__key::before {\n  content: \"\";\n  position: absolute;\n  top: -50px;\n  right: 5px;\n  height: 60px;\n  width: 25px;\n  z-index: -1;\n  border-left: 2px solid #DED8D0;\n  border-radius: 50%;\n}\n.parent__key::after {\n  content: \"\";\n  position: absolute;\n  top: -50px;\n  right: 5px;\n  height: 60px;\n  width: 25px;\n  z-index: 3;\n  border-right: 1px solid #DED8D0;\n  border-radius: 50%;\n}\n@media only screen and (max-width: 1460px) {\n.information__title .parent {\n    font-size: 140px;\n    line-height: 100px;\n}\n.information__title .parent span {\n    margin-left: 120px;\n}\n.information__subtitle {\n    margin-top: -100px;\n    font-size: 18px;\n    line-height: 25px;\n}\n.information__box {\n    flex-direction: row;\n}\n.information__action {\n    margin-left: 20px;\n}\n.parent {\n    width: 550px;\n}\n.parent__key {\n    top: 205px;\n    right: -90px;\n}\n.parent__key::after, .parent__key::before {\n    content: \"\";\n    right: 20%;\n}\n}\n@media only screen and (max-width: 990px) {\n.information__title .parent {\n    font-size: 120px;\n}\n.information__title .parent__key {\n    right: 0;\n}\n.information__subtitle {\n    margin-top: -50px;\n}\n.information__action {\n    margin-left: 20px;\n    height: 120px;\n}\n.information__action img {\n    height: 120px;\n}\n.information__box {\n    width: 100%;\n    margin-top: 100px;\n}\n.information__action {\n    margin: 50px -60px 0 0;\n}\n.lock {\n    margin: 0;\n}\n}\n@media only screen and (max-width: 700px) {\n.information {\n    padding: 15px;\n}\n.information__title .parent {\n    font-size: 100px;\n    line-height: 70px;\n}\n.information__title .parent span {\n    margin-left: 35px;\n}\n.information__action {\n    margin-left: 0;\n}\n.parent {\n    width: 400px;\n}\n.parent__key {\n    top: 145px;\n    right: -35px;\n}\n.parent__key::after, .parent__key::before {\n    content: \"\";\n    right: 20%;\n}\n}\n@media only screen and (max-width: 550px) {\n.information {\n    padding: 10px;\n}\n.information__title .parent {\n    font-size: 70px;\n    line-height: 50px;\n}\n.information__action {\n    margin-left: 0;\n    margin-right: 0;\n}\n.information__subtitle .subtitle {\n    font-size: 12px;\n    line-height: 20px;\n}\n.parent {\n    width: 300px;\n}\n.parent__key {\n    top: 120px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/offers.vue?vue&type=style&index=0&id=1c7fb2d8&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/offers.vue?vue&type=style&index=0&id=1c7fb2d8&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".offers[data-v-1c7fb2d8] {\n  padding: 300px 0 60px 0;\n  background-color: #F8F7F3;\n}\n.offers__title[data-v-1c7fb2d8] {\n  position: relative;\n  margin-left: 80px;\n  font-size: 300px;\n  color: #F8F7F3;\n}\n.offers__list--title[data-v-1c7fb2d8] {\n  color: white;\n  font-size: 96px;\n  font-weight: 900;\n  text-transform: uppercase;\n  -ms-writing-mode: tb-lr;\n      writing-mode: vertical-lr;\n  -webkit-text-orientation: upright;\n          text-orientation: upright;\n}\n.offers__list[data-v-1c7fb2d8] {\n  margin-top: -300px;\n  display: flex;\n}\n.offers__button[data-v-1c7fb2d8] {\n  width: 100%;\n  max-width: 200px;\n  padding: 20px;\n  margin: 50px auto 0 auto;\n  border-radius: 10px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 20px;\n  color: black;\n  background-color: white;\n  transition: 0.2s;\n}\n.offers__button[data-v-1c7fb2d8]:hover {\n  transition: 0.2s;\n  cursor: pointer;\n  background-color: black;\n  color: white;\n}\n.slider[data-v-1c7fb2d8] {\n  width: 100%;\n  max-width: 900px;\n}\n.swiper .swiper-container[data-v-1c7fb2d8] {\n  z-index: 0;\n}\n.swiper .swiper-button-next[data-v-1c7fb2d8],\n.swiper .swiper-button-prev[data-v-1c7fb2d8] {\n  color: #000;\n}\n.swiper .swiper-slide[data-v-1c7fb2d8] {\n  text-align: center;\n  font-size: 38px;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  vertical-align: baseline;\n}\n.swiper .swiper-slide .image[data-v-1c7fb2d8] {\n  position: relative;\n  height: 350px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.swiper .swiper-slide .image__box[data-v-1c7fb2d8] {\n  position: relative;\n  width: 300px;\n  height: 100%;\n}\n.swiper .swiper-slide .image__box .box[data-v-1c7fb2d8] {\n  width: 100%;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n  align-self: flex-end;\n}\n.swiper .swiper-slide .image__box .smile[data-v-1c7fb2d8] {\n  display: none;\n  width: 100px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.swiper .swiper-slide .image__box .ultra[data-v-1c7fb2d8] {\n  transform: translateX(-70%);\n}\n.swiper .swiper-slide .content[data-v-1c7fb2d8] {\n  min-height: 250px;\n  display: flex;\n  align-items: flex-end;\n}\n.swiper .swiper-slide .content__list[data-v-1c7fb2d8] {\n  width: 100%;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-content: flex-start;\n}\n.swiper .swiper-slide .content__text[data-v-1c7fb2d8] {\n  margin: 5px 0;\n  font-size: 18px;\n  text-align: left;\n}\n.swiper .swiper-slide .info[data-v-1c7fb2d8] {\n  margin-top: 50px;\n  font-size: 30px;\n}\n.small[data-v-1c7fb2d8] {\n  margin-bottom: -250px;\n  margin-left: 70px;\n  width: 160px;\n  font-size: 80px;\n  text-transform: uppercase;\n  background-color: #F8F7F3;\n  z-index: 1;\n}\n.text-decoration[data-v-1c7fb2d8] {\n  font-weight: 700;\n  text-shadow: -2px -2px 0 #E4DFD8, 2px -2px 0 #E4DFD8, -2px 2px 0 #E4DFD8, 2px 2px 0 #E4DFD8;\n}\n.item[data-v-1c7fb2d8] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center bottom;\n}\n.item__content[data-v-1c7fb2d8] {\n  height: 100%;\n  width: 100%;\n  max-width: 350px;\n  margin-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n}\n.item__plan[data-v-1c7fb2d8] {\n  margin-top: 20px;\n  font-size: 36px;\n  font-weight: 200;\n}\n.list[data-v-1c7fb2d8] {\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n.list__item[data-v-1c7fb2d8] {\n  width: 100%;\n  max-width: 550px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.list__item:first-child .item__content[data-v-1c7fb2d8] {\n  margin-left: -20px;\n  max-width: 300px;\n}\n.list__item:last-child .item__content[data-v-1c7fb2d8] {\n  margin-left: -90px;\n}\n.list__item:last-child .item__plan[data-v-1c7fb2d8] {\n  margin-left: -50px;\n}\n.list__item:last-child .content__list[data-v-1c7fb2d8] {\n  margin-bottom: 50px;\n}\n.content__list[data-v-1c7fb2d8] {\n  padding: 0 30px 0 10px;\n  margin-bottom: 30px;\n  transform: rotate(-5deg);\n}\n.content__text[data-v-1c7fb2d8] {\n  padding: 5px 0;\n  font-size: 14px;\n  transform: rotate(5deg);\n}\n.content__price[data-v-1c7fb2d8] {\n  margin: 5px 0;\n  font-size: 24px;\n}\n.content__cions[data-v-1c7fb2d8] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.fade-enter-active[data-v-1c7fb2d8], .fade-leave-active[data-v-1c7fb2d8] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-1c7fb2d8], .fade-leave-to[data-v-1c7fb2d8] {\n  opacity: 0;\n}\n@media only screen and (max-width: 1670px) {\n.item__content[data-v-1c7fb2d8] {\n    margin-bottom: 100px;\n    max-width: 270px;\n}\n.content__list[data-v-1c7fb2d8] {\n    padding: 0 25px;\n    margin-bottom: 10px;\n}\n.content__text[data-v-1c7fb2d8] {\n    padding: 2px;\n    font-size: 12px;\n}\n.content__price[data-v-1c7fb2d8] {\n    font-size: 20px;\n}\n}\n@media only screen and (max-width: 1470px) {\n.list__item:first-child .item__content[data-v-1c7fb2d8] {\n    max-width: 340px;\n}\n.list__item:last-child .item__content[data-v-1c7fb2d8] {\n    margin-left: -100px;\n}\n.item__content[data-v-1c7fb2d8] {\n    margin-bottom: 80px;\n    max-width: 260px;\n}\n.content__list[data-v-1c7fb2d8] {\n    padding: 0 25px;\n    margin-bottom: 10px;\n}\n.content__text[data-v-1c7fb2d8] {\n    padding: 2px 0;\n    font-size: 10px;\n}\n.content__price[data-v-1c7fb2d8] {\n    font-size: 20px;\n}\n}\n@media only screen and (max-width: 1190px) {\n.offers[data-v-1c7fb2d8] {\n    padding: 60px 0;\n}\n.offers__title[data-v-1c7fb2d8] {\n    margin-top: 30px;\n    font-size: 120px;\n}\n.offers__title .offers[data-v-1c7fb2d8] {\n    padding: 0;\n}\n.offers__list[data-v-1c7fb2d8] {\n    margin-top: 0;\n}\n.offers__list--title[data-v-1c7fb2d8] {\n    width: 100%;\n    max-width: 100px;\n    margin-top: 20px;\n    font-size: 66px;\n}\n.small[data-v-1c7fb2d8] {\n    margin-bottom: -150px;\n    margin-left: 10px;\n    width: 100px;\n    font-size: 50px;\n}\n}\n@media only screen and (max-width: 750px) {\n.offers__title[data-v-1c7fb2d8] {\n    font-size: 120px;\n    margin-left: 60px;\n}\n.offers__list[data-v-1c7fb2d8] {\n    margin-top: 30px;\n    display: flex;\n    flex-direction: column-reverse;\n}\n.offers__list--title[data-v-1c7fb2d8] {\n    max-width: 100%;\n    margin-top: 0;\n    font-size: 56px;\n    -ms-writing-mode: lr-tb;\n        writing-mode: horizontal-tb;\n    -webkit-text-orientation: unset;\n            text-orientation: unset;\n    text-align: center;\n    color: white;\n}\n.small[data-v-1c7fb2d8] {\n    margin-bottom: -150px;\n    margin-left: 10px;\n    width: 100px;\n    font-size: 50px;\n}\n.swiper[data-v-1c7fb2d8] {\n    margin-top: 40px;\n}\n.swiper .swiper-slide .image .content[data-v-1c7fb2d8] {\n    position: absolute;\n    width: 250px;\n    top: 0;\n}\n.swiper .swiper-slide .image .content__text[data-v-1c7fb2d8] {\n    font-size: 10px;\n    margin: 0;\n}\n.swiper .swiper-slide .image .ultra[data-v-1c7fb2d8] {\n    top: 50px;\n}\n}\n@media only screen and (max-width: 550px) {\n.content__image[data-v-1c7fb2d8] {\n    width: 100px;\n}\n.swiper[data-v-1c7fb2d8] {\n    margin-top: 40px;\n}\n.swiper .swiper-slide .image .content[data-v-1c7fb2d8] {\n    width: 250px;\n}\n.swiper .swiper-slide .image .content__text[data-v-1c7fb2d8] {\n    font-size: 12px;\n    margin: 0;\n}\n.swiper .swiper-slide .image .ultra[data-v-1c7fb2d8] {\n    width: 220px;\n    top: 80px;\n}\n}\n@media only screen and (max-width: 450px) {\n.swiper .swiper-slide .image[data-v-1c7fb2d8] {\n    height: 250px;\n}\n.swiper .swiper-slide .image .content[data-v-1c7fb2d8] {\n    width: 200px;\n    padding: 0 20px;\n    align-items: center;\n    justify-content: center;\n    top: 0;\n}\n.swiper .swiper-slide .image .content__text[data-v-1c7fb2d8] {\n    font-size: 8px;\n    margin: 0;\n}\n.swiper .swiper-slide .image .ultra[data-v-1c7fb2d8] {\n    top: 10px;\n}\n.swiper .swiper-slide .image__box[data-v-1c7fb2d8] {\n    position: relative;\n    width: 300px;\n    height: 100%;\n}\n.swiper .swiper-slide .image__box .box[data-v-1c7fb2d8] {\n    width: 100%;\n    height: 100%;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/video.vue?vue&type=style&index=0&id=1d085b0e&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/video.vue?vue&type=style&index=0&id=1d085b0e&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video__list[data-v-1d085b0e] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 5px 5px;\n  grid-template-areas: \". . .\" \". . .\" \". . .\";\n}\n.video__item[data-v-1d085b0e] {\n  list-style: none;\n  min-height: 250px;\n  position: relative;\n}\n.video__hover[data-v-1d085b0e] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: -1;\n  opacity: 0;\n  transition: 0s;\n}\n.video .video__item:hover .video__hover[data-v-1d085b0e] {\n  transition: 0s;\n  z-index: 2;\n  opacity: 1;\n}\n.fade-enter-active[data-v-1d085b0e], .fade-leave-active[data-v-1d085b0e] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-1d085b0e], .fade-leave-to[data-v-1d085b0e] {\n  opacity: 0;\n}\n@media only screen and (max-width: 770px) {\n.video__item[data-v-1d085b0e] {\n    min-height: 120px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersDetailModal.vue?vue&type=style&index=0&id=9020397c&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/modal/offersDetailModal.vue?vue&type=style&index=0&id=9020397c&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal[data-v-9020397c] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.8);\n}\n.modal__container[data-v-9020397c] {\n  width: 100%;\n  max-width: 1350px;\n  padding: 35px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 50px;\n  background-color: #fff;\n}\n.modal__close[data-v-9020397c] {\n  padding: 0 0 15px 0;\n  display: flex;\n  justify-content: flex-end;\n}\n.modal__content[data-v-9020397c] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n@media only screen and (max-width: 770px) {\n.modal__container[data-v-9020397c] {\n    width: 100%;\n    max-width: 450px;\n}\n}\n@media only screen and (max-width: 370px) {\n.modal__container[data-v-9020397c] {\n    padding: 15px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueList.vue?vue&type=style&index=0&id=f90513d6&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/modal/offersValueList.vue?vue&type=style&index=0&id=f90513d6&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".value-list[data-v-f90513d6] {\n  flex-grow: 1;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.subscription[data-v-f90513d6] {\n  width: 100%;\n  max-width: 300px;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 30px;\n  background-color: #E4DFD8;\n}\n.subscription__name[data-v-f90513d6] {\n  padding: 10px 0;\n  font-size: 34px;\n  color: white;\n}\n.subscription__list[data-v-f90513d6] {\n  width: 100%;\n  padding: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  border-radius: 30px;\n  background-color: #fff;\n}\n.subscription__item[data-v-f90513d6] {\n  list-style: none;\n}\n.subscription__role-name[data-v-f90513d6] {\n  margin: 10px;\n  font-size: 14px;\n}\n.subscription__possibilities[data-v-f90513d6] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n}\n.possibilities[data-v-f90513d6] {\n  width: 100%;\n  height: 30px;\n  list-style: none;\n  text-align: center;\n  border-bottom: 1px solid transparent;\n}\n.red[data-v-f90513d6] {\n  color: #ff3b3b;\n}\n.green[data-v-f90513d6] {\n  color: #6fd76f;\n}\n.background[data-v-f90513d6] {\n  border-bottom: 1px solid #E4DFD8;\n}\n@media only screen and (max-width: 1250px) {\n.value-list[data-v-f90513d6] {\n    width: 100%;\n    max-width: 1000px;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n.subscription__role-name[data-v-f90513d6] {\n    font-size: 8px;\n}\n.possibilities[data-v-f90513d6] {\n    height: 25px;\n}\n}\n@media only screen and (max-width: 770px) {\n.value-list[data-v-f90513d6] {\n    width: 500px;\n    flex-grow: 0;\n    overflow-y: hidden;\n    overflow-x: scroll;\n    white-space: nowrap;\n}\n.subscription[data-v-f90513d6] {\n    margin: 0 20px;\n}\n.possibilities[data-v-f90513d6] {\n    height: 32px;\n}\n}\n@media only screen and (max-width: 375px) {\n.value-list[data-v-f90513d6] {\n    width: 400px;\n}\n.subscription[data-v-f90513d6] {\n    width: 150px;\n}\n.possibilities[data-v-f90513d6] {\n    height: 25px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueNames.vue?vue&type=style&index=0&id=fb43603e&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/modal/offersValueNames.vue?vue&type=style&index=0&id=fb43603e&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".values[data-v-fb43603e] {\n  padding: 15px;\n  flex-grow: 0;\n}\n.values h3[data-v-fb43603e] {\n  font-size: 34px;\n}\n.values__list[data-v-fb43603e] {\n  margin-top: 70px;\n}\n.values__item[data-v-fb43603e] {\n  height: 20px;\n  margin-bottom: 10px;\n  list-style: none;\n  font-size: 16px;\n}\n.values__item[data-v-fb43603e]:hover {\n  cursor: pointer;\n  border-bottom: 1px solid black;\n}\n@media only screen and (max-width: 1250px) {\n.values h3[data-v-fb43603e] {\n    font-size: 16px;\n}\n.values__item[data-v-fb43603e] {\n    margin: 10px;\n    height: auto;\n    font-size: 10px;\n}\n}\n@media only screen and (max-width: 375px) {\n.values[data-v-fb43603e] {\n    padding: 5px;\n}\n.values__list[data-v-fb43603e] {\n    margin-top: 80px;\n}\n.values__item[data-v-fb43603e] {\n    font-size: 8px;\n    margin: 11.5px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/slider/header-slider.vue?vue&type=style&index=0&id=5c6a27a4&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/slider/header-slider.vue?vue&type=style&index=0&id=5c6a27a4&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".swiper-container[data-v-5c6a27a4] {\n  margin-right: 150px;\n  width: 450px;\n  max-height: 900px;\n  border: 3px solid black;\n  border-radius: 30px;\n  z-index: 0;\n}\n.swiper-slide[data-v-5c6a27a4] {\n  text-align: center;\n  font-size: 38px;\n  font-weight: 700;\n  background-color: #eee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.swiper-slide img[data-v-5c6a27a4] {\n  width: 100%;\n  height: 100%;\n}\n@media only screen and (max-width: 1440px) {\n.swiper-container[data-v-5c6a27a4] {\n    width: 450px;\n    max-height: 750px;\n}\n}\n@media only screen and (max-width: 990px) {\n.swiper-container[data-v-5c6a27a4] {\n    margin-left: 80px;\n}\n}\n@media only screen and (max-width: 570px) {\n.swiper-container[data-v-5c6a27a4] {\n    margin-left: 0;\n    max-height: 618px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/main_paiges/aweWhite.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/main_paiges/aweWhite.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main__head {\n  padding-top: 100px;\n  overflow: hidden;\n}\n.content {\n  display: flex;\n  justify-content: space-around;\n}\n.content__text {\n  margin-left: 50px;\n}\n.content__slider {\n  overflow: hidden;\n}\n@media only screen and (max-width: 550px) {\n.main__head {\n    padding-top: 50px;\n}\n.content__text {\n    margin-left: 10px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/cards.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/cards.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cards.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/cards.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/covid.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/covid.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./covid.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/covid.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/gallery.vue?vue&type=style&index=0&id=7d0d07a5&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/gallery.vue?vue&type=style&index=0&id=7d0d07a5&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=style&index=0&id=7d0d07a5&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/gallery.vue?vue&type=style&index=0&id=7d0d07a5&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/grid.vue?vue&type=style&index=0&id=f63d73fa&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/grid.vue?vue&type=style&index=0&id=f63d73fa&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./grid.vue?vue&type=style&index=0&id=f63d73fa&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/grid.vue?vue&type=style&index=0&id=f63d73fa&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/info.vue?vue&type=style&index=0&id=7c872b6b&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/info.vue?vue&type=style&index=0&id=7c872b6b&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=style&index=0&id=7c872b6b&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/info.vue?vue&type=style&index=0&id=7c872b6b&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/main-header.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/main-header.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main-header.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/main-header.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/offers.vue?vue&type=style&index=0&id=1c7fb2d8&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/offers.vue?vue&type=style&index=0&id=1c7fb2d8&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offers.vue?vue&type=style&index=0&id=1c7fb2d8&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/offers.vue?vue&type=style&index=0&id=1c7fb2d8&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/video.vue?vue&type=style&index=0&id=1d085b0e&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/video.vue?vue&type=style&index=0&id=1d085b0e&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./video.vue?vue&type=style&index=0&id=1d085b0e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/video.vue?vue&type=style&index=0&id=1d085b0e&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersDetailModal.vue?vue&type=style&index=0&id=9020397c&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/modal/offersDetailModal.vue?vue&type=style&index=0&id=9020397c&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offersDetailModal.vue?vue&type=style&index=0&id=9020397c&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersDetailModal.vue?vue&type=style&index=0&id=9020397c&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueList.vue?vue&type=style&index=0&id=f90513d6&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/modal/offersValueList.vue?vue&type=style&index=0&id=f90513d6&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offersValueList.vue?vue&type=style&index=0&id=f90513d6&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueList.vue?vue&type=style&index=0&id=f90513d6&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueNames.vue?vue&type=style&index=0&id=fb43603e&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/modal/offersValueNames.vue?vue&type=style&index=0&id=fb43603e&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offersValueNames.vue?vue&type=style&index=0&id=fb43603e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueNames.vue?vue&type=style&index=0&id=fb43603e&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/slider/header-slider.vue?vue&type=style&index=0&id=5c6a27a4&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/slider/header-slider.vue?vue&type=style&index=0&id=5c6a27a4&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header-slider.vue?vue&type=style&index=0&id=5c6a27a4&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/slider/header-slider.vue?vue&type=style&index=0&id=5c6a27a4&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/main_paiges/aweWhite.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/main_paiges/aweWhite.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./aweWhite.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/main_paiges/aweWhite.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/cards.vue?vue&type=template&id=7ff50c14&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/cards.vue?vue&type=template&id=7ff50c14& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cards__block" }, [
      _c("div", { staticClass: "card left" }, [
        _c("div", { staticClass: "card__year text-decoration location-end" }, [
          _vm._v("\n      2020\n    ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card__image" }, [
          _c("img", {
            staticClass: "image",
            attrs: { src: __webpack_require__(/*! @/js/assets/SVG/left.svg */ "./resources/js/assets/SVG/left.svg"), alt: "image" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card right" }, [
        _c("div", { staticClass: "card__text text-decoration" }, [
          _vm._v("\n      AWE\n    ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card__text text-decoration small" }, [
          _vm._v("\n      Evolution\n    ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card__image card__image--right" }, [
          _c("img", {
            staticClass: "image",
            attrs: {
              src: __webpack_require__(/*! @/js/assets/SVG/advantages.svg */ "./resources/js/assets/SVG/advantages.svg"),
              alt: "image"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card__icon" }, [
          _c("img", {
            attrs: { src: __webpack_require__(/*! @/js/assets/SVG/Cog.png */ "./resources/js/assets/SVG/Cog.png"), alt: "image" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/covid.vue?vue&type=template&id=49a3b5b8&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/covid.vue?vue&type=template&id=49a3b5b8& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "covid" }, [
      _c("img", {
        staticClass: "covid__text",
        attrs: { src: __webpack_require__(/*! @/js/assets/SVG/lockdown.svg */ "./resources/js/assets/SVG/lockdown.svg"), alt: "image" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/gallery.vue?vue&type=template&id=7d0d07a5&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/gallery.vue?vue&type=template&id=7d0d07a5&scoped=true& ***!
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
  return _c("div", { staticClass: "gallery__list" }, [
    _c(
      "ul",
      { staticClass: "list" },
      _vm._l(_vm.$t("galleryOne"), function(option, index) {
        return _c(
          "li",
          {
            key: index,
            staticClass: "list__item",
            style: [
              option.showList
                ? {
                    backgroundImage:
                      "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),\n        url(" +
                      __webpack_require__("./resources/js/assets/gallery sync recursive ^\\.\\/.*$")("./" + option.colorImage) +
                      ")"
                  }
                : {
                    backgroundImage:
                      "url(" +
                      __webpack_require__("./resources/js/assets/gallery sync recursive ^\\.\\/.*$")("./" + option.colorImage) +
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
                    : _vm._e()
                ])
              ],
              1
            )
          ]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "title" }, [
      _vm._v("\n    " + _vm._s(_vm.$t("Capabilities")) + "\n  ")
    ]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "list list--left" },
      _vm._l(_vm.$t("galleryTwo"), function(option, index) {
        return _c(
          "li",
          {
            key: index,
            staticClass: "list__item ",
            style: [
              option.showList
                ? {
                    backgroundImage:
                      "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),\n        url(" +
                      __webpack_require__("./resources/js/assets/gallery sync recursive ^\\.\\/.*$")("./" + option.colorImage) +
                      ")"
                  }
                : {
                    backgroundImage:
                      "url(" +
                      __webpack_require__("./resources/js/assets/gallery sync recursive ^\\.\\/.*$")("./" + option.colorImage) +
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
                    _c(
                      "span",
                      {
                        staticClass: "item__title",
                        class: [option.title === "No" ? "big-text" : ""]
                      },
                      [_vm._v(_vm._s(option.title))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("transition", { attrs: { name: "fade", mode: "out-in" } }, [
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
                        _c("span", [_vm._v("Covid")]),
                        _vm._v(" "),
                        _c("span", [_vm._v("War")]),
                        _vm._v(" "),
                        _c("span", [_vm._v("Discrimination")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/grid.vue?vue&type=template&id=f63d73fa&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/grid.vue?vue&type=template&id=f63d73fa&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "grid-container" }, [
    _c("div", { staticClass: "guaranties" }, [
      _c("div", { staticClass: "guaranties__name" }, [
        _vm._v(_vm._s(_vm.$t("guarantiesName")))
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "guaranties__title" }, [
        _vm._v("\n        " + _vm._s(_vm.$t("guarantiesName")) + "\n      ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "guaranties__list" }, [
        _c(
          "ul",
          { staticClass: "list" },
          _vm._l(_vm.$t("guaranties"), function(item, index) {
            return _c("li", { key: index, staticClass: "list__item" }, [
              _vm._v("\n            " + _vm._s(item.text) + "\n          ")
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "values" }, [
      _c("div", { staticClass: "values__name" }, [
        _vm._v(_vm._s(_vm.$t("valuesName")))
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "values__title" }, [
        _vm._v("\n        " + _vm._s(_vm.$t("valuesName")) + "\n      ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "values__list" }, [
        _c(
          "ul",
          { staticClass: "list row" },
          _vm._l(_vm.$t("values"), function(item, index) {
            return _c("li", { key: index, staticClass: "list__item" }, [
              _vm._v("\n            " + _vm._s(item.text) + "\n          ")
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "comfort" }, [
      _c("div", { staticClass: "comfort__name" }, [
        _vm._v(_vm._s(_vm.$t("comfortName")) + " ")
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "comfort__title" }, [
        _vm._v("\n        " + _vm._s(_vm.$t("comfortName")) + "\n      ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "comfort__list" }, [
        _c(
          "ul",
          { staticClass: "list row" },
          _vm._l(_vm.$t("comfort"), function(item, index) {
            return _c("li", { key: index, staticClass: "list__item" }, [
              _vm._v("\n            " + _vm._s(item.text) + "\n          ")
            ])
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/info.vue?vue&type=template&id=7c872b6b&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/info.vue?vue&type=template&id=7c872b6b&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "info__box logo-box" }, [
      _c("div", { staticClass: "logo-box__top" }, [
        _c("img", {
          staticClass: "logo-box__rocket",
          attrs: {
            src: __webpack_require__(/*! @/js/assets/SVG/roket.svg */ "./resources/js/assets/SVG/roket.svg"),
            alt: "rocket image"
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "logo-box__counter" }, [
          _c("div", { staticClass: "counter" }, [
            _c("div", { staticClass: "counter__name" }, [
              _vm._v("\n            Basic\n          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "counter__interval-box" }, [
              _c("div", { staticClass: "counter__interval" }, [
                _vm._v(
                  "\n              " +
                    _vm._s(_vm.daysUntilBasic) +
                    "\n            "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "counter__end-date" }, [
              _vm._v("\n            днів до старту\n          ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "counter" }, [
            _c("div", { staticClass: "counter__name" }, [
              _vm._v("\n            Pro\n          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "counter__interval-box" }, [
              _c("div", { staticClass: "counter__interval" }, [
                _vm._v(
                  "\n              " +
                    _vm._s(_vm.daysUntilPro) +
                    "\n            "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "counter__end-date" }, [
              _vm._v("\n            днів до старту\n          ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "counter" }, [
            _c("div", { staticClass: "counter__name" }, [
              _vm._v("\n            Ultra\n          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "counter__interval-box" }, [
              _c("div", { staticClass: "counter__interval" }, [
                _vm._v(
                  "\n              " +
                    _vm._s(_vm.daysUntilUltra) +
                    "\n            "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "counter__end-date" }, [
              _vm._v("\n            днів до старту\n          ")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "logo-box__logo",
          attrs: { src: __webpack_require__(/*! @/js/assets/logo.svg */ "./resources/js/assets/logo.svg"), alt: "logo" }
        })
      ]),
      _vm._v(" "),
      _vm._m(0)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "info__box info__bg" }, [
      _c("div", { staticClass: "box" }, [
        _c("div", { staticClass: "box__description" }, [
          _c("span", { staticClass: "red" }, [_vm._v("2020 ")]),
          _vm._v(" " + _vm._s(_vm.$t("blockText")) + "\n      ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box" }, [
        _c("div", { staticClass: "box__description" }, [
          _c("h3", { staticClass: "box__title" }, [
            _vm._v(_vm._s(_vm.$t("blockTextScoreTitle")))
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "box__description" }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.$t("blockTextScoreText")) +
                "\n          "
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box" }, [
        _c("h3", { staticClass: "box__title" }, [
          _vm._v(_vm._s(_vm.$t("blockTextAWETitle")))
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "box__description" }, [
          _vm._v(
            "\n          " + _vm._s(_vm.$t("blockTextAWEText")) + "\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box" }, [
        _c("h3", { staticClass: "box__title" }),
        _vm._v(" "),
        _c("p", { staticClass: "box__description" }, [
          _vm._v("\n        " + _vm._s(_vm.$t("blockTextPriorities")) + " "),
          _c("br"),
          _vm._v(" "),
          _c("span", { staticClass: "underline" }, [
            _vm._v(_vm._s(_vm.$t("blockTextPrioritiesUnderlinedText")) + " ")
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(
            "\n        " +
              _vm._s(_vm.$t("blockTextPrioritiesText")) +
              "\n      "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box" }, [
        _c("h3", { staticClass: "box__title quote" }, [
          _vm._v(_vm._s(_vm.$t("blockEndText")))
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo-box__bottom" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(/*! @/js/assets/SVG/GooglePlay.svg */ "./resources/js/assets/SVG/GooglePlay.svg"),
          alt: "Google Store logo"
        }
      }),
      _vm._v(" "),
      _c("img", {
        attrs: {
          src: __webpack_require__(/*! @/js/assets/SVG/AppStore.svg */ "./resources/js/assets/SVG/AppStore.svg"),
          alt: "App Store logo"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/main-header.vue?vue&type=template&id=26335074&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/main-header.vue?vue&type=template&id=26335074& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "information" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "information__box" }, [
      _c(
        "div",
        { staticClass: "information__subtitle" },
        _vm._l(_vm.$t("headerSubtitleText"), function(subText, index) {
          return _c("p", { key: index, staticClass: "subtitle" }, [
            _vm._v("\n        " + _vm._s(subText.text) + "\n      ")
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "information__action" }, [
        _c("div", { staticClass: "lock", on: { click: _vm.goToBlack } }, [
          _vm._m(1)
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "information__title" }, [
      _c("div", { staticClass: "parent" }, [
        _vm._v("\n      All work\n      "),
        _c("br"),
        _vm._v(" "),
        _c("span", [_vm._v("\n        express\n      ")]),
        _vm._v(" "),
        _c("div", { staticClass: "parent__key" }, [
          _c("img", {
            staticClass: "key",
            attrs: { src: __webpack_require__(/*! @/js/assets/key.png */ "./resources/js/assets/key.png"), alt: "key image" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lock__item" }, [
      _c("img", {
        staticClass: "lock__static",
        attrs: {
          src: __webpack_require__(/*! @/js/assets/unicorn1.png */ "./resources/js/assets/unicorn1.png"),
          alt: "unicorn image"
        }
      }),
      _vm._v(" "),
      _c("img", {
        staticClass: "lock__active",
        attrs: {
          src: __webpack_require__(/*! @/js/assets/unicorn2.png */ "./resources/js/assets/unicorn2.png"),
          alt: "unicorn image"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/offers.vue?vue&type=template&id=1c7fb2d8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/offers.vue?vue&type=template&id=1c7fb2d8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "offers" },
    [
      _c("div", { staticClass: "offers__title text-decoration small" }, [
        _vm._v("\n    " + _vm._s(_vm.$t("offersTitleSmall")) + "\n  ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offers__title text-decoration" }, [
        _vm._v("\n    " + _vm._s(_vm.$t("offersTitleBig")) + "\n  ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "offers__list" }, [
        _vm.windowWidth > 1170
          ? _c(
              "ul",
              { staticClass: "list" },
              _vm._l(_vm.$t("offersList"), function(info, index) {
                return _c("li", { key: index, staticClass: "list__item" }, [
                  _c(
                    "div",
                    {
                      staticClass: "item",
                      style: {
                        backgroundImage:
                          "url(" +
                          __webpack_require__("./resources/js/assets sync recursive ^\\.\\/.*$")("./" + info.backgroundImage) +
                          ")"
                      }
                    },
                    [
                      _c("div", { staticClass: "item__content" }, [
                        _c(
                          "ul",
                          { staticClass: "content__list" },
                          _vm._l(info.values, function(value, index) {
                            return _c(
                              "li",
                              { key: index, staticClass: "content__text" },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(value.text) +
                                    "\n              "
                                )
                              ]
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "content__price" }, [
                          _c("span", [
                            _vm._v(
                              "\n                " +
                                _vm._s(info.price) +
                                "\n              "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "content__coins" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(info.coins) +
                              "\n              "
                          ),
                          info.coins
                            ? _c("img", {
                                attrs: {
                                  src: "/resources/js/assets/SVG/Nh.svg",
                                  alt: "coin"
                                }
                              })
                            : _vm._e()
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "item__plan" }, [
                    _c("h2", [_vm._v(_vm._s(info.plan))])
                  ])
                ])
              }),
              0
            )
          : _c(
              "div",
              { staticClass: "slider" },
              [
                _c(
                  "swiper",
                  {
                    staticClass: "swiper",
                    attrs: { options: _vm.swiperOption }
                  },
                  [
                    _vm._l(_vm.$t("offersList"), function(info, index) {
                      return _c("swiper-slide", { key: index }, [
                        _c("div", { staticClass: "image" }, [
                          _c("div", { staticClass: "image__box" }, [
                            _c("img", {
                              staticClass: "box",
                              attrs: {
                                src: __webpack_require__("./resources/js/assets sync recursive ^\\.\\/.*$")("./" + info.bgSmall),
                                alt: "popcorn box"
                              }
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "smile",
                              class: [info.plan === "ULTRA" ? "ultra" : ""],
                              attrs: {
                                src: __webpack_require__("./resources/js/assets sync recursive ^\\.\\/.*$")("./" + info.avatar),
                                alt: ""
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "content",
                              class: [info.plan === "ULTRA" ? "ultra" : ""]
                            },
                            [
                              _c(
                                "ul",
                                { staticClass: "content__list" },
                                _vm._l(info.values, function(value, index) {
                                  return _c(
                                    "li",
                                    {
                                      key: index,
                                      staticClass: "content__text"
                                    },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(value.text) +
                                          "\n                "
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "info" }, [
                          _c("h2", [_vm._v(_vm._s(info.plan))]),
                          _vm._v(" "),
                          _c("div", { staticClass: "info__price" }, [
                            _c("span", [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(info.price) +
                                  "\n                "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "info__coins" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(info.coins) +
                                "\n              "
                            ),
                            info.coins
                              ? _c("img", {
                                  staticClass: "info__coin",
                                  attrs: {
                                    src: "/resources/js/assets/SVG/Nh.svg",
                                    alt: "coin"
                                  }
                                })
                              : _vm._e()
                          ])
                        ])
                      ])
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "swiper-button-prev",
                      attrs: { slot: "button-prev" },
                      slot: "button-prev"
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "swiper-button-next",
                      attrs: { slot: "button-next" },
                      slot: "button-next"
                    })
                  ],
                  2
                )
              ],
              1
            ),
        _vm._v(" "),
        _c("div", { staticClass: "offers__list--title" }, [
          _vm._v("\n      " + _vm._s(_vm.$t("offersProfiles")) + "\n    ")
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "offers__button", on: { click: _vm.toggleModal } },
        [_vm._v("\n    " + _vm._s(_vm.$t("offersButton")) + "\n  ")]
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade", mode: "in-out" } },
        [
          _vm.showModal
            ? _c("offersDetailModal", { on: { close: _vm.toggleModal } })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/video.vue?vue&type=template&id=1d085b0e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/main_paiges/video.vue?vue&type=template&id=1d085b0e&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "video" }, [
        _c(
          "ul",
          { staticClass: "video__list" },
          _vm._l(_vm.list, function(item, index) {
            return _c(
              "li",
              {
                key: index,
                staticClass: "video__item",
                style: { backgroundColor: item.contentColor },
                on: {
                  click: function($event) {
                    return _vm.openContent(item)
                  }
                }
              },
              [_vm._m(0, true)]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade", mode: "in-out" } },
        [
          _vm.modal
            ? _c("modal", {
                attrs: { content: _vm.modalContent },
                on: { close: _vm.closeModal }
              })
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
    return _c("div", { staticClass: "video__hover" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! @/js/assets/SVG/play.svg */ "./resources/js/assets/SVG/play.svg"), alt: "play icon" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersDetailModal.vue?vue&type=template&id=9020397c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/modal/offersDetailModal.vue?vue&type=template&id=9020397c&scoped=true& ***!
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
                  fill: "currentColor",
                  d:
                    "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "modal__content" },
          [
            _c("offersValueNames", { on: { triggreHover: _vm.showHover } }),
            _vm._v(" "),
            _c("offersValueList", { attrs: { selected: _vm.hoverData } })
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueList.vue?vue&type=template&id=f90513d6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/modal/offersValueList.vue?vue&type=template&id=f90513d6&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "value-list" },
    _vm._l(_vm.$t("offersListValues"), function(subscription, index) {
      return _c("div", { key: index, staticClass: "subscription" }, [
        _c("h3", { staticClass: "subscription__name" }, [
          _vm._v(_vm._s(index))
        ]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "subscription__list" },
          _vm._l(subscription, function(name, nameIndex) {
            return _c(
              "li",
              { key: nameIndex, staticClass: "subscription__item" },
              [
                _c("h3", { staticClass: "subscription__role-name" }, [
                  _vm._v(_vm._s(name.roleName.toUpperCase()))
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "subscription__possibilities" },
                  _vm._l(Object.values(name.roleValues), function(
                    possibility,
                    possibilityIndex
                  ) {
                    return _c(
                      "li",
                      {
                        key: possibilityIndex,
                        staticClass: "possibilities",
                        class: [
                          possibility ? "green" : "red",
                          _vm.selected === possibilityIndex ? "background" : ""
                        ]
                      },
                      [_c("p", [_vm._v(_vm._s(possibility ? "+" : "-"))])]
                    )
                  }),
                  0
                )
              ]
            )
          }),
          0
        )
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueNames.vue?vue&type=template&id=fb43603e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/modal/offersValueNames.vue?vue&type=template&id=fb43603e&scoped=true& ***!
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
  return _c("div", { staticClass: "values" }, [
    _c("h3", [_vm._v("Profiles functionality")]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "values__list" },
      _vm._l(_vm.$t("offersListConditions"), function(value, index) {
        return _c(
          "li",
          {
            key: index,
            staticClass: "values__item",
            on: {
              mouseenter: function($event) {
                return _vm.showHover(index)
              }
            }
          },
          [_vm._v("\n      " + _vm._s(value) + "\n    ")]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/slider/header-slider.vue?vue&type=template&id=5c6a27a4&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/white/slider/header-slider.vue?vue&type=template&id=5c6a27a4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "swiper",
        { staticClass: "swiper", attrs: { options: _vm.swiperOption } },
        [
          _c("swiper-slide", [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! @/js/assets/slider_images/category.png */ "./resources/js/assets/slider_images/category.png"),
                alt: "slider image"
              }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! @/js/assets/slider_images/map.png */ "./resources/js/assets/slider_images/map.png"),
                alt: "slider image"
              }
            })
          ]),
          _vm._v(" "),
          _c("swiper-slide", [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! @/js/assets/slider_images/my_profile.png */ "./resources/js/assets/slider_images/my_profile.png"),
                alt: "slider image"
              }
            })
          ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/main_paiges/aweWhite.vue?vue&type=template&id=ab74f022&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/main_paiges/aweWhite.vue?vue&type=template&id=ab74f022& ***!
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
  return _c("div", { staticClass: "main__head" }, [
    _c(
      "section",
      { staticClass: "content" },
      [
        _c("mainHeader", { staticClass: "content__text" }),
        _vm._v(" "),
        _c("headerSlider", { staticClass: "content__slider" })
      ],
      1
    ),
    _vm._v(" "),
    _c("section", { staticClass: "gallery" }, [_c("gallery")], 1),
    _vm._v(" "),
    _c("section", { staticClass: "cards" }, [_c("cards")], 1),
    _vm._v(" "),
    _c("section", { staticClass: "grid" }, [_c("grid")], 1),
    _vm._v(" "),
    _c("section", { staticClass: "offers" }, [_c("offers")], 1),
    _vm._v(" "),
    _c("section", { staticClass: "video" }, [_c("videoComponent")], 1),
    _vm._v(" "),
    _c("section", { staticClass: "info" }, [_c("info")], 1),
    _vm._v(" "),
    _c("section", { staticClass: "covid" }, [_c("covid")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./resources/js/assets sync ^\.\/.*$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./SVG/AppStore.svg": "./resources/js/assets/SVG/AppStore.svg",
	"./SVG/Cog.png": "./resources/js/assets/SVG/Cog.png",
	"./SVG/Cog.svg": "./resources/js/assets/SVG/Cog.svg",
	"./SVG/DNA.svg": "./resources/js/assets/SVG/DNA.svg",
	"./SVG/Emoji_base.svg": "./resources/js/assets/SVG/Emoji_base.svg",
	"./SVG/Emoji_pro.svg": "./resources/js/assets/SVG/Emoji_pro.svg",
	"./SVG/Emoji_ultra.svg": "./resources/js/assets/SVG/Emoji_ultra.svg",
	"./SVG/GooglePlay.svg": "./resources/js/assets/SVG/GooglePlay.svg",
	"./SVG/Group.svg": "./resources/js/assets/SVG/Group.svg",
	"./SVG/Nh.svg": "./resources/js/assets/SVG/Nh.svg",
	"./SVG/Vector.svg": "./resources/js/assets/SVG/Vector.svg",
	"./SVG/_.svg": "./resources/js/assets/SVG/_.svg",
	"./SVG/advantages.svg": "./resources/js/assets/SVG/advantages.svg",
	"./SVG/arrow-down-sign-to-navigate.svg": "./resources/js/assets/SVG/arrow-down-sign-to-navigate.svg",
	"./SVG/arrows.svg": "./resources/js/assets/SVG/arrows.svg",
	"./SVG/atom.svg": "./resources/js/assets/SVG/atom.svg",
	"./SVG/base-small.svg": "./resources/js/assets/SVG/base-small.svg",
	"./SVG/base.svg": "./resources/js/assets/SVG/base.svg",
	"./SVG/base1.svg": "./resources/js/assets/SVG/base1.svg",
	"./SVG/cash.svg": "./resources/js/assets/SVG/cash.svg",
	"./SVG/coin.svg": "./resources/js/assets/SVG/coin.svg",
	"./SVG/counter.svg": "./resources/js/assets/SVG/counter.svg",
	"./SVG/dott.svg": "./resources/js/assets/SVG/dott.svg",
	"./SVG/left.svg": "./resources/js/assets/SVG/left.svg",
	"./SVG/list.svg": "./resources/js/assets/SVG/list.svg",
	"./SVG/lock.svg": "./resources/js/assets/SVG/lock.svg",
	"./SVG/lockdown.svg": "./resources/js/assets/SVG/lockdown.svg",
	"./SVG/logo-black.svg": "./resources/js/assets/SVG/logo-black.svg",
	"./SVG/pay.svg": "./resources/js/assets/SVG/pay.svg",
	"./SVG/photo.svg": "./resources/js/assets/SVG/photo.svg",
	"./SVG/play.svg": "./resources/js/assets/SVG/play.svg",
	"./SVG/pro-small.svg": "./resources/js/assets/SVG/pro-small.svg",
	"./SVG/pro.svg": "./resources/js/assets/SVG/pro.svg",
	"./SVG/pro1.svg": "./resources/js/assets/SVG/pro1.svg",
	"./SVG/right.svg": "./resources/js/assets/SVG/right.svg",
	"./SVG/roket.svg": "./resources/js/assets/SVG/roket.svg",
	"./SVG/search.svg": "./resources/js/assets/SVG/search.svg",
	"./SVG/tools.svg": "./resources/js/assets/SVG/tools.svg",
	"./SVG/ultra-small.svg": "./resources/js/assets/SVG/ultra-small.svg",
	"./SVG/ultra.svg": "./resources/js/assets/SVG/ultra.svg",
	"./SVG/ultra1.svg": "./resources/js/assets/SVG/ultra1.svg",
	"./SVG/unicorn.svg": "./resources/js/assets/SVG/unicorn.svg",
	"./SVG/world.svg": "./resources/js/assets/SVG/world.svg",
	"./announceImg.png": "./resources/js/assets/announceImg.png",
	"./arrow-down-white.svg": "./resources/js/assets/arrow-down-white.svg",
	"./blackSVGs/AppStore-green.svg": "./resources/js/assets/blackSVGs/AppStore-green.svg",
	"./blackSVGs/AppStore.svg": "./resources/js/assets/blackSVGs/AppStore.svg",
	"./blackSVGs/GooglePlay-green.svg": "./resources/js/assets/blackSVGs/GooglePlay-green.svg",
	"./blackSVGs/GooglePlay.svg": "./resources/js/assets/blackSVGs/GooglePlay.svg",
	"./blackSVGs/check.svg": "./resources/js/assets/blackSVGs/check.svg",
	"./blackSVGs/close.svg": "./resources/js/assets/blackSVGs/close.svg",
	"./blackSVGs/complete.svg": "./resources/js/assets/blackSVGs/complete.svg",
	"./blackSVGs/coube-white.svg": "./resources/js/assets/blackSVGs/coube-white.svg",
	"./blackSVGs/dots-horisontal.svg": "./resources/js/assets/blackSVGs/dots-horisontal.svg",
	"./blackSVGs/dots-vertical.svg": "./resources/js/assets/blackSVGs/dots-vertical.svg",
	"./blackSVGs/evolution.svg": "./resources/js/assets/blackSVGs/evolution.svg",
	"./blackSVGs/faceboock-black.svg": "./resources/js/assets/blackSVGs/faceboock-black.svg",
	"./blackSVGs/green-line.svg": "./resources/js/assets/blackSVGs/green-line.svg",
	"./blackSVGs/help-circle.svg": "./resources/js/assets/blackSVGs/help-circle.svg",
	"./blackSVGs/infinity.svg": "./resources/js/assets/blackSVGs/infinity.svg",
	"./blackSVGs/instagram-black.svg": "./resources/js/assets/blackSVGs/instagram-black.svg",
	"./blackSVGs/payment-black.svg": "./resources/js/assets/blackSVGs/payment-black.svg",
	"./blackSVGs/youtube-black.svg": "./resources/js/assets/blackSVGs/youtube-black.svg",
	"./change-image.svg": "./resources/js/assets/change-image.svg",
	"./check-mark-black-outline.svg": "./resources/js/assets/check-mark-black-outline.svg",
	"./check-mark.svg": "./resources/js/assets/check-mark.svg",
	"./edit.svg": "./resources/js/assets/edit.svg",
	"./enable.svg": "./resources/js/assets/enable.svg",
	"./faceboock.svg": "./resources/js/assets/faceboock.svg",
	"./fonts/Axiforma-Medium.woff": "./resources/js/assets/fonts/Axiforma-Medium.woff",
	"./fonts/zekton/zekton-rg.woff": "./resources/js/assets/fonts/zekton/zekton-rg.woff",
	"./gallery/1-image.png": "./resources/js/assets/gallery/1-image.png",
	"./gallery/1.jpg": "./resources/js/assets/gallery/1.jpg",
	"./gallery/2.jpg": "./resources/js/assets/gallery/2.jpg",
	"./gallery/3.jpg": "./resources/js/assets/gallery/3.jpg",
	"./gallery/4.jpg": "./resources/js/assets/gallery/4.jpg",
	"./gallery/5.jpg": "./resources/js/assets/gallery/5.jpg",
	"./gallery/clock.png": "./resources/js/assets/gallery/clock.png",
	"./gallery/controll.png": "./resources/js/assets/gallery/controll.png",
	"./gallery/earn.png": "./resources/js/assets/gallery/earn.png",
	"./gallery/happy.png": "./resources/js/assets/gallery/happy.png",
	"./gallery/map.png": "./resources/js/assets/gallery/map.png",
	"./gallery/pink-bg.png": "./resources/js/assets/gallery/pink-bg.png",
	"./gallery/worck.png": "./resources/js/assets/gallery/worck.png",
	"./gallery/world.png": "./resources/js/assets/gallery/world.png",
	"./galleryBlack/1.svg": "./resources/js/assets/galleryBlack/1.svg",
	"./galleryBlack/2.svg": "./resources/js/assets/galleryBlack/2.svg",
	"./galleryBlack/3.svg": "./resources/js/assets/galleryBlack/3.svg",
	"./galleryBlack/4-black.png": "./resources/js/assets/galleryBlack/4-black.png",
	"./galleryBlack/5-black.png": "./resources/js/assets/galleryBlack/5-black.png",
	"./galleryBlack/play.svg": "./resources/js/assets/galleryBlack/play.svg",
	"./group.svg": "./resources/js/assets/group.svg",
	"./home.svg": "./resources/js/assets/home.svg",
	"./instagram.svg": "./resources/js/assets/instagram.svg",
	"./key.png": "./resources/js/assets/key.png",
	"./logo.svg": "./resources/js/assets/logo.svg",
	"./map_fon.jpg": "./resources/js/assets/map_fon.jpg",
	"./phone_black.png": "./resources/js/assets/phone_black.png",
	"./plus.svg": "./resources/js/assets/plus.svg",
	"./rocket.jpg": "./resources/js/assets/rocket.jpg",
	"./screen.png": "./resources/js/assets/screen.png",
	"./sideImg.png": "./resources/js/assets/sideImg.png",
	"./sideImgFull.png": "./resources/js/assets/sideImgFull.png",
	"./slider_images/category.png": "./resources/js/assets/slider_images/category.png",
	"./slider_images/map.png": "./resources/js/assets/slider_images/map.png",
	"./slider_images/my_profile.png": "./resources/js/assets/slider_images/my_profile.png",
	"./smile.svg": "./resources/js/assets/smile.svg",
	"./team_list/1-person.png": "./resources/js/assets/team_list/1-person.png",
	"./team_list/2-person.png": "./resources/js/assets/team_list/2-person.png",
	"./team_list/3-person.png": "./resources/js/assets/team_list/3-person.png",
	"./team_list/4-person.png": "./resources/js/assets/team_list/4-person.png",
	"./team_list/5-person.png": "./resources/js/assets/team_list/5-person.png",
	"./team_list/6-person.png": "./resources/js/assets/team_list/6-person.png",
	"./team_list/7-person.png": "./resources/js/assets/team_list/7-person.png",
	"./team_list/8-person.png": "./resources/js/assets/team_list/8-person.png",
	"./text.svg": "./resources/js/assets/text.svg",
	"./unicorn1.png": "./resources/js/assets/unicorn1.png",
	"./unicorn2.png": "./resources/js/assets/unicorn2.png",
	"./unicorn_1.png": "./resources/js/assets/unicorn_1.png",
	"./unicorn_2.png": "./resources/js/assets/unicorn_2.png",
	"./world.svg": "./resources/js/assets/world.svg",
	"./writing.svg": "./resources/js/assets/writing.svg",
	"./x-mark.svg": "./resources/js/assets/x-mark.svg",
	"./youtube.svg": "./resources/js/assets/youtube.svg"
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
webpackContext.id = "./resources/js/assets sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/js/assets/gallery sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./resources/js/assets/gallery sync ^\.\/.*$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1-image.png": "./resources/js/assets/gallery/1-image.png",
	"./1.jpg": "./resources/js/assets/gallery/1.jpg",
	"./2.jpg": "./resources/js/assets/gallery/2.jpg",
	"./3.jpg": "./resources/js/assets/gallery/3.jpg",
	"./4.jpg": "./resources/js/assets/gallery/4.jpg",
	"./5.jpg": "./resources/js/assets/gallery/5.jpg",
	"./clock.png": "./resources/js/assets/gallery/clock.png",
	"./controll.png": "./resources/js/assets/gallery/controll.png",
	"./earn.png": "./resources/js/assets/gallery/earn.png",
	"./happy.png": "./resources/js/assets/gallery/happy.png",
	"./map.png": "./resources/js/assets/gallery/map.png",
	"./pink-bg.png": "./resources/js/assets/gallery/pink-bg.png",
	"./worck.png": "./resources/js/assets/gallery/worck.png",
	"./world.png": "./resources/js/assets/gallery/world.png"
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
webpackContext.id = "./resources/js/assets/gallery sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/js/components/white/main_paiges/cards.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/cards.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards_vue_vue_type_template_id_7ff50c14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.vue?vue&type=template&id=7ff50c14& */ "./resources/js/components/white/main_paiges/cards.vue?vue&type=template&id=7ff50c14&");
/* harmony import */ var _cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.vue?vue&type=script&lang=js& */ "./resources/js/components/white/main_paiges/cards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _cards_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/white/main_paiges/cards.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cards_vue_vue_type_template_id_7ff50c14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cards_vue_vue_type_template_id_7ff50c14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/main_paiges/cards.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/main_paiges/cards.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/cards.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cards.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/cards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/main_paiges/cards.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/cards.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cards.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/cards.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/main_paiges/cards.vue?vue&type=template&id=7ff50c14&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/cards.vue?vue&type=template&id=7ff50c14& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_template_id_7ff50c14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cards.vue?vue&type=template&id=7ff50c14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/cards.vue?vue&type=template&id=7ff50c14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_template_id_7ff50c14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_template_id_7ff50c14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/white/main_paiges/covid.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/covid.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _covid_vue_vue_type_template_id_49a3b5b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./covid.vue?vue&type=template&id=49a3b5b8& */ "./resources/js/components/white/main_paiges/covid.vue?vue&type=template&id=49a3b5b8&");
/* harmony import */ var _covid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./covid.vue?vue&type=script&lang=js& */ "./resources/js/components/white/main_paiges/covid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _covid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./covid.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/white/main_paiges/covid.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _covid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _covid_vue_vue_type_template_id_49a3b5b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _covid_vue_vue_type_template_id_49a3b5b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/main_paiges/covid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/main_paiges/covid.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/covid.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_covid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./covid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/covid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_covid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/main_paiges/covid.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/covid.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_covid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./covid.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/covid.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_covid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_covid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_covid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_covid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/main_paiges/covid.vue?vue&type=template&id=49a3b5b8&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/covid.vue?vue&type=template&id=49a3b5b8& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_covid_vue_vue_type_template_id_49a3b5b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./covid.vue?vue&type=template&id=49a3b5b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/covid.vue?vue&type=template&id=49a3b5b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_covid_vue_vue_type_template_id_49a3b5b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_covid_vue_vue_type_template_id_49a3b5b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/white/main_paiges/gallery.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/gallery.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gallery_vue_vue_type_template_id_7d0d07a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.vue?vue&type=template&id=7d0d07a5&scoped=true& */ "./resources/js/components/white/main_paiges/gallery.vue?vue&type=template&id=7d0d07a5&scoped=true&");
/* harmony import */ var _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.vue?vue&type=script&lang=js& */ "./resources/js/components/white/main_paiges/gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _gallery_vue_vue_type_style_index_0_id_7d0d07a5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.vue?vue&type=style&index=0&id=7d0d07a5&scoped=true&lang=scss& */ "./resources/js/components/white/main_paiges/gallery.vue?vue&type=style&index=0&id=7d0d07a5&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gallery_vue_vue_type_template_id_7d0d07a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gallery_vue_vue_type_template_id_7d0d07a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d0d07a5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/main_paiges/gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/main_paiges/gallery.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/gallery.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/main_paiges/gallery.vue?vue&type=style&index=0&id=7d0d07a5&scoped=true&lang=scss&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/gallery.vue?vue&type=style&index=0&id=7d0d07a5&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_7d0d07a5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=style&index=0&id=7d0d07a5&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/gallery.vue?vue&type=style&index=0&id=7d0d07a5&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_7d0d07a5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_7d0d07a5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_7d0d07a5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_7d0d07a5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/main_paiges/gallery.vue?vue&type=template&id=7d0d07a5&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/gallery.vue?vue&type=template&id=7d0d07a5&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_7d0d07a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=template&id=7d0d07a5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/gallery.vue?vue&type=template&id=7d0d07a5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_7d0d07a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_7d0d07a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/white/main_paiges/grid.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/grid.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid_vue_vue_type_template_id_f63d73fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.vue?vue&type=template&id=f63d73fa&scoped=true& */ "./resources/js/components/white/main_paiges/grid.vue?vue&type=template&id=f63d73fa&scoped=true&");
/* harmony import */ var _grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.vue?vue&type=script&lang=js& */ "./resources/js/components/white/main_paiges/grid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _grid_vue_vue_type_style_index_0_id_f63d73fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.vue?vue&type=style&index=0&id=f63d73fa&scoped=true&lang=scss& */ "./resources/js/components/white/main_paiges/grid.vue?vue&type=style&index=0&id=f63d73fa&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _grid_vue_vue_type_template_id_f63d73fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _grid_vue_vue_type_template_id_f63d73fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f63d73fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/main_paiges/grid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/main_paiges/grid.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/grid.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./grid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/grid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/main_paiges/grid.vue?vue&type=style&index=0&id=f63d73fa&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/grid.vue?vue&type=style&index=0&id=f63d73fa&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_grid_vue_vue_type_style_index_0_id_f63d73fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./grid.vue?vue&type=style&index=0&id=f63d73fa&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/grid.vue?vue&type=style&index=0&id=f63d73fa&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_grid_vue_vue_type_style_index_0_id_f63d73fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_grid_vue_vue_type_style_index_0_id_f63d73fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_grid_vue_vue_type_style_index_0_id_f63d73fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_grid_vue_vue_type_style_index_0_id_f63d73fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/main_paiges/grid.vue?vue&type=template&id=f63d73fa&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/grid.vue?vue&type=template&id=f63d73fa&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_grid_vue_vue_type_template_id_f63d73fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./grid.vue?vue&type=template&id=f63d73fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/grid.vue?vue&type=template&id=f63d73fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_grid_vue_vue_type_template_id_f63d73fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_grid_vue_vue_type_template_id_f63d73fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/white/main_paiges/info.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/info.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_vue_vue_type_template_id_7c872b6b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=7c872b6b&scoped=true& */ "./resources/js/components/white/main_paiges/info.vue?vue&type=template&id=7c872b6b&scoped=true&");
/* harmony import */ var _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js& */ "./resources/js/components/white/main_paiges/info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _info_vue_vue_type_style_index_0_id_7c872b6b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.vue?vue&type=style&index=0&id=7c872b6b&scoped=true&lang=scss& */ "./resources/js/components/white/main_paiges/info.vue?vue&type=style&index=0&id=7c872b6b&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_vue_vue_type_template_id_7c872b6b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _info_vue_vue_type_template_id_7c872b6b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c872b6b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/main_paiges/info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/main_paiges/info.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/info.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/main_paiges/info.vue?vue&type=style&index=0&id=7c872b6b&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/info.vue?vue&type=style&index=0&id=7c872b6b&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_7c872b6b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=style&index=0&id=7c872b6b&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/info.vue?vue&type=style&index=0&id=7c872b6b&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_7c872b6b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_7c872b6b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_7c872b6b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_7c872b6b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/main_paiges/info.vue?vue&type=template&id=7c872b6b&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/info.vue?vue&type=template&id=7c872b6b&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_7c872b6b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=template&id=7c872b6b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/info.vue?vue&type=template&id=7c872b6b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_7c872b6b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_7c872b6b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/white/main_paiges/main-header.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/main-header.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_header_vue_vue_type_template_id_26335074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-header.vue?vue&type=template&id=26335074& */ "./resources/js/components/white/main_paiges/main-header.vue?vue&type=template&id=26335074&");
/* harmony import */ var _main_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-header.vue?vue&type=script&lang=js& */ "./resources/js/components/white/main_paiges/main-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _main_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-header.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/white/main_paiges/main-header.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_header_vue_vue_type_template_id_26335074___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_header_vue_vue_type_template_id_26335074___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/main_paiges/main-header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/main_paiges/main-header.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/main-header.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/main-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/main_paiges/main-header.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/main-header.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main-header.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/main-header.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_main_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/main_paiges/main-header.vue?vue&type=template&id=26335074&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/main-header.vue?vue&type=template&id=26335074& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_header_vue_vue_type_template_id_26335074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./main-header.vue?vue&type=template&id=26335074& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/main-header.vue?vue&type=template&id=26335074&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_header_vue_vue_type_template_id_26335074___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_header_vue_vue_type_template_id_26335074___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/white/main_paiges/offers.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/offers.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offers_vue_vue_type_template_id_1c7fb2d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers.vue?vue&type=template&id=1c7fb2d8&scoped=true& */ "./resources/js/components/white/main_paiges/offers.vue?vue&type=template&id=1c7fb2d8&scoped=true&");
/* harmony import */ var _offers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers.vue?vue&type=script&lang=js& */ "./resources/js/components/white/main_paiges/offers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _offers_vue_vue_type_style_index_0_id_1c7fb2d8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offers.vue?vue&type=style&index=0&id=1c7fb2d8&scoped=true&lang=scss& */ "./resources/js/components/white/main_paiges/offers.vue?vue&type=style&index=0&id=1c7fb2d8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _offers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _offers_vue_vue_type_template_id_1c7fb2d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _offers_vue_vue_type_template_id_1c7fb2d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c7fb2d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/main_paiges/offers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/main_paiges/offers.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/offers.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/offers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/main_paiges/offers.vue?vue&type=style&index=0&id=1c7fb2d8&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/offers.vue?vue&type=style&index=0&id=1c7fb2d8&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offers_vue_vue_type_style_index_0_id_1c7fb2d8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offers.vue?vue&type=style&index=0&id=1c7fb2d8&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/offers.vue?vue&type=style&index=0&id=1c7fb2d8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offers_vue_vue_type_style_index_0_id_1c7fb2d8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offers_vue_vue_type_style_index_0_id_1c7fb2d8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offers_vue_vue_type_style_index_0_id_1c7fb2d8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offers_vue_vue_type_style_index_0_id_1c7fb2d8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/main_paiges/offers.vue?vue&type=template&id=1c7fb2d8&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/offers.vue?vue&type=template&id=1c7fb2d8&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offers_vue_vue_type_template_id_1c7fb2d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offers.vue?vue&type=template&id=1c7fb2d8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/offers.vue?vue&type=template&id=1c7fb2d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offers_vue_vue_type_template_id_1c7fb2d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offers_vue_vue_type_template_id_1c7fb2d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/white/main_paiges/video.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/video.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_vue_vue_type_template_id_1d085b0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.vue?vue&type=template&id=1d085b0e&scoped=true& */ "./resources/js/components/white/main_paiges/video.vue?vue&type=template&id=1d085b0e&scoped=true&");
/* harmony import */ var _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.vue?vue&type=script&lang=js& */ "./resources/js/components/white/main_paiges/video.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _video_vue_vue_type_style_index_0_id_1d085b0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.vue?vue&type=style&index=0&id=1d085b0e&scoped=true&lang=scss& */ "./resources/js/components/white/main_paiges/video.vue?vue&type=style&index=0&id=1d085b0e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _video_vue_vue_type_template_id_1d085b0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _video_vue_vue_type_template_id_1d085b0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1d085b0e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/main_paiges/video.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/main_paiges/video.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/video.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./video.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/video.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/main_paiges/video.vue?vue&type=style&index=0&id=1d085b0e&scoped=true&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/video.vue?vue&type=style&index=0&id=1d085b0e&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_1d085b0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./video.vue?vue&type=style&index=0&id=1d085b0e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/video.vue?vue&type=style&index=0&id=1d085b0e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_1d085b0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_1d085b0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_1d085b0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_1d085b0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/main_paiges/video.vue?vue&type=template&id=1d085b0e&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/white/main_paiges/video.vue?vue&type=template&id=1d085b0e&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_template_id_1d085b0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./video.vue?vue&type=template&id=1d085b0e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/main_paiges/video.vue?vue&type=template&id=1d085b0e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_template_id_1d085b0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_template_id_1d085b0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/white/modal/offersDetailModal.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/white/modal/offersDetailModal.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offersDetailModal_vue_vue_type_template_id_9020397c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offersDetailModal.vue?vue&type=template&id=9020397c&scoped=true& */ "./resources/js/components/white/modal/offersDetailModal.vue?vue&type=template&id=9020397c&scoped=true&");
/* harmony import */ var _offersDetailModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offersDetailModal.vue?vue&type=script&lang=js& */ "./resources/js/components/white/modal/offersDetailModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _offersDetailModal_vue_vue_type_style_index_0_id_9020397c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offersDetailModal.vue?vue&type=style&index=0&id=9020397c&scoped=true&lang=scss& */ "./resources/js/components/white/modal/offersDetailModal.vue?vue&type=style&index=0&id=9020397c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _offersDetailModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _offersDetailModal_vue_vue_type_template_id_9020397c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _offersDetailModal_vue_vue_type_template_id_9020397c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9020397c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/modal/offersDetailModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/modal/offersDetailModal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/white/modal/offersDetailModal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offersDetailModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offersDetailModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersDetailModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offersDetailModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/modal/offersDetailModal.vue?vue&type=style&index=0&id=9020397c&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/white/modal/offersDetailModal.vue?vue&type=style&index=0&id=9020397c&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersDetailModal_vue_vue_type_style_index_0_id_9020397c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offersDetailModal.vue?vue&type=style&index=0&id=9020397c&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersDetailModal.vue?vue&type=style&index=0&id=9020397c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersDetailModal_vue_vue_type_style_index_0_id_9020397c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersDetailModal_vue_vue_type_style_index_0_id_9020397c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersDetailModal_vue_vue_type_style_index_0_id_9020397c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersDetailModal_vue_vue_type_style_index_0_id_9020397c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/modal/offersDetailModal.vue?vue&type=template&id=9020397c&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/white/modal/offersDetailModal.vue?vue&type=template&id=9020397c&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offersDetailModal_vue_vue_type_template_id_9020397c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offersDetailModal.vue?vue&type=template&id=9020397c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersDetailModal.vue?vue&type=template&id=9020397c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offersDetailModal_vue_vue_type_template_id_9020397c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offersDetailModal_vue_vue_type_template_id_9020397c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/white/modal/offersValueList.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/white/modal/offersValueList.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offersValueList_vue_vue_type_template_id_f90513d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offersValueList.vue?vue&type=template&id=f90513d6&scoped=true& */ "./resources/js/components/white/modal/offersValueList.vue?vue&type=template&id=f90513d6&scoped=true&");
/* harmony import */ var _offersValueList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offersValueList.vue?vue&type=script&lang=js& */ "./resources/js/components/white/modal/offersValueList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _offersValueList_vue_vue_type_style_index_0_id_f90513d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offersValueList.vue?vue&type=style&index=0&id=f90513d6&scoped=true&lang=scss& */ "./resources/js/components/white/modal/offersValueList.vue?vue&type=style&index=0&id=f90513d6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _offersValueList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _offersValueList_vue_vue_type_template_id_f90513d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _offersValueList_vue_vue_type_template_id_f90513d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f90513d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/modal/offersValueList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/modal/offersValueList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/white/modal/offersValueList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offersValueList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/modal/offersValueList.vue?vue&type=style&index=0&id=f90513d6&scoped=true&lang=scss&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/white/modal/offersValueList.vue?vue&type=style&index=0&id=f90513d6&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueList_vue_vue_type_style_index_0_id_f90513d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offersValueList.vue?vue&type=style&index=0&id=f90513d6&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueList.vue?vue&type=style&index=0&id=f90513d6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueList_vue_vue_type_style_index_0_id_f90513d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueList_vue_vue_type_style_index_0_id_f90513d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueList_vue_vue_type_style_index_0_id_f90513d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueList_vue_vue_type_style_index_0_id_f90513d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/modal/offersValueList.vue?vue&type=template&id=f90513d6&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/white/modal/offersValueList.vue?vue&type=template&id=f90513d6&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueList_vue_vue_type_template_id_f90513d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offersValueList.vue?vue&type=template&id=f90513d6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueList.vue?vue&type=template&id=f90513d6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueList_vue_vue_type_template_id_f90513d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueList_vue_vue_type_template_id_f90513d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/white/modal/offersValueNames.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/white/modal/offersValueNames.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offersValueNames_vue_vue_type_template_id_fb43603e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offersValueNames.vue?vue&type=template&id=fb43603e&scoped=true& */ "./resources/js/components/white/modal/offersValueNames.vue?vue&type=template&id=fb43603e&scoped=true&");
/* harmony import */ var _offersValueNames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offersValueNames.vue?vue&type=script&lang=js& */ "./resources/js/components/white/modal/offersValueNames.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _offersValueNames_vue_vue_type_style_index_0_id_fb43603e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offersValueNames.vue?vue&type=style&index=0&id=fb43603e&scoped=true&lang=scss& */ "./resources/js/components/white/modal/offersValueNames.vue?vue&type=style&index=0&id=fb43603e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _offersValueNames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _offersValueNames_vue_vue_type_template_id_fb43603e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _offersValueNames_vue_vue_type_template_id_fb43603e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fb43603e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/modal/offersValueNames.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/modal/offersValueNames.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/white/modal/offersValueNames.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueNames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offersValueNames.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueNames.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueNames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/modal/offersValueNames.vue?vue&type=style&index=0&id=fb43603e&scoped=true&lang=scss&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/white/modal/offersValueNames.vue?vue&type=style&index=0&id=fb43603e&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueNames_vue_vue_type_style_index_0_id_fb43603e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offersValueNames.vue?vue&type=style&index=0&id=fb43603e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueNames.vue?vue&type=style&index=0&id=fb43603e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueNames_vue_vue_type_style_index_0_id_fb43603e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueNames_vue_vue_type_style_index_0_id_fb43603e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueNames_vue_vue_type_style_index_0_id_fb43603e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueNames_vue_vue_type_style_index_0_id_fb43603e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/modal/offersValueNames.vue?vue&type=template&id=fb43603e&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/white/modal/offersValueNames.vue?vue&type=template&id=fb43603e&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueNames_vue_vue_type_template_id_fb43603e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./offersValueNames.vue?vue&type=template&id=fb43603e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/modal/offersValueNames.vue?vue&type=template&id=fb43603e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueNames_vue_vue_type_template_id_fb43603e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_offersValueNames_vue_vue_type_template_id_fb43603e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/white/slider/header-slider.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/white/slider/header-slider.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_slider_vue_vue_type_template_id_5c6a27a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-slider.vue?vue&type=template&id=5c6a27a4&scoped=true& */ "./resources/js/components/white/slider/header-slider.vue?vue&type=template&id=5c6a27a4&scoped=true&");
/* harmony import */ var _header_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-slider.vue?vue&type=script&lang=js& */ "./resources/js/components/white/slider/header-slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _header_slider_vue_vue_type_style_index_0_id_5c6a27a4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-slider.vue?vue&type=style&index=0&id=5c6a27a4&scoped=true&lang=scss& */ "./resources/js/components/white/slider/header-slider.vue?vue&type=style&index=0&id=5c6a27a4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _header_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_slider_vue_vue_type_template_id_5c6a27a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_slider_vue_vue_type_template_id_5c6a27a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5c6a27a4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/white/slider/header-slider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/white/slider/header-slider.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/white/slider/header-slider.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header-slider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/slider/header-slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/white/slider/header-slider.vue?vue&type=style&index=0&id=5c6a27a4&scoped=true&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/white/slider/header-slider.vue?vue&type=style&index=0&id=5c6a27a4&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_header_slider_vue_vue_type_style_index_0_id_5c6a27a4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header-slider.vue?vue&type=style&index=0&id=5c6a27a4&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/slider/header-slider.vue?vue&type=style&index=0&id=5c6a27a4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_header_slider_vue_vue_type_style_index_0_id_5c6a27a4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_header_slider_vue_vue_type_style_index_0_id_5c6a27a4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_header_slider_vue_vue_type_style_index_0_id_5c6a27a4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_header_slider_vue_vue_type_style_index_0_id_5c6a27a4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/white/slider/header-slider.vue?vue&type=template&id=5c6a27a4&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/white/slider/header-slider.vue?vue&type=template&id=5c6a27a4&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_slider_vue_vue_type_template_id_5c6a27a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header-slider.vue?vue&type=template&id=5c6a27a4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/white/slider/header-slider.vue?vue&type=template&id=5c6a27a4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_slider_vue_vue_type_template_id_5c6a27a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_slider_vue_vue_type_template_id_5c6a27a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/main_paiges/aweWhite.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/main_paiges/aweWhite.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aweWhite_vue_vue_type_template_id_ab74f022___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aweWhite.vue?vue&type=template&id=ab74f022& */ "./resources/js/pages/main_paiges/aweWhite.vue?vue&type=template&id=ab74f022&");
/* harmony import */ var _aweWhite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aweWhite.vue?vue&type=script&lang=js& */ "./resources/js/pages/main_paiges/aweWhite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _aweWhite_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aweWhite.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/main_paiges/aweWhite.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _aweWhite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _aweWhite_vue_vue_type_template_id_ab74f022___WEBPACK_IMPORTED_MODULE_0__["render"],
  _aweWhite_vue_vue_type_template_id_ab74f022___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/main_paiges/aweWhite.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/main_paiges/aweWhite.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/main_paiges/aweWhite.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aweWhite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./aweWhite.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/main_paiges/aweWhite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_aweWhite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/main_paiges/aweWhite.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/main_paiges/aweWhite.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_aweWhite_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./aweWhite.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/main_paiges/aweWhite.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_aweWhite_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_aweWhite_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_aweWhite_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_aweWhite_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/main_paiges/aweWhite.vue?vue&type=template&id=ab74f022&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/main_paiges/aweWhite.vue?vue&type=template&id=ab74f022& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_aweWhite_vue_vue_type_template_id_ab74f022___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./aweWhite.vue?vue&type=template&id=ab74f022& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/main_paiges/aweWhite.vue?vue&type=template&id=ab74f022&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_aweWhite_vue_vue_type_template_id_ab74f022___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_aweWhite_vue_vue_type_template_id_ab74f022___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);