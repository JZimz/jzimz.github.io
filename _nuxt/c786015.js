(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6,8],{255:function(t,e,o){var content=o(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(78).default)("0feb5f9a",content,!0,{sourceMap:!1})},260:function(t,e,o){"use strict";o(255)},261:function(t,e,o){var r=o(77)(!1);r.push([t.i,".site-nav[data-v-466f11f2]{width:100%;padding-bottom:40px}.site-nav ul[data-v-466f11f2]{display:flex;justify-content:center;padding:0;margin:0}.site-nav ul[data-v-466f11f2],.site-nav ul li[data-v-466f11f2]{list-style:none}.site-nav ul li[data-v-466f11f2]:not(:last-child){margin-right:20px}.site-nav ul li a[data-v-466f11f2]{color:var(--grey-1);text-decoration:none}.site-nav ul li a.nuxt-link-exact-active[data-v-466f11f2],.site-nav ul li a[data-v-466f11f2]:hover{color:var(--color);transition:color .3s}",""]),t.exports=r},264:function(t,e,o){var content=o(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(78).default)("98d5f2e8",content,!0,{sourceMap:!1})},265:function(t,e,o){"use strict";o.r(e);var r={name:"TheNav"},n=(o(260),o(48)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"site-nav"},[o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/articles"}},[t._v("Articles")])],1)])])}),[],!1,null,"466f11f2",null);e.default=component.exports},267:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));o(43),o(25);function r(t){return Object.keys(t).map((function(e){return{hid:e,name:e,content:t[e]}}))}},269:function(t,e,o){"use strict";o(264)},270:function(t,e,o){var r=o(77)(!1);r.push([t.i,".article-footer[data-v-ee5fbb4c]{text-align:center;padding:0 100px}.article-footer__title[data-v-ee5fbb4c]{margin-bottom:10px}.article-footer__content[data-v-ee5fbb4c]{margin-bottom:20px}.article-footer .action-link[data-v-ee5fbb4c]{padding:10px 20px;background:var(--color);color:var(--bg);border-radius:4px;text-decoration:none;font-size:var(--font-size-secondary);display:inline-flex}.article-footer .action-link svg[data-v-ee5fbb4c]{margin-right:10px;fill:var(--bg)}",""]),t.exports=r},272:function(t,e,o){var content=o(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(78).default)("5ff85224",content,!0,{sourceMap:!1})},274:function(t,e,o){"use strict";o.r(e);var r={components:{TwitterIcon:o(268).e}},n=(o(269),o(48)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"article-footer"},[t._m(0),t._v(" "),o("div",{staticClass:"article-footer__content"},[t._v("\n    Hopefully it was helpful. Follow me on Twitter where I post similar\n    content and connect with fellow gamers.\n  ")]),t._v(" "),o("div",{staticClass:"article-footer__actions"},[o("a",{staticClass:"action-link jz-flex-row",attrs:{href:"https://twitter.com/jzimz",target:"_blank"}},[o("twitter-icon"),t._v(" Follow me on Twitter\n    ")],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"article-footer__title"},[o("strong",[t._v("Thanks for reading!")])])}],!1,null,"ee5fbb4c",null);e.default=component.exports},277:function(t,e,o){"use strict";o(272)},278:function(t,e,o){var r=o(77)(!1);r.push([t.i,".page-blog-post[data-v-38b8429e]{display:flex;flex-direction:column;align-items:center;padding:40px 20px}.page-blog-post__sidebar[data-v-38b8429e]{width:100%;position:fixed;top:0;display:flex;justify-content:center;margin-right:600px}.page-blog-post__sidebar .sidebar-body[data-v-38b8429e]{width:200px}.page-blog-post .blog-post[data-v-38b8429e]{width:100%;max-width:680px}.page-blog-post .blog-post__header .meta[data-v-38b8429e]{display:flex;align-items:center;font-size:var(--font-size-tertiary);color:var(--grey-1);margin-top:20px}.page-blog-post .blog-post__header .meta[data-v-38b8429e]>:not(:last-child){margin-right:6px}.page-blog-post .blog-post__header .meta .author-name[data-v-38b8429e]{text-decoration:none;color:var(--grey-1);font-weight:var(--font-weight-semi-bold)}.page-blog-post .blog-post__header .meta .author-profile-pic[data-v-38b8429e]{border-radius:50%;height:28px;width:28px}.page-blog-post .divider[data-v-38b8429e]{border:1px solid var(--border-color);margin:40px 100px}",""]),t.exports=r},295:function(t,e,o){"use strict";o.r(e);var r=o(8),n=(o(23),o(50),o(42),o(267)),l="jzimz.com",c={name:"PageBlog",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,r=t.params,e.next=3,o("articles",r.slug).fetch();case 3:return n=e.sent,e.abrupt("return",{page:n});case 5:case"end":return e.stop()}}),e)})))()},head:function(){var t=this.page,e=t.slug,title=t.title,o=t.description,r=t.thumbnail;return{htmlAttrs:{prefix:"og: https://ogp.me/ns#"},title:"JZimz | ".concat(title),meta:Object(n.a)({"twitter:card":"summary_large_image","twitter:site":"@jzimz","twitter:creator":"@jzimz","og:url":"https://".concat(l,"/articles/").concat(e),"og:title":title,"og:description":o,"og:image":"https://".concat(l).concat(r)})}}},f=(o(277),o(48)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-blog-post"},[o("the-nav"),t._v(" "),o("article",{staticClass:"blog-post"},[o("div",{staticClass:"blog-post__header"},[o("h1",[t._v(t._s(t.page.title))]),t._v(" "),o("h3",[t._v(t._s(t.page.description))]),t._v(" "),o("div",[o("div",{staticClass:"meta jz-flex-row"},[o("img",{staticClass:"author-profile-pic",attrs:{src:"/img/profile.png",alt:"Author profile picture"}}),t._v(" "),o("nuxt-link",{staticClass:"author-name",attrs:{to:"/"}},[t._v(" Jason Sims ")]),t._v(" "),o("span",[t._v(t._s(t._f("formatDate")(t.page.createdAt)))]),t._v(" "),o("span",[t._v("·")]),t._v(" "),o("span",[t._v(t._s(t.page.readingTime.text))])],1)])]),t._v(" "),o("nuxt-content",{staticClass:"blog-post__content",attrs:{document:t.page}}),t._v(" "),t._m(0),t._v(" "),o("article-footer")],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"divider"})])}],!1,null,"38b8429e",null);e.default=component.exports;installComponents(component,{TheNav:o(265).default,ArticleFooter:o(274).default})}}]);