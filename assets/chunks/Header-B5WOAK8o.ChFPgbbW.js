import{M as V,a4 as M,a6 as Y,Y as I,r as C,U as s,ai as J,ak as R,a9 as O,ab as Z,aS as j,ay as $,aq as G,as as F,ag as K,ad as Q,aY as X,b3 as S,C as i,a5 as ee,az as N,aD as H,bH as ae,f as z,a as le,a_ as te,a$ as se,bI as oe,u as A,$ as re,bm as ne,P as B,l as ue,bJ as ie,aZ as ve,b5 as de,bE as ce,s as me,W as pe,L,aM as ge,w as fe,c as U}from"./eo-dash.DmlGEMRm.js";import{S as P}from"./VImg-DSNg_usi.DMDf71M7.js";import{B as be}from"./index-BUM-WuIt.Bxuas3zm.js";import{i as he}from"./ssrBoot-DxESBhxo.Cuc2w1Kz.js";import"./framework.D7uhl4cx.js";import"./transition-DWlqp9xA.BxY_slGY.js";const W=V({text:String,...M(),...Y()},"VToolbarTitle"),q=I()({name:"VToolbarTitle",props:W(),setup(e,v){let{slots:a}=v;return C(()=>{const u=!!(a.default||a.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var r;return[u&&s("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(r=a.default)==null?void 0:r.call(a)])]}})}),{}}}),ye=[null,"prominent","default","comfortable","compact"],D=V({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ye.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...J(),...M(),...R(),...O(),...Y({tag:"header"}),...Z()},"VToolbar"),E=I()({name:"VToolbar",props:D(),setup(e,v){var g;let{slots:a}=v;const{backgroundColorClasses:u,backgroundColorStyles:r}=j($(e,"color")),{borderClasses:l}=G(e),{elevationClasses:n}=F(e),{roundedClasses:d}=K(e),{themeClasses:f}=Q(e),{rtlClasses:x}=X(),c=S(!!(e.extended||(g=a.extension)!=null&&g.call(a))),m=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=i(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ee({VBtn:{variant:"text"}}),C(()=>{var _;const o=!!(e.title||a.title),p=!!(a.image||e.image),y=(_=a.extension)==null?void 0:_.call(a);return c.value=!!(e.extended||y),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,l.value,n.value,d.value,f.value,x.value,e.class],style:[r.value,e.style]},{default:()=>[p&&s("div",{key:"image",class:"v-toolbar__image"},[a.image?s(N,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):s(P,{key:"image-img",cover:!0,src:e.image},null)]),s(N,{defaults:{VTabs:{height:H(m.value)}}},{default:()=>{var T,t,b;return[s("div",{class:"v-toolbar__content",style:{height:H(m.value)}},[a.prepend&&s("div",{class:"v-toolbar__prepend"},[(T=a.prepend)==null?void 0:T.call(a)]),o&&s(q,{key:"title",text:e.title},{text:a.title}),(t=a.default)==null?void 0:t.call(a),a.append&&s("div",{class:"v-toolbar__append"},[(b=a.append)==null?void 0:b.call(a)])])]}}),s(N,{defaults:{VTabs:{height:H(h.value)}}},{default:()=>[s(be,null,{default:()=>[c.value&&s("div",{class:"v-toolbar__extension",style:{height:H(h.value)}},[y])]})]})]})}),{contentHeight:m,extensionHeight:h}}}),Se=V({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function xe(e){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=v;let u=0,r=0;const l=z(null),n=S(0),d=S(0),f=S(0),x=S(!1),c=S(!1),m=i(()=>Number(e.scrollThreshold)),h=i(()=>ne((m.value-n.value)/m.value||0)),g=()=>{const o=l.value;if(!o||a&&!a.value)return;u=n.value,n.value="window"in o?o.pageYOffset:o.scrollTop;const p=o instanceof Window?document.documentElement.scrollHeight:o.scrollHeight;if(r!==p){r=p;return}c.value=n.value<u,f.value=Math.abs(n.value-m.value)};return B(c,()=>{d.value=d.value||n.value}),B(x,()=>{d.value=0}),ue(()=>{B(()=>e.scrollTarget,o=>{var y;const p=o?document.querySelector(o):window;if(!p){ie(`Unable to locate element with identifier ${o}`);return}p!==l.value&&((y=l.value)==null||y.removeEventListener("scroll",g),l.value=p,l.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),ve(()=>{var o;(o=l.value)==null||o.removeEventListener("scroll",g)}),a&&B(a,g,{immediate:!0}),{scrollThreshold:m,currentScroll:n,currentThreshold:f,isScrollActive:x,scrollRatio:h,isScrollingUp:c,savedScroll:d}}const _e=V({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...D(),...ae(),...Se(),height:{type:[Number,String],default:64}},"VAppBar"),Te=I()({name:"VAppBar",props:_e(),emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:a}=v;const u=z(),r=le(e,"modelValue"),l=i(()=>{var b;const t=new Set(((b=e.scrollBehavior)==null?void 0:b.split(" "))??[]);return{hide:t.has("hide"),fullyHide:t.has("fully-hide"),inverted:t.has("inverted"),collapse:t.has("collapse"),elevate:t.has("elevate"),fadeImage:t.has("fade-image")}}),n=i(()=>{const t=l.value;return t.hide||t.fullyHide||t.inverted||t.collapse||t.elevate||t.fadeImage||!r.value}),{currentScroll:d,scrollThreshold:f,isScrollingUp:x,scrollRatio:c}=xe(e,{canScroll:n}),m=i(()=>l.value.hide||l.value.fullyHide),h=i(()=>e.collapse||l.value.collapse&&(l.value.inverted?c.value>0:c.value===0)),g=i(()=>e.flat||l.value.fullyHide&&!r.value||l.value.elevate&&(l.value.inverted?d.value>0:d.value===0)),o=i(()=>l.value.fadeImage?l.value.inverted?1-c.value:c.value:void 0),p=i(()=>{var w,k;const t=Number(((w=u.value)==null?void 0:w.contentHeight)??e.height),b=Number(((k=u.value)==null?void 0:k.extensionHeight)??0);return m.value?d.value<f.value||l.value.fullyHide?t+b:t:t+b});te(i(()=>!!e.scrollBehavior),()=>{se(()=>{m.value?l.value.inverted?r.value=d.value>f.value:r.value=x.value||d.value<f.value:r.value=!0})});const{ssrBootStyles:y}=he(),{layoutItemStyles:_,layoutIsReady:T}=oe({id:e.name,order:i(()=>parseInt(e.order,10)),position:$(e,"location"),layoutSize:p,elementSize:S(void 0),active:r,absolute:$(e,"absolute")});return C(()=>{const t=E.filterProps(e);return s(E,A({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{..._.value,"--v-toolbar-image-opacity":o.value,height:void 0,...y.value},e.style]},t,{collapse:h.value,flat:g.value}),a)}),T}}),He=I()({name:"VAppBarTitle",props:W(),setup(e,v){let{slots:a}=v;return C(()=>s(q,A(e,{class:"v-app-bar-title"}),a)),{}}}),Be={__name:"Header",setup(e){var u;const v=de(ce),a=(u=v.brand)==null?void 0:u.name;return(r,l)=>(me(),pe(Te,{color:"primary"},{default:L(()=>{var n;return[s(He,null,{default:L(()=>[ge(fe(U(a)),1)]),_:1}),s(P,{class:"mx-12 logo",src:(n=U(v).brand)==null?void 0:n.logo},null,8,["src"])]}),_:1}))}},ke=re(Be,[["__scopeId","data-v-d3a5e05e"]]);export{ke as default};
