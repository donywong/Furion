(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{139:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,j=u["".concat(c,".").concat(m)]||u[m]||O[m]||b;return a?n.a.createElement(j,i(i({ref:t},o),{},{components:a})):n.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},140:function(e,t,a){"use strict";var r=a(0),n=a(19);t.a=function(){var e=Object(r.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},141:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return c}));var r=a(140),n=a(142);function b(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,b=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var b=void 0===r?{}:r,c=b.forcePrependBaseUrl,i=void 0!==c&&c,l=b.absolute,o=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(i)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+p:p}(b,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,b().withBaseUrl)(e,t)}},142:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(6),b=(a(0),a(139)),c=a(141),i={id:"introduce",title:"1.1 \u4ecb\u7ecd",sidebar_label:"1.1 \u4ecb\u7ecd",slug:"/"},l={unversionedId:"introduce",id:"introduce",isDocsHomePage:!1,title:"1.1 \u4ecb\u7ecd",description:"<img",source:"@site/docs\\introduce.mdx",slug:"/",permalink:"/docs/",editUrl:"https://gitee.com/monksoul/Fur/tree/main/handbook/docs/introduce.mdx",version:"current",sidebar_label:"1.1 \u4ecb\u7ecd",sidebar:"docs",next:{title:"1.2 \u5173\u4e8e\u4f5c\u8005",permalink:"/docs/author"}},o=[{value:"\ud83c\udf55 \u540d\u5b57\u7684\u7531\u6765",id:"-\u540d\u5b57\u7684\u7531\u6765",children:[]},{value:"\ud83c\udf54 \u5173\u4e8e LOGO",id:"-\u5173\u4e8e-logo",children:[]},{value:"\ud83c\udf5f \u6587\u6863\u5730\u5740",id:"-\u6587\u6863\u5730\u5740",children:[]},{value:"\ud83c\udf2d \u5f00\u6e90\u5730\u5740",id:"-\u5f00\u6e90\u5730\u5740",children:[]},{value:"\ud83c\udf7f Docker \u955c\u50cf",id:"-docker-\u955c\u50cf",children:[]},{value:"\ud83e\udd5e \u67b6\u6784\u8bbe\u8ba1",id:"\ud83e\udd5e-\u67b6\u6784\u8bbe\u8ba1",children:[]},{value:"\ud83e\udd5d \u529f\u80fd\u6a21\u5757",id:"\ud83e\udd5d-\u529f\u80fd\u6a21\u5757",children:[]},{value:"\ud83e\udd50 \u6846\u67b6\u4f9d\u8d56",id:"\ud83e\udd50-\u6846\u67b6\u4f9d\u8d56",children:[]},{value:"\ud83e\udd57 \u73af\u5883\u8981\u6c42",id:"\ud83e\udd57-\u73af\u5883\u8981\u6c42",children:[]},{value:"\ud83e\udd6a \u652f\u6301\u5e73\u53f0",id:"\ud83e\udd6a-\u652f\u6301\u5e73\u53f0",children:[]},{value:"\ud83c\udf56 \u5173\u4e8e\u6027\u80fd",id:"-\u5173\u4e8e\u6027\u80fd",children:[]},{value:"\ud83c\udf5a \u5173\u4e8e\u4f5c\u8005",id:"-\u5173\u4e8e\u4f5c\u8005",children:[]},{value:"\ud83c\udf64 \u9879\u76ee\u6210\u5458",id:"-\u9879\u76ee\u6210\u5458",children:[]},{value:"\ud83c\udf5d \u4ed6\u4eec\u90fd\u5728\u7528",id:"-\u4ed6\u4eec\u90fd\u5728\u7528",children:[]},{value:"\ud83c\udf7b \u8d21\u732e\u4ee3\u7801",id:"-\u8d21\u732e\u4ee3\u7801",children:[]},{value:"\ud83c\udf4d \u6350\u8d60\u5217\u8868",id:"-\u6350\u8d60\u5217\u8868",children:[]},{value:"\ud83e\udd54 QQ \u4ea4\u6d41\u7fa4",id:"\ud83e\udd54-qq-\u4ea4\u6d41\u7fa4",children:[]},{value:"\ud83e\uddc6 \u53cb\u60c5\u94fe\u63a5",id:"\ud83e\uddc6-\u53cb\u60c5\u94fe\u63a5",children:[]}],p={rightToc:o};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("img",{src:Object(c.a)("img/furlogo.png"),height:"80",style:{margin:"0 auto",display:"block"}}),Object(b.b)("div",{style:{textAlign:"center",marginTop:25}},Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Fur/stargazers"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"https://gitee.com/monksoul/Fur/badge/star.svg?theme=gvp",alt:"star"})))," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Fur/members"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"https://gitee.com/monksoul/Fur/badge/fork.svg?theme=gvp",alt:"fork"})))," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MonkSoul/Fur/stargazers"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/MonkSoul/Fur?logo=github",alt:"GitHub stars"})))," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MonkSoul/Fur/network"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/forks/MonkSoul/Fur?logo=github",alt:"GitHub forks"})))," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MonkSoul/Fur/blob/main/LICENSE"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/license/MonkSoul/Fur",alt:"GitHub license"})))," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nuget.org/packages/Fur"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/Nuget-1.0.0--rc2-brightgreen",alt:"nuget"}))))),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u662f ",Object(b.b)("inlineCode",{parentName:"p"},".NET 5")," \u5e73\u53f0\u4e0b\u6781\u6613\u5165\u95e8\u3001\u6781\u901f\u5f00\u53d1\u7684 Web \u5e94\u7528\u6846\u67b6\u3002")),Object(b.b)("h2",{id:"-\u540d\u5b57\u7684\u7531\u6765"},"\ud83c\udf55 \u540d\u5b57\u7684\u7531\u6765"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u6545\u4e8b\u662f\u8fd9\u6837\u5b50\u7684\uff1a"),Object(b.b)("p",{parentName:"blockquote"},"\u8d77\u521d\uff0c\u60f3\u5f00\u53d1\u4e00\u4e2a\u6781\u6613\u5165\u95e8\u3001\u6781\u6613\u7ef4\u62a4\u7684\u6846\u67b6\uff0c\u5f00\u53d1\u7406\u5ff5\u4e3a\uff1a",Object(b.b)("inlineCode",{parentName:"p"},"\u4e00\u5207\u4ece\u7b80\uff0c\u53ea\u4e3a\u4e86\u66f4\u61d2"),"\u3002"),Object(b.b)("p",{parentName:"blockquote"},"\u6240\u4ee5\u81ea\u7136\u800c\u7136\u60f3\u5230\u4e86\uff1a",Object(b.b)("inlineCode",{parentName:"p"},"Lazier"),"\uff0c\u4e5f\u5c31\u662f ",Object(b.b)("strong",{parentName:"p"},"\u66f4\u61d2")," \u7684\u610f\u601d\u3002\u4f46\u662f ",Object(b.b)("strong",{parentName:"p"},"\u66f4\u61d2")," \u548c ",Object(b.b)("strong",{parentName:"p"},"\u66f4\u70c2")," \u8bfb\u97f3\u76f8\u8fd1\u4e14\u4e2d\u6587\u540d\u6ca1\u6709\u7279\u8272\uff0c\u5bf9\u6b64\u6362\u540d\u95ee\u9898\u6211\u82e6\u607c\u4e86\u597d\u51e0\u5929\u3002"),Object(b.b)("p",{parentName:"blockquote"},"\u521a\u597d\u6709\u4e00\u6b21\u6211\u5728\u535a\u5ba2\u56ed\u4e2d\u5e2e\u4e00\u4e2a\u535a\u53cb\u89e3\u7b54\u95ee\u9898\uff0c\u89e3\u51b3\u540e\u535a\u53cb\u8d5e\u626c\u6211\u5bf9 ",Object(b.b)("inlineCode",{parentName:"p"},".NET Core")," \u9887\u6709\u4e86\u89e3\uff0c\u6211\u5c31\u987a\u5634\u56de\u7b54\u4e86\u4e00\u53e5\uff1a",Object(b.b)("strong",{parentName:"p"},"\u201c\u7565\u61c2\u76ae\u6bdb\u201d"),"\u3002"),Object(b.b)("p",{parentName:"blockquote"},"\u5c31\u8fd9\u65f6\uff0c\u8111\u74dc\u5b50\u7075\u673a\u4e00\u52a8\uff0c\u5e72\u8106\u8d77\u540d\u4e3a\uff1a",Object(b.b)("strong",{parentName:"p"},"\u201c\u76ae\u6bdb\u201d"),"\uff1f\u82f1\u6587\u5355\u8bcd ",Object(b.b)("strong",{parentName:"p"},"\u201c",Object(b.b)("inlineCode",{parentName:"strong"},"Fur")," ","[f\u025c\u02d0(r)]","\u201d"),"\uff0c\u5355\u8bcd\u53c8\u77ed\u800c\u4e14\u4e2d\u6587\u8bfb\u97f3\u65e2\u4fd7\u6c14\u53c8\u987a\u53e3\u3002\ud83d\ude04\ud83d\ude0e"),Object(b.b)("p",{parentName:"blockquote"},"\u6240\u4ee5\uff0c",Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"Fur"))," \u5c31\u8bde\u751f\u4e86\u3002"),Object(b.b)("p",{parentName:"blockquote"},"\u4e4b\u540e\u5c31\u6709\u4e86 ",Object(b.b)("strong",{parentName:"p"},"\u201c\u5c0f\u50e7\u4e0d\u624d\uff0c\u7565\u61c2\u76ae\u6bdb\uff08Fur\uff09\u3002\u201d")," \u5e7f\u544a\u8bed \u548c ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"strong"},{href:"https://chinadot.net"}),"chinadot.net"))," \u57df\u540d\u3002")),Object(b.b)("h2",{id:"-\u5173\u4e8e-logo"},"\ud83c\udf54 \u5173\u4e8e LOGO"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Fur")," LOGO \u8bbe\u8ba1\u7531 ",Object(b.b)("inlineCode",{parentName:"p"},"F")," ",Object(b.b)("inlineCode",{parentName:"p"},"U")," ",Object(b.b)("inlineCode",{parentName:"p"},"R")," \u4e09\u4e2a\u5355\u8bcd\u7ec4\u6210\uff1a"),Object(b.b)("img",{src:Object(c.a)("img/logo2.png"),height:"120",style:{display:"block"}}),Object(b.b)("p",null,"\u6211\u76f8\u4fe1\u5f88\u591a\u4eba\u770b\u5230 ",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u7684 LOGO \u65f6\u90fd\u4f1a\u95ee\uff1a\u201c\u4e3a\u4ec0\u4e48\u9009\u62e9\u5976\u725b\uff1f\u201d\uff0c\u56e0\u4e3a ",Object(b.b)("strong",{parentName:"p"},"\u90a3\u4e9b\u5e74\u5439\u8fc7\u7684\u725b\u903c\u90fd\u5b9e\u73b0\u4e86 \ud83d\udc2e"),"\u3002"),Object(b.b)("p",null,"\u4e4b\u6240\u4ee5\u9009\u62e9 ",Object(b.b)("strong",{parentName:"p"},"\u5976\u725b")," \u662f\u56e0\u4e3a ",Object(b.b)("inlineCode",{parentName:"p"},"\u725b")," \u5177\u6709\u811a\u8e0f\u5b9e\u5730\uff0c\u4efb\u52b3\u4efb\u6028\u7684\u505a\u4e8b\u98ce\u683c\uff0c\u540c\u65f6 ",Object(b.b)("strong",{parentName:"p"},"\u5976\u725b")," \u610f\u5473\u7740\u4e30\u5bcc\u7684\u8425\u517b\u4ef7\u503c\uff0c\u6b63\u5982 ",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u6240\u80fd\u5e26\u7ed9\u4f60\u7684\u3002"),Object(b.b)("h2",{id:"-\u6587\u6863\u5730\u5740"},"\ud83c\udf5f \u6587\u6863\u5730\u5740"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u56fd\u5185\u6587\u6863\uff1a",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://monksoul.gitee.io/fur/"}),"https://monksoul.gitee.io/fur/")),Object(b.b)("li",{parentName:"ul"},"\u56fd\u5916\u6587\u6863\uff1a",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://chinadot.net"}),"https://chinadot.net"))),Object(b.b)("h2",{id:"-\u5f00\u6e90\u5730\u5740"},"\ud83c\udf2d \u5f00\u6e90\u5730\u5740"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Gitee\uff1a",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://gitee.com/monksoul/Fur"}),"https://gitee.com/monksoul/Fur")),Object(b.b)("li",{parentName:"ul"},"GitHub\uff1a",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/monksoul/Fur"}),"https://github.com/monksoul/Fur")),Object(b.b)("li",{parentName:"ul"},"Docker\uff1a",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://hub.docker.com/r/monksoul/fur"}),"https://hub.docker.com/r/monksoul/fur")),Object(b.b)("li",{parentName:"ul"},"Nuget\uff1a",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.nuget.org/packages/Fur"}),"https://www.nuget.org/packages/Fur")),Object(b.b)("li",{parentName:"ul"},"\u535a\u5ba2\u56ed\uff1a",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.cnblogs.com/dotnetchina"}),"https://www.cnblogs.com/dotnetchina"))),Object(b.b)("h2",{id:"-docker-\u955c\u50cf"},"\ud83c\udf7f Docker \u955c\u50cf"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"docker run --name fur -p 5000:80 monksoul/fur:v1.0.0-2020.10.10\n")),Object(b.b)("h2",{id:"\ud83e\udd5e-\u67b6\u6784\u8bbe\u8ba1"},"\ud83e\udd5e \u67b6\u6784\u8bbe\u8ba1"),Object(b.b)("p",null,"\u6b63\u5728\u6574\u7406\u4e2d..."),Object(b.b)("h2",{id:"\ud83e\udd5d-\u529f\u80fd\u6a21\u5757"},"\ud83e\udd5d \u529f\u80fd\u6a21\u5757"),Object(b.b)("img",{src:Object(c.a)("img/furfunctions.png")}),Object(b.b)("h2",{id:"\ud83e\udd50-\u6846\u67b6\u4f9d\u8d56"},"\ud83e\udd50 \u6846\u67b6\u4f9d\u8d56"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u4e3a\u4e86\u8ffd\u6c42\u6781\u901f\u5165\u95e8\uff0c\u6781\u81f4\u6027\u80fd\uff0c\u5c3d\u53ef\u80fd\u7684\u4e0d\u4f7f\u7528\u6216\u51cf\u5c11\u7b2c\u4e09\u65b9\u4f9d\u8d56\u3002\u76ee\u524d ",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u4ec5\u96c6\u6210\u4e86\u4ee5\u4e0b\u4e09\u4e2a\u4f9d\u8d56\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/MapsterMapper/Mapster"}),"Mapster"),"\uff1a\u6bd4 ",Object(b.b)("inlineCode",{parentName:"li"},"AutoMapper")," \u8fd8\u9ad8\u6027\u80fd\u7684\u5bf9\u8c61\u6620\u5c04"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/MiniProfiler/dotnet"}),"MiniProfiler"),"\uff1a\u6027\u80fd\u5206\u6790\u548c\u76d1\u542c\u5fc5\u5907"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/domaindrivendev/Swashbuckle.AspNetCore"}),"Swashbuckle"),"\uff1a",Object(b.b)("inlineCode",{parentName:"li"},"Swagger")," \u63a5\u53e3\u6587\u6863")),Object(b.b)("p",null,"\u9ebb\u96c0\u867d\u5c0f\u4e94\u810f\u4ff1\u5168\u3002",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u5373\u4f7f\u53ea\u96c6\u6210\u4e86\u8fd9\u4e09\u4e2a\u4f9d\u8d56\uff0c\u4f46\u662f\u4e3b\u6d41\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"\u4f9d\u8d56\u6ce8\u5165/\u63a7\u5236\u53cd\u8f6c"),"\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"AOP")," \u9762\u5411\u5207\u9762\u7f16\u7a0b\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"\u4e8b\u4ef6\u603b\u7ebf"),"\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"\u6570\u636e\u9a8c\u8bc1"),"\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u64cd\u4f5c")," \u7b49\u7b49\u4e00\u4e2a\u90fd\u4e0d\u5c11\u3002"),Object(b.b)("h2",{id:"\ud83e\udd57-\u73af\u5883\u8981\u6c42"},"\ud83e\udd57 \u73af\u5883\u8981\u6c42"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Visual Studio 2019 Preview 16.8 +"),Object(b.b)("li",{parentName:"ul"},".NET 5 SDK +"),Object(b.b)("li",{parentName:"ul"},".Net Standard 2.1 +")),Object(b.b)("h2",{id:"\ud83e\udd6a-\u652f\u6301\u5e73\u53f0"},"\ud83e\udd6a \u652f\u6301\u5e73\u53f0"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u8fd0\u884c\u73af\u5883",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Windows"),Object(b.b)("li",{parentName:"ul"},"Linux"),Object(b.b)("li",{parentName:"ul"},"MacOS"),Object(b.b)("li",{parentName:"ul"},"Docker/K8S/K3S/Rancher"),Object(b.b)("li",{parentName:"ul"},"Xamarin/MAUI"))),Object(b.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"SqlServer"),Object(b.b)("li",{parentName:"ul"},"Sqlite"),Object(b.b)("li",{parentName:"ul"},"Azure Cosmos"),Object(b.b)("li",{parentName:"ul"},"MySql"),Object(b.b)("li",{parentName:"ul"},"PostgreSQL"),Object(b.b)("li",{parentName:"ul"},"InMemoryDatabase"),Object(b.b)("li",{parentName:"ul"},"Oracle"),Object(b.b)("li",{parentName:"ul"},"Firebird"),Object(b.b)("li",{parentName:"ul"},"\u8fbe\u68a6\u6570\u636e\u5e93"))),Object(b.b)("li",{parentName:"ul"},"\u5e94\u7528\u90e8\u7f72",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Kestrel"),Object(b.b)("li",{parentName:"ul"},"Nginx"),Object(b.b)("li",{parentName:"ul"},"Jexus"),Object(b.b)("li",{parentName:"ul"},"IIS"),Object(b.b)("li",{parentName:"ul"},"Apache"),Object(b.b)("li",{parentName:"ul"},"PM2"),Object(b.b)("li",{parentName:"ul"},"Supervisor"),Object(b.b)("li",{parentName:"ul"},"\u5355\u6587\u4ef6"),Object(b.b)("li",{parentName:"ul"},"\u5bb9\u5668\uff08Docker/K8S/K3S/Rancher\uff09")))),Object(b.b)("h2",{id:"-\u5173\u4e8e\u6027\u80fd"},"\ud83c\udf56 \u5173\u4e8e\u6027\u80fd"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u76ee\u524d\u91c7\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},"Visual Studio 2019 Preview 16.8")," \u81ea\u5e26\u6027\u80fd\u6d4b\u8bd5\u548c ",Object(b.b)("inlineCode",{parentName:"p"},"JMeter")," \u8fdb\u884c\u6d4b\u8bd5\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u53ea\u8d34\u90e8\u5206\u6d4b\u8bd5\u56fe\uff0c\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b\uff1a"),Object(b.b)("img",{src:Object(c.a)("img/xncs.png")}),Object(b.b)("hr",null),Object(b.b)("h2",{id:"-\u5173\u4e8e\u4f5c\u8005"},"\ud83c\udf5a \u5173\u4e8e\u4f5c\u8005"),Object(b.b)("p",null,"\u4e00\u4e2a\u62e5\u6709 12 \u5e74\u5f00\u53d1\u7ecf\u9a8c ",Object(b.b)("inlineCode",{parentName:"p"},".NETer"),"\u3002\u559c\u6b22\u5206\u4eab\uff0c\u559c\u6b22\u65b0\u6280\u672f\uff0c\u5728\u4e92\u8054\u7f51\u591a\u4e2a\u6280\u672f\u9886\u57df\u7686\u6709\u6d89\u730e\u3002"),Object(b.b)("h2",{id:"-\u9879\u76ee\u6210\u5458"},"\ud83c\udf64 \u9879\u76ee\u6210\u5458"),Object(b.b)("a",{href:"https://gitee.com/monksoul",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/324/974299_monksoul_1578937227.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/dotnetchina",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/2685/8055741_dotnetchina_1599843748.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/zero530",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/574/1722306_zero530_1578958528.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/rgleehom",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"data:image/png;base64,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",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/KaneLeung",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/483/1449079_KaneLeung_1600227210.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/qd98zhq",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/205/617984_qd98zhq_1600045204.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/andyliuqiurong",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/19/58386_andyliuqiurong_1600142677.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/co1024",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/627/1883684_co1024_1600418760.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/LkyQiuFeng",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/195/586044_LkyQiuFeng_1594628004.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/yzyk126",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/237/711378_yzyk126_1600742932.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/lindexi",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/262/787628_lindexi_1600869623.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/www.fengyunmy.com",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/33/101022_www.fengyunmy.com_1602044110.png!avatar100",height:"40"})),Object(b.b)("p",null),Object(b.b)("p",null,"\ud83c\udf88 \u6b22\u8fce\u66f4\u591a\u7684\u5f00\u53d1\u8005\u52a0\u5165 ",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u5927\u5bb6\u5ead\u3002"),Object(b.b)("h2",{id:"-\u4ed6\u4eec\u90fd\u5728\u7528"},"\ud83c\udf5d \u4ed6\u4eec\u90fd\u5728\u7528"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u767e\u7b7e\u79d1\u6280\uff08\u5e7f\u4e1c\uff09\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u7801\u4e3a\u79d1\u6280\uff08\u5e7f\u5dde\uff09\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u5e7f\u5dde\u542f\u987a\u56fd\u9645\u8d27\u8fd0\u4ee3\u7406\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u68ee\u4e30\u4f9b\u5e94\u94fe\u670d\u52a1\uff08\u5e7f\u5dde\uff09\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u4e2d\u5c71\u8d62\u53cb\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u4e2d\u5c71\u6a21\u601d\u8f6f\u4ef6\u79d1\u6280\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u73e0\u6d77\u5e02\u6052\u6cf0\u65b0\u8f6f\u4ef6\u6709\u9650\u8d23\u4efb\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u73e0\u6d77\u601d\u8bfa\u9510\u521b\u8f6f\u4ef6\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u6df1\u5733\u5e02\u6613\u80dc\u79d1\u6280\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u91cd\u5e86\u866b\u513f\u98de\u79d1\u6280\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u91cd\u5e86\u6797\u6728\u68ee\u79d1\u6280\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u6df1\u5733\u5e02\u54c1\u7acb\u65b9\u79d1\u6280\u6709\u9650\u516c\u53f8")),Object(b.b)("p",null,"\u5982\u679c\u60a8\u7684\u9879\u76ee\u4f7f\u7528\u5230 ",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u5f00\u53d1\uff0c\u53ef\u4ee5\u544a\u8bc9\u6211\u4eec\u3002"),Object(b.b)("h2",{id:"-\u8d21\u732e\u4ee3\u7801"},"\ud83c\udf7b \u8d21\u732e\u4ee3\u7801"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u9075\u5faa ",Object(b.b)("inlineCode",{parentName:"p"},"Apache-2.0")," \u5f00\u6e90\u534f\u8bae\uff0c\u6b22\u8fce\u5927\u5bb6\u63d0\u4ea4 ",Object(b.b)("inlineCode",{parentName:"p"},"PR")," \u6216 ",Object(b.b)("inlineCode",{parentName:"p"},"Issue"),"\u3002"),Object(b.b)("p",null,"\u5982\u679c\u8981\u4e3a\u9879\u76ee\u505a\u51fa\u8d21\u732e\uff0c\u8bf7\u67e5\u770b\u8d21\u732e\u6307\u5357\u3002"),Object(b.b)("h2",{id:"-\u6350\u8d60\u5217\u8868"},"\ud83c\udf4d \u6350\u8d60\u5217\u8868"),Object(b.b)("p",null,"\u6ce8\uff1a\u6392\u5e8f\u6309\u6350\u8d60\u987a\u5e8f\u4e66\u5199"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u6350\u8d60\u4eba\u6635\u79f0"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u6350\u8d60\u91d1\u989d\uff08\u5143\uff09"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u9644\u8bed"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\ud83e\udd34 \u7231\u5403\u6cb9\u9ea6\u83dc"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"100")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u611f\u8c22\u60a8\u7684\u5f00\u6e90\u9879\u76ee\uff01")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\ud83d\udc73\u200d\u2642\ufe0f \u9ea6\u58f3\u997c"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"200")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u611f\u8c22\u60a8\u7684\u5f00\u6e90\u9879\u76ee\uff01")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\ud83d\udc68 Sun"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"100")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u611f\u8c22\u60a8\u7684\u5f00\u6e90\u9879\u76ee\uff01")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\ud83d\udc76 d617617"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"20")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u611f\u8c22\u60a8\u7684\u5f00\u6e90\u9879\u76ee\uff01")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\ud83d\udc66 Diqiguoji008"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"16.66")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u89c1\u8d24\u601d\u9f50")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\ud83d\udc72 nodyang"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"100")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u611f\u8c22\u60a8\u7684\u5f00\u6e90\u9879\u76ee\uff01")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\ud83d\udc73\u200d\u2640\ufe0f mictxd"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"100")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5439\u8fc7\u7684\u725b\u90fd\u5b9e\u73b0\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\ud83e\uddd3 \u6b27\u6d41\u5168"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"10")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5e0c\u671b\u5c06\u6765\u8d85\u8d8a Spring")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\ud83d\udc68\u200d\u2695\ufe0f lionkon"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"10")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"...\u770b\u4e86\u6846\u67b6\u611f\u89c9\u62ff\u6765\u5b66\u4e60\u662f\u5f88\u4e0d\u9519\u7684...")))),Object(b.b)("p",null,"\u975e\u5e38\u611f\u8c22\u60a8\u4eec\u7684\u652f\u6301\uff0c\u6b63\u662f\u56e0\u4e3a\u60a8\u4eec\uff0c\u4e2d\u56fd\u5f00\u6e90\u624d\u53ef\u4ee5\u8d8a\u8d70\u8d8a\u8fdc\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u8d8a\u8d70\u8d8a\u8fdc\u3002"),Object(b.b)("h2",{id:"\ud83e\udd54-qq-\u4ea4\u6d41\u7fa4"},"\ud83e\udd54 QQ \u4ea4\u6d41\u7fa4"),Object(b.b)("img",{src:Object(c.a)("img/dotnetchina.jpg"),height:"300",style:{display:"block"}}),Object(b.b)("h2",{id:"\ud83e\uddc6-\u53cb\u60c5\u94fe\u63a5"},"\ud83e\uddc6 \u53cb\u60c5\u94fe\u63a5"),Object(b.b)("p",null,"\ud83d\udc49 ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"strong"},{href:"https://gitee.com/monksoul/Fur"}),"Fur"))," \ud83d\udc49 ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/sunkaixuan/SqlSugar"}),"SqlSugar"))," \ud83d\udc49 ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"strong"},{href:"https://gitee.com/monksoul/LayX"}),"Layx"))," \ud83d\udc49 ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"strong"},{href:"https://gitee.com/tywo45/t-io"}),"t-io"))," \ud83d\udc49 ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"strong"},{href:"http://www.thinkphp.cn/"}),"ThinkPHP"))," \ud83d\udc49 ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"strong"},{href:"https://hutool.cn/"}),"Hutool"))," \ud83d\udc49 ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"strong"},{href:"https://gitee.com/LongbowEnterprise/BootstrapAdmin"}),"BootstrapAdmin"))," \ud83d\udc49 ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"strong"},{href:"https://blazor.sdgxgz.com/"}),"BootstrapBlazor"))))}u.isMDXComponent=!0}}]);