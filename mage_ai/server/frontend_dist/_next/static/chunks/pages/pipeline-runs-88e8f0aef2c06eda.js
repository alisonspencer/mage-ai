(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1009],{66050:function(e,t,r){"use strict";var n;r.d(t,{V:function(){return n}}),function(e){e.CANCELLED="cancelled",e.COMPLETED="completed",e.FAILED="failed",e.INITIAL="initial",e.RUNNING="running",e.UPSTREAM_FAILED="upstream_failed",e.CONDITION_FAILED="condition_failed"}(n||(n={}))},92597:function(e,t,r){"use strict";r.r(t);var n=r(77837),i=r(82394),u=r(38860),a=r.n(u),o=r(82684),s=r(34376),c=r(1210),l=r(67971),p=r(51099),f=r(97496),d=r(41788),v=r(55378),O=r(86673),h=r(19711),b=r(82531),g=r(47409),j=r(49125),m=r(33766),y=r(59e3),P=r(28598);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(){var e=(0,s.useRouter)(),t=(0,o.useState)(null),r=t[0],n=t[1],i=(0,y.iV)(),u=null!==i&&void 0!==i&&i.page?i.page:0,a={_limit:p.Q,_offset:u*p.Q};null!==i&&void 0!==i&&i.status&&(a.status=i.status);var d=b.ZP.pipeline_runs.list(a,{refreshInterval:3e3,revalidateOnFocus:!0}),_=d.data,E=d.mutate,Z=(0,o.useMemo)((function(){return(null===_||void 0===_?void 0:_.pipeline_runs)||[]}),[_]),D=(0,o.useMemo)((function(){var e;return(null===_||void 0===_||null===(e=_.metadata)||void 0===e?void 0:e.count)||[]}),[_]);return(0,P.jsxs)(c.Z,{errors:r,setErrors:n,title:"Pipeline runs",uuid:"pipeline_runs/index",children:[(0,P.jsx)(O.Z,{mx:2,my:1,children:(0,P.jsxs)(l.Z,{alignItems:"center",children:[(0,P.jsx)(h.ZP,{bold:!0,default:!0,large:!0,children:"Filter runs by status:"}),(0,P.jsx)(O.Z,{mr:1}),(0,P.jsxs)(v.Z,{compact:!0,defaultColor:!0,fitContent:!0,onChange:function(t){t.preventDefault(),"all"===t.target.value?e.push("/pipeline-runs"):(0,m.u7)({page:0,status:t.target.value})},paddingRight:4*j.iI,placeholder:"Select run status",value:(null===i||void 0===i?void 0:i.status)||"all",children:[(0,P.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),g.IK.map((function(e){return(0,P.jsx)("option",{value:e,children:g.Do[e]},e)}))]})]})}),(0,P.jsx)(f.Z,{fetchPipelineRuns:E,pipelineRuns:Z,setErrors:n}),(0,P.jsx)(O.Z,{p:2,children:(0,P.jsx)(p.Z,{maxPages:9,onUpdate:function(t){var r=Number(t),n=w(w({},i),{},{page:r>=0?r:0});e.push("/pipeline-runs","/pipeline-runs?".concat((0,y.uM)(n)))},page:Number(u),totalPages:Math.ceil(D/p.Q)})})]})}E.getInitialProps=(0,n.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),t.default=(0,d.Z)(E)},33766:function(e,t,r){"use strict";r.d(t,{O2:function(){return p},g_:function(){return d},u7:function(){return f}});var n=r(75582),i=r(82394),u=r(34376),a=r.n(u),o=r(59e3),s=r(24224);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p="_offset";function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.preserveParams,i=t.pushHistory,u=t.replaceParams,s=(0,o.iV)(),c={};r&&r.forEach((function(e){s[e]&&(c[e]=s[e])}));var p,f=u?c:s;p=window.location.pathname;var d=i?a().push:a().replace,v=l(l({},f),e);Object.entries(e).forEach((function(e){var t=(0,n.Z)(e,2),r=t[0],i=t[1];"undefined"!==typeof i&&null!==i||delete v[r]}));var O=(0,o.uM)(v);O.length>=1&&(O="?".concat(O));var h="".concat(p.split("?")[0]).concat(O);return d(a().router.pathname,h,{shallow:!0})}function d(e,t,r){var i=r.addingMultipleValues,u=r.isList,a=r.itemsPerPage,o=r.pushHistory,c=void 0!==o&&o,d=r.resetLimitParams,v=l({},e);i?Object.entries(t).forEach((function(e){var t=(0,n.Z)(e,2),r=t[0],i=t[1];if(Array.isArray(i)){var u="".concat(r,"[]");v[u]=i.map(String)}})):u?Object.entries(t).forEach((function(e){var t=(0,n.Z)(e,2),r=t[0],i=t[1],u=String(i),a="".concat(r,"[]"),o=v[a];o&&Array.isArray(o)?(o=o.map(String)).includes(u)?v[a]=(0,s.Od)(o,(function(e){return e===u})):v[a]=o.concat(u):v[a]=[u]})):v=l(l({},v),t),d&&(v._limit=a||20,v[p]=0),f(v,{pushHistory:c})}},60710:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipeline-runs",function(){return r(92597)}])}},function(e){e.O(0,[844,9902,1424,1005,7815,6566,9774,2888,179],(function(){return t=60710,e(e.s=t);var t}));var t=e.O();_N_E=t}]);