import{_ as b,d as w,u as C,a as k,r as x,b as y,c as o,e,F as p,f as g,w as l,v as i,g as A,o as a,n as F,t as I}from"./index-fed0b561.js";const $=w({name:"audio",setup(){const s=C();k();const c=A().appContext.config.globalProperties.$utils,_=u=>c.getCloudUrl(u),r=x([{id:"1",name:"\u7EC8\u6848\u8BF4\u660E",cur:!0},{id:"2",name:"\u7EC8\u6848\u6F14\u793A",cur:!1},{id:"3",name:"\u63A2\u7D221",cur:!1},{id:"4",name:"\u63A2\u7D222",cur:!1}]);let d=y(1);return{handlePre:()=>{s.push({name:"home"})},handleNext:()=>{s.push({name:"beginnerGuide"})},getCloudUrl:_,audioList:r,curIndex:d,handleAudioList:(u,f)=>{r.forEach(v=>{v.cur=!1}),u.cur=!0,d.value=f+1}}}}),L={class:"audio_box flex_column"},B={class:"audio_imgs flex_column",style:{position:"relative"}},D=["src"],E={class:"back_foot"},U=e("em",null,null,-1),P=e("p",null,"\u8FD4\u56DE\u4E3B\u9875",-1),N=[U,P],S=e("p",null,"\u4E0B\u4E00\u7BC7\uFF1ABeginner's guide",-1),j=e("em",null,null,-1),z=[S,j],G={class:"flex_column",style:{position:"absolute",top:"6040px","background-color":"black",width:"100%",height:"100px"}},M={class:"audio_contain"},O=["onClick"],R={class:"flex_column",style:{position:"absolute",top:"6330px","background-color":"black",width:"100%",height:"1080px"}},V=["src"],q={style:{border:"1px solid rgba(0, 0, 0, 0.1)"},width:"1600",height:"1362",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9C4FkOastcC6AIpjh8PkuA%2F%25E9%25A1%25B9%25E7%259B%25AE%25E6%2595%25B4%25E7%2590%2586%3Fnode-id%3D141%253A40848%26scaling%3Dcontain%26page-id%3D141%253A33439%26starting-point-node-id%3D141%253A40848%26show-proto-sidebar%3D1",allowfullscreen:""},H=["src"],J=["src"];function K(s,n,c,_,r,d){return a(),o("div",L,[e("div",B,[(a(),o(p,null,g(6,t=>e("div",null,[e("img",{style:{width:"1920px"},src:s.getCloudUrl("audio_img"+t+".png")},null,8,D)])),64)),e("div",E,[e("div",{onClick:n[0]||(n[0]=t=>s.handlePre()),class:"back_left"},N),e("div",{onClick:n[1]||(n[1]=t=>s.handleNext()),class:"back_right"},z)]),e("div",G,[e("ul",M,[(a(!0),o(p,null,g(s.audioList,(t,h)=>(a(),o("li",{onClick:m=>s.handleAudioList(t,h),key:t.id,class:F(["audio_list flex_column",{audio_cur:t.cur}])},[e("span",null,I(t.name),1)],10,O))),128))])]),e("div",R,[l(e("img",{style:{width:"1688px"},src:s.getCloudUrl("audio_list1.png")},null,8,V),[[i,s.curIndex==1]]),l(e("iframe",q,null,512),[[i,s.curIndex==2]]),l(e("img",{style:{width:"1688px"},src:s.getCloudUrl("audio_list3.png")},null,8,H),[[i,s.curIndex==3]]),l(e("img",{style:{width:"1688px"},src:s.getCloudUrl("audio_list4.png")},null,8,J),[[i,s.curIndex==4]])])])])}var T=b($,[["render",K]]);export{T as default};
