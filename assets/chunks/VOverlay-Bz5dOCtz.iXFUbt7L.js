import{N as Z,x as Oe,_ as Ve,ad as De,a5 as We,F as je,Y as qe,E as L,a7 as ze,aR as Ie,aL as Ye,as as Ge,al as Je,C as B,u as D,aK as j,aS as Ze,aT as ce,Z as Xe,aU as ue,aV as $,aW as Ce,aX as ye,aY as J,aZ as Ke,o as Ue,R as Ae,a_ as Qe,a$ as et,b0 as tt,L as V,s as W,b1 as ot,ax as F,i as nt,b2 as at,av as rt,O as lt,b3 as it,b4 as me,b5 as oe,b6 as ne,b7 as pe,aP as ve,b8 as Le,b9 as st,aJ as ct,ba as Me,bb as Pe,bc as ut,bd as ge,be as he,bf as vt,bg as dt,bh as ft,bi as yt}from"./eo-dash.Ber0M2jt.js";import{S as mt,_ as pt,A as gt,B as ht,z as bt,O as Et,d as ae,W as be,P as xt}from"./forwardRefs-DLBUFqjG.D69BxolQ.js";import{j as wt,T as kt}from"./transition-UP98pXdu.4xszQkX1.js";const K=new WeakMap;function St(e,t){Object.keys(t).forEach(o=>{if(Me(o)){const n=Pe(o),l=K.get(e);if(t[o]==null)l==null||l.forEach(a=>{const[i,r]=a;i===n&&(e.removeEventListener(n,r),l.delete(a))});else if(!l||![...l].some(a=>a[0]===n&&a[1]===t[o])){e.addEventListener(n,t[o]);const a=l||new Set;a.add([n,t[o]]),K.has(e)||K.set(e,a)}}else t[o]==null?e.removeAttribute(o):e.setAttribute(o,t[o])})}function Ot(e,t){Object.keys(t).forEach(o=>{if(Me(o)){const n=Pe(o),l=K.get(e);l==null||l.forEach(a=>{const[i,r]=a;i===n&&(e.removeEventListener(n,r),l.delete(a))})}else e.removeAttribute(o)})}function Re(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function Ct(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?At(e):de(e))return e;e=e.parentElement}return document.scrollingElement}function Q(e,t){const o=[];if(t&&e&&!t.contains(e))return o;for(;e&&(de(e)&&o.push(e),e!==t);)e=e.parentElement;return o}function de(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function At(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function Lt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function Mt(){return!0}function Be(e,t,o){if(!e||Te(e,o)===!1)return!1;const n=Re(t);if(typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&n.host===e.target)return!1;const l=(typeof o.value=="object"&&o.value.include||(()=>[]))();return l.push(t),!l.some(a=>a==null?void 0:a.contains(e.target))}function Te(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Mt)(e)}function Pt(e,t,o){const n=typeof o.value=="function"?o.value:o.value.handler;t._clickOutside.lastMousedownWasOutside&&Be(e,t,o)&&setTimeout(()=>{Te(e,o)&&n&&n(e)},0)}function Ee(e,t){const o=Re(e);t(document),typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&t(o)}const Rt={mounted(e,t){const o=l=>Pt(l,e,t),n=l=>{e._clickOutside.lastMousedownWasOutside=Be(l,e,t)};Ee(e,l=>{l.addEventListener("click",o,!0),l.addEventListener("mousedown",n,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:o,onMousedown:n}},unmounted(e,t){e._clickOutside&&(Ee(e,o=>{var a;if(!o||!((a=e._clickOutside)!=null&&a[t.instance.$.uid]))return;const{onClick:n,onMousedown:l}=e._clickOutside[t.instance.$.uid];o.removeEventListener("click",n,!0),o.removeEventListener("mousedown",l,!0)}),delete e._clickOutside[t.instance.$.uid])}};function re(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Bt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function xe(e,t){if(e.side==="top"||e.side==="bottom"){const{side:o,align:n}=e,l=n==="left"?0:n==="center"?t.width/2:n==="right"?t.width:n,a=o==="top"?0:o==="bottom"?t.height:o;return re({x:l,y:a},t)}else if(e.side==="left"||e.side==="right"){const{side:o,align:n}=e,l=o==="left"?0:o==="right"?t.width:o,a=n==="top"?0:n==="center"?t.height/2:n==="bottom"?t.height:n;return re({x:l,y:a},t)}return re({x:t.width/2,y:t.height/2},t)}const Fe={static:Nt,connected:_t},Tt=Z({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Fe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Ft(e,t){const o=D({}),n=D();j&&ce(()=>!!(t.isActive.value&&e.locationStrategy),a=>{var i,r;B(()=>e.locationStrategy,a),$(()=>{window.removeEventListener("resize",l),n.value=void 0}),window.addEventListener("resize",l,{passive:!0}),typeof e.locationStrategy=="function"?n.value=(i=e.locationStrategy(t,e,o))==null?void 0:i.updateLocation:n.value=(r=Fe[e.locationStrategy](t,e,o))==null?void 0:r.updateLocation});function l(a){var i;(i=n.value)==null||i.call(n,a)}return{contentStyles:o,updateLocation:n}}function Nt(){}function $t(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right");const o=xt(e);return t?o.x+=parseFloat(e.style.right||0):o.x-=parseFloat(e.style.left||0),o.y-=parseFloat(e.style.top||0),o}function _t(e,t,o){(Array.isArray(e.target.value)||Lt(e.target.value))&&Object.assign(o.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:n,preferredOrigin:l}=it(()=>{const v=me(t.location,e.isRtl.value),u=t.origin==="overlap"?v:t.origin==="auto"?oe(v):me(t.origin,e.isRtl.value);return v.side===u.side&&v.align===ne(u).align?{preferredAnchor:pe(v),preferredOrigin:pe(u)}:{preferredAnchor:v,preferredOrigin:u}}),[a,i,r,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(v=>L(()=>{const u=parseFloat(t[v]);return isNaN(u)?1/0:u})),c=L(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const v=t.offset.split(" ").map(parseFloat);return v.length<2&&v.push(0),v}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let h=!1;const p=new ResizeObserver(()=>{h&&x()});B([e.target,e.contentEl],(v,u)=>{let[C,w]=v,[k,g]=u;k&&!Array.isArray(k)&&p.unobserve(k),C&&!Array.isArray(C)&&p.observe(C),g&&p.unobserve(g),w&&p.observe(w)},{immediate:!0}),$(()=>{p.disconnect()});function x(){if(h=!1,requestAnimationFrame(()=>h=!0),!e.target.value||!e.contentEl.value)return;const v=Et(e.target.value),u=$t(e.contentEl.value,e.isRtl.value),C=Q(e.contentEl.value),w=12;C.length||(C.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(u.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),u.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const k=C.reduce((E,b)=>{const d=b.getBoundingClientRect(),y=new ae({x:b===document.documentElement?0:d.x,y:b===document.documentElement?0:d.y,width:b.clientWidth,height:b.clientHeight});return E?new ae({x:Math.max(E.left,y.left),y:Math.max(E.top,y.top),width:Math.min(E.right,y.right)-Math.max(E.left,y.left),height:Math.min(E.bottom,y.bottom)-Math.max(E.top,y.top)}):y},void 0);k.x+=w,k.y+=w,k.width-=w*2,k.height-=w*2;let g={anchor:n.value,origin:l.value};function _(E){const b=new ae(u),d=xe(E.anchor,v),y=xe(E.origin,b);let{x:S,y:T}=Bt(d,y);switch(E.anchor.side){case"top":T-=c.value[0];break;case"bottom":T+=c.value[0];break;case"left":S-=c.value[0];break;case"right":S+=c.value[0];break}switch(E.anchor.align){case"top":T-=c.value[1];break;case"bottom":T+=c.value[1];break;case"left":S-=c.value[1];break;case"right":S+=c.value[1];break}return b.x+=S,b.y+=T,b.width=Math.min(b.width,r.value),b.height=Math.min(b.height,f.value),{overflows:be(b,k),x:S,y:T}}let M=0,N=0;const O={x:0,y:0},s={x:!1,y:!1};let P=-1;for(;;){if(P++>10){ut("Infinite loop detected in connectedLocationStrategy");break}const{x:E,y:b,overflows:d}=_(g);M+=E,N+=b,u.x+=E,u.y+=b;{const y=ge(g.anchor),S=d.x.before||d.x.after,T=d.y.before||d.y.after;let I=!1;if(["x","y"].forEach(A=>{if(A==="x"&&S&&!s.x||A==="y"&&T&&!s.y){const H={anchor:{...g.anchor},origin:{...g.origin}},q=A==="x"?y==="y"?ne:oe:y==="y"?oe:ne;H.anchor=q(H.anchor),H.origin=q(H.origin);const{overflows:z}=_(H);(z[A].before<=d[A].before&&z[A].after<=d[A].after||z[A].before+z[A].after<(d[A].before+d[A].after)/2)&&(g=H,I=s[A]=!0)}}),I)continue}d.x.before&&(M+=d.x.before,u.x+=d.x.before),d.x.after&&(M-=d.x.after,u.x-=d.x.after),d.y.before&&(N+=d.y.before,u.y+=d.y.before),d.y.after&&(N-=d.y.after,u.y-=d.y.after);{const y=be(u,k);O.x=k.width-y.x.before-y.x.after,O.y=k.height-y.y.before-y.y.after,M+=y.x.before,u.x+=y.x.before,N+=y.y.before,u.y+=y.y.before}break}const te=ge(g.anchor);return Object.assign(o.value,{"--v-overlay-anchor-origin":`${g.anchor.side} ${g.anchor.align}`,transformOrigin:`${g.origin.side} ${g.origin.align}`,top:F(le(N)),left:e.isRtl.value?void 0:F(le(M)),right:e.isRtl.value?F(le(-M)):void 0,minWidth:F(te==="y"?Math.min(a.value,v.width):a.value),maxWidth:F(we(he(O.x,a.value===1/0?0:a.value,r.value))),maxHeight:F(we(he(O.y,i.value===1/0?0:i.value,f.value)))}),{available:O,contentBox:u}}return B(()=>[n.value,l.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>x()),ve(()=>{const v=x();if(!v)return;const{available:u,contentBox:C}=v;C.height>u.y&&requestAnimationFrame(()=>{x(),requestAnimationFrame(()=>{x()})})}),{updateLocation:x}}function le(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function we(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ie=!0;const ee=[];function Ht(e){!ie||ee.length?(ee.push(e),se()):(ie=!1,e(),se())}let ke=-1;function se(){cancelAnimationFrame(ke),ke=requestAnimationFrame(()=>{const e=ee.shift();e&&e(),ee.length?se():ie=!0})}const U={none:null,close:Wt,block:jt,reposition:qt},Vt=Z({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in U}},"VOverlay-scroll-strategies");function Dt(e,t){if(!j)return;let o;ue(async()=>{o==null||o.stop(),t.isActive.value&&e.scrollStrategy&&(o=Le(),await new Promise(n=>setTimeout(n)),o.active&&o.run(()=>{var n;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,o):(n=U[e.scrollStrategy])==null||n.call(U,t,e,o)}))}),$(()=>{o==null||o.stop()})}function Wt(e){function t(o){e.isActive.value=!1}Ne(e.targetEl.value??e.contentEl.value,t)}function jt(e,t){var i;const o=(i=e.root.value)==null?void 0:i.offsetParent,n=[...new Set([...Q(e.targetEl.value,t.contained?o:void 0),...Q(e.contentEl.value,t.contained?o:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),l=window.innerWidth-document.documentElement.offsetWidth,a=(r=>de(r)&&r)(o||document.documentElement);a&&e.root.value.classList.add("v-overlay--scroll-blocked"),n.forEach((r,f)=>{r.style.setProperty("--v-body-scroll-x",F(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",F(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",F(l)),r.classList.add("v-overlay-scroll-blocked")}),$(()=>{n.forEach((r,f)=>{const c=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),h=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),p=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-c,r.scrollTop=-h,r.style.scrollBehavior=p}),a&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function qt(e,t,o){let n=!1,l=-1,a=-1;function i(r){Ht(()=>{var c,h;const f=performance.now();(h=(c=e.updateLocation).value)==null||h.call(c,r),n=(performance.now()-f)/(1e3/60)>2})}a=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{o.run(()=>{Ne(e.targetEl.value??e.contentEl.value,r=>{n?(cancelAnimationFrame(l),l=requestAnimationFrame(()=>{l=requestAnimationFrame(()=>{i(r)})})):i(r)})})}),$(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(a),cancelAnimationFrame(l)})}function Ne(e,t){const o=[document,...Q(e)];o.forEach(n=>{n.addEventListener("scroll",t,{passive:!0})}),$(()=>{o.forEach(n=>{n.removeEventListener("scroll",t)})})}const zt=Symbol.for("vuetify:v-menu"),It=Z({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Yt(e,t){let o=()=>{};function n(i){o==null||o();const r=Number(i?e.openDelay:e.closeDelay);return new Promise(f=>{o=yt(r,()=>{t==null||t(i),f(i)})})}function l(){return n(!0)}function a(){return n(!1)}return{clearDelay:o,runOpenDelay:l,runCloseDelay:a}}const Gt=Z({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...It()},"VOverlay-activator");function Jt(e,t){let{isActive:o,isTop:n}=t;const l=Ce("useActivator"),a=D();let i=!1,r=!1,f=!0;const c=L(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),h=L(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:p,runCloseDelay:x}=Yt(e,s=>{s===(e.openOnHover&&i||c.value&&r)&&!(e.openOnHover&&o.value&&!n.value)&&(o.value!==s&&(f=!0),o.value=s)}),v=D(),u={onClick:s=>{s.stopPropagation(),a.value=s.currentTarget||s.target,o.value||(v.value=[s.clientX,s.clientY]),o.value=!o.value},onMouseenter:s=>{var P;(P=s.sourceCapabilities)!=null&&P.firesTouchEvents||(i=!0,a.value=s.currentTarget||s.target,p())},onMouseleave:s=>{i=!1,x()},onFocus:s=>{vt(s.target,":focus-visible")!==!1&&(r=!0,s.stopPropagation(),a.value=s.currentTarget||s.target,p())},onBlur:s=>{r=!1,s.stopPropagation(),x()}},C=L(()=>{const s={};return h.value&&(s.onClick=u.onClick),e.openOnHover&&(s.onMouseenter=u.onMouseenter,s.onMouseleave=u.onMouseleave),c.value&&(s.onFocus=u.onFocus,s.onBlur=u.onBlur),s}),w=L(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{i=!0,p()},s.onMouseleave=()=>{i=!1,x()}),c.value&&(s.onFocusin=()=>{r=!0,p()},s.onFocusout=()=>{r=!1,x()}),e.closeOnContentClick){const P=Ae(zt,null);s.onClick=()=>{o.value=!1,P==null||P.closeParents()}}return s}),k=L(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{f&&(i=!0,f=!1,p())},s.onMouseleave=()=>{i=!1,x()}),s});B(n,s=>{s&&(e.openOnHover&&!i&&(!c.value||!r)||c.value&&!r&&(!e.openOnHover||!i))&&(o.value=!1)}),B(o,s=>{s||setTimeout(()=>{v.value=void 0})},{flush:"post"});const g=ye();ue(()=>{g.value&&ve(()=>{a.value=g.el})});const _=ye(),M=L(()=>e.target==="cursor"&&v.value?v.value:_.value?_.el:$e(e.target,l)||a.value),N=L(()=>Array.isArray(M.value)?void 0:M.value);let O;return B(()=>!!e.activator,s=>{s&&j?(O=Le(),O.run(()=>{Zt(e,l,{activatorEl:a,activatorEvents:C})})):O&&O.stop()},{flush:"post",immediate:!0}),$(()=>{O==null||O.stop()}),{activatorEl:a,activatorRef:g,target:M,targetEl:N,targetRef:_,activatorEvents:C,contentEvents:w,scrimEvents:k}}function Zt(e,t,o){let{activatorEl:n,activatorEvents:l}=o;B(()=>e.activator,(f,c)=>{if(c&&f!==c){const h=r(c);h&&i(h)}f&&ve(()=>a())},{immediate:!0}),B(()=>e.activatorProps,()=>{a()}),$(()=>{i()});function a(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;f&&St(f,W(l.value,c))}function i(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;f&&Ot(f,W(l.value,c))}function r(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=$e(f,t);return n.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,n.value}}function $e(e,t){var n,l;if(!e)return;let o;if(e==="parent"){let a=(l=(n=t==null?void 0:t.proxy)==null?void 0:n.$el)==null?void 0:l.parentNode;for(;a!=null&&a.hasAttribute("data-no-activator");)a=a.parentNode;o=a}else typeof e=="string"?o=document.querySelector(e):"$el"in e?o=e.$el:o=e;return o}function Xt(){if(!j)return J(!1);const{ssr:e}=Ke();if(e){const t=J(!1);return Ue(()=>{t.value=!0}),t}else return J(!0)}const Se=Symbol.for("vuetify:stack"),G=Oe([]);function Kt(e,t,o){const n=Ce("useStack"),l=!o,a=Ae(Se,void 0),i=Oe({activeChildren:new Set});Qe(Se,i);const r=J(+t.value);ce(e,()=>{var p;const h=(p=G.at(-1))==null?void 0:p[1];r.value=h?h+10:+t.value,l&&G.push([n.uid,r.value]),a==null||a.activeChildren.add(n.uid),$(()=>{if(l){const x=dt(G).findIndex(v=>v[0]===n.uid);G.splice(x,1)}a==null||a.activeChildren.delete(n.uid)})});const f=J(!0);l&&ue(()=>{var p;const h=((p=G.at(-1))==null?void 0:p[0])===n.uid;setTimeout(()=>f.value=h)});const c=L(()=>!i.activeChildren.size);return{globalTop:et(f),localTop:c,stackStyles:L(()=>({zIndex:r.value}))}}function Ut(e){return{teleportTarget:L(()=>{const t=e();if(t===!0||!j)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null){st(`Unable to locate target ${t}`);return}let n=o.querySelector(":scope > .v-overlay-container");return n||(n=document.createElement("div"),n.className="v-overlay-container",o.appendChild(n)),n})}}function Qt(e){const{modelValue:t,color:o,...n}=e;return V(ct,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&V("div",W({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},n),null)]})}const eo=Z({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Gt(),...Ve(),...De(),...mt(),...Tt(),...Vt(),...We(),...wt()},"VOverlay"),ao=je()({name:"VOverlay",directives:{ClickOutside:Rt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...eo()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,t){let{slots:o,attrs:n,emit:l}=t;const a=qe(e,"modelValue"),i=L({get:()=>a.value,set:m=>{m&&e.disabled||(a.value=m)}}),{themeClasses:r}=ze(e),{rtlClasses:f,isRtl:c}=Ie(),{hasContent:h,onAfterLeave:p}=pt(e,i),x=Ye(L(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:v,localTop:u,stackStyles:C}=Kt(i,Ge(e,"zIndex"),e._disableGlobalStack),{activatorEl:w,activatorRef:k,target:g,targetEl:_,targetRef:M,activatorEvents:N,contentEvents:O,scrimEvents:s}=Jt(e,{isActive:i,isTop:u}),{teleportTarget:P}=Ut(()=>{var Y;const m=e.attach||e.contained;if(m)return m;const R=(Y=w==null?void 0:w.value)==null?void 0:Y.getRootNode();return R instanceof ShadowRoot?R:!1}),{dimensionStyles:te}=Je(e),E=Xt(),{scopeId:b}=gt();B(()=>e.disabled,m=>{m&&(i.value=!1)});const d=D(),y=D(),S=D(),{contentStyles:T,updateLocation:I}=Ft(e,{isRtl:c,contentEl:S,target:g,isActive:i});Dt(e,{root:d,contentEl:S,targetEl:_,isActive:i,updateLocation:I});function A(m){l("click:outside",m),e.persistent?X():i.value=!1}function H(m){return i.value&&v.value&&(!e.scrim||m.target===y.value)}j&&B(i,m=>{m?window.addEventListener("keydown",q):window.removeEventListener("keydown",q)},{immediate:!0}),Ze(()=>{j&&window.removeEventListener("keydown",q)});function q(m){var R,Y;m.key==="Escape"&&v.value&&(e.persistent?X():(i.value=!1,(R=S.value)!=null&&R.contains(document.activeElement)&&((Y=w.value)==null||Y.focus())))}const z=tt();ce(()=>e.closeOnBack,()=>{ft(z,m=>{v.value&&i.value?(m(!1),e.persistent?X():i.value=!1):m()})});const fe=D();B(()=>i.value&&(e.absolute||e.contained)&&P.value==null,m=>{if(m){const R=Ct(d.value);R&&R!==document.scrollingElement&&(fe.value=R.scrollTop)}});function X(){e.noClickAnimation||S.value&&ht(S.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:bt})}function _e(){l("afterEnter")}function He(){p(),l("afterLeave")}return Xe(()=>{var m;return V(lt,null,[(m=o.activator)==null?void 0:m.call(o,{isActive:i.value,targetRef:M,props:W({ref:k},N.value,e.activatorProps)}),E.value&&h.value&&V(ot,{disabled:!P.value,to:P.value},{default:()=>[V("div",W({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},r.value,f.value,e.class],style:[C.value,{"--v-overlay-opacity":e.opacity,top:F(fe.value)},e.style],ref:d},b,n),[V(Qt,W({color:x,modelValue:i.value&&!!e.scrim,ref:y},s.value),null),V(kt,{appear:!0,persisted:!0,transition:e.transition,target:g.value,onAfterEnter:_e,onAfterLeave:He},{default:()=>{var R;return[nt(V("div",W({ref:S,class:["v-overlay__content",e.contentClass],style:[te.value,T.value]},O.value,e.contentProps),[(R=o.default)==null?void 0:R.call(o,{isActive:i})]),[[at,i.value],[rt("click-outside"),{handler:A,closeConditional:H,include:()=>[w.value]}]])]}})])]})])}),{activatorEl:w,scrimEl:y,target:g,animateClick:X,contentEl:S,globalTop:v,localTop:u,updateLocation:I}}});export{eo as J,ao as o};
