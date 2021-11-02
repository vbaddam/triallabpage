
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/vasanth/Documents/personal/triallabpage/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/vasanth/Documents/personal/triallabpage/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/vasanth/Documents/personal/triallabpage/src/pages/index.js")),
  "component---src-pages-members-js": preferDefault(require("/Users/vasanth/Documents/personal/triallabpage/src/pages/members.js")),
  "component---src-pages-publications-js": preferDefault(require("/Users/vasanth/Documents/personal/triallabpage/src/pages/publications.js"))
}

