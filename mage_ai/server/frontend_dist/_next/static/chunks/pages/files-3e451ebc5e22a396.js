(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7869],{44162:function(n,e,t){"use strict";t.d(e,{HC:function(){return y},Kf:function(){return d},Nk:function(){return f},PY:function(){return p},gE:function(){return b},jv:function(){return v},nz:function(){return h},oh:function(){return a},qn:function(){return s},t1:function(){return m},y9:function(){return g}});var r=t(38626),i=t(23831),o=t(86422),c=t(73942),u=t(49125),l=t(90880),a=68;function s(n,e){var t,r,c=((null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.borders)||i.Z.borders).light,u=((null===e||void 0===e||null===(r=e.theme)||void 0===r?void 0:r.monotone)||i.Z.monotone).grey500,l=e||{},a=l.blockColor,s=l.isSelected,d=l.theme;return s?c=(d||i.Z).content.active:o.tf.TRANSFORMER===n||a===o.Lq.PURPLE?(c=(d||i.Z).accent.purple,u=(d||i.Z).accent.purpleLight):o.tf.DATA_EXPORTER===n||a===o.Lq.YELLOW?(c=(d||i.Z).accent.yellow,u=(d||i.Z).accent.yellowLight):o.tf.DATA_LOADER===n||a===o.Lq.BLUE?(c=(d||i.Z).accent.blue,u=(d||i.Z).accent.blueLight):o.tf.MARKDOWN===n?(c=(d||i.Z).accent.sky,u=(d||i.Z).accent.skyLight):o.tf.SENSOR===n||a===o.Lq.PINK?(c=(d||i.Z).accent.pink,u=(d||i.Z).accent.pinkLight):o.tf.DBT===n?(c=(d||i.Z).accent.dbt,u=(d||i.Z).accent.dbtLight):o.tf.EXTENSION===n||a===o.Lq.TEAL?(c=((null===d||void 0===d?void 0:d.accent)||i.Z.accent).teal,u=((null===d||void 0===d?void 0:d.accent)||i.Z.accent).tealLight):o.tf.CALLBACK===n?(c=((null===d||void 0===d?void 0:d.accent)||i.Z.accent).rose,u=((null===d||void 0===d?void 0:d.accent)||i.Z.accent).roseLight):(o.tf.CONDITIONAL===n||o.tf.SCRATCHPAD===n||a===o.Lq.GREY||o.tf.CUSTOM===n&&!a)&&(c=(d||i.Z).content.default,u=(d||i.Z).accent.contentDefaultTransparent),{accent:c,accentLight:u}}var d=(0,r.css)([""," "," "," "," "," "," ",""],(0,l.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(s(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(s(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||i.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||i.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),f=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),p=r.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],d,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||i.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(s(n.blockType,n).accent,";\n    }\n  ")})),h=r.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-2"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," "," ",""],d,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,u.iI,(function(n){return"\n    background-color: ".concat((n.theme||i.Z).background.content,";\n  ")}),(function(n){return n.bottomBorder&&"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((n.theme||i.Z).borders.medium2,";\n  ")}),(function(n){return n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")})),v=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-3"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;position:relative;"," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],d,c.M8,c.mP,c.M8,c.mP,u.iI,u.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||i.Z.background).codeTextarea,";\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||i.Z).background.content,";\n  ")}),(function(n){return!n.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),b=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-4"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*u.iI,.5*u.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||i.Z.text).fileBrowser,";\n      ")})),m=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-5"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*u.iI),g=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-6"})(["margin-bottom:","px;padding-bottom:","px;",""],1*u.iI,1*u.iI,(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||i.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?u.iI:a,"px;\n  ")})),y=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-7"})(["bottom:","px;left:","px;position:absolute;"],1*u.iI,a)},1210:function(n,e,t){"use strict";t.d(e,{Z:function(){return C}});var r=t(82394),i=t(21831),o=t(82684),c=t(47999),u=t(49894),l=t(93461),a=t(57384),s=t(41424),d=t(72454),f=t(28598);function p(n,e){var t=n.children;return(0,f.jsx)(d.HS,{ref:e,children:t})}var h=o.forwardRef(p),v=t(32063),b=t(85019),m=t(82531),g=t(66166),y=t(3055),O=t(49125),A=t(91427),E=t(24141);function S(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function T(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?S(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var C=function(n){var e,t=n.after,r=n.afterHidden,p=n.afterWidth,S=n.afterWidthOverride,C=n.before,R=n.beforeWidth,w=n.breadcrumbs,x=n.children,N=n.errors,Z=n.headerMenuItems,_=n.headerOffset,j=n.mainContainerHeader,P=n.navigationItems,k=n.setErrors,D=n.subheaderChildren,I=n.title,L=n.uuid,M=(0,E.i)().width,H="dashboard_after_width_".concat(L),B="dashboard_before_width_".concat(L),F=(0,o.useRef)(null),z=(0,o.useState)(S?p:(0,A.U2)(H,p)),K=z[0],Y=z[1],U=(0,o.useState)(!1),X=U[0],G=U[1],V=(0,o.useState)(C?Math.max((0,A.U2)(B,R),13*O.iI):null),W=V[0],Q=V[1],q=(0,o.useState)(!1),J=q[0],$=q[1],nn=(0,o.useState)(null)[1],en=m.ZP.projects.list({},{revalidateOnFocus:!1}).data,tn=null===en||void 0===en?void 0:en.projects,rn=[];w?rn.push.apply(rn,(0,i.Z)(w)):(null===tn||void 0===tn?void 0:tn.length)>=1&&rn.push.apply(rn,[{label:function(){var n;return null===(n=tn[0])||void 0===n?void 0:n.name},linkProps:{href:"/"}},{bold:!0,label:function(){return I}}]),(0,o.useEffect)((function(){null===F||void 0===F||!F.current||X||J||null===nn||void 0===nn||nn(F.current.getBoundingClientRect().width)}),[X,K,J,W,F,nn,M]),(0,o.useEffect)((function(){X||(0,A.t8)(H,K)}),[r,X,K,H]),(0,o.useEffect)((function(){J||(0,A.t8)(B,W)}),[J,W,B]);var on=(0,g.Z)(p);return(0,o.useEffect)((function(){S&&on!==p&&Y(p)}),[S,p,on]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:I}),(0,f.jsx)(s.Z,{breadcrumbs:rn,menuItems:Z,project:null===tn||void 0===tn?void 0:tn[0],version:null===tn||void 0===tn||null===(e=tn[0])||void 0===e?void 0:e.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===P||void 0===P?void 0:P.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(b.Z,{navigationItems:P,showMore:!0})}),(0,f.jsx)(l.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(v.Z,{after:t,afterHeightOffset:y.Mz,afterHidden:r,afterMousedownActive:X,afterWidth:K,before:C,beforeHeightOffset:y.Mz,beforeMousedownActive:J,beforeWidth:d.k1+(C?W:0),headerOffset:_,hideAfterCompletely:!0,leftOffset:C?d.k1:null,mainContainerHeader:j,mainContainerRef:F,setAfterMousedownActive:G,setAfterWidth:Y,setBeforeMousedownActive:$,setBeforeWidth:Q,children:[D&&(0,f.jsx)(h,{children:D}),x]})})]}),N&&(0,f.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===k||void 0===k?void 0:k(null)},children:(0,f.jsx)(u.Z,T(T({},N),{},{onClose:function(){return null===k||void 0===k?void 0:k(null)}}))})]})}},60701:function(n,e,t){"use strict";t.d(e,{Qq:function(){return f},Z7:function(){return p},cH:function(){return i},du:function(){return s},fp:function(){return a},j5:function(){return d},uM:function(){return l}});var r,i,o=t(82394),c=t(10503),u=t(24224),l="sideview",a=90;!function(n){n.ADDON_BLOCKS="addon_blocks",n.BLOCK_SETTINGS="block_settings",n.CALLBACKS="callbacks",n.CHARTS="charts",n.DATA="data",n.EXTENSIONS="power_ups",n.FILE_VERSIONS="file_versions",n.GRAPHS="graphs",n.REPORTS="reports",n.SECRETS="secrets",n.SETTINGS="settings",n.TERMINAL="terminal",n.TREE="tree",n.VARIABLES="variables"}(i||(i={}));i.BLOCK_SETTINGS,i.CALLBACKS,i.CHARTS,i.DATA,i.EXTENSIONS,i.TREE;var s=[i.DATA],d=[{key:i.TREE,label:"Tree"},{buildLabel:function(n){var e=(n.pipeline||{}).widgets,t=void 0===e?[]:e;return(null===t||void 0===t?void 0:t.length)>=1?"Charts (".concat(t.length,")"):"Charts"},key:i.CHARTS},{buildLabel:function(n){var e=n.variables;return(null===e||void 0===e?void 0:e.length)>=1?"Variables (".concat(e.length,")"):"Variables"},key:i.VARIABLES},{buildLabel:function(n){var e=n.secrets;return(null===e||void 0===e?void 0:e.length)>=1?"Secrets (".concat(e.length,")"):"Secrets"},key:i.SECRETS},{buildLabel:function(n){n.pipeline;return"Add-on blocks"},key:i.ADDON_BLOCKS},{buildLabel:function(n){var e=(n.pipeline||{}).extensions,t=void 0===e?{}:e,r=0;return Object.values(t).forEach((function(n){var e=n.blocks;r+=(null===e||void 0===e?void 0:e.length)||0})),r>=1?"Power ups (".concat(r,")"):"Power ups"},key:i.EXTENSIONS},{key:i.DATA,label:"Data"},{key:i.TERMINAL,label:"Terminal"},{key:i.BLOCK_SETTINGS,label:"Block settings"}],f=(0,u.HK)(d,(function(n){return n.key})),p=(r={},(0,o.Z)(r,i.ADDON_BLOCKS,c.EJ),(0,o.Z)(r,i.BLOCK_SETTINGS,c.JG),(0,o.Z)(r,i.CALLBACKS,c.AQ),(0,o.Z)(r,i.CHARTS,c.GQ),(0,o.Z)(r,i.DATA,c.iA),(0,o.Z)(r,i.EXTENSIONS,c.Bf),(0,o.Z)(r,i.SECRETS,c.Yo),(0,o.Z)(r,i.SETTINGS,c.Zr),(0,o.Z)(r,i.TERMINAL,c.oI),(0,o.Z)(r,i.TREE,c.mp),(0,o.Z)(r,i.VARIABLES,c.LO),r)},86422:function(n,e,t){"use strict";t.d(e,{$W:function(){return h},DA:function(){return p},HX:function(){return m},J8:function(){return b},L8:function(){return c},Lq:function(){return d},M5:function(){return f},Qj:function(){return g},Ut:function(){return E},V4:function(){return A},VZ:function(){return v},dO:function(){return s},f2:function(){return O},iZ:function(){return y},t6:function(){return u},tf:function(){return a}});var r,i,o,c,u,l=t(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(c||(c={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(u||(u={}));var a,s=(r={},(0,l.Z)(r,u.MARKDOWN,"MD"),(0,l.Z)(r,u.PYTHON,"PY"),(0,l.Z)(r,u.R,"R"),(0,l.Z)(r,u.SQL,"SQL"),(0,l.Z)(r,u.YAML,"YAML"),r);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(a||(a={}));var d,f=[a.CALLBACK,a.CONDITIONAL,a.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(d||(d={}));var p,h=[a.CHART,a.CUSTOM,a.DATA_EXPORTER,a.DATA_LOADER,a.SCRATCHPAD,a.SENSOR,a.MARKDOWN,a.TRANSFORMER],v=[a.DATA_EXPORTER,a.DATA_LOADER],b=[a.DATA_EXPORTER,a.DATA_LOADER,a.TRANSFORMER],m=[a.DATA_EXPORTER,a.DATA_LOADER,a.DBT,a.TRANSFORMER],g=[a.CHART,a.SCRATCHPAD,a.SENSOR,a.MARKDOWN],y=[a.CALLBACK,a.CHART,a.EXTENSION,a.SCRATCHPAD,a.MARKDOWN];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(p||(p={}));var O=[a.CUSTOM,a.DATA_EXPORTER,a.DATA_LOADER,a.TRANSFORMER],A=(i={},(0,l.Z)(i,a.CALLBACK,"Callback"),(0,l.Z)(i,a.CUSTOM,"Custom"),(0,l.Z)(i,a.DATA_EXPORTER,"Data exporter"),(0,l.Z)(i,a.DATA_LOADER,"Data loader"),(0,l.Z)(i,a.EXTENSION,"Extension"),(0,l.Z)(i,a.SCRATCHPAD,"Scratchpad"),(0,l.Z)(i,a.SENSOR,"Sensor"),(0,l.Z)(i,a.MARKDOWN,"Markdown"),(0,l.Z)(i,a.TRANSFORMER,"Transformer"),i),E=[a.DATA_LOADER,a.TRANSFORMER,a.DATA_EXPORTER,a.SENSOR];o={},(0,l.Z)(o,a.DATA_EXPORTER,"DE"),(0,l.Z)(o,a.DATA_LOADER,"DL"),(0,l.Z)(o,a.SCRATCHPAD,"SP"),(0,l.Z)(o,a.SENSOR,"SR"),(0,l.Z)(o,a.MARKDOWN,"MD"),(0,l.Z)(o,a.TRANSFORMER,"TF")},98781:function(n,e,t){"use strict";t.d(e,{$1:function(){return s},G7:function(){return f},LM:function(){return p},Mj:function(){return h},QK:function(){return a},a_:function(){return v},qL:function(){return c},r0:function(){return d}});var r,i,o,c,u=t(82394),l=t(10503);!function(n){n.INTEGRATION="integration",n.PYTHON="python",n.PYSPARK="pyspark",n.STREAMING="streaming"}(c||(c={}));var a,s,d,f=(r={},(0,u.Z)(r,c.INTEGRATION,"Integration"),(0,u.Z)(r,c.PYTHON,"Standard"),(0,u.Z)(r,c.PYSPARK,"PySpark"),(0,u.Z)(r,c.STREAMING,"Streaming"),r),p="all",h=(c.PYTHON,c.INTEGRATION,c.STREAMING,i={},(0,u.Z)(i,p,l.ie),(0,u.Z)(i,c.INTEGRATION,l.YC),(0,u.Z)(i,c.PYTHON,l.El),(0,u.Z)(i,c.STREAMING,l.dB),i);!function(n){n.ACTIVE="active",n.INACTIVE="inactive",n.NO_SCHEDULES="no_schedules",n.RETRY="retry"}(a||(a={})),function(n){n.GROUP="group_by",n.STATUS="status[]",n.TAG="tag[]",n.TYPE="type[]"}(s||(s={})),function(n){n.STATUS="status",n.TAG="tag",n.TYPE="type"}(d||(d={}));var v=(o={},(0,u.Z)(o,c.PYTHON,"python3"),(0,u.Z)(o,c.PYSPARK,"pysparkkernel"),o)},87372:function(n,e,t){"use strict";var r,i,o,c,u,l,a,s,d=t(82394),f=t(26304),p=t(26653),h=t(38626),v=t(33591),b=t(23831),m=t(2005),g=t(31012),y=t(19711),O=t(49125),A=t(86673),E=t(28598),S=["children","condensed","inline","level","marketing","spacingBelow"];function T(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function C(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?T(Object(t),!0).forEach((function(e){(0,d.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var R=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],y.IH,(function(n){return n.color&&"\n    color: ".concat(n.color,"\n  ")}),(function(n){return n.yellow&&"\n    color: ".concat((n.theme.accent||b.Z.accent).yellow,";\n  ")}),(function(n){return n.center&&"\n    text-align: center;\n  "}),(function(n){return!n.monospace&&0===Number(n.weightStyle)&&"\n    font-family: ".concat(m.iI,";\n  ")}),(function(n){return!n.monospace&&1===Number(n.weightStyle)&&"\n    font-family: ".concat(m.LX,";\n  ")}),(function(n){return!n.monospace&&2===Number(n.weightStyle)&&"\n    font-family: ".concat(m.LX,";\n  ")}),(function(n){return!n.monospace&&3===Number(n.weightStyle)&&"\n    font-family: ".concat(m.ry,";\n  ")}),(function(n){return!n.monospace&&4===Number(n.weightStyle)&&"\n    font-family: ".concat(m.YC,";\n  ")}),(function(n){return!n.monospace&&5===Number(n.weightStyle)&&"\n    font-family: ".concat(m.nF,";\n  ")}),(function(n){return!n.monospace&&(6===Number(n.weightStyle)||n.bold)&&"\n    font-family: ".concat(m.nF,";\n  ")}),(function(n){return!n.monospace&&7===Number(n.weightStyle)&&"\n    font-family: ".concat(m.nF,";\n  ")}),(function(n){return!n.monospace&&8===Number(n.weightStyle)&&"\n    font-family: ".concat(m.nF,";\n  ")}),(function(n){return n.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),w=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(n){return"\n    color: ".concat((n.theme.content||b.Z.content).active,";\n  ")})),x=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],R,v.media.md(r||(r=(0,p.Z)(["\n    ","\n  "])),g.aQ),v.media.lg(i||(i=(0,p.Z)(["\n    ","\n  "])),g.aQ),v.media.xl(o||(o=(0,p.Z)(["\n    ","\n  "])),g.aQ)),N=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],R,g.MJ),Z=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],R,v.media.xs(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*O.iI,7*O.iI),v.media.sm(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*O.iI,7*O.iI),v.media.md(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*O.iI,7*O.iI),v.media.lg(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*O.iI,7*O.iI),v.media.xl(s||(s=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*O.iI,7*O.iI)),_=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],R,g.BL),j=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],R),P=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],R),k=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],R),D=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],R,(function(n){return 1===n.level&&"\n    ".concat(g.MJ,"\n  ")}),(function(n){return 2===n.level&&"\n    ".concat(g.BL,"\n  ")}),(function(n){return 3===n.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(n){return 4===n.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),I=function(n){var e,t=n.children,r=n.condensed,i=n.inline,o=n.level,c=n.marketing,u=n.spacingBelow,l=(0,f.Z)(n,S);i?e=D:0===Number(o)?e=x:1===Number(o)?e=c?Z:N:2===Number(o)?e=_:3===Number(o)?e=j:4===Number(o)?e=P:5===Number(o)&&(e=k);var a=(0,E.jsxs)(e,C(C({},l),{},{level:o,children:[u&&(0,E.jsx)(A.Z,{mb:r?2:3,children:t}),!u&&t]}));return i?a:(0,E.jsx)(w,{children:a})};I.defaultProps={level:3,weightStyle:6},e.Z=I},55389:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return q}});var r=t(77837),i=t(38860),o=t.n(i),c=t(82394),u=t(75582),l=t(17717),a=t(82684),s=t(37958),d=t(83455),f=t(48591),p=t(1210),h=t(46299),v=t(91207),b=t(47999),m=t(67971),g=t(62084),y=t(19711),O=t(16115),A=t(64318),E=t(54405),S=t(41150),T=t(28598);var C=function(n){var e=n.children,t=n.fileVersionsVisible,r=n.onSave,i=n.setFilesVersionsVisible,o=(0,a.useState)(null),c=o[0],u=o[1],l=(0,a.useRef)(null),s=(0,a.useRef)(null),d=(0,a.useMemo)((function(){return[{disabled:!r,keyTextGroups:[[(0,E.V5)()?O.RJ:O.hE,O.SS]],label:function(){return"Save"},onClick:function(){return r?r():null},uuid:"save"}]}),[r]),f=(0,a.useMemo)((function(){return[{label:function(){return t?"Hide versions":"Show versions"},onClick:function(){return i(!t)},uuid:"versions"}]}),[t,i]),p="FileHeaderMenu/index",h=(0,S.y)(),v=h.registerOnKeyDown,C=h.unregisterOnKeyDown;return(0,a.useEffect)((function(){return function(){C(p)}}),[C,p]),v(p,(function(n,e){null!==c&&(e[O.QK]?u((function(n){return 0===n?2:n-1})):e[O.DY]&&u((function(n){return 2===n?0:n+1})))}),[c,u]),(0,T.jsx)(b.Z,{onClickOutside:function(){return u(null)},open:!0,style:{position:"relative"},children:(0,T.jsxs)(m.Z,{children:[(0,T.jsxs)("div",{style:{position:"relative"},children:[(0,T.jsx)(A.u,{highlighted:0===c,onClick:function(){return u((function(n){return 0===n?null:0}))},onMouseEnter:function(){return u((function(n){return null!==n?0:null}))},ref:l,children:(0,T.jsx)(y.ZP,{children:"File"})}),(0,T.jsx)(g.Z,{items:d,onClickCallback:function(){return u(null)},open:0===c,parentRef:l,uuid:"FileHeaderMenu/file"})]}),(0,T.jsxs)("div",{style:{position:"relative"},children:[(0,T.jsx)(A.u,{highlighted:1===c,onClick:function(){return u((function(n){return 1===n?null:1}))},onMouseEnter:function(){return u((function(n){return null!==n?1:null}))},ref:s,children:(0,T.jsx)(y.ZP,{children:"Edit"})}),(0,T.jsx)(g.Z,{items:f,onClickCallback:function(){return u(null)},open:1===c,parentRef:s,uuid:"FileHeaderMenu/edit"})]}),e]})})},R=t(38488),w=t(23351),x=t(82531),N=t(38626),Z=t(23831),_=t(82386),j=t(3055),P=t(37391),k=72-_.uX+j.Mz,D=N.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-11pty4f-0"})(["height:","px;top:","px;z-index:3;",""],72,j.Mz,(function(n){return"\n    background-color: ".concat((n.theme.background||Z.Z.background).codeArea,";\n  ")})),I=N.default.div.withConfig({displayName:"indexstyle__MenuStyle",componentId:"sc-11pty4f-1"})(["height:","px;position:relative;z-index:1;",""],36,(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||Z.Z.borders).medium,";\n  ")})),L=N.default.div.withConfig({displayName:"indexstyle__TabsStyle",componentId:"sc-11pty4f-2"})([""," height:","px;overflow-x:auto;position:sticky;width:100%;z-index:0;"],(0,P.y$)(),36),M=t(91427),H=t(24224),B="open_files";function F(n){(0,M.t8)(B,n)}var z=t(96510),K=t(51504),Y=t(9728);function U(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function X(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?U(Object(t),!0).forEach((function(e){(0,c.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function G(n){var e=n.split(l.sep);return e[e.length-1]}var V=function(){var n=(0,s.j)("apiReloads"),e=(0,u.Z)(n,2)[1],t=(0,a.useRef)(null),r=(0,a.useRef)(null),i=(0,a.useCallback)((function(n){r.current||(r.current={}),r.current=X(X({},r.current),n)}),[r]),o=(0,a.useState)([]),l=o[0],b=o[1],m=(0,a.useState)(null),g=m[0],y=m[1],A=(0,a.useState)({}),E=A[0],N=A[1],Z=(0,a.useState)(!1),_=Z[0],j=Z[1],P=(0,a.useMemo)((function(){return l.reduce((function(n,e){var t=G(e);return n[t]||(n[t]=[]),n[t].push(e),n}),{})}),[l]),U=(0,a.useCallback)((function(n){F(n),b(n)}),[]),V=(0,a.useCallback)((function(n){U(function(n){var e=(0,M.U2)(B,[]);return e.includes(n)||e.push(n),F(e),e}(n))}),[U]),W=(0,a.useCallback)((function(n){i((0,c.Z)({},n,null)),N((function(e){return X(X({},e),{},(0,c.Z)({},n,!1))}));var e=function(n){var e=(0,M.U2)(B,[]),t=(0,H.Od)(e,(function(e){return e===n}));return F(t),t}(n);U(e),g===n&&(null===e||void 0===e?void 0:e.length)>=1&&y(e[e.length-1]),0===(null===e||void 0===e?void 0:e.length)&&y(null)}),[g,i,U]),Q=(0,a.useCallback)((function(n,e){e||(V(n),y(n))}),[V]);(0,a.useEffect)((function(){var n=(0,M.U2)(B,[]);U(n),y((function(e){return!e&&(null===n||void 0===n?void 0:n.length)>=1?n[0]:e}))}),[U]);var q=x.ZP.files.list(),J=q.data,$=q.mutate,nn=(0,a.useMemo)((function(){return(null===J||void 0===J?void 0:J.files)||[]}),[J]),en=(0,Y.VI)(null,{},[],{uuid:"FilesPage"}),tn=(0,u.Z)(en,1)[0],rn="Files/index",on=(0,S.y)(),cn=(on.disableGlobalKeyboardShortcuts,on.registerOnKeyDown),un=on.unregisterOnKeyDown;(0,a.useEffect)((function(){return function(){un(rn)}}),[un,rn]),cn(rn,(function(n,e){var t=Object.entries(E).reduce((function(n,e){var t=(0,u.Z)(e,2),r=t[0];return t[1]?n.concat(r):n}),[]);if((0,K.y)([O.zX,O.hS],e)&&(null===t||void 0===t?void 0:t.length)>=1){n.preventDefault();var r="You have changes that are unsaved: ".concat(t.join(", "),". ")+"Click cancel and save your changes before reloading page.";"undefined"!==typeof location&&window.confirm(r)&&location.reload()}}),[E]);var ln=(0,a.useMemo)((function(){return(0,T.jsx)(R.Z,{filePaths:l,filesTouched:E,isSelectedFilePath:function(n,e){return n===e},onClickTab:function(n){return y(n)},onClickTabClose:function(n){return W(n)},renderTabTitle:function(n){var e=G(n),t=P[e];return t&&(null===t||void 0===t?void 0:t.length)>=2?n:e},selectedFilePath:g})}),[E,l,P,W,g]),an=(0,a.useMemo)((function(){return(0,T.jsx)(h.Z,{fetchFileTree:$,files:nn,onClickFile:function(n){return Q(n)},onClickFolder:function(n){return Q(n,!0)},onCreateFile:function(n){var e=n.path;return Q(e)},ref:t,setErrors:tn})}),[$,t,nn,Q,tn]),sn=(0,d.Db)((function(n){return x.ZP.file_contents.useUpdate((null===n||void 0===n?void 0:n.path)&&encodeURIComponent(null===n||void 0===n?void 0:n.path))({file_content:n})}),{onSuccess:function(n){return(0,z.wD)(n,{callback:function(n){var t=n.file_content;e((function(n){return X(X({},n),{},(0,c.Z)({},"FileVersions/".concat(null===t||void 0===t?void 0:t.path),Number(new Date)))})),i((0,c.Z)({},null===t||void 0===t?void 0:t.path,null))},onErrorCallback:function(n,e){return tn({errors:e,response:n})}})}}),dn=(0,u.Z)(sn,1)[0],fn=(0,a.useCallback)((function(n,e){dn(X(X({},e),{},{content:n})),N((function(n){return X(X({},n),{},(0,c.Z)({},null===e||void 0===e?void 0:e.path,!1))}))}),[N,dn]),pn=(0,a.useMemo)((function(){return null===l||void 0===l?void 0:l.map((function(n){return(0,T.jsx)("div",{style:{display:g===n?null:"none"},children:(0,T.jsx)(f.Z,{uuid:"FileEditor/".concat(decodeURIComponent(n)),children:(0,T.jsx)(v.Z,{active:g===n,disableRefreshWarning:!0,filePath:n,hideHeaderButtons:!0,onContentChange:function(e){return i((0,c.Z)({},n,e))},saveFile:fn,selectedFilePath:g,setErrors:tn,setFilesTouched:N})})},n)}))}),[l,fn,g,i,tn]),hn=(0,a.useMemo)((function(){return(0,T.jsx)(C,{fileVersionsVisible:_,onSave:function(){var n,e;(null===r||void 0===r||null===(n=r.current)||void 0===n||null===(e=n[g])||void 0===e?void 0:e.length)>=1&&fn(r.current[g],{path:g})},setFilesVersionsVisible:j})}),[r,_,fn,g,j]);return(0,T.jsx)(p.Z,{after:(0,T.jsx)(f.Z,{uuid:"FileVersions/".concat(g?decodeURIComponent(g):""),children:(0,T.jsx)(w.Z,{selectedFilePath:g,setErrors:tn})}),afterHidden:!(_&&g),before:an,headerOffset:k,mainContainerHeader:(null===l||void 0===l?void 0:l.length)>=1&&(0,T.jsxs)(D,{children:[(0,T.jsx)(I,{children:hn}),(0,T.jsx)(L,{children:ln})]}),title:"Files",uuid:"Files/index",children:pn})},W=t(41788);function Q(){return(0,T.jsx)(V,{})}Q.getInitialProps=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{});case 1:case"end":return n.stop()}}),n)})));var q=(0,W.Z)(Q)},33766:function(n,e,t){"use strict";t.d(e,{O2:function(){return d},g_:function(){return p},u7:function(){return f}});var r=t(75582),i=t(82394),o=t(34376),c=t.n(o),u=t(59e3),l=t(24224);function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var d="_offset";function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.preserveParams,i=e.pushHistory,o=e.replaceParams,l=(0,u.iV)(),a={};t&&t.forEach((function(n){l[n]&&(a[n]=l[n])}));var d,f=o?a:l;d=window.location.pathname;var p=i?c().push:c().replace,h=s(s({},f),n);Object.entries(n).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0],i=e[1];"undefined"!==typeof i&&null!==i||delete h[t]}));var v=(0,u.uM)(h);v.length>=1&&(v="?".concat(v));var b="".concat(d.split("?")[0]).concat(v);return p(c().router.pathname,b,{shallow:!0})}function p(n,e,t){var i=t.addingMultipleValues,o=t.isList,c=t.itemsPerPage,u=t.pushHistory,a=void 0!==u&&u,p=t.resetLimitParams,h=s({},n);i?Object.entries(e).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0],i=e[1];if(Array.isArray(i)){var o="".concat(t,"[]");h[o]=i.map(String)}})):o?Object.entries(e).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0],i=e[1],o=String(i),c="".concat(t,"[]"),u=h[c];u&&Array.isArray(u)?(u=u.map(String)).includes(o)?h[c]=(0,l.Od)(u,(function(n){return n===o})):h[c]=u.concat(o):h[c]=[o]})):h=s(s({},h),e),p&&(h._limit=c||20,h[d]=0),f(h,{pushHistory:a})}},90211:function(n,e,t){"use strict";t.d(e,{RA:function(){return s},kC:function(){return d},vg:function(){return g},kE:function(){return S},Mp:function(){return f},Pb:function(){return l},HW:function(){return O},wX:function(){return p},x6:function(){return h},_6:function(){return v},zf:function(){return y},Y6:function(){return E},wE:function(){return T},J3:function(){return b},We:function(){return a},QV:function(){return A},C5:function(){return m}});var r=t(75582),i=t(17717),o=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],c=(t(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),u=t(24224);function l(n){if(!n)return!1;try{JSON.parse(n)}catch(e){return!1}return!0}function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(e)}function s(n){return n.split(" ").join("_")}function d(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function p(n){return n.charAt(0).toLowerCase()+n.slice(1)}function h(n){if(null===n||"undefined"===typeof n)return"";var e=n.toString().split("."),t=(0,r.Z)(e,2),i=t[0],o=t[1],c=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return o?"".concat(c,".").concat(o):c}function v(n,e){var t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e,o=void 0!==i&&null!==i;if(o||(i=2),1===i)t=n;else{var c=n.length,u=n[c-1];t="y"===u&&"day"!==n?"".concat(n.slice(0,c-1),"ies"):"".concat(n,"s"===u?"es":"s")}if(o){var l=r?h(i):i;return"".concat(l," ").concat(t)}return t}function b(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function m(n){var e=n.length;return"ies"===n.slice(e-3,e)?"".concat(n.slice(0,e-3),"y"):"es"===n.slice(e-2,e)&&"ces"!==n.slice(e-3,e)?n.slice(0,e-2):n.slice(0,e-1)}function g(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d(b(n.toLowerCase()))}function y(n){var e,t=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return t.forEach((function(i,o){if(!e){var c=(0,r.Z)(i,2),u=c[0],l=c[1],a=t.slice(0,o).reduce((function(n,e){return n*Number(e[1])}),1);n<Number(l)*a&&(e=v(u,Math.round(n/a)))}})),e}function O(n){return!isNaN(n)}function A(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,e);return Math.round((n||0)*t)/t}function E(){return"".concat((0,u.mp)(o)," ").concat((0,u.mp)(c))}function S(n){return null===n||void 0===n?void 0:n.toLowerCase().replace(/\W+/g,"_")}function T(n){var e,t=n.split(i.sep),r=t[t.length-1].split(".");return e=1===r.length?r[0]:r.slice(0,-1).join("."),t.slice(0,t.length-1).concat(e).join(i.sep)}},99017:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/files",function(){return t(55389)}])}},function(n){n.O(0,[844,9902,7011,8789,5643,1424,1005,7815,7722,6299,4127,9774,2888,179],(function(){return e=99017,n(n.s=e);var e}));var e=n.O();_N_E=e}]);