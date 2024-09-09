import{z as V,W as g,f as h,aQ as S,I as P,h as z,a as D,aR as I,M as A,l as _,a8 as M,a4 as T,ak as U,al as H,an as O,ao as j,aa as R,a6 as W,ac as G,ae as N,aS as Q,ay as X,af as Z,ar as J,as as K,au as Y,av as ee,ai as te,aE as ae,aG as oe,aT as se,p as $,R as C,az as ne,o as x,q as le,U as b,aU as re,N as k,aV as ie,aW as ue,aX as ce}from"./eo-dash.BMewqx9r.js";import{e as de,a as B}from"./VOverlay-GwimCzPh.DDXP_MOJ.js";import{A as pe,D as fe,B as w,I as me,z as L,C as ve,O as ye,P as ge}from"./forwardRefs-CbKkS0qr.CGC3gDfR.js";import"./framework.DvX7vlWS.js";import"./transition-DaWzl6K8.DSrwhnZk.js";const he=P({target:[Object,Array]},"v-dialog-transition"),we=V()({name:"VDialogTransition",props:he(),setup(e,r){let{slots:a}=r;const n={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,d){var i;await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),t.style.visibility="";const{x:o,y:c,sx:f,sy:m,speed:s}=F(e.target,t),l=w(t,[{transform:`translate(${o}px, ${c}px) scale(${f}, ${m})`,opacity:0},{}],{duration:225*s,easing:me});(i=q(t))==null||i.forEach(u=>{w(u,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*s,easing:L})}),l.finished.then(()=>d())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,d){var l;await new Promise(i=>requestAnimationFrame(i));const{x:o,y:c,sx:f,sy:m,speed:s}=F(e.target,t);w(t,[{},{transform:`translate(${o}px, ${c}px) scale(${f}, ${m})`,opacity:0}],{duration:125*s,easing:ve}).finished.then(()=>d()),(l=q(t))==null||l.forEach(i=>{w(i,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*s,easing:L})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>e.target?g(S,h({name:"dialog-transition"},n,{css:!1}),a):g(S,{name:"dialog-transition"},a)}});function q(e){var a;const r=(a=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:a.children;return r&&[...r]}function F(e,r){const a=ye(e),n=ge(r),[t,d]=getComputedStyle(r).transformOrigin.split(" ").map(E=>parseFloat(E)),[o,c]=getComputedStyle(r).getPropertyValue("--v-overlay-anchor-origin").split(" ");let f=a.left+a.width/2;o==="left"||c==="left"?f-=a.width/2:(o==="right"||c==="right")&&(f+=a.width/2);let m=a.top+a.height/2;o==="top"||c==="top"?m-=a.height/2:(o==="bottom"||c==="bottom")&&(m+=a.height/2);const s=a.width/n.width,l=a.height/n.height,i=Math.max(1,s,l),u=s/i||0,v=l/i||0,p=n.width*n.height/(window.innerWidth*window.innerHeight),y=p>.12?Math.min(1.5,(p-.12)*10+1):1;return{x:f-(t+n.left),y:m-(d+n.top),sx:u,sy:v,speed:y}}const Ee=P({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...de({origin:"center center",scrollStrategy:"block",transition:{component:we},zIndex:2400})},"VDialog"),xe=V()({name:"VDialog",props:Ee(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,r){let{emit:a,slots:n}=r;const t=z(e,"modelValue"),{scopeId:d}=pe(),o=D();function c(s){var u,v;const l=s.relatedTarget,i=s.target;if(l!==i&&((u=o.value)!=null&&u.contentEl)&&((v=o.value)!=null&&v.globalTop)&&![document,o.value.contentEl].includes(i)&&!o.value.contentEl.contains(i)){const p=ce(o.value.contentEl);if(!p.length)return;const y=p[0],E=p[p.length-1];l===y?E.focus():y.focus()}}I&&A(()=>t.value&&e.retainFocus,s=>{s?document.addEventListener("focusin",c):document.removeEventListener("focusin",c)},{immediate:!0});function f(){var s;a("afterEnter"),(s=o.value)!=null&&s.contentEl&&!o.value.contentEl.contains(document.activeElement)&&o.value.contentEl.focus({preventScroll:!0})}function m(){a("afterLeave")}return A(t,async s=>{var l;s||(await ue(),(l=o.value.activatorEl)==null||l.focus({preventScroll:!0}))}),_(()=>{const s=B.filterProps(e),l=h({"aria-haspopup":"dialog","aria-expanded":String(t.value)},e.activatorProps),i=h({tabindex:-1},e.contentProps);return g(B,h({ref:o,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},s,{modelValue:t.value,"onUpdate:modelValue":u=>t.value=u,"aria-modal":"true",activatorProps:l,contentProps:i,role:"dialog",onAfterEnter:f,onAfterLeave:m},d),{activator:n.activator,default:function(){for(var u=arguments.length,v=new Array(u),p=0;p<u;p++)v[p]=arguments[p];return g(ne,{root:"VDialog"},{default:()=>{var y;return[(y=n.default)==null?void 0:y.call(n,...v)]}})}})}),fe({},o)}}),be=P({color:String,...M(),...T(),...U(),...H(),...O(),...j(),...R(),...W(),...G()},"VSheet"),Ve=V()({name:"VSheet",props:be(),setup(e,r){let{slots:a}=r;const{themeClasses:n}=N(e),{backgroundColorClasses:t,backgroundColorStyles:d}=Q(X(e,"color")),{borderClasses:o}=Z(e),{dimensionStyles:c}=J(e),{elevationClasses:f}=K(e),{locationStyles:m}=Y(e),{positionClasses:s}=ee(e),{roundedClasses:l}=te(e);return _(()=>g(e.tag,{class:["v-sheet",n.value,t.value,o.value,f.value,s.value,l.value,e.class],style:[d.value,c.value,m.value,e.style]},a)),{}}}),Pe={key:1},Be={__name:"PopUp",props:ae({widget:{type:Object,default:void 0}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const r=oe(e,"modelValue"),a=e,[n]=se([a==null?void 0:a.widget]);return(t,d)=>(x(),$("span",null,[g(xe,{"max-width":"500px","max-height":"500px",absolute:"",scrollable:"","scroll-strategy":"block","close-on-back":"",modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=o=>r.value=o)},{default:C(()=>[g(Ve,null,{default:C(()=>[e.widget?(x(),le(re(b(n).component),h({key:b(n).id},b(n).props),null,16)):k("v-if",!0),t.$slots.default?(x(),$("span",Pe,[ie(t.$slots,"default")])):k("v-if",!0)]),_:3})]),_:3},8,["modelValue"])]))}};export{Be as default};