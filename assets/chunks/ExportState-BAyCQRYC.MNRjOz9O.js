import{aM as Y,G as y,a4 as m,aN as ga,u as b,I as f,aO as A,aP as x,aQ as q,aR as L,aS as J,aT as fa,a6 as O,aU as P,a8 as Z,aV as D,aW as E,aX as G,aY as X,aZ as xa,a5 as ha,a_ as ka,a$ as Sa,b0 as Ca,b1 as _a,b2 as Va,b3 as Aa,ac as Ia,b4 as Na,b5 as $a,b6 as Ba,b7 as wa,b8 as La,a as h,b9 as Oa,ab as Za,Y as ja,W as e,ba as C,t as _,bb as Q,N as w,j as Fa,as as Ta,l as za,bc as Ha,aq as z,bd as Ma,be as Ra,bf as Ua,b as Wa,O as H,bg as I,o as N,k as Ya,V as p,C as g,y as M,U as $,m as R,bh as qa,L as Ja,p as Pa,bi as Da,bj as Ea,Z as U,bk as Ga,bl as V,bm as B,bn as Xa,bo as Qa}from"./eo-dash.D00wPOhi.js";import Ka from"./PopUp-BEEnIJkO.DwFvjE-C.js";import{B as ae}from"./index-CgxIx8QF.DRAEBQtV.js";import{S as K}from"./VImg-DaRh-hDh.Be7lZj_B.js";import"./framework.CHkRAbij.js";import"./VOverlay-_h_9UR74.D8ZfVlxN.js";import"./forwardRefs-BKh8b46t.BAI8kuGC.js";import"./transition-CFHhDKFr.DHPxYavU.js";const ee=Y("v-spacer","div","VSpacer"),aa=y()({name:"VCardActions",props:m(),setup(a,i){let{slots:t}=i;return ga({VBtn:{slim:!0,variant:"text"}}),b(()=>{var s;return e("div",{class:["v-card-actions",a.class],style:a.style},[(s=t.default)==null?void 0:s.call(t)])}),{}}}),te=f({opacity:[Number,String],...m(),...A()},"VCardSubtitle"),se=y()({name:"VCardSubtitle",props:te(),setup(a,i){let{slots:t}=i;return b(()=>e(a.tag,{class:["v-card-subtitle",a.class],style:[{"--v-card-subtitle-opacity":a.opacity},a.style]},t)),{}}}),ea=Y("v-card-title"),le=f({start:Boolean,end:Boolean,icon:x,image:String,text:String,...q(),...m(),...L(),...J(),...fa(),...A(),...O(),...P({variant:"flat"})},"VAvatar"),W=y()({name:"VAvatar",props:le(),setup(a,i){let{slots:t}=i;const{themeClasses:s}=Z(a),{borderClasses:c}=D(a),{colorClasses:o,colorStyles:u,variantClasses:d}=E(a),{densityClasses:l}=G(a),{roundedClasses:n}=X(a),{sizeClasses:r,sizeStyles:v}=xa(a);return b(()=>e(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},s.value,c.value,o.value,l.value,n.value,r.value,d.value,a.class],style:[u.value,v.value,a.style]},{default:()=>[t.default?e(C,{key:"content-defaults",defaults:{VImg:{cover:!0,src:a.image},VIcon:{icon:a.icon}}},{default:()=>[t.default()]}):a.image?e(K,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?e(_,{key:"icon",icon:a.icon},null):a.text,Q(!1,"v-avatar")]})),{}}}),ie=f({appendAvatar:String,appendIcon:x,prependAvatar:String,prependIcon:x,subtitle:[String,Number],title:[String,Number],...m(),...L()},"VCardItem"),ne=y()({name:"VCardItem",props:ie(),setup(a,i){let{slots:t}=i;return b(()=>{var n;const s=!!(a.prependAvatar||a.prependIcon),c=!!(s||t.prepend),o=!!(a.appendAvatar||a.appendIcon),u=!!(o||t.append),d=!!(a.title!=null||t.title),l=!!(a.subtitle!=null||t.subtitle);return e("div",{class:["v-card-item",a.class],style:a.style},[c&&e("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?e(C,{key:"prepend-defaults",disabled:!s,defaults:{VAvatar:{density:a.density,image:a.prependAvatar},VIcon:{density:a.density,icon:a.prependIcon}}},t.prepend):e(w,null,[a.prependAvatar&&e(W,{key:"prepend-avatar",density:a.density,image:a.prependAvatar},null),a.prependIcon&&e(_,{key:"prepend-icon",density:a.density,icon:a.prependIcon},null)])]),e("div",{class:"v-card-item__content"},[d&&e(ea,{key:"title"},{default:()=>{var r;return[((r=t.title)==null?void 0:r.call(t))??a.title]}}),l&&e(se,{key:"subtitle"},{default:()=>{var r;return[((r=t.subtitle)==null?void 0:r.call(t))??a.subtitle]}}),(n=t.default)==null?void 0:n.call(t)]),u&&e("div",{key:"append",class:"v-card-item__append"},[t.append?e(C,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:a.density,image:a.appendAvatar},VIcon:{density:a.density,icon:a.appendIcon}}},t.append):e(w,null,[a.appendIcon&&e(_,{key:"append-icon",density:a.density,icon:a.appendIcon},null),a.appendAvatar&&e(W,{key:"append-avatar",density:a.density,image:a.appendAvatar},null)])])])}),{}}}),re=f({opacity:[Number,String],...m(),...A()},"VCardText"),ta=y()({name:"VCardText",props:re(),setup(a,i){let{slots:t}=i;return b(()=>e(a.tag,{class:["v-card-text",a.class],style:[{"--v-card-text-opacity":a.opacity},a.style]},t)),{}}}),de=f({appendAvatar:String,appendIcon:x,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:x,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...q(),...m(),...L(),...ha(),...ka(),...Sa(),...Ca(),..._a(),...J(),...Va(),...A(),...O(),...P({variant:"elevated"})},"VCard"),oe=y()({name:"VCard",directives:{Ripple:Aa},props:de(),setup(a,i){let{attrs:t,slots:s}=i;const{themeClasses:c}=Z(a),{borderClasses:o}=D(a),{colorClasses:u,colorStyles:d,variantClasses:l}=E(a),{densityClasses:n}=G(a),{dimensionStyles:r}=Ia(a),{elevationClasses:v}=Na(a),{loaderClasses:sa}=$a(a),{locationStyles:la}=Ba(a),{positionClasses:ia}=wa(a),{roundedClasses:na}=X(a),k=La(a,t),ra=h(()=>a.link!==!1&&k.isLink.value),S=h(()=>!a.disabled&&a.link!==!1&&(a.link||k.isClickable.value));return b(()=>{const da=ra.value?"a":a.tag,oa=!!(s.title||a.title!=null),pa=!!(s.subtitle||a.subtitle!=null),ca=oa||pa,ua=!!(s.append||a.appendAvatar||a.appendIcon),va=!!(s.prepend||a.prependAvatar||a.prependIcon),ya=!!(s.image||a.image),ma=ca||va||ua,ba=!!(s.text||a.text!=null);return Fa(e(da,za({class:["v-card",{"v-card--disabled":a.disabled,"v-card--flat":a.flat,"v-card--hover":a.hover&&!(a.disabled||a.flat),"v-card--link":S.value},c.value,o.value,u.value,n.value,v.value,sa.value,ia.value,na.value,l.value,a.class],style:[d.value,r.value,la.value,a.style],onClick:S.value&&k.navigate,tabindex:a.disabled?-1:void 0},k.linkProps),{default:()=>{var F;return[ya&&e("div",{key:"image",class:"v-card__image"},[s.image?e(C,{key:"image-defaults",disabled:!a.image,defaults:{VImg:{cover:!0,src:a.image}}},s.image):e(K,{key:"image-img",cover:!0,src:a.image},null)]),e(Ha,{name:"v-card",active:!!a.loading,color:typeof a.loading=="boolean"?void 0:a.loading},{default:s.loader}),ma&&e(ne,{key:"item",prependAvatar:a.prependAvatar,prependIcon:a.prependIcon,title:a.title,subtitle:a.subtitle,appendAvatar:a.appendAvatar,appendIcon:a.appendIcon},{default:s.item,prepend:s.prepend,title:s.title,subtitle:s.subtitle,append:s.append}),ba&&e(ta,{key:"text"},{default:()=>{var T;return[((T=s.text)==null?void 0:T.call(s))??a.text]}}),(F=s.default)==null?void 0:F.call(s),s.actions&&e(aa,null,{default:s.actions}),Q(S.value,"v-card")]}}),[[Ta("ripple"),S.value&&a.ripple]])}),{}}}),pe=f({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...m(),...O()},"VDivider"),ce=y()({name:"VDivider",props:pe(),setup(a,i){let{attrs:t,slots:s}=i;const{themeClasses:c}=Z(a),{textColorClasses:o,textColorStyles:u}=Oa(Za(a,"color")),d=h(()=>{const l={};return a.length&&(l[a.vertical?"height":"width"]=z(a.length)),a.thickness&&(l[a.vertical?"borderRightWidth":"borderTopWidth"]=z(a.thickness)),l});return b(()=>{const l=e("hr",{class:[{"v-divider":!0,"v-divider--inset":a.inset,"v-divider--vertical":a.vertical},c.value,o.value,a.class],style:[d.value,u.value,{"--v-border-opacity":a.opacity},a.style],"aria-orientation":!t.role||t.role==="separator"?a.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null);return s.default?e("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":a.vertical,"v-divider__wrapper--inset":a.inset}]},[l,e("div",{class:"v-divider__content"},[s.default()]),l]):l}),{}}}),j=a=>(Xa("data-v-b8c788e8"),a=a(),Qa(),a),ue=j(()=>g("h5",{class:"text-h5"},"Storytelling map configuration",-1)),ve=j(()=>g("p",{class:"text-body-2"},[V(" Copy and paste this code into the map "),g("b",null,"layers field"),V(" of the storytelling editor: ")],-1)),ye={class:"pa-3 code-block"},me={style:{position:"absolute",bottom:"15px"}},be={key:0,class:"text-success mr-3"},ge=j(()=>g("small",null,"copied!",-1)),fe={__name:"ExportState",props:Ma({getLayers:{type:Function,default:Ra}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const i=Ua(a,"modelValue"),t=a,s=Wa(!1),c=[{id:Symbol(),copyFn:async()=>await B(u.value,s),copyAs:"simple map"},{id:Symbol(),copyFn:async()=>await B(JSON.stringify(t.getLayers()),s),copyAs:"layers configuration"},{id:Symbol(),copyFn:async()=>await B(o.value,s),copyAs:"map tour section"}],o=h(()=>{const[d,l,n]=H.value,r="### <!--{ layers=",v=`zoom="${n}" center=[${[d,l]}] animationOptions={duration:500}}-->
#### Tour step title
Text describing the current step of the tour and why it is interesting what the map shows currently
`;return`${r}'${JSON.stringify(I(t.getLayers()))}' ${v}`}),u=h(()=>{const[d,l,n]=H.value,r='## Map Example <!--{as="eox-map" style="width: 100%; height: 500px;" layers=',v=`zoom="${n}" center=[${[d,l]}] }-->`;return`${r}'${JSON.stringify(I(t.getLayers()))}' ${v}`});return(d,l)=>(N(),Ya(Ka,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=n=>i.value=n)},{default:p(()=>[e(oe,{style:{"max-height":"498px"}},{default:p(()=>[e(ea,{class:"bg-primary",style:{"max-height":"49px"}},{default:p(()=>[ue]),_:1}),e(ta,{class:"py-5 overflow-auto",style:{height:"400px"}},{default:p(()=>[ve,g("div",ye,M($(I)(a.getLayers())),1),g("div",me,[e(ae,null,{default:p(()=>[s.value?(N(),R("div",be,[e(_,{color:"success",left:"",icon:[$(qa)]},null,8,["icon"]),ge])):Ja("",!0)]),_:1})]),e(Pa,{class:"d-flex pt-3 justify-end"},{default:p(()=>[e(Da,{cols:"6",class:"flex-column align-center text-end"},{default:p(()=>[(N(),R(w,null,Ea(c,n=>e(U,{class:"text-body-2",onClick:n.copyFn,key:n.id,small:"",variant:"text","prepend-icon":[$(Ga)]},{default:p(()=>[V(" copy as "+M(n.copyAs),1)]),_:2},1032,["onClick","prepend-icon"])),64))]),_:1})]),_:1})]),_:1}),e(ce),e(aa,{style:{"max-height":"49px"}},{default:p(()=>[e(ee),e(U,{variant:"text",onClick:l[0]||(l[0]=n=>i.value=!i.value)},{default:p(()=>[V(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Ie=ja(fe,[["__scopeId","data-v-b8c788e8"]]);export{Ie as default};