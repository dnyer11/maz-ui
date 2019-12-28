(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["documentation"],{"04ec":function(t,e,n){},"0bd9":function(t,e,n){"use strict";var a=n("8e20"),r=n.n(a);r.a},"1a99":function(t,e,n){},"1a9e":function(t,e,n){"use strict";var a=n("1a99"),r=n.n(a);r.a},3069:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"documentation flex flex-1 pos-r"},[n("MazSidebar",{attrs:{width:250,absolute:t.isAbsolute},model:{value:t.hasLeftSidebarOpen,callback:function(e){t.hasLeftSidebarOpen=e},expression:"hasLeftSidebarOpen"}},[n("LeftSidebarContent")],1),n("div",{staticClass:"documentation__container flex direction-column flex-1"},["Install"!==t.$route.name&&"GetStarted"!==t.$route.name?n("div",{staticClass:"flex space-between px-5 py-3 align-center"},[n("h2",[t._v(" "+t._s(t._f("capitalize")(t.currentComponent))+" ")]),n("div",{staticClass:"flex-fixed"},[n("MazBtn",{staticClass:"mr-2",attrs:{outline:""},on:{click:function(e){return t.setDarkTheme(!t.hasDarkTheme)}}},[t._v(" Toggle Dark Mode ")]),n("MazBtn",{attrs:{color:"info"},on:{click:t.showOptions}},[t._v(" Show options ")])],1)]):t._e(),n("router-view",{staticClass:"px-5 py-3 flex-1"}),n("NavFooter")],1),"Install"!==t.$route.name&&"GetStarted"!==t.$route.name?n("MazSidebar",{attrs:{width:500,right:"",absolute:"","no-close-btn":""},model:{value:t.hasRightSidebarOpen,callback:function(e){t.hasRightSidebarOpen=e},expression:"hasRightSidebarOpen"}},[n("RightSidebarContent",{on:{close:function(e){t.hasRightSidebarOpen=!t.hasRightSidebarOpen}}})],1):t._e()],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-sidebar-content p-4 h-100"},[n("h3",{staticClass:"mb-3"},[t._v(" Development ")]),t._l(t.routesStartedDoc,(function(e){return n("router-link",{key:e.name,staticClass:"menu-item btn btn--white mb-2 w-100",attrs:{to:{name:e.name}}},[t._v(" "+t._s(t._f("capitalize")(t.getPageName(e.path)))+" ")])})),n("h3",{staticClass:"my-3"},[t._v(" Components ")]),n("div",{staticClass:"left-sidebar-content__content"},[n("h4",{staticClass:"my-3"},[t._v(" Form ")]),t._l(t.routesFormComponents,(function(e){return n("router-link",{key:e.name,staticClass:"menu-item btn btn--white w-100",attrs:{to:{name:e.name}}},[t._v(" "+t._s(t.getComponentName(e.name))+" ")])})),n("h4",{staticClass:"my-3"},[t._v(" User Interface ")]),t._l(t.routesUiComponents,(function(e){return n("router-link",{key:e.name,staticClass:"menu-item btn btn--white w-100",attrs:{to:{name:e.name}}},[t._v(" "+t._s(t.getComponentName(e.name))+" ")])}))],2)],2)},i=[],s=n("ed08"),c={name:"LeftSidebarContent",computed:{routesStartedDoc:function(){return this.$router.options.routes.filter((function(t){return"/documentation"===t.path}))[0].children.filter((function(t){return"Install"===t.name||"GetStarted"===t.name}))},routesFormComponents:function(){return this.$router.options.routes.filter((function(t){return"/documentation"===t.path}))[0].children.filter((function(t){return"Install"!==t.name&&"GetStarted"!==t.name})).slice(0,8)},routesUiComponents:function(){return this.$router.options.routes.filter((function(t){return"/documentation"===t.path}))[0].children.filter((function(t){return"Install"!==t.name&&"GetStarted"!==t.name})).slice(8)}},methods:{getComponentName:function(t){return Object(s["a"])(t.slice(0,-3))},getPageName:function(t){return Object(s["b"])(t,"-"," ")}}},l=c,u=(n("54f9"),n("2877")),f=Object(u["a"])(l,o,i,!1,null,"34147950",null),m=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-sidebar-content p-2"},[n("div",{staticClass:"flex space-between"},[n("h3",{staticClass:"mb-2"},[t._v(" "+t._s(t._f("capitalize")(t.currentComponent))+" ")]),n("MazBtn",{attrs:{rounded:"",outline:"",size:"sm"},on:{click:function(e){return t.$emit("close")}}},[t._v(" X ")])],1),t.currentProps.length?n("div",{staticClass:"props-api"},[n("h4",{staticClass:"mb-2"},[t._v(" Props API ")]),n("table",{staticClass:"md"},[t._m(0),t._l(t.currentProps,(function(e,a){return n("tr",{key:a,staticClass:"prop"},[n("td",[t._v(t._s(t._f("kebab")(e[0])))]),e[1].type?n("td",[t._v(" "+t._s(e[1].type.name)+" ")]):n("td",{staticClass:"text-muted"},[t._v(" "+t._s("Multiple")+" ")]),n("td",{class:{"text-muted":!1!==e[1].default&&!e[1].default}},[t._v(" "+t._s(("function"===typeof e[1].default?e[1].default.name:!1===e[1].default?"false":e[1].default)||"null")+" ")]),n("td",{class:{"text-muted":!e[1].required}},[t._v(" "+t._s(e[1].required||"false")+" ")])])}))],2)]):n("div",[t._v(" No option ")])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Props")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Required")])])}],h=n("34e9"),b={name:"RightSidebarContent",components:{MazBtn:h["a"],MazBtnGroup:h["b"],MazInput:h["g"],MazSelect:h["k"],MazSwitch:h["n"],MazCheckbox:h["c"],MazDialog:h["e"],MazDropzone:h["f"],MazLoader:h["h"],MazSidebar:h["l"],MazPagination:h["i"],MazPhoneNumberInput:h["j"],MazSpinner:h["m"],MazTransitionExpand:h["o"],MazCollapse:h["d"]},computed:{currentComponent:function(){return this.$route.name.slice(0,-3)},currentProps:function(){var t=this.$options.components[this.currentComponent].props;return t?Object.entries(t):[]}}},v=b,_=(n("1a9e"),Object(u["a"])(v,d,p,!1,null,"0d626dca",null)),C=_.exports,g=n("cef0"),O=n("2f62");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var z={name:"Documentation",components:{LeftSidebarContent:m,RightSidebarContent:C,NavFooter:g["a"]},data:function(){return{hasLeftSidebarOpen:!(window.innerWidth<767),hasRightSidebarOpen:!1,isAbsolute:window.innerWidth<767}},computed:S({},Object(O["c"])(["hasDarkTheme"]),{currentComponent:function(){return this.$route.name.slice(0,-3)}}),methods:S({},Object(O["b"])(["setDarkTheme"]),{showOptions:function(){this.hasRightSidebarOpen=!this.hasRightSidebarOpen}})},y=z,k=(n("def2"),Object(u["a"])(y,a,r,!1,null,"b668aa9a",null));e["default"]=k.exports},"3f3c":function(t,e,n){},"54f9":function(t,e,n){"use strict";var a=n("04ec"),r=n.n(a);r.a},"8e20":function(t,e,n){},bf10:function(t,e,n){t.exports=n.p+"img/logo-maz-ui.c869f72a.png"},cef0:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"nav-footer flex-fixed",attrs:{role:"contentinfo"}},[n("nav",{staticClass:"nav-footer-content container flex align-center space-between py-4"},[n("div",{staticClass:"flex hidden-tablet"},[n("RouterLink",{staticClass:"mr-3",attrs:{to:{name:"Home"}}},[t._v(" Home ")]),n("RouterLink",{attrs:{to:{name:"Documentation"}}},[t._v(" Documentation ")])],1),t._m(0),n("div",{staticClass:"flex align-center"},[n("SocialButtons",{staticClass:"mr-2"}),n("VersionNumber")],1)]),t._m(1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-footer-content__logo hidden-tablet flex align-center"},[a("img",{staticClass:"nav-footer-content__logo__img",attrs:{src:n("bf10"),alt:"logo-loic-mazuel"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-footer-subs py-2"},[n("div",{staticClass:"container flex justify-end"},[n("a",{staticClass:"flex align-center",attrs:{href:"https://www.loicmazuel.com/",target:"_blank"}},[n("p",{staticClass:"fs-14"},[t._v(" © Loïc Mazuel | Website made with VueJS ")])])])])}],o=n("2eb3"),i=n("54de"),s={name:"NavFooter",components:{SocialButtons:o["a"],VersionNumber:i["a"]}},c=s,l=(n("0bd9"),n("2877")),u=Object(l["a"])(c,a,r,!1,null,"79700f5e",null);e["a"]=u.exports},def2:function(t,e,n){"use strict";var a=n("3f3c"),r=n.n(a);r.a}}]);
//# sourceMappingURL=documentation.c75ee35a.js.map