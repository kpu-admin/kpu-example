
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{i as v,g as I,w as y,f as K}from"./RovingFocusGroup-BuS0Erbr.js";import{d as w,I as F,c as r,aH as g,H as h,am as C,f as S,o as T,w as d,i as B,j as n,P as x,y as k,K as R}from"./bootstrap-DTzpk8a9.js";const D=w({__name:"RovingFocusItem",props:{tabStopId:{},focusable:{type:Boolean,default:!0},active:{type:Boolean},allowShiftKey:{type:Boolean},asChild:{type:Boolean},as:{default:"span"}},setup(u){const i=u,a=v(),f=F(),l=r(()=>i.tabStopId||f),c=r(()=>a.currentTabStopId.value===l.value),{getItems:p,CollectionItem:m}=g();h(()=>{i.focusable&&a.onFocusableItemAdd()}),C(()=>{i.focusable&&a.onFocusableItemRemove()});function b(e){if(e.key==="Tab"&&e.shiftKey){a.onItemShiftTab();return}if(e.target!==e.currentTarget)return;const t=I(e,a.orientation.value,a.dir.value);if(t!==void 0){if(e.metaKey||e.ctrlKey||e.altKey||!i.allowShiftKey&&e.shiftKey)return;e.preventDefault();let o=[...p().map(s=>s.ref).filter(s=>s.dataset.disabled!=="")];if(t==="last")o.reverse();else if(t==="prev"||t==="next"){t==="prev"&&o.reverse();const s=o.indexOf(e.currentTarget);o=a.loop.value?y(o,s+1):o.slice(s+1)}R(()=>K(o))}}return(e,t)=>(T(),S(n(m),null,{default:d(()=>[B(n(x),{tabindex:c.value?0:-1,"data-orientation":n(a).orientation.value,"data-active":e.active?"":void 0,"data-disabled":e.focusable?void 0:"",as:e.as,"as-child":e.asChild,onMousedown:t[0]||(t[0]=o=>{e.focusable?n(a).onItemFocus(l.value):o.preventDefault()}),onFocus:t[1]||(t[1]=o=>n(a).onItemFocus(l.value)),onKeydown:b},{default:d(()=>[k(e.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}});export{D as _};
