
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{aN as p,an as m}from"./bootstrap-DTzpk8a9.js";function T(a){const e=p("",1e3);return{search:e,handleTypeaheadSearch:(u,f)=>{e.value=e.value+u;{const s=m(),c=f.map(t=>{var i,x;return{...t,textValue:((i=t.value)==null?void 0:i.textValue)??((x=t.ref.textContent)==null?void 0:x.trim())??""}}),r=c.find(t=>t.ref===s),n=c.map(t=>t.textValue),h=V(n,e.value,r==null?void 0:r.textValue),l=c.find(t=>t.textValue===h);return l&&l.ref.focus(),l==null?void 0:l.ref}},resetTypeahead:()=>{e.value=""}}}function v(a,e){return a.map((o,d)=>a[(e+d)%a.length])}function V(a,e,o){const u=e.length>1&&Array.from(e).every(n=>n===e[0])?e[0]:e,f=o?a.indexOf(o):-1;let s=v(a,Math.max(f,0));u.length===1&&(s=s.filter(n=>n!==o));const r=s.find(n=>n.toLowerCase().startsWith(u.toLowerCase()));return r!==o?r:void 0}export{T as u};
