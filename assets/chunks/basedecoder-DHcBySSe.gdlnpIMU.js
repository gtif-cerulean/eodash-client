function h(i,e){let t=i.length-e,c=0;do{for(let l=e;l>0;l--)i[c+e]+=i[c],c++;t-=e}while(t>0)}function f(i,e,t){let c=0,l=i.length;const n=l/t;for(;l>e;){for(let r=e;r>0;--r)i[c+e]+=i[c],++c;l-=e}const o=i.slice();for(let r=0;r<n;++r)for(let s=0;s<t;++s)i[t*r+s]=o[(t-s-1)*n+r]}function d(i,e,t,c,l,n){if(!e||e===1)return i;for(let s=0;s<l.length;++s){if(l[s]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(l[s]!==l[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const o=l[0]/8,r=n===2?1:l.length;for(let s=0;s<c&&!(s*r*t*o>=i.byteLength);++s){let a;if(e===2){switch(l[0]){case 8:a=new Uint8Array(i,s*r*t*o,r*t*o);break;case 16:a=new Uint16Array(i,s*r*t*o,r*t*o/2);break;case 32:a=new Uint32Array(i,s*r*t*o,r*t*o/4);break;default:throw new Error(`Predictor 2 not allowed with ${l[0]} bits per sample.`)}h(a,r)}else e===3&&(a=new Uint8Array(i,s*r*t*o,r*t*o),f(a,r,o))}return i}class w{async decode(e,t){const c=await this.decodeBlock(t),l=e.Predictor||1;if(l!==1){const n=!e.StripOffsets,o=n?e.TileWidth:e.ImageWidth,r=n?e.TileLength:e.RowsPerStrip||e.ImageLength;return d(c,l,o,r,e.BitsPerSample,e.PlanarConfiguration)}return c}}export{w as g};