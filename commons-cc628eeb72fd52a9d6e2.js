(self.webpackChunkarthur1_github_io=self.webpackChunkarthur1_github_io||[]).push([[351],{862:function(e,t,n){var r=n(8).default;function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var c=i?Object.getOwnPropertyDescriptor(e,u):null;c&&(c.get||c.set)?Object.defineProperty(a,u,c):a[u]=e[u]}return a.default=e,n&&n.set(e,a),a},e.exports.default=e.exports,e.exports.__esModule=!0},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var u,c,l,s;if(Array.isArray(e)){if((u=e.length)!=i.length)return!1;for(c=u;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!a(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((u=e.length)!=i.length)return!1;for(c=u;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((u=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!a(e[l[c]],i[l[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.r(t),n.d(t,{Helmet:function(){return he}});var r,o,a,i,u=n(5697),c=n.n(u),l=n(4839),s=n.n(l),f=n(2993),d=n.n(f),p=n(7294),m=n(6494),h=n.n(m),y="bodyAttributes",g="htmlAttributes",v="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(b).map((function(e){return b[e]})),"charset"),w="cssText",T="href",O="http-equiv",A="innerHTML",C="itemprop",k="name",L="property",S="rel",j="src",x="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",_="defer",I="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",B=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),D=[b.NOSCRIPT,b.SCRIPT,b.STYLE],H="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=Q(e,b.TITLE),n=Q(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},G=function(e){return Q(e,M)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();-1===t.indexOf(c)||n===S&&"canonical"===e[n].toLowerCase()||c===S&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==A&&u!==w&&u!==C||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=h()({},r[u],o[u]);r[u]=c}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ce(b.BODY,r),ce(b.HTML,o),ue(f,d);var p={baseTag:le(b.BASE,n),linkTags:le(b.LINK,a),metaTags:le(b.META,i),noscriptTags:le(b.NOSCRIPT,u),scriptTags:le(b.SCRIPT,l),styleTags:le(b.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(b.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var s=a.indexOf(c);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(H):n.getAttribute(H)!==i.join(",")&&n.setAttribute(H,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(H,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=fe(n,r),[p.createElement(b.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===A||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),p.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(b.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(g,o,r),link:de(b.LINK,a,r),meta:de(b.META,i,r),noscript:de(b.NOSCRIPT,u,r),script:de(b.SCRIPT,c,r),style:de(b.STYLE,l,r),title:de(b.TITLE,{title:f,titleAttributes:d},r)}},me=s()((function(e){return{baseTag:X([T,x],e),bodyAttributes:V(y,e),defer:Q(e,_),encode:Q(e,I),htmlAttributes:V(g,e),linkTags:J(b.LINK,[S,T],e),metaTags:J(b.META,[k,E,O,L,C],e),noscriptTags:J(b.NOSCRIPT,[A],e),onChangeClientState:G(e),scriptTags:J(b.SCRIPT,[j,A],e),styleTags:J(b.STYLE,[w],e),title:Z(e),titleAttributes:V(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),pe)((function(){return null})),he=(o=me,i=a=function(e){function t(){return F(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TITLE:return z({},o,((t={})[r.type]=i,t.titleAttributes=z({},a),t));case b.BODY:return z({},o,{bodyAttributes:z({},a)});case b.HTML:return z({},o,{htmlAttributes:z({},a)})}return z({},o,((n={})[r.type]=z({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(q(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(p.Component),a.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind,t.default=he},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return r.createElement(s,i({attr:i({},e.attr)},t),c(e.child))}}function s(e){var t=function(t){var n,o=e.attr,a=e.size,c=e.title,l=u(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",u),f}}},4599:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){return r.createElement("a",Object.assign({},e,{target:"_blank",rel:"noreferrer"}))}},3126:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7294),o=n(9499),a=n(3201),i=n(5093),u=n(7298),c=n(5444),l=n(4599),s="LinksListElement-module--linksListElementAnchor--U9P7+",f=function(e){var t=e.link;return r.createElement("li",{className:"LinksListElement-module--linksListElement--c7Xyq"},t.isExternal?r.createElement(l.Z,{href:t.href,className:s},t.label):r.createElement(i.Link,{to:""+t.href,className:s,activeClassName:"LinksListElement-module--linksListElementAnchorActive--U8i3U"},t.label))},d=function(){var e=(0,c.useStaticQuery)("945847551").allNavigationLinksJson.nodes;return r.createElement("ul",{className:"LinksList-module--linksList--L6hUE"},e.map((function(e){return r.createElement(f,{key:e.label,link:e})})))},p=function(e){var t=e.lang,n=e.children,o=(0,i.useI18next)(),a=o.language,u=o.changeLanguage;return t===a?r.createElement(r.Fragment,null,n):r.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),u(t)},className:"LangSwitcher-module--langSwitcherLink--viYvN"},n)},m=function(){return r.createElement("div",{className:"LangSwitchersList-module--langSwitcherList--3h+p-"},r.createElement(a.ssk,null)," ",r.createElement(p,{lang:"ja"},"日本語")," |"," ",r.createElement(p,{lang:"en"},"English"))},h=[{label:"Twitter",href:"https://twitter.com/Arthur1__",icon:r.createElement(a.fWC,null)},{label:"Facebook",href:"https://www.facebook.com/arthur1hope",icon:r.createElement(a.Am9,null)},{label:"GitHub",href:"https://github.com/Arthur1",icon:r.createElement(a.hJX,null)}],y=function(){return r.createElement("ul",{className:"SnsList-module--snsList--MC0Fy"},h.map((function(e){return r.createElement("li",{className:"SnsList-module--snsListElement--zkr3L",key:e.label},r.createElement(l.Z,{href:e.href,className:"SnsList-module--snsListElementAnchor--zQUD1","aria-label":e.label},e.icon))})))},g=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"Navigation-module--logoBox--KGRV2"},r.createElement(i.Link,{to:"/"},r.createElement(u.Z,{className:"Navigation-module--logo--N6Ez8"}))),r.createElement("div",{className:"Navigation-module--siteTitle--kzgM2"},"Arthur's Portfolio"),r.createElement("nav",null,r.createElement(d,null),r.createElement(m,null),r.createElement(y,null),r.createElement("small",{className:"Navigation-module--copyright--DE+y+"},"© 2020-2021 Arthur")))},v=function(e){var t=e.children,n=(0,r.useState)(!1),i=n[0],u=n[1],c=(0,r.useState)(!1),l=c[0],s=c[1],f=function(){u(!1)},d="Layout-module--navBox--XfeS4";i&&(d+=" Layout-module--navBoxIsOpen--2E3tA");var p="Layout-module--toggleButtonBox--oSKS7";!i&&l&&(p+=" Layout-module--openButtonBoxBlack--4e++o");var m=(0,r.useCallback)((function(){var e=window.scrollY;s(e>175)}),[]);return(0,r.useEffect)((function(){return document.addEventListener("scroll",m,{passive:!0}),function(){return document.removeEventListener("scroll",m)}}),[i]),(0,r.useEffect)((function(){return o.globalHistory.listen((function(){f()}))}),[]),r.createElement("div",{className:"Layout-module--baseWrapper--f1nje"},r.createElement("header",{className:d},r.createElement(g,null)),r.createElement("main",{className:"Layout-module--mainBox--lZrF3"},t),r.createElement("div",{className:p},i?r.createElement(a.aHS,{onClick:f}):r.createElement(a.Fm7,{onClick:function(){u(!0)}})))}},7298:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.className;return r.createElement("img",{src:"/images/logo.svg",className:t,alt:"Logo of Arthur's Portfolio",width:407,height:127})}},9438:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.Helmet=void 0;var o=r(n(7316)),a=r(n(7294)),i=n(5414),u=n(3396),c=["children"];t.Helmet=function(e){var t=e.children,n=(0,o.default)(e,c),r=(0,u.useI18next)(),l=r.languages,s=r.language,f=r.originalPath,d=r.defaultLanguage,p=r.siteUrl,m=void 0===p?"":p,h=function(e){var t=m+(e===d?"":"/"+e)+f;return t.endsWith("/")?t:t+"/"};return a.default.createElement(i.Helmet,n,a.default.createElement("html",{lang:s}),a.default.createElement("link",{rel:"canonical",href:h(s)}),l.map((function(e){return a.default.createElement("link",{rel:"alternate",key:e,href:h(e),hrefLang:e})})),a.default.createElement("link",{rel:"alternate",href:h(d),hrefLang:"x-default"}),t)}},439:function(e,t,n){"use strict";var r=n(5318),o=n(862);t.__esModule=!0,t.Link=void 0;var a=r(n(7154)),i=r(n(7316)),u=o(n(7294)),c=n(9604),l=n(5444),s=n(8742),f=["language","to","onClick"],d=u.default.forwardRef((function(e,t){var n=e.language,r=e.to,o=e.onClick,d=(0,i.default)(e,f),p=(0,u.useContext)(c.I18nextContext),m=n||p.language,h=""+function(e){return p.generateDefaultLanguagePage||e!==p.defaultLanguage?"/"+e:""}(m)+r;return u.default.createElement(l.Link,(0,a.default)({},d,{to:h,innerRef:t,hrefLang:m,onClick:function(e){n&&localStorage.setItem(s.LANGUAGE_KEY,n),o&&o(e)}}))}));t.Link=d},6535:function(e,t,n){"use strict";t.__esModule=!0;var r=n(2530);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var o=n(9604);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||(t[e]=o[e]))}));var a=n(3396);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var i=n(439);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}));var u=n(9438);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===u[e]||(t[e]=u[e]))}))},3396:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.useI18next=void 0;var o=r(n(7154)),a=n(2530),i=n(7294),u=n(5444),c=n(9604),l=n(8742);t.useI18next=function(e,t){var n=(0,a.useTranslation)(e,t),r=n.i18n,s=n.t,f=n.ready,d=(0,i.useContext)(c.I18nextContext),p=d.routed,m=d.defaultLanguage,h=d.generateDefaultLanguagePage,y=function(e){return h||e!==m?"/"+e:""};return(0,o.default)({},d,{i18n:r,t:s,ready:f,navigate:function(e,t){var n=y(d.language),r=p?""+n+e:""+e;return(0,u.navigate)(r,t)},changeLanguage:function(e,t,n){var r=""+y(e)+(t||function(e){if(!p)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;return localStorage.setItem(l.LANGUAGE_KEY,e),(0,u.navigate)(r,n)}})}},5093:function(e,t,n){e.exports=n(6535)}}]);
//# sourceMappingURL=commons-cc628eeb72fd52a9d6e2.js.map