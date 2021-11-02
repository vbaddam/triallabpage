const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/vasanth/Documents/personal/triallabpage/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/vasanth/Documents/personal/triallabpage/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/vasanth/Documents/personal/triallabpage/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/vasanth/Documents/personal/triallabpage/src/pages/index.js"))),
  "component---src-pages-members-js": hot(preferDefault(require("/Users/vasanth/Documents/personal/triallabpage/src/pages/members.js"))),
  "component---src-pages-publications-js": hot(preferDefault(require("/Users/vasanth/Documents/personal/triallabpage/src/pages/publications.js")))
}

