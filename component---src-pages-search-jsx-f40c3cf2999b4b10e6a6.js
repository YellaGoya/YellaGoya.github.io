"use strict";(self.webpackChunkyellagoya_malog=self.webpackChunkyellagoya_malog||[]).push([[995],{125:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var s=a(7294),n=a(4221),r=a(4160),o=a(9182),i=a(1566);const l=i.default.div.withConfig({displayName:"Search__Wrapper",componentId:"sc-il670k-0"})(["margin:0 auto;max-width:960px;color:white;background-color:#1b1b1b;li{color:#fff;margin:20px;cursor:pointer;& > h2,p{margin-top:3px;margin-bottom:3px;}}"]);i.default.span.withConfig({displayName:"Search__Noresult",componentId:"sc-il670k-1"})(["position:fixed;top:30%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-weight:800;opacity:0.5;"]);var c=a(5893);var p=({results:e})=>(0,c.jsxs)(l,{children:[(0,c.jsx)("ul",{children:e&&e.map((e=>(0,c.jsxs)("li",{onClick:()=>(0,r.navigate)(`/post${e.slug}`),children:[(0,c.jsx)("h2",{children:e.title}),(0,c.jsx)("p",{children:e.description})]},e.slug)))}),e&&0!==e.length?null:(0,c.jsxs)(o.gO,{children:["탐색 결과가 없습니다 ㅠㅜ..",(0,c.jsx)("br",{}),"다른 검색어를 입력해보세요."]})]}),d=a(9150);var u=({data:e})=>{const{searchQuery:t}=(0,s.useContext)(d.c),[a,r]=(0,s.useState)(""),o=e.allMarkdownRemark.edges.map((({node:e})=>JSON.parse(e.fields.index))),i=new n.Z(o,{keys:["title","content","categories"]});return(0,s.useEffect)((()=>{const e=i.search(t).map((e=>e.item));r(e)}),[t]),(0,c.jsx)(p,{results:a})}}}]);
//# sourceMappingURL=component---src-pages-search-jsx-f40c3cf2999b4b10e6a6.js.map