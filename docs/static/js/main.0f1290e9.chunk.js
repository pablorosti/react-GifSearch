(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=(a(14),a(1)),l=a(8),m=function(e){var t=e.setCategories,a=e.categories,c=Object(n.useState)(""),i=Object(u.a)(c,2),m=i[0],o=i[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m.trim().length>0&&t([m].concat(Object(l.a)(a)))}},r.a.createElement("input",{type:"text",value:m,onChange:function(e){o(e.target.value)}}))},o=function(e){var t=e.titulo,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},s=a(4),p=a.n(s),f=a(7),d=function(){var e=Object(f.a)(p.a.mark((function e(t){var a,n,r,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?api_key=dLh1B96mdTnJ9eogk5LA67lZPTx7AGXD&limit=10&q=".concat(t),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.category,a=Object(n.useState)([]),c=Object(u.a)(a,2),i=c[0],l=c[1];return Object(n.useEffect)((function(){d(t).then(l)}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"}," ",t," "),r.a.createElement("div",{className:"grid-card"},i.map((function(e){return r.a.createElement(o,{key:e.id,titulo:e.title,url:e.url})}))))},E=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Gif Expert App"),r.a.createElement(m,{setCategories:c,categories:a}),r.a.createElement("hr",null),a.map((function(e){return r.a.createElement(g,{category:e,key:e})})))};i.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0f1290e9.chunk.js.map