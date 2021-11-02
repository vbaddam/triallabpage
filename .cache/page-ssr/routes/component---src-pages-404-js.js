"use strict";
exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 3346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/Users/vasanth/Documents/personal/triallabpage/node_modules/react/index.js"
var index_js_ = __webpack_require__(2605);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/components/Navbar.js
const Navbar=()=>{return/*#__PURE__*/index_js_default().createElement("div",{className:"section"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:"navbar-wrapper"},/*#__PURE__*/index_js_default().createElement("div",{className:"name"},"Machine Learning Laboratory @VT"),/*#__PURE__*/index_js_default().createElement("a",{href:"#",className:"toggle-button"},/*#__PURE__*/index_js_default().createElement("span",{className:"bar"}),/*#__PURE__*/index_js_default().createElement("span",{className:"bar"}),/*#__PURE__*/index_js_default().createElement("span",{className:"bar"}),/*#__PURE__*/index_js_default().createElement("span",{className:"bar"}),/*#__PURE__*/index_js_default().createElement("spam",{className:"bar"})),/*#__PURE__*/index_js_default().createElement("div",{className:"links-wrapper"},/*#__PURE__*/index_js_default().createElement("ul",null,/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/"},"Home")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/about"},"About")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/publications"},"Publications")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/members"},"Members")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/about"},"Resources")))))));};/* harmony default export */ const components_Navbar = (Navbar);// <li><button onClick={() => scrollTo("#about")}>About</button></li>
;// CONCATENATED MODULE: ./src/components/layout.js
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */const Layout=({children})=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(components_Navbar,null),/*#__PURE__*/index_js_default().createElement("main",null,children));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 6179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2605);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4593);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2031);
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */function SEO({description,lang,meta,title}){var _site$siteMetadata,_site$siteMetadata2;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_3__.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet,{htmlAttributes:{lang},title:title,titleTemplate:defaultTitle?`%s | ${defaultTitle}`:null,meta:[{name:`description`,content:metaDescription},{property:`og:title`,content:title},{property:`og:description`,content:metaDescription},{property:`og:type`,content:`website`},{name:`twitter:card`,content:`summary`},{name:`twitter:creator`,content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||``},{name:`twitter:title`,content:title},{name:`twitter:description`,content:metaDescription}].concat(meta)});}SEO.defaultProps={lang:`en`,meta:[],description:``};SEO.propTypes={description:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),lang:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),meta:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ 9616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2605);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3346);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6179);
const NotFoundPage=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{title:"404: Not found"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",null,"404: Not Found"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"You just hit a route that doesn't exist... the sadness."));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map