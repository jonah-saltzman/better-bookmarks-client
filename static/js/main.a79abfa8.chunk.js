(this["webpackJsonpbetter-bookmarks-client"]=this["webpackJsonpbetter-bookmarks-client"]||[]).push([[0],{29:function(e,t,a){e.exports=a(44)},34:function(e,t,a){},37:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(20),o=a.n(c),l=(a(34),a(8)),s=a(50),u=a(9),i=a(17),m=a(10),p=(a(35),a(36),a(37),a(7)),d=a.n(p),f=a(12),b=a(46),E=a(47),h=a(48),g=Object(r.createContext)(),x="https://betterbookmarks.herokuapp.com",O=function(){var e=Object(f.a)(d.a.mark((function e(t,a,r,n){var c,o,l,s,u,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=x+"/auth"+(n?"/signup":"/login"),o={email:t,password:a,twtId:r||null},e.prev=2,e.next=5,fetch(c,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 5:return l=e.sent,s=l.status,e.next=9,l.json();case 9:if(u=e.sent,n){e.next=14;break}return e.abrupt("return",{error:200===s?null:u,success:200===s?u.message:null,token:u.token||null});case 14:if(200!==s){e.next=25;break}return e.next=17,O(t,a,null,!1);case 17:if(!(i=e.sent).success){e.next=22;break}return e.abrupt("return",{error:null,success:"Account created & logged in!",token:i.token});case 22:return e.abrupt("return",{error:"User ".concat(t," created but login failed.")});case 23:e.next=26;break;case 25:return e.abrupt("return",{error:u});case 26:e.next=32;break;case 28:return e.prev=28,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",{error:"Unknown error"});case 32:case"end":return e.stop()}}),e,null,[[2,28]])})));return function(t,a,r,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(f.a)(d.a.mark((function e(t){var a,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x+"/user/signout",e.prev=1,e.next=4,fetch("https://betterbookmarks.herokuapp.com/user/signout",{method:"Get",cache:"no-cache",headers:{Authorization:"JWT ".concat(t)}});case 4:return a=e.sent,r=a.status,console.log("in logout, response:"),e.next=9,a.json();case 9:if(n=e.sent,console.log(n),200!==r){e.next=15;break}return e.abrupt("return",{error:null,success:n.message});case 15:return e.abrupt("return",{error:n.message});case 16:e.next=21;break;case 18:return e.prev=18,e.t0=e.catch(1),e.abrupt("return",{error:"Unknown error logging out."});case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(r.useContext)(g),t=e.state,a=e.dispatch,c=(t.inAuth,t.signIn,t.loggedIn),o=t.token,l=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=3;break}return Object(m.b)("No user to logout!",{type:"error"}),e.abrupt("return");case 3:return e.next=5,j(o);case 5:if(!(t=e.sent).error){e.next=9;break}return Object(m.b)(t.error,{type:"error"}),e.abrupt("return");case 9:Object(m.b)(t.success,{type:"success"}),["SET_USER","SET_LOGIN","SET_TOKEN","SET_FOLDERS"].forEach((function(e){return a({type:e,payload:null})}));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(b.a,{sticky:"top",className:"nav"},n.a.createElement(E.a,{tag:u.b,to:"/",className:"text-white navbrand"},"Better Bookmarks"),n.a.createElement(u.c,{to:"/folders",className:"text-white"},"Folders"),n.a.createElement(u.c,{to:"/likes",className:"text-white"},"Likes"),n.a.createElement(u.c,{to:"/import",className:"text-white"},"Import"),n.a.createElement(h.a,{className:"text-white float-right navtxt"},c?n.a.createElement("span",{onClick:l,className:"text-white text-large logout"},"Logout"):n.a.createElement(u.c,{className:"text-white text-large",to:"/auth"},"Login")))},y=function(){return n.a.createElement(i.a,{to:"/"})},v=a(49),w=a(51),N=a(52),S=a(53),T=a(54),I=a(55),C=a(56),_=a(57),L=function(){var e=Object(r.useContext)(g),t=e.state,a=e.dispatch,c=t.loggedIn,o=Object(r.useState)(!1),u=Object(l.a)(o,2),p=u[0],b=u[1],E=Object(r.useState)(!1),h=Object(l.a)(E,2),x=h[0],j=h[1],k=Object(r.useState)(!0),y=Object(l.a)(k,2),L=y[0],R=y[1],U=Object(r.useState)(""),z=Object(l.a)(U,2),F=z[0],G=z[1],W=Object(r.useState)(""),A=Object(l.a)(W,2),D=A[0],K=A[1],B=Object(r.useState)(""),J=Object(l.a)(B,2),P=J[0],M=J[1],q=Object(r.useState)(""),H=Object(l.a)(q,2),V=H[0],$=H[1],Q=Object(r.useState)(!1),X=Object(l.a)(Q,2),Y=X[0],Z=X[1],ee=function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==F&&""!==D&&(L||""!==P)){e.next=4;break}return Object(m.b)("Please complete all required fields.",{type:"error"}),e.abrupt("return");case 4:if(L||D===P){e.next=7;break}return Object(m.b)("Passwords do not match!",{type:"error"}),e.abrupt("return");case 7:j(!0),b(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){p?Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(F,D,V,!L);case 2:(t=e.sent).error?Object(m.b)(t.error,{type:"error"}):(Object(m.b)(t.success,{type:"success"}),te(F,t.token)),j(!1),b(!1);case 6:case"end":return e.stop()}}),e)})))():j(!1)}),[p]);var te=function(e,t){a({type:"SET_USER",payload:e}),a({type:"SET_TOKEN",payload:t}),a({type:"SET_LOGIN",payload:!0})};return x?n.a.createElement("div",{className:"Center"},n.a.createElement(v.a,{color:"primary"}),n.a.createElement("div",{className:"text-primary"},"Loading...")):c?n.a.createElement(i.a,{to:"/folders"}):n.a.createElement(s.a,{fluid:!0,className:"mt-5 "},n.a.createElement(w.a,null,n.a.createElement(N.a,{md:"8",className:"offset-md-2 p-3 "},n.a.createElement(S.a,{className:"formcard auth-form",onSubmit:ee},n.a.createElement(T.a,{className:"mt-4"},n.a.createElement("input",{className:"input",type:"email",name:"email",id:"email",placeholder:"Email",value:F,onChange:function(e){return G(e.target.value)}})),n.a.createElement(T.a,null,n.a.createElement("input",{className:"input mt-2",type:"password",name:"password",id:"password",value:D,onChange:function(e){return K(e.target.value)},placeholder:"Password"})),L?n.a.createElement(T.a,{check:!0,className:"mt-2"},n.a.createElement(I.a,{check:!0},n.a.createElement(C.a,{className:"checkmark",type:"checkbox",onChange:function(){Z(!Y)},checked:Y})," ",n.a.createElement("span",{className:"text-right",style:{color:"#f9f9f9",fontWeight:"400",letterSpacing:"1px"}},"Stay signed in"))):[n.a.createElement(T.a,{key:"password-confirm"},n.a.createElement("input",{className:"input mt-2",type:"password",name:"password-confirm",id:"password-confirm",value:P,onChange:function(e){return M(e.target.value)},placeholder:"Confirm password"})),n.a.createElement(T.a,{key:"twtId"},n.a.createElement("input",{className:"input mt-2",type:"text",name:"twtId",id:"twtId",value:V,onChange:function(e){return $(e.target.value)},placeholder:"Twitter Username"}))],n.a.createElement(_.a,{type:"submit",color:"primary",block:!0,className:"text-uppercase button mt-5",style:{padding:"15px",fontSize:"18px"}},L?"Sign in":"Register")))),n.a.createElement(w.a,null,n.a.createElement(N.a,{md:"8",className:"offset-md-8"},n.a.createElement(_.a,{onClick:function(){R(!L)},type:"button",className:"text-uppercase button-static",style:{padding:"15px",fontSize:"18px"}},L?"Register":"Sign in"))))},R=a(58),U=a(59),z=a(60),F=a(61),G=function(){var e=Object(r.useContext)(g);e.state,e.dispatch;return n.a.createElement("div",{className:"center-home"},n.a.createElement(R.a,{className:"homecard card-fab"},n.a.createElement(U.a,null,"Welcome to Better Bookmarks"),n.a.createElement(z.a,null,n.a.createElement(F.a,null,n.a.createElement("ul",null,n.a.createElement("li",null,"Organize your favorite Tweets into folders."),n.a.createElement("li",null,"Share folders with anyone"),n.a.createElement("li",null,'No more "This Tweet has been deleted'))))))},W=a(62),A=a(63),D="https://betterbookmarks.herokuapp.com",K=function(){var e=Object(f.a)(d.a.mark((function e(t){var a,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D+"/user/folders",e.prev=1,e.next=4,fetch("https://betterbookmarks.herokuapp.com/user/folders",{method:"GET",cache:"no-cache",headers:{Authorization:"JWT ".concat(t)}});case 4:return a=e.sent,r=a.status,e.next=8,a.json();case 8:if(n=e.sent,200!==r){e.next=13;break}return e.abrupt("return",{error:null,folders:n.folders});case 13:return e.abrupt("return",{error:n.message});case 14:e.next=20;break;case 16:return e.prev=16,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(f.a)(d.a.mark((function e(t,a){var r,n,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=D+"/user/folders/"+t,console.log("getonefolder URL:"),console.log(r),e.prev=3,e.next=6,fetch(r,{method:"GET",cache:"no-cache",headers:{Authorization:"JWT ".concat(a)}});case 6:return n=e.sent,c=n.status,console.log("getting one folder status: ".concat(c)),e.next=11,n.json();case 11:if(o=e.sent,200!==c){e.next=16;break}return e.abrupt("return",{error:null,tweets:o.tweets});case 16:return e.abrupt("return",{error:o.message});case 17:e.next=23;break;case 19:return e.prev=19,e.t0=e.catch(3),console.error(e.t0),e.abrupt("return",null);case 23:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(t,a){return e.apply(this,arguments)}}(),J=a(19),P=function(e){var t=e.folder,a=e.folderKey,c=Object(r.useContext)(g),o=(c.state,c.dispatch),l=Object(i.g)();return n.a.createElement(w.a,null,n.a.createElement(N.a,{onClick:function(){return e=a,console.log("clicked folder ".concat(e)),o({type:"SET_SINGLE_FOLDER",payload:e}),o({type:"SET_SINGLE_FOLDER_NAME",payload:t.folderName}),void l.push("/onefolder");var e},md:"10",className:"d-flex justify-content-center align-items-center text-large cardtxt",style:{fontWeight:"700",fontSize:"32px",letterSpacing:"2px"}},n.a.createElement("div",{className:"name"},t.folderName)),n.a.createElement(N.a,{md:"2",className:"d-flex justify-content-center align-items-center"},n.a.createElement("div",{className:"iconbtn mr-4 "},n.a.createElement(J.a,{onClick:function(){},color:"#FF6370",className:" icon",style:{zIndex:"1"}})),n.a.createElement("div",{className:"iconbtn mr-5",style:{marginRight:"30px"}},n.a.createElement(J.b,{className:"icon ",color:"#54eafe",onClick:function(){}})," ")))},M=function(){var e=Object(r.useContext)(g),t=e.state,a=(e.dispatch,t.loggedIn),c=t.token,o=Object(r.useState)(!0),u=Object(l.a)(o,2),p=u[0],b=u[1],E=Object(r.useState)(!1),h=Object(l.a)(E,2),x=h[0],O=h[1],j=Object(r.useState)([]),k=Object(l.a)(j,2),y=k[0],w=k[1];return Object(r.useEffect)((function(){x||a&&Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(c);case 2:if(!(t=e.sent).error){e.next=8;break}return Object(m.b)("Error: ".concat(t.error)),O(!0),b(!1),e.abrupt("return");case 8:t.folders&&(console.log("got folders: "),console.log(t.folders),w(t.folders),O(!0),b(!1));case 9:case"end":return e.stop()}}),e)})))()}),[x]),a?p?n.a.createElement("div",{className:"Center"},n.a.createElement(v.a,{color:"primary"}),n.a.createElement("div",{className:"text-primary"},"Loading...")):(console.log("rendering folders: "),console.log(y),n.a.createElement(s.a,{className:"mt-4 mb-5 folder-list"},0!==y.length||p?n.a.createElement(W.a,null,y.map((function(e){return n.a.createElement(A.a,{key:e.folderId,className:"listcard mt-4"},n.a.createElement(P,{folder:e,folderKey:e.folderId}))}))):n.a.createElement("div",{className:"Center text-large cardtxt",style:{fontWeight:"700",fontSize:"32px",letterSpacing:"2px"}},"No folders found!"))):n.a.createElement(i.a,{to:"/auth"})},q=a(28),H=function(e){var t=e.tweet,a=(e.tweetKey,e.embed),c=Object(r.useContext)(g),o=(c.state,c.dispatch,Object(i.g)(),Object(r.useState)(a)),s=Object(l.a)(o,2);s[0],s[1];return n.a.createElement(w.a,null,n.a.createElement(N.a,{md:"10",className:"d-flex justify-content-center align-items-center text-large cardtxt",style:{fontWeight:"700",fontSize:"32px",letterSpacing:"2px"}},n.a.createElement("div",{className:"tweet"},t.twtText)),n.a.createElement(N.a,{md:"2",className:"d-flex justify-content-center align-items-center"},n.a.createElement("div",{className:"iconbtn mr-4 "},n.a.createElement(J.a,{onClick:function(){},color:"#FF6370",className:" icon",style:{zIndex:"1"}}))))},V=function(){var e=Object(r.useContext)(g),t=e.state,a=(e.dispatch,Object(i.g)()),c=t.folder,o=t.folderName,u=t.loggedIn,p=t.token,b=Object(r.useState)(!0),E=Object(l.a)(b,2),h=E[0],x=E[1],O=Object(r.useState)(!0),j=Object(l.a)(O,2),k=j[0],y=j[1],S=Object(r.useState)([]),T=Object(l.a)(S,2),I=T[0],C=T[1],_=Object(r.useState)(!0),L=Object(l.a)(_,2),R=L[0];L[1];Object(r.useEffect)((function(){console.log("single folder page useeffect: folder: "),console.log(c),k&&c&&u&&(console.log("attempting to get single folder: "),console.log(c),Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(c,p);case 2:if(!(t=e.sent).error){e.next=8;break}return Object(m.b)("Error: ".concat(t.error)),y(!1),x(!1),e.abrupt("return");case 8:t.tweets&&(console.log("got tweets: "),console.log(t.tweets),C(t.tweets),y(!1),x(!1));case 9:case"end":return e.stop()}}),e)})))())}));return u?h?n.a.createElement("div",{className:"Center"},n.a.createElement(v.a,{color:"primary"}),n.a.createElement("div",{className:"text-primary"},"Loading...")):(console.log("rendering tweets: "),console.log(I),n.a.createElement(n.a.Fragment,null," ",n.a.createElement(s.a,{className:"tweetcard"},n.a.createElement(w.a,null,n.a.createElement(N.a,{md:"2"},n.a.createElement("div",{className:"icon",onClick:function(){a.push("/folders")}},n.a.createElement(q.a,{size:22,className:" text-white"}))),n.a.createElement(N.a,{md:"8"},n.a.createElement("div",{className:"folderName"},o)),n.a.createElement(N.a,{md:"2"}))),n.a.createElement(s.a,{scrollable:!0,className:"mt-4 mb-5 tweet-list"},0!==I.length||h?n.a.createElement(W.a,null,I.map((function(e){return n.a.createElement(A.a,{key:e.twtId,className:"tweetcard mb-4"},n.a.createElement(H,{embed:R,tweet:e,tweetKey:e.twtId}))}))):n.a.createElement("div",{className:"Center text-large cardtxt",style:{fontWeight:"700",fontSize:"32px",letterSpacing:"2px"}},"No Tweets (yet)!")))):n.a.createElement(i.a,{to:"/auth"})},$=a(13),Q=function(e,t){switch(t.type){case"SET_SINGLE_FOLDER_NAME":return Object($.a)({},e,{folderName:t.payload});case"SET_SINGLE_FOLDER":return Object($.a)({},e,{folder:t.payload});case"SET_PREV_USER":return null===t.payload?Object($.a)({},e,{prevUser:null}):Object($.a)({},e,{prevUser:t.payload});case"SET_SHOW_LOGOUT":return Object($.a)({},e,{showLogout:t.payload});case"RESET_SIGNIN":return Object($.a)({},e,{signIn:!0});case"SET_FOLDERS":return null===t.payload?Object($.a)({},e,{folders:[]}):Object($.a)({},e,{folders:t.payload});case"SET_LOGIN":return null===t.payload?Object($.a)({},e,{loggedIn:!1}):Object($.a)({},e,{loggedIn:t.payload});case"SET_USER":return null===t.payload?Object($.a)({},e,{user:null}):Object($.a)({},e,{user:t.payload});case"SET_TOKEN":return null===t.payload||!1===t.payload?Object($.a)({},e,{token:null}):Object($.a)({},e,{token:t.payload});default:return e}},X={showLogout:!1,inAuth:!1,loggedIn:!1,twtAuth:{authed:!1,twtId:null,twtToken:null,twtSecret:null},user:null,prevUser:null,token:null,folders:[],folder:{},folerName:null,folderToUpdate:null,folderIdToUpdate:null},Y=function(){var e=Object(r.useReducer)(Q,X),t=Object(l.a)(e,2),a=t[0],c=t[1];return n.a.createElement(u.a,{basename:"better-bookmarks"},n.a.createElement(g.Provider,{value:{state:a,dispatch:c}},n.a.createElement(m.a,{theme:"dark"}),n.a.createElement(k,null),n.a.createElement(s.a,{className:"h-75"},n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/auth",component:L}),n.a.createElement(i.b,{exact:!0,path:"/folders",component:M}),n.a.createElement(i.b,{exact:!0,path:"/onefolder",component:V}),n.a.createElement(i.b,{exact:!0,path:"/",component:G}),n.a.createElement(i.b,{exact:!0,path:"*",component:y})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.a79abfa8.chunk.js.map