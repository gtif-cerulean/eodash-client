import{a3 as t}from"./framework.DTpfHoR8.js";import"./eox-stacinfo-l7ALSV90.BgvMBZgG.js";import{P as i,d as o}from"./eo-dash.Ber0M2jt.js";const l=i({id:"GTIF Cerulean",stacEndpoint:"https://gtif-cerulean.github.io/catalog/cerulean/catalog.json",brand:{noLayout:!0,name:"GTIF Cerulean",theme:{colors:{primary:"#fff",secondary:"#fff",surface:"#fff"}}},template:{loading:{id:Symbol(),type:"web-component",widget:{link:"https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",tagName:"l-mirage",properties:{class:"align-self-center justify-self-center",size:"120",speed:"2.5",color:"#004170"}}},background:{id:Symbol(),type:"internal",widget:{name:"EodashMap"}},widgets:[{id:Symbol(),type:"internal",title:"Indicators",layout:{x:0,y:0,w:2,h:12},widget:{name:"EodashItemFilter"}},{defineWidget:e=>e?{id:"Information",title:"Information",layout:{x:9,y:0,w:3,h:12},type:"web-component",widget:{link:()=>t(()=>import("./eox-stacinfo-l7ALSV90.BgvMBZgG.js"),[]),properties:{for:o.states.currentUrl,allowHtml:"true",styleOverride:`.single-property {columns: 1!important;}
                      h1 {margin:0px!important;font-size:16px!important;}
                      header h1:after {
                        content:' ';
                        display:block;
                        border:1px solid #d0d0d0;
                      }
                      h2 {font-size:15px}
                      h3 {font-size:14px}
                      summary {cursor: pointer;}
                      #properties li > .value { font-weight: normal !important;}
                      main {padding-bottom: 10px;}
                      .footer-container {line-height:1;}
                      .footer-container button {margin-top: -10px;}
                      .footer-container small {font-size:10px;line-height:1;}`,header:'["title"]',tags:'["themes"]',subheader:"[]",properties:'["satellite","sensor","agency","extent"]',featured:'["description","providers","assets","links"]',footer:'["sci:citation"]'},tagName:"eox-stacinfo"}}:null},{defineWidget:e=>e?{id:"Datepicker",type:"internal",layout:{x:5,y:10,w:1,h:1},title:"Datepicker",widget:{name:"EodashDatePicker"}}:null},{defineWidget:e=>e?{id:Symbol(),layout:{x:8,y:0,w:1,h:1},title:"Buttons",type:"internal",widget:{name:"EodashMapBtns"}}:null}]}});export{l as default};
