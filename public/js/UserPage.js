"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["UserPage"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BreadComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BreadComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['page'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BreadComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreadComponent */ "./resources/js/components/BreadComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      valid: false,
      nameRules: [function (v) {
        return !!v || 'Name is required';
      }],
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+\..+/.test(v) || 'E-mail must be valid';
      }],
      page: [{
        text: 'User Management',
        disabled: true
      }, {
        text: 'Users',
        disabled: false,
        href: ''
      }],
      dialog: false,
      dialogDelete: false,
      headers: [{
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Email Address',
        value: 'email',
        sortable: false
      }, {
        text: 'Role',
        value: 'role.display_name',
        sortable: false
      }, {
        text: 'Created at',
        value: 'created_at',
        sortable: false
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: null,
        email: null,
        created_at: null,
        role_id: null
      },
      defaultItem: {
        name: null,
        email: null,
        created_at: null,
        role_id: null
      },
      select: []
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Add User ' : 'Update User';
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  // created () {
  //   this.initialize()
  // },
  methods: {
    validate: function validate() {
      this.$refs.form.validate();
      this.save();
    },
    reset: function reset() {
      this.$refs.form.reset();
    },
    resetValidation: function resetValidation() {
      this.$refs.form.resetValidation();
    },
    editItem: function editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this = this;

      //  console.log(this.editedItem)
      axios.post('/delete_user', this.editedItem).then(function (response) {
        _this.getUser();
      });
      this.closeDelete();
    },
    close: function close() {
      var _this2 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this2.editedItem = Object.assign({}, _this2.defaultItem);
        _this2.editedIndex = -1;
      });
    },
    closeDelete: function closeDelete() {
      var _this3 = this;

      this.dialogDelete = false;
      this.$nextTick(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      });
    },
    save: function save() {
      var _this4 = this;

      if ("id" in this.editedItem) {
        axios.put('/update_user', this.editedItem).then(function (response) {
          _this4.getUser();

          _this4.close();
        });
      } else {
        axios.post('/add_user', this.editedItem).then(function (response) {
          _this4.getUser();

          _this4.close();
        });
      }

      this.resetValidation();
      this.reset();
    },
    getUser: function getUser() {
      var _this5 = this;

      axios.get('/user').then(function (response) {
        _this5.desserts = response.data;
      });
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    // console.log("Mounted!", location.href)
    this.getUser();
    axios.get('/roles').then(function (response) {
      _this6.select = response.data; // console.log(response.data)
    });
  },
  components: {
    BreadComponent: _BreadComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./resources/js/components/BreadComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/BreadComponent.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BreadComponent_vue_vue_type_template_id_2cc5eb90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreadComponent.vue?vue&type=template&id=2cc5eb90& */ "./resources/js/components/BreadComponent.vue?vue&type=template&id=2cc5eb90&");
/* harmony import */ var _BreadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreadComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/BreadComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BreadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BreadComponent_vue_vue_type_template_id_2cc5eb90___WEBPACK_IMPORTED_MODULE_0__.render,
  _BreadComponent_vue_vue_type_template_id_2cc5eb90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BreadComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/UserComponent.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserComponent_vue_vue_type_template_id_7f050fd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserComponent.vue?vue&type=template&id=7f050fd2& */ "./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2&");
/* harmony import */ var _UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/UserComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserComponent_vue_vue_type_template_id_7f050fd2___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserComponent_vue_vue_type_template_id_7f050fd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/BreadComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/BreadComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BreadComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BreadComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/UserComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BreadComponent.vue?vue&type=template&id=2cc5eb90&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/BreadComponent.vue?vue&type=template&id=2cc5eb90& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadComponent_vue_vue_type_template_id_2cc5eb90___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadComponent_vue_vue_type_template_id_2cc5eb90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadComponent_vue_vue_type_template_id_2cc5eb90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BreadComponent.vue?vue&type=template&id=2cc5eb90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BreadComponent.vue?vue&type=template&id=2cc5eb90&");


/***/ }),

