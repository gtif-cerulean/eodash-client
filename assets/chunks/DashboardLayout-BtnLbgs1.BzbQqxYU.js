import{$ as x,b5 as f,bE as w,aT as h,s as e,W as o,L as i,O as v,c as l,m as n,bF as g,aU as m,u as c,z as b,x as k,aK as A,aQ as _}from"./eo-dash.DmlGEMRm.js";import{k as $}from"./VMain-tzZLYE-b.BGjiGJPp.js";import"./framework.D7uhl4cx.js";import"./ssrBoot-DxESBhxo.Cuc2w1Kz.js";class L extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(a,s,r){s!==r&&(this[a]=r),this.render()}}class C extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
    `}attributeChangedCallback(a,s,r){s!==r&&(this[a]=r),this.render()}}customElements.define("eox-layout",L);customElements.define("eox-layout-item",C);const E=["gap"],T={key:0,class:"bg-panel",x:"0",y:"0",h:"12",w:"12"},M=["h","w","x","y"],H={__name:"DashboardLayout",setup(u){var d,p;const a=f(w),[s]=h([(d=a.template)==null?void 0:d.background]),r=h((p=a.template)==null?void 0:p.widgets);return(z,I)=>(e(),o($,null,{default:i(()=>[v("eox-layout",{gap:l(a).template.gap??2},[l(s).component?(e(),n("eox-layout-item",T,[(e(),o(g,{suspensible:""},{default:i(()=>[(e(),o(m(l(s).component),c({id:"bg-widget"},l(s).props),null,16))]),_:1}))])):b("v-if",!0),(e(!0),n(k,null,A(l(r),(t,y)=>(e(),o(_,{key:y,name:"fade"},{default:i(()=>[t.value.component?(e(),n("eox-layout-item",{key:t.value.id,class:"panel bg-surface",h:t.value.layout.h,w:t.value.layout.w,x:t.value.layout.x,y:t.value.layout.y},[(e(),o(g,{suspensible:""},{default:i(()=>[(e(),o(m(t.value.component),c({key:t.value.id,ref_for:!0},t.value.props),null,16))]),_:2},1024))],8,M)):b("v-if",!0)]),_:2},1024))),128))],8,E)]),_:1}))}},W=x(H,[["__scopeId","data-v-a859692c"]]);export{W as default};
