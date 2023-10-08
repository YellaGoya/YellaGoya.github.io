"use strict";(self.webpackChunkyellagoya_malog=self.webpackChunkyellagoya_malog||[]).push([[854],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,o=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,i=new RegExp("^"+n.source),s=new RegExp(n.source+o.source,"gu"),l=new RegExp("\\d+"+o.source,"gu"),c=(e,o)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(o={pascalCase:!1,preserveConsecutiveUppercase:!1,...o},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===o.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(o.locale),c=!1===o.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(o.locale);if(1===e.length)return o.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,o)=>{let n=!1,i=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];n&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),n=!1,s=i,i=!0,l++):i&&s&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=i,i=!1,n=!0):(n=r(c)===c&&o(c)!==c,s=i,i=o(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(i,""),e=o.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),o.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return P},L:function(){return f},M:function(){return L},P:function(){return E},_:function(){return s},a:function(){return i},b:function(){return u},c:function(){return d},g:function(){return g},h:function(){return l}});var r=a(7294),o=(a(3204),a(5697)),n=a.n(o);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(o[a]=e[a]);return o}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}const d=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function p(e,t,a){const r={};let o="gatsby-image-wrapper";return c()||(r.position="relative",r.overflow="hidden"),"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(c()||(r.display="inline-block",r.verticalAlign="top"),o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,o){return void 0===o&&(o={}),c()||(o=i({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},o)),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},o,{opacity:t?1:0})})}function g(e,t,a,r,o,n,s,l){const d={};n&&(d.backgroundColor=n,"fixed"===a?(d.width=r,d.height=o,d.backgroundColor=n,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),s&&(d.objectFit=s),l&&(d.objectPosition=l);const p=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return c()||(p.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),p}const h=["children"],m=function(e){let{layout:t,width:a,height:o}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+o+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=s(e,h);return r.createElement(r.Fragment,null,r.createElement(m,i({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],x=function(e){let{src:t,srcSet:a,loading:o,alt:n="",shouldLoad:l}=e,c=s(e,b);return r.createElement("img",i({},c,{decoding:"async",loading:o,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:n}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:o=!0}=e,n=s(e,y);const l=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(x,i({},n,t,{sizes:l,shouldLoad:o}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:l})})),c):c};var w;x.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},v.displayName="Picture",v.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const k=["fallback"],E=function(e){let{fallback:t}=e,a=s(e,k);return t?r.createElement(v,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:o.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const L=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=v.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],I=e=>e.replace(/\n/g,""),T=function(e,t,a){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(o)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:n().object.isRequired,alt:T},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],z=new Set;let A,q;const O=function(e){let{as:t="div",image:o,style:n,backgroundColor:c,className:d,class:u,onStartLoad:g,onLoad:h,onError:m}=e,f=s(e,j);const{width:b,height:y,layout:x}=o,v=p(b,y,x),{style:w,className:k}=v,E=s(v,N),L=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(o.images)),[o.images]);u&&(d=u);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(x,b,y);return(0,r.useEffect)((()=>{A||(A=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return q=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(C);if(q&&z.has(C))return;let t,r;return A.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;L.current&&(L.current.innerHTML=a(i({isLoading:!0,isLoaded:z.has(C),image:o},f)),z.has(C)||(t=requestAnimationFrame((()=>{L.current&&(r=s(L.current,C,z,n,g,h,m))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[o]),(0,r.useLayoutEffect)((()=>{z.has(C)&&q&&(L.current.innerHTML=q(i({isLoading:z.has(C),isLoaded:z.has(C),image:o},f)),null==g||g({wasCached:!0}),null==h||h({wasCached:!0}))}),[o]),(0,r.createElement)(t,i({},E,{style:i({},w,n,{backgroundColor:c}),className:k+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(c(),(0,r.createElement)(O,e)):null}));P.propTypes=_,P.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:a,__imageData:o,__error:n}=t,l=s(t,R);return n&&console.warn(n),o?r.createElement(e,i({image:o},l)):(console.warn("Image not loaded",a),null)}}const W=M((function(e){let{as:t="div",className:a,class:o,style:n,image:l,loading:c="lazy",imgClassName:d,imgStyle:h,backgroundColor:m,objectFit:b,objectPosition:y}=e,x=s(e,C);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;o&&(a=o),h=i({objectFit:b,objectPosition:y,backgroundColor:m},h);const{width:v,height:w,layout:k,images:T,placeholder:_,backgroundColor:j}=l,N=p(v,w,k),{style:z,className:A}=N,q=s(N,S),O={fallback:void 0,sources:[]};return T.fallback&&(O.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?I(T.fallback.srcSet):void 0})),T.sources&&(O.sources=T.sources.map((e=>i({},e,{srcSet:I(e.srcSet)})))),r.createElement(t,i({},q,{style:i({},z,n,{backgroundColor:m}),className:A+(a?" "+a:"")}),r.createElement(f,{layout:k,width:v,height:w},r.createElement(E,i({},g(_,!1,k,v,w,j,b,y))),r.createElement(L,i({"data-gatsby-image-ssr":"",className:d},x,u("eager"===c,!1,O,c,h)))))})),D=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),G={src:n().string.isRequired,alt:T,width:D,height:D,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};W.displayName="StaticImage",W.propTypes=G;const H=M(P);H.displayName="StaticImage",H.propTypes=G},4186:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(4748);const o=r.ZP.main`
  margin: 0 auto;
  max-width: 960px;

  color: white;
  background-color: #1b1b1b;
`,n=r.ZP.section`
  padding-top: 20px;
`,i=r.ZP.div``,s=r.ZP.article`
  padding: 20px;
  margin-bottom: 100px;

  //hover 0.3초에 걸쳐서

  div > * {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -10px;
      width: 3px;
      height: 100%;
      background-color: #d5383f;

      /* transition 속성 추가 */
      transition: opacity 0.2s ease;

      /* 초기 상태 설정 */
      opacity: 0;
    }

    &:hover::before {
      opacity: 1;
    }
  }

  p {
    font-weight: 300;
  }

  * {
    margin: 0 0 15px 0;
    line-height: 1.5;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }

  a {
    color: #d5383f;
    text-underline-offset: 3px;
  }

  sup > a {
    color: #d5383f;
    font-weight: 700;
    text-decoration: none;
  }

  hr {
    //색상 검정으로
    border: 1px solid #858585;
  }

  p > code,
  h1 > code,
  h2 > code,
  h3 > code,
  h4 > code,
  h5 > code,
  h6 > code,
  ul > code,
  ol > code,
  dl > code,
  li > code,
  table > code,
  blockquote > code {
    padding: 3px 6px;
    margin: 0 2px;

    color: #fff;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;

    background-color: #333333;
    border-radius: 5px;
  }

  li {
    margin: 10px 0;

    > * {
      margin: 10px 0;
    }
  }

  table {
    width: auto;
    max-width: 900px;
    margin-left: 10px;
    border-collapse: collapse;

    & > thead > tr > th {
      padding: 12px 12px;
      border-bottom: 2px solid #cccccc;
    }

    & > tbody {
      & > tr > td {
        padding: 6px 12px;
        border-bottom: 1px solid #858585;
      }

      & > :last-child > td {
        border-bottom: none;
      }
    }
  }

  div > div {
    &::before {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      width: 10px;
      height: 100%;

      transition: opacity 0.2s ease;

      opacity: 0;
    }

    &:hover::before {
      opacity: 1;
    }

    & > pre {
      width: auto;
      max-width: 860px;
      margin: 0px 10px 15px 10px;

      overflow-x: auto;

      padding: 30px 20px 30px 20px;
      border-radius: 4px;

      box-shadow:
        rgba(0, 0, 0, 0.24) 0px 1px 1px,
        rgba(0, 0, 0, 0.24) 0px 2px 2px,
        rgba(0, 0, 0, 0.24) 0px 4px 4px;

      &::-webkit-scrollbar {
        height: 9px;
      }
      &::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
      }

      &:hover {
        border-radius: 0px 3px 3px 0px;
      }
    }
  }

  blockquote {
    width: auto;
    max-width: 880px;
    margin: 0px 10px 15px 10px;

    padding: 10px 20px 10px 20px;
    border-radius: 4px 4px 24px 4px;

    background-color: #ffffff22;

    transition: background-color 0.2s ease;

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      left: -10px;
      width: 10px;
      height: 100%;
      background-color: #d5383f;

      transition: opacity 0.2s ease;

      opacity: 0;
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover {
      background-color: #ffffff44;

      border-radius: 0px 3px 24px 0px;
    }

    box-shadow:
      rgba(0, 0, 0, 0.24) 0px 1px 1px,
      rgba(0, 0, 0, 0.24) 0px 2px 2px,
      rgba(0, 0, 0, 0.24) 0px 4px 4px;
  }
`;var l=a(8032),c=a(5893);function d({data:e}){var t,a;const r=e.markdownRemark,d=(0,l.c)(null===(t=r.frontmatter.thumbnail)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.gatsbyImageData);return(0,c.jsx)(o,{children:(0,c.jsxs)(n,{children:[(0,c.jsx)(i,{children:(0,c.jsx)(l.G,{image:d,alt:"Thumbnail"})}),(0,c.jsxs)(s,{children:[(0,c.jsx)("h1",{children:r.frontmatter.title}),(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:r.html}})]})]})})}}}]);
//# sourceMappingURL=component---src-components-templates-post-jsx-09cdddfb15a393c7b070.js.map