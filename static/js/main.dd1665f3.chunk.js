(this.webpackJsonpspace_coding_lovers=this.webpackJsonpspace_coding_lovers||[]).push([[0],{26:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(4),i=n.n(c),s=n(19),a=n.n(s),r=n(12),o=(n(26),n(8)),u=n(9),l=n(11),j=n(10),d=n(2),b=n(0),m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={count:0},e.wait=10,e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("progressBarFull");this.timeID=setInterval((function(){e.setState((function(e){return{count:e.count+1}})),t.style.width="".concat(e.state.count/e.wait*100,"%")}),1e3)}},{key:"render",value:function(){return this.state.count>=this.wait&&clearInterval(this.timeID),Object(b.jsxs)("div",{className:"acceuil",children:[this.state.count>=this.wait?Object(b.jsx)(d.a,{to:"/space_coding_lovers/menu"}):null,Object(b.jsx)("p",{id:"welcome",children:"WELCOME ON SPACE QUEST GAME"}),Object(b.jsx)("div",{id:"progressBar",children:Object(b.jsx)("div",{id:"progressBarFull"})})]})}}]),n}(i.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(r.b,{to:"/space_coding_lovers/quiz",children:"Quiz"}),Object(b.jsx)("br",{}),Object(b.jsx)(r.b,{to:"/space_coding_lovers/puzzle",children:"Puzzle"})]})}}]),n}(i.a.Component),O=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{})}}]),n}(i.a.Component),h=(n(35),n.p+"static/media/fusee.min.15368194.png");function v(e){var t=e.seconde;return Object(b.jsxs)("span",{className:"".concat(t<=10?"time-out":null),children:["00:",1===(t+"").length?"0"+t:t]})}var x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={seconde:30},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.setState((function(e){return{seconde:e.seconde-1}}))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return this.state.seconde||clearInterval(this.timerID),Object(b.jsx)(i.a.Fragment,{children:Object(b.jsxs)("div",{className:"pageQuiz",children:[Object(b.jsx)("div",{className:"container pt-3 Quiz position-ralative",children:Object(b.jsx)("table",{className:"questionnaire",children:Object(b.jsxs)("tbody",{children:[Object(b.jsx)("tr",{children:Object(b.jsx)("td",{colSpan:"2",children:Object(b.jsx)(v,{seconde:this.state.seconde})})}),Object(b.jsx)("tr",{children:Object(b.jsx)("td",{colSpan:"2",children:Object(b.jsxs)("p",{className:"quiz",children:["Question",Object(b.jsx)("br",{}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente beatae voluptates rem, at dignissimos. Accusantium quaerat soluta dolores ut commodi? Illo corrupti tempora ab nulla placeat obcaecati quam inventore."]})})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsxs)("p",{className:"answer",children:["A",Object(b.jsx)("br",{}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui totam modi, quibusdam blanditiis eveniet non, atque cumque."]})}),Object(b.jsx)("td",{children:Object(b.jsxs)("p",{className:"answer",children:["B",Object(b.jsx)("br",{}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui totam modi, quibusdam blanditiis eveniet non, atque cumque."]})})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsxs)("p",{className:"answer",children:["C",Object(b.jsx)("br",{}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui totam modi, quibusdam blanditiis eveniet non, atque cumque."]})}),Object(b.jsx)("td",{children:Object(b.jsxs)("p",{className:"answer",children:["D",Object(b.jsx)("br",{}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui totam modi, quibusdam blanditiis eveniet non, atque cumque."]})})]})]})})}),Object(b.jsx)("img",{src:h,alt:"fusee",className:"fuseeContain"})]})})}}]),n}(i.a.Component),f=(n(36),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)(i.a.Fragment,{children:Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{exact:!0,path:"/space_coding_lovers/",component:m}),Object(b.jsx)(d.b,{path:"/space_coding_lovers/menu/",component:p}),Object(b.jsx)(d.b,{path:"/space_coding_lovers/quiz",component:x}),Object(b.jsx)(d.b,{path:"/space_coding_lovers/puzzle",component:O})]})})}}]),n}(i.a.Component));a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(f,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.dd1665f3.chunk.js.map