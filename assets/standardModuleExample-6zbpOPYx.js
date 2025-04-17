
/**
 * 由 admin 提供技术支持
 * Powered by admin
 * 代码仓库
 * Github https://github.com/Lmx1220/kpu-web
 */
    
import{c2 as r}from"./bootstrap-DTzpk8a9.js";var o=(e=>(e.GET="GET",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE",e))(o||{});const u="standardModuleExample",n="mock",t={Page:{url:`${n}/${u}/page`},Save:{url:`${n}/${u}`},Update:{url:`${n}/${u}`},Delete:{url:`${n}/${u}`},Query:{url:`${n}/${u}/query`},Option:{url:`${n}/${u}/option`,method:o.GET}};function a(e){return r.post(t.Page.url,e)}function l(e){return r.post(t.Save.url,e)}function p(e){return r.post(t.Update.url,e)}function i(e){return r.delete(t.Delete.url,{data:e})}function c(e){return r.post(t.Query.url,e)}function s(e){return r.get(t.Delete.url,{params:{id:e}})}function $(){return r.get(t.Option.url)}const f={page:a,save:l,update:p,remove:i,query:c,detail:s,getOption:$};export{f as c,$ as g,a as p};
