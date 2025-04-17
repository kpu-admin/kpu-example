
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{d as V,r as u,b as k,o as C,i as t,w as n,e as K,j as i,m as T,V as f,t as $}from"./bootstrap-DTzpk8a9.js";import{_ as w}from"./index.vue_vue_type_script_setup_true_lang-DCSa_W1a.js";import{_ as B}from"./index.vue_vue_type_script_setup_true_lang-B81VzvtO.js";import{_ as b}from"./index.vue_vue_type_script_setup_true_lang-CvxDANHv.js";import{b as d}from"./route-block-B_A1xBdJ.js";import"./index-Ce4LrBVu.js";const _=V({__name:"countto",setup(y){const s=u(),l=u({startVal:0,endVal:2017,duration:4e3,decimals:0,separator:",",prefix:"¥ ",suffix:" 元"});function c(){s.value.start()}function p(){s.value.reset()}function m(){console.warn("开始")}function v(){console.warn("结束")}return(N,e)=>{const x=b,a=B,o=w,r=T;return C(),k("div",null,[t(x,{title:"计数到",description:"KpuCountTo"}),t(o,null,{default:n(()=>[t(a,{"start-val":0,"end-val":1e5})]),_:1}),t(o,{title:"持续10秒"},{default:n(()=>[t(a,{"start-val":0,"end-val":1e5,duration:1e4})]),_:1}),t(o,{title:"保留2位小数"},{default:n(()=>[t(a,{"start-val":0,"end-val":1e5,decimals:2})]),_:1}),t(o,{title:"带前缀和后缀"},{default:n(()=>[t(a,{"start-val":0,"end-val":1e5,prefix:"￥",suffix:"元"})]),_:1}),t(o,{title:"手动控制"},{default:n(()=>[t(a,{ref_key:"countToRef",ref:s,"start-val":i(l).startVal,"end-val":i(l).endVal,autoplay:!1,onOnStarted:m,onOnFinished:v},null,8,["start-val","end-val"]),K("div",null,[t(r,{onClick:c},{default:n(()=>e[1]||(e[1]=[f(" 开始 ")])),_:1}),t(r,{onClick:p},{default:n(()=>e[2]||(e[2]=[f(" 重置 ")])),_:1}),t(r,{onClick:e[0]||(e[0]=g=>i(l).endVal+=1e4)},{default:n(()=>e[3]||(e[3]=[f(" 增加10000 ")])),_:1})])]),_:1})])}}});typeof d=="function"&&d(_);const E=$(_,[["__scopeId","data-v-6e6c18a2"]]);export{E as default};
