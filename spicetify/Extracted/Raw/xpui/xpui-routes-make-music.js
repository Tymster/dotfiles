"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5786],{37261:(e,a,t)=>{t.d(a,{w:()=>x});var r=t(59496),l=t(4417),s=t.n(l),n=t(652),i=t(83429),c=t(38696);const o=/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g;const d="playlist-playlist-playlistDescription",u="QD13ZfPiO5otS0PU89wG",m="ZbLneLRe2x_OBOYZMX3M",h="rjdQaIDkSgcGmxkdI2vU",p="umouqjSkMUbvF4I_Xz6r";var j=t(4637);const x=r.memo((function({html:e,onTimeStampClick:a,enableTimestamps:t=!1,semanticColor:l="textSubdued"}){const n=(0,r.useMemo)((()=>{const r=t?e.split(o).map((e=>e.match(o)?`(<time>${e.replace("(","").replace(")","")}</time>)`:e)).join(""):e;let n;try{n=s()(r,{transform:g(a,l),dangerouslySetChildren:[]})}catch{n=e}return n}),[t,e,a,l]);return(0,j.jsx)("div",{className:d,children:n})}));function g(e,a){let t=0;return{p:e=>(0,j.jsx)(n.D,{as:"p",variant:"ballad",semanticColor:a,className:p,children:e.children}),a:a=>a.href?.startsWith("#t=")?(0,j.jsx)(i.E,{onClick:e,children:a.children}):a.href?(0,j.jsx)(c.Link,{to:a.href,children:a.children}):(0,j.jsx)(j.Fragment,{children:a.children}),ul:e=>(0,j.jsx)("ul",{className:m,children:e.children}),ol:e=>(0,j.jsx)("ol",{className:m,children:e.children}),li:e=>(0,j.jsx)(n.D,{as:"li",variant:"ballad",semanticColor:a,className:h,children:e.children}),br:()=>(0,j.jsx)("br",{}),h1:e=>(0,j.jsx)(n.D,{as:"h1",variant:"balladBold",semanticColor:a,className:u,children:e.children}),h2:e=>(0,j.jsx)(n.D,{as:"h2",variant:"balladBold",semanticColor:a,className:u,children:e.children}),h3:e=>(0,j.jsx)(n.D,{as:"h3",variant:"balladBold",semanticColor:a,className:u,children:e.children}),h4:e=>(0,j.jsx)(n.D,{as:"h4",variant:"balladBold",semanticColor:a,className:u,children:e.children}),h5:e=>(0,j.jsx)(n.D,{as:"h5",variant:"balladBold",semanticColor:a,className:u,children:e.children}),h6:e=>(0,j.jsx)(n.D,{as:"h6",variant:"balladBold",semanticColor:a,className:u,children:e.children}),time:a=>(0,j.jsx)(i.E,{onClick:e,children:a.children}),_:(e,a,l)=>{const s=void 0===a?e:l;return(0,j.jsx)(r.Fragment,{children:s},"fragment"+t++)}}}},57988:(e,a,t)=>{t.r(a),t.d(a,{default:()=>k});var r=t(59496),l=t(28669),s=t(27521),n=t(77646),i=t(652),c=t(55964),o=t(37261);const d="nV_0UjulnuGnBYzXiFRd",u="F2fw42rcgQCHUh82jc3U";var m=t(4637);const h=()=>{const e=(0,n.v9)((e=>e.session.user?.uri)),a=(0,c.EC)(e).toURLPath(!0);return(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)(i.D,{variant:"forte",semanticColor:"textBase",dir:"auto",children:l.ag.get("web-player.soundtrap.title")}),(0,m.jsx)(i.D,{variant:"ballad",semanticColor:"textBase",dir:"auto",children:l.ag.get("web-player.soundtrap.subtitle.text")}),(0,m.jsx)(i.D,{variant:"ballad",semanticColor:"textBase",dir:"auto",children:l.ag.get("web-player.soundtrap.confidential")}),(0,m.jsx)(o.w,{html:l.ag.get("web-player.soundtrap.subtitle.link",a),semanticColor:"textBase",onTimeStampClick:()=>{}})]})};var p=t(83821),j=t(92053),x=t(95787);var g=t(50547);var f=t(56568),b=t(79729);const C=({templates:e,title:a,onClick:t})=>(0,m.jsx)(f.P,{title:a,className:u,children:e.map(((e,a)=>(0,m.jsx)(b.t,{project:e,index:a,onClick:t},`template-${e.key}`)))}),k=(0,r.memo)((()=>{const{templates:e}=function(){const[e,a]=(0,r.useState)(null),t=(0,x.z)(),l=(0,r.useCallback)((async()=>{const e=await t.getTemplates({query:"",page_number:0,result_per_page:6,sort_by:""});a(e.projects)}),[t]);return(0,r.useEffect)((()=>{l()}),[l]),{templates:e}}(),{playlists:a}=(0,g.u)(),{forkAndNavigate:t,error:n,loading:i}=function(){const e=(0,j.s0)(),[a,t]=(0,r.useState)(null),[l,s]=(0,r.useState)(!1),n=(0,x.z)();return{forkAndNavigate:(0,r.useCallback)((async a=>{s(!0);try{const{project:t}=await n.forkProject({projectKey:a});e(`/make-music/studio/${t.originalTrackUri}/${t.soundtrapProjectId}`)}catch(e){t("Could not navigate to project, forking failed")}s(!1)}),[e,t,n]),error:a,loading:l}}();if(!e||n||i||!a)return(0,m.jsx)(s.h,{hasError:!!n,errorMessage:n??l.ag.get("web-player.soundtrap.error.request-templates-failure")});const c=e.reduce(((e,a)=>(e[a.genre]??=[],e[a.genre].push(a),e)),{});return(0,m.jsxs)("div",{className:"contentSpacing",id:"makeMusicPage",children:[(0,m.jsx)(h,{}),Object.entries(c).map((([e,a])=>(0,m.jsx)(C,{templates:a,title:e,onClick:t},`template-shelf-${e}`))),(0,m.jsx)(p.W,{playlists:a,title:"Hear what others are creating"})]})}))},83821:(e,a,t)=>{t.d(a,{W:()=>n});var r=t(63199),l=t(56568),s=t(4637);const n=({playlists:e,title:a,showAll:t=!1})=>(0,s.jsx)(l.P,{total:e.length,title:a,seeAllUri:"/make-music/playlists",showSeeAll:!0,showAll:t,children:e.map(((e,a)=>(0,s.jsx)(r.Z,{uri:e.playlistUri,name:e.title,images:[{url:e.imageUri}],description:e.description,authorName:e.author,index:a},e.playlistUri)))})},79729:(e,a,t)=>{t.d(a,{t:()=>i});var r=t(13329),l=t(75420),s=t(86184),n=t(4637);const i=({project:e,index:a,onClick:t})=>(0,n.jsx)(r.C,{index:a,onClick:()=>t(e.key),headerText:e.title,featureIdentifier:"make_music",uri:e.originalTrackUri,delegateNavigation:!0,renderCardImage:()=>(0,n.jsx)(l.x,{images:[{url:e.imageUri}]}),renderSubHeaderContent:()=>(0,n.jsx)(s.NB,{source:e.templateDescription})})},50547:(e,a,t)=>{t.d(a,{u:()=>s});var r=t(59496),l=t(95787);const s=()=>{const[e,a]=(0,r.useState)(null),t=(0,r.useRef)(!1),s=(0,l.z)(),n=(0,r.useCallback)((async()=>{const e=await s.getPlaylists({query:"",page_number:0,result_per_page:6,sort_by:""});t.current&&a(e.playlists)}),[s]);return(0,r.useEffect)((()=>(t.current=!0,n(),()=>{t.current=!1})),[n]),{playlists:e,fetchPlaylists:n}}}}]);
//# sourceMappingURL=xpui-routes-make-music.js.map