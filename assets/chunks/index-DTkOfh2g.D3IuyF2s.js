import{Y as u,aG as _,ay as g,B as c,l as w,e as b}from"./eo-dash.DpEsFCu4.js";const x=b({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function o(s,n,r){return u()({name:s,props:x({mode:r,origin:n}),setup(i,l){let{slots:t}=l;const a={onBeforeEnter(e){i.origin&&(e.style.transformOrigin=i.origin)},onLeave(e){if(i.leaveAbsolute){const{offsetTop:d,offsetLeft:y,offsetWidth:f,offsetHeight:p}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${d}px`,e.style.left=`${y}px`,e.style.width=`${f}px`,e.style.height=`${p}px`}i.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(i.leaveAbsolute&&(e!=null&&e._transitionInitialStyles)){const{position:d,top:y,left:f,width:p,height:v}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=d||"",e.style.top=y||"",e.style.left=f||"",e.style.width=p||"",e.style.height=v||""}}};return()=>{const e=i.group?_:g;return c(e,{name:i.disabled?"":s,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:a},t.default)}}})}function h(s,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return u()({name:s,props:{mode:{type:String,default:r},disabled:Boolean},setup(i,l){let{slots:t}=l;return()=>c(g,{name:i.disabled?"":s,css:!i.disabled,...i.disabled?{}:n},t.default)}})}function m(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?"width":"height",r=w(`offset-${n}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[n]:t.style[n]}},onEnter(t){const a=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const e=`${t[r]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=a.transition,s&&t._parent&&t._parent.classList.add(s),requestAnimationFrame(()=>{t.style[n]=e})},onAfterEnter:l,onEnterCancelled:l,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=`${t[r]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[n]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(t){s&&t._parent&&t._parent.classList.remove(s),l(t)}function l(t){const a=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,a!=null&&(t.style[n]=a),delete t._initialStyle}}o("fab-transition","center center","out-in");o("dialog-bottom-transition");o("dialog-top-transition");const L=o("fade-transition");o("scale-transition");o("scroll-x-transition");o("scroll-x-reverse-transition");o("scroll-y-transition");o("scroll-y-reverse-transition");o("slide-x-transition");o("slide-x-reverse-transition");const A=o("slide-y-transition");o("slide-y-reverse-transition");const B=h("expand-transition",m()),$=h("expand-x-transition",m("",!0));export{B as A,$ as E,A as L,L as T};