/***/ "./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_7f050fd2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_7f050fd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_7f050fd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserComponent.vue?vue&type=template&id=7f050fd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BreadComponent.vue?vue&type=template&id=2cc5eb90&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BreadComponent.vue?vue&type=template&id=2cc5eb90& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-breadcrumbs", {
        attrs: { items: _vm.page },
        scopedSlots: _vm._u([
          {
            key: "divider",
            fn: function () {
              return [_c("v-icon", [_vm._v("mdi-chevron-right")])]
            },
            proxy: true,
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { flat: "" } },
    [
      _c(
        "v-card-text",
        [
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: { headers: _vm.headers, items: _vm.desserts },
            scopedSlots: _vm._u(
              [
                {
                  key: "top",
                  fn: function () {
                    return [
                      _c(
                        "v-form",
                        {
                          ref: "form",
                          model: {
                            value: _vm.valid,
                            callback: function ($$v) {
                              _vm.valid = $$v
                            },
                            expression: "valid",
                          },
                        },
                        [
                          _c(
                            "v-toolbar",
                            { attrs: { flat: "" } },
                            [
                              _c("v-toolbar-title", [_vm._v("Users")]),
                              _vm._v(" "),
                              _c("v-divider", {
                                staticClass: "mx-4",
                                attrs: { inset: "", vertical: "" },
                              }),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-dialog",
                                {
                                  attrs: { "max-width": "500px" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function (ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "v-btn",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  staticClass: "mb-2",
                                                  attrs: {
                                                    color: "primary",
                                                    dark: "",
                                                  },
                                                },
                                                "v-btn",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [
                                              _vm._v(
                                                "\r\n              Add User\r\n            "
                                              ),
                                            ]
                                          ),
                                        ]
                                      },
                                    },
                                  ]),
                                  model: {
                                    value: _vm.dialog,
                                    callback: function ($$v) {
                                      _vm.dialog = $$v
                                    },
                                    expression: "dialog",
                                  },
                                },
                                [
                                  _vm._v(" "),
                                  _c(
                                    "v-card",
                                    [
                                      _c("v-card-title", [
                                        _c("span", { staticClass: "text-h5" }, [
                                          _vm._v(_vm._s(_vm.formTitle)),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-text",
                                        [
                                          _c(
                                            "v-container",
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    {
                                                      attrs: {
                                                        cols: "12",
                                                        sm: "6",
                                                        md: "4",
                                                      },
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          rules: _vm.nameRules,
                                                          label: "Name",
                                                          required: "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.editedItem.name,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.editedItem,
                                                              "name",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "editedItem.name",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      attrs: {
                                                        cols: "12",
                                                        sm: "6",
                                                        md: "4",
                                                      },
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          rules: _vm.emailRules,
                                                          label: "Email Adress",
                                                          required: "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.editedItem
                                                              .email,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.editedItem,
                                                              "email",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "editedItem.email",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      attrs: {
                                                        cols: "12",
                                                        sm: "6",
                                                        md: "4",
                                                      },
                                                    },
                                                    [
                                                      _c("v-select", {
                                                        attrs: {
                                                          "item-text":
                                                            "display_name",
                                                          "item-value": "id",
                                                          items: _vm.select,
                                                          label: "Role",
                                                          rules: [
                                                            function (v) {
                                                              return (
                                                                !!v ||
                                                                "Item is required"
                                                              )
                                                            },
                                                          ],
                                                          required: "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.editedItem
                                                              .role_id,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.editedItem,
                                                              "role_id",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "editedItem.role_id",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-actions",
                                        [
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "blue darken-1",
                                                text: "",
                                              },
                                              on: { click: _vm.close },
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                Cancel\r\n              "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "mr-4",
                                              attrs: {
                                                disabled: !_vm.valid,
                                                color: "success",
                                              },
                                              on: { click: _vm.validate },
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                Save\r\n              "
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-dialog",
                                {
                                  attrs: { "max-width": "500px" },
                                  model: {
                                    value: _vm.dialogDelete,
                                    callback: function ($$v) {
                                      _vm.dialogDelete = $$v
                                    },
                                    expression: "dialogDelete",
                                  },
                                },
                                [
                                  _c(
                                    "v-card",
                                    [
                                      _c(
                                        "v-card-title",
                                        { staticClass: "text-h5" },
                                        [
                                          _vm._v(
                                            "Are you sure you want to delete this item?"
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-actions",
                                        [
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "blue darken-1",
                                                text: "",
                                              },
                                              on: { click: _vm.closeDelete },
                                            },
                                            [_vm._v("Cancel")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "blue darken-1",
                                                text: "",
                                              },
                                              on: {
                                                click: _vm.deleteItemConfirm,
                                              },
                                            },
                                            [_vm._v("OK")]
                                          ),
                                          _vm._v(" "),
                                          _c("v-spacer"),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  },
                  proxy: true,
                },
                {
                  key: "item.actions",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "" },
                          on: {
                            click: function ($event) {
                              return _vm.editItem(item)
                            },
                          },
                        },
                        [_vm._v("\r\n        mdi-pencil\r\n      ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          attrs: { small: "" },
                          on: {
                            click: function ($event) {
                              return _vm.deleteItem(item)
                            },
                          },
                        },
                        [_vm._v("\r\n        mdi-delete\r\n      ")]
                      ),
                    ]
                  },
                },
                {
                  key: "item.created_at",
                  fn: function (ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\r\n\r\n        " +
                          _vm._s(item.created_at.substr(item.created_at, 10)) +
                          "\r\n    \r\n    "
                      ),
                    ]
                  },
                },
              ],
              null,
              true
            ),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("BreadComponent", { attrs: { page: _vm.page } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);