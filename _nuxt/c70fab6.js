(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6,7,9],{254:function(t,e,o){var content=o(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(78).default)("c4b49c5c",content,!0,{sourceMap:!1})},255:function(t,e,o){var content=o(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(78).default)("04e2f6f8",content,!0,{sourceMap:!1})},256:function(t,e,o){var content=o(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(78).default)("77528a20",content,!0,{sourceMap:!1})},257:function(t,e,o){"use strict";o(254)},258:function(t,e,o){var r=o(77)(!1);r.push([t.i,".blog-post-preview__link[data-v-4ae13066]{text-decoration:none}.blog-post-preview__footer[data-v-4ae13066]{font-size:var(--font-size-tertiary);color:var(--grey-1);margin-top:8px}",""]),t.exports=r},259:function(t,e,o){"use strict";o.r(e);var r={name:"BlogPostPreview",props:{createdAt:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},slug:{type:String,required:!0},readingTime:{type:Object,required:!0}}},n=(o(257),o(48)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"blog-post-preview"},[o("NuxtLink",{staticClass:"blog-post-preview__link",attrs:{to:"/blog/"+t.slug}},[o("h2",[t._v(t._s(t.title))]),t._v(" "),t.description?o("h3",{staticClass:"description"},[t._v("\n      "+t._s(t.description)+"\n    ")]):t._e()]),t._v(" "),o("div",{staticClass:"blog-post-preview__footer jz-flex-row"},[o("span",[t._v(t._s(t._f("formatDate")(t.createdAt)))]),t._v(" "),o("span",[t._v("·")]),t._v(" "),o("span",[t._v(t._s(t.readingTime.text))])])],1)}),[],!1,null,"4ae13066",null);e.default=component.exports},260:function(t,e,o){"use strict";o(255)},261:function(t,e,o){var r=o(77)(!1);r.push([t.i,".site-nav[data-v-027bad91]{width:100%;padding-bottom:40px}.site-nav ul[data-v-027bad91]{display:flex;justify-content:center;padding:0;margin:0}.site-nav ul[data-v-027bad91],.site-nav ul li[data-v-027bad91]{list-style:none}.site-nav ul li[data-v-027bad91]:not(:last-child){margin-right:20px}.site-nav ul li a[data-v-027bad91]{color:var(--grey-1);text-decoration:none}.site-nav ul li a.nuxt-link-exact-active[data-v-027bad91],.site-nav ul li a[data-v-027bad91]:hover{color:var(--color);transition:color .3s}",""]),t.exports=r},262:function(t,e,o){"use strict";o(256)},263:function(t,e,o){var r=o(77)(!1);r.push([t.i,".blog-post-preview-list .blog-post-preview[data-v-ce3e8b1e]{margin-bottom:30px}",""]),t.exports=r},265:function(t,e,o){"use strict";o.r(e);var r={name:"TheNav"},n=(o(260),o(48)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"site-nav"},[o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1)])])}),[],!1,null,"027bad91",null);e.default=component.exports},266:function(t,e,o){"use strict";o.r(e);var r={name:"BlogPostPreviewList",props:{posts:{type:Array,required:!0}}},n=(o(262),o(48)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog-post-preview-list"},t._l(t.posts,(function(e){return o("blog-post-preview",t._b({key:e.slug,staticClass:"blog-post-preview"},"blog-post-preview",e,!1))})),1)}),[],!1,null,"ce3e8b1e",null);e.default=component.exports;installComponents(component,{BlogPostPreview:o(259).default})},271:function(t,e,o){var content=o(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(78).default)("0c40b1a0",content,!0,{sourceMap:!1})},276:function(t,e,o){"use strict";o(271)},277:function(t,e,o){var r=o(77)(!1);r.push([t.i,".page-blog-posts[data-v-9af923be]{padding:40px 20px;display:flex;flex-direction:column;align-items:center}.page-blog-posts__list[data-v-9af923be]{max-width:520px}",""]),t.exports=r},297:function(t,e,o){"use strict";o.r(e);var r=o(8),n=(o(42),{name:"PageBlogPosts",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,t.params,e.next=3,o("blog-posts").only(["title","slug","createdAt","description","readingTime"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{posts:r});case 5:case"end":return e.stop()}}),e)})))()}}),l=(o(276),o(48)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-blog-posts"},[o("the-nav"),t._v(" "),o("blog-post-preview-list",{staticClass:"page-blog-posts__list",attrs:{posts:t.posts}})],1)}),[],!1,null,"9af923be",null);e.default=component.exports;installComponents(component,{TheNav:o(265).default,BlogPostPreviewList:o(266).default})}}]);