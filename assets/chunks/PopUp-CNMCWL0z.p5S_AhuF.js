import{R as V,L as y,s as h,aH as $,N as C,B as I,u as O,aI as T,C as P,J as D,aa as M,T as N,ab as _,ac as j,ae as z,af as G,a1 as J,V as Q,a3 as U,a5 as Z,aJ as H,aq as R,ai as K,aj as W,ak as X,am as Y,an as ee,a8 as ae,aw as te,ay as oe,aK as se,c as S,k as A,ar as ne,Z as E,F as le,I as x,aL as re,G as L,aM as ie,aN as ue,aO as ce}from"./eo-dash.wsr-Ugqa.js";import{Q as de,o as k}from"./VOverlay-x3UXpKhr.BCLzsM3o.js";import{A as pe,D as me,B as w,I as ve,z as B,C as fe,O as ge,P as ye}from"./forwardRefs-CpNjL95t.BTOsBg3z.js";import"./framework.CXycA2KK.js";import"./transition-BtJHh7JK.5HvGoH0u.js";const he=C({target:[Object,Array]},"v-dialog-transition"),we=V()({name:"VDialogTransition",props:he(),setup(e,r){let{slots:t}=r;const n={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,d){var i;await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),a.style.visibility="";const{x:o,y:c,sx:m,sy:v,speed:s}=q(e.target,a),l=w(a,[{transform:`translate(${o}px, ${c}px) scale(${m}, ${v})`,opacity:0},{}],{duration:225*s,easing:ve});(i=F(a))==null||i.forEach(u=>{w(u,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*s,easing:B})}),l.finished.then(()=>d())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,d){var l;await new Promise(i=>requestAnimationFrame(i));const{x:o,y:c,sx:m,sy:v,speed:s}=q(e.target,a);w(a,[{},{transform:`translate(${o}px, ${c}px) scale(${m}, ${v})`,opacity:0}],{duration:125*s,easing:fe}).finished.then(()=>d()),(l=F(a))==null||l.forEach(i=>{w(i,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*s,easing:B})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?y($,h({name:"dialog-transition"},n,{css:!1}),t):y($,{name:"dialog-transition"},t)}});function F(e){var t;const r=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return r&&[...r]}function q(e,r){const t=ge(e),n=ye(r),[a,d]=getComputedStyle(r).transformOrigin.split(" ").map(b=>parseFloat(b)),[o,c]=getComputedStyle(r).getPropertyValue("--v-overlay-anchor-origin").split(" ");let m=t.left+t.width/2;o==="left"||c==="left"?m-=t.width/2:(o==="right"||c==="right")&&(m+=t.width/2);let v=t.top+t.height/2;o==="top"||c==="top"?v-=t.height/2:(o==="bottom"||c==="bottom")&&(v+=t.height/2);const s=t.width/n.width,l=t.height/n.height,i=Math.max(1,s,l),u=s/i||0,f=l/i||0,p=n.width*n.height/(window.innerWidth*window.innerHeight),g=p>.12?Math.min(1.5,(p-.12)*10+1):1;return{x:m-(a+n.left),y:v-(d+n.top),sx:u,sy:f,speed:g}}const be=C({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...de({origin:"center center",scrollStrategy:"block",transition:{component:we},zIndex:2400})},"VDialog"),Ee=V()({name:"VDialog",props:be(),emits:{"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,r){let{emit:t,slots:n}=r;const a=I(e,"modelValue"),{scopeId:d}=pe(),o=O();function c(s){var u,f;const l=s.relatedTarget,i=s.target;if(l!==i&&((u=o.value)!=null&&u.contentEl)&&((f=o.value)!=null&&f.globalTop)&&![document,o.value.contentEl].includes(i)&&!o.value.contentEl.contains(i)){const p=ce(o.value.contentEl);if(!p.length)return;const g=p[0],b=p[p.length-1];l===g?b.focus():g.focus()}}T&&P(()=>a.value&&e.retainFocus,s=>{s?document.addEventListener("focusin",c):document.removeEventListener("focusin",c)},{immediate:!0});function m(){var s;(s=o.value)!=null&&s.contentEl&&!o.value.contentEl.contains(document.activeElement)&&o.value.contentEl.focus({preventScroll:!0})}function v(){t("afterLeave")}return P(a,async s=>{var l;s||(await ue(),(l=o.value.activatorEl)==null||l.focus({preventScroll:!0}))}),D(()=>{const s=k.filterProps(e),l=h({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps),i=h({tabindex:-1},e.contentProps);return y(k,h({ref:o,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},s,{modelValue:a.value,"onUpdate:modelValue":u=>a.value=u,"aria-modal":"true",activatorProps:l,contentProps:i,role:"dialog",onAfterEnter:m,onAfterLeave:v},d),{activator:n.activator,default:function(){for(var u=arguments.length,f=new Array(u),p=0;p<u;p++)f[p]=arguments[p];return y(ne,{root:"VDialog"},{default:()=>{var g;return[(g=n.default)==null?void 0:g.call(n,...f)]}})}})}),me({},o)}}),xe=C({color:String,...M(),...N(),..._(),...j(),...z(),...G(),...J(),...Q(),...U()},"VSheet"),Ve=V()({name:"VSheet",props:xe(),setup(e,r){let{slots:t}=r;const{themeClasses:n}=Z(e),{backgroundColorClasses:a,backgroundColorStyles:d}=H(R(e,"color")),{borderClasses:o}=K(e),{dimensionStyles:c}=W(e),{elevationClasses:m}=X(e),{locationStyles:v}=Y(e),{positionClasses:s}=ee(e),{roundedClasses:l}=ae(e);return D(()=>y(e.tag,{class:["v-sheet",n.value,a.value,o.value,m.value,s.value,l.value,e.class],style:[d.value,c.value,v.value,e.style]},t)),{}}}),Ce={key:1},ke={__name:"PopUp",props:te({widget:{type:Object,default:void 0}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const r=oe(e,"modelValue"),t=e,[n]=se([t==null?void 0:t.widget]);return(a,d)=>(E(),S("span",null,[y(Ee,{"max-width":"500px","max-height":"500px",absolute:"",scrollable:"","scroll-strategy":"block","close-on-back":"",modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=o=>r.value=o)},{default:A(()=>[y(Ve,null,{default:A(()=>[e.widget?(E(),le(re(x(n).component),h({key:x(n).id},x(n).props),null,16)):L("v-if",!0),a.$slots.default?(E(),S("span",Ce,[ie(a.$slots,"default")])):L("v-if",!0)]),_:3})]),_:3},8,["modelValue"])]))}};export{ke as default};
