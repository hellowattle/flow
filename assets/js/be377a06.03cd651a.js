"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3414:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(941),r=n(4996);const i=e=>{let{alt:t,sources:n}=e;const[i,l]=(0,o.useState)(!1),s=e=>{"Escape"===e.key&&l(!1)};return(0,o.useEffect)((()=>(i?document.addEventListener("keydown",s):document.removeEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)})),[i]),o.createElement("div",{className:"zoomable-image "+(i?"fullscreen":""),onClick:()=>{l(!i)}},o.createElement(a.Z,{className:"zoomable-image-inner",alt:t,sources:{light:(0,r.Z)(n.light),dark:(0,r.Z)(n.dark)}}))}},1033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=n(7462),a=(n(7294),n(3905)),r=(n(941),n(4996),n(3414));const i={},l="CSV Loader",s={unversionedId:"examples/csv-loader",id:"examples/csv-loader",title:"CSV Loader",description:"The VectoStoreAgent component retrieves information from one or more vector stores. This example shows a VectoStoreAgent connected to a CSV file through the Chroma vector store. Process description:",source:"@site/docs/examples/csv-loader.mdx",sourceDirName:"examples",slug:"/examples/csv-loader",permalink:"/examples/csv-loader",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MidJourney Prompt Chain",permalink:"/examples/midjourney-prompt-chain"},next:{title:"Serp API Tool",permalink:"/examples/serp-api-tool"}},c={},m=[{value:"\u26d3\ufe0f LangFlow Example",id:"\ufe0f-langflow-example",level:2},{value:'<a target="_blank" href="json_files/CSV_Loader.json" download>Download Flow</a>',id:"download-flow",level:4}],p={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"csv-loader"},"CSV Loader"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"VectoStoreAgent")," component retrieves information from one or more vector stores. This example shows a ",(0,a.kt)("inlineCode",{parentName:"p"},"VectoStoreAgent")," connected to a CSV file through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Chroma")," vector store. Process description:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"CSVLoader")," loads a CSV file into a list of documents."),(0,a.kt)("li",{parentName:"ul"},"The extracted data is then processed by the ",(0,a.kt)("inlineCode",{parentName:"li"},"CharacterTextSplitter"),", which splits the text into small, meaningful chunks (usually sentences)."),(0,a.kt)("li",{parentName:"ul"},"These chunks feed the ",(0,a.kt)("inlineCode",{parentName:"li"},"Chroma")," vector store, which converts them into vectors and stores them for fast indexing."),(0,a.kt)("li",{parentName:"ul"},"Finally, the agent accesses the information of the vector store through the ",(0,a.kt)("inlineCode",{parentName:"li"},"VectorStoreInfo")," tool.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The vector store is used for efficient semantic search, while ",(0,a.kt)("inlineCode",{parentName:"p"},"VectorStoreInfo")," carries information about it, such as its name and description. Embeddings are a way to represent words, phrases, or any entities in a vector space. Learn more about them ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/embeddings/what-are-embeddings"},"here"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Once you build this flow, ask questions about the data in the chat interface (e.g., number of rows or columns).")),(0,a.kt)("h2",{id:"\ufe0f-langflow-example"},"\u26d3\ufe0f LangFlow Example"),(0,a.kt)(r.Z,{alt:"Docusaurus themed image",sources:{light:"img/csv-loader.png"},mdxType:"ZoomableImage"}),(0,a.kt)("h4",{id:"download-flow"},(0,a.kt)("a",{target:"\\_blank",href:"json_files/CSV_Loader.json",download:!0},"Download Flow")),(0,a.kt)("admonition",{title:"LangChain Components \ud83e\udd9c\ud83d\udd17",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://python.langchain.com/docs/modules/data_connection/document_loaders/integrations/csv"},(0,a.kt)("inlineCode",{parentName:"a"},"CSVLoader"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://python.langchain.com/docs/modules/data_connection/document_transformers/text_splitters/character_text_splitter"},(0,a.kt)("inlineCode",{parentName:"a"},"CharacterTextSplitter"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://python.langchain.com/docs/modules/data_connection/text_embedding/integrations/openai"},(0,a.kt)("inlineCode",{parentName:"a"},"OpenAIEmbedding"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://python.langchain.com/docs/modules/data_connection/vectorstores/integrations/chroma"},(0,a.kt)("inlineCode",{parentName:"a"},"Chroma"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://python.langchain.com/docs/modules/data_connection/vectorstores/"},(0,a.kt)("inlineCode",{parentName:"a"},"VectorStoreInfo"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://python.langchain.com/docs/modules/model_io/models/llms/integrations/openai"},(0,a.kt)("inlineCode",{parentName:"a"},"OpenAI"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://python.langchain.com/docs/modules/agents/toolkits/vectorstore"},(0,a.kt)("inlineCode",{parentName:"a"},"VectorStoreAgent"))))))}u.isMDXComponent=!0}}]);