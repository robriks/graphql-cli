(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[770],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},517:function(e,t,n){"use strict";var r=n(7378);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},4535:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7378),a=n(4956);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(8944),o="tabItem_c0e5",u="tabItemActive_28AG";var c=37,d=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,s=e.groupId,m=e.className,f=i(),k=f.tabGroupChoices,g=f.setTabGroupChoices,h=(0,r.useState)(a),b=h[0],v=h[1],y=r.Children.toArray(e.children),N=[];if(null!=s){var C=k[s];null!=C&&C!==b&&p.some((function(e){return e.value===C}))&&v(C)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;v(r),null!=s&&(g(s,r),setTimeout((function(){var e,n,r,a,i,l,o,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,n>=0&&i<=c&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case d:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case c:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},4956:function(e,t,n){"use strict";var r=(0,n(7378).createContext)(void 0);t.Z=r},5181:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(9603),a=n(120),i=(n(7378),n(5318)),l=n(4535),o=n(517),u=["components"],c={id:"diff",title:"diff",sidebar_label:"diff"},d=void 0,p={unversionedId:"diff",id:"diff",isDocsHomePage:!1,title:"diff",description:"Detect changes to your GraphQL Schema and prevent breaking your existing applications. See the official GraphQL Inspector documentation for details.",source:"@site/docs/command-diff.md",sourceDirName:".",slug:"/diff",permalink:"/diff",editUrl:"https://github.com/urigo/graphql-cli/edit/master/website/docs/command-diff.md",version:"current",frontMatter:{id:"diff",title:"diff",sidebar_label:"diff"},sidebar:"docs",previous:{title:"coverage",permalink:"/coverage"},next:{title:"discover",permalink:"/discover"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Detect changes to your GraphQL Schema and prevent breaking your existing applications. See the ",(0,i.kt)("a",{parentName:"p",href:"https://graphql-inspector.com/docs/essentials/diff"},"official GraphQL Inspector documentation")," for details."),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)(l.Z,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn global add @graphql-cli/diff\n"))),(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i -g @graphql-cli/diff\n")))),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"graphql diff [OLD_SCHEMA] [NEW_SCHEMA]\n")),(0,i.kt)("h4",{id:"arguments"},"Arguments"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"argument"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OLD_SCHEMA")),(0,i.kt)("td",{parentName:"tr",align:null},"A pointer to the old schema"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"extensions.diff.baseSchema")," property in GraphQL Config file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NEW_SCHEMA")),(0,i.kt)("td",{parentName:"tr",align:null},"A pointer to the new schema"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"schema")," property in GraphQL Config file")))),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"option"),(0,i.kt)("th",{parentName:"tr",align:null},"alias"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--require")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-r")),(0,i.kt)("td",{parentName:"tr",align:null},"Require a module"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--token")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-t")),(0,i.kt)("td",{parentName:"tr",align:null},"An access token"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--header")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-h")),(0,i.kt)("td",{parentName:"tr",align:null},"Set HTTP header (",(0,i.kt)("inlineCode",{parentName:"td"},"--header 'Auth: Basic 123'"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))))}f.isMDXComponent=!0},8944:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);