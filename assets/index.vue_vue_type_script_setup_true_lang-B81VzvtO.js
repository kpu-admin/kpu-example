
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{d as V,r as l,bB as y,bC as _,c as v,j as u,z as b,H as h,b as B,o as F,v as S,K as T}from"./bootstrap-DTzpk8a9.js";const C=V({name:"KCountTo",__name:"index",props:{startVal:{},endVal:{},autoplay:{type:Boolean,default:!0},duration:{default:2e3},transition:{default:"linear"},delay:{default:0},decimals:{default:0},separator:{default:","},prefix:{},suffix:{}},emits:["onStarted","onFinished"],setup(d,{expose:f,emit:c}){const e=d,o=c,a=l(!1),n=l(e.startVal),p=y(n,{duration:e.duration,transition:_[e.transition],delay:e.delay,disabled:a,onFinished:()=>o("onFinished"),onStarted:()=>o("onStarted")}),m=v(()=>{let t=u(p);if(t=Number(t).toFixed(e.decimals),e.separator){const[r,i]=t.split(".");t=r.replace(/\B(?=(\d{3})+(?!\d))/g,e.separator)+(i?`.${i}`:"")}return e.prefix&&(t=e.prefix+t),e.suffix&&(t=t+e.suffix),t});function s(){n.value=e.endVal}function x(){a.value=!0,n.value=e.startVal,T(()=>{a.value=!1})}return b([()=>e.startVal,()=>e.endVal],()=>{s()}),h(()=>{e.autoplay&&s()}),f({start:s,reset:x}),(t,r)=>(F(),B("span",null,S(u(m)),1))}});export{C as _};
