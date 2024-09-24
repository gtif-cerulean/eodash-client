import{I as x,a4 as F,a5 as Q,G as M,ac as K,u as O,aS as Y,aa as Z,ab as D,aY as J,a7 as X,ak as S,b as ee,a as z,M as R,bu as ae,bv as P,ay as re,ae as te,W as r,j as W,as as le,N as se,l as ne,aq as ie,ar as oe}from"./eo-dash.BDUmUv6N.js";import{j as ue,T as h}from"./transition-CFHhDKFr.JKVA0VwE.js";function ce(e,i){if(!P)return;const n=i.modifiers||{},t=i.value,{handler:g,options:m}=typeof t=="object"?t:{handler:t,options:{}},y=new IntersectionObserver(function(){var c;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],_=arguments.length>1?arguments[1]:void 0;const l=(c=e._observe)==null?void 0:c[i.instance.$.uid];if(!l)return;const s=d.some(p=>p.isIntersecting);g&&(!n.quiet||l.init)&&(!n.once||s||l.init)&&g(s,d,_),s&&n.once?q(e,i):l.init=!0},m);e._observe=Object(e._observe),e._observe[i.instance.$.uid]={init:!1,observer:y},y.observe(e)}function q(e,i){var t;const n=(t=e._observe)==null?void 0:t[i.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[i.instance.$.uid])}const ve={mounted:ce,unmounted:q};function de(e){return{aspectStyles:z(()=>{const i=Number(e.aspectRatio);return i?{paddingBottom:String(1/i*100)+"%"}:void 0})}}const U=x({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...F(),...Q()},"VResponsive"),k=M()({name:"VResponsive",props:U(),setup(e,i){let{slots:n}=i;const{aspectStyles:t}=de(e),{dimensionStyles:g}=K(e);return O(()=>{var m;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[g.value,e.style]},[r("div",{class:"v-responsive__sizer",style:t.value},null),(m=n.additional)==null?void 0:m.call(n),n.default&&r("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),ge=x({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...U(),...F(),...Y(),...ue()},"VImg"),fe=M()({name:"VImg",directives:{intersect:ve},props:ge(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,i){let{emit:n,slots:t}=i;const{backgroundColorClasses:g,backgroundColorStyles:m}=Z(D(e,"color")),{roundedClasses:y}=J(e),d=X("VImg"),_=S(""),l=ee(),s=S(e.eager?"loading":"idle"),c=S(),p=S(),u=z(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),f=z(()=>u.value.aspect||c.value/p.value||0);R(()=>e.src,()=>{j(s.value!=="idle")}),R(f,(a,o)=>{!a&&o&&l.value&&b(l.value)}),ae(()=>j());function j(a){if(!(e.eager&&a)&&!(P&&!a&&!e.eager)){if(s.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,b(o,null)}u.value.src&&re(()=>{var o;n("loadstart",((o=l.value)==null?void 0:o.currentSrc)||u.value.src),setTimeout(()=>{var v;if(!d.isUnmounted)if((v=l.value)!=null&&v.complete){if(l.value.naturalWidth||$(),s.value==="error")return;f.value||b(l.value,null),s.value==="loading"&&w()}else f.value||b(l.value),B()})})}}function w(){var a;d.isUnmounted||(B(),b(l.value),s.value="loaded",n("load",((a=l.value)==null?void 0:a.currentSrc)||u.value.src))}function $(){var a;d.isUnmounted||(s.value="error",n("error",((a=l.value)==null?void 0:a.currentSrc)||u.value.src))}function B(){const a=l.value;a&&(_.value=a.currentSrc||a.src)}let I=-1;te(()=>{clearTimeout(I)});function b(a){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const v=()=>{if(clearTimeout(I),d.isUnmounted)return;const{naturalHeight:C,naturalWidth:T}=a;C||T?(c.value=T,p.value=C):!a.complete&&s.value==="loading"&&o!=null?I=window.setTimeout(v,o):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,p.value=1)};v()}const N=z(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),A=()=>{var v;if(!u.value.src||s.value==="idle")return null;const a=r("img",{class:["v-img__img",N.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:w,onError:$},null),o=(v=t.sources)==null?void 0:v.call(t);return r(h,{transition:e.transition,appear:!0},{default:()=>[W(o?r("picture",{class:"v-img__picture"},[o,a]):a,[[oe,s.value==="loaded"]])]})},E=()=>r(h,{transition:e.transition},{default:()=>[u.value.lazySrc&&s.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",N.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),H=()=>t.placeholder?r(h,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!t.error)&&r("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,G=()=>t.error?r(h,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&r("div",{class:"v-img__error"},[t.error()])]}):null,L=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=S(!1);{const a=R(f,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),a())})}return O(()=>{const a=k.filterProps(e);return W(r(k,ne({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!V.value},g.value,y.value,e.class],style:[{width:ie(e.width==="auto"?c.value:e.width)},m.value,e.style]},a,{aspectRatio:f.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(se,null,[r(A,null,null),r(E,null,null),r(L,null,null),r(H,null,null),r(G,null,null)]),default:t.default}),[[le("intersect"),{handler:j,options:e.options},null,{once:!0}]])}),{currentSrc:_,image:l,state:s,naturalWidth:c,naturalHeight:p}}});export{fe as S};
