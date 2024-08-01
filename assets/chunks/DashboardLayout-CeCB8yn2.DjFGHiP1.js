import{P as x,R as f,W as v,aO as h,e,j as o,k as i,f as w,I as l,c as n,by as g,aP as c,s as m,V as b,O as k,aF as A,aL as _}from"./eo-dash.Bj-BwD49.js";import{k as L}from"./VMain-w8zLMk4A.ktL1WRRZ.js";import"./framework.DTpfHoR8.js";import"./ssrBoot-DbmPWZ1A.Cc8q3QKt.js";class $ extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(a,s,r){s!==r&&(this[a]=r),this.render()}}class M extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          background: lightgrey;
          border: 1px solid darkgrey;
          border-radius: 4px;
          padding: 4px 8px;
          overflow: hidden;


          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(a,s,r){s!==r&&(this[a]=r),this.render()}}customElements.define("eox-layout",$);customElements.define("eox-layout-item",M);const C=["gap"],E={key:0,class:"bg-panel",x:"0",y:"0",h:"12",w:"12"},T=["h","w","x","y"],H={__name:"DashboardLayout",setup(u){var d,p;const a=f(v),[s]=h([(d=a.template)==null?void 0:d.background]),r=h((p=a.template)==null?void 0:p.widgets);return(I,R)=>(e(),o(L,null,{default:i(()=>[w("eox-layout",{gap:l(a).template.gap??2},[l(s).component?(e(),n("eox-layout-item",E,[(e(),o(g,{suspensible:""},{default:i(()=>[(e(),o(c(l(s).component),m({id:"bg-widget"},l(s).props),null,16))]),_:1}))])):b("v-if",!0),(e(!0),n(k,null,A(l(r),(t,y)=>(e(),o(_,{key:y,name:"fade"},{default:i(()=>[t.value.component?(e(),n("eox-layout-item",{key:t.value.id,class:"panel bg-surface",h:t.value.layout.h,w:t.value.layout.w,x:t.value.layout.x,y:t.value.layout.y},[(e(),o(g,{suspensible:""},{default:i(()=>[(e(),o(c(t.value.component),m({key:t.value.id,ref_for:!0},t.value.props),null,16))]),_:2},1024))],8,T)):b("v-if",!0)]),_:2},1024))),128))],8,C)]),_:1}))}},P=x(H,[["__scopeId","data-v-a859692c"]]);export{P as default};
