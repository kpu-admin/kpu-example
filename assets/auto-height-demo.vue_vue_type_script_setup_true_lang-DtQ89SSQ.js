
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{d as f,r as c,a_ as d,l as m,f as _,o as s,w as l,b as p,F as g,q as v,v as C,i as k,V as x,j as B,aY as h}from"./bootstrap-DTzpk8a9.js";const y=f({__name:"auto-height-demo",setup(b){const r=c([]),[u,n]=d({onCancel(){n.close()},onConfirm(){h.info("onConfirm",{position:"top-center"})},onOpenChange(t){t&&i(10)}});function i(t){n.setState({loading:!0}),setTimeout(()=>{r.value=Array.from({length:t},(e,o)=>o+1),n.setState({loading:!1})},2e3)}return(t,e)=>{const o=m("ElButton");return s(),_(B(u),{title:"自动计算高度","title-tooltip":"标题提示内容"},{"prepend-footer":l(()=>[k(o,{link:"",onClick:e[0]||(e[0]=a=>i(6))},{default:l(()=>e[1]||(e[1]=[x(" 点击更新数据 ")])),_:1})]),default:l(()=>[(s(!0),p(g,null,v(r.value,a=>(s(),p("div",{key:a,class:"h-[220px] w-full flex-center bg-zinc-100 even:bg-zinc-200"},C(a),1))),128))]),_:1})}}});export{y as _};
