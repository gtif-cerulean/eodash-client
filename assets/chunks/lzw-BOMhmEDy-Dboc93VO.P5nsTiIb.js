import{w as A}from"./basedecoder-Qm25PwVp-CHo5Pomv.CXiqZbVR.js";const x=9,y=256,m=257,U=12;function $(i,o,r){const c=o%8,t=Math.floor(o/8),d=8-c,w=o+r-(t+1)*8;let f=8*(t+2)-(o+r);const g=(t+2)*8-o;if(f=Math.max(0,f),t>=i.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),m;let a=i[t]&2**(8-c)-1;a<<=r-d;let l=a;if(t+1<i.length){let s=i[t+1]>>>f;s<<=Math.max(0,r-g),l+=s}if(w>8&&t+2<i.length){const s=(t+3)*8-(o+r),e=i[t+2]>>>s;l+=e}return l}function b(i,o){for(let r=o.length-1;r>=0;r--)i.push(o[r]);return i}function E(i){const o=new Uint16Array(4093),r=new Uint8Array(4093);for(let n=0;n<=257;n++)o[n]=4096,r[n]=n;let c=258,t=x,d=0;function w(){c=258,t=x}function f(n){const h=$(n,d,t);return d+=t,h}function g(n,h){return r[c]=h,o[c]=n,c++,c-1}function a(n){const h=[];for(let p=n;p!==4096;p=o[p])h.push(r[p]);return h}const l=[];w();const s=new Uint8Array(i);let e=f(s),u;for(;e!==m;){if(e===y){for(w(),e=f(s);e===y;)e=f(s);if(e===m)break;if(e>y)throw new Error(`corrupted code at scanline ${e}`);{const n=a(e);b(l,n),u=e}}else if(e<c){const n=a(e);b(l,n),g(u,n[n.length-1]),u=e}else{const n=a(u);if(!n)throw new Error(`Bogus entry. Not in dictionary, ${u} / ${c}, position: ${d}`);b(l,n),l.push(n[n.length-1]),g(u,n[n.length-1]),u=e}c+1>=2**t&&(t===U?u=void 0:t++),e=f(s)}return new Uint8Array(l)}class M extends A{decodeBlock(o){return E(o).buffer}}export{M as default};
