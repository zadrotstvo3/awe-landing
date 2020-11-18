(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/countryList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/countryList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_components_black_modal_investorsActionModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/black/modal/investorsActionModal */ "./resources/js/components/black/modal/investorsActionModal.vue");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "countryList",
  components: {
    investorsActionModal: _js_components_black_modal_investorsActionModal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      countryList: '',
      currentCountry: '',
      showActionModal: false
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var country;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://restcountries.eu/rest/v2/all').then(function (resp) {
                return resp.json();
              })["catch"](function (error) {
                return console.log(error);
              });

            case 2:
              country = _context.sent;

              _this.createCountyList(country);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    close: function close() {
      this.$emit('close');
    },
    createCountyList: function createCountyList(list) {
      var countries = ['United States of America', 'United Kingdom of Great Britain and Northern Ireland', 'Ukraine', 'Turkey', 'Spain', 'Russian Federation', 'Germany', 'India', 'China', 'Italy'];
      var sortedCountries = list.filter(function (item) {
        return countries.includes(item.name);
      });
      this.countryList = _toConsumableArray(sortedCountries);
    },
    openActionModal: function openActionModal(item) {
      this.currentCountry = item;
      this.toggleActionModal();
    },
    toggleActionModal: function toggleActionModal() {
      this.showActionModal = !this.showActionModal;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/investorsInfo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/investorsInfo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "investorsInfo"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
  name: "formComponent"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/investorsActionModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/investorsActionModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_black_modal_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/black/modal/form */ "./resources/js/components/black/modal/form.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "investorsActionModal",
  components: {
    formComponent: _js_components_black_modal_form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  methods: {
    close: function close() {
      this.$emit('closeActionModal');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_black_investorsInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/black/investorsInfo */ "./resources/js/components/black/investorsInfo.vue");
/* harmony import */ var _js_components_black_countryList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/black/countryList */ "./resources/js/components/black/countryList.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "InvestorsBlack",
  components: {
    countryList: _js_components_black_countryList__WEBPACK_IMPORTED_MODULE_1__["default"],
    investorsInfo: _js_components_black_investorsInfo__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/countryList.vue?vue&type=style&index=0&id=879c3aee&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/countryList.vue?vue&type=style&index=0&id=879c3aee&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".countries[data-v-879c3aee] {\n  width: 100%;\n}\n.countries__list[data-v-879c3aee] {\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n.countries__item[data-v-879c3aee] {\n  margin: 15px;\n  padding: 15px;\n  width: 250px;\n  height: 250px;\n  border: 1px solid black;\n  border-radius: 10px;\n  list-style: none;\n  transition: 0.3s ease-in-out;\n  background-color: #fff;\n}\n.countries__item img[data-v-879c3aee] {\n  width: 75px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border: 1px solid black;\n}\n.countries__item[data-v-879c3aee]:hover {\n  cursor: pointer;\n  border-color: transparent;\n  box-shadow: 0 0 15px 0 #fff;\n}\n.countries__info[data-v-879c3aee] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.countries__name[data-v-879c3aee] {\n  margin-right: 15px;\n  font-size: 38px;\n  font-weight: 900;\n  color: black;\n}\n.countries__percent[data-v-879c3aee] {\n  padding: 5px 0;\n  font-size: 74px;\n  text-align: center;\n  color: black;\n}\n.countries__button[data-v-879c3aee] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.countries__button .button[data-v-879c3aee] {\n  width: 100%;\n  max-width: 190px;\n  padding: 15px;\n  border: 1px solid black;\n  border-radius: 5px;\n  background-color: #fff;\n  font-size: 24px;\n  text-transform: uppercase;\n  outline: none;\n  cursor: pointer;\n}\n.countries__button .button[data-v-879c3aee]:hover {\n  color: white;\n  background-color: black;\n}\n.fade-enter-active[data-v-879c3aee], .fade-leave-active[data-v-879c3aee] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-879c3aee], .fade-leave-to[data-v-879c3aee] {\n  opacity: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/investorsInfo.vue?vue&type=style&index=0&id=56f67d9e&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/investorsInfo.vue?vue&type=style&index=0&id=56f67d9e&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".investors-info[data-v-56f67d9e] {\n  width: 100%;\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 0 15px;\n}\n.investors-info__title[data-v-56f67d9e] {\n  font-size: 94px;\n}\n.investors-info__text[data-v-56f67d9e] {\n  margin: 15px 0;\n  font-size: 24px;\n}\n@media only screen and (max-width: 770px) {\n.investors-info__title[data-v-56f67d9e] {\n    font-size: 34px;\n}\n.investors-info__text[data-v-56f67d9e] {\n    margin: 15px 0;\n    font-size: 14px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/form.vue?vue&type=style&index=0&id=7f6f9641&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/form.vue?vue&type=style&index=0&id=7f6f9641&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".billing-form__input[data-v-7f6f9641] {\n  width: 100%;\n  margin: 10px 0;\n  font-size: 14px;\n}\n.billing-form__input label[data-v-7f6f9641], .billing-form__input input[data-v-7f6f9641] {\n  width: 100%;\n  margin: 5px;\n  padding: 15px;\n}\n.billing-form__input input[data-v-7f6f9641] {\n  background-color: #EDEDED;\n  border: none;\n  outline: none;\n}\n.billing-form__input--small[data-v-7f6f9641] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.billing-form__input--small .small__input[data-v-7f6f9641] {\n  width: 100%;\n  max-width: 150px;\n  margin: 10px 0;\n  font-size: 14px;\n}\n.billing-form__input--small .small__input label[data-v-7f6f9641], .billing-form__input--small .small__input input[data-v-7f6f9641] {\n  width: 100%;\n  margin: 5px;\n  padding: 15px;\n}\n.billing-form__input--small .small__input input[data-v-7f6f9641] {\n  background-color: #EDEDED;\n  border: none;\n  outline: none;\n}\n.billing-form__submit input[data-v-7f6f9641] {\n  width: 100%;\n  padding: 15px;\n  font-size: 24px;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  background-color: black;\n  color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/investorsActionModal.vue?vue&type=style&index=0&id=a61d188e&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/investorsActionModal.vue?vue&type=style&index=0&id=a61d188e&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal[data-v-a61d188e] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.9);\n}\n.modal__container[data-v-a61d188e] {\n  width: 100%;\n  max-width: 750px;\n  height: 700px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n}\n.modal__close[data-v-a61d188e] {\n  padding: 0 0 15px 0;\n  display: flex;\n  justify-content: flex-end;\n}\n.modal__content[data-v-a61d188e] {\n  color: black;\n}\n.content[data-v-a61d188e] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.content__title[data-v-a61d188e] {\n  padding: 15px 0;\n  font-size: 44px;\n  text-transform: uppercase;\n}\n.content__text[data-v-a61d188e] {\n  margin-left: 0;\n}\n.content__text .text[data-v-a61d188e] {\n  padding: 5px 0;\n}\n.content__billing-form[data-v-a61d188e] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.billing-form[data-v-a61d188e], .billing-content[data-v-a61d188e] {\n  width: 50%;\n  margin: 10px;\n}\n.billing-form__text[data-v-a61d188e], .billing-content__text[data-v-a61d188e] {\n  padding: 10px 0;\n}\n.billing-form__text[data-v-a61d188e]:first-child, .billing-content__text[data-v-a61d188e]:first-child {\n  font-size: 24px;\n}\n.billing-content[data-v-a61d188e] {\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.region p[data-v-a61d188e] {\n  margin: 5px 0;\n}\n.region img[data-v-a61d188e] {\n  margin: 5px 0;\n  width: 100%;\n  border: 1px solid black;\n}\n@media only screen and (max-width: 770px) {\n.modal__container[data-v-a61d188e] {\n    width: 100%;\n    max-width: 450px;\n    overflow-y: scroll;\n}\n.content__billing-form[data-v-a61d188e] {\n    flex-direction: column-reverse;\n}\n.content__billing-form .billing-form[data-v-a61d188e], .content__billing-form .billing-content[data-v-a61d188e] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 370px) {\n.modal__container[data-v-a61d188e] {\n    padding: 15px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=style&index=0&id=3e26b8db&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=style&index=0&id=3e26b8db&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".investors__title[data-v-3e26b8db] {\n  margin-top: -100px;\n  padding: 160px 160px 0 160px;\n}\n.title[data-v-3e26b8db] {\n  font-size: 200px;\n  color: black;\n}\n.title--small[data-v-3e26b8db] {\n  position: relative;\n  margin-bottom: -160px;\n  font-size: 40px;\n  font-weight: 600;\n  color: white;\n  text-transform: uppercase;\n}\n.text-decoration[data-v-3e26b8db] {\n  font-weight: 700;\n  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white;\n}\n@media only screen and (max-width: 1440px) {\n.investors[data-v-3e26b8db] {\n    margin-top: 50px;\n}\n.investors__title[data-v-3e26b8db] {\n    padding: 100px 60px 0 60px;\n}\n.title[data-v-3e26b8db] {\n    font-size: 120px;\n}\n.title--small[data-v-3e26b8db] {\n    margin-bottom: -100px;\n    font-size: 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.investors[data-v-3e26b8db] {\n    margin-top: 100px;\n}\n.investors__title[data-v-3e26b8db] {\n    padding: 50px 60px 0 60px;\n}\n.title[data-v-3e26b8db] {\n    font-size: 40px;\n}\n.title--small[data-v-3e26b8db] {\n    margin-bottom: -40px;\n    margin-left: -45px;\n    font-size: 14px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/countryList.vue?vue&type=style&index=0&id=879c3aee&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/countryList.vue?vue&type=style&index=0&id=879c3aee&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./countryList.vue?vue&type=style&index=0&id=879c3aee&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/countryList.vue?vue&type=style&index=0&id=879c3aee&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/investorsInfo.vue?vue&type=style&index=0&id=56f67d9e&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/investorsInfo.vue?vue&type=style&index=0&id=56f67d9e&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./investorsInfo.vue?vue&type=style&index=0&id=56f67d9e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/investorsInfo.vue?vue&type=style&index=0&id=56f67d9e&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/form.vue?vue&type=style&index=0&id=7f6f9641&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/form.vue?vue&type=style&index=0&id=7f6f9641&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&id=7f6f9641&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/form.vue?vue&type=style&index=0&id=7f6f9641&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/investorsActionModal.vue?vue&type=style&index=0&id=a61d188e&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/investorsActionModal.vue?vue&type=style&index=0&id=a61d188e&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./investorsActionModal.vue?vue&type=style&index=0&id=a61d188e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/investorsActionModal.vue?vue&type=style&index=0&id=a61d188e&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=style&index=0&id=3e26b8db&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=style&index=0&id=3e26b8db&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForInvestors.vue?vue&type=style&index=0&id=3e26b8db&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=style&index=0&id=3e26b8db&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/countryList.vue?vue&type=template&id=879c3aee&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/countryList.vue?vue&type=template&id=879c3aee&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "countries" },
    [
      _c(
        "ul",
        { staticClass: "countries__list" },
        _vm._l(_vm.countryList, function(country) {
          return _c(
            "li",
            {
              key: country.name,
              staticClass: "countries__item",
              on: {
                click: function($event) {
                  return _vm.openActionModal(country)
                }
              }
            },
            [
              _c("div", { staticClass: "countries__info" }, [
                _c("p", { staticClass: "countries__name" }, [
                  _vm._v(_vm._s(country.alpha2Code))
                ]),
                _vm._v(" "),
                _c("img", { attrs: { src: country.flag, alt: "" } })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "countries__percent" }, [
                _vm._v("\n        1%\n      ")
              ]),
              _vm._v(" "),
              _vm._m(0, true)
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade", mode: "in-out" } },
        [
          _vm.showActionModal
            ? _c("investorsActionModal", {
                attrs: { data: _vm.currentCountry },
                on: { closeActionModal: _vm.toggleActionModal }
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
    return _c("div", { staticClass: "countries__button" }, [
      _c("button", { staticClass: "button" }, [
        _vm._v("\n          buy\n        ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/investorsInfo.vue?vue&type=template&id=56f67d9e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/investorsInfo.vue?vue&type=template&id=56f67d9e&scoped=true& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "investors-info" }, [
      _c("h2", { staticClass: "investors-info__title" }, [
        _vm._v("Lorem ipsum dolor.")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "investors-info__text" }, [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, cumque dolorem eaque earum error facere neque officia omnis rem sunt. Accusamus cupiditate eum maxime officia tempora temporibus, ullam velit voluptatem"
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "investors-info__text" }, [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, animi culpa deleniti dicta dolorem dolorum, enim et facere fugiat illum ipsam itaque minima modi, nostrum possimus sed tempore vero?"
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "investors-info__text" }, [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam assumenda commodi cupiditate delectus deleniti ea error fugit, illo ipsum itaque magnam natus, non odit quibusdam, quo sapiente unde voluptates."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/form.vue?vue&type=template&id=7f6f9641&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/form.vue?vue&type=template&id=7f6f9641&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      staticClass: "billing-form",
      on: {
        click: function($event) {
          $event.preventDefault()
        }
      }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _vm._m(5)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "billing-form__input" }, [
      _c("label", { attrs: { for: "firstName" } }, [
        _vm._v("Enter your first name")
      ]),
      _c("br"),
      _vm._v(" "),
      _c("input", { attrs: { type: "text", id: "firstName" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "billing-form__input" }, [
      _c("label", { attrs: { for: "lastName" } }, [
        _vm._v("Enter your last name")
      ]),
      _c("br"),
      _vm._v(" "),
      _c("input", { attrs: { type: "text", id: "lastName" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "billing-form__input" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Enter your email")]),
      _c("br"),
      _vm._v(" "),
      _c("input", { attrs: { type: "text", id: "email" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "billing-form__input" }, [
      _c("label", { attrs: { for: "cardNumber" } }, [
        _vm._v("Enter your card number")
      ]),
      _c("br"),
      _vm._v(" "),
      _c("input", { attrs: { type: "text", id: "cardNumber" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "billing-form__input--small" }, [
      _c("div", { staticClass: "small__input" }, [
        _c("label", { attrs: { for: "expirationNumber" } }, [
          _vm._v("Expiration date")
        ]),
        _c("br"),
        _vm._v(" "),
        _c("input", { attrs: { type: "text", id: "expirationNumber" } }),
        _vm._v(" "),
        _c("br")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "small__input" }, [
        _c("label", { attrs: { for: "cvv" } }, [_vm._v("CVV code")]),
        _c("br"),
        _vm._v(" "),
        _c("input", { attrs: { type: "text", id: "cvv" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "billing-form__submit" }, [
      _c("input", { attrs: { type: "submit", value: "next" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/investorsActionModal.vue?vue&type=template&id=a61d188e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/black/modal/investorsActionModal.vue?vue&type=template&id=a61d188e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "modal",
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.close($event)
        }
      }
    },
    [
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
              _c("h3", { staticClass: "content__title" }, [_vm._v("Title")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "content__billing-form" },
                [
                  _c("formComponent"),
                  _vm._v(" "),
                  _c("div", { staticClass: "billing-content" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("p", { staticClass: "billing-content__text" }, [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio explicabo id, iusto nemo"
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "billing-content__text" }, [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis deserunt dolore doloribus nobis quisquam!"
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "billing-content__region" }, [
                      _c("div", { staticClass: "region" }, [
                        _c("p", [
                          _vm._v("Country name: " + _vm._s(_vm.data.name))
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Country region: " + _vm._s(_vm.data.subregion)
                          )
                        ]),
                        _vm._v(" "),
                        _c("img", {
                          attrs: { src: _vm.data.flag, alt: "flag" }
                        })
                      ])
                    ])
                  ])
                ],
                1
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "billing-content__text" }, [
      _c("strong", [_vm._v("Value 1% = 10000$")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=template&id=3e26b8db&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=template&id=3e26b8db&scoped=true& ***!
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
  return _c("div", { staticClass: "investors" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "investors__list" }, [
      _c(
        "div",
        { staticClass: "investors__countries" },
        [_c("investorsInfo"), _vm._v(" "), _c("countryList")],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "investors__title" }, [
      _c("div", { staticClass: "title--small" }, [
        _vm._v("\n        For\n      ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "title text-decoration" }, [
        _vm._v("\n        Investors\n      ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/black/countryList.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/black/countryList.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _countryList_vue_vue_type_template_id_879c3aee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countryList.vue?vue&type=template&id=879c3aee&scoped=true& */ "./resources/js/components/black/countryList.vue?vue&type=template&id=879c3aee&scoped=true&");
/* harmony import */ var _countryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countryList.vue?vue&type=script&lang=js& */ "./resources/js/components/black/countryList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _countryList_vue_vue_type_style_index_0_id_879c3aee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countryList.vue?vue&type=style&index=0&id=879c3aee&scoped=true&lang=scss& */ "./resources/js/components/black/countryList.vue?vue&type=style&index=0&id=879c3aee&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _countryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _countryList_vue_vue_type_template_id_879c3aee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _countryList_vue_vue_type_template_id_879c3aee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "879c3aee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/countryList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/countryList.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/black/countryList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_countryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./countryList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/countryList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_countryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/black/countryList.vue?vue&type=style&index=0&id=879c3aee&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/black/countryList.vue?vue&type=style&index=0&id=879c3aee&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_countryList_vue_vue_type_style_index_0_id_879c3aee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./countryList.vue?vue&type=style&index=0&id=879c3aee&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/countryList.vue?vue&type=style&index=0&id=879c3aee&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_countryList_vue_vue_type_style_index_0_id_879c3aee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_countryList_vue_vue_type_style_index_0_id_879c3aee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_countryList_vue_vue_type_style_index_0_id_879c3aee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_countryList_vue_vue_type_style_index_0_id_879c3aee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/black/countryList.vue?vue&type=template&id=879c3aee&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/black/countryList.vue?vue&type=template&id=879c3aee&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_countryList_vue_vue_type_template_id_879c3aee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./countryList.vue?vue&type=template&id=879c3aee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/countryList.vue?vue&type=template&id=879c3aee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_countryList_vue_vue_type_template_id_879c3aee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_countryList_vue_vue_type_template_id_879c3aee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/black/investorsInfo.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/black/investorsInfo.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _investorsInfo_vue_vue_type_template_id_56f67d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./investorsInfo.vue?vue&type=template&id=56f67d9e&scoped=true& */ "./resources/js/components/black/investorsInfo.vue?vue&type=template&id=56f67d9e&scoped=true&");
/* harmony import */ var _investorsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./investorsInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/black/investorsInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _investorsInfo_vue_vue_type_style_index_0_id_56f67d9e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./investorsInfo.vue?vue&type=style&index=0&id=56f67d9e&scoped=true&lang=scss& */ "./resources/js/components/black/investorsInfo.vue?vue&type=style&index=0&id=56f67d9e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _investorsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _investorsInfo_vue_vue_type_template_id_56f67d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _investorsInfo_vue_vue_type_template_id_56f67d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "56f67d9e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/investorsInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/investorsInfo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/black/investorsInfo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./investorsInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/investorsInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/black/investorsInfo.vue?vue&type=style&index=0&id=56f67d9e&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/black/investorsInfo.vue?vue&type=style&index=0&id=56f67d9e&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsInfo_vue_vue_type_style_index_0_id_56f67d9e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./investorsInfo.vue?vue&type=style&index=0&id=56f67d9e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/investorsInfo.vue?vue&type=style&index=0&id=56f67d9e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsInfo_vue_vue_type_style_index_0_id_56f67d9e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsInfo_vue_vue_type_style_index_0_id_56f67d9e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsInfo_vue_vue_type_style_index_0_id_56f67d9e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsInfo_vue_vue_type_style_index_0_id_56f67d9e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/black/investorsInfo.vue?vue&type=template&id=56f67d9e&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/black/investorsInfo.vue?vue&type=template&id=56f67d9e&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsInfo_vue_vue_type_template_id_56f67d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./investorsInfo.vue?vue&type=template&id=56f67d9e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/investorsInfo.vue?vue&type=template&id=56f67d9e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsInfo_vue_vue_type_template_id_56f67d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsInfo_vue_vue_type_template_id_56f67d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/black/modal/form.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/black/modal/form.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_7f6f9641_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=7f6f9641&scoped=true& */ "./resources/js/components/black/modal/form.vue?vue&type=template&id=7f6f9641&scoped=true&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/components/black/modal/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _form_vue_vue_type_style_index_0_id_7f6f9641_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&id=7f6f9641&scoped=true&lang=scss& */ "./resources/js/components/black/modal/form.vue?vue&type=style&index=0&id=7f6f9641&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_7f6f9641_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_7f6f9641_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7f6f9641",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/modal/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/modal/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/black/modal/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/black/modal/form.vue?vue&type=style&index=0&id=7f6f9641&scoped=true&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/black/modal/form.vue?vue&type=style&index=0&id=7f6f9641&scoped=true&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_7f6f9641_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&id=7f6f9641&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/form.vue?vue&type=style&index=0&id=7f6f9641&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_7f6f9641_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_7f6f9641_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_7f6f9641_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_7f6f9641_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/black/modal/form.vue?vue&type=template&id=7f6f9641&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/black/modal/form.vue?vue&type=template&id=7f6f9641&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7f6f9641_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=7f6f9641&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/form.vue?vue&type=template&id=7f6f9641&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7f6f9641_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7f6f9641_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/black/modal/investorsActionModal.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/black/modal/investorsActionModal.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _investorsActionModal_vue_vue_type_template_id_a61d188e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./investorsActionModal.vue?vue&type=template&id=a61d188e&scoped=true& */ "./resources/js/components/black/modal/investorsActionModal.vue?vue&type=template&id=a61d188e&scoped=true&");
/* harmony import */ var _investorsActionModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./investorsActionModal.vue?vue&type=script&lang=js& */ "./resources/js/components/black/modal/investorsActionModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _investorsActionModal_vue_vue_type_style_index_0_id_a61d188e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./investorsActionModal.vue?vue&type=style&index=0&id=a61d188e&scoped=true&lang=scss& */ "./resources/js/components/black/modal/investorsActionModal.vue?vue&type=style&index=0&id=a61d188e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _investorsActionModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _investorsActionModal_vue_vue_type_template_id_a61d188e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _investorsActionModal_vue_vue_type_template_id_a61d188e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a61d188e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/black/modal/investorsActionModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/black/modal/investorsActionModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/black/modal/investorsActionModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsActionModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./investorsActionModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/investorsActionModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsActionModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/black/modal/investorsActionModal.vue?vue&type=style&index=0&id=a61d188e&scoped=true&lang=scss&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/black/modal/investorsActionModal.vue?vue&type=style&index=0&id=a61d188e&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsActionModal_vue_vue_type_style_index_0_id_a61d188e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./investorsActionModal.vue?vue&type=style&index=0&id=a61d188e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/investorsActionModal.vue?vue&type=style&index=0&id=a61d188e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsActionModal_vue_vue_type_style_index_0_id_a61d188e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsActionModal_vue_vue_type_style_index_0_id_a61d188e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsActionModal_vue_vue_type_style_index_0_id_a61d188e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsActionModal_vue_vue_type_style_index_0_id_a61d188e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/black/modal/investorsActionModal.vue?vue&type=template&id=a61d188e&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/black/modal/investorsActionModal.vue?vue&type=template&id=a61d188e&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsActionModal_vue_vue_type_template_id_a61d188e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./investorsActionModal.vue?vue&type=template&id=a61d188e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/black/modal/investorsActionModal.vue?vue&type=template&id=a61d188e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsActionModal_vue_vue_type_template_id_a61d188e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_investorsActionModal_vue_vue_type_template_id_a61d188e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/AWE_Black_paiges/ForInvestors.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/AWE_Black_paiges/ForInvestors.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForInvestors_vue_vue_type_template_id_3e26b8db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForInvestors.vue?vue&type=template&id=3e26b8db&scoped=true& */ "./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=template&id=3e26b8db&scoped=true&");
/* harmony import */ var _ForInvestors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForInvestors.vue?vue&type=script&lang=js& */ "./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ForInvestors_vue_vue_type_style_index_0_id_3e26b8db_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForInvestors.vue?vue&type=style&index=0&id=3e26b8db&scoped=true&lang=scss& */ "./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=style&index=0&id=3e26b8db&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ForInvestors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForInvestors_vue_vue_type_template_id_3e26b8db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForInvestors_vue_vue_type_template_id_3e26b8db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3e26b8db",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/AWE_Black_paiges/ForInvestors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForInvestors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForInvestors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForInvestors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=style&index=0&id=3e26b8db&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=style&index=0&id=3e26b8db&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ForInvestors_vue_vue_type_style_index_0_id_3e26b8db_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForInvestors.vue?vue&type=style&index=0&id=3e26b8db&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=style&index=0&id=3e26b8db&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ForInvestors_vue_vue_type_style_index_0_id_3e26b8db_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ForInvestors_vue_vue_type_style_index_0_id_3e26b8db_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ForInvestors_vue_vue_type_style_index_0_id_3e26b8db_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ForInvestors_vue_vue_type_style_index_0_id_3e26b8db_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=template&id=3e26b8db&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=template&id=3e26b8db&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForInvestors_vue_vue_type_template_id_3e26b8db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForInvestors.vue?vue&type=template&id=3e26b8db&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AWE_Black_paiges/ForInvestors.vue?vue&type=template&id=3e26b8db&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForInvestors_vue_vue_type_template_id_3e26b8db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForInvestors_vue_vue_type_template_id_3e26b8db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);