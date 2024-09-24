import{I as B,x as G,G as I,h as j,d as P,a as m,b as $,u as Y,Q as z,c as F,w as U,M as q,m as J,W as b,e as K,V as v,U as k,p as L,N,l as w,B as Q,f as A,$ as W,o as S,C as x,g as Z,i as R,j as V,k as M,t as E,q as X,Z as H,K as ee,J as te,v as ae,z as C,F as D,n as h}from"./eo-dash.TzuYtzQL.js";import{e as ne,a as O}from"./VOverlay-_h_9UR74.xyfTrNtB.js";import{A as oe,D as ie}from"./forwardRefs-BKh8b46t.COMJNU2X.js";import"./framework.CjlT-qPU.js";import"./transition-CFHhDKFr.Cxdg4d3_.js";const se=B({id:String,text:String,...G(ne({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),re=I()({name:"VTooltip",props:se(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:r}=o;const a=j(e,"modelValue"),{scopeId:c}=oe(),l=P(),s=m(()=>e.id||`v-tooltip-${l}`),n=$(),t=m(()=>e.location.split(" ").length>1?e.location:e.location+" center"),i=m(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),u=m(()=>e.transition?e.transition:a.value?"scale-transition":"fade-transition"),g=m(()=>w({"aria-describedby":s.value},e.activatorProps));return Y(()=>{const p=O.filterProps(e);return b(O,w({ref:n,class:["v-tooltip",e.class],style:e.style,id:s.value},p,{modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,transition:u.value,absolute:!0,location:t.value,origin:i.value,persistent:!0,role:"tooltip",activatorProps:g.value,_disableGlobalStack:!0},c),{activator:r.activator,default:function(){var T;for(var d=arguments.length,f=new Array(d),y=0;y<d;y++)f[y]=arguments[y];return((T=r.default)==null?void 0:T.call(r,...f))??e.text}})}),ie({},n)}});function le(e,o){const r=typeof e=="string"?Q(e):e,a=ue(r,o);return{mounted:a,updated:a,unmounted(c){A(null,c)}}}function ue(e,o){return function(r,a,c){var g,p,d;const l=typeof o=="function"?o(a):o,s=((g=a.value)==null?void 0:g.text)??a.value??(l==null?void 0:l.text),n=te(a.value)?a.value:{},t=()=>s??r.textContent,i=(c.ctx===a.instance.$?(p=ce(c,a.instance.$))==null?void 0:p.provides:(d=c.ctx)==null?void 0:d.provides)??a.instance.$.provides,u=ae(e,w(l,n),t);u.appContext=Object.assign(Object.create(null),a.instance.$.appContext,{provides:i}),A(u,r)}}function ce(e,o){const r=new Set,a=l=>{var s,n;for(const t of l){if(!t)continue;if(t===e)return!0;r.add(t);let i;if(t.suspense?i=a([t.ssContent]):Array.isArray(t.children)?i=a(t.children):(s=t.component)!=null&&s.vnode&&(i=a([(n=t.component)==null?void 0:n.subTree])),i)return i;r.delete(t)}return!1};if(!a([o.subTree]))throw new Error("Could not find original vnode");const c=Array.from(r).reverse();for(const l of c)if(l.component)return l.component;return o}const _=le(re,e=>{var o;return{activator:"parent",location:(o=e.arg)==null?void 0:o.replace("-"," "),text:typeof e.value=="boolean"?void 0:e.value}}),de={class:"flex rounded-lg border border-gray-300 dark:border-gray-600",style:{margin:"2px"}},pe=["value"],ge={class:"w-full px-4 pb-3",style:{"font-size":"12px"}},fe=["innerHTML"],he={__name:"EodashDatePicker",props:{hintText:{type:String,default:null}},setup(e){const o=W((s,n)=>({get(){return s(),new Date(C.value).getTime()},set(t){n(),D.debug("Datepicker setting currentDate",C.value),C.value=new Date(t).toISOString()}})),r=$({input:"YYYY-MM-DD"}),a=z([]),{selectedStac:c}=F(U());q(c,async(s,n)=>{var t;if(s&&(n==null?void 0:n.id)!==s.id){D.debug("Datepicker selected STAC change triggered");const i=["#009E73","#0072B2","#E69F00","#CC79A7","#56B4E9","#D55E00"];a.splice(0,a.length);for(let u=0;u<h.length;u++){D.debug("Retrieving dates",h[u]),await h[u].fetchCollection();const g=[...new Set((t=h[u].getItems())==null?void 0:t.reduce((p,d)=>{const f=Date.parse(d.datetime);return f&&p.push(new Date(f)),p},[]))];a.push({key:"id-"+u.toString()+Math.random().toString(16).slice(2),bar:{style:{backgroundColor:i[u%i.length]}},dates:g,content:{style:{color:"#000000","font-weight":"bold"}}})}}},{immediate:!0});function l(s){if(a.length){let n=s?1/0:-1/0;a.forEach(t=>{t!=null&&t.dates&&t.dates.forEach(i=>{i instanceof Date&&(n=Math[s?"min":"max"](n,i.getTime()))})}),o.value=n===-1/0?Date.now():n===1/0?0:n}}return(s,n)=>(S(),J(N,null,[b(k(R),{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=t=>o.value=t),modelModifiers:{number:!0},masks:r.value,attributes:a},K({default:v(({inputValue:t,inputEvents:i})=>[x("div",de,[x("input",w({value:t},Z(i,!0),{style:{margin:"1px"},class:"flex-grow px-1 py-1 bg-white dark:bg-gray-700"}),null,16,pe)])]),_:2},[e.hintText?{name:"footer",fn:v(()=>[x("div",ge,[x("span",{innerHTML:e.hintText},null,8,fe)])]),key:"0"}:void 0]),1032,["modelValue","masks","attributes"]),b(L,{align:"center",justify:"center",style:{"margin-top":"6px"}},{default:v(()=>[V((S(),M(H,{style:{padding:"0px","margin-right":"4px"},density:"compact",onClick:n[1]||(n[1]=t=>l(!0))},{default:v(()=>[b(E,{icon:[k(X)]},null,8,["icon"])]),_:1})),[[_,"Set date to oldest available dataset","bottom"]]),V((S(),M(H,{style:{padding:"0px","margin-left":"4px"},density:"compact",onClick:n[2]||(n[2]=t=>l(!1))},{default:v(()=>[b(E,{icon:[k(ee)]},null,8,["icon"])]),_:1})),[[_,"Set date to latest available dataset","bottom"]])]),_:1})],64))}};export{he as default};
