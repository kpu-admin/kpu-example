
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{d,r as c,b1 as m,l as g,f as v,o as s,w as n,b as p,F as x,q as C,v as _,i as k,V as u,j as w,aY as B}from"./bootstrap-DTzpk8a9.js";const D=d({__name:"auto-height-demo2",setup(b){const l=c([]),[f,o]=m({onCancel(){o.close()},onConfirm(){B.info("onConfirm",{position:"top-center"})},onOpenChange(t){t&&i(10)}});function i(t){o.setState({loading:!0}),setTimeout(()=>{l.value=Array.from({length:t},(e,a)=>a+1),o.setState({loading:!1})},2e3)}return(t,e)=>{const a=g("ElButton");return s(),v(w(f),{title:"自动计算高度","title-tooltip":"标题提示内容"},{extra:n(()=>e[1]||(e[1]=[u(" extra ")])),"prepend-footer":n(()=>[k(a,{link:"",onClick:e[0]||(e[0]=r=>i(6))},{default:n(()=>e[2]||(e[2]=[u(" 点击更新数据 ")])),_:1})]),default:n(()=>[(s(!0),p(x,null,C(l.value,r=>(s(),p("div",{key:r,class:"h-[220px] w-full flex-center bg-zinc-100 even:bg-zinc-200"},_(r),1))),128))]),_:1})}}});export{D as _};
