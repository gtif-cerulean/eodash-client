import{aK as f,u as s,bh as g,o as x,aN as y,c as u,aB as v,I as E,O as C,Z as a,_ as c,i as k,F as H,s as _,aL as w,bi as F}from"./eo-dash.wsr-Ugqa.js";import"./framework.CXycA2KK.js";class A extends HTMLDetailsElement{constructor(){super()}connectedCallback(){this.el=this,this.summary=this.querySelector("summary"),this.content=this.lastElementChild,this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.summary.addEventListener("click",i=>this.onClick(i))}onClick(i){i==null||i.preventDefault(),this.el.style.overflow="hidden",this.isClosing||!this.el.open?this.doOpen():(this.isExpanding||this.el.open)&&this.shrink()}shrink(){this.isClosing=!0;const i=`${this.el.offsetHeight}px`,t=`${this.summary.offsetHeight}px`;this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[i,t]},{duration:300,easing:"ease-out"}),this.animation.onfinish=()=>this.onAnimationFinish(!1),this.animation.oncancel=()=>this.isClosing=!1}doOpen(){this.el.style.height=`${this.el.offsetHeight}px`,this.el.open=!0,window.requestAnimationFrame(()=>this.expand()),this.parentElement.querySelectorAll("details[open][exclusive]").forEach(i=>{i!==this&&i.onClick()})}expand(){this.isExpanding=!0;const i=`${this.el.offsetHeight}px`,t=`${this.summary.offsetHeight+this.content.offsetHeight}px`;this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[i,t]},{duration:300,easing:"ease-out"}),this.animation.onfinish=()=>this.onAnimationFinish(!0),this.animation.oncancel=()=>this.isExpanding=!1}onAnimationFinish(i){this.el.open=i,this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.el.style.height=this.el.style.overflow=""}}customElements.define("animated-details",A,{extends:"details"});const q={__name:"WidgetsContainer",props:{widgets:{type:Array,required:!0}},setup(l){const i=f(l.widgets),t=s([]),o=s([]),h=s(""),r=s(0),{mainRect:d}=g();return x(async()=>{await y(()=>{var n;r.value=o.value.reduce((m,e)=>m+=e.clientHeight,0),h.value=(((n=t.value[0].parentElement)==null?void 0:n.scrollHeight)??0)-r.value-d.value.top+"px"})}),(n,m)=>(a(!0),u(C,null,v(E(i),(e,p)=>(a(),u("details",{is:"animated-details",ref_for:!0,ref_key:"detailsEls",ref:t,key:p,class:"overflow-auto",exclusive:""},[c("summary",{ref_for:!0,ref_key:"summaryEls",ref:o},k(e.value.title),513),c("span",{style:F({height:h.value}),class:"d-flex flex-column"},[(a(),H(w(e.value.component),_({ref_for:!0},e.value.props),null,16))],4)]))),128))}};export{q as default};
