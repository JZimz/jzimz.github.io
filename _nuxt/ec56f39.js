(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{269:function(t,e,n){"use strict";n.r(e);n(66),n(28),n(63);var o={name:"RedirectLink",props:{msg:{type:String,default:"Sending you somewhere else."},to:{type:String,required:!0},toDeep:{type:String,default:null}},mounted:function(){var t=this;this.toDeep?(this.navTo(this.toDeep),setTimeout((function(){t.navTo(t.to)}),1e3)):this.navTo(this.to)},methods:{navTo:function(t){window.location.replace(this.to)}}},r=n(60),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  "+t._s(t.msg)+" If you are not redirected automatically,\n  "),n("a",{attrs:{href:t.to}},[t._v(" click here ")]),t._v(".\n")])}),[],!1,null,null,null);e.default=component.exports}}]);