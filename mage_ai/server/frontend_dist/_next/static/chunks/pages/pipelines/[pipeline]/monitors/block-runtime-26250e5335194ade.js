(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4947],{52136:function(e,n,r){"use strict";r.d(n,{Z:function(){return m}});var t=r(47329),i=r.n(t),o=r(82684),u=r(63588),l=r.n(u),c=r(5237),a=r(29989),s=r(81352),d=r(46119),f=r(38469),p=r(12765),v=["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"];function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},h.apply(this,arguments)}function m(e){var n=e.top,r=void 0===n?0:n,t=e.left,i=void 0===t?0:t,u=e.scale,m=e.height,y=e.stroke,b=void 0===y?"#eaf0f6":y,x=e.strokeWidth,g=void 0===x?1:x,k=e.strokeDasharray,Z=e.className,O=e.numTicks,j=void 0===O?10:O,_=e.lineStyle,P=e.offset,w=e.tickValues,E=e.children,N=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,v),T=null!=w?w:(0,d.Z)(u,j),C=(null!=P?P:0)+(0,p.Z)(u)/2,R=T.map((function(e,n){var r,t=(null!=(r=(0,f.Z)(u(e)))?r:0)+C;return{index:n,from:new s.Z({x:t,y:0}),to:new s.Z({x:t,y:m})}}));return o.createElement(a.Z,{className:l()("visx-columns",Z),top:r,left:i},E?E({lines:R}):R.map((function(e){var n=e.from,r=e.to,t=e.index;return o.createElement(c.Z,h({key:"column-line-"+t,from:n,to:r,stroke:b,strokeWidth:g,strokeDasharray:k,style:_},N))})))}m.propTypes={tickValues:i().array,height:i().number.isRequired}},84791:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(72430),i=(0,r(93342).Z)("domain","range","reverse","clamp","interpolate","nice","round");function o(e){return i((0,t.Z)(),e)}},85587:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var t=r(82684),i=r(63588),o=r.n(i),u=r(39309),l=["children","data","x","y","fill","className","curve","innerRef","defined"];function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},c.apply(this,arguments)}function a(e){var n=e.children,r=e.data,i=void 0===r?[]:r,a=e.x,s=e.y,d=e.fill,f=void 0===d?"transparent":d,p=e.className,v=e.curve,h=e.innerRef,m=e.defined,y=void 0===m?function(){return!0}:m,b=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,l),x=(0,u.jv)({x:a,y:s,defined:y,curve:v});return n?t.createElement(t.Fragment,null,n({path:x})):t.createElement("path",c({ref:h,className:o()("visx-linepath",p),d:x(i)||"",fill:f,strokeLinecap:"round"},b))}},39309:function(e,n,r){"use strict";r.d(n,{SO:function(){return u},jv:function(){return l}});var t=r(48167),i=r(92201),o=r(49894);function u(e){var n=void 0===e?{}:e,r=n.x,i=n.x0,u=n.x1,l=n.y,c=n.y0,a=n.y1,s=n.defined,d=n.curve,f=(0,t.Z)();return r&&(0,o.Z)(f.x,r),i&&(0,o.Z)(f.x0,i),u&&(0,o.Z)(f.x1,u),l&&(0,o.Z)(f.y,l),c&&(0,o.Z)(f.y0,c),a&&(0,o.Z)(f.y1,a),s&&f.defined(s),d&&f.curve(d),f}function l(e){var n=void 0===e?{}:e,r=n.x,t=n.y,u=n.defined,l=n.curve,c=(0,i.Z)();return r&&(0,o.Z)(c.x,r),t&&(0,o.Z)(c.y,t),u&&c.defined(u),l&&c.curve(l),c}},98889:function(e,n,r){"use strict";r.d(n,{Z:function(){return m}});var t=r(47329),i=r.n(t),o=r(82684),u=r(63588),l=r.n(u),c=r(39309),a=["children","x","x0","x1","y","y0","y1","data","defined","className","curve","innerRef"];function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}function d(e){var n=e.children,r=e.x,t=e.x0,i=e.x1,u=e.y,d=e.y0,f=e.y1,p=e.data,v=void 0===p?[]:p,h=e.defined,m=void 0===h?function(){return!0}:h,y=e.className,b=e.curve,x=e.innerRef,g=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,a),k=(0,c.SO)({x:r,x0:t,x1:i,y:u,y0:d,y1:f,defined:m,curve:b});return n?o.createElement(o.Fragment,null,n({path:k})):o.createElement("path",s({ref:x,className:l()("visx-area",y),d:k(v)||""},g))}var f=["id","children"];function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},p.apply(this,arguments)}function v(e){var n=e.id,r=e.children,t=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,f);return o.createElement("defs",null,o.createElement("clipPath",p({id:n},t),r))}function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},h.apply(this,arguments)}function m(e){var n=e.className,r=e.curve,t=e.clipAboveTo,i=e.clipBelowTo,u=e.data,c=e.defined,a=e.x,s=e.y0,f=e.y1,p=e.aboveAreaProps,m=e.belowAreaProps,y=e.id,b=void 0===y?"":y;return o.createElement("g",{className:l()("visx-threshold",n)},o.createElement(d,{curve:r,data:u,x:a,y1:f,defined:c},(function(e){var n=e.path,r=null,l=null;return r=n.y0(i)(u),l=n.y0(t)(u),o.createElement("g",null,o.createElement(v,{id:"threshold-clip-below-"+b},o.createElement("path",{d:r||""})),o.createElement(v,{id:"threshold-clip-above-"+b},o.createElement("path",{d:l||""})))})),o.createElement(d,h({curve:r,data:u,defined:c,x:a,y0:s,y1:f,strokeWidth:0,clipPath:"url(#threshold-clip-below-"+b+")"},m)),o.createElement(d,h({curve:r,data:u,defined:c,x:a,y0:s,y1:f,strokeWidth:0,clipPath:"url(#threshold-clip-above-"+b+")"},p)))}v.propTypes={id:i().string.isRequired,children:i().node},m.propTypes={className:i().string,clipAboveTo:i().oneOfType([i().func,i().number]).isRequired,clipBelowTo:i().oneOfType([i().func,i().number]).isRequired,id:i().string.isRequired,data:i().array.isRequired,defined:i().func,x:i().oneOfType([i().func,i().number]).isRequired,y0:i().oneOfType([i().func,i().number]).isRequired,y1:i().oneOfType([i().func,i().number]).isRequired}},64657:function(e,n,r){"use strict";r.d(n,{CD:function(){return l},NU:function(){return o},a_:function(){return t},hu:function(){return u}});var t,i=r(44897);!function(e){e.BLOCK_RUNS="block_runs",e.BLOCK_RUNTIME="block_runtime",e.PIPELINE_RUNS="pipeline_runs"}(t||(t={}));var o=[i.Z.accent.warning,i.Z.background.success,i.Z.accent.negative,i.Z.content.active,i.Z.interactive.linkPrimary],u=["cancelled","completed","failed","initial","running"],l=-50},7116:function(e,n,r){"use strict";r.d(n,{Z:function(){return m}});r(82684);var t=r(34376),i=r(85854),o=r(75457),u=r(38276),l=r(30160),c=r(74395),a=r(25976),s=r(44897),d=r(70515),f=a.default.div.withConfig({displayName:"indexstyle__LinkStyle",componentId:"sc-1in9sst-0"})(["padding:","px ","px;"," ",""],d.iI,d.tr,(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||s.Z.interactive).checked,";\n  ")}),(function(e){return!e.selected&&"\n    cursor: pointer;\n  "})),p=r(64657),v=r(28795),h=r(28598);var m=function(e){var n=e.breadcrumbs,r=e.children,a=e.errors,s=e.monitorType,m=e.pipeline,y=e.setErrors,b=e.subheader,x=(0,t.useRouter)();return(0,h.jsx)(o.Z,{before:(0,h.jsxs)(c.M,{children:[(0,h.jsx)(u.Z,{p:d.cd,children:(0,h.jsx)(i.Z,{level:4,muted:!0,children:"Insights"})}),(0,h.jsx)(f,{onClick:function(e){e.preventDefault(),x.push("/pipelines/[pipeline]/monitors","/pipelines/".concat(null===m||void 0===m?void 0:m.uuid,"/monitors"))},selected:p.a_.PIPELINE_RUNS==s,children:(0,h.jsx)(l.ZP,{children:"Pipeline runs"})}),(0,h.jsx)(f,{onClick:function(e){e.preventDefault(),x.push("/pipelines/[pipeline]/monitors/block-runs","/pipelines/".concat(null===m||void 0===m?void 0:m.uuid,"/monitors/block-runs"))},selected:p.a_.BLOCK_RUNS==s,children:(0,h.jsx)(l.ZP,{children:"Block runs"})}),(0,h.jsx)(f,{onClick:function(e){e.preventDefault(),x.push("/pipelines/[pipeline]/monitors/block-runtime","/pipelines/".concat(null===m||void 0===m?void 0:m.uuid,"/monitors/block-runtime"))},selected:p.a_.BLOCK_RUNTIME==s,children:(0,h.jsx)(l.ZP,{children:"Block runtime"})})]}),breadcrumbs:n,errors:a,pageName:v.M.MONITOR,pipeline:m,setErrors:y,subheader:b,uuid:"pipeline/monitor",children:r})}},74395:function(e,n,r){"use strict";r.d(n,{M:function(){return u},W:function(){return o}});var t=r(25976),i=r(46684),o=34*r(70515).iI,u=t.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],i.Mz)},98684:function(e,n,r){"use strict";r.d(n,{K:function(){return i}});var t=r(70987),i=function(e){var n=e||t.Z,r=n.brand,i=r.earth200,o=r.earth300,u=r.earth400,l=r.energy200,c=r.energy300,a=r.energy400,s=r.fire200,d=r.fire300,f=r.fire400,p=r.water200,v=r.water300,h=r.water400,m=r.wind200,y=r.wind300,b=r.wind400,x=n.chart;return[x.backgroundPrimary,x.backgroundSecondary,x.backgroundTertiary].concat([b,h,f,a,u,y,v,d,c,o,m,p,s,l,i])}},94035:function(e,n,r){"use strict";var t=r(25976).default.div.withConfig({displayName:"YAxisLabelContainer",componentId:"sc-qwp21x-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);n.Z=t},79221:function(e,n,r){"use strict";r.d(n,{P5:function(){return t},Vs:function(){return i}});r(81728);function t(e,n){var r=n||{},t=r.maxFractionDigits,i=r.minAmount,o=Intl.NumberFormat("en-US",{maximumFractionDigits:t||2,notation:"compact"});return"number"!==typeof e?e:e>=(i||1e4)?o.format(e):e.toString()}function i(e){var n,r;if("undefined"===typeof e)return 0;var t=null===e||void 0===e||null===(n=e())||void 0===n||null===(r=n.props)||void 0===r?void 0:r.children;return(Array.isArray(t)?t:[t]).join("").length}},82864:function(e,n,r){"use strict";r.r(n);var t=r(77837),i=r(75582),o=r(82394),u=r(38860),l=r.n(u),c=r(82684),a=r(92083),s=r.n(a),d=r(39867),f=r(55485),p=r(85854),v=r(74168),h=r(7116),m=r(93808),y=r(38276),b=r(44085),x=r(30160),g=r(35686),k=r(44897),Z=r(42631),O=r(46978),j=r(64657),_=r(25976),P=r(81728),w=r(55283),E=r(3917),N=r(86735),T=r(28598);function C(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function R(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?C(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var M="all_blocks";function D(e){var n,r=e.pipeline,t=(0,c.useContext)(_.ThemeContext),u=(0,c.useState)(null),l=u[0],a=u[1],m=r.uuid,C=g.ZP.pipelines.detail(m,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,D=(0,c.useMemo)((function(){return R(R({},null===C||void 0===C?void 0:C.pipeline),{},{uuid:m})}),[C,m]),I=g.ZP.pipeline_schedules.pipelines.list(m).data,S=(0,c.useMemo)((function(){return null===I||void 0===I?void 0:I.pipeline_schedules}),[I]),q=(0,c.useMemo)((function(){return(0,N.HK)(null===D||void 0===D?void 0:D.blocks,(function(e){return e.uuid}))||{}}),[D]),F={pipeline_uuid:m};(l||0===l)&&(F.pipeline_schedule_id=Number(l));var L=g.ZP.monitor_stats.detail("block_run_time",F),U=L.data,B=L.mutate;(0,c.useEffect)((function(){B(l)}),[B,l]);var A=((null===U||void 0===U?void 0:U.monitor_stat)||{}).stats,K=(0,c.useMemo)((function(){return(0,E.Y_)()}),[]),W=(0,c.useMemo)((function(){var e,n;return A&&(e=(0,o.Z)({},M,[]),n={},Object.entries(A).forEach((function(r){var t=(0,i.Z)(r,2),o=t[0],u=t[1].data;n[o]=[],K.forEach((function(r,t){n[o].push({x:r,y:r in u?[u[r]]:null}),e.all_blocks[t]||(e.all_blocks[t]={x:r,y:null}),r in u&&(e.all_blocks[t].y||(e.all_blocks[t].y=[]),e.all_blocks[t].y.push({blockUUID:o,runtime:u[r]}))}))}))),R(R({},e),n)}),[K,A]),V=(0,c.useMemo)((function(){var e=[];return e.push({bold:!0,label:function(){return"Monitors"}}),e}),[]);return(0,T.jsx)(h.Z,{breadcrumbs:V,monitorType:j.a_.BLOCK_RUNTIME,pipeline:D,subheader:(0,T.jsx)(f.ZP,{children:(0,T.jsxs)(b.Z,{backgroundColor:k.Z.interactive.defaultBackground,label:"Trigger:",onChange:function(e){var n=e.target.value;"initial"!==n?(a(n),B(n)):(B(),a(null))},value:l||"initial",children:[(0,T.jsx)("option",{value:"initial",children:"All"}),S&&S.map((function(e){return(0,T.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),children:(0,T.jsx)(y.Z,{mx:2,children:(null===W||void 0===W||null===(n=W.all_blocks)||void 0===n?void 0:n.length)>0&&Object.entries(W).map((function(e,n){var r,o,u=(0,i.Z)(e,2),l=u[0],c=u[1];return(0,T.jsxs)(y.Z,{mt:2,children:[(0,T.jsxs)(f.ZP,{alignItems:"center",children:[(0,T.jsx)(y.Z,{mx:1,children:(0,T.jsx)(d.Z,{color:(0,w.qn)(null===(r=q[l])||void 0===r?void 0:r.type,{blockColor:null===(o=q[l])||void 0===o?void 0:o.color,theme:t}).accent,size:O.ZG,square:!0})}),(0,T.jsx)(p.Z,{level:4,children:l===M?(0,P.J3)((0,P.kC)(l)):l})]}),(0,T.jsx)("div",{style:{backgroundColor:k.Z.background.chartBlock,borderRadius:"".concat(Z.TR,"px"),marginTop:"8px"},children:(0,T.jsx)(v.Z,{data:c,getX:function(e){return s()(e.x).valueOf()},getY:l===M?function(e,n){var r,t;return null===e||void 0===e||null===(r=e.y)||void 0===r||null===(t=r[n])||void 0===t?void 0:t.runtime}:null,getYScaleValues:l===M?function(e){return(null===e||void 0===e?void 0:e.map((function(e){return null===e||void 0===e?void 0:e.runtime})))||[]}:null,gridProps:{stroke:"black",strokeDasharray:null,strokeOpacity:.2},height:l===M?800:200,hideGridX:!0,margin:{bottom:30,left:35,right:-1,top:10},noCurve:!0,renderXTooltipContent:function(e){return(0,T.jsx)(x.ZP,{center:!0,inverted:!0,small:!0,children:s()(e.x).format("MMM DD")})},renderYTooltipContent:function(e,n){var r,t=null===e||void 0===e||null===(r=e.y)||void 0===r?void 0:r[n];if(l===M){var i=null===t||void 0===t?void 0:t.blockUUID,o=null===t||void 0===t?void 0:t.runtime;return void 0!==o&&(0,T.jsxs)(x.ZP,{center:!0,inverted:!0,small:!0,children:[i||"",": ",o.toFixed?o.toFixed(3):o,"s"]})}return void 0!==t&&(0,T.jsxs)(x.ZP,{center:!0,inverted:!0,small:!0,children:[t.toFixed?t.toFixed(3):t,"s"]})},thickStroke:!0,xLabelFormat:function(e){return s()(e).format("MMM DD")},xLabelRotate:!1,yLabelFormat:function(e){return e%1===0?e:e.toFixed(1)}})})]},"".concat(l,"_").concat(n))}))})})}D.getInitialProps=function(){var e=(0,t.Z)(l().mark((function e(n){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:r}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.default=(0,m.Z)(D)},76017:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/monitors/block-runtime",function(){return r(82864)}])}},function(e){e.O(0,[3662,125,1799,2714,1557,3782,4168,9774,2888,179],(function(){return n=76017,e(e.s=n);var n}));var n=e.O();_N_E=n}]);