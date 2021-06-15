(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[447],{876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,b=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(b,p(p({ref:t},c),{},{components:r})):n.createElement(b,p({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5358:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var n=r(7560),a=r(8283),o=(r(2784),r(876)),p=["components"],i={sidebar_label:"Group TF",sidebar_position:2},l={unversionedId:"algorithms/group-tf",id:"algorithms/group-tf",isDocsHomePage:!1,title:"GroupTF",description:"state: Record",source:"@site/docs/algorithms/group-tf.md",sourceDirName:"algorithms",slug:"/algorithms/group-tf",permalink:"/nodejsml/docs/algorithms/group-tf",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/algorithms/group-tf.md",version:"current",sidebar_label:"Group TF",sidebarPosition:2,frontMatter:{sidebar_label:"Group TF",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Model TF",permalink:"/nodejsml/docs/algorithms/tf"},next:{title:"Counter",permalink:"/nodejsml/docs/lib/counter"}},u=[{value:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",id:"\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",children:[]}],c={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"state: Record<string, TF>"),"  "),(0,o.kt)("p",null,"\u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043c\u043d\u043e\u0433\u043e \u043c\u0430\u0442\u0440\u0438\u0446 TF"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"addCorpus(label: string, corpus: string[])"),(0,o.kt)("br",{parentName:"li"}),"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c\\\u0441\u043e\u0437\u0434\u0430\u0442\u044c TF \u0434\u043b\u044f label",(0,o.kt)("br",{parentName:"li"}),"\u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437, \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u0440\u043f\u0443\u0441 \u043d\u043e\u0432\u044b\u043c\u0438 \u0434\u043e\u043c\u0435\u043d\u0442\u0430\u043c\u0438")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"calcWeigths"),(0,o.kt)("br",{parentName:"p"}),"\n","\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u0430\u043a \u0436\u0435 \u043a\u0430\u043a TF.calcWeigths, \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e TF")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"predictLabel(doc: string)"),(0,o.kt)("br",{parentName:"p"}),"\n","\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442 \u043d\u0430 \u043a\u0430\u043a\u043e\u0439 label TF \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u0445\u043e\u0436 \u043d\u043e\u0432\u044b\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442"))),(0,o.kt)("h2",{id:"\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"),(0,o.kt)("p",null,"\u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0447\u0430\u0441\u0442\u043e\u0442 \u043c\u043e\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u0430\u0442\u0440\u0438\u0446\u0443 TF-IDF"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/TF-IDF"},"TF-IDF WIKI"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"http://nlpx.net/archives/57"},"TF-IDF \u0441 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u043c\u0438")),(0,o.kt)("p",null,"\u0442\u0430\u043a \u0436\u0435 \u043d\u0430\u0434\u043e \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044e",(0,o.kt)("br",{parentName:"p"}),"\n","\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043a\u043e\u0441\u0438\u0441\u043d\u0443\u044e \u043c\u0435\u0440\u0443 \u0431\u043b\u0438\u0437\u043e\u0441\u0442\u0438  "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://habr.com/ru/post/67078/"},"\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432")),(0,o.kt)("p",null,"\u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0432\u0435\u043a\u0442\u043e\u0440",(0,o.kt)("br",{parentName:"p"}),"\n","\u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u044c\u044e \u0441 \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u0432\u0441\u0435\u0445 \u0441\u043b\u043e\u0432 (\u043a\u043e\u0440\u043f\u0443\u0441)",(0,o.kt)("br",{parentName:"p"}),"\n","\u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0434\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0440\u043f\u0443\u0441 \u0432 \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0441\u043b\u043e\u0432",(0,o.kt)("br",{parentName:"p"}),"\n","\u043f\u0440\u043e\u043c\u0430\u043f\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043f\u043e \u0432\u0441\u0435\u043c \u0442\u0435\u0440\u043c\u0430\u043c \u043a\u043e\u0440\u043f\u0443\u0441\u0430,",(0,o.kt)("br",{parentName:"p"}),"\n","\u043f\u0440\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c 0 \u0442\u0430\u043c \u0433\u0434\u0435 \u0441\u043b\u043e\u0432\u043e \u0438\u0437 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043d\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u043a\u043e\u0440\u043f\u0443\u0441\u0435",(0,o.kt)("br",{parentName:"p"}),"\n","\u0442\u0430\u043c \u0433\u0434\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044f, \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u0435\u0441\u044c \u0441\u043b\u043e\u0432\u0430 \u0438\u0437 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430"))}s.isMDXComponent=!0}}]);