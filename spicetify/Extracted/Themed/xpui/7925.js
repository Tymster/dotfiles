"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7925],{95547:(e,s,i)=>{i.d(s,{Z:()=>t});var r=i(13329),a=i(75420),n=i(4637);const t=({name:e,uri:s,images:i,isHero:t,testId:d,description:o,index:c,requestId:l,color:u})=>(0,n.jsx)(r.C,{index:c,featureIdentifier:"artist_concerts",headerText:e,uri:s,isPlayable:!1,renderCardImage:()=>(0,n.jsx)(a.x,{isHero:t,images:i,color:u}),renderSubHeaderContent:()=>(0,n.jsx)("span",{children:o||""}),testId:d,requestId:l})},97925:(e,s,i)=>{i.d(s,{q:()=>H});var r=i(55964),a=i(73127),n=i(13329),t=i(75420),d=i(7785),o=i(78791),c=i(4637);const l=({name:e="",uri:s="",images:i=[],isHero:r,onClick:a,testId:l,index:u})=>r?(0,c.jsx)(d.Z,{featureIdentifier:"unknown",index:u,onClick:a,headerText:e,uri:s,isPlayable:!1,renderCardImage:()=>(0,c.jsx)(t.x,{isHero:r,images:i}),renderSubHeaderContent:()=>(0,c.jsx)(o.k,{}),testId:l}):(0,c.jsx)(n.C,{index:u,featureIdentifier:"unknown",onClick:a,headerText:e,uri:s,isPlayable:!1,renderCardImage:()=>(0,c.jsx)(t.x,{isHero:r,images:i}),renderSubHeaderContent:()=>(0,c.jsx)("span",{}),testId:l});var u=i(64107),m=i(26082),x=i(90428),g=i(21291),I=i(48367),p=i(95547),h=i(42466),j=i(38992),f=i(63199),C=i(52528),b=i(13810),k=i(53549),y=i(95783);const H=({entity:e,index:s,testId:i,isHero:n=!1})=>{const t=((0,r.EC)(e.uri)||{}).type,d={testId:i,isHero:n,index:s,sharingInfo:e.sharingInfo};if(("string"==typeof e.uri||e.uri instanceof String)&&e.uri.startsWith("spotify:merch:"))return(0,c.jsx)(j.T,{...d,name:e.name,uri:e.uri,href:e.href,images:e.images,description:e.description});if(("string"==typeof e.uri||e.uri instanceof String)&&e.uri.startsWith("spotify:artist:")&&e.uri.endsWith(":concerts"))return(0,c.jsx)(p.Z,{...d,name:e.name,uri:e.uri,images:e.images,description:e.description});switch(t){case r.JM.ALBUM:case r.JM.COLLECTION_ALBUM:{const s=e;return(0,c.jsx)(g.r,{...d,name:s.name,uri:s.uri,images:s.images,artists:s.artists})}case r.JM.ARTIST:{const s=e;return(0,c.jsx)(I.I,{...d,name:s.name,uri:s.uri,images:s.images})}case r.JM.EPISODE:{const s=e;return(0,c.jsx)(h.B,{...d,name:s.name,uri:s.uri,images:s.images,showImages:s.show?.images||[],durationMilliseconds:s.duration_ms,releaseDate:s.release_date,resume_point:s.resume_point,description:s.description,isExplicit:s.explicit,is19PlusOnly:!!s.tags?.includes("MOGEF-19+")})}case r.JM.PLAYLIST:case r.JM.PLAYLIST_V2:{const s=e,i=s.owner?.display_name||e.owner?.displayName||"";return(0,c.jsx)(f.Z,{...d,name:s.name,uri:s.uri,images:s.images,description:s.description,authorName:i})}case r.JM.PROFILE:return(0,c.jsx)(C.P,{...d,name:e.name,uri:e.uri,images:e.images});case r.JM.SHOW:{const s=e;return(0,c.jsx)(k._,{...d,name:s.name,uri:s.uri,images:s.images,publisher:s.publisher,mediaType:{audio:m.E.AUDIO,video:m.E.VIDEO,mixed:m.E.MIXED}[s.media_type]??m.E.AUDIO})}case r.JM.APPLICATION:return(0,c.jsx)(a.s,{...d,name:e.name,uri:e.uri,images:e.images,description:e.description});case r.JM.RADIO:return(0,c.jsx)(b.I,{testId:i,index:s,name:e.name,uri:e.uri,images:e.images});case r.JM.TRACK:{const s=e;return(0,c.jsx)(y.G,{...d,name:s.name,uri:s.uri,images:s.album?.images||[],artists:s.artists,album:s.album,isExplicit:s.explicit,is19PlusOnly:s.tags?.includes("MOGEF-19+")})}case r.JM.COLLECTION:return e.uri.endsWith("your-episodes")?(0,c.jsx)(x.T,{index:s}):(0,c.jsx)(u.p,{index:s});default:return console.warn("Rendering a generic Card for unknown type:",t),(0,c.jsx)(l,{...d,name:e.name,uri:e.uri,images:e.images})}}},42466:(e,s,i)=>{i.d(s,{B:()=>N});var r=i(28669),a=i(42551),n=i(8285),t=i(29928),d=i(49643),o=i(71834),c=i(43806),l=i(70812),u=i(70745),m=i(13329),x=i(75420),g=i(59496),I=i(652),p=i(24543),h=i(62795);const j="z4popIk32AsyDKlV1o1v",f="_xxuonqkZEQ7pCffxlUD";var C=i(4637);const b=(0,g.memo)((function(e){const{src:s,description:i,...r}=e,[a,n]=(0,g.useState)("inherit");return(0,g.useEffect)((()=>{s&&async function(e){const{colorRaw:s}=await(0,h.extractColors)(e),{h:i,s:r,l:a}=s.hsl,t=`hsl(${360*i}, ${100*r}%, ${Math.min(100*a,30)}%)`;n(t)}(s)}),[s]),s?(0,C.jsx)("div",{className:j,style:{backgroundColor:a},"data-testid":"episode-fallback-image-container",children:(0,C.jsx)("div",{className:f,children:(0,C.jsx)(I.D,{as:"p",variant:"canon",children:i})})}):(0,C.jsx)(p.J,{...r,iconSize:64})}));var k=i(7785),y=i(78791);const H="x1FErCk9Xh9VumpOLyfm",w="heeHk6hz8sAXLIU6P6an",E="Hhfi1xnYwoHoMP2rcltS",N=({description:e,isExplicit:s,images:i,name:g,uri:I,durationMilliseconds:p,releaseDate:h,resume_point:j,showImages:f,sharingInfo:N,is19PlusOnly:S,isHero:M,onClick:P,testId:T,index:_,requestId:O,color:v})=>{let L;const q=h?new Date(h):void 0,D=q&&!isNaN(q.getTime())&&!isNaN(p),A=(0,l.X)(f,{desiredSize:48}),J=(0,o.G3)(I,q?.toISOString(),j?.resume_position_ms,j?.fully_played);return L=M?(0,C.jsx)(k.Z,{index:_,onClick:P,headerText:g,featureIdentifier:"episode",uri:I,isPlayable:!1,isDownloadable:!0,hasNewEpisodeIndicator:J,renderCardImage:()=>(0,C.jsx)(x.x,{isHero:!0,images:i,color:v,FallbackComponent:s=>(0,C.jsx)(b,{...s,description:e,src:A&&A.url}),children:A&&(0,C.jsx)(d.E,{loading:"lazy",src:A.url,className:H,radius:4})}),renderSubHeaderContent:()=>(0,C.jsxs)(C.Fragment,{children:[s&&!S&&(0,C.jsx)(n.N,{className:w}),S&&(0,C.jsx)(t.X,{size:16,className:w}),D&&(0,C.jsxs)("span",{className:E,children:[q&&(0,c.rL)(q)," ·"," ",r.ag.get("episode.length",Math.ceil(p/6e4))]}),(0,C.jsx)(y.k,{children:r.ag.get("card.tag.episode")})]}),testId:T,requestId:O}):(0,C.jsx)(m.C,{index:_,onClick:P,headerText:g,featureIdentifier:"episode",uri:I,isPlayable:!1,isDownloadable:!0,hasNewEpisodeIndicator:J,renderCardImage:()=>(0,C.jsx)(x.x,{images:i,color:v,FallbackComponent:s=>(0,C.jsx)(b,{...s,description:e,src:A&&A.url}),children:A&&(0,C.jsx)(d.E,{loading:"lazy",src:A.url,className:H,radius:4,testid:"episode-card-show-image"})}),renderSubHeaderContent:()=>(0,C.jsxs)(C.Fragment,{children:[s&&!S&&(0,C.jsx)(n.N,{className:w}),S&&(0,C.jsx)(t.X,{size:16,className:w}),D&&(0,C.jsxs)("span",{className:E,children:[q&&(0,c.rL)(q)," ·"," ",r.ag.get("episode.length",Math.ceil(p/6e4))]})]}),testId:T,requestId:O}),(0,C.jsx)(a._,{menu:(0,C.jsx)(u.k,{uri:I,sharingInfo:N}),children:L})}},73127:(e,s,i)=>{i.d(s,{s:()=>c});var r=i(28669),a=i(13329),n=i(75420),t=i(7785),d=i(78791),o=i(4637);const c=({name:e,uri:s,images:i,isHero:c,onClick:l,testId:u,description:m,index:x,requestId:g,color:I})=>c?(0,o.jsx)(t.Z,{featureIdentifier:"genre",index:x,onClick:l,headerText:e,uri:s,isPlayable:!1,renderCardImage:()=>(0,o.jsx)(n.x,{isHero:c,images:i,color:I}),renderSubHeaderContent:()=>(0,o.jsx)(d.k,{children:m||r.ag.get("card.tag.genre")}),testId:u,requestId:g}):(0,o.jsx)(a.C,{index:x,featureIdentifier:"genre",onClick:l,headerText:e,uri:s,isPlayable:!1,renderCardImage:()=>(0,o.jsx)(n.x,{isHero:c,images:i,color:I}),renderSubHeaderContent:()=>(0,o.jsx)("span",{children:m||""}),testId:u,requestId:g})},38992:(e,s,i)=>{i.d(s,{T:()=>t});var r=i(13329),a=i(75420),n=i(4637);const t=({name:e,uri:s,href:i,images:t,isHero:d,testId:o,description:c,index:l,requestId:u,color:m})=>(0,n.jsx)(r.C,{index:l,featureIdentifier:"merch",onClick:()=>{window.open(i,"_blank")},headerText:e,uri:s,isPlayable:!1,renderCardImage:()=>(0,n.jsx)(a.x,{isHero:d,images:t,color:m}),renderSubHeaderContent:()=>(0,n.jsx)("span",{children:c||""}),testId:o,requestId:u,delegateNavigation:!0})},52528:(e,s,i)=>{i.d(s,{P:()=>x});var r=i(59496),a=i(67688),n=i(28669),t=i(42551),d=i(58930),o=i(13329),c=i(75420),l=i(7785),u=i(78791),m=i(4637);const x=r.memo((function(e){const{images:s,name:i,uri:x,onClick:g,isHero:I,testId:p,index:h,requestId:j,color:f}=e;let C;const b=(0,r.useCallback)((()=>(0,m.jsx)(c.x,{isCircular:!0,isHero:I,images:s,color:f,FallbackComponent:e=>(0,m.jsx)(a.a,{iconSize:64,...e})})),[f,s,I]),k=(0,r.useCallback)((()=>I?(0,m.jsx)(u.k,{children:n.ag.get("card.tag.profile")}):n.ag.get("card.tag.profile")),[I]);return C=I?(0,m.jsx)(l.Z,{index:h,onClick:g,headerText:i,featureIdentifier:"profile",uri:x,isPlayable:!1,renderCardImage:b,renderSubHeaderContent:k,testId:p,requestId:j}):(0,m.jsx)(o.C,{index:h,onClick:g,headerText:i,featureIdentifier:"profile",uri:x,isPlayable:!1,renderCardImage:b,renderSubHeaderContent:k,testId:p,requestId:j}),(0,m.jsx)(t._,{menu:(0,m.jsx)(d.I,{uri:x}),children:C})}))}}]);
//# sourceMappingURL=7925.js.map