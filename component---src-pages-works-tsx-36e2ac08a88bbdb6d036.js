"use strict";(self.webpackChunkarthur1_github_io=self.webpackChunkarthur1_github_io||[]).push([[775],{7938:function(e,t,l){l.d(t,{Z:function(){return o}});var r=l(7294),o=function(e){var t=e.children;return r.createElement("div",{className:"Container-module--container--+MeE8"},t)}},2843:function(e,t,l){l.d(t,{Z:function(){return o}});var r=l(7294),o=function(e){var t=e.children,l={backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC'), url('"+e.backgroundUrl+"')"};return r.createElement("div",{className:"Headline1-module--headlineBox--8eVnL",style:l},r.createElement("h1",{className:"Headline1-module--headline--TYTJL"},t))}},1890:function(e,t,l){l.d(t,{Z:function(){return o}});var r=l(7294),o=function(e){var t=e.children;return r.createElement("h2",{className:"Headline2-module--headline2--d1BdM"},t)}},9849:function(e,t,l){var r=l(7294),o=l(5093),a=l(5444);t.Z=function(e){var t=e.title,l=e.description,n=(0,a.useStaticQuery)("512065377").site,i=n.siteMetadata.title,c=n.siteMetadata.siteUrl;return r.createElement(o.Helmet,{title:t?t+" | "+i:i,meta:[{name:"description",content:l},{property:"og:title",content:t||i},{property:"og:description",content:l},{property:"og:site_name",content:i},{property:"og:image",content:c+"/images/ogpimage.png"}]})}},657:function(e,t,l){l.r(t),l.d(t,{default:function(){return k}});var r=l(5785),o=l(7294),a=l(5093),n=l(3126),i=l(9849),c=l(7938),d=l(2843),u=l.p+"static/works-afdbd6745e8e87bf112b2d446e2b11ba.jpg",s=l(6125),m=l(1890),b=l(4599),g=l(3201),v=l(9463),p=l(9845),C=[{devId:"php",label:"PHP",bgColor:"#777cb4",textColor:"white",icon:v.sfN},{devId:"javascript",label:"JavaScript",bgColor:"#f7df1e",textColor:"black",icon:v.vl3},{devId:"typescript",label:"TypeScript",bgColor:"#3178c6",textColor:"white",icon:v.WZi},{devId:"laravel",label:"Laravel",bgColor:"#f55247",textColor:"white",icon:v.vn6},{devId:"vue",label:"Vue.js",bgColor:"#42b883",textColor:"white",icon:v.iwP},{devId:"nuxt",label:"Nuxt.js",bgColor:"#2f495e",textColor:"white",icon:v.hEr},{devId:"bootstrap",label:"Bootstrap",bgColor:"#563e7b",textColor:"white",icon:v.BpA},{devId:"wordpress",label:"Wordpress",bgColor:"#21759b",textColor:"white",icon:g.k7O},{devId:"fuelphp",label:"FuelPHP",bgColor:"#8303d8",textColor:"white",icon:g.EXY},{devId:"python",label:"Python",bgColor:"#4584b6",textColor:"white",icon:v.Cul},{devId:"playFramework",label:"PlayFramework",bgColor:"#48661f",textColor:"white",icon:g.Dli},{devId:"scala",label:"Scala",bgColor:"#df3835",textColor:"white",icon:v.zaI},{devId:"ifttt",label:"IFTTT",bgColor:"#000000",textColor:"white",icon:v.swR},{devId:"gas",label:"Google Apps Script",bgColor:"#3e82f9",textColor:"white",icon:g.Xur},{devId:"aws",label:"AWS",bgColor:"#ff9900",textColor:"white",icon:v.Kt8},{devId:"mysql",label:"MySQL",bgColor:"#00758f",textColor:"white",icon:p.TS5},{devId:"redis",label:"Redis",bgColor:"#da2b21",textColor:"white",icon:v.NPu},{devId:"docker",label:"Docker",bgColor:"#0db7ed",textColor:"white",icon:v.VIR},{devId:"react",label:"React",bgColor:"#61dafb",textColor:"black",icon:v.pNp},{devId:"next",label:"Next.js",bgColor:"#000000",textColor:"white",icon:v.Xou}],h=function(e){var t=e.devId,l=C.find((function(e){return e.devId===t}));return l?o.createElement("span",{className:"DevBadge-module--badge--w5sKD",style:{background:l.bgColor,color:l.textColor}},(0,o.createElement)(l.icon,{className:"DevBadge-module--badgeIcon--Gi4LJ"}),l.label):o.createElement(o.Fragment,null,"hoge")},f="WorkBox-module--workBoxChild--qaDJk",w=function(e){var t=e.work,l=e.title,r=e.image,a=e.children;return o.createElement("div",{className:"WorkBox-module--workBox--K8wwa"},o.createElement("div",{className:f},o.createElement(m.Z,null,l," ",o.createElement("small",{className:"WorkBox-module--workYear--IjZwk"},"[",t.year,"]")),o.createElement("div",null,t.devs&&t.devs.map((function(e){return o.createElement(h,{devId:e,key:e})}))),o.createElement("p",null,a),o.createElement("dl",{className:"WorkBox-module--workLinks--Mx8MZ"},t.urls&&t.urls.map((function(e,t){return o.createElement(o.Fragment,{key:t},o.createElement("dt",null,o.createElement(g.gjK,null)),o.createElement("dd",null,o.createElement(b.Z,{href:e},e)))})),t.repositoryUrls&&t.repositoryUrls.map((function(e,t){return o.createElement(o.Fragment,{key:t},o.createElement("dt",null,o.createElement(g.hJX,null)),o.createElement("dd",null,o.createElement(b.Z,{href:e},e)))})))),o.createElement("div",{className:f},r&&o.createElement(s.G,{image:r,alt:l})))},k=function(e){var t=e.data,l=(0,a.useTranslation)().t,s=t.works,m=t.images,b=(0,r.Z)(s.nodes).reverse(),g=m.nodes.reduce((function(e,t){var l;return e[t.relativePath]=null===(l=t.childImageSharp)||void 0===l?void 0:l.gatsbyImageData,e}),{});return o.createElement(o.Fragment,null,o.createElement(i.Z,{title:"Works",description:l("description")}),o.createElement(n.Z,null,o.createElement(d.Z,{backgroundUrl:u},"Works"),o.createElement(c.Z,null,b.map((function(e){return o.createElement(w,{title:l(e.key+".title"),work:e,key:e.key,image:g[e.image]},l(e.key+".description"))})))))}}}]);
//# sourceMappingURL=component---src-pages-works-tsx-36e2ac08a88bbdb6d036.js.map