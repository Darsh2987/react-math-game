(this["webpackJsonpreact-math-game"]=this["webpackJsonpreact-math-game"]||[]).push([[0],{11:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(4),r=s.n(a),o=(s(9),s(2)),i=s(0);var b=function(){var e,t=Object(n.useState)(C()),s=Object(o.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(0),b=Object(o.a)(r,2),u=b[0],j=b[1],l=Object(n.useState)(0),m=Object(o.a)(l,2),d=m[0],O=m[1],x=Object(n.useState)(""),p=Object(o.a)(x,2),f=p[0],v=p[1],h=Object(n.useState)(!1),N=Object(o.a)(h,2),g=N[0],w=N[1],S=Object(n.useRef)(null),T=Object(n.useRef)(null);function y(e){return Math.floor(Math.random()*(e+1))}function C(){return{numberOne:y(10),numberTwo:y(10),operator:["+","-","x"][y(2)]}}return Object(n.useEffect)((function(){10!==u&&3!==d||setTimeout((function(){return T.current.focus()}),331)}),[u,d]),"+"===c.operator?e=c.numberOne+c.numberTwo:"-"===c.operator?e=c.numberOne-c.numberTwo:"x"===c.operator&&(e=c.numberOne*c.numberTwo),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"main-ui"+(3===d||10===u?" blurred":""),children:[Object(i.jsxs)("p",{id:"problem",className:"problem"+(g?" animate-wrong":""),children:[c.numberOne," ",c.operator," ",c.numberTwo]}),Object(i.jsxs)("form",{id:"form",className:"form",onSubmit:function(t){t.preventDefault(),S.current.focus(),f==parseInt(e)?(j((function(e){return e+1})),a(C()),v("")):(O((function(e){return e+1})),w(!0),setTimeout((function(){return w(!1)}),401))},action:"",children:[Object(i.jsx)("input",{id:"input",className:"input",type:"text",autoComplete:"off",value:f,ref:S,onChange:function(e){v(e.target.value)}}),Object(i.jsx)("button",{className:"submit",type:"submit",children:"Submit"})]}),Object(i.jsxs)("p",{className:"status",children:["You need ",Object(i.jsx)("span",{id:"points-needed",children:10-u})," points to win, and are allowed to make ",Object(i.jsx)("span",{id:"mistakes-allowed",children:2-d})," mistakes."]}),Object(i.jsx)("p",{className:"notes",children:"*Division problem's should be rounded to 1 decimal place, for example 0.66666667 should be answered as 0.7."}),Object(i.jsxs)("div",{className:"progress",children:[Object(i.jsxs)("div",{className:"boxes",children:[Object(i.jsx)("div",{className:"box"}),Object(i.jsx)("div",{className:"box"}),Object(i.jsx)("div",{className:"box"}),Object(i.jsx)("div",{className:"box"}),Object(i.jsx)("div",{className:"box"}),Object(i.jsx)("div",{className:"box"}),Object(i.jsx)("div",{className:"box"}),Object(i.jsx)("div",{className:"box"}),Object(i.jsx)("div",{className:"box"}),Object(i.jsx)("div",{className:"box"})]}),Object(i.jsx)("div",{id:"progress-inner",className:"progress-inner",style:{transform:"scaleX(".concat(u/10,")")}})]})]}),Object(i.jsx)("div",{className:"overlay"+(3===d||10===u?" overlay--visible":""),children:Object(i.jsxs)("div",{className:"overlay-inner",children:[Object(i.jsx)("p",{id:"end-message",className:"end-message",children:10===u?"Congrats! You won.":"Sorry! You lost."}),Object(i.jsx)("button",{id:"reset-button",className:"reset-button",ref:T,onClick:function(){j(0),O(0),v(""),a(C())},children:"Start Over"})]})})]})};var u=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(b,{})})},j=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,12)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),j()},9:function(e,t,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.241dc768.chunk.js.map