import{I as G,C as j,z as B,h as P,d as Y,x as f,a as _,l as z,J,G as R,w as U,M as W,p as q,W as v,R as h,U as D,b as Z,k as F,f as k,c as L,e as I,$ as K,o as C,g as E,j as N,m as Q,n as T,q as $,t as A,r as X,Z as H,s as ee,u as te,v as ae,y as S,H as x,A as w}from"./eo-dash.BMewqx9r.js";import{e as ne,a as M}from"./VOverlay-GwimCzPh.DDXP_MOJ.js";import{A as oe,D as ie}from"./forwardRefs-CbKkS0qr.CGC3gDfR.js";import"./framework.DvX7vlWS.js";import"./transition-DaWzl6K8.DSrwhnZk.js";const re=G({id:String,text:String,...j(ne({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),se=B()({name:"VTooltip",props:re(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:l}=r;const a=P(e,"modelValue"),{scopeId:u}=oe(),c=Y(),i=f(()=>e.id||`v-tooltip-${c}`),n=_(),t=f(()=>e.location.split(" ").length>1?e.location:e.location+" center"),s=f(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),p=f(()=>e.transition?e.transition:a.value?"scale-transition":"fade-transition"),g=f(()=>k({"aria-describedby":i.value},e.activatorProps));return z(()=>{const d=M.filterProps(e);return v(M,k({ref:n,class:["v-tooltip",e.class],style:e.style,id:i.value},d,{modelValue:a.value,"onUpdate:modelValue":o=>a.value=o,transition:p.value,absolute:!0,location:t.value,origin:s.value,persistent:!0,role:"tooltip",activatorProps:g.value,_disableGlobalStack:!0},u),{activator:l.activator,default:function(){var y;for(var o=arguments.length,b=new Array(o),m=0;m<o;m++)b[m]=arguments[m];return((y=l.default)==null?void 0:y.call(l,...b))??e.text}})}),ie({},n)}});function le(e,r){const l=typeof e=="string"?L(e):e,a=ce(l,r);return{mounted:a,updated:a,unmounted(u){I(null,u)}}}function ce(e,r){return function(l,a,u){var g,d,o;const c=typeof r=="function"?r(a):r,i=((g=a.value)==null?void 0:g.text)??a.value??(c==null?void 0:c.text),n=te(a.value)?a.value:{},t=()=>i??l.innerHTML,s=(u.ctx===a.instance.$?(d=ue(u,a.instance.$))==null?void 0:d.provides:(o=u.ctx)==null?void 0:o.provides)??a.instance.$.provides,p=ae(e,k(c,n),t);p.appContext=Object.assign(Object.create(null),a.instance.$.appContext,{provides:s}),I(p,l)}}function ue(e,r){const l=new Set,a=c=>{var i,n;for(const t of c){if(!t)continue;if(t===e)return!0;l.add(t);let s;if(t.suspense?s=a([t.ssContent]):Array.isArray(t.children)?s=a(t.children):(i=t.component)!=null&&i.vnode&&(s=a([(n=t.component)==null?void 0:n.subTree])),s)return s;l.delete(t)}return!1};if(!a([r.subTree]))throw new Error("Could not find original vnode");const u=Array.from(l).reverse();for(const c of u)if(c.component)return c.component;return r}const O=le(se,e=>{var r;return{activator:"parent",location:((r=e.arg)==null?void 0:r.replace("-"," "))??"top",text:typeof e.value=="boolean"?void 0:e.value}}),de={class:"flex rounded-lg border border-gray-300 dark:border-gray-600",style:{margin:"2px"}},pe=["value"],ye={__name:"EodashDatePicker",setup(e){const r=K((i,n)=>({get(){return i(),new Date(S.value).getTime()},set(t){n(),x.debug("Datepicker setting currentDate",S.value),S.value=new Date(t).toISOString()}})),l=_({input:"YYYY-MM-DD"}),a=J([]),{selectedStac:u}=R(U());W(u,async(i,n)=>{var t,s,p;if(i&&(n==null?void 0:n.id)!==i.id){x.debug("Datepicker selected STAC change triggered");const g=["#009E73","#0072B2","#E69F00","#CC79A7","#56B4E9","#D55E00"];a.splice(0,a.length);for(let o=0;o<w.length;o++){x.debug("Retrieving dates",w[o]),await w[o].fetchCollection();const b=[...new Set((t=w[o].getItems())==null?void 0:t.reduce((m,y)=>{const V=Date.parse(y.datetime);return V&&m.push(new Date(V)),m},[]))];a.push({key:"id-"+o.toString()+Math.random().toString(16).slice(2),bar:{style:{backgroundColor:g[o%g.length]}},dates:b})}const d=(p=(s=i==null?void 0:i.extent)==null?void 0:s.temporal)==null?void 0:p.interval;if(d&&d.length>0&&d[0].length>1){const o=new Date(d[0][1]);x.debug("Datepicker: found stac extent, setting time to latest value",o),r.value=o==null?void 0:o.getTime()}}},{immediate:!0});function c(i){if(a.length){let n=i?1/0:-1/0;a.forEach(t=>{t!=null&&t.dates&&t.dates.forEach(s=>{s instanceof Date&&(n=Math[i?"min":"max"](n,s.getTime()))})}),r.value=n===-1/0?Date.now():n===1/0?0:n}}return(i,n)=>(C(),q(F,null,[v(D(Q),{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=t=>r.value=t),modelModifiers:{number:!0},masks:l.value,attributes:a},{default:h(({inputValue:t,inputEvents:s})=>[E("div",de,[E("input",k({value:t},N(s,!0),{style:{margin:"1px"},class:"flex-grow px-1 py-1 bg-white dark:bg-gray-700"}),null,16,pe)])]),_:1},8,["modelValue","masks","attributes"]),v(Z,{align:"center",justify:"center",style:{"margin-top":"6px"}},{default:h(()=>[T((C(),$(H,{style:{padding:"0px","margin-right":"4px"},density:"compact",onClick:n[1]||(n[1]=t=>c(!0))},{default:h(()=>[v(A,{icon:[D(X)]},null,8,["icon"])]),_:1})),[[O,"Set date to oldest available dataset","bottom"]]),T((C(),$(H,{style:{padding:"0px","margin-left":"4px"},density:"compact",onClick:n[2]||(n[2]=t=>c(!1))},{default:h(()=>[v(A,{icon:[D(ee)]},null,8,["icon"])]),_:1})),[[O,"Set date to latest available dataset","bottom"]])]),_:1})],64))}};export{ye as default};