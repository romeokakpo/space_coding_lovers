(this.webpackJsonpspace_coding_lovers=this.webpackJsonpspace_coding_lovers||[]).push([[0],{26:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(5),s=n.n(c),r=n(19),a=n.n(r),i=n(14),o=(n(26),n(8)),u=n(9),j=n(11),d=n(10),l=n(2),b=n(1),h=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={count:0},e.wait=10,e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("progressBarFull");this.timeID=setInterval((function(){e.setState((function(e){return{count:e.count+1}})),t.style.width="".concat(e.state.count/e.wait*100,"%")}),1e3)}},{key:"render",value:function(){return this.state.count>=this.wait&&clearInterval(this.timeID),Object(b.jsxs)("div",{className:"acceuil",children:[this.state.count>=this.wait?Object(b.jsx)(l.a,{to:"/space_coding_lovers/menu"}):null,Object(b.jsx)("div",{id:"progressBar",children:Object(b.jsx)("div",{id:"progressBarFull"})}),Object(b.jsx)("p",{id:"welcome",children:"WELCOME ON SPACE QUEST GAME"})]})}}]),n}(s.a.Component),O=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{})}}]),n}(s.a.Component),p=(n(35),n.p+"static/media/fusee.6c536cd7.png");function v(e){var t=e.seconde;return Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["00:",1===(t+"").length?"0"+t:t]})})}var f=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={seconde:30},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.setState((function(e){return{seconde:e.seconde-1}}))}),1e3)}},{key:"render",value:function(){return this.state.seconde||clearInterval(this.timerID),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:p,alt:"fusee"}),Object(b.jsx)(v,{seconde:this.state.seconde})]})})}}]),n}(s.a.Component),m=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)(s.a.Fragment,{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/space_coding_lovers/",component:h}),Object(b.jsx)(l.b,{path:"/space_coding_lovers/menu/",component:O}),Object(b.jsx)(l.b,{path:"/space_coding_lovers/quiz",component:f})]})})}}]),n}(s.a.Component);a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(m,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.012c5729.chunk.js.map