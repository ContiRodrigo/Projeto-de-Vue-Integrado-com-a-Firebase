(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),i=n("da84"),s=n("c65b"),o=n("e330"),a=n("1626"),c=n("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),l=i.Error,h=o(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!a(t))return h(this,e);var n=s(t,this,e);if(null!==n&&!c(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),s=n("40d5"),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},"0481":function(e,t,n){"use strict";var r=n("23e7"),i=n("a2bf"),s=n("7b0b"),o=n("07fa"),a=n("5926"),c=n("65f0");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=s(this),n=o(t),r=c(t,0);return r.length=i(r,t,t,n,0,void 0===e?1:a(e)),r}})},"04d1":function(e,t,n){var r=n("342f"),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},"0538":function(e,t,n){"use strict";var r=n("da84"),i=n("e330"),s=n("59ed"),o=n("861d"),a=n("1a2d"),c=n("f36a"),u=n("40d5"),l=r.Function,h=i([].concat),d=i([].join),f={},p=function(e,t,n){if(!a(f,t)){for(var r=[],i=0;i<t;i++)r[i]="a["+i+"]";f[t]=l("C,a","return new C("+d(r,",")+")")}return f[t](e,n)};e.exports=u?l.bind:function(e){var t=s(this),n=t.prototype,r=c(arguments,1),i=function(){var n=h(r,c(arguments));return this instanceof i?p(t,n.length,n):t.apply(e,n)};return o(n)&&(i.prototype=n),i}},"057f":function(e,t,n){var r=n("c6b6"),i=n("fc6a"),s=n("241c").f,o=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return s(e)}catch(t){return o(a)}};e.exports.f=function(e){return a&&"Window"==r(e)?c(e):s(i(e))}},"06c5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3"),n("ac1f"),n("00b4");var r=n("6b75");function i(e,t){if(e){if("string"===typeof e)return Object(r["a"])(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(e,t):void 0}}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},"0789":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return h})),n.d(t,"a",(function(){return d}));n("99af");var r=n("d9f7");function i(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return(e=Array()).concat.apply(e,[t].concat(r))}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:t}},render:function(t,n){var s="transition".concat(n.props.group?"-group":""),o={props:{name:e,mode:n.props.mode},on:{beforeEnter:function(e){e.style.transformOrigin=n.props.origin,e.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=i(o.on.leave,(function(e){var t=e.offsetTop,n=e.offsetLeft,r=e.offsetWidth,i=e.offsetHeight;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=t+"px",e.style.left=n+"px",e.style.width=r+"px",e.style.height=i+"px"})),o.on.afterLeave=i(o.on.afterLeave,(function(e){if(e&&e._transitionInitialStyles){var t=e._transitionInitialStyles,n=t.position,r=t.top,i=t.left,s=t.width,o=t.height;delete e._transitionInitialStyles,e.style.position=n||"",e.style.top=r||"",e.style.left=i||"",e.style.width=s||"",e.style.height=o||""}}))),n.props.hideOnLeave&&(o.on.leave=i(o.on.leave,(function(e){e.style.setProperty("display","none","important")}))),t(s,Object(r["a"])(n.data,o),n.children)}}}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:e,functional:!0,props:{mode:{type:String,default:n}},render:function(n,i){return n("transition",Object(r["a"])(i.data,{props:{name:e},on:t}),i.children)}}}var a=n("ade3"),c=n("80d2"),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?"width":"height",r="offset".concat(Object(c["v"])(n));return{beforeEnter:function(e){e._parent=e.parentNode,e._initialStyle=Object(a["a"])({transition:e.style.transition,overflow:e.style.overflow},n,e.style[n])},enter:function(t){var i=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";var s="".concat(t[r],"px");t.style[n]="0",t.offsetHeight,t.style.transition=i.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((function(){t.style[n]=s}))},afterEnter:s,enterCancelled:s,leave:function(e){e._initialStyle=Object(a["a"])({transition:"",overflow:e.style.overflow},n,e.style[n]),e.style.overflow="hidden",e.style[n]="".concat(e[r],"px"),e.offsetHeight,requestAnimationFrame((function(){return e.style[n]="0"}))},afterLeave:i,leaveCancelled:i};function i(t){e&&t._parent&&t._parent.classList.remove(e),s(t)}function s(e){var t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}},l=(s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition"),s("fab-transition","center center","out-in"),s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition"),s("fade-transition")),h=(s("scale-transition"),s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition")),d=(s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",u()));o("expand-x-transition",u("",!0))},"07ac":function(e,t,n){var r=n("23e7"),i=n("6f53").values;r({target:"Object",stat:!0},{values:function(e){return i(e)}})},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Du})),n.d(t,"b",(function(){return Ac})),n.d(t,"c",(function(){return mc})),n.d(t,"d",(function(){return ic})),n.d(t,"e",(function(){return uu})),n.d(t,"f",(function(){return xc})),n.d(t,"g",(function(){return T})),n.d(t,"h",(function(){return Lc})),n.d(t,"i",(function(){return lu})),n.d(t,"j",(function(){return hu})),n.d(t,"k",(function(){return V})),n.d(t,"l",(function(){return Mu})),n.d(t,"m",(function(){return Wa})),n.d(t,"n",(function(){return ae})),n.d(t,"o",(function(){return K})),n.d(t,"p",(function(){return Za})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return Q})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return Qa})),n.d(t,"u",(function(){return Qu})),n.d(t,"v",(function(){return sl})),n.d(t,"w",(function(){return il})),n.d(t,"x",(function(){return Ic})),n.d(t,"y",(function(){return ac})),n.d(t,"z",(function(){return cc})),n.d(t,"A",(function(){return rc})),n.d(t,"B",(function(){return Gu})),n.d(t,"C",(function(){return nl})),n.d(t,"D",(function(){return kc})),n.d(t,"E",(function(){return uc})),n.d(t,"F",(function(){return bc})),n.d(t,"G",(function(){return wc})),n.d(t,"H",(function(){return Ec})),n.d(t,"I",(function(){return xu})),n.d(t,"J",(function(){return Cu})),n.d(t,"K",(function(){return vc})),n.d(t,"L",(function(){return Xu})),n.d(t,"M",(function(){return Vu})),n.d(t,"N",(function(){return Uu})),n.d(t,"O",(function(){return Bu})),n.d(t,"P",(function(){return qu})),n.d(t,"Q",(function(){return zu})),n.d(t,"R",(function(){return Hu})),n.d(t,"S",(function(){return ol})),n.d(t,"T",(function(){return Iu})),n.d(t,"U",(function(){return Tu})),n.d(t,"V",(function(){return Sc})),n.d(t,"W",(function(){return Oc})),n.d(t,"X",(function(){return Yu})),n.d(t,"Y",(function(){return Ju})),n.d(t,"Z",(function(){return wu})),n.d(t,"ab",(function(){return gu})),n.d(t,"bb",(function(){return hc})),n.d(t,"cb",(function(){return lc})),n.d(t,"db",(function(){return tl})),n.d(t,"eb",(function(){return rl})),n.d(t,"fb",(function(){return Wu})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return fu})),n.d(t,"ib",(function(){return Su})),n.d(t,"jb",(function(){return ku})),n.d(t,"kb",(function(){return Ku})),n.d(t,"lb",(function(){return Tc})),n.d(t,"mb",(function(){return yu}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.6.5";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(e){h.setLogLevel(e)}function p(e,...t){if(h.logLevel<=s["a"].DEBUG){const n=t.map(v);h.debug(`Firestore (${l}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=s["a"].ERROR){const n=t.map(v);h.error(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=s["a"].WARN){const n=t.map(v);h.warn(`Firestore (${l}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function b(e,t){e||y()}function w(e,t){e||y()}function _(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends o["c"]{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class O{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class C{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(b("string"==typeof t.accessToken),new k(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(null===e||"string"==typeof e),new u(e)}}class x{constructor(e,t,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class A{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new x(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable(()=>(e=>(null!=e.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message),t(e.token)))(n))};const n=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(b("string"==typeof e.token),new N(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */R.I=-1;class P{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=D(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function j(e,t){return e<t?-1:e>t?1:0}function M(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function F(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new V(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new V(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function B(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function q(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,n){void 0===t?t=0:t>e.length&&y(),void 0===n?n=e.length-t:n>e.length-t&&y(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===z.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof z?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class H extends z{construct(e,t,n){return new H(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new H(t)}static emptyPath(){return new H([])}}const W=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends z{construct(e,t,n){return new K(e,t,n)}static isValidIdentifier(e){return W.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new T(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new T(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new T(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new K(t)}static emptyPath(){return new K([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.fields=e,e.sort(K.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return M(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Y(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Y(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Y.EMPTY_BYTE_STRING=new Y("");const J=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function X(e){if(b(!!e),"string"==typeof e){let t=0;const n=J.exec(e);if(b(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(e.seconds),nanos:Z(e.nanos)}}function Z(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ee(e){return"string"==typeof e?Y.fromBase64String(e):Y.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ne(e){const t=e.mapValue.fields.__previous_value__;return te(t)?ne(t):t}function re(e){const t=X(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return null==e}function se(e){return 0===e&&1/e==-1/0}function oe(e){return"number"==typeof e&&Number.isInteger(e)&&!se(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(H.fromString(e))}static fromName(e){return new ae(H.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===H.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return H.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new H(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?te(e)?4:10:y()}function ue(e,t){if(e===t)return!0;const n=ce(e);if(n!==ce(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return re(e).isEqual(re(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=X(e.timestampValue),r=X(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ee(e.bytesValue).isEqual(ee(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Z(e.geoPointValue.latitude)===Z(t.geoPointValue.latitude)&&Z(e.geoPointValue.longitude)===Z(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Z(e.integerValue)===Z(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Z(e.doubleValue),r=Z(t.doubleValue);return n===r?se(n)===se(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return M(e.arrayValue.values||[],t.arrayValue.values||[],ue);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(U(n)!==U(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ue(n[i],r[i])))return!1;return!0}(e,t);default:return y()}}function le(e,t){return void 0!==(e.values||[]).find(e=>ue(e,t))}function he(e,t){if(e===t)return 0;const n=ce(e),r=ce(t);if(n!==r)return j(n,r);switch(n){case 0:return 0;case 1:return j(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Z(e.integerValue||e.doubleValue),r=Z(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return de(e.timestampValue,t.timestampValue);case 4:return de(re(e),re(t));case 5:return j(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ee(e),r=ee(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=j(n[i],r[i]);if(0!==e)return e}return j(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=j(Z(e.latitude),Z(t.latitude));return 0!==n?n:j(Z(e.longitude),Z(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=he(n[i],r[i]);if(e)return e}return j(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=j(r[o],s[o]);if(0!==e)return e;const t=he(n[r[o]],i[s[o]]);if(0!==t)return t}return j(r.length,s.length)}(e.mapValue,t.mapValue);default:throw y()}}function de(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return j(e,t);const n=X(e),r=X(t),i=j(n.seconds,r.seconds);return 0!==i?i:j(n.nanos,r.nanos)}function fe(e){return pe(e)}function pe(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=X(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ee(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ae.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=pe(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${pe(e.fields[i])}`;return n+"}"}(e.mapValue):y();var t,n}function me(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ge(e){return!!e&&"integerValue"in e}function ve(e){return!!e&&"arrayValue"in e}function ye(e){return!!e&&"nullValue"in e}function be(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function we(e){return!!e&&"mapValue"in e}function _e(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return B(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=_e(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_e(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.value=e}static empty(){return new Ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!we(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_e(t)}setAll(e){let t=K.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=_e(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());we(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ue(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];we(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){B(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Ie(_e(this.value))}}function Te(e){const t=[];return B(e.fields,(e,n)=>{const r=new K([e]);if(we(n)){const e=Te(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new G(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ee{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Ee(e,0,$.min(),Ie.empty(),0)}static newFoundDocument(e,t,n){return new Ee(e,1,t,n,0)}static newNoDocument(e,t){return new Ee(e,2,t,Ie.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,Ie.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function Se(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ke(e,t,n,r,i,s,o)}function Oe(e){const t=_(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Le(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),ie(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Be(t.startAt)),t.endAt&&(e+="|ub:",e+=Be(t.endAt)),t.R=e}return t.R}function Ce(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${fe(t.value)}`;var t}).join(", ")}]`),ie(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: "+Be(e.startAt)),e.endAt&&(t+=", endAt: "+Be(e.endAt)),`Target(${t})`}function xe(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!ze(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ue(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!We(e.startAt,t.startAt)&&We(e.endAt,t.endAt)}function Ae(e){return ae.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Ne extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new Re(e,t,n):"array-contains"===t?new Me(e,n):"in"===t?new Fe(e,n):"not-in"===t?new Ve(e,n):"array-contains-any"===t?new $e(e,n):new Ne(e,t,n)}static P(e,t,n){return"in"===t?new De(e,n):new Pe(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(he(t,this.value)):null!==t&&ce(this.value)===ce(t)&&this.v(he(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return y()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Le(e){return e.field.canonicalString()+e.op.toString()+fe(e.value)}class Re extends Ne{constructor(e,t,n){super(e,t,n),this.key=ae.fromName(n.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.v(t)}}class De extends Ne{constructor(e,t){super(e,"in",t),this.keys=je("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Pe extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=je("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function je(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ae.fromName(e.referenceValue))}class Me extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ve(t)&&le(t.arrayValue,this.value)}}class Fe extends Ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&le(this.value.arrayValue,t)}}class Ve extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(le(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!le(this.value.arrayValue,t)}}class $e extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ve(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>le(this.value.arrayValue,e))}}class Ue{constructor(e,t){this.position=e,this.before=t}}function Be(e){return`${e.before?"b":"a"}:${e.position.map(e=>fe(e)).join(",")}`}class qe{constructor(e,t="asc"){this.field=e,this.dir=t}}function ze(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function He(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ae.comparator(ae.fromName(o.referenceValue),n.key):he(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function We(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ue(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Ge(e,t,n,r,i,s,o,a){return new Ke(e,t,n,r,i,s,o,a)}function Qe(e){return new Ke(e)}function Ye(e){return!ie(e.limit)&&"F"===e.limitType}function Je(e){return!ie(e.limit)&&"L"===e.limitType}function Xe(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ze(e){for(const t of e.filters)if(t.V())return t.field;return null}function et(e){return null!==e.collectionGroup}function tt(e){const t=_(e);if(null===t.S){t.S=[];const e=Ze(t),n=Xe(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new qe(e)),t.S.push(new qe(K.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new qe(K.keyField(),e))}}}return t.S}function nt(e){const t=_(e);if(!t.D)if("F"===t.limitType)t.D=Se(t.path,t.collectionGroup,tt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of tt(t)){const t="desc"===i.dir?"asc":"desc";e.push(new qe(i.field,t))}const n=t.endAt?new Ue(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Ue(t.startAt.position,!t.startAt.before):null;t.D=Se(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.D}function rt(e,t,n){return new Ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function it(e,t){return xe(nt(e),nt(t))&&e.limitType===t.limitType}function st(e){return`${Oe(nt(e))}|lt:${e.limitType}`}function ot(e){return`Query(target=${Ce(nt(e))}; limitType=${e.limitType})`}function at(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ae.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!He(e.startAt,tt(e),t))&&(!e.endAt||!He(e.endAt,tt(e),t))}(e,t)}function ct(e){return(t,n)=>{let r=!1;for(const i of tt(e)){const e=ut(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function ut(e,t,n){const r=e.field.isKeyField()?ae.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?he(r,i):y()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:se(t)?"-0":t}}function ht(e){return{integerValue:""+e}}function dt(e,t){return oe(t)?ht(t):lt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this._=void 0}}function pt(e,t,n){return e instanceof vt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof yt?bt(e,t):e instanceof wt?_t(e,t):function(e,t){const n=gt(e,t),r=Tt(n)+Tt(e.N);return ge(n)&&ge(e.N)?ht(r):lt(e.k,r)}(e,t)}function mt(e,t,n){return e instanceof yt?bt(e,t):e instanceof wt?_t(e,t):n}function gt(e,t){return e instanceof It?ge(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class vt extends ft{}class yt extends ft{constructor(e){super(),this.elements=e}}function bt(e,t){const n=Et(t);for(const r of e.elements)n.some(e=>ue(e,r))||n.push(r);return{arrayValue:{values:n}}}class wt extends ft{constructor(e){super(),this.elements=e}}function _t(e,t){let n=Et(t);for(const r of e.elements)n=n.filter(e=>!ue(e,r));return{arrayValue:{values:n}}}class It extends ft{constructor(e,t){super(),this.k=e,this.N=t}}function Tt(e){return Z(e.integerValue||e.doubleValue)}function Et(e){return ve(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){this.field=e,this.transform=t}}function St(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof yt&&t instanceof yt||e instanceof wt&&t instanceof wt?M(e.elements,t.elements,ue):e instanceof It&&t instanceof It?ue(e.N,t.N):e instanceof vt&&t instanceof vt}(e.transform,t.transform)}class Ot{constructor(e,t){this.version=e,this.transformResults=t}}class Ct{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xt(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class At{}function Nt(e,t,n){e instanceof jt?function(e,t,n){const r=e.value.clone(),i=Vt(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Mt?function(e,t,n){if(!xt(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Vt(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Ft(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Lt(e,t,n){e instanceof jt?function(e,t,n){if(!xt(e.precondition,t))return;const r=e.value.clone(),i=$t(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Pt(t),r).setHasLocalMutations()}(e,t,n):e instanceof Mt?function(e,t,n){if(!xt(e.precondition,t))return;const r=$t(e.fieldTransforms,n,t),i=t.data;i.setAll(Ft(e)),i.setAll(r),t.convertToFoundDocument(Pt(t),i).setHasLocalMutations()}(e,t,n):function(e,t){xt(e.precondition,t)&&t.convertToNoDocument($.min())}(e,t)}function Rt(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=gt(r.transform,e||null);null!=i&&(null==n&&(n=Ie.empty()),n.set(r.field,i))}return n||null}function Dt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&M(e,t,(e,t)=>St(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Pt(e){return e.isFoundDocument()?e.version:$.min()}class jt extends At{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Mt extends At{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ft(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Vt(e,t,n){const r=new Map;b(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,mt(o,a,n[i]))}return r}function $t(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,pt(e,s,t))}return r}class Ut extends At{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Bt extends At{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt,Ht;function Wt(e){switch(e){default:return y();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Kt(e){if(void 0===e)return m("GRPC error has no .code"),I.UNKNOWN;switch(e){case zt.OK:return I.OK;case zt.CANCELLED:return I.CANCELLED;case zt.UNKNOWN:return I.UNKNOWN;case zt.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case zt.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case zt.INTERNAL:return I.INTERNAL;case zt.UNAVAILABLE:return I.UNAVAILABLE;case zt.UNAUTHENTICATED:return I.UNAUTHENTICATED;case zt.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case zt.NOT_FOUND:return I.NOT_FOUND;case zt.ALREADY_EXISTS:return I.ALREADY_EXISTS;case zt.PERMISSION_DENIED:return I.PERMISSION_DENIED;case zt.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case zt.ABORTED:return I.ABORTED;case zt.OUT_OF_RANGE:return I.OUT_OF_RANGE;case zt.UNIMPLEMENTED:return I.UNIMPLEMENTED;case zt.DATA_LOSS:return I.DATA_LOSS;default:return y()}}(Ht=zt||(zt={}))[Ht.OK=0]="OK",Ht[Ht.CANCELLED=1]="CANCELLED",Ht[Ht.UNKNOWN=2]="UNKNOWN",Ht[Ht.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ht[Ht.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ht[Ht.NOT_FOUND=5]="NOT_FOUND",Ht[Ht.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ht[Ht.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ht[Ht.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ht[Ht.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ht[Ht.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ht[Ht.ABORTED=10]="ABORTED",Ht[Ht.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ht[Ht.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ht[Ht.INTERNAL=13]="INTERNAL",Ht[Ht.UNAVAILABLE=14]="UNAVAILABLE",Ht[Ht.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(e,t){this.comparator=e,this.root=t||Yt.EMPTY}insert(e,t){return new Gt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(e){return new Gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qt(this.root,e,this.comparator,!0)}}class Qt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Yt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Yt.RED,this.left=null!=r?r:Yt.EMPTY,this.right=null!=i?i:Yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Yt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Yt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1,Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Yt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(e){this.comparator=e,this.data=new Gt(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xt(this.data.getIterator())}getIteratorFrom(e){return new Xt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Jt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Jt(this.comparator);return t.data=e,t}}class Xt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Gt(ae.comparator);function en(){return Zt}const tn=new Gt(ae.comparator);function nn(){return tn}const rn=new Gt(ae.comparator);function sn(){return rn}const on=new Jt(ae.comparator);function an(...e){let t=on;for(const n of e)t=t.add(n);return t}const cn=new Jt(j);function un(){return cn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,hn.createSynthesizedTargetChangeForCurrentChange(e,t)),new ln($.min(),n,un(),en(),an())}}class hn{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new hn(Y.EMPTY_BYTE_STRING,t,an(),an(),an())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,n,r){this.$=e,this.removedTargetIds=t,this.key=n,this.O=r}}class fn{constructor(e,t){this.targetId=e,this.M=t}}class pn{constructor(e,t,n=Y.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class mn{constructor(){this.F=0,this.L=yn(),this.B=Y.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=an(),t=an(),n=an();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:y()}}),new hn(this.B,this.U,e,t,n)}H(){this.q=!1,this.L=yn()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class gn{constructor(e){this.et=e,this.nt=new Map,this.st=en(),this.it=vn(),this.rt=new Jt(j)}ot(e){for(const t of e.$)e.O&&e.O.isFoundDocument()?this.ct(t,e.O):this.at(t,e.key,e.O);for(const t of e.removedTargetIds)this.at(t,e.key,e.O)}ut(e){this.forEachTarget(e,t=>{const n=this.ht(t);switch(e.state){case 0:this.lt(t)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(t);break;case 3:this.lt(t)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),n.W(e.resumeToken));break;default:y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach((e,n)=>{this.lt(n)&&t(n)})}dt(e){const t=e.targetId,n=e.M.count,r=this.wt(t);if(r){const e=r.target;if(Ae(e))if(0===n){const n=new ae(e.path);this.at(t,n,Ee.newNoDocument(n,$.min()))}else b(1===n);else this._t(t)!==n&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Ae(i.target)){const t=new ae(i.target.path);null!==this.st.get(t)||this.yt(r,t)||this.at(r,t,Ee.newNoDocument(t,e))}n.j&&(t.set(r,n.G()),n.H())}});let n=an();this.it.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))});const r=new ln(e,t,this.rt,this.st,n);return this.st=en(),this.it=vn(),this.rt=new Jt(j),r}ct(e,t){if(!this.lt(e))return;const n=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,n),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}at(e,t,n){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,t)?r.J(t,1):r.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),n&&(this.st=this.st.insert(t,n))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new mn,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new Jt(j),this.it=this.it.insert(e,t)),t}lt(e){const t=null!==this.wt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new mn),this.et.getRemoteKeysForTarget(e).forEach(t=>{this.at(e,t,null)})}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function vn(){return new Gt(ae.comparator)}function yn(){return new Gt(ae.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),wn=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class _n{constructor(e,t){this.databaseId=e,this.C=t}}function In(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Tn(e,t){return e.C?t.toBase64():t.toUint8Array()}function En(e,t){return In(e,t.toTimestamp())}function kn(e){return b(!!e),$.fromTimestamp(function(e){const t=X(e);return new V(t.seconds,t.nanos)}(e))}function Sn(e,t){return function(e){return new H(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function On(e){const t=H.fromString(e);return b(tr(t)),t}function Cn(e,t){return Sn(e.databaseId,t.path)}function xn(e,t){const n=On(t);if(n.get(1)!==e.databaseId.projectId)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ae(Rn(n))}function An(e,t){return Sn(e.databaseId,t)}function Nn(e){const t=On(e);return 4===t.length?H.emptyPath():Rn(t)}function Ln(e){return new H(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Rn(e){return b(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Dn(e,t,n){return{name:Cn(e,t),fields:n.value.mapValue.fields}}function Pn(e,t,n){const r=xn(e,t.name),i=kn(t.updateTime),s=new Ie({mapValue:{fields:t.fields}}),o=Ee.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function jn(e,t){return"found"in t?function(e,t){b(!!t.found),t.found.name,t.found.updateTime;const n=xn(e,t.found.name),r=kn(t.found.updateTime),i=new Ie({mapValue:{fields:t.found.fields}});return Ee.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){b(!!t.missing),b(!!t.readTime);const n=xn(e,t.missing),r=kn(t.readTime);return Ee.newNoDocument(n,r)}(e,t):y()}function Mn(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:y()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.C?(b(void 0===t||"string"==typeof t),Y.fromBase64String(t||"")):(b(void 0===t||t instanceof Uint8Array),Y.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?I.UNKNOWN:Kt(e.code);return new T(t,e.message||"")}(o);n=new pn(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=xn(e,r.document.name),s=kn(r.document.updateTime),o=new Ie({mapValue:{fields:r.document.fields}}),a=Ee.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new dn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=xn(e,r.document),s=r.readTime?kn(r.readTime):$.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];n=new dn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=xn(e,r.document),s=r.removedTargetIds||[];n=new dn([],s,i,null)}else{if(!("filter"in t))return y();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new qt(r),s=e.targetId;n=new fn(s,i)}}return n}function Fn(e,t){let n;if(t instanceof jt)n={update:Dn(e,t.key,t.value)};else if(t instanceof Ut)n={delete:Cn(e,t.key)};else if(t instanceof Mt)n={update:Dn(e,t.key,t.data),updateMask:er(t.fieldMask)};else{if(!(t instanceof Bt))return y();n={verify:Cn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof vt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof yt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof It)return{fieldPath:t.field.canonicalString(),increment:n.N};throw y()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:En(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:y()}(e,t.precondition)),n}function Vn(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Ct.updateTime(kn(e.updateTime)):void 0!==e.exists?Ct.exists(e.exists):Ct.none()}(t.currentDocument):Ct.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)b("REQUEST_TIME"===t.setToServerValue),n=new vt;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new yt(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new wt(e)}else"increment"in t?n=new It(e,t.increment):y();const r=K.fromServerFormat(t.fieldPath);return new kt(r,n)}(e,t)):[];if(t.update){t.update.name;const i=xn(e,t.update.name),s=new Ie({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new G(t.map(e=>K.fromServerFormat(e)))}(t.updateMask);return new Mt(i,s,e,n,r)}return new jt(i,s,n,r)}if(t.delete){const r=xn(e,t.delete);return new Ut(r,n)}if(t.verify){const r=xn(e,t.verify);return new Bt(r,n)}return y()}function $n(e,t){return e&&e.length>0?(b(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?kn(e.updateTime):kn(t);return n.isEqual($.min())&&(n=kn(t)),new Ot(n,e.transformResults||[])}(e,t))):[]}function Un(e,t){return{documents:[An(e,t.path)]}}function Bn(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=An(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=An(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(be(e.value))return{unaryFilter:{field:Yn(e.field),op:"IS_NAN"}};if(ye(e.value))return{unaryFilter:{field:Yn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(be(e.value))return{unaryFilter:{field:Yn(e.field),op:"IS_NOT_NAN"}};if(ye(e.value))return{unaryFilter:{field:Yn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yn(e.field),op:Qn(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Yn(e.field),direction:Gn(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.C||ie(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=Wn(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Wn(t.endAt)),n}function qn(e){let t=Nn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){b(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Hn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new qe(Jn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ie(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Kn(n.startAt));let u=null;return n.endAt&&(u=Kn(n.endAt)),Ge(t,i,o,s,a,"F",c,u)}function zn(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Hn(e){return e?void 0!==e.unaryFilter?[Zn(e)]:void 0!==e.fieldFilter?[Xn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>Hn(e)).reduce((e,t)=>e.concat(t)):y():[]}function Wn(e){return{before:e.before,values:e.position}}function Kn(e){const t=!!e.before,n=e.values||[];return new Ue(n,t)}function Gn(e){return bn[e]}function Qn(e){return wn[e]}function Yn(e){return{fieldPath:e.canonicalString()}}function Jn(e){return K.fromServerFormat(e.fieldPath)}function Xn(e){return Ne.create(Jn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(e.fieldFilter.op),e.fieldFilter.value)}function Zn(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Jn(e.unaryFilter.field);return Ne.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Jn(e.unaryFilter.field);return Ne.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jn(e.unaryFilter.field);return Ne.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Jn(e.unaryFilter.field);return Ne.create(i,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function er(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function tr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ir(t)),t=rr(e.get(n),t);return ir(t)}function rr(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function ir(e){return e+""}function sr(e){const t=e.length;if(b(t>=2),2===t)return b(""===e.charAt(0)&&""===e.charAt(1)),H.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&y(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:y()}s=t+2}return new H(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class ar{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}ar.store="owner",ar.key="owner";class cr{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}cr.store="mutationQueues",cr.keyPath="userId";class ur{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}ur.store="mutations",ur.keyPath="batchId",ur.userMutationsIndex="userMutationsIndex",ur.userMutationsKeyPath=["userId","batchId"];class lr{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,nr(t)]}static key(e,t,n){return[e,nr(t),n]}}lr.store="documentMutations",lr.PLACEHOLDER=new lr;class hr{constructor(e,t){this.path=e,this.readTime=t}}class dr{constructor(e,t){this.path=e,this.version=t}}class fr{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}fr.store="remoteDocuments",fr.readTimeIndex="readTimeIndex",fr.readTimeIndexPath="readTime",fr.collectionReadTimeIndex="collectionReadTimeIndex",fr.collectionReadTimeIndexPath=["parentPath","readTime"];class pr{constructor(e){this.byteSize=e}}pr.store="remoteDocumentGlobal",pr.key="remoteDocumentGlobalKey";class mr{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}mr.store="targets",mr.keyPath="targetId",mr.queryTargetsIndexName="queryTargetsIndex",mr.queryTargetsKeyPath=["canonicalId","targetId"];class gr{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}gr.store="targetDocuments",gr.keyPath=["targetId","path"],gr.documentTargetsIndex="documentTargetsIndex",gr.documentTargetsKeyPath=["path","targetId"];class vr{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}vr.key="targetGlobalKey",vr.store="targetGlobal";class yr{constructor(e,t){this.collectionId=e,this.parent=t}}yr.store="collectionParents",yr.keyPath=["collectionId","parent"];class br{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}br.store="clientMetadata",br.keyPath="clientId";class wr{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}wr.store="bundles",wr.keyPath="bundleId";class _r{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}_r.store="namedQueries",_r.keyPath="name";const Ir=[cr.store,ur.store,lr.store,fr.store,mr.store,ar.store,vr.store,gr.store,br.store,pr.store,yr.store,wr.store,_r.store],Tr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Er{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new kr((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof kr?t:kr.resolve(t)}catch(e){return kr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):kr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):kr.reject(t)}static resolve(e){return new kr((t,n)=>{t(e)})}static reject(e){return new kr((t,n)=>{n(e)})}static waitFor(e){return new kr((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=kr.resolve(!1);for(const n of e)t=t.next(e=>e?kr.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.It=new E,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{t.error?this.It.reject(new xr(e,t.error)):this.It.resolve()},this.transaction.onerror=t=>{const n=Dr(t.target.error);this.It.reject(new xr(e,n))}}static open(e,t,n,r){try{return new Sr(t,e.transaction(r,n))}catch(e){throw new xr(t,e)}}get At(){return this.It.promise}abort(e){e&&this.It.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new Nr(t)}}class Or{constructor(e,t,n){this.name=e,this.version=t,this.Rt=n,12.2===Or.bt(Object(o["l"])())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),Lr(window.indexedDB.deleteDatabase(e)).toPromise()}static Pt(){if(!Object(o["r"])())return!1;if(Or.vt())return!0;const e=Object(o["l"])(),t=Or.bt(e),n=0<t&&t<10,r=Or.Vt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static vt(){var t;return"undefined"!=typeof e&&"YES"===(null===(t=Object({NODE_ENV:"production",BASE_URL:"/"}))||void 0===t?void 0:t.St)}static Dt(e,t){return e.store(t)}static bt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Vt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Ct(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new xr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new T(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new T(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new xr(e,r))},r.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.Rt.Nt(t,r.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=e=>this.kt(e)),this.db}xt(e){this.kt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Ct(e);const t=Sr.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).catch(e=>(t.abort(e),kr.reject(e))).toPromise();return s.catch(()=>{}),await t.At,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(p("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Cr{constructor(e){this.$t=e,this.Ot=!1,this.Mt=null}get isDone(){return this.Ot}get Ft(){return this.Mt}set cursor(e){this.$t=e}done(){this.Ot=!0}Lt(e){this.Mt=e}delete(){return Lr(this.$t.delete())}}class xr extends T{constructor(e,t){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ar(e){return"IndexedDbTransactionError"===e.name}class Nr{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Lr(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),Lr(this.store.add(e))}get(e){return Lr(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),Lr(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),Lr(this.store.count())}Bt(e,t){const n=this.cursor(this.options(e,t)),r=[];return this.Ut(n,(e,t)=>{r.push(t)}).next(()=>r)}qt(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Kt=!1;const r=this.cursor(n);return this.Ut(r,(e,t,n)=>n.delete())}jt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Ut(r,t)}Qt(e){const t=this.cursor({});return new kr((n,r)=>{t.onerror=e=>{const t=Dr(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}Ut(e,t){const n=[];return new kr((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Cr(i),o=t(i.primaryKey,i.value,s);if(o instanceof kr){const e=o.catch(e=>(s.done(),kr.reject(e)));n.push(e)}s.isDone?r():null===s.Ft?i.continue():i.continue(s.Ft)}}).next(()=>kr.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Kt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Lr(e){return new kr((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Dr(e.target.error);n(t)}})}let Rr=!1;function Dr(e){const t=Or.bt(Object(o["l"])());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Rr||(Rr=!0,setTimeout(()=>{throw e},0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Er{constructor(e,t){super(),this.Wt=e,this.currentSequenceNumber=t}}function jr(e,t){const n=_(e);return Or.Dt(n.Wt,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Nt(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Lt(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Lt(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument($.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),an())}isEqual(e){return this.batchId===e.batchId&&M(this.mutations,e.mutations,(e,t)=>Dt(e,t))&&M(this.baseMutations,e.baseMutations,(e,t)=>Dt(e,t))}}class Fr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){b(e.mutations.length===n.length);let r=sn();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Fr(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,n,r,i=$.min(),s=$.min(),o=Y.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.Gt=e}}function Ur(e,t){if(t.document)return Pn(e.Gt,t.document,!!t.hasCommittedMutations);if(t.noDocument){const e=ae.fromSegments(t.noDocument.path),n=Wr(t.noDocument.readTime),r=Ee.newNoDocument(e,n);return t.hasCommittedMutations?r.setHasCommittedMutations():r}if(t.unknownDocument){const e=ae.fromSegments(t.unknownDocument.path),n=Wr(t.unknownDocument.version);return Ee.newUnknownDocument(e,n)}return y()}function Br(e,t,n){const r=qr(n),i=t.key.path.popLast().toArray();if(t.isFoundDocument()){const n=function(e,t){return{name:Cn(e,t.key),fields:t.data.value.mapValue.fields,updateTime:In(e,t.version.toTimestamp())}}(e.Gt,t),s=t.hasCommittedMutations;return new fr(null,null,n,s,r,i)}if(t.isNoDocument()){const e=t.key.path.toArray(),n=Hr(t.version),s=t.hasCommittedMutations;return new fr(null,new hr(e,n),null,s,r,i)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),n=Hr(t.version);return new fr(new dr(e,n),null,null,!0,r,i)}return y()}function qr(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function zr(e){const t=new V(e[0],e[1]);return $.fromTimestamp(t)}function Hr(e){const t=e.toTimestamp();return new or(t.seconds,t.nanoseconds)}function Wr(e){const t=new V(e.seconds,e.nanoseconds);return $.fromTimestamp(t)}function Kr(e,t){const n=(t.baseMutations||[]).map(t=>Vn(e.Gt,t));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(t=>Vn(e.Gt,t)),i=V.fromMillis(t.localWriteTimeMs);return new Mr(t.batchId,i,n,r)}function Gr(e){const t=Wr(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Wr(e.lastLimboFreeSnapshotVersion):$.min();let r;var i;return void 0!==e.query.documents?(b(1===(i=e.query).documents.length),r=nt(Qe(Nn(i.documents[0])))):r=function(e){return nt(qn(e))}(e.query),new Vr(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Y.fromBase64String(e.resumeToken))}function Qr(e,t){const n=Hr(t.snapshotVersion),r=Hr(t.lastLimboFreeSnapshotVersion);let i;i=Ae(t.target)?Un(e.Gt,t.target):Bn(e.Gt,t.target);const s=t.resumeToken.toBase64();return new mr(t.targetId,Oe(t.target),n,s,t.sequenceNumber,r,i)}function Yr(e){const t=qn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?rt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{getBundleMetadata(e,t){return Xr(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:Wr(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Xr(e).put({bundleId:(n=t).id,createTime:Hr(kn(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Zr(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Yr(t.bundledQuery),readTime:Wr(t.readTime)};var t})}saveNamedQuery(e,t){return Zr(e).put(function(e){return{name:e.name,readTime:Hr(kn(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Xr(e){return jr(e,wr.store)}function Zr(e){return jr(e,_r.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.zt=new ti}addToCollectionParentIndex(e,t){return this.zt.add(t),kr.resolve()}getCollectionParents(e,t){return kr.resolve(this.zt.getEntries(t))}}class ti{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Jt(H.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Jt(H.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.Ht=new ti}addToCollectionParentIndex(e,t){if(!this.Ht.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Ht.add(t)});const i={collectionId:n,parent:nr(r)};return ri(e).put(i)}return kr.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[F(t),""],!1,!0);return ri(e).Bt(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(sr(r.parent))}return n})}}function ri(e){return jr(e,yr.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class si{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new si(e,si.DEFAULT_COLLECTION_PERCENTILE,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e,t,n){const r=e.store(ur.store),i=e.store(lr.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.jt({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{b(1===a)}));const u=[];for(const l of n.mutations){const e=lr.key(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return kr.waitFor(s).next(()=>u)}function ai(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw y();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */si.DEFAULT_COLLECTION_PERCENTILE=10,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,si.DEFAULT=new si(41943040,si.DEFAULT_COLLECTION_PERCENTILE,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),si.DISABLED=new si(-1,0,0);class ci{constructor(e,t,n,r){this.userId=e,this.k=t,this.Jt=n,this.referenceDelegate=r,this.Yt={}}static Xt(e,t,n,r){b(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new ci(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return li(e).jt({index:ur.userMutationsIndex,range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=hi(e),s=li(e);return s.add({}).next(o=>{b("number"==typeof o);const a=new Mr(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>Fn(e.Gt,t)),i=n.mutations.map(t=>Fn(e.Gt,t));return new ur(t,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.k,this.userId,a),u=[];let l=new Jt((e,t)=>j(e.canonicalString(),t.canonicalString()));for(const e of r){const t=lr.key(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,lr.PLACEHOLDER))}return l.forEach(t=>{u.push(this.Jt.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Yt[o]=a.keys()}),kr.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return li(e).get(t).next(e=>e?(b(e.userId===this.userId),Kr(this.k,e)):null)}Zt(e,t){return this.Yt[t]?kr.resolve(this.Yt[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Yt[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return li(e).jt({index:ur.userMutationsIndex,range:r},(e,t,r)=>{t.userId===this.userId&&(b(t.batchId>=n),i=Kr(this.k,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return li(e).jt({index:ur.userMutationsIndex,range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return li(e).Bt(ur.userMutationsIndex,t).next(e=>e.map(e=>Kr(this.k,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=lr.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return hi(e).jt({range:r},(n,r,s)=>{const[o,a,c]=n,u=sr(a);if(o===this.userId&&t.path.isEqual(u))return li(e).get(c).next(e=>{if(!e)throw y();b(e.userId===this.userId),i.push(Kr(this.k,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Jt(j);const r=[];return t.forEach(t=>{const i=lr.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=hi(e).jt({range:s},(e,r,i)=>{const[s,o,a]=e,c=sr(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),kr.waitFor(r).next(()=>this.te(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=lr.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Jt(j);return hi(e).jt({range:s},(e,t,i)=>{const[s,a,c]=e,u=sr(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.te(e,o))}te(e,t){const n=[],r=[];return t.forEach(t=>{r.push(li(e).get(t).next(e=>{if(null===e)throw y();b(e.userId===this.userId),n.push(Kr(this.k,e))}))}),kr.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return oi(e.Wt,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.ee(t.batchId)}),kr.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}ee(e){delete this.Yt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return kr.resolve();const n=IDBKeyRange.lowerBound(lr.prefixForUser(this.userId)),r=[];return hi(e).jt({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=sr(e[1]);r.push(t)}else n.done()}).next(()=>{b(0===r.length)})})}containsKey(e,t){return ui(e,this.userId,t)}ne(e){return di(e).get(this.userId).next(e=>e||new cr(this.userId,-1,""))}}function ui(e,t,n){const r=lr.prefixForPath(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return hi(e).jt({range:s,Kt:!0},(e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function li(e){return jr(e,ur.store)}function hi(e){return jr(e,lr.store)}function di(e){return jr(e,cr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new fi(0)}static re(){return new fi(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.referenceDelegate=e,this.k=t}allocateTargetId(e){return this.oe(e).next(t=>{const n=new fi(t.highestTargetId);return t.highestTargetId=n.next(),this.ce(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.oe(e).next(e=>$.fromTimestamp(new V(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.oe(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.oe(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.ce(e,r)))}addTargetData(e,t){return this.ae(e,t).next(()=>this.oe(e).next(n=>(n.targetCount+=1,this.ue(t,n),this.ce(e,n))))}updateTargetData(e,t){return this.ae(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>mi(e).delete(t.targetId)).next(()=>this.oe(e)).next(t=>(b(t.targetCount>0),t.targetCount-=1,this.ce(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return mi(e).jt((s,o)=>{const a=Gr(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>kr.waitFor(i)).next(()=>r)}forEachTarget(e,t){return mi(e).jt((e,n)=>{const r=Gr(n);t(r)})}oe(e){return gi(e).get(vr.key).next(e=>(b(null!==e),e))}ce(e,t){return gi(e).put(vr.key,t)}ae(e,t){return mi(e).put(Qr(this.k,t))}ue(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.oe(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Oe(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return mi(e).jt({range:r,index:mr.queryTargetsIndexName},(e,n,r)=>{const s=Gr(n);xe(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=vi(e);return t.forEach(t=>{const s=nr(t.path);r.push(i.put(new gr(n,s))),r.push(this.referenceDelegate.addReference(e,n,t))}),kr.waitFor(r)}removeMatchingKeys(e,t,n){const r=vi(e);return kr.forEach(t,t=>{const i=nr(t.path);return kr.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=vi(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=vi(e);let i=an();return r.jt({range:n,Kt:!0},(e,t,n)=>{const r=sr(e[1]),s=new ae(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=nr(t.path),r=IDBKeyRange.bound([n],[F(n)],!1,!0);let i=0;return vi(e).jt({index:gr.documentTargetsIndex,Kt:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}Et(e,t){return mi(e).get(t).next(e=>e?Gr(e):null)}}function mi(e){return jr(e,mr.store)}function gi(e){return jr(e,vr.store)}function vi(e){return jr(e,gr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(e){if(e.code!==I.FAILED_PRECONDITION||e.message!==Tr)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi([e,t],[n,r]){const i=j(e,n);return 0===i?j(t,r):i}class wi{constructor(e){this.he=e,this.buffer=new Jt(bi),this.le=0}fe(){return++this.le}de(e){const t=[e,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();bi(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _i{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.we=!1,this._e=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.me(e)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return null!==this._e}me(e){const t=this.we?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this._e=null,this.we=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){Ar(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await yi(e)}await this.me(e)})}}class Ii{constructor(e,t){this.ge=e,this.params=t}calculateTargetCount(e,t){return this.ge.ye(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return kr.resolve(R.I);const n=new wi(t);return this.ge.forEachTarget(e,e=>n.de(e.sequenceNumber)).next(()=>this.ge.pe(e,e=>n.de(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.ge.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.ge.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),kr.resolve(ii)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ii):this.Te(e,t))}getCacheSize(e){return this.ge.getCacheSize(e)}Te(e,t){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),kr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Ii(e,t)}(this,t)}ye(e){const t=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Ee(e){let t=0;return this.pe(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pe(e,t){return this.Ie(e,(e,n)=>t(n))}addReference(e,t,n){return Ei(e,n)}removeReference(e,t,n){return Ei(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ei(e,t)}Ae(e,t){return function(e,t){let n=!1;return di(e).Qt(r=>ui(e,r,t).next(e=>(e&&(n=!0),kr.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Ie(e,(s,o)=>{if(o<=t){const t=this.Ae(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s),vi(e).delete([0,nr(s.path)])))});r.push(t)}}).next(()=>kr.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ei(e,t)}Ie(e,t){const n=vi(e);let r,i=R.I;return n.jt({index:gr.documentTargetsIndex},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==R.I&&t(new ae(sr(r)),i),i=o,r=s):i=R.I}).next(()=>{i!==R.I&&t(new ae(sr(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ei(e,t){return vi(e).put(function(e,t){return new gr(0,nr(e.path),t)}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){B(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return q(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.changes=new ki(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:$.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Ee.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?kr.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.k=e,this.Jt=t}addEntry(e,t,n){return Ai(e).put(Ni(t),n)}removeEntry(e,t){const n=Ai(e),r=Ni(t);return n.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Re(e,n)))}getEntry(e,t){return Ai(e).get(Ni(t)).next(e=>this.be(t,e))}Pe(e,t){return Ai(e).get(Ni(t)).next(e=>({document:this.be(t,e),size:ai(e)}))}getEntries(e,t){let n=en();return this.ve(e,t,(e,t)=>{const r=this.be(e,t);n=n.insert(e,r)}).next(()=>n)}Ve(e,t){let n=en(),r=new Gt(ae.comparator);return this.ve(e,t,(e,t)=>{const i=this.be(e,t);n=n.insert(e,i),r=r.insert(e,ai(t))}).next(()=>({documents:n,Se:r}))}ve(e,t,n){if(t.isEmpty())return kr.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let s=i.getNext();return Ai(e).jt({range:r},(e,t,r)=>{const o=ae.fromSegments(e);for(;s&&ae.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,t),s=i.hasNext()?i.getNext():null),s?r.Lt(s.path.toArray()):r.done()}).next(()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(e,t,n){let r=en();const i=t.path.length+1,s={};if(n.isEqual($.min())){const e=t.path.toArray();s.range=IDBKeyRange.lowerBound(e)}else{const e=t.path.toArray(),r=qr(n);s.range=IDBKeyRange.lowerBound([e,r],!0),s.index=fr.collectionReadTimeIndex}return Ai(e).jt(s,(e,n,s)=>{if(e.length!==i)return;const o=Ur(this.k,n);t.path.isPrefixOf(o.key.path)?at(t,o)&&(r=r.insert(o.key,o)):s.done()}).next(()=>r)}newChangeBuffer(e){return new Ci(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return xi(e).get(pr.key).next(e=>(b(!!e),e))}Re(e,t){return xi(e).put(pr.key,t)}be(e,t){if(t){const e=Ur(this.k,t);if(!e.isNoDocument()||!e.version.isEqual($.min()))return e}return Ee.newInvalidDocument(e)}}class Ci extends Si{constructor(e,t){super(),this.De=e,this.trackRemovals=t,this.Ce=new ki(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new Jt((e,t)=>j(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.Ce.get(i);if(s.document.isValidDocument()){const a=Br(this.De.k,s.document,this.getReadTime(i));r=r.add(i.path.popLast());const c=ai(a);n+=c-o,t.push(this.De.addEntry(e,i,a))}else if(n-=o,this.trackRemovals){const n=Br(this.De.k,Ee.newNoDocument(i,$.min()),this.getReadTime(i));t.push(this.De.addEntry(e,i,n))}else t.push(this.De.removeEntry(e,i))}),r.forEach(n=>{t.push(this.De.Jt.addToCollectionParentIndex(e,n))}),t.push(this.De.updateMetadata(e,n)),kr.waitFor(t)}getFromCache(e,t){return this.De.Pe(e,t).next(e=>(this.Ce.set(t,e.size),e.document))}getAllFromCache(e,t){return this.De.Ve(e,t).next(({documents:e,Se:t})=>(t.forEach((e,t)=>{this.Ce.set(e,t)}),e))}}function xi(e){return jr(e,pr.store)}function Ai(e){return jr(e,fr.store)}function Ni(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.k=e}Nt(e,t,n,r){b(n<r&&n>=0&&r<=11);const i=new Sr("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore(ar.store)}(e),function(e){e.createObjectStore(cr.store,{keyPath:cr.keyPath}),e.createObjectStore(ur.store,{keyPath:ur.keyPath,autoIncrement:!0}).createIndex(ur.userMutationsIndex,ur.userMutationsKeyPath,{unique:!0}),e.createObjectStore(lr.store)}(e),Ri(e),function(e){e.createObjectStore(fr.store)}(e));let s=kr.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(gr.store),e.deleteObjectStore(mr.store),e.deleteObjectStore(vr.store)}(e),Ri(e)),s=s.next(()=>function(e){const t=e.store(vr.store),n=new vr(0,0,$.min().toTimestamp(),0);return t.put(vr.key,n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store(ur.store).Bt().next(n=>{e.deleteObjectStore(ur.store),e.createObjectStore(ur.store,{keyPath:ur.keyPath,autoIncrement:!0}).createIndex(ur.userMutationsIndex,ur.userMutationsKeyPath,{unique:!0});const r=t.store(ur.store),i=n.map(e=>r.put(e));return kr.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore(br.store,{keyPath:br.keyPath})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Ne(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore(pr.store)}(e),this.ke(i)))),n<7&&r>=7&&(s=s.next(()=>this.xe(i))),n<8&&r>=8&&(s=s.next(()=>this.$e(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(fr.store);t.createIndex(fr.readTimeIndex,fr.readTimeIndexPath,{unique:!1}),t.createIndex(fr.collectionReadTimeIndex,fr.collectionReadTimeIndexPath,{unique:!1})}(t)})),n<10&&r>=10&&(s=s.next(()=>this.Oe(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore(wr.store,{keyPath:wr.keyPath})}(e),function(e){e.createObjectStore(_r.store,{keyPath:_r.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)})),s}ke(e){let t=0;return e.store(fr.store).jt((e,n)=>{t+=ai(n)}).next(()=>{const n=new pr(t);return e.store(pr.store).put(pr.key,n)})}Ne(e){const t=e.store(cr.store),n=e.store(ur.store);return t.Bt().next(t=>kr.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.Bt(ur.userMutationsIndex,r).next(n=>kr.forEach(n,n=>{b(n.userId===t.userId);const r=Kr(this.k,n);return oi(e,t.userId,r).next(()=>{})}))}))}xe(e){const t=e.store(gr.store),n=e.store(fr.store);return e.store(vr.store).get(vr.key).next(e=>{const r=[];return n.jt((n,i)=>{const s=new H(n),o=function(e){return[0,nr(e)]}(s);r.push(t.get(o).next(n=>n?kr.resolve():(n=>t.put(new gr(0,nr(n),e.highestListenSequenceNumber)))(s)))}).next(()=>kr.waitFor(r))})}$e(e,t){e.createObjectStore(yr.store,{keyPath:yr.keyPath});const n=t.store(yr.store),r=new ti,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:nr(r)})}};return t.store(fr.store).jt({Kt:!0},(e,t)=>{const n=new H(e);return i(n.popLast())}).next(()=>t.store(lr.store).jt({Kt:!0},([e,t,n],r)=>{const s=sr(t);return i(s.popLast())}))}Oe(e){const t=e.store(mr.store);return t.jt((e,n)=>{const r=Gr(n),i=Qr(this.k,r);return t.put(i)})}}function Ri(e){e.createObjectStore(gr.store,{keyPath:gr.keyPath}).createIndex(gr.documentTargetsIndex,gr.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(mr.store,{keyPath:mr.keyPath}).createIndex(mr.queryTargetsIndexName,mr.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(vr.store)}const Di="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Pi{constructor(e,t,n,r,i,s,o,a,c,u){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Me=i,this.window=s,this.document=o,this.Fe=c,this.Le=u,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=e=>Promise.resolve(),!Pi.Pt())throw new T(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ti(this,r),this.Ge=t+"main",this.k=new $r(a),this.ze=new Or(this.Ge,11,new Li(this.k)),this.He=new pi(this.referenceDelegate,this.k),this.Jt=new ni,this.Je=function(e,t){return new Oi(e,t)}(this.k,this.Jt),this.Ye=new Jr,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,Di);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.He.getHighestSequenceNumber(e))}).then(e=>{this.Be=new R(e,this.Fe)}).then(()=>{this.Ue=!0}).catch(e=>(this.ze&&this.ze.close(),Promise.reject(e)))}sn(e){return this.We=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ze.xt(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Me.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Mi(e).put(new br(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(e).next(e=>{e||(this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(e)).next(t=>this.isPrimary&&!t?this.cn(e).next(()=>!1):!!t&&this.an(e).next(()=>!0))).catch(e=>{if(Ar(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Me.enqueueRetryable(()=>this.We(e)),this.isPrimary=e})}rn(e){return ji(e).get(ar.key).next(e=>kr.resolve(this.un(e)))}hn(e){return Mi(e).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=jr(e,br.store);return t.Bt().next(e=>{const n=this.dn(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return kr.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Xe)for(const t of e)this.Xe.removeItem(this.wn(t.clientId))}}nn(){this.je=this.Me.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(e){return!!e&&e.ownerId===this.clientId}on(e){return this.Le?kr.resolve(!0):ji(e).get(ar.key).next(t=>{if(null!==t&&this.fn(t.leaseTimestampMs,5e3)&&!this._n(t.ownerId)){if(this.un(t)&&this.networkEnabled)return!0;if(!this.un(t)){if(!t.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,Di);return!1}}return!(!this.networkEnabled||!this.inForeground)||Mi(e).Bt().next(e=>void 0===this.dn(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[ar.store,br.store],e=>{const t=new Pr(e,R.I);return this.cn(t).next(()=>this.hn(t))}),this.ze.close(),this.pn()}dn(e,t){return e.filter(e=>this.fn(e.updateTimeMs,t)&&!this._n(e.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",e=>Mi(e).Bt().next(e=>this.dn(e,18e5).map(e=>e.clientId)))}get started(){return this.Ue}getMutationQueue(e){return ci.Xt(e,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite";let i;return this.ze.runTransaction(e,r,Ir,r=>(i=new Pr(r,this.Be?this.Be.next():R.I),"readwrite-primary"===t?this.rn(i).next(e=>!!e||this.on(i)).next(t=>{if(!t)throw m(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)),new T(I.FAILED_PRECONDITION,Tr);return n(i)}).next(e=>this.an(i).next(()=>e)):this.En(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}En(e){return ji(e).get(ar.key).next(e=>{if(null!==e&&this.fn(e.leaseTimestampMs,5e3)&&!this._n(e.ownerId)&&!this.un(e)&&!(this.Le||this.allowTabSynchronization&&e.allowTabSynchronization))throw new T(I.FAILED_PRECONDITION,Di)})}an(e){const t=new ar(this.clientId,this.allowTabSynchronization,Date.now());return ji(e).put(ar.key,t)}static Pt(){return Or.Pt()}cn(e){const t=ji(e);return t.get(ar.key).next(e=>this.un(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete(ar.key)):kr.resolve())}fn(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(m(`Detected an update time that is in the future: ${e} > ${n}`),!1))}tn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ke=()=>{this.Me.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground="visible"===this.document.visibilityState)}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.qe=()=>{this.mn(),Object(o["v"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Me.enterRestrictedMode(!0),this.Me.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(e){var t;try{const n=null!==(null===(t=this.Xe)||void 0===t?void 0:t.getItem(this.wn(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return m("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(e){m("Failed to set zombie client id.",e)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch(e){}}wn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ji(e){return jr(e,ar.store)}function Mi(e){return jr(e,br.store)}function Fi(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Vi{constructor(e,t){this.progress=e,this.In=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.bn(e,t,n))}bn(e,t,n){return this.Je.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}Pn(e,t){e.forEach((e,n)=>{for(const r of t)r.applyToLocalView(n)})}vn(e,t){return this.Je.getEntries(e,t).next(t=>this.Vn(e,t).next(()=>t))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.Pn(t,e))}getDocumentsMatchingQuery(e,t,n){return function(e){return ae.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):et(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new ae(t)).next(e=>{let t=nn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Dn(e,t,n){const r=t.collectionGroup;let i=nn();return this.Jt.getCollectionParents(e,r).next(s=>kr.forEach(s,s=>{const o=function(e,t){return new Ke(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Cn(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}Cn(e,t,n){let r,i;return this.Je.getDocumentsMatchingQuery(e,t,n).next(n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(e,t))).next(t=>(i=t,this.Nn(e,i,r).next(e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=Ee.newInvalidDocument(n),r=r.insert(n,i)),Lt(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((e,n)=>{at(t,n)||(r=r.remove(e))}),r))}Nn(e,t,n){let r=an();for(const s of t)for(const e of s.mutations)e instanceof Mt&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.Je.getEntries(e,r).next(e=>(e.forEach((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=r}static $n(e,t){let n=an(),r=an();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ui(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{On(e){this.Mn=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual($.min())?this.Fn(e,t):this.Mn.vn(e,r).next(i=>{const o=this.Ln(t,i);return(Ye(t)||Je(t))&&this.Bn(t.limitType,o,r,n)?this.Fn(e,t):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ot(t)),this.Mn.getDocumentsMatchingQuery(e,t,n).next(e=>(o.forEach(t=>{e=e.insert(t.key,t)}),e)))})}Ln(e,t){let n=new Jt(ct(e));return t.forEach((t,r)=>{at(e,r)&&(n=n.add(r))}),n}Bn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,t){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",ot(t)),this.Mn.getDocumentsMatchingQuery(e,t,$.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t,n,r){this.persistence=e,this.Un=t,this.k=r,this.qn=new Gt(j),this.Kn=new ki(e=>Oe(e),xe),this.jn=$.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new $i(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qn))}}function zi(e,t,n,r){return new qi(e,t,n,r)}async function Hi(e,t){const n=_(e);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",e=>{let s;return n.An.getAllMutationBatches(e).next(o=>(s=o,r=n.persistence.getMutationQueue(t),i=new $i(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e))).next(t=>{const n=[],r=[];let o=an();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.vn(e,o).next(e=>({Gn:e,removedBatchIds:n,addedBatchIds:r}))})});return n.An=r,n.Wn=i,n.Un.On(n.Wn),s}function Wi(e,t){const n=_(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=kr.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);b(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))})}),o.next(()=>e.An.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.An.performConsistencyCheck(e)).next(()=>n.Wn.vn(e,r))})}function Ki(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.He.getLastRemoteSnapshotVersion(e))}function Gi(e,t){const n=_(e),r=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];t.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.He.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.He.addMatchingKeys(e,s.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Y.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.He.updateTargetData(e,u))});let a=en();if(t.documentUpdates.forEach((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Qi(e,s,t.documentUpdates,r,void 0).next(e=>{a=e})),!r.isEqual($.min())){const t=n.He.getLastRemoteSnapshotVersion(e).next(t=>n.He.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return kr.waitFor(o).next(()=>s.apply(e)).next(()=>n.Wn.Vn(e,a)).next(()=>a)}).then(e=>(n.qn=i,e))}function Qi(e,t,n,r,i){let s=an();return n.forEach(e=>s=s.add(e)),t.getEntries(e,s).next(e=>{let s=en();return n.forEach((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual($.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Yi(e,t){const n=_(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t)))}function Ji(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.He.getTargetData(e,t).next(i=>i?(r=i,kr.resolve(r)):n.He.allocateTargetId(e).next(i=>(r=new Vr(t,i,0,e.currentSequenceNumber),n.He.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.qn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(e.targetId,e),n.Kn.set(t,e.targetId)),e})}async function Xi(e,t,n){const r=_(e),i=r.qn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!Ar(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qn=r.qn.remove(t),r.Kn.delete(i.target)}function Zi(e,t,n){const r=_(e);let i=$.min(),s=an();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=_(e),i=r.Kn.get(n);return void 0!==i?kr.resolve(r.qn.get(i)):r.He.getTargetData(t,n)}(r,e,nt(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Un.getDocumentsMatchingQuery(e,t,n?i:$.min(),n?s:an())).next(e=>({documents:e,zn:s})))}function es(e,t){const n=_(e),r=_(n.He),i=n.qn.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.Et(e,t).next(e=>e?e.target:null))}function ts(e){const t=_(e);return t.persistence.runTransaction("Get new document changes","readonly",e=>function(e,t,n){const r=_(e);let i=en(),s=qr(n);const o=Ai(t),a=IDBKeyRange.lowerBound(s,!0);return o.jt({index:fr.readTimeIndex,range:a},(e,t)=>{const n=Ur(r.k,t);i=i.insert(n.key,n),s=t.readTime}).next(()=>({In:i,readTime:zr(s)}))}(t.Qn,e,t.jn)).then(({In:e,readTime:n})=>(t.jn=n,e))}async function ns(e){const t=_(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",e=>function(e){const t=Ai(e);let n=$.min();return t.jt({index:fr.readTimeIndex,reverse:!0},(e,t,r)=>{t.readTime&&(n=zr(t.readTime)),r.done()}).next(()=>n)}(e)).then(e=>{t.jn=e})}async function rs(e,t,n,r){const i=_(e);let s=an(),o=en(),a=sn();for(const l of n){const e=t.Hn(l.metadata.name);l.document&&(s=s.add(e)),o=o.insert(e,t.Jn(l)),a=a.insert(e,t.Yn(l.metadata.readTime))}const c=i.Qn.newChangeBuffer({trackRemovals:!0}),u=await Ji(i,function(e){return nt(Qe(H.fromString("__bundle__/docs/"+e)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>Qi(e,c,o,$.min(),a).next(t=>(c.apply(e),t)).next(t=>i.He.removeMatchingKeysForTargetId(e,u.targetId).next(()=>i.He.addMatchingKeys(e,s,u.targetId)).next(()=>i.Wn.Vn(e,t)).next(()=>t)))}async function is(e,t,n=an()){const r=await Ji(e,nt(Yr(t.bundledQuery))),i=_(e);return i.persistence.runTransaction("Save named query","readwrite",e=>{const s=kn(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ye.saveNamedQuery(e,t);const o=r.withResumeToken(Y.EMPTY_BYTE_STRING,s);return i.qn=i.qn.insert(o.targetId,o),i.He.updateTargetData(e,o).next(()=>i.He.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.He.addMatchingKeys(e,n,r.targetId)).next(()=>i.Ye.saveNamedQuery(e,t))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return kr.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:kn(n.createTime)}),kr.resolve()}getNamedQuery(e,t){return kr.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:Yr(e.bundledQuery),readTime:kn(e.readTime)}}(t)),kr.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.ts=new Jt(as.es),this.ns=new Jt(as.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new as(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.os(new as(e,t))}cs(e,t){e.forEach(e=>this.removeReference(e,t))}us(e){const t=new ae(new H([])),n=new as(t,e),r=new as(t,e+1),i=[];return this.ns.forEachInRange([n,r],e=>{this.os(e),i.push(e.key)}),i}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new ae(new H([])),n=new as(t,e),r=new as(t,e+1);let i=an();return this.ns.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new as(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class as{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return ae.comparator(e.key,t.key)||j(e.fs,t.fs)}static ss(e,t){return j(e.fs,t.fs)||ae.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new Jt(as.es)}checkEmpty(e){return kr.resolve(0===this.An.length)}addMutationBatch(e,t,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Mr(i,t,n,r);this.An.push(s);for(const o of r)this.ws=this.ws.add(new as(o.key,i)),this.Jt.addToCollectionParentIndex(e,o.key.path.popLast());return kr.resolve(s)}lookupMutationBatch(e,t){return kr.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.gs(n),i=r<0?0:r;return kr.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return kr.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return kr.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new as(t,0),r=new as(t,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],e=>{const t=this._s(e.fs);i.push(t)}),kr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Jt(j);return t.forEach(e=>{const t=new as(e,0),r=new as(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,r],e=>{n=n.add(e.fs)})}),kr.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ae.isDocumentKey(i)||(i=i.child(""));const s=new as(new ae(i),0);let o=new Jt(j);return this.ws.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.fs)),!0)},s),kr.resolve(this.ys(o))}ys(e){const t=[];return e.forEach(e=>{const n=this._s(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){b(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return kr.forEach(t.mutations,r=>{const i=new as(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ws=n})}ee(e){}containsKey(e,t){const n=new as(t,0),r=this.ws.firstAfterOrEqual(n);return kr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,kr.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new Gt(ae.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return kr.resolve(n?n.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let n=en();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ee.newInvalidDocument(e))}),kr.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=en();const i=new ae(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||at(t,i)&&(r=r.insert(i.key,i.mutableCopy()))}return kr.resolve(r)}Es(e,t){return kr.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new ls(this)}getSize(e){return kr.resolve(this.size)}}class ls extends Si{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?t.push(this.De.addEntry(e,r.document,this.getReadTime(n))):this.De.removeEntry(n)}),kr.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.persistence=e,this.Is=new ki(e=>Oe(e),xe),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.As=0,this.Rs=new os,this.targetCount=0,this.bs=fi.ie()}forEachTarget(e,t){return this.Is.forEach((e,n)=>t(n)),kr.resolve()}getLastRemoteSnapshotVersion(e){return kr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return kr.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),kr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),kr.resolve()}ae(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new fi(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,kr.resolve()}updateTargetData(e,t){return this.ae(t),kr.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,kr.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Is.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),kr.waitFor(i).next(()=>r)}getTargetCount(e){return kr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return kr.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),kr.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),kr.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),kr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return kr.resolve(n)}containsKey(e,t){return kr.resolve(this.Rs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.Ps={},this.Be=new R(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new hs(this),this.Jt=new ei,this.Je=function(e,t){return new us(e,t)}(this.Jt,e=>this.referenceDelegate.vs(e)),this.k=new $r(t),this.Ye=new ss(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.Ps[e.toKey()];return t||(t=new cs(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const r=new fs(this.Be.next());return this.referenceDelegate.Vs(),n(r).next(e=>this.referenceDelegate.Ss(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ds(e,t){return kr.or(Object.values(this.Ps).map(n=>()=>n.containsKey(e,t)))}}class fs extends Er{constructor(e){super(),this.currentSequenceNumber=e}}class ps{constructor(e){this.persistence=e,this.Cs=new os,this.Ns=null}static ks(e){return new ps(e)}get xs(){if(this.Ns)return this.Ns;throw y()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),kr.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),kr.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),kr.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach(e=>this.xs.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.xs.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return kr.forEach(this.xs,n=>{const r=ae.fromPath(n);return this.$s(e,r).next(e=>{e||t.removeEntry(r)})}).next(()=>(this.Ns=null,t.apply(e)))}updateLimboDocument(e,t){return this.$s(e,t).next(e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())})}vs(e){return 0}$s(e,t){return kr.or([()=>kr.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(e,t){return`firestore_clients_${e}_${t}`}function gs(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+="_"+t.uid),r}function vs(e,t){return`firestore_targets_${e}_${t}`}class ys{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Os(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new T(r.error.code,r.error.message))),s?new ys(e,t,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ms(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class bs{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Os(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new T(n.error.code,n.error.message))),i?new bs(e,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Ms(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ws{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Os(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=un();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=oe(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new ws(e,i):(m("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class _s{constructor(e,t){this.clientId=e,this.onlineState=t}static Os(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new _s(t.clientId,t.onlineState):(m("SharedClientState","Failed to parse online state: "+e),null)}}class Is{constructor(){this.activeTargetIds=un()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ts{constructor(e,t,n,r,i){this.window=e,this.Me=t,this.persistenceKey=n,this.Bs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new Gt(j),this.started=!1,this.js=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Qs=ms(this.persistenceKey,this.Bs),this.Ws=function(e){return"firestore_sequence_number_"+e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new Is),this.Gs=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Js=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.Ys=function(e){return"firestore_bundle_loaded_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static Pt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Tn();for(const n of e){if(n===this.Bs)continue;const e=this.getItem(ms(this.persistenceKey,n));if(e){const t=ws.Os(n,e);t&&(this.Ks=this.Ks.insert(t.clientId,t))}}this.Xs();const t=this.storage.getItem(this.Js);if(t){const e=this.Zs(t);e&&this.ti(e)}for(const n of this.js)this.qs(n);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(e){let t=!1;return this.Ks.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.ni(e,"pending")}updateMutationState(e,t,n){this.ni(e,t,n),this.si(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(vs(this.persistenceKey,e));if(n){const r=bs.Os(e,n);r&&(t=r.state)}}return this.ii.Fs(e),this.Xs(),t}removeLocalQueryTarget(e){this.ii.Ls(e),this.Xs()}isLocalQueryTarget(e){return this.ii.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(vs(this.persistenceKey,e))}updateQueryState(e,t,n){this.ri(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.si(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.oi(e)}notifyBundleLoaded(){this.ci()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}qs(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Qs)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Me.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Gs.test(t.key)){if(null==t.newValue){const e=this.ai(t.key);return this.ui(e,null)}{const e=this.hi(t.key,t.newValue);if(e)return this.ui(e.clientId,e)}}else if(this.zs.test(t.key)){if(null!==t.newValue){const e=this.li(t.key,t.newValue);if(e)return this.fi(e)}}else if(this.Hs.test(t.key)){if(null!==t.newValue){const e=this.di(t.key,t.newValue);if(e)return this.wi(e)}}else if(t.key===this.Js){if(null!==t.newValue){const e=this.Zs(t.newValue);if(e)return this.ti(e)}}else if(t.key===this.Ws){const e=function(e){let t=R.I;if(null!=e)try{const n=JSON.parse(e);b("number"==typeof n),t=n}catch(e){m("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==R.I&&this.sequenceNumberHandler(e)}else if(t.key===this.Ys)return this.syncEngine._i()}else this.js.push(t)})}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Ms())}ni(e,t,n){const r=new ys(this.currentUser,e,t,n),i=gs(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Ms())}si(e){const t=gs(this.persistenceKey,this.currentUser,e);this.removeItem(t)}oi(e){const t={clientId:this.Bs,onlineState:e};this.storage.setItem(this.Js,JSON.stringify(t))}ri(e,t,n){const r=vs(this.persistenceKey,e),i=new bs(e,t,n);this.setItem(r,i.Ms())}ci(){this.setItem(this.Ys,"value-not-used")}ai(e){const t=this.Gs.exec(e);return t?t[1]:null}hi(e,t){const n=this.ai(e);return ws.Os(n,t)}li(e,t){const n=this.zs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return ys.Os(new u(i),r,t)}di(e,t){const n=this.Hs.exec(e),r=Number(n[1]);return bs.Os(r,t)}Zs(e){return _s.Os(e)}async fi(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.mi(e.batchId,e.state,e.error);p("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}wi(e){return this.syncEngine.gi(e.targetId,e.state,e.error)}ui(e,t){const n=t?this.Ks.insert(e,t):this.Ks.remove(e),r=this.ei(this.Ks),i=this.ei(n),s=[],o=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.yi(s,o).then(()=>{this.Ks=n})}ti(e){this.Ks.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ei(e){let t=un();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class Es{constructor(){this.pi=new Is,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Is,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{Ei(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,r,i){const s=this.Ui(e,t);p("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(e,s,o,n).then(e=>(p("RestConnection","Received: ",e),e),t=>{throw g("RestConnection",e+" failed with error: ",t,"url: ",s,"request:",n),t})}ji(e,t,n,r,i){return this.Bi(e,t,n,r,i)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Ui(e,t){const n=Os[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),s(new T(I.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(t)>=0?t:I.UNKNOWN}(e.status);s(new T(t,e.message))}else s(new T(I.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new T(I.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{p("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);o.send(t,"POST",c,n,15)})}Qi(e,t,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,t,n),Object(o["s"])()||Object(o["u"])()||Object(o["o"])()||Object(o["q"])()||Object(o["w"])()||Object(o["n"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");p("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,d=!1;const f=new Cs({Vi:e=>{d?p("Connection","Not sending because WebChannel is closed:",e):(h||(p("Connection","Opening WebChannel transport."),l.open(),h=!0),p("Connection","WebChannel sending:",e),l.send(e))},Si:()=>l.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(l,a["f"].EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.Oi())}),m(l,a["f"].EventType.ERROR,e=>{d||(d=!0,g("Connection","WebChannel transport errored:",e),f.Oi(new T(I.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,e=>{var t;if(!d){const n=e.data[0];b(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){p("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=zt[e];if(void 0!==t)return Kt(t)}(e),n=i.message;void 0===t&&(t=I.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),d=!0,f.Oi(new T(t,n)),l.close()}else p("Connection","WebChannel received:",n),f.Mi(n)}}),m(s,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(){return"undefined"!=typeof window?window:null}function Ns(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){return new _n(e,!0)}class Rs{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Me=e,this.timerId=t,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t,n,r,i,s,o,a){this.Me=e,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Rs(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===I.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===I.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.rr===t&&this.Ir(e,n)},t=>{e(()=>{const e=new T(I.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)})})}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di(()=>{n(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(e=>{n(()=>this.Ar(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return p("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Me.enqueueAndForget(()=>this.rr===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ps extends Ds{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.k=i}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=Mn(this.k,e),n=function(e){if(!("targetChange"in e))return $.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?$.min():t.readTime?kn(t.readTime):$.min()}(e);return this.listener.br(t,n)}Pr(e){const t={};t.database=Ln(this.k),t.addTarget=function(e,t){let n;const r=t.target;return n=Ae(r)?{documents:Un(e,r)}:{query:Bn(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Tn(e,t.resumeToken):t.snapshotVersion.compareTo($.min())>0&&(n.readTime=In(e,t.snapshotVersion.toTimestamp())),n}(this.k,e);const n=zn(this.k,e);n&&(t.labels=n),this.gr(t)}vr(e){const t={};t.database=Ln(this.k),t.removeTarget=e,this.gr(t)}}class js extends Ds{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=$n(e.writeResults,e.commitTime),n=kn(e.commitTime);return this.listener.Cr(n,t)}return b(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Ln(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Fn(this.k,e))};this.gr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=r,this.$r=!1}Or(){if(this.$r)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(I.UNKNOWN,e.toString())})}ji(e,t,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(I.UNKNOWN,e.toString())})}terminate(){this.$r=!0}}class Fs{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+e.toString()),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(m(t),this.Lr=!1):p("OnlineStateTracker",t)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(e=>{n.enqueueAndForget(async()=>{Gs(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=_(e);t.Gr.add(4),await Us(t),t.Jr.set("Unknown"),t.Gr.delete(4),await $s(t)}(this))})}),this.Jr=new Fs(n,r)}}async function $s(e){if(Gs(e))for(const t of e.zr)await t(!0)}async function Us(e){for(const t of e.zr)await t(!1)}function Bs(e,t){const n=_(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),Ks(n)?Ws(n):fo(n).lr()&&zs(n,t))}function qs(e,t){const n=_(e),r=fo(n);n.Wr.delete(t),r.lr()&&Hs(n,t),0===n.Wr.size&&(r.lr()?r._r():Gs(n)&&n.Jr.set("Unknown"))}function zs(e,t){e.Yr.X(t.targetId),fo(e).Pr(t)}function Hs(e,t){e.Yr.X(t),fo(e).vr(t)}function Ws(e){e.Yr=new gn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),fo(e).start(),e.Jr.Br()}function Ks(e){return Gs(e)&&!fo(e).hr()&&e.Wr.size>0}function Gs(e){return 0===_(e).Gr.size}function Qs(e){e.Yr=void 0}async function Ys(e){e.Wr.forEach((t,n)=>{zs(e,t)})}async function Js(e,t){Qs(e),Ks(e)?(e.Jr.Kr(t),Ws(e)):e.Jr.set("Unknown")}async function Xs(e,t,n){if(e.Jr.set("Online"),t instanceof pn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Wr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Wr.delete(r),e.Yr.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zs(e,n)}else if(t instanceof dn?e.Yr.ot(t):t instanceof fn?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual($.min()))try{const t=await Ki(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Yr.gt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Wr.get(r);i&&e.Wr.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.Wr.get(t);if(!n)return;e.Wr.set(t,n.withResumeToken(Y.EMPTY_BYTE_STRING,n.snapshotVersion)),Hs(e,t);const r=new Vr(n.target,t,1,n.sequenceNumber);zs(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await Zs(e,t)}}async function Zs(e,t,n){if(!Ar(t))throw t;e.Gr.add(1),await Us(e),e.Jr.set("Offline"),n||(n=()=>Ki(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await $s(e)})}function eo(e,t){return t().catch(n=>Zs(e,n,t))}async function to(e){const t=_(e),n=po(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;no(t);)try{const e=await Yi(t.localStore,r);if(null===e){0===t.Qr.length&&n._r();break}r=e.batchId,ro(t,e)}catch(e){await Zs(t,e)}io(t)&&so(t)}function no(e){return Gs(e)&&e.Qr.length<10}function ro(e,t){e.Qr.push(t);const n=po(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function io(e){return Gs(e)&&!po(e).hr()&&e.Qr.length>0}function so(e){po(e).start()}async function oo(e){po(e).kr()}async function ao(e){const t=po(e);for(const n of e.Qr)t.Dr(n.mutations)}async function co(e,t,n){const r=e.Qr.shift(),i=Fr.from(r,t,n);await eo(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await to(e)}async function uo(e,t){t&&po(e).Sr&&await async function(e,t){if(n=t.code,Wt(n)&&n!==I.ABORTED){const n=e.Qr.shift();po(e).wr(),await eo(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await to(e)}var n}(e,t),io(e)&&so(e)}async function lo(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Gs(n);n.Gr.add(3),await Us(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await $s(n)}async function ho(e,t){const n=_(e);t?(n.Gr.delete(2),await $s(n)):t||(n.Gr.add(2),await Us(n),n.Jr.set("Unknown"))}function fo(e){return e.Xr||(e.Xr=function(e,t,n){const r=_(e);return r.Or(),new Ps(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Di:Ys.bind(null,e),Ni:Js.bind(null,e),br:Xs.bind(null,e)}),e.zr.push(async t=>{t?(e.Xr.wr(),Ks(e)?Ws(e):e.Jr.set("Unknown")):(await e.Xr.stop(),Qs(e))})),e.Xr}function po(e){return e.Zr||(e.Zr=function(e,t,n){const r=_(e);return r.Or(),new js(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(e.datastore,e.asyncQueue,{Di:oo.bind(null,e),Ni:uo.bind(null,e),Nr:ao.bind(null,e),Cr:co.bind(null,e)}),e.zr.push(async t=>{t?(e.Zr.wr(),await to(e)):(await e.Zr.stop(),e.Qr.length>0&&(p("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))})),e.Zr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class mo{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new mo(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function go(e,t){if(m("AsyncQueue",`${t}: ${e}`),Ar(e))return new T(I.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ae.comparator(t.key,n.key):(e,t)=>ae.comparator(e.key,t.key),this.keyedMap=nn(),this.sortedSet=new Gt(this.comparator)}static emptySet(e){return new vo(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vo))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new vo;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.eo=new Gt(ae.comparator)}track(e){const t=e.doc.key,n=this.eo.get(t);n?0!==e.type&&3===n.type?this.eo=this.eo.insert(t,e):3===e.type&&1!==n.type?this.eo=this.eo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.eo=this.eo.remove(t):1===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):y():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal((t,n)=>{e.push(n)}),e}}class bo{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new bo(e,t,vo.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&it(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.so=void 0,this.listeners=[]}}class _o{constructor(){this.queries=new ki(e=>st(e),it),this.onlineState="Unknown",this.io=new Set}}async function Io(e,t){const n=_(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new wo),i)try{s.so=await n.onListen(r)}catch(e){const n=go(e,`Initialization of query '${ot(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ro(n.onlineState),s.so&&t.oo(s.so)&&So(n)}async function To(e,t){const n=_(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Eo(e,t){const n=_(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.oo(i)&&(r=!0);t.so=i}}r&&So(n)}function ko(e,t,n){const r=_(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function So(e){e.io.forEach(e=>{e.next()})}class Oo{constructor(e,t,n){this.query=e,this.co=t,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new bo(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.ao?this.ho(e)&&(this.co.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.wo||!n)&&(!e.docs.isEmpty()||"Offline"===t)}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}fo(e){e=bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t){this.payload=e,this.byteLength=t}_o(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.k=e}Hn(e){return xn(this.k,e)}Jn(e){return e.metadata.exists?Pn(this.k,e.document,!1):Ee.newNoDocument(this.Hn(e.metadata.name),this.Yn(e.metadata.readTime))}Yn(e){return kn(e)}}class Ao{constructor(e,t,n){this.mo=e,this.localStore=t,this.k=n,this.queries=[],this.documents=[],this.progress=No(e)}yo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}po(e){const t=new Map,n=new xo(this.k);for(const r of e)if(r.metadata.queries){const e=n.Hn(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||an()).add(e);t.set(n,r)}}return t}async complete(){const e=await rs(this.localStore,new xo(this.k),this.documents,this.mo.id),t=this.po(this.documents);for(const n of this.queries)await is(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",new Vi(Object.assign({},this.progress),e)}}function No(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.key=e}}class Ro{constructor(e){this.key=e}}class Do{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=an(),this.mutatedKeys=an(),this.Ao=ct(e),this.Ro=new vo(this.Ao)}get bo(){return this.To}Po(e,t){const n=t?t.vo:new yo,r=t?t.Ro:this.Ro;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Ye(this.query)&&r.size===this.query.limit?r.last():null,c=Je(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=at(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Vo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ao(l,a)>0||c&&this.Ao(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),Ye(this.query)||Je(this.query))for(;s.size>this.query.limit;){const e=Ye(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ao(e.doc,t.doc)),this.So(n);const s=t?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new bo(this.query,e.Ro,r,i,e.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new yo,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(e=>this.To=this.To.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.To=this.To.delete(e)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=an(),this.Ro.forEach(e=>{this.No(e.key)&&(this.Io=this.Io.add(e.key))});const t=[];return e.forEach(e=>{this.Io.has(e)||t.push(new Ro(e))}),this.Io.forEach(n=>{e.has(n)||t.push(new Lo(n))}),t}ko(e){this.To=e.zn,this.Io=an();const t=this.Po(e.documents);return this.applyChanges(t,!0)}xo(){return bo.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Po{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class jo{constructor(e){this.key=e,this.$o=!1}}class Mo{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Oo={},this.Mo=new ki(e=>st(e),it),this.Fo=new Map,this.Lo=new Set,this.Bo=new Gt(ae.comparator),this.Uo=new Map,this.qo=new os,this.Ko={},this.jo=new Map,this.Qo=fi.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Fo(e,t){const n=fa(e);let r,i;const s=n.Mo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const e=await Ji(n.localStore,nt(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Vo(n,t,r,"current"===s),n.isPrimaryClient&&Bs(n.remoteStore,e)}return i}async function Vo(e,t,n,r){e.Go=(t,n,r)=>async function(e,t,n,r){let i=t.view.Po(n);i.Bn&&(i=await Zi(e.localStore,t.query,!1).then(({documents:e})=>t.view.Po(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Xo(e,t.targetId,o.Co),o.snapshot}(e,t,n,r);const i=await Zi(e.localStore,t,!0),s=new Do(t,i.zn),o=s.Po(i.documents),a=hn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Xo(e,n,c.Co);const u=new Po(t,n,s);return e.Mo.set(t,u),e.Fo.has(n)?e.Fo.get(n).push(t):e.Fo.set(n,[t]),c.snapshot}async function $o(e,t){const n=_(e),r=n.Mo.get(t),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(e=>!it(e,t))),void n.Mo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qs(n.remoteStore,r.targetId),Yo(n,r.targetId)}).catch(yi)):(Yo(n,r.targetId),await Xi(n.localStore,r.targetId,!0))}async function Uo(e,t,n){const r=pa(e);try{const e=await function(e,t){const n=_(e),r=V.now(),i=t.reduce((e,t)=>e.add(t.key),an());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.Wn.vn(e,i).next(i=>{s=i;const o=[];for(const e of t){const t=Rt(e,s.get(e.key));null!=t&&o.push(new Mt(e.key,t,Te(t.value.mapValue),Ct.exists(!0)))}return n.An.addMutationBatch(e,r,o,t)})).then(e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ko[e.currentUser.toKey()];r||(r=new Gt(j)),r=r.insert(t,n),e.Ko[e.currentUser.toKey()]=r}(r,e.batchId,n),await ta(r,e.changes),await to(r.remoteStore)}catch(e){const t=go(e,"Failed to persist write");n.reject(t)}}async function Bo(e,t){const n=_(e);try{const e=await Gi(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Uo.get(t);r&&(b(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.$o=!0:e.modifiedDocuments.size>0?b(r.$o):e.removedDocuments.size>0&&(b(r.$o),r.$o=!1))}),await ta(n,e,t)}catch(e){await yi(e)}}function qo(e,t,n){const r=_(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Mo.forEach((n,r)=>{const i=r.view.ro(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=_(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.listeners)i.ro(t)&&(r=!0)}),r&&So(n)}(r.eventManager,t),e.length&&r.Oo.br(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function zo(e,t,n){const r=_(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Uo.get(t),s=i&&i.key;if(s){let e=new Gt(ae.comparator);e=e.insert(s,Ee.newNoDocument(s,$.min()));const n=an().add(s),i=new ln($.min(),new Map,new Jt(j),e,n);await Bo(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(t),ea(r)}else await Xi(r.localStore,t,!1).then(()=>Yo(r,t,n)).catch(yi)}async function Ho(e,t){const n=_(e),r=t.batch.batchId;try{const e=await Wi(n.localStore,t);Qo(n,r,null),Go(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ta(n,e)}catch(e){await yi(e)}}async function Wo(e,t,n){const r=_(e);try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.An.lookupMutationBatch(e,t).next(t=>(b(null!==t),r=t.keys(),n.An.removeMutationBatch(e,t))).next(()=>n.An.performConsistencyCheck(e)).next(()=>n.Wn.vn(e,r))})}(r.localStore,t);Qo(r,t,n),Go(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ta(r,e)}catch(n){await yi(n)}}async function Ko(e,t){const n=_(e);Gs(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=_(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.An.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const r=n.jo.get(e)||[];r.push(t),n.jo.set(e,r)}catch(e){const n=go(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Go(e,t){(e.jo.get(t)||[]).forEach(e=>{e.resolve()}),e.jo.delete(t)}function Qo(e,t,n){const r=_(e);let i=r.Ko[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ko[r.currentUser.toKey()]=i}}function Yo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Fo.get(t))e.Mo.delete(r),n&&e.Oo.zo(r,n);e.Fo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach(t=>{e.qo.containsKey(t)||Jo(e,t)})}function Jo(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);null!==n&&(qs(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),ea(e))}function Xo(e,t,n){for(const r of n)r instanceof Lo?(e.qo.addReference(r.key,t),Zo(e,r)):r instanceof Ro?(p("SyncEngine","Document no longer in limbo: "+r.key),e.qo.removeReference(r.key,t),e.qo.containsKey(r.key)||Jo(e,r.key)):y()}function Zo(e,t){const n=t.key,r=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(r)||(p("SyncEngine","New document in limbo: "+n),e.Lo.add(r),ea(e))}function ea(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new ae(H.fromString(t)),r=e.Qo.next();e.Uo.set(r,new jo(n)),e.Bo=e.Bo.insert(n,r),Bs(e.remoteStore,new Vr(nt(Qe(n.path)),r,2,R.I))}}async function ta(e,t,n){const r=_(e),i=[],s=[],o=[];r.Mo.isEmpty()||(r.Mo.forEach((e,a)=>{o.push(r.Go(a,t,n).then(e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=Ui.$n(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.Oo.br(i),await async function(e,t){const n=_(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>kr.forEach(t,t=>kr.forEach(t.kn,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>kr.forEach(t.xn,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Ar(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qn.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(e,i)}}}(r.localStore,s))}async function na(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await Hi(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach(e=>{e.forEach(e=>{e.reject(new T(I.CANCELLED,t))})}),e.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ta(n,e.Gn)}}function ra(e,t){const n=_(e),r=n.Uo.get(t);if(r&&r.$o)return an().add(r.key);{let e=an();const r=n.Fo.get(t);if(!r)return e;for(const t of r){const r=n.Mo.get(t);e=e.unionWith(r.view.bo)}return e}}async function ia(e,t){const n=_(e),r=await Zi(n.localStore,t.query,!0),i=t.view.ko(r);return n.isPrimaryClient&&Xo(n,t.targetId,i.Co),i}async function sa(e){const t=_(e);return ts(t.localStore).then(e=>ta(t,e))}async function oa(e,t,n,r){const i=_(e),s=await function(e,t){const n=_(e),r=_(n.An);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Zt(e,t).next(t=>t?n.Wn.vn(e,t):kr.resolve(null)))}(i.localStore,t);null!==s?("pending"===n?await to(i.remoteStore):"acknowledged"===n||"rejected"===n?(Qo(i,t,r||null),Go(i,t),function(e,t){_(_(e).An).ee(t)}(i.localStore,t)):y(),await ta(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function aa(e,t){const n=_(e);if(fa(n),pa(n),!0===t&&!0!==n.Wo){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await ca(n,e.toArray());n.Wo=!0,await ho(n.remoteStore,!0);for(const r of t)Bs(n.remoteStore,r)}else if(!1===t&&!1!==n.Wo){const e=[];let t=Promise.resolve();n.Fo.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(Yo(n,i),Xi(n.localStore,i,!0))),qs(n.remoteStore,i)}),await t,await ca(n,e),function(e){const t=_(e);t.Uo.forEach((e,n)=>{qs(t.remoteStore,n)}),t.qo.hs(),t.Uo=new Map,t.Bo=new Gt(ae.comparator)}(n),n.Wo=!1,await ho(n.remoteStore,!1)}}async function ca(e,t,n){const r=_(e),i=[],s=[];for(const o of t){let e;const t=r.Fo.get(o);if(t&&0!==t.length){e=await Ji(r.localStore,nt(t[0]));for(const e of t){const t=r.Mo.get(e),n=await ia(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await es(r.localStore,o);e=await Ji(r.localStore,t),await Vo(r,ua(t),o,!1)}i.push(e)}return r.Oo.br(s),i}function ua(e){return Ge(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function la(e){const t=_(e);return _(_(t.localStore).persistence).Tn()}async function ha(e,t,n,r){const i=_(e);if(i.Wo)p("SyncEngine","Ignoring unexpected query state notification.");else if(i.Fo.has(t))switch(n){case"current":case"not-current":{const e=await ts(i.localStore),r=ln.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await ta(i,e,r);break}case"rejected":await Xi(i.localStore,t,!0),Yo(i,t,r);break;default:y()}}async function da(e,t,n){const r=fa(e);if(r.Wo){for(const e of t){if(r.Fo.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await es(r.localStore,e),n=await Ji(r.localStore,t);await Vo(r,ua(t),n.targetId,!1),Bs(r.remoteStore,n)}for(const e of n)r.Fo.has(e)&&await Xi(r.localStore,e,!1).then(()=>{qs(r.remoteStore,e),Yo(r,e)}).catch(yi)}}function fa(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Bo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ra.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=zo.bind(null,t),t.Oo.br=Eo.bind(null,t.eventManager),t.Oo.zo=ko.bind(null,t.eventManager),t}function pa(e){const t=_(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ho.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wo.bind(null,t),t}function ma(e,t,n){const r=_(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=_(e),r=kn(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Ye.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),void n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r));n._updateProgress(No(r));const i=new Ao(r,e.localStore,t.k);let s=await t.Ho();for(;s;){const e=await i.yo(s);e&&n._updateProgress(e),s=await t.Ho()}const o=await i.complete();await ta(e,o.In,void 0),await function(e,t){const n=_(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Ye.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(o.progress)}catch(e){g("SyncEngine","Loading bundle failed with "+e),n._failWith(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class ga{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Ls(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return zi(this.persistence,new Bi,e.initialUser,this.k)}Yo(e){return new ds(ps.ks,this.k)}Jo(e){return new Es}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class va extends ga{constructor(e,t,n){super(),this.tc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await ns(this.localStore),await this.tc.initialize(this,e),await pa(this.tc.syncEngine),await to(this.tc.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(e){return zi(this.persistence,new Bi,e.initialUser,this.k)}Xo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new _i(t,e.asyncQueue)}Yo(e){const t=Fi(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?si.withCacheSize(this.cacheSizeBytes):si.DEFAULT;return new Pi(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,As(),Ns(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(e){return new Es}}class ya extends va{constructor(e,t){super(e,t,!1),this.tc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.tc.syncEngine;this.sharedClientState instanceof Ts&&(this.sharedClientState.syncEngine={mi:oa.bind(null,t),gi:ha.bind(null,t),yi:da.bind(null,t),Tn:la.bind(null,t),_i:sa.bind(null,t)},await this.sharedClientState.start()),await this.persistence.sn(async e=>{await aa(this.tc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())})}Jo(e){const t=As();if(!Ts.Pt(t))throw new T(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Fi(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ts(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ba{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>qo(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=na.bind(null,this.syncEngine),await ho(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _o}createDatastore(e){const t=Ls(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new xs(r));var r;return function(e,t,n,r){return new Ms(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>qo(this.syncEngine,e,0),s=Ss.Pt()?new Ss:new ks,new Vs(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Mo(e,t,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);p("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await Us(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t){this.sc=e,this.k=t,this.metadata=new E,this.buffer=new Uint8Array,this.ic=new TextDecoder("utf-8"),this.rc().then(e=>{e&&e._o()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.payload)))},e=>this.metadata.reject(e))}close(){return this.sc.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.rc()}async rc(){const e=await this.oc();if(null===e)return null;const t=this.ic.decode(e),n=Number(t);isNaN(n)&&this.cc(`length string (${t}) is not valid number`);const r=await this.ac(n);return new Co(JSON.parse(r),e.length+n)}uc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async oc(){for(;this.uc()<0;)if(await this.hc())break;if(0===this.buffer.length)return null;const e=this.uc();e<0&&this.cc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ac(e){for(;this.buffer.length<e;)await this.hc()&&this.cc("Reached the end of bundle when more is expected.");const t=this.ic.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cc(e){throw this.sc.cancel(),new Error("Invalid bundle format: "+e)}async hc(){const e=await this.sc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=_(e),r=Ln(n.k)+"/documents",i={documents:t.map(e=>Cn(n.k,e))},s=await n.ji("BatchGetDocuments",r,i),o=new Map;s.forEach(e=>{const t=jn(n.k,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());b(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ut(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=ae.fromPath(t);this.mutations.push(new Bt(n,this.precondition(n)))}),await async function(e,t){const n=_(e),r=Ln(n.k)+"/documents",i={writes:t.map(e=>Fn(n.k,e))};await n.Bi("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw y();t=$.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new T(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Ct.updateTime(t):Ct.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual($.min()))throw new T(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ct.updateTime(t)}return Ct.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.lc=5,this.ur=new Rs(this.asyncQueue,"transaction_retry")}run(){this.lc-=1,this.fc()}fc(){this.ur.Zi(async()=>{const e=new Ta(this.datastore),t=this.dc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.wc(e)}))}).catch(e=>{this.wc(e)})})}dc(e){try{const t=this.updateFunction(e);return!ie(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}wc(e){this.lc>0&&this._c(e)?(this.lc-=1,this.asyncQueue.enqueueAndForget(()=>(this.fc(),Promise.resolve()))):this.deferred.reject(e)}_c(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Wt(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=P.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=go(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Sa(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Hi(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Oa(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ca(e);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>lo(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>lo(t.remoteStore,n)),e.onlineComponents=t}async function Ca(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Sa(e,new ga)),e.offlineComponents}async function xa(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Oa(e,new ba)),e.onlineComponents}function Aa(e){return Ca(e).then(e=>e.persistence)}function Na(e){return Ca(e).then(e=>e.localStore)}function La(e){return xa(e).then(e=>e.remoteStore)}function Ra(e){return xa(e).then(e=>e.syncEngine)}async function Da(e){const t=await xa(e),n=t.eventManager;return n.onListen=Fo.bind(null,t.syncEngine),n.onUnlisten=$o.bind(null,t.syncEngine),n}function Pa(e){return e.asyncQueue.enqueue(async()=>{const t=await Aa(e),n=await La(e);return t.setNetworkEnabled(!0),function(e){const t=_(e);return t.Gr.delete(0),$s(t)}(n)})}function ja(e){return e.asyncQueue.enqueue(async()=>{const t=await Aa(e),n=await La(e);return t.setNetworkEnabled(!1),async function(e){const t=_(e);t.Gr.add(0),await Us(t),t.Jr.set("Offline")}(n)})}function Ma(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=_(e);return n.persistence.runTransaction("read document","readonly",e=>n.Wn.Rn(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new T(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=go(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Na(e),t,n)),n.promise}function Fa(e,t,n={}){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new _a({next:s=>{t.enqueueAndForget(()=>To(e,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new T(I.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new T(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Oo(Qe(n.path),s,{includeMetadataChanges:!0,wo:!0});return Io(e,o)}(await Da(e),e.asyncQueue,t,n,r)),r.promise}function Va(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await Zi(e,t,!0),i=new Do(t,r.zn),s=i.Po(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=go(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Na(e),t,n)),n.promise}function $a(e,t,n={}){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new _a({next:n=>{t.enqueueAndForget(()=>To(e,o)),n.fromCache&&"server"===r.source?i.reject(new T(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Oo(n,s,{includeMetadataChanges:!0,wo:!0});return Io(e,o)}(await Da(e),e.asyncQueue,t,n,r)),r.promise}function Ua(e,t){const n=new _a(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).io.add(t),t.next()}(await Da(e),n)),()=>{n.nc(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).io.delete(t)}(await Da(e),n))}}function Ba(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>{const r=await function(e){return xa(e).then(e=>e.datastore)}(e);new Ea(e.asyncQueue,r,t,n).run()}),n.promise}function qa(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new Ia(e,t)}(function(e,t){if(e instanceof Uint8Array)return wa(e,t);if(e instanceof ArrayBuffer)return wa(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Ls(t));e.asyncQueue.enqueueAndForget(async()=>{ma(await Ra(e),i,r)})}function za(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=_(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Ye.getNamedQuery(e,t))}(await Na(e),t))}class Ha{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Wa{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Wa&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(e,t,n){if(!n)throw new T(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Qa(e,t,n,r){if(!0===t&&!0===r)throw new T(I.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ya(e){if(!ae.isDocumentKey(e))throw new T(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ja(e){if(ae.isDocumentKey(e))throw new T(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Xa(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":y()}function Za(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xa(e);throw new T(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function ec(e,t){if(t<=0)throw new T(I.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Qa("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tc({}),this._settingsFrozen=!1,e instanceof Wa?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wa(e.options.projectId)}(e))}get app(){if(!this._app)throw new T(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"gapi":const t=e.client;return b(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new A(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new T(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ka.get(e);t&&(p("ComponentProvider","Removing Datastore"),Ka.delete(e),t.terminate())}(this),Promise.resolve()}}function rc(e,t,n,r={}){var i;const s=(e=Za(e,nc))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=u.MOCK_USER;else{t=Object(o["f"])(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new T(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}e._authCredentials=new O(new k(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ic(this.firestore,e,this._key)}}class sc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new sc(this.firestore,e,this._query)}}class oc extends sc{constructor(e,t,n){super(e,t,Qe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ic(this.firestore,null,new ae(e))}withConverter(e){return new oc(this.firestore,e,this._path)}}function ac(e,t,...n){if(e=Object(o["k"])(e),Ga("collection","path",t),e instanceof nc){const r=H.fromString(t,...n);return Ja(r),new oc(e,null,r)}{if(!(e instanceof ic||e instanceof oc))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(H.fromString(t,...n));return Ja(r),new oc(e.firestore,null,r)}}function cc(e,t){if(e=Za(e,nc),Ga("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new sc(e,null,function(e){return new Ke(H.emptyPath(),e)}(t))}function uc(e,t,...n){if(e=Object(o["k"])(e),1===arguments.length&&(t=P.A()),Ga("doc","path",t),e instanceof nc){const r=H.fromString(t,...n);return Ya(r),new ic(e,null,new ae(r))}{if(!(e instanceof ic||e instanceof oc))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(H.fromString(t,...n));return Ya(r),new ic(e.firestore,e instanceof oc?e.converter:null,new ae(r))}}function lc(e,t){return e=Object(o["k"])(e),t=Object(o["k"])(t),(e instanceof ic||e instanceof oc)&&(t instanceof ic||t instanceof oc)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function hc(e,t){return e=Object(o["k"])(e),t=Object(o["k"])(t),e instanceof sc&&t instanceof sc&&e.firestore===t.firestore&&it(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dc{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Rs(this,"async_queue_retry"),this.bc=()=>{const e=Ns();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=Ns();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const t=Ns();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const t=new E;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!Ar(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const t=this.mc.then(()=>(this.Ic=!0,e().catch(e=>{this.Ec=e,this.Ic=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw m("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.Ic=!1,e))));return this.mc=t,t}enqueueAfterDelay(e,t,n){this.Pc(),this.Rc.indexOf(e)>-1&&(t=0);const r=mo.createAndSchedule(this,e,t,n,e=>this.Sc(e));return this.Tc.push(r),r}Pc(){this.Ec&&y()}verifyOperationInProgress(){}async Dc(){let e;do{e=this.mc,await e}while(e!==this.mc)}Cc(e){for(const t of this.Tc)if(t.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const t=this.Tc.indexOf(e);this.Tc.splice(t,1)}}function fc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class pc{constructor(){this._progressObserver={},this._taskCompletionResolver=new E,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=-1;class gc extends nc{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new dc,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||yc(this),this._firestoreClient.terminate()}}function vc(e){return e._firestoreClient||yc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function yc(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Ha(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ka(e._authCredentials,e._appCheckCredentials,e._queue,r)}function bc(e,t){Cc(e=Za(e,gc));const n=vc(e),r=e._freezeSettings(),i=new ba;return _c(n,i,new va(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function wc(e){Cc(e=Za(e,gc));const t=vc(e),n=e._freezeSettings(),r=new ba;return _c(t,r,new ya(r,n.cacheSizeBytes))}function _c(e,t,n){const r=new E;return e.asyncQueue.enqueue(async()=>{try{await Sa(e,n),await Oa(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===I.FAILED_PRECONDITION||e.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}}).then(()=>r.promise)}function Ic(e){if(e._initialized&&!e._terminated)throw new T(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new E;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!Or.Pt())return Promise.resolve();const t=e+"main";await Or.delete(t)}(Fi(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function Tc(e){return function(e){const t=new E;return e.asyncQueue.enqueueAndForget(async()=>Ko(await Ra(e),t)),t.promise}(vc(e=Za(e,gc)))}function Ec(e){return Pa(vc(e=Za(e,gc)))}function kc(e){return ja(vc(e=Za(e,gc)))}function Sc(e,t){const n=vc(e=Za(e,gc)),r=new pc;return qa(n,e._databaseId,t,r),r}function Oc(e,t){return za(vc(e=Za(e,gc)),t).then(t=>t?new sc(e,null,t.query):null)}function Cc(e){if(e._initialized||e._terminated)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ac(Y.fromBase64String(e))}catch(e){throw new T(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Ac(Y.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=/^__.*__$/;class Dc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms):new jt(e,this.data,t,this.fieldTransforms)}}class Pc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function jc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Mc{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new Mc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Oc({path:n,Fc:!1});return r.Lc(e),r}Bc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Oc({path:n,Fc:!1});return r.xc(),r}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return ru(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(0===e.length)throw this.qc("Document fields must not be empty");if(jc(this.$c)&&Rc.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class Fc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||Ls(e)}Qc(e,t,n,r=!1){return new Mc({$c:e,methodName:t,jc:n,path:K.emptyPath(),Fc:!1,Kc:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Vc(e){const t=e._freezeSettings(),n=Ls(e._databaseId);return new Fc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function $c(e,t,n,r,i,s={}){const o=e.Qc(s.merge||s.mergeFields?2:0,t,n,i);Zc("Data must be an object, but it was:",o,r);const a=Jc(r,o);let c,u;if(s.merge)c=new G(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=eu(t,r,n);if(!o.contains(i))throw new T(I.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);iu(e,i)||e.push(i)}c=new G(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new Dc(new Ie(a),c,u)}class Uc extends Nc{_toFieldTransform(e){if(2!==e.$c)throw 1===e.$c?e.qc(this._methodName+"() can only appear at the top level of your update data"):e.qc(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uc}}function Bc(e,t,n){return new Mc({$c:3,jc:t.settings.jc,methodName:e._methodName,Fc:n},t.databaseId,t.k,t.ignoreUndefinedProperties)}class qc extends Nc{_toFieldTransform(e){return new kt(e.path,new vt)}isEqual(e){return e instanceof qc}}class zc extends Nc{constructor(e,t){super(e),this.Wc=t}_toFieldTransform(e){const t=Bc(this,e,!0),n=this.Wc.map(e=>Yc(e,t)),r=new yt(n);return new kt(e.path,r)}isEqual(e){return this===e}}class Hc extends Nc{constructor(e,t){super(e),this.Wc=t}_toFieldTransform(e){const t=Bc(this,e,!0),n=this.Wc.map(e=>Yc(e,t)),r=new wt(n);return new kt(e.path,r)}isEqual(e){return this===e}}class Wc extends Nc{constructor(e,t){super(e),this.Gc=t}_toFieldTransform(e){const t=new It(e.k,dt(e.k,this.Gc));return new kt(e.path,t)}isEqual(e){return this===e}}function Kc(e,t,n,r){const i=e.Qc(1,t,n);Zc("Data must be an object, but it was:",i,r);const s=[],a=Ie.empty();B(r,(e,r)=>{const c=nu(t,e,n);r=Object(o["k"])(r);const u=i.Bc(c);if(r instanceof Uc)s.push(c);else{const e=Yc(r,u);null!=e&&(s.push(c),a.set(c,e))}});const c=new G(s);return new Pc(a,c,i.fieldTransforms)}function Gc(e,t,n,r,i,s){const a=e.Qc(1,t,n),c=[eu(t,r,n)],u=[i];if(s.length%2!=0)throw new T(I.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(eu(t,s[o])),u.push(s[o+1]);const l=[],h=Ie.empty();for(let f=c.length-1;f>=0;--f)if(!iu(l,c[f])){const e=c[f];let t=u[f];t=Object(o["k"])(t);const n=a.Bc(e);if(t instanceof Uc)l.push(e);else{const r=Yc(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new G(l);return new Pc(h,d,a.fieldTransforms)}function Qc(e,t,n,r=!1){return Yc(n,e.Qc(r?4:3,t))}function Yc(e,t){if(Xc(e=Object(o["k"])(e)))return Zc("Unsupported field value:",t,e),Jc(e,t);if(e instanceof Nc)return function(e,t){if(!jc(t.$c))throw t.qc(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.qc(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&4!==t.$c)throw t.qc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Yc(i,t.Uc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["k"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return dt(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=V.fromDate(e);return{timestampValue:In(t.k,n)}}if(e instanceof V){const n=new V(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:In(t.k,n)}}if(e instanceof Lc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Ac)return{bytesValue:Tn(t.k,e._byteString)};if(e instanceof ic){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.qc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Sn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.qc("Unsupported field value: "+Xa(e))}(e,t)}function Jc(e,t){const n={};return q(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):B(e,(e,r)=>{const i=Yc(r,t.Mc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Xc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof V||e instanceof Lc||e instanceof Ac||e instanceof ic||e instanceof Nc)}function Zc(e,t,n){if(!Xc(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Xa(n);throw"an object"===r?t.qc(e+" a custom object"):t.qc(e+" "+r)}}function eu(e,t,n){if((t=Object(o["k"])(t))instanceof xc)return t._internalPath;if("string"==typeof t)return nu(e,t);throw ru("Field path arguments must be of type string or ",e,!1,void 0,n)}const tu=new RegExp("[~\\*/\\[\\]]");function nu(e,t,n){if(t.search(tu)>=0)throw ru(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new xc(...t.split("."))._internalPath}catch(r){throw ru(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ru(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new T(I.INVALID_ARGUMENT,a+e+c)}function iu(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ic(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ou(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(au("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ou extends su{data(){return super.data()}}function au(e,t){return"string"==typeof t?nu(e,t):t instanceof xc?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uu extends su{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(au("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lu extends uu{data(e={}){return super.data(e)}}class hu{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new cu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new lu(this._firestore,this._userDataWriter,n.key,n,new cu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new lu(e._firestore,e._userDataWriter,n.doc.key,n.doc,new cu(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new lu(e._firestore,e._userDataWriter,t.doc.key,t.doc,new cu(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:du(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function du(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}function fu(e,t){return e instanceof uu&&t instanceof uu?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof hu&&t instanceof hu&&e._firestore===t._firestore&&hc(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(e){if(Je(e)&&0===e.explicitOrderBy.length)throw new T(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mu{}function gu(e,...t){for(const n of t)e=n._apply(e);return e}class vu extends mu{constructor(e,t,n){super(),this.zc=e,this.Hc=t,this.Jc=n,this.type="where"}_apply(e){const t=Vc(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new T(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Lu(o,s);const t=[];for(const n of o)t.push(Nu(r,e,n));a={arrayValue:{values:t}}}else a=Nu(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Lu(o,s),a=Qc(n,t,o,"in"===s||"not-in"===s);const c=Ne.create(i,s,a);return function(e,t){if(t.V()){const n=Ze(e);if(null!==n&&!n.isEqual(t.field))throw new T(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Xe(e);null!==r&&Ru(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.zc,this.Hc,this.Jc);return new sc(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function yu(e,t,n){const r=t,i=au("where",e);return new vu(i,r,n)}class bu extends mu{constructor(e,t){super(),this.zc=e,this.Yc=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new qe(t,n);return function(e,t){if(null===Xe(e)){const n=Ze(e);null!==n&&Ru(e,n,t.field)}}(e,r),r}(e._query,this.zc,this.Yc);return new sc(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Ke(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function wu(e,t="asc"){const n=t,r=au("orderBy",e);return new bu(r,n)}class _u extends mu{constructor(e,t,n){super(),this.type=e,this.Xc=t,this.Zc=n}_apply(e){return new sc(e.firestore,e.converter,rt(e._query,this.Xc,this.Zc))}}function Iu(e){return ec("limit",e),new _u("limit",e,"F")}function Tu(e){return ec("limitToLast",e),new _u("limitToLast",e,"L")}class Eu extends mu{constructor(e,t,n){super(),this.type=e,this.ta=t,this.ea=n}_apply(e){const t=Au(e,this.type,this.ta,this.ea);return new sc(e.firestore,e.converter,function(e,t){return new Ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function ku(...e){return new Eu("startAt",e,!0)}function Su(...e){return new Eu("startAfter",e,!1)}class Ou extends mu{constructor(e,t,n){super(),this.type=e,this.ta=t,this.ea=n}_apply(e){const t=Au(e,this.type,this.ta,this.ea);return new sc(e.firestore,e.converter,function(e,t){return new Ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Cu(...e){return new Ou("endBefore",e,!0)}function xu(...e){return new Ou("endAt",e,!1)}function Au(e,t,n,r){if(n[0]=Object(o["k"])(n[0]),n[0]instanceof su)return function(e,t,n,r,i){if(!r)throw new T(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of tt(e))if(o.field.isKeyField())s.push(me(t,r.key));else{const e=r.data.field(o.field);if(te(e))throw new T(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new T(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Ue(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=Vc(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new T(I.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new T(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!et(e)&&-1!==s.indexOf("/"))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(H.fromString(s));if(!ae.isDocumentKey(n))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new ae(n);a.push(me(t,i))}else{const e=Qc(n,r,s);a.push(e)}}return new Ue(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Nu(e,t,n){if("string"==typeof(n=Object(o["k"])(n))){if(""===n)throw new T(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!et(t)&&-1!==n.indexOf("/"))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(H.fromString(n));if(!ae.isDocumentKey(r))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return me(e,new ae(r))}if(n instanceof ic)return me(e,n._key);throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xa(n)}.`)}function Lu(e,t){if(!Array.isArray(e)||0===e.length)throw new T(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new T(I.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ru(e,t,n){if(!n.isEqual(t))throw new T(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{convertValue(e,t="none"){switch(ce(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ee(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){const n={};return B(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new Lc(Z(e.latitude),Z(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ne(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(re(e));default:return null}}convertTimestamp(e){const t=X(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=H.fromString(e);b(tr(n));const r=new Wa(n.get(1),n.get(3)),i=new ae(n.popFirst(5));return r.isEqual(t)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class ju extends Du{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ac(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ic(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Vc(e)}set(e,t,n){this._verifyNotCommitted();const r=Fu(e,this._firestore),i=Pu(r.converter,t,n),s=$c(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Ct.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Fu(e,this._firestore);let s;return s="string"==typeof(t=Object(o["k"])(t))||t instanceof xc?Gc(this._dataReader,"WriteBatch.update",i._key,t,n,r):Kc(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Ct.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Fu(e,this._firestore);return this._mutations=this._mutations.concat(new Ut(t._key,Ct.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Fu(e,t){if((e=Object(o["k"])(e)).firestore!==t)throw new T(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(e){e=Za(e,ic);const t=Za(e.firestore,gc);return Fa(vc(t),e._key).then(n=>Zu(t,e,n))}class $u extends Du{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ac(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ic(this.firestore,null,t)}}function Uu(e){e=Za(e,ic);const t=Za(e.firestore,gc),n=vc(t),r=new $u(t);return Ma(n,e._key).then(n=>new uu(t,r,e._key,n,new cu(null!==n&&n.hasLocalMutations,!0),e.converter))}function Bu(e){e=Za(e,ic);const t=Za(e.firestore,gc);return Fa(vc(t),e._key,{source:"server"}).then(n=>Zu(t,e,n))}function qu(e){e=Za(e,sc);const t=Za(e.firestore,gc),n=vc(t),r=new $u(t);return pu(e._query),$a(n,e._query).then(n=>new hu(t,r,e,n))}function zu(e){e=Za(e,sc);const t=Za(e.firestore,gc),n=vc(t),r=new $u(t);return Va(n,e._query).then(n=>new hu(t,r,e,n))}function Hu(e){e=Za(e,sc);const t=Za(e.firestore,gc),n=vc(t),r=new $u(t);return $a(n,e._query,{source:"server"}).then(n=>new hu(t,r,e,n))}function Wu(e,t,n){e=Za(e,ic);const r=Za(e.firestore,gc),i=Pu(e.converter,t,n);return Xu(r,[$c(Vc(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Ct.none())])}function Ku(e,t,n,...r){e=Za(e,ic);const i=Za(e.firestore,gc),s=Vc(i);let a;return a="string"==typeof(t=Object(o["k"])(t))||t instanceof xc?Gc(s,"updateDoc",e._key,t,n,r):Kc(s,"updateDoc",e._key,t),Xu(i,[a.toMutation(e._key,Ct.exists(!0))])}function Gu(e){return Xu(Za(e.firestore,gc),[new Ut(e._key,Ct.none())])}function Qu(e,t){const n=Za(e.firestore,gc),r=uc(e),i=Pu(e.converter,t);return Xu(n,[$c(Vc(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Ct.exists(!1))]).then(()=>r)}function Yu(e,...t){var n,r,i;e=Object(o["k"])(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||fc(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(fc(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof ic)l=Za(e.firestore,gc),h=Qe(e._key.path),u={next:n=>{t[a]&&t[a](Zu(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Za(e,sc);l=Za(n.firestore,gc),h=n._query;const r=new $u(l);u={next:e=>{t[a]&&t[a](new hu(l,r,n,e))},error:t[a+1],complete:t[a+2]},pu(e._query)}return function(e,t,n,r){const i=new _a(r),s=new Oo(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>Io(await Da(e),s)),()=>{i.nc(),e.asyncQueue.enqueueAndForget(async()=>To(await Da(e),s))}}(vc(l),h,c,u)}function Ju(e,t){return Ua(vc(e=Za(e,gc)),fc(t)?t:{next:t})}function Xu(e,t){return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>Uo(await Ra(e),t,n)),n.promise}(vc(e),t)}function Zu(e,t,n){const r=n.docs.get(t._key),i=new $u(e);return new uu(e,i,t._key,r,new cu(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Vc(e)}get(e){const t=Fu(e,this._firestore),n=new ju(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return y();const r=e[0];if(r.isFoundDocument())return new su(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new su(this._firestore,n,t._key,null,t.converter);throw y()})}set(e,t,n){const r=Fu(e,this._firestore),i=Pu(r.converter,t,n),s=$c(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Fu(e,this._firestore);let s;return s="string"==typeof(t=Object(o["k"])(t))||t instanceof xc?Gc(this._dataReader,"Transaction.update",i._key,t,n,r):Kc(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Fu(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Fu(e,this._firestore),n=new $u(this._firestore);return super.get(e).then(e=>new uu(this._firestore,n,t._key,e._document,new cu(!1,!1),t.converter))}}function tl(e,t){return Ba(vc(e=Za(e,gc)),n=>t(new el(e,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(){return new Uc("deleteField")}function rl(){return new qc("serverTimestamp")}function il(...e){return new zc("arrayUnion",e)}function sl(...e){return new Hc("arrayRemove",e)}function ol(e){return new Wc("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){l=e}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("firestore",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new gc(r,new C(e.getProvider("auth-internal")),new L(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC")),Object(r["registerVersion"])(c,"3.4.4",e),Object(r["registerVersion"])(c,"3.4.4","esm2017")}()}).call(this,n("4362"))},"0b42":function(e,t,n){var r=n("da84"),i=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),u=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,s(t)&&(t===u||i(t.prototype))?t=void 0:o(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?u:t}},"0cb2":function(e,t,n){var r=n("e330"),i=n("7b0b"),s=Math.floor,o=r("".charAt),a=r("".replace),c=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,h,d){var f=n+e.length,p=r.length,m=l;return void 0!==h&&(h=i(h),m=u),a(d,m,(function(i,a){var u;switch(o(a,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,f);case"<":u=h[c(a,1,-1)];break;default:var l=+a;if(0===l)return i;if(l>p){var d=s(l/10);return 0===d?i:d<=p?void 0===r[d-1]?o(a,1):r[d-1]+o(a,1):i}u=r[l-1]}return void 0===u?"":u}))}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),s=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},"107c":function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp;e.exports=r((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1148:function(e,t,n){"use strict";var r=n("da84"),i=n("5926"),s=n("577e"),o=n("1d80"),a=r.RangeError;e.exports=function(e){var t=s(o(this)),n="",r=i(e);if(r<0||r==1/0)throw a("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(n+=t);return n}},1276:function(e,t,n){"use strict";var r=n("2ba4"),i=n("c65b"),s=n("e330"),o=n("d784"),a=n("44e7"),c=n("825a"),u=n("1d80"),l=n("4840"),h=n("8aa5"),d=n("50c4"),f=n("577e"),p=n("dc4a"),m=n("4dae"),g=n("14c3"),v=n("9263"),y=n("9f7f"),b=n("d039"),w=y.UNSUPPORTED_Y,_=4294967295,I=Math.min,T=[].push,E=s(/./.exec),k=s(T),S=s("".slice),O=!b((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(e,t,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var s=f(u(this)),o=void 0===n?_:n>>>0;if(0===o)return[];if(void 0===e)return[s];if(!a(e))return i(t,s,e,o);var c,l,h,d=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,y=new RegExp(e.source,p+"g");while(c=i(v,y,s)){if(l=y.lastIndex,l>g&&(k(d,S(s,g,c.index)),c.length>1&&c.index<s.length&&r(T,d,m(c,1)),h=c[0].length,g=l,d.length>=o))break;y.lastIndex===c.index&&y.lastIndex++}return g===s.length?!h&&E(y,"")||k(d,""):k(d,S(s,g)),d.length>o?m(d,0,o):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:i(t,this,e,n)}:t,[function(t,n){var r=u(this),o=void 0==t?void 0:p(t,e);return o?i(o,t,r,n):i(s,f(r),t,n)},function(e,r){var i=c(this),o=f(e),a=n(s,i,o,r,s!==t);if(a.done)return a.value;var u=l(i,RegExp),p=i.unicode,m=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(w?"g":"y"),v=new u(w?"^(?:"+i.source+")":i,m),y=void 0===r?_:r>>>0;if(0===y)return[];if(0===o.length)return null===g(v,o)?[o]:[];var b=0,T=0,E=[];while(T<o.length){v.lastIndex=w?0:T;var O,C=g(v,w?S(o,T):o);if(null===C||(O=I(d(v.lastIndex+(w?T:0)),o.length))===b)T=h(o,T,p);else{if(k(E,S(o,b,T)),E.length===y)return E;for(var x=1;x<=C.length-1;x++)if(k(E,C[x]),E.length===y)return E;T=b=O}}return k(E,S(o,b)),E}]}),!O,w)},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"132d":function(e,t,n){"use strict";var r,i=n("5530"),s=(n("c96a"),n("d3b7"),n("caad"),n("2532"),n("ac1f"),n("00b4"),n("a9e3"),n("498a"),n("7db0"),n("fb6a"),n("4804"),n("7e2b")),o=n("a9ad"),a=n("af2b"),c=n("7560"),u=n("80d2"),l=n("2b0e"),h=n("58df");function d(e){return["fas","far","fal","fab","fad","fak"].some((function(t){return e.includes(t)}))}function f(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(r||(r={}));var p=Object(h["a"])(s["a"],o["a"],a["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),Object(u["u"])(this,e)},getSize:function(){var e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=Object(u["r"])(e).find((function(t){return e[t]}));return t&&r[t]||Object(u["g"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(i["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var e=this.getSize(),t=Object(i["a"])(Object(i["a"])({},this.getDefaultData()),{},{style:e?{fontSize:e,height:e,width:e}:void 0});return this.applyColors(t),t},applyColors:function(e){e.class=Object(i["a"])(Object(i["a"])({},e.class),this.themeClasses),this.setTextColor(this.color,e)},renderFontIcon:function(e,t){var n=[],r=this.getDefaultData(),i="material-icons",s=e.indexOf("-"),o=s<=-1;o?n.push(e):(i=e.slice(0,s),d(i)&&(i="")),r.class[i]=!0,r.class[e]=!o;var a=this.getSize();return a&&(r.style={fontSize:a}),this.applyColors(r),t(this.hasClickListener?"button":this.tag,r,n)},renderSvgIcon:function(e,t){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",n,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent:function(e,t){var n={class:{"v-icon__component":!0}},r=this.getSize();r&&(n.style={fontSize:r,height:r,width:r}),this.applyColors(n);var i=e.component;return n.props=e.props,n.nativeOn=n.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(i,n)])}},render:function(e){var t=this.getIcon();return"string"===typeof t?f(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});t["a"]=l["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(e,t){var n=t.data,r=t.children,i="";return n.domProps&&(i=n.domProps.textContent||n.domProps.innerHTML||i,delete n.domProps.textContent,delete n.domProps.innerHTML),e(p,n,i?[i]:r)}})},"14c3":function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("825a"),o=n("1626"),a=n("c6b6"),c=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(o(n)){var r=i(n,e,t);return null!==r&&s(r),r}if("RegExp"===a(e))return i(c,e,t);throw u("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==o)try{a(e,"forEach",o)}catch(t){e.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},"15fd":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("a4d3"),n("b64b");function r(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function i(e,t){if(null==e)return{};var n,i,s=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"166a":function(e,t,n){},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=i("forEach");e.exports=s?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},1862:function(e,t,n){"use strict";var r=n("7ded"),i=n("0829"),s=n("1fd5"),o=n("22e5");const a="@firebase/firestore-compat",c="0.1.13";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new i["g"]("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"===typeof Uint8Array)throw new i["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(i["r"])())throw new i["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return h(),new d(i["b"].fromBase64String(e))}static fromUint8Array(e){return l(),new d(i["b"].fromUint8Array(e))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e){return p(e,["next","error","complete"])}function p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{enableIndexedDbPersistence(e,t){return Object(i["F"])(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(i["G"])(e._delegate)}clearIndexedDbPersistence(e){return Object(i["x"])(e._delegate)}}class g{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof i["m"]||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(i["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(i["A"])(this._delegate,e,t,n)}enableNetwork(){return Object(i["H"])(this._delegate)}disableNetwork(){return Object(i["D"])(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(i["t"])("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(i["lb"])(this._delegate)}onSnapshotsInSync(e){return Object(i["Y"])(this._delegate,e)}get app(){if(!this._appCompat)throw new i["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new N(this,Object(i["y"])(this._delegate,e))}catch(t){throw T(t,"collection()","Firestore.collection()")}}doc(e){try{return new I(this,Object(i["E"])(this._delegate,e))}catch(t){throw T(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new C(this,Object(i["z"])(this._delegate,e))}catch(t){throw T(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(i["db"])(this._delegate,t=>e(new b(this,t)))}batch(){return Object(i["K"])(this._delegate),new w(new i["l"](this._delegate,e=>Object(i["L"])(this._delegate,e)))}loadBundle(e){return Object(i["V"])(this._delegate,e)}namedQuery(e){return Object(i["W"])(this._delegate,e).then(e=>e?new C(this,e):null)}}class v extends i["a"]{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new i["b"](e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return I.forKey(t,this.firestore,null)}}function y(e){Object(i["gb"])(e)}class b{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new v(e)}get(e){const t=L(e);return this._delegate.get(t).then(e=>new S(this._firestore,new i["e"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const r=L(e);return n?(u("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=L(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=L(e);return this._delegate.delete(t),this}}class w{constructor(e){this._delegate=e}set(e,t,n){const r=L(e);return n?(u("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=L(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=L(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class _{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new i["i"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new O(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=_.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new _(e,new v(e),t),r.set(t,i)),i}}_.INSTANCES=new WeakMap;class I{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}static forPath(e,t,n){if(e.length%2!==0)throw new i["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new I(t,new i["d"](t._delegate,n,new i["n"](e)))}static forKey(e,t,n){return new I(t,new i["d"](t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new N(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new N(this.firestore,Object(i["y"])(this._delegate,e))}catch(t){throw T(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Object(s["k"])(e),e instanceof i["d"]&&Object(i["cb"])(this._delegate,e)}set(e,t){t=u("DocumentReference.set",t);try{return t?Object(i["fb"])(this._delegate,e,t):Object(i["fb"])(this._delegate,e)}catch(n){throw T(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(i["kb"])(this._delegate,e):Object(i["kb"])(this._delegate,e,t,...n)}catch(r){throw T(r,"updateDoc()","DocumentReference.update()")}}delete(){return Object(i["B"])(this._delegate)}onSnapshot(...e){const t=E(e),n=k(e,e=>new S(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(i["X"])(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["N"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["O"])(this._delegate):Object(i["M"])(this._delegate),t.then(e=>new S(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new I(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function T(e,t,n){return e.message=e.message.replace(t,n),e}function E(e){for(const t of e)if("object"===typeof t&&!f(t))return t;return{}}function k(e,t){var n,r;let i;return i=f(e[0])?e[0]:f(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class S{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new I(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class O extends S{data(e){const t=this._delegate.data(e);return Object(i["q"])(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class C{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}where(e,t,n){try{return new C(this.firestore,Object(i["ab"])(this._delegate,Object(i["mb"])(e,t,n)))}catch(r){throw T(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new C(this.firestore,Object(i["ab"])(this._delegate,Object(i["Z"])(e,t)))}catch(n){throw T(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new C(this.firestore,Object(i["ab"])(this._delegate,Object(i["T"])(e)))}catch(t){throw T(t,"limit()","Query.limit()")}}limitToLast(e){try{return new C(this.firestore,Object(i["ab"])(this._delegate,Object(i["U"])(e)))}catch(t){throw T(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new C(this.firestore,Object(i["ab"])(this._delegate,Object(i["jb"])(...e)))}catch(t){throw T(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new C(this.firestore,Object(i["ab"])(this._delegate,Object(i["ib"])(...e)))}catch(t){throw T(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new C(this.firestore,Object(i["ab"])(this._delegate,Object(i["J"])(...e)))}catch(t){throw T(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new C(this.firestore,Object(i["ab"])(this._delegate,Object(i["I"])(...e)))}catch(t){throw T(t,"endAt()","Query.endAt()")}}isEqual(e){return Object(i["bb"])(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["Q"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["R"])(this._delegate):Object(i["P"])(this._delegate),t.then(e=>new A(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=E(e),n=k(e,e=>new A(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(i["X"])(this._delegate,t,n)}withConverter(e){return new C(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class x{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new O(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class A{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new C(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new O(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new x(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new O(this._firestore,n))})}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class N extends C{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new I(this.firestore,e):null}doc(e){try{return new I(this.firestore,void 0===e?Object(i["E"])(this._delegate):Object(i["E"])(this._delegate,e))}catch(t){throw T(t,"doc()","CollectionReference.doc()")}}add(e){return Object(i["u"])(this._delegate,e).then(e=>new I(this.firestore,e))}isEqual(e){return Object(i["cb"])(this._delegate,e._delegate)}withConverter(e){return new N(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function L(e){return Object(i["p"])(e,i["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(...e){this._delegate=new i["f"](...e)}static documentId(){return new R(i["o"].keyField().canonicalString())}isEqual(e){return e=Object(s["k"])(e),e instanceof i["f"]&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(i["eb"])();return e._methodName="FieldValue.serverTimestamp",new D(e)}static delete(){const e=Object(i["C"])();return e._methodName="FieldValue.delete",new D(e)}static arrayUnion(...e){const t=Object(i["w"])(...e);return t._methodName="FieldValue.arrayUnion",new D(t)}static arrayRemove(...e){const t=Object(i["v"])(...e);return t._methodName="FieldValue.arrayRemove",new D(t)}static increment(e){const t=Object(i["S"])(e);return t._methodName="FieldValue.increment",new D(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={Firestore:g,GeoPoint:i["h"],Timestamp:i["k"],Blob:d,Transaction:b,WriteBatch:w,DocumentReference:I,DocumentSnapshot:S,Query:C,QueryDocumentSnapshot:O,QuerySnapshot:A,CollectionReference:N,FieldPath:R,FieldValue:D,setLogLevel:y,CACHE_SIZE_UNLIMITED:i["c"]};function j(e,t){e.INTERNAL.registerComponent(new o["a"]("firestore-compat",e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)},"PUBLIC").setServiceProps(Object.assign({},P)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){j(e,(e,t)=>new g(e,t,new m)),e.registerVersion(a,c)}M(r["a"])},"18a5":function(e,t,n){"use strict";var r=n("23e7"),i=n("857a"),s=n("af03");r({target:"String",proto:!0,forced:s("anchor")},{anchor:function(e){return i(this,"a","name",e)}})},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),s=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw s("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},"1b2c":function(e,t,n){},"1baa":function(e,t,n){"use strict";var r=n("5530"),i=(n("899c"),n("a9e3"),n("4de4"),n("d3b7"),n("a434"),n("159b"),n("fb6a"),n("7db0"),n("c740"),n("166a"),n("2b0e")),s=n("80d2"),o=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["i"]}}}),a=n("a452"),c=n("7560"),u=n("58df"),l=n("d9bd"),h=Object(u["a"])(o,a["a"],c["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(r["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var e=this;return this.items.filter((function(t,n){return e.toggleMethod(e.getValue(t,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var e=this;if(!this.multiple)return function(t){return e.valueComparator(e.internalValue,t)};var t=this.internalValue;return Array.isArray(t)?function(n){return t.some((function(t){return e.valueComparator(t,n)}))}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(l["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(e,t){return void 0===e.value?t:e.value},onClick:function(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register:function(e){var t=this,n=this.items.push(e)-1;e.$on("change",(function(){return t.onClick(e)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,n)},unregister:function(e){if(!this._isDestroyed){var t=this.items.indexOf(e),n=this.getValue(e,t);this.items.splice(t,1);var r=this.selectedValues.indexOf(n);if(!(r<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(e){return e!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(e,t){var n=this.getValue(e,t);e.isActive=this.toggleMethod(n)},updateItemsState:function(){var e=this;this.$nextTick((function(){if(e.mandatory&&!e.selectedItems.length)return e.updateMandatory();e.items.forEach(e.updateItem)}))},updateInternalValue:function(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory:function(e){if(this.items.length){var t=this.items.slice();e&&t.reverse();var n=t.find((function(e){return!e.disabled}));if(n){var r=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,r))}}},updateMultiple:function(e){var t=Array.isArray(this.internalValue)?this.internalValue:[],n=t.slice(),r=n.findIndex((function(t){return t===e}));this.mandatory&&r>-1&&n.length-1<1||null!=this.max&&r<0&&n.length+1>this.max||(r>-1?n.splice(r,1):n.push(e),this.internalValue=n)},updateSingle:function(e){var t=e===this.internalValue;this.mandatory&&t||(this.internalValue=t?void 0:e)}},render:function(e){return e(this.tag,this.genData(),this.$slots.default)}}),d=(h.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),n("a9ad"));t["a"]=Object(u["a"])(h,d["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},h.options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(r["a"])(Object(r["a"])({},h.options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}})},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1c87":function(e,t,n){"use strict";var r=n("ade3"),i=n("5530"),s=(n("9911"),n("498a"),n("99af"),n("ac1f"),n("5319"),n("2b0e")),o=n("5607"),a=n("80d2");t["a"]=s["a"].extend({name:"routable",directives:{Ripple:o["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var e={};return this.to||(this.activeClass&&(e[this.activeClass]=this.isActive),this.proxyClass&&(e[this.proxyClass]=this.isActive)),e},computedRipple:function(){var e;return null!=(e=this.ripple)?e:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{generateRouteLink:function(){var e,t,n=this.exact,s=(e={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(r["a"])(e,this.to?"nativeOn":"on",Object(i["a"])(Object(i["a"])({},this.$listeners),"click"in this?{click:this.click}:void 0)),Object(r["a"])(e,"ref","link"),e);if("undefined"===typeof this.exact&&(n="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var o=this.activeClass,a=this.exactActiveClass||o;this.proxyClass&&(o="".concat(o," ").concat(this.proxyClass).trim(),a="".concat(a," ").concat(this.proxyClass).trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:n,exactPath:this.exactPath,activeClass:o,exactActiveClass:a,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:t,data:s}},onRouteChange:function(){var e=this;if(this.to&&this.$refs.link&&this.$route){var t="".concat(this.activeClass||""," ").concat(this.proxyClass||"").trim(),n="".concat(this.exactActiveClass||""," ").concat(this.proxyClass||"").trim()||t,r="_vnode.data.class."+(this.exact?n:t);this.$nextTick((function(){!Object(a["l"])(e.$refs.link,r)===e.isActive&&e.toggle()}))}},toggle:function(){this.isActive=!this.isActive}}})},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var o=e.apply(t,n);function a(e){r(o,i,s,a,c,"next",e)}function c(e){r(o,i,s,a,c,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");e.exports=function(e){return s>=51||!r((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1f5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return Fe})),n.d(t,"c",(function(){return ut})),n.d(t,"d",(function(){return ft})),n.d(t,"e",(function(){return mt})),n.d(t,"f",(function(){return pt})),n.d(t,"g",(function(){return Ze})),n.d(t,"h",(function(){return dt})),n.d(t,"i",(function(){return Lr})),n.d(t,"j",(function(){return Wi})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return Er})),n.d(t,"m",(function(){return vt})),n.d(t,"n",(function(){return bt})),n.d(t,"o",(function(){return wt})),n.d(t,"p",(function(){return I})),n.d(t,"q",(function(){return Ne})),n.d(t,"r",(function(){return v})),n.d(t,"s",(function(){return Pn})),n.d(t,"t",(function(){return S})),n.d(t,"u",(function(){return si})),n.d(t,"v",(function(){return fe})),n.d(t,"x",(function(){return qt})),n.d(t,"y",(function(){return An})),n.d(t,"z",(function(){return qi})),n.d(t,"A",(function(){return Ln})),n.d(t,"B",(function(){return zt})),n.d(t,"C",(function(){return Bt})),n.d(t,"D",(function(){return Re})),n.d(t,"F",(function(){return Wt})),n.d(t,"G",(function(){return d})),n.d(t,"H",(function(){return Xt})),n.d(t,"I",(function(){return pn})),n.d(t,"J",(function(){return vn})),n.d(t,"K",(function(){return ii})),n.d(t,"L",(function(){return de})),n.d(t,"M",(function(){return rr})),n.d(t,"N",(function(){return Qt})),n.d(t,"O",(function(){return Dt})),n.d(t,"P",(function(){return Cr})),n.d(t,"Q",(function(){return Br})),n.d(t,"R",(function(){return ni})),n.d(t,"S",(function(){return Tn})),n.d(t,"T",(function(){return Pt})),n.d(t,"U",(function(){return xr})),n.d(t,"V",(function(){return Ur})),n.d(t,"W",(function(){return ei})),n.d(t,"X",(function(){return Zt})),n.d(t,"Y",(function(){return Ut})),n.d(t,"Z",(function(){return Gt})),n.d(t,"ab",(function(){return Et})),n.d(t,"bb",(function(){return Rt})),n.d(t,"cb",(function(){return Mt})),n.d(t,"db",(function(){return Kt})),n.d(t,"eb",(function(){return Yt})),n.d(t,"fb",(function(){return Or})),n.d(t,"gb",(function(){return $r})),n.d(t,"hb",(function(){return Xr})),n.d(t,"ib",(function(){return Ct})),n.d(t,"jb",(function(){return rn})),n.d(t,"kb",(function(){return sn})),n.d(t,"lb",(function(){return Nr})),n.d(t,"mb",(function(){return nn})),n.d(t,"nb",(function(){return en})),n.d(t,"ob",(function(){return Ht})),n.d(t,"w",(function(){return Ts})),n.d(t,"E",(function(){return _s}));var r=n("1fd5"),i=n("589b");function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new r["b"]("auth","Firebase",h()),m=new o["b"]("@firebase/auth");function g(e,...t){m.logLevel<=o["a"].ERROR&&m.error(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw _(e,...t)}function y(e,...t){return _(e,...t)}function b(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n}),s=new r["b"]("auth","Firebase",i);return s.create(t,{appName:e.name})}function w(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&v(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function I(e,t,...n){if(!e)throw _(t,...n)}function T(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function E(e,t){e||T(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Map;function S(e){E(e instanceof Function,"Expected a class definition");let t=k.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,k.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(S);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function x(){return"http:"===A()||"https:"===A()}function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(x()||Object(r["n"])()||"connection"in navigator))||navigator.onLine}function L(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["s"])()||Object(r["u"])()}get(){return N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){E(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void T("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void T("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void T("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},M=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,i,s={}){return $(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=Object(r["x"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()(B(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function $(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},j),t);try{const t=new q(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw z(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw z(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw z(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);v(e,a)}}catch(s){if(s instanceof r["c"])throw s;v(e,"network-request-failed")}}async function U(e,t,n,r,i={}){const s=await V(e,t,n,r,i);return"mfaPendingCredential"in s&&v(e,"multi-factor-auth-required",{_serverResponse:s}),s}function B(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?D(e.config,i):`${e.config.apiScheme}://${i}`}class q{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(y(this.auth,"network-request-failed")),M.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function z(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=y(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){return V(e,"POST","/v1/accounts:delete",t)}async function W(e,t){return V(e,"POST","/v1/accounts:update",t)}async function K(e,t){return V(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t=!1){const n=Object(r["k"])(e),i=await n.getIdToken(t),s=J(i);I(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:G(Y(s.auth_time)),issuedAtTime:G(Y(s.iat)),expirationTime:G(Y(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Y(e){return 1e3*Number(e)}function J(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(s){return g("Caught error parsing JWT payload as JSON",s),null}}function X(e){const t=J(e);return I(t,"internal-error"),I("undefined"!==typeof t.exp,"internal-error"),I("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&ee(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function ee({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Z(e,K(n,{idToken:r}));I(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?oe(s.providerUserInfo):[],a=se(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ne(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ie(e){const t=Object(r["k"])(e);await re(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function se(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function oe(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t){const n=await $(e,{},async()=>{const n=Object(r["x"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=B(e,i,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I("undefined"!==typeof e.idToken,"internal-error"),I("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ae(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ce;return n&&(I("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(I("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(I("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ce,this.toJSON())}_performRefresh(){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t){I("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class le{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new te(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new ne(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Z(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Q(this,e)}reload(){return ie(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await re(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Z(this,H(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:T}=t;I(y&&T,e,"internal-error");const E=ce.fromJSON(this.name,T);I("string"===typeof y,e,"internal-error"),ue(l,e.name),ue(h,e.name),I("boolean"===typeof b,e,"internal-error"),I("boolean"===typeof w,e,"internal-error"),ue(d,e.name),ue(f,e.name),ue(p,e.name),ue(m,e.name),ue(g,e.name),ue(v,e.name);const k=new le({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(k.providerData=_.map(e=>Object.assign({},e))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new ce;r.updateFromServerResponse(t);const i=new le({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await re(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(S(de),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||S(de);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=le._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(c){}})),new pe(i,e,n)):new pe(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(Ie(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=Object(r["l"])()){return/firefox\//i.test(e)}function ve(e=Object(r["l"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=Object(r["l"])()){return/crios\//i.test(e)}function be(e=Object(r["l"])()){return/iemobile/i.test(e)}function we(e=Object(r["l"])()){return/android/i.test(e)}function _e(e=Object(r["l"])()){return/blackberry/i.test(e)}function Ie(e=Object(r["l"])()){return/webos/i.test(e)}function Te(e=Object(r["l"])()){return/iphone|ipad|ipod/i.test(e)}function Ee(e=Object(r["l"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ke(e=Object(r["l"])()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Se(){return Object(r["q"])()&&10===document.documentMode}function Oe(e=Object(r["l"])()){return Te(e)||we(e)||Ie(e)||_e(e)||/windows phone/i.test(e)||be(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e,t=[]){let n;switch(e){case"Browser":n=me(Object(r["l"])());break;case"Worker":n=`${me(Object(r["l"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Le(this),this.idTokenSubscription=new Le(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=S(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await re(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=L()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["k"])(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(S(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&S(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[S(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return I(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Ne(e){return Object(r["k"])(e)}class Le{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["g"])(e=>this.observer=e)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Re(e,t,n){const r=Ne(e);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=De(t),{host:o,port:a}=Pe(t),c=null===a?"":":"+a;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Me()}function De(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Pe(e){const t=De(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:je(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:je(t)}}}function je(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Me(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return T("not implemented")}_getIdTokenResponse(e){return T("not implemented")}_linkToIdToken(e,t){return T("not implemented")}_getReauthenticationResolver(e){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t){return V(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function $e(e,t){return V(e,"POST","/v1/accounts:update",t)}async function Ue(e,t){return V(e,"POST","/v1/accounts:update",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function qe(e,t){return V(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function ze(e,t){return qe(e,t)}async function He(e,t){return qe(e,t)}async function We(e,t){return qe(e,t)}async function Ke(e,t){return qe(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function Qe(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Fe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ye(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ye(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Be(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ge(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return $e(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qe(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="http://localhost";class Ze extends Fe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Ze(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Je(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Je(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Je(e,t)}buildRequest(){const e={requestUri:Xe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["x"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function tt(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function nt(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw z(e,"account-exists-with-different-credential",n);return n}const rt={["USER_NOT_FOUND"]:"user-not-found"};async function it(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),rt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Fe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return it(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new st({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=Object(r["y"])(Object(r["j"])(e))["link"],n=t?Object(r["y"])(Object(r["j"])(t))["deep_link_id"]:null,i=Object(r["y"])(Object(r["j"])(e))["deep_link_id"],s=i?Object(r["y"])(Object(r["j"])(i))["link"]:null;return s||i||n||t||e}class ct{constructor(e){var t,n,i,s,o,a;const c=Object(r["y"])(Object(r["j"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ot(null!==(i=c["mode"])&&void 0!==i?i:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new ct(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,t){return Ye._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return I(n,"argument-error"),Ye._fromEmailAndCode(e,n.code,n.tenantId)}}ut.PROVIDER_ID="password",ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class dt extends ht{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),Ze._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),Ze._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return dt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return dt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new dt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends ht{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com",ft.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pt.credential(t,n)}catch(r){return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com",pt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends ht{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com",mt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gt="http://localhost";class vt extends Fe{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Je(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Je(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Je(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new vt(n,i):null}static _create(e,t){return new vt(e,t)}buildRequest(){return{requestUri:gt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="saml.";class bt extends lt{constructor(e){I(e.startsWith(yt),"argument-error"),super(e)}static credentialFromResult(e){return bt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return bt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=vt.fromJSON(e);return I(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return vt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends ht{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _t(e,t){return U(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.TWITTER_SIGN_IN_METHOD="twitter.com",wt.PROVIDER_ID="twitter.com";class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await le._fromIdTokenResponse(e,n,r),s=Tt(n),o=new It({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Tt(n);return new It({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(e){var t;const n=Ne(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new It({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await _t(n,{returnSecureToken:!0}),i=await It._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,kt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new kt(e,t,n,r)}}function St(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw kt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(e,t){const n=Object(r["k"])(e);await At(!0,n,t);const{providerUserInfo:i}=await W(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Ot(i||[]);return n.providerData=n.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function xt(e,t,n=!1){const r=await Z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return It._forOperation(e,"link",r)}async function At(e,t,n){await re(t);const r=Ot(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";I(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Z(e,St(r,i,t,e),n);I(s.idToken,r,"internal-error");const o=J(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(e.uid===a,r,"user-mismatch"),It._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&v(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(e,t,n=!1){const r="signIn",i=await St(e,r,t),s=await It._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Rt(e,t){return Lt(Ne(e),t)}async function Dt(e,t){const n=Object(r["k"])(e);return await At(!1,n,t.providerId),xt(n,t)}async function Pt(e,t){return Nt(Object(r["k"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e,t){return U(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(e,t){const n=Ne(e),r=await jt(n,{token:t,returnSecureToken:!0}),i=await It._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Vt._fromServerResponse(e,t):v(e,"internal-error")}}class Vt extends Ft{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Vt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e,t,n){var r;I((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),I("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e,t,n){const i=Object(r["k"])(e),s={requestType:"PASSWORD_RESET",email:t};n&&$t(i,s,n),await He(i,s)}async function Bt(e,t,n){await Ve(Object(r["k"])(e),{oobCode:t,newPassword:n})}async function qt(e,t){await Ue(Object(r["k"])(e),{oobCode:t})}async function zt(e,t){const n=Object(r["k"])(e),i=await Ve(n,{oobCode:t}),s=i.requestType;switch(I(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(i.mfaInfo,n,"internal-error");default:I(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Ft._fromServerResponse(Ne(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function Ht(e,t){const{data:n}=await zt(Object(r["k"])(e),t);return n.email}async function Wt(e,t,n){const r=Ne(e),i=await _t(r,{returnSecureToken:!0,email:t,password:n}),s=await It._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Kt(e,t,n){return Rt(Object(r["k"])(e),ut.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(e,t,n){const i=Object(r["k"])(e),s={requestType:"EMAIL_SIGNIN",email:t};I(n.handleCodeInApp,i,"argument-error"),n&&$t(i,s,n),await We(i,s)}function Qt(e,t){const n=ct.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Yt(e,t,n){const i=Object(r["k"])(e),s=ut.credentialWithLink(t,n||C());return I(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Rt(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t){return V(e,"POST","/v1/accounts:createAuthUri",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){const n=x()?C():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await Jt(Object(r["k"])(e),i);return s||[]}async function Zt(e,t){const n=Object(r["k"])(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&$t(n.auth,s,t);const{email:o}=await ze(n.auth,s);o!==e.email&&await e.reload()}async function en(e,t,n){const i=Object(r["k"])(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&$t(i.auth,o,n);const{email:a}=await Ke(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(e,t){return V(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r["k"])(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await Z(i,tn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function rn(e,t){return on(Object(r["k"])(e),t,null)}function sn(e,t){return on(Object(r["k"])(e),null,t)}async function on(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await Z(e,$e(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=J(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new cn(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new ln(s,i);case"github.com":return new hn(s,i);case"google.com":return new dn(s,i);case"twitter.com":return new fn(s,i,e.screenName||null);case"custom":case"anonymous":return new cn(s,null);default:return new cn(s,r,i)}}class cn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class un extends cn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class ln extends cn{constructor(e,t){super(e,"facebook.com",t)}}class hn extends un{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class dn extends cn{constructor(e,t){super(e,"google.com",t)}}class fn extends un{constructor(e,t,n){super(e,"twitter.com",t,n)}}function pn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:an(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new mn("enroll",e)}static _fromMfaPendingCredential(e){return new mn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return mn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return mn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ne(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>Ft._fromServerResponse(n,e));I(r.mfaPendingCredential,n,"internal-error");const s=mn._fromMfaPendingCredential(r.mfaPendingCredential);return new gn(s,i,async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await It._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return I(t.user,n,"internal-error"),It._forOperation(t.user,t.operationType,o);default:v(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function vn(e,t){var n;const i=Object(r["k"])(e),s=t;return I(t.customData.operationType,i,"argument-error"),I(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),gn._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function bn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function wn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:withdraw",F(e,t))}class _n{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>Ft._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new _n(e)}async getSession(){return mn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await Z(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await Z(this.user,wn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const In=new WeakMap;function Tn(e){const t=Object(r["k"])(e);return In.has(t)||In.set(t,_n._fromUser(t)),In.get(t)}const En="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(En,"1"),this.storage.removeItem(En),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){const e=Object(r["l"])();return ve(e)||Te(e)}const On=1e3,Cn=10;class xn extends kn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sn()&&Ce(),this.fallbackToPolling=Oe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Se()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Cn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},On)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xn.type="LOCAL";const An=xn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends kn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nn.type="SESSION";const Ln=Nn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Dn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await Rn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn.receivers=[];class jn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Pn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function Fn(e){Mn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return"undefined"!==typeof Mn()["WorkerGlobalScope"]&&"function"===typeof Mn()["importScripts"]}async function $n(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Un(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Bn(){return Vn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="firebaseLocalStorageDb",zn=1,Hn="firebaseLocalStorage",Wn="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gn(e,t){return e.transaction([Hn],t?"readwrite":"readonly").objectStore(Hn)}function Qn(){const e=indexedDB.deleteDatabase(qn);return new Kn(e).toPromise()}function Yn(){const e=indexedDB.open(qn,zn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Hn,{keyPath:Wn})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Hn)?t(n):(n.close(),await Qn(),t(await Yn()))})})}async function Jn(e,t,n){const r=Gn(e,!0).put({[Wn]:t,value:n});return new Kn(r).toPromise()}async function Xn(e,t){const n=Gn(e,!1).get(t),r=await new Kn(n).toPromise();return void 0===r?null:r.value}function Zn(e,t){const n=Gn(e,!0).delete(t);return new Kn(n).toPromise()}const er=800,tr=3;class nr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Yn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>tr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dn._getInstance(Bn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $n(),!this.activeServiceWorker)return;this.sender=new jn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Un()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yn();return await Jn(e,En,"1"),await Zn(e,En),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Xn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Gn(e,!1).getAll();return new Kn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),er)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}nr.type="LOCAL";const rr=nr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function sr(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function cr(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=y("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ar().appendChild(r)})}function ur(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=500,hr=6e4,dr=1e12;class fr{constructor(e){this.auth=e,this.counter=dr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new pr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||dr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||dr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||dr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class pr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;I(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=mr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},hr)},lr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=ur("rcb"),vr=new R(3e4,6e4),yr="https://www.google.com/recaptcha/api.js?";class br{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Mn().grecaptcha}load(e,t=""){return I(wr(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Mn().grecaptcha):new Promise((n,i)=>{const s=Mn().setTimeout(()=>{i(y(e,"network-request-failed"))},vr.get());Mn()[gr]=()=>{Mn().clearTimeout(s),delete Mn()[gr];const r=Mn().grecaptcha;if(!r)return void i(y(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${yr}?${Object(r["x"])({onload:gr,render:"explicit",hl:t})}`;cr(o).catch(()=>{clearTimeout(s),i(y(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Mn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class _r{async load(e){return new fr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="recaptcha",Tr={theme:"light",type:"image"};class Er{constructor(e,t=Object.assign({},Tr),n){this.parameters=t,this.type=Ir,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ne(n),this.isInvisible="invisible"===this.parameters.size,I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;I(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _r:new br,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=Mn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(x()&&!Vn(),this.auth,"internal-error"),await kr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await or(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function kr(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=st._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Or(e,t,n){const i=Ne(e),s=await Ar(i,t,Object(r["k"])(n));return new Sr(s,e=>Rt(i,e))}async function Cr(e,t,n){const i=Object(r["k"])(e);await At(!1,i,"phone");const s=await Ar(i.auth,t,Object(r["k"])(n));return new Sr(s,e=>Dt(i,e))}async function xr(e,t,n){const i=Object(r["k"])(e),s=await Ar(i.auth,t,Object(r["k"])(n));return new Sr(s,e=>Pt(i,e))}async function Ar(e,t,n){var r;const i=await n.verify();try{let s;if(I("string"===typeof i,e,"argument-error"),I(n.type===Ir,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){I("enroll"===t.type,e,"internal-error");const n=await yn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{I("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;I(n,e,"missing-multi-factor-info");const o=await ir(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Nr(e,t){await xt(Object(r["k"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.providerId=Lr.PROVIDER_ID,this.auth=Ne(e)}verifyPhoneNumber(e,t){return Ar(this.auth,e,Object(r["k"])(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Lr.credentialFromTaggedObject(t)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?st._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rr(e,t){return t?S(t):(I(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lr.PROVIDER_ID="phone",Lr.PHONE_SIGN_IN_METHOD="phone";class Dr extends Fe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Je(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Je(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Je(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pr(e){return Lt(e.auth,new Dr(e),e.bypassAuthState)}function jr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Nt(n,new Dr(e),e.bypassAuthState)}async function Mr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),xt(n,new Dr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pr;case"linkViaPopup":case"linkViaRedirect":return Mr;case"reauthViaPopup":case"reauthViaRedirect":return jr;default:v(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new R(2e3,1e4);async function $r(e,t,n){const r=Ne(e);w(e,t,lt);const i=Rr(r,n),s=new qr(r,"signInViaPopup",t,i);return s.executeNotNull()}async function Ur(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,lt);const s=Rr(i.auth,n),o=new qr(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function Br(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,lt);const s=Rr(i.auth,n),o=new qr(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class qr extends Fr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,qr.currentPopupAction&&qr.currentPopupAction.cancel(),qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const e=Pn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Vr.get())};e()}}qr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zr="pendingRedirect",Hr=new Map;class Wr extends Fr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Hr.get(this.auth._key());if(!e){try{const t=await Kr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Hr.set(this.auth._key(),e)}return this.bypassAuthState||Hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Kr(e,t){const n=Jr(t),r=Yr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Gr(e,t){return Yr(e)._set(Jr(t),"true")}function Qr(){Hr.clear()}function Yr(e){return S(e._redirectPersistence)}function Jr(e){return fe(zr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e,t,n){return Zr(e,t,n)}async function Zr(e,t,n){const r=Ne(e);w(e,t,lt);const i=Rr(r,n);return await Gr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ei(e,t,n){return ti(e,t,n)}async function ti(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,lt);const s=Rr(i.auth,n);await Gr(s,i.auth);const o=await oi(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function ni(e,t,n){return ri(e,t,n)}async function ri(e,t,n){const i=Object(r["k"])(e);w(i.auth,t,lt);const s=Rr(i.auth,n);await At(!1,i,t.providerId),await Gr(s,i.auth);const o=await oi(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function ii(e,t){return await Ne(e)._initializationPromise,si(e,t,!1)}async function si(e,t,n=!1){const r=Ne(e),i=Rr(r,t),s=new Wr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function oi(e){const t=Pn(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=6e5;class ci{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!li(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(y(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ai&&this.cachedEventUids.clear(),this.cachedEventUids.has(ui(e))}saveEventToCache(e){this.cachedEventUids.add(ui(e)),this.lastProcessedEventTime=Date.now()}}function ui(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function li({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function hi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return li(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(e,t={}){return V(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pi=/^https?/;async function mi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await di(e);for(const r of t)try{if(gi(r))return}catch(n){}v(e,"unauthorized-domain")}function gi(e){const t=C(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!pi.test(n))return!1;if(fi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new R(3e4,6e4);function yi(){const e=Mn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function bi(e){return new Promise((t,n)=>{var r,i,s;function o(){yi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yi(),n(y(e,"network-request-failed"))},timeout:vi.get()})}if(null===(i=null===(r=Mn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Mn().gapi)||void 0===s?void 0:s.load)){const t=ur("iframefcb");return Mn()[t]=()=>{gapi.load?o():n(y(e,"network-request-failed"))},cr("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw wi=null,e})}let wi=null;function _i(e){return wi=wi||bi(e),wi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new R(5e3,15e3),Ti="__/auth/iframe",Ei="emulator/auth/iframe",ki={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Si=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Oi(e){const t=e.config;I(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?D(t,Ei):`https://${e.config.authDomain}/${Ti}`,s={apiKey:t.apiKey,appName:e.name,v:i["SDK_VERSION"]},o=Si.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["x"])(s).slice(1)}`}async function Ci(e){const t=await _i(e),n=Mn().gapi;return I(n,e,"internal-error"),t.open({where:document.body,url:Oi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ki,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=y(e,"network-request-failed"),s=Mn().setTimeout(()=>{r(i)},Ii.get());function o(){Mn().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ai=500,Ni=600,Li="_blank",Ri="http://localhost";class Di{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Pi(e,t,n,i=Ai,s=Ni){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},xi),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["l"])().toLowerCase();n&&(c=ye(l)?Li:n),ge(l)&&(t=t||Ri,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ke(l)&&"_self"!==c)return ji(t||"",c),new Di(null);const d=window.open(t||"",c,h);I(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Di(d)}function ji(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="__/auth/handler",Fi="emulator/auth/handler";function Vi(e,t,n,s,o,a){I(e.config.authDomain,e,"auth-domain-config-required"),I(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i["SDK_VERSION"],eventId:o};if(t instanceof lt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["p"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${$i(e)}?${Object(r["x"])(u).slice(1)}`}function $i({config:e}){return e.emulator?D(e,Fi):`https://${e.authDomain}/${Mi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="webStorageSupport";class Bi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ln,this._completeRedirectFn=si}async _openPopup(e,t,n,r){var i;E(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Vi(e,t,n,C(),r);return Pi(e,s,Pn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Fn(Vi(e,t,n,C(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Ci(e),n=new ci(e);return t.register("authEvent",t=>{I(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Ui,{type:Ui},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ui];void 0!==i&&t(!!i),v(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oe()||ve()||Te()}}const qi=Bi;class zi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return T("unexpected MultiFactorSessionType")}}}class Hi extends zi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Hi(e)}_finalizeEnroll(e,t,n){return bn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return sr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Wi{constructor(){}static assertion(e){return Hi._fromCredential(e)}}Wi.FACTOR_ID="phone";var Ki="@firebase/auth",Gi="0.19.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ji(e){Object(i["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(t=>{I(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),I(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xe(e)},o=new Ae(t,r);return O(o,n),o})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=Ne(e.getProvider("auth").getImmediate());return(e=>new Qi(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(Ki,Gi,Yi(e)),Object(i["registerVersion"])(Ki,Gi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ji("Browser");const Zi=2e3;async function es(e,t,n){var r;const{BuildInfo:i}=Xi();E(t.sessionId,"AuthEvent did not contain a session ID");const s=await ss(t.sessionId),o={};return Te()?o["ibi"]=i.packageName:we()?o["apn"]=i.packageName:v(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,Vi(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function ts(e){const{BuildInfo:t}=Xi(),n={};Te()?n.iosBundleId=t.packageName:we()?n.androidPackageName=t.packageName:v(e,"operation-not-supported-in-this-environment"),await di(e,n)}function ns(e){const{cordova:t}=Xi();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Ee()?"_blank":"_system","location=yes"),n(i)})})}async function rs(e,t,n){const{cordova:r}=Xi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(y(e,"redirect-cancelled-by-user"))},Zi))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),we()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function is(e){var t,n,r,i,s,o,a,c,u,l;const h=Xi();I("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ss(e){const t=os(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map(e=>e.toString(16).padStart(2,"0")).join("")}function os(e){if(E(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=20;class cs extends ci{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function us(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:fs(),postBody:null,tenantId:e.tenantId,error:y(e,"no-auth-event")}}function ls(e,t){return ps()._set(ms(e),t)}async function hs(e){const t=await ps()._get(ms(e));return t&&await ps()._remove(ms(e)),t}function ds(e,t){var n,r;const i=vs(t);if(i.includes("/__/auth/callback")){const t=ys(i),s=t["firebaseError"]?gs(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?y(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function fs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<as;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ps(){return S(An)}function ms(e){return fe("authEvent",e.config.apiKey,e.name)}function gs(e){try{return JSON.parse(e)}catch(t){return null}}function vs(e){const t=ys(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=ys(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=ys(i)["link"];return s||i||r||n||e}function ys(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(r["y"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=500;class ws{constructor(){this._redirectPersistence=Ln,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=si}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new cs(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){v(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){is(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Qr(),await this._originValidation(e);const s=us(e,n,r);await ls(e,s);const o=await es(e,s,t),a=await ns(o);return rs(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ts(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Xi(),s=setTimeout(async()=>{await hs(e),t.onEvent(Is())},bs),o=async n=>{clearTimeout(s);const r=await hs(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=ds(r,n["url"])),t.onEvent(i||Is())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=i.packageName.toLowerCase()+"://";Xi().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const _s=ws;function Is(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:y("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(e,t){Ne(e)._logFramework(t)}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return S})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return N})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return P})),n.d(t,"k",(function(){return $})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return g})),n.d(t,"n",(function(){return v})),n.d(t,"o",(function(){return b})),n.d(t,"p",(function(){return A})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return T})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return m})),n.d(t,"u",(function(){return y})),n.d(t,"v",(function(){return I})),n.d(t,"w",(function(){return _})),n.d(t,"x",(function(){return R})),n.d(t,"y",(function(){return D}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function g(){return"object"===typeof self&&self.self===self}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return f().indexOf("Electron/")>=0}function w(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function I(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class k extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=E,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?O(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new k(r,o,n);return a}}function O(e,t){return e.replace(C,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(L(n)&&L(s)){if(!N(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function D(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function P(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){const n=new M(e,t);return n.subscribe.bind(n)}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=F(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function V(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},"20f6":function(e,t,n){},2266:function(e,t,n){var r=n("da84"),i=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,m=function(e,t){this.stopped=e,this.result=t},g=m.prototype;e.exports=function(e,t,n){var r,v,y,b,w,_,I,T=n&&n.that,E=!(!n||!n.AS_ENTRIES),k=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),O=i(t,T),C=function(e){return r&&f(r,"normal",e),new m(!0,e)},x=function(e){return E?(o(e),S?O(e[0],e[1],C):O(e[0],e[1])):S?O(e,C):O(e)};if(k)r=e;else{if(v=d(e),!v)throw p(a(e)+" is not iterable");if(c(v)){for(y=0,b=u(e);b>y;y++)if(w=x(e[y]),w&&l(g,w))return w;return new m(!1)}r=h(e,v)}_=r.next;while(!(I=s(_,r)).done){try{w=x(I.value)}catch(A){f(r,"throw",A)}if("object"==typeof w&&w&&l(g,w))return w}return new m(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},"24b2":function(e,t,n){"use strict";n("a9e3");var r=n("80d2"),i=n("2b0e");t["a"]=i["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var e={},t=Object(r["g"])(this.height),n=Object(r["g"])(this.minHeight),i=Object(r["g"])(this.minWidth),s=Object(r["g"])(this.maxHeight),o=Object(r["g"])(this.maxWidth),a=Object(r["g"])(this.width);return t&&(e.height=t),n&&(e.minHeight=n),i&&(e.minWidth=i),s&&(e.maxHeight=s),o&&(e.maxWidth=o),a&&(e.width=a),e}}})},2532:function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),s=n("5a34"),o=n("1d80"),a=n("577e"),c=n("ab13"),u=i("".indexOf);r({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~u(a(o(this)),a(s(e)),arguments.length>1?arguments[1]:void 0)}})},"256a":function(e,t,n){"use strict";n("5994")},"25a8":function(e,t,n){},"25f0":function(e,t,n){"use strict";var r=n("e330"),i=n("5e77").PROPER,s=n("6eeb"),o=n("825a"),a=n("3a9b"),c=n("577e"),u=n("d039"),l=n("ad6d"),h="toString",d=RegExp.prototype,f=d[h],p=r(l),m=u((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),g=i&&f.name!=h;(m||g)&&s(RegExp.prototype,h,(function(){var e=o(this),t=c(e.source),n=e.flags,r=c(void 0===n&&a(d,e)&&!("flags"in d)?p(e):n);return"/"+t+"/"+r}),{unsafe:!0})},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");e.exports=function(e){var t=r(e),n=i.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},2877:function(e,t,n){"use strict";function r(e,t,n,r,i,s,o,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("6b75");function i(e){if(Array.isArray(e))return Object(r["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function s(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=n("06c5");n("d9e2");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return i(e)||s(e)||Object(o["a"])(e)||a()}},"297c":function(e,t,n){"use strict";n("a9e3");var r=n("2b0e"),i=n("5530"),s=n("ade3"),o=(n("c7cd"),n("6ece"),n("0789")),a=n("90a2"),c=n("a9ad"),u=n("fe6c"),l=n("a452"),h=n("7560"),d=n("80d2"),f=n("58df"),p=Object(f["a"])(c["a"],Object(u["b"])(["absolute","fixed","top","bottom"]),l["a"],h["a"]),m=p.extend({name:"v-progress-linear",directives:{intersect:a["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(s["a"])(e,this.isReversed?"right":"left",Object(d["g"])(this.normalizedValue,"%")),Object(s["a"])(e,"width",Object(d["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return Object(i["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o["b"]:o["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(d["g"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(d["m"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),n=t.width;this.internalValue=e.offsetX/n*100}},onObserve:function(e,t,n){this.isVisible=n},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=m;t["a"]=r["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),s=n("dc4a");e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return i(o),n}},"2b0e":function(e,t,n){"use strict";(function(e){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(e){return void 0===e||null===e}function i(e){return void 0!==e&&null!==e}function s(e){return!0===e}function o(e){return!1===e}function a(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function c(e){return null!==e&&"object"===typeof e}var u=Object.prototype.toString;function l(e){return"[object Object]"===u.call(e)}function h(e){return"[object RegExp]"===u.call(e)}function d(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function f(e){return i(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||l(e)&&e.toString===u?JSON.stringify(e,null,2):String(e)}function m(e){var t=parseFloat(e);return isNaN(t)?e:t}function g(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}g("slot,component",!0);var v=g("key,ref,slot,slot-scope,is");function y(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(e,t){return b.call(e,t)}function _(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var I=/-(\w)/g,T=_((function(e){return e.replace(I,(function(e,t){return t?t.toUpperCase():""}))})),E=_((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),k=/\B([A-Z])/g,S=_((function(e){return e.replace(k,"-$1").toLowerCase()}));function O(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function C(e,t){return e.bind(t)}var x=Function.prototype.bind?C:O;function A(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function N(e,t){for(var n in t)e[n]=t[n];return e}function L(e){for(var t={},n=0;n<e.length;n++)e[n]&&N(t,e[n]);return t}function R(e,t,n){}var D=function(e,t,n){return!1},P=function(e){return e};function j(e,t){if(e===t)return!0;var n=c(e),r=c(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),s=Array.isArray(t);if(i&&s)return e.length===t.length&&e.every((function(e,n){return j(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||s)return!1;var o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every((function(n){return j(e[n],t[n])}))}catch(u){return!1}}function M(e,t){for(var n=0;n<e.length;n++)if(j(e[n],t))return n;return-1}function F(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var V="data-server-rendered",$=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:R,parsePlatformTagName:P,mustUseProp:D,async:!0,_lifecycleHooks:U},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function H(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var W=new RegExp("[^"+q.source+".$_\\d]");function K(e){if(!W.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var G,Q="__proto__"in{},Y="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=J&&WXEnvironment.platform.toLowerCase(),Z=Y&&window.navigator.userAgent.toLowerCase(),ee=Z&&/msie|trident/.test(Z),te=Z&&Z.indexOf("msie 9.0")>0,ne=Z&&Z.indexOf("edge/")>0,re=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===X),ie=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),se={}.watch,oe=!1;if(Y)try{var ae={};Object.defineProperty(ae,"passive",{get:function(){oe=!0}}),window.addEventListener("test-passive",null,ae)}catch(Eo){}var ce=function(){return void 0===G&&(G=!Y&&!J&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),G},ue=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function le(e){return"function"===typeof e&&/native code/.test(e.toString())}var he,de="undefined"!==typeof Symbol&&le(Symbol)&&"undefined"!==typeof Reflect&&le(Reflect.ownKeys);he="undefined"!==typeof Set&&le(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var fe=R,pe=0,me=function(){this.id=pe++,this.subs=[]};me.prototype.addSub=function(e){this.subs.push(e)},me.prototype.removeSub=function(e){y(this.subs,e)},me.prototype.depend=function(){me.target&&me.target.addDep(this)},me.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},me.target=null;var ge=[];function ve(e){ge.push(e),me.target=e}function ye(){ge.pop(),me.target=ge[ge.length-1]}var be=function(e,t,n,r,i,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},we={child:{configurable:!0}};we.child.get=function(){return this.componentInstance},Object.defineProperties(be.prototype,we);var _e=function(e){void 0===e&&(e="");var t=new be;return t.text=e,t.isComment=!0,t};function Ie(e){return new be(void 0,void 0,void 0,String(e))}function Te(e){var t=new be(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var Ee=Array.prototype,ke=Object.create(Ee),Se=["push","pop","shift","unshift","splice","sort","reverse"];Se.forEach((function(e){var t=Ee[e];H(ke,e,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var Oe=Object.getOwnPropertyNames(ke),Ce=!0;function xe(e){Ce=e}var Ae=function(e){this.value=e,this.dep=new me,this.vmCount=0,H(e,"__ob__",this),Array.isArray(e)?(Q?Ne(e,ke):Le(e,ke,Oe),this.observeArray(e)):this.walk(e)};function Ne(e,t){e.__proto__=t}function Le(e,t,n){for(var r=0,i=n.length;r<i;r++){var s=n[r];H(e,s,t[s])}}function Re(e,t){var n;if(c(e)&&!(e instanceof be))return w(e,"__ob__")&&e.__ob__ instanceof Ae?n=e.__ob__:Ce&&!ce()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Ae(e)),t&&n&&n.vmCount++,n}function De(e,t,n,r,i){var s=new me,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Re(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return me.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(t)&&Me(t))),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||a&&!c||(c?c.call(e,t):n=t,u=!i&&Re(t),s.notify())}})}}function Pe(e,t,n){if(Array.isArray(e)&&d(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(De(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function je(e,t){if(Array.isArray(e)&&d(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||w(e,t)&&(delete e[t],n&&n.dep.notify())}}function Me(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Me(t)}Ae.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)De(e,t[n])},Ae.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Re(e[t])};var Fe=B.optionMergeStrategies;function Ve(e,t){if(!t)return e;for(var n,r,i,s=de?Reflect.ownKeys(t):Object.keys(t),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(r=e[n],i=t[n],w(e,n)?r!==i&&l(r)&&l(i)&&Ve(r,i):Pe(e,n,i));return e}function $e(e,t,n){return n?function(){var r="function"===typeof t?t.call(n,n):t,i="function"===typeof e?e.call(n,n):e;return r?Ve(r,i):i}:t?e?function(){return Ve("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function Ue(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?Be(n):n}function Be(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function qe(e,t,n,r){var i=Object.create(e||null);return t?N(i,t):i}Fe.data=function(e,t,n){return n?$e(e,t,n):t&&"function"!==typeof t?e:$e(e,t)},U.forEach((function(e){Fe[e]=Ue})),$.forEach((function(e){Fe[e+"s"]=qe})),Fe.watch=function(e,t,n,r){if(e===se&&(e=void 0),t===se&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var s in N(i,e),t){var o=i[s],a=t[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i},Fe.props=Fe.methods=Fe.inject=Fe.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return N(i,e),t&&N(i,t),i},Fe.provide=$e;var ze=function(e,t){return void 0===t?e:t};function He(e,t){var n=e.props;if(n){var r,i,s,o={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(s=T(i),o[s]={type:null})}else if(l(n))for(var a in n)i=n[a],s=T(a),o[s]=l(i)?i:{type:i};else 0;e.props=o}}function We(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var s in n){var o=n[s];r[s]=l(o)?N({from:s},o):{from:o}}else 0}}function Ke(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"===typeof r&&(t[n]={bind:r,update:r})}}function Ge(e,t,n){if("function"===typeof t&&(t=t.options),He(t,n),We(t,n),Ke(t),!t._base&&(t.extends&&(e=Ge(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Ge(e,t.mixins[r],n);var s,o={};for(s in e)a(s);for(s in t)w(e,s)||a(s);function a(r){var i=Fe[r]||ze;o[r]=i(e[r],t[r],n,r)}return o}function Qe(e,t,n,r){if("string"===typeof n){var i=e[t];if(w(i,n))return i[n];var s=T(n);if(w(i,s))return i[s];var o=E(s);if(w(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Ye(e,t,n,r){var i=t[e],s=!w(n,e),o=n[e],a=tt(Boolean,i.type);if(a>-1)if(s&&!w(i,"default"))o=!1;else if(""===o||o===S(e)){var c=tt(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Je(r,i,e);var u=Ce;xe(!0),Re(o),xe(u)}return o}function Je(e,t,n){if(w(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof r&&"Function"!==Ze(t.type)?r.call(e):r}}var Xe=/^\s*function (\w+)/;function Ze(e){var t=e&&e.toString().match(Xe);return t?t[1]:""}function et(e,t){return Ze(e)===Ze(t)}function tt(e,t){if(!Array.isArray(t))return et(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(et(t[n],e))return n;return-1}function nt(e,t,n){ve();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,e,t,n);if(o)return}catch(Eo){it(Eo,r,"errorCaptured hook")}}}it(e,t,n)}finally{ye()}}function rt(e,t,n,r,i){var s;try{s=n?e.apply(t,n):e.call(t),s&&!s._isVue&&f(s)&&!s._handled&&(s.catch((function(e){return nt(e,r,i+" (Promise/async)")})),s._handled=!0)}catch(Eo){nt(Eo,r,i)}return s}function it(e,t,n){if(B.errorHandler)try{return B.errorHandler.call(null,e,t,n)}catch(Eo){Eo!==e&&st(Eo,null,"config.errorHandler")}st(e,t,n)}function st(e,t,n){if(!Y&&!J||"undefined"===typeof console)throw e;console.error(e)}var ot,at=!1,ct=[],ut=!1;function lt(){ut=!1;var e=ct.slice(0);ct.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&le(Promise)){var ht=Promise.resolve();ot=function(){ht.then(lt),re&&setTimeout(R)},at=!0}else if(ee||"undefined"===typeof MutationObserver||!le(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ot="undefined"!==typeof setImmediate&&le(setImmediate)?function(){setImmediate(lt)}:function(){setTimeout(lt,0)};else{var dt=1,ft=new MutationObserver(lt),pt=document.createTextNode(String(dt));ft.observe(pt,{characterData:!0}),ot=function(){dt=(dt+1)%2,pt.data=String(dt)},at=!0}function mt(e,t){var n;if(ct.push((function(){if(e)try{e.call(t)}catch(Eo){nt(Eo,t,"nextTick")}else n&&n(t)})),ut||(ut=!0,ot()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}var gt=new he;function vt(e){yt(e,gt),gt.clear()}function yt(e,t){var n,r,i=Array.isArray(e);if(!(!i&&!c(e)||Object.isFrozen(e)||e instanceof be)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(i){n=e.length;while(n--)yt(e[n],t)}else{r=Object.keys(e),n=r.length;while(n--)yt(e[r[n]],t)}}}var bt=_((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function wt(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return rt(r,null,arguments,t,"v-on handler");for(var i=r.slice(),s=0;s<i.length;s++)rt(i[s],null,e,t,"v-on handler")}return n.fns=e,n}function _t(e,t,n,i,o,a){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=bt(c),r(u)||(r(l)?(r(u.fns)&&(u=e[c]=wt(u,a)),s(h.once)&&(u=e[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)r(e[c])&&(h=bt(c),i(h.name,t[c],h.capture))}function It(e,t,n){var o;e instanceof be&&(e=e.data.hook||(e.data.hook={}));var a=e[t];function c(){n.apply(this,arguments),y(o.fns,c)}r(a)?o=wt([c]):i(a.fns)&&s(a.merged)?(o=a,o.fns.push(c)):o=wt([a,c]),o.merged=!0,e[t]=o}function Tt(e,t,n){var s=t.options.props;if(!r(s)){var o={},a=e.attrs,c=e.props;if(i(a)||i(c))for(var u in s){var l=S(u);Et(o,c,u,l,!0)||Et(o,a,u,l,!1)}return o}}function Et(e,t,n,r,s){if(i(t)){if(w(t,n))return e[n]=t[n],s||delete t[n],!0;if(w(t,r))return e[n]=t[r],s||delete t[r],!0}return!1}function kt(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function St(e){return a(e)?[Ie(e)]:Array.isArray(e)?Ct(e):void 0}function Ot(e){return i(e)&&i(e.text)&&o(e.isComment)}function Ct(e,t){var n,o,c,u,l=[];for(n=0;n<e.length;n++)o=e[n],r(o)||"boolean"===typeof o||(c=l.length-1,u=l[c],Array.isArray(o)?o.length>0&&(o=Ct(o,(t||"")+"_"+n),Ot(o[0])&&Ot(u)&&(l[c]=Ie(u.text+o[0].text),o.shift()),l.push.apply(l,o)):a(o)?Ot(u)?l[c]=Ie(u.text+o):""!==o&&l.push(Ie(o)):Ot(o)&&Ot(u)?l[c]=Ie(u.text+o.text):(s(e._isVList)&&i(o.tag)&&r(o.key)&&i(t)&&(o.key="__vlist"+t+"_"+n+"__"),l.push(o)));return l}function xt(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function At(e){var t=Nt(e.$options.inject,e);t&&(xe(!1),Object.keys(t).forEach((function(n){De(e,n,t[n])})),xe(!0))}function Nt(e,t){if(e){for(var n=Object.create(null),r=de?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=e[s].from,a=t;while(a){if(a._provided&&w(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in e[s]){var c=e[s].default;n[s]="function"===typeof c?c.call(t):c}else 0}}return n}}function Lt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var s=e[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Rt)&&delete n[u];return n}function Rt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Dt(e){return e.isComment&&e.asyncFactory}function Pt(e,t,r){var i,s=Object.keys(t).length>0,o=e?!!e.$stable:!s,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(o&&r&&r!==n&&a===r.$key&&!s&&!r.$hasNormal)return r;for(var c in i={},e)e[c]&&"$"!==c[0]&&(i[c]=jt(t,c,e[c]))}else i={};for(var u in t)u in i||(i[u]=Mt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=i),H(i,"$stable",o),H(i,"$key",a),H(i,"$hasNormal",s),i}function jt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:St(e);var t=e&&e[0];return e&&(!t||1===e.length&&t.isComment&&!Dt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function Mt(e,t){return function(){return e[t]}}function Ft(e,t){var n,r,s,o,a;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),r=0,s=e.length;r<s;r++)n[r]=t(e[r],r);else if("number"===typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(c(e))if(de&&e[Symbol.iterator]){n=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)n.push(t(l.value,n.length)),l=u.next()}else for(o=Object.keys(e),n=new Array(o.length),r=0,s=o.length;r<s;r++)a=o[r],n[r]=t(e[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function Vt(e,t,n,r){var i,s=this.$scopedSlots[e];s?(n=n||{},r&&(n=N(N({},r),n)),i=s(n)||("function"===typeof t?t():t)):i=this.$slots[e]||("function"===typeof t?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function $t(e){return Qe(this.$options,"filters",e,!0)||P}function Ut(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Bt(e,t,n,r,i){var s=B.keyCodes[t]||n;return i&&r&&!B.keyCodes[t]?Ut(i,r):s?Ut(s,e):r?S(r)!==t:void 0===e}function qt(e,t,n,r,i){if(n)if(c(n)){var s;Array.isArray(n)&&(n=L(n));var o=function(o){if("class"===o||"style"===o||v(o))s=e;else{var a=e.attrs&&e.attrs.type;s=r||B.mustUseProp(t,a,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=T(o),u=S(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],i)){var l=e.on||(e.on={});l["update:"+o]=function(e){n[o]=e}}};for(var a in n)o(a)}else;return e}function zt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Wt(r,"__static__"+e,!1)),r}function Ht(e,t,n){return Wt(e,"__once__"+t+(n?"_"+n:""),!0),e}function Wt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&Kt(e[r],t+"_"+r,n);else Kt(e,t,n)}function Kt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Gt(e,t){if(t)if(l(t)){var n=e.on=e.on?N({},e.on):{};for(var r in t){var i=n[r],s=t[r];n[r]=i?[].concat(i,s):s}}else;return e}function Qt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var s=e[i];Array.isArray(s)?Qt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return r&&(t.$key=r),t}function Yt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Jt(e,t){return"string"===typeof e?t+e:e}function Xt(e){e._o=Ht,e._n=m,e._s=p,e._l=Ft,e._t=Vt,e._q=j,e._i=M,e._m=zt,e._f=$t,e._k=Bt,e._b=qt,e._v=Ie,e._e=_e,e._u=Qt,e._g=Gt,e._d=Yt,e._p=Jt}function Zt(e,t,r,i,o){var a,c=this,u=o.options;w(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=s(u._compiled),h=!l;this.data=e,this.props=t,this.children=r,this.parent=i,this.listeners=e.on||n,this.injections=Nt(u.inject,i),this.slots=function(){return c.$slots||Pt(e.scopedSlots,c.$slots=Lt(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pt(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Pt(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var s=fn(a,e,t,n,r,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=i),s}:this._c=function(e,t,n,r){return fn(a,e,t,n,r,h)}}function en(e,t,r,s,o){var a=e.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Ye(l,u,t||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var h=new Zt(r,c,o,s,e),d=a.render.call(null,h._c,h);if(d instanceof be)return tn(d,r,h.parent,a,h);if(Array.isArray(d)){for(var f=St(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=tn(f[m],r,h.parent,a,h);return p}}function tn(e,t,n,r,i){var s=Te(e);return s.fnContext=n,s.fnOptions=r,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function nn(e,t){for(var n in t)e[T(n)]=t[n]}Xt(Zt.prototype);var rn={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;rn.prepatch(n,n)}else{var r=e.componentInstance=an(e,Nn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;jn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,$n(n,"mounted")),e.data.keepAlive&&(t._isMounted?Zn(n):Fn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Vn(t,!0):t.$destroy())}},sn=Object.keys(rn);function on(e,t,n,o,a){if(!r(e)){var u=n.$options._base;if(c(e)&&(e=u.extend(e)),"function"===typeof e){var l;if(r(e.cid)&&(l=e,e=Tn(l,u),void 0===e))return In(l,t,n,o,a);t=t||{},Ir(e),i(t.model)&&ln(e.options,t);var h=Tt(t,e,a);if(s(e.options.functional))return en(e,h,t,n,o);var d=t.on;if(t.on=t.nativeOn,s(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}cn(t);var p=e.options.name||a,m=new be("vue-component-"+e.cid+(p?"-"+p:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:h,listeners:d,tag:a,children:o},l);return m}}}function an(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function cn(e){for(var t=e.hook||(e.hook={}),n=0;n<sn.length;n++){var r=sn[n],i=t[r],s=rn[r];i===s||i&&i._merged||(t[r]=i?un(s,i):s)}}function un(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function ln(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var s=t.on||(t.on={}),o=s[r],a=t.model.callback;i(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[r]=[a].concat(o)):s[r]=a}var hn=1,dn=2;function fn(e,t,n,r,i,o){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),s(o)&&(i=dn),pn(e,t,n,r,i)}function pn(e,t,n,r,s){if(i(n)&&i(n.__ob__))return _e();if(i(n)&&i(n.is)&&(t=n.is),!t)return _e();var o,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),s===dn?r=St(r):s===hn&&(r=kt(r)),"string"===typeof t)?(a=e.$vnode&&e.$vnode.ns||B.getTagNamespace(t),o=B.isReservedTag(t)?new be(B.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!i(c=Qe(e.$options,"components",t))?new be(t,n,r,void 0,void 0,e):on(c,n,e,r,t)):o=on(t,n,e,r);return Array.isArray(o)?o:i(o)?(i(a)&&mn(o,a),i(n)&&gn(n),o):_e()}function mn(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),i(e.children))for(var o=0,a=e.children.length;o<a;o++){var c=e.children[o];i(c.tag)&&(r(c.ns)||s(n)&&"svg"!==c.tag)&&mn(c,t,n)}}function gn(e){c(e.style)&&vt(e.style),c(e.class)&&vt(e.class)}function vn(e){e._vnode=null,e._staticTrees=null;var t=e.$options,r=e.$vnode=t._parentVnode,i=r&&r.context;e.$slots=Lt(t._renderChildren,i),e.$scopedSlots=n,e._c=function(t,n,r,i){return fn(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return fn(e,t,n,r,i,!0)};var s=r&&r.data;De(e,"$attrs",s&&s.attrs||n,null,!0),De(e,"$listeners",t._parentListeners||n,null,!0)}var yn,bn=null;function wn(e){Xt(e.prototype),e.prototype.$nextTick=function(e){return mt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=Pt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{bn=t,e=r.call(t._renderProxy,t.$createElement)}catch(Eo){nt(Eo,t,"render"),e=t._vnode}finally{bn=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof be||(e=_e()),e.parent=i,e}}function _n(e,t){return(e.__esModule||de&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function In(e,t,n,r,i){var s=_e();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:r,tag:i},s}function Tn(e,t){if(s(e.error)&&i(e.errorComp))return e.errorComp;if(i(e.resolved))return e.resolved;var n=bn;if(n&&i(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),s(e.loading)&&i(e.loadingComp))return e.loadingComp;if(n&&!i(e.owners)){var o=e.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return y(o,n)}));var h=function(e){for(var t=0,n=o.length;t<n;t++)o[t].$forceUpdate();e&&(o.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=F((function(n){e.resolved=_n(n,t),a?o.length=0:h(!0)})),p=F((function(t){i(e.errorComp)&&(e.error=!0,h(!0))})),m=e(d,p);return c(m)&&(f(m)?r(e.resolved)&&m.then(d,p):f(m.component)&&(m.component.then(d,p),i(m.error)&&(e.errorComp=_n(m.error,t)),i(m.loading)&&(e.loadingComp=_n(m.loading,t),0===m.delay?e.loading=!0:u=setTimeout((function(){u=null,r(e.resolved)&&r(e.error)&&(e.loading=!0,h(!1))}),m.delay||200)),i(m.timeout)&&(l=setTimeout((function(){l=null,r(e.resolved)&&p(null)}),m.timeout)))),a=!1,e.loading?e.loadingComp:e.resolved}}function En(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(i(n)&&(i(n.componentOptions)||Dt(n)))return n}}function kn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&xn(e,t)}function Sn(e,t){yn.$on(e,t)}function On(e,t){yn.$off(e,t)}function Cn(e,t){var n=yn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function xn(e,t,n){yn=e,_t(t,n||{},Sn,On,Cn,e),yn=void 0}function An(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,s=e.length;i<s;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var s,o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;var a=o.length;while(a--)if(s=o[a],s===t||s.fn===t){o.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?A(n):n;for(var r=A(arguments,1),i='event handler for "'+e+'"',s=0,o=n.length;s<o;s++)rt(n[s],t,r,t,i)}return t}}var Nn=null;function Ln(e){var t=Nn;return Nn=e,function(){Nn=t}}function Rn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Dn(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,s=Ln(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){$n(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),$n(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Pn(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=_e),$n(e,"beforeMount"),r=function(){e._update(e._render(),n)},new rr(e,r,R,{before:function(){e._isMounted&&!e._isDestroyed&&$n(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,$n(e,"mounted")),e}function jn(e,t,r,i,s){var o=i.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==n&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),u=!!(s||e.$options._renderChildren||c);if(e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=s,e.$attrs=i.data.attrs||n,e.$listeners=r||n,t&&e.$options.props){xe(!1);for(var l=e._props,h=e.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=e.$options.props;l[f]=Ye(f,p,t,e)}xe(!0),e.$options.propsData=t}r=r||n;var m=e.$options._parentListeners;e.$options._parentListeners=r,xn(e,r,m),u&&(e.$slots=Lt(s,i.context),e.$forceUpdate())}function Mn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Fn(e,t){if(t){if(e._directInactive=!1,Mn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Fn(e.$children[n]);$n(e,"activated")}}function Vn(e,t){if((!t||(e._directInactive=!0,!Mn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Vn(e.$children[n]);$n(e,"deactivated")}}function $n(e,t){ve();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,s=n.length;i<s;i++)rt(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),ye()}var Un=[],Bn=[],qn={},zn=!1,Hn=!1,Wn=0;function Kn(){Wn=Un.length=Bn.length=0,qn={},zn=Hn=!1}var Gn=0,Qn=Date.now;if(Y&&!ee){var Yn=window.performance;Yn&&"function"===typeof Yn.now&&Qn()>document.createEvent("Event").timeStamp&&(Qn=function(){return Yn.now()})}function Jn(){var e,t;for(Gn=Qn(),Hn=!0,Un.sort((function(e,t){return e.id-t.id})),Wn=0;Wn<Un.length;Wn++)e=Un[Wn],e.before&&e.before(),t=e.id,qn[t]=null,e.run();var n=Bn.slice(),r=Un.slice();Kn(),er(n),Xn(r),ue&&B.devtools&&ue.emit("flush")}function Xn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&$n(r,"updated")}}function Zn(e){e._inactive=!1,Bn.push(e)}function er(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Fn(e[t],!0)}function tr(e){var t=e.id;if(null==qn[t]){if(qn[t]=!0,Hn){var n=Un.length-1;while(n>Wn&&Un[n].id>e.id)n--;Un.splice(n+1,0,e)}else Un.push(e);zn||(zn=!0,mt(Jn))}}var nr=0,rr=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new he,this.newDepIds=new he,this.expression="","function"===typeof t?this.getter=t:(this.getter=K(t),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var e;ve(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Eo){if(!this.user)throw Eo;nt(Eo,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&vt(e),ye(),this.cleanupDeps()}return e},rr.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},rr.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():tr(this)},rr.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';rt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:R,set:R};function sr(e,t,n){ir.get=function(){return this[t][n]},ir.set=function(e){this[t][n]=e},Object.defineProperty(e,n,ir)}function or(e){e._watchers=[];var t=e.$options;t.props&&ar(e,t.props),t.methods&&mr(e,t.methods),t.data?cr(e):Re(e._data={},!0),t.computed&&hr(e,t.computed),t.watch&&t.watch!==se&&gr(e,t.watch)}function ar(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],s=!e.$parent;s||xe(!1);var o=function(s){i.push(s);var o=Ye(s,t,n,e);De(r,s,o),s in e||sr(e,"_props",s)};for(var a in t)o(a);xe(!0)}function cr(e){var t=e.$options.data;t=e._data="function"===typeof t?ur(t,e):t||{},l(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var s=n[i];0,r&&w(r,s)||z(s)||sr(e,"_data",s)}Re(t,!0)}function ur(e,t){ve();try{return e.call(t,t)}catch(Eo){return nt(Eo,t,"data()"),{}}finally{ye()}}var lr={lazy:!0};function hr(e,t){var n=e._computedWatchers=Object.create(null),r=ce();for(var i in t){var s=t[i],o="function"===typeof s?s:s.get;0,r||(n[i]=new rr(e,o||R,R,lr)),i in e||dr(e,i,s)}}function dr(e,t,n){var r=!ce();"function"===typeof n?(ir.get=r?fr(t):pr(n),ir.set=R):(ir.get=n.get?r&&!1!==n.cache?fr(t):pr(n.get):R,ir.set=n.set||R),Object.defineProperty(e,t,ir)}function fr(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),me.target&&t.depend(),t.value}}function pr(e){return function(){return e.call(this,this)}}function mr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?R:x(t[n],e)}function gr(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)vr(e,n,r[i]);else vr(e,n,r)}}function vr(e,t,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function yr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Pe,e.prototype.$delete=je,e.prototype.$watch=function(e,t,n){var r=this;if(l(t))return vr(r,e,t,n);n=n||{},n.user=!0;var i=new rr(r,e,t,n);if(n.immediate){var s='callback for immediate watcher "'+i.expression+'"';ve(),rt(t,r,[i.value],r,s),ye()}return function(){i.teardown()}}}var br=0;function wr(e){e.prototype._init=function(e){var t=this;t._uid=br++,t._isVue=!0,e&&e._isComponent?_r(t,e):t.$options=Ge(Ir(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Rn(t),kn(t),vn(t),$n(t,"beforeCreate"),At(t),or(t),xt(t),$n(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function _r(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Ir(e){var t=e.options;if(e.super){var n=Ir(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Tr(e);i&&N(e.extendOptions,i),t=e.options=Ge(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Tr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Er(e){this._init(e)}function kr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=A(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function Sr(e){e.mixin=function(e){return this.options=Ge(this.options,e),this}}function Or(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var s=e.name||n.options.name;var o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Ge(n.options,e),o["super"]=n,o.options.props&&Cr(o),o.options.computed&&xr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,$.forEach((function(e){o[e]=n[e]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=N({},o.options),i[r]=o,o}}function Cr(e){var t=e.options.props;for(var n in t)sr(e.prototype,"_props",n)}function xr(e){var t=e.options.computed;for(var n in t)dr(e.prototype,n,t[n])}function Ar(e){$.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function Nr(e){return e&&(e.Ctor.options.name||e.tag)}function Lr(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!h(e)&&e.test(t)}function Rr(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!t(a)&&Dr(n,s,r,i)}}}function Dr(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,y(n,t)}wr(Er),yr(Er),An(Er),Dn(Er),wn(Er);var Pr=[String,RegExp,Array],jr={name:"keep-alive",abstract:!0,props:{include:Pr,exclude:Pr,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;t[i]={name:Nr(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&Dr(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Dr(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Rr(e,(function(e){return Lr(t,e)}))})),this.$watch("exclude",(function(t){Rr(e,(function(e){return!Lr(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=En(e),n=t&&t.componentOptions;if(n){var r=Nr(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!Lr(s,r))||o&&r&&Lr(o,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,y(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},Mr={KeepAlive:jr};function Fr(e){var t={get:function(){return B}};Object.defineProperty(e,"config",t),e.util={warn:fe,extend:N,mergeOptions:Ge,defineReactive:De},e.set=Pe,e.delete=je,e.nextTick=mt,e.observable=function(e){return Re(e),e},e.options=Object.create(null),$.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,N(e.options.components,Mr),kr(e),Sr(e),Or(e),Ar(e)}Fr(Er),Object.defineProperty(Er.prototype,"$isServer",{get:ce}),Object.defineProperty(Er.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Er,"FunctionalRenderContext",{value:Zt}),Er.version="2.6.14";var Vr=g("style,class"),$r=g("input,textarea,option,select,progress"),Ur=function(e,t,n){return"value"===n&&$r(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Br=g("contenteditable,draggable,spellcheck"),qr=g("events,caret,typing,plaintext-only"),zr=function(e,t){return Qr(t)||"false"===t?"false":"contenteditable"===e&&qr(t)?t:"true"},Hr=g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wr="http://www.w3.org/1999/xlink",Kr=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Gr=function(e){return Kr(e)?e.slice(6,e.length):""},Qr=function(e){return null==e||!1===e};function Yr(e){var t=e.data,n=e,r=e;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Jr(r.data,t));while(i(n=n.parent))n&&n.data&&(t=Jr(t,n.data));return Xr(t.staticClass,t.class)}function Jr(e,t){return{staticClass:Zr(e.staticClass,t.staticClass),class:i(e.class)?[e.class,t.class]:t.class}}function Xr(e,t){return i(e)||i(t)?Zr(e,ei(t)):""}function Zr(e,t){return e?t?e+" "+t:e:t||""}function ei(e){return Array.isArray(e)?ti(e):c(e)?ni(e):"string"===typeof e?e:""}function ti(e){for(var t,n="",r=0,s=e.length;r<s;r++)i(t=ei(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function ni(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),si=g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),oi=function(e){return ii(e)||si(e)};function ai(e){return si(e)?"svg":"math"===e?"math":void 0}var ci=Object.create(null);function ui(e){if(!Y)return!0;if(oi(e))return!1;if(e=e.toLowerCase(),null!=ci[e])return ci[e];var t=document.createElement(e);return e.indexOf("-")>-1?ci[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ci[e]=/HTMLUnknownElement/.test(t.toString())}var li=g("text,number,password,search,email,tel,url");function hi(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function di(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fi(e,t){return document.createElementNS(ri[e],t)}function pi(e){return document.createTextNode(e)}function mi(e){return document.createComment(e)}function gi(e,t,n){e.insertBefore(t,n)}function vi(e,t){e.removeChild(t)}function yi(e,t){e.appendChild(t)}function bi(e){return e.parentNode}function wi(e){return e.nextSibling}function _i(e){return e.tagName}function Ii(e,t){e.textContent=t}function Ti(e,t){e.setAttribute(t,"")}var Ei=Object.freeze({createElement:di,createElementNS:fi,createTextNode:pi,createComment:mi,insertBefore:gi,removeChild:vi,appendChild:yi,parentNode:bi,nextSibling:wi,tagName:_i,setTextContent:Ii,setStyleScope:Ti}),ki={create:function(e,t){Si(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Si(e,!0),Si(t))},destroy:function(e){Si(e,!0)}};function Si(e,t){var n=e.data.ref;if(i(n)){var r=e.context,s=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?y(o[n],s):o[n]===s&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var Oi=new be("",{},[]),Ci=["create","activate","update","remove","destroy"];function xi(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&i(e.data)===i(t.data)&&Ai(e,t)||s(e.isAsyncPlaceholder)&&r(t.asyncFactory.error))}function Ai(e,t){if("input"!==e.tag)return!0;var n,r=i(n=e.data)&&i(n=n.attrs)&&n.type,s=i(n=t.data)&&i(n=n.attrs)&&n.type;return r===s||li(r)&&li(s)}function Ni(e,t,n){var r,s,o={};for(r=t;r<=n;++r)s=e[r].key,i(s)&&(o[s]=r);return o}function Li(e){var t,n,o={},c=e.modules,u=e.nodeOps;for(t=0;t<Ci.length;++t)for(o[Ci[t]]=[],n=0;n<c.length;++n)i(c[n][Ci[t]])&&o[Ci[t]].push(c[n][Ci[t]]);function l(e){return new be(u.tagName(e).toLowerCase(),{},[],void 0,e)}function h(e,t){function n(){0===--n.listeners&&d(e)}return n.listeners=t,n}function d(e){var t=u.parentNode(e);i(t)&&u.removeChild(t,e)}function f(e,t,n,r,o,a,c){if(i(e.elm)&&i(a)&&(e=a[c]=Te(e)),e.isRootInsert=!o,!p(e,t,n,r)){var l=e.data,h=e.children,d=e.tag;i(d)?(e.elm=e.ns?u.createElementNS(e.ns,d):u.createElement(d,e),I(e),b(e,h,t),i(l)&&_(e,t),y(n,e.elm,r)):s(e.isComment)?(e.elm=u.createComment(e.text),y(n,e.elm,r)):(e.elm=u.createTextNode(e.text),y(n,e.elm,r))}}function p(e,t,n,r){var o=e.data;if(i(o)){var a=i(e.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(e,!1),i(e.componentInstance))return m(e,t),y(n,e.elm,r),s(a)&&v(e,t,n,r),!0}}function m(e,t){i(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,w(e)?(_(e,t),I(e)):(Si(e),t.push(e))}function v(e,t,n,r){var s,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,i(s=a.data)&&i(s=s.transition)){for(s=0;s<o.activate.length;++s)o.activate[s](Oi,a);t.push(a);break}y(n,e.elm,r)}function y(e,t,n){i(e)&&(i(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function b(e,t,n){if(Array.isArray(t)){0;for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r)}else a(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function w(e){while(e.componentInstance)e=e.componentInstance._vnode;return i(e.tag)}function _(e,n){for(var r=0;r<o.create.length;++r)o.create[r](Oi,e);t=e.data.hook,i(t)&&(i(t.create)&&t.create(Oi,e),i(t.insert)&&n.push(e))}function I(e){var t;if(i(t=e.fnScopeId))u.setStyleScope(e.elm,t);else{var n=e;while(n)i(t=n.context)&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent}i(t=Nn)&&t!==e.context&&t!==e.fnContext&&i(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function T(e,t,n,r,i,s){for(;r<=i;++r)f(n[r],s,e,t,!1,n,r)}function E(e){var t,n,r=e.data;if(i(r))for(i(t=r.hook)&&i(t=t.destroy)&&t(e),t=0;t<o.destroy.length;++t)o.destroy[t](e);if(i(t=e.children))for(n=0;n<e.children.length;++n)E(e.children[n])}function k(e,t,n){for(;t<=n;++t){var r=e[t];i(r)&&(i(r.tag)?(S(r),E(r)):d(r.elm))}}function S(e,t){if(i(t)||i(e.data)){var n,r=o.remove.length+1;for(i(t)?t.listeners+=r:t=h(e.elm,r),i(n=e.componentInstance)&&i(n=n._vnode)&&i(n.data)&&S(n,t),n=0;n<o.remove.length;++n)o.remove[n](e,t);i(n=e.data.hook)&&i(n=n.remove)?n(e,t):t()}else d(e.elm)}function O(e,t,n,s,o){var a,c,l,h,d=0,p=0,m=t.length-1,g=t[0],v=t[m],y=n.length-1,b=n[0],w=n[y],_=!o;while(d<=m&&p<=y)r(g)?g=t[++d]:r(v)?v=t[--m]:xi(g,b)?(x(g,b,s,n,p),g=t[++d],b=n[++p]):xi(v,w)?(x(v,w,s,n,y),v=t[--m],w=n[--y]):xi(g,w)?(x(g,w,s,n,y),_&&u.insertBefore(e,g.elm,u.nextSibling(v.elm)),g=t[++d],w=n[--y]):xi(v,b)?(x(v,b,s,n,p),_&&u.insertBefore(e,v.elm,g.elm),v=t[--m],b=n[++p]):(r(a)&&(a=Ni(t,d,m)),c=i(b.key)?a[b.key]:C(b,t,d,m),r(c)?f(b,s,e,g.elm,!1,n,p):(l=t[c],xi(l,b)?(x(l,b,s,n,p),t[c]=void 0,_&&u.insertBefore(e,l.elm,g.elm)):f(b,s,e,g.elm,!1,n,p)),b=n[++p]);d>m?(h=r(n[y+1])?null:n[y+1].elm,T(e,h,n,p,y,s)):p>y&&k(t,d,m)}function C(e,t,n,r){for(var s=n;s<r;s++){var o=t[s];if(i(o)&&xi(e,o))return s}}function x(e,t,n,a,c,l){if(e!==t){i(t.elm)&&i(a)&&(t=a[c]=Te(t));var h=t.elm=e.elm;if(s(e.isAsyncPlaceholder))i(t.asyncFactory.resolved)?L(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(s(t.isStatic)&&s(e.isStatic)&&t.key===e.key&&(s(t.isCloned)||s(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;i(f)&&i(d=f.hook)&&i(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(i(f)&&w(t)){for(d=0;d<o.update.length;++d)o.update[d](e,t);i(d=f.hook)&&i(d=d.update)&&d(e,t)}r(t.text)?i(p)&&i(m)?p!==m&&O(h,p,m,n,l):i(m)?(i(e.text)&&u.setTextContent(h,""),T(h,null,m,0,m.length-1,n)):i(p)?k(p,0,p.length-1):i(e.text)&&u.setTextContent(h,""):e.text!==t.text&&u.setTextContent(h,t.text),i(f)&&i(d=f.hook)&&i(d=d.postpatch)&&d(e,t)}}}function A(e,t,n){if(s(n)&&i(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var N=g("attrs,class,staticClass,staticStyle,key");function L(e,t,n,r){var o,a=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,s(t.isComment)&&i(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(o=c.hook)&&i(o=o.init)&&o(t,!0),i(o=t.componentInstance)))return m(t,n),!0;if(i(a)){if(i(u))if(e.hasChildNodes())if(i(o=c)&&i(o=o.domProps)&&i(o=o.innerHTML)){if(o!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!L(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(t,u,n);if(i(c)){var f=!1;for(var p in c)if(!N(p)){f=!0,_(t,n);break}!f&&c["class"]&&vt(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,a){if(!r(t)){var c=!1,h=[];if(r(e))c=!0,f(t,h);else{var d=i(e.nodeType);if(!d&&xi(e,t))x(e,t,h,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(V)&&(e.removeAttribute(V),n=!0),s(n)&&L(e,t,h))return A(t,h,!0),e;e=l(e)}var p=e.elm,m=u.parentNode(p);if(f(t,h,p._leaveCb?null:m,u.nextSibling(p)),i(t.parent)){var g=t.parent,v=w(t);while(g){for(var y=0;y<o.destroy.length;++y)o.destroy[y](g);if(g.elm=t.elm,v){for(var b=0;b<o.create.length;++b)o.create[b](Oi,g);var _=g.data.hook.insert;if(_.merged)for(var I=1;I<_.fns.length;I++)_.fns[I]()}else Si(g);g=g.parent}}i(m)?k([e],0,0):i(e.tag)&&E(e)}}return A(t,h,c),t.elm}i(e)&&E(e)}}var Ri={create:Di,update:Di,destroy:function(e){Di(e,Oi)}};function Di(e,t){(e.data.directives||t.data.directives)&&Pi(e,t)}function Pi(e,t){var n,r,i,s=e===Oi,o=t===Oi,a=Mi(e.data.directives,e.context),c=Mi(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Vi(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(Vi(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Vi(u[n],"inserted",t,e)};s?It(t,"insert",h):h()}if(l.length&&It(t,"postpatch",(function(){for(var n=0;n<l.length;n++)Vi(l[n],"componentUpdated",t,e)})),!s)for(n in a)c[n]||Vi(a[n],"unbind",e,e,o)}var ji=Object.create(null);function Mi(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)r=e[n],r.modifiers||(r.modifiers=ji),i[Fi(r)]=r,r.def=Qe(t.$options,"directives",r.name,!0);return i}function Fi(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Vi(e,t,n,r,i){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,r,i)}catch(Eo){nt(Eo,n.context,"directive "+e.name+" "+t+" hook")}}var $i=[ki,Ri];function Ui(e,t){var n=t.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(e.data.attrs)||!r(t.data.attrs))){var s,o,a,c=t.elm,u=e.data.attrs||{},l=t.data.attrs||{};for(s in i(l.__ob__)&&(l=t.data.attrs=N({},l)),l)o=l[s],a=u[s],a!==o&&Bi(c,s,o,t.data.pre);for(s in(ee||ne)&&l.value!==u.value&&Bi(c,"value",l.value),u)r(l[s])&&(Kr(s)?c.removeAttributeNS(Wr,Gr(s)):Br(s)||c.removeAttribute(s))}}function Bi(e,t,n,r){r||e.tagName.indexOf("-")>-1?qi(e,t,n):Hr(t)?Qr(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Br(t)?e.setAttribute(t,zr(t,n)):Kr(t)?Qr(n)?e.removeAttributeNS(Wr,Gr(t)):e.setAttributeNS(Wr,t,n):qi(e,t,n)}function qi(e,t,n){if(Qr(n))e.removeAttribute(t);else{if(ee&&!te&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var zi={create:Ui,update:Ui};function Hi(e,t){var n=t.elm,s=t.data,o=e.data;if(!(r(s.staticClass)&&r(s.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var a=Yr(t),c=n._transitionClasses;i(c)&&(a=Zr(a,ei(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Wi,Ki={create:Hi,update:Hi},Gi="__r",Qi="__c";function Yi(e){if(i(e[Gi])){var t=ee?"change":"input";e[t]=[].concat(e[Gi],e[t]||[]),delete e[Gi]}i(e[Qi])&&(e.change=[].concat(e[Qi],e.change||[]),delete e[Qi])}function Ji(e,t,n){var r=Wi;return function i(){var s=t.apply(null,arguments);null!==s&&es(e,i,n,r)}}var Xi=at&&!(ie&&Number(ie[1])<=53);function Zi(e,t,n,r){if(Xi){var i=Gn,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}Wi.addEventListener(e,t,oe?{capture:n,passive:r}:n)}function es(e,t,n,r){(r||Wi).removeEventListener(e,t._wrapper||t,n)}function ts(e,t){if(!r(e.data.on)||!r(t.data.on)){var n=t.data.on||{},i=e.data.on||{};Wi=t.elm,Yi(n),_t(n,i,Zi,es,Ji,t.context),Wi=void 0}}var ns,rs={create:ts,update:ts};function is(e,t){if(!r(e.data.domProps)||!r(t.data.domProps)){var n,s,o=t.elm,a=e.data.domProps||{},c=t.data.domProps||{};for(n in i(c.__ob__)&&(c=t.data.domProps=N({},c)),a)n in c||(o[n]="");for(n in c){if(s=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),s===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=s;var u=r(s)?"":String(s);ss(o,u)&&(o.value=u)}else if("innerHTML"===n&&si(o.tagName)&&r(o.innerHTML)){ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+s+"</svg>";var l=ns.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(s!==a[n])try{o[n]=s}catch(Eo){}}}}function ss(e,t){return!e.composing&&("OPTION"===e.tagName||os(e,t)||as(e,t))}function os(e,t){var n=!0;try{n=document.activeElement!==e}catch(Eo){}return n&&e.value!==t}function as(e,t){var n=e.value,r=e._vModifiers;if(i(r)){if(r.number)return m(n)!==m(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var cs={create:is,update:is},us=_((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function ls(e){var t=hs(e.style);return e.staticStyle?N(e.staticStyle,t):t}function hs(e){return Array.isArray(e)?L(e):"string"===typeof e?us(e):e}function ds(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=ls(i.data))&&N(r,n)}(n=ls(e.data))&&N(r,n);var s=e;while(s=s.parent)s.data&&(n=ls(s.data))&&N(r,n);return r}var fs,ps=/^--/,ms=/\s*!important$/,gs=function(e,t,n){if(ps.test(t))e.style.setProperty(t,n);else if(ms.test(n))e.style.setProperty(S(t),n.replace(ms,""),"important");else{var r=ys(t);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)e.style[r]=n[i];else e.style[r]=n}},vs=["Webkit","Moz","ms"],ys=_((function(e){if(fs=fs||document.createElement("div").style,e=T(e),"filter"!==e&&e in fs)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<vs.length;n++){var r=vs[n]+t;if(r in fs)return r}}));function bs(e,t){var n=t.data,s=e.data;if(!(r(n.staticStyle)&&r(n.style)&&r(s.staticStyle)&&r(s.style))){var o,a,c=t.elm,u=s.staticStyle,l=s.normalizedStyle||s.style||{},h=u||l,d=hs(t.data.style)||{};t.data.normalizedStyle=i(d.__ob__)?N({},d):d;var f=ds(t,!0);for(a in h)r(f[a])&&gs(c,a,"");for(a in f)o=f[a],o!==h[a]&&gs(c,a,null==o?"":o)}}var ws={create:bs,update:bs},_s=/\s+/;function Is(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(_s).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Ts(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(_s).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Es(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&N(t,ks(e.name||"v")),N(t,e),t}return"string"===typeof e?ks(e):void 0}}var ks=_((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),Ss=Y&&!te,Os="transition",Cs="animation",xs="transition",As="transitionend",Ns="animation",Ls="animationend";Ss&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(xs="WebkitTransition",As="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ns="WebkitAnimation",Ls="webkitAnimationEnd"));var Rs=Y?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Ds(e){Rs((function(){Rs(e)}))}function Ps(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Is(e,t))}function js(e,t){e._transitionClasses&&y(e._transitionClasses,t),Ts(e,t)}function Ms(e,t,n){var r=Vs(e,t),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===Os?As:Ls,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),e.addEventListener(a,l)}var Fs=/\b(transform|all)(,|$)/;function Vs(e,t){var n,r=window.getComputedStyle(e),i=(r[xs+"Delay"]||"").split(", "),s=(r[xs+"Duration"]||"").split(", "),o=$s(i,s),a=(r[Ns+"Delay"]||"").split(", "),c=(r[Ns+"Duration"]||"").split(", "),u=$s(a,c),l=0,h=0;t===Os?o>0&&(n=Os,l=o,h=s.length):t===Cs?u>0&&(n=Cs,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?Os:Cs:null,h=n?n===Os?s.length:c.length:0);var d=n===Os&&Fs.test(r[xs+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function $s(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return Us(t)+Us(e[n])})))}function Us(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Bs(e,t){var n=e.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=Es(e.data.transition);if(!r(s)&&!i(n._enterCb)&&1===n.nodeType){var o=s.css,a=s.type,u=s.enterClass,l=s.enterToClass,h=s.enterActiveClass,d=s.appearClass,f=s.appearToClass,p=s.appearActiveClass,g=s.beforeEnter,v=s.enter,y=s.afterEnter,b=s.enterCancelled,w=s.beforeAppear,_=s.appear,I=s.afterAppear,T=s.appearCancelled,E=s.duration,k=Nn,S=Nn.$vnode;while(S&&S.parent)k=S.context,S=S.parent;var O=!k._isMounted||!e.isRootInsert;if(!O||_||""===_){var C=O&&d?d:u,x=O&&p?p:h,A=O&&f?f:l,N=O&&w||g,L=O&&"function"===typeof _?_:v,R=O&&I||y,D=O&&T||b,P=m(c(E)?E.enter:E);0;var j=!1!==o&&!te,M=Hs(L),V=n._enterCb=F((function(){j&&(js(n,A),js(n,x)),V.cancelled?(j&&js(n,C),D&&D(n)):R&&R(n),n._enterCb=null}));e.data.show||It(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),L&&L(n,V)})),N&&N(n),j&&(Ps(n,C),Ps(n,x),Ds((function(){js(n,C),V.cancelled||(Ps(n,A),M||(zs(P)?setTimeout(V,P):Ms(n,a,V)))}))),e.data.show&&(t&&t(),L&&L(n,V)),j||M||V()}}}function qs(e,t){var n=e.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=Es(e.data.transition);if(r(s)||1!==n.nodeType)return t();if(!i(n._leaveCb)){var o=s.css,a=s.type,u=s.leaveClass,l=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,f=s.leave,p=s.afterLeave,g=s.leaveCancelled,v=s.delayLeave,y=s.duration,b=!1!==o&&!te,w=Hs(f),_=m(c(y)?y.leave:y);0;var I=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),b&&(js(n,l),js(n,h)),I.cancelled?(b&&js(n,u),g&&g(n)):(t(),p&&p(n)),n._leaveCb=null}));v?v(T):T()}function T(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),b&&(Ps(n,u),Ps(n,h),Ds((function(){js(n,u),I.cancelled||(Ps(n,l),w||(zs(_)?setTimeout(I,_):Ms(n,a,I)))}))),f&&f(n,I),b||w||I())}}function zs(e){return"number"===typeof e&&!isNaN(e)}function Hs(e){if(r(e))return!1;var t=e.fns;return i(t)?Hs(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Ws(e,t){!0!==t.data.show&&Bs(t)}var Ks=Y?{create:Ws,activate:Ws,remove:function(e,t){!0!==e.data.show?qs(e,t):t()}}:{},Gs=[zi,Ki,rs,cs,ws,Ks],Qs=Gs.concat($i),Ys=Li({nodeOps:Ei,modules:Qs});te&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&io(e,"input")}));var Js={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?It(n,"postpatch",(function(){Js.componentUpdated(e,t,n)})):Xs(e,t,n.context),e._vOptions=[].map.call(e.options,to)):("textarea"===n.tag||li(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",no),e.addEventListener("compositionend",ro),e.addEventListener("change",ro),te&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Xs(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,to);if(i.some((function(e,t){return!j(e,r[t])}))){var s=e.multiple?t.value.some((function(e){return eo(e,i)})):t.value!==t.oldValue&&eo(t.value,i);s&&io(e,"change")}}}};function Xs(e,t,n){Zs(e,t,n),(ee||ne)&&setTimeout((function(){Zs(e,t,n)}),0)}function Zs(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=e.options.length;a<c;a++)if(o=e.options[a],i)s=M(r,to(o))>-1,o.selected!==s&&(o.selected=s);else if(j(to(o),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function eo(e,t){return t.every((function(t){return!j(t,e)}))}function to(e){return"_value"in e?e._value:e.value}function no(e){e.target.composing=!0}function ro(e){e.target.composing&&(e.target.composing=!1,io(e.target,"input"))}function io(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function so(e){return!e.componentInstance||e.data&&e.data.transition?e:so(e.componentInstance._vnode)}var oo={bind:function(e,t,n){var r=t.value;n=so(n);var i=n.data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Bs(n,(function(){e.style.display=s}))):e.style.display=r?s:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=so(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?Bs(n,(function(){e.style.display=e.__vOriginalDisplay})):qs(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},ao={model:Js,show:oo},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?uo(En(t.children)):e}function lo(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var s in i)t[T(s)]=i[s];return t}function ho(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function fo(e){while(e=e.parent)if(e.data.transition)return!0}function po(e,t){return t.key===e.key&&t.tag===e.tag}var mo=function(e){return e.tag||Dt(e)},go=function(e){return"show"===e.name},vo={name:"transition",props:co,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(mo),n.length)){0;var r=this.mode;0;var i=n[0];if(fo(this.$vnode))return i;var s=uo(i);if(!s)return i;if(this._leaving)return ho(e,i);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:a(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var c=(s.data||(s.data={})).transition=lo(this),u=this._vnode,l=uo(u);if(s.data.directives&&s.data.directives.some(go)&&(s.data.show=!0),l&&l.data&&!po(s,l)&&!Dt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=N({},c);if("out-in"===r)return this._leaving=!0,It(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),ho(e,i);if("in-out"===r){if(Dt(s))return u;var d,f=function(){d()};It(c,"afterEnter",f),It(c,"enterCancelled",f),It(h,"delayLeave",(function(e){d=e}))}}return i}}},yo=N({tag:String,moveClass:String},co);delete yo.mode;var bo={props:yo,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Ln(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=lo(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(wo),e.forEach(_o),e.forEach(Io),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;Ps(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(As,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(As,e),n._moveCb=null,js(n,t))})}})))},methods:{hasMove:function(e,t){if(!Ss)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Ts(n,e)})),Is(n,t),n.style.display="none",this.$el.appendChild(n);var r=Vs(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function wo(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function _o(e){e.data.newPos=e.elm.getBoundingClientRect()}function Io(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate("+r+"px,"+i+"px)",s.transitionDuration="0s"}}var To={Transition:vo,TransitionGroup:bo};Er.config.mustUseProp=Ur,Er.config.isReservedTag=oi,Er.config.isReservedAttr=Vr,Er.config.getTagNamespace=ai,Er.config.isUnknownElement=ui,N(Er.options.directives,ao),N(Er.options.components,To),Er.prototype.__patch__=Y?Ys:R,Er.prototype.$mount=function(e,t){return e=e&&Y?hi(e):void 0,Pn(this,e,t)},Y&&setTimeout((function(){B.devtools&&ue&&ue.emit("init",Er)}),0),t["a"]=Er}).call(this,n("c8ba"))},"2b19":function(e,t,n){var r=n("23e7"),i=n("129f");r({target:"Object",stat:!0},{is:i})},"2ba4":function(e,t,n){var r=n("40d5"),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},"2ca0":function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),s=n("06cf").f,o=n("50c4"),a=n("577e"),c=n("5a34"),u=n("1d80"),l=n("ab13"),h=n("c430"),d=i("".startsWith),f=i("".slice),p=Math.min,m=l("startsWith"),g=!h&&!m&&!!function(){var e=s(String.prototype,"startsWith");return e&&!e.writable}();r({target:"String",proto:!0,forced:!g&&!m},{startsWith:function(e){var t=a(u(this));c(e);var n=o(p(arguments.length>1?arguments[1]:void 0,t.length)),r=a(e);return d?d(t,r,n):f(t,n,n+r.length)===r}})},"2cf4":function(e,t,n){var r,i,s,o,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),m=n("cc12"),g=n("1cdc"),v=n("605d"),y=a.setImmediate,b=a.clearImmediate,w=a.process,_=a.Dispatch,I=a.Function,T=a.MessageChannel,E=a.String,k=0,S={},O="onreadystatechange";try{r=a.location}catch(L){}var C=function(e){if(h(S,e)){var t=S[e];delete S[e],t()}},x=function(e){return function(){C(e)}},A=function(e){C(e.data)},N=function(e){a.postMessage(E(e),r.protocol+"//"+r.host)};y&&b||(y=function(e){var t=p(arguments,1);return S[++k]=function(){c(l(e)?e:I(e),void 0,t)},i(k),k},b=function(e){delete S[e]},v?i=function(e){w.nextTick(x(e))}:_&&_.now?i=function(e){_.now(x(e))}:T&&!g?(s=new T,o=s.port2,s.port1.onmessage=A,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(N)?(i=N,a.addEventListener("message",A,!1)):i=O in m("script")?function(e){f.appendChild(m("script"))[O]=function(){f.removeChild(this),C(e)}}:function(e){setTimeout(x(e),0)}),e.exports={set:y,clear:b}},"2d00":function(e,t,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},3206:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n("ade3"),i=(n("99af"),n("2b0e")),s=n("d9bd");function o(e,t){return function(){return Object(s["c"])("The ".concat(e," component must be used inside a ").concat(t))}}function a(e,t,n){var s=t&&n?{register:o(t,n),unregister:o(t,n)}:null;return i["a"].extend({name:"registrable-inject",inject:Object(r["a"])({},e,{default:s})})}function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i["a"].extend({name:"registrable-provide",provide:function(){return Object(r["a"])({},e,t?this:{register:this.register,unregister:this.unregister})}})}},3410:function(e,t,n){var r=n("23e7"),i=n("d039"),s=n("7b0b"),o=n("e163"),a=n("e177"),c=i((function(){o(1)}));r({target:"Object",stat:!0,forced:c,sham:!a},{getPrototypeOf:function(e){return o(s(e))}})},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||s[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("aed9"),s=n("9bf2"),o=n("825a"),a=n("fc6a"),c=n("df75");t.f=r&&!i?Object.defineProperties:function(e,t){o(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)s.f(e,n=i[l++],r[n]);return e}},3835:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function i(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(s.push(r.value),t&&s.length===t)break}catch(c){a=!0,i=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(a)throw i}}return s}}var s=n("06c5");n("d9e2");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){return r(e)||i(e,t)||Object(s["a"])(e,t)||o()}},"38cf":function(e,t,n){var r=n("23e7"),i=n("1148");r({target:"String",proto:!0},{repeat:i})},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3ad0":function(e,t,n){},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),s=r.String,o=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,u=s.getterFor(a);o(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3ea3":function(e,t,n){var r=n("23e7"),i=n("f748"),s=Math.abs,o=Math.pow;r({target:"Math",stat:!0},{cbrt:function(e){return i(e=+e)*o(s(e),1/3)}})},"3f8c":function(e,t){e.exports={}},4069:function(e,t,n){var r=n("44d2");r("flat")},"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},"40d5":function(e,t,n){var r=n("d039");e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),s=n("d039"),o=n("c6b6"),a=r.Object,c=i("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),s=n("b622"),o=s("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},"466d":function(e,t,n){"use strict";var r=n("c65b"),i=n("d784"),s=n("825a"),o=n("50c4"),a=n("577e"),c=n("1d80"),u=n("dc4a"),l=n("8aa5"),h=n("14c3");i("match",(function(e,t,n){return[function(t){var n=c(this),i=void 0==t?void 0:u(t,e);return i?r(i,t,n):new RegExp(t)[e](a(n))},function(e){var r=s(this),i=a(e),c=n(t,r,i);if(c.done)return c.value;if(!r.global)return h(r,i);var u=r.unicode;r.lastIndex=0;var d,f=[],p=0;while(null!==(d=h(r,i))){var m=a(d[0]);f[p]=m,""===m&&(r.lastIndex=l(i,o(r.lastIndex),u)),p++}return 0===p?null:f}]}))},4804:function(e,t,n){},4840:function(e,t,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");e.exports=function(e,t){var n,s=r(e).constructor;return void 0===s||void 0==(n=r(s)[o])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("1626"),o=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&s(n=e.toString)&&!o(r=i(n,e)))return r;if(s(n=e.valueOf)&&!o(r=i(n,e)))return r;if("string"!==t&&s(n=e.toString)&&!o(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"498a":function(e,t,n){"use strict";var r=n("23e7"),i=n("58a8").trim,s=n("c8d2");r({target:"String",proto:!0,forced:s("trim")},{trim:function(){return i(this)}})},"4ae1":function(e,t,n){var r=n("23e7"),i=n("d066"),s=n("2ba4"),o=n("0538"),a=n("5087"),c=n("825a"),u=n("861d"),l=n("7c73"),h=n("d039"),d=i("Reflect","construct"),f=Object.prototype,p=[].push,m=h((function(){function e(){}return!(d((function(){}),[],e)instanceof e)})),g=!h((function(){d((function(){}))})),v=m||g;r({target:"Reflect",stat:!0,forced:v,sham:v},{construct:function(e,t){a(e),c(t);var n=arguments.length<3?e:a(arguments[2]);if(g&&!m)return d(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return s(p,r,t),new(s(o,e,r))}var i=n.prototype,h=l(u(i)?i:f),v=s(e,h,t);return u(v)?v:h}})},"4b85":function(e,t,n){},"4bd4":function(e,t,n){"use strict";var r=n("5530"),i=(n("caad"),n("2532"),n("07ac"),n("4de4"),n("d3b7"),n("159b"),n("7db0"),n("58df")),s=n("7e2b"),o=n("3206");t["a"]=Object(i["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,n=function(e){return e.$watch("hasError",(function(n){t.$set(t.errorBag,e._uid,n)}),{immediate:!0})},r={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=e.$watch("shouldValidate",(function(i){i&&(t.errorBag.hasOwnProperty(e._uid)||(r.valid=n(e)))})):r.valid=n(e),r},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var n=this.watchers.find((function(e){return e._uid===t._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},"4dae":function(e,t,n){var r=n("da84"),i=n("23cb"),s=n("07fa"),o=n("8418"),a=r.Array,c=Math.max;e.exports=function(e,t,n){for(var r=s(e),u=i(t,r),l=i(void 0===n?r:n,r),h=a(c(l-u,0)),d=0;u<l;u++,d++)o(h,d,e[u]);return h.length=d,h}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(e,t,n){"use strict";var r=n("da84"),i=n("0366"),s=n("c65b"),o=n("7b0b"),a=n("9bdd"),c=n("e95a"),u=n("68ee"),l=n("07fa"),h=n("8418"),d=n("9a1f"),f=n("35a1"),p=r.Array;e.exports=function(e){var t=o(e),n=u(this),r=arguments.length,m=r>1?arguments[1]:void 0,g=void 0!==m;g&&(m=i(m,r>2?arguments[2]:void 0));var v,y,b,w,_,I,T=f(t),E=0;if(!T||this==p&&c(T))for(v=l(t),y=n?new this(v):p(v);v>E;E++)I=g?m(t[E],E):t[E],h(y,E,I);else for(w=d(t,T),_=w.next,y=n?new this:[];!(b=s(_,w)).done;E++)I=g?a(w,m,[b.value,E],!0):b.value,h(y,E,I);return y.length=E,y}},"4e82":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("ade3"),i=n("3206");function s(e,t,n){return Object(i["a"])(e,t,n).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[e])return this[e].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(r["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[e]&&this[e].register(this)},beforeDestroy:function(){this[e]&&this[e].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}s("itemGroup")},"4e827":function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),s=n("59ed"),o=n("7b0b"),a=n("07fa"),c=n("577e"),u=n("d039"),l=n("addb"),h=n("a640"),d=n("04d1"),f=n("d998"),p=n("2d00"),m=n("512c"),g=[],v=i(g.sort),y=i(g.push),b=u((function(){g.sort(void 0)})),w=u((function(){g.sort(null)})),_=h("sort"),I=!u((function(){if(p)return p<70;if(!(d&&d>3)){if(f)return!0;if(m)return m<603;var e,t,n,r,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)g.push({k:t+r,v:n})}for(g.sort((function(e,t){return t.v-e.v})),r=0;r<g.length;r++)t=g[r].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),T=b||!w||!_||!I,E=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:c(t)>c(n)?1:-1}};r({target:"Array",proto:!0,forced:T},{sort:function(e){void 0!==e&&s(e);var t=o(this);if(I)return void 0===e?v(t):v(t,e);var n,r,i=[],c=a(t);for(r=0;r<c;r++)r in t&&y(i,t[r]);l(i,E(e)),n=i.length,r=0;while(r<n)t[r]=i[r++];while(r<c)delete t[r++];return t}})},"4f60":function(e,t,n){"use strict";var r=n("7ded");n.d(t,"a",(function(){return r["a"]}));var i="firebase",s="9.6.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r["a"].registerVersion(i,s,"app-compat")},"4fad":function(e,t,n){var r=n("d039"),i=n("861d"),s=n("c6b6"),o=n("d86b"),a=Object.isExtensible,c=r((function(){a(1)}));e.exports=c||o?function(e){return!!i(e)&&((!o||"ArrayBuffer"!=s(e))&&(!a||a(e)))}:a},"4ff9":function(e,t,n){},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),s=n("0d51"),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},"512c":function(e,t,n){var r=n("342f"),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},5319:function(e,t,n){"use strict";var r=n("2ba4"),i=n("c65b"),s=n("e330"),o=n("d784"),a=n("d039"),c=n("825a"),u=n("1626"),l=n("5926"),h=n("50c4"),d=n("577e"),f=n("1d80"),p=n("8aa5"),m=n("dc4a"),g=n("0cb2"),v=n("14c3"),y=n("b622"),b=y("replace"),w=Math.max,_=Math.min,I=s([].concat),T=s([].push),E=s("".indexOf),k=s("".slice),S=function(e){return void 0===e?e:String(e)},O=function(){return"$0"==="a".replace(/./,"$0")}(),C=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),x=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,n){var s=C?"$":"$0";return[function(e,n){var r=f(this),s=void 0==e?void 0:m(e,b);return s?i(s,e,r,n):i(t,d(r),e,n)},function(e,i){var o=c(this),a=d(e);if("string"==typeof i&&-1===E(i,s)&&-1===E(i,"$<")){var f=n(t,o,a,i);if(f.done)return f.value}var m=u(i);m||(i=d(i));var y=o.global;if(y){var b=o.unicode;o.lastIndex=0}var O=[];while(1){var C=v(o,a);if(null===C)break;if(T(O,C),!y)break;var x=d(C[0]);""===x&&(o.lastIndex=p(a,h(o.lastIndex),b))}for(var A="",N=0,L=0;L<O.length;L++){C=O[L];for(var R=d(C[0]),D=w(_(l(C.index),a.length),0),P=[],j=1;j<C.length;j++)T(P,S(C[j]));var M=C.groups;if(m){var F=I([R],P,D,a);void 0!==M&&T(F,M);var V=d(r(i,void 0,F))}else V=g(R,a,D,P,M,i);D>=N&&(A+=k(a,N,D)+V,N=D+R.length)}return A+k(a,N)}]}),!x||!O||C)},"53ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");var r=n("ade3");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5607:function(e,t,n){"use strict";n("b0c0"),n("99af"),n("a9e3"),n("7435");var r=n("80d2"),i=80;function s(e,t){e.style.transform=t,e.style.webkitTransform=t}function o(e){return"TouchEvent"===e.constructor.name}function a(e){return"KeyboardEvent"===e.constructor.name}var c=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=0,i=0;if(!a(e)){var s=t.getBoundingClientRect(),c=o(e)?e.touches[e.touches.length-1]:e;r=c.clientX-s.left,i=c.clientY-s.top}var u=0,l=.3;t._ripple&&t._ripple.circle?(l=.15,u=t.clientWidth/2,u=n.center?u:u+Math.sqrt(Math.pow(r-u,2)+Math.pow(i-u,2))/4):u=Math.sqrt(Math.pow(t.clientWidth,2)+Math.pow(t.clientHeight,2))/2;var h="".concat((t.clientWidth-2*u)/2,"px"),d="".concat((t.clientHeight-2*u)/2,"px"),f=n.center?h:"".concat(r-u,"px"),p=n.center?d:"".concat(i-u,"px");return{radius:u,scale:l,x:f,y:p,centerX:h,centerY:d}},u={show:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t._ripple&&t._ripple.enabled){var r=document.createElement("span"),i=document.createElement("span");r.appendChild(i),r.className="v-ripple__container",n.class&&(r.className+=" ".concat(n.class));var o=c(e,t,n),a=o.radius,u=o.scale,l=o.x,h=o.y,d=o.centerX,f=o.centerY,p="".concat(2*a,"px");i.className="v-ripple__animation",i.style.width=p,i.style.height=p,t.appendChild(r);var m=window.getComputedStyle(t);m&&"static"===m.position&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),s(i,"translate(".concat(l,", ").concat(h,") scale3d(").concat(u,",").concat(u,",").concat(u,")")),i.dataset.activated=String(performance.now()),setTimeout((function(){i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),s(i,"translate(".concat(d,", ").concat(f,") scale3d(1,1,1)"))}),0)}},hide:function(e){if(e&&e._ripple&&e._ripple.enabled){var t=e.getElementsByClassName("v-ripple__animation");if(0!==t.length){var n=t[t.length-1];if(!n.dataset.isHiding){n.dataset.isHiding="true";var r=performance.now()-Number(n.dataset.activated),i=Math.max(250-r,0);setTimeout((function(){n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((function(){var t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)}),300)}),i)}}}}};function l(e){return"undefined"===typeof e||!!e}function h(e){var t={},n=e.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,o(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||a(e),n._ripple.class&&(t.class=n._ripple.class),o(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=function(){u.show(e,n,t)},n._ripple.showTimer=window.setTimeout((function(){n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),i)}else u.show(e,n,t)}}function d(e){var t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=setTimeout((function(){d(e)})));window.setTimeout((function(){t._ripple&&(t._ripple.touched=!1)})),u.hide(t)}}function f(e){var t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}var p=!1;function m(e){p||e.keyCode!==r["q"].enter&&e.keyCode!==r["q"].space||(p=!0,h(e))}function g(e){p=!1,d(e)}function v(e){!0===p&&(p=!1,d(e))}function y(e,t,n){var r=l(t.value);r||u.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=r;var i=t.value||{};i.center&&(e._ripple.centered=!0),i.class&&(e._ripple.class=t.value.class),i.circle&&(e._ripple.circle=i.circle),r&&!n?(e.addEventListener("touchstart",h,{passive:!0}),e.addEventListener("touchend",d,{passive:!0}),e.addEventListener("touchmove",f,{passive:!0}),e.addEventListener("touchcancel",d),e.addEventListener("mousedown",h),e.addEventListener("mouseup",d),e.addEventListener("mouseleave",d),e.addEventListener("keydown",m),e.addEventListener("keyup",g),e.addEventListener("blur",v),e.addEventListener("dragstart",d,{passive:!0})):!r&&n&&b(e)}function b(e){e.removeEventListener("mousedown",h),e.removeEventListener("touchstart",h),e.removeEventListener("touchend",d),e.removeEventListener("touchmove",f),e.removeEventListener("touchcancel",d),e.removeEventListener("mouseup",d),e.removeEventListener("mouseleave",d),e.removeEventListener("keydown",m),e.removeEventListener("keyup",g),e.removeEventListener("dragstart",d),e.removeEventListener("blur",v)}function w(e,t,n){y(e,t,!1)}function _(e){delete e._ripple,b(e)}function I(e,t){if(t.value!==t.oldValue){var n=l(t.oldValue);y(e,t,n)}}var T={bind:w,unbind:_,update:I};t["a"]=T},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.3",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),i=n("f5df"),s=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return Q})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return j})),n.d(t,"_addComponent",(function(){return $})),n.d(t,"_addOrOverwriteComponent",(function(){return U})),n.d(t,"_apps",(function(){return F})),n.d(t,"_clearComponents",(function(){return H})),n.d(t,"_components",(function(){return V})),n.d(t,"_getProvider",(function(){return q})),n.d(t,"_registerComponent",(function(){return B})),n.d(t,"_removeServiceInstance",(function(){return z})),n.d(t,"deleteApp",(function(){return Z})),n.d(t,"getApp",(function(){return J})),n.d(t,"getApps",(function(){return X})),n.d(t,"initializeApp",(function(){return Y})),n.d(t,"onLog",(function(){return te})),n.d(t,"registerVersion",(function(){return ee})),n.d(t,"setLogLevel",(function(){return ne}));var r=n("22e5"),i=n("e691"),s=n("1fd5");n.d(t,"FirebaseError",(function(){return s["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.15",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",I="@firebase/installations",T="@firebase/installations-compat",E="@firebase/messaging",k="@firebase/messaging-compat",S="@firebase/performance",O="@firebase/performance-compat",C="@firebase/remote-config",x="@firebase/remote-config-compat",A="@firebase/storage",N="@firebase/storage-compat",L="@firebase/firestore",R="@firebase/firestore-compat",D="firebase",P="9.6.5",j="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[I]:"fire-iid",[T]:"fire-iid-compat",[E]:"fire-fcm",[k]:"fire-fcm-compat",[S]:"fire-perf",[O]:"fire-perf-compat",[C]:"fire-rc",[x]:"fire-rc-compat",[A]:"fire-gcs",[N]:"fire-gcs-compat",[L]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[D]:"fire-js-all"},F=new Map,V=new Map;function $(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function U(e,t){e.container.addOrOverwriteComponent(t)}function B(e){const t=e.name;if(V.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;V.set(t,e);for(const n of F.values())$(n,e);return!0}function q(e,t){return e.container.getProvider(t)}function z(e,t,n=j){q(e,t).clearInstance(n)}function H(){V.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},K=new s["b"]("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=P;function Y(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:j,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw K.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if(Object(s["h"])(e,o.options)&&Object(s["h"])(n,o.config))return o;throw K.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of V.values())a.addComponent(r);const c=new G(e,n,a);return F.set(i,c),c}function J(e=j){const t=F.get(e);if(!t)throw K.create("no-app",{appName:e});return t}function X(){return Array.from(F.values())}async function Z(e){const t=e.name;F.has(t)&&(F.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,n){var i;let s=null!==(i=M[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}B(new r["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw K.create("invalid-log-argument");Object(i["d"])(e,t)}function ne(e){Object(i["c"])(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){B(new r["a"]("platform-logger",e=>new o(e),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}re("")},"58a8":function(e,t,n){var r=n("e330"),i=n("1d80"),s=n("577e"),o=n("5899"),a=r("".replace),c="["+o+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),h=function(e){return function(t){var n=s(i(t));return 1&e&&(n=a(n,u,"")),2&e&&(n=a(n,l,"")),n}};e.exports={start:h(1),end:h(2),trim:h(3)}},"58df":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("2b0e");function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r["a"].extend({mixins:t})}},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},5994:function(e,t,n){"use strict";(function(e){var t=n("7ded"),r=n("1f5a"),i=n("22e5"),s=n("1fd5"),o="@firebase/auth-compat",a="0.2.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function h(e=Object(s["l"])()){return!("file:"!==u()&&"ionic:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["u"])()||Object(s["t"])()}function f(){return Object(s["q"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(s["l"])()){return/Edge\/\d+/.test(e)}function m(e=Object(s["l"])()){return f()||p(e)}function g(){try{const e=self.localStorage,t=r["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!m()||Object(s["r"])()}catch(e){return v()&&Object(s["r"])()}return!1}function v(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function y(){return(l()||Object(s["n"])()||h())&&!d()&&g()&&!v()}function b(){return h()&&"undefined"!==typeof document}async function w(){return!!b()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}function _(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={LOCAL:"local",NONE:"none",SESSION:"session"},T=r["p"],E="persistence";function k(e,t){T(Object.values(I).includes(t),e,"invalid-persistence-type"),Object(s["u"])()?T(t!==I.SESSION,e,"unsupported-persistence-type"):Object(s["t"])()?T(t===I.NONE,e,"unsupported-persistence-type"):v()?T(t===I.NONE||t===I.LOCAL&&Object(s["r"])(),e,"unsupported-persistence-type"):T(t===I.NONE||g(),e,"unsupported-persistence-type")}async function S(e){await e._initializationPromise;const t=C(),n=r["v"](E,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function O(e,t){const n=C();if(!n)return[];const i=r["v"](E,e,t),s=n.getItem(i);switch(s){case I.NONE:return[r["L"]];case I.LOCAL:return[r["M"],r["A"]];case I.SESSION:return[r["A"]];default:return[]}}function C(){var e;try{return(null===(e=_())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=r["p"];class A{constructor(){this.browserResolver=r["t"](r["z"]),this.cordovaResolver=r["t"](r["E"]),this.underlyingResolver=null,this._redirectPersistence=r["A"],this._completeRedirectFn=r["u"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return x(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await w();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return e.unwrap()}function L(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){return P(e)}function D(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new F(e,r["J"](e,t))}else if(i){const e=P(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function P(e){const{_tokenResponse:t}=e instanceof s["c"]?e.customData:e;if(!t)return null;if(!(e instanceof s["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return r["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===r["k"].PASSWORD)return null;let i;switch(n){case r["k"].GOOGLE:i=r["f"];break;case r["k"].FACEBOOK:i=r["d"];break;case r["k"].GITHUB:i=r["e"];break;case r["k"].TWITTER:i=r["o"];break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return s||o||e||a?a?n.startsWith("saml.")?r["m"]._create(n,a):r["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new r["h"](n).credential({idToken:e,accessToken:s,rawNonce:c}):null}return e instanceof s["c"]?i.credentialFromError(e):i.credentialFromResult(e)}function j(e,t){return t.catch(t=>{throw t instanceof s["c"]&&D(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:R(e),additionalUserInfo:r["I"](e),user:V.getOrCreate(n)}})}async function M(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>j(e,n.confirm(t))}}class F{constructor(e,t){this.resolver=t,this.auth=L(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return j(N(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this._delegate=e,this.multiFactor=r["S"](e)}static getOrCreate(e){return V.USER_MAP.has(e)||V.USER_MAP.set(e,new V(e)),V.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return j(this.auth,r["O"](this._delegate,e))}async linkWithPhoneNumber(e,t){return M(this.auth,r["P"](this._delegate,e,t))}async linkWithPopup(e){return j(this.auth,r["Q"](this._delegate,e,A))}async linkWithRedirect(e){return await S(r["q"](this.auth)),r["R"](this._delegate,e,A)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return j(this.auth,r["T"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return M(this.auth,r["U"](this._delegate,e,t))}reauthenticateWithPopup(e){return j(this.auth,r["V"](this._delegate,e,A))}async reauthenticateWithRedirect(e){return await S(r["q"](this.auth)),r["W"](this._delegate,e,A)}sendEmailVerification(e){return r["X"](this._delegate,e)}async unlink(e){return await r["ib"](this._delegate,e),this}updateEmail(e){return r["jb"](this._delegate,e)}updatePassword(e){return r["kb"](this._delegate,e)}updatePhoneNumber(e){return r["lb"](this._delegate,e)}updateProfile(e){return r["mb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r["nb"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}V.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $=r["p"];class U{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;$(n,"invalid-api-key",{appName:e.name}),$(n,"invalid-api-key",{appName:e.name});const i="undefined"!==typeof window?A:void 0;this._delegate=t.initialize({options:{persistence:q(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(r["G"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?V.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r["D"](this._delegate,e,t)}applyActionCode(e){return r["x"](this._delegate,e)}checkActionCode(e){return r["B"](this._delegate,e)}confirmPasswordReset(e,t){return r["C"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return j(this._delegate,r["F"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r["H"](this._delegate,e)}isSignInWithEmailLink(e){return r["N"](this._delegate,e)}async getRedirectResult(){$(y(),this._delegate,"operation-not-supported-in-this-environment");const e=await r["K"](this._delegate,A);return e?j(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r["w"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=B(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=B(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return r["Z"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return r["Y"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(k(this._delegate,e),e){case I.SESSION:t=r["A"];break;case I.LOCAL:const e=await r["t"](r["M"])._isAvailable();t=e?r["M"]:r["y"];break;case I.NONE:t=r["L"];break;default:return r["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return j(this._delegate,r["ab"](this._delegate))}signInWithCredential(e){return j(this._delegate,r["bb"](this._delegate,e))}signInWithCustomToken(e){return j(this._delegate,r["cb"](this._delegate,e))}signInWithEmailAndPassword(e,t){return j(this._delegate,r["db"](this._delegate,e,t))}signInWithEmailLink(e,t){return j(this._delegate,r["eb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return M(this._delegate,r["fb"](this._delegate,e,t))}async signInWithPopup(e){return $(y(),this._delegate,"operation-not-supported-in-this-environment"),j(this._delegate,r["gb"](this._delegate,e,A))}async signInWithRedirect(e){return $(y(),this._delegate,"operation-not-supported-in-this-environment"),await S(this._delegate),r["hb"](this._delegate,e,A)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r["ob"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function B(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&V.getOrCreate(e));return{next:s,error:t,complete:n}}function q(e,t){const n=O(e,t);if("undefined"===typeof self||n.includes(r["M"])||n.push(r["M"]),"undefined"!==typeof window)for(const i of[r["y"],r["A"]])n.includes(i)||n.push(i);return n.includes(r["L"])||n.push(r["L"]),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */U.Persistence=I;class z{constructor(){this.providerId="phone",this._delegate=new r["i"](N(t["a"].auth()))}static credential(e,t){return r["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}z.PHONE_SIGN_IN_METHOD=r["i"].PHONE_SIGN_IN_METHOD,z.PROVIDER_ID=r["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H=r["p"];class W{constructor(e,n,i=t["a"].app()){var s;H(null===(s=i.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r["l"](e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="auth-compat";function G(e){e.INTERNAL.registerComponent(new i["a"](K,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new U(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r["a"].EMAIL_SIGNIN,PASSWORD_RESET:r["a"].PASSWORD_RESET,RECOVER_EMAIL:r["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r["a"].VERIFY_EMAIL}},EmailAuthProvider:r["c"],FacebookAuthProvider:r["d"],GithubAuthProvider:r["e"],GoogleAuthProvider:r["f"],OAuthProvider:r["h"],SAMLAuthProvider:r["n"],PhoneAuthProvider:z,PhoneMultiFactorGenerator:r["j"],RecaptchaVerifier:W,TwitterAuthProvider:r["o"],Auth:U,AuthCredential:r["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o,a)}G(t["a"])}).call(this,n("c8ba"))},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("0d51"),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a function")}},"5a34":function(e,t,n){var r=n("da84"),i=n("44e7"),s=r.TypeError;e.exports=function(e){if(i(e))throw s("The method doesn't accept regular expressions");return e}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||o((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,o=1,d=c.f,f=u.f;while(i>o){var m,g=h(arguments[o++]),v=d?p(a(g),d(g)):a(g),y=v.length,b=0;while(y>b)m=v[b++],r&&!s(f,g,m)||(n[m]=g[m])}return n}:d},"61d2":function(e,t,n){},6544:function(e,t){e.exports=function(e,t){var n="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var r in"function"===typeof e.exports&&(n.components=e.exports.options.components),n.components=n.components||{},t)n.components[r]=n.components[r]||t[r]}},6547:function(e,t,n){var r=n("e330"),i=n("5926"),s=n("577e"),o=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,h=s(o(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=c(h,d),r<55296||r>56319||d+1===f||(l=c(h,d+1))<56320||l>57343?e?a(h,d):r:e?u(h,d,d+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),m=function(e){if(!s(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},g=function(e){if(!s(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};g.sham=!0,e.exports=!h||i((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?g:m},"69f3":function(e,t,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},b=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var w=d.state||(d.state=new v),_=c(w.get),I=c(w.has),T=c(w.set);r=function(e,t){if(I(w,e))throw new g(m);return t.facade=e,T(w,e,t),t},i=function(e){return _(w,e)||{}},s=function(e){return I(w,e)}}else{var E=f("state");p[E]=!0,r=function(e,t){if(h(e,E))throw new g(m);return t.facade=e,l(e,E,t),t},i=function(e){return h(e,E)?e[E]:{}},s=function(e){return h(e,E)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:b}},"6b75":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"6ece":function(e,t,n){},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==g)&&o(n,"name",g),u=d(n),u.source||(u.source=f.join("string"==typeof g?g:""))),e!==r?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},"6f53":function(e,t,n){var r=n("83ab"),i=n("e330"),s=n("df75"),o=n("fc6a"),a=n("d1e7").f,c=i(a),u=i([].push),l=function(e){return function(t){var n,i=o(t),a=s(i),l=a.length,h=0,d=[];while(l>h)n=a[h++],r&&!c(i,n)||u(d,e?[n,i[n]]:i[n]);return d}};e.exports={entries:l(!0),values:l(!1)}},7156:function(e,t,n){var r=n("1626"),i=n("861d"),s=n("d2bb");e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7435:function(e,t,n){},"746f":function(e,t,n){var r=n("428f"),i=n("1a2d"),s=n("e538"),o=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||o(t,e,{value:s.f(e)})}},7496:function(e,t,n){"use strict";var r=n("5530"),i=(n("d9e2"),n("df86"),n("7560")),s=n("58df");t["a"]=Object(s["a"])(i["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(e){var t=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:Object(r["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},7560:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n("5530"),i=n("2b0e"),s=i["a"].extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark:function(){return this.$vuetify.theme.dark||!1},isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(e,t){e!==t&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function o(e){var t=Object(r["a"])(Object(r["a"])({},e.props),e.injections),n=s.options.computed.isDark.call(t);return s.options.computed.themeClasses.call({isDark:n})}t["a"]=s},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;e.exports=s===Object.prototype?void 0:s},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),s=r.Object;e.exports=function(e){return s(i(e))}},"7bc6":function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));n("5530"),n("3835"),n("ac1f"),n("466d"),n("a15b"),n("d81d"),n("1276"),n("d9e2"),n("b0c0"),n("5319"),n("498a"),n("d3b7"),n("25f0"),n("38cf"),n("99af"),n("fb6a"),n("2ca0"),n("07ac");var r=n("d9bd");n("80d2"),n("8da5");function i(e){return!!e&&!!e.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function s(e){var t;if("number"===typeof e)t=e;else{if("string"!==typeof e)throw new TypeError("Colors can only be numbers or strings, recieved ".concat(null==e?e:e.constructor.name," instead"));var n="#"===e[0]?e.substring(1):e;3===n.length&&(n=n.split("").map((function(e){return e+e})).join("")),6!==n.length&&Object(r["c"])("'".concat(e,"' is not a valid rgb color")),t=parseInt(n,16)}return t<0?(Object(r["c"])("Colors cannot be negative: '".concat(e,"'")),t=0):(t>16777215||isNaN(t))&&(Object(r["c"])("'".concat(e,"' is not a valid rgb color")),t=16777215),t}function o(e){var t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function a(e){return o(s(e))}},"7c73":function(e,t,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=o.length;while(e--)delete w[f][o[e]];return w()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=w(),void 0===t?n:s.f(n,t)}},"7db0":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").find,s=n("44d2"),o="find",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s(o)},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),m=n("3f8c"),g=n("ae93"),v=o.PROPER,y=o.CONFIGURABLE,b=g.IteratorPrototype,w=g.BUGGY_SAFARI_ITERATORS,_=p("iterator"),I="keys",T="values",E="entries",k=function(){return this};e.exports=function(e,t,n,o,p,g,S){c(n,t,o);var O,C,x,A=function(e){if(e===p&&P)return P;if(!w&&e in R)return R[e];switch(e){case I:return function(){return new n(this,e)};case T:return function(){return new n(this,e)};case E:return function(){return new n(this,e)}}return function(){return new n(this)}},N=t+" Iterator",L=!1,R=e.prototype,D=R[_]||R["@@iterator"]||p&&R[p],P=!w&&D||A(p),j="Array"==t&&R.entries||D;if(j&&(O=u(j.call(new e)),O!==Object.prototype&&O.next&&(s||u(O)===b||(l?l(O,b):a(O[_])||f(O,_,k)),h(O,N,!0,!0),s&&(m[N]=k))),v&&p==T&&D&&D.name!==T&&(!s&&y?d(R,"name",T):(L=!0,P=function(){return i(D,this)})),p)if(C={values:A(T),keys:g?P:A(I),entries:A(E)},S)for(x in C)(w||L||!(x in R))&&f(R,x,C[x]);else r({target:t,proto:!0,forced:w||L},C);return s&&!S||R[_]===P||f(R,_,P,{name:p}),m[t]=P,C}},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("1fd5"),i=n("22e5"),s=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(e,t=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(s["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s["_DEFAULT_ENTRY_NAME"],!Object(r["e"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s["initializeApp"](i,o);if(Object(r["e"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const i=t.name,a=i.replace("-compat","");if(s["_registerComponent"](t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&Object(r["i"])(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){Object(r["i"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r["g"],ErrorFactory:r["b"],deepExtend:r["i"]}),e}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.16";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){Object(s["registerVersion"])(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(r["m"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},"7e2b":function(e,t,n){"use strict";var r=n("2b0e");function i(e){return function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(t,r)||this.$delete(this.$data[e],r);for(var i in t)this.$set(this.$data[e],i,t[i])}}t["a"]=r["a"].extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},"80d2":function(e,t,n){"use strict";n.d(t,"h",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"k",(function(){return l})),n.d(t,"i",(function(){return h})),n.d(t,"l",(function(){return d})),n.d(t,"o",(function(){return f})),n.d(t,"j",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"p",(function(){return g})),n.d(t,"q",(function(){return y})),n.d(t,"u",(function(){return b})),n.d(t,"r",(function(){return w})),n.d(t,"c",(function(){return I})),n.d(t,"v",(function(){return T})),n.d(t,"w",(function(){return E})),n.d(t,"n",(function(){return k})),n.d(t,"m",(function(){return S})),n.d(t,"e",(function(){return O})),n.d(t,"t",(function(){return C})),n.d(t,"d",(function(){return x})),n.d(t,"s",(function(){return A})),n.d(t,"f",(function(){return N}));n("3835");var r=n("53ca"),i=(n("5530"),n("ac1f"),n("5319"),n("498a"),n("99af"),n("b64b"),n("d3b7"),n("1276"),n("a630"),n("3ca3"),n("a9e3"),n("dca8"),n("2ca0"),n("fb6a"),n("4e827"),n("d81d"),n("25f0"),n("4de4"),n("b0c0"),n("38cf"),n("b680"),n("cb29"),n("2b0e"));function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return i["a"].extend({name:n||e.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:t}},render:function(t,n){var r=n.data,i=n.props,s=n.children;return r.staticClass="".concat(e," ").concat(r.staticClass||"").trim(),t(i.tag,r,s)}})}function o(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=function i(s){n(s),e.removeEventListener(t,i,r)};e.addEventListener(t,i,r)}var a=!1;try{if("undefined"!==typeof window){var c=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("testListener",c,c),window.removeEventListener("testListener",c,c)}}catch(L){console.warn(L)}function u(e,t,n,r){e.addEventListener(t,n,!!a&&r)}function l(e,t,n){var r=t.length-1;if(r<0)return void 0===e?n:e;for(var i=0;i<r;i++){if(null==e)return n;e=e[t[i]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function h(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;var n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((function(n){return h(e[n],t[n])}))}function d(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),l(e,t.split("."),n)):n}function f(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0;var t=+window.getComputedStyle(e).getPropertyValue("z-index");return t||f(e.parentNode)}function p(e,t){for(var n={},r=0;r<t.length;r++){var i=t[r];"undefined"!==typeof e[i]&&(n[i]=e[i])}return n}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):"".concat(Number(e)).concat(t)}function g(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function v(e){return null!==e&&"object"===Object(r["a"])(e)}var y=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function b(e,t){var n=e.$vuetify.icons.component;if(t.startsWith("$")){var r="$vuetify.icons.values.".concat(t.split("$").pop().split(".").pop()),i=d(e,r,t);if("string"!==typeof i)return i;t=i}return null==n?t:{component:n,props:{icon:t}}}function w(e){return Object.keys(e)}var _=/-(\w)/g,I=function(e){return e.replace(_,(function(e,t){return t?t.toUpperCase():""}))};function T(e){return e.charAt(0).toUpperCase()+e.slice(1)}function E(e){return null!=e?Array.isArray(e)?e:[e]:[]}function k(e,t,n){return e.$slots.hasOwnProperty(t)&&e.$scopedSlots.hasOwnProperty(t)&&e.$scopedSlots[t].name?n?"v-slot":"scoped":e.$slots.hasOwnProperty(t)?"normal":e.$scopedSlots.hasOwnProperty(t)?"scoped":void 0}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](n instanceof Function?n():n):!e.$slots.hasOwnProperty(t)||n&&!r?void 0:e.$slots[t]}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(t,Math.min(n,e))}function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=0;while(r<e.length)n.push(e.substr(r,t)),r+=t;return n}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in t){var r=e[n],i=t[n];v(r)&&v(i)?e[n]=A(r,i):e[n]=i}return e}function N(e){if(e.composedPath)return e.composedPath();var t=[],n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}return t}},"81d5":function(e,t,n){"use strict";var r=n("7b0b"),i=n("23cb"),s=n("07fa");e.exports=function(e){var t=r(this),n=s(t),o=arguments.length,a=i(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,u=void 0===c?n:i(c,n);while(u>a)t[a++]=e;return t}},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),s=r.String,o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),s=n("5c6c");e.exports=function(e,t,n){var o=r(t);o in e?i.f(e,o,s(0,n)):e[o]=n}},"857a":function(e,t,n){var r=n("e330"),i=n("1d80"),s=n("577e"),o=/"/g,a=r("".replace);e.exports=function(e,t,n,r){var c=s(i(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+a(s(r),o,"&quot;")+'"'),u+">"+c+"</"+t+">"}},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8654:function(e,t,n){"use strict";var r=n("15fd"),i=n("2909"),s=n("5530"),o=(n("a9e3"),n("0481"),n("4069"),n("d3b7"),n("25f0"),n("caad"),n("2b19"),n("4ff9"),n("4de4"),n("d81d"),n("ac1f"),n("1276"),n("99af"),n("d191"),n("9d26")),a=(n("1b2c"),n("a9ad")),c=n("7560"),u=n("58df"),l=n("80d2"),h=Object(u["a"])(c["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(e,t){var n=t.children,r=t.listeners,i=t.props,o={staticClass:"v-label",class:Object(s["a"])({"v-label--active":i.value,"v-label--is-disabled":i.disabled},Object(c["b"])(t)),attrs:{for:i.for,"aria-hidden":!i.for},on:r,style:{left:Object(l["g"])(i.left),right:Object(l["g"])(i.right),position:i.absolute?"absolute":"relative"},ref:"label"};return e("label",a["a"].options.methods.setTextColor(i.focused&&i.color,o),n)}}),d=h,f=(n("8ff2"),Object(u["a"])(a["a"],c["a"]).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(e,t){return this.$createElement("div",{staticClass:"v-messages__message",key:t},Object(l["m"])(this,"default",{message:e,key:t})||[e])}},render:function(e){return e("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}})),p=f,m=n("7e2b"),g=n("53ca"),v=(n("fb6a"),n("3206")),y=n("d9bd"),b=Object(u["a"])(a["a"],Object(v["a"])("form"),c["a"]),w=b.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("input",e)}},isDisabled:function(){return this.disabled||!!this.form&&this.form.disabled},isInteractive:function(){return!this.isDisabled&&!this.isReadonly},isReadonly:function(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(e,t){Object(l["i"])(e,t)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(e){e||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var e=this;setTimeout((function(){e.hasInput=!1,e.hasFocused=!1,e.isResetting=!1,e.validate()}),0)},hasError:function(e){this.shouldValidate&&this.$emit("update:error",e)},value:function(e){this.lazyValue=e}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(e){return e?Array.isArray(e)?e:[e]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation:function(){this.isResetting=!0},validate:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=[];t=t||this.internalValue,e&&(this.hasInput=this.hasFocused=!0);for(var r=0;r<this.rules.length;r++){var i=this.rules[r],s="function"===typeof i?i(t):i;!1===s||"string"===typeof s?n.push(s||""):"boolean"!==typeof s&&Object(y["b"])("Rules should return a string or boolean, received '".concat(Object(g["a"])(s),"' instead"),this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}}),_=n("d9f7"),I=Object(u["a"])(m["a"],w),T=I.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data:function(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return Object(s["a"])({"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons},this.themeClasses)},computedId:function(){return this.id||"input-".concat(this._uid)},hasDetails:function(){return this.messagesToDisplay.length>0},hasHint:function(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return!(!this.$slots.label&&!this.label)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit(this.$_modelEvent,e)}},isDirty:function(){return!!this.lazyValue},isLabelActive:function(){return this.isDirty},messagesToDisplay:function(){var e=this;return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((function(t){if("string"===typeof t)return t;var n=t(e.internalValue);return"string"===typeof n?n:""})).filter((function(e){return""!==e})):[]},showDetails:function(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value:function(e){this.lazyValue=e}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this["".concat(e,"Icon")],s="click:".concat(Object(l["p"])(e)),a=!(!this.listeners$[s]&&!t),c=Object(_["a"])({attrs:{"aria-label":a?Object(l["p"])(e).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:a?{click:function(e){e.preventDefault(),e.stopPropagation(),n.$emit(s,e),t&&t(e)},mouseup:function(e){e.preventDefault(),e.stopPropagation()}}:void 0},r);return this.$createElement("div",{staticClass:"v-input__icon",class:e?"v-input__icon--".concat(Object(l["p"])(e)):void 0},[this.$createElement(o["a"],c,i)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(l["g"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(d,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){var e=this;return this.showDetails?this.$createElement(p,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:function(t){return Object(l["m"])(e,"message",t)}}}):null},genSlot:function(e,t,n){if(!n.length)return null;var r="".concat(e,"-").concat(t);return this.$createElement("div",{staticClass:"v-input__".concat(r),ref:r},n)},genPrependSlot:function(){var e=[];return this.$slots.prepend?e.push(this.$slots.prepend):this.prependIcon&&e.push(this.genIcon("prepend")),this.genSlot("prepend","outer",e)},genAppendSlot:function(){var e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","outer",e)},onClick:function(e){this.$emit("click",e)},onMouseDown:function(e){this.hasMouseDown=!0,this.$emit("mousedown",e)},onMouseUp:function(e){this.hasMouseDown=!1,this.$emit("mouseup",e)}},render:function(e){return e("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),E=T,k=(n("e9b1"),Object(u["a"])(c["a"]).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render:function(e,t){var n=t.props,r=parseInt(n.max,10),i=parseInt(n.value,10),o=r?"".concat(i," / ").concat(r):String(n.value),a=r&&i>r;return e("div",{staticClass:"v-counter",class:Object(s["a"])({"error--text":a},Object(c["b"])(t))},o)}})),S=k,O=n("90a2"),C=n("2b0e");function x(e){return C["a"].extend({name:"intersectable",data:function(){return{isIntersecting:!1}},mounted:function(){O["a"].inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed:function(){O["a"].unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve:function(t,n,r){if(this.isIntersecting=r,r)for(var i=0,s=e.onVisible.length;i<s;i++){var o=this[e.onVisible[i]];"function"!==typeof o?Object(y["c"])(e.onVisible[i]+" method is not available on the instance but referenced in intersectable mixin options"):o()}}}})}var A=n("297c"),N=n("dc22"),L=n("5607"),R=n("dd89"),D=["title"],P=Object(u["a"])(E,x({onVisible:["onResize","tryAutofocus"]}),A["a"]),j=["color","file","time","date","datetime-local","week","month"];t["a"]=P.extend().extend({name:"v-text-field",directives:{resize:N["a"],ripple:L["a"]},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:function(){return{badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},E.options.computed.classes.call(this)),{},{"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped})},computedColor:function(){var e=w.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":e},computedCounterValue:function(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):Object(i["a"])((this.internalValue||"").toString()).length},hasCounter:function(){return!1!==this.counter&&null!=this.counter},hasDetails:function(){return E.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("input",this.lazyValue)}},isDirty:function(){var e;return(null==(e=this.lazyValue)?void 0:e.toString().length)>0||this.badInput},isEnclosed:function(){return this.filled||this.isSolo||this.outlined},isLabelActive:function(){return this.isDirty||j.includes(this.type)},isSingle:function(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo:function(){return this.solo||this.soloInverted},labelPosition:function(){var e=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(e-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:e,right:"auto"}:{left:"auto",right:e}},showLabel:function(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue:function(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label:function(){this.$nextTick(this.setLabelWidth)},prefix:function(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value:function(e){this.lazyValue=e}},created:function(){this.$attrs.hasOwnProperty("box")&&Object(y["a"])("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(y["a"])("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&Object(y["c"])("shaped should be used with either filled or outlined",this)},mounted:function(){var e=this;this.$watch((function(){return e.labelValue}),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((function(){e.isBooted=!0,requestAnimationFrame((function(){e.isIntersecting||e.onResize()}))}))},methods:{focus:function(){this.onFocus()},blur:function(e){var t=this;window.requestAnimationFrame((function(){t.$refs.input&&t.$refs.input.blur()}))},clearableCallback:function(){var e=this;this.$refs.input&&this.$refs.input.focus(),this.$nextTick((function(){return e.internalValue=null}))},genAppendSlot:function(){var e=[];return this.$slots["append-outer"]?e.push(this.$slots["append-outer"]):this.appendOuterIcon&&e.push(this.genIcon("appendOuter")),this.genSlot("append","outer",e)},genPrependInnerSlot:function(){var e=[];return this.$slots["prepend-inner"]?e.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&e.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",e)},genIconSlot:function(){var e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","inner",e)},genInputSlot:function(){var e=E.options.methods.genInputSlot.call(this),t=this.genPrependInnerSlot();return t&&(e.children=e.children||[],e.children.unshift(t)),e},genClearIcon:function(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter:function(){var e,t,n;if(!this.hasCounter)return null;var r=!0===this.counter?this.attrs$.maxlength:this.counter,i={dark:this.dark,light:this.light,max:r,value:this.computedCounterValue};return null!=(e=null==(t=(n=this.$scopedSlots).counter)?void 0:t.call(n,{props:i}))?e:this.$createElement(S,{props:i})},genControl:function(){return E.options.methods.genControl.call(this)},genDefaultSlot:function(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset:function(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel:function(){if(!this.showLabel)return null;var e={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(d,e,this.$slots.label||this.label)},genLegend:function(){var e=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,t=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:Object(l["g"])(e)}},[t])},genInput:function(){var e=Object.assign({},this.listeners$);delete e.change;var t=this.attrs$,n=(t.title,Object(r["a"])(t,D));return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:Object(s["a"])(Object(s["a"])({},n),{},{autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type}),on:Object.assign(e,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages:function(){if(!this.showDetails)return null;var e=E.options.methods.genMessages.call(this),t=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[e,t])},genTextFieldSlot:function(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix:function(e){return this.$createElement("div",{class:"v-text-field__".concat(e),ref:e},this[e])},onBlur:function(e){var t=this;this.isFocused=!1,e&&this.$nextTick((function(){return t.$emit("blur",e)}))},onClick:function(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus:function(e){if(this.$refs.input){var t=Object(R["a"])(this.$el);if(t)return t.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,e&&this.$emit("focus",e)))}},onInput:function(e){var t=e.target;this.internalValue=t.value,this.badInput=t.validity&&t.validity.badInput},onKeyDown:function(e){e.keyCode===l["q"].enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",e)},onMouseDown:function(e){e.target!==this.$refs.input&&(e.preventDefault(),e.stopPropagation()),E.options.methods.onMouseDown.call(this,e)},onMouseUp:function(e){this.hasMouseDown&&this.focus(),E.options.methods.onMouseUp.call(this,e)},setLabelWidth:function(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth:function(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth:function(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus:function(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;var e=Object(R["a"])(this.$el);return!(!e||e.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue:function(e){this.hasColor=e,e?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize:function(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},8860:function(e,t,n){"use strict";var r=n("b85c"),i=n("5530"),s=(n("0481"),n("4069"),n("c740"),n("a434"),n("3ad0"),n("8dd9"));t["a"]=s["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(e){this.groups.push(e)},unregister:function(e){var t=this.groups.findIndex((function(t){return t._uid===e._uid}));t>-1&&this.groups.splice(t,1)},listClick:function(e){if(!this.expand){var t,n=Object(r["a"])(this.groups);try{for(n.s();!(t=n.n()).done;){var i=t.value;i.toggle(e)}}catch(s){n.e(s)}finally{n.f()}}}},render:function(e){var t={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(i["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return e(this.tag,this.setBackgroundColor(this.color,t),[this.$slots.default])}})},8925:function(e,t,n){var r=n("e330"),i=n("1626"),s=n("c6cd"),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},"899c":function(e,t,n){},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8c4f":function(e,t,n){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function r(e,t){for(var n in t)e[n]=t[n];return e}var i=/[!'()*]/g,s=function(e){return"%"+e.charCodeAt(0).toString(16)},o=/%2C/g,a=function(e){return encodeURIComponent(e).replace(i,s).replace(o,",")};function c(e){try{return decodeURIComponent(e)}catch(t){0}return e}function u(e,t,n){void 0===t&&(t={});var r,i=n||h;try{r=i(e||"")}catch(a){r={}}for(var s in t){var o=t[s];r[s]=Array.isArray(o)?o.map(l):l(o)}return r}var l=function(e){return null==e||"object"===typeof e?e:String(e)};function h(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function d(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(a(t)):r.push(a(t)+"="+a(e)))})),r.join("&")}return a(t)+"="+a(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var f=/\/?$/;function p(e,t,n,r){var i=r&&r.options.stringifyQuery,s=t.query||{};try{s=m(s)}catch(a){}var o={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:s,params:t.params||{},fullPath:y(t,i),matched:e?v(e):[]};return n&&(o.redirectedFrom=y(n,i)),Object.freeze(o)}function m(e){if(Array.isArray(e))return e.map(m);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=m(e[n]);return t}return e}var g=p(null,{path:"/"});function v(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function y(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var s=t||d;return(n||"/")+s(r)+i}function b(e,t,n){return t===g?e===t:!!t&&(e.path&&t.path?e.path.replace(f,"")===t.path.replace(f,"")&&(n||e.hash===t.hash&&w(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&w(e.query,t.query)&&w(e.params,t.params))))}function w(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var s=e[n],o=r[i];if(o!==n)return!1;var a=t[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?w(s,a):String(s)===String(a)}))}function _(e,t){return 0===e.path.replace(f,"/").indexOf(t.path.replace(f,"/"))&&(!t.hash||e.hash===t.hash)&&I(e.query,t.query)}function I(e,t){for(var n in t)if(!(n in e))return!1;return!0}function T(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var E={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,s=t.parent,o=t.data;o.routerView=!0;var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&k(m,o,p.route,p.configProps),a(m,o,i)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(e,t){var n=g.instances[c];(t&&n!==e||!t&&n===e)&&(g.instances[c]=t)},(o.hook||(o.hook={})).prepatch=function(e,t){g.instances[c]=t.componentInstance},o.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==g.instances[c]&&(g.instances[c]=e.componentInstance),T(u)};var y=g.props&&g.props[c];return y&&(r(l[c],{route:u,configProps:y}),k(v,o,u,y)),a(v,o,i)}};function k(e,t,n,i){var s=t.props=S(n,i);if(s){s=t.props=r({},s);var o=t.attrs=t.attrs||{};for(var a in s)e.props&&a in e.props||(o[a]=s[a],delete s[a])}}function S(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function O(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var s=e.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function C(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function x(e){return e.replace(/\/+/g,"/")}var A=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},N=Y,L=M,R=F,D=U,P=Q,j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(e,t){var n,r=[],i=0,s=0,o="",a=t&&t.delimiter||"/";while(null!=(n=j.exec(e))){var c=n[0],u=n[1],l=n.index;if(o+=e.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=e[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(r.push(o),o="");var y=null!=d&&null!=h&&h!==d,b="+"===g||"*"===g,w="?"===g||"*"===g,_=n[2]||a,I=p||m;r.push({name:f||i++,prefix:d||"",delimiter:_,optional:w,repeat:b,partial:y,asterisk:!!v,pattern:I?q(I):v?".*":"[^"+B(_)+"]+?"})}}return s<e.length&&(o+=e.substr(s)),o&&r.push(o),r}function F(e,t){return U(M(e,t),t)}function V(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function $(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function U(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",H(t)));return function(t,r){for(var i="",s=t||{},o=r||{},a=o.pretty?V:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(A(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?$(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function z(e,t){return e.keys=t,e}function H(e){return e&&e.sensitive?"":"i"}function W(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(e,t)}function K(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Y(e[i],t,n).source);var s=new RegExp("(?:"+r.join("|")+")",H(n));return z(s,t)}function G(e,t,n){return Q(M(e,n),t,n)}function Q(e,t,n){A(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<e.length;o++){var a=e[o];if("string"===typeof a)s+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=B(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",z(new RegExp("^"+s,H(n)),t)}function Y(e,t,n){return A(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?W(e,t):A(e)?K(e,t,n):G(e,t,n)}N.parse=L,N.compile=R,N.tokensToFunction=D,N.tokensToRegExp=P;var J=Object.create(null);function X(e,t,n){t=t||{};try{var r=J[e]||(J[e]=N.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function Z(e,t,n,i){var s="string"===typeof e?{path:e}:e;if(s._normalized)return s;if(s.name){s=r({},e);var o=s.params;return o&&"object"===typeof o&&(s.params=r({},o)),s}if(!s.path&&s.params&&t){s=r({},s),s._normalized=!0;var a=r(r({},t.params),s.params);if(t.name)s.name=t.name,s.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;s.path=X(c,a,"path "+t.path)}else 0;return s}var l=C(s.path||""),h=t&&t.path||"/",d=l.path?O(l.path,h,n||s.append):h,f=u(l.query,s.query,i&&i.options.parseQuery),p=s.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var ee,te=[String,Object],ne=[String,Array],re=function(){},ie={name:"RouterLink",props:{to:{type:te,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:ne,default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,s=n.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[g]=b(i,v,this.exactPath),u[m]=this.exact||this.exactPath?u[g]:_(i,v);var y=u[g]?this.ariaCurrentValue:null,w=function(e){se(e)&&(t.replace?n.replace(o,re):n.push(o,re))},I={click:se};Array.isArray(this.event)?this.event.forEach((function(e){I[e]=w})):I[this.event]=w;var T={class:u},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:w,isActive:u[m],isExactActive:u[g]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?e():e("span",{},E)}if("a"===this.tag)T.on=I,T.attrs={href:c,"aria-current":y};else{var k=oe(this.$slots.default);if(k){k.isStatic=!1;var S=k.data=r({},k.data);for(var O in S.on=S.on||{},S.on){var C=S.on[O];O in I&&(S.on[O]=Array.isArray(C)?C:[C])}for(var x in I)x in S.on?S.on[x].push(I[x]):S.on[x]=w;var A=k.data.attrs=r({},k.data.attrs);A.href=c,A["aria-current"]=y}else T.on=I}return e(this.tag,T,this.$slots.default)}};function se(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function oe(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=oe(t.children)))return t}}function ae(e){if(!ae.installed||ee!==e){ae.installed=!0,ee=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",E),e.component("RouterLink",ie);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ce="undefined"!==typeof window;function ue(e,t,n,r,i){var s=t||[],o=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){le(s,o,a,e,i)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function le(e,t,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=de(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:he(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=s?x(s+"/"+r.path):void 0;le(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};le(e,t,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function he(e,t){var n=N(e,[],t);return n}function de(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:x(t.path+"/"+e)}function fe(e,t){var n=ue(e),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(e){ue(e,r,i,s)}function a(e,t){var n="object"!==typeof e?s[e]:void 0;ue([t||e],r,i,s,n),n&&n.alias.length&&ue(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,s,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,o){var a=Z(e,n,!1,t),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=X(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(pe(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(p(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var m=me(c,e),g=X(m,f,'redirect route with path "'+m+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=X(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return t.params=i.params,d(o,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):p(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function pe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=e.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function me(e,t){return O(e,t.parent?t.parent.path:"/",!0)}var ge=ce&&window.performance&&window.performance.now?window.performance:Date;function ve(){return ge.now().toFixed(3)}var ye=ve();function be(){return ye}function we(e){return ye=e}var _e=Object.create(null);function Ie(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=be(),window.history.replaceState(n,"",t),window.addEventListener("popstate",ke),function(){window.removeEventListener("popstate",ke)}}function Te(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var s=Se(),o=i.call(e,t,n,r?s:null);o&&("function"===typeof o.then?o.then((function(e){Re(e,s)})).catch((function(e){0})):Re(o,s))}))}}function Ee(){var e=be();e&&(_e[e]={x:window.pageXOffset,y:window.pageYOffset})}function ke(e){Ee(),e.state&&e.state.key&&we(e.state.key)}function Se(){var e=be();if(e)return _e[e]}function Oe(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function Ce(e){return Ne(e.x)||Ne(e.y)}function xe(e){return{x:Ne(e.x)?e.x:window.pageXOffset,y:Ne(e.y)?e.y:window.pageYOffset}}function Ae(e){return{x:Ne(e.x)?e.x:0,y:Ne(e.y)?e.y:0}}function Ne(e){return"number"===typeof e}var Le=/^#\d/;function Re(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=Le.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=Ae(i),t=Oe(r,i)}else Ce(e)&&(t=xe(e))}else n&&Ce(e)&&(t=xe(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var De=ce&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Pe(e,t){Ee();var n=window.history;try{if(t){var i=r({},n.state);i.key=be(),n.replaceState(i,"",e)}else n.pushState({key:we(ve())},"",e)}catch(s){window.location[t?"replace":"assign"](e)}}function je(e){Pe(e,!0)}function Me(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}var Fe={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ve(e,t){return qe(e,t,Fe.redirected,'Redirected when going from "'+e.fullPath+'" to "'+He(t)+'" via a navigation guard.')}function $e(e,t){var n=qe(e,t,Fe.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Ue(e,t){return qe(e,t,Fe.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function Be(e,t){return qe(e,t,Fe.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function qe(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var ze=["params","query","hash"];function He(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return ze.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function We(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Ke(e,t){return We(e)&&e._isRouter&&(null==t||e.type===t)}function Ge(e){return function(t,n,r){var i=!1,s=0,o=null;Qe(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,s++;var c,u=Ze((function(t){Xe(t)&&(t=t.default),e.resolved="function"===typeof t?t:ee.extend(t),n.components[a]=t,s--,s<=0&&r()})),l=Ze((function(e){var t="Failed to resolve async component "+a+": "+e;o||(o=We(e)?e:new Error(t),r(o))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Qe(e,t){return Ye(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Ye(e){return Array.prototype.concat.apply([],e)}var Je="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Xe(e){return e.__esModule||Je&&"Module"===e[Symbol.toStringTag]}function Ze(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var et=function(e,t){this.router=e,this.base=tt(t),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function tt(e){if(!e)if(ce){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function nt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function rt(e,t,n,r){var i=Qe(e,(function(e,r,i,s){var o=it(e,t);if(o)return Array.isArray(o)?o.map((function(e){return n(e,r,i,s)})):n(o,r,i,s)}));return Ye(r?i.reverse():i)}function it(e,t){return"function"!==typeof e&&(e=ee.extend(e)),e.options[t]}function st(e){return rt(e,"beforeRouteLeave",at,!0)}function ot(e){return rt(e,"beforeRouteUpdate",at)}function at(e,t){if(t)return function(){return e.apply(t,arguments)}}function ct(e){return rt(e,"beforeRouteEnter",(function(e,t,n,r){return ut(e,n,r)}))}function ut(e,t,n){return function(r,i,s){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),s(e)}))}}et.prototype.listen=function(e){this.cb=e},et.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},et.prototype.onError=function(e){this.errorCbs.push(e)},et.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(o){throw this.errorCbs.forEach((function(e){e(o)})),o}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(Ke(e,Fe.redirected)&&s===g||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},et.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var s=function(e){!Ke(e)&&We(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},o=e.matched.length-1,a=i.matched.length-1;if(b(e,i)&&o===a&&e.matched[o]===i.matched[a])return this.ensureURL(),e.hash&&Te(this.router,i,e,!1),s($e(i,e));var c=nt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(st(l),this.router.beforeHooks,ot(u),h.map((function(e){return e.beforeEnter})),Ge(h)),f=function(t,n){if(r.pending!==e)return s(Ue(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),s(Be(i,e))):We(t)?(r.ensureURL(!0),s(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(s(Ve(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(o){s(o)}};Me(d,f,(function(){var n=ct(h),o=n.concat(r.router.resolveHooks);Me(o,f,(function(){if(r.pending!==e)return s(Ue(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){T(e)}))}))}))},et.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},et.prototype.setupListeners=function(){},et.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=g,this.pending=null};var lt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=ht(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=De&&n;r&&this.listeners.push(Ie());var i=function(){var n=e.current,i=ht(e.base);e.current===g&&i===e._startLocation||e.transitionTo(i,(function(e){r&&Te(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){Pe(x(r.base+e.fullPath)),Te(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){je(x(r.base+e.fullPath)),Te(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(ht(this.base)!==this.current.fullPath){var t=x(this.base+this.current.fullPath);e?Pe(t):je(t)}},t.prototype.getCurrentLocation=function(){return ht(this.base)},t}(et);function ht(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(x(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var dt=function(e){function t(t,n,r){e.call(this,t,n),r&&ft(this.base)||pt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=De&&n;r&&this.listeners.push(Ie());var i=function(){var t=e.current;pt()&&e.transitionTo(mt(),(function(n){r&&Te(e.router,n,t,!0),De||yt(n.fullPath)}))},s=De?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push((function(){window.removeEventListener(s,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){vt(e.fullPath),Te(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){yt(e.fullPath),Te(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;mt()!==t&&(e?vt(t):yt(t))},t.prototype.getCurrentLocation=function(){return mt()},t}(et);function ft(e){var t=ht(e);if(!/^\/#/.test(t))return window.location.replace(x(e+"/#"+t)),!0}function pt(){var e=mt();return"/"===e.charAt(0)||(yt("/"+e),!1)}function mt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function gt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function vt(e){De?Pe(gt(e)):window.location.hash=e}function yt(e){De?je(gt(e)):window.location.replace(gt(e))}var bt=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){Ke(e,Fe.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(et),wt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=fe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!De&&!1!==e.fallback,this.fallback&&(t="hash"),ce||(t="abstract"),this.mode=t,t){case"history":this.history=new lt(this,e.base);break;case"hash":this.history=new dt(this,e.base,this.fallback);break;case"abstract":this.history=new bt(this,e.base);break;default:0}},_t={currentRoute:{configurable:!0}};function It(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function Tt(e,t,n){var r="hash"===n?"#"+t:t;return e?x(e+"/"+r):r}wt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},_t.currentRoute.get=function(){return this.history&&this.history.current},wt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof lt||n instanceof dt){var r=function(e){var r=n.current,i=t.options.scrollBehavior,s=De&&i;s&&"fullPath"in e&&Te(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},wt.prototype.beforeEach=function(e){return It(this.beforeHooks,e)},wt.prototype.beforeResolve=function(e){return It(this.resolveHooks,e)},wt.prototype.afterEach=function(e){return It(this.afterHooks,e)},wt.prototype.onReady=function(e,t){this.history.onReady(e,t)},wt.prototype.onError=function(e){this.history.onError(e)},wt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},wt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},wt.prototype.go=function(e){this.history.go(e)},wt.prototype.back=function(){this.go(-1)},wt.prototype.forward=function(){this.go(1)},wt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},wt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=Z(e,t,n,this),i=this.match(r,t),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=Tt(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},wt.prototype.getRoutes=function(){return this.matcher.getRoutes()},wt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},wt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(wt.prototype,_t),wt.install=ae,wt.version="3.5.3",wt.isNavigationFailure=Ke,wt.NavigationFailureType=Fe,wt.START_LOCATION=g,ce&&window.Vue&&window.Vue.use(wt),t["a"]=wt},"8ce9":function(e,t,n){},"8da5":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n("80d2"),i=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],s=function(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055},o=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],a=function(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)};function c(e){for(var t=Array(3),n=s,o=i,a=0;a<3;++a)t[a]=Math.round(255*Object(r["e"])(n(o[a][0]*e[0]+o[a][1]*e[1]+o[a][2]*e[2])));return(t[0]<<16)+(t[1]<<8)+(t[2]<<0)}function u(e){for(var t=[0,0,0],n=a,r=o,i=n((e>>16&255)/255),s=n((e>>8&255)/255),c=n((e>>0&255)/255),u=0;u<3;++u)t[u]=r[u][0]*i+r[u][1]*s+r[u][2]*c;return t}},"8dd9":function(e,t,n){"use strict";var r=n("5530"),i=(n("25a8"),n("7e2b")),s=n("a9ad"),o=n("c995"),a=n("24b2"),c=n("a236"),u=n("7560"),l=n("58df");t["a"]=Object(l["a"])(i["a"],s["a"],o["a"],a["a"],c["a"],u["a"]).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])(Object(r["a"])({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(e){var t={class:this.classes,style:this.styles,on:this.listeners$};return e(this.tag,this.setBackgroundColor(this.color,t),this.$slots.default)}})},"8f6b":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Cr})),n.d(t,"b",(function(){return Ar})),n.d(t,"c",(function(){return xr})),n.d(t,"d",(function(){return Lr})),n.d(t,"e",(function(){return Nr})),n.d(t,"f",(function(){return Rr})),n.d(t,"g",(function(){return Dr})),n.d(t,"h",(function(){return Sr})),n.d(t,"i",(function(){return Or}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m,g.apply(null,arguments)}function v(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var e=h(this);delete _[e]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},T=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function E(e){e:{var t=Bn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function k(e){return Array.prototype.concat.apply([],arguments)}function S(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e){return/^[\s\xa0]*$/.test(e)}var C,x=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function A(e,t){return-1!=e.indexOf(t)}function N(e,t){return e<t?-1:e>t?1:0}e:{var L=a.navigator;if(L){var R=L.userAgent;if(R){C=R;break e}}C=""}function D(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function P(e){const t={};for(const n in e)t[n]=e[n];return t}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<j.length;t++)n=j[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function F(e){return F[" "](e),e}function V(e){var t=X;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}F[" "]=c;var $,U=A(C,"Opera"),B=A(C,"Trident")||A(C,"MSIE"),q=A(C,"Edge"),z=q||B,H=A(C,"Gecko")&&!(A(C.toLowerCase(),"webkit")&&!A(C,"Edge"))&&!(A(C,"Trident")||A(C,"MSIE"))&&!A(C,"Edge"),W=A(C.toLowerCase(),"webkit")&&!A(C,"Edge");function K(){var e=a.document;return e?e.documentMode:void 0}e:{var G="",Q=function(){var e=C;return H?/rv:([^\);]+)(\)|;)/.exec(e):q?/Edge\/([\d\.]+)/.exec(e):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):W?/WebKit\/(\S+)/.exec(e):U?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Q&&(G=Q?Q[1]:""),B){var Y=K();if(null!=Y&&Y>parseFloat(G)){$=String(Y);break e}}$=G}var J,X={};function Z(){return V((function(){let e=0;const t=x(String($)).split("."),n=x("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=N(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||N(0==i[2].length,0==s[2].length)||N(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(a.document&&B){var ee=K();J=ee||(parseInt($,10)||void 0)}else J=void 0;var te=J,ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(n){}return e}();function re(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ie(e,t){if(re.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(H){e:{try{F(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:se[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.Z.h.call(this)}}re.prototype.h=function(){this.defaultPrevented=!0},y(ie,re);var se={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),ae=0;function ce(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ae,this.ca=this.fa=!1}function ue(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ue(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}le.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ce(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function me(e,t,n,r,i){if(r&&r.once)return ye(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)me(e,t[s],n,r,i);return null}return n=ke(n),e&&e[oe]?e.N(t,n,l(r)?!!r.capture:!!r,i):ge(e,t,n,!1,r,i)}function ge(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Te(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ve(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ne||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(_e(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ve(){function e(n){return t.call(e.src,e.listener,n)}var t=Ie;return e}function ye(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);return null}return n=ke(n),e&&e[oe]?e.O(t,n,l(r)?!!r.capture:!!r,i):ge(e,t,n,!0,r,i)}function be(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)be(e,t[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=ke(n),e&&e[oe]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,r,i),-1<n&&(ue(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Te(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[oe])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_e(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Te(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):ue(e)}}}function _e(e){return e in pe?pe[e]:pe[e]="on"+e}function Ie(e,t){if(e.ca)e=!0;else{t=new ie(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&we(e),e=n.call(r,t)}return e}function Te(e){return e=e[fe],e instanceof le?e:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ke(e){return"function"===typeof e?e:(e[Ee]||(e[Ee]=function(t){return e.handleEvent(t)}),e[Ee])}function Se(){b.call(this),this.i=new le(this),this.P=this,this.I=null}function Oe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new re(t,e);else if(t instanceof re)t.target=t.target||e;else{var i=t;t=new re(r,e),M(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ce(o,r,!0,t)&&i}if(o=t.g=e,i=Ce(o,r,!0,t)&&i,i=Ce(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ce(o,r,!1,t)&&i}function Ce(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&he(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(Se,b),Se.prototype[oe]=!0,Se.prototype.removeEventListener=function(e,t,n,r){be(this,e,t,n,r)},Se.prototype.M=function(){if(Se.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ue(n[r]);delete t.g[e],t.h--}}this.I=null},Se.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Se.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var xe=a.JSON.stringify;function Ae(){var e=Ve;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ne{constructor(){this.h=this.g=null}add(e,t){const n=Re.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Le,Re=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new De,e=>e.reset());class De{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Pe(e){a.setTimeout(()=>{throw e},0)}function je(e,t){Le||Me(),Fe||(Le(),Fe=!0),Ve.add(e,t)}function Me(){var e=a.Promise.resolve(void 0);Le=function(){e.then($e)}}var Fe=!1,Ve=new Ne;function $e(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(n){Pe(n)}var t=Re;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function Ue(e,t){Se.call(this),this.h=e||1,this.g=t||a,this.j=g(this.kb,this),this.l=Date.now()}function Be(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function qe(e,t,n){if("function"===typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function ze(e){e.g=qe(()=>{e.g=null,e.i&&(e.i=!1,ze(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}y(Ue,Se),r=Ue.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(Be(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ue.Z.M.call(this),Be(this),delete this.g};class He extends b{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ze(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(e){b.call(this),this.h=e,this.g={}}y(We,b);var Ke=[];function Ge(e,t,n,r){Array.isArray(n)||(n&&(Ke[0]=n.toString()),n=Ke);for(var i=0;i<n.length;i++){var s=me(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Qe(e){D(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Ye(){this.g=!0}function Je(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return xe(n)}catch(a){return t}}We.prototype.M=function(){We.Z.M.call(this),Qe(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ye.prototype.Aa=function(){this.g=!1},Ye.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new Se}function st(e){re.call(this,nt.Ma,e)}function ot(e){const t=it();Oe(t,new st(t,e))}function at(e,t){re.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=it();Oe(t,new at(t,e))}function ut(e,t){re.call(this,nt.Na,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}nt.Ma="serverreachability",y(st,re),nt.STAT_EVENT="statevent",y(at,re),nt.Na="timingevent",y(ut,re);var ht={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var gt,vt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function yt(){re.call(this,"d")}function bt(){re.call(this,"c")}function wt(){}function _t(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new We(this),this.P=Tt,e=z?125:void 0,this.W=new Ue(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}y(yt,re),y(bt,re),y(wt,ft),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},gt=new wt;var Tt=45e3,Et={},kt={};function St(e,t,n){e.K=1,e.v=Jt(Ht(t)),e.s=n,e.U=!0,Ot(e,null)}function Ot(e,t){e.F=Date.now(),Nt(e),e.A=Ht(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new It,e.g=br(e.l,n?t:null,!e.s),0<e.O&&(e.L=new He(g(e.Ia,e,e.g),e.O)),Ge(e.V,e.g,"readystatechange",e.gb),t=e.H?P(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ot(1),Je(e.j,e.u,e.A,e.m,e.X,e.s)}function Ct(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function xt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=At(e,n),r==kt){4==t&&(e.o=4,ct(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==Et){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),jt(e,r)}Ct(e)&&r!=kt&&r!=Et&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),Dt(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?kt:(n=Number(t.substring(n,r)),isNaN(n)?Et:(r+=1,r+n>t.length?kt:(t=t.substr(r,n),e.C=r+n,t)))}function Nt(e){e.Y=Date.now()+e.P,Lt(e,e.P)}function Lt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(g(e.eb,e),t)}function Rt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function Dt(e){0==e.l.G||e.I||pr(e.l,e)}function Pt(e){Rt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Be(e.W),Qe(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||_n(n.i,e)))if(n.I=e.N,!e.J&&_n(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fr(n),tr(n)}lr(n),ct(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=lt(g(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else gr(n,11)}else if((e.J||n.g==e)&&fr(n),!O(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(A(e,"spdy")||A(e,"quic")||A(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(In(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Yt(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=yr(r,r.H?r.la:null,r.W),o.J){Tn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Rt(a),Nt(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||gr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?gr(n,7):er(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ot(4)}catch(u){}}function Mt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"===typeof e)T(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(u(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Mt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Vt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Vt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function $t(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Ut(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Ut(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Ut(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=_t.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Gn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const h=Gn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||z||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==t||ot(8==t||0>=d?3:2),Rt(this);var n=this.g.ba();this.N=n;t:if(Ct(this)){var r=Qn(this.g);e="";var i=r.length,s=4==Gn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pt(this),Dt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ct(12),Pt(this),Dt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jt(this,n)}this.U?(xt(this,h,o),z&&this.i&&3==h&&(Ge(this.V,this.W,"tick",this.fb),this.W.start())):(Ze(this.j,this.m,o,null),jt(this,o)),4==h&&Pt(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Nt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Pt(this),Dt(this)}}}catch(h){}},r.fb=function(){if(this.g){var e=Gn(this.g),t=this.g.ga();this.C<t.length&&(Rt(this),xt(this,e,t),this.i&&4!=e&&Nt(this))}},r.cancel=function(){this.I=!0,Pt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.K&&(ot(3),ct(17)),Pt(this),this.o=2,Dt(this)):Lt(this,this.Y-e)},r=Vt.prototype,r.R=function(){$t(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return $t(this),this.g.concat()},r.get=function(e,t){return Ut(this.h,e)?this.h[e]:t},r.set=function(e,t){Ut(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Bt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof zt){this.g=void 0!==t?t:e.g,Wt(this,e.j),this.s=e.s,Kt(this,e.i),Gt(this,e.m),this.l=e.l,t=e.h;var n=new un;n.i=t.i,t.g&&(n.g=new Vt(t.g),n.h=t.h),Qt(this,n),this.o=e.o}else e&&(n=String(e).match(Bt))?(this.g=!!t,Wt(this,n[1]||"",!0),this.s=en(n[2]||""),Kt(this,n[3]||"",!0),Gt(this,n[4]),this.l=en(n[5]||"",!0),Qt(this,n[6]||"",!0),this.o=en(n[7]||"")):(this.g=!!t,this.h=new un(null,this.g))}function Ht(e){return new zt(e)}function Wt(e,t,n){e.j=n?en(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Kt(e,t,n){e.i=n?en(t,!0):t}function Gt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qt(e,t,n){t instanceof un?(e.h=t,mn(e.h,e.g)):(n||(t=tn(t,an)),e.h=new un(t,e.g))}function Yt(e,t,n){e.h.set(t,n)}function Jt(e){return Yt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Xt(e){return e instanceof zt?Ht(e):new zt(e,void 0)}function Zt(e,t,n,r){var i=new zt(null,void 0);return e&&Wt(i,e),t&&Kt(i,t),n&&Gt(i,n),r&&(i.l=r),i}function en(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,nn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}zt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,rn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tn(t,rn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(tn(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,cn)),e.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ln(e){e.g||(e.g=new Vt,e.h=0,e.i&&qt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function hn(e,t){ln(e),t=pn(e,t),Ut(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ut(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&$t(e)))}function dn(e,t){return ln(e),t=pn(e,t),Ut(e.g.h,t)}function fn(e,t,n){hn(e,t),0<n.length&&(e.i=null,e.g.set(pn(e,t),S(n)),e.h+=n.length)}function pn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function mn(e,t){t&&!e.j&&(ln(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(hn(this,t),fn(this,n,e))}),e)),e.j=t}r=un.prototype,r.add=function(e,t){ln(this),this.i=null,e=pn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){ln(this),this.g.forEach((function(n,r){T(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){ln(this);var t=[];if("string"===typeof e)dn(this,e)&&(t=k(t,this.g.get(pn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=k(t,e[n])}return t},r.set=function(e,t){return ln(this),this.i=null,e=pn(this,e),dn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var gn=class{constructor(e,t){this.h=e,this.g=t}};function vn(e){this.l=e||yn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function bn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function wn(e){return e.h?1:e.g?e.g.size:0}function _n(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function In(e,t){e.g?e.g.add(t):e.h=t}function Tn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function En(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return S(e.i)}function kn(){}function Sn(){this.g=new kn}function On(e,t,n){const r=n||"";try{Ft(e,(function(e,n){let i=e;l(e)&&(i=xe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Cn(e,t){const n=new Ye;if(a.Image){const r=new Image;r.onload=v(xn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=v(xn,n,r,"TestLoadImage: error",!1,t),r.onabort=v(xn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=v(xn,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function xn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function An(e){this.l=e.$b||null,this.j=e.ib||!1}function Nn(e,t){Se.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=En(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},kn.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},kn.prototype.parse=function(e){return a.JSON.parse(e,void 0)},y(An,ft),An.prototype.g=function(){return new Nn(this.l,this.j)},An.prototype.i=function(e){return function(){return e}}({}),y(Nn,Se);var Ln=0;function Rn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Dn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Pn(e)}function Pn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Nn.prototype,r.open=function(e,t){if(this.readyState!=Ln)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Pn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=Ln},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Dn(this):Pn(this),3==this.readyState&&Rn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Dn(this))},r.Ta=function(e){this.g&&(this.response=e,Dn(this))},r.ha=function(){this.g&&Dn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var jn=a.JSON.parse;function Mn(e){Se.call(this),this.headers=new Vt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}y(Mn,Se);var Fn="",Vn=/^https?$/i,$n=["POST","PUT"];function Un(e){return B&&Z()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Bn(e){return"content-type"==e.toLowerCase()}function qn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,zn(e),Wn(e)}function zn(e){e.D||(e.D=!0,Oe(e,"complete"),Oe(e,"error"))}function Hn(e){if(e.h&&"undefined"!=typeof o&&(!e.C[1]||4!=Gn(e)||2!=e.ba()))if(e.v&&4==Gn(e))qe(e.Fa,0,e);else if(Oe(e,"readystatechange"),4==Gn(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.H).match(Bt)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Vn.test(i?i.toLowerCase():"")}n=r}if(n)Oe(e,"complete"),Oe(e,"success");else{e.m=6;try{var c=2<Gn(e)?e.g.statusText:""}catch(u){c=""}e.j=c+" ["+e.ba()+"]",zn(e)}}finally{Wn(e)}}}function Wn(e,t){if(e.g){Kn(e);const r=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||Oe(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Kn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Gn(e){return e.g?e.g.readyState:0}function Qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Fn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Yn(e){let t="";return D(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Jn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Yn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Yt(e,t,n))}function Xn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zn(e){this.za=0,this.l=[],this.h=new Ye,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Xn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Xn("baseRetryDelayMs",5e3,e),this.$a=Xn("retryDelaySeedMs",1e4,e),this.Ya=Xn("forwardChannelMaxRetries",2,e),this.ra=Xn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(e&&e.concurrentRequestLimit),this.Ca=new Sn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function er(e){if(nr(e),3==e.G){var t=e.V++,n=Ht(e.F);Yt(n,"SID",e.J),Yt(n,"RID",t),Yt(n,"TYPE","terminate"),ar(e,n),t=new _t(e,e.h,t,void 0),t.K=2,t.v=Jt(Ht(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=br(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Nt(t)}vr(e)}function tr(e){e.g&&(hr(e),e.g.cancel(),e.g=null)}function nr(e){tr(e),e.u&&(a.clearTimeout(e.u),e.u=null),fr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function rr(e,t){e.l.push(new gn(e.Za++,t)),3==e.G&&ir(e)}function ir(e){bn(e.i)||e.m||(e.m=!0,je(e.Ha,e),e.C=0)}function sr(e,t){return!(wn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=lt(g(e.Ha,e,t),mr(e,e.C)),e.C++,!0))}function or(e,t){var n;n=t?t.m:e.V++;const r=Ht(e.F);Yt(r,"SID",e.J),Yt(r,"RID",n),Yt(r,"AID",e.U),ar(e,r),e.o&&e.s&&Jn(r,e.o,e.s),n=new _t(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=cr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),In(e.i,n),St(n,r,t)}function ar(e,t){e.j&&Ft({},(function(e,n){Yt(t,n,e)}))}function cr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?g(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),o=!1;else try{On(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function ur(e){e.g||e.u||(e.Y=1,je(e.Ga,e),e.A=0)}function lr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=lt(g(e.Ga,e),mr(e,e.A)),e.A++,!0)}function hr(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function dr(e){e.g=new _t(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Ht(e.oa);Yt(t,"RID","rpc"),Yt(t,"SID",e.J),Yt(t,"CI",e.N?"0":"1"),Yt(t,"AID",e.U),ar(e,t),Yt(t,"TYPE","xmlhttp"),e.o&&e.s&&Jn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Jt(Ht(t)),n.s=null,n.U=!0,Ot(n,e)}function fr(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function pr(e,t){var n=null;if(e.g==t){fr(e),hr(e),e.g=null;var r=2}else{if(!_n(e.i,t))return;n=t.D,Tn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=it(),Oe(r,new ut(r,n,t,i)),ir(e)}else ur(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&sr(e,t)||2==r&&lr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:gr(e,5);break;case 4:gr(e,10);break;case 3:gr(e,6);break;default:gr(e,2)}}function mr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function gr(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=g(e.jb,e);n||(n=new zt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Wt(n,"https"),Jt(n)),Cn(n.toString(),r)}else ct(2);e.G=0,e.j&&e.j.va(t),vr(e),nr(e)}function vr(e){e.G=0,e.I=-1,e.j&&(0==En(e.i).length&&0==e.l.length||(e.i.i.length=0,S(e.l),e.l.length=0),e.j.ua())}function yr(e,t,n){let r=Xt(n);if(""!=r.i)t&&Kt(r,t+"."+r.i),Gt(r,r.m);else{const e=a.location;r=Zt(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&D(e.aa,(function(e,t){Yt(r,t,e)})),t=e.D,n=e.sa,t&&n&&Yt(r,t,n),Yt(r,"VER",e.ma),ar(e,r),r}function br(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Mn(new An({ib:!0})):new Mn(e.qa),t.L=e.H,t}function wr(){}function _r(){if(B&&!(10<=Number(te)))throw Error("Environmental error: no available transport.")}function Ir(e,t){Se.call(this),this.g=new Zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new kr(this)}function Tr(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Er(){bt.call(this),this.status=1}function kr(e){this.g=e}r=Mn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?pt(this.u):pt(gt),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void qn(this,s)}e=n||"";const i=new Vt(this.headers);r&&Ft(r,(function(e,t){i.set(t,e)})),r=E(i.T()),n=a.FormData&&e instanceof a.FormData,!(0<=I($n,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kn(this),0<this.B&&((this.K=Un(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=qe(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){qn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Oe(this,"complete"),Oe(this,"abort"),Wn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Hn(this):this.cb())},r.cb=function(){Hn(this)},r.ba=function(){try{return 2<Gn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),jn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new _t(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=P(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cr(this,i,t),n=Ht(this.F),Yt(n,"RID",e),Yt(n,"CVER",22),this.D&&Yt(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Jn(n,this.o,s),In(this.i,i),this.Ra&&Yt(n,"TYPE","init"),this.ja?(Yt(n,"$req",t),Yt(n,"SID","null"),i.$=!0,St(i,n,null)):St(i,n,t),this.G=2}}else 3==this.G&&(e?or(this,e):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=lt(g(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),tr(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,tr(this),lr(this),ct(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(e,t){return new Ir(e,t)},y(Ir,Se),Ir.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),je(g(e.hb,e,t))),ct(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=yr(e,null,e.W),ir(e)},Ir.prototype.close=function(){er(this.g)},Ir.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,rr(this.g,t)}else this.v?(t={},t.__data__=xe(e),rr(this.g,t)):rr(this.g,e)},Ir.prototype.M=function(){this.g.j=null,delete this.j,er(this.g),delete this.g,Ir.Z.M.call(this)},y(Tr,yt),y(Er,bt),y(kr,wr),kr.prototype.xa=function(){Oe(this.g,"a")},kr.prototype.wa=function(e){Oe(this.g,new Tr(e))},kr.prototype.va=function(e){Oe(this.g,new Er(e))},kr.prototype.ua=function(){Oe(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Ir.prototype.send=Ir.prototype.u,Ir.prototype.open=Ir.prototype.m,Ir.prototype.close=Ir.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",mt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",Se.prototype.listen=Se.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Sr=s.createWebChannelTransport=function(){return new _r},Or=s.getStatEventTarget=function(){return it()},Cr=s.ErrorCode=ht,xr=s.EventType=dt,Ar=s.Event=nt,Nr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Lr=s.FetchXmlHttpFactory=An,Rr=s.WebChannel=mt,Dr=s.XhrIo=Mn}).call(this,n("c8ba"))},"8ff2":function(e,t,n){},"90a2":function(e,t,n){"use strict";var r=n("53ca");n("d3b7");function i(e,t,n){if("undefined"!==typeof window&&"IntersectionObserver"in window){var i=t.modifiers||{},o=t.value,a="object"===Object(r["a"])(o)?o:{handler:o,options:{}},c=a.handler,u=a.options,l=new IntersectionObserver((function(){var r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,u=null==(r=e._observe)?void 0:r[n.context._uid];if(u){var l=o.some((function(e){return e.isIntersecting}));!c||i.quiet&&!u.init||i.once&&!l&&!u.init||c(o,a,l),l&&i.once?s(e,t,n):u.init=!0}}),u);e._observe=Object(e._observe),e._observe[n.context._uid]={init:!1,observer:l},l.observe(e)}}function s(e,t,n){var r,i=null==(r=e._observe)?void 0:r[n.context._uid];i&&(i.observer.unobserve(e),delete e._observe[n.context._uid])}var o={inserted:i,unbind:s};t["a"]=o},"90e3":function(e,t,n){var r=n("e330"),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var r=n("c65b"),i=n("e330"),s=n("577e"),o=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,h=n("fce3"),d=n("107c"),f=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,m=p,g=i("".charAt),v=i("".indexOf),y=i("".replace),b=i("".slice),w=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),_=a.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],T=w||I||_||h||d;T&&(m=function(e){var t,n,i,a,c,h,d,T=this,E=l(T),k=s(e),S=E.raw;if(S)return S.lastIndex=T.lastIndex,t=r(m,S,k),T.lastIndex=S.lastIndex,t;var O=E.groups,C=_&&T.sticky,x=r(o,T),A=T.source,N=0,L=k;if(C&&(x=y(x,"y",""),-1===v(x,"g")&&(x+="g"),L=b(k,T.lastIndex),T.lastIndex>0&&(!T.multiline||T.multiline&&"\n"!==g(k,T.lastIndex-1))&&(A="(?: "+A+")",L=" "+L,N++),n=new RegExp("^(?:"+A+")",x)),I&&(n=new RegExp("^"+A+"$(?!\\s)",x)),w&&(i=T.lastIndex),a=r(p,C?n:T,L),C?a?(a.input=b(a.input,N),a[0]=b(a[0],N),a.index=T.lastIndex,T.lastIndex+=a[0].length):T.lastIndex=0:w&&a&&(T.lastIndex=T.global?a.index+a[0].length:i),I&&a&&a.length>1&&r(f,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&O)for(a.groups=h=u(null),c=0;c<O.length;c++)d=O[c],h[d[0]]=a[d[1]];return a}),e.exports=m},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},"95ed":function(e,t,n){},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,s=Object.create(i.prototype),o=new x(r||[]);return s._invoke=k(e,n,o),s}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function g(){}function v(){}function y(){}var b={};c(b,s,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(A([])));_&&_!==n&&r.call(_,s)&&(b=_);var I=y.prototype=g.prototype=Object.create(b);function T(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,s,o,a){var c=l(e[i],e,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,a)}),(function(e){n("throw",e,o,a)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,a)}))}a(c.arg)}var i;function s(e,r){function s(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function k(e,t,n){var r=h;return function(i,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return N()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=S(o,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function S(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var s=i.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function A(e){if(e){var n=e[s];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:t,done:!0}}return v.prototype=y,c(I,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,a,"GeneratorFunction")),e.prototype=Object.create(I),e},e.awrap=function(e){return{__await:e}},T(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,s){void 0===s&&(s=Promise);var o=new E(u(t,n,r,i),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},T(I),c(I,a,"Generator"),c(I,s,(function(){return this})),c(I,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},9911:function(e,t,n){"use strict";var r=n("23e7"),i=n("857a"),s=n("af03");r({target:"String",proto:!0,forced:s("link")},{link:function(e){return i(this,"a","href",e)}})},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d039"),o=n("e8b5"),a=n("861d"),c=n("7b0b"),u=n("07fa"),l=n("8418"),h=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),m=f("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",y=i.TypeError,b=p>=51||!s((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),w=d("concat"),_=function(e){if(!a(e))return!1;var t=e[m];return void 0!==t?!!t:o(e)},I=!b||!w;r({target:"Array",proto:!0,forced:I},{concat:function(e){var t,n,r,i,s,o=c(this),a=h(o,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(s=-1===t?o:arguments[t],_(s)){if(i=u(s),d+i>g)throw y(v);for(n=0;n<i;n++,d++)n in s&&l(a,d,s[n])}else{if(d>=g)throw y(v);l(a,d++,s)}return a.length=d,a}})},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(s(n))return o(i(n,e));throw u(a(e)+" is not iterable")}},"9bdd":function(e,t,n){var r=n("825a"),i=n("2a62");e.exports=function(e,t,n,s){try{return s?t(r(n)[0],n[1]):t(n)}catch(o){i(e,"throw",o)}}},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),s=n("0cfb"),o=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=i?o?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=h(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),s)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9d26":function(e,t,n){"use strict";var r=n("132d");t["a"]=r["a"]},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:s(+!u,n)}),o(e,l,!1,!0),a[l]=c,e}},"9f7f":function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp,o=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=o||r((function(){return!s("a","y").sticky})),c=o||r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:o}},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a15b:function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),s=n("44ad"),o=n("fc6a"),a=n("a640"),c=i([].join),u=s!=Object,l=a("join",",");r({target:"Array",proto:!0,forced:u||!l},{join:function(e){return c(o(this),void 0===e?",":e)}})},a236:function(e,t,n){"use strict";var r=n("ade3"),i=n("b85c"),s=(n("ac1f"),n("1276"),n("a15b"),n("2b0e"));t["a"]=s["a"].extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var e=[],t="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)e.push("rounded-0");else if("string"===typeof t){var n,s=t.split(" "),o=Object(i["a"])(s);try{for(o.s();!(n=o.n()).done;){var a=n.value;e.push("rounded-".concat(a))}}catch(c){o.e(c)}finally{o.f()}}else t&&e.push("rounded");return e.length>0?Object(r["a"])({},e.join(" "),!0):{}}}})},a2bf:function(e,t,n){"use strict";var r=n("da84"),i=n("e8b5"),s=n("07fa"),o=n("0366"),a=r.TypeError,c=function(e,t,n,r,u,l,h,d){var f,p,m=u,g=0,v=!!h&&o(h,d);while(g<r){if(g in n){if(f=v?v(n[g],g,t):n[g],l>0&&i(f))p=s(f),m=c(e,t,f,p,m,l-1)-1;else{if(m>=9007199254740991)throw a("Exceed the acceptable array length");e[m]=f}m++}g++}return m};e.exports=c},a434:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("23cb"),o=n("5926"),a=n("07fa"),c=n("7b0b"),u=n("65f0"),l=n("8418"),h=n("1dde"),d=h("splice"),f=i.TypeError,p=Math.max,m=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,r,i,h,d,y,b=c(this),w=a(b),_=s(e,w),I=arguments.length;if(0===I?n=r=0:1===I?(n=0,r=w-_):(n=I-2,r=m(p(o(t),0),w-_)),w+n-r>g)throw f(v);for(i=u(b,r),h=0;h<r;h++)d=_+h,d in b&&l(i,h,b[d]);if(i.length=r,n<r){for(h=_;h<w-r;h++)d=h+r,y=h+n,d in b?b[y]=b[d]:delete b[y];for(h=w;h>w-r+n;h--)delete b[h-1]}else if(n>r)for(h=w-r;h>_;h--)d=h+r-1,y=h+n-1,d in b?b[y]=b[d]:delete b[y];for(h=0;h<n;h++)b[h+_]=arguments[h+2];return b.length=w-r+n,i}})},a452:function(e,t,n){"use strict";var r=n("ade3"),i=n("2b0e");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return i["a"].extend({name:"proxyable",model:{prop:e,event:t},props:Object(r["a"])({},e,{required:!1}),data:function(){return{internalLazyValue:this[e]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:Object(r["a"])({},e,(function(e){this.internalLazyValue=e}))})}var o=s();t["a"]=o},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d066"),o=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),l=n("83ab"),h=n("4930"),d=n("d039"),f=n("1a2d"),p=n("e8b5"),m=n("1626"),g=n("861d"),v=n("3a9b"),y=n("d9b5"),b=n("825a"),w=n("7b0b"),_=n("fc6a"),I=n("a04b"),T=n("577e"),E=n("5c6c"),k=n("7c73"),S=n("df75"),O=n("241c"),C=n("057f"),x=n("7418"),A=n("06cf"),N=n("9bf2"),L=n("37e8"),R=n("d1e7"),D=n("f36a"),P=n("6eeb"),j=n("5692"),M=n("f772"),F=n("d012"),V=n("90e3"),$=n("b622"),U=n("e538"),B=n("746f"),q=n("d44e"),z=n("69f3"),H=n("b727").forEach,W=M("hidden"),K="Symbol",G="prototype",Q=$("toPrimitive"),Y=z.set,J=z.getterFor(K),X=Object[G],Z=i.Symbol,ee=Z&&Z[G],te=i.TypeError,ne=i.QObject,re=s("JSON","stringify"),ie=A.f,se=N.f,oe=C.f,ae=R.f,ce=c([].push),ue=j("symbols"),le=j("op-symbols"),he=j("string-to-symbol-registry"),de=j("symbol-to-string-registry"),fe=j("wks"),pe=!ne||!ne[G]||!ne[G].findChild,me=l&&d((function(){return 7!=k(se({},"a",{get:function(){return se(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=ie(X,t);r&&delete X[t],se(e,t,n),r&&e!==X&&se(X,t,r)}:se,ge=function(e,t){var n=ue[e]=k(ee);return Y(n,{type:K,tag:e,description:t}),l||(n.description=t),n},ve=function(e,t,n){e===X&&ve(le,t,n),b(e);var r=I(t);return b(n),f(ue,r)?(n.enumerable?(f(e,W)&&e[W][r]&&(e[W][r]=!1),n=k(n,{enumerable:E(0,!1)})):(f(e,W)||se(e,W,E(1,{})),e[W][r]=!0),me(e,r,n)):se(e,r,n)},ye=function(e,t){b(e);var n=_(t),r=S(n).concat(Te(n));return H(r,(function(t){l&&!a(we,n,t)||ve(e,t,n[t])})),e},be=function(e,t){return void 0===t?k(e):ye(k(e),t)},we=function(e){var t=I(e),n=a(ae,this,t);return!(this===X&&f(ue,t)&&!f(le,t))&&(!(n||!f(this,t)||!f(ue,t)||f(this,W)&&this[W][t])||n)},_e=function(e,t){var n=_(e),r=I(t);if(n!==X||!f(ue,r)||f(le,r)){var i=ie(n,r);return!i||!f(ue,r)||f(n,W)&&n[W][r]||(i.enumerable=!0),i}},Ie=function(e){var t=oe(_(e)),n=[];return H(t,(function(e){f(ue,e)||f(F,e)||ce(n,e)})),n},Te=function(e){var t=e===X,n=oe(t?le:_(e)),r=[];return H(n,(function(e){!f(ue,e)||t&&!f(X,e)||ce(r,ue[e])})),r};if(h||(Z=function(){if(v(ee,this))throw te("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?T(arguments[0]):void 0,t=V(e),n=function(e){this===X&&a(n,le,e),f(this,W)&&f(this[W],t)&&(this[W][t]=!1),me(this,t,E(1,e))};return l&&pe&&me(X,t,{configurable:!0,set:n}),ge(t,e)},ee=Z[G],P(ee,"toString",(function(){return J(this).tag})),P(Z,"withoutSetter",(function(e){return ge(V(e),e)})),R.f=we,N.f=ve,L.f=ye,A.f=_e,O.f=C.f=Ie,x.f=Te,U.f=function(e){return ge($(e),e)},l&&(se(ee,"description",{configurable:!0,get:function(){return J(this).description}}),u||P(X,"propertyIsEnumerable",we,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:Z}),H(S(fe),(function(e){B(e)})),r({target:K,stat:!0,forced:!h},{for:function(e){var t=T(e);if(f(he,t))return he[t];var n=Z(t);return he[t]=n,de[n]=t,n},keyFor:function(e){if(!y(e))throw te(e+" is not a symbol");if(f(de,e))return de[e]},useSetter:function(){pe=!0},useSimple:function(){pe=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:be,defineProperty:ve,defineProperties:ye,getOwnPropertyDescriptor:_e}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:Ie,getOwnPropertySymbols:Te}),r({target:"Object",stat:!0,forced:d((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(w(e))}}),re){var Ee=!h||d((function(){var e=Z();return"[null]"!=re([e])||"{}"!=re({a:e})||"{}"!=re(Object(e))}));r({target:"JSON",stat:!0,forced:Ee},{stringify:function(e,t,n){var r=D(arguments),i=t;if((g(t)||void 0!==e)&&!y(e))return p(t)||(t=function(e,t){if(m(i)&&(t=a(i,this,e,t)),!y(t))return t}),r[1]=t,o(re,null,r)}})}if(!ee[Q]){var ke=ee.valueOf;P(ee,Q,(function(e){return a(ke,this)}))}q(Z,K),F[W]=!0},a523:function(e,t,n){"use strict";n("4de4"),n("d3b7"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var r=n("2b0e");function i(e){return r["a"].extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var r=n.props,i=n.data,s=n.children;i.staticClass="".concat(e," ").concat(i.staticClass||"").trim();var o=i.attrs;if(o){i.attrs={};var a=Object.keys(o).filter((function(e){if("slot"===e)return!1;var t=o[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t}));a.length&&(i.staticClass+=" ".concat(a.join(" ")))}return r.id&&(i.domProps=i.domProps||{},i.domProps.id=r.id),t(r.tag,i,s)}})}var s=n("d9f7");t["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var n,r=t.props,i=t.data,o=t.children,a=i.attrs;return a&&(i.attrs={},n=Object.keys(a).filter((function(e){if("slot"===e)return!1;var t=a[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t}))),r.id&&(i.domProps=i.domProps||{},i.domProps.id=r.id),e(r.tag,Object(s["a"])(i,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},a630:function(e,t,n){var r=n("23e7"),i=n("4df4"),s=n("1c7e"),o=!s((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:o},{from:i})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(s)){var f=a("Promise").prototype["finally"];s.prototype["finally"]!==f&&h(s.prototype,"finally",f,{unsafe:!0})}},a9ad:function(e,t,n){"use strict";var r=n("3835"),i=n("ade3"),s=n("5530"),o=(n("ac1f"),n("1276"),n("498a"),n("d3b7"),n("25f0"),n("2b0e")),a=n("d9bd"),c=n("7bc6");t["a"]=o["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof t.style?(Object(a["b"])("style must be an object",this),t):"string"===typeof t.class?(Object(a["b"])("class must be an object",this),t):(Object(c["d"])(e)?t.style=Object(s["a"])(Object(s["a"])({},t.style),{},{"background-color":"".concat(e),"border-color":"".concat(e)}):e&&(t.class=Object(s["a"])(Object(s["a"])({},t.class),{},Object(i["a"])({},e,!0))),t)},setTextColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof t.style)return Object(a["b"])("style must be an object",this),t;if("string"===typeof t.class)return Object(a["b"])("class must be an object",this),t;if(Object(c["d"])(e))t.style=Object(s["a"])(Object(s["a"])({},t.style),{},{color:"".concat(e),"caret-color":"".concat(e)});else if(e){var n=e.toString().trim().split(" ",2),o=Object(r["a"])(n,2),u=o[0],l=o[1];t.class=Object(s["a"])(Object(s["a"])({},t.class),{},Object(i["a"])({},u+"--text",!0)),l&&(t.class["text--"+l]=!0)}return t}}})},a9e3:function(e,t,n){"use strict";var r=n("83ab"),i=n("da84"),s=n("e330"),o=n("94ca"),a=n("6eeb"),c=n("1a2d"),u=n("7156"),l=n("3a9b"),h=n("d9b5"),d=n("c04e"),f=n("d039"),p=n("241c").f,m=n("06cf").f,g=n("9bf2").f,v=n("408a"),y=n("58a8").trim,b="Number",w=i[b],_=w.prototype,I=i.TypeError,T=s("".slice),E=s("".charCodeAt),k=function(e){var t=d(e,"number");return"bigint"==typeof t?t:S(t)},S=function(e){var t,n,r,i,s,o,a,c,u=d(e,"number");if(h(u))throw I("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=y(u),t=E(u,0),43===t||45===t){if(n=E(u,2),88===n||120===n)return NaN}else if(48===t){switch(E(u,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(s=T(u,2),o=s.length,a=0;a<o;a++)if(c=E(s,a),c<48||c>i)return NaN;return parseInt(s,r)}return+u};if(o(b,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var O,C=function(e){var t=arguments.length<1?0:w(k(e)),n=this;return l(_,n)&&f((function(){v(n)}))?u(Object(t),n,C):t},x=r?p(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),A=0;x.length>A;A++)c(w,O=x[A])&&!c(C,O)&&g(C,O,m(w,O));C.prototype=_,_.constructor=C,a(i,b,C)}},ab13:function(e,t,n){var r=n("b622"),i=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,"/./"[e](t)}catch(r){}}return!1}},ab36:function(e,t,n){var r=n("861d"),i=n("9112");e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},addb:function(e,t,n){var r=n("4dae"),i=Math.floor,s=function(e,t){var n=e.length,c=i(n/2);return n<8?o(e,t):a(e,s(r(e,0,c),t),s(r(e,c),t),t)},o=function(e,t){var n,r,i=e.length,s=1;while(s<i){r=s,n=e[s];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==s++&&(e[r]=n)}return e},a=function(e,t,n,r){var i=t.length,s=n.length,o=0,a=0;while(o<i||a<s)e[o+a]=o<i&&a<s?r(t[o],n[a])<=0?t[o++]:n[a++]:o<i?t[o++]:n[a++];return e};e.exports=s},ade3:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},ae93:function(e,t,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||o((function(){var e={};return r[f].call(e)!==e}));m?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var r=n("83ab"),i=n("d039");e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},af03:function(e,t,n){var r=n("d039");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},af2b:function(e,t,n){"use strict";n("c96a");var r=n("2b0e");t["a"]=r["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),i=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,a=Function.prototype,c=s(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=s(u.exec),h="name";r&&!i&&o(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b575:function(e,t,n){var r,i,s,o,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,m=n("1cdc"),g=n("d4c3"),v=n("a4b4"),y=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,w=h.document,_=h.process,I=h.Promise,T=f(h,"queueMicrotask"),E=T&&T.value;E||(r=function(){var e,t;y&&(e=_.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?o():s=void 0,n}}s=void 0,e&&e.enter()},m||y||v||!b||!w?!g&&I&&I.resolve?(u=I.resolve(void 0),u.constructor=I,l=d(u.then,u),o=function(){l(r)}):y?o=function(){_.nextTick(r)}:(p=d(p,h),o=function(){p(r)}):(a=!0,c=w.createTextNode(""),new b(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),e.exports=E||function(e){var t={fn:e,next:void 0};s&&(s.next=t),i||(i=t,o()),s=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),s=n("df75"),o=n("d039"),a=o((function(){s(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return s(i(e))}})},b680:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("e330"),o=n("5926"),a=n("408a"),c=n("1148"),u=n("d039"),l=i.RangeError,h=i.String,d=Math.floor,f=s(c),p=s("".slice),m=s(1..toFixed),g=function(e,t,n){return 0===t?n:t%2===1?g(e,t-1,n*e):g(e*e,t/2,n)},v=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},y=function(e,t,n){var r=-1,i=n;while(++r<6)i+=t*e[r],e[r]=i%1e7,i=d(i/1e7)},b=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=d(r/t),r=r%t*1e7},w=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=h(e[t]);n=""===n?r:n+f("0",7-r.length)+r}return n},_=u((function(){return"0.000"!==m(8e-5,3)||"1"!==m(.9,0)||"1.25"!==m(1.255,2)||"1000000000000000128"!==m(0xde0b6b3a7640080,0)}))||!u((function(){m({})}));r({target:"Number",proto:!0,forced:_},{toFixed:function(e){var t,n,r,i,s=a(this),c=o(e),u=[0,0,0,0,0,0],d="",m="0";if(c<0||c>20)throw l("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return h(s);if(s<0&&(d="-",s=-s),s>1e-21)if(t=v(s*g(2,69,1))-69,n=t<0?s*g(2,-t,1):s/g(2,t,1),n*=4503599627370496,t=52-t,t>0){y(u,0,n),r=c;while(r>=7)y(u,1e7,0),r-=7;y(u,g(10,r,1),0),r=t-1;while(r>=23)b(u,1<<23),r-=23;b(u,1<<r),y(u,1,1),b(u,2),m=w(u)}else y(u,0,n),y(u,1<<-t,0),m=w(u)+f("0",c);return c>0?(i=m.length,m=d+(i<=c?"0."+f("0",c-i)+m:p(m,0,i-c)+"."+p(m,i-c))):m=d+m,m}})},b727:function(e,t,n){var r=n("0366"),i=n("e330"),s=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(e){var t=1==e,n=2==e,i=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,g,v){for(var y,b,w=o(p),_=s(w),I=r(m,g),T=a(_),E=0,k=v||c,S=t?k(p,T):n||d?k(p,0):void 0;T>E;E++)if((f||E in _)&&(y=_[E],b=I(y,E,w),e))if(t)S[E]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return E;case 2:u(S,y)}else switch(e){case 4:return!1;case 7:u(S,y)}return h?-1:i||l?l:S}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b85c:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("d9e2");var r=n("06c5");function i(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Object(r["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,s=function(){};return{s:s,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(c)throw o}}}}},b980:function(e,t,n){var r=n("d039"),i=n("5c6c");e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},bb2f:function(e,t,n){var r=n("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t,n){var r=n("40d5"),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},c740:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,s=n("44d2"),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s(o)},c770:function(e,t,n){var r=n("e330"),i=r("".replace),s=function(e){return String(Error(e).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,a=o.test(s);e.exports=function(e,t){if(a&&"string"==typeof e)while(t--)e=i(e,o,"");return e}},c7cd:function(e,t,n){"use strict";var r=n("23e7"),i=n("857a"),s=n("af03");r({target:"String",proto:!0,forced:s("fixed")},{fixed:function(){return i(this,"tt","","")}})},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},c8d2:function(e,t,n){var r=n("5e77").PROPER,i=n("d039"),s=n("5899"),o="​᠎";e.exports=function(e){return i((function(){return!!s[e]()||o[e]()!==o||r&&s[e].name!==e}))}},c96a:function(e,t,n){"use strict";var r=n("23e7"),i=n("857a"),s=n("af03");r({target:"String",proto:!0,forced:s("small")},{small:function(){return i(this,"small","","")}})},c995:function(e,t,n){"use strict";var r=n("ade3"),i=(n("a9e3"),n("2b0e"));t["a"]=i["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var e=this.computedElevation;return null==e||isNaN(parseInt(e))?{}:Object(r["a"])({},"elevation-".concat(this.elevation),!0)}}})},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},caad:function(e,t,n){"use strict";var r=n("23e7"),i=n("4d64").includes,s=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")},cb29:function(e,t,n){var r=n("23e7"),i=n("81d5"),s=n("44d2");r({target:"Array",proto:!0},{fill:i}),s("fill")},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),s=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=s.f(e),o=n.resolve;return o(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},ce7e:function(e,t,n){"use strict";var r=n("5530"),i=(n("8ce9"),n("7560"));t["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:Object(r["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(r["a"])({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},d191:function(e,t,n){},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);t.f=s?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d28b:function(e,t,n){var r=n("746f");r("iterator")},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),s=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),s=n("b622"),o=s("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,o)&&r(e,o,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),s=n("9263"),o=n("d039"),a=n("b622"),c=n("9112"),u=a("species"),l=RegExp.prototype;e.exports=function(e,t,n,h){var d=a(e),f=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var m=r(/./[d]),g=t(d,""[e],(function(e,t,n,i,o){var a=r(e),c=t.exec;return c===s||c===l.exec?f&&!o?{done:!0,value:m(t,n,i)}:{done:!0,value:a(n,t,i)}:{done:!1}}));i(String.prototype,e,g[0]),i(l,d,g[1])}h&&c(l[d],"sham",!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").map,s=n("1dde"),o=s("map");r({target:"Array",proto:!0,forced:!o},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},d86b:function(e,t,n){var r=n("d039");e.exports=r((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},d998:function(e,t,n){var r=n("342f");e.exports=/MSIE|Trident/.test(r)},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return s(t)&&o(t.prototype,c(e))}},d9bd:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return u}));n("caad"),n("2532"),n("99af"),n("ac1f"),n("5319"),n("b0c0"),n("466d"),n("a15b"),n("d81d"),n("38cf");var r=n("f309");function i(e,t,n){if(!r["a"].config.silent){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return"[Vuetify] ".concat(e)+(t?f(t):"")}}function s(e,t,n){var r=i(e,t,n);null!=r&&console.warn(r)}function o(e,t,n){var r=i(e,t,n);null!=r&&console.error(r)}function a(e,t,n,r){s("[UPGRADE] '".concat(e,"' is deprecated, use '").concat(t,"' instead."),n,r)}function c(e,t,n,r){o("[BREAKING] '".concat(e,"' has been removed, use '").concat(t,"' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide"),n,r)}function u(e,t,n){s("[REMOVED] '".concat(e,"' has been removed. You can safely omit it."),t,n)}var l=/(?:^|[-_])(\w)/g,h=function(e){return e.replace(l,(function(e){return e.toUpperCase()})).replace(/[-_]/g,"")};function d(e,t){if(e.$root===e)return"<Root>";var n="function"===typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{},r=n.name||n._componentTag,i=n.__file;if(!r&&i){var s=i.match(/([^/\\]+)\.vue$/);r=s&&s[1]}return(r?"<".concat(h(r),">"):"<Anonymous>")+(i&&!1!==t?" at ".concat(i):"")}function f(e){if(e._isVue&&e.$parent){var t=[],n=0;while(e){if(t.length>0){var r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map((function(e,t){return"".concat(0===t?"---\x3e ":" ".repeat(5+2*t)).concat(Array.isArray(e)?"".concat(d(e[0]),"... (").concat(e[1]," recursive calls)"):d(e))})).join("\n")}return"\n\n(found in ".concat(d(e),")")}},d9e2:function(e,t,n){var r=n("23e7"),i=n("da84"),s=n("2ba4"),o=n("e5cb"),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=o(e,t,u),r({global:!0,forced:u},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=o(a+"."+e,t,u),r({target:a,stat:!0,forced:u},n)}};l("Error",(function(e){return function(t){return s(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),l("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},d9f7:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("5530"),i=n("3835"),s=n("b85c"),o=(n("ac1f"),n("1276"),n("498a"),n("b64b"),n("99af"),n("80d2")),a={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(e){var t,n={},r=Object(s["a"])(e.split(a.styleList));try{for(r.s();!(t=r.n()).done;){var c=t.value,u=c.split(a.styleProp),l=Object(i["a"])(u,2),h=l[0],d=l[1];h=h.trim(),h&&("string"===typeof d&&(d=d.trim()),n[Object(o["c"])(h)]=d)}}catch(f){r.e(f)}finally{r.f()}return n}function u(){var e,t={},n=arguments.length;while(n--)for(var i=0,s=Object.keys(arguments[n]);i<s.length;i++)switch(e=s[i],e){case"class":case"directives":arguments[n][e]&&(t[e]=h(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=l(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=d(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]=Object(r["a"])(Object(r["a"])({},arguments[n][e]),t[e]);break;default:t[e]||(t[e]=arguments[n][e])}return t}function l(e,t){return e?t?(e=Object(o["w"])("string"===typeof e?c(e):e),e.concat("string"===typeof t?c(t):t)):e:t}function h(e,t){return t?e&&e?Object(o["w"])(e).concat(t):t:e}function d(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var e={},t=2;t--;){var n=t<0||arguments.length<=t?void 0:arguments[t];for(var r in n)n[r]&&(e[r]?e[r]=[].concat(n[r],e[r]):e[r]=n[r])}return e}},da13:function(e,t,n){"use strict";var r=n("5530"),i=(n("61d2"),n("a9ad")),s=n("1c87"),o=n("4e82"),a=n("7560"),c=n("f2e7"),u=n("5607"),l=n("80d2"),h=n("d9bd"),d=n("58df"),f=Object(d["a"])(i["a"],s["a"],a["a"],Object(o["a"])("listItemGroup"),Object(c["b"])("inputValue"));t["a"]=f.extend().extend({name:"v-list-item",directives:{Ripple:u["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-list-item":!0},s["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(s["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(h["e"])("avatar",this)},methods:{click:function(e){e.detail&&this.$el.blur(),this.$emit("click",e),this.to||this.toggle()},genAttrs:function(){var e=Object(r["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(e.role="option",e["aria-selected"]=String(this.isActive)):this.isInMenu?(e.role=this.isClickable?"menuitem":void 0,e.id=e.id||"list-item-".concat(this._uid)):this.isInList&&(e.role="listitem")),e},toggle:function(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render:function(e){var t=this,n=this.generateRouteLink(),i=n.tag,s=n.data;s.attrs=Object(r["a"])(Object(r["a"])({},s.attrs),this.genAttrs()),s[this.to?"nativeOn":"on"]=Object(r["a"])(Object(r["a"])({},s[this.to?"nativeOn":"on"]),{},{keydown:function(e){e.keyCode===l["q"].enter&&t.click(e),t.$emit("keydown",e)}}),this.inactive&&(i="div"),this.inactive&&this.to&&(s.on=s.nativeOn,delete s.nativeOn);var o=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return e(i,this.isActive?this.setTextColor(this.color,s):s,o)}})},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),s=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=o(e),i=a.f,u=s(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},dc22:function(e,t,n){"use strict";function r(e,t,n){var r=t.value,i=t.options||{passive:!0};window.addEventListener("resize",r,i),e._onResize=Object(e._onResize),e._onResize[n.context._uid]={callback:r,options:i},t.modifiers&&t.modifiers.quiet||r()}function i(e,t,n){var r;if(null!=(r=e._onResize)&&r[n.context._uid]){var i=e._onResize[n.context._uid],s=i.callback,o=i.options;window.removeEventListener("resize",s,o),delete e._onResize[n.context._uid]}}var s={inserted:r,unbind:i};t["a"]=s},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},dca8:function(e,t,n){var r=n("23e7"),i=n("bb2f"),s=n("d039"),o=n("861d"),a=n("f183").onFreeze,c=Object.freeze,u=s((function(){c(1)}));r({target:"Object",stat:!0,forced:u,sham:!i},{freeze:function(e){return c&&o(e)?c(a(e)):e}})},dd89:function(e,t,n){"use strict";function r(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}var t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}n.d(t,"a",(function(){return r}))},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=o.values,d=function(e,t){if(e){if(e[u]!==h)try{a(e,u,h)}catch(r){e[u]=h}if(e[l]||a(e,l,t),i[t])for(var n in o)if(e[n]!==o[n])try{a(e,n,o[n])}catch(r){e[n]=o[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(s,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===s(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=o+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},df86:function(e,t,n){},e01a:function(e,t,n){"use strict";var r=n("23e7"),i=n("83ab"),s=n("da84"),o=n("e330"),a=n("1a2d"),c=n("1626"),u=n("3a9b"),l=n("577e"),h=n("9bf2").f,d=n("e893"),f=s.Symbol,p=f&&f.prototype;if(i&&c(f)&&(!("description"in p)||void 0!==f().description)){var m={},g=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),t=u(p,this)?new f(e):void 0===e?f():f(e);return""===e&&(m[t]=!0),t};d(g,f),g.prototype=p,p.constructor=g;var v="Symbol(test)"==String(f("test")),y=o(p.toString),b=o(p.valueOf),w=/^Symbol\((.*)\)[^)]+$/,_=o("".replace),I=o("".slice);h(p,"description",{configurable:!0,get:function(){var e=b(this),t=y(e);if(a(m,e))return"";var n=v?I(t,7,-1):_(t,w,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:g})}},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=o(e);if(i(t,u))return t[u];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",d=o.set,f=o.getterFor(h);e.exports=c(Array,"Array",(function(e,t){d(this,{type:h,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(m){}},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e330:function(e,t,n){var r=n("40d5"),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},e391:function(e,t,n){var r=n("577e");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),s=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=i((function(){o(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return o(s(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e5cb:function(e,t,n){"use strict";var r=n("d066"),i=n("1a2d"),s=n("9112"),o=n("3a9b"),a=n("d2bb"),c=n("e893"),u=n("7156"),l=n("e391"),h=n("ab36"),d=n("c770"),f=n("b980"),p=n("c430");e.exports=function(e,t,n,m){var g=m?2:1,v=e.split("."),y=v[v.length-1],b=r.apply(null,v);if(b){var w=b.prototype;if(!p&&i(w,"cause")&&delete w.cause,!n)return b;var _=r("Error"),I=t((function(e,t){var n=l(m?t:e,void 0),r=m?new b(e):new b;return void 0!==n&&s(r,"message",n),f&&s(r,"stack",d(r.stack,2)),this&&o(w,this)&&u(r,this,I),arguments.length>g&&h(r,arguments[g]),r}));if(I.prototype=w,"Error"!==y&&(a?a(I,_):c(I,_,{name:!0})),c(I,b),!p)try{w.name!==y&&s(w,"name",y),w.constructor=I}catch(T){}return I}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),m=n("d2bb"),g=n("d44e"),v=n("2626"),y=n("59ed"),b=n("1626"),w=n("861d"),_=n("19aa"),I=n("8925"),T=n("2266"),E=n("1c7e"),k=n("4840"),S=n("2cf4").set,O=n("b575"),C=n("cdf9"),x=n("44de"),A=n("f069"),N=n("e667"),L=n("01b4"),R=n("69f3"),D=n("94ca"),P=n("b622"),j=n("6069"),M=n("605d"),F=n("2d00"),V=P("species"),$="Promise",U=R.getterFor($),B=R.set,q=R.getterFor($),z=d&&d.prototype,H=d,W=z,K=u.TypeError,G=u.document,Q=u.process,Y=A.f,J=Y,X=!!(G&&G.createEvent&&u.dispatchEvent),Z=b(u.PromiseRejectionEvent),ee="unhandledrejection",te="rejectionhandled",ne=0,re=1,ie=2,se=1,oe=2,ae=!1,ce=D($,(function(){var e=I(H),t=e!==String(H);if(!t&&66===F)return!0;if(c&&!W["finally"])return!0;if(F>=51&&/native code/.test(e))return!1;var n=new H((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[V]=r,ae=n.then((function(){}))instanceof r,!ae||!t&&j&&!Z})),ue=ce||!E((function(e){H.all(e)["catch"]((function(){}))})),le=function(e){var t;return!(!w(e)||!b(t=e.then))&&t},he=function(e,t){var n,r,i,s=t.value,o=t.state==re,a=o?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(o||(t.rejection===oe&&ge(t),t.rejection=se),!0===a?n=s:(l&&l.enter(),n=a(s),l&&(l.exit(),i=!0)),n===e.promise?u(K("Promise-chain cycle")):(r=le(n))?h(r,n,c,u):c(n)):u(s)}catch(d){l&&!i&&l.exit(),u(d)}},de=function(e,t){e.notified||(e.notified=!0,O((function(){var n,r=e.reactions;while(n=r.get())he(n,e);e.notified=!1,t&&!e.rejection&&pe(e)})))},fe=function(e,t,n){var r,i;X?(r=G.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Z&&(i=u["on"+e])?i(r):e===ee&&x("Unhandled promise rejection",n)},pe=function(e){h(S,u,(function(){var t,n=e.facade,r=e.value,i=me(e);if(i&&(t=N((function(){M?Q.emit("unhandledRejection",r,n):fe(ee,n,r)})),e.rejection=M||me(e)?oe:se,t.error))throw t.value}))},me=function(e){return e.rejection!==se&&!e.parent},ge=function(e){h(S,u,(function(){var t=e.facade;M?Q.emit("rejectionHandled",t):fe(te,t,e.value)}))},ve=function(e,t,n){return function(r){e(t,r,n)}},ye=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ie,de(e,!0))},be=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw K("Promise can't be resolved itself");var r=le(t);r?O((function(){var n={done:!1};try{h(r,t,ve(be,n,e),ve(ye,n,e))}catch(i){ye(n,i,e)}})):(e.value=t,e.state=re,de(e,!1))}catch(i){ye({done:!1},i,e)}}};if(ce&&(H=function(e){_(this,W),y(e),h(r,this);var t=U(this);try{e(ve(be,t),ve(ye,t))}catch(n){ye(t,n)}},W=H.prototype,r=function(e){B(this,{type:$,done:!1,notified:!1,parent:!1,reactions:new L,rejection:!1,state:ne,value:void 0})},r.prototype=p(W,{then:function(e,t){var n=q(this),r=Y(k(this,H));return n.parent=!0,r.ok=!b(e)||e,r.fail=b(t)&&t,r.domain=M?Q.domain:void 0,n.state==ne?n.reactions.add(r):O((function(){he(r,n)})),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=U(e);this.promise=e,this.resolve=ve(be,t),this.reject=ve(ye,t)},A.f=Y=function(e){return e===H||e===s?new i(e):J(e)},!c&&b(d)&&z!==Object.prototype)){o=z.then,ae||(f(z,"then",(function(e,t){var n=this;return new H((function(e,t){h(o,n,e,t)})).then(e,t)}),{unsafe:!0}),f(z,"catch",W["catch"],{unsafe:!0}));try{delete z.constructor}catch(we){}m&&m(z,W)}a({global:!0,wrap:!0,forced:ce},{Promise:H}),g(H,$,!1,!0),v($),s=l($),a({target:$,stat:!0,forced:ce},{reject:function(e){var t=Y(this);return h(t.reject,void 0,e),t.promise}}),a({target:$,stat:!0,forced:c||ce},{resolve:function(e){return C(c&&this===s?H:this,e)}}),a({target:$,stat:!0,forced:ue},{all:function(e){var t=this,n=Y(t),r=n.resolve,i=n.reject,s=N((function(){var n=y(t.resolve),s=[],o=0,a=1;T(e,(function(e){var c=o++,u=!1;a++,h(n,t,e).then((function(e){u||(u=!0,s[c]=e,--a||r(s))}),i)})),--a||r(s)}));return s.error&&i(s.value),n.promise},race:function(e){var t=this,n=Y(t),r=n.reject,i=N((function(){var i=y(t.resolve);T(e,(function(e){h(i,t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},e9b1:function(e,t,n){},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f183:function(e,t,n){var r=n("23e7"),i=n("e330"),s=n("d012"),o=n("861d"),a=n("1a2d"),c=n("9bf2").f,u=n("241c"),l=n("057f"),h=n("4fad"),d=n("90e3"),f=n("bb2f"),p=!1,m=d("meta"),g=0,v=function(e){c(e,m,{value:{objectID:"O"+g++,weakData:{}}})},y=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,m)){if(!h(e))return"F";if(!t)return"E";v(e)}return e[m].objectID},b=function(e,t){if(!a(e,m)){if(!h(e))return!0;if(!t)return!1;v(e)}return e[m].weakData},w=function(e){return f&&p&&h(e)&&!a(e,m)&&v(e),e},_=function(){I.enable=function(){},p=!0;var e=u.f,t=i([].splice),n={};n[m]=1,e(n).length&&(u.f=function(n){for(var r=e(n),i=0,s=r.length;i<s;i++)if(r[i]===m){t(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:l.f}))},I=e.exports={enable:_,fastKey:y,getWeakData:b,onFreeze:w};s[m]=!0},f2e7:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n("ade3"),i=n("2b0e");function s(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return i["a"].extend({name:"toggleable",model:{prop:t,event:n},props:Object(r["a"])({},t,{required:!1}),data:function(){return{isActive:!!this[t]}},watch:(e={},Object(r["a"])(e,t,(function(e){this.isActive=!!e})),Object(r["a"])(e,"isActive",(function(e){!!e!==this[t]&&this.$emit(n,e)})),e)})}var o=s();t["a"]=o},f309:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ne}));var r={};n.r(r),n.d(r,"linear",(function(){return C})),n.d(r,"easeInQuad",(function(){return x})),n.d(r,"easeOutQuad",(function(){return A})),n.d(r,"easeInOutQuad",(function(){return N})),n.d(r,"easeInCubic",(function(){return L})),n.d(r,"easeOutCubic",(function(){return R})),n.d(r,"easeInOutCubic",(function(){return D})),n.d(r,"easeInQuart",(function(){return P})),n.d(r,"easeOutQuart",(function(){return j})),n.d(r,"easeInOutQuart",(function(){return M})),n.d(r,"easeInQuint",(function(){return F})),n.d(r,"easeOutQuint",(function(){return V})),n.d(r,"easeInOutQuint",(function(){return $}));n("d9e2");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n("d3b7"),n("159b"),n("caad"),n("2532");var a=n("2b0e"),c=n("d9bd");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!u.installed){u.installed=!0,a["a"]!==e&&Object(c["b"])("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");var n=t.components||{},r=t.directives||{};for(var i in r){var s=r[i];e.directive(i,s)}(function t(n){if(n){for(var r in n){var i=n[r];i&&!t(i.$_vuetify_subcomponents)&&e.component(r,i)}return!0}return!1})(n),e.$_vuetify_installed||(e.$_vuetify_installed=!0,e.mixin({beforeCreate:function(){var t=this.$options;t.vuetify?(t.vuetify.init(this,this.$ssrContext),this.$vuetify=e.observable(t.vuetify.framework)):this.$vuetify=t.parent&&t.parent.$vuetify||this},beforeMount:function(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted:function(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}}var l=n("15fd");function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}n("4ae1"),n("f8c9"),n("3410");function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var m=n("53ca");function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){if(t&&("object"===Object(m["a"])(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function y(e){var t=p();return function(){var n,r=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return v(this,n)}}n("95ed");var b={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}},w={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:b},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}},_=n("80d2"),I=function(){function e(){i(this,e),this.framework={}}return o(e,[{key:"init",value:function(e,t){}}]),e}(),T=["preset"],E=function(e){d(n,e);var t=y(n);function n(e,r){var s;i(this,n),s=t.call(this);var o=Object(_["s"])({},w),a=r.userPreset,u=a.preset,h=void 0===u?{}:u,d=Object(l["a"])(a,T);return null!=h.preset&&Object(c["c"])("Global presets do not support the **preset** option, it can be safely omitted"),r.preset=Object(_["s"])(Object(_["s"])(o,h),d),s}return o(n)}(I);E.property="presets";n("07ac");var k=function(e){d(n,e);var t=y(n);function n(){var e;return i(this,n),e=t.apply(this,arguments),e.bar=0,e.top=0,e.left=0,e.insetFooter=0,e.right=0,e.bottom=0,e.footer=0,e.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}},e}return o(n,[{key:"register",value:function(e,t,n){this.application[t][e]=n,this.update(t)}},{key:"unregister",value:function(e,t){null!=this.application[t][e]&&(delete this.application[t][e],this.update(t))}},{key:"update",value:function(e){this[e]=Object.values(this.application[e]).reduce((function(e,t){return e+t}),0)}}]),n}(I);k.property="application";n("b0c0");var S=function(e){d(n,e);var t=y(n);function n(e){var r;i(this,n),r=t.call(this),r.xs=!1,r.sm=!1,r.md=!1,r.lg=!1,r.xl=!1,r.xsOnly=!1,r.smOnly=!1,r.smAndDown=!1,r.smAndUp=!1,r.mdOnly=!1,r.mdAndDown=!1,r.mdAndUp=!1,r.lgOnly=!1,r.lgAndDown=!1,r.lgAndUp=!1,r.xlOnly=!1,r.name="xs",r.height=0,r.width=0,r.mobile=!0,r.resizeTimeout=0;var s=e[n.property],o=s.mobileBreakpoint,a=s.scrollBarWidth,c=s.thresholds;return r.mobileBreakpoint=o,r.scrollBarWidth=a,r.thresholds=c,r}return o(n,[{key:"init",value:function(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=e?0:this.getClientHeight(),n=e?0:this.getClientWidth(),r=n<this.thresholds.xs,i=n<this.thresholds.sm&&!r,s=n<this.thresholds.md-this.scrollBarWidth&&!(i||r),o=n<this.thresholds.lg-this.scrollBarWidth&&!(s||i||r),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=t,this.width=n,this.xs=r,this.sm=i,this.md=s,this.lg=o,this.xl=a,this.xsOnly=r,this.smOnly=i,this.smAndDown=(r||i)&&!(s||o||a),this.smAndUp=!r&&(i||s||o||a),this.mdOnly=s,this.mdAndDown=(r||i||s)&&!(o||a),this.mdAndUp=!(r||i)&&(s||o||a),this.lgOnly=o,this.lgAndDown=(r||i||s||o)&&!a,this.lgAndUp=!(r||i||s)&&(o||a),this.xlOnly=a,!0){case r:this.name="xs";break;case i:this.name="sm";break;case s:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"!==typeof this.mobileBreakpoint){var c={xs:0,sm:1,md:2,lg:3,xl:4},u=c[this.name],l=c[this.mobileBreakpoint];this.mobile=u<=l}else this.mobile=n<parseInt(this.mobileBreakpoint,10)}},{key:"onResize",value:function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}},{key:"getClientWidth",value:function(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}},{key:"getClientHeight",value:function(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}]),n}(I);S.property="breakpoint";var O=n("5530"),C=function(e){return e},x=function(e){return Math.pow(e,2)},A=function(e){return e*(2-e)},N=function(e){return e<.5?2*Math.pow(e,2):(4-2*e)*e-1},L=function(e){return Math.pow(e,3)},R=function(e){return Math.pow(--e,3)+1},D=function(e){return e<.5?4*Math.pow(e,3):(e-1)*(2*e-2)*(2*e-2)+1},P=function(e){return Math.pow(e,4)},j=function(e){return 1-Math.pow(--e,4)},M=function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},F=function(e){return Math.pow(e,5)},V=function(e){return 1+Math.pow(--e,5)},$=function(e){return e<.5?16*Math.pow(e,5):1+16*Math.pow(--e,5)};function U(e){if("number"===typeof e)return e;var t=z(e);if(!t)throw"string"===typeof e?new Error('Target element "'.concat(e,'" not found.')):new TypeError("Target must be a Number/Selector/HTMLElement/VueComponent, received ".concat(q(e)," instead."));var n=0;while(t)n+=t.offsetTop,t=t.offsetParent;return n}function B(e){var t=z(e);if(t)return t;throw"string"===typeof e?new Error('Container element "'.concat(e,'" not found.')):new TypeError("Container must be a Selector/HTMLElement/VueComponent, received ".concat(q(e)," instead."))}function q(e){return null==e?e:e.constructor.name}function z(e){return"string"===typeof e?document.querySelector(e):e&&e._isVue?e.$el:e instanceof HTMLElement?e:null}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(O["a"])({container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0},t),i=B(n.container);if(n.appOffset&&H.framework.application){var s=i.classList.contains("v-navigation-drawer"),o=i.classList.contains("v-navigation-drawer--clipped"),a=H.framework.application,c=a.bar,u=a.top;n.offset+=c,s&&!o||(n.offset+=u)}var l,h=performance.now();l="number"===typeof e?U(e)-n.offset:U(e)-U(i)-n.offset;var d=i.scrollTop;if(l===d)return Promise.resolve(l);var f="function"===typeof n.easing?n.easing:r[n.easing];if(!f)throw new TypeError('Easing function "'.concat(n.easing,'" not found.'));return new Promise((function(e){return requestAnimationFrame((function t(r){var s=r-h,o=Math.abs(n.duration?Math.min(s/n.duration,1):1);i.scrollTop=Math.floor(d+(l-d)*f(o));var a=i===document.body?document.documentElement.clientHeight:i.clientHeight,c=a+i.scrollTop>=i.scrollHeight;if(1===o||l>i.scrollTop&&c)return e(l);requestAnimationFrame(t)}))}))}H.framework={},H.init=function(){};var W=function(e){d(n,e);var t=y(n);function n(){var e;return i(this,n),e=t.call(this),v(e,H)}return o(n)}(I);W.property="goTo";n("ddb0"),n("dca8");var K={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",success:"M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",warning:"M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",error:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"},G=K,Q={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"},Y=Q,J={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},X=J,Z={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"},ee=Z,te={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"},ne=te;n("ac1f"),n("1276");function re(e,t){var n={};for(var r in t)n[r]={component:e,props:{icon:t[r].split(" fa-")}};return n}var ie=re("font-awesome-icon",ee),se=Object.freeze({mdiSvg:G,md:Y,mdi:X,fa:ee,fa4:ne,faSvg:ie}),oe=function(e){d(n,e);var t=y(n);function n(e){var r;i(this,n),r=t.call(this);var s=e[n.property],o=s.iconfont,a=s.values,c=s.component;return r.component=c,r.iconfont=o,r.values=Object(_["s"])(se[o],a),r}return o(n)}(I);oe.property="icons";n("a4d3"),n("e01a"),n("5319"),n("2ca0"),n("99af");var ae="$vuetify.",ce=Symbol("Lang fallback");function ue(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,i=t.replace(ae,""),s=Object(_["l"])(e,i,ce);return s===ce&&(n?(Object(c["b"])('Translation key "'.concat(i,'" not found in fallback')),s=t):(Object(c["c"])('Translation key "'.concat(i,'" not found, falling back to default')),s=ue(r,t,!0,r))),s}var le=function(e){d(n,e);var t=y(n);function n(e){var r;i(this,n),r=t.call(this),r.defaultLocale="en";var s=e[n.property],o=s.current,a=s.locales,c=s.t;return r.current=o,r.locales=a,r.translator=c||r.defaultTranslator,r}return o(n,[{key:"currentLocale",value:function(e){var t=this.locales[this.current],n=this.locales[this.defaultLocale];return ue(t,e,!1,n)}},{key:"t",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.startsWith(ae)?this.translator.apply(this,[e].concat(n)):this.replace(e,n)}},{key:"defaultTranslator",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return this.replace(this.currentLocale(e),n)}},{key:"replace",value:function(e,t){return e.replace(/\{(\d+)\}/g,(function(e,n){return String(t[+n])}))}}]),n}(I);le.property="lang";n("7db0");var he=n("3835"),de=(n("18a5"),n("b64b"),n("7bc6")),fe=n("8da5"),pe=(n("3ea3"),.20689655172413793),me=function(e){return e>Math.pow(pe,3)?Math.cbrt(e):e/(3*Math.pow(pe,2))+4/29},ge=function(e){return e>pe?Math.pow(e,3):3*Math.pow(pe,2)*(e-4/29)};function ve(e){var t=me,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function ye(e){var t=ge,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}var be=["anchor"],we=["anchor"];function _e(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e.anchor,i=Object(l["a"])(e,be),s=Object.keys(i),o={},a=0;a<s.length;++a){var c=s[a],u=e[c];null!=u&&(n?t?("base"===c||c.startsWith("lighten")||c.startsWith("darken"))&&(o[c]=Object(de["a"])(u)):"object"===Object(m["a"])(u)?o[c]=_e(u,!0,n):o[c]=Oe(c,Object(de["b"])(u)):o[c]={base:Object(de["c"])(Object(de["b"])(u))})}return t||(o.anchor=r||o.base||o.primary.base),o}var Ie=function(e,t){return"\n.v-application .".concat(e," {\n  background-color: ").concat(t," !important;\n  border-color: ").concat(t," !important;\n}\n.v-application .").concat(e,"--text {\n  color: ").concat(t," !important;\n  caret-color: ").concat(t," !important;\n}")},Te=function(e,t,n){var r=t.split(/(\d)/,2),i=Object(he["a"])(r,2),s=i[0],o=i[1];return"\n.v-application .".concat(e,".").concat(s,"-").concat(o," {\n  background-color: ").concat(n," !important;\n  border-color: ").concat(n," !important;\n}\n.v-application .").concat(e,"--text.text--").concat(s,"-").concat(o," {\n  color: ").concat(n," !important;\n  caret-color: ").concat(n," !important;\n}")},Ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base";return"--v-".concat(e,"-").concat(t)},ke=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base";return"var(".concat(Ee(e,t),")")};function Se(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.anchor,r=Object(l["a"])(e,we),i=Object.keys(r);if(!i.length)return"";var s="",o="",a=t?ke("anchor"):n;o+=".v-application a { color: ".concat(a,"; }"),t&&(s+="  ".concat(Ee("anchor"),": ").concat(n,";\n"));for(var c=0;c<i.length;++c){var u=i[c],h=e[u];o+=Ie(u,t?ke(u):h.base),t&&(s+="  ".concat(Ee(u),": ").concat(h.base,";\n"));for(var d=Object(_["r"])(h),f=0;f<d.length;++f){var p=d[f],m=h[p];"base"!==p&&(o+=Te(u,p,t?ke(u,p):m),t&&(s+="  ".concat(Ee(u,p),": ").concat(m,";\n")))}}return t&&(s=":root {\n".concat(s,"}\n\n")),s+o}function Oe(e,t){for(var n={base:Object(de["c"])(t)},r=5;r>0;--r)n["lighten".concat(r)]=Object(de["c"])(Ce(t,r));for(var i=1;i<=4;++i)n["darken".concat(i)]=Object(de["c"])(xe(t,i));return n}function Ce(e,t){var n=ve(fe["b"](e));return n[0]=n[0]+10*t,fe["a"](ye(n))}function xe(e,t){var n=ve(fe["b"](e));return n[0]=n[0]-10*t,fe["a"](ye(n))}var Ae=function(e){d(n,e);var t=y(n);function n(e){var r;i(this,n),r=t.call(this),r.disabled=!1,r.isDark=null,r.unwatch=null,r.vueMeta=null;var s=e[n.property],o=s.dark,a=s.disable,c=s.options,u=s.themes;return r.dark=Boolean(o),r.defaults=r.themes=u,r.options=c,a?(r.disabled=!0,v(r)):(r.themes={dark:r.fillVariant(u.dark,!0),light:r.fillVariant(u.light,!1)},r)}return o(n,[{key:"css",set:function(e){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=e)}},{key:"dark",get:function(){return Boolean(this.isDark)},set:function(e){var t=this.isDark;this.isDark=e,null!=t&&this.applyTheme()}},{key:"applyTheme",value:function(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}},{key:"clearCss",value:function(){this.css=""}},{key:"init",value:function(e,t){this.disabled||(e.$meta?this.initVueMeta(e):t&&this.initSSR(t),this.initTheme(e))}},{key:"setTheme",value:function(e,t){this.themes[e]=Object.assign(this.themes[e],t),this.applyTheme()}},{key:"resetThemes",value:function(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}},{key:"checkOrCreateStyleElement",value:function(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}},{key:"fillVariant",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=this.themes[t?"dark":"light"];return Object.assign({},n,e)}},{key:"genStyleElement",value:function(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}},{key:"initVueMeta",value:function(e){var t=this;if(this.vueMeta=e.$meta(),this.isVueMeta23)e.$nextTick((function(){t.applyVueMeta23()}));else{var n="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",r=e.$options[n]||{};e.$options[n]=function(){r.style=r.style||[];var e=r.style.find((function(e){return"vuetify-theme-stylesheet"===e.id}));return e?e.cssText=t.generatedStyles:r.style.push({cssText:t.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(t.options||{}).cspNonce}),r}}}},{key:"applyVueMeta23",value:function(){var e=this.vueMeta.addApp("vuetify"),t=e.set;t({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}},{key:"initSSR",value:function(e){var t=this.options.cspNonce?' nonce="'.concat(this.options.cspNonce,'"'):"";e.head=e.head||"",e.head+='<style type="text/css" id="vuetify-theme-stylesheet"'.concat(t,">").concat(this.generatedStyles,"</style>")}},{key:"initTheme",value:function(e){var t=this;"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),e.$once("hook:created",(function(){var n=a["a"].observable({themes:t.themes});t.unwatch=e.$watch((function(){return n.themes}),(function(){return t.applyTheme()}),{deep:!0})})),this.applyTheme())}},{key:"currentTheme",get:function(){var e=this.dark?"dark":"light";return this.themes[e]}},{key:"generatedStyles",get:function(){var e,t=this.parsedTheme,n=this.options||{};return null!=n.themeCache&&(e=n.themeCache.get(t),null!=e)||(e=Se(t,n.customProperties),null!=n.minifyTheme&&(e=n.minifyTheme(e)),null!=n.themeCache&&n.themeCache.set(t,e)),e}},{key:"parsedTheme",get:function(){return _e(this.currentTheme||{},void 0,Object(_["k"])(this.options,["variations"],!0))}},{key:"isVueMeta23",get:function(){return"function"===typeof this.vueMeta.addApp}}]),n}(I);Ae.property="theme";var Ne=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=t,this.use(E),this.use(k),this.use(S),this.use(W),this.use(oe),this.use(le),this.use(Ae)}return o(e,[{key:"init",value:function(e,t){var n=this;this.installed.forEach((function(r){var i=n.framework[r];i.framework=n.framework,i.init(e,t)})),this.framework.rtl=Boolean(this.preset.rtl)}},{key:"use",value:function(e){var t=e.property;this.installed.includes(t)||(this.framework[t]=new e(this.preset,this),this.installed.push(t))}}]),e}();Ne.install=u,Ne.installed=!1,Ne.version="2.6.3",Ne.config={silent:!1}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?o(t):"Object"==(r=o(t))&&s(t.callee)?"Arguments":r}},f748:function(e,t){e.exports=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},f8c9:function(e,t,n){var r=n("23e7"),i=n("da84"),s=n("d44e");r({global:!0},{Reflect:{}}),s(i.Reflect,"Reflect",!0)},fb6a:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("e8b5"),o=n("68ee"),a=n("861d"),c=n("23cb"),u=n("07fa"),l=n("fc6a"),h=n("8418"),d=n("b622"),f=n("1dde"),p=n("f36a"),m=f("slice"),g=d("species"),v=i.Array,y=Math.max;r({target:"Array",proto:!0,forced:!m},{slice:function(e,t){var n,r,i,d=l(this),f=u(d),m=c(e,f),b=c(void 0===t?f:t,f);if(s(d)&&(n=d.constructor,o(n)&&(n===v||s(n.prototype))?n=void 0:a(n)&&(n=n[g],null===n&&(n=void 0)),n===v||void 0===n))return p(d,m,b);for(r=new(void 0===n?v:n)(y(b-m,0)),i=0;m<b;m++,i++)m in d&&h(r,i,d[m]);return r.length=i,r}})},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fce3:function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp;e.exports=r((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fe6c:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n("2b0e"),i=n("80d2"),s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r["a"].extend({name:"positionable",props:e.length?Object(i["j"])(s,e):s})}t["a"]=o()},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.56d312c8.js.map