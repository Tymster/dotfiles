"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6923],{74112:(t,e,o)=>{o.d(e,{F:()=>a,m:()=>c});var s=o(59496),n=o(54329),r=o(36269);const a=420;function c({episodeBase62Id:t,getEpisodeSponsors:e,fetchedEpisodeSponsorsData:c=[],version:i}){const[u,d]=(0,s.useState)(c),l=(0,s.useCallback)((async()=>{try{if(!t)throw new Error("episodeBase62Id is required to fetch episode sponsors");const s=e??(await Promise.resolve().then(o.bind(o,23214))).getEpisodeSponsors;d(await s(t,{version:i}))}catch(t){d([])}}),[t,e,i]),f=(0,n.y1)(l,a);(0,s.useEffect)((function(){c.length||f()}),[f,c.length]);const h=(0,s.useCallback)((()=>({effectCallback:f})),[f]);return(0,r.H)(h),{fetchedEpisodeSponsorsData:u}}},41600:(t,e,o)=>{o.r(e),o.d(e,{AllShowSponsors:()=>f,default:()=>h});var s=o(59496),n=o(92053),r=o(55964),a=o(47934),c=o(79108),i=o(52501),u=o(74229),d=o(4637);const l=(0,s.lazy)((()=>Promise.all([o.e(1814),o.e(7762)]).then(o.bind(o,77762))));function f(t){const{showId:e=""}=(0,n.UO)(),o=(0,s.useMemo)((()=>(0,r.xt)(e).toURI()),[e]),{location:{state:{showSponsorsData:f}={}}}=(0,i.P)(),{showSponsorsData:h}=(0,u.O)({showId:e,showSponsorsData:f});return h?.length?(0,d.jsx)(l,{uri:o,showId:e,showSponsorsData:h,...t}):(0,d.jsx)(a.InstrumentedRedirect,{to:(0,c.mH)(e)})}const h=f},74229:(t,e,o)=>{o.d(e,{O:()=>c});var s=o(59496),n=o(54329),r=o(74112),a=o(36269);function c({showId:t,showSponsorsData:e=[],getShowSponsors:c}){const[i,u]=(0,s.useState)(e),d=(0,s.useCallback)((async e=>{const s=(...t)=>{e.mounted&&u(...t)};try{if(!t)throw new Error("showId is required to fetch show sponsors");const e=c??(await Promise.resolve().then(o.bind(o,61945))).getShowSponsors;s(await e(t))}catch(t){s([])}}),[t,c]),l=(0,n.y1)(d,r.F);(0,s.useEffect)((function(){const t={mounted:!0};return e.length||l(t),()=>{t.mounted=!1}}),[l,e.length]);const f=(0,s.useCallback)((()=>{const t={mounted:!0};return{effectCallback(){l(t)},destructor(){t.mounted=!1}}}),[l]);return(0,a.H)(f),{showSponsorsData:i}}},36269:(t,e,o)=>{o.d(e,{H:()=>u});var s=o(59496),n=o(45947),r=o(85400),a=o(30971),c=o(80323),i=o(56805);function u(t){const e=(0,n.W6)(r.oF),o=(0,c.Y)((t=>{const e=t?.item??void 0;return(0,i.k6)(e)&&e.isPodcastAd?e.id??void 0:void 0})),u=(0,a.D)(o);(0,s.useEffect)((function(){const{effectCallback:s,destructor:n}=t();return o!==u&&Boolean(o)&&setTimeout(s,e),n}),[t,o,u,e])}},52501:(t,e,o)=>{o.d(e,{P:()=>r});var s=o(59496),n=o(86556);function r(){const t=(0,n.D)(),{listen:e,location:o}=t;return(0,s.useEffect)((function(){return e(((t,e)=>{"POP"===e&&(t.state={...o.state,...t.state})}))})),t}}}]);
//# sourceMappingURL=xpui-routes-all-show-sponsors.js.map