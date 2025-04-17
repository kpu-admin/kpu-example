
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{_ as V}from"./index.vue_vue_type_script_setup_true_lang-DCSa_W1a.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang-CvxDANHv.js";import{d as A,k as g,bt as B,r as v,aP as w,l as u,b as C,o as K,i as o,w as r,e as d,G as f,j as k,V as x,t as D}from"./bootstrap-DTzpk8a9.js";import"./index-Ce4LrBVu.js";const P={class:"block"},S={class:"block"},$={class:"block"},I=A({name:"KeepAliveExamplePage",__name:"page",setup(R){const E=g(),m=B(),n=v(!1),p=v(1);function c(a){let e;switch(a){case 1:e="keepAliveExampleDetail";break;case 2:e="keepAliveExampleNestedDetail";break}E.push({name:e})}return w((a,e)=>{var s,i;const t=(i=(s=e.matched.at(-1))==null?void 0:s.components)==null?void 0:i.default.name;n.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(a.name)?t&&m.add(t):t&&m.remove(t)}),(a,e)=>{const t=N,s=u("ElSwitch"),i=u("ElInputNumber"),_=u("ElButton"),b=V;return K(),C("div",null,[o(t,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现。"}),o(b,null,{default:r(()=>[d("div",P,[o(s,{modelValue:k(n),"onUpdate:modelValue":e[0]||(e[0]=l=>f(n)?n.value=l:null),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),d("div",S,[o(i,{modelValue:k(p),"onUpdate:modelValue":e[1]||(e[1]=l=>f(p)?p.value=l:null)},null,8,["modelValue"])]),d("div",$,[o(_,{onClick:e[2]||(e[2]=l=>c(1))},{default:r(()=>e[4]||(e[4]=[x(" 进入同级路由页面 ")])),_:1}),o(_,{onClick:e[3]||(e[3]=l=>c(2))},{default:r(()=>e[5]||(e[5]=[x(" 进入下级路由页面 ")])),_:1})])]),_:1})])}}}),L=D(I,[["__scopeId","data-v-108eeb84"]]);export{L as default};
