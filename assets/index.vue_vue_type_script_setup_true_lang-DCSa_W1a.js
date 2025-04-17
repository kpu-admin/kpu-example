
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{d as m,U as h,r as g,b as r,o as t,n as o,h as n,e as b,y as l,V as y,v,f as _,w as k,i as w,p as C,j as s,s as z,m as B}from"./bootstrap-DTzpk8a9.js";const x={key:0,class:"title-container border-b px-5 py-4 transition-border-color"},S=m({name:"KpuPageMain",__name:"index",props:{title:{default:""},collaspe:{type:Boolean,default:!1},height:{default:""}},setup(i){const c=i,p=h(),a=g(c.collaspe);function f(){a.value=!a.value}return(e,V)=>{const d=C,u=B;return t(),r("div",{class:o(["page-main m-4 flex flex-col border rounded-lg bg-card transition-[background-color,border-color]",{"overflow-hidden":e.collaspe}])},[p.title||e.title?(t(),r("div",x,[l(e.$slots,"title",{},()=>[y(v(e.title),1)])])):n("",!0),b("div",{class:o(["main-container group/pagemain relative h-[calc-size(auto,size)] p-5 transition-height after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:z-1 after:h-12 after:max-h-full after:w-full after:from-transparent after:to-[hsl(var(--card))] after:bg-gradient-to-b after:opacity-0 after:transition-opacity after:content-empty",{"overflow-hidden":e.collaspe,"after:opacity-100":s(a)}]),style:z({height:s(a)?e.height:""})},[l(e.$slots,"default"),e.collaspe?(t(),_(u,{key:0,variant:"link",size:"icon",class:o(["group/pagemain-hover-opacity-100 absolute inset-b-0 inset-s-1/2 opacity-0 transition-all -translate-x-1/2",{"rotate-x-180":!s(a)}]),onClick:f},{default:k(()=>[w(d,{name:"i-ep:arrow-down",class:"text-xl"})]),_:1},8,["class"])):n("",!0)],6)],2)}}});export{S as _};
