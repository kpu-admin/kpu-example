
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{_ as p}from"./index.vue_vue_type_script_setup_true_lang-DCSa_W1a.js";import{d as _,cj as l,l as d,b as f,o as b,i as e,w as o,e as B,v as g,j as C,V as u,p as N}from"./bootstrap-DTzpk8a9.js";import{_ as k}from"./index.vue_vue_type_script_setup_true_lang-CvxDANHv.js";import"./index-Ce4LrBVu.js";const S=_({__name:"number",setup(v){const n=l();function m(){n.setNumber(n.number+1)}function r(){n.setNumber(n.number-1)}return(x,t)=>{const i=k,a=N,s=d("ElButton"),c=p;return b(),f("div",null,[e(i,{title:"数字标记",content:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),e(c,null,{default:o(()=>[B("div",null," 当前 number 值："+g(C(n).number),1),e(s,{onClick:m},{icon:o(()=>[e(a,{name:"i-ep:plus"})]),default:o(()=>[t[0]||(t[0]=u(" 1 "))]),_:1}),e(s,{onClick:r},{default:o(()=>[e(a,{name:"i-ep:minus"}),t[1]||(t[1]=u(" 1 "))]),_:1})]),_:1})])}}});export{S as default};
