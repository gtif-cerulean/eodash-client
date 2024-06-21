import{a3 as m}from"./framework.CXycA2KK.js";import{W as c,Z as h}from"./eo-dash.BBvrGB09.js";import u from"./DynamicWebComponent-BQhxFPM0.DmeTE1Gt.js";const _={__name:"EodashItemFilter",setup(g){const a=()=>m(()=>import("./eox-itemfilter-DcQkRD2l.4YphTp3_.js"),[]),p={config:{titleProperty:"title",filterProperties:[{keys:["title","themes"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}],aggregateResults:"themes",enableHighlighting:!0,expandMultipleFilters:!1,expandMultipleResults:!1}},d=(e,i)=>{var n,s;e.style.height="100%";const r=document.createElement("style");r.innerHTML=`
    section {
      margin: 0 !important;
    }
    section button#filter-reset {
      padding: 0 8px;
      top: 8px;
      right: 8px;
    }
  `,(n=e==null?void 0:e.shadowRoot)==null||n.appendChild(r);const l=document.createElement("div");l.setAttribute("slot","filterstitle"),l.innerHTML='<h4 style="margin: 14px 8px">Indicators</h4>',e.appendChild(l);const o=document.createElement("div");o.setAttribute("slot","resultstitle"),e.appendChild(o),e.apply((s=i.stac)==null?void 0:s.filter(t=>t.rel==="child")),e.config.onSelect=async t=>{console.log(t),await i.loadSelectedSTAC(t.href)}};return(e,i)=>(h(),c(u,{link:a,"tag-name":"eox-itemfilter",properties:p,"on-mounted":d}))}};export{_ as default};
