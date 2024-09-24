/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */function z(e){let a=e.length;for(;--a>=0;)e[a]=0}const ae=3,ne=258,Mt=29,ie=256,re=ie+1+Mt,Ht=30,se=512,oe=new Array((re+2)*2);z(oe);const le=new Array(Ht*2);z(le);const de=new Array(se);z(de);const fe=new Array(ne-ae+1);z(fe);const ce=new Array(Mt);z(ce);const he=new Array(Ht);z(he);const ue=(e,a,t,s)=>{let o=e&65535|0,r=e>>>16&65535|0,c=0;for(;t!==0;){c=t>2e3?2e3:t,t-=c;do o=o+a[s++]|0,r=r+o|0;while(--c);o%=65521,r%=65521}return o|r<<16|0};var it=ue;const we=()=>{let e,a=[];for(var t=0;t<256;t++){e=t;for(var s=0;s<8;s++)e=e&1?3988292384^e>>>1:e>>>1;a[t]=e}return a},be=new Uint32Array(we()),me=(e,a,t,s)=>{const o=be,r=s+t;e^=-1;for(let c=s;c<r;c++)e=e>>>8^o[(e^a[c])&255];return e^-1};var T=me,rt={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},ot={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const ke=(e,a)=>Object.prototype.hasOwnProperty.call(e,a);var _e=function(e){const a=Array.prototype.slice.call(arguments,1);for(;a.length;){const t=a.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const s in t)ke(t,s)&&(e[s]=t[s])}}return e},ge=e=>{let a=0;for(let s=0,o=e.length;s<o;s++)a+=e[s].length;const t=new Uint8Array(a);for(let s=0,o=0,r=e.length;s<r;s++){let c=e[s];t.set(c,o),o+=c.length}return t},Kt={assign:_e,flattenChunks:ge};let Pt=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Pt=!1}const L=new Uint8Array(256);for(let e=0;e<256;e++)L[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;L[254]=L[254]=1;var pe=e=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(e);let a,t,s,o,r,c=e.length,d=0;for(o=0;o<c;o++)t=e.charCodeAt(o),(t&64512)===55296&&o+1<c&&(s=e.charCodeAt(o+1),(s&64512)===56320&&(t=65536+(t-55296<<10)+(s-56320),o++)),d+=t<128?1:t<2048?2:t<65536?3:4;for(a=new Uint8Array(d),r=0,o=0;r<d;o++)t=e.charCodeAt(o),(t&64512)===55296&&o+1<c&&(s=e.charCodeAt(o+1),(s&64512)===56320&&(t=65536+(t-55296<<10)+(s-56320),o++)),t<128?a[r++]=t:t<2048?(a[r++]=192|t>>>6,a[r++]=128|t&63):t<65536?(a[r++]=224|t>>>12,a[r++]=128|t>>>6&63,a[r++]=128|t&63):(a[r++]=240|t>>>18,a[r++]=128|t>>>12&63,a[r++]=128|t>>>6&63,a[r++]=128|t&63);return a};const ve=(e,a)=>{if(a<65534&&e.subarray&&Pt)return String.fromCharCode.apply(null,e.length===a?e:e.subarray(0,a));let t="";for(let s=0;s<a;s++)t+=String.fromCharCode(e[s]);return t};var ye=(e,a)=>{const t=a||e.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(e.subarray(0,a));let s,o;const r=new Array(t*2);for(o=0,s=0;s<t;){let c=e[s++];if(c<128){r[o++]=c;continue}let d=L[c];if(d>4){r[o++]=65533,s+=d-1;continue}for(c&=d===2?31:d===3?15:7;d>1&&s<t;)c=c<<6|e[s++]&63,d--;if(d>1){r[o++]=65533;continue}c<65536?r[o++]=c:(c-=65536,r[o++]=55296|c>>10&1023,r[o++]=56320|c&1023)}return ve(r,o)},xe=(e,a)=>{a=a||e.length,a>e.length&&(a=e.length);let t=a-1;for(;t>=0&&(e[t]&192)===128;)t--;return t<0||t===0?a:t+L[e[t]]>a?t:a},st={string2buf:pe,buf2string:ye,utf8border:xe};function Ee(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Ae=Ee;const j=16209,Re=16191;var Ze=function(e,a){let t,s,o,r,c,d,v,n,i,E,h,l,R,Z,g,m,b,f,w,A,p,_,y,u;const k=e.state;t=e.next_in,y=e.input,s=t+(e.avail_in-5),o=e.next_out,u=e.output,r=o-(a-e.avail_out),c=o+(e.avail_out-257),d=k.dmax,v=k.wsize,n=k.whave,i=k.wnext,E=k.window,h=k.hold,l=k.bits,R=k.lencode,Z=k.distcode,g=(1<<k.lenbits)-1,m=(1<<k.distbits)-1;t:do{l<15&&(h+=y[t++]<<l,l+=8,h+=y[t++]<<l,l+=8),b=R[h&g];e:for(;;){if(f=b>>>24,h>>>=f,l-=f,f=b>>>16&255,f===0)u[o++]=b&65535;else if(f&16){w=b&65535,f&=15,f&&(l<f&&(h+=y[t++]<<l,l+=8),w+=h&(1<<f)-1,h>>>=f,l-=f),l<15&&(h+=y[t++]<<l,l+=8,h+=y[t++]<<l,l+=8),b=Z[h&m];a:for(;;){if(f=b>>>24,h>>>=f,l-=f,f=b>>>16&255,f&16){if(A=b&65535,f&=15,l<f&&(h+=y[t++]<<l,l+=8,l<f&&(h+=y[t++]<<l,l+=8)),A+=h&(1<<f)-1,A>d){e.msg="invalid distance too far back",k.mode=j;break t}if(h>>>=f,l-=f,f=o-r,A>f){if(f=A-f,f>n&&k.sane){e.msg="invalid distance too far back",k.mode=j;break t}if(p=0,_=E,i===0){if(p+=v-f,f<w){w-=f;do u[o++]=E[p++];while(--f);p=o-A,_=u}}else if(i<f){if(p+=v+i-f,f-=i,f<w){w-=f;do u[o++]=E[p++];while(--f);if(p=0,i<w){f=i,w-=f;do u[o++]=E[p++];while(--f);p=o-A,_=u}}}else if(p+=i-f,f<w){w-=f;do u[o++]=E[p++];while(--f);p=o-A,_=u}for(;w>2;)u[o++]=_[p++],u[o++]=_[p++],u[o++]=_[p++],w-=3;w&&(u[o++]=_[p++],w>1&&(u[o++]=_[p++]))}else{p=o-A;do u[o++]=u[p++],u[o++]=u[p++],u[o++]=u[p++],w-=3;while(w>2);w&&(u[o++]=u[p++],w>1&&(u[o++]=u[p++]))}}else if(f&64){e.msg="invalid distance code",k.mode=j;break t}else{b=Z[(b&65535)+(h&(1<<f)-1)];continue a}break}}else if(f&64)if(f&32){k.mode=Re;break t}else{e.msg="invalid literal/length code",k.mode=j;break t}else{b=R[(b&65535)+(h&(1<<f)-1)];continue e}break}}while(t<s&&o<c);w=l>>3,t-=w,l-=w<<3,h&=(1<<l)-1,e.next_in=t,e.next_out=o,e.avail_in=t<s?5+(s-t):5-(t-s),e.avail_out=o<c?257+(c-o):257-(o-c),k.hold=h,k.bits=l};const B=15,ft=852,ct=592,ht=0,q=1,ut=2,Se=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),De=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Te=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Ue=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Oe=(e,a,t,s,o,r,c,d)=>{const v=d.bits;let n=0,i=0,E=0,h=0,l=0,R=0,Z=0,g=0,m=0,b=0,f,w,A,p,_,y=null,u;const k=new Uint16Array(B+1),S=new Uint16Array(B+1);let I=null,dt,K,P;for(n=0;n<=B;n++)k[n]=0;for(i=0;i<s;i++)k[a[t+i]]++;for(l=v,h=B;h>=1&&k[h]===0;h--);if(l>h&&(l=h),h===0)return o[r++]=1<<24|64<<16|0,o[r++]=1<<24|64<<16|0,d.bits=1,0;for(E=1;E<h&&k[E]===0;E++);for(l<E&&(l=E),g=1,n=1;n<=B;n++)if(g<<=1,g-=k[n],g<0)return-1;if(g>0&&(e===ht||h!==1))return-1;for(S[1]=0,n=1;n<B;n++)S[n+1]=S[n]+k[n];for(i=0;i<s;i++)a[t+i]!==0&&(c[S[a[t+i]]++]=i);if(e===ht?(y=I=c,u=20):e===q?(y=Se,I=De,u=257):(y=Te,I=Ue,u=0),b=0,i=0,n=E,_=r,R=l,Z=0,A=-1,m=1<<l,p=m-1,e===q&&m>ft||e===ut&&m>ct)return 1;for(;;){dt=n-Z,c[i]+1<u?(K=0,P=c[i]):c[i]>=u?(K=I[c[i]-u],P=y[c[i]-u]):(K=96,P=0),f=1<<n-Z,w=1<<R,E=w;do w-=f,o[_+(b>>Z)+w]=dt<<24|K<<16|P|0;while(w!==0);for(f=1<<n-1;b&f;)f>>=1;if(f!==0?(b&=f-1,b+=f):b=0,i++,--k[n]===0){if(n===h)break;n=a[t+c[i]]}if(n>l&&(b&p)!==A){for(Z===0&&(Z=l),_+=E,R=n-Z,g=1<<R;R+Z<h&&(g-=k[R+Z],!(g<=0));)R++,g<<=1;if(m+=1<<R,e===q&&m>ft||e===ut&&m>ct)return 1;A=b&p,o[A]=l<<24|R<<16|_-r|0}}return b!==0&&(o[_+b]=n-Z<<24|64<<16|0),d.bits=l,0};var F=Oe;const Ie=0,jt=1,Gt=2,{Z_FINISH:wt,Z_BLOCK:Ce,Z_TREES:G,Z_OK:C,Z_STREAM_END:Ne,Z_NEED_DICT:Be,Z_STREAM_ERROR:D,Z_DATA_ERROR:Yt,Z_MEM_ERROR:Jt,Z_BUF_ERROR:ze,Z_DEFLATED:bt}=ot,$=16180,mt=16181,kt=16182,_t=16183,gt=16184,pt=16185,vt=16186,yt=16187,xt=16188,Et=16189,X=16190,U=16191,Q=16192,At=16193,W=16194,Rt=16195,Zt=16196,St=16197,Dt=16198,Y=16199,J=16200,Tt=16201,Ut=16202,Ot=16203,It=16204,Ct=16205,V=16206,Nt=16207,Bt=16208,x=16209,Xt=16210,$t=16211,Fe=852,Le=592,Me=15,He=Me,zt=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24);function Ke(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const N=e=>{if(!e)return 1;const a=e.state;return!a||a.strm!==e||a.mode<$||a.mode>$t?1:0},qt=e=>{if(N(e))return D;const a=e.state;return e.total_in=e.total_out=a.total=0,e.msg="",a.wrap&&(e.adler=a.wrap&1),a.mode=$,a.last=0,a.havedict=0,a.flags=-1,a.dmax=32768,a.head=null,a.hold=0,a.bits=0,a.lencode=a.lendyn=new Int32Array(Fe),a.distcode=a.distdyn=new Int32Array(Le),a.sane=1,a.back=-1,C},Qt=e=>{if(N(e))return D;const a=e.state;return a.wsize=0,a.whave=0,a.wnext=0,qt(e)},Wt=(e,a)=>{let t;if(N(e))return D;const s=e.state;return a<0?(t=0,a=-a):(t=(a>>4)+5,a<48&&(a&=15)),a&&(a<8||a>15)?D:(s.window!==null&&s.wbits!==a&&(s.window=null),s.wrap=t,s.wbits=a,Qt(e))},Vt=(e,a)=>{if(!e)return D;const t=new Ke;e.state=t,t.strm=e,t.window=null,t.mode=$;const s=Wt(e,a);return s!==C&&(e.state=null),s},Pe=e=>Vt(e,He);let Ft=!0,tt,et;const je=e=>{if(Ft){tt=new Int32Array(512),et=new Int32Array(32);let a=0;for(;a<144;)e.lens[a++]=8;for(;a<256;)e.lens[a++]=9;for(;a<280;)e.lens[a++]=7;for(;a<288;)e.lens[a++]=8;for(F(jt,e.lens,0,288,tt,0,e.work,{bits:9}),a=0;a<32;)e.lens[a++]=5;F(Gt,e.lens,0,32,et,0,e.work,{bits:5}),Ft=!1}e.lencode=tt,e.lenbits=9,e.distcode=et,e.distbits=5},te=(e,a,t,s)=>{let o;const r=e.state;return r.window===null&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new Uint8Array(r.wsize)),s>=r.wsize?(r.window.set(a.subarray(t-r.wsize,t),0),r.wnext=0,r.whave=r.wsize):(o=r.wsize-r.wnext,o>s&&(o=s),r.window.set(a.subarray(t-s,t-s+o),r.wnext),s-=o,s?(r.window.set(a.subarray(t-s,t),0),r.wnext=s,r.whave=r.wsize):(r.wnext+=o,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=o))),0},Ge=(e,a)=>{let t,s,o,r,c,d,v,n,i,E,h,l,R,Z,g=0,m,b,f,w,A,p,_,y;const u=new Uint8Array(4);let k,S;const I=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(N(e)||!e.output||!e.input&&e.avail_in!==0)return D;t=e.state,t.mode===U&&(t.mode=Q),c=e.next_out,o=e.output,v=e.avail_out,r=e.next_in,s=e.input,d=e.avail_in,n=t.hold,i=t.bits,E=d,h=v,y=C;t:for(;;)switch(t.mode){case $:if(t.wrap===0){t.mode=Q;break}for(;i<16;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}if(t.wrap&2&&n===35615){t.wbits===0&&(t.wbits=15),t.check=0,u[0]=n&255,u[1]=n>>>8&255,t.check=T(t.check,u,2,0),n=0,i=0,t.mode=mt;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((n&255)<<8)+(n>>8))%31){e.msg="incorrect header check",t.mode=x;break}if((n&15)!==bt){e.msg="unknown compression method",t.mode=x;break}if(n>>>=4,i-=4,_=(n&15)+8,t.wbits===0&&(t.wbits=_),_>15||_>t.wbits){e.msg="invalid window size",t.mode=x;break}t.dmax=1<<t.wbits,t.flags=0,e.adler=t.check=1,t.mode=n&512?Et:U,n=0,i=0;break;case mt:for(;i<16;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}if(t.flags=n,(t.flags&255)!==bt){e.msg="unknown compression method",t.mode=x;break}if(t.flags&57344){e.msg="unknown header flags set",t.mode=x;break}t.head&&(t.head.text=n>>8&1),t.flags&512&&t.wrap&4&&(u[0]=n&255,u[1]=n>>>8&255,t.check=T(t.check,u,2,0)),n=0,i=0,t.mode=kt;case kt:for(;i<32;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}t.head&&(t.head.time=n),t.flags&512&&t.wrap&4&&(u[0]=n&255,u[1]=n>>>8&255,u[2]=n>>>16&255,u[3]=n>>>24&255,t.check=T(t.check,u,4,0)),n=0,i=0,t.mode=_t;case _t:for(;i<16;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}t.head&&(t.head.xflags=n&255,t.head.os=n>>8),t.flags&512&&t.wrap&4&&(u[0]=n&255,u[1]=n>>>8&255,t.check=T(t.check,u,2,0)),n=0,i=0,t.mode=gt;case gt:if(t.flags&1024){for(;i<16;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}t.length=n,t.head&&(t.head.extra_len=n),t.flags&512&&t.wrap&4&&(u[0]=n&255,u[1]=n>>>8&255,t.check=T(t.check,u,2,0)),n=0,i=0}else t.head&&(t.head.extra=null);t.mode=pt;case pt:if(t.flags&1024&&(l=t.length,l>d&&(l=d),l&&(t.head&&(_=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(s.subarray(r,r+l),_)),t.flags&512&&t.wrap&4&&(t.check=T(t.check,s,l,r)),d-=l,r+=l,t.length-=l),t.length))break t;t.length=0,t.mode=vt;case vt:if(t.flags&2048){if(d===0)break t;l=0;do _=s[r+l++],t.head&&_&&t.length<65536&&(t.head.name+=String.fromCharCode(_));while(_&&l<d);if(t.flags&512&&t.wrap&4&&(t.check=T(t.check,s,l,r)),d-=l,r+=l,_)break t}else t.head&&(t.head.name=null);t.length=0,t.mode=yt;case yt:if(t.flags&4096){if(d===0)break t;l=0;do _=s[r+l++],t.head&&_&&t.length<65536&&(t.head.comment+=String.fromCharCode(_));while(_&&l<d);if(t.flags&512&&t.wrap&4&&(t.check=T(t.check,s,l,r)),d-=l,r+=l,_)break t}else t.head&&(t.head.comment=null);t.mode=xt;case xt:if(t.flags&512){for(;i<16;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}if(t.wrap&4&&n!==(t.check&65535)){e.msg="header crc mismatch",t.mode=x;break}n=0,i=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),e.adler=t.check=0,t.mode=U;break;case Et:for(;i<32;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}e.adler=t.check=zt(n),n=0,i=0,t.mode=X;case X:if(t.havedict===0)return e.next_out=c,e.avail_out=v,e.next_in=r,e.avail_in=d,t.hold=n,t.bits=i,Be;e.adler=t.check=1,t.mode=U;case U:if(a===Ce||a===G)break t;case Q:if(t.last){n>>>=i&7,i-=i&7,t.mode=V;break}for(;i<3;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}switch(t.last=n&1,n>>>=1,i-=1,n&3){case 0:t.mode=At;break;case 1:if(je(t),t.mode=Y,a===G){n>>>=2,i-=2;break t}break;case 2:t.mode=Zt;break;case 3:e.msg="invalid block type",t.mode=x}n>>>=2,i-=2;break;case At:for(n>>>=i&7,i-=i&7;i<32;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}if((n&65535)!==(n>>>16^65535)){e.msg="invalid stored block lengths",t.mode=x;break}if(t.length=n&65535,n=0,i=0,t.mode=W,a===G)break t;case W:t.mode=Rt;case Rt:if(l=t.length,l){if(l>d&&(l=d),l>v&&(l=v),l===0)break t;o.set(s.subarray(r,r+l),c),d-=l,r+=l,v-=l,c+=l,t.length-=l;break}t.mode=U;break;case Zt:for(;i<14;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}if(t.nlen=(n&31)+257,n>>>=5,i-=5,t.ndist=(n&31)+1,n>>>=5,i-=5,t.ncode=(n&15)+4,n>>>=4,i-=4,t.nlen>286||t.ndist>30){e.msg="too many length or distance symbols",t.mode=x;break}t.have=0,t.mode=St;case St:for(;t.have<t.ncode;){for(;i<3;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}t.lens[I[t.have++]]=n&7,n>>>=3,i-=3}for(;t.have<19;)t.lens[I[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,k={bits:t.lenbits},y=F(Ie,t.lens,0,19,t.lencode,0,t.work,k),t.lenbits=k.bits,y){e.msg="invalid code lengths set",t.mode=x;break}t.have=0,t.mode=Dt;case Dt:for(;t.have<t.nlen+t.ndist;){for(;g=t.lencode[n&(1<<t.lenbits)-1],m=g>>>24,b=g>>>16&255,f=g&65535,!(m<=i);){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}if(f<16)n>>>=m,i-=m,t.lens[t.have++]=f;else{if(f===16){for(S=m+2;i<S;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}if(n>>>=m,i-=m,t.have===0){e.msg="invalid bit length repeat",t.mode=x;break}_=t.lens[t.have-1],l=3+(n&3),n>>>=2,i-=2}else if(f===17){for(S=m+3;i<S;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}n>>>=m,i-=m,_=0,l=3+(n&7),n>>>=3,i-=3}else{for(S=m+7;i<S;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}n>>>=m,i-=m,_=0,l=11+(n&127),n>>>=7,i-=7}if(t.have+l>t.nlen+t.ndist){e.msg="invalid bit length repeat",t.mode=x;break}for(;l--;)t.lens[t.have++]=_}}if(t.mode===x)break;if(t.lens[256]===0){e.msg="invalid code -- missing end-of-block",t.mode=x;break}if(t.lenbits=9,k={bits:t.lenbits},y=F(jt,t.lens,0,t.nlen,t.lencode,0,t.work,k),t.lenbits=k.bits,y){e.msg="invalid literal/lengths set",t.mode=x;break}if(t.distbits=6,t.distcode=t.distdyn,k={bits:t.distbits},y=F(Gt,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,k),t.distbits=k.bits,y){e.msg="invalid distances set",t.mode=x;break}if(t.mode=Y,a===G)break t;case Y:t.mode=J;case J:if(d>=6&&v>=258){e.next_out=c,e.avail_out=v,e.next_in=r,e.avail_in=d,t.hold=n,t.bits=i,Ze(e,h),c=e.next_out,o=e.output,v=e.avail_out,r=e.next_in,s=e.input,d=e.avail_in,n=t.hold,i=t.bits,t.mode===U&&(t.back=-1);break}for(t.back=0;g=t.lencode[n&(1<<t.lenbits)-1],m=g>>>24,b=g>>>16&255,f=g&65535,!(m<=i);){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}if(b&&!(b&240)){for(w=m,A=b,p=f;g=t.lencode[p+((n&(1<<w+A)-1)>>w)],m=g>>>24,b=g>>>16&255,f=g&65535,!(w+m<=i);){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}n>>>=w,i-=w,t.back+=w}if(n>>>=m,i-=m,t.back+=m,t.length=f,b===0){t.mode=Ct;break}if(b&32){t.back=-1,t.mode=U;break}if(b&64){e.msg="invalid literal/length code",t.mode=x;break}t.extra=b&15,t.mode=Tt;case Tt:if(t.extra){for(S=t.extra;i<S;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}t.length+=n&(1<<t.extra)-1,n>>>=t.extra,i-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=Ut;case Ut:for(;g=t.distcode[n&(1<<t.distbits)-1],m=g>>>24,b=g>>>16&255,f=g&65535,!(m<=i);){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}if(!(b&240)){for(w=m,A=b,p=f;g=t.distcode[p+((n&(1<<w+A)-1)>>w)],m=g>>>24,b=g>>>16&255,f=g&65535,!(w+m<=i);){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}n>>>=w,i-=w,t.back+=w}if(n>>>=m,i-=m,t.back+=m,b&64){e.msg="invalid distance code",t.mode=x;break}t.offset=f,t.extra=b&15,t.mode=Ot;case Ot:if(t.extra){for(S=t.extra;i<S;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}t.offset+=n&(1<<t.extra)-1,n>>>=t.extra,i-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){e.msg="invalid distance too far back",t.mode=x;break}t.mode=It;case It:if(v===0)break t;if(l=h-v,t.offset>l){if(l=t.offset-l,l>t.whave&&t.sane){e.msg="invalid distance too far back",t.mode=x;break}l>t.wnext?(l-=t.wnext,R=t.wsize-l):R=t.wnext-l,l>t.length&&(l=t.length),Z=t.window}else Z=o,R=c-t.offset,l=t.length;l>v&&(l=v),v-=l,t.length-=l;do o[c++]=Z[R++];while(--l);t.length===0&&(t.mode=J);break;case Ct:if(v===0)break t;o[c++]=t.length,v--,t.mode=J;break;case V:if(t.wrap){for(;i<32;){if(d===0)break t;d--,n|=s[r++]<<i,i+=8}if(h-=v,e.total_out+=h,t.total+=h,t.wrap&4&&h&&(e.adler=t.check=t.flags?T(t.check,o,h,c-h):it(t.check,o,h,c-h)),h=v,t.wrap&4&&(t.flags?n:zt(n))!==t.check){e.msg="incorrect data check",t.mode=x;break}n=0,i=0}t.mode=Nt;case Nt:if(t.wrap&&t.flags){for(;i<32;){if(d===0)break t;d--,n+=s[r++]<<i,i+=8}if(t.wrap&4&&n!==(t.total&4294967295)){e.msg="incorrect length check",t.mode=x;break}n=0,i=0}t.mode=Bt;case Bt:y=Ne;break t;case x:y=Yt;break t;case Xt:return Jt;case $t:default:return D}return e.next_out=c,e.avail_out=v,e.next_in=r,e.avail_in=d,t.hold=n,t.bits=i,(t.wsize||h!==e.avail_out&&t.mode<x&&(t.mode<V||a!==wt))&&te(e,e.output,e.next_out,h-e.avail_out),E-=e.avail_in,h-=e.avail_out,e.total_in+=E,e.total_out+=h,t.total+=h,t.wrap&4&&h&&(e.adler=t.check=t.flags?T(t.check,o,h,e.next_out-h):it(t.check,o,h,e.next_out-h)),e.data_type=t.bits+(t.last?64:0)+(t.mode===U?128:0)+(t.mode===Y||t.mode===W?256:0),(E===0&&h===0||a===wt)&&y===C&&(y=ze),y},Ye=e=>{if(N(e))return D;let a=e.state;return a.window&&(a.window=null),e.state=null,C},Je=(e,a)=>{if(N(e))return D;const t=e.state;return t.wrap&2?(t.head=a,a.done=!1,C):D},Xe=(e,a)=>{const t=a.length;let s,o,r;return N(e)||(s=e.state,s.wrap!==0&&s.mode!==X)?D:s.mode===X&&(o=1,o=it(o,a,t,0),o!==s.check)?Yt:(r=te(e,a,t,t),r?(s.mode=Xt,Jt):(s.havedict=1,C))};var $e=Qt,qe=Wt,Qe=qt,We=Pe,Ve=Vt,ta=Ge,ea=Ye,aa=Je,na=Xe,ia="pako inflate (from Nodeca project)",O={inflateReset:$e,inflateReset2:qe,inflateResetKeep:Qe,inflateInit:We,inflateInit2:Ve,inflate:ta,inflateEnd:ea,inflateGetHeader:aa,inflateSetDictionary:na,inflateInfo:ia};function ra(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var sa=ra;const ee=Object.prototype.toString,{Z_NO_FLUSH:oa,Z_FINISH:la,Z_OK:M,Z_STREAM_END:at,Z_NEED_DICT:nt,Z_STREAM_ERROR:da,Z_DATA_ERROR:Lt,Z_MEM_ERROR:fa}=ot;function H(e){this.options=Kt.assign({chunkSize:1024*64,windowBits:15,to:""},e||{});const a=this.options;a.raw&&a.windowBits>=0&&a.windowBits<16&&(a.windowBits=-a.windowBits,a.windowBits===0&&(a.windowBits=-15)),a.windowBits>=0&&a.windowBits<16&&!(e&&e.windowBits)&&(a.windowBits+=32),a.windowBits>15&&a.windowBits<48&&(a.windowBits&15||(a.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ae,this.strm.avail_out=0;let t=O.inflateInit2(this.strm,a.windowBits);if(t!==M)throw new Error(rt[t]);if(this.header=new sa,O.inflateGetHeader(this.strm,this.header),a.dictionary&&(typeof a.dictionary=="string"?a.dictionary=st.string2buf(a.dictionary):ee.call(a.dictionary)==="[object ArrayBuffer]"&&(a.dictionary=new Uint8Array(a.dictionary)),a.raw&&(t=O.inflateSetDictionary(this.strm,a.dictionary),t!==M)))throw new Error(rt[t])}H.prototype.push=function(e,a){const t=this.strm,s=this.options.chunkSize,o=this.options.dictionary;let r,c,d;if(this.ended)return!1;for(a===~~a?c=a:c=a===!0?la:oa,ee.call(e)==="[object ArrayBuffer]"?t.input=new Uint8Array(e):t.input=e,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(s),t.next_out=0,t.avail_out=s),r=O.inflate(t,c),r===nt&&o&&(r=O.inflateSetDictionary(t,o),r===M?r=O.inflate(t,c):r===Lt&&(r=nt));t.avail_in>0&&r===at&&t.state.wrap>0&&e[t.next_in]!==0;)O.inflateReset(t),r=O.inflate(t,c);switch(r){case da:case Lt:case nt:case fa:return this.onEnd(r),this.ended=!0,!1}if(d=t.avail_out,t.next_out&&(t.avail_out===0||r===at))if(this.options.to==="string"){let v=st.utf8border(t.output,t.next_out),n=t.next_out-v,i=st.buf2string(t.output,v);t.next_out=n,t.avail_out=s-n,n&&t.output.set(t.output.subarray(v,v+n),0),this.onData(i)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(r===M&&d===0)){if(r===at)return r=O.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};H.prototype.onData=function(e){this.chunks.push(e)};H.prototype.onEnd=function(e){e===M&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Kt.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function lt(e,a){const t=new H(a);if(t.push(e),t.err)throw t.msg||rt[t.err];return t.result}function ca(e,a){return a=a||{},a.raw=!0,lt(e,a)}var ha=H,ua=lt,wa=ca,ba=lt,ma=ot,ka={Inflate:ha,inflate:ua,inflateRaw:wa,ungzip:ba,constants:ma};const{Inflate:ga,inflate:_a,inflateRaw:pa,ungzip:va}=ka;var ya=_a;export{ya as b};