(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[672],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return s}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),s=r,k=c["".concat(d,".").concat(s)]||c[s]||m[s]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},517:function(e,t,n){"use strict";var a=n(7378);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},4535:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(7378),r=n(4956);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(8944),o="tabItem_c0e5",d="tabItemActive_28AG";var u=37,p=39;var m=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,m=e.values,c=e.groupId,s=e.className,k=l(),f=k.tabGroupChoices,g=k.setTabGroupChoices,N=(0,a.useState)(r),v=N[0],b=N[1],h=a.Children.toArray(e.children),y=[];if(null!=c){var C=f[c];null!=C&&C!==v&&m.some((function(e){return e.value===C}))&&b(C)}var O=function(e){var t=e.currentTarget,n=y.indexOf(t),a=m[n].value;b(a),null!=c&&(g(c,a),setTimeout((function(){var e,n,a,r,l,i,o,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,u=i.innerWidth,n>=0&&l<=u&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case p:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case u:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},s)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(h.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},4956:function(e,t,n){"use strict";var a=(0,n(7378).createContext)(void 0);t.Z=a},776:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return k}});var a=n(9603),r=n(120),l=(n(7378),n(5318)),i=n(4535),o=n(517),d=["components"],u={id:"validate",title:"validate",sidebar_label:"validate"},p=void 0,m={unversionedId:"validate",id:"validate",isDocsHomePage:!1,title:"validate",description:"Validates documents against a schema and looks for deprecated usage.. See the official GraphQL Inspector documentation for details.",source:"@site/docs/command-validate.md",sourceDirName:".",slug:"/validate",permalink:"/validate",editUrl:"https://github.com/urigo/graphql-cli/edit/master/website/docs/command-validate.md",version:"current",frontMatter:{id:"validate",title:"validate",sidebar_label:"validate"},sidebar:"docs",previous:{title:"similar",permalink:"/similar"},next:{title:"Migration",permalink:"/migration"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],s={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Validates documents against a schema and looks for deprecated usage.. See the ",(0,l.kt)("a",{parentName:"p",href:"https://graphql-inspector.com/docs/essentials/validate"},"official GraphQL Inspector documentation")," for details."),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)(i.Z,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn global add @graphql-cli/validate\n"))),(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i -g @graphql-cli/validate\n")))),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"graphql validate [DOCUMENTS] [SCHEMA]\n")),(0,l.kt)("h4",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"argument"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DOCUMENTS")),(0,l.kt)("td",{parentName:"tr",align:null},"A glob pattern that points to GraphQL Documents / Operations"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"documents")," property in GraphQL Config file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SCHEMA")),(0,l.kt)("td",{parentName:"tr",align:null},"A pointer to a schema"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema")," property in GraphQL Config file")))),(0,l.kt)("h4",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"option"),(0,l.kt)("th",{parentName:"tr",align:null},"alias"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--deprecated")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-d")),(0,l.kt)("td",{parentName:"tr",align:null},"Fail on deprecated usage"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--noStrictFragments")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Do not fail on duplicated fragment names"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--apollo")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Support Apollo directives (@client and @connection)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--keepClientFields")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Keeps the fields with @client, but removes @client directive from them - works only with combination of ",(0,l.kt)("inlineCode",{parentName:"td"},"--apollo")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--maxDepth")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Fail when operation depth exceeds maximum depth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--require")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-r")),(0,l.kt)("td",{parentName:"tr",align:null},"Require a module"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--token")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-t")),(0,l.kt)("td",{parentName:"tr",align:null},"An access token"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--header")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-h")),(0,l.kt)("td",{parentName:"tr",align:null},"Set HTTP header (",(0,l.kt)("inlineCode",{parentName:"td"},"--header 'Auth: Basic 123'"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))))}k.isMDXComponent=!0},8944:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);