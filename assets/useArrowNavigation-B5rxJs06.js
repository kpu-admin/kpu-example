
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
const I=["INPUT","TEXTAREA"];function v(r,l,e,o={}){if(!l||o.enableIgnoredElement&&I.includes(l.nodeName))return null;const{arrowKeyOptions:i="both",attributeName:a="[data-reka-collection-item]",itemsArray:c=[],loop:t=!0,dir:s="ltr",preventScroll:k=!0,focus:x=!1}=o,[g,w,N,A,h,b]=[r.key==="ArrowRight",r.key==="ArrowLeft",r.key==="ArrowUp",r.key==="ArrowDown",r.key==="Home",r.key==="End"],u=N||A,f=g||w;if(!h&&!b&&(!u&&!f||i==="vertical"&&f||i==="horizontal"&&u))return null;const d=e?Array.from(e.querySelectorAll(a)):c;if(!d.length)return null;k&&r.preventDefault();let n=null;return f||u?n=y(d,l,{goForward:u?A:s==="ltr"?g:w,loop:t}):h?n=d.at(0)||null:b&&(n=d.at(-1)||null),x&&(n==null||n.focus()),n}function y(r,l,e,o=r.length){if(--o===0)return null;const i=r.indexOf(l),a=e.goForward?i+1:i-1;if(!e.loop&&(a<0||a>=r.length))return null;const c=(a+r.length)%r.length,t=r[c];return t?t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false"?y(r,t,e,o):t:null}export{v as u};
