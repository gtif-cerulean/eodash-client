import{Y as x,b7 as f,bF as v,aU as h,o as e,p as r,V as i,i as w,U as l,m as n,bG as g,aV as m,e as b,O as c,k,aL as A,aR as _}from"./eo-dash.Dw0eV_tO.js";import{p as L}from"./VMain-l1ADLPWf.CdWQEXY2.js";import"./framework.BO2YHfug.js";import"./ssrBoot-BgB6JsO4.c7sf-T2P.js";class $ extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(a,s,o){s!==o&&(this[a]=o),this.render()}}class C extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
    `}attributeChangedCallback(a,s,o){s!==o&&(this[a]=o),this.render()}}customElements.define("eox-layout",$);customElements.define("eox-layout-item",C);const E=["gap"],M={key:0,class:"bg-panel",x:"0",y:"0",h:"12",w:"12"},T=["h","w","x","y"],H={__name:"DashboardLayout",setup(u){var d,p;const a=f(v),[s]=h([(d=a.template)==null?void 0:d.background]),o=h((p=a.template)==null?void 0:p.widgets);return(V,I)=>(e(),r(L,null,{default:i(()=>[w("eox-layout",{gap:l(a).template.gap??2},[l(s).component?(e(),n("eox-layout-item",M,[(e(),r(g,{suspensible:""},{default:i(()=>[(e(),r(m(l(s).component),b({id:"bg-widget"},l(s).props),null,16))]),_:1}))])):c("v-if",!0),(e(!0),n(k,null,A(l(o),(t,y)=>(e(),r(_,{key:y,name:"fade"},{default:i(()=>[t.value.component?(e(),n("eox-layout-item",{key:t.value.id,class:"panel bg-surface",h:t.value.layout.h,w:t.value.layout.w,x:t.value.layout.x,y:t.value.layout.y},[(e(),r(g,{suspensible:""},{default:i(()=>[(e(),r(m(t.value.component),b({key:t.value.id,ref_for:!0},t.value.props),null,16))]),_:2},1024))],8,T)):c("v-if",!0)]),_:2},1024))),128))],8,E)]),_:1}))}},U=x(H,[["__scopeId","data-v-a859692c"]]);export{U as default};
