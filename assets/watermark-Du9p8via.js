
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{_ as C}from"./index.vue_vue_type_script_setup_true_lang-DCSa_W1a.js";import{_ as v}from"./index.vue_vue_type_script_setup_true_lang-CvxDANHv.js";import{d as w,u as R,c as W,l as n,b,o as s,i as o,w as e,f,h as _,G as x,j as l,V as r,bg as y}from"./bootstrap-DTzpk8a9.js";import{u as Y}from"./watermark-BYnJ9bED.js";import"./index-Ce4LrBVu.js";const D=w({__name:"watermark",setup(G){const u=R(),m=Y(),a=W({get(){return u.settings.app.enableWatermark},set(p){u.$patch(t=>{t.settings.app.enableWatermark=p})}});function c(){m.update({content:y().format("YYYY-MM-DD HH:mm:ss")})}function k(){m.update()}return(p,t)=>{const E=v,d=n("ElRadioButton"),g=n("ElRadioGroup"),i=n("ElButton"),B=n("ElSpace"),S=C;return s(),b("div",null,[o(E,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),o(S,{title:"可在 /src/store/modules/watermark.ts 文件里定制水印文案内容"},{default:e(()=>[o(B,null,{default:e(()=>[o(g,{modelValue:l(a),"onUpdate:modelValue":t[0]||(t[0]=V=>x(a)?a.value=V:null)},{default:e(()=>[o(d,{value:!0},{default:e(()=>t[1]||(t[1]=[r(" 开启 ")])),_:1}),o(d,{value:!1},{default:e(()=>t[2]||(t[2]=[r(" 关闭 ")])),_:1})]),_:1},8,["modelValue"]),l(a)?(s(),f(i,{key:0,onClick:c},{default:e(()=>t[3]||(t[3]=[r(" 更新水印 ")])),_:1})):_("",!0),l(a)?(s(),f(i,{key:1,onClick:k},{default:e(()=>t[4]||(t[4]=[r(" 重置水印 ")])),_:1})):_("",!0)]),_:1})]),_:1})])}}});export{D as default};
