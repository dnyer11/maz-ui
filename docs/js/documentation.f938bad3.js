(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["documentation"],{"1cb7":function(t,e,n){},3069:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"documentation flex flex-1 pos-r"},[n("MazSidebar",{attrs:{width:250,dark:t.hasDarkTheme,absolute:t.isAbsolute},model:{value:t.hasLeftSidebarOpen,callback:function(e){t.hasLeftSidebarOpen=e},expression:"hasLeftSidebarOpen"}},[n("LeftSidebarContent")],1),n("div",{staticClass:"documentation__container flex direction-column flex-1"},["Install"!==t.$route.name&&"GetStarted"!==t.$route.name?n("div",{staticClass:"flex space-between px-5 py-3 align-center"},[n("h2",[t._v(" "+t._s(t._f("capitalize")(t.currentComponent))+" ")]),n("MazBtn",{on:{click:t.showOptions}},[t._v(" Show options ")])],1):t._e(),n("router-view",{staticClass:"px-5 py-3 flex-1"}),n("NavFooter")],1),"Install"!==t.$route.name&&"GetStarted"!==t.$route.name?n("MazSidebar",{attrs:{width:500,right:"",absolute:"","no-close-btn":"",dark:t.hasDarkTheme},model:{value:t.hasRightSidebarOpen,callback:function(e){t.hasRightSidebarOpen=e},expression:"hasRightSidebarOpen"}},[n("RightSidebarContent",{on:{close:function(e){t.hasRightSidebarOpen=!t.hasRightSidebarOpen}}})],1):t._e()],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-sidebar-content p-4 h-100"},[n("h3",{staticClass:"mb-3"},[t._v(" Development ")]),t._l(t.routesStartedDoc,(function(e){return n("router-link",{key:e.name,staticClass:"menu-item btn btn--white mb-2 w-100",attrs:{to:{name:e.name}}},[t._v(" "+t._s(t._f("capitalize")(t.getPageName(e.path)))+" ")])})),n("h3",{staticClass:"my-3"},[t._v(" Components ")]),n("div",{staticClass:"left-sidebar-content__content"},[n("h4",{staticClass:"my-3"},[t._v(" Form ")]),t._l(t.routesFormComponents,(function(e){return n("router-link",{key:e.name,staticClass:"menu-item btn btn--white w-100",attrs:{to:{name:e.name}}},[t._v(" "+t._s(t.getComponentName(e.name))+" ")])})),n("h4",{staticClass:"my-3"},[t._v(" User Interface ")]),t._l(t.routesUiComponents,(function(e){return n("router-link",{key:e.name,staticClass:"menu-item btn btn--white w-100",attrs:{to:{name:e.name}}},[t._v(" "+t._s(t.getComponentName(e.name))+" ")])}))],2)],2)},i=[],s=n("ed08"),c={name:"LeftSidebarContent",computed:{routesStartedDoc:function(){return this.$router.options.routes.filter((function(t){return"/documentation"===t.path}))[0].children.filter((function(t){return"Install"===t.name||"GetStarted"===t.name}))},routesFormComponents:function(){return this.$router.options.routes.filter((function(t){return"/documentation"===t.path}))[0].children.filter((function(t){return"Install"!==t.name&&"GetStarted"!==t.name})).slice(0,6)},routesUiComponents:function(){return this.$router.options.routes.filter((function(t){return"/documentation"===t.path}))[0].children.filter((function(t){return"Install"!==t.name&&"GetStarted"!==t.name})).slice(6)}},methods:{getComponentName:function(t){return Object(s["a"])(t.slice(0,-3))},getPageName:function(t){return Object(s["b"])(t,"-"," ")}}},u=c,l=(n("3a7a"),n("2877")),f=Object(l["a"])(u,o,i,!1,null,"3709f048",null),m=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-sidebar-content p-2"},[n("div",{staticClass:"flex space-between"},[n("h3",{staticClass:"mb-2"},[t._v(" "+t._s(t._f("capitalize")(t.currentComponent))+" ")]),n("MazBtn",{attrs:{rounded:"",outline:"",size:"sm"},on:{click:function(e){return t.$emit("close")}}},[t._v(" X ")])],1),t.currentProps.length?n("div",{staticClass:"props-api"},[n("h4",{staticClass:"mb-2"},[t._v(" Props API ")]),n("table",{staticClass:"md"},[t._m(0),t._l(t.currentProps,(function(e,a){return n("tr",{key:a,staticClass:"prop"},[n("td",[t._v(t._s(t._f("kebab")(e[0])))]),e[1].type?n("td",[t._v(" "+t._s(e[1].type.name)+" ")]):n("td",{staticClass:"text-muted"},[t._v(" "+t._s("Multiple")+" ")]),n("td",{class:{"text-muted":!1!==e[1].default&&!e[1].default}},[t._v(" "+t._s(("function"===typeof e[1].default?e[1].default.name:!1===e[1].default?"false":e[1].default)||"null")+" ")]),n("td",{class:{"text-muted":!e[1].required}},[t._v(" "+t._s(e[1].required||"false")+" ")])])}))],2)]):n("div",[t._v(" No option ")])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Props")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Required")])])}],h=n("34e9"),b={name:"RightSidebarContent",components:{MazBtn:h["a"],MazBtnGroup:h["b"],MazInput:h["f"],MazSelect:h["j"],MazSwitch:h["m"],MazCheckbox:h["c"],MazDialog:h["e"],MazLoader:h["g"],MazSidebar:h["k"],MazPagination:h["h"],MazPhoneNumberInput:h["i"],MazSpinner:h["l"],MazTransitionExpand:h["n"],MazCollapse:h["d"]},computed:{currentComponent:function(){return this.$route.name.slice(0,-3)},currentProps:function(){var t=this.$options.components[this.currentComponent].props;return t?Object.entries(t):[]}}},v=b,_=(n("9f0c0"),Object(l["a"])(v,p,d,!1,null,"04ac4469",null)),C=_.exports,g=n("cef0"),O=n("2f62");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y={name:"Documentation",components:{LeftSidebarContent:m,RightSidebarContent:C,NavFooter:g["a"]},data:function(){return{hasLeftSidebarOpen:!(window.innerWidth<767),hasRightSidebarOpen:!1,isAbsolute:window.innerWidth<767}},computed:S({},Object(O["c"])(["hasDarkTheme"]),{currentComponent:function(){return this.$route.name.slice(0,-3)}}),methods:{showOptions:function(){this.hasRightSidebarOpen=!this.hasRightSidebarOpen}}},z=y,k=(n("c916"),Object(l["a"])(z,a,r,!1,null,"3a9da411",null));e["default"]=k.exports},"3a7a":function(t,e,n){"use strict";var a=n("5964"),r=n.n(a);r.a},5674:function(t,e,n){},5964:function(t,e,n){},"63a4":function(t,e,n){},"836f":function(t,e,n){t.exports=n.p+"img/logo-vue-mazel-ui.c869f72a.png"},"87e7":function(t,e,n){"use strict";var a=n("63a4"),r=n.n(a);r.a},"9f0c0":function(t,e,n){"use strict";var a=n("1cb7"),r=n.n(a);r.a},c916:function(t,e,n){"use strict";var a=n("5674"),r=n.n(a);r.a},cef0:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"nav-footer flex-fixed",attrs:{role:"contentinfo"}},[n("nav",{staticClass:"nav-footer-content container flex align-center space-between py-4"},[n("div",{staticClass:"flex hidden-tablet"},[n("RouterLink",{staticClass:"mr-3",attrs:{to:{name:"Home"}}},[t._v(" Home ")]),n("RouterLink",{attrs:{to:{name:"Documentation"}}},[t._v(" Documentation ")])],1),t._m(0),n("div",{staticClass:"flex align-center"},[n("SocialButtons",{staticClass:"mr-2"}),n("VersionNumber")],1)]),t._m(1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-footer-content__logo hidden-tablet"},[a("img",{staticClass:"nav-footer-content__logo__img",attrs:{src:n("836f"),alt:"logo-loic-mazuel"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-footer-subs py-2"},[n("div",{staticClass:"container flex justify-end"},[n("a",{staticClass:"flex align-center",attrs:{href:"https://www.loicmazuel.com/",target:"_blank"}},[n("p",{staticClass:"fs-14"},[t._v(" © Loïc Mazuel | Website made with VueJS ")])])])])}],o=n("2eb3"),i=n("54de"),s={name:"NavFooter",components:{SocialButtons:o["a"],VersionNumber:i["a"]}},c=s,u=(n("87e7"),n("2877")),l=Object(u["a"])(c,a,r,!1,null,"39cd9126",null);e["a"]=l.exports}}]);
//# sourceMappingURL=documentation.f938bad3.js.map