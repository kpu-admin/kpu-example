
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{a as m,k as l,u as c,bp as f}from"./bootstrap-DTzpk8a9.js";import{u as g}from"./useTabbar-Cd1chwjb.js";function d(){const s=m(),u=l(),t=c(),a=f(),o=g();function r(){u.push({name:"reload"})}function n(e){t.setCustomTitle(s.fullPath,e),t.settings.tabbar.enable&&a.setCustomTitle({tabId:o.getId(),title:e})}function i(){t.resetCustomTitle(s.fullPath),t.settings.tabbar.enable&&a.resetCustomTitle(o.getId())}function b(e){t.setMainPageMaximize(e)}return{reload:r,setCustomTitle:n,resetCustomTitle:i,maximize:b}}export{d as u};
