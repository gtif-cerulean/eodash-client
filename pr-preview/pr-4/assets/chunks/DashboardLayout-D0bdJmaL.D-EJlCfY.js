import{X as x,b6 as f,bE as v,aT as g,o as e,q as r,R as i,g as w,U as l,p as n,bF as h,aU as b,f as c,N as m,k,aK as A,aQ as _}from"./eo-dash.Bpuvwtcu.js";import{p as $}from"./VMain-hQLCz9wl.GoDTTlj-.js";import"./framework.s1dzu9Xf.js";import"./ssrBoot-Cl_4lcfi.CcX-8pn5.js";class C extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(a,s,o){s!==o&&(this[a]=o),this.render()}}class E extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
    `}attributeChangedCallback(a,s,o){s!==o&&(this[a]=o),this.render()}}customElements.define("eox-layout",C);customElements.define("eox-layout-item",E);const L=["gap"],T={key:0,class:"bg-panel",x:"0",y:"0",h:"12",w:"12"},M=["h","w","x","y"],H={__name:"DashboardLayout",setup(u){var d,p;const a=f(v),[s]=g([(d=a.template)==null?void 0:d.background]),o=g((p=a.template)==null?void 0:p.widgets);return(R,I)=>(e(),r($,null,{default:i(()=>[w("eox-layout",{gap:l(a).template.gap??2},[l(s).component?(e(),n("eox-layout-item",T,[(e(),r(h,{suspensible:""},{default:i(()=>[(e(),r(b(l(s).component),c({id:"bg-widget"},l(s).props),null,16))]),_:1}))])):m("v-if",!0),(e(!0),n(k,null,A(l(o),(t,y)=>(e(),r(_,{key:y,name:"fade"},{default:i(()=>[t.value.component?(e(),n("eox-layout-item",{key:t.value.id,class:"panel bg-surface",h:t.value.layout.h,w:t.value.layout.w,x:t.value.layout.x,y:t.value.layout.y},[(e(),r(h,{suspensible:""},{default:i(()=>[(e(),r(b(t.value.component),c({key:t.value.id,ref_for:!0},t.value.props),null,16))]),_:2},1024))],8,M)):m("v-if",!0)]),_:2},1024))),128))],8,L)]),_:1}))}},q=x(H,[["__scopeId","data-v-a859692c"]]);export{q as default};
