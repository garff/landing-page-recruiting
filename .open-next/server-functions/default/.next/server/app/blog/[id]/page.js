(()=>{var e={};e.id=548,e.ids=[548],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2183:(e,a,s)=>{"use strict";s.r(a),s.d(a,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>o,routeModule:()=>h,tree:()=>c}),s(665),s(2280),s(5866);var r=s(3191),t=s(8716),l=s(7922),i=s.n(l),n=s(5231),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);s.d(a,d);let c=["",{children:["blog",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,665)),"/home/garff/Projects/recruiting/project/app/blog/[id]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,2280)),"/home/garff/Projects/recruiting/project/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],o=["/home/garff/Projects/recruiting/project/app/blog/[id]/page.tsx"],x="/blog/[id]/page",m={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/blog/[id]/page",pathname:"/blog/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6832:(e,a,s)=>{Promise.resolve().then(s.bind(s,6468))},6468:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>b});var r=s(326),t=s(7577),l=s(7389),i=s(6226),n=s(434),d=s(4274),c=s(772),o=s(567),x=s(2643),m=s(2881);let h=(0,m.Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var p=s(7358),u=s(8998),g=s(9635);let f=(0,m.Z)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),j=(0,m.Z)("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]),v=(0,m.Z)("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]),y=(e,a)=>new Date(e).toLocaleDateString("da"===a?"da-DK":"en-US",{year:"numeric",month:"long",day:"numeric"});function b(){let{t:e,language:a}=(0,d.Z)();(0,l.useParams)(),(0,l.useRouter)();let[s,m]=(0,t.useState)(null),[b,N]=(0,t.useState)([]);return s?(0,r.jsxs)("div",{className:"flex flex-col min-h-screen",children:[r.jsx("section",{className:"bg-primary/5 py-16","aria-labelledby":"article-title",children:r.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex flex-col items-center text-center",children:[r.jsx(n.default,{href:"/blog",className:"self-start mb-6",children:(0,r.jsxs)(c.z,{variant:"ghost",size:"sm",className:"gap-2",children:[r.jsx(h,{className:"h-4 w-4","aria-hidden":"true"}),e.blog.backToBlog]})}),r.jsx(o.C,{className:"mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors",children:s.category}),r.jsx("h1",{id:"article-title",className:"text-3xl sm:text-4xl md:text-5xl font-bold mb-6",children:s.title}),(0,r.jsxs)("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-8",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(p.Z,{className:"h-4 w-4 mr-1","aria-hidden":"true"}),r.jsx("span",{children:y(s.date,a)})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(u.Z,{className:"h-4 w-4 mr-1","aria-hidden":"true"}),(0,r.jsxs)("span",{children:[s.readTime," read"]})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(g.Z,{className:"h-4 w-4 mr-1","aria-hidden":"true"}),r.jsx("span",{children:s.author})]})]}),r.jsx("div",{className:"relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden mb-8",children:r.jsx(i.default,{src:s.image,alt:s.title,fill:!0,className:"object-cover",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px",priority:!0})})]})})}),r.jsx("section",{className:"py-12 bg-background","aria-labelledby":"article-content",children:(0,r.jsxs)("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,r.jsxs)("div",{className:"flex justify-end gap-3 mb-8",children:[(0,r.jsxs)(c.z,{variant:"outline",size:"sm",className:"gap-2",children:[r.jsx(f,{className:"h-4 w-4","aria-hidden":"true"}),e.blog.share]}),(0,r.jsxs)(c.z,{variant:"outline",size:"sm",className:"gap-2",children:[r.jsx(j,{className:"h-4 w-4","aria-hidden":"true"}),e.blog.save]})]}),r.jsx("div",{className:"prose prose-lg max-w-none",dangerouslySetInnerHTML:{__html:s.content},"aria-labelledby":"article-content"}),(0,r.jsxs)("div",{className:"mt-12 pt-8 border-t flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsxs)(c.z,{variant:"outline",size:"sm",className:"gap-2",children:[r.jsx(v,{className:"h-4 w-4","aria-hidden":"true"}),e.blog.helpful]}),(0,r.jsxs)("span",{className:"text-sm text-muted-foreground",children:["42 ",e.blog.peopleFoundHelpful]})]}),(0,r.jsxs)(c.z,{variant:"outline",size:"sm",className:"gap-2",children:[r.jsx(f,{className:"h-4 w-4","aria-hidden":"true"}),e.blog.share]})]})]})}),b.length>0&&r.jsx("section",{className:"py-12 bg-primary/5","aria-labelledby":"related-articles-heading",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsx("h2",{id:"related-articles-heading",className:"text-2xl font-bold mb-8",children:e.blog.relatedArticles}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:b.map(s=>(0,r.jsxs)(x.Zb,{className:"h-full flex flex-col",children:[r.jsx("div",{className:"relative h-48 w-full",children:r.jsx(i.default,{src:s.image,alt:s.title,fill:!0,className:"object-cover rounded-t-lg",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"})}),(0,r.jsxs)(x.Ol,{className:"flex-grow",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[r.jsx(o.C,{className:"bg-primary/10 text-primary hover:bg-primary/20 transition-colors",children:s.category}),r.jsx("span",{className:"text-xs text-muted-foreground",children:y(s.date,a)})]}),r.jsx(x.ll,{className:"text-xl",children:s.title}),r.jsx(x.SZ,{className:"line-clamp-2",children:s.excerpt})]}),r.jsx(x.aY,{className:"pt-0",children:(0,r.jsxs)("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(u.Z,{className:"h-4 w-4 mr-1","aria-hidden":"true"}),(0,r.jsxs)("span",{children:[s.readTime," read"]})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(g.Z,{className:"h-4 w-4 mr-1","aria-hidden":"true"}),r.jsx("span",{children:s.author})]})]})}),r.jsx(x.eW,{children:r.jsx(n.default,{href:`/blog/${s.id}`,className:"w-full",children:r.jsx(c.z,{variant:"outline",className:"w-full",children:e.blog.readArticle})})})]},s.id))})]})})]}):r.jsx("div",{className:"min-h-[calc(100vh-8rem)] flex items-center justify-center",children:r.jsx("p",{className:"text-base sm:text-xl text-muted-foreground","aria-live":"polite",children:e.blog.posts.loadingArticle})})}},567:(e,a,s)=>{"use strict";s.d(a,{C:()=>n});var r=s(326);s(7577);var t=s(8671),l=s(7863);let i=(0,t.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function n({className:e,variant:a,...s}){return r.jsx("div",{className:(0,l.cn)(i({variant:a}),e),...s})}},2643:(e,a,s)=>{"use strict";s.d(a,{Ol:()=>n,SZ:()=>c,Zb:()=>i,aY:()=>o,eW:()=>x,ll:()=>d});var r=s(326),t=s(7577),l=s(7863);let i=t.forwardRef(({className:e,...a},s)=>r.jsx("div",{ref:s,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...a}));i.displayName="Card";let n=t.forwardRef(({className:e,...a},s)=>r.jsx("div",{ref:s,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",e),...a}));n.displayName="CardHeader";let d=t.forwardRef(({className:e,...a},s)=>r.jsx("h3",{ref:s,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",e),...a}));d.displayName="CardTitle";let c=t.forwardRef(({className:e,...a},s)=>r.jsx("p",{ref:s,className:(0,l.cn)("text-sm text-muted-foreground",e),...a}));c.displayName="CardDescription";let o=t.forwardRef(({className:e,...a},s)=>r.jsx("div",{ref:s,className:(0,l.cn)("p-6 pt-0",e),...a}));o.displayName="CardContent";let x=t.forwardRef(({className:e,...a},s)=>r.jsx("div",{ref:s,className:(0,l.cn)("flex items-center p-6 pt-0",e),...a}));x.displayName="CardFooter"},7358:(e,a,s)=>{"use strict";s.d(a,{Z:()=>r});let r=(0,s(2881).Z)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},8998:(e,a,s)=>{"use strict";s.d(a,{Z:()=>r});let r=(0,s(2881).Z)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},665:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>r});let r=(0,s(8570).createProxy)(String.raw`/home/garff/Projects/recruiting/project/app/blog/[id]/page.tsx#default`)}};var a=require("../../../webpack-runtime.js");a.C(e);var s=e=>a(a.s=e),r=a.X(0,[396,416],()=>s(2183));module.exports=r})();