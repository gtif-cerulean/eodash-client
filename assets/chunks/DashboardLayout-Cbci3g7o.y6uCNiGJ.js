import{r as x,b as f,m as v,aE as h,Z as e,F as o,k as i,_ as w,I as l,c as n,bq as g,aF as m,s as c,at as b,O as k,av as _,aB as A}from"./eo-dash.Dm96hStJ.js";import{k as $}from"./VMain-Bu1bPjvK.rUXbry0S.js";import"./framework.CXycA2KK.js";import"./ssrBoot-C-inWOiD.DR-lXUS4.js";class E extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(a,s,r){s!==r&&(this[a]=r),this.render()}}class L extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
    `}attributeChangedCallback(a,s,r){s!==r&&(this[a]=r),this.render()}}customElements.define("eox-layout",E);customElements.define("eox-layout-item",L);const T=["gap"],C={key:0,class:"bg-panel",x:"0",y:"0",h:"12",w:"12"},M=["h","w","x","y"],H={__name:"DashboardLayout",setup(d){var u,p;const a=f(v),[s]=h([(u=a.template)==null?void 0:u.background]),r=h((p=a.template)==null?void 0:p.widgets);return(I,z)=>(e(),o($,null,{default:i(()=>[w("eox-layout",{gap:l(a).template.gap??2},[l(s).component?(e(),n("eox-layout-item",C,[(e(),o(g,{suspensible:""},{default:i(()=>[(e(),o(m(l(s).component),c({id:"bg-widget"},l(s).props),null,16))]),_:1}))])):b("v-if",!0),(e(!0),n(k,null,_(l(r),(t,y)=>(e(),o(A,{key:y,name:"fade"},{default:i(()=>[t.value.component?(e(),n("eox-layout-item",{key:t.value.id,class:"panel",h:t.value.layout.h,w:t.value.layout.w,x:t.value.layout.x,y:t.value.layout.y},[(e(),o(g,{suspensible:""},{default:i(()=>[(e(),o(m(t.value.component),c({key:t.value.id,ref_for:!0},t.value.props),null,16))]),_:2},1024))],8,M)):b("v-if",!0)]),_:2},1024))),128))],8,T)]),_:1}))}},R=x(H,[["__scopeId","data-v-34c69bd3"]]);export{R as default};
