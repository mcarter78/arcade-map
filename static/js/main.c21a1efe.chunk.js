(this["webpackJsonparcade-map"]=this["webpackJsonparcade-map"]||[]).push([[0],{176:function(e,t,c){},177:function(e,t,c){},313:function(e,t,c){"use strict";c.r(t);var n=c(6),a=c(0),s=c.n(a),i=c(28),r=c.n(i),l=(c(176),c(177),c(178),c(128)),o=c(57),j=c(88),b=c(76),u=c.n(b),d=c(320),h=c(323),m=c(319),p=c(169),O=c(61),g=c(318),x=c(321),f=c(322),k=c(126);c(179);k.a.initializeApp({apiKey:"AIzaSyAjh52hDjsu9lM79-6xFrwcBK0Y3qNG7F8",authDomain:"arcade-map-8ae23.firebaseapp.com",databaseURL:"https://arcade-map-8ae23.firebaseio.com",projectId:"arcade-map-8ae23",storageBucket:"arcade-map-8ae23.appspot.com",messagingSenderId:"968643604152",appId:"1:968643604152:web:64d340670cdeccc3410e4d",measurementId:"G-Y26EDC60W3"});var _=k.a,w=c(316),y=c(317),C=c.p+"static/media/button_red.b0c4f7dd.png",I=c.p+"static/media/button_blue.daed0bfe.png",v=c.p+"static/media/button_green.117f9ad4.png",S=c.p+"static/media/button_yellow.c112d826.png",F=c.p+"static/media/button_white.f2500dae.png",B={textTransform:"uppercase",fontWeight:600,fontSize:"0.8rem",margin:0};var A=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"controller-layout-container",children:[Object(n.jsxs)(w.a,{gutter:[16,16],style:{textAlign:"center"},children:[Object(n.jsx)(y.a,{span:6}),Object(n.jsxs)(y.a,{span:6,children:[Object(n.jsx)("p",{style:B,children:e.game.buttons.high_punch}),Object(n.jsx)("img",{className:"high_punch_btn",src:C,width:80,onClick:e.handleBtnClick})]}),Object(n.jsx)(y.a,{span:6}),Object(n.jsxs)(y.a,{span:6,children:[Object(n.jsx)("p",{style:B,children:e.game.buttons.high_kick}),Object(n.jsx)("img",{className:"high_kick_btn",src:I,width:80,onClick:e.handleBtnClick})]})]}),Object(n.jsxs)(w.a,{gutter:[16,16],style:{textAlign:"center"},children:[Object(n.jsx)(y.a,{span:6}),Object(n.jsx)(y.a,{span:6}),Object(n.jsxs)(y.a,{span:6,children:[Object(n.jsx)("p",{style:B,children:e.game.buttons.block}),Object(n.jsx)("img",{className:"block_btn",src:F,width:80,onClick:e.handleBtnClick})]}),Object(n.jsx)(y.a,{span:6})]}),Object(n.jsxs)(w.a,{gutter:[16,16],style:{textAlign:"center"},children:[Object(n.jsx)(y.a,{span:6}),Object(n.jsxs)(y.a,{span:6,children:[Object(n.jsx)("p",{style:B,children:e.game.buttons.low_punch}),Object(n.jsx)("img",{className:"low_punch_btn",src:S,width:80,onClick:e.handleBtnClick})]}),Object(n.jsx)(y.a,{span:6}),Object(n.jsxs)(y.a,{span:6,children:[Object(n.jsx)("p",{style:B,children:e.game.buttons.low_kick}),Object(n.jsx)("img",{className:"low_kick_btn",src:v,width:80,onClick:e.handleBtnClick})]})]}),Object(n.jsxs)(w.a,{gutter:[16,16],style:{textAlign:"center"},children:[Object(n.jsxs)(y.a,{span:6,children:[Object(n.jsx)("p",{style:B,children:e.game.buttons.run}),Object(n.jsx)("img",{className:"run_btn",src:I,width:80,onClick:e.handleBtnClick})]}),Object(n.jsx)(y.a,{span:6}),Object(n.jsx)(y.a,{span:6}),Object(n.jsx)(y.a,{span:6})]})]})})},L=d.a.Title,q=h.a.Search,N={labelCol:{span:5},wrapperCol:{span:19}};var T=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(!1),r=Object(j.a)(i,2),b=r[0],d=r[1],k=Object(a.useState)({id:"",title:"",password:"",buttons:{high_punch:"",high_kick:"",block:"",low_punch:"",low_kick:"",run:""}}),w=Object(j.a)(k,2),y=w[0],C=w[1],I=m.a.useForm(),v=Object(j.a)(I,1)[0];return Object(a.useEffect)((function(){_.firestore().collection("games").get().then((function(e){var t=u.a.map(e.docs,(function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})}));s(t)}))}),[]),Object(a.useEffect)((function(){v.setFieldsValue(y)}),[y]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{style:{position:"relative",width:"100%",marginTop:"2rem"},children:[Object(n.jsx)(L,{level:3,children:"Arcade Map"}),Object(n.jsx)(O.a,{style:{position:"absolute",top:"0",right:"1rem"},shape:"circle",icon:Object(n.jsx)(f.a,{}),type:"primary",onClick:function(){C({id:"",title:"",password:"",buttons:{high_punch:"",high_kick:"",block:"",low_punch:"",low_kick:"",run:""}}),d(!0)}})]}),Object(n.jsx)(q,{placeholder:"Search Game Title...",onSearch:function(e){if(e){var t=u.a.filter(c,(function(t){if(t.title&&t.title.toLowerCase().includes(e.toLowerCase()))return t}));s(t)}else _.firestore().collection("games").get().then((function(e){var t=u.a.map(e.docs,(function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})}));s(t)}))},style:{width:"100%",marginTop:"1rem",marginBottom:"1rem",marginLeft:"2rem"},allowClear:!0}),Object(n.jsx)(g.b,{style:{width:"100%",marginLeft:"2rem"},dataSource:c,renderItem:function(e){if(e.title)return Object(n.jsx)(g.b.Item,{onClick:function(){return function(e){C(u.a.find(c,{id:e.id})),d(!0)}(e)},children:e.title})}}),Object(n.jsxs)(x.a,{title:y.title?y.title:"Add Game",visible:b,onCancel:function(){d(!1),C({id:"",title:"",password:"",buttons:{high_punch:"",high_kick:"",block:"",low_punch:"",low_kick:"",run:""}})},footer:null,children:[Object(n.jsx)(A,{game:y,handleBtnClick:function(e){switch(e.target.classList.value){case"high_punch_btn":return document.querySelector("#game-form_buttons_high_punch").focus();case"high_kick_btn":return document.querySelector("#game-form_buttons_high_kick").focus();case"block_btn":return document.querySelector("#game-form_buttons_block").focus();case"low_punch_btn":return document.querySelector("#game-form_buttons_low_punch").focus();case"low_kick_btn":return document.querySelector("#game-form_buttons_low_kick").focus();case"run_btn":return document.querySelector("#game-form_buttons_run").focus();default:return!1}}}),Object(n.jsxs)(m.a,Object(o.a)(Object(o.a)({form:v},N),{},{name:"game-form",onFinish:function(e){e.id?_.firestore().collection("games").doc(e.id).update(e).then((function(){var t=Object(l.a)(c),n=u.a.findIndex(t,{id:e.id});t.splice(n,1,e),s(t),p.b.success("Game Updated")})):_.firestore().collection("games").add(e).then((function(t){s([].concat(Object(l.a)(c),[Object(o.a)(Object(o.a)({},e),{},{id:t.id})])),p.b.success("Game Added")})),d(!1),v.resetFields()},children:[Object(n.jsx)(m.a.Item,{label:"ID",name:"id",hidden:!0,children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(m.a.Item,{label:"Title",name:"title",rules:[{required:!0,message:"Please input title"}],children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(m.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input password"}],children:Object(n.jsx)(h.a.Password,{})}),Object(n.jsx)(m.a.Item,{label:"High Punch",name:["buttons","high_punch"],children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(m.a.Item,{label:"High Kick",name:["buttons","high_kick"],children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(m.a.Item,{label:"Block",name:["buttons","block"],children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(m.a.Item,{label:"Low Punch",name:["buttons","low_punch"],children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(m.a.Item,{label:"Low Kick",name:["buttons","low_kick"],children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(m.a.Item,{label:"Run",name:["buttons","run"],children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(m.a.Item,{children:Object(n.jsx)(O.a,{type:"primary",htmlType:"submit",children:"Submit"})})]}))]})]})};var P=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(T,{})})};var G=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(P,{})})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,324)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root")),D()}},[[313,1,2]]]);
//# sourceMappingURL=main.c21a1efe.chunk.js.map