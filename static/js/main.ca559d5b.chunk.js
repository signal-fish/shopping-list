(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],{25:function(t,n,e){"use strict";e.r(n);var i,r,c,o,a,s,b,p,d,l,u,j,x,O,f,h,m,g,v=e(0),S=e.n(v),y=e(13),w=e.n(y),z=e(2),I=e(17),k=e(11),A=e(4),E=e(3),T=function(t){return Object(E.a)(i||(i=Object(z.a)(["\n    @media only screen and (max-width: 576px) {\n      ","\n    }\n  "])),t)},C=e(1),L=E.b.div(r||(r=Object(z.a)(["\n  position: absolute;\n  top: 60px;\n  width: calc(100% - 100px);\n\n  ","\n"])),T({top:"45px",width:"100%"})),J=E.b.p(c||(c=Object(z.a)(["\n  background: ",";\n  text-align: center;\n  font-size: 20px;\n"])),(function(t){return t.redAlert?"#c96c6c":"#c5f1c5"})),N=function(t){var n=t.alert,e=t.isAlert,i=t.redAlert;return Object(C.jsx)(L,{children:e&&Object(C.jsx)(J,{redAlert:i,children:n})})},D=e(10),V=E.b.div(o||(o=Object(z.a)(["\n  position: absolute;\n  width: calc(100% - 100px);\n  margin-top: 10px;\n\n  ","\n"])),T({width:"100%",marginTop:"20px"})),B=E.b.div(a||(a=Object(z.a)([""]))),M=E.b.form(s||(s=Object(z.a)(["\n  display: flex;\n"]))),P=E.b.input(b||(b=Object(z.a)(["\n  flex: 4;\n  font-size: 20px;\n  padding: 10px 20px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-color: transparent;\n\n  ","\n"])),T({padding:"5px 10px"})),R=E.b.button(p||(p=Object(z.a)(["\n  flex: 1;\n  font-size: 26px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-color: transparent;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  ","\n"])),T({fontSize:"16px"})),q=E.b.div(d||(d=Object(z.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 20px;\n\n  ","\n"])),T({margin:"0 10px"})),F=E.b.div(l||(l=Object(z.a)([""]))),G=E.b.p(u||(u=Object(z.a)(["\n  text-transform: capitalize;\n  font-size: 20px;\n\n  ","\n"])),T({fontSize:"16px"})),H=E.b.button(j||(j=Object(z.a)(["\n  background: transparent;\n  border: none;\n  margin-right: 10px;\n  padding: 0;\n  cursor: pointer;\n  font-size: 15px;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  ","\n"])),T({fontSize:"14px"})),K=E.b.button(x||(x=Object(z.a)(["\n  background: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  font-size: 15px;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  ","\n"])),T({fontSize:"14px"})),Q=E.b.div(O||(O=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n"]))),U=E.b.button(f||(f=Object(z.a)(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  ","\n"])),T({fontSize:"18px"})),W=function(t){var n=t.name,e=t.setName,i=t.isEditing,r=t.handleSubmit,c=t.list,o=t.editItem,a=t.removeItem,s=t.emptyList;return Object(C.jsxs)(V,{children:[Object(C.jsx)(B,{children:Object(C.jsxs)(M,{onSubmit:r,children:[Object(C.jsx)(P,{placeholder:"e.g. pork",value:n,onChange:function(t){return e(t.target.value)}}),Object(C.jsx)(R,{type:"submit",children:i?"Edit":"Submit"})]})}),c.map((function(t){var n=t.id,e=t.title;return Object(C.jsxs)(q,{children:[Object(C.jsx)(G,{children:e}),Object(C.jsxs)(F,{children:[Object(C.jsx)(H,{type:"button",onClick:function(){return o(n)},children:Object(C.jsx)(D.a,{})}),Object(C.jsx)(K,{type:"button",onClick:function(){return a(n)},children:Object(C.jsx)(D.b,{})})]})]},n)})),c.length>0&&Object(C.jsx)(Q,{children:Object(C.jsx)(U,{onClick:s,children:"Clear Items"})})]})},X=E.b.div(h||(h=Object(z.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n"]))),Y=E.b.div(m||(m=Object(z.a)(["\n  width: 50%;\n  margin-top: 100px;\n  position: relative;\n  padding: 0 50px;\n  border-radius: 10px;\n\n  ","\n"])),T({width:"100%",marginTop:"20px",padding:0,margin:"0 10px"})),Z=E.b.h1(g||(g=Object(z.a)(["\n  text-align: center;\n  font-size: 40px;\n\n  ","\n"])),T({fontSize:"30px"})),$=function(){var t=Object(v.useState)(""),n=Object(A.a)(t,2),e=n[0],i=n[1],r=Object(v.useState)(!1),c=Object(A.a)(r,2),o=c[0],a=c[1],s=Object(v.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),b=Object(A.a)(s,2),p=b[0],d=b[1],l=Object(v.useState)(null),u=Object(A.a)(l,2),j=u[0],x=u[1],O=Object(v.useState)(""),f=Object(A.a)(O,2),h=f[0],m=f[1],g=Object(v.useState)(!1),S=Object(A.a)(g,2),y=S[0],w=S[1],z=Object(v.useState)(!1),E=Object(A.a)(z,2),T=E[0],L=E[1],J=function(t){w(!0),m(t)};return Object(v.useEffect)((function(){localStorage.setItem("list",JSON.stringify(p))}),[p]),Object(v.useEffect)((function(){var t=setTimeout((function(){w(!1),L(!1)}),3e3);return function(){return clearTimeout(t)}}),[p]),Object(C.jsx)(X,{children:Object(C.jsxs)(Y,{children:[Object(C.jsx)(Z,{children:"Shopping List"}),Object(C.jsx)(N,{alert:h,isAlert:y,setIsAlert:w,redAlert:T}),Object(C.jsx)(W,{name:e,setName:i,isEditing:o,handleSubmit:function(t){if(t.preventDefault(),e)if(e&&o)d(p.map((function(t){return t.id===j?Object(k.a)(Object(k.a)({},t),{},{title:e}):t}))),i(""),x(null),a(!1),J("Value Changed");else{J("Item Added To The List");var n={id:(new Date).getTime().toString(),title:e};d([].concat(Object(I.a)(p),[n])),i("")}else J("Please Enter Value!")},list:p,editItem:function(t){var n=p.find((function(n){return n.id===t}));a(!0),x(t),i(n.title)},removeItem:function(t){window.confirm("Are you sure to empty the list?")&&(L(!0),J("Item Removed"),d(p.filter((function(n){return n.id!==t}))))},emptyList:function(){window.confirm("Are you sure to empty the list?")&&(L(!0),J("Empty List"),d([]))}})]})})};w.a.render(Object(C.jsx)(S.a.StrictMode,{children:Object(C.jsx)($,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ca559d5b.chunk.js.map