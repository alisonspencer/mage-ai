(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3512],{1210:function(n,e,t){"use strict";t.d(e,{Z:function(){return N}});var r=t(82394),i=t(21831),o=t(82684),u=t(47999),c=t(49894),l=t(93461),a=t(57384),s=t(41424),d=t(72454),f=t(28598);function p(n,e){var t=n.children;return(0,f.jsx)(d.HS,{ref:e,children:t})}var v=o.forwardRef(p),h=t(32063),A=t(85019),T=t(82531),S=t(66166),E=t(3055),R=t(49125),O=t(91427),g=t(24141);function b(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var N=function(n){var e,t=n.after,r=n.afterHidden,p=n.afterWidth,b=n.afterWidthOverride,N=n.before,D=n.beforeWidth,L=n.breadcrumbs,C=n.children,y=n.errors,P=n.headerMenuItems,Z=n.headerOffset,w=n.mainContainerHeader,k=n.navigationItems,_=n.setErrors,M=n.subheaderChildren,I=n.title,j=n.uuid,x=(0,g.i)().width,B="dashboard_after_width_".concat(j),Y="dashboard_before_width_".concat(j),H=(0,o.useRef)(null),U=(0,o.useState)(b?p:(0,O.U2)(B,p)),K=U[0],X=U[1],G=(0,o.useState)(!1),W=G[0],F=G[1],V=(0,o.useState)(N?Math.max((0,O.U2)(Y,D),13*R.iI):null),Q=V[0],J=V[1],q=(0,o.useState)(!1),$=q[0],z=q[1],nn=(0,o.useState)(null)[1],en=T.ZP.projects.list({},{revalidateOnFocus:!1}).data,tn=null===en||void 0===en?void 0:en.projects,rn=[];L?rn.push.apply(rn,(0,i.Z)(L)):(null===tn||void 0===tn?void 0:tn.length)>=1&&rn.push.apply(rn,[{label:function(){var n;return null===(n=tn[0])||void 0===n?void 0:n.name},linkProps:{href:"/"}},{bold:!0,label:function(){return I}}]),(0,o.useEffect)((function(){null===H||void 0===H||!H.current||W||$||null===nn||void 0===nn||nn(H.current.getBoundingClientRect().width)}),[W,K,$,Q,H,nn,x]),(0,o.useEffect)((function(){W||(0,O.t8)(B,K)}),[r,W,K,B]),(0,o.useEffect)((function(){$||(0,O.t8)(Y,Q)}),[$,Q,Y]);var on=(0,S.Z)(p);return(0,o.useEffect)((function(){b&&on!==p&&X(p)}),[b,p,on]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:I}),(0,f.jsx)(s.Z,{breadcrumbs:rn,menuItems:P,project:null===tn||void 0===tn?void 0:tn[0],version:null===tn||void 0===tn||null===(e=tn[0])||void 0===e?void 0:e.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===k||void 0===k?void 0:k.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(A.Z,{navigationItems:k,showMore:!0})}),(0,f.jsx)(l.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(h.Z,{after:t,afterHeightOffset:E.Mz,afterHidden:r,afterMousedownActive:W,afterWidth:K,before:N,beforeHeightOffset:E.Mz,beforeMousedownActive:$,beforeWidth:d.k1+(N?Q:0),headerOffset:Z,hideAfterCompletely:!0,leftOffset:N?d.k1:null,mainContainerHeader:w,mainContainerRef:H,setAfterMousedownActive:F,setAfterWidth:X,setBeforeMousedownActive:z,setBeforeWidth:J,children:[M&&(0,f.jsx)(v,{children:M}),C]})})]}),y&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===_||void 0===_?void 0:_(null)},children:(0,f.jsx)(c.Z,m(m({},y),{},{onClose:function(){return null===_||void 0===_?void 0:_(null)}}))})]})}},32821:function(n,e,t){"use strict";t.d(e,{V3:function(){return d},a9:function(){return c},dq:function(){return f},jN:function(){return a},lr:function(){return s}});var r=t(17717),i=t(86422),o=t(73828),u=t(90211);function c(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e||(t?null:null===n||void 0===n?void 0:n.name);if(null!==n&&void 0!==n&&n.parent){var o=[n.parent.name];return(null===i||void 0===i?void 0:i.length)>=1&&o.push(i),c(n.parent,o.join(r.sep))}return i}function l(n){return null===n||void 0===n?void 0:n.split(r.sep).slice(1).join(r.sep)}function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=c(n,e,t);return l(r)}function s(n){var e,t,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=c(n,l).split(r.sep);if(!a)return null;if(1===a.length)(a=null===n||void 0===n||null===(t=n.path)||void 0===t?void 0:t.split(r.sep))&&(e=a[0]===i.tf.CUSTOM?a[0]:(0,u.C5)(a[0]||""));else if(a[1]===i.tf.CUSTOM)e=a[1];else{var s=a[1];e=i.tf.DBT===s?s:(0,u.C5)(s||"")}if(!a||i.tf.DBT===e)return null;var d="";d=a.length>=3?a.slice(2,a.length).join(r.sep):a[a.length-1];var f=["\\.".concat(o.Lu.PY),"\\.".concat(o.Lu.R),"\\.".concat(o.Lu.SQL),"\\.".concat(o.Lu.YAML),"\\.".concat(o.Lu.YML)].join("|"),p=new RegExp("".concat(f,"$"));if(i.$W.concat(i.tf.DBT).includes(e)&&d.match(p)){var v=d.lastIndexOf("."),h=d.slice(v+1);return{language:o.nB[h],type:e,uuid:d.slice(0,v)}}}function d(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=c(n,e).split(r.sep);if(t[1]){var l=(0,u.C5)(t[e?0:1]);t[1]===i.tf.DBT&&(l=i.tf.DBT);var a=t[t.length-1],s=new RegExp(".".concat(o.Lu.YAML,"$")),d=new RegExp(".".concat(o.Lu.R,"$")),f=new RegExp(".".concat(o.Lu.SQL,"$")),p=new RegExp(".".concat(o.Lu.MD,"$"));if(a.match(s)&&i.VZ.includes(l))return{type:l,uuid:a.replace(s,"")};if(a.match(d)&&i.J8.includes(l))return{type:l,uuid:a.replace(d,"")};if(a.match(f)&&i.HX.includes(l)){var v=a.replace(/[.]/g,"_"),h=l===i.tf.DBT?t.slice(2,-1).join("_").concat("_".concat(v)):a.replace(f,"");return{type:l,uuid:h}}return a.match(p)&&l===i.tf.MARKDOWN?{type:l,uuid:a.replace(p,"")}:void 0}}function f(n){var e=n.name.split("."),t=e[e.length-1];return o.n6.includes(t)&&e.pop(),e.join("")}},91207:function(n,e,t){"use strict";t.d(e,{Z:function(){return j}});var r=t(82394),i=t(75582),o=t(17717),u=t(82684),c=t(37958),l=t(83455),a=t(35490),s=t(86422),d=t(60328),f=t(38626),p=t(93461),v=t(67971),h=t(28598),A=f.default.div.withConfig({displayName:"ButtonGroup__ButtonGroupStyle",componentId:"sc-15vbmc8-0"})([""]),T=f.default.div.withConfig({displayName:"ButtonGroup__VerticalDivider",componentId:"sc-15vbmc8-1"})(["width:1px;"]),S=function(n){var e=n.children,t=n.divider,r=u.Children.toArray(e).length;return(0,h.jsx)(A,{children:(0,h.jsx)(v.Z,{children:u.Children.map(e,(function(n,e){return n&&(0,h.jsxs)(p.Z,{children:[e>=1&&t&&(0,h.jsx)(T,{}),u.cloneElement(n,{borderRadiusLeft:r>=2&&0===e,borderRadiusRight:r>=2&&e===r-1,halfPaddingLeft:r>=2&&0!==e,halfPaddingRight:r>=2&&e!==r-1,noBorder:r>=2&&e>0&&e<r-1,noBorderRight:r>=2&&e!==r-1})]},"button-group-child-".concat(e))}))})})},E=t(57722),R=t(73828),O=t(11135),g=t(98781),b=t(86673),m=t(82531),N=t(16115),D=t(94353),L=t(60701),C=t(55512),y=t(24224),P=t(32821),Z=t(90211),w=t(96510),k=t(51504),_=t(41150);function M(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function I(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?M(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var j=function(n){var e=n.active,t=n.addNewBlock,f=n.disableRefreshWarning,p=n.fetchPipeline,A=n.fetchVariables,T=n.filePath,M=n.hideHeaderButtons,j=n.onContentChange,x=n.openSidekickView,B=n.pipeline,Y=n.saveFile,H=n.selectedFilePath,U=n.sendTerminalMessage,K=n.setDisableShortcuts,X=n.setErrors,G=n.setFilesTouched,W=n.setSelectedBlock,F=(0,c.j)("apiReloads"),V=(0,i.Z)(F,2)[1],Q=(0,u.useState)(null),J=Q[0],q=Q[1],$=(0,u.useState)(!1),z=$[0],nn=($[1],(0,u.useRef)(null)),en=(0,u.useMemo)((function(){return new a.Z}),[]),tn=(0,u.useMemo)((function(){return{api_key:D.l,token:en.decodedToken.token}}),[en]),rn=m.ZP.statuses.list().data,on=(0,u.useMemo)((function(){var n,e;return null===rn||void 0===rn||null===(n=rn.statuses)||void 0===n||null===(e=n[0])||void 0===e?void 0:e.repo_path}),[rn]),un=m.ZP.file_contents.detail(T).data;(0,u.useEffect)((function(){null!==un&&void 0!==un&&un.file_content&&q(un.file_content)}),[un]);var cn=(0,u.useState)(null===J||void 0===J?void 0:J.content),ln=cn[0],an=cn[1],sn=(0,u.useCallback)((function(n){an(n),j&&(null===j||void 0===j||j(n))}),[j]),dn=(0,u.useState)(!1),fn=dn[0],pn=dn[1];(0,u.useEffect)((function(){e&&K&&(null===K||void 0===K||K(!0))}),[e,K]),(0,u.useEffect)((function(){var n;H&&(null===nn||void 0===nn||null===(n=nn.current)||void 0===n||n.scrollIntoView())}),[H]);var vn=(0,l.Db)(m.ZP.file_contents.useUpdate((null===J||void 0===J?void 0:J.path)&&encodeURIComponent(null===J||void 0===J?void 0:J.path)),{onSuccess:function(n){return(0,w.wD)(n,{callback:function(){V((function(n){return I(I({},n),{},(0,r.Z)({},"FileVersions/".concat(null===J||void 0===J?void 0:J.path),Number(new Date)))}))},onErrorCallback:function(n,e){return null===X||void 0===X?void 0:X({errors:e,response:n})}})}}),hn=(0,i.Z)(vn,1)[0],An=(0,u.useCallback)((function(n,e){if(Y)return Y(n,e);hn({file_content:I(I({},e),{},{content:n})}).then((function(){decodeURIComponent(T).split(o.sep).pop()===R.dT.METADATA_YAML&&A&&(null===A||void 0===A||A())})),G((function(n){return I(I({},n),{},(0,r.Z)({},null===e||void 0===e?void 0:e.path,!1))})),pn(!1)}),[A,T,Y,G,hn]),Tn=(0,u.useMemo)((function(){return(0,C.lU)()}),[]),Sn=(0,u.useMemo)((function(){var n;return null===J||void 0===J||null===(n=J.path.match(Tn)[0])||void 0===n?void 0:n.split(".")[1]}),[Tn,J]),En=(0,u.useMemo)((function(){if(null!==J&&void 0!==J&&J.path)return(0,h.jsx)(E.Z,{autoHeight:!0,language:R.nB[Sn],onChange:function(n){sn(n),G((function(n){return I(I({},n),{},(0,r.Z)({},null===J||void 0===J?void 0:J.path,!0))})),pn(!0)},onSave:function(n){An(n,J)},selected:!0,textareaFocused:!0,value:(0,Z.Pb)(null===J||void 0===J?void 0:J.content)?JSON.stringify(JSON.parse(null===J||void 0===J?void 0:J.content),null,2):null===J||void 0===J?void 0:J.content,width:"100%"})}),[J,Sn,An,sn,G]),Rn=null!==B&&void 0!==B&&B.blocks?(0,y.sE)(null===B||void 0===B?void 0:B.blocks,(function(n){var e=n.type;return s.tf.DATA_EXPORTER===e})):null,On=(0,l.Db)(m.ZP.blocks.pipelines.useUpdate(null===B||void 0===B?void 0:B.uuid,null===Rn||void 0===Rn?void 0:Rn.uuid),{onSuccess:function(n){return(0,w.wD)(n,{callback:function(){null===p||void 0===p||p()}})}}),gn=(0,i.Z)(On,1)[0],bn=t&&B&&(Sn===R.Lu.PY||Sn===R.Lu.SQL||(Sn===R.Lu.YAML||Sn===R.Lu.R)&&(0,P.V3)(J,null===J||void 0===J?void 0:J.path))&&(0,C.ck)(J.path.split(o.sep))!==s.tf.SCRATCHPAD&&(0,P.lr)(J)&&(0,h.jsx)(d.Z,{onClick:function(){var n=(null===B||void 0===B?void 0:B.type)===g.qL.INTEGRATION,e=(0,C.TU)(J,on,B);t(e,(function(e){n&&Rn&&gn({block:I(I({},Rn),{},{upstream_blocks:[e.uuid]})}),null===W||void 0===W||W(e)}))},primary:!0,children:"Add to current pipeline"}),mn=U&&(0,h.jsx)(b.Z,{m:2,children:(0,h.jsx)(O.ZP,{disabled:!on,inline:!0,loading:z,onClick:function(){null===x||void 0===x||x(L.cH.TERMINAL),null===U||void 0===U||U(JSON.stringify(I(I({},tn),{},{command:["stdin","pip install -r ".concat(on,"/requirements.txt\r")]})))},title:on?"Pip install packages from your saved requirements.txt file (\u2318+S to save).":"Please use right panel terminal to install packages.",uuid:"FileEditor/InstallPackages",children:"Install packages"})}),Nn="FileEditor/".concat(null===J||void 0===J?void 0:J.path),Dn=(0,_.y)(),Ln=Dn.registerOnKeyDown,Cn=Dn.unregisterOnKeyDown;return(0,u.useEffect)((function(){return function(){Cn(Nn)}}),[Cn,Nn]),Ln(Nn,(function(n,t){if(e&&!f)if((0,k.y)([N.zX,N.Um],t)||(0,k.y)([N.PQ,N.Um],t))n.preventDefault(),An(ln,J);else if(fn&&(0,k.y)([N.zX,N.hS],t)){n.preventDefault();var r="".concat(J.path," has changes that are unsaved. ")+"Click cancel and save your changes before reloading page.";"undefined"!==typeof location&&window.confirm(r)&&location.reload()}}),[e,ln,f,J,An,fn]),(0,h.jsxs)("div",{ref:nn,children:[!M&&(0,h.jsx)(b.Z,{p:2,children:(0,h.jsxs)(v.Z,{justifyContent:"space-between",children:[(0,h.jsxs)(S,{children:[bn,(0,h.jsx)(d.Z,{disabled:!ln,onClick:function(n){n.preventDefault(),An(ln,J)},title:ln?null:"No changes have been made to this file.",children:"Save file content"})]}),x&&(0,h.jsx)(S,{children:(0,h.jsx)(d.Z,{compact:!0,onClick:function(){x(L.cH.FILE_VERSIONS)},small:!0,title:"View previous changes to this file.",children:"Show versions"})})]})}),En,T===R.dT.REQS_TXT&&mn]})}},55512:function(n,e,t){"use strict";t.d(e,{TU:function(){return f},ck:function(){return s},lU:function(){return d}});var r=t(21831),i=t(17717),o=t(86422),u=t(98781),c=t(73828),l=t(24224),a=t(90211),s=function(n){var e=n[0];return e===o.tf.DBT||e===o.tf.CUSTOM?e:n[0].slice(0,-1)};function d(){return new RegExp(Object.keys(c.nB).map((function(n){return".(".concat(n,")$")})).join("|"))}function f(n,e,t){var f,p,v=null===n||void 0===n||null===(f=n.path.match(d())[0])||void 0===f?void 0:f.split(".")[1],h=t.type===u.qL.INTEGRATION,A=(0,l.sE)(null===t||void 0===t?void 0:t.blocks,(function(n){var e=n.type;return o.tf.DATA_EXPORTER===e})),T=n.path.replace(e,"").split(i.sep),S=n.path.split(i.sep)[0]===o.tf.DBT,E=(p=T)[0]===o.tf.DBT?p.slice(1).join(i.sep):function(n){return n.at(-1)}(p).split(".")[0];if(T.length>=3&&!S){var R=T.slice(1,T.length-1).join(i.sep);E="".concat(R,"/").concat(E)}var O=s(n.path.split(i.sep)),g={configuration:{file_path:S?E:null},language:c.nB[v],name:(0,a.wE)(E),type:O};if(O===o.tf.CUSTOM&&(g.color=o.Lq.TEAL),h){var b=(0,l.sE)(t.blocks,(function(n){var e=n.type;return o.tf.DATA_LOADER===e})),m=(0,l.sE)(t.blocks,(function(n){var e=n.type;return o.tf.TRANSFORMER===e})),N=[];m?N.push(m.uuid):null!==A&&void 0!==A&&A.upstream_blocks?N.push.apply(N,(0,r.Z)(A.upstream_blocks)):b&&N.push(b.uuid),g.upstream_blocks=N}return g}},60701:function(n,e,t){"use strict";t.d(e,{Qq:function(){return f},Z7:function(){return p},cH:function(){return i},du:function(){return s},fp:function(){return a},j5:function(){return d},uM:function(){return l}});var r,i,o=t(82394),u=t(10503),c=t(24224),l="sideview",a=90;!function(n){n.ADDON_BLOCKS="addon_blocks",n.BLOCK_SETTINGS="block_settings",n.CALLBACKS="callbacks",n.CHARTS="charts",n.DATA="data",n.EXTENSIONS="power_ups",n.FILE_VERSIONS="file_versions",n.GRAPHS="graphs",n.REPORTS="reports",n.SECRETS="secrets",n.SETTINGS="settings",n.TERMINAL="terminal",n.TREE="tree",n.VARIABLES="variables"}(i||(i={}));i.BLOCK_SETTINGS,i.CALLBACKS,i.CHARTS,i.DATA,i.EXTENSIONS,i.TREE;var s=[i.DATA],d=[{key:i.TREE,label:"Tree"},{buildLabel:function(n){var e=(n.pipeline||{}).widgets,t=void 0===e?[]:e;return(null===t||void 0===t?void 0:t.length)>=1?"Charts (".concat(t.length,")"):"Charts"},key:i.CHARTS},{buildLabel:function(n){var e=n.variables;return(null===e||void 0===e?void 0:e.length)>=1?"Variables (".concat(e.length,")"):"Variables"},key:i.VARIABLES},{buildLabel:function(n){var e=n.secrets;return(null===e||void 0===e?void 0:e.length)>=1?"Secrets (".concat(e.length,")"):"Secrets"},key:i.SECRETS},{buildLabel:function(n){n.pipeline;return"Add-on blocks"},key:i.ADDON_BLOCKS},{buildLabel:function(n){var e=(n.pipeline||{}).extensions,t=void 0===e?{}:e,r=0;return Object.values(t).forEach((function(n){var e=n.blocks;r+=(null===e||void 0===e?void 0:e.length)||0})),r>=1?"Power ups (".concat(r,")"):"Power ups"},key:i.EXTENSIONS},{key:i.DATA,label:"Data"},{key:i.TERMINAL,label:"Terminal"},{key:i.BLOCK_SETTINGS,label:"Block settings"}],f=(0,c.HK)(d,(function(n){return n.key})),p=(r={},(0,o.Z)(r,i.ADDON_BLOCKS,u.EJ),(0,o.Z)(r,i.BLOCK_SETTINGS,u.JG),(0,o.Z)(r,i.CALLBACKS,u.AQ),(0,o.Z)(r,i.CHARTS,u.GQ),(0,o.Z)(r,i.DATA,u.iA),(0,o.Z)(r,i.EXTENSIONS,u.Bf),(0,o.Z)(r,i.SECRETS,u.Yo),(0,o.Z)(r,i.SETTINGS,u.Zr),(0,o.Z)(r,i.TERMINAL,u.oI),(0,o.Z)(r,i.TREE,u.mp),(0,o.Z)(r,i.VARIABLES,u.LO),r)},84392:function(n,e,t){"use strict";t.d(e,{HF:function(){return u},L6:function(){return r}});var r,i=t(46336),o=t(10503);function u(n,e,t){var u=n.owner,c=(n.roles,[{Icon:o.Vz,id:r.WORKSPACES,isSelected:function(){return r.WORKSPACES===t},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}]);return u&&c.push({Icon:o.NO,id:r.USERS,isSelected:function(){return r.USERS===t},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),e==i.k.MAIN&&c.push({Icon:o.Zr,id:r.SETTINGS,isSelected:function(){return r.SETTINGS===t},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}}),c}!function(n){n.WORKSPACES="workspaces",n.USERS="users",n.SETTINGS="settings"}(r||(r={}))},3849:function(n,e,t){"use strict";var r=t(82684),i=t(1210),o=t(82531),u=t(49125),c=t(84392),l=t(9736),a=t(28598);e.Z=function(n){var e=n.before,t=n.breadcrumbs,s=void 0===t?[]:t,d=n.children,f=n.errors,p=n.pageName,v=n.subheaderChildren,h=o.ZP.statuses.list().data,A=(0,r.useMemo)((function(){var n,e;return null===h||void 0===h||null===(n=h.statuses)||void 0===n||null===(e=n[0])||void 0===e?void 0:e.project_type}),[h]),T=(0,l.PR)()||{};return(0,a.jsx)(i.Z,{before:e,beforeWidth:e?50*u.iI:0,breadcrumbs:s,errors:f,navigationItems:(0,c.HF)(T,A,p),subheaderChildren:v,title:"Workspaces",uuid:"workspaces/index",children:d})}},86422:function(n,e,t){"use strict";t.d(e,{$W:function(){return v},DA:function(){return p},HX:function(){return T},J8:function(){return A},L8:function(){return u},Lq:function(){return d},M5:function(){return f},Qj:function(){return S},Ut:function(){return g},V4:function(){return O},VZ:function(){return h},dO:function(){return s},f2:function(){return R},iZ:function(){return E},t6:function(){return c},tf:function(){return a}});var r,i,o,u,c,l=t(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(u||(u={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(c||(c={}));var a,s=(r={},(0,l.Z)(r,c.MARKDOWN,"MD"),(0,l.Z)(r,c.PYTHON,"PY"),(0,l.Z)(r,c.R,"R"),(0,l.Z)(r,c.SQL,"SQL"),(0,l.Z)(r,c.YAML,"YAML"),r);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(a||(a={}));var d,f=[a.CALLBACK,a.CONDITIONAL,a.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(d||(d={}));var p,v=[a.CHART,a.CUSTOM,a.DATA_EXPORTER,a.DATA_LOADER,a.SCRATCHPAD,a.SENSOR,a.MARKDOWN,a.TRANSFORMER],h=[a.DATA_EXPORTER,a.DATA_LOADER],A=[a.DATA_EXPORTER,a.DATA_LOADER,a.TRANSFORMER],T=[a.DATA_EXPORTER,a.DATA_LOADER,a.DBT,a.TRANSFORMER],S=[a.CHART,a.SCRATCHPAD,a.SENSOR,a.MARKDOWN],E=[a.CALLBACK,a.CHART,a.EXTENSION,a.SCRATCHPAD,a.MARKDOWN];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(p||(p={}));var R=[a.CUSTOM,a.DATA_EXPORTER,a.DATA_LOADER,a.TRANSFORMER],O=(i={},(0,l.Z)(i,a.CALLBACK,"Callback"),(0,l.Z)(i,a.CUSTOM,"Custom"),(0,l.Z)(i,a.DATA_EXPORTER,"Data exporter"),(0,l.Z)(i,a.DATA_LOADER,"Data loader"),(0,l.Z)(i,a.EXTENSION,"Extension"),(0,l.Z)(i,a.SCRATCHPAD,"Scratchpad"),(0,l.Z)(i,a.SENSOR,"Sensor"),(0,l.Z)(i,a.MARKDOWN,"Markdown"),(0,l.Z)(i,a.TRANSFORMER,"Transformer"),i),g=[a.DATA_LOADER,a.TRANSFORMER,a.DATA_EXPORTER,a.SENSOR];o={},(0,l.Z)(o,a.DATA_EXPORTER,"DE"),(0,l.Z)(o,a.DATA_LOADER,"DL"),(0,l.Z)(o,a.SCRATCHPAD,"SP"),(0,l.Z)(o,a.SENSOR,"SR"),(0,l.Z)(o,a.MARKDOWN,"MD"),(0,l.Z)(o,a.TRANSFORMER,"TF")},73828:function(n,e,t){"use strict";t.d(e,{JD:function(){return A},Lu:function(){return o},PF:function(){return p},d2:function(){return f},dT:function(){return u},n6:function(){return a},nB:function(){return h},oy:function(){return v},xF:function(){return d}});var r,i,o,u,c=t(82394),l=t(86422);!function(n){n.CSV="csv",n.JSON="json",n.MD="md",n.PY="py",n.R="r",n.SQL="sql",n.TXT="txt",n.YAML="yaml",n.YML="yml"}(o||(o={})),function(n){n.INIT_PY="__init__.py",n.METADATA_YAML="metadata.yaml",n.REQS_TXT="requirements.txt"}(u||(u={}));var a=[o.PY,o.SQL],s=[o.JSON,o.MD,o.PY,o.R,o.SQL,o.TXT,o.YAML,o.YML],d=new RegExp(s.map((function(n){return".".concat(n,"$")})).join("|")),f=new RegExp(s.map((function(n){return".".concat(n,"$")})).join("|")),p="charts",v="pipelines",h=(r={},(0,c.Z)(r,o.MD,l.t6.MARKDOWN),(0,c.Z)(r,o.JSON,o.JSON),(0,c.Z)(r,o.PY,l.t6.PYTHON),(0,c.Z)(r,o.R,l.t6.R),(0,c.Z)(r,o.SQL,l.t6.SQL),(0,c.Z)(r,o.TXT,"text"),(0,c.Z)(r,o.YAML,l.t6.YAML),(0,c.Z)(r,o.YML,l.t6.YAML),r),A=(i={},(0,c.Z)(i,l.t6.MARKDOWN,o.MD),(0,c.Z)(i,l.t6.PYTHON,o.PY),(0,c.Z)(i,l.t6.R,o.R),(0,c.Z)(i,l.t6.SQL,o.SQL),(0,c.Z)(i,l.t6.YAML,o.YAML),(0,c.Z)(i,"text",o.TXT),i)},98781:function(n,e,t){"use strict";t.d(e,{$1:function(){return s},G7:function(){return f},LM:function(){return p},Mj:function(){return v},QK:function(){return a},a_:function(){return h},qL:function(){return u},r0:function(){return d}});var r,i,o,u,c=t(82394),l=t(10503);!function(n){n.INTEGRATION="integration",n.PYTHON="python",n.PYSPARK="pyspark",n.STREAMING="streaming"}(u||(u={}));var a,s,d,f=(r={},(0,c.Z)(r,u.INTEGRATION,"Integration"),(0,c.Z)(r,u.PYTHON,"Standard"),(0,c.Z)(r,u.PYSPARK,"PySpark"),(0,c.Z)(r,u.STREAMING,"Streaming"),r),p="all",v=(u.PYTHON,u.INTEGRATION,u.STREAMING,i={},(0,c.Z)(i,p,l.ie),(0,c.Z)(i,u.INTEGRATION,l.YC),(0,c.Z)(i,u.PYTHON,l.El),(0,c.Z)(i,u.STREAMING,l.dB),i);!function(n){n.ACTIVE="active",n.INACTIVE="inactive",n.NO_SCHEDULES="no_schedules",n.RETRY="retry"}(a||(a={})),function(n){n.GROUP="group_by",n.STATUS="status[]",n.TAG="tag[]",n.TYPE="type[]"}(s||(s={})),function(n){n.STATUS="status",n.TAG="tag",n.TYPE="type"}(d||(d={}));var h=(o={},(0,c.Z)(o,u.PYTHON,"python3"),(0,c.Z)(o,u.PYSPARK,"pysparkkernel"),o)},46336:function(n,e,t){"use strict";var r;t.d(e,{k:function(){return r}}),function(n){n.MAIN="main",n.STANDALONE="standalone",n.SUB="sub"}(r||(r={}))},3938:function(n,e,t){"use strict";t.r(e);var r=t(77837),i=t(38860),o=t.n(i),u=t(82684),c=t(91207),l=t(41788),a=t(3849),s=t(84392),d=t(28598);function f(){var n=(0,u.useState)(null),e=n[0];n[1];return(0,d.jsx)(a.Z,{breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{bold:!0,label:function(){return"Settings"}}],errors:e,pageName:s.L6.SETTINGS,children:(0,d.jsx)(c.Z,{active:!0,filePath:"metadata.yaml",selectedFilePath:"metadata.yaml",setFilesTouched:function(){return null}})})}f.getInitialProps=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{});case 1:case"end":return n.stop()}}),n)}))),e.default=(0,l.Z)(f)},37958:function(n,e,t){"use strict";t.d(e,{j:function(){return r}});var r=(0,t(44152).r)({apiReloads:{}}).useGlobalState},90211:function(n,e,t){"use strict";t.d(e,{RA:function(){return s},kC:function(){return d},vg:function(){return S},kE:function(){return b},Mp:function(){return f},Pb:function(){return l},HW:function(){return R},wX:function(){return p},x6:function(){return v},_6:function(){return h},zf:function(){return E},Y6:function(){return g},wE:function(){return m},J3:function(){return A},We:function(){return a},QV:function(){return O},C5:function(){return T}});var r=t(75582),i=t(17717),o=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],u=(t(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),c=t(24224);function l(n){if(!n)return!1;try{JSON.parse(n)}catch(e){return!1}return!0}function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(e)}function s(n){return n.split(" ").join("_")}function d(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function p(n){return n.charAt(0).toLowerCase()+n.slice(1)}function v(n){if(null===n||"undefined"===typeof n)return"";var e=n.toString().split("."),t=(0,r.Z)(e,2),i=t[0],o=t[1],u=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return o?"".concat(u,".").concat(o):u}function h(n,e){var t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e,o=void 0!==i&&null!==i;if(o||(i=2),1===i)t=n;else{var u=n.length,c=n[u-1];t="y"===c&&"day"!==n?"".concat(n.slice(0,u-1),"ies"):"".concat(n,"s"===c?"es":"s")}if(o){var l=r?v(i):i;return"".concat(l," ").concat(t)}return t}function A(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function T(n){var e=n.length;return"ies"===n.slice(e-3,e)?"".concat(n.slice(0,e-3),"y"):"es"===n.slice(e-2,e)&&"ces"!==n.slice(e-3,e)?n.slice(0,e-2):n.slice(0,e-1)}function S(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d(A(n.toLowerCase()))}function E(n){var e,t=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return t.forEach((function(i,o){if(!e){var u=(0,r.Z)(i,2),c=u[0],l=u[1],a=t.slice(0,o).reduce((function(n,e){return n*Number(e[1])}),1);n<Number(l)*a&&(e=h(c,Math.round(n/a)))}})),e}function R(n){return!isNaN(n)}function O(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,e);return Math.round((n||0)*t)/t}function g(){return"".concat((0,c.mp)(o)," ").concat((0,c.mp)(u))}function b(n){return null===n||void 0===n?void 0:n.toLowerCase().replace(/\W+/g,"_")}function m(n){var e,t=n.split(i.sep),r=t[t.length-1].split(".");return e=1===r.length?r[0]:r.slice(0,-1).join("."),t.slice(0,t.length-1).concat(e).join(i.sep)}},1116:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/settings",function(){return t(3938)}])}},function(n){n.O(0,[844,9902,8789,4398,1424,1005,7722,9774,2888,179],(function(){return e=1116,n(n.s=e);var e}));var e=n.O();_N_E=e}]);