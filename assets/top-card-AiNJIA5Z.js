
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{d as c,l as f,f as m,o as r,w as C,V as i,y as l,h as o,e as a,b as g,v as d,i as t,p as v,n as _,t as h}from"./bootstrap-DTzpk8a9.js";import{_ as V}from"./index.vue_vue_type_script_setup_true_lang-B81VzvtO.js";import{_ as k}from"./lodash-BFL50F5j.js";import"./index-Ce4LrBVu.js";const $={key:1,class:"right-icon"},b={class:"bottom"},w=c({__name:"top-card",props:{background:{default:"white"},title:{default:"Test"},icon:{default:""},percentage:{default:"10%"},countConfig:{default:()=>({startValue:0,endValue:k.random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3})}},setup(y){return(e,n)=>{const u=V,s=v,p=f("ElCard");return r(),m(p,{class:_(["top-card",`top-card-${e.background}`]),shadow:"hover"},{default:C(()=>[i(d(e.title)+" ",1),e.$slots.tag?l(e.$slots,"tag",{key:0},void 0,!0):o("",!0),a("p",null,[t(u,{decimals:e.countConfig.decimals,duration:e.countConfig.duration,"end-val":e.countConfig.endValue,prefix:e.countConfig.prefix,separator:e.countConfig.separator,"start-val":e.countConfig.startValue,suffix:e.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])]),e.icon?(r(),g("div",$,[t(s,{name:e.icon},null,8,["name"])])):o("",!0),a("div",b,[n[0]||(n[0]=i(" 自上周以来 ")),t(s,{name:"ri:arrow-up-line"}),a("span",null,d(e.percentage),1)]),e.$slots.chart?l(e.$slots,"chart",{key:2},void 0,!0):o("",!0)]),_:3},8,["class"])}}}),I=h(w,[["__scopeId","data-v-4b807df0"]]);export{I as default};
