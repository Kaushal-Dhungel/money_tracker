(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{154:function(e,t,n){},155:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(22),r=n.n(s),o=(n(154),n(155),n(6)),i=n(15),l=n.n(i);function j(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(n)}var u=function(){localStorage.removeItem("access"),localStorage.removeItem("refresh"),localStorage.removeItem("access_expires"),localStorage.removeItem("refresh_expires"),window.location.href="/"},d=function(e,t){setTimeout((function(){b()}),1e3*e),setTimeout((function(){u()}),1e3*t)},b=function e(){var t=localStorage.getItem("refresh"),n=localStorage.getItem("refresh_expires");if(null!==t&&void 0!==t){var c={"Content-Type":"application/json",refresh:t};l.a.post("".concat("http://127.0.0.1:8000","/api/token/refresh/"),c).then((function(c){localStorage.setItem("access",c.data.access);var a=new Date;a.setHours(a.getHours()+1),localStorage.setItem("access_expires",a),localStorage.setItem("refresh",t),localStorage.setItem("refresh_expires",n),setTimeout((function(){e()}),36e5)})).catch((function(t){setTimeout((function(){e()}),1e4)}))}},h=function(e){localStorage.setItem("access",e.access),localStorage.setItem("refresh",e.refresh);var t=new Date,n=new Date;t.setHours(t.getHours()+1),n.setHours(n.getHours()+48),d(3600,172800),localStorage.setItem("access_expires",t),localStorage.setItem("refresh_expires",n)};function m(e,t){return new Promise((function(n,c){var a={"Content-Type":"application/json",username:e,password:t};l.a.post("".concat("http://127.0.0.1:8000","/api/token/"),a).then((function(e){h(e.data),n("success")})).catch((function(e){c(e)}))}))}var p=n(25),x=n.n(p),O=n(11),f=n(71),g=n.n(f),v=n(10),_=n(1),N=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(c.useState)(""),u=Object(o.a)(j,2),d=u[0],b=u[1],h=Object(v.g)(),p=null!==localStorage.getItem("access");return p?Object(_.jsx)(v.a,{to:"/profile"}):Object(_.jsxs)("div",{className:"login_wrapper",children:[Object(_.jsx)("h2",{className:"add_student_header",children:" Login "}),""!==d?Object(_.jsxs)("p",{style:{color:"red",textAlign:"center",fontSize:"18px",margin:"3vh 0"},children:[" ",d," "]}):null,Object(_.jsxs)("div",{className:"add_student",children:[Object(_.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),a(!0);var t=new FormData(e.target);m(t.get("username"),t.get("password")).then((function(e){a(!1),h.push("/profile")})).catch((function(e){a(!1),b("Invalid Credentials. Please Try Again.")}))},children:[Object(_.jsx)("input",{type:"text",name:"username",className:"formStyle",style:{backgroundColor:"rgb(247, 247, 247)"},placeholder:"Username",autoComplete:"off",required:!0}),Object(_.jsx)("input",{type:"password",name:"password",className:"formStyle",style:{backgroundColor:"rgb(247, 247, 247)"},placeholder:"Password",autoComplete:"off",required:!0}),Object(_.jsxs)("div",{className:"form_text",children:[Object(_.jsx)("p",{children:" New User?? "}),Object(_.jsx)(O.b,{to:"/register",children:"  Register Here "})]}),Object(_.jsx)("span",{className:"form_button",children:n?Object(_.jsx)(x.a,{color:"rgb(207, 52, 52)",size:60}):Object(_.jsxs)("button",{className:"simple_button",children:[" Login ",Object(_.jsx)(g.a,{})," "]})})]}),Object(_.jsx)("div",{className:"guest_user",children:i?Object(_.jsx)(x.a,{color:"rgb(207, 52, 52)",size:60}):Object(_.jsx)("button",{className:"simple_button",onClick:function(){l(!0),m("Guest User","guestuser54321@").then((function(e){l(!1),h.push("/profile")})).catch((function(e){l(!1),b("Invalid Credentials. Please Try Again.")}))},children:" Explore as a Guest "})})]})]})},y=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(o.a)(s,2),i=r[0],j=r[1],u=Object(c.useState)(!0),d=Object(o.a)(u,2),b=d[0],p=d[1],f=Object(c.useRef)(),N=Object(c.useRef)(),y=Object(c.useState)(!1),S=Object(o.a)(y,2),C=S[0],w=S[1],I=Object(c.useState)(!1),k=Object(o.a)(I,2),E=k[0],A=k[1],D=Object(v.g)(),T=null!==localStorage.getItem("access");function z(e){var t=f.current.value,n=N.current.value;t&&(t.length>=8?p(!1):p(!0)),t!==n&&""!==t&&""!==n?t===n||j(!0):j(!1)}var P={color:"red"};return T?Object(_.jsx)(v.a,{to:"/profile"}):Object(_.jsxs)("div",{className:"login_wrapper",children:[Object(_.jsx)("h2",{className:"add_student_header",children:" Register "}),""!==n?Object(_.jsxs)("p",{style:P,children:[" ",n," "]}):null,Object(_.jsxs)("div",{className:"add_student",children:[Object(_.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),w(!0),function(e){return new Promise((function(t,n){l.a.post("".concat("http://127.0.0.1:8000","/back/register"),e).then((function(e){console.log(e.data),h(e.data),t("success")})).catch((function(e){n(e)}))}))}(new FormData(e.target)).then((function(e){w(!1),D.push("/profile")})).catch((function(e){a(e.response.data),w(!1)}))},children:[Object(_.jsx)("input",{type:"text",name:"username",className:"formStyle",onChange:z,style:{backgroundColor:"rgb(247, 247, 247)"},placeholder:"Username",autoComplete:"off",required:!0}),Object(_.jsx)("input",{type:"email",name:"email",className:"formStyle",onChange:z,style:{backgroundColor:"rgb(247, 247, 247)"},placeholder:"Email",required:!0,autoComplete:"off"}),Object(_.jsx)("input",{type:"password",name:"password",className:"formStyle",onChange:z,style:{backgroundColor:"rgb(247, 247, 247)"},placeholder:"Password",autoComplete:"off",required:!0,ref:f}),b?Object(_.jsx)("p",{style:P,children:" Password must be 8 characters long "}):null,Object(_.jsx)("input",{type:"password",name:"confirm_password",className:"formStyle",onChange:z,style:{backgroundColor:"rgb(247, 247, 247)"},placeholder:"Confirm Password",autoComplete:"off",minLength:"8",required:!0,ref:N}),i?Object(_.jsx)("p",{style:P,children:" Password and Confirm Password must be same"}):null,Object(_.jsxs)("div",{className:"form_text",children:[Object(_.jsx)("p",{children:" Have an Account? "}),Object(_.jsx)(O.b,{to:"/login",children:"  Login Here "})]}),Object(_.jsx)("span",{className:"form_button",children:C?Object(_.jsx)(x.a,{color:"rgb(207, 52, 52)",size:60}):Object(_.jsxs)("button",{className:"simple_button",disabled:i||b,children:["Register ",Object(_.jsx)(g.a,{})]})})]}),Object(_.jsx)("div",{className:"guest_user",children:E?Object(_.jsx)(x.a,{color:"rgb(207, 52, 52)",size:60}):Object(_.jsx)("button",{className:"simple_button",onClick:function(){A(!0),m("Guest User","guestuser54321@").then((function(e){A(!1),D.push("/profile")})).catch((function(e){A(!1),a("Invalid Credentials. Please Try Again.")}))},children:" Explore as a Guest "})})]})]})},S=n(20),C=n.n(S),w=n(32),I=n(44),k=n(33),E=n(41),A=n.n(E),D=n(16),T=n.n(D),z="UPDATE_TOTAL",P="UPDATE_EXPENSES",F="UPDATE_INCOMES",R="UPDATE_LOADING";function L(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(n)}var U=function(e){return{type:P,expenses:e}},B=function(e){return{type:F,incomes:e}},H=function(){return function(e){var t=localStorage.getItem("refresh");if(null===t||void 0===t)return localStorage.removeItem("access"),localStorage.removeItem("refresh"),localStorage.removeItem("access_expires"),void localStorage.removeItem("refresh_expires");var n={params:{user_id:L(t).user_id}};l.a.get("".concat("http://127.0.0.1:8000","/main/total"),n).then((function(t){var n;e((n=t.data,{type:z,total:n}))})).catch((function(e){console.log(e)}))}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(n){var c={params:{user_id:L(localStorage.getItem("refresh")).user_id,startDate:e,endDate:t}};l.a.get("".concat("http://127.0.0.1:8000","/main/expense/"),c).then((function(e){n(U(e.data))})).catch((function(e){console.log(e)}))}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(n){var c={params:{user_id:L(localStorage.getItem("refresh")).user_id,startDate:e,endDate:t}};l.a.get("".concat("http://127.0.0.1:8000","/main/income/"),c).then((function(e){n(B(e.data))})).catch((function(e){console.log(e)}))}},G=n(24),J=Object(G.b)(null,(function(e){return{fetchTotal:function(){return e(H())},fetchExpenses:function(){return e(q())},fetchIncomes:function(){return e(M())}}}))((function(e){var t=e.category,n=e.source,a=e.amount,s=e.details,r=e.id,i=e.fetchTotal,j=e.fetchExpenses,u=e.fetchIncomes,d=Object(c.useState)({category:t,source:n,amount:a,date:"",details:s}),b=Object(o.a)(d,2),h=b[0],m=b[1],p=Object(c.useState)(!1),O=Object(o.a)(p,2),f=O[0],g=O[1],v=function(e){var t=e.target,n=t.name,c=t.value;m((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(I.a)({},n,c))}))},N=function(){var e=Object(w.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(!0),t=localStorage.getItem("access"),n={headers:{Authorization:"Bearer ".concat(t)}},""!==r){e.next=8;break}return e.next=6,l.a.post("".concat("http://127.0.0.1:8000","/main/").concat(h.category,"/"),h,n).then((function(e){g(!1),T()("Added!","Item has been added","success").then((function(e){e&&(i(),m((function(){return{category:"expense",source:"",amount:"",date:"",details:""}})))}))})).catch((function(e){g(!1),T()("Sorry!","Couldn't perform the given operation","error")}));case 6:e.next=10;break;case 8:return e.next=10,l.a.put("".concat("http://127.0.0.1:8000","/main/").concat(h.category,"/").concat(r,"/"),h,n).then((function(e){g(!1),T()("Updated!","Item has been updated","success").then((function(e){e&&(i(),"income"===h.category?u():j())}))})).catch((function(e){g(!1),T()("Sorry!","Couldn't perform the given operation","error")}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:"pf",children:[Object(_.jsxs)("div",{className:"form_top",children:[Object(_.jsxs)("div",{className:"form_left",children:[Object(_.jsxs)("select",{name:"category",className:"formStyle",value:h.category,onChange:v,children:[Object(_.jsx)("option",{value:"expense",children:"Expense"}),Object(_.jsx)("option",{value:"income",children:"Income"})]}),Object(_.jsx)("input",{type:"number",name:"amount",step:"0.01",className:"formStyle",value:h.amount,placeholder:"Amount",required:!0,autoComplete:"off",onChange:v,style:{marginTop:"3px"}})]}),Object(_.jsxs)("div",{className:"form_right",children:[Object(_.jsx)("select",{name:"source",className:"formStyle",value:h.source,onChange:v,children:"expense"===h.category?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("option",{value:"",children:"Select Source"}),Object(_.jsx)("option",{value:"shopping",children:"Shopping"}),Object(_.jsx)("option",{value:"education",children:"Education"}),Object(_.jsx)("option",{value:"entertainment_travel",children:"Entertainment/Travel"}),Object(_.jsx)("option",{value:"health",children:"Health"}),Object(_.jsx)("option",{value:"assets",children:"Assets"}),Object(_.jsx)("option",{value:"others",children:"Others"})]}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("option",{value:"",children:"Select Source"}),Object(_.jsx)("option",{value:"salary",children:"Salary"}),Object(_.jsx)("option",{value:"business",children:"Business"}),Object(_.jsx)("option",{value:"sales",children:"Sales"}),Object(_.jsx)("option",{value:"others",children:"Others"})]})}),Object(_.jsx)("input",{type:"date",name:"date",className:"formStyle",placeholder:"Date",required:!0,onChange:v})]})]}),Object(_.jsxs)("div",{className:"form_bottom",children:[Object(_.jsx)("textarea",{name:"details",className:"text_area_field",placeholder:"Additional Details..",value:h.details,onChange:v}),Object(_.jsx)("span",{className:"form_button",children:f?Object(_.jsx)(x.a,{color:"rgb(207, 52, 52)",size:60}):Object(_.jsxs)("button",{className:"simple_button",onClick:N,disabled:""===h.amount||""===h.date||""===h.details,children:[" Add ",Object(_.jsx)(A.a,{})," "]})})]})]})})),K=n(45),Y=n.n(K),$=n(128),W=n.n($),X=n(129),Q=n.n(X),V=n(131),Z=n.n(V),ee=n(130),te=n.n(ee),ne={fontSize:"60",color:"#f50057"},ce=[Object(_.jsx)(W.a,{style:ne}),Object(_.jsx)(Q.a,{style:ne}),Object(_.jsx)(te.a,{style:ne}),Object(_.jsx)(Z.a,{style:ne})],ae=["Today's Expenses","Month's Expenses","Today's Income","Month's Income"],se=Object(G.b)((function(e){return{total:e.totals}}),(function(e){return{fetchTotal:function(){return e(H())}}}))((function(e){var t=e.total,n=e.fetchTotal,a=null!==localStorage.getItem("access");return Object(c.useEffect)((function(){n()}),[n]),a?Object(_.jsxs)("div",{className:"profile_wrapper",children:[Object(_.jsx)("div",{className:"profile_cards",children:Object(_.jsx)("div",{className:"profile_cards_wrapper",children:t.map((function(e,t){return Object(_.jsxs)("div",{className:"small_card",children:[Object(_.jsx)("span",{className:"s_card_icon",children:ce[t]}),Object(_.jsxs)("div",{className:"s_card_text",children:[Object(_.jsx)("h3",{children:ae[t]}),Object(_.jsxs)("h3",{children:[" $",Object(_.jsx)(Y.a,{start:0,end:e,duration:2.5,separator:","})]})]})]},t)}))})}),Object(_.jsx)("div",{className:"profile_form ",children:Object(_.jsx)(J,{category:"expense",source:"shopping",amount:"",id:"",details:"",add:!0})})]}):Object(_.jsx)(v.a,{to:"/"})})),re=n(132),oe=function(e){var t=e.category,n=e.expense;var c=["shopping","education","entertainment_travel","health","assets","others"];"Incomes"===t&&(c=["salary","business","sales","others"]);var a=c.map((function(e){return t=e,n.filter((function(e){return e.category===t})).map((function(e){return parseFloat(e.amount)})).reduce((function(e,t){return e+t}),0);var t}));return Object(_.jsx)("div",{className:"chart_section",children:Object(_.jsx)("div",{className:"line_chart",children:Object(_.jsx)(re.Bar,{data:{labels:c,datasets:[{backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)","rgba(50,110,125,0.5)","rgba(110,125,50,0.5)","rgba(125,50,110,0.5)"],data:a}]},options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},title:{display:!0,text:"".concat(t," Per Category"),fontSize:18}}})})})},ie=n(42),le=n(317),je=n(326),ue=n(328),de=n(327),be=n(322),he=n(325),me=n(319),pe=n(320),xe=n(323),Oe=n(318),fe=n(324),ge=n(321),ve=n(134),_e=n.n(ve),Ne=n(133),ye=n.n(Ne),Se=n(48),Ce=n.n(Se),we=n(77),Ie=n.n(we),ke=n(78),Ee=n.n(ke),Ae=n(76),De=n.n(Ae),Te=n(135),ze=n.n(Te),Pe=n(46),Fe=n.n(Pe),Re=Object(le.a)({root:{"& > *":{borderBottom:"unset"}}}),Le=Object(G.b)(null,(function(e){return{fetchTotal:function(){return e(H())},fetchExpenses:function(){return e(q())},fetchIncomes:function(){return e(M())}}}))((function(e){var t=e.row,n=e.category,c=e.fetchTotal,s=e.fetchExpenses,r=e.fetchIncomes,i=a.a.useState(!1),j=Object(o.a)(i,2),u=j[0],d=j[1],b=a.a.useState(!1),h=Object(o.a)(b,2),m=h[0],p=h[1],O=a.a.useState(!1),f=Object(o.a)(O,2),g=f[0],v=f[1],N=Re(),y=function(){var e=Object(w.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T()({title:"Are you sure?",text:"Are you sure that you want to delete this item?",icon:"warning",dangerMode:!0}).then((function(e){if(e){v(!0);var a=localStorage.getItem("access"),o={headers:{Authorization:"Bearer ".concat(a)}},i=t.target.dataset.action;l.a.delete("".concat("http://127.0.0.1:8000","/main/").concat(n,"/").concat(i,"/"),o).then((function(e){v(!1),T()("Deleted!","Item has been deleted","success").then((function(e){e&&(c(),"income"===n?r():s())}))})).catch((function(e){v(!1),T()("Sorry!","Couldn't perform the given operation","error")}))}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)(a.a.Fragment,{children:[Object(_.jsxs)(Oe.a,{className:N.root,children:[Object(_.jsx)(me.a,{children:Object(_.jsx)(de.a,{"aria-label":"expand row",size:"small",onClick:function(){return d(!u)},children:u?Object(_.jsx)(ye.a,{}):Object(_.jsx)(_e.a,{})})}),Object(_.jsx)(me.a,{component:"th",scope:"row",children:Object(_.jsx)("h4",{children:t.category})}),Object(_.jsx)(me.a,{align:"right",children:Object(_.jsx)("h4",{children:t.amount})}),Object(_.jsxs)(me.a,{align:"right",children:[" ",Object(_.jsx)("h4",{children:t.date})," "]})]}),Object(_.jsx)(Oe.a,{children:Object(_.jsx)(me.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(_.jsx)(ue.a,{in:u,timeout:"auto",unmountOnExit:!0,children:Object(_.jsx)(je.a,{margin:1,children:Object(_.jsxs)("div",{className:"expanded_section",children:[Object(_.jsxs)("p",{children:[" ",t.details," "]}),Object(_.jsx)(Fe.a,{isOpen:m,style:{overlay:{backgroundColor:"rgba(17, 13, 14, 0.507)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},children:Object(_.jsxs)("div",{className:"modal_form",children:[Object(_.jsxs)("button",{className:"simple_button",onClick:function(){return p(!1)},children:[" ",Object(_.jsx)(De.a,{})," "]}),Object(_.jsx)(J,{category:n,source:t.category,amount:t.amount,id:t.id,details:t.details,add:!1})]})}),Object(_.jsxs)("div",{className:"table_buttons",children:[Object(_.jsxs)("button",{className:"simple_button","data-action":t.id,onClick:function(){return p(!0)},children:[" ",Object(_.jsx)(Ie.a,{})," "]}),g?Object(_.jsx)(x.a,{color:"rgb(207, 52, 52)",size:30}):Object(_.jsx)("button",{className:"simple_button","data-action":t.id,onClick:y,children:Object(_.jsx)(Ee.a,{"data-action":t.id,onClick:y})})]})]})})})})})]})}));Fe.a.setAppElement("#root");var Ue=Object(G.b)(null,(function(e){return{fetchExpenses:function(t,n){return e(q(t,n))},fetchIncomes:function(t,n){return e(M(t,n))}}}))((function(e){var t=e.expense,n=e.category,c=e.fetchExpenses,s=e.fetchIncomes,r=a.a.useState([]),i=Object(o.a)(r,2),l=i[0],j=i[1],u=a.a.useState({startDate:"",endDate:""}),d=Object(o.a)(u,2),b=d[0],h=d[1];a.a.useEffect((function(){j((function(){return Object(ie.a)(t)}))}),[t]);var m=function(e){var t=e.target,n=t.name,c=t.value;h((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(I.a)({},n,c))}))};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"search_and_sort",children:[Object(_.jsxs)("span",{className:"date_search",children:[Object(_.jsxs)("div",{className:"cont-1",children:[Object(_.jsx)("input",{type:"text",name:"startDate",className:"formStyle table_input",onChange:m,value:b.startDate,onFocus:function(e){e.currentTarget.type="date",e.currentTarget.focus()},placeholder:"Start date"}),Object(_.jsx)("input",{type:"text",name:"endDate",className:"formStyle table_input",onChange:m,value:b.endDate,onFocus:function(e){e.currentTarget.type="date",e.currentTarget.focus()},placeholder:"Final date"})]}),Object(_.jsxs)("div",{className:"cont-2",children:[Object(_.jsxs)("button",{className:"simple_button",onClick:function(){return"income"===n?s(b.startDate,b.endDate):c(b.startDate,b.endDate)},children:["Search ",Object(_.jsx)(Ce.a,{})," "]}),Object(_.jsxs)("button",{className:"simple_button",onClick:function(){h((function(){return{startDate:"",endDate:""}})),"income"===n?s():c()},children:["Clear ",Object(_.jsx)(ze.a,{})," "]})]})]}),Object(_.jsx)("div",{className:"sort",children:Object(_.jsx)("input",{type:"text",className:"formStyle table_input_search",placeholder:"Search Here..",onChange:function(e){var n=e.target.value,c=t.filter((function(e){return e.category.toLowerCase().match(n)}));j(""===n?function(e){return Object(ie.a)(t)}:function(e){return Object(ie.a)(c)})}})})]}),Object(_.jsx)("div",{className:"income_expenses_table",children:Object(_.jsx)(pe.a,{component:ge.a,children:Object(_.jsxs)(be.a,{"aria-label":"collapsible table",children:[Object(_.jsx)(xe.a,{children:Object(_.jsxs)(Oe.a,{children:[Object(_.jsx)(me.a,{}),Object(_.jsxs)(me.a,{children:[" ",Object(_.jsx)(fe.a,{variant:"h6",component:"h2",children:" Categories"}),"  "]}),Object(_.jsxs)(me.a,{align:"right",children:[" ",Object(_.jsx)(fe.a,{variant:"h6",component:"h2",children:" Amount"})," "]}),Object(_.jsxs)(me.a,{align:"right",children:[" ",Object(_.jsx)(fe.a,{variant:"h6",component:"h2",children:" Date"}),"  "]})]})}),Object(_.jsx)(he.a,{children:0===l.length?Object(_.jsx)(Oe.a,{children:Object(_.jsxs)(me.a,{children:[" ",Object(_.jsx)("h2",{style:{textAlign:"center"},children:"No Items Available"})]})}):l.map((function(e,t){return Object(_.jsx)(Le,{row:e,category:n},t)}))})]})})})]})})),Be=Object(G.b)((function(e){return{total:e.totals,expenses:e.expenses}}),(function(e){return{fetchExpenses:function(){return e(q())}}}))((function(e){var t=e.total,n=e.expenses,a=e.fetchExpenses;return Object(c.useEffect)((function(){a()}),[a]),Object(_.jsxs)("div",{className:"profile_right",children:[Object(_.jsx)("div",{className:"two_cards_wrapper",children:t.slice(0,2).map((function(e,t){return Object(_.jsxs)("div",{className:"two_cards",children:[Object(_.jsx)("span",{className:"s_card_icon",children:ce[t]}),Object(_.jsxs)("div",{className:"s_card_text",children:[Object(_.jsxs)("h3",{children:[" ",ae[t]," "]}),Object(_.jsxs)("h3",{children:[" $",Object(_.jsx)(Y.a,{start:0,end:e,duration:2.5,separator:","})]})]})]},t)}))}),Object(_.jsx)(oe,{category:"Expenses",expense:n}),Object(_.jsx)("div",{className:"table_section",children:Object(_.jsx)(Ue,{expense:n,category:"expense"})})]})})),He=Object(G.b)((function(e){return{total:e.totals,incomes:e.incomes}}),(function(e){return{fetchIncome:function(){return e(M())}}}))((function(e){var t=e.total,n=e.incomes,a=e.fetchIncome;return Object(c.useEffect)((function(){a()}),[a]),Object(_.jsxs)("div",{className:"profile_right",children:[Object(_.jsx)("div",{className:"two_cards_wrapper",children:t.slice(2,4).map((function(e,t){return Object(_.jsxs)("div",{className:"two_cards",children:[Object(_.jsx)("span",{className:"s_card_icon",children:ce[t+2]}),Object(_.jsxs)("div",{className:"s_card_text",children:[Object(_.jsxs)("h3",{children:[" ",ae[t+2]," "]}),Object(_.jsxs)("h3",{children:[" $",Object(_.jsx)(Y.a,{start:0,end:e,duration:2.5,separator:","})]})]})]},t)}))}),Object(_.jsx)(oe,{category:"Incomes",expense:n}),Object(_.jsx)("div",{className:"table_section",children:Object(_.jsx)(Ue,{expense:n,category:"income"})})]})}));Fe.a.setAppElement("#root");var qe=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(o.a)(s,2),i=r[0],j=r[1],u=Object(c.useState)(!1),d=Object(o.a)(u,2),b=d[0],h=d[1],m=Object(c.useState)(""),p=Object(o.a)(m,2),O=p[0],f=p[1],g=Object(c.useState)(""),v=Object(o.a)(g,2),N=v[0],y=v[1],S=Object(c.useState)([]),I=Object(o.a)(S,2),k=I[0],E=I[1];Object(c.useEffect)((function(){var e=localStorage.getItem("access"),t={headers:{Authorization:"Bearer ".concat(e)}};l.a.get("".concat("http://127.0.0.1:8000","/main/todo/"),t).then((function(e){E(e.data)})).catch((function(e){console.log(e)}))}),[]);var D=function(){var e=Object(w.a)(C.a.mark((function e(t){var n,c,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),n=localStorage.getItem("access"),c={headers:{Authorization:"Bearer ".concat(n)}},s={todo_text:O},e.next=6,l.a.post("".concat("http://127.0.0.1:8000","/main/todo/"),s,c).then((function(e){E((function(t){return[e.data].concat(Object(ie.a)(t))})),a(!1),f("")})).catch((function(e){a(!1)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(n=t.target.dataset.id)){e.next=3;break}return e.abrupt("return");case 3:T()({title:"Are you sure?",text:"Are you sure that you want to delete this item?",icon:"warning",dangerMode:!0}).then((function(e){if(e){var t=localStorage.getItem("access"),c={headers:{Authorization:"Bearer ".concat(t)},data:{todo_id:n}};l.a.delete("".concat("http://127.0.0.1:8000","/main/todo/"),c).then((function(e){T()("Deleted!","Item has been deleted","success");var t=k.filter((function(e){return e.id!==parseInt(n)}));console.log(t),E(t)})).catch((function(e){T()("Sorry!","Couldn't perform the given operation","error")}))}}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e){y(e.target.value)},F=function(e){var t=e.target.dataset.id;if(void 0!==t){j(!0);var n=localStorage.getItem("access"),c={headers:{Authorization:"Bearer ".concat(n)}},a={todo_id:t,todo_text:N};l.a.patch("".concat("http://127.0.0.1:8000","/main/todo/"),a,c).then((function(e){var n=[e.data],c=k.filter((function(e){return e.id!==parseInt(t)}));E([].concat(n,Object(ie.a)(c))),T()("Edited!","Item has been edited","success").then((function(e){e&&(h(!1),j(!1))}))})).catch((function(e){T()("Sorry!","Couldn't perform the given operation","error"),j(!1)}))}};return Object(_.jsxs)("div",{className:"todo_wrapper",children:[Object(_.jsx)("div",{className:"todo_form_wrapper",children:Object(_.jsxs)("div",{className:"todo_form table_input_search",children:[Object(_.jsx)("input",{type:"text",name:"username",className:"formStyle todo_input",style:{backgroundColor:"rgb(247, 247, 247)"},onChange:function(e){f(e.target.value)},value:O,placeholder:"Enter the item",autoComplete:"off",required:!0}),n?Object(_.jsx)(x.a,{color:"rgb(207, 52, 52)",size:60}):Object(_.jsxs)("button",{className:"simple_button",onClick:D,disabled:""===O,children:[" Add ",Object(_.jsx)(A.a,{})," "]})]})}),Object(_.jsx)("div",{className:"todo_list",children:k.map((function(e,t){return Object(_.jsxs)("div",{className:"list",children:[Object(_.jsxs)("p",{children:[" ",e.todo_text," "]}),Object(_.jsx)(Fe.a,{isOpen:b,style:{overlay:{backgroundColor:"rgba(17, 13, 14, 0.507)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},children:Object(_.jsxs)("div",{className:"modal_form",children:[Object(_.jsxs)("button",{className:"simple_button",onClick:function(){return h(!1)},children:[" ",Object(_.jsx)(De.a,{})," "]}),Object(_.jsx)("input",{type:"text",name:"username",className:"formStyle",style:{backgroundColor:"rgb(247, 247, 247)"},value:N,onChange:P,placeholder:"Enter the item",autoComplete:"off",required:!0}),i?Object(_.jsx)(x.a,{color:"rgb(207, 52, 52)",size:60}):Object(_.jsxs)("button",{className:"simple_button",disabled:""===N,"data-id":e.id,onClick:F,children:[" Update ",Object(_.jsx)(A.a,{})," "]})]})}),Object(_.jsxs)("div",{className:"todo_buttons",children:[Object(_.jsx)("button",{className:"todo_button","data-id":e.id,onClick:function(){h(!0),y(e.todo_text)},children:Object(_.jsx)(Ie.a,{style:{fontSize:"30"},color:"secondary",onClick:function(){h(!0),y(e.todo_text)}})}),Object(_.jsx)("button",{className:"todo_button","data-id":e.id,onClick:z,children:Object(_.jsx)(Ee.a,{style:{fontSize:"30"},color:"primary","data-id":e.id,onClick:z})})]})]},t)}))})]})},Me=n.p+"static/media/abcd.3ea93a90.webp",Ge=n.p+"static/media/bcde.58f8a060.webp",Je=n.p+"static/media/todo.11e5c427.svg",Ke=n(80),Ye=n.n(Ke),$e=n(49),We=function(){return null!==localStorage.getItem("access")?Object(_.jsx)(v.a,{to:"/profile"}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"landing_wrapper",children:Object(_.jsxs)("div",{className:"landing",children:[Object(_.jsx)("div",{className:"left",children:Object(_.jsx)($e.a,{children:Object(_.jsxs)("div",{className:"landing_text",children:[Object(_.jsx)("h2",{children:" Keep Track Of Your Expenses and Incomes.."}),Object(_.jsxs)("p",{children:[" Manage your wealth properly. Keep track of your expenses, incomes, ",Object(_.jsx)("br",{}),"make a list of your to-do things and to-buy things all in a single place."]}),Object(_.jsxs)("div",{className:"landing_buttons",children:[Object(_.jsxs)(O.b,{className:"button",to:"/login",children:["Login ",Object(_.jsx)(Ce.a,{}),"  "]}),Object(_.jsxs)(O.b,{className:"button",to:"/register",children:["Register ",Object(_.jsx)(Ye.a,{})," "]})]})]})})}),Object(_.jsx)("div",{className:"right",children:Object(_.jsx)($e.a,{direction:"down",children:Object(_.jsx)("div",{className:"landing_img",children:Object(_.jsx)("img",{src:Me,alt:"..",srcSet:""})})})})]})}),Object(_.jsx)("div",{className:"expense_section",children:Object(_.jsxs)("div",{className:"landing_expense",children:[Object(_.jsx)($e.b,{children:Object(_.jsx)("div",{className:"left",children:Object(_.jsx)("div",{className:"landing_img",children:Object(_.jsx)("img",{src:Ge,alt:"..",srcSet:""})})})}),Object(_.jsx)("div",{className:"right",children:Object(_.jsx)($e.a,{direction:"right",children:Object(_.jsxs)("div",{className:"landing_text",children:[Object(_.jsx)("h2",{children:" Keep Track Of Your Expenses and Incomes.."}),Object(_.jsxs)("p",{children:[" Record all of your expenses effectively. Have multiple income sources?? ",Object(_.jsx)("br",{}),"Well, managing them has never been this easier."]}),Object(_.jsxs)("div",{className:"landing_buttons",children:[Object(_.jsxs)(O.b,{className:"button",to:"/login",children:["Login ",Object(_.jsx)(Ce.a,{}),"  "]}),Object(_.jsxs)(O.b,{className:"button",to:"/register",children:["Register ",Object(_.jsx)(Ye.a,{})," "]})]})]})})})]})}),Object(_.jsx)("div",{className:"todo_section",children:Object(_.jsx)($e.b,{children:Object(_.jsxs)("div",{className:"landing_todo",children:[Object(_.jsx)("div",{className:"right",children:Object(_.jsxs)("div",{className:"landing_text",children:[Object(_.jsx)("h2",{children:" How have you planned to spend your savings??"}),Object(_.jsxs)("p",{children:[" Well, we help create a to-do list for you. Prioritize your expenses so that",Object(_.jsx)("br",{}),"you do not miss out the important things."]}),Object(_.jsxs)("div",{className:"landing_buttons",children:[Object(_.jsxs)(O.b,{className:"button",to:"/login",children:["Login ",Object(_.jsx)(Ce.a,{}),"  "]}),Object(_.jsxs)(O.b,{className:"button",to:"/register",children:["Register ",Object(_.jsx)(Ye.a,{})," "]})]})]})}),Object(_.jsx)("div",{className:"left",children:Object(_.jsx)("div",{className:"landing_img",children:Object(_.jsx)("img",{src:Je,alt:"..",srcSet:"",className:"todo_section_img"})})})]})})}),Object(_.jsx)("div",{className:"footer",children:Object(_.jsx)("h3",{style:{textAlign:"center",marginBottom:"5vh"},children:" \xa9 Copyright 2021. All Right Reserved."})})]})},Xe=n(137),Qe=n.n(Xe),Ve=n(140),Ze=n.n(Ve),et=n(138),tt=n.n(et),nt=n(139),ct=n.n(nt),at=[{title:"Profile",path:"/profile",icon:Object(_.jsx)(Qe.a,{}),cName:"nav-text"},{title:"Expenses",path:"/expenses",icon:Object(_.jsx)(tt.a,{}),cName:"nav-text"},{title:"Incomes",path:"/income",icon:Object(_.jsx)(ct.a,{}),cName:"nav-text"},{title:"Todo List",path:"/todolist",icon:Object(_.jsx)(Ze.a,{}),cName:"nav-text"}],st=n(141),rt=n.n(st),ot=n(142),it=n.n(ot);var lt=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(o.a)(s,2),i=r[0],d=r[1];Object(c.useEffect)((function(){(function(){var e=Object(w.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j(localStorage.getItem("refresh")),n={params:{user_id:t.user_id}},e.next=4,l.a.get("".concat("http://127.0.0.1:8000","/getname"),n).then((function(e){d(e.data[0])})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=function(){return a(!n)};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"navbar",children:[Object(_.jsx)(O.b,{to:"#",className:"menu-bars",children:Object(_.jsx)(rt.a,{onClick:b,style:{fontSize:40,color:"white"}})}),Object(_.jsx)("h2",{children:" Track Money Flow "})]}),Object(_.jsx)("nav",{className:n?"nav-menu active":"nav-menu",children:Object(_.jsxs)("ul",{className:"nav-menu-items",onClick:b,children:[Object(_.jsx)("li",{className:"navbar-toggle",children:Object(_.jsx)(O.b,{to:"#",className:"menu-bars",children:Object(_.jsx)(it.a,{onClick:b,style:{fontSize:40,color:"white"}})})}),Object(_.jsxs)("li",{className:"left_top",children:[Object(_.jsxs)("h2",{children:["  ",i.charAt(0).toUpperCase()+i.slice(1)," "]}),Object(_.jsx)("span",{className:"form_button logout",children:Object(_.jsxs)("button",{className:"simple_button logout_btn",onClick:function(){T()({title:"Are you sure?",text:"Are you sure that you want to log out?",icon:"warning",dangerMode:!0}).then((function(e){e&&T()("Logged Out!","You have been logged out!","success").then((function(e){u()}))}))},children:[" Logout ",Object(_.jsx)(A.a,{})," "]})}),Object(_.jsx)("hr",{})]}),at.map((function(e,t){return Object(_.jsx)("li",{className:e.cName,children:Object(_.jsxs)(O.b,{to:e.path,children:[e.icon,Object(_.jsx)("span",{children:e.title})]})},t)}))]})})]})},jt=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(O.a,{children:[Object(_.jsx)(lt,{}),Object(_.jsxs)(v.d,{children:[Object(_.jsx)(v.b,{exact:!0,path:"/income",component:He}),Object(_.jsx)(v.b,{exact:!0,path:"/profile",component:se}),Object(_.jsx)(v.b,{exact:!0,path:"/todolist",component:qe}),Object(_.jsx)(v.b,{exact:!0,path:"/expenses",component:Be}),Object(_.jsx)(v.b,{exact:!0,path:"/login",component:N}),Object(_.jsx)(v.b,{exact:!0,path:"/register",component:y})]})]})})};var ut=function(){return Object(c.useEffect)((function(){!function(){var e=localStorage.getItem("access_expires"),t=localStorage.getItem("refresh_expires");if(e!==t&&null!==e)if(t<=new Date)u();else{e<=new Date&&b();var n=new Date,c=(new Date(e)-n)/1e3,a=(new Date(t)-n)/1e3;d(c,a)}}()}),[]),Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(O.a,{children:Object(_.jsxs)(v.d,{children:[Object(_.jsx)(v.b,{exact:!0,path:"/login",component:N}),Object(_.jsx)(v.b,{exact:!0,path:"/register",component:y}),Object(_.jsx)(v.b,{exact:!0,path:"/profile",component:jt}),Object(_.jsx)(v.b,{exact:!0,path:"/",component:We}),Object(_.jsx)(v.a,{to:"/"})]})})})},dt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,331)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},bt=n(59),ht={totals:[],expenses:[],incomes:[],loading:!0},mt=function(e,t){return Object(k.a)(Object(k.a)({},e),t)},pt=function(e,t){return mt(e,{totals:t.total})},xt=function(e,t){return mt(e,{expenses:t.expenses})},Ot=function(e,t){return mt(e,{incomes:t.incomes})},ft=function(e,t){return mt(e,{loading:t.loading})},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return pt(e,t);case P:return xt(e,t);case F:return Ot(e,t);case R:return ft(e,t);default:return e}},vt=n(143),_t=Object(bt.c)(gt,Object(bt.a)(vt.a));r.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(G.a,{store:_t,children:Object(_.jsx)(ut,{})})}),document.getElementById("root")),dt()}},[[292,1,2]]]);
//# sourceMappingURL=main.489cab68.chunk.js.map