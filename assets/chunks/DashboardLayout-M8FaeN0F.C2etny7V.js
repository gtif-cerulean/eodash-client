import{L as f,o as t,b as r,w as l,j as _,k as n,c as u,ay as h,I as d,K as m,e as g,F as x,C as w,T as v}from"./framework.CxY9FQpQ.js";import{x as k,aP as A,aD as b}from"./eo-dash.BIm2sYY-.js";import{V as C}from"./VMain-Dsjny2jl.C8MBfbVj.js";import"./commonjsHelpers.Cpj98o6Y.js";import"./theme.YAEQg5us.js";import"./ssrBoot-BP7SYRyC.BRYsXOjH.js";class L extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(s,a,o){a!==o&&(this[s]=o),this.render()}}class T extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;

          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(s,a,o){a!==o&&(this[s]=o),this.render()}}customElements.define("eox-layout",L);customElements.define("eox-layout-item",T);const $=["gap"],D={key:0,class:"bg-panel bg-surface",x:"0",y:"0",h:"12",w:"12"},E=["h","w","x","y"],M={__name:"DashboardLayout",setup(i){var c,p;const s=f(A),[a]=b([(c=s.template)==null?void 0:c.background]),o=b((p=s.template)==null?void 0:p.widgets);return(B,H)=>(t(),r(C,null,{default:l(()=>[_("eox-layout",{gap:n(s).template.gap??2},[n(a).component?(t(),u("eox-layout-item",D,[(t(),r(h,{suspensible:""},{default:l(()=>[(t(),r(d(n(a).component),m({id:"bg-widget"},n(a).props),null,16))]),_:1}))])):g("v-if",!0),(t(!0),u(x,null,w(n(o),(e,y)=>(t(),r(v,{key:y,name:"fade"},{default:l(()=>[e.value.component?(t(),u("eox-layout-item",{key:e.value.id,class:"panel bg-surface",h:e.value.layout.h,w:e.value.layout.w,x:e.value.layout.x,y:e.value.layout.y},[(t(),r(h,{suspensible:""},{default:l(()=>[(t(),r(d(e.value.component),m({key:e.value.id,ref_for:!0},e.value.props),null,16))]),_:2},1024))],8,E)):g("v-if",!0)]),_:2},1024))),128))],8,$)]),_:1}))}},N=k(M,[["__scopeId","data-v-6b134f31"]]);export{N as default};
