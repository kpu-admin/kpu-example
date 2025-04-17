
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{_ as m}from"./index-D42fPAgr.js";import{d,ba as l,bE as u,z as p,am as c,r as _,H as f,f as g,o as b,w as h,e as r,n as v,j as w,y as x,t as y}from"./bootstrap-DTzpk8a9.js";const B=d({name:"KFixedActionBar",__name:"index",setup(E){const n=l("actionBarRef"),{height:i}=u(n);p(i,e=>{document.documentElement.style.setProperty("--g-main-container-padding-bottom",`${e}px`)},{immediate:!0}),c(()=>{document.documentElement.style.removeProperty("--g-main-container-padding-bottom")});const a=_(!1);f(()=>{t(),window.addEventListener("scroll",t)}),c(()=>{window.removeEventListener("scroll",t)});function t(){const e=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.clientHeight||document.body.clientHeight,o=document.documentElement.scrollHeight||document.body.scrollHeight;a.value=Math.ceil(e+s)>=o}return(e,s)=>{const o=m;return b(),g(o,{position:"bottom"},{default:h(()=>[r("div",{ref_key:"actionBarRef",ref:n},[r("div",{class:v(["fixed-action-bar bottom-0 z-4 border-t bg-background p-5 text-center transition",{mask:!w(a)}])},[x(e.$slots,"default",{},void 0,!0)],2)],512)]),_:3})}}}),z=y(B,[["__scopeId","data-v-35af8538"]]);export{z as _};
