const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("D:\\Git\\Cursos\\StudyFlow\\Gatsby\\my-blog\\node_modules\\gatsby-plugin-offline\\app-shell.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("D:\\Git\\Cursos\\StudyFlow\\Gatsby\\my-blog\\src\\templates\\blog-post.js"))),
  "component---src-templates-blog-list-js": hot(preferDefault(require("D:\\Git\\Cursos\\StudyFlow\\Gatsby\\my-blog\\src\\templates\\blog-list.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Git\\Cursos\\StudyFlow\\Gatsby\\my-blog\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("D:\\Git\\Cursos\\StudyFlow\\Gatsby\\my-blog\\src\\pages\\about.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("D:\\Git\\Cursos\\StudyFlow\\Gatsby\\my-blog\\src\\pages\\search.js")))
}

