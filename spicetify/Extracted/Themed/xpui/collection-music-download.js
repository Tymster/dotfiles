"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[4246],{90955:(e,a,r)=>{r.d(a,{z:()=>m});var s=r(21291),i=r(48367),n=r(46006),t=r(63199),u=r(53549),c=r(1452),o=r(26082),l=r(4637);function m(e,a){switch(e.type){case c.p.ALBUM:return(0,l.jsx)(s.r,{uri:e.uri,name:e.name,images:e.images,sharingInfo:null,artists:e.artists,index:a},e.uri);case c.p.ARTIST:return(0,l.jsx)(i.I,{uri:e.uri,name:e.name,images:e.images,index:a},e.uri);case c.p.SHOW:return(0,l.jsx)(u._,{uri:e.uri,name:e.name,images:e.images,publisher:e.publisher,sharingInfo:null,mediaType:o.E.UNKNOWN,index:a},e.uri);case c.p.AUDIOBOOK:return(0,l.jsx)(n.c,{uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,index:a},e.uri);case c.p.PLAYLIST:return(0,l.jsx)(t.Z,{uri:e.uri,name:e.name,images:e.images,description:"",authorName:e.creatorName,index:a},e.uri);default:return null}}},72401:(e,a,r)=>{r.r(a),r.d(a,{LibraryMusicDownloads:()=>g,default:()=>h});var s=r(59496),i=r(652),n=r(28669),t=r(90955),u=r(27521),c=r(91799),o=r(77634),l=r(5679),m=r(24044),d=r(4637);const g=(0,s.memo)((function(){const{isLoading:e,hasError:a,items:r}=(0,l.G)();return e||a?(0,d.jsx)(u.h,{hasError:a,errorMessage:n.ag.get("error.request-collection-music-downloads-failure")}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.D,{as:"h1",variant:"canon",className:m.Z.header,children:n.ag.get("music_downloads")}),(0,d.jsx)(o.ZP,{value:"EntitiesGrid",children:(0,d.jsx)(c.T,{render:()=>r.map(((e,a)=>(0,d.jsx)(o.ZP,{value:"card",index:a,children:(0,t.z)(e,a)},e.uri)))})})]})})),h=g},5679:(e,a,r)=>{r.d(a,{G:()=>n});var s=r(59496),i=r(71943);function n(){const e=(0,i.t)(),[a,r]=(0,s.useState)(!0),[n,t]=(0,s.useState)(!1),[u,c]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{try{const a=await e.getDownloads();c(a)}catch(e){t(!0)}finally{r(!1)}})()}),[e]),{isLoading:a,hasError:n,items:u}}}}]);
//# sourceMappingURL=collection-music-download.js.map