(this.webpackJsonpquizwiz=this.webpackJsonpquizwiz||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),s=n(10),u=n.n(s),o=n(3),i=n.n(o),j=n(5),b=n(2),p=n(7),O=n(9);!function(t){t.EASY="easy",t.MEDIUM="medium",t.HARD="hard"}(c||(c={}));var l=function(){var t=Object(j.a)(i.a.mark((function t(e,n){var c,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(n,"&type=multiple"),t.next=3,fetch(c);case 3:return t.next=5,t.sent.json();case 5:return a=t.sent,t.abrupt("return",a.results.map((function(t){return Object(O.a)(Object(O.a)({},t),{},{answers:(e=[].concat(Object(p.a)(t.incorrect_answers),[t.correct_answer]),Object(p.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=n(1),h=function(){var t=Object(a.useState)(!1),e=Object(b.a)(t,2),n=e[0],r=e[1],s=Object(a.useState)([]),u=Object(b.a)(s,2),o=u[0],p=u[1],O=Object(a.useState)([]),h=Object(b.a)(O,2),f=h[0],m=h[1],x=Object(a.useState)(0),v=Object(b.a)(x,2),w=(v[0],v[1]),S=Object(a.useState)(0),k=Object(b.a)(S,2),y=(k[0],k[1]),N=Object(a.useState)(!0),g=Object(b.a)(N,2),A=g[0],z=g[1],E=function(){var t=Object(j.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),z(!1),t.next=4,l(10,c.EASY);case 4:e=t.sent,p(e),y(0),m([]),w(0),r(!1);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return console.log(o),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"QUIZWIZ"}),(A||10===f.length)&&Object(d.jsx)("button",{className:"start",onClick:E,children:"Start"}),!A&&Object(d.jsx)("p",{className:"score",children:"Your Score:"}),n&&Object(d.jsx)("p",{className:"Loading",children:"Loading Questions . . ."}),Object(d.jsx)("button",{className:"next",onClick:function(){},children:"Next Question"})]})};u.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("App"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ef5b31f0.chunk.js.map