import{_ as p,q as a,o as _,t as m,v as e,a as n,y as t,W as l,p as f,c as k,u as y}from"./framework.SZaum9Aq.js";import{$ as E,k as $}from"./theme.mLAuTm9-.js";const B={};function P(u,r){const c=a("el-avatar"),s=a("el-tag"),o=a("el-button"),i=a("el-page-header");return _(),m(i,{icon:""},{content:e(()=>[n("div",{class:"flex items-center"},[t(c,{size:32,class:"mr-3",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),n("span",{class:"text-large font-600 mr-3"}," Title "),n("span",{class:"text-sm mr-2",style:{color:"var(--el-text-color-regular)"}}," Sub title "),t(s,null,{default:e(()=>[l("Default")]),_:1})])]),extra:e(()=>[n("div",{class:"flex items-center"},[t(o,null,{default:e(()=>[l("Print")]),_:1}),t(o,{type:"primary",class:"ml-2"},{default:e(()=>[l("Edit")]),_:1})])]),_:1})}const D=p(B,[["render",P]]),V=f({__name:"basic",setup(u){const r=()=>{console.log("go back")};return(c,s)=>{const o=a("el-page-header");return _(),m(o,{onBack:r},{content:e(()=>[n("span",{class:"text-large font-600 mr-3"}," Title ")]),_:1})}}}),T={};function z(u,r){const c=a("el-breadcrumb-item"),s=a("el-breadcrumb"),o=a("el-page-header");return _(),m(o,null,{breadcrumb:e(()=>[t(s,{separator:"/"},{default:e(()=>[t(c,{to:{path:"./page-header.html"}},{default:e(()=>[l(" homepage ")]),_:1}),t(c,null,{default:e(()=>[n("a",{href:"./page-header.html"},"route 1")]),_:1}),t(c,null,{default:e(()=>[l("route 2")]),_:1})]),_:1})]),content:e(()=>[n("span",{class:"text-large font-600 mr-3"}," Title ")]),_:1})}const W=p(T,[["render",z]]),q=f({__name:"complete",setup(u){const r=()=>{E("Back")};return(c,s)=>{const o=a("el-breadcrumb-item"),i=a("el-breadcrumb"),h=a("el-avatar"),b=a("el-tag"),g=a("el-button"),d=a("el-descriptions-item"),x=a("el-descriptions"),v=a("el-page-header");return _(),k("div",{"aria-label":"A complete example of page header"},[t(v,{onBack:r},{breadcrumb:e(()=>[t(i,{separator:"/"},{default:e(()=>[t(o,{to:{path:"./page-header.html"}},{default:e(()=>[l(" homepage ")]),_:1}),t(o,null,{default:e(()=>[n("a",{href:"./page-header.html"},"route 1")]),_:1}),t(o,null,{default:e(()=>[l("route 2")]),_:1})]),_:1})]),content:e(()=>[n("div",{class:"flex items-center"},[t(h,{class:"mr-3",size:32,src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),n("span",{class:"text-large font-600 mr-3"}," Title "),n("span",{class:"text-sm mr-2",style:{color:"var(--el-text-color-regular)"}}," Sub title "),t(b,null,{default:e(()=>[l("Default")]),_:1})])]),extra:e(()=>[n("div",{class:"flex items-center"},[t(g,null,{default:e(()=>[l("Print")]),_:1}),t(g,{type:"primary",class:"ml-2"},{default:e(()=>[l("Edit")]),_:1})])]),default:e(()=>[t(x,{column:3,size:"small",class:"mt-4"},{default:e(()=>[t(d,{label:"Username"},{default:e(()=>[l(" kooriookami ")]),_:1}),t(d,{label:"Telephone"},{default:e(()=>[l(" 18100000000 ")]),_:1}),t(d,{label:"Place"},{default:e(()=>[l("Suzhou")]),_:1}),t(d,{label:"Remarks"},{default:e(()=>[t(b,{size:"small"},{default:e(()=>[l("School")]),_:1})]),_:1}),t(d,{label:"Address"},{default:e(()=>[l(" No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ")]),_:1})]),_:1}),n("p",{class:"mt-4 text-sm"},[l(" Element Plus team uses "),n("b",null,"weekly"),l(" release strategy under normal circumstance, but critical bug fixes would require hotfix so the actual release number "),n("b",null,"could be"),l(" more than 1 per week. ")])]),_:1})])}}}),Y=f({__name:"custom-icon",setup(u){return(r,c)=>{const s=a("el-page-header");return _(),m(s,{icon:y($)},{content:e(()=>[n("span",{class:"text-large font-600 mr-3"}," Title ")]),_:1},8,["icon"])}}}),w={};function N(u,r){const c=a("el-page-header");return _(),m(c,null,{content:e(()=>[n("span",{class:"text-large font-600 mr-3"}," Title ")]),default:e(()=>[n("div",{class:"mt-4 text-sm font-bold"}," Your additional content can be added with default slot, You may put as many content as you want here. ")]),_:1})}const I=p(w,[["render",N]]),S={};function A(u,r){const c=a("el-page-header");return _(),m(c,{icon:""},{content:e(()=>[n("span",{class:"text-large font-600 mr-3"}," Title ")]),_:1})}const J=p(S,[["render",A]]);export{J as E,q as _,V as a,Y as b,W as c,D as d,I as e};
