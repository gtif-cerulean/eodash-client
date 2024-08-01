import{N as X,y as Ve,bo as Fe,F as z,at as Pe,l as H,E as w,Z as Y,U as N,L as m,O as F,s as W,a0 as se,a2 as ue,a7 as Ue,a9 as Ne,aT as $e,bp as De,bq as Te,a_ as B,C as Ee,b0 as je,X as q,ax as qe,R as re,H as He,br as Ge,bs as Ze,b4 as oe,a3 as de,bt as Ke,bu as Qe,a$ as Je,bv as fe,bw as et,aM as pe,m as me,a4 as tt,ab as lt,aN as at,au as A,a1 as ot,az as ne,P as nt,aR as st,aS as ut,q as rt,bx as it,W as ct,aO as he,bl as vt,o as dt,e as k,j as L,k as O,by as be,I as P,aP as ge,V as ae,c as U,aF as ye,aH as we,f as ft,v as pt,bz as Ie}from"./eo-dash.Bj-BwD49.js";import{D as mt,S as ht,_ as bt,A as gt,B as yt,z as wt}from"./forwardRefs-CnNpvtjx.aF_KOwox.js";import{i as xt}from"./ssrBoot-DbmPWZ1A.Cc8q3QKt.js";import{T as St}from"./transition-xY_ohvKN.CUpvwRYc.js";import{L as xe}from"./index-dHB-M1MP.C3mUkURe.js";import{k as _t}from"./VMain-w8zLMk4A.ktL1WRRZ.js";import"./framework.DTpfHoR8.js";const Ct=e=>{const{touchstartX:l,touchendX:a,touchstartY:t,touchendY:s}=e,v=.5,o=16;e.offsetX=a-l,e.offsetY=s-t,Math.abs(e.offsetY)<v*Math.abs(e.offsetX)&&(e.left&&a<l-o&&e.left(e),e.right&&a>l+o&&e.right(e)),Math.abs(e.offsetX)<v*Math.abs(e.offsetY)&&(e.up&&s<t-o&&e.up(e),e.down&&s>t+o&&e.down(e))};function kt(e,l){var t;const a=e.changedTouches[0];l.touchstartX=a.clientX,l.touchstartY=a.clientY,(t=l.start)==null||t.call(l,{originalEvent:e,...l})}function Vt(e,l){var t;const a=e.changedTouches[0];l.touchendX=a.clientX,l.touchendY=a.clientY,(t=l.end)==null||t.call(l,{originalEvent:e,...l}),Ct(l)}function $t(e,l){var t;const a=e.changedTouches[0];l.touchmoveX=a.clientX,l.touchmoveY=a.clientY,(t=l.move)==null||t.call(l,{originalEvent:e,...l})}function Tt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const l={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:a=>kt(a,l),touchend:a=>Vt(a,l),touchmove:a=>$t(a,l)}}function Et(e,l){var d;const a=l.value,t=a!=null&&a.parent?e.parentElement:e,s=(a==null?void 0:a.options)??{passive:!0},v=(d=l.instance)==null?void 0:d.$.uid;if(!t||!v)return;const o=Tt(l.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[v]=o,Ie(o).forEach(c=>{t.addEventListener(c,o[c],s)})}function Ht(e,l){var v,o;const a=(v=l.value)!=null&&v.parent?e.parentElement:e,t=(o=l.instance)==null?void 0:o.$.uid;if(!(a!=null&&a._touchHandlers)||!t)return;const s=a._touchHandlers[t];Ie(s).forEach(d=>{a.removeEventListener(d,s[d])}),delete a._touchHandlers[t]}const Be={mounted:Et,unmounted:Ht},It=Be,ie=Symbol.for("vuetify:v-tabs"),Bt=X({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Ve(Fe({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),We=z()({name:"VTab",props:Bt(),setup(e,l){let{slots:a,attrs:t}=l;const{textColorClasses:s,textColorStyles:v}=Pe(e,"sliderColor"),o=H(),d=H(),c=w(()=>e.direction==="horizontal"),b=w(()=>{var p,r;return((r=(p=o.value)==null?void 0:p.group)==null?void 0:r.isSelected.value)??!1});function S(p){var f,n;let{value:r}=p;if(r){const g=(n=(f=o.value)==null?void 0:f.$el.parentElement)==null?void 0:n.querySelector(".v-tab--selected .v-tab__slider"),V=d.value;if(!g||!V)return;const M=getComputedStyle(g).color,$=g.getBoundingClientRect(),T=V.getBoundingClientRect(),h=c.value?"x":"y",y=c.value?"X":"Y",_=c.value?"right":"bottom",C=c.value?"width":"height",G=$[h],Z=T[h],E=G>Z?$[_]-T[_]:$[h]-T[h],K=Math.sign(E)>0?c.value?"right":"bottom":Math.sign(E)<0?c.value?"left":"top":"center",j=(Math.abs(E)+(Math.sign(E)<0?$[C]:T[C]))/Math.max($[C],T[C])||0,Q=$[C]/T[C]||0,I=1.5;yt(V,{backgroundColor:[M,"currentcolor"],transform:[`translate${y}(${E}px) scale${y}(${Q})`,`translate${y}(${E/I}px) scale${y}(${(j-1)/I+1})`,"none"],transformOrigin:Array(3).fill(K)},{duration:225,easing:wt})}}return Y(()=>{const p=N.filterProps(e);return m(N,W({symbol:ie,ref:o,class:["v-tab",e.class],style:e.style,tabindex:b.value?0:-1,role:"tab","aria-selected":String(b.value),active:!1},p,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":S}),{...a,default:()=>{var r;return m(F,null,[((r=a.default)==null?void 0:r.call(a))??e.text,!e.hideSlider&&m("div",{ref:d,class:["v-tab__slider",s.value],style:v.value},null)])}})}),mt({},o)}}),Me=Symbol.for("vuetify:v-window"),Re=Symbol.for("vuetify:v-window-group"),Ae=X({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...se(),...ue(),...Ue()},"VWindow"),Se=z()({name:"VWindow",directives:{Touch:Be},props:Ae(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const{themeClasses:t}=Ne(e),{isRtl:s}=$e(),{t:v}=De(),o=Te(e,Re),d=H(),c=w(()=>s.value?!e.reverse:e.reverse),b=B(!1),S=w(()=>{const h=e.direction==="vertical"?"y":"x",y=(c.value?!b.value:b.value)?"-reverse":"";return`v-window-${h}${y}-transition`}),p=B(0),r=H(void 0),f=w(()=>o.items.value.findIndex(h=>o.selected.value.includes(h.id)));Ee(f,(h,y)=>{const _=o.items.value.length,C=_-1;_<=2?b.value=h<y:h===C&&y===0?b.value=!0:h===0&&y===C?b.value=!1:b.value=h<y}),je(Me,{transition:S,isReversed:b,transitionCount:p,transitionHeight:r,rootRef:d});const n=w(()=>e.continuous||f.value!==0),g=w(()=>e.continuous||f.value!==o.items.value.length-1);function V(){n.value&&o.prev()}function M(){g.value&&o.next()}const $=w(()=>{const h=[],y={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:o.prev,"aria-label":v("$vuetify.carousel.prev")};h.push(n.value?a.prev?a.prev({props:y}):m(N,y,null):m("div",null,null));const _={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:o.next,"aria-label":v("$vuetify.carousel.next")};return h.push(g.value?a.next?a.next({props:_}):m(N,_,null):m("div",null,null)),h}),T=w(()=>e.touch===!1?e.touch:{left:()=>{c.value?V():M()},right:()=>{c.value?M():V()},start:h=>{let{originalEvent:y}=h;y.stopPropagation()},...e.touch===!0?{}:e.touch});return Y(()=>q(m(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var h,y;return[m("div",{class:"v-window__container",style:{height:r.value}},[(h=a.default)==null?void 0:h.call(a,{group:o}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[$.value])]),(y=a.additional)==null?void 0:y.call(a,{group:o})]}}),[[qe("touch"),T.value]])),{group:o}}}),Wt=X({...Ve(Ae(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Mt=z()({name:"VTabsWindow",props:Wt(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const t=re(ie,null),s=He(e,"modelValue"),v=w({get(){var o;return s.value!=null||!t?s.value:(o=t.items.value.find(d=>t.selected.value.includes(d.id)))==null?void 0:o.value},set(o){s.value=o}});return Y(()=>{const o=Se.filterProps(e);return m(Se,W({_as:"VTabsWindow"},o,{modelValue:v.value,"onUpdate:modelValue":d=>v.value=d,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),a)}),{}}}),Xe=X({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...se(),...Ge(),...ht()},"VWindowItem"),_e=z()({name:"VWindowItem",directives:{Touch:It},props:Xe(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:a}=l;const t=re(Me),s=Ze(e,Re),{isBooted:v}=xt();if(!t||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=B(!1),d=w(()=>v.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!o.value||!t||(o.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function b(){var n;o.value||!t||(o.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=ne((n=t.rootRef.value)==null?void 0:n.clientHeight)),t.transitionCount.value+=1)}function S(){c()}function p(n){o.value&&st(()=>{!d.value||!o.value||!t||(t.transitionHeight.value=ne(n.clientHeight))})}const r=w(()=>{const n=t.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof n!="string"?t.transition.value:n,onBeforeEnter:b,onAfterEnter:c,onEnterCancelled:S,onBeforeLeave:b,onAfterLeave:c,onLeaveCancelled:S,onEnter:p}:!1}),{hasContent:f}=bt(e,s.isSelected);return Y(()=>m(St,{transition:r.value,disabled:!v.value},{default:()=>{var n;return[q(m("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[f.value&&((n=a.default)==null?void 0:n.call(a))]),[[oe,s.isSelected.value]])]}})),{groupItem:s}}}),Rt=X({...Xe()},"VTabsWindowItem"),At=z()({name:"VTabsWindowItem",props:Rt(),setup(e,l){let{slots:a}=l;return Y(()=>{const t=_e.filterProps(e);return m(_e,W({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),a)}),{}}});function Xt(e){let{selectedElement:l,containerElement:a,isRtl:t,isHorizontal:s}=e;const v=D(s,a),o=ze(s,t,a),d=D(s,l),c=Ye(s,l),b=d*.4;return o>c?c-b:o+v<c+d?c-v+d+b:o}function zt(e){let{selectedElement:l,containerElement:a,isHorizontal:t}=e;const s=D(t,a),v=Ye(t,l),o=D(t,l);return v-s/2+o/2}function Ce(e,l){return(l==null?void 0:l[e?"scrollWidth":"scrollHeight"])||0}function Yt(e,l){return(l==null?void 0:l[e?"clientWidth":"clientHeight"])||0}function ze(e,l,a){if(!a)return 0;const{scrollLeft:t,offsetWidth:s,scrollWidth:v}=a;return e?l?v-s+t:t:a.scrollTop}function D(e,l){return(l==null?void 0:l[e?"offsetWidth":"offsetHeight"])||0}function Ye(e,l){return(l==null?void 0:l[e?"offsetLeft":"offsetTop"])||0}const Lt=Symbol.for("vuetify:v-slide-group"),Le=X({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Lt},nextIcon:{type:de,default:"$next"},prevIcon:{type:de,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...se(),...Ke({mobile:null}),...ue(),...Qe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ke=z()({name:"VSlideGroup",props:Le(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const{isRtl:t}=$e(),{displayClasses:s,mobile:v}=Je(e),o=Te(e,e.symbol),d=B(!1),c=B(0),b=B(0),S=B(0),p=w(()=>e.direction==="horizontal"),{resizeRef:r,contentRect:f}=fe(),{resizeRef:n,contentRect:g}=fe(),V=et(),M=w(()=>({container:r.el,duration:200,easing:"easeOutQuart"})),$=w(()=>o.selected.value.length?o.items.value.findIndex(u=>u.id===o.selected.value[0]):-1),T=w(()=>o.selected.value.length?o.items.value.findIndex(u=>u.id===o.selected.value[o.selected.value.length-1]):-1);if(pe){let u=-1;Ee(()=>[o.selected.value,f.value,g.value,p.value],()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(f.value&&g.value){const i=p.value?"width":"height";b.value=f.value[i],S.value=g.value[i],d.value=b.value+1<S.value}if($.value>=0&&n.el){const i=n.el.children[T.value];y(i,e.centerActive)}})})}const h=B(!1);function y(u,i){let x=0;i?x=zt({containerElement:r.el,isHorizontal:p.value,selectedElement:u}):x=Xt({containerElement:r.el,isHorizontal:p.value,isRtl:t.value,selectedElement:u}),_(x)}function _(u){if(!pe||!r.el)return;const i=D(p.value,r.el),x=ze(p.value,t.value,r.el);if(!(Ce(p.value,r.el)<=i||Math.abs(u-x)<16)){if(p.value&&t.value&&r.el){const{scrollWidth:R,offsetWidth:le}=r.el;u=R-le-u}p.value?V.horizontal(u,M.value):V(u,M.value)}}function C(u){const{scrollTop:i,scrollLeft:x}=u.target;c.value=p.value?x:i}function G(u){if(h.value=!0,!(!d.value||!n.el)){for(const i of u.composedPath())for(const x of n.el.children)if(x===i){y(x);return}}}function Z(u){h.value=!1}let E=!1;function K(u){var i;!E&&!h.value&&!(u.relatedTarget&&((i=n.el)!=null&&i.contains(u.relatedTarget)))&&I(),E=!1}function j(){E=!0}function Q(u){if(!n.el)return;function i(x){u.preventDefault(),I(x)}p.value?u.key==="ArrowRight"?i(t.value?"prev":"next"):u.key==="ArrowLeft"&&i(t.value?"next":"prev"):u.key==="ArrowDown"?i("next"):u.key==="ArrowUp"&&i("prev"),u.key==="Home"?i("first"):u.key==="End"&&i("last")}function I(u){var x,R;if(!n.el)return;let i;if(!u)i=ut(n.el)[0];else if(u==="next"){if(i=(x=n.el.querySelector(":focus"))==null?void 0:x.nextElementSibling,!i)return I("first")}else if(u==="prev"){if(i=(R=n.el.querySelector(":focus"))==null?void 0:R.previousElementSibling,!i)return I("last")}else u==="first"?i=n.el.firstElementChild:u==="last"&&(i=n.el.lastElementChild);i&&i.focus({preventScroll:!0})}function J(u){const i=p.value&&t.value?-1:1,x=(u==="prev"?-i:i)*b.value;let R=c.value+x;if(p.value&&t.value&&r.el){const{scrollWidth:le,offsetWidth:Oe}=r.el;R+=le-Oe}_(R)}const ee=w(()=>({next:o.next,prev:o.prev,select:o.select,isSelected:o.isSelected})),te=w(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!v.value;case!0:return d.value||Math.abs(c.value)>0;case"mobile":return v.value||d.value||Math.abs(c.value)>0;default:return!v.value&&(d.value||Math.abs(c.value)>0)}}),ce=w(()=>Math.abs(c.value)>1),ve=w(()=>{if(!r.value)return!1;const u=Ce(p.value,r.el),i=Yt(p.value,r.el);return u-i-Math.abs(c.value)>1});return Y(()=>m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!p.value,"v-slide-group--has-affixes":te.value,"v-slide-group--is-overflowing":d.value},s.value,e.class],style:e.style,tabindex:h.value||o.selected.value.length?-1:0,onFocus:K},{default:()=>{var u,i,x;return[te.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ce.value}],onMousedown:j,onClick:()=>ce.value&&J("prev")},[((u=a.prev)==null?void 0:u.call(a,ee.value))??m(xe,null,{default:()=>[m(me,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:r,class:"v-slide-group__container",onScroll:C},[m("div",{ref:n,class:"v-slide-group__content",onFocusin:G,onFocusout:Z,onKeydown:Q},[(i=a.default)==null?void 0:i.call(a,ee.value)])]),te.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ve.value}],onMousedown:j,onClick:()=>ve.value&&J("next")},[((x=a.next)==null?void 0:x.call(a,ee.value))??m(xe,null,{default:()=>[m(me,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:o.selected,scrollTo:J,scrollOffset:c,focus:I}}});function Ot(e){return e?e.map(l=>rt(l)?l:{text:l,value:l}):[]}const Ft=X({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Le({mandatory:"force",selectedClass:"v-tab-item--selected"}),...tt(),...ue()},"VTabs"),Pt=z()({name:"VTabs",props:Ft(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const s=He(e,"modelValue"),v=w(()=>Ot(e.items)),{densityClasses:o}=lt(e),{backgroundColorClasses:d,backgroundColorStyles:c}=at(A(e,"bgColor")),{scopeId:b}=gt();return ot({VTab:{color:A(e,"color"),direction:A(e,"direction"),stacked:A(e,"stacked"),fixed:A(e,"fixedTabs"),sliderColor:A(e,"sliderColor"),hideSlider:A(e,"hideSlider")}}),Y(()=>{const S=ke.filterProps(e),p=!!(t.window||e.items.length>0);return m(F,null,[m(ke,W(S,{modelValue:s.value,"onUpdate:modelValue":r=>s.value=r,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},o.value,d.value,e.class],style:[{"--v-tabs-height":ne(e.height)},c.value,e.style],role:"tablist",symbol:ie},b,a),{default:()=>{var r;return[((r=t.default)==null?void 0:r.call(t))??v.value.map(f=>{var n;return((n=t.tab)==null?void 0:n.call(t,{item:f}))??m(We,W(f,{key:f.text,value:f.value}),{default:t[`tab.${f.value}`]?()=>{var g;return(g=t[`tab.${f.value}`])==null?void 0:g.call(t,{item:f})}:void 0})})]}}),p&&m(Mt,W({modelValue:s.value,"onUpdate:modelValue":r=>s.value=r,key:"tabs-window"},b),{default:()=>{var r;return[v.value.map(f=>{var n;return((n=t.item)==null?void 0:n.call(t,{item:f}))??m(At,{value:f.value},{default:()=>{var g;return(g=t[`item.${f.value}`])==null?void 0:g.call(t,{item:f})}})}),(r=t.window)==null?void 0:r.call(t)]}})])}),{}}}),Ut={key:0,id:"overlay",class:"pa-2 panel bg-surface"},Nt={class:"component-container"},Dt={__name:"MobileLayout",setup(e){var p;it(r=>({fbf7b91a:b.value,"2c845582":c.value,fdee920e:S.value}));const l=re(ct),a=l.template.widgets,t=he(a),[s]=he([(p=l.template)==null?void 0:p.background]),{mainRect:v}=vt(),o=H(-1),d=H(null),c=H(""),b=H(""),S=H("");return dt(()=>{var r,f;b.value=v.value.top+"px",S.value=(v.value.bottom||48)+"px",c.value=v.value.bottom+(((f=(r=d.value)==null?void 0:r.$el)==null?void 0:f.clientHeight)??0)+"px"}),(r,f)=>(k(),L(_t,{class:"overflow-hidden main"},{default:O(()=>[(k(),L(be,{suspensible:""},{default:O(()=>[P(s).component?(k(),L(ge(P(s).component),W({key:0,id:"bg-widget"},P(s).props),null,16)):ae("v-if",!0)]),_:1})),(k(!0),U(F,null,ye(P(t),(n,g)=>(k(),U(F,{key:g},[n.value.component?q((k(),U("div",Ut,[m(N,{icon:"",variant:"text",class:"close-btn",onClick:f[0]||(f[0]=V=>o.value=-1)},{default:O(()=>[we("✕")]),_:1}),(k(),L(be,{suspensible:""},{default:O(()=>[q(ft("div",Nt,[(k(),L(ge(n.value.component),W({key:n.value.id,ref_for:!0},n.value.props),null,16))],512),[[oe,o.value===g]])]),_:2},1024))],512)),[[oe,o.value===g]]):ae("v-if",!0)],64))),128)),m(Pt,{ref_key:"tabs",ref:d,"align-tabs":"center","bg-color":"surface",class:"tabs","show-arrows":"",modelValue:o.value,"onUpdate:modelValue":f[1]||(f[1]=n=>o.value=n)},{default:O(()=>[(k(!0),U(F,null,ye(P(t),(n,g)=>(k(),U(F,{key:g},[n.value.component?(k(),L(We,{key:0,value:g},{default:O(()=>[we(pt(n.value.title),1)]),_:2},1032,["value"])):ae("v-if",!0)],64))),128))]),_:1},8,["modelValue"])]),_:1}))}},el=nt(Dt,[["__scopeId","data-v-e69b9875"]]);export{el as default};
