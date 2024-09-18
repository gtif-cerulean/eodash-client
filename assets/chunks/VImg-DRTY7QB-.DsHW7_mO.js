import{I as N,a5 as O,al as Q,G as P,as as Z,u as q,ab as X,aT as D,az as J,aj as K,aZ as Y,b5 as S,a as ee,x as z,M as R,bL as ae,bM as x,aX as re,a$ as te,W as r,n as M,aC as se,k as le,e as ne,aE as ie,bb as oe}from"./eo-dash.Dw0eV_tO.js";import{j as ue,T as h}from"./transition-DH7d6Nr9.C1Cp5hUy.js";function ce(e,i){if(!x)return;const n=i.modifiers||{},t=i.value,{handler:g,options:m}=typeof t=="object"?t:{handler:t,options:{}},y=new IntersectionObserver(function(){var c;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],_=arguments.length>1?arguments[1]:void 0;const s=(c=e._observe)==null?void 0:c[i.instance.$.uid];if(!s)return;const l=d.some(p=>p.isIntersecting);g&&(!n.quiet||s.init)&&(!n.once||l||s.init)&&g(l,d,_),l&&n.once?E(e,i):s.init=!0},m);e._observe=Object(e._observe),e._observe[i.instance.$.uid]={init:!1,observer:y},y.observe(e)}function E(e,i){var t;const n=(t=e._observe)==null?void 0:t[i.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[i.instance.$.uid])}const ve={mounted:ce,unmounted:E};function de(e){return{aspectStyles:z(()=>{const i=Number(e.aspectRatio);return i?{paddingBottom:String(1/i*100)+"%"}:void 0})}}const F=N({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...O(),...Q()},"VResponsive"),W=P()({name:"VResponsive",props:F(),setup(e,i){let{slots:n}=i;const{aspectStyles:t}=de(e),{dimensionStyles:g}=Z(e);return q(()=>{var m;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[g.value,e.style]},[r("div",{class:"v-responsive__sizer",style:t.value},null),(m=n.additional)==null?void 0:m.call(n),n.default&&r("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),ge=N({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...F(),...O(),...X(),...ue()},"VImg"),be=P()({name:"VImg",directives:{intersect:ve},props:ge(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,i){let{emit:n,slots:t}=i;const{backgroundColorClasses:g,backgroundColorStyles:m}=D(J(e,"color")),{roundedClasses:y}=K(e),d=Y("VImg"),_=S(""),s=ee(),l=S(e.eager?"loading":"idle"),c=S(),p=S(),u=z(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=z(()=>u.value.aspect||c.value/p.value||0);R(()=>e.src,()=>{j(l.value!=="idle")}),R(b,(a,o)=>{!a&&o&&s.value&&f(s.value)}),ae(()=>j());function j(a){if(!(e.eager&&a)&&!(x&&!a&&!e.eager)){if(l.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,f(o,null)}u.value.src&&re(()=>{var o;n("loadstart",((o=s.value)==null?void 0:o.currentSrc)||u.value.src),setTimeout(()=>{var v;if(!d.isUnmounted)if((v=s.value)!=null&&v.complete){if(s.value.naturalWidth||w(),l.value==="error")return;b.value||f(s.value,null),l.value==="loading"&&$()}else b.value||f(s.value),C()})})}}function $(){var a;d.isUnmounted||(C(),f(s.value),l.value="loaded",n("load",((a=s.value)==null?void 0:a.currentSrc)||u.value.src))}function w(){var a;d.isUnmounted||(l.value="error",n("error",((a=s.value)==null?void 0:a.currentSrc)||u.value.src))}function C(){const a=s.value;a&&(_.value=a.currentSrc||a.src)}let I=-1;te(()=>{clearTimeout(I)});function f(a){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const v=()=>{if(clearTimeout(I),d.isUnmounted)return;const{naturalHeight:V,naturalWidth:k}=a;V||k?(c.value=k,p.value=V):!a.complete&&l.value==="loading"&&o!=null?I=window.setTimeout(v,o):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,p.value=1)};v()}const B=z(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),U=()=>{var v;if(!u.value.src||l.value==="idle")return null;const a=r("img",{class:["v-img__img",B.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:$,onError:w},null),o=(v=t.sources)==null?void 0:v.call(t);return r(h,{transition:e.transition,appear:!0},{default:()=>[M(o?r("picture",{class:"v-img__picture"},[o,a]):a,[[oe,l.value==="loaded"]])]})},A=()=>r(h,{transition:e.transition},{default:()=>[u.value.lazySrc&&l.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",B.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),H=()=>t.placeholder?r(h,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!t.error)&&r("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,L=()=>t.error?r(h,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&r("div",{class:"v-img__error"},[t.error()])]}):null,G=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=S(!1);{const a=R(b,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),a())})}return q(()=>{const a=W.filterProps(e);return M(r(W,ne({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!T.value},g.value,y.value,e.class],style:[{width:ie(e.width==="auto"?c.value:e.width)},m.value,e.style]},a,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(le,null,[r(U,null,null),r(A,null,null),r(G,null,null),r(H,null,null),r(L,null,null)]),default:t.default}),[[se("intersect"),{handler:j,options:e.options},null,{once:!0}]])}),{currentSrc:_,image:s,state:l,naturalWidth:c,naturalHeight:p}}});export{be as S};