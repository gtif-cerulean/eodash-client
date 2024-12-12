import"./eox-jsonform.DTMr__QW.js";import{u as hh,f as dh,T as ph,x as Cn,b as Dr,i as fh,r as gh}from"./lit-element.Cu4xVypU.js";import{e as mh,i as yh,t as vh}from"./directive.CF8sV3Lr.js";import{v as bh,k as xh,t as na,r as ia,d as wh,e as $h,aU as _h}from"./eo-dash.BIm2sYY-.js";import{h as Eh,p as Ah,c as oa,k as Sh,e as Ch,o as sa}from"./framework.CxY9FQpQ.js";import"./commonjsHelpers.Cpj98o6Y.js";import"./theme.YAEQg5us.js";var Mh=Object.defineProperty,_l=e=>{throw TypeError(e)},kh=(e,t,r)=>t in e?Mh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Mt=(e,t,r)=>kh(e,typeof t!="symbol"?t+"":t,r),cs=(e,t,r)=>t.has(e)||_l("Cannot "+r),nt=(e,t,r)=>(cs(e,t,"read from private field"),r?r.call(e):t.get(e)),ut=(e,t,r)=>t.has(e)?_l("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Kr=(e,t,r,n)=>(cs(e,t,"write to private field"),t.set(e,r),r),Rt=(e,t,r)=>(cs(e,t,"access private method"),r);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hn=globalThis,us=Hn.ShadowRoot&&(Hn.ShadyCSS===void 0||Hn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hs=Symbol(),aa=new WeakMap;let El=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==hs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(us&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=aa.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&aa.set(t,e))}return e}toString(){return this.cssText}};const Lh=e=>new El(typeof e=="string"?e:e+"",void 0,hs),Al=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new El(r,e,hs)},Th=(e,t)=>{if(us)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Hn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},la=us?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Lh(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Oh,defineProperty:Dh,getOwnPropertyDescriptor:Ph,getOwnPropertyNames:Nh,getOwnPropertySymbols:Rh,getPrototypeOf:Hh}=Object,Er=globalThis,ca=Er.trustedTypes,Ih=ca?ca.emptyScript:"",ua=Er.reactiveElementPolyfillSupport,Br=(e,t)=>e,Ao={toAttribute(e,t){switch(t){case Boolean:e=e?Ih:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Sl=(e,t)=>!Oh(e,t),ha={attribute:!0,type:String,converter:Ao,reflect:!1,hasChanged:Sl};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Er.litPropertyMetadata??(Er.litPropertyMetadata=new WeakMap);class pr extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=ha){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&Dh(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:o}=Ph(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ha}static _$Ei(){if(this.hasOwnProperty(Br("elementProperties")))return;const t=Hh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Br("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Br("properties"))){const r=this.properties,n=[...Nh(r),...Rh(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(la(i))}else t!==void 0&&r.push(la(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Th(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){var n;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const s=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Ao).toAttribute(r,i.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,r){var n;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)==null?void 0:n.fromAttribute)!==void 0?s.converter:Ao;this._$Em=o,this[o]=a.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Sl)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$EU()}catch(i){throw r=!1,this._$EU(),i}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}pr.elementStyles=[],pr.shadowRootOptions={mode:"open"},pr[Br("elementProperties")]=new Map,pr[Br("finalized")]=new Map,ua==null||ua({ReactiveElement:pr}),(Er.reactiveElementVersions??(Er.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qn=globalThis,ti=Qn.trustedTypes,da=ti?ti.createPolicy("lit-html",{createHTML:e=>e}):void 0,ds="$lit$",Ae=`lit$${Math.random().toFixed(9).slice(2)}$`,ps="?"+Ae,Vh=`<${ps}>`,rr=document,Jr=()=>rr.createComment(""),Qr=e=>e===null||typeof e!="object"&&typeof e!="function",fs=Array.isArray,Cl=e=>fs(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Qi=`[ 	
\f\r]`,Pr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pa=/-->/g,fa=/>/g,Fe=RegExp(`>|${Qi}(?:([^\\s"'>=/]+)(${Qi}*=${Qi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ga=/'/g,ma=/"/g,Ml=/^(?:script|style|textarea|title)$/i,Uh=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),z=Uh(1),he=Symbol.for("lit-noChange"),at=Symbol.for("lit-nothing"),ya=new WeakMap,Ke=rr.createTreeWalker(rr,129);function kl(e,t){if(!fs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return da!==void 0?da.createHTML(t):t}const Ll=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=Pr;for(let a=0;a<r;a++){const l=e[a];let c,f,h=-1,g=0;for(;g<l.length&&(s.lastIndex=g,f=s.exec(l),f!==null);)g=s.lastIndex,s===Pr?f[1]==="!--"?s=pa:f[1]!==void 0?s=fa:f[2]!==void 0?(Ml.test(f[2])&&(i=RegExp("</"+f[2],"g")),s=Fe):f[3]!==void 0&&(s=Fe):s===Fe?f[0]===">"?(s=i??Pr,h=-1):f[1]===void 0?h=-2:(h=s.lastIndex-f[2].length,c=f[1],s=f[3]===void 0?Fe:f[3]==='"'?ma:ga):s===ma||s===ga?s=Fe:s===pa||s===fa?s=Pr:(s=Fe,i=void 0);const m=s===Fe&&e[a+1].startsWith("/>")?" ":"";o+=s===Pr?l+Vh:h>=0?(n.push(c),l.slice(0,h)+ds+l.slice(h)+Ae+m):l+Ae+(h===-2?a:m)}return[kl(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class tn{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[c,f]=Ll(t,r);if(this.el=tn.createElement(c,n),Ke.currentNode=this.el.content,r===2||r===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Ke.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ds)){const g=f[s++],m=i.getAttribute(h).split(Ae),x=/([.?@])?(.*)/.exec(g);l.push({type:1,index:o,name:x[2],strings:m,ctor:x[1]==="."?Dl:x[1]==="?"?Pl:x[1]==="@"?Nl:cn}),i.removeAttribute(h)}else h.startsWith(Ae)&&(l.push({type:6,index:o}),i.removeAttribute(h));if(Ml.test(i.tagName)){const h=i.textContent.split(Ae),g=h.length-1;if(g>0){i.textContent=ti?ti.emptyScript:"";for(let m=0;m<g;m++)i.append(h[m],Jr()),Ke.nextNode(),l.push({type:2,index:++o});i.append(h[g],Jr())}}}else if(i.nodeType===8)if(i.data===ps)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(Ae,h+1))!==-1;)l.push({type:7,index:o}),h+=Ae.length-1}o++}}static createElement(t,r){const n=rr.createElement("template");return n.innerHTML=t,n}}function nr(e,t,r=e,n){var i,o;if(t===he)return t;let s=n!==void 0?(i=r.o)==null?void 0:i[n]:r.l;const a=Qr(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),a===void 0?s=void 0:(s=new a(e),s._$AT(e,r,n)),n!==void 0?(r.o??(r.o=[]))[n]=s:r.l=s),s!==void 0&&(t=nr(e,s._$AS(e,t.values),s,n)),t}class Tl{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??rr).importNode(r,!0);Ke.currentNode=i;let o=Ke.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new bi(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new Rl(o,this,t)),this._$AV.push(c),l=n[++a]}s!==(l==null?void 0:l.index)&&(o=Ke.nextNode(),s++)}return Ke.currentNode=rr,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}let bi=class Ol{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,r,n,i){this.type=2,this._$AH=at,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this.v=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=nr(this,t,r),Qr(t)?t===at||t==null||t===""?(this._$AH!==at&&this._$AR(),this._$AH=at):t!==this._$AH&&t!==he&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Cl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==at&&Qr(this._$AH)?this._$AA.nextSibling.data=t:this.T(rr.createTextNode(t)),this._$AH=t}$(t){var r;const{values:n,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=tn.createElement(kl(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(n);else{const s=new Tl(o,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(t){let r=ya.get(t.strings);return r===void 0&&ya.set(t.strings,r=new tn(t)),r}k(t){fs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new Ol(this.O(Jr()),this.O(Jr()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this.v=t,(r=this._$AP)==null||r.call(this,t))}},cn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,o){this.type=1,this._$AH=at,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=at}_$AI(t,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)t=nr(this,t,r,0),s=!Qr(t)||t!==this._$AH&&t!==he,s&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=nr(this,a[n+l],r,l),c===he&&(c=this._$AH[l]),s||(s=!Qr(c)||c!==this._$AH[l]),c===at?t=at:t!==at&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(t)}j(t){t===at?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class Dl extends cn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===at?void 0:t}}class Pl extends cn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==at)}}class Nl extends cn{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){if((t=nr(this,t,r,0)??at)===he)return;const n=this._$AH,i=t===at&&n!==at||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==at&&(n===at||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class Rl{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){nr(this,t)}}const Bh={M:ds,P:Ae,A:ps,C:1,L:Ll,R:Tl,D:Cl,V:nr,I:bi,H:cn,N:Pl,U:Nl,B:Dl,F:Rl},va=Qn.litHtmlPolyfillSupport;va==null||va(tn,bi),(Qn.litHtmlVersions??(Qn.litHtmlVersions=[])).push("3.2.0");const zh=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new bi(t.insertBefore(Jr(),o),o,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Jt=class extends pr{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var t;const r=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=r.firstChild),r}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=zh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return he}};var ba;Jt._$litElement$=!0,Jt.finalized=!0,(ba=globalThis.litElementHydrateSupport)==null||ba.call(globalThis,{LitElement:Jt});const xa=globalThis.litElementPolyfillSupport;xa==null||xa({LitElement:Jt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function It(e,t,r){return e?t(e):r==null?void 0:r(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},gs=e=>(...t)=>({_$litDirective$:e,values:t});class ms{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this.t=t,this._$AM=r,this.i=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:jh}=Bh,Fh=e=>e.strings===void 0,wa=()=>document.createComment(""),Nr=(e,t,r)=>{var n;const i=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=i.insertBefore(wa(),o),a=i.insertBefore(wa(),o);r=new jh(s,a,e,e.options)}else{const s=r._$AB.nextSibling,a=r._$AM,l=a!==e;if(l){let c;(n=r._$AQ)==null||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==a._$AU&&r._$AP(c)}if(s!==o||l){let c=r._$AA;for(;c!==s;){const f=c.nextSibling;i.insertBefore(c,o),c=f}}}return r},qe=(e,t,r=e)=>(e._$AI(t,r),e),qh={},Hl=(e,t=qh)=>e._$AH=t,Wh=e=>e._$AH,to=e=>{var t;(t=e._$AP)==null||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const i=r.nextSibling;r.remove(),r=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $a=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},Zh=gs(class extends ms{constructor(e){if(super(e),e.type!==De.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],o=[];let s=0;for(const a of e)i[s]=n?n(a,s):s,o[s]=r(a,s),s++;return{values:o,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=Wh(e),{values:o,keys:s}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=s,o;const a=this.ut??(this.ut=[]),l=[];let c,f,h=0,g=i.length-1,m=0,x=o.length-1;for(;h<=g&&m<=x;)if(i[h]===null)h++;else if(i[g]===null)g--;else if(a[h]===s[m])l[m]=qe(i[h],o[m]),h++,m++;else if(a[g]===s[x])l[x]=qe(i[g],o[x]),g--,x--;else if(a[h]===s[x])l[x]=qe(i[h],o[x]),Nr(e,l[x+1],i[h]),h++,x--;else if(a[g]===s[m])l[m]=qe(i[g],o[m]),Nr(e,i[h],i[g]),g--,m++;else if(c===void 0&&(c=$a(s,m,x),f=$a(a,h,g)),c.has(a[h]))if(c.has(a[g])){const L=f.get(s[m]),F=L!==void 0?i[L]:null;if(F===null){const W=Nr(e,i[h]);qe(W,o[m]),l[m]=W}else l[m]=qe(F,o[m]),Nr(e,i[h],F),i[L]=null;m++}else to(i[g]),g--;else to(i[h]),h++;for(;m<=x;){const L=Nr(e,l[x+1]);qe(L,o[m]),l[m++]=L}for(;h<=g;){const L=i[h++];L!==null&&to(L)}return this.ut=s,Hl(e,l),he}});/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var G=e=>e!==void 0,Il=(e,t,r)=>t in e?e[t]:e[t]=r;const en={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};let Yh=class{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,r){return xi(t,r).join("")}};function xi(e,t){return Vl(e,t,[]).join("")}function Vl(e,t,r){if(e.nodeType===en.CDATA_SECTION||e.nodeType===en.TEXT)t?r.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):r.push(e.nodeValue);else{var n;for(n=e.firstChild;n;n=n.nextSibling)Vl(n,t,r)}return r}function Xh(e,t,r,n){for(var i=Gh(t);i;i=Kh(i)){var o=i.namespaceURI||null,s=e[o];if(G(s)){var a=s[i.localName];G(a)&&a.call(n,i,r)}}}function Gh(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==en.ELEMENT;)t=t.nextSibling;return t}function Kh(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==en.ELEMENT;)t=t.nextSibling;return t}function qt(e,t,r){return Jh(e,t,r)}function Jh(e,t,r){var n=G(r)?r:{},i,o;for(i=0,o=e.length;i<o;++i)n[e[i]]=t;return n}function Ul(e,t){return function(r,n){var i=e.call(G(t)?t:this,r,n);if(G(i)){var o=n[n.length-1];o.push(i)}}}function zt(e,t,r,n,i){return n.push(e),Xh(t,r,n,i),n.pop()}function O(e,t,r){return function(n,i){let o=e.call(G(r)?r:this,n,i);if(G(o)){var s=i[i.length-1],a=G(t)?t:n.localName;s[a]=o}}}function oe(e,t,r){return function(n,i){var o=e.call(G(r)?r:this,n,i);if(G(o)){var s=i[i.length-1],a=G(t)?t:n.localName,l=Il(s,a,[]);l.push(o)}}}const Qh=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function td(e){return e.replace(Qh,"")}function tr(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return G(t[1])||!1}function yr(e){return Se(xi(e,!1))}function Se(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function eo(e){return ei(xi(e,!1))}function ei(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function it(e){return td(xi(e,!1))}const ed="http://www.w3.org/1999/xlink";function ys(e){return e.getAttributeNS(ed,"href")}function rd(e,t){return zt({},kd,e,t)}function Bl(e){return[Se(e.getAttribute("minx")),Se(e.getAttribute("miny")),Se(e.getAttribute("maxx")),Se(e.getAttribute("maxy"))]}function nd(e,t){const r=Bl(e),n=[Se(e.getAttribute("resx")),Se(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:r,res:n}}function id(e,t){const r=Bl(e);if(!(!G(r[0])||!G(r[1])||!G(r[2])||!G(r[3])))return r}function od(e,t){const r=parseFloat(e.getAttribute("min")),n=parseFloat(e.getAttribute("max"));return{min:r,max:n}}function sd(e,t){const r=zt({},Ld,e,t);if(!G(r))return;const n=r.westBoundLongitude,i=r.southBoundLatitude,o=r.eastBoundLongitude,s=r.northBoundLatitude;if(!(!G(n)||!G(i)||!G(o)||!G(s)))return[n,i,o,s]}function ad(e,t){return zt({},_d,e,t)}function ld(e,t){return zt({},Ed,e,t)}function cd(e,t){return zt({},Ad,e,t)}function ud(e,t){return zt({},Sd,e,t)}function hd(e,t){return zt({},Cd,e,t)}function dd(e,t){return zt([],Md,e,t)}function pd(e,t){const r=tr(e.getAttribute("queryable"));return zt({queryable:G(r)?r:!1},Fl,e,t)}function fd(e,t){var r=t[t.length-1];const n=zt({},Fl,e,t);if(!G(n))return;let i=tr(e.getAttribute("queryable"));G(i)||(i=r.queryable),n.queryable=G(i)?i:!1;let o=ei(e.getAttribute("cascaded"));G(o)||(o=r.cascaded),n.cascaded=o;let s=tr(e.getAttribute("opaque"));G(s)||(s=r.opaque),n.opaque=G(s)?s:!1;let a=tr(e.getAttribute("noSubsets"));G(a)||(a=r.noSubsets),n.noSubsets=G(a)?a:!1;let l=Se(e.getAttribute("fixedWidth"));G(l)||(l=r.fixedWidth),n.fixedWidth=l;let c=Se(e.getAttribute("fixedHeight"));G(c)||(c=r.fixedHeight),n.fixedHeight=c;const f=["Style","CRS","AuthorityURL"];for(let g=0,m=f.length;g<m;g++){const x=f[g],L=r[x];if(G(L)){let F=Il(n,x,[]);F=F.concat(L),n[x]=F}}const h=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let g=0,m=h.length;g<m;g++){const x=h[g],L=n[x];if(!G(L)){const F=r[x];n[x]=F}}return n}function gd(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:tr(e.getAttribute("multipleValues")),nearestValue:tr(e.getAttribute("nearestValue")),current:tr(e.getAttribute("current")),values:it(e)}}function ke(e,t){return zt({},Rd,e,t)}function md(e,t){return zt({},Td,e,t)}function yd(e,t){return zt({},Dd,e,t)}function vd(e,t){return zt({},Pd,e,t)}function ro(e,t){return zt({},Od,e,t)}function zl(e,t){var r=ke(e,t);if(G(r)){const n=[ei(e.getAttribute("width")),ei(e.getAttribute("height"))];return r.size=n,r}}function bd(e,t){var r=ke(e,t);if(G(r))return r.name=e.getAttribute("name"),r}function xd(e,t){var r=ke(e,t);if(G(r))return r.type=e.getAttribute("type"),r}function wd(e,t){return zt({},Nd,e,t)}function jl(e,t){return zt([],Hd,e,t)}const Wt=[null,"http://www.opengis.net/wms"],$d=qt(Wt,{Service:O(ld),Capability:O(ad)}),_d=qt(Wt,{Request:O(md),Exception:O(dd),Layer:O(pd)}),Ed=qt(Wt,{Name:O(it),Title:O(it),Abstract:O(it),KeywordList:O(jl),OnlineResource:O(ys),ContactInformation:O(cd),Fees:O(it),AccessConstraints:O(it),LayerLimit:O(eo),MaxWidth:O(eo),MaxHeight:O(eo)}),Ad=qt(Wt,{ContactPersonPrimary:O(ud),ContactPosition:O(it),ContactAddress:O(hd),ContactVoiceTelephone:O(it),ContactFacsimileTelephone:O(it),ContactElectronicMailAddress:O(it)}),Sd=qt(Wt,{ContactPerson:O(it),ContactOrganization:O(it)}),Cd=qt(Wt,{AddressType:O(it),Address:O(it),City:O(it),StateOrProvince:O(it),PostCode:O(it),Country:O(it)}),Md=qt(Wt,{Format:Ul(it)}),Fl=qt(Wt,{Name:O(it),Title:O(it),Abstract:O(it),KeywordList:O(jl),CRS:oe(it),SRS:oe(it),EX_GeographicBoundingBox:O(sd),LatLonBoundingBox:O(id),BoundingBox:oe(nd),Dimension:oe(gd),Attribution:O(rd),AuthorityURL:oe(bd),Identifier:oe(it),MetadataURL:oe(xd),DataURL:oe(ke),FeatureListURL:oe(ke),Style:oe(wd),MinScaleDenominator:O(yr),MaxScaleDenominator:O(yr),ScaleHint:O(od),Layer:oe(fd)}),kd=qt(Wt,{Title:O(it),OnlineResource:O(ys),LogoURL:O(zl)}),Ld=qt(Wt,{westBoundLongitude:O(yr),eastBoundLongitude:O(yr),southBoundLatitude:O(yr),northBoundLatitude:O(yr)}),Td=qt(Wt,{GetCapabilities:O(ro),GetMap:O(ro),GetFeatureInfo:O(ro)}),Od=qt(Wt,{Format:oe(it),DCPType:oe(yd)}),Dd=qt(Wt,{HTTP:O(vd)}),Pd=qt(Wt,{Get:O(ke),Post:O(ke)}),Nd=qt(Wt,{Name:O(it),Title:O(it),Abstract:O(it),LegendURL:oe(zl),StyleSheetURL:O(ke),StyleURL:O(ke)}),Rd=qt(Wt,{Format:O(it),OnlineResource:O(ys)}),Hd=qt(Wt,{Keyword:Ul(it)});let Id=class{constructor(t,r){!r&&typeof window<"u"&&(r=window.DOMParser),this.version=void 0,this._parser=new Yh(r),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let r=t.firstChild;r;r=r.nextSibling)if(r.nodeType==en.ELEMENT)return this.readFromNode(r);return null}readFromNode(t){return this.version=t.getAttribute("version"),zt({version:this.version},$d,t,[])||null}};async function Vd(e){let t=new URL(e),r=t.searchParams;r.set("SERVICE","WMS"),r.set("REQUEST","GetCapabilities");let n=t.toString();const i=await fetch(n);if(i.ok){const o=await i.text();return new Id(o).toJSON()}else throw new Error(`Error: ${i.status}`)}function vs(e){const t=/\b(?:wms|ows)\b/i,r=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":r.test(e)?"XYZ":!1}function Ud(e){const t=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),r=vs(e);return!!(e&&t&&r)}function ql(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Bd(e){try{return JSON.parse(ql(e)),!!e}catch{return!1}}function zd(e,t){const r=new URL(e).searchParams;Object.entries(t).forEach(([o,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(a=>{r.set(a,s[a])}):r.set(o,s)});const n=e.split("?")[0],i=r.toString();return`${n}?${i}`}/**!
 * Sortable 1.15.3
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function _a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function $e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_a(Object(r),!0).forEach(function(n){jd(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_a(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function In(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?In=function(t){return typeof t}:In=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},In(e)}function jd(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Le(){return Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Le.apply(this,arguments)}function Fd(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function qd(e,t){if(e==null)return{};var r=Fd(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Wd="1.15.3";function Me(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var Te=Me(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),un=Me(/Edge/i),Ea=Me(/firefox/i),zr=Me(/safari/i)&&!Me(/chrome/i)&&!Me(/android/i),Wl=Me(/iP(ad|od|hone)/i),Zl=Me(/chrome/i)&&Me(/android/i),Yl={capture:!1,passive:!1};function st(e,t,r){e.addEventListener(t,r,!Te&&Yl)}function et(e,t,r){e.removeEventListener(t,r,!Te&&Yl)}function ri(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function Xl(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function me(e,t,r,n){if(e){r=r||document;do{if(t!=null&&(t[0]===">"?e.parentNode===r&&ri(e,t):ri(e,t))||n&&e===r)return e;if(e===r)break}while(e=Xl(e))}return null}var Aa=/\s+/g;function ae(e,t,r){if(e&&t)if(e.classList)e.classList[r?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(Aa," ").replace(" "+t+" "," ");e.className=(n+(r?" "+t:"")).replace(Aa," ")}}function H(e,t,r){var n=e&&e.style;if(n){if(r===void 0)return document.defaultView&&document.defaultView.getComputedStyle?r=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(r=e.currentStyle),t===void 0?r:r[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=r+(typeof r=="string"?"":"px")}}function xr(e,t){var r="";if(typeof e=="string")r=e;else do{var n=H(e,"transform");n&&n!=="none"&&(r=n+" "+r)}while(!t&&(e=e.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(r)}function Gl(e,t,r){if(e){var n=e.getElementsByTagName(t),i=0,o=n.length;if(r)for(;i<o;i++)r(n[i],i);return n}return[]}function be(){var e=document.scrollingElement;return e||document.documentElement}function Ot(e,t,r,n,i){if(!(!e.getBoundingClientRect&&e!==window)){var o,s,a,l,c,f,h;if(e!==window&&e.parentNode&&e!==be()?(o=e.getBoundingClientRect(),s=o.top,a=o.left,l=o.bottom,c=o.right,f=o.height,h=o.width):(s=0,a=0,l=window.innerHeight,c=window.innerWidth,f=window.innerHeight,h=window.innerWidth),(t||r)&&e!==window&&(i=i||e.parentNode,!Te))do if(i&&i.getBoundingClientRect&&(H(i,"transform")!=="none"||r&&H(i,"position")!=="static")){var g=i.getBoundingClientRect();s-=g.top+parseInt(H(i,"border-top-width")),a-=g.left+parseInt(H(i,"border-left-width")),l=s+o.height,c=a+o.width;break}while(i=i.parentNode);if(n&&e!==window){var m=xr(i||e),x=m&&m.a,L=m&&m.d;m&&(s/=L,a/=x,h/=x,f/=L,l=s+f,c=a+h)}return{top:s,left:a,bottom:l,right:c,width:h,height:f}}}function Sa(e,t,r){for(var n=He(e,!0),i=Ot(e)[t];n;){var o=Ot(n)[r],s=void 0;if(s=i>=o,!s)return n;if(n===be())break;n=He(n,!1)}return!1}function Ar(e,t,r,n){for(var i=0,o=0,s=e.children;o<s.length;){if(s[o].style.display!=="none"&&s[o]!==I.ghost&&(n||s[o]!==I.dragged)&&me(s[o],r.draggable,e,!1)){if(i===t)return s[o];i++}o++}return null}function bs(e,t){for(var r=e.lastElementChild;r&&(r===I.ghost||H(r,"display")==="none"||t&&!ri(r,t));)r=r.previousElementSibling;return r||null}function ue(e,t){var r=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==I.clone&&(!t||ri(e,t))&&r++;return r}function Ca(e){var t=0,r=0,n=be();if(e)do{var i=xr(e),o=i.a,s=i.d;t+=e.scrollLeft*o,r+=e.scrollTop*s}while(e!==n&&(e=e.parentNode));return[t,r]}function Zd(e,t){for(var r in e)if(e.hasOwnProperty(r)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e[r][n])return Number(r)}return-1}function He(e,t){if(!e||!e.getBoundingClientRect)return be();var r=e,n=!1;do if(r.clientWidth<r.scrollWidth||r.clientHeight<r.scrollHeight){var i=H(r);if(r.clientWidth<r.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||r.clientHeight<r.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!r.getBoundingClientRect||r===document.body)return be();if(n||t)return r;n=!0}}while(r=r.parentNode);return be()}function Yd(e,t){if(e&&t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}function no(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var jr;function Kl(e,t){return function(){if(!jr){var r=arguments,n=this;r.length===1?e.call(n,r[0]):e.apply(n,r),jr=setTimeout(function(){jr=void 0},t)}}}function Xd(){clearTimeout(jr),jr=void 0}function Jl(e,t,r){e.scrollLeft+=t,e.scrollTop+=r}function Ql(e){var t=window.Polymer,r=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):r?r(e).clone(!0)[0]:e.cloneNode(!0)}function tc(e,t,r){var n={};return Array.from(e.children).forEach(function(i){var o,s,a,l;if(!(!me(i,t.draggable,e,!1)||i.animated||i===r)){var c=Ot(i);n.left=Math.min((o=n.left)!==null&&o!==void 0?o:1/0,c.left),n.top=Math.min((s=n.top)!==null&&s!==void 0?s:1/0,c.top),n.right=Math.max((a=n.right)!==null&&a!==void 0?a:-1/0,c.right),n.bottom=Math.max((l=n.bottom)!==null&&l!==void 0?l:-1/0,c.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var se="Sortable"+new Date().getTime();function Gd(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(n){if(!(H(n,"display")==="none"||n===I.ghost)){e.push({target:n,rect:Ot(n)});var i=$e({},e[e.length-1].rect);if(n.thisAnimationDuration){var o=xr(n,!0);o&&(i.top-=o.f,i.left-=o.e)}n.fromRect=i}})}},addAnimationState:function(r){e.push(r)},removeAnimationState:function(r){e.splice(Zd(e,{target:r}),1)},animateAll:function(r){var n=this;if(!this.options.animation){clearTimeout(t),typeof r=="function"&&r();return}var i=!1,o=0;e.forEach(function(s){var a=0,l=s.target,c=l.fromRect,f=Ot(l),h=l.prevFromRect,g=l.prevToRect,m=s.rect,x=xr(l,!0);x&&(f.top-=x.f,f.left-=x.e),l.toRect=f,l.thisAnimationDuration&&no(h,f)&&!no(c,f)&&(m.top-f.top)/(m.left-f.left)===(c.top-f.top)/(c.left-f.left)&&(a=Jd(m,h,g,n.options)),no(f,c)||(l.prevFromRect=c,l.prevToRect=f,a||(a=n.options.animation),n.animate(l,m,f,a)),a&&(i=!0,o=Math.max(o,a),clearTimeout(l.animationResetTimer),l.animationResetTimer=setTimeout(function(){l.animationTime=0,l.prevFromRect=null,l.fromRect=null,l.prevToRect=null,l.thisAnimationDuration=null},a),l.thisAnimationDuration=a)}),clearTimeout(t),i?t=setTimeout(function(){typeof r=="function"&&r()},o):typeof r=="function"&&r(),e=[]},animate:function(r,n,i,o){if(o){H(r,"transition",""),H(r,"transform","");var s=xr(this.el),a=s&&s.a,l=s&&s.d,c=(n.left-i.left)/(a||1),f=(n.top-i.top)/(l||1);r.animatingX=!!c,r.animatingY=!!f,H(r,"transform","translate3d("+c+"px,"+f+"px,0)"),this.forRepaintDummy=Kd(r),H(r,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),H(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){H(r,"transition",""),H(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},o)}}}}function Kd(e){return e.offsetWidth}function Jd(e,t,r,n){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-r.top,2)+Math.pow(t.left-r.left,2))*n.animation}var cr=[],io={initializeByDefault:!0},hn={mount:function(e){for(var t in io)io.hasOwnProperty(t)&&!(t in e)&&(e[t]=io[t]);cr.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),cr.push(e)},pluginEvent:function(e,t,r){var n=this;this.eventCanceled=!1,r.cancel=function(){n.eventCanceled=!0};var i=e+"Global";cr.forEach(function(o){t[o.pluginName]&&(t[o.pluginName][i]&&t[o.pluginName][i]($e({sortable:t},r)),t.options[o.pluginName]&&t[o.pluginName][e]&&t[o.pluginName][e]($e({sortable:t},r)))})},initializePlugins:function(e,t,r,n){cr.forEach(function(s){var a=s.pluginName;if(!(!e.options[a]&&!s.initializeByDefault)){var l=new s(e,t,e.options);l.sortable=e,l.options=e.options,e[a]=l,Le(r,l.defaults)}});for(var i in e.options)if(e.options.hasOwnProperty(i)){var o=this.modifyOption(e,i,e.options[i]);typeof o<"u"&&(e.options[i]=o)}},getEventProperties:function(e,t){var r={};return cr.forEach(function(n){typeof n.eventProperties=="function"&&Le(r,n.eventProperties.call(t[n.pluginName],e))}),r},modifyOption:function(e,t,r){var n;return cr.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[t]=="function"&&(n=i.optionListeners[t].call(e[i.pluginName],r))}),n}};function Qd(e){var t=e.sortable,r=e.rootEl,n=e.name,i=e.targetEl,o=e.cloneEl,s=e.toEl,a=e.fromEl,l=e.oldIndex,c=e.newIndex,f=e.oldDraggableIndex,h=e.newDraggableIndex,g=e.originalEvent,m=e.putSortable,x=e.extraEventProperties;if(t=t||r&&r[se],!!t){var L,F=t.options,W="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!Te&&!un?L=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(L=document.createEvent("Event"),L.initEvent(n,!0,!0)),L.to=s||r,L.from=a||r,L.item=i||r,L.clone=o,L.oldIndex=l,L.newIndex=c,L.oldDraggableIndex=f,L.newDraggableIndex=h,L.originalEvent=g,L.pullMode=m?m.lastPutMode:void 0;var mt=$e($e({},x),hn.getEventProperties(n,t));for(var J in mt)L[J]=mt[J];r&&r.dispatchEvent(L),F[W]&&F[W].call(t,L)}}var tp=["evt"],ie=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.evt,i=qd(r,tp);hn.pluginEvent.bind(I)(e,t,$e({dragEl:$,parentEl:Et,ghostEl:q,rootEl:xt,nextEl:Xe,lastDownEl:Vn,cloneEl:$t,cloneHidden:Ne,dragStarted:Hr,putSortable:Ft,activeSortable:I.active,originalEvent:n,oldIndex:vr,oldDraggableIndex:Fr,newIndex:le,newDraggableIndex:Pe,hideGhostForTarget:ic,unhideGhostForTarget:oc,cloneNowHidden:function(){Ne=!0},cloneNowShown:function(){Ne=!1},dispatchSortableEvent:function(o){Kt({sortable:t,name:o,originalEvent:n})}},i))};function Kt(e){Qd($e({putSortable:Ft,cloneEl:$t,targetEl:$,rootEl:xt,oldIndex:vr,oldDraggableIndex:Fr,newIndex:le,newDraggableIndex:Pe},e))}var $,Et,q,xt,Xe,Vn,$t,Ne,vr,le,Fr,Pe,Mn,Ft,fr=!1,ni=!1,ii=[],We,fe,oo,so,Ma,ka,Hr,ur,qr,Wr=!1,kn=!1,Un,Xt,ao=[],So=!1,oi=[],wi=typeof document<"u",Ln=Wl,La=un||Te?"cssFloat":"float",ep=wi&&!Zl&&!Wl&&"draggable"in document.createElement("div"),ec=function(){if(wi){if(Te)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),rc=function(e,t){var r=H(e),n=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),i=Ar(e,0,t),o=Ar(e,1,t),s=i&&H(i),a=o&&H(o),l=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Ot(i).width,c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Ot(o).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&s.float&&s.float!=="none"){var f=s.float==="left"?"left":"right";return o&&(a.clear==="both"||a.clear===f)?"vertical":"horizontal"}return i&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||l>=n&&r[La]==="none"||o&&r[La]==="none"&&l+c>n)?"vertical":"horizontal"},rp=function(e,t,r){var n=r?e.left:e.top,i=r?e.right:e.bottom,o=r?e.width:e.height,s=r?t.left:t.top,a=r?t.right:t.bottom,l=r?t.width:t.height;return n===s||i===a||n+o/2===s+l/2},np=function(e,t){var r;return ii.some(function(n){var i=n[se].options.emptyInsertThreshold;if(!(!i||bs(n))){var o=Ot(n),s=e>=o.left-i&&e<=o.right+i,a=t>=o.top-i&&t<=o.bottom+i;if(s&&a)return r=n}}),r},nc=function(e){function t(i,o){return function(s,a,l,c){var f=s.options.group.name&&a.options.group.name&&s.options.group.name===a.options.group.name;if(i==null&&(o||f))return!0;if(i==null||i===!1)return!1;if(o&&i==="clone")return i;if(typeof i=="function")return t(i(s,a,l,c),o)(s,a,l,c);var h=(o?s:a).options.group.name;return i===!0||typeof i=="string"&&i===h||i.join&&i.indexOf(h)>-1}}var r={},n=e.group;(!n||In(n)!="object")&&(n={name:n}),r.name=n.name,r.checkPull=t(n.pull,!0),r.checkPut=t(n.put),r.revertClone=n.revertClone,e.group=r},ic=function(){!ec&&q&&H(q,"display","none")},oc=function(){!ec&&q&&H(q,"display","")};wi&&!Zl&&document.addEventListener("click",function(e){if(ni)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),ni=!1,!1},!0);var Ze=function(e){if($){e=e.touches?e.touches[0]:e;var t=np(e.clientX,e.clientY);if(t){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);r.target=r.rootEl=t,r.preventDefault=void 0,r.stopPropagation=void 0,t[se]._onDragOver(r)}}},ip=function(e){$&&$.parentNode[se]._isOutsideThisEl(e.target)};function I(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=Le({},t),e[se]=this;var r={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return rc(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(o,s){o.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:I.supportPointer!==!1&&"PointerEvent"in window&&!zr,emptyInsertThreshold:5};hn.initializePlugins(this,e,r);for(var n in r)!(n in t)&&(t[n]=r[n]);nc(t);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=t.forceFallback?!1:ep,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?st(e,"pointerdown",this._onTapStart):(st(e,"mousedown",this._onTapStart),st(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(st(e,"dragover",this),st(e,"dragenter",this)),ii.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),Le(this,Gd())}I.prototype={constructor:I,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(ur=null)},_getDirection:function(e,t){return typeof this.options.direction=="function"?this.options.direction.call(this,e,t,$):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,r=this.el,n=this.options,i=n.preventOnFilter,o=e.type,s=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,a=(s||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||a,c=n.filter;if(dp(r),!$&&!(/mousedown|pointerdown/.test(o)&&e.button!==0||n.disabled)&&!l.isContentEditable&&!(!this.nativeDraggable&&zr&&a&&a.tagName.toUpperCase()==="SELECT")&&(a=me(a,n.draggable,r,!1),!(a&&a.animated)&&Vn!==a)){if(vr=ue(a),Fr=ue(a,n.draggable),typeof c=="function"){if(c.call(this,e,a,this)){Kt({sortable:t,rootEl:l,name:"filter",targetEl:a,toEl:r,fromEl:r}),ie("filter",t,{evt:e}),i&&e.cancelable&&e.preventDefault();return}}else if(c&&(c=c.split(",").some(function(f){if(f=me(l,f.trim(),r,!1),f)return Kt({sortable:t,rootEl:f,name:"filter",targetEl:a,fromEl:r,toEl:r}),ie("filter",t,{evt:e}),!0}),c)){i&&e.cancelable&&e.preventDefault();return}n.handle&&!me(l,n.handle,r,!1)||this._prepareDragStart(e,s,a)}}},_prepareDragStart:function(e,t,r){var n=this,i=n.el,o=n.options,s=i.ownerDocument,a;if(r&&!$&&r.parentNode===i){var l=Ot(r);if(xt=i,$=r,Et=$.parentNode,Xe=$.nextSibling,Vn=r,Mn=o.group,I.dragged=$,We={target:$,clientX:(t||e).clientX,clientY:(t||e).clientY},Ma=We.clientX-l.left,ka=We.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,$.style["will-change"]="all",a=function(){if(ie("delayEnded",n,{evt:e}),I.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!Ea&&n.nativeDraggable&&($.draggable=!0),n._triggerDragStart(e,t),Kt({sortable:n,name:"choose",originalEvent:e}),ae($,o.chosenClass,!0)},o.ignore.split(",").forEach(function(c){Gl($,c.trim(),lo)}),st(s,"dragover",Ze),st(s,"mousemove",Ze),st(s,"touchmove",Ze),st(s,"mouseup",n._onDrop),st(s,"touchend",n._onDrop),st(s,"touchcancel",n._onDrop),Ea&&this.nativeDraggable&&(this.options.touchStartThreshold=4,$.draggable=!0),ie("delayStart",this,{evt:e}),o.delay&&(!o.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(un||Te))){if(I.eventCanceled){this._onDrop();return}st(s,"mouseup",n._disableDelayedDrag),st(s,"touchend",n._disableDelayedDrag),st(s,"touchcancel",n._disableDelayedDrag),st(s,"mousemove",n._delayedDragTouchMoveHandler),st(s,"touchmove",n._delayedDragTouchMoveHandler),o.supportPointer&&st(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(a,o.delay)}else a()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){$&&lo($),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;et(e,"mouseup",this._disableDelayedDrag),et(e,"touchend",this._disableDelayedDrag),et(e,"touchcancel",this._disableDelayedDrag),et(e,"mousemove",this._delayedDragTouchMoveHandler),et(e,"touchmove",this._delayedDragTouchMoveHandler),et(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||e.pointerType=="touch"&&e,!this.nativeDraggable||t?this.options.supportPointer?st(document,"pointermove",this._onTouchMove):t?st(document,"touchmove",this._onTouchMove):st(document,"mousemove",this._onTouchMove):(st($,"dragend",this),st(xt,"dragstart",this._onDragStart));try{document.selection?Bn(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(fr=!1,xt&&$){ie("dragStarted",this,{evt:t}),this.nativeDraggable&&st(document,"dragover",ip);var r=this.options;!e&&ae($,r.dragClass,!1),ae($,r.ghostClass,!0),I.active=this,e&&this._appendGhost(),Kt({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(fe){this._lastX=fe.clientX,this._lastY=fe.clientY,ic();for(var e=document.elementFromPoint(fe.clientX,fe.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(fe.clientX,fe.clientY),e!==t);)t=e;if($.parentNode[se]._isOutsideThisEl(e),t)do{if(t[se]){var r=void 0;if(r=t[se]._onDragOver({clientX:fe.clientX,clientY:fe.clientY,target:e,rootEl:t}),r&&!this.options.dragoverBubble)break}e=t}while(t=Xl(t));oc()}},_onTouchMove:function(e){if(We){var t=this.options,r=t.fallbackTolerance,n=t.fallbackOffset,i=e.touches?e.touches[0]:e,o=q&&xr(q,!0),s=q&&o&&o.a,a=q&&o&&o.d,l=Ln&&Xt&&Ca(Xt),c=(i.clientX-We.clientX+n.x)/(s||1)+(l?l[0]-ao[0]:0)/(s||1),f=(i.clientY-We.clientY+n.y)/(a||1)+(l?l[1]-ao[1]:0)/(a||1);if(!I.active&&!fr){if(r&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(q){o?(o.e+=c-(oo||0),o.f+=f-(so||0)):o={a:1,b:0,c:0,d:1,e:c,f};var h="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");H(q,"webkitTransform",h),H(q,"mozTransform",h),H(q,"msTransform",h),H(q,"transform",h),oo=c,so=f,fe=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!q){var e=this.options.fallbackOnBody?document.body:xt,t=Ot($,!0,Ln,!0,e),r=this.options;if(Ln){for(Xt=e;H(Xt,"position")==="static"&&H(Xt,"transform")==="none"&&Xt!==document;)Xt=Xt.parentNode;Xt!==document.body&&Xt!==document.documentElement?(Xt===document&&(Xt=be()),t.top+=Xt.scrollTop,t.left+=Xt.scrollLeft):Xt=be(),ao=Ca(Xt)}q=$.cloneNode(!0),ae(q,r.ghostClass,!1),ae(q,r.fallbackClass,!0),ae(q,r.dragClass,!0),H(q,"transition",""),H(q,"transform",""),H(q,"box-sizing","border-box"),H(q,"margin",0),H(q,"top",t.top),H(q,"left",t.left),H(q,"width",t.width),H(q,"height",t.height),H(q,"opacity","0.8"),H(q,"position",Ln?"absolute":"fixed"),H(q,"zIndex","100000"),H(q,"pointerEvents","none"),I.ghost=q,e.appendChild(q),H(q,"transform-origin",Ma/parseInt(q.style.width)*100+"% "+ka/parseInt(q.style.height)*100+"%")}},_onDragStart:function(e,t){var r=this,n=e.dataTransfer,i=r.options;if(ie("dragStart",this,{evt:e}),I.eventCanceled){this._onDrop();return}ie("setupClone",this),I.eventCanceled||($t=Ql($),$t.removeAttribute("id"),$t.draggable=!1,$t.style["will-change"]="",this._hideClone(),ae($t,this.options.chosenClass,!1),I.clone=$t),r.cloneId=Bn(function(){ie("clone",r),!I.eventCanceled&&(r.options.removeCloneOnHide||xt.insertBefore($t,$),r._hideClone(),Kt({sortable:r,name:"clone"}))}),!t&&ae($,i.dragClass,!0),t?(ni=!0,r._loopId=setInterval(r._emulateDragOver,50)):(et(document,"mouseup",r._onDrop),et(document,"touchend",r._onDrop),et(document,"touchcancel",r._onDrop),n&&(n.effectAllowed="move",i.setData&&i.setData.call(r,n,$)),st(document,"drop",r),H($,"transform","translateZ(0)")),fr=!0,r._dragStartId=Bn(r._dragStarted.bind(r,t,e)),st(document,"selectstart",r),Hr=!0,zr&&H(document.body,"user-select","none")},_onDragOver:function(e){var t=this.el,r=e.target,n,i,o,s=this.options,a=s.group,l=I.active,c=Mn===a,f=s.sort,h=Ft||l,g,m=this,x=!1;if(So)return;function L(M,E){ie(M,m,$e({evt:e,isOwner:c,axis:g?"vertical":"horizontal",revert:o,dragRect:n,targetRect:i,canSort:f,fromSortable:h,target:r,completed:W,onMove:function(N,j){return Tn(xt,t,$,n,N,Ot(N),e,j)},changed:mt},E))}function F(){L("dragOverAnimationCapture"),m.captureAnimationState(),m!==h&&h.captureAnimationState()}function W(M){return L("dragOverCompleted",{insertion:M}),M&&(c?l._hideClone():l._showClone(m),m!==h&&(ae($,Ft?Ft.options.ghostClass:l.options.ghostClass,!1),ae($,s.ghostClass,!0)),Ft!==m&&m!==I.active?Ft=m:m===I.active&&Ft&&(Ft=null),h===m&&(m._ignoreWhileAnimating=r),m.animateAll(function(){L("dragOverAnimationComplete"),m._ignoreWhileAnimating=null}),m!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(r===$&&!$.animated||r===t&&!r.animated)&&(ur=null),!s.dragoverBubble&&!e.rootEl&&r!==document&&($.parentNode[se]._isOutsideThisEl(e.target),!M&&Ze(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),x=!0}function mt(){le=ue($),Pe=ue($,s.draggable),Kt({sortable:m,name:"change",toEl:t,newIndex:le,newDraggableIndex:Pe,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=me(r,s.draggable,t,!0),L("dragOver"),I.eventCanceled)return x;if($.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||m._ignoreWhileAnimating===r)return W(!1);if(ni=!1,l&&!s.disabled&&(c?f||(o=Et!==xt):Ft===this||(this.lastPutMode=Mn.checkPull(this,l,$,e))&&a.checkPut(this,l,$,e))){if(g=this._getDirection(e,r)==="vertical",n=Ot($),L("dragOverValid"),I.eventCanceled)return x;if(o)return Et=xt,F(),this._hideClone(),L("revert"),I.eventCanceled||(Xe?xt.insertBefore($,Xe):xt.appendChild($)),W(!0);var J=bs(t,s.draggable);if(!J||lp(e,g,this)&&!J.animated){if(J===$)return W(!1);if(J&&t===e.target&&(r=J),r&&(i=Ot(r)),Tn(xt,t,$,n,r,i,e,!!r)!==!1)return F(),J&&J.nextSibling?t.insertBefore($,J.nextSibling):t.appendChild($),Et=t,mt(),W(!0)}else if(J&&ap(e,g,this)){var Dt=Ar(t,0,s,!0);if(Dt===$)return W(!1);if(r=Dt,i=Ot(r),Tn(xt,t,$,n,r,i,e,!1)!==!1)return F(),t.insertBefore($,Dt),Et=t,mt(),W(!0)}else if(r.parentNode===t){i=Ot(r);var Z=0,D,lt=$.parentNode!==t,ft=!rp($.animated&&$.toRect||n,r.animated&&r.toRect||i,g),dt=g?"top":"left",rt=Sa(r,"top","top")||Sa($,"top","top"),S=rt?rt.scrollTop:void 0;ur!==r&&(D=i[dt],Wr=!1,kn=!ft&&s.invertSwap||lt),Z=cp(e,r,i,g,ft?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,kn,ur===r);var yt;if(Z!==0){var vt=ue($);do vt-=Z,yt=Et.children[vt];while(yt&&(H(yt,"display")==="none"||yt===q))}if(Z===0||yt===r)return W(!1);ur=r,qr=Z;var T=r.nextElementSibling,_=!1;_=Z===1;var w=Tn(xt,t,$,n,r,i,e,_);if(w!==!1)return(w===1||w===-1)&&(_=w===1),So=!0,setTimeout(sp,30),F(),_&&!T?t.appendChild($):r.parentNode.insertBefore($,_?T:r),rt&&Jl(rt,0,S-rt.scrollTop),Et=$.parentNode,D!==void 0&&!kn&&(Un=Math.abs(D-Ot(r)[dt])),mt(),W(!0)}if(t.contains($))return W(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){et(document,"mousemove",this._onTouchMove),et(document,"touchmove",this._onTouchMove),et(document,"pointermove",this._onTouchMove),et(document,"dragover",Ze),et(document,"mousemove",Ze),et(document,"touchmove",Ze)},_offUpEvents:function(){var e=this.el.ownerDocument;et(e,"mouseup",this._onDrop),et(e,"touchend",this._onDrop),et(e,"pointerup",this._onDrop),et(e,"touchcancel",this._onDrop),et(document,"selectstart",this)},_onDrop:function(e){var t=this.el,r=this.options;if(le=ue($),Pe=ue($,r.draggable),ie("drop",this,{evt:e}),Et=$&&$.parentNode,le=ue($),Pe=ue($,r.draggable),I.eventCanceled){this._nulling();return}fr=!1,kn=!1,Wr=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Co(this.cloneId),Co(this._dragStartId),this.nativeDraggable&&(et(document,"drop",this),et(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),zr&&H(document.body,"user-select",""),H($,"transform",""),e&&(Hr&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),q&&q.parentNode&&q.parentNode.removeChild(q),(xt===Et||Ft&&Ft.lastPutMode!=="clone")&&$t&&$t.parentNode&&$t.parentNode.removeChild($t),$&&(this.nativeDraggable&&et($,"dragend",this),lo($),$.style["will-change"]="",Hr&&!fr&&ae($,Ft?Ft.options.ghostClass:this.options.ghostClass,!1),ae($,this.options.chosenClass,!1),Kt({sortable:this,name:"unchoose",toEl:Et,newIndex:null,newDraggableIndex:null,originalEvent:e}),xt!==Et?(le>=0&&(Kt({rootEl:Et,name:"add",toEl:Et,fromEl:xt,originalEvent:e}),Kt({sortable:this,name:"remove",toEl:Et,originalEvent:e}),Kt({rootEl:Et,name:"sort",toEl:Et,fromEl:xt,originalEvent:e}),Kt({sortable:this,name:"sort",toEl:Et,originalEvent:e})),Ft&&Ft.save()):le!==vr&&le>=0&&(Kt({sortable:this,name:"update",toEl:Et,originalEvent:e}),Kt({sortable:this,name:"sort",toEl:Et,originalEvent:e})),I.active&&((le==null||le===-1)&&(le=vr,Pe=Fr),Kt({sortable:this,name:"end",toEl:Et,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){ie("nulling",this),xt=$=Et=q=Xe=$t=Vn=Ne=We=fe=Hr=le=Pe=vr=Fr=ur=qr=Ft=Mn=I.dragged=I.ghost=I.clone=I.active=null,oi.forEach(function(e){e.checked=!0}),oi.length=oo=so=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":$&&(this._onDragOver(e),op(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],t,r=this.el.children,n=0,i=r.length,o=this.options;n<i;n++)t=r[n],me(t,o.draggable,this.el,!1)&&e.push(t.getAttribute(o.dataIdAttr)||hp(t));return e},sort:function(e,t){var r={},n=this.el;this.toArray().forEach(function(i,o){var s=n.children[o];me(s,this.options.draggable,n,!1)&&(r[i]=s)},this),t&&this.captureAnimationState(),e.forEach(function(i){r[i]&&(n.removeChild(r[i]),n.appendChild(r[i]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return me(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var r=this.options;if(t===void 0)return r[e];var n=hn.modifyOption(this,e,t);typeof n<"u"?r[e]=n:r[e]=t,e==="group"&&nc(r)},destroy:function(){ie("destroy",this);var e=this.el;e[se]=null,et(e,"mousedown",this._onTapStart),et(e,"touchstart",this._onTapStart),et(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(et(e,"dragover",this),et(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ii.splice(ii.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!Ne){if(ie("hideClone",this),I.eventCanceled)return;H($t,"display","none"),this.options.removeCloneOnHide&&$t.parentNode&&$t.parentNode.removeChild($t),Ne=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(Ne){if(ie("showClone",this),I.eventCanceled)return;$.parentNode==xt&&!this.options.group.revertClone?xt.insertBefore($t,$):Xe?xt.insertBefore($t,Xe):xt.appendChild($t),this.options.group.revertClone&&this.animate($,$t),H($t,"display",""),Ne=!1}}};function op(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function Tn(e,t,r,n,i,o,s,a){var l,c=e[se],f=c.options.onMove,h;return window.CustomEvent&&!Te&&!un?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=r,l.draggedRect=n,l.related=i||t,l.relatedRect=o||Ot(t),l.willInsertAfter=a,l.originalEvent=s,e.dispatchEvent(l),f&&(h=f.call(c,l,s)),h}function lo(e){e.draggable=!1}function sp(){So=!1}function ap(e,t,r){var n=Ot(Ar(r.el,0,r.options,!0)),i=tc(r.el,r.options,q),o=10;return t?e.clientX<i.left-o||e.clientY<n.top&&e.clientX<n.right:e.clientY<i.top-o||e.clientY<n.bottom&&e.clientX<n.left}function lp(e,t,r){var n=Ot(bs(r.el,r.options.draggable)),i=tc(r.el,r.options,q),o=10;return t?e.clientX>i.right+o||e.clientY>n.bottom&&e.clientX>n.left:e.clientY>i.bottom+o||e.clientX>n.right&&e.clientY>n.top}function cp(e,t,r,n,i,o,s,a){var l=n?e.clientY:e.clientX,c=n?r.height:r.width,f=n?r.top:r.left,h=n?r.bottom:r.right,g=!1;if(!s){if(a&&Un<c*i){if(!Wr&&(qr===1?l>f+c*o/2:l<h-c*o/2)&&(Wr=!0),Wr)g=!0;else if(qr===1?l<f+Un:l>h-Un)return-qr}else if(l>f+c*(1-i)/2&&l<h-c*(1-i)/2)return up(t)}return g=g||s,g&&(l<f+c*o/2||l>h-c*o/2)?l>f+c/2?1:-1:0}function up(e){return ue($)<ue(e)?1:-1}function hp(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,r=t.length,n=0;r--;)n+=t.charCodeAt(r);return n.toString(36)}function dp(e){oi.length=0;for(var t=e.getElementsByTagName("input"),r=t.length;r--;){var n=t[r];n.checked&&oi.push(n)}}function Bn(e){return setTimeout(e,0)}function Co(e){return clearTimeout(e)}wi&&st(document,"touchmove",function(e){(I.active||fr)&&e.cancelable&&e.preventDefault()});I.utils={on:st,off:et,css:H,find:Gl,is:function(e,t){return!!me(e,t,e,!1)},extend:Yd,throttle:Kl,closest:me,toggleClass:ae,clone:Ql,index:ue,nextTick:Bn,cancelNextTick:Co,detectDirection:rc,getChild:Ar,expando:se};I.get=function(e){return e[se]};I.mount=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(I.utils=$e($e({},I.utils),n.utils)),hn.mount(n)})};I.create=function(e,t){return new I(e,t)};I.version=Wd;var Tt=[],Ir,Mo,ko=!1,co,uo,si,Vr;function pp(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(t){var r=t.originalEvent;this.sortable.nativeDraggable?st(document,"dragover",this._handleAutoScroll):this.options.supportPointer?st(document,"pointermove",this._handleFallbackAutoScroll):r.touches?st(document,"touchmove",this._handleFallbackAutoScroll):st(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var r=t.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?et(document,"dragover",this._handleAutoScroll):(et(document,"pointermove",this._handleFallbackAutoScroll),et(document,"touchmove",this._handleFallbackAutoScroll),et(document,"mousemove",this._handleFallbackAutoScroll)),Ta(),zn(),Xd()},nulling:function(){si=Mo=Ir=ko=Vr=co=uo=null,Tt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,r){var n=this,i=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,s=document.elementFromPoint(i,o);if(si=t,r||this.options.forceAutoScrollFallback||un||Te||zr){ho(t,this.options,s,r);var a=He(s,!0);ko&&(!Vr||i!==co||o!==uo)&&(Vr&&Ta(),Vr=setInterval(function(){var l=He(document.elementFromPoint(i,o),!0);l!==a&&(a=l,zn()),ho(t,n.options,l,r)},10),co=i,uo=o)}else{if(!this.options.bubbleScroll||He(s,!0)===be()){zn();return}ho(t,this.options,He(s,!1),!1)}}},Le(e,{pluginName:"scroll",initializeByDefault:!0})}function zn(){Tt.forEach(function(e){clearInterval(e.pid)}),Tt=[]}function Ta(){clearInterval(Vr)}var ho=Kl(function(e,t,r,n){if(t.scroll){var i=(e.touches?e.touches[0]:e).clientX,o=(e.touches?e.touches[0]:e).clientY,s=t.scrollSensitivity,a=t.scrollSpeed,l=be(),c=!1,f;Mo!==r&&(Mo=r,zn(),Ir=t.scroll,f=t.scrollFn,Ir===!0&&(Ir=He(r,!0)));var h=0,g=Ir;do{var m=g,x=Ot(m),L=x.top,F=x.bottom,W=x.left,mt=x.right,J=x.width,Dt=x.height,Z=void 0,D=void 0,lt=m.scrollWidth,ft=m.scrollHeight,dt=H(m),rt=m.scrollLeft,S=m.scrollTop;m===l?(Z=J<lt&&(dt.overflowX==="auto"||dt.overflowX==="scroll"||dt.overflowX==="visible"),D=Dt<ft&&(dt.overflowY==="auto"||dt.overflowY==="scroll"||dt.overflowY==="visible")):(Z=J<lt&&(dt.overflowX==="auto"||dt.overflowX==="scroll"),D=Dt<ft&&(dt.overflowY==="auto"||dt.overflowY==="scroll"));var yt=Z&&(Math.abs(mt-i)<=s&&rt+J<lt)-(Math.abs(W-i)<=s&&!!rt),vt=D&&(Math.abs(F-o)<=s&&S+Dt<ft)-(Math.abs(L-o)<=s&&!!S);if(!Tt[h])for(var T=0;T<=h;T++)Tt[T]||(Tt[T]={});(Tt[h].vx!=yt||Tt[h].vy!=vt||Tt[h].el!==m)&&(Tt[h].el=m,Tt[h].vx=yt,Tt[h].vy=vt,clearInterval(Tt[h].pid),(yt!=0||vt!=0)&&(c=!0,Tt[h].pid=setInterval((function(){n&&this.layer===0&&I.active._onTouchMove(si);var _=Tt[this.layer].vy?Tt[this.layer].vy*a:0,w=Tt[this.layer].vx?Tt[this.layer].vx*a:0;typeof f=="function"&&f.call(I.dragged.parentNode[se],w,_,e,si,Tt[this.layer].el)!=="continue"||Jl(Tt[this.layer].el,w,_)}).bind({layer:h}),24))),h++}while(t.bubbleScroll&&g!==l&&(g=He(g,!1)));ko=c}},30),sc=function(e){var t=e.originalEvent,r=e.putSortable,n=e.dragEl,i=e.activeSortable,o=e.dispatchSortableEvent,s=e.hideGhostForTarget,a=e.unhideGhostForTarget;if(t){var l=r||i;s();var c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,f=document.elementFromPoint(c.clientX,c.clientY);a(),l&&!l.el.contains(f)&&(o("spill"),this.onSpill({dragEl:n,putSortable:r}))}};function xs(){}xs.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var n=Ar(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(t,n):this.sortable.el.appendChild(t),this.sortable.animateAll(),r&&r.animateAll()},drop:sc};Le(xs,{pluginName:"revertOnSpill"});function ws(){}ws.prototype={onSpill:function(e){var t=e.dragEl,r=e.putSortable,n=r||this.sortable;n.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),n.animateAll()},drop:sc};Le(ws,{pluginName:"removeOnSpill"});I.mount(new pp);I.mount(ws,xs);const fp=e=>{const t=e.item;let r=Array.prototype.slice.call(t.parentNode.childNodes);return r=r.filter(n=>n.nodeType!=Node.ELEMENT_NODE||!n.classList.contains("sortable-fallback")),r},gp=(e,t,r,n,i,o)=>{const s=e.item.parentNode;for(const x of r)s.appendChild(x);if(e.oldIndex==e.newIndex)return;const a=n.getArray(),l=e.item.querySelector("eox-layercontrol-layer").layer.get(i),c=a.find(x=>x.get(i)===l),f=o.dataset.layer,h=a.find(x=>x.get(i)==f);let g,m;for(g=0;g<a.length;g++)if(a[g]==c){n.removeAt(g);break}for(m=0;m<a.length;m++)if(a[m]===h){g>m?n.insertAt(m,c):n.insertAt(m+1,c);break}t.requestUpdate()};function mp(e,t,r,n){let i=[],o=null;e._sortable=I.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:s=>i=fp(s),onMove:s=>{o=s.related},onEnd:s=>gp(s,n,i,t,r,o)})}function yp(e,t,r,n){const i=e.getArray();let o=!1;i.forEach(s=>{const a=s.ol_uid;s.get(t)||(s.set(t,a),o=!0),s.get(r)||(s.set(r,`layer ${a}`),o=!0),o&&n.requestUpdate()})}function $s(e,t,r){let n=[];const i=(o,s,a)=>{n=[...n,...o.filter(c=>c.get(s)===a)];const l=o.filter(c=>c.getLayers);return l.length>0&&l.forEach(c=>i(c.getLayers().getArray(),s,a)),n};return i(e,t,r),n}function vp(e,t,r){if(!e||!t)return!1;if(!ac(e,r))return!0;const n=e.get("minZoom"),i=e.get("maxZoom"),o=t.getView().getZoom();return o>n&&o<i}function ac(e,t){const r=e.get("minZoom"),n=e.get("maxZoom");return!!(t&&(r!==-1/0||n!==1/0))}function bp(e,t){var r,n,i;return!e||!t?void 0:e.getLayers?"group":(i=(r=t.getInteractions().getArray().filter(o=>o.freehand_!==void 0).map(o=>o.source_))==null?void 0:r.ol_uid)!=null&&i.includes(e.getSource?(n=e.getSource())==null?void 0:n.ol_uid:void 0)?"draw":e.declutter_!==void 0?"vector":"raster"}const xp=(e,t,r)=>{let n=t;return r.layer.getSource().getTileUrlFunction()&&(n||(n=r.layer.getSource().getTileUrlFunction()),r.layer.getSource().setTileUrlFunction((...i)=>zd(n(...i),e)),r.layer.getSource().setKey(new Date)),n};function wp(e,t,r){const n="updateStyleVariables"in t,i="setStyle"in t,o=n?t.style_:r.style;let s=o==null?void 0:o.variables;if(s){const a=_s(e);if(o.variables={...s,...a},n)t.updateStyleVariables(a);else if(i){const l=$p(o);t.setStyle(l)}}}const _s=e=>{const t={};for(const r in e)if(typeof e[r]=="object"&&e[r]!==null){const n=_s(e[r]);for(const i in n)t[i]=n==null?void 0:n[i]}else t[r]=e==null?void 0:e[r];return t};function $p(e){let t=e;if("variables"in e){let r=JSON.stringify(e);const{variables:n}=e;for(const i in n)typeof n[i]=="number"?r=r.replaceAll(`["var","${i}"]`,n[i]):r=r.replaceAll(`["var","${i}"]`,`"${n[i]}"`);t=JSON.parse(r)}return t}const _p=(e,t)=>{var r;if(e)return!("domainProperties"in e)||"domain"in e?{...e}:(r=Object.keys(e))==null?void 0:r.reduce((n,i)=>{if(i==="domainProperties"){const o=_s(t);n.domain=e[i].map(s=>o[s])}else n[i]=e[i];return n},{})};function lc(e,t){var r;let n={};for(const i in e){const o=e[i].type;if(o&&o!=="object")n[i]=o==="number"?Number(t[i]):t[i];else if(typeof e[i]=="object"&&(r=e[i])!=null&&r.properties){const s=lc(e[i].properties,t);Object.keys(s).length>0&&(n[i]=s)}}return n}function Ep(e,t){var r,n,i,o,s;if(!t)return null;let a={},l="updateStyleVariables"in e?(r=e.style_)==null?void 0:r.variables:(n=t.style)==null?void 0:n.variables;if((t.type==="style"||t.style)&&l)a=l;else if((o=(i=e.getSource())==null?void 0:i.getTileUrlFunction)!=null&&o.call(i)){const f=new URL(e.getSource().getTileUrlFunction()([0,0,0]));a=Object.fromEntries(f.searchParams.entries())}else return null;const c=lc(((s=t.schema)==null?void 0:s.properties)||t.schema,a);return Object.keys(c).length?c:null}const Ap=(e,t)=>e==null?void 0:e.filter(r=>["remove","sort"].filter(n=>t!=null&&t.get("layerControlDisable")?n!=="sort":!0).includes(r)),Sp=(e,t)=>e==null?void 0:e.filter(r=>{let n=!0;return["remove","sort"].includes(r)&&(n=!1),r==="info"&&(n=t.get("description")),r==="config"&&(n=t.get("layerConfig")),r==="datetime"&&(n=t.get("layerDatetime")),r==="legend"&&(n=t.get("layerLegend")),n}),Cp=(e,t)=>z`
  <button slot="${e}-icon" class="icon">${t?e:at}</button>
`,Mp=e=>z`
  <button
    class="remove-icon icon"
    @click=${()=>{const{layer:t}=e;t==null||t.set("layerControlOptional",!0),t==null||t.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:t,bubbles:!0}))}}
  >
    ${e.unstyled?"x":at}
  </button>
`,kp=e=>z`
  <span class="button sort-icon icon drag-handle">
    ${e?"═":at}
  </span>
`,cc=e=>{var t;const r=["layerControlHide","layerControlOptional"];return(t=e==null?void 0:e.getArray())==null?void 0:t.filter(n=>r.every(i=>!n.get(i)))};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uc=gs(class extends ms{constructor(e){if(super(e),e.type!==De.PROPERTY&&e.type!==De.ATTRIBUTE&&e.type!==De.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Fh(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===he||t===at)return t;const r=e.element,n=e.name;if(e.type===De.PROPERTY){if(t===r[n])return he}else if(e.type===De.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(n))return he}else if(e.type===De.ATTRIBUTE&&r.getAttribute(n)===t+"")return he;return Hl(e),t}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Lo extends ms{constructor(t){if(super(t),this.it=at,t.type!==De.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===at||t==null)return this._t=void 0,this.it=t;if(t===he)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Lo.directiveName="unsafeHTML",Lo.resultType=1;const Lp=gs(Lo);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*jn(e,t){if(e!==void 0){let r=0;for(const n of e)yield t(n,r++)}}var Ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dc="Expected a function",Oa=NaN,Tp="[object Symbol]",Op=/^\s+|\s+$/g,Dp=/^[-+]0x[0-9a-f]+$/i,Pp=/^0b[01]+$/i,Np=/^0o[0-7]+$/i,Rp=parseInt,Hp=typeof Ie=="object"&&Ie&&Ie.Object===Object&&Ie,Ip=typeof self=="object"&&self&&self.Object===Object&&self,Vp=Hp||Ip||Function("return this")(),Up=Object.prototype,Bp=Up.toString,zp=Math.max,jp=Math.min,po=function(){return Vp.Date.now()};function Fp(e,t,r){var n,i,o,s,a,l,c=0,f=!1,h=!1,g=!0;if(typeof e!="function")throw new TypeError(dc);t=Da(t)||0,ai(r)&&(f=!!r.leading,h="maxWait"in r,o=h?zp(Da(r.maxWait)||0,t):o,g="trailing"in r?!!r.trailing:g);function m(D){var lt=n,ft=i;return n=i=void 0,c=D,s=e.apply(ft,lt),s}function x(D){return c=D,a=setTimeout(W,t),f?m(D):s}function L(D){var lt=D-l,ft=D-c,dt=t-lt;return h?jp(dt,o-ft):dt}function F(D){var lt=D-l,ft=D-c;return l===void 0||lt>=t||lt<0||h&&ft>=o}function W(){var D=po();if(F(D))return mt(D);a=setTimeout(W,L(D))}function mt(D){return a=void 0,g&&n?m(D):(n=i=void 0,s)}function J(){a!==void 0&&clearTimeout(a),c=0,n=l=i=a=void 0}function Dt(){return a===void 0?s:mt(po())}function Z(){var D=po(),lt=F(D);if(n=arguments,i=this,l=D,lt){if(a===void 0)return x(l);if(h)return a=setTimeout(W,t),m(l)}return a===void 0&&(a=setTimeout(W,t)),s}return Z.cancel=J,Z.flush=Dt,Z}function qp(e,t,r){var n=!0,i=!0;if(typeof e!="function")throw new TypeError(dc);return ai(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Fp(e,t,{leading:n,maxWait:t,trailing:i})}function ai(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Wp(e){return!!e&&typeof e=="object"}function Zp(e){return typeof e=="symbol"||Wp(e)&&Bp.call(e)==Tp}function Da(e){if(typeof e=="number")return e;if(Zp(e))return Oa;if(ai(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ai(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Op,"");var r=Pp.test(e);return r||Np.test(e)?Rp(e.slice(2),r?2:8):Dp.test(e)?Oa:+e}var Yp=qp;const Pa=hc(Yp);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const On=e=>e??at;var To,Oo;class pc extends Jt{constructor(){super(),ut(this,To,Al`

.legend-container{
    display:flex;
    justify-content:center
  }

  color-legend {
  --cle-background :transparent;
  --cle-font-family:inherit;
  --cle-font-size:inherit;
  --cle-font-weight :inherit
  --cle-letter-spacing :inherit;
  --cle-letter-spacing-title :inherit;
  }
  `),ut(this,Oo,""),this.unstyled=!1,this.noShadow=!1,this.layerLegend=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),z`
      <style>
        ${nt(this,To)}
        ${!this.unstyled&&nt(this,Oo)}
      </style>
      ${It(this.layerLegend,()=>z`
          <div class="legend-container">
            <!-- Render color-legend-->
            <color-legend
              id="${this.layer.get("id")}"
              width=${this.layerLegend.width??325}
              scaleType="${On(this.layerLegend.scaleType)}"
              markType="${On(this.layerLegend.markType)}"
              titleText="${On(this.layerLegend.title)}"
              .range=${this.layerLegend.range}
              .domain=${this.layerLegend.domain}
              tickFormat="${On(this.layerLegend.tickFormat)}"
              .ticks=${this.layerLegend.ticks??5}
              .tickValues=${this.layerLegend.tickValues}
            >
            </color-legend>
          </div>
        `)}
    `}}To=new WeakMap,Oo=new WeakMap,Mt(pc,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",pc);var Ve,Ur,Fn,qn,Do,Po,No;class fc extends Jt{constructor(){super(),ut(this,qn),ut(this,Ve,{}),ut(this,Ur,null),ut(this,Fn),ut(this,Po,Al`
  color-legend {
  --cle-background :transparent;
  --cle-font-family:inherit;
  --cle-font-size:inherit;
  --cle-font-weight :inherit
  --cle-letter-spacing :inherit;
  --cle-letter-spacing-title :inherit;
  }
  `),ut(this,No,""),this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=Pa(Rt(this,qn,Do),1e3)}updated(t){if(t.has("layerConfig")){const r=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=Pa(Rt(this,qn,Do),r),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){Kr(this,Ur,Ep(this.layer,this.layerConfig)),Object.keys(nt(this,Ve)).length!==0&&Kr(this,Ur,nt(this,Ve)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const t={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return z`
      <style>
        ${nt(this,Po)}
        ${!this.unstyled&&nt(this,No)}
      </style>
      ${It(this.layerConfig,()=>z`
          ${It(this.layerConfig.legend,()=>z`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${_p(this.layerConfig.legend,nt(this,Ve))}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${nt(this,Ur)}
            .options=${t}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}Ve=new WeakMap,Ur=new WeakMap,Fn=new WeakMap,qn=new WeakSet,Do=function(e){Kr(this,Ve,e.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?wp(nt(this,Ve),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):Kr(this,Fn,xp(nt(this,Ve),nt(this,Fn),this)),this.requestUpdate()},Po=new WeakMap,No=new WeakMap,Mt(fc,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1}});customElements.define("eox-layercontrol-layerconfig",fc);var Ro,gc,Ho,Io;class mc extends Jt{constructor(){super(),ut(this,Ro),ut(this,Ho,""),ut(this,Io,""),this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),z`
      <style>
        ${nt(this,Ho)}
        ${!this.unstyled&&nt(this,Io)}
      </style>
      ${It(this.layerDatetime,()=>z`
          <!-- Render a Timecontrol for layer date time -->
          <eox-timecontrol
            ?unstyled=${this.unstyled}
            .for=${void 0}
            .layer=${void 0}
            .slider=${this.layerDatetime.slider??!1}
            .disablePlay=${this.layerDatetime.disablePlay??!1}
            .controlValues=${this.layerDatetime.controlValues}
            .controlProperty=${void 0}
            current-step=${this.layerDatetime.currentStep}
            @stepchange=${Rt(this,Ro,gc)}
          ></eox-timecontrol>
        `)}
    `}}Ro=new WeakSet,gc=function(e){this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:e.detail.currentStep,layer:this.layer}})),this.layerDatetime.currentStep=e.detail.currentStep,this.requestUpdate()},Ho=new WeakMap,Io=new WeakMap,Mt(mc,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",mc);var Wn,Vo,Uo;class yc extends Jt{constructor(){super(),ut(this,Wn,t=>(this.selectedTab===t||this.toolsAsList)&&"highlighted"),ut(this,Vo,`
    .tabbed figure {
      margin: 0;
    }
    .tabbed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div {
      display: flex;
    }
    .tabbed .tab {
      display: none;
    }
    .tabbed .tab.highlighted {
      display: block;
    }
    .tabbed label.highlighted {
      background: lightgrey;
    }
  `),ut(this,Uo,`
    .listed {
      background: #ffffff !important;
      display: flex;
      justify-content: end;
    }
    .tabbed {
      font-size: small;
    }
    .tabbed label.highlighted {
      background: #00417011;
      pointer-events: none;
    }
    nav div label,
    nav div span {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    figure {
      background: #00417011;
      border-top: 1px solid #0041701a;
    }
  `),this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=this.tabs,r=this.actions,n=r.length+t.length>1;return z`
      <style>
        ${nt(this,Vo)}
        ${!this.unstyled&&nt(this,Uo)}
      </style>
      <div class="tabbed">
        <!-- Navigation for tabs and actions -->
        ${It(n,()=>z`
            <nav>
              ${It(!this.toolsAsList,()=>z`
                  <div>
                    <!-- Labels for tabs -->
                    ${jn(t,(i,o)=>z`
                          <label
                            class=${nt(this,Wn).call(this,o)}
                            @click=${()=>this.selectedTab=o}
                          >
                            <!-- Customizable icon for each tab -->
                            <slot name=${`${i}-icon`}>${i}</slot>
                          </label>
                        `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${jn(r,i=>z`
                          <span>
                            <!-- Customizable icon for each action -->
                            <slot name=${`${i}-icon`}>${i}</slot>
                          </span>
                        `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure>
          <!-- Content for each tab -->
          ${jn(t,(i,o)=>z`
              ${It(this.toolsAsList,()=>z`
                  <label class="listed">
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${i}-icon`}>${i}</slot>
                  </label>
                `)}
              <div class="tab ${nt(this,Wn).call(this,o)}">
                <!-- Content slot for each tab -->
                <slot name=${`${i}-content`}>${i}</slot>
              </div>
            `)}
        </figure>
      </div>
    `}}Wn=new WeakMap,Vo=new WeakMap,Uo=new WeakMap,Mt(yc,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",yc);const Xp=`
button,
.button {
  /* TODO: why does this only work here and not from :root? */
  --primary-color: #004170;
  --primary-color-hover: #004170CC;
  --error-color: #FF5252;

  display: inline-flex;
  position: relative;
  align-items: center;
  color: #fff;
  border-width: 0;
  outline: none;
  border-radius: 4px;
  padding: 16px;
  height: 36px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1.25px;                           
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition-property: box-shadow, transform, opacity, background;
  transition-duration: 0.28s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover:not([disabled]):not(.icon),
.button:hover:not([disabled]):not(.icon) {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background: var(--primary-color-hover);
}

button, button:active,
.button, .button:active {
  background: var(--primary-color);
}

button[disabled],
.button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

button.block,
.button.block {
  display: block;
}

button.outline,
.button.outline {
  background: transparent;
  box-shadow: none;
  color: var(--primary-color);
  outline: 1px solid var(--primary-color);
}

button.outline:hover,
.button.outline:hover {
  background: transparent;
}

button.icon,
.button.icon {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  text-indent: -9999px;
}

button.icon-text,
.button.icon-text {
  text-indent: 26px;
}

button.icon-text.block,
.button.icon-text.block {
  text-indent: 20px;
}

button.icon:before, button.icon-text:before,
.button.icon:before, .button.icon-text:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
}

button.icon-text.block:before,
.button.icon-text.block:before {
  text-indent: -54px;
}

button.icon:before,
.button.icon:before {
  width: 24px;
  height: 24px;
  margin-right: 0;
}

button.icon-text:before,
.button.icon-text:before {
  width: 18px;
  height: 18px;
}

button.small,
.button.small {
  height: 28px;
  padding: 12.4px;
  font-size: .75rem;
}

button.smallest.icon, 
button.smallest.icon::before {
  height: 16px;
  width: 16px;
  padding: 0px;
}
`,Gp=`
input[type=radio] {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 24px;
  height: 24px;
}

label span {
  font-size: small;
}

input[type=radio]:after {
  display: block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-blank%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E");
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
input[type=radio]:checked:after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-marked%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' /%3E%3C/svg%3E");

}
`,vc=`
input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 24px;
  height: 24px;
}
input[type=checkbox]:after {
  display: block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E");
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
input[type=checkbox]:checked:after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");

}
`,Kp=`
input[type="range"] {
  -webkit-appearance: none;
  width: 90%;
  margin-left: 5%;
  height: 6px;
  border-radius: 5px;
  background: #d7dcdf;
  outline: none;
  padding: 0;
}
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #2c3e50;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}
.range-slider {
  margin: 60px 0 0 0;
}
.range-slider {
  width: 100%;
}
input[type="range"]::-webkit-slider-thumb:hover {
  background: #00416F;
}
input[type="range"]:active::-webkit-slider-thumb {
  background: #00416F;
}
input[type="range"]::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border: 0;
  border-radius: 50%;
  background: #2c3e50;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}
input[type="range"]::-moz-range-thumb:hover {
  background: #00416F;
}
input[type="range"]:active::-moz-range-thumb {
  background: #00416F;
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 3px #fff0, 0 0 0 6px #00416F00;
}
.range-slider__value {
  display: inline-block;
  position: relative;
  width: 60px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
  background: #2c3e50;
  padding: 5px 10px;
  margin-left: 8px;
}
.range-slider__value:after {
  position: absolute;
  top: 8px;
  left: -7px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 7px solid #2c3e50;
  border-bottom: 7px solid transparent;
  content: '';
}

input::-moz-focus-inner, input::-moz-focus-outer {
  border: 0;
}
`;var Bo,zo;class bc extends Jt{constructor(){super(),Mt(this,"_removeButton",()=>Mp(this)),Mt(this,"_sortButton",()=>kp(this.unstyled)),Mt(this,"_button",t=>Cp(t,this.unstyled)),Mt(this,"_getDefaultTools",()=>{var t;return z`
      <div slot="info-content">
        ${Lp(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <!-- Input for opacity -->
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value=${uc((t=this.layer)==null?void 0:t.getOpacity())}
          @input=${r=>this.layer.setOpacity(parseFloat(r.target.value))}
        />
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${It(this.layer.get("layerConfig"),()=>z`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${It(this.layer.get("layerDatetime"),()=>z`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${It(this.layer.get("layerLegend"),()=>z`
            <eox-layercontrol-layer-legend
              slot="legend-content"
              .noShadow=${!0}
              .layerLegend=${this.layer.get("layerLegend")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-legend>
          `)}
      </div>
      <div slot="remove-icon">${this._removeButton()}</div>
      <div slot="sort-icon">${this._sortButton()}</div>
    `}),ut(this,Bo,""),ut(this,zo,`
    ${Xp}  
    ${Gp}
    ${vc}
    ${Kp}
    .drag-handle {
      cursor: n-resize;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    eox-layercontrol-layer details summary::before {
      content: "";
    }
    details.tools[open] {
      /*border-top: 1px solid #0041703a;*/
    }
    .single-action {
      position: relative;
    }
    details.tools summary .icon {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 0;
      top: -24px;
      display: flex;
      border-radius: 4px;
      cursor: pointer;
    }
    .single-action .icon::before,
    details.tools summary .icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edots-vertical%3C/title%3E%3Cpath d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' /%3E%3C/svg%3E");
    }
    .single-action,
    details.tools summary,
    eox-layercontrol-tools-items button.icon {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    eox-layercontrol-tools-items button.icon {
      opacity: .7;
    }
    eox-layercontrol-tools-items.tools-list button.icon {
      cursor: auto;
    }
    .single-action:hover,
    details.tools summary:hover,
    eox-layercontrol-tools-items button.icon:hover {
      opacity: 1;
    }
    eox-layercontrol-tools-items.tools-list button.icon:hover {
      opacity: .7;
    }
    .tools-placeholder,
    .single-action .icon,
    .single-action .icon::before,
    details.tools summary .icon,
    details.tools summary .icon::before {
      height: 16px;
      width: 16px;
      margin-right: var(--padding);
    }
    eox-layercontrol-tools-items button.icon,
    eox-layercontrol-tools-items .button.icon {
      display: flex;
      justify-content: center;
    }
    eox-layercontrol-tools-items button.icon::before,
    eox-layercontrol-tools-items .button.icon::before {
      width: 16px;
      height: 16px;
    }
    details.tools summary .info-icon,
    button.icon[slot=info-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Einformation-outline%3C/title%3E%3Cpath d='M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z' /%3E%3C/svg%3E");
    }
    details.tools summary .opacity-icon,
    button.icon[slot=opacity-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eopacity%3C/title%3E%3Cpath d='M17.66,8L12,2.35L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8M6,14C6,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 18,12 18,14H6Z' /%3E%3C/svg%3E");
    }
    details.tools summary .config-icon,
    button.icon[slot=config-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Etune%3C/title%3E%3Cpath d='M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z' /%3E%3C/svg%3E");
    }
    details.tools summary .datetime-icon,
    button.icon[slot=datetime-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eclock-outline%3C/title%3E%3Cpath d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /%3E%3C/svg%3E");
    }
    details.tools summary .legend-icon,
    button.icon[slot=legend-icon]::before {
      content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Emap-legend%3C%2Ftitle%3E%3Cpath%20d%3D%22M9%2C3L3.36%2C4.9C3.15%2C4.97%203%2C5.15%203%2C5.38V20.5A0.5%2C0.5%200%200%2C0%203.5%2C21L3.66%2C20.97L9%2C18.9L15%2C21L20.64%2C19.1C20.85%2C19.03%2021%2C18.85%2021%2C18.62V3.5A0.5%2C0.5%200%200%2C0%2020.5%2C3L20.34%2C3.03L15%2C5.1L9%2C3M8%2C5.45V17.15L5%2C18.31V6.46L8%2C5.45M10%2C5.47L14%2C6.87V18.53L10%2C17.13V5.47M19%2C5.7V17.54L16%2C18.55V6.86L19%2C5.7M7.46%2C6.3L5.57%2C6.97V9.12L7.46%2C8.45V6.3M7.46%2C9.05L5.57%2C9.72V11.87L7.46%2C11.2V9.05M7.46%2C11.8L5.57%2C12.47V14.62L7.46%2C13.95V11.8M7.46%2C14.55L5.57%2C15.22V17.37L7.46%2C16.7V14.55Z%22%20%2F%3E%3C%2Fsvg%3E");
    }
    .single-action .remove-icon::before,
    [slot=remove-icon] button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 24 24'%3E%3Ctitle%3Edelete-outline%3C/title%3E%3Cpath d='M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z' /%3E%3C/svg%3E");
    }
    .single-action .sort-icon::before,
    [slot=sort-icon] .button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edrag-horizontal-variant%3C/title%3E%3Cpath d='M21 11H3V9H21V11M21 13H3V15H21V13Z' /%3E%3C/svg%3E");
    }
    [slot=info-content],
    [slot=opacity-content] {
      padding: 12px 6px;
    }
  `),this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var t;const r=Ap(this.tools,this.layer),n=Sp(this.tools,this.layer),i=this[`_${r==null?void 0:r[0]}Button`]?this[`_${r==null?void 0:r[0]}Button`]():at,o=((t=this.tools)==null?void 0:t.length)===1?`${this.tools[0]}-icon`:"",s=r==null?void 0:r.length,a=n==null?void 0:n.length;return z`
      <style>
        ${nt(this,Bo)}
        ${!this.unstyled&&nt(this,zo)}
      </style>
      ${It(s+a>0,()=>z`
          ${It(s===1&&a===0,()=>z`
              <div class="single-action-container">
                <div class="single-action">${i}</div>
              </div>
            `,()=>z`
              <details
                class="tools"
                open=${this.layer.get("layerControlToolsExpand")||at}
              >
                <summary>
                  <button class="icon ${o}">Tools</button>
                </summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${r}
                  .tabs=${n}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${jn(n,l=>this._button(l))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools()}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}Bo=new WeakMap,zo=new WeakMap,Mt(bc,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-tools",bc);const Jp=e=>{const t=()=>{const r=vp(e.layer,e.map,e.showLayerZoomState);let n=!1;!r&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,n=!0):r&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,n=!0),n&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};ac(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t()))},Qp=(e,t)=>{const r=t.layer;r.setVisible(e.target.checked),e.target.checked&&r.get("layerControlExclusive")&&t.closest(".layers > ul").querySelectorAll("eox-layercontrol-layer").forEach(n=>{var i;n.layer!==r&&(i=n.layer)!=null&&i.get("layerControlExclusive")&&(n.layer.setVisible(!1),n.requestUpdate())}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:r})),t.requestUpdate()};var gr,Zn,xc,jo,Fo;class wc extends Jt{constructor(){super(),ut(this,gr),Mt(this,"currLayerVisibilityBasedOnZoom",!0),ut(this,jo,""),ut(this,Fo,`
    ${vc}
    eox-layercontrol-layer {
      width: 100%;
    }
    .layer.zoom-state-invisible {
      background: #d2e2ee;
      opacity: 0.3;
    }
    .layer {
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 4px 0;
    }
    label, span {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    [data-type] .title::before {
      width: 20px;
      min-width: 20px;
      height: 20px;
      margin-right: 6px;
    }
    [data-type=group] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-outline%3C/title%3E%3Cpath d='M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z' /%3E%3C/svg%3E");
    }
    [data-type=group] > eox-layercontrol-layer-group > details[open] > summary > eox-layercontrol-layer > .layer > label > .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-open-outline%3C/title%3E%3Cpath d='M6.1,10L4,18V8H21A2,2 0 0,0 19,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H19C19.9,20 20.7,19.4 20.9,18.5L23.2,10H6.1M19,18H6L7.6,12H20.6L19,18Z' /%3E%3C/svg%3E");
    }
    [data-type=raster] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckerboard%3C/title%3E%3Cpath d='M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z' /%3E%3C/svg%3E");
    }
    [data-type=vector] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-outline%3C/title%3E%3Cpath d='M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z' /%3E%3C/svg%3E");
    }
    [data-type=draw] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Evector-square-edit%3C/title%3E%3Cpath d='M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z' /%3E%3C/svg%3E");
    }
  `),this.layer=null,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){Jp(this)}render(){var t;const r=this.layer.getVisible(),n=r?"visible":"",i=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",o=Rt(this,gr,Zn).call(this,"layerControlDisable")?"disabled":"",s=Rt(this,gr,Zn).call(this,"layerControlExclusive")?"radio":"checkbox",a=((t=this.tools)==null?void 0:t.length)>0;return z`
      <style>
        ${nt(this,jo)}
        ${!this.unstyled&&nt(this,Fo)}
      </style>
      ${It(this.layer,()=>z`
          <!-- Render the layer -->
          <div class="layer ${n} ${i}">
            <label class="drag-handle ${o}">
              <!-- Input element for layer visibility -->
              <input
                type=${s}
                .checked=${uc(r)}
                @click=${Rt(this,gr,xc)}
              />

              <!-- Layer title -->
              <span class="title">${Rt(this,gr,Zn).call(this,this.titleProperty)}</span>
              ${It(a,()=>z`<span class="tools-placeholder"></span>`)}
            </label>
          </div>

          <!-- Render layer tools -->
          <eox-layercontrol-layer-tools
            .noShadow=${!0}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}gr=new WeakSet,Zn=function(e){var t;return(t=this.layer)==null?void 0:t.get(e)},xc=function(e){Qp(e,this)},jo=new WeakMap,Fo=new WeakMap,Mt(wc,"properties",{layer:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer",wc);var qo,Wo;class $c extends Jt{constructor(){super(),ut(this,qo,""),ut(this,Wo,`
    details summary {
      cursor: pointer;
      display: flex;
    }
    details summary { list-style-type: none; } /* Firefox */
    details summary::-webkit-details-marker { display: none; } /* Chrome */
    details summary::marker { display: none; }
    details summary::before {
      display: block;
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
      font-size: 13px;
      width: 24px;
      height: 24px;
      margin: 4px 0;
      transform-origin: center;
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary:before {
      transform: rotate(90deg);
    }
    details[data-children-length="0"] summary::before {
      display: none;
    }
  `),this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var t,r;const n=!!((t=this.group)!=null&&t.get("layerControlExpand")),i=(r=cc(this.group.getLayers()))==null?void 0:r.length;return z`
      <style>
        ${nt(this,qo)}
        ${!this.unstyled&&nt(this,Wo)}
      </style>
      ${It(this.group,()=>z`
          <!-- Render the details element with the layer control -->
          <details
            open=${n||at}
            data-children-length=${i}
          >
            <summary>
              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${!0}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}qo=new WeakMap,Wo=new WeakMap,Mt($c,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",$c);var tf="Expected a function",Na=NaN,ef="[object Symbol]",rf=/^\s+|\s+$/g,nf=/^[-+]0x[0-9a-f]+$/i,of=/^0b[01]+$/i,sf=/^0o[0-7]+$/i,af=parseInt,lf=typeof Ie=="object"&&Ie&&Ie.Object===Object&&Ie,cf=typeof self=="object"&&self&&self.Object===Object&&self,uf=lf||cf||Function("return this")(),hf=Object.prototype,df=hf.toString,pf=Math.max,ff=Math.min,fo=function(){return uf.Date.now()};function gf(e,t,r){var n,i,o,s,a,l,c=0,f=!1,h=!1,g=!0;if(typeof e!="function")throw new TypeError(tf);t=Ra(t)||0,Zo(r)&&(f=!!r.leading,h="maxWait"in r,o=h?pf(Ra(r.maxWait)||0,t):o,g="trailing"in r?!!r.trailing:g);function m(D){var lt=n,ft=i;return n=i=void 0,c=D,s=e.apply(ft,lt),s}function x(D){return c=D,a=setTimeout(W,t),f?m(D):s}function L(D){var lt=D-l,ft=D-c,dt=t-lt;return h?ff(dt,o-ft):dt}function F(D){var lt=D-l,ft=D-c;return l===void 0||lt>=t||lt<0||h&&ft>=o}function W(){var D=fo();if(F(D))return mt(D);a=setTimeout(W,L(D))}function mt(D){return a=void 0,g&&n?m(D):(n=i=void 0,s)}function J(){a!==void 0&&clearTimeout(a),c=0,n=l=i=a=void 0}function Dt(){return a===void 0?s:mt(fo())}function Z(){var D=fo(),lt=F(D);if(n=arguments,i=this,l=D,lt){if(a===void 0)return x(l);if(h)return a=setTimeout(W,t),m(l)}return a===void 0&&(a=setTimeout(W,t)),s}return Z.cancel=J,Z.flush=Dt,Z}function Zo(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function mf(e){return!!e&&typeof e=="object"}function yf(e){return typeof e=="symbol"||mf(e)&&df.call(e)==ef}function Ra(e){if(typeof e=="number")return e;if(yf(e))return Na;if(Zo(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Zo(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(rf,"");var r=of.test(e);return r||sf.test(e)?af(e.slice(2),r?2:8):nf.test(e)?Na:+e}var vf=gf;const bf=hc(vf),xf=e=>{const{layers:t,idProperty:r,titleProperty:n,renderRoot:i}=e,o=bf(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),s=()=>o();if(t&&(t.hasListener("change:length")&&(t==null||t.un("change:length",s)),t.on("change:length",s),t)){const a=i.querySelector("ul");yp(t,r,n,e),mp(a,t,r,e)}};var Yo,Xo;class _c extends Jt{constructor(){super(),ut(this,Yo,""),ut(this,Xo,`
    ul {
      padding: 0;
      margin: 0;
    }
    ul ul {
      padding-left: 48px;
    }
    li {
      list-style: none;
      padding-left: var(--padding);
    }
    li {
      border-bottom: 1px solid #0041703a;
    }
    li:last-child {
      border: none;
    }
    li.sortable-chosen {
      background: #eeea;
    }
    li.sortable-drag {
      opacity: 0;
    }
    li.sortable-ghost {
    }
  `),this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}firstUpdated(){xf(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=this.layers?cc(this.layers).reverse():[];return z`
      <style>
        ${nt(this,Yo)}
        ${!this.unstyled&&nt(this,Xo)}
      </style>
      <ul>
        ${It(this.layers,()=>z`
            ${Zh(t,r=>r,r=>z`
                <li
                  data-layer="${r.get(this.idProperty)}"
                  data-type="${bp(r,this.map)}"
                >
                  ${r.getLayers?z`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${r}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:z`
                          <eox-layercontrol-layer
                            .noShadow=${!0}
                            .layer=${r}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}Yo=new WeakMap,Xo=new WeakMap,Mt(_c,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",_c);const wf=e=>{const t=e.querySelector("select[name=optional]"),r=t?t.value:null,n=$s(e.layers.getArray(),"layerControlOptional",!0).find(i=>(i.get(e.idProperty)||i.ol_uid)===r);n==null||n.set("layerControlOptional",!1),n==null||n.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(i=>i.requestUpdate()),e.requestUpdate()};var Go,Ec;class Ac extends Jt{constructor(){super(),ut(this,Go),this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=$s(this.layers.getArray(),"layerControlOptional",!0);return z`
      <!-- Label for the dropdown -->
      <label for="optional">Optional layers</label>

      <!-- Dropdown select element -->
      <select name="optional" data-cy="optionalLayers">
        <!-- Default placeholder option -->
        <option disabled selected value>
          -- select an optional layer to add --
        </option>

        <!-- Mapping through filtered layers list to generate dropdown options -->
        ${t.map(r=>{const n=r.get(this.idProperty)||r.ol_uid,i=r.get(this.titleProperty),o=`layer ${r.get(this.idProperty)}`;return z` <option value="${n}">${i||o}</option> `})}
      </select>

      <!-- Button to handle adding layers -->
      <button @click="${Rt(this,Go,Ec)}">add</button>
    `}}Go=new WeakSet,Ec=function(){wf(this)},Mt(Ac,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Ac);const $f=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},Ha=e=>{const t=JSON.parse(`{"data":${ql(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(r=>{e.eoxMap.addOrUpdateLayer(r)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},_f=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function Ef(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if(vs(t)==="XYZ")return{Name:t};try{const r=await Vd(t);e.wmsCapabilities=r}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const Af=(e,t)=>{const{Name:r}=e,n=vs(t.urlInput)||"XYZ",i={type:"Tile",properties:{id:r,title:r},source:{type:n,url:t.urlInput,params:{LAYERS:r}}};t.jsonInput=JSON.stringify(i)},Sf=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};var ge,Sc,Cc,Ko,Mc,kc,Yn,Jo,Qo;class Lc extends Jt{constructor(){super(),ut(this,ge),Mt(this,"urlInput",null),Mt(this,"jsonInput",null),Mt(this,"open",null),Mt(this,"searchLoad",!1),Mt(this,"wmsCapabilities",null),ut(this,Jo,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
  `),ut(this,Qo,`
    .eox-add {
      background: #f0f2f5;
      border-top: 1px solid #0041701a;
      padding: 0.5rem;
      font-size: small;
    }
    .eox-add-layer-col, .eox-add-layer-tab {
      display: flex;
      width: 100%;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .eox-add-layer-main .open {
      position: relative;
    }
    button.icon.add-icon {
      flex-grow: 1;
    }
    .eox-add-layer-tab li {
      border: 0 !important;
      font-size: smaller;
      padding: 0.2rem 0.7rem;
      background: #f0f2f5;
      border-radius: 4px 4px 0px 0px;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
    }
    .eox-add-layer-tab li.active {
      background: #204270;
      color: white;
      font-weight: 700;
    }
    .relative {
      position: relative
    }
    .eox-add-layer-col.justify-end {
      justify-content: end;
    }
    .eox-add ul {
      max-height: 120px;
      overflow: scroll;
    }
    .eox-add ul li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 0.2rem;
    }
    button.icon {
      justify-content: end;
      transition: opacity .2s;
      opacity: .7;
    }
    button.icon:hover {
      opacity: 1;
    }
    button.icon.add-layer-icon::before {
      width: 16px;
      min-width: 16px;
      height: 16px;
    }
    button.icon.add-icon::before {
      width: 18px;
      min-width: 18px;
      height: 18px;
    }
    .add-icon.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' d='M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z' fill='%23004270'/%3E%3C/svg%3E");
    }
    .add-layer-icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='%23004270' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .json-add-layer {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='white' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .search-icon::after {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' fill='white' /%3E%3C/svg%3E");
    }
    .search-icon::after, .json-add-layer::before {
      width: 14px;
      min-width: 14px;
      height: 14px;
      display:flex
      margin-right: 6px;
      color: white;
    }
    .search-icon, .json-add-layer {
      padding: 4px 6px;
      height: 28px;
      border-radius: 0px 4px 4px 0px;
      box-shadow: none;
    }
    .json-add-layer {
      position: absolute;
      bottom: 16px;
      right: 14px;
      border-radius: 4px;
      height: 24px;
      padding: 4px;
    }
    input.add-url, textarea.add-layer-input {
      box-sizing: border-box !important;
      width: 100%;
      height: 28px;
      padding: 5px 7px !important;
      border: 1px solid #0004 !important;
      font-size: smaller;
      border-radius: 4px 0px 0px 4px;
    }
    textarea.add-layer-input {
      height: 90px;
      resize: none;
      border-radius: 4px;
    }
    .divider {
      margin: 1rem 0px;
      height: 1px;
      border-top: 1.5px solid #00417059;
      text-align: center;
      position: relative;
    }
    .divider span {
      position: relative;
      top: -.6em;
      padding: 0px 0.5rem;
      background: #f0f2f5;
      color: #00417059;
      font-weight: bold;
      display: inline-block;
    }
  `),this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=this.open?"open":"close",r=this.open==="url",n=this.open==="json",i=!Ud(this.urlInput)||this.searchLoad?!0:at;return z`
      <style>
        ${nt(this,Jo)}
        ${!this.unstyled&&nt(this,Qo)}
      </style>
      <div class="eox-add-layer-main">
        <div class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <ul class="eox-add-layer-tab ${t}">
            <li
              @click=${()=>Rt(this,ge,Yn).call(this,"url")}
              class="${r?"active":""}"
            >
              URL
            </li>
            <li
              @click=${()=>Rt(this,ge,Yn).call(this,"json")}
              class="${n?"active":""}"
            >
              JSON
            </li>
          </ul>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon icon"
            @click=${()=>Rt(this,ge,Yn).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":""}
          </button>
        </div>
        <div class="eox-add ${t}">
          ${r?z`
              <!-- Input field for URL -->
              <div class="eox-add-layer-col">
                <input 
                  type="text" 
                  class="add-url" 
                  placeholder="Add URL (WMS/XYZ)" 
                  .value="${this.urlInput}" 
                  @input=${Rt(this,ge,Sc)}
                >
                </input>
                <!-- Search button for URL -->
                <button 
                  class="search-icon" 
                  disabled=${i} 
                  @click=${Rt(this,ge,Cc)}
                >
                  ${this.unstyled?"Search":""}
                </button>
              </div>

              <!-- Display layers for WMS capabilities -->
              ${this.wmsCapabilities?z`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(o=>{const s=o.Name;return z`
                            <li class="search-list">
                              ${s}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>Rt(this,ge,Ko).call(this,o)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:at}
            `:z`
                <!-- Textarea for JSON input -->
                <textarea
                  class="add-layer-input"
                  placeholder="Please put a valid eox-map layer JSON."
                  @input=${Rt(this,ge,kc)}
                  .value=${this.jsonInput}
                ></textarea>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer"
                  disabled=${Bd(this.jsonInput)?at:!0}
                  @click=${Rt(this,ge,Mc)}
                >
                  ${this.unstyled?"Add JSON":""}
                </button>
              `}
        </div>
      </div>
    `}}ge=new WeakSet,Sc=function(e){_f(e,this)},Cc=async function(){const e=await Ef(this);e&&Rt(this,ge,Ko).call(this,e)},Ko=function(e){Af(e,this),Ha(this)},Mc=function(){Ha(this)},kc=function(e){$f(e,this)},Yn=function(e){Sf(e,this)},Jo=new WeakMap,Qo=new WeakMap,Mt(Lc,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",Lc);const Cf=(e,t)=>{if(t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const r=t.renderRoot.querySelector("eox-layercontrol-optional-list");r==null||r.requestUpdate()}},Mf=e=>{let t;return typeof e=="string"?t=document.querySelector(e):t=e,t},Ia=e=>{const t=Mf(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};var Ge,Xn,Tc,Oc,ts;class Dc extends Jt{constructor(){super(),ut(this,Xn),ut(this,Ge),ut(this,ts,`
    :host, :root {
      font-family: Roboto, sans-serif;
      --padding: 0.5rem;

      display: block;
      padding: var(--padding) 0;
    }
  `),this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1}firstUpdated(){this.eoxMap=Ia(this)}updated(t){t.has("for")&&(this.eoxMap=Ia(this))}get eoxMap(){return nt(this,Ge)}set eoxMap(t){const r=nt(this,Ge);Kr(this,Ge,t),this.requestUpdate("eoxMap",r)}render(){var t,r,n;const i=(t=this.map)==null?void 0:t.getLayers().getArray(),o=i&&((r=$s(i,"layerControlOptional",!0))==null?void 0:r.length)>0;return z`
      <style>
        ${!this.unstyled&&nt(this,ts)}
        ${this.styleOverride}
      </style>

      <!-- Conditional rendering of add layers component -->
      ${It(this.addExternalLayers&&((n=nt(this,Ge))==null?void 0:n.addOrUpdateLayer),()=>z`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${nt(this,Ge)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${It(this.map,()=>z`
          <eox-layercontrol-layer-list
            .noShadow=${!0}
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .showLayerZoomState=${this.showLayerZoomState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            @changed=${Rt(this,Xn,Tc)}
            @datetime:updated=${Rt(this,Xn,Oc)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${It(o,()=>z`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Ge=new WeakMap,Xn=new WeakSet,Tc=function(e){Cf(e,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:e.detail}))},Oc=function(e){this.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail}))},ts=new WeakMap,Mt(Dc,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol",Dc);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gn=globalThis,Es=Gn.ShadowRoot&&(Gn.ShadyCSS===void 0||Gn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pc=Symbol(),Va=new WeakMap;let kf=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Pc)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Es&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Va.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Va.set(t,e))}return e}toString(){return this.cssText}};const Lf=e=>new kf(typeof e=="string"?e:e+"",void 0,Pc),Tf=(e,t)=>{if(Es)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Gn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},Ua=Es?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Lf(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Of,defineProperty:Df,getOwnPropertyDescriptor:Pf,getOwnPropertyNames:Nf,getOwnPropertySymbols:Rf,getPrototypeOf:Hf}=Object,Sr=globalThis,Ba=Sr.trustedTypes,If=Ba?Ba.emptyScript:"",za=Sr.reactiveElementPolyfillSupport,Zr=(e,t)=>e,es={toAttribute(e,t){switch(t){case Boolean:e=e?If:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Nc=(e,t)=>!Of(e,t),ja={attribute:!0,type:String,converter:es,reflect:!1,hasChanged:Nc};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Sr.litPropertyMetadata??(Sr.litPropertyMetadata=new WeakMap);class mr extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=ja){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&Df(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:o}=Pf(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ja}static _$Ei(){if(this.hasOwnProperty(Zr("elementProperties")))return;const t=Hf(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Zr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zr("properties"))){const r=this.properties,n=[...Nf(r),...Rf(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(Ua(i))}else t!==void 0&&r.push(Ua(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tf(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){var n;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const s=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:es).toAttribute(r,i.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,r){var n;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)==null?void 0:n.fromAttribute)!==void 0?s.converter:es;this._$Em=o,this[o]=a.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Nc)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$EU()}catch(i){throw r=!1,this._$EU(),i}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}mr.elementStyles=[],mr.shadowRootOptions={mode:"open"},mr[Zr("elementProperties")]=new Map,mr[Zr("finalized")]=new Map,za==null||za({ReactiveElement:mr}),(Sr.reactiveElementVersions??(Sr.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li=globalThis,ci=li.trustedTypes,Fa=ci?ci.createPolicy("lit-html",{createHTML:e=>e}):void 0,Rc="$lit$",Re=`lit$${Math.random().toFixed(9).slice(2)}$`,Hc="?"+Re,Vf=`<${Hc}>`,ir=document,rn=()=>ir.createComment(""),nn=e=>e===null||typeof e!="object"&&typeof e!="function",As=Array.isArray,Uf=e=>As(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",go=`[ 	
\f\r]`,Rr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qa=/-->/g,Wa=/>/g,Ye=RegExp(`>|${go}(?:([^\\s"'>=/]+)(${go}*=${go}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Za=/'/g,Ya=/"/g,Ic=/^(?:script|style|textarea|title)$/i,Vc=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Kn=Vc(1),hr=Vc(2),Cr=Symbol.for("lit-noChange"),Ht=Symbol.for("lit-nothing"),Xa=new WeakMap,Je=ir.createTreeWalker(ir,129);function Uc(e,t){if(!As(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fa!==void 0?Fa.createHTML(t):t}const Bf=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=Rr;for(let a=0;a<r;a++){const l=e[a];let c,f,h=-1,g=0;for(;g<l.length&&(s.lastIndex=g,f=s.exec(l),f!==null);)g=s.lastIndex,s===Rr?f[1]==="!--"?s=qa:f[1]!==void 0?s=Wa:f[2]!==void 0?(Ic.test(f[2])&&(i=RegExp("</"+f[2],"g")),s=Ye):f[3]!==void 0&&(s=Ye):s===Ye?f[0]===">"?(s=i??Rr,h=-1):f[1]===void 0?h=-2:(h=s.lastIndex-f[2].length,c=f[1],s=f[3]===void 0?Ye:f[3]==='"'?Ya:Za):s===Ya||s===Za?s=Ye:s===qa||s===Wa?s=Rr:(s=Ye,i=void 0);const m=s===Ye&&e[a+1].startsWith("/>")?" ":"";o+=s===Rr?l+Vf:h>=0?(n.push(c),l.slice(0,h)+Rc+l.slice(h)+Re+m):l+Re+(h===-2?a:m)}return[Uc(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class on{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[c,f]=Bf(t,r);if(this.el=on.createElement(c,n),Je.currentNode=this.el.content,r===2||r===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Je.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(Rc)){const g=f[s++],m=i.getAttribute(h).split(Re),x=/([.?@])?(.*)/.exec(g);l.push({type:1,index:o,name:x[2],strings:m,ctor:x[1]==="."?jf:x[1]==="?"?Ff:x[1]==="@"?qf:$i}),i.removeAttribute(h)}else h.startsWith(Re)&&(l.push({type:6,index:o}),i.removeAttribute(h));if(Ic.test(i.tagName)){const h=i.textContent.split(Re),g=h.length-1;if(g>0){i.textContent=ci?ci.emptyScript:"";for(let m=0;m<g;m++)i.append(h[m],rn()),Je.nextNode(),l.push({type:2,index:++o});i.append(h[g],rn())}}}else if(i.nodeType===8)if(i.data===Hc)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(Re,h+1))!==-1;)l.push({type:7,index:o}),h+=Re.length-1}o++}}static createElement(t,r){const n=ir.createElement("template");return n.innerHTML=t,n}}function Mr(e,t,r=e,n){var i,o;if(t===Cr)return t;let s=n!==void 0?(i=r.o)==null?void 0:i[n]:r.l;const a=nn(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),a===void 0?s=void 0:(s=new a(e),s._$AT(e,r,n)),n!==void 0?(r.o??(r.o=[]))[n]=s:r.l=s),s!==void 0&&(t=Mr(e,s._$AS(e,t.values),s,n)),t}class zf{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??ir).importNode(r,!0);Je.currentNode=i;let o=Je.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new dn(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new Wf(o,this,t)),this._$AV.push(c),l=n[++a]}s!==(l==null?void 0:l.index)&&(o=Je.nextNode(),s++)}return Je.currentNode=ir,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class dn{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,r,n,i){this.type=2,this._$AH=Ht,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this.v=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Mr(this,t,r),nn(t)?t===Ht||t==null||t===""?(this._$AH!==Ht&&this._$AR(),this._$AH=Ht):t!==this._$AH&&t!==Cr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Uf(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ht&&nn(this._$AH)?this._$AA.nextSibling.data=t:this.T(ir.createTextNode(t)),this._$AH=t}$(t){var r;const{values:n,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=on.createElement(Uc(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(n);else{const s=new zf(o,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(t){let r=Xa.get(t.strings);return r===void 0&&Xa.set(t.strings,r=new on(t)),r}k(t){As(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new dn(this.O(rn()),this.O(rn()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this.v=t,(r=this._$AP)==null||r.call(this,t))}}class $i{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,o){this.type=1,this._$AH=Ht,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ht}_$AI(t,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)t=Mr(this,t,r,0),s=!nn(t)||t!==this._$AH&&t!==Cr,s&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Mr(this,a[n+l],r,l),c===Cr&&(c=this._$AH[l]),s||(s=!nn(c)||c!==this._$AH[l]),c===Ht?t=Ht:t!==Ht&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(t)}j(t){t===Ht?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class jf extends $i{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ht?void 0:t}}class Ff extends $i{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ht)}}class qf extends $i{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){if((t=Mr(this,t,r,0)??Ht)===Cr)return;const n=this._$AH,i=t===Ht&&n!==Ht||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==Ht&&(n===Ht||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class Wf{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Mr(this,t)}}const Ga=li.litHtmlPolyfillSupport;Ga==null||Ga(on,dn),(li.litHtmlVersions??(li.litHtmlVersions=[])).push("3.2.0");const Zf=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new dn(t.insertBefore(rn(),o),o,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class wr extends mr{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var t;const r=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=r.firstChild),r}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Zf(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return Cr}}var Ka;wr._$litElement$=!0,wr.finalized=!0,(Ka=globalThis.litElementHydrateSupport)==null||Ka.call(globalThis,{LitElement:wr});const Ja=globalThis.litElementPolyfillSupport;Ja==null||Ja({LitElement:wr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");class _i{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}const Bc={PROPERTYCHANGE:"propertychange"};class Yf{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}function Qa(){}function Ss(e){for(const t in e)delete e[t]}function Xf(e){let t;for(t in e)return!1;return!t}class Gf extends Yf{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,r){if(!t||!r)return;const n=this.listeners_||(this.listeners_={}),i=n[t]||(n[t]=[]);i.includes(r)||i.push(r)}dispatchEvent(t){const r=typeof t=="string",n=r?t:t.type,i=this.listeners_&&this.listeners_[n];if(!i)return;const o=r?new _i(t):t;o.target||(o.target=this.eventTarget_||this);const s=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});n in s||(s[n]=0,a[n]=0),++s[n];let l;for(let c=0,f=i.length;c<f;++c)if("handleEvent"in i[c]?l=i[c].handleEvent(o):l=i[c].call(this,o),l===!1||o.propagationStopped){l=!1;break}if(--s[n]===0){let c=a[n];for(delete a[n];c--;)this.removeEventListener(n,Qa);delete s[n]}return l}disposeInternal(){this.listeners_&&Ss(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return this.listeners_?t?t in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(t,r){if(!this.listeners_)return;const n=this.listeners_[t];if(!n)return;const i=n.indexOf(r);i!==-1&&(this.pendingRemovals_&&t in this.pendingRemovals_?(n[i]=Qa,++this.pendingRemovals_[t]):(n.splice(i,1),n.length===0&&delete this.listeners_[t]))}}const zc={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function Ee(e,t,r,n,i){if(i){const s=r;r=function(){e.removeEventListener(t,r),s.apply(n??this,arguments)}}else n&&n!==e&&(r=r.bind(n));const o={target:e,type:t,listener:r};return e.addEventListener(t,r),o}function tl(e,t,r,n){return Ee(e,t,r,n,!0)}function Yr(e){e&&e.target&&(e.target.removeEventListener(e.type,e.listener),Ss(e))}class Ei extends Gf{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(zc.CHANGE)}getRevision(){return this.revision_}onInternal(t,r){if(Array.isArray(t)){const n=t.length,i=new Array(n);for(let o=0;o<n;++o)i[o]=Ee(this,t[o],r);return i}return Ee(this,t,r)}onceInternal(t,r){let n;if(Array.isArray(t)){const i=t.length;n=new Array(i);for(let o=0;o<i;++o)n[o]=tl(this,t[o],r)}else n=tl(this,t,r);return r.ol_key=n,n}unInternal(t,r){const n=r.ol_key;if(n)Kf(n);else if(Array.isArray(t))for(let i=0,o=t.length;i<o;++i)this.removeEventListener(t[i],r);else this.removeEventListener(t,r)}}Ei.prototype.on;Ei.prototype.once;Ei.prototype.un;function Kf(e){if(Array.isArray(e))for(let t=0,r=e.length;t<r;++t)Yr(e[t]);else Yr(e)}function mo(){throw new Error("Unimplemented abstract method.")}let Jf=0;function rs(e){return e.ol_uid||(e.ol_uid=String(++Jf))}class el extends _i{constructor(t,r,n){super(t),this.key=r,this.oldValue=n}}class jc extends Ei{constructor(t){super(),this.on,this.once,this.un,rs(this),this.values_=null,t!==void 0&&this.setProperties(t)}get(t){let r;return this.values_&&this.values_.hasOwnProperty(t)&&(r=this.values_[t]),r}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(t,r){let n;n=`change:${t}`,this.hasListener(n)&&this.dispatchEvent(new el(n,t,r)),n=Bc.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new el(n,t,r))}addChangeListener(t,r){this.addEventListener(`change:${t}`,r)}removeChangeListener(t,r){this.removeEventListener(`change:${t}`,r)}set(t,r,n){const i=this.values_||(this.values_={});if(n)i[t]=r;else{const o=i[t];i[t]=r,o!==r&&this.notify(t,o)}}setProperties(t,r){for(const n in t)this.set(n,t[n],r)}applyProperties(t){t.values_&&Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,r){if(this.values_&&t in this.values_){const n=this.values_[t];delete this.values_[t],Xf(this.values_)&&(this.values_=null),r||this.notify(t,n)}}}const bt={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};function ns(e,t){if(!e)throw new Error(t)}function Qf(e,t,r){return Math.min(Math.max(e,t),r)}class t0 extends jc{constructor(t){super(),this.on,this.once,this.un,this.background_=t.background;const r=Object.assign({},t);typeof t.properties=="object"&&(delete r.properties,Object.assign(r,t.properties)),r[bt.OPACITY]=t.opacity!==void 0?t.opacity:1,ns(typeof r[bt.OPACITY]=="number","Layer opacity must be a number"),r[bt.VISIBLE]=t.visible!==void 0?t.visible:!0,r[bt.Z_INDEX]=t.zIndex,r[bt.MAX_RESOLUTION]=t.maxResolution!==void 0?t.maxResolution:1/0,r[bt.MIN_RESOLUTION]=t.minResolution!==void 0?t.minResolution:0,r[bt.MIN_ZOOM]=t.minZoom!==void 0?t.minZoom:-1/0,r[bt.MAX_ZOOM]=t.maxZoom!==void 0?t.maxZoom:1/0,this.className_=r.className!==void 0?r.className:"ol-layer",delete r.className,this.setProperties(r),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(t){const r=this.state_||{layer:this,managed:t===void 0?!0:t},n=this.getZIndex();return r.opacity=Qf(Math.round(this.getOpacity()*100)/100,0,1),r.visible=this.getVisible(),r.extent=this.getExtent(),r.zIndex=n===void 0&&!r.managed?1/0:n,r.maxResolution=this.getMaxResolution(),r.minResolution=Math.max(this.getMinResolution(),0),r.minZoom=this.getMinZoom(),r.maxZoom=this.getMaxZoom(),this.state_=r,r}getLayersArray(t){return mo()}getLayerStatesArray(t){return mo()}getExtent(){return this.get(bt.EXTENT)}getMaxResolution(){return this.get(bt.MAX_RESOLUTION)}getMinResolution(){return this.get(bt.MIN_RESOLUTION)}getMinZoom(){return this.get(bt.MIN_ZOOM)}getMaxZoom(){return this.get(bt.MAX_ZOOM)}getOpacity(){return this.get(bt.OPACITY)}getSourceState(){return mo()}getVisible(){return this.get(bt.VISIBLE)}getZIndex(){return this.get(bt.Z_INDEX)}setBackground(t){this.background_=t,this.changed()}setExtent(t){this.set(bt.EXTENT,t)}setMaxResolution(t){this.set(bt.MAX_RESOLUTION,t)}setMinResolution(t){this.set(bt.MIN_RESOLUTION,t)}setMaxZoom(t){this.set(bt.MAX_ZOOM,t)}setMinZoom(t){this.set(bt.MIN_ZOOM,t)}setOpacity(t){ns(typeof t=="number","Layer opacity must be a number"),this.set(bt.OPACITY,t)}setVisible(t){this.set(bt.VISIBLE,t)}setZIndex(t){this.set(bt.Z_INDEX,t)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}}const br={ADD:"add",REMOVE:"remove"},rl={LENGTH:"length"};class Dn extends _i{constructor(t,r,n){super(t),this.element=r,this.index=n}}class nl extends jc{constructor(t,r){if(super(),this.on,this.once,this.un,r=r||{},this.unique_=!!r.unique,this.array_=t||[],this.unique_)for(let n=0,i=this.array_.length;n<i;++n)this.assertUnique_(this.array_[n],n);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(t){for(let r=0,n=t.length;r<n;++r)this.push(t[r]);return this}forEach(t){const r=this.array_;for(let n=0,i=r.length;n<i;++n)t(r[n],n,r)}getArray(){return this.array_}item(t){return this.array_[t]}getLength(){return this.get(rl.LENGTH)}insertAt(t,r){if(t<0||t>this.getLength())throw new Error("Index out of bounds: "+t);this.unique_&&this.assertUnique_(r),this.array_.splice(t,0,r),this.updateLength_(),this.dispatchEvent(new Dn(br.ADD,r,t))}pop(){return this.removeAt(this.getLength()-1)}push(t){this.unique_&&this.assertUnique_(t);const r=this.getLength();return this.insertAt(r,t),this.getLength()}remove(t){const r=this.array_;for(let n=0,i=r.length;n<i;++n)if(r[n]===t)return this.removeAt(n)}removeAt(t){if(t<0||t>=this.getLength())return;const r=this.array_[t];return this.array_.splice(t,1),this.updateLength_(),this.dispatchEvent(new Dn(br.REMOVE,r,t)),r}setAt(t,r){const n=this.getLength();if(t>=n){this.insertAt(t,r);return}if(t<0)throw new Error("Index out of bounds: "+t);this.unique_&&this.assertUnique_(r,t);const i=this.array_[t];this.array_[t]=r,this.dispatchEvent(new Dn(br.REMOVE,i,t)),this.dispatchEvent(new Dn(br.ADD,r,t))}updateLength_(){this.set(rl.LENGTH,this.array_.length)}assertUnique_(t,r){for(let n=0,i=this.array_.length;n<i;++n)if(this.array_[n]===t&&n!==r)throw new Error("Duplicate item added to a unique collection")}}function e0(){return[1/0,1/0,-1/0,-1/0]}function r0(e,t,r,n,i){return i?(i[0]=e,i[1]=t,i[2]=r,i[3]=n,i):[e,t,r,n]}function n0(e){return r0(1/0,1/0,-1/0,-1/0,e)}function i0(e,t,r){const n=r||e0();return o0(e,t)?(e[0]>t[0]?n[0]=e[0]:n[0]=t[0],e[1]>t[1]?n[1]=e[1]:n[1]=t[1],e[2]<t[2]?n[2]=e[2]:n[2]=t[2],e[3]<t[3]?n[3]=e[3]:n[3]=t[3]):n0(n),n}function o0(e,t){return e[0]<=t[2]&&e[2]>=t[0]&&e[1]<=t[3]&&e[3]>=t[1]}class dr extends _i{constructor(t,r){super(t),this.layer=r}}const yo={LAYERS:"layers"};class ui extends t0{constructor(t){t=t||{};const r=Object.assign({},t);delete r.layers;let n=t.layers;super(r),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(yo.LAYERS,this.handleLayersChanged_),n?Array.isArray(n)?n=new nl(n.slice(),{unique:!0}):ns(typeof n.getArray=="function","Expected `layers` to be an array or a `Collection`"):n=new nl(void 0,{unique:!0}),this.setLayers(n)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(Yr),this.layersListenerKeys_.length=0;const t=this.getLayers();this.layersListenerKeys_.push(Ee(t,br.ADD,this.handleLayersAdd_,this),Ee(t,br.REMOVE,this.handleLayersRemove_,this));for(const n in this.listenerKeys_)this.listenerKeys_[n].forEach(Yr);Ss(this.listenerKeys_);const r=t.getArray();for(let n=0,i=r.length;n<i;n++){const o=r[n];this.registerLayerListeners_(o),this.dispatchEvent(new dr("addlayer",o))}this.changed()}registerLayerListeners_(t){const r=[Ee(t,Bc.PROPERTYCHANGE,this.handleLayerChange_,this),Ee(t,zc.CHANGE,this.handleLayerChange_,this)];t instanceof ui&&r.push(Ee(t,"addlayer",this.handleLayerGroupAdd_,this),Ee(t,"removelayer",this.handleLayerGroupRemove_,this)),this.listenerKeys_[rs(t)]=r}handleLayerGroupAdd_(t){this.dispatchEvent(new dr("addlayer",t.layer))}handleLayerGroupRemove_(t){this.dispatchEvent(new dr("removelayer",t.layer))}handleLayersAdd_(t){const r=t.element;this.registerLayerListeners_(r),this.dispatchEvent(new dr("addlayer",r)),this.changed()}handleLayersRemove_(t){const r=t.element,n=rs(r);this.listenerKeys_[n].forEach(Yr),delete this.listenerKeys_[n],this.dispatchEvent(new dr("removelayer",r)),this.changed()}getLayers(){return this.get(yo.LAYERS)}setLayers(t){const r=this.getLayers();if(r){const n=r.getArray();for(let i=0,o=n.length;i<o;++i)this.dispatchEvent(new dr("removelayer",n[i]))}this.set(yo.LAYERS,t)}getLayersArray(t){return t=t!==void 0?t:[],this.getLayers().forEach(function(r){r.getLayersArray(t)}),t}getLayerStatesArray(t){const r=t!==void 0?t:[],n=r.length;this.getLayers().forEach(function(s){s.getLayerStatesArray(r)});const i=this.getLayerState();let o=i.zIndex;!t&&i.zIndex===void 0&&(o=0);for(let s=n,a=r.length;s<a;s++){const l=r[s];l.opacity*=i.opacity,l.visible=l.visible&&i.visible,l.maxResolution=Math.min(l.maxResolution,i.maxResolution),l.minResolution=Math.max(l.minResolution,i.minResolution),l.minZoom=Math.max(l.minZoom,i.minZoom),l.maxZoom=Math.min(l.maxZoom,i.maxZoom),i.extent!==void 0&&(l.extent!==void 0?l.extent=i0(l.extent,i.extent):l.extent=i.extent),l.zIndex===void 0&&(l.zIndex=o)}return r}getSourceState(){return"ready"}}const il=e=>{let t;return typeof e=="string"?t=document.querySelector(e):t=e,t};(()=>{var e=Object.defineProperty,t=Math.pow,r=(u,p,v)=>p in u?e(u,p,{enumerable:!0,configurable:!0,writable:!0,value:v}):u[p]=v,n=(u,p,v)=>(r(u,typeof p!="symbol"?p+"":p,v),v),i=(u,p)=>` ${p&&p.length>0?p.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${u} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,o=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",s="pointers-overlap",a="pointers-min-distance",l="pointers-max-distance",c="range-dragging",f="data",h="min",g="max",m="step",x="round",L="type",F="theme",W="rtl",mt="btt",J="disabled",Dt="keyboard-disabled",Z="mousewheel-disabled",D="slider-width",lt="slider-height",ft="slider-radius",dt="slider-bg",rt="slider-bg-hover",S="slider-bg-fill",yt="pointer-width",vt="pointer-height",T="pointer-radius",_="pointer-bg",w="pointer-bg-hover",M="pointer-bg-focus",E="pointer-shadow",N="pointer-shadow-hover",j="pointer-shadow-focus",pt="pointer-border",wt="pointer-border-hover",Lt="pointer-border-focus",Pt="animate-onclick",Qt="css-links",Ut="vertical",te="horizontal",_e=(u,p,v,y,A)=>{let V=p-u;return V===0?v:(y-v)*(A-u)/V+v},jt=u=>!isNaN(parseFloat(u))&&isFinite(u),Q=(u,p)=>jt(u)?Number(u):p,de=(u,p)=>p===0?0:Math.round(u/p)*p,Be=(u,p=1/0)=>{if(p===1/0)return u;let v=t(10,p);return Math.round(u*v)/v},_t=u=>u==null?!1:typeof u=="boolean"?u:u.trim().toLowerCase()==="true",fu=(u,p)=>{u.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:p}}))},gu=(u,p)=>{u.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:p}}))},mu=(u,p)=>{u.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:p}}))},yu=(u,p)=>{u.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:p}}))},vu=(u,p)=>{if(!p||p.length<=0)return;let v=p.map(A=>jt(A)?Q(A,A):A),y={values:v||[]};y.value=v[0],y.value0=v[0],y.value1=v[0];for(let A=1;A<v.length;A++)y[`value${A+1}`]=v[A];u.dispatchEvent(new CustomEvent("change",{detail:y}))},Mi=(u,p,v)=>{let y=0,A,V,Y,C,k=!1,X=(B,gt,Bt,Nt,At,St)=>{let ee=y;Bt!==void 0&&B>Bt&&(B=Bt),gt!==void 0&&B<gt&&(B=gt),y=B;let re=y;return(Nt===Ut&&St||Nt===te&&At)&&(re=100-re),Nt===Ut?p.style.top=`${re}%`:p.style.left=`${re}%`,ee!==y},tt=B=>B===p||p.contains(B),R=(B,gt,Bt,Nt)=>{A=B,V=gt,Y=Bt,C=Nt},ct=B=>{k=B,p.classList.toggle("disabled",k),k?p.setAttribute("aria-disabled","true"):p.hasAttribute("aria-disabled")&&p.removeAttribute("aria-disabled")},ce=(B,gt)=>{gt==null?p.removeAttribute(B):p.setAttribute(B,gt)},Yt=B=>p.getAttribute(B),U=B=>{if(!k){switch(B.key){case"ArrowLeft":{B.preventDefault(),typeof A=="function"&&A(v);break}case"ArrowRight":{B.preventDefault(),typeof V=="function"&&V(v);break}case"ArrowUp":{B.preventDefault(),typeof Y=="function"&&Y(v);break}case"ArrowDown":{B.preventDefault(),typeof C=="function"&&C(v);break}}yu(u,B)}},K=()=>{k||fu(u,p)};return p.className=`pointer pointer-${v}`,p.addEventListener("keydown",U),p.addEventListener("click",K),{$pointer:p,get percent(){return y},get disabled(){return k},set disabled(B){ct(B)},updatePosition:X,isClicked:tt,setCallbacks:R,setAttr:ce,getAttr:Yt,destroy:()=>{p.removeEventListener("keydown",U),p.removeEventListener("click",K),p.remove()}}},bu=u=>{if(u==null)return;if(Array.isArray(u))return u;if(u.trim()==="")return;let p=u.split(","),v=[],y=!0;for(let A=0;A<p.length;A++){let V=p[A].trim();V!==""&&(v.push(V),jt(V)||(y=!1))}return y?v.map(A=>Number(A)):v},xu=(u,p)=>p?p.findIndex(v=>v===u||v.toString().trim()===u.toString().trim()):-1,wu=u=>({updatePosition:(p,v,y,A)=>{if(v.length<=0)return;let V=v.length===1,Y=v[0],C=v[v.length-1];p===Ut?(u.style.removeProperty("width"),u.style.removeProperty("right"),u.style.removeProperty("left"),V?u.style.height=`${Y}%`:u.style.height=`${Math.abs(Y-C)}%`,A?(u.style.bottom="0%",V?u.style.top="auto":u.style.top=`${Math.min(100-C,100-Y)}%`):(u.style.bottom="auto",V?u.style.top="0%":u.style.top=`${Math.min(Y,C)}%`)):(u.style.removeProperty("height"),u.style.removeProperty("top"),u.style.removeProperty("bottom"),V?u.style.width=`${Y}%`:u.style.width=`${Math.abs(Y-C)}%`,y?(u.style.right="0%",V?u.style.left="auto":u.style.left=`${Math.min(100-C,100-Y)}%`):(u.style.right="auto",V?u.style.left="0%":u.style.left=`${Math.min(Y,C)}%`))}}),Ds="--animate-onclick",$u="--width",_u="--height",Eu="--panel-bg-border-radius",Au="--panel-bg",Su="--panel-bg-hover",Cu="--panel-bg-fill",Mu="--pointer-width",ku="--pointer-height",Lu="--pointer-border-radius",Tu="--pointer-bg",Ou="--pointer-bg-hover",Du="--pointer-bg-focus",Pu="--pointer-shadow",Nu="--pointer-shadow-hover",Ru="--pointer-shadow-focus",Hu="--pointer-border",Iu="--pointer-border-hover",Vu="--pointer-border-focus",gn=(u,p,v)=>{let y=new Map;for(let A of u.attributes){let V=A.nodeName.trim().toLowerCase();if(!p.test(V))continue;let Y=V.replace(/\D/g,"").trim(),C=Y===""||Y==="0"||Y==="1"?0:Q(Y,0)-1,k=v&&typeof v=="function"?v(A.value):A.value;y.set(C,k)}return y},Uu=u=>{if(!u)return null;let p=u.getAttribute(Qt);if(!p)return null;let v=p.split(";"),y=[];for(let A of v)A.trim()!==""&&y.push(A.trim());return y},Ps=[[$u,D,"sliderWidth",null],[_u,lt,"sliderHeight",null],[Eu,ft,"sliderRadius",null],[Au,dt,"sliderBg",null],[Su,rt,"sliderBgHover",null],[Cu,S,"sliderBgFill",null],[Mu,yt,"pointer#Width",/^pointer([0-9]*)-width$/],[ku,vt,"pointer#Height",/^pointer([0-9]*)-height$/],[Lu,T,"pointer#Radius",/^pointer([0-9]*)-radius$/],[Tu,_,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Ou,w,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Du,M,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Pu,E,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[Nu,N,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[Ru,j,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Hu,pt,"pointer#Border",/^pointer([0-9]*)-border$/],[Iu,wt,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Vu,Lt,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Bu=(u,p,v)=>{let y=null,A=[],V=new Map,Y=(U,K=p)=>{let B=[...K.classList];for(let gt of B)gt.startsWith(U)&&p.classList.remove(gt)},C=()=>{Y("shape");let U=p.querySelectorAll(".pointer");for(let K of U)Y("shape",K)},k=U=>{y=U,Y("theme-"),typeof U=="string"&&p.classList.add(`theme-${U}`)},X=()=>{if(C(),!(A.length<=0)){p.classList.add("shape",`shape-${A[0]}`);for(let U=1;U<A.length;U++){let K=A[U];if(!K)continue;let B=p.querySelector(`.pointer-${U}`);!B||B.classList.add("shape",`shape-${K}`)}}},tt=(U,K)=>{A[U]=K,X()},R=()=>{C();let U=gn(u,/^pointer([0-9]*)-shape$/);if(!(U.size<=0)){for(let K of U){let B=K[0];A[B]=K[1]}X()}},ct=(U,K)=>`${U}-${K}`,ce=(U,K,B)=>{let gt=v[B];if(!gt)return;let Bt=B===0?p:gt.$pointer;if(K==null){V.has(ct(U,B))&&V.delete(ct(U,B)),Bt.style.removeProperty(U);return}V.set(ct(U,B),K),Bt.style.setProperty(U,K)},Yt=(U,K)=>V.get(ct(U,K));return(()=>{for(let U of Ps){let[K,B,gt,Bt]=U;if(Bt){let At=gn(u,Bt);for(let St of At){let ee=St[0],re=St[1];ce(K,re,ee)}}else{let At=u.getAttribute(B);ce(K,At,0)}let Nt=[];if(gt.indexOf("#")===-1)Nt.push([gt,0]);else{Nt.push([gt.replace("#",""),0]),Nt.push([gt.replace("#","0"),0]),Nt.push([gt.replace("#","1"),0]);for(let At=1;At<v.length;At++)Nt.push([gt.replace("#",(At+1).toString()),At])}for(let At of Nt)try{let St=At[0],ee=At[1];Object.prototype.hasOwnProperty.call(u,St)||Object.defineProperty(u,St,{get(){return Yt(K,ee)},set:re=>{ce(K,re,ee)}})}catch(St){console.error(St)}}k(u.getAttribute(F)),R()})(),{setStyle:ce,getStyle:Yt,get theme(){return y},set theme(U){k(U)},get pointerShapes(){return A},setPointerShape:tt}},sr="animate-on-click",Ns="range-dragging",zu=(u,p,v,y)=>{let A=[],V=tt=>{for(let R of A)R.update&&typeof R.update=="function"&&R.update(tt)},Y=()=>{for(let tt of A)tt.destroy&&typeof tt.destroy=="function"&&tt.destroy()},C=(tt,R)=>{for(let ct of A)ct.onAttrChange&&typeof ct.onAttrChange=="function"&&ct.onAttrChange(tt,R)},k=tt=>{if(tt.gettersAndSetters){for(let R of tt.gettersAndSetters)if(!(!R.name||!R.attributes))try{Object.prototype.hasOwnProperty.call(u,R.name)||Object.defineProperty(u,R.name,R.attributes)}catch(ct){console.error("defineSettersGetters error:",ct)}}},X=tt=>{var R;if(!tt.css)return;let ct=(R=u.shadowRoot)==null?void 0:R.querySelector("style");!ct||(ct.innerHTML+=tt.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let tt of window.tcRangeSliderPlugins){let R=tt();A.push(R),R.init&&typeof R.init=="function"&&(R.init(u,p,v,y),k(R),X(R))}},update:V,onAttrChange:C,destroy:Y}},ju=10,Rs=20,Fu=(u,p)=>{let v=new Map,y=/^value([0-9]*)$/;for(let C of u.attributes){let k=C.nodeName.trim().toLowerCase();if(!y.test(k))continue;let X=k.replace("value","").trim(),tt=X===""||X==="0"||X==="1"?0:Q(X,0)-1,R=jt(C.value)?Q(C.value,0):C.value;v.set(tt,R)}let A=Math.max(...Array.from(v.keys())),V=[];V.push([Mi(u,p,0),v.get(0)]);let Y=p;for(let C=1;C<=A;C++){let k=p.cloneNode(!0);Y.after(k),Y=k,V.push([Mi(u,k,C),v.get(C)])}return V},Hs=(u,p,v,y,A,V,Y)=>{try{Object.defineProperty(u,y,{configurable:!0,get(){if(!p)return;let C=p.pointers[v];if(!C)return;let k=p.getTextValue(C.percent);return jt(k)?Q(k,k):k},set:C=>{p.pointers[v]?p==null||p.setValue(C,v):p==null||p.addPointer(C)}}),Object.defineProperty(u,A,{configurable:!0,get(){var C,k;return(k=(C=p==null?void 0:p.pointers[v])==null?void 0:C.getAttr("aria-label"))!=null?k:void 0},set:C=>{!p||p.setAriaLabel(v,C)}}),Object.defineProperty(u,V,{configurable:!0,get(){var C,k;return(k=(C=p==null?void 0:p.styles)==null?void 0:C.pointerShapes[v])!=null?k:null},set:C=>{!p||!p.styles||p.styles.setPointerShape(v,C)}}),Object.defineProperty(u,Y,{configurable:!0,get(){var C;return(C=p==null?void 0:p.pointers[v].disabled)!=null?C:!1},set:C=>{if(!p)return;let k=p==null?void 0:p.pointers[v];!k||(k.disabled=C)}})}catch(C){console.error(C)}},qu=(u,p)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let y=2;y<ju;y++)v.push([`value${y}`,`ariaLabel${y}`,`pointer${y}Shape`,`pointer${y}Disabled`,y-1]);for(let y of v)Hs(u,p,y[4],y[0],y[1],y[2],y[3])},Is=(u,p,v)=>{var y;let A=(y=v.shadowRoot)==null?void 0:y.querySelector(".container");if(A)for(let V of u)p?A.prepend(V.$pointer):A.append(V.$pointer)},Wu=(u,p)=>{if(!(!p||u.length<=1)){for(let v of u)v.$pointer.style.zIndex=Rs.toString();p.$pointer.style.zIndex=(Rs*2).toString()}},ki=0,Lr=100,ar=2,Vs="0.3s",Zu=(u,p,v)=>{let y=v.map(d=>d[0]),A=null,V=null,Y=null,C=null,k=ki,X=Lr,tt,R,ct=te,ce=ar,Yt=!1,U=!1,K=!1,B=0,gt=1/0,Bt=!1,Nt,At,St=!1,ee=!1,re=!1,Oe=Vs,Us=[],Bs=d=>{St||(d.preventDefault&&d.preventDefault(),ze(d),window.addEventListener("mousemove",ze),window.addEventListener("mouseup",mn),gu(u,d))},mn=d=>{St||(Nt=void 0,At=void 0,window.removeEventListener("mousemove",ze),window.removeEventListener("mouseup",mn),Oe&&p.classList.add(sr),mu(u,d))},Gu=(d,b)=>{if(y.length<=0)return;if(y.length===1)return y[0].isClicked(d)&&Oe&&p.classList.remove(sr),y[0];let P=Ju(d);if(Bt){let ot=b,pe=vn(ot);pe!==void 0&&(ot=de(ot,pe)),P?(Nt=ot,At=0,Oe&&p.classList.remove(sr)):Nt!==void 0&&(At=ot-Nt,Nt=ot)}if(!Ku(d)&&!P){for(let ot of y)if(!(!ot.isClicked(d)||ot.disabled))return Oe&&p.classList.remove(sr),ot;for(let ot of y)if(A===ot)return ot}let ht=1/0,Ct=null;for(let ot of y){if(ot.disabled)continue;let pe=Math.abs(b-ot.percent);pe<ht&&(ht=pe,Ct=ot)}return Ct},zs=()=>y.findIndex(d=>A===d&&!d.disabled),ze=d=>{let b;if(ct===Ut){let{height:ht,top:Ct}=p.getBoundingClientRect(),ot=d.type.indexOf("mouse")!==-1?d.clientY:d.touches[0].clientY;b=Math.min(Math.max(0,ot-Ct),ht)*100/ht}else{let{width:ht,left:Ct}=p.getBoundingClientRect(),ot=d.type.indexOf("mouse")!==-1?d.clientX:d.touches[0].clientX;b=Math.min(Math.max(0,ot-Ct),ht)*100/ht}if((Yt||U)&&(b=100-b),A=Gu(d.target,b),A&&Wu(y,A),Bt&&y.length>1&&At!==void 0){let ht=y[0],Ct=y[y.length-1],ot=ht.percent+At<0,pe=Ct.percent+At>100;if(ot||pe)return;for(let Sn=0;Sn<y.length;Sn++)ne(Sn,y[Sn].percent+At);return}let P=zs();P!==-1&&(ne(P,b),A==null||A.$pointer.focus())},yn=d=>{if(St||document.activeElement!==u||A!=null&&A.disabled)return;d.stopPropagation(),d.preventDefault();let b=d.deltaY<0,P=Yt||U,ht=b?!P:P,Ct=zs();Ct!==-1&&(ht?Tr(Ct,y[Ct].percent):Or(Ct,y[Ct].percent))},js=d=>{St||ee||(ct===Ut?U?ne(d,100):ne(d,0):Yt?Or(d,y[d].percent):Tr(d,y[d].percent))},Fs=d=>{St||ee||(ct===Ut?U?ne(d,0):ne(d,100):Yt?Tr(d,y[d].percent):Or(d,y[d].percent))},qs=d=>{St||ee||(ct===Ut?U?Or(d,y[d].percent):Tr(d,y[d].percent):Yt?ne(d,100):ne(d,0))},Ws=d=>{St||ee||(ct===Ut?U?Tr(d,y[d].percent):Or(d,y[d].percent):Yt?ne(d,0):ne(d,100))},Ku=d=>d.classList.contains("panel"),Ju=d=>d.classList.contains("panel-fill"),Tr=(d,b)=>{if(b===void 0)return;let P=vn(b);P==null&&(P=1),b-=P,b<0&&(b=0),ne(d,b)},Or=(d,b)=>{if(b===void 0)return;let P=vn(b);P==null&&(P=1),b+=P,b>100&&(b=100),ne(d,b)},je=()=>{!C||C.update({percents:Zs(),values:Ys(),$pointers:Xs(),min:Gs(),max:Ks(),data:Oi(),step:Ti(),round:Pi(),type:Di(),textMin:bn(),textMax:xn(),rightToLeft:Hi(),bottomToTop:Ii(),pointersOverlap:zi(),pointersMinDistance:Ni(),pointersMaxDistance:Ri(),rangeDragging:ji(),disabled:Vi(),keyboardDisabled:Ui(),mousewheelDisabled:Bi()})},Qu=()=>{je()},th=d=>{if(!(K||y.length<=1||X===k))if(d===0){let b=gt*100/(X-k);return Math.max(0,y[d+1].percent-b)}else{let b=B*100/(X-k);return Math.min(y[d-1].percent+b,100)}},eh=d=>{if(!(K||y.length<=1||X===k))if(d===y.length-1){let b=gt*100/(X-k);return Math.min(y[d-1].percent+b,100)}else{let b=B*100/(X-k);return Math.max(0,y[d+1].percent-b)}},vn=d=>{let b;if(typeof tt=="function"){let P=_e(0,100,k,X,d);b=tt(P,d)}else b=tt;if(jt(b)){let P=X-k;return b=P===0?0:b*100/P,b}},lr=d=>{if(d===void 0)return;let b=_e(0,100,k,X,d);return R!==void 0?R[Math.round(b)]:Be(b,ce)},bn=()=>R!==void 0?R[k]:k,xn=()=>R!==void 0?R[X]:X,Ti=()=>tt,rh=d=>{var b;return d<=0||K?bn():(b=lr(y[d-1].percent))!=null?b:""},nh=d=>{var b;return y.length<=1||d>=y.length-1||K?xn():(b=lr(y[d+1].percent))!=null?b:""},Zs=()=>y.map(d=>d.percent),Ys=()=>y.map(d=>lr(d.percent)),Xs=()=>y.map(d=>d.$pointer),Gs=()=>k,Ks=()=>X,Oi=()=>R,Di=()=>ct,Pi=()=>ce,Ni=()=>B,Ri=()=>gt,ih=d=>Us[d],Hi=()=>Yt,Ii=()=>U,Vi=()=>St,Ui=()=>ee,Bi=()=>re,zi=()=>K,ji=()=>Bt,ne=(d,b)=>{if(b===void 0)return;let P=vn(b);P!==void 0&&(b=de(b,P));let ht=y[d];if(!ht)return;let Ct=ht.updatePosition(b,th(d),eh(d),ct,Yt,U);V==null||V.updatePosition(ct,y.map(ot=>ot.percent),Yt,U),je();for(let ot of y){let pe=lr(ot.percent);pe!==void 0&&(ot.setAttr("aria-valuenow",pe.toString()),ot.setAttr("aria-valuetext",pe.toString()))}sh(),Ct&&vu(u,y.map(ot=>lr(ot.percent)))},ve=()=>{for(let d=0;d<y.length;d++)ne(d,y[d].percent)},oh=(d,b)=>{k=R!==void 0?0:Q(d,ki),X=R!==void 0?R.length-1:Q(b,Lr),wn(k),$n(X)},sh=()=>{var d,b;for(let P=0;P<y.length;P++){let ht=y[P];ht.setAttr("aria-valuemin",((d=rh(P))!=null?d:"").toString()),ht.setAttr("aria-valuemax",((b=nh(P))!=null?b:"").toString())}},wn=d=>{k=Q(d,ki),k>X&&(X=k+Lr),ve()},$n=d=>{X=Q(d,Lr),X<k&&(X=k+Lr),ve()},Js=d=>{K=!0;for(let b=0;b<d.length;b++)_n(d[b],b);K=!1;for(let b=0;b<d.length;b++)_n(d[b],b)},_n=(d,b)=>{let P;R!==void 0?(P=d==null?0:xu(d,R),P===-1&&(P=0)):(P=Q(d,k),P<k&&(P=k),P>X&&(P=X));let ht=_e(k,X,0,100,P);ne(b,ht)},En=d=>{if(d==null){tt=void 0;return}if(typeof d=="function"){tt=d,ve();return}if(jt(d)){tt=Q(d,1);let b=Math.abs(X-k);tt>b&&(tt=void 0),ve();return}tt=void 0},Fi=d=>{K=d,ve()},qi=d=>{(!jt(d)||d<0)&&(d=0),B=d},Wi=d=>{(!jt(d)||d<0)&&(d=1/0),gt=d},Zi=d=>{St=d,p.classList.toggle("disabled",St),St?p.setAttribute("aria-disabled","true"):p.hasAttribute("aria-disabled")&&p.removeAttribute("aria-disabled")},Qs=d=>{ee=d},ta=d=>{re=d,re?document.removeEventListener("wheel",yn):document.addEventListener("wheel",yn,{passive:!1})},Yi=d=>{if(d==null){R=void 0;return}if(R=bu(d),R===void 0||R.length<=0){R=void 0;return}wn(0),$n(R.length-1),tt===void 0&&En(1)},Xi=d=>{var b;typeof d=="string"?ct=d.trim().toLowerCase()===Ut?Ut:te:ct=te;let P=(b=u.shadowRoot)==null?void 0:b.querySelector(".range-slider-box");if(!P)return;P.className=`range-slider-box type-${ct}`,ve();let ht=ct===Ut?"vertical":"horizontal";for(let Ct of y)Ct.setAttr("aria-orientation",ht)},Gi=d=>{Yt=d,y.length>1&&Is(y,Yt,u),ve(),je()},Ki=d=>{U=d,y.length>1&&Is(y,U,u),ve(),je()},Ji=d=>{ce=Q(d,ar),ce<0&&(ce=ar),je()},ea=d=>{d==null||d.toString().trim().toLowerCase()==="false"?(Oe=void 0,p.style.removeProperty(Ds),p.classList.remove(sr)):(Oe=d.toString(),p.style.setProperty(Ds,Oe),p.classList.add(sr))},ra=(d,b)=>{let P=y[d];!P||(P.setAttr("aria-label",b),Us[d]=b)},An=d=>{if(Nt=void 0,y.length<=1){Bt=!1,p.classList.remove(Ns);return}Bt=d,p.classList.toggle(Ns,Bt)},ah=()=>{Zi(_t(u.getAttribute(J))),ee=_t(u.getAttribute(Dt)),re=_t(u.getAttribute(Z));let d=gn(u,/^pointer([0-9]*)-disabled$/,b=>_t(b));for(let b of d){let P=b[0];!y[P]||(y[P].disabled=b[1])}},lh=()=>{let d=gn(u,/^aria-label([0-9]*)$/);for(let b of d){let P=b[0];ra(P,b[1])}},ch=d=>{let b=y.length,P=y[b-1].$pointer,ht=P.cloneNode(!0);P.after(ht);let Ct=Mi(u,ht,b);return Ct.setCallbacks(js,Fs,qs,Ws),y.push(Ct),_n(d,b),ve(),je(),b},uh=()=>{let d=y.length,b=y[d-1];return b?(b.destroy(),y.pop(),y.length<=1&&An(!1),ve(),je(),d-1):-1};return(()=>{var d,b;for(let ht of y)ht.setCallbacks(js,Fs,qs,Ws);let P=(d=u.shadowRoot)==null?void 0:d.querySelector(".panel-fill");P&&(V=wu(P)),Xi(u.getAttribute(L)),Gi(_t(u.getAttribute(W))),Ki(_t(u.getAttribute(mt))),oh(u.getAttribute(h),u.getAttribute(g)),En(u.getAttribute(m)),Yi(u.getAttribute(f)),Js(v.map(ht=>ht[1])),Fi(_t(u.getAttribute(s))),qi(Q(u.getAttribute(a),0)),Wi(Q(u.getAttribute(l),1/0)),An(_t(u.getAttribute(c))),Ji(Q(u.getAttribute(x),ar)),ah(),lh(),Y=Bu(u,p,y),ea((b=u.getAttribute(Pt))!=null?b:Vs),p.addEventListener("mousedown",Bs),p.addEventListener("mouseup",mn),p.addEventListener("touchmove",ze),p.addEventListener("touchstart",ze),re||document.addEventListener("wheel",yn,{passive:!1}),C=zu(u,Qu,{setValues:Js,setMin:wn,setMax:$n,setStep:En,setPointersOverlap:Fi,setPointersMinDistance:qi,setPointersMaxDistance:Wi,setDisabled:Zi,setType:Xi,setRightToLeft:Gi,setBottomToTop:Ki,setRound:Ji,setKeyboardDisabled:Qs,setMousewheelDisabled:ta,setRangeDragging:An,setData:Yi},{getPercents:Zs,getValues:Ys,getPointerElements:Xs,getMin:Gs,getMax:Ks,getStep:Ti,getData:Oi,getType:Di,getRound:Pi,getTextMin:bn,getTextMax:xn,isRightToLeft:Hi,isBottomToTop:Ii,isDisabled:Vi,isKeyboardDisabled:Ui,isMousewheelDisabled:Bi,isPointersOverlap:zi,isRangeDraggingEnabled:ji,getPointersMinDistance:Ni,getPointersMaxDistance:Ri}),C.init()})(),{get pointers(){return y},get styles(){return Y},get pluginsManager(){return C},get min(){return bn()},get max(){return xn()},get step(){return Ti()},get pointersOverlap(){return zi()},set pointersOverlap(d){Fi(d)},get pointersMinDistance(){return Ni()},set pointersMinDistance(d){qi(d)},get pointersMaxDistance(){return Ri()},set pointersMaxDistance(d){Wi(d)},get disabled(){return Vi()},set disabled(d){Zi(d)},get data(){return Oi()},get type(){return Di()},set type(d){Xi(d)},get rightToLeft(){return Hi()},set rightToLeft(d){Gi(d)},get bottomToTop(){return Ii()},set bottomToTop(d){Ki(d)},get round(){return Pi()},set round(d){Ji(d)},get animateOnClick(){return Oe},set animateOnClick(d){ea(d)},get keyboardDisabled(){return Ui()},set keyboardDisabled(d){Qs(d)},get mousewheelDisabled(){return Bi()},set mousewheelDisabled(d){ta(d)},get rangeDragging(){return ji()},set rangeDragging(d){An(d)},setMin:wn,setMax:$n,setValue:_n,setStep:En,setData:Yi,getTextValue:lr,setAriaLabel:ra,getAriaLabel:ih,addPointer:ch,removePointer:uh,destroy:()=>{p.removeEventListener("mousedown",Bs),p.removeEventListener("mouseup",mn),p.removeEventListener("touchmove",ze),p.removeEventListener("touchstart",ze),document.removeEventListener("wheel",yn);for(let d of y)d.destroy();C==null||C.destroy()}}},Yu=(u,p,v)=>{let y=Ps.find(([C,k,X,tt])=>k.replace("#","")===p.replace(/\d+/g,""));if(y&&u.styles){let[C,k,X,tt]=y,R=p.replace(/\D/g,"").trim(),ct=R===""||R==="0"||R==="1"?0:Q(R,0)-1;u.styles.setStyle(C,v,ct);return}switch(u&&u.pluginsManager&&u.pluginsManager.onAttrChange(p,v),p){case h:{u.setMin(v);break}case g:{u.setMax(v);break}case m:{u.setStep(v);break}case s:{u.pointersOverlap=_t(v);break}case a:{u.pointersMinDistance=Q(v,0);break}case c:{u.rangeDragging=_t(v);break}case l:{u.pointersMaxDistance=Q(v,1/0);break}case J:{u.disabled=_t(v);break}case Dt:{u.keyboardDisabled=_t(v);break}case Z:{u.mousewheelDisabled=_t(v);break}case f:{u.setData(v);break}case L:{u.type=v;break}case W:{u.rightToLeft=_t(v);break}case mt:{u.bottomToTop=_t(v);break}case x:{u.round=Q(v,ar);break}case F:{u.styles&&(u.styles.theme=v);break}case Pt:{u.animateOnClick=v;break}}let A=null;if(/^value([0-9]*)$/.test(p)&&(A="value"),/^pointer([0-9]*)-disabled$/.test(p)&&(A="pointer-disabled"),/^aria-label([0-9]*)$/.test(p)&&(A="aria-label"),/^pointer([0-9]*)-shape$/.test(p)&&(A="pointer-shape"),!A)return;let V=p.replace(/\D/g,"").trim(),Y=V===""||V==="0"||V==="1"?0:Q(V,0)-1;switch(A){case"value":{u.setValue(v,Y);break}case"pointer-disabled":{let C=u==null?void 0:u.pointers[Y];if(!C)return;C.disabled=_t(v);break}case"aria-label":{u.setAriaLabel(Y,v);break}case"pointer-shape":{u.styles&&u.styles.setPointerShape(Y,v);break}}},Xu=class extends HTMLElement{constructor(){super(),n(this,"slider"),n(this,"_externalCSSList",[]),n(this,"_observer",null),this.attachShadow({mode:"open"})}set step(u){this.slider&&this.slider.setStep(u)}get step(){var u;return(u=this.slider)==null?void 0:u.step}set disabled(u){this.slider&&(this.slider.disabled=u)}get disabled(){var u,p;return(p=(u=this.slider)==null?void 0:u.disabled)!=null?p:!1}set data(u){var p;(p=this.slider)==null||p.setData(u)}get data(){var u;return(u=this.slider)==null?void 0:u.data}set min(u){var p;(p=this.slider)==null||p.setMin(u)}get min(){var u;return(u=this.slider)==null?void 0:u.min}set max(u){var p;(p=this.slider)==null||p.setMax(u)}get max(){var u;return(u=this.slider)==null?void 0:u.max}set round(u){!this.slider||(this.slider.round=u)}get round(){var u,p;return(p=(u=this.slider)==null?void 0:u.round)!=null?p:ar}set type(u){!this.slider||(this.slider.type=u??te)}get type(){var u;return((u=this.slider)==null?void 0:u.type)||te}set pointersOverlap(u){!this.slider||(this.slider.pointersOverlap=u)}get pointersOverlap(){var u,p;return(p=(u=this.slider)==null?void 0:u.pointersOverlap)!=null?p:!1}set pointersMinDistance(u){!this.slider||(this.slider.pointersMinDistance=u)}get pointersMinDistance(){var u,p;return(p=(u=this.slider)==null?void 0:u.pointersMinDistance)!=null?p:0}set pointersMaxDistance(u){!this.slider||(this.slider.pointersMaxDistance=u)}get pointersMaxDistance(){var u,p;return(p=(u=this.slider)==null?void 0:u.pointersMaxDistance)!=null?p:1/0}set theme(u){!this.slider||!this.slider.styles||(this.slider.styles.theme=u)}get theme(){var u,p,v;return(v=(p=(u=this.slider)==null?void 0:u.styles)==null?void 0:p.theme)!=null?v:null}set rtl(u){!this.slider||(this.slider.rightToLeft=u)}get rtl(){var u,p;return(p=(u=this.slider)==null?void 0:u.rightToLeft)!=null?p:!1}set btt(u){!this.slider||(this.slider.bottomToTop=u)}get btt(){var u,p;return(p=(u=this.slider)==null?void 0:u.bottomToTop)!=null?p:!1}set keyboardDisabled(u){!this.slider||(this.slider.keyboardDisabled=u)}get keyboardDisabled(){var u,p;return(p=(u=this.slider)==null?void 0:u.keyboardDisabled)!=null?p:!1}set mousewheelDisabled(u){!this.slider||(this.slider.mousewheelDisabled=u)}get mousewheelDisabled(){var u,p;return(p=(u=this.slider)==null?void 0:u.mousewheelDisabled)!=null?p:!1}set animateOnClick(u){!this.slider||(this.slider.animateOnClick=u)}get animateOnClick(){var u;return(u=this.slider)==null?void 0:u.animateOnClick}get rangeDragging(){var u,p;return(p=(u=this.slider)==null?void 0:u.rangeDragging)!=null?p:!1}set rangeDragging(u){this.slider&&(this.slider.rangeDragging=_t(u))}get externalCSSList(){return this._externalCSSList}addPointer(u){var p,v;if(!this.slider)return;let y=(v=(p=this.slider)==null?void 0:p.addPointer(u))!=null?v:0;Hs(this,this.slider,y,`value${y+1}`,`ariaLabel${y+1}`,`pointerShape${y+1}`,`pointer${y+1}Disabled`)}removePointer(){var u;!this.slider||(u=this.slider)==null||u.removePointer()}addCSS(u){if(!this.shadowRoot)return;let p=document.createElement("style");p.textContent=u,this.shadowRoot.appendChild(p)}connectedCallback(){var u,p;if(!this.shadowRoot)return;this._externalCSSList=Uu(this),this.shadowRoot.innerHTML=i(o,this._externalCSSList);let v=(u=this.shadowRoot)==null?void 0:u.querySelector(".pointer");if(!v)return;let y=(p=this.shadowRoot)==null?void 0:p.getElementById("range-slider");if(!y)return;let A=Fu(this,v);this.slider=Zu(this,y,A),qu(this,this.slider),this._observer=new MutationObserver(V=>{V.forEach(Y=>{var C;if(!this.slider||Y.type!=="attributes")return;let k=Y.attributeName;!k||Yu(this.slider,k,(C=this.getAttribute(k))!=null?C:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Li=Xu;window.tcRangeSlider=Li,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Li),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Li{})})();const s0=`
:host {
  display: block;
}
`,a0=`
button,
.button {
  /* TODO: why does this only work here and not from :root? */
  --primary-color: #004170;
  --primary-color-hover: #004170CC;
  --error-color: #FF5252;

  display: inline-flex;
  position: relative;
  align-items: center;
  color: #fff;
  border-width: 0;
  outline: none;
  border-radius: 4px;
  padding: 16px;
  height: 36px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1.25px;                           
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition-property: box-shadow, transform, opacity, background;
  transition-duration: 0.28s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover:not([disabled]):not(.icon),
.button:hover:not([disabled]):not(.icon) {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background: var(--primary-color-hover);
}

button, button:active,
.button, .button:active {
  background: var(--primary-color);
}

button[disabled],
.button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

button.block,
.button.block {
  display: block;
}

button.outline,
.button.outline {
  background: transparent;
  box-shadow: none;
  color: var(--primary-color);
  outline: 1px solid var(--primary-color);
}

button.outline:hover,
.button.outline:hover {
  background: transparent;
}

button.icon,
.button.icon {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  text-indent: -9999px;
}

button.icon-text,
.button.icon-text {
  text-indent: 26px;
}

button.icon-text.block,
.button.icon-text.block {
  text-indent: 20px;
}

button.icon:before, button.icon-text:before,
.button.icon:before, .button.icon-text:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
}

button.icon-text.block:before,
.button.icon-text.block:before {
  text-indent: -54px;
}

button.icon:before,
.button.icon:before {
  width: 24px;
  height: 24px;
  margin-right: 0;
}

button.icon-text:before,
.button.icon-text:before {
  width: 18px;
  height: 18px;
}

button.small,
.button.small {
  height: 28px;
  padding: 12.4px;
  font-size: .75rem;
}

button.smallest.icon, 
button.smallest.icon::before {
  height: 16px;
  width: 16px;
  padding: 0px;
}
`,l0=`
* {
  font-family: Roboto, sans-serif;
}

main {
  text-align: center;
}

${a0}

button.icon-text.play:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplay%3C/title%3E%3Cpath d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='%23fff' /%3E%3C/svg%3E");
}

button.icon-text.pause:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Epause%3C/title%3E%3Cpath d='M14,19H18V5H14M6,19H10V5H6V19Z' fill='%23fff' /%3E%3C/svg%3E");
}

button.icon.previous:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Earrow-left-drop-circle%3C/title%3E%3Cpath d='M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M14,7L9,12L14,17V7Z' fill='%23004170' /%3E%3C/svg%3E");
}

button.icon.next:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Earrow-right-drop-circle%3C/title%3E%3Cpath d='M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M10,17L15,12L10,7V17Z' fill='%23004170' /%3E%3C/svg%3E");
}
`;var Cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ms(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fc={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(Cs,function(){var r=1e3,n=6e4,i=36e5,o="millisecond",s="second",a="minute",l="hour",c="day",f="week",h="month",g="quarter",m="year",x="date",L="Invalid Date",F=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,W=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,mt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(T){var _=["th","st","nd","rd"],w=T%100;return"["+T+(_[(w-20)%10]||_[w]||_[0])+"]"}},J=function(T,_,w){var M=String(T);return!M||M.length>=_?T:""+Array(_+1-M.length).join(w)+T},Dt={s:J,z:function(T){var _=-T.utcOffset(),w=Math.abs(_),M=Math.floor(w/60),E=w%60;return(_<=0?"+":"-")+J(M,2,"0")+":"+J(E,2,"0")},m:function T(_,w){if(_.date()<w.date())return-T(w,_);var M=12*(w.year()-_.year())+(w.month()-_.month()),E=_.clone().add(M,h),N=w-E<0,j=_.clone().add(M+(N?-1:1),h);return+(-(M+(w-E)/(N?E-j:j-E))||0)},a:function(T){return T<0?Math.ceil(T)||0:Math.floor(T)},p:function(T){return{M:h,y:m,w:f,d:c,D:x,h:l,m:a,s,ms:o,Q:g}[T]||String(T||"").toLowerCase().replace(/s$/,"")},u:function(T){return T===void 0}},Z="en",D={};D[Z]=mt;var lt="$isDayjsObject",ft=function(T){return T instanceof yt||!(!T||!T[lt])},dt=function T(_,w,M){var E;if(!_)return Z;if(typeof _=="string"){var N=_.toLowerCase();D[N]&&(E=N),w&&(D[N]=w,E=N);var j=_.split("-");if(!E&&j.length>1)return T(j[0])}else{var pt=_.name;D[pt]=_,E=pt}return!M&&E&&(Z=E),E||!M&&Z},rt=function(T,_){if(ft(T))return T.clone();var w=typeof _=="object"?_:{};return w.date=T,w.args=arguments,new yt(w)},S=Dt;S.l=dt,S.i=ft,S.w=function(T,_){return rt(T,{locale:_.$L,utc:_.$u,x:_.$x,$offset:_.$offset})};var yt=function(){function T(w){this.$L=dt(w.locale,null,!0),this.parse(w),this.$x=this.$x||w.x||{},this[lt]=!0}var _=T.prototype;return _.parse=function(w){this.$d=function(M){var E=M.date,N=M.utc;if(E===null)return new Date(NaN);if(S.u(E))return new Date;if(E instanceof Date)return new Date(E);if(typeof E=="string"&&!/Z$/i.test(E)){var j=E.match(F);if(j){var pt=j[2]-1||0,wt=(j[7]||"0").substring(0,3);return N?new Date(Date.UTC(j[1],pt,j[3]||1,j[4]||0,j[5]||0,j[6]||0,wt)):new Date(j[1],pt,j[3]||1,j[4]||0,j[5]||0,j[6]||0,wt)}}return new Date(E)}(w),this.init()},_.init=function(){var w=this.$d;this.$y=w.getFullYear(),this.$M=w.getMonth(),this.$D=w.getDate(),this.$W=w.getDay(),this.$H=w.getHours(),this.$m=w.getMinutes(),this.$s=w.getSeconds(),this.$ms=w.getMilliseconds()},_.$utils=function(){return S},_.isValid=function(){return this.$d.toString()!==L},_.isSame=function(w,M){var E=rt(w);return this.startOf(M)<=E&&E<=this.endOf(M)},_.isAfter=function(w,M){return rt(w)<this.startOf(M)},_.isBefore=function(w,M){return this.endOf(M)<rt(w)},_.$g=function(w,M,E){return S.u(w)?this[M]:this.set(E,w)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(w,M){var E=this,N=!!S.u(M)||M,j=S.p(w),pt=function(jt,Q){var de=S.w(E.$u?Date.UTC(E.$y,Q,jt):new Date(E.$y,Q,jt),E);return N?de:de.endOf(c)},wt=function(jt,Q){return S.w(E.toDate()[jt].apply(E.toDate("s"),(N?[0,0,0,0]:[23,59,59,999]).slice(Q)),E)},Lt=this.$W,Pt=this.$M,Qt=this.$D,Ut="set"+(this.$u?"UTC":"");switch(j){case m:return N?pt(1,0):pt(31,11);case h:return N?pt(1,Pt):pt(0,Pt+1);case f:var te=this.$locale().weekStart||0,_e=(Lt<te?Lt+7:Lt)-te;return pt(N?Qt-_e:Qt+(6-_e),Pt);case c:case x:return wt(Ut+"Hours",0);case l:return wt(Ut+"Minutes",1);case a:return wt(Ut+"Seconds",2);case s:return wt(Ut+"Milliseconds",3);default:return this.clone()}},_.endOf=function(w){return this.startOf(w,!1)},_.$set=function(w,M){var E,N=S.p(w),j="set"+(this.$u?"UTC":""),pt=(E={},E[c]=j+"Date",E[x]=j+"Date",E[h]=j+"Month",E[m]=j+"FullYear",E[l]=j+"Hours",E[a]=j+"Minutes",E[s]=j+"Seconds",E[o]=j+"Milliseconds",E)[N],wt=N===c?this.$D+(M-this.$W):M;if(N===h||N===m){var Lt=this.clone().set(x,1);Lt.$d[pt](wt),Lt.init(),this.$d=Lt.set(x,Math.min(this.$D,Lt.daysInMonth())).$d}else pt&&this.$d[pt](wt);return this.init(),this},_.set=function(w,M){return this.clone().$set(w,M)},_.get=function(w){return this[S.p(w)]()},_.add=function(w,M){var E,N=this;w=Number(w);var j=S.p(M),pt=function(Pt){var Qt=rt(N);return S.w(Qt.date(Qt.date()+Math.round(Pt*w)),N)};if(j===h)return this.set(h,this.$M+w);if(j===m)return this.set(m,this.$y+w);if(j===c)return pt(1);if(j===f)return pt(7);var wt=(E={},E[a]=n,E[l]=i,E[s]=r,E)[j]||1,Lt=this.$d.getTime()+w*wt;return S.w(Lt,this)},_.subtract=function(w,M){return this.add(-1*w,M)},_.format=function(w){var M=this,E=this.$locale();if(!this.isValid())return E.invalidDate||L;var N=w||"YYYY-MM-DDTHH:mm:ssZ",j=S.z(this),pt=this.$H,wt=this.$m,Lt=this.$M,Pt=E.weekdays,Qt=E.months,Ut=E.meridiem,te=function(Q,de,Be,_t){return Q&&(Q[de]||Q(M,N))||Be[de].slice(0,_t)},_e=function(Q){return S.s(pt%12||12,Q,"0")},jt=Ut||function(Q,de,Be){var _t=Q<12?"AM":"PM";return Be?_t.toLowerCase():_t};return N.replace(W,function(Q,de){return de||function(Be){switch(Be){case"YY":return String(M.$y).slice(-2);case"YYYY":return S.s(M.$y,4,"0");case"M":return Lt+1;case"MM":return S.s(Lt+1,2,"0");case"MMM":return te(E.monthsShort,Lt,Qt,3);case"MMMM":return te(Qt,Lt);case"D":return M.$D;case"DD":return S.s(M.$D,2,"0");case"d":return String(M.$W);case"dd":return te(E.weekdaysMin,M.$W,Pt,2);case"ddd":return te(E.weekdaysShort,M.$W,Pt,3);case"dddd":return Pt[M.$W];case"H":return String(pt);case"HH":return S.s(pt,2,"0");case"h":return _e(1);case"hh":return _e(2);case"a":return jt(pt,wt,!0);case"A":return jt(pt,wt,!1);case"m":return String(wt);case"mm":return S.s(wt,2,"0");case"s":return String(M.$s);case"ss":return S.s(M.$s,2,"0");case"SSS":return S.s(M.$ms,3,"0");case"Z":return j}return null}(Q)||j.replace(":","")})},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(w,M,E){var N,j=this,pt=S.p(M),wt=rt(w),Lt=(wt.utcOffset()-this.utcOffset())*n,Pt=this-wt,Qt=function(){return S.m(j,wt)};switch(pt){case m:N=Qt()/12;break;case h:N=Qt();break;case g:N=Qt()/3;break;case f:N=(Pt-Lt)/6048e5;break;case c:N=(Pt-Lt)/864e5;break;case l:N=Pt/i;break;case a:N=Pt/n;break;case s:N=Pt/r;break;default:N=Pt}return E?N:S.a(N)},_.daysInMonth=function(){return this.endOf(h).$D},_.$locale=function(){return D[this.$L]},_.locale=function(w,M){if(!w)return this.$L;var E=this.clone(),N=dt(w,M,!0);return N&&(E.$L=N),E},_.clone=function(){return S.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},T}(),vt=yt.prototype;return rt.prototype=vt,[["$ms",o],["$s",s],["$m",a],["$H",l],["$W",c],["$M",h],["$y",m],["$D",x]].forEach(function(T){vt[T[1]]=function(_){return this.$g(_,T[0],T[1])}}),rt.extend=function(T,_){return T.$i||(T(_,yt,rt),T.$i=!0),rt},rt.locale=dt,rt.isDayjs=ft,rt.unix=function(T){return rt(1e3*T)},rt.en=D[Z],rt.Ls=D,rt.p={},rt})})(Fc);var c0=Fc.exports;const Xr=Ms(c0);class u0 extends wr{static get properties(){return{width:{type:Number},steps:{type:Array}}}constructor(){super(),this.width=0,this.steps=[],this.height=6,this.svgWidth=0,this._yearMarks=[],this._years=[],this._sliderTicks=[]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize()}updated(t){t.has("steps")&&(this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize())}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}groupDatesByYear(){const t=[];return this.steps.forEach(r=>{const n=Xr(r).year();let i=t.find(o=>o.year===n);i||(i={year:n,dates:[]},t.push(i)),i.dates.push(r)}),t}preprocessDates(){const t=[];this.steps.forEach(r=>{const n=Xr(r).year();let i=t.find(o=>o.year===n);i||(i={year:n,ratio:0,dates:[]},t.push(i)),i.dates.push({date:r,isYearMarker:i.dates.length===0})});for(let r of t)r.ratio=r.dates.length/this.steps.length;return t}get sliderTicks(){return this._sliderTicks}set sliderTicks(t){this._sliderTicks=t,this.requestUpdate()}calculateYearBars(){return this._years.flatMap((t,r)=>{const n=this.steps.indexOf(t.dates[0].date)/(this.steps.length-1)*this.width,i=this.steps.indexOf(t.dates[t.dates.length-1].date)/(this.steps.length-1)*this.width,o=Math.max(0,i-n-2),s=[];return s.push(hr`
            <rect
              key=${r}
              x=${n+2/2} // Add half the spacing to the start position
              y="0"
              width=${o}
              height="6"
              fill="#7596A2"
            ></rect>
        `),o>=30&&s.push(hr`
                <text
                  key=${`label-${r}`}
                  x=${n+16}
                  y="26"
                  fill="#555"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${t.year}
                </text>
            `),s})}calculateIndividualTicks(){return this._years.flatMap((t,r)=>{const n=this.steps.length,i=Math.max(1,Math.floor(n/this.width));return t.dates.filter((o,s)=>s%i===0).map((o,s)=>{const a=this.steps.indexOf(o.date)/(this.steps.length-1)*this.width,l=[];return l.push(hr`
                <line
                  key=${r}-${s}
                  x1=${a}
                  y1="0"
                  x2=${a}
                  y2=${o.isYearMarker?12:6}
                  stroke=${o.isYearMarker?"#222":"#7596A2"}
                  stroke-width="1"
                ></line>
              `),o.isYearMarker&&this.density>.03&&this.density<.5&&r%2==0&&l.push(hr`
                  <text
                    key=${`label-${r}`}
                    x=${a+16}
                    y="30"
                    fill="#555"
                    font-size="14"
                    text-anchor="middle"
                  >
                    ${t.year}
                  </text>
                `),l})})}get density(){return this.steps.length/this.width}calculateSliderTicks(){if(this.density<=.5)return this.calculateIndividualTicks();if(this.density>.5&&this.density<10)return this.calculateYearBars();if(this.density>=10)return this.calculateDecadeBars()}calculateDecadeBars(){const t=this._years.reduce((r,n)=>{const i=Math.floor(n.year/10)*10;return r[i]||(r[i]=[]),r[i].push(...n.dates),r},{});return Object.keys(t).flatMap((r,n)=>{const i=this.steps.indexOf(t[r][0].date)/(this.steps.length-1)*this.width,o=this.steps.indexOf(t[r][t[r].length-1].date)/(this.steps.length-1)*this.width,s=Math.max(0,o-i-2),a=[];return a.push(hr`
            <rect
              key=${`decade-${n}`}
              x=${i+2/2}
              y="0"
              width=${s}
              height="6"
              fill="#555"
            ></rect>
        `),s>=30&&a.push(hr`
                <text
                  key=${`decade-label-${n}`}
                  x=${i+18}
                  y="26"
                  fill="#333"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${r}
                </text>
            `),a})}get lines(){const t=this.numLines>this.width/2?this.width/2:this.numLines,r=this.width/(t-1);return Array.from({length:this.numLines},(n,i)=>i*r)}get numLines(){return this.steps?this.steps.length:0}get yearMarks(){return this._yearMarks}set yearMarks(t){this._yearMarks=t,this.requestUpdate()}get years(){return this._years}set years(t){this._years=t,this.requestUpdate()}calculateYearMarks(){this._years=this.preprocessDates(),this.lines.forEach((t,r)=>{Xr(this.steps[r]).year()})}isYearLine(t){return this._yearMarks.some(r=>Math.abs(r.position-t)<1)}render(){return Kn`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.sliderTicks}
        </svg>
      </div>
    `}}customElements.define("eox-sliderticks",u0);var qc={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(Cs,function(){return function(r,n,i){n.prototype.dayOfYear=function(o){var s=Math.round((i(this).startOf("day")-i(this).startOf("year"))/864e5)+1;return o==null?s:this.add(o-s,"day")}}})})(qc);var h0=qc.exports;const d0=Ms(h0);var Wc={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(Cs,function(){var r="day";return function(n,i,o){var s=function(c){return c.add(4-c.isoWeekday(),r)},a=i.prototype;a.isoWeekYear=function(){return s(this).year()},a.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),r);var f,h,g,m,x=s(this),L=(f=this.isoWeekYear(),h=this.$u,g=(h?o.utc:o)().year(f).startOf("year"),m=4-g.isoWeekday(),g.isoWeekday()>4&&(m+=7),g.add(m,r));return x.diff(L,"week")+1},a.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var l=a.startOf;a.startOf=function(c,f){var h=this.$utils(),g=!!h.u(f)||f;return h.p(c)==="isoweek"?g?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(c,f)}}})})(Wc);var p0=Wc.exports;const f0=Ms(p0);Xr.extend(d0);Xr.extend(f0);class g0 extends wr{static get properties(){return{controlProperty:{type:String,attribute:"control-property"},controlValues:{type:Array,attribute:"control-values"},for:{type:String},layer:{type:String},slider:{type:Boolean},_originalParams:{type:Object},disablePlay:{type:Boolean,attribute:"disable-play"},currentStep:{type:String,attribute:"current-step"},_animationInterval:{state:!0},_controlSource:{state:!0},_isAnimationPlaying:{state:!0},_newStepIndex:{state:!0},_eoxMap:{state:!0},_width:{state:!0},unstyled:{type:Boolean}}}constructor(){super(),this.controlValues=[],this._newStepIndex=0,this.unstyled=!1,this.disablePlay=!1,this.slider=!1,this.for="eox-map",this.layer="",this.controlProperty=void 0,this._eoxMap=void 0,this._width=300,window.addEventListener("resize",()=>{this._width=this.clientWidth})}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(t){t?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=t,this.requestUpdate()}setConfig(t){this.layer=t.layer??this.layer,this.controlProperty=t.controlProperty??this.controlProperty,this.controlValues=t.controlValues??this.controlValues,this.requestUpdate(),this._updateStep(0)}get currentStep(){return this.controlValues[this._newStepIndex]}set currentStep(t){const r=this.controlValues.findIndex(n=>n===t);r>-1?this._newStepIndex=r:console.error(`Unable to find step "${t}" in available times!`)}firstUpdated(){this.updateMap()}updated(t){t.has("for")&&this.updateMap()}updateMap(){const t=il(this.for);if(t){const r=t;this.eoxMap=r}}get eoxMap(){return this._eoxMap}set eoxMap(t){const r=this._eoxMap;this._eoxMap=t,this.requestUpdate("eoxMap",r)}_updateStep(t=1){var r;t&&(this._newStepIndex=this._newStepIndex+t,this._newStepIndex>this.controlValues.length-1&&(this._newStepIndex=0),this._newStepIndex<0&&(this._newStepIndex=this.controlValues.length-1),this.layer&&this.for&&((r=this._controlSource)==null||r.updateParams({[this.controlProperty]:this.controlValues[this._newStepIndex]})),this.requestUpdate(),this.dispatchEvent(new CustomEvent("stepchange",{detail:{currentStep:this.currentStep}})))}getFlatLayersArray(t){const r=[];r.push(...t);let n=r.filter(i=>i instanceof ui);for(;n.length;){const i=[];for(let o=0,s=n.length;o<s;o++){const a=n[o].getLayers().getArray();r.push(...a),i.push(...a.filter(l=>l instanceof ui))}n=i}return r}render(){if(this.layer&&this.for){const t=il(this.for).map;t.once("loadend",()=>{if(!this._originalParams){const r=this.getFlatLayersArray(t.getLayers().getArray()).find(n=>n.get("id")===this.layer);this._controlSource=r.getSource(),this._originalParams=this._controlSource.getParams()}})}return Kn`
      <style>
        ${s0}
        ${!this.unstyled&&l0}
      </style>
      <main>
        <div id="controls" part="controls">
          <button
            part="previous"
            class="icon previous"
            @click="${()=>this.previous()}"
          >
            <
          </button>
          <span part="current">${this.controlValues[this._newStepIndex]}</span>
          <button part="next" class="icon next" @click="${()=>this.next()}">
            >
          </button>
        </div>
        <div>
          ${this.disablePlay?Ht:Kn`
                <button
                  part="play"
                  class="icon-text ${this._isAnimationPlaying?"pause":"play"}"
                  @click="${()=>this.playAnimation(!this._isAnimationPlaying)}"
                >
                  ${this._isAnimationPlaying?"Pause":"Play"}
                </button>
              `}
          ${this.slider?Kn`
                <div class="slider-col">
                  <tc-range-slider
                    data="${this.controlValues}"
                    part="slider"
                    value="${this.controlValues[this._newStepIndex]}"
                    style="display: inline-block;"
                    @change="${t=>this._updateStep(this.controlValues.findIndex(r=>r===t.detail.value)-this._newStepIndex)}"
                  ></tc-range-slider>

                  <eox-sliderticks
                    .width="${this._width}"
                    .steps="${this.controlValues}"
                  ></eox-sliderticks>
                </div>
              `:""}
        </div>
      </main>
    `}}customElements.define("eox-timecontrol",g0);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m0=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y0={attribute:!0,type:String,converter:hh,reflect:!1,hasChanged:dh},v0=(e=y0,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.P(s,void 0,e),a}}}if(n==="setter"){const{name:s}=r;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+n)};function Zt(e){return(t,r)=>typeof r=="object"?v0(e,t,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b0=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x0(e,t){return(r,n,i)=>{const o=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(e))??null};return b0(r,n,{get(){return o(this)}})}}function Jn(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function w0(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Zc(e){let t,r,n;e.length!==2?(t=Jn,r=(a,l)=>Jn(e(a),l),n=(a,l)=>e(a)-l):(t=e===Jn||e===w0?e:$0,r=e,n=e);function i(a,l,c=0,f=a.length){if(c<f){if(t(l,l)!==0)return f;do{const h=c+f>>>1;r(a[h],l)<0?c=h+1:f=h}while(c<f)}return c}function o(a,l,c=0,f=a.length){if(c<f){if(t(l,l)!==0)return f;do{const h=c+f>>>1;r(a[h],l)<=0?c=h+1:f=h}while(c<f)}return c}function s(a,l,c=0,f=a.length){const h=i(a,l,c,f-1);return h>c&&n(a[h-1],l)>-n(a[h],l)?h-1:h}return{left:i,center:s,right:o}}function $0(){return 0}function _0(e){return e===null?NaN:+e}const E0=Zc(Jn),ks=E0.right;Zc(_0).center;class ol extends Map{constructor(t,r=C0){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:r}}),t!=null)for(const[n,i]of t)this.set(n,i)}get(t){return super.get(sl(this,t))}has(t){return super.has(sl(this,t))}set(t,r){return super.set(A0(this,t),r)}delete(t){return super.delete(S0(this,t))}}function sl({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):r}function A0({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):(e.set(n,r),r)}function S0({_intern:e,_key:t},r){const n=t(r);return e.has(n)&&(r=e.get(n),e.delete(n)),r}function C0(e){return e!==null&&typeof e=="object"?e.valueOf():e}const M0=Math.sqrt(50),k0=Math.sqrt(10),L0=Math.sqrt(2);function hi(e,t,r){const n=(t-e)/Math.max(0,r),i=Math.floor(Math.log10(n)),o=n/Math.pow(10,i),s=o>=M0?10:o>=k0?5:o>=L0?2:1;let a,l,c;return i<0?(c=Math.pow(10,-i)/s,a=Math.round(e*c),l=Math.round(t*c),a/c<e&&++a,l/c>t&&--l,c=-c):(c=Math.pow(10,i)*s,a=Math.round(e/c),l=Math.round(t/c),a*c<e&&++a,l*c>t&&--l),l<a&&.5<=r&&r<2?hi(e,t,r*2):[a,l,c]}function T0(e,t,r){if(t=+t,e=+e,r=+r,!(r>0))return[];if(e===t)return[e];const n=t<e,[i,o,s]=n?hi(t,e,r):hi(e,t,r);if(!(o>=i))return[];const a=o-i+1,l=new Array(a);if(n)if(s<0)for(let c=0;c<a;++c)l[c]=(o-c)/-s;else for(let c=0;c<a;++c)l[c]=(o-c)*s;else if(s<0)for(let c=0;c<a;++c)l[c]=(i+c)/-s;else for(let c=0;c<a;++c)l[c]=(i+c)*s;return l}function is(e,t,r){return t=+t,e=+e,r=+r,hi(e,t,r)[2]}function O0(e,t,r){t=+t,e=+e,r=+r;const n=t<e,i=n?is(t,e,r):is(e,t,r);return(n?-1:1)*(i<0?1/-i:i)}function Ai(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function D0(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const al=Symbol("implicit");function Yc(){var e=new ol,t=[],r=[],n=al;function i(o){let s=e.get(o);if(s===void 0){if(n!==al)return n;e.set(o,s=t.push(o)-1)}return r[s%r.length]}return i.domain=function(o){if(!arguments.length)return t.slice();t=[],e=new ol;for(const s of o)e.has(s)||e.set(s,t.push(s)-1);return i},i.range=function(o){return arguments.length?(r=Array.from(o),i):r.slice()},i.unknown=function(o){return arguments.length?(n=o,i):n},i.copy=function(){return Yc(t,r).unknown(n)},Ai.apply(i,arguments),i}function pn(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function Si(e,t){var r=Object.create(e.prototype);for(var n in t)r[n]=t[n];return r}function or(){}var sn=.7,di=1/sn,$r="\\s*([+-]?\\d+)\\s*",an="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xe="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",P0=/^#([0-9a-f]{3,8})$/,N0=new RegExp(`^rgb\\(${$r},${$r},${$r}\\)$`),R0=new RegExp(`^rgb\\(${xe},${xe},${xe}\\)$`),H0=new RegExp(`^rgba\\(${$r},${$r},${$r},${an}\\)$`),I0=new RegExp(`^rgba\\(${xe},${xe},${xe},${an}\\)$`),V0=new RegExp(`^hsl\\(${an},${xe},${xe}\\)$`),U0=new RegExp(`^hsla\\(${an},${xe},${xe},${an}\\)$`),ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};pn(or,ln,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:cl,formatHex:cl,formatHex8:B0,formatHsl:z0,formatRgb:ul,toString:ul});function cl(){return this.rgb().formatHex()}function B0(){return this.rgb().formatHex8()}function z0(){return Gc(this).formatHsl()}function ul(){return this.rgb().formatRgb()}function ln(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=P0.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?hl(t):r===3?new Gt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?Pn(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?Pn(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=N0.exec(e))?new Gt(t[1],t[2],t[3],1):(t=R0.exec(e))?new Gt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=H0.exec(e))?Pn(t[1],t[2],t[3],t[4]):(t=I0.exec(e))?Pn(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=V0.exec(e))?fl(t[1],t[2]/100,t[3]/100,1):(t=U0.exec(e))?fl(t[1],t[2]/100,t[3]/100,t[4]):ll.hasOwnProperty(e)?hl(ll[e]):e==="transparent"?new Gt(NaN,NaN,NaN,0):null}function hl(e){return new Gt(e>>16&255,e>>8&255,e&255,1)}function Pn(e,t,r,n){return n<=0&&(e=t=r=NaN),new Gt(e,t,r,n)}function Xc(e){return e instanceof or||(e=ln(e)),e?(e=e.rgb(),new Gt(e.r,e.g,e.b,e.opacity)):new Gt}function os(e,t,r,n){return arguments.length===1?Xc(e):new Gt(e,t,r,n??1)}function Gt(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}pn(Gt,os,Si(or,{brighter(e){return e=e==null?di:Math.pow(di,e),new Gt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?sn:Math.pow(sn,e),new Gt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Gt(er(this.r),er(this.g),er(this.b),pi(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:dl,formatHex:dl,formatHex8:j0,formatRgb:pl,toString:pl}));function dl(){return`#${Qe(this.r)}${Qe(this.g)}${Qe(this.b)}`}function j0(){return`#${Qe(this.r)}${Qe(this.g)}${Qe(this.b)}${Qe((isNaN(this.opacity)?1:this.opacity)*255)}`}function pl(){const e=pi(this.opacity);return`${e===1?"rgb(":"rgba("}${er(this.r)}, ${er(this.g)}, ${er(this.b)}${e===1?")":`, ${e})`}`}function pi(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function er(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Qe(e){return e=er(e),(e<16?"0":"")+e.toString(16)}function fl(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new ye(e,t,r,n)}function Gc(e){if(e instanceof ye)return new ye(e.h,e.s,e.l,e.opacity);if(e instanceof or||(e=ln(e)),!e)return new ye;if(e instanceof ye)return e;e=e.rgb();var t=e.r/255,r=e.g/255,n=e.b/255,i=Math.min(t,r,n),o=Math.max(t,r,n),s=NaN,a=o-i,l=(o+i)/2;return a?(t===o?s=(r-n)/a+(r<n)*6:r===o?s=(n-t)/a+2:s=(t-r)/a+4,a/=l<.5?o+i:2-o-i,s*=60):a=l>0&&l<1?0:s,new ye(s,a,l,e.opacity)}function F0(e,t,r,n){return arguments.length===1?Gc(e):new ye(e,t,r,n??1)}function ye(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}pn(ye,F0,Si(or,{brighter(e){return e=e==null?di:Math.pow(di,e),new ye(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?sn:Math.pow(sn,e),new ye(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,i=2*r-n;return new Gt(vo(e>=240?e-240:e+120,i,n),vo(e,i,n),vo(e<120?e+240:e-120,i,n),this.opacity)},clamp(){return new ye(gl(this.h),Nn(this.s),Nn(this.l),pi(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=pi(this.opacity);return`${e===1?"hsl(":"hsla("}${gl(this.h)}, ${Nn(this.s)*100}%, ${Nn(this.l)*100}%${e===1?")":`, ${e})`}`}}));function gl(e){return e=(e||0)%360,e<0?e+360:e}function Nn(e){return Math.max(0,Math.min(1,e||0))}function vo(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}const q0=Math.PI/180,W0=180/Math.PI,fi=18,Kc=.96422,Jc=1,Qc=.82521,tu=4/29,_r=6/29,eu=3*_r*_r,Z0=_r*_r*_r;function ru(e){if(e instanceof we)return new we(e.l,e.a,e.b,e.opacity);if(e instanceof Ce)return nu(e);e instanceof Gt||(e=Xc(e));var t=$o(e.r),r=$o(e.g),n=$o(e.b),i=bo((.2225045*t+.7168786*r+.0606169*n)/Jc),o,s;return t===r&&r===n?o=s=i:(o=bo((.4360747*t+.3850649*r+.1430804*n)/Kc),s=bo((.0139322*t+.0971045*r+.7141733*n)/Qc)),new we(116*i-16,500*(o-i),200*(i-s),e.opacity)}function Y0(e,t,r,n){return arguments.length===1?ru(e):new we(e,t,r,n??1)}function we(e,t,r,n){this.l=+e,this.a=+t,this.b=+r,this.opacity=+n}pn(we,Y0,Si(or,{brighter(e){return new we(this.l+fi*(e??1),this.a,this.b,this.opacity)},darker(e){return new we(this.l-fi*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,r=isNaN(this.b)?e:e-this.b/200;return t=Kc*xo(t),e=Jc*xo(e),r=Qc*xo(r),new Gt(wo(3.1338561*t-1.6168667*e-.4906146*r),wo(-.9787684*t+1.9161415*e+.033454*r),wo(.0719453*t-.2289914*e+1.4052427*r),this.opacity)}}));function bo(e){return e>Z0?Math.pow(e,1/3):e/eu+tu}function xo(e){return e>_r?e*e*e:eu*(e-tu)}function wo(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function $o(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function X0(e){if(e instanceof Ce)return new Ce(e.h,e.c,e.l,e.opacity);if(e instanceof we||(e=ru(e)),e.a===0&&e.b===0)return new Ce(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*W0;return new Ce(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function ss(e,t,r,n){return arguments.length===1?X0(e):new Ce(e,t,r,n??1)}function Ce(e,t,r,n){this.h=+e,this.c=+t,this.l=+r,this.opacity=+n}function nu(e){if(isNaN(e.h))return new we(e.l,0,0,e.opacity);var t=e.h*q0;return new we(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}pn(Ce,ss,Si(or,{brighter(e){return new Ce(this.h,this.c,this.l+fi*(e??1),this.opacity)},darker(e){return new Ce(this.h,this.c,this.l-fi*(e??1),this.opacity)},rgb(){return nu(this).rgb()}}));const Ci=e=>()=>e;function iu(e,t){return function(r){return e+r*t}}function G0(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(n){return Math.pow(e+n*t,r)}}function K0(e,t){var r=t-e;return r?iu(e,r>180||r<-180?r-360*Math.round(r/360):r):Ci(isNaN(e)?t:e)}function J0(e){return(e=+e)==1?Gr:function(t,r){return r-t?G0(t,r,e):Ci(isNaN(t)?r:t)}}function Gr(e,t){var r=t-e;return r?iu(e,r):Ci(isNaN(e)?t:e)}const ml=function e(t){var r=J0(t);function n(i,o){var s=r((i=os(i)).r,(o=os(o)).r),a=r(i.g,o.g),l=r(i.b,o.b),c=Gr(i.opacity,o.opacity);return function(f){return i.r=s(f),i.g=a(f),i.b=l(f),i.opacity=c(f),i+""}}return n.gamma=e,n}(1);function Q0(e,t){t||(t=[]);var r=e?Math.min(t.length,e.length):0,n=t.slice(),i;return function(o){for(i=0;i<r;++i)n[i]=e[i]*(1-o)+t[i]*o;return n}}function tg(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function eg(e,t){var r=t?t.length:0,n=e?Math.min(r,e.length):0,i=new Array(n),o=new Array(r),s;for(s=0;s<n;++s)i[s]=fn(e[s],t[s]);for(;s<r;++s)o[s]=t[s];return function(a){for(s=0;s<n;++s)o[s]=i[s](a);return o}}function rg(e,t){var r=new Date;return e=+e,t=+t,function(n){return r.setTime(e*(1-n)+t*n),r}}function gi(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}function ng(e,t){var r={},n={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?r[i]=fn(e[i],t[i]):n[i]=t[i];return function(o){for(i in r)n[i]=r[i](o);return n}}var as=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,_o=new RegExp(as.source,"g");function ig(e){return function(){return e}}function og(e){return function(t){return e(t)+""}}function sg(e,t){var r=as.lastIndex=_o.lastIndex=0,n,i,o,s=-1,a=[],l=[];for(e=e+"",t=t+"";(n=as.exec(e))&&(i=_o.exec(t));)(o=i.index)>r&&(o=t.slice(r,o),a[s]?a[s]+=o:a[++s]=o),(n=n[0])===(i=i[0])?a[s]?a[s]+=i:a[++s]=i:(a[++s]=null,l.push({i:s,x:gi(n,i)})),r=_o.lastIndex;return r<t.length&&(o=t.slice(r),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?og(l[0].x):ig(t):(t=l.length,function(c){for(var f=0,h;f<t;++f)a[(h=l[f]).i]=h.x(c);return a.join("")})}function fn(e,t){var r=typeof t,n;return t==null||r==="boolean"?Ci(t):(r==="number"?gi:r==="string"?(n=ln(t))?(t=n,ml):sg:t instanceof ln?ml:t instanceof Date?rg:tg(t)?Q0:Array.isArray(t)?eg:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?ng:gi)(e,t)}function ou(e,t){return e=+e,t=+t,function(r){return Math.round(e*(1-r)+t*r)}}function ag(e){return function(t,r){var n=e((t=ss(t)).h,(r=ss(r)).h),i=Gr(t.c,r.c),o=Gr(t.l,r.l),s=Gr(t.opacity,r.opacity);return function(a){return t.h=n(a),t.c=i(a),t.l=o(a),t.opacity=s(a),t+""}}}const su=ag(K0);function lg(e,t){t===void 0&&(t=e,e=fn);for(var r=0,n=t.length-1,i=t[0],o=new Array(n<0?0:n);r<n;)o[r]=e(i,i=t[++r]);return function(s){var a=Math.max(0,Math.min(n-1,Math.floor(s*=n)));return o[a](s-a)}}function cg(e){return function(){return e}}function ug(e){return+e}var yl=[0,1];function Ue(e){return e}function ls(e,t){return(t-=e=+e)?function(r){return(r-e)/t}:cg(isNaN(t)?NaN:.5)}function hg(e,t){var r;return e>t&&(r=e,e=t,t=r),function(n){return Math.max(e,Math.min(t,n))}}function dg(e,t,r){var n=e[0],i=e[1],o=t[0],s=t[1];return i<n?(n=ls(i,n),o=r(s,o)):(n=ls(n,i),o=r(o,s)),function(a){return o(n(a))}}function pg(e,t,r){var n=Math.min(e.length,t.length)-1,i=new Array(n),o=new Array(n),s=-1;for(e[n]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<n;)i[s]=ls(e[s],e[s+1]),o[s]=r(t[s],t[s+1]);return function(a){var l=ks(e,a,1,n)-1;return o[l](i[l](a))}}function fg(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function gg(){var e=yl,t=yl,r=fn,n,i,o,s=Ue,a,l,c;function f(){var g=Math.min(e.length,t.length);return s!==Ue&&(s=hg(e[0],e[g-1])),a=g>2?pg:dg,l=c=null,h}function h(g){return g==null||isNaN(g=+g)?o:(l||(l=a(e.map(n),t,r)))(n(s(g)))}return h.invert=function(g){return s(i((c||(c=a(t,e.map(n),gi)))(g)))},h.domain=function(g){return arguments.length?(e=Array.from(g,ug),f()):e.slice()},h.range=function(g){return arguments.length?(t=Array.from(g),f()):t.slice()},h.rangeRound=function(g){return t=Array.from(g),r=ou,f()},h.clamp=function(g){return arguments.length?(s=g?!0:Ue,f()):s!==Ue},h.interpolate=function(g){return arguments.length?(r=g,f()):r},h.unknown=function(g){return arguments.length?(o=g,h):o},function(g,m){return n=g,i=m,f()}}function mg(){return gg()(Ue,Ue)}function yg(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function mi(e,t){if((r=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var r,n=e.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+e.slice(r+1)]}function kr(e){return e=mi(Math.abs(e)),e?e[1]:NaN}function vg(e,t){return function(r,n){for(var i=r.length,o=[],s=0,a=e[0],l=0;i>0&&a>0&&(l+a+1>n&&(a=Math.max(1,n-l)),o.push(r.substring(i-=a,i+a)),!((l+=a+1)>n));)a=e[s=(s+1)%e.length];return o.reverse().join(t)}}function bg(e){return function(t){return t.replace(/[0-9]/g,function(r){return e[+r]})}}var xg=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function yi(e){if(!(t=xg.exec(e)))throw new Error("invalid format: "+e);var t;return new Ls({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}yi.prototype=Ls.prototype;function Ls(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Ls.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function wg(e){t:for(var t=e.length,r=1,n=-1,i;r<t;++r)switch(e[r]){case".":n=i=r;break;case"0":n===0&&(n=r),i=r;break;default:if(!+e[r])break t;n>0&&(n=0);break}return n>0?e.slice(0,n)+e.slice(i+1):e}var au;function $g(e,t){var r=mi(e,t);if(!r)return e+"";var n=r[0],i=r[1],o=i-(au=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,s=n.length;return o===s?n:o>s?n+new Array(o-s+1).join("0"):o>0?n.slice(0,o)+"."+n.slice(o):"0."+new Array(1-o).join("0")+mi(e,Math.max(0,t+o-1))[0]}function vl(e,t){var r=mi(e,t);if(!r)return e+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}const bl={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:yg,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>vl(e*100,t),r:vl,s:$g,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function xl(e){return e}var wl=Array.prototype.map,$l=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function _g(e){var t=e.grouping===void 0||e.thousands===void 0?xl:vg(wl.call(e.grouping,Number),e.thousands+""),r=e.currency===void 0?"":e.currency[0]+"",n=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",o=e.numerals===void 0?xl:bg(wl.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",a=e.minus===void 0?"−":e.minus+"",l=e.nan===void 0?"NaN":e.nan+"";function c(h){h=yi(h);var g=h.fill,m=h.align,x=h.sign,L=h.symbol,F=h.zero,W=h.width,mt=h.comma,J=h.precision,Dt=h.trim,Z=h.type;Z==="n"?(mt=!0,Z="g"):bl[Z]||(J===void 0&&(J=12),Dt=!0,Z="g"),(F||g==="0"&&m==="=")&&(F=!0,g="0",m="=");var D=L==="$"?r:L==="#"&&/[boxX]/.test(Z)?"0"+Z.toLowerCase():"",lt=L==="$"?n:/[%p]/.test(Z)?s:"",ft=bl[Z],dt=/[defgprs%]/.test(Z);J=J===void 0?6:/[gprs]/.test(Z)?Math.max(1,Math.min(21,J)):Math.max(0,Math.min(20,J));function rt(S){var yt=D,vt=lt,T,_,w;if(Z==="c")vt=ft(S)+vt,S="";else{S=+S;var M=S<0||1/S<0;if(S=isNaN(S)?l:ft(Math.abs(S),J),Dt&&(S=wg(S)),M&&+S==0&&x!=="+"&&(M=!1),yt=(M?x==="("?x:a:x==="-"||x==="("?"":x)+yt,vt=(Z==="s"?$l[8+au/3]:"")+vt+(M&&x==="("?")":""),dt){for(T=-1,_=S.length;++T<_;)if(w=S.charCodeAt(T),48>w||w>57){vt=(w===46?i+S.slice(T+1):S.slice(T))+vt,S=S.slice(0,T);break}}}mt&&!F&&(S=t(S,1/0));var E=yt.length+S.length+vt.length,N=E<W?new Array(W-E+1).join(g):"";switch(mt&&F&&(S=t(N+S,N.length?W-vt.length:1/0),N=""),m){case"<":S=yt+S+vt+N;break;case"=":S=yt+N+S+vt;break;case"^":S=N.slice(0,E=N.length>>1)+yt+S+vt+N.slice(E);break;default:S=N+yt+S+vt;break}return o(S)}return rt.toString=function(){return h+""},rt}function f(h,g){var m=c((h=yi(h),h.type="f",h)),x=Math.max(-8,Math.min(8,Math.floor(kr(g)/3)))*3,L=Math.pow(10,-x),F=$l[8+x/3];return function(W){return m(L*W)+F}}return{format:c,formatPrefix:f}}var Rn,Ts,lu;Eg({thousands:",",grouping:[3],currency:["$",""]});function Eg(e){return Rn=_g(e),Ts=Rn.format,lu=Rn.formatPrefix,Rn}function Ag(e){return Math.max(0,-kr(Math.abs(e)))}function Sg(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(kr(t)/3)))*3-kr(Math.abs(e)))}function Cg(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,kr(t)-kr(e))+1}function Mg(e,t,r,n){var i=O0(e,t,r),o;switch(n=yi(n??",f"),n.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return n.precision==null&&!isNaN(o=Sg(i,s))&&(n.precision=o),lu(n,s)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(o=Cg(i,Math.max(Math.abs(e),Math.abs(t))))&&(n.precision=o-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(o=Ag(i))&&(n.precision=o-(n.type==="%")*2);break}}return Ts(n)}function Os(e){var t=e.domain;return e.ticks=function(r){var n=t();return T0(n[0],n[n.length-1],r??10)},e.tickFormat=function(r,n){var i=t();return Mg(i[0],i[i.length-1],r??10,n)},e.nice=function(r){r==null&&(r=10);var n=t(),i=0,o=n.length-1,s=n[i],a=n[o],l,c,f=10;for(a<s&&(c=s,s=a,a=c,c=i,i=o,o=c);f-- >0;){if(c=is(s,a,r),c===l)return n[i]=s,n[o]=a,t(n);if(c>0)s=Math.floor(s/c)*c,a=Math.ceil(a/c)*c;else if(c<0)s=Math.ceil(s*c)/c,a=Math.floor(a*c)/c;else break;l=c}return e},e}function vi(){var e=mg();return e.copy=function(){return fg(e,vi())},Ai.apply(e,arguments),Os(e)}function cu(){var e=0,t=1,r=1,n=[.5],i=[0,1],o;function s(l){return l!=null&&l<=l?i[ks(n,l,0,r)]:o}function a(){var l=-1;for(n=new Array(r);++l<r;)n[l]=((l+1)*t-(l-r)*e)/(r+1);return s}return s.domain=function(l){return arguments.length?([e,t]=l,e=+e,t=+t,a()):[e,t]},s.range=function(l){return arguments.length?(r=(i=Array.from(l)).length-1,a()):i.slice()},s.invertExtent=function(l){var c=i.indexOf(l);return c<0?[NaN,NaN]:c<1?[e,n[0]]:c>=r?[n[r-1],t]:[n[c-1],n[c]]},s.unknown=function(l){return arguments.length&&(o=l),s},s.thresholds=function(){return n.slice()},s.copy=function(){return cu().domain([e,t]).range(i).unknown(o)},Ai.apply(Os(s),arguments)}function uu(){var e=[.5],t=[0,1],r,n=1;function i(o){return o!=null&&o<=o?t[ks(e,o,0,n)]:r}return i.domain=function(o){return arguments.length?(e=Array.from(o),n=Math.min(e.length,t.length-1),i):e.slice()},i.range=function(o){return arguments.length?(t=Array.from(o),n=Math.min(e.length,t.length-1),i):t.slice()},i.invertExtent=function(o){var s=t.indexOf(o);return[e[s-1],e[s]]},i.unknown=function(o){return arguments.length?(r=o,i):r},i.copy=function(){return uu().domain(e).range(t).unknown(r)},Ai.apply(i,arguments)}function kg(){var e=0,t=1,r,n,i,o,s=Ue,a=!1,l;function c(h){return h==null||isNaN(h=+h)?l:s(i===0?.5:(h=(o(h)-r)*i,a?Math.max(0,Math.min(1,h)):h))}c.domain=function(h){return arguments.length?([e,t]=h,r=o(e=+e),n=o(t=+t),i=r===n?0:1/(n-r),c):[e,t]},c.clamp=function(h){return arguments.length?(a=!!h,c):a},c.interpolator=function(h){return arguments.length?(s=h,c):s};function f(h){return function(g){var m,x;return arguments.length?([m,x]=g,s=h(m,x),c):[s(0),s(1)]}}return c.range=f(fn),c.rangeRound=f(ou),c.unknown=function(h){return arguments.length?(l=h,c):l},function(h){return o=h,r=h(e),n=h(t),i=r===n?0:1/(n-r),c}}function Lg(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function hu(){var e=Os(kg()(Ue));return e.copy=function(){return Lg(e,hu())},D0.apply(e,arguments)}class Tg{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:r,range:n}=this.cle;this.colorScale=t?hu(t).domain(r):vi().range(n).domain(r).interpolate(su)}setDiscreteColorScale(){this.colorScale=cu().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=uu().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=Yc().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eo=mh(class extends yh{constructor(e){var t;if(super(e),e.type!==vh.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return ph}});class Og{constructor(t){this.cle=t}render(){const t=this.cle.titleText?Cn`<p class="legend-title">${this.cle.titleText}</p>`:"",r={hidden:this.cle.scaleType==="categorical"},n={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return Cn`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${Eo(r)}
        width=${this.cle.width}
        height=${this.cle.height}
      >
        <!-- discrete and threshold -->
        <g class="rects">${this.renderDiscreteThreshold()}</g>
        <!-- continuous -->
        ${this.renderContinuous()}
        <!-- axis ticks -->
        ${this.renderAxis()}
      </svg>
      <ul class=${Eo(n)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:r,domain:n}=this.cle,i={"legend-item":!0,line:t==="line",circle:t==="circle"};return Cn`${n.map(o=>Cn`<li
          class=${Eo(i)}
          style="--color:${r(o)}"
        >
          ${o}
        </li>`)}`}renderContinuous(){var h;if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:r,marginLeft:n,marginRight:i,tickSize:o,width:s,range:a}=this.cle,l=this.cle.marginBottom+o,c=this.cle.height+o,f=((h=t.interpolator)==null?void 0:h.call(t))||lg(su,a);return Dr`<image
      x=${n}
      y=${r}
      width=${s-i-n}
      height=${c-r-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(f).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:r,marginLeft:n,colorScale:i,xScale:o}=this.cle,s=this.cle.height+t,a=this.cle.marginBottom+t,l=i.range(),c=h=>i.invertExtent(h).map(o)[0]||n,f=h=>{let[g,m]=i.invertExtent(h).map(o);return g=g||0,m=m||o.range()[1],m-g};return Dr`${l.map(h=>Dr`<rect x=${c(h)} y=${r} width=${f(h)} height=${s-r-a} fill=${h}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:r,tickFormat:n,tickFormatter:i,tickValues:o,xScale:s,marginTop:a}=this.cle,l=this.cle.height+r,c=this.cle.marginBottom+r,f=o!=null&&o.length?o:s.ticks.apply(s,[t,n]),h=Math.max(r,0)+3,g=()=>f.map(m=>Dr`<g class="tick" transform='translate(${s(m)},0)'>
      <line stroke="currentColor" y2="${r}" y1="${a+c-l}"></line>
      <text fill="currentColor" y="${h}" dy="0.71em">${i(m)}</text>
      </g>`);return Dr`<g
      class="x-axis"
      transform="translate(0, ${l-c})"
      text-anchor="middle"
    >${g()}</g>`}getColorRamp(t,r=256){const n=document.createElement("canvas");n.setAttribute("height","1"),n.setAttribute("width",`${r}`);const i=n.getContext("2d");for(let o=0;o<r;o++)i.fillStyle=t(o/(r-1)),i.fillRect(o,0,1,1);return n}}const Dg=325,Pg=32,Ng=6,Rg=12,Hg=16,Ig=12,du=5,Vg=6,pu=".1f",Ug=[0,1],Bg=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],zg="Color Legend Element",jg="circle",Fg="continuous",qg=["domain","range","interpolator","scaleType"],Wg=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class Zg{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:r,width:n,marginRight:i}=this.cle;switch(t){case"continuous":this.xScale=vi().domain(this.cle.domain).range([r,n-i]);break;case"discrete":case"threshold":this.xScale=vi().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([r,n-i]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,r,n;if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[i,o]=this.xScale.domain();this.cle.tickValues=[i,...((r=(t=this.cle.colorScale)==null?void 0:t.thresholds)==null?void 0:r.call(t))||this.cle.colorScale.domain(),o]}typeof this.cle.tickFormatter!="function"&&((n=this.cle.tickFormat)!=null&&n.length?this.cle.tickFormatter=Ts(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||du,this.cle.tickFormat||pu))}}const Yg=fh`
  :host {
    --cle-font-family: sans-serif;
    --cle-font-family-title: var(--cle-font-family);
    --cle-font-size: 0.75rem;
    --cle-font-size-title: 0.875rem;
    --cle-letter-spacing: 0.3px;
    --cle-letter-spacing-title: 0.25px;
    --cle-font-weight: 400;
    --cle-font-weight-title: 500;
    --cle-color: currentColor;
    --cle-background: #fff;
    --cle-padding: 0.375rem;
    --cle-border: none;
    --cle-border-radius: 0;
    --cle-box-sizing: content-box;
    --cle-columns: 2;
    --cle-column-width: auto;
    --cle-item-margin: 0.375rem 0.75rem 0 0;
    --cle-line-width: 24px;
    --cle-line-height: 2px;
    --cle-swatch-size: 10px;
    --cle-swatch-width: var(--cle-swatch-size);
    --cle-swatch-height: var(--cle-swatch-size);
    --cle-swatch-margin: 0 0.5rem 0 0;
  }

  :host([hidden]),
  .hidden {
    display: none !important;
  }

  div.cle-container {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    font-weight: var(--cle-font-weight);
    letter-spacing: var(--cle-letter-spacing);
    color: var(--cle-color);
    background: var(--cle-background);
    display: inline-block;
    padding: var(--cle-padding);
    border: var(--cle-border);
    border-radius: var(--cle-border-radius);
    box-sizing: var(--cle-box-sizing);
  }

  svg {
    display: block;
    overflow: visible;
  }

  svg text {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    fill: var(--cle-color);
  }

  p.legend-title {
    margin: 0;
    font-family: var(--cle-font-family-title);
    font-size: var(--cle-font-size-title);
    font-weight: var(--cle-font-weight-title);
    letter-spacing: var(--cle-letter-spacing-title);
  }

  ul.categorical-container {
    padding: 0;
    margin: 0;
    column-count: var(--cle-columns);
    column-width: var(--cle-column-width);
  }

  .legend-item {
    display: inline-flex;
    align-items: center;
    margin: var(--cle-item-margin);
  }

  .legend-item::before {
    content: "";
    width: var(--cle-swatch-width);
    height: var(--cle-swatch-height);
    margin: var(--cle-swatch-margin);
    background: var(--color);
  }

  .legend-item.line::before {
    width: var(--cle-line-width);
    height: var(--cle-line-height);
  }

  .legend-item.circle::before {
    border-radius: 50%;
  }
`;var Vt=function(e,t,r,n){var i=arguments.length,o=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o};let kt=class extends gh{constructor(){super(...arguments),this.titleText=zg,this.width=Dg,this.height=Pg,this.marginTop=Ng,this.marginRight=Rg,this.marginBottom=Hg,this.marginLeft=Ig,this.scaleType=Fg,this.domain=Ug,this.range=Bg,this.markType=jg,this.ticks=du,this.tickFormat=pu,this.tickSize=Vg,this.colorScaleSetter=new Tg(this),this.axisTickSetter=new Zg(this),this.renderer=new Og(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const r=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",r)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const r=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",r)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){qg.some(r=>t.has(r))&&this.colorScaleSetter.setColorScale(),Wg.some(r=>t.has(r))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};kt.styles=[Yg];Vt([Zt({type:String})],kt.prototype,"titleText",void 0);Vt([Zt({type:Number})],kt.prototype,"width",void 0);Vt([Zt({type:Number})],kt.prototype,"height",void 0);Vt([Zt({type:Number})],kt.prototype,"marginTop",void 0);Vt([Zt({type:Number})],kt.prototype,"marginRight",void 0);Vt([Zt({type:Number})],kt.prototype,"marginBottom",void 0);Vt([Zt({type:Number})],kt.prototype,"marginLeft",void 0);Vt([Zt({type:String})],kt.prototype,"scaleType",void 0);Vt([Zt({type:Array})],kt.prototype,"domain",void 0);Vt([Zt({type:Array})],kt.prototype,"range",void 0);Vt([Zt({type:String})],kt.prototype,"markType",void 0);Vt([Zt({type:Number})],kt.prototype,"ticks",void 0);Vt([Zt({type:String})],kt.prototype,"tickFormat",void 0);Vt([Zt({type:Number})],kt.prototype,"tickSize",void 0);Vt([Zt({type:Array})],kt.prototype,"tickValues",void 0);Vt([x0("svg")],kt.prototype,"svg",void 0);Vt([Zt({attribute:!1})],kt.prototype,"interpolator",null);Vt([Zt({attribute:!1})],kt.prototype,"tickFormatter",null);kt=Vt([m0("color-legend")],kt);const Xg={class:"d-flex flex-column fill-height overflow-auto"},Gg=["for"],cm={__name:"EodashLayerControl",props:{map:{type:String,default:"first"}},setup(e){const t=e,r=Eh(()=>{const{selectedCompareStac:c,selectedStac:f}=wh($h());return t.map==="second"?na.value!==null&&c.value!==null:ia.value!==null&&f.value!==null}),n=t.map==="second"?bh:xh,i=t.map==="second"?na:ia,o=Ah(null),s=async c=>{var L;const{layer:f,datetime:h}=c.detail,g=await _h(n,f);let m=[];g&&(await g.fetchCollection(),m=await g.updateLayerJson(h,f.get("id"),t.map));const x=(L=m==null?void 0:m.find(F=>{var W;return((W=F==null?void 0:F.properties)==null?void 0:W.id)==="AnalysisGroup"}))==null?void 0:L.layers;x!=null&&x.length&&(x==null||x.forEach(F=>{F.properties.layerControlExpand=!0,F.properties.layerControlToolsExpand=!0}),i.value.layers=m)};let a;const l=c=>{clearTimeout(a),a=setTimeout(()=>{s(c)},500)};return(c,f)=>(sa(),oa("span",Xg,[r.value?(sa(),oa("eox-layercontrol",{key:0,for:Sh(i),".tools":["datetime","info","config","legend","opacity"],"onDatetime:updated":l,class:"fill-height",toolsAsList:"true",ref_key:"eoxLayercontrol",ref:o},null,40,Gg)):Ch("v-if",!0)]))}};export{cm as default};
