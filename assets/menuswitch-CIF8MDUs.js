
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-DCSa_W1a.js";import{_ as d}from"./index.vue_vue_type_script_setup_true_lang-CvxDANHv.js";import{d as p,u as _,b0 as f,aZ as b,l as g,b as w,o as B,i as n,w as o,e as S,j as h,V as k}from"./bootstrap-DTzpk8a9.js";import{b as s}from"./route-block-B_A1xBdJ.js";import"./index-Ce4LrBVu.js";const v=p({__name:"menuswitch",setup(x){const a=_(),t=f(),i=b();function u(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(C,e)=>{const r=d,c=g("ElButton"),l=m;return B(),w("div",null,[n(r,{title:"主导航切换",content:"可切换并激活指定的主导航"}),n(l,null,{default:o(()=>[e[1]||(e[1]=S("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(c,{disabled:!["side","head"].includes(h(a).settings.menu.mode),onClick:u},{default:o(()=>e[0]||(e[0]=[k(" 切换下一个 ")])),_:1},8,["disabled"])]),_:1})])}}});typeof s=="function"&&s(v);export{v as default};
