"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7504],{63433:(e,t,a)=>{a.d(t,{o:()=>_});var n=a(59496),i=a(652),l=a(28669),r=a(37261),s=a(4637);const c=n.memo((function({text:e,onTimeStampClick:t,children:a,className:l,enableTimestamps:c=!1}){const o=(0,n.useMemo)((()=>(0,s.jsx)(r.w,{html:e,onTimeStampClick:t,enableTimestamps:c})),[e,c,t]);return(0,s.jsxs)(i.D,{as:"div",variant:"ballad",className:l,children:[o,a]})})),o="EBLEo2u6UDcK37liXPVw",m=(0,n.memo)((function({text:e,onTimeStampClick:t,onToggle:a,className:n,enableTimestamps:r}){return(0,s.jsx)(c,{className:n,text:e,onTimeStampClick:t,enableTimestamps:r,children:(0,s.jsx)("button",{"aria-expanded":!1,className:o,onClick:a,children:(0,s.jsxs)(i.D,{variant:"balladBold",children:["… ",l.ag.get("mwp.see.more")]})})})})),d=(e,t,a)=>{const n=l.ag.get("mwp.see.more").length,i=e.length+n+6;return a<=1&&i<t},u=(0,n.memo)((function({paragraphs:e,clickHandler:t,maxCharactersPerLine:a,maxLines:n,toggleExpandedState:i,className:r,enableTimestamps:o}){let u=!1,h=0;const g=e.map(((g,p)=>{const x=Math.round(g.length/a);if(h+=x>0?x:1,u)return null;const f=n-(h-x);if(!(p+1===e.length&&(d(g,a,f)||x<=f))&&h>=n){u=!0;const e=((e,t,a)=>{const n=l.ag.get("mwp.see.more").length;if(d(e,t,a))return e;const i=t*a-n-6;return e.slice(0,i)})(g,a,f);return(0,s.jsx)(m,{text:e,onTimeStampClick:t,onToggle:i,className:r,enableTimestamps:o},p)}return(0,s.jsx)(c,{className:r,text:g,onTimeStampClick:t,enableTimestamps:o},p)})).filter((e=>null!==e)).map(((e,t,a)=>t+1===a.length?e:[e," "])).flat();return(0,s.jsx)(s.Fragment,{children:g})}));var h=a(53525);const g="TQXhY8PT8v1vogxO85c_",p="RKzJftL6TOVUXkXOPykT",x="PEODYhy3IOufoACR6vf2",f="mCKPqUiNNAO6GM3nRBXe",b={isOpen:null,contentWidth:0},j=(e,t)=>({...e,...t}),C=(e="")=>e.split(/[ \u00a0]{2}/).filter(Boolean),v=(e="")=>e.replace("<p>","").split(/(?:<\/p>)/).filter(Boolean),_=(0,n.memo)((function({content:e,htmlContent:t,maxLines:a=2,className:o,onTimeStampClick:m=(()=>{}),onExpanded:d,enableTimestamps:_=!1}){const[k,N]=(0,n.useReducer)(j,b),{isOpen:S,contentWidth:T}=k,w=(0,n.useRef)(null),y=(0,n.useCallback)((()=>{N({isOpen:!S}),d&&d(!S)}),[S,d]);(0,n.useEffect)((()=>{N({isOpen:null})}),[e]),(0,n.useEffect)((()=>{null!==k.isOpen&&w.current?.querySelector("button[aria-expanded]")?.focus()}),[k.isOpen]);const E=T?T/7.8:Number.MAX_VALUE,O=(0,n.useCallback)((e=>{e&&(w.current=e,N({contentWidth:e.clientWidth}))}),[]),D=(0,n.useMemo)((()=>t?v(t).map((e=>(0,s.jsx)(r.w,{html:e,onTimeStampClick:m,enableTimestamps:_},e))):((e,t,a)=>C(e).map(((e,n)=>(0,s.jsx)(c,{className:p,text:e,onTimeStampClick:t,enableTimestamps:a},n))))(e,m,_)),[e,_,t,m]),P=(0,n.useMemo)((()=>t?v(t):C(e)),[e,t]);return(0,h.a)((()=>{w.current&&N({contentWidth:w.current.clientWidth})})),(0,s.jsx)("div",{className:o,children:(0,s.jsxs)("div",{ref:O,className:g,children:[S&&(0,s.jsxs)(s.Fragment,{children:[D,(0,s.jsx)("button",{"aria-expanded":!0,className:f,onClick:y,children:(0,s.jsx)(i.D,{className:x,variant:"balladBold",children:l.ag.get("show_less")})})]}),!S&&(0,s.jsx)(u,{className:p,paragraphs:P,clickHandler:m,enableTimestamps:_,maxCharactersPerLine:E,maxLines:a,toggleExpandedState:y})]})})}))},37261:(e,t,a)=>{a.d(t,{w:()=>x});var n=a(59496),i=a(4417),l=a.n(i),r=a(652),s=a(83429),c=a(38696);const o=/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g;const m="playlist-playlist-playlistDescription",d="QD13ZfPiO5otS0PU89wG",u="ZbLneLRe2x_OBOYZMX3M",h="rjdQaIDkSgcGmxkdI2vU",g="umouqjSkMUbvF4I_Xz6r";var p=a(4637);const x=n.memo((function({html:e,onTimeStampClick:t,enableTimestamps:a=!1,semanticColor:i="textSubdued"}){const r=(0,n.useMemo)((()=>{const n=a?e.split(o).map((e=>e.match(o)?`(<time>${e.replace("(","").replace(")","")}</time>)`:e)).join(""):e;let r;try{r=l()(n,{transform:f(t,i),dangerouslySetChildren:[]})}catch{r=e}return r}),[a,e,t,i]);return(0,p.jsx)("div",{className:m,children:r})}));function f(e,t){let a=0;return{p:e=>(0,p.jsx)(r.D,{as:"p",variant:"ballad",semanticColor:t,className:g,children:e.children}),a:t=>t.href?.startsWith("#t=")?(0,p.jsx)(s.E,{onClick:e,children:t.children}):t.href?(0,p.jsx)(c.Link,{to:t.href,children:t.children}):(0,p.jsx)(p.Fragment,{children:t.children}),ul:e=>(0,p.jsx)("ul",{className:u,children:e.children}),ol:e=>(0,p.jsx)("ol",{className:u,children:e.children}),li:e=>(0,p.jsx)(r.D,{as:"li",variant:"ballad",semanticColor:t,className:h,children:e.children}),br:()=>(0,p.jsx)("br",{}),h1:e=>(0,p.jsx)(r.D,{as:"h1",variant:"balladBold",semanticColor:t,className:d,children:e.children}),h2:e=>(0,p.jsx)(r.D,{as:"h2",variant:"balladBold",semanticColor:t,className:d,children:e.children}),h3:e=>(0,p.jsx)(r.D,{as:"h3",variant:"balladBold",semanticColor:t,className:d,children:e.children}),h4:e=>(0,p.jsx)(r.D,{as:"h4",variant:"balladBold",semanticColor:t,className:d,children:e.children}),h5:e=>(0,p.jsx)(r.D,{as:"h5",variant:"balladBold",semanticColor:t,className:d,children:e.children}),h6:e=>(0,p.jsx)(r.D,{as:"h6",variant:"balladBold",semanticColor:t,className:d,children:e.children}),time:t=>(0,p.jsx)(s.E,{onClick:e,children:t.children}),_:(e,t,i)=>{const l=void 0===t?e:i;return(0,p.jsx)(n.Fragment,{children:l},"fragment"+a++)}}}},62217:(e,t,a)=>{a.d(t,{V:()=>s});var n=a(45947),i=a(55964),l=a(82536),r=a(1452);const s=(e,t)=>{if(!(0,n.W6)(l.sT,{loadingValue:!1})||!t)return null;if("episode"===e&&t.type===r.p.EPISODE&&"Made on Spotify"===t.description){const e=(0,i.EC)(t.uri)?.id;return e?`/user-song/${e}`:null}if("show"===e&&t.type===r.p.SHOW&&"All songs recorded, edited, and published on Spotify."===t.description){const e=(0,i.EC)(`spotify:user:${t.publisherName}`);return(0,i.EC)(e).toURLPath(!0)}return null}},54655:(e,t,a)=>{a.d(t,{C:()=>r});var n=a(59496),i=a(75859),l=a(4637);const r=({pageId:e,uri:t,children:a})=>{const r=(0,i.b)(),s=(0,i.H)();return(0,n.useEffect)((()=>{r?.reportPageView({pageId:e,navigationalRoot:s??void 0,entityUri:t})}),[e,s,r,t]),(0,l.jsx)(l.Fragment,{children:a})}},92758:(e,t,a)=>{a.d(t,{s:()=>u});var n=a(59496),i=a(42856);const l=e=>e<=64?"small":e>640?"xlarge":e>300?"large":"standard";function r(e,t){return e.filter((e=>e.label?e.label===t:e.width?l(e.width)===t:!!e.height&&l(e.height)===t))[0]}var s=a(69921);function c(e){const t=r(e,"standard"),a=r(e,"large"),n=r(e,"small"),i=r(e,"xlarge");return{image_url:t?.url,image_height:t?.height?.toString(),image_width:t?.width?.toString(),image_url_large:a?.url,image_height_large:a?.height?.toString(),image_width_large:a?.width?.toString(),image_url_small:n?.url,image_height_small:n?.height?.toString(),image_width_small:n?.width?.toString(),image_url_xlarge:i?.url,image_height_xlarge:i?.height?.toString(),image_width_xlarge:i?.width?.toString()}}var o=a(18169),m=a(10687),d=a(1452);function u(e,t){const a=(0,i.o)(),l=(0,o.g)(),{isPlaying:r,isActive:u}=(0,m.$o)(e?.uri||""),{isActive:h}=(0,m.cR)(t?.uri||"");return(0,n.useCallback)((n=>{if(!t||!e)return;const i=function(e,t){const a=(e.coverArt?.sources||[]).sort(((e,t)=>(t.width||0)-(e.width||0))),n=(0,s.Xb)(e,t),i=(0,s.Ie)(t)||n;return{uri:e.uri,title:e.name,subtitle:t.name,type:"episode",album_uri:t.uri,album_title:t.name,artist_uri:t.uri,artist_name:t.name,...c(a),media_type:"audio",externalResolvedUrl:e.audio?.items?.find((e=>e.externallyHosted))?.url,isTrailer:n,anonymousPlaybackAllowed:i}}(e,t);h&&!r&&u&&!n?l.resume():h&&r&&!n?(a({type:"click",intent:"pause",targetUri:e.uri}),l.pause()):(a({type:"click",intent:"play",targetUri:e.uri}),l.play({uri:t.uri,pages:[{items:[{type:d.p.EPISODE,uri:e.uri,uid:null,metadata:i,provider:null}]}]},{referrerIdentifier:l.getReferrer(),featureIdentifier:"episode"},n))}),[u,r,h,l,a,t,e])}}}]);
//# sourceMappingURL=7504.js.map