webpackJsonp([4],{140:function(t,e,r){r(163);var o=r(122)(r(149),r(170),null,null);t.exports=o.exports},149:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{canGoBack:window.history.length>1}},methods:{goBack:function(){window.history.go(-1)}}}},157:function(t,e,r){e=t.exports=r(137)(),e.push([t.i,".error-page .error-code{height:50vh;width:100%;padding-top:15vh;font-size:30vmax;color:hsla(0,0%,100%,.2);overflow:hidden}.error-page .error-card{margin-top:-25px;width:90vw;max-width:600px;padding:50px}.error-page .error-card i{font-size:5rem}",""])},163:function(t,e,r){var o=r(157);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r(138)("0844e03e",o,!0)},170:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layout-padding"},[r("div",{staticClass:"error-page bg-light column items-center"},[r("div",{staticClass:"error-code bg-primary flex items-center justify-center"},[t._v("\r\n      404\r\n    ")]),t._v(" "),r("div",[r("div",{staticClass:"error-card card bg-white column items-center justify-center"},[r("i",{staticClass:"text-grey-5"},[t._v("error_outline")]),t._v(" "),r("p",{staticClass:"caption text-center"},[t._v("Oops. Nothing here...")]),t._v(" "),r("p",{staticClass:"text-center group"},[t.canGoBack?r("button",{staticClass:"grey push small",on:{click:t.goBack}},[r("i",{staticClass:"on-left"},[t._v("keyboard_arrow_left")]),t._v("\r\n            Go back\r\n          ")]):t._e(),t._v(" "),r("router-link",{attrs:{to:"/"}},[r("button",{staticClass:"grey push small"},[t._v("\r\n              Go home\r\n              "),r("i",{staticClass:"on-right"},[t._v("home")])])])],1)])])])])},staticRenderFns:[]}}});