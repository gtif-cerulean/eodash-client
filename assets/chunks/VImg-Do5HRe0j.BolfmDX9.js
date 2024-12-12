import{al as G,D as y,p as Y,h as z,q as w,aw as J,P as Q,Y as X,G as n,aj as N,ao as Z,F as p,K as ee,an as te}from"./framework.CxY9FQpQ.js";import{p as D,D as O,F as ne,g as W,L as re,b as $,aa as ae,K as se,ag as ie,H as le,aF as q,R as oe}from"./eo-dash.BIm2sYY-.js";import{m as ue,M as R}from"./transition-BVzHCiEq.X3mmN-x7.js";function ce(e,l){if(!q)return;const i=l.modifiers||{},r=l.value,{handler:g,options:m}=typeof r=="object"?r:{handler:r,options:{}},b=new IntersectionObserver(function(){var c;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],h=arguments.length>1?arguments[1]:void 0;const a=(c=e._observe)==null?void 0:c[l.instance.$.uid];if(!a)return;const s=d.some(f=>f.isIntersecting);g&&(!i.quiet||a.init)&&(!i.once||s||a.init)&&g(s,d,h),s&&i.once?E(e,l):a.init=!0},m);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:b},b.observe(e)}function E(e,l){var r;const i=(r=e._observe)==null?void 0:r[l.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const ve={mounted:ce,unmounted:E};function de(e){return{aspectStyles:z(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const H=D({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...O(),...ne()},"VResponsive"),U=W()({name:"VResponsive",props:H(),setup(e,l){let{slots:i}=l;const{aspectStyles:r}=de(e),{dimensionStyles:g}=re(e);return $(()=>{var m;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[g.value,e.style]},[n("div",{class:"v-responsive__sizer",style:r.value},null),(m=i.additional)==null?void 0:m.call(i),i.default&&n("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}}),ge=D({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...H(),...O(),...ae(),...ue()},"VImg"),_e=W()({name:"VImg",directives:{intersect:ve},props:ge(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:i,slots:r}=l;const{backgroundColorClasses:g,backgroundColorStyles:m}=se(G(e,"color")),{roundedClasses:b}=ie(e),d=le("VImg"),h=y(""),a=Y(),s=y(e.eager?"loading":"idle"),c=y(),f=y(),u=z(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=z(()=>u.value.aspect||c.value/f.value||0);w(()=>e.src,()=>{I(s.value!=="idle")}),w(S,(t,o)=>{!t&&o&&a.value&&_(a.value)}),J(()=>I());function I(t){if(!(e.eager&&t)&&!(q&&!t&&!e.eager)){if(s.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,_(o,null)}u.value.src&&Q(()=>{var o;i("loadstart",((o=a.value)==null?void 0:o.currentSrc)||u.value.src),setTimeout(()=>{var v;if(!d.isUnmounted)if((v=a.value)!=null&&v.complete){if(a.value.naturalWidth||k(),s.value==="error")return;S.value||_(a.value,null),s.value==="loading"&&C()}else S.value||_(a.value),T()})})}}function C(){var t;d.isUnmounted||(T(),_(a.value),s.value="loaded",i("load",((t=a.value)==null?void 0:t.currentSrc)||u.value.src))}function k(){var t;d.isUnmounted||(s.value="error",i("error",((t=a.value)==null?void 0:t.currentSrc)||u.value.src))}function T(){const t=a.value;t&&(h.value=t.currentSrc||t.src)}let P=-1;X(()=>{clearTimeout(P)});function _(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const v=()=>{if(clearTimeout(P),d.isUnmounted)return;const{naturalHeight:j,naturalWidth:F}=t;j||F?(c.value=F,f.value=j):!t.complete&&s.value==="loading"&&o!=null?P=window.setTimeout(v,o):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,f.value=1)};v()}const V=z(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),M=()=>{var v;if(!u.value.src||s.value==="idle")return null;const t=n("img",{class:["v-img__img",V.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:a,onLoad:C,onError:k},null),o=(v=r.sources)==null?void 0:v.call(r);return n(R,{transition:e.transition,appear:!0},{default:()=>[N(o?n("picture",{class:"v-img__picture"},[o,t]):t,[[te,s.value==="loaded"]])]})},x=()=>n(R,{transition:e.transition},{default:()=>[u.value.lazySrc&&s.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",V.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),A=()=>r.placeholder?n(R,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!r.error)&&n("div",{class:"v-img__placeholder"},[r.placeholder()])]}):null,L=()=>r.error?n(R,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&n("div",{class:"v-img__error"},[r.error()])]}):null,K=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,B=y(!1);{const t=w(S,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{B.value=!0})}),t())})}return $(()=>{const t=U.filterProps(e);return N(n(U,ee({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!B.value},g.value,b.value,e.class],style:[{width:oe(e.width==="auto"?c.value:e.width)},m.value,e.style]},t,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(p,null,[n(M,null,null),n(x,null,null),n(K,null,null),n(A,null,null),n(L,null,null)]),default:r.default}),[[Z("intersect"),{handler:I,options:e.options},null,{once:!0}]])}),{currentSrc:h,image:a,state:s,naturalWidth:c,naturalHeight:f}}});export{_e as V};
