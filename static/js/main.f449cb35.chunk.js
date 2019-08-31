(window["webpackJsonpmultilang-signin-page"]=window["webpackJsonpmultilang-signin-page"]||[]).push([[0],{70:function(e,a,t){e.exports=t(97)},75:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),o=t.n(i),c=(t(75),t(37)),l=t.n(c),s=t(137),m=t(138),u=t(103),g=t(106),d=t(60),p=t.n(d),h=t(139),E=t(14),b=t(36),f=t(30),w=function(e){var a=Object(n.useState)(e),t=Object(f.a)(a,2),r=t[0],i=t[1];return[r,function(){return i(!r)}]},v=Object(n.createContext)();function j(e){var a=e.children,t=w(!1),n=Object(f.a)(t,2),i=n[0],o=n[1];return r.a.createElement(v.Provider,{value:{darkMode:i,toggleTheme:o}},a)}var k=Object(n.createContext)();function O(e){var a=e.children,t=Object(n.useState)("english"),i=Object(f.a)(t,2),o=i[0],c=i[1];return r.a.createElement(k.Provider,{value:{language:o,setLanguage:c}},a)}var x={english:{email:"Email",password:"Password",remember:"Remember Me",signin:"Sign In",search:"Search",emoji:"\ud83c\uddfa\ud83c\uddf8"},french:{email:"Addresse Electronique",password:"Mot de passe",remember:"Souviens-toi de moi",signin:"Se connecter",search:"chercher",emoji:"\ud83c\uddeb\ud83c\uddf7"},spanish:{email:"Sorreo electr\xf3nico",password:"Sontrase\xf1a",remember:"Recu\xe9rdame",signin:"Registrarse",search:"Buscar",emoji:"\ud83c\uddea\ud83c\uddf8"}},y=l()(function(e){return{root:{width:"100%",marginBottom:0},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},flag:{margin:"1rem",fontSize:"1.5rem"},title:Object(E.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(E.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(),width:"auto"}),searchIcon:{width:e.spacing(9),height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(E.a)({paddingTop:e.spacing(),paddingRight:e.spacing(),paddingBottom:e.spacing(),paddingLeft:e.spacing(10),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(function(e){var a=e.classes,t=Object(n.useContext)(k).language,i=Object(n.useContext)(v),o=i.darkMode,c=i.toggleTheme,l=x[t],d=l.search,E=l.emoji;return r.a.createElement("div",{className:a.root},r.a.createElement(s.a,{position:"static",color:o?"primary":"default"},r.a.createElement(m.a,null,r.a.createElement("span",{role:"img",className:a.flag},E),r.a.createElement(u.a,{className:a.title,variant:"h6",color:"inherit"},"Dark Mode"),r.a.createElement(h.a,{onClick:c}),r.a.createElement("div",{className:a.grow}),r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(p.a,null)),r.a.createElement(g.a,{placeholder:d,classes:{root:a.inputRoot,input:a.inputInput}})))))}),C=t(140),N=t(144),R=t(142),S=t(143),I=t(146),L=t(141),B=t(148),M=t(61),T=t.n(M),W=t(102),F=t(147),q=t(145),P=l()(function(e){return{main:Object(E.a)({width:"auto",display:"block",marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up("sm"),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")},avatar:{margin:e.spacing(),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{marginTop:e.spacing(3)}}})(function(e){var a=Object(n.useContext)(k),t=a.setLanguage,i=a.language,o=e.classes,c=x[i],l=c.email,s=c.password,m=c.remember,g=c.signin;return r.a.createElement("main",{className:o.main},r.a.createElement(W.a,{className:o.paper},r.a.createElement(C.a,{className:o.avatar},r.a.createElement(T.a,null)),r.a.createElement(u.a,{variant:"h5"},g),r.a.createElement(q.a,{value:i,onChange:function(e){return t(e.target.value)}},r.a.createElement(F.a,{value:"english"},"English"),r.a.createElement(F.a,{value:"french"},"French"),r.a.createElement(F.a,{value:"spanish"},"Spanish")),r.a.createElement("form",{className:o.form},r.a.createElement(R.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(B.a,{htmlFor:"email"},l),r.a.createElement(L.a,{id:"email",name:"email",autoFocus:!0})),r.a.createElement(R.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(B.a,{htmlFor:"password"},s),r.a.createElement(L.a,{id:"password",name:"password"})),r.a.createElement(S.a,{control:r.a.createElement(I.a,{color:"primary"}),label:m}),r.a.createElement(N.a,{variant:"contained",type:"submit",fullWidth:!0,color:"primary",className:o.submit},g))))});function D(e){var a=e.children,t={backgroundColor:Object(n.useContext)(v).darkMode?"#222":"#ececec",height:"100vh",width:"100vw"};return r.a.createElement("div",{style:t},a)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(function(){return r.a.createElement(j,null,r.a.createElement(O,null,r.a.createElement(D,null,r.a.createElement(y,null),r.a.createElement(P,null))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[70,1,2]]]);
//# sourceMappingURL=main.f449cb35.chunk.js.map