import{aN as x,g as f,ad as v,aq as h,Z as e,W as r,l as i,P as w,I as l,k as n,aR as g,au as m,x as c,aS as y,n as k,as as _,aa as A}from"./eo-dash.BBvrGB09.js";import{k as $}from"./VMain-C9XV5Lyg.DLr_1i4L.js";import"./framework.CXycA2KK.js";import"./ssrBoot-DWJ-z4I-.cQ_YBQv6.js";class L extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
    `}attributeChangedCallback(a,s,o){s!==o&&(this[a]=o),this.render()}}customElements.define("eox-layout",L);customElements.define("eox-layout-item",C);const E=["gap"],M={key:0,class:"bg-panel",x:"0",y:"0",h:"12",w:"12"},T=["h","w","x","y"],H={__name:"DashboardLayout",setup(d){var u,p;const a=f(v),[s]=h([(u=a.template)==null?void 0:u.background]),o=h((p=a.template)==null?void 0:p.widgets);return(I,S)=>(e(),r($,null,{default:i(()=>[w("eox-layout",{gap:l(a).template.gap??2},[l(s).component?(e(),n("eox-layout-item",M,[(e(),r(g,{suspensible:""},{default:i(()=>[(e(),r(m(l(s).component),c({id:"bg-widget"},l(s).props),null,16))]),_:1}))])):y("v-if",!0),(e(!0),n(k,null,_(l(o),(t,b)=>(e(),r(A,{key:b,name:"fade"},{default:i(()=>[t.value.component?(e(),n("eox-layout-item",{key:t.value.id,class:"panel",h:t.value.layout.h,w:t.value.layout.w,x:t.value.layout.x,y:t.value.layout.y},[(e(),r(g,{suspensible:""},{default:i(()=>[(e(),r(m(t.value.component),c({key:t.value.id,ref_for:!0},t.value.props),null,16))]),_:2},1024))],8,T)):y("v-if",!0)]),_:2},1024))),128))],8,E)]),_:1}))}},O=x(H,[["__scopeId","data-v-d836e339"]]);export{O as default};
