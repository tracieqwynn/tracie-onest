(this["webpackJsonptracie-onest"]=this["webpackJsonptracie-onest"]||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){},51:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var a,r=t(1),c=t.n(r),i=t(28),o=t.n(i),s=(t(37),t(38),t(14)),l=t(4),d=t(7),h=t(6),j=h.a.div(a||(a=Object(d.a)(["\n\n    padding: 0px 30px;\n    min-height: 100vh;\n    height: auto;\n    overflow-wrap:break-word;\n    white-space:normal;\n\n    -webkit-hyphens: auto;\n    -ms-hyphens: auto;\n    hyphens: auto;\n"]))),u=t(2);var b,g,x,p,O,m,f,v,w,y=function(){return Object(u.jsx)(r.Fragment,{children:Object(u.jsxs)(j,{children:[Object(u.jsx)("h1",{children:"Validate UEN"}),Object(u.jsx)("div",{children:"Search UEN"}),Object(u.jsx)("input",{type:"text",placeholder:"uen"})]})})},k=t(23),S=t.n(k),N=t(16),C=t(32),H=t(19),M=(t(44),t(45),t(18)),F=t(12),B="#5E97CF",P="#6F92B3",D=(t(51),h.a.div(b||(b=Object(d.a)(["\n    width:30%;\n    margin-left:auto;\n    margin-right:auto;\n    margin-top: 10px;\n    margin-bottom: 10px;\n"])))),T=function(e){var n=e.forecast,t=300;if("Fair (Day)"==n)M.c;else if("Fair (Night)"==n)M.b;else if("Fair & Warm"==n);else if("Partly Cloudy (Day)"==n)M.a;else if("Partly Cloudy (Night)"==n)var a=Object(u.jsx)(F.b,{size:t,color:"#000"});else if("Cloudy"==n)a=Object(u.jsx)(F.a,{size:t,color:"#000"});else if("Hazy"==n);else if("Slightly Hazy"==n);else if("Windy"==n);else if("Mist"==n);else if("Light Rain"==n)a=Object(u.jsx)(F.c,{size:t,className:"w-icon"});else if("Moderate Rain"==n)a=Object(u.jsx)(F.d,{size:t,color:P,className:"w-icon"});else if("Heavy Rain"==n);else if("Passing Showers"==n);else if("Light Showers"==n);else if("Showers"==n)a=Object(u.jsx)(F.e,{size:t,color:P});else if("Heavy Showers"==n);else if("Thundery Showers"==n)a=Object(u.jsx)(F.f,{size:t,color:P});return Object(u.jsxs)("div",{className:"",children:[a,Object(u.jsx)("div",{className:"card-body",children:n})]})},z=function(e){var n=e.location,t=e.data,a="^([0-1][0-9]|[2][0-4]):[0]{2}$",r=new Date;console.log(n);for(var c,i=0;i<t.length;i++){var o=new Date(t[i].valid_period.start),s=new Date(t[i].valid_period.end),l=(o.getHours()<10?"0"+o.getHours():o.getHours())+":"+(o.getMinutes()<10?"0"+o.getMinutes():o.getMinutes()),d=(s.getHours()<10?"0"+s.getHours():s.getHours())+":"+(s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes());if(l.match(a)&&d.match(a)&&r>o&&r<s){var h=t[i].forecasts[n].forecast;console.log(l+" to "+d),c=Object(u.jsx)(T,{forecast:h});break}}return Object(u.jsxs)(D,{className:"card w-card",children:["sad",c]})},W=function(){new Date;var e=Object(r.useState)([]),n=Object(H.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)({time:""}),i=Object(H.a)(c,2),o=i[0],s=i[1],l=Object(r.useState)({area:0}),d=Object(H.a)(l,2),h=d[0],b=d[1],g=["Ang Mo Kio","Bedok","Bishan","Boon Lay","Bukit Batok","Bukit Merah","Bukit Panjang","Bukit Timah","Central Water Catchment","Changi","Choa Chu Kang","Clementi","City","Geylang","Hougang","Jalan Bahar","Jurong East","Jurong Island","Jurong West","Kallang","Lim Chu Kang","Mandai","Marine Parade","Novena","Pasir Ris","Paya Lebar","Pioneer","Pulau Tekon","Pulau Ubin","Punggol","Queenstown","Seletar","Sembawang","Sengkang","Sentosa","Serangoon","Southern Islands","Sungei Kadut","Tampines","Tanglin","Tengah","Toa Payoh","Tuas","Western Islands","Western Water Catchment","Woodlands","Yishun"],x=g.map((function(e){return Object(u.jsx)("option",{value:g.indexOf(e),children:e})})),p="https://api.data.gov.sg/v1/environment/2-hour-weather-forecast";function O(){return(O=Object(C.a)(S.a.mark((function e(n){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"?date=").concat(m("-"))).then((function(e){return e.json()})).then((function(e){return e}));case 2:t=e.sent,a({data:t.items});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=new Date,t=n.getDate(),a=n.getMonth()+1,r=n.getFullYear();return"".concat(r).concat(e).concat(a<10?"0".concat(a):"".concat(a)).concat(e).concat(t)}function f(){var e=new Date,n=e.getHours(),t=e.getMinutes();return"".concat(n,":").concat(t<10?"0".concat(t):"".concat(t))}var v=function(e){var n=e.target.name,t=e.target.value;"area"==n&&b(Object(N.a)(Object(N.a)({},h),{},{area:t})),function(e){O.apply(this,arguments)}(t),s(Object(N.a)(Object(N.a)({},o),{},{time:f()}))};return Object(u.jsx)(r.Fragment,{children:Object(u.jsxs)(j,{children:[Object(u.jsx)("h1",{children:"Weather Forecast"}),Object(u.jsxs)("div",{className:"weather",children:[Object(u.jsxs)("div",{children:["Retrieved at ",Object(u.jsx)("span",{id:"current-time",children:o.time})]}),Object(u.jsx)("form",{children:Object(u.jsx)("select",{name:"area",onChange:function(e){return v(e)},children:x})}),void 0!=t.data?Object(u.jsx)("div",{children:Object(u.jsx)(z,{location:h.area,data:t.data})}):null]})]})})},E=function(){return Object(u.jsx)(r.Fragment,{children:Object(u.jsxs)(j,{children:[Object(u.jsx)("h1",{children:"Home"}),Object(u.jsx)("div",{children:"Welcome To Tracie's OneST Page"})]})})},J="800px",K=(Object(h.a)(s.b)(g||(g=Object(d.a)(["\n\n\n"]))),h.a.button(x||(x=Object(d.a)(["\n    width: 180px;\n    height:100px;\n    background-repeat:no-repeat;\n    background-size: cover;\n   \n    cursor:pointer;\n    border:none;\n    outline:none;\n    background-color:transparent;\n\n"]))),h.a.div(p||(p=Object(d.a)(["\n\theight: 28px;\n\tline-height: 28px;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustift-content: space-around;\n\talign-item: center;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 5px;\n\tmargin-bottom:15px;\n\tborder: 2px solid red;\n\n\t@media only screen and (max-width: ",") {\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tfloat: none;\n\t\theight: auto;\n\t}\n"])),J)),L=Object(h.a)(s.b)(O||(O=Object(d.a)(["\n\tposition: relative;\n\ttext-decoration: none;\n    text-align: center;\n\tcolor: #163F4B;\n\tfont-size: 13px;\n    font-weight: bold;\n    font-family: OpenSans, Helvetica, sans-serif;\n\tpadding: 0px 2px;\n\theight: 100%;\n\twidth: 10%;\n\n\n\t&:hover {\n\t\tcolor: ",";\n\t\ttext-decoration: underline;\n\t}\n\n\t@media only screen and (max-width: 800px) {\n\t\tdisplay:block;\n        padding:0px;\n        width:100%;\n\t}\n"])),B),R=(h.a.hr(m||(m=Object(d.a)(["\n    border:none;height:4px;\n    background-color: ",";\n    margin-top:0px;\n    margin-bottom:0px;\n"])),B),h.a.div(f||(f=Object(d.a)(["\n    margin: 7px 0px;\n    height:15px;\n    width:2px;\n    background-color:#EDF4F6;\n\n    @media only screen and (max-width: ",") {\n        display:none;\n    }\n"])),J)),I=function(){return Object(u.jsxs)(s.a,{className:"router",basename:"tracie-onest",children:[Object(u.jsxs)(K,{className:"navbar",children:[Object(u.jsx)(L,{to:"/tracie-onest",children:"Home"}),Object(u.jsx)(R,{className:"divider"}),Object(u.jsx)(L,{to:"/uen-validate",children:"Uen-Validate"}),Object(u.jsx)(R,{className:"divider"}),Object(u.jsx)(L,{to:"/weather",children:"Weather"})]}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",exact:!0,component:E}),Object(u.jsx)(l.a,{path:"/uen-validate",component:y}),Object(u.jsx)(l.a,{path:"/weather",component:W})]})]})},U=function(){return Object(u.jsx)("header",{children:Object(u.jsx)(I,{})})},A=h.a.footer(v||(v=Object(d.a)(["\npadding: 15px 30px;\nbackground-color: ",";\ncolor:white;\n"])),B),V=h.a.div(w||(w=Object(d.a)(["\nbackground-color:",";\ncolor:white;\npadding: 10px 20px;\ntext-align:center;\nfont-family: Cavolini;\nfont-size:15px;\n"])),"#D58459"),Y=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(A,{}),Object(u.jsx)(V,{children:"Designed By Tracie"})]})};var _=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(U,{}),Object(u.jsx)(Y,{})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.df87fedb.chunk.js.map