(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"368e":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var i=n("6d61"),a=n("6566");i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},"615b":function(t,e,n){},6566:function(t,e,n){"use strict";var i=n("9bf2").f,a=n("7c73"),o=n("e2cc"),r=n("0366"),s=n("19aa"),c=n("2266"),l=n("7dd0"),u=n("2626"),d=n("83ab"),h=n("f183").fastKey,v=n("69f3"),f=v.set,m=v.getterFor;t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,i){s(t,v),f(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=i&&c(i,t[l],{that:t,AS_ENTRIES:n})})),v=u.prototype,p=m(e),g=function(t,e,n){var i,a,o=p(t),r=b(t,e);return r?r.value=n:(o.last=r={index:a=h(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=r),i&&(i.next=r),d?o.size++:t.size++,"F"!==a&&(o.index[a]=r)),t},b=function(t,e){var n,i=p(t),a=h(e);if("F"!==a)return i.index[a];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(v,{clear:function(){var t=this,e=p(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=p(e),i=b(e,t);if(i){var a=i.next,o=i.previous;delete n.index[i.index],i.removed=!0,o&&(o.next=a),a&&(a.previous=o),n.first==i&&(n.first=a),n.last==i&&(n.last=o),d?n.size--:e.size--}return!!i},forEach:function(t){var e,n=p(this),i=r(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),o(v,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&i(v,"size",{get:function(){return p(this).size}}),u},setStrong:function(t,e,n){var i=e+" Iterator",a=m(e),o=m(i);l(t,e,(function(t,e){f(this,{type:i,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"68f9":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-8",attrs:{fluid:""}},[n("h1",{staticClass:"h1"},[t._v("Meu perfil")]),n("v-form",[n("v-container",[n("v-text-field",{attrs:{label:"Nome"},model:{value:t.nome,callback:function(e){t.nome=e},expression:"nome"}}),n("v-text-field",{attrs:{label:"Sobrenome"},model:{value:t.sobrenome,callback:function(e){t.sobrenome=e},expression:"sobrenome"}}),n("v-btn",{attrs:{color:"primary"},on:{click:t.salvarPerfil}},[t._v("Salvar")])],1)],1)],1)},a=[],o=n("1da1"),r=(n("96cf"),n("4ee7")),s={data:function(){return{nome:"",sobrenome:"",uid:"",temPerfil:!1}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.uid=r["a"].currentUser.uid,e.next=3,r["b"].where("uid","==",t.uid).get();case 3:n=e.sent,n.docs.length>0&&(t.temPerfil=!0,i=n.docs[0],t.profileId=i.id,t.nome=i.data().nome,t.sobrenome=i.data().sobrenome);case 5:case"end":return e.stop()}}),e)})))()},methods:{salvarPerfil:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.temPerfil){e.next=5;break}return e.next=3,r["b"].doc(t.profileId).update({nome:t.nome,sobrenome:t.sobrenome});case 3:e.next=7;break;case 5:return e.next=7,r["b"].add({uid:t.uid,nome:t.nome,sobrenome:t.sobrenome});case 7:case"end":return e.stop()}}),e)})))()}}},c=s,l=n("2877"),u=n("6544"),d=n.n(u),h=n("8336"),v=n("a523"),f=n("4bd4"),m=n("8654"),p=Object(l["a"])(c,i,a,!1,null,null,null);e["default"]=p.exports;d()(p,{VBtn:h["a"],VContainer:v["a"],VForm:f["a"],VTextField:m["a"]})},"6d61":function(t,e,n){"use strict";var i=n("23e7"),a=n("da84"),o=n("e330"),r=n("94ca"),s=n("6eeb"),c=n("f183"),l=n("2266"),u=n("19aa"),d=n("1626"),h=n("861d"),v=n("d039"),f=n("1c7e"),m=n("d44e"),p=n("7156");t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),y=g?"set":"add",x=a[t],k=x&&x.prototype,O=x,w={},j=function(t){var e=o(k[t]);s(k,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!h(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return b&&!h(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!h(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},C=r(t,!d(x)||!(b||k.forEach&&!v((function(){(new x).entries().next()}))));if(C)O=n.getConstructor(e,t,g,y),c.enable();else if(r(t,!0)){var A=new O,E=A[y](b?{}:-0,1)!=A,$=v((function(){A.has(1)})),S=f((function(t){new x(t)})),_=!b&&v((function(){var t=new x,e=5;while(e--)t[y](e,e);return!t.has(-0)}));S||(O=e((function(t,e){u(t,k);var n=p(new x,t,O);return void 0!=e&&l(e,n[y],{that:n,AS_ENTRIES:g}),n})),O.prototype=k,k.constructor=O),($||_)&&(j("delete"),j("has"),g&&j("get")),(_||E)&&j(y),b&&k.clear&&delete k.clear}return w[t]=O,i({global:!0,forced:O!=x},w),m(O,t),b||n.setStrong(O,t,g),O}},a55b:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"fill-height":"",fluid:"","text-center":""}},[i("v-container",[i("v-row",[i("v-col",{staticClass:"primary--text text-center mx-auto pb-4",attrs:{cols:"1",sm:"4",offset:"4"}},[i("h1",{staticClass:"h1"},[t._v("Login")])])],1),i("v-row",{staticClass:"elavation-3 mx-auto"},[i("v-col",{attrs:{cols:"auto"}},[i("v-img",{attrs:{"max-height":"150","max-width":"250",src:n("e8c3")}})],1),i("v-col",[i("v-form",[i("v-text-field",{attrs:{label:"Email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),i("v-text-field",{attrs:{label:"Senha",type:t.show?"text":"password","append-icon":t.show?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),i("v-btn",{attrs:{color:"primary"},on:{click:t.login}},[t._v("Login")]),i("v-btn",{staticClass:"ml-2",attrs:{color:"warning"},on:{click:t.reset}},[t._v("Cancelar")])],1)],1)],1)],1),i("v-snackbar",{attrs:{color:"red",danger:"",multline:"",timeout:"2000"},model:{value:t.errorLogin,callback:function(e){t.errorLogin=e},expression:"errorLogin"}},[t._v(" Usuário ou senha inválidos ")]),i("v-dialog",{attrs:{persistent:"","max-width":"300"},model:{value:t.novaConta,callback:function(e){t.novaConta=e},expression:"novaConta"}},[i("v-card",[i("v-card-title",[t._v("Conta não encontrada")]),i("v-card-text",[t._v("A conta não foi encontrada. Deseja criar uma nova com os dados informados?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darker-1",text:""},on:{click:t.criarNovaConta}},[t._v("Sim")]),i("v-btn",{attrs:{color:"red darker-1",text:""},on:{click:function(e){t.novaConta=!1}}},[t._v("Não")])],1)],1)],1)],1)},a=[],o=n("1da1"),r=(n("96cf"),n("4ee7")),s={data:function(){return{user:{},show:!1,errorLogin:!1,novaConta:!1}},methods:{reset:function(){this.user={}},login:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r["a"].signInWithEmailAndPassword(t.user.email,t.user.password);case 3:t.$router.push({name:"Home"}),e.next=20;break;case 6:e.prev=6,e.t0=e["catch"](0),n=e.t0.code,e.t1=n,e.next="auth/wrong-password"===e.t1?12:"auth/invalid-email"===e.t1?14:"auth/user-not-found"===e.t1?16:18;break;case 12:return t.errorLogin=!0,e.abrupt("break",20);case 14:return t.errorLogin=!0,e.abrupt("break",20);case 16:return t.novaConta=!0,e.abrupt("break",20);case 18:return t.errorLogin=!0,e.abrupt("break",20);case 20:case"end":return e.stop()}}),e,null,[[0,6]])})))()},criarNovaConta:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.novaConta=!1,e.next=3,r["a"].createUserWithEmailAndPassword(t.user.email,t.user.password);case 3:t.login();case 4:case"end":return e.stop()}}),e)})))()}}},c=s,l=n("2877"),u=n("6544"),d=n.n(u),h=n("8336"),v=n("5530"),f=(n("a9e3"),n("0481"),n("4069"),n("615b"),n("10d2")),m=n("297c"),p=n("1c87"),g=n("58df"),b=Object(g["a"])(m["a"],p["a"],f["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({"v-card":!0},p["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},f["a"].options.computed.classes.call(this))},styles:function(){var t=Object(v["a"])({},f["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=m["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}}),y=n("80d2"),x=Object(y["h"])("v-card__actions"),k=(Object(y["h"])("v-card__subtitle"),Object(y["h"])("v-card__text")),O=Object(y["h"])("v-card__title"),w=n("ade3"),j=(n("d3b7"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),C=n("d9f7"),A=["sm","md","lg","xl"],E=function(){return A.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),$=function(){return A.reduce((function(t,e){return t["offset"+Object(y["v"])(e)]={type:[String,Number],default:null},t}),{})}(),S=function(){return A.reduce((function(t,e){return t["order"+Object(y["v"])(e)]={type:[String,Number],default:null},t}),{})}(),_={col:Object.keys(E),offset:Object.keys($),order:Object.keys(S)};function N(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");i+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var T=new Map,B=j["a"].extend({name:"v-col",functional:!0,props:Object(v["a"])(Object(v["a"])(Object(v["a"])(Object(v["a"])({cols:{type:[Boolean,String,Number],default:!1}},E),{},{offset:{type:[String,Number],default:null}},$),{},{order:{type:[String,Number],default:null}},S),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,i=e.data,a=e.children,o=(e.parent,"");for(var r in n)o+=String(n[r]);var s=T.get(o);return s||function(){var t,e;for(e in s=[],_)_[e].forEach((function(t){var i=n[t],a=N(e,t,i);a&&s.push(a)}));var i=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!i||!n.cols},Object(w["a"])(t,"col-".concat(n.cols),n.cols),Object(w["a"])(t,"offset-".concat(n.offset),n.offset),Object(w["a"])(t,"order-".concat(n.order),n.order),Object(w["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),T.set(o,s)}(),t(n.tag,Object(C["a"])(i,{class:s}),a)}}),D=n("a523"),I=n("2909"),L=(n("498a"),n("2532"),n("7db0"),n("368e"),n("7560")),V=L["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:L["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}}),M=n("53ca"),P=(n("b0c0"),j["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var i=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},i)}}})),F=n("f2e7"),R=n("d9bd"),z=Object(g["a"])(P,F["a"]),Z=z.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(M["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(y["n"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(R["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.getActivator().addEventListener(i,this.listeners[i])}}},genActivator:function(){var t=Object(y["m"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):this.openOnClick&&(e.click=function(e){var n=t.getActivator(e);n&&n.focus(),e.stopPropagation(),t.isActive=!t.isActive}),this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){var e;if(this.activatorElement)return this.activatorElement;var n=null;if(this.activator){var i=this.internalActivator?this.$el:document;n="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var a=this.activatorNode[0].componentInstance;n=a&&a.$options.mixins&&a.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?a.getActivator():this.activatorNode[0].elm}else t&&(n=t.currentTarget||t.target);return this.activatorElement=(null==(e=n)?void 0:e.nodeType)===Node.ELEMENT_NODE?n:null,this.activatorElement},getContentSlot:function(){return Object(y["m"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.activatorElement.removeEventListener(i,this.listeners[i])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}}),W=n("b848"),H=(n("a630"),n("9d65"));function q(t){var e=Object(M["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function U(t){t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}var K=Object(g["a"])(H["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:q},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var n=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,n)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed:function(){var t=this;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){var n=new MutationObserver((function(i){i.some((function(e){return Array.from(e.removedNodes).includes(t.$el)}))&&(n.disconnect(),U(e))}));n.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else U(e)}},methods:{getScopeIdAttrs:function(){var t=Object(y["l"])(this.$vnode,"context.$options._scopeId");return t&&Object(w["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(R["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}}),G=n("e707"),J=j["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}}),Q=(n("99af"),j["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(y["o"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,n=[this.stackMinZIndex,Object(y["o"])(e)],i=[].concat(Object(I["a"])(document.getElementsByClassName("v-menu__content--active")),Object(I["a"])(document.getElementsByClassName("v-dialog__content--active"))),a=0;a<i.length;a++)t.includes(i[a])||n.push(Object(y["o"])(i[a]));return Math.max.apply(Math,n)}}})),X=n("a293"),Y=Object(g["a"])(Z,W["a"],K,G["a"],J,Q,F["a"]),tt=Y.extend({name:"v-dialog",directives:{ClickOutside:X["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(w["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(w["a"])(t,"v-dialog--active",this.isActive),Object(w["a"])(t,"v-dialog--persistent",this.persistent),Object(w["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(w["a"])(t,"v-dialog--scrollable",this.scrollable),Object(w["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(R["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):G["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===y["q"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(I["a"])(n).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(V,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(v["a"])({role:"dialog",tabindex:t.isActive?0:void 0,"aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(v["a"])(Object(v["a"])({},t.style),{},{maxWidth:Object(y["g"])(this.maxWidth),width:Object(y["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}}),et=n("4bd4"),nt=n("adda"),it=["sm","md","lg","xl"],at=["start","end","center"];function ot(t,e){return it.reduce((function(n,i){return n[t+Object(y["v"])(i)]=e(),n}),{})}var rt=function(t){return[].concat(at,["baseline","stretch"]).includes(t)},st=ot("align",(function(){return{type:String,default:null,validator:rt}})),ct=function(t){return[].concat(at,["space-between","space-around"]).includes(t)},lt=ot("justify",(function(){return{type:String,default:null,validator:ct}})),ut=function(t){return[].concat(at,["space-between","space-around","stretch"]).includes(t)},dt=ot("alignContent",(function(){return{type:String,default:null,validator:ut}})),ht={align:Object.keys(st),justify:Object.keys(lt),alignContent:Object.keys(dt)},vt={align:"align",justify:"justify",alignContent:"align-content"};function ft(t,e,n){var i=vt[t];if(null!=n){if(e){var a=e.replace(t,"");i+="-".concat(a)}return i+="-".concat(n),i.toLowerCase()}}var mt=new Map,pt=j["a"].extend({name:"v-row",functional:!0,props:Object(v["a"])(Object(v["a"])(Object(v["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:rt}},st),{},{justify:{type:String,default:null,validator:ct}},lt),{},{alignContent:{type:String,default:null,validator:ut}},dt),render:function(t,e){var n=e.props,i=e.data,a=e.children,o="";for(var r in n)o+=String(n[r]);var s=mt.get(o);return s||function(){var t,e;for(e in s=[],ht)ht[e].forEach((function(t){var i=n[t],a=ft(e,t,i);a&&s.push(a)}));s.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(w["a"])(t,"align-".concat(n.align),n.align),Object(w["a"])(t,"justify-".concat(n.justify),n.justify),Object(w["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),mt.set(o,s)}(),t(n.tag,Object(C["a"])(i,{staticClass:"row",class:s}),a)}}),gt=(n("ca71"),n("8dd9")),bt=n("a9ad"),yt=n("fe6c"),xt=Object(g["a"])(gt["a"],bt["a"],F["a"],Object(yt["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:L["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,i=t.footer,a=t.insetFooter,o=t.left,r=t.right,s=t.top;return{paddingBottom:Object(y["g"])(n+i+a),paddingLeft:Object(y["g"])(o),paddingRight:Object(y["g"])(r),paddingTop:Object(y["g"])(e+s)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(R["e"])("auto-height",this),0==this.timeout&&Object(R["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(y["m"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(w["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(y["m"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,n=e(this.color,{staticClass:"v-snack__wrapper",class:gt["a"].options.computed.classes.call(this),style:gt["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",n,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),kt=n("2fa4"),Ot=n("8654"),wt=Object(l["a"])(c,i,a,!1,null,null,null);e["default"]=wt.exports;d()(wt,{VBtn:h["a"],VCard:b,VCardActions:x,VCardText:k,VCardTitle:O,VCol:B,VContainer:D["a"],VDialog:tt,VForm:et["a"],VImg:nt["a"],VRow:pt,VSnackbar:xt,VSpacer:kt["a"],VTextField:Ot["a"]})},ca71:function(t,e,n){},e8c3:function(t,e,n){t.exports=n.p+"img/firebase_logo.be43851e.png"}}]);
//# sourceMappingURL=about.4ea7bd1e.js.map