import{T as N,z as U,aA as X,X as C,V as w,B as l,i as ce,a as ve,aU as Y,v as M,e as k,aV as Z,q as de,r as _,u as E,D as m,N as I,aW as ge,aX as G,a7 as pe,K as Q,C as D,E as me,n as fe,x as W,A as $,aY as be,aZ as he,F as ye,a_ as Se,a$ as _e,j as Te,f as xe,aM as Be,b0 as A,b1 as Ve,c as ze,b as Ie,o as Ne,b2 as Ce,aN as we,J as He,aj as $e,S as je,b3 as Re,g as ke,ad as Ue,Z as Ae,W as Ee,l as K,aT as We,at as qe,I as J}from"./eo-dash.BBvrGB09.js";import{j as Oe,T as R}from"./transition-BlLt41wg.BkUtu7oX.js";import{T as Fe}from"./index-CabQjjQg.CJS8_LNW.js";import{i as De}from"./ssrBoot-DWJ-z4I-.cQ_YBQv6.js";import"./framework.CXycA2KK.js";function Ke(e,n){if(!G)return;const a=n.modifiers||{},t=n.value,{handler:i,options:s}=typeof t=="object"?t:{handler:t,options:{}},f=new IntersectionObserver(function(){var g;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],y=arguments.length>1?arguments[1]:void 0;const u=(g=e._observe)==null?void 0:g[n.instance.$.uid];if(!u)return;const r=d.some(p=>p.isIntersecting);i&&(!a.quiet||u.init)&&(!a.once||r||u.init)&&i(r,d,y),r&&a.once?ee(e,n):u.init=!0},s);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:f},f.observe(e)}function ee(e,n){var t;const a=(t=e._observe)==null?void 0:t[n.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Je={mounted:Ke,unmounted:ee},ae=N({text:String,...U(),...X()},"VToolbarTitle"),le=C()({name:"VToolbarTitle",props:ae(),setup(e,n){let{slots:a}=n;return w(()=>{const t=!!(a.default||a.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var i;return[t&&l("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(i=a.default)==null?void 0:i.call(a)])]}})}),{}}});function Le(e){return{aspectStyles:m(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const te=N({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...U(),...ce()},"VResponsive"),L=C()({name:"VResponsive",props:te(),setup(e,n){let{slots:a}=n;const{aspectStyles:t}=Le(e),{dimensionStyles:i}=ve(e);return w(()=>{var s;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[l("div",{class:"v-responsive__sizer",style:t.value},null),(s=a.additional)==null?void 0:s.call(a),a.default&&l("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),Pe=N({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...te(),...U(),...Y(),...Oe()},"VImg"),re=C()({name:"VImg",directives:{intersect:Je},props:Pe(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:a,slots:t}=n;const{backgroundColorClasses:i,backgroundColorStyles:s}=M(k(e,"color")),{roundedClasses:f}=Z(e),d=de("VImg"),y=_(""),u=E(),r=_(e.eager?"loading":"idle"),g=_(),p=_(),o=m(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=m(()=>o.value.aspect||g.value/p.value||0);I(()=>e.src,()=>{T(r.value!=="idle")}),I(S,(v,b)=>{!v&&b&&u.value&&h(u.value)}),ge(()=>T());function T(v){if(!(e.eager&&v)&&!(G&&!v&&!e.eager)){if(r.value="loading",o.value.lazySrc){const b=new Image;b.src=o.value.lazySrc,h(b,null)}o.value.src&&pe(()=>{var b;a("loadstart",((b=u.value)==null?void 0:b.currentSrc)||o.value.src),setTimeout(()=>{var x;if(!d.isUnmounted)if((x=u.value)!=null&&x.complete){if(u.value.naturalWidth||V(),r.value==="error")return;S.value||h(u.value,null),r.value==="loading"&&B()}else S.value||h(u.value),z()})})}}function B(){var v;d.isUnmounted||(z(),h(u.value),r.value="loaded",a("load",((v=u.value)==null?void 0:v.currentSrc)||o.value.src))}function V(){var v;d.isUnmounted||(r.value="error",a("error",((v=u.value)==null?void 0:v.currentSrc)||o.value.src))}function z(){const v=u.value;v&&(y.value=v.currentSrc||v.src)}let c=-1;Q(()=>{clearTimeout(c)});function h(v){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const x=()=>{if(clearTimeout(c),d.isUnmounted)return;const{naturalHeight:O,naturalWidth:F}=v;O||F?(g.value=F,p.value=O):!v.complete&&r.value==="loading"&&b!=null?c=window.setTimeout(x,b):(v.currentSrc.endsWith(".svg")||v.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,p.value=1)};x()}const H=m(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),j=()=>{var x;if(!o.value.src||r.value==="idle")return null;const v=l("img",{class:["v-img__img",H.value],style:{objectPosition:e.position},src:o.value.src,srcset:o.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:u,onLoad:B,onError:V},null),b=(x=t.sources)==null?void 0:x.call(t);return l(R,{transition:e.transition,appear:!0},{default:()=>[D(b?l("picture",{class:"v-img__picture"},[b,v]):v,[[He,r.value==="loaded"]])]})},oe=()=>l(R,{transition:e.transition},{default:()=>[o.value.lazySrc&&r.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",H.value],style:{objectPosition:e.position},src:o.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),ne=()=>t.placeholder?l(R,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,ie=()=>t.error?l(R,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,ue=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,q=_(!1);{const v=I(S,b=>{b&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{q.value=!0})}),v())})}return w(()=>{const v=L.filterProps(e);return D(l(L,W({class:["v-img",{"v-img--booting":!q.value},i.value,f.value,e.class],style:[{width:$(e.width==="auto"?g.value:e.width)},s.value,e.style]},v,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(fe,null,[l(j,null,null),l(oe,null,null),l(ue,null,null),l(ne,null,null),l(ie,null,null)]),default:t.default}),[[me("intersect"),{handler:T,options:e.options},null,{once:!0}]])}),{currentSrc:y,image:u,state:r,naturalWidth:g,naturalHeight:p}}}),Xe=[null,"prominent","default","comfortable","compact"],se=N({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Xe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...be(),...U(),...he(),...Y(),...X({tag:"header"}),...ye()},"VToolbar"),P=C()({name:"VToolbar",props:se(),setup(e,n){var o;let{slots:a}=n;const{backgroundColorClasses:t,backgroundColorStyles:i}=M(k(e,"color")),{borderClasses:s}=Se(e),{elevationClasses:f}=_e(e),{roundedClasses:d}=Z(e),{themeClasses:y}=Te(e),{rtlClasses:u}=xe(),r=_(!!(e.extended||(o=a.extension)!=null&&o.call(a))),g=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),p=m(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Be({VBtn:{variant:"text"}}),w(()=>{var V;const S=!!(e.title||a.title),T=!!(a.image||e.image),B=(V=a.extension)==null?void 0:V.call(a);return r.value=!!(e.extended||B),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},t.value,s.value,f.value,d.value,y.value,u.value,e.class],style:[i.value,e.style]},{default:()=>[T&&l("div",{key:"image",class:"v-toolbar__image"},[a.image?l(A,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):l(re,{key:"image-img",cover:!0,src:e.image},null)]),l(A,{defaults:{VTabs:{height:$(g.value)}}},{default:()=>{var z,c,h;return[l("div",{class:"v-toolbar__content",style:{height:$(g.value)}},[a.prepend&&l("div",{class:"v-toolbar__prepend"},[(z=a.prepend)==null?void 0:z.call(a)]),S&&l(le,{key:"title",text:e.title},{text:a.title}),(c=a.default)==null?void 0:c.call(a),a.append&&l("div",{class:"v-toolbar__append"},[(h=a.append)==null?void 0:h.call(a)])])]}}),l(A,{defaults:{VTabs:{height:$(p.value)}}},{default:()=>[l(Fe,null,{default:()=>[r.value&&l("div",{class:"v-toolbar__extension",style:{height:$(p.value)}},[B])]})]})]})}),{contentHeight:g,extensionHeight:p}}}),Ye=N({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Me(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=n;let t=0;const i=E(null),s=_(0),f=_(0),d=_(0),y=_(!1),u=_(!1),r=m(()=>Number(e.scrollThreshold)),g=m(()=>$e((r.value-s.value)/r.value||0)),p=()=>{const o=i.value;!o||a&&!a.value||(t=s.value,s.value="window"in o?o.pageYOffset:o.scrollTop,u.value=s.value<t,d.value=Math.abs(s.value-r.value))};return I(u,()=>{f.value=f.value||s.value}),I(y,()=>{f.value=0}),je(()=>{I(()=>e.scrollTarget,o=>{var T;const S=o?document.querySelector(o):window;if(!S){Re(`Unable to locate element with identifier ${o}`);return}S!==i.value&&((T=i.value)==null||T.removeEventListener("scroll",p),i.value=S,i.value.addEventListener("scroll",p,{passive:!0}))},{immediate:!0})}),Q(()=>{var o;(o=i.value)==null||o.removeEventListener("scroll",p)}),a&&I(a,p,{immediate:!0}),{scrollThreshold:r,currentScroll:s,currentThreshold:d,isScrollActive:y,scrollRatio:g,isScrollingUp:u,savedScroll:f}}const Ze=N({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...se(),...Ve(),...Ye(),height:{type:[Number,String],default:64}},"VAppBar"),Ge=C()({name:"VAppBar",props:Ze(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=E(),i=ze(e,"modelValue"),s=m(()=>{var h;const c=new Set(((h=e.scrollBehavior)==null?void 0:h.split(" "))??[]);return{hide:c.has("hide"),fullyHide:c.has("fully-hide"),inverted:c.has("inverted"),collapse:c.has("collapse"),elevate:c.has("elevate"),fadeImage:c.has("fade-image")}}),f=m(()=>{const c=s.value;return c.hide||c.fullyHide||c.inverted||c.collapse||c.elevate||c.fadeImage||!i.value}),{currentScroll:d,scrollThreshold:y,isScrollingUp:u,scrollRatio:r}=Me(e,{canScroll:f}),g=m(()=>s.value.hide||s.value.fullyHide),p=m(()=>e.collapse||s.value.collapse&&(s.value.inverted?r.value>0:r.value===0)),o=m(()=>e.flat||s.value.fullyHide&&!i.value||s.value.elevate&&(s.value.inverted?d.value>0:d.value===0)),S=m(()=>s.value.fadeImage?s.value.inverted?1-r.value:r.value:void 0),T=m(()=>{var H,j;const c=Number(((H=t.value)==null?void 0:H.contentHeight)??e.height),h=Number(((j=t.value)==null?void 0:j.extensionHeight)??0);return g.value?d.value<y.value||s.value.fullyHide?c+h:c:c+h});Ie(m(()=>!!e.scrollBehavior),()=>{Ne(()=>{g.value?s.value.inverted?i.value=d.value>y.value:i.value=u.value||d.value<y.value:i.value=!0})});const{ssrBootStyles:B}=De(),{layoutItemStyles:V,layoutIsReady:z}=Ce({id:e.name,order:m(()=>parseInt(e.order,10)),position:k(e,"location"),layoutSize:T,elementSize:_(void 0),active:i,absolute:k(e,"absolute")});return w(()=>{const c=P.filterProps(e);return l(P,W({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...V.value,"--v-toolbar-image-opacity":S.value,height:void 0,...B.value},e.style]},c,{collapse:p.value,flat:o.value}),a)}),z}}),Qe=C()({name:"VAppBarTitle",props:ae(),setup(e,n){let{slots:a}=n;return w(()=>l(le,W(e,{class:"v-app-bar-title"}),a)),{}}}),ea={__name:"Header",setup(e){var t;const n=ke(Ue),a=(t=n.brand)==null?void 0:t.name;return(i,s)=>(Ae(),Ee(Ge,{color:"primary"},{default:K(()=>{var f;return[l(Qe,null,{default:K(()=>[We(qe(J(a)),1)]),_:1}),l(re,{class:"mx-12 logo",src:(f=J(n).brand)==null?void 0:f.logo},null,8,["src"])]}),_:1}))}},oa=we(ea,[["__scopeId","data-v-68395672"]]);export{oa as default};