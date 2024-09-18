import{I as B,a5 as A,a7 as z,G as I,u as N,W as o,a9 as O,am as P,ab as R,ad as W,aT as Y,az as w,ag as q,at as J,aj as K,af as Z,a_ as Q,b5 as S,x as i,a6 as X,aA as C,aE as _,bI as ee,a as G,h as ae,b1 as le,b2 as te,bJ as oe,e as L,Y as se,bn as re,M as V,D as ne,bK as ue,a$ as ie,b7 as ve,bF as de,o as ce,p as pe,V as U,aN as me,E as ge,U as $}from"./eo-dash.Dw0eV_tO.js";import{S as M}from"./VImg-DRTY7QB-.DsHW7_mO.js";import{B as fe}from"./index-BplU5l6s.DTJ9mSCz.js";import{i as be}from"./ssrBoot-BgB6JsO4.c7sf-T2P.js";import"./framework.BO2YHfug.js";import"./transition-DH7d6Nr9.C1Cp5hUy.js";const D=B({text:String,...A(),...z()},"VToolbarTitle"),j=I()({name:"VToolbarTitle",props:D(),setup(e,v){let{slots:a}=v;return N(()=>{const u=!!(a.default||a.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var r;return[u&&o("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(r=a.default)==null?void 0:r.call(a)])]}})}),{}}}),he=[null,"prominent","default","comfortable","compact"],F=B({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>he.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...O(),...A(),...P(),...R(),...z({tag:"header"}),...W()},"VToolbar"),k=I()({name:"VToolbar",props:F(),setup(e,v){var g;let{slots:a}=v;const{backgroundColorClasses:u,backgroundColorStyles:r}=Y(w(e,"color")),{borderClasses:l}=q(e),{elevationClasses:n}=J(e),{roundedClasses:d}=K(e),{themeClasses:f}=Z(e),{rtlClasses:x}=Q(),c=S(!!(e.extended||(g=a.extension)!=null&&g.call(a))),p=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=i(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return X({VBtn:{variant:"text"}}),N(()=>{var T;const s=!!(e.title||a.title),m=!!(a.image||e.image),y=(T=a.extension)==null?void 0:T.call(a);return c.value=!!(e.extended||y),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,l.value,n.value,d.value,f.value,x.value,e.class],style:[r.value,e.style]},{default:()=>[m&&o("div",{key:"image",class:"v-toolbar__image"},[a.image?o(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):o(M,{key:"image-img",cover:!0,src:e.image},null)]),o(C,{defaults:{VTabs:{height:_(p.value)}}},{default:()=>{var t,b,H;return[o("div",{class:"v-toolbar__content",style:{height:_(p.value)}},[a.prepend&&o("div",{class:"v-toolbar__prepend"},[(t=a.prepend)==null?void 0:t.call(a)]),s&&o(j,{key:"title",text:e.title},{text:a.title}),(b=a.default)==null?void 0:b.call(a),a.append&&o("div",{class:"v-toolbar__append"},[(H=a.append)==null?void 0:H.call(a)])])]}}),o(C,{defaults:{VTabs:{height:_(h.value)}}},{default:()=>[o(fe,null,{default:()=>[c.value&&o("div",{class:"v-toolbar__extension",style:{height:_(h.value)}},[y])]})]})]})}),{contentHeight:p,extensionHeight:h}}}),ye=B({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Se(e){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=v;let u=0,r=0;const l=G(null),n=S(0),d=S(0),f=S(0),x=S(!1),c=S(!1),p=i(()=>Number(e.scrollThreshold)),h=i(()=>re((p.value-n.value)/p.value||0)),g=()=>{const s=l.value;if(!s||a&&!a.value)return;u=n.value,n.value="window"in s?s.pageYOffset:s.scrollTop;const m=s instanceof Window?document.documentElement.scrollHeight:s.scrollHeight;if(r!==m){r=m;return}c.value=n.value<u,f.value=Math.abs(n.value-p.value)};return V(c,()=>{d.value=d.value||n.value}),V(x,()=>{d.value=0}),ne(()=>{V(()=>e.scrollTarget,s=>{var y;const m=s?document.querySelector(s):window;if(!m){ue(`Unable to locate element with identifier ${s}`);return}m!==l.value&&((y=l.value)==null||y.removeEventListener("scroll",g),l.value=m,l.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),ie(()=>{var s;(s=l.value)==null||s.removeEventListener("scroll",g)}),a&&V(a,g,{immediate:!0}),{scrollThreshold:p,currentScroll:n,currentThreshold:f,isScrollActive:x,scrollRatio:h,isScrollingUp:c,savedScroll:d}}const xe=B({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...F(),...ee(),...ye(),height:{type:[Number,String],default:64}},"VAppBar"),He=I()({name:"VAppBar",props:xe(),emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:a}=v;const u=G(),r=ae(e,"modelValue"),l=i(()=>{var b;const t=new Set(((b=e.scrollBehavior)==null?void 0:b.split(" "))??[]);return{hide:t.has("hide"),fullyHide:t.has("fully-hide"),inverted:t.has("inverted"),collapse:t.has("collapse"),elevate:t.has("elevate"),fadeImage:t.has("fade-image")}}),n=i(()=>{const t=l.value;return t.hide||t.fullyHide||t.inverted||t.collapse||t.elevate||t.fadeImage||!r.value}),{currentScroll:d,scrollThreshold:f,isScrollingUp:x,scrollRatio:c}=Se(e,{canScroll:n}),p=i(()=>l.value.hide||l.value.fullyHide),h=i(()=>e.collapse||l.value.collapse&&(l.value.inverted?c.value>0:c.value===0)),g=i(()=>e.flat||l.value.fullyHide&&!r.value||l.value.elevate&&(l.value.inverted?d.value>0:d.value===0)),s=i(()=>l.value.fadeImage?l.value.inverted?1-c.value:c.value:void 0),m=i(()=>{var H,E;if(l.value.hide&&l.value.inverted)return 0;const t=((H=u.value)==null?void 0:H.contentHeight)??0,b=((E=u.value)==null?void 0:E.extensionHeight)??0;return p.value?d.value<f.value||l.value.fullyHide?t+b:t:t+b});le(i(()=>!!e.scrollBehavior),()=>{te(()=>{p.value?l.value.inverted?r.value=d.value>f.value:r.value=x.value||d.value<f.value:r.value=!0})});const{ssrBootStyles:y}=be(),{layoutItemStyles:T}=oe({id:e.name,order:i(()=>parseInt(e.order,10)),position:w(e,"location"),layoutSize:m,elementSize:S(void 0),active:r,absolute:w(e,"absolute")});return N(()=>{const t=k.filterProps(e);return o(k,L({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...T.value,"--v-toolbar-image-opacity":s.value,height:void 0,...y.value},e.style]},t,{collapse:h.value,flat:g.value}),a)}),{}}}),Te=I()({name:"VAppBarTitle",props:D(),setup(e,v){let{slots:a}=v;return N(()=>o(j,L(e,{class:"v-app-bar-title"}),a)),{}}}),_e={__name:"Header",setup(e){var u;const v=ve(de),a=(u=v.brand)==null?void 0:u.name;return(r,l)=>(ce(),pe(He,{color:"primary"},{default:U(()=>{var n;return[o(Te,null,{default:U(()=>[me(ge($(a)),1)]),_:1}),o(M,{class:"mx-12 logo",src:(n=$(v).brand)==null?void 0:n.logo},null,8,["src"])]}),_:1}))}},Ee=se(_e,[["__scopeId","data-v-d3a5e05e"]]);export{Ee as default};