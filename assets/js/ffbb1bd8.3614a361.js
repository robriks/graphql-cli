(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[990],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},517:function(e,t,n){"use strict";var a=n(7378);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},4535:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7378),r=n(4956);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(8944),o="tabItem_c0e5",s="tabItemActive_28AG";var d=37,p=39;var c=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,c=e.values,u=e.groupId,m=e.className,h=l(),k=h.tabGroupChoices,g=h.setTabGroupChoices,f=(0,a.useState)(r),b=f[0],v=f[1],N=a.Children.toArray(e.children),y=[];if(null!=u){var w=k[u];null!=w&&w!==b&&c.some((function(e){return e.value===w}))&&v(w)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),a=c[n].value;v(a),null!=u&&(g(u,a),setTimeout((function(){var e,n,a,r,l,i,o,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,d=i.innerWidth,n>=0&&l<=d&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case p:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case d:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:T,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},4956:function(e,t,n){"use strict";var a=(0,n(7378).createContext)(void 0);t.Z=a},5180:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(9603),r=n(120),l=(n(7378),n(5318)),i=n(4535),o=n(517),s=["components"],d={id:"serve",title:"serve",sidebar_label:"serve"},p=void 0,c={unversionedId:"serve",id:"serve",isDocsHomePage:!1,title:"serve",description:"Serves a full featured GraphQL CRUD API with subscriptions and data synchronization running in just a few seconds without writing a single line of code - all you need is a data model .graphql file.",source:"@site/docs/command-serve.md",sourceDirName:".",slug:"/serve",permalink:"/serve",editUrl:"https://github.com/urigo/graphql-cli/edit/master/website/docs/command-serve.md",version:"current",frontMatter:{id:"serve",title:"serve",sidebar_label:"serve"},sidebar:"docs",previous:{title:"introspect",permalink:"/introspect"},next:{title:"similar",permalink:"/similar"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Enable Data Synchronization",id:"enable-data-synchronization",children:[]}],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Serves a full featured ",(0,l.kt)("a",{parentName:"p",href:"https://graphqlcrud.org/"},"GraphQL CRUD")," API with subscriptions and data synchronization running in just a few seconds without writing a single line of code - all you need is a data model ",(0,l.kt)("inlineCode",{parentName:"p"},".graphql")," file."),(0,l.kt)("p",null,"GraphQL Serve is a CLI tool that leverages the power of Graphback to generate a codeless Node.js GraphQL API complete with schema and CRUD resolvers and an in-memory MongoDB database.  "),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)(i.Z,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn global add @graphql-cli/serve\n"))),(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i -g @graphql-cli/serve\n")))),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,"The bare minimum you need is a GraphQL file with your data models. Create a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"Note.graphql")," and add the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'""" @model """\ntype Note {\n  _id: GraphbackObjectID!\n  title: String!\n  description: String\n  likes: Int\n}\n\nscalar GraphbackObjectID\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@model")," annotation indicates that ",(0,l.kt)("inlineCode",{parentName:"p"},"Note")," is a data model and Graphback will generate resolvers, a CRUD service and data source for it. You can learn how to build more complex data models in ",(0,l.kt)("a",{parentName:"p",href:"https://graphback.dev/docs/model/datamodel#model"},"Data Model"),"."),(0,l.kt)("h4",{id:"running-your-codeless-graphql-server"},"Running your codeless GraphQL server"),(0,l.kt)("p",null,"To start your server, run the following command from the same directory as ",(0,l.kt)("inlineCode",{parentName:"p"},"Note.graphql"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"graphql serve Note.graphql\n")),(0,l.kt)("p",null,"This will start a GraphQL server on a random port using the ",(0,l.kt)("inlineCode",{parentName:"p"},"Note.graphql")," data models we just added."),(0,l.kt)("p",null,"You can customise the directory of the data models:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"graphql serve ./path/to/models\n")),(0,l.kt)("p",null,"You can also specify where to load the data models from with a Glob pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"graphql serve ./schema/**/*.graphql\n")),(0,l.kt)("p",null,"You can specify which port to start the server on:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ graphql serve ./path/to/models --port 8080\n\nStarting server...\n\nListening at: http://localhost:8080/graphql\n")),(0,l.kt)("h3",{id:"enable-data-synchronization"},"Enable Data Synchronization"),(0,l.kt)("p",null,"GraphQL Serve can also operate on data sync models. Under the hood this uses the ",(0,l.kt)("a",{parentName:"p",href:"https://graphback.dev/docs/datasync/intro"},"Data Sync")," package.\nTo enable data synchronization, all we need to do is enable datasync capabilities on our models via the ",(0,l.kt)("inlineCode",{parentName:"p"},"@datasync")," annotation."),(0,l.kt)("p",null,"For the ",(0,l.kt)("inlineCode",{parentName:"p"},"Note")," model defined above, this would look like: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'""" \n@model\n@datasync \n"""\ntype Note {\n  _id: GraphbackObjectID!\n  title: String!\n  description: String\n  likes: Int\n}\n\nscalar GraphbackObjectID\n')),(0,l.kt)("p",null,"Once we have a model with datasync capabilities, we can run our GraphQL server by enabling data synchronization as shown below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"graphql serve Note.graphql --datasync\n")),(0,l.kt)("p",null,"Conflict resolution strategies for datasync enabled models can be specified via the --conflict option:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"graphql serve Note.graphql --datasync --conflict=clientSideWins\n")),(0,l.kt)("p",null,"This defaults to ClientSideWins, if unset."),(0,l.kt)("p",null,"The TTL for delta tables, can also be set using the --deltaTTL option:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"graphql serve Note.graphql --datasync --deltaTTL=172800\n")),(0,l.kt)("p",null,"This value defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"172800")," when unused"),(0,l.kt)("h4",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"argument"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Model")),(0,l.kt)("td",{parentName:"tr",align:null},"Directory to search for data models"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h4",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"option"),(0,l.kt)("th",{parentName:"tr",align:null},"alias"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--port")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-p")),(0,l.kt)("td",{parentName:"tr",align:null},"Port on which to run the HTTP server"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Random port"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--datasync")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ds")),(0,l.kt)("td",{parentName:"tr",align:null},"Enable datasynchronization features"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--deltaTTL")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a conflict resolution strategy with --datasync. Choices: ",(0,l.kt)("inlineCode",{parentName:"td"},"clientSideWins"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"serverSideWins"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"throwOnConflict")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clientSideWins"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--conflict")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a TTL for delta tables with --datasync"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"172800"))))))}h.isMDXComponent=!0},8944:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);