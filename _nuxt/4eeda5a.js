(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{254:function(t,e,r){var content=r(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("56acde00",content,!0,{sourceMap:!1})},256:function(t,e,r){var content=r(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("0588d676",content,!0,{sourceMap:!1})},257:function(t,e,r){"use strict";r(254)},258:function(t,e,r){var c=r(77)(!1);c.push([t.i,".article-card__link[data-v-0ea3c2bb]{text-decoration:none}.article-card__footer[data-v-0ea3c2bb]{font-size:var(--font-size-tertiary);color:var(--grey-1);margin-top:8px}",""]),t.exports=c},259:function(t,e,r){"use strict";r.r(e);var c={name:"ArticlePreview",props:{createdAt:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},slug:{type:String,required:!0},readingTime:{type:Object,required:!0}}},l=(r(257),r(48)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"article-card"},[r("NuxtLink",{staticClass:"article-card__link",attrs:{to:"/articles/"+t.slug}},[r("h2",[t._v(t._s(t.title))]),t._v(" "),t.description?r("h3",{staticClass:"description"},[t._v("\n      "+t._s(t.description)+"\n    ")]):t._e()]),t._v(" "),r("div",{staticClass:"article-card__footer jz-flex-row"},[r("span",[t._v(t._s(t._f("formatDate")(t.createdAt)))]),t._v(" "),r("span",[t._v("·")]),t._v(" "),r("span",[t._v(t._s(t.readingTime.text))])])],1)}),[],!1,null,"0ea3c2bb",null);e.default=component.exports},262:function(t,e,r){"use strict";r(256)},263:function(t,e,r){var c=r(77)(!1);c.push([t.i,".article-card-list .article-card[data-v-7e6e6751]{margin-bottom:30px}",""]),t.exports=c},266:function(t,e,r){"use strict";r.r(e);var c={name:"ArticleList",props:{articles:{type:Array,required:!0}}},l=(r(262),r(48)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-card-list"},t._l(t.articles,(function(article){return r("article-card",t._b({key:article.slug,staticClass:"article-card"},"article-card",article,!1))})),1)}),[],!1,null,"7e6e6751",null);e.default=component.exports;installComponents(component,{ArticleCard:r(259).default})}}]);