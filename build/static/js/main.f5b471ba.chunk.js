(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(t,e,n){},197:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(6),i=n.n(r),c=(n(95),n(78)),s=n(79),l=n(87),u=n(80),m=n(88),d=n(81),h=n.n(d),g=(n(115),n(29)),f=(n(75),{width:600,margin:50}),p=Object(g.a)(g.b);var v=function(t){var e=t.onSliderChange;return o.a.createElement("div",{style:f},o.a.createElement(p,{defaultValue:500,min:500,max:5e3,step:500,dots:!0,onAfterChange:e}))},y={width:600,margin:50},E=Object(g.a)(g.b);var b=function(t){var e=t.onSliderChange;return o.a.createElement("div",{style:y},o.a.createElement(E,{defaultValue:6,min:6,max:24,onAfterChange:e}))},w=n(85),C=n(8),S=n(86);function j(){var t=Object(w.a)(["\n    position: absolute;\n    bottom: 6%;\n    left: 49%;\n    border-color: red;\n"]);return j=function(){return t},t}var O=Object(C.css)(j());var R=function(t){var e=t.isLoading;return o.a.createElement("div",{className:"sweet-loading"},o.a.createElement(S.SyncLoader,{css:O,sizeUnit:"px",size:10,color:"#36D7B7",loading:e}))},k=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).getInterestRate=function(){n.setState({loading:!0});h.a.get("".concat("https://ftl-frontend-test.herokuapp.com/interest","?amount=").concat(n.state.amount,"&numMonths=").concat(n.state.duration)).then(function(t){var e=t.data,a=e.interestRate,o=e.monthlyPayment.amount;n.setState({loading:!1,interestRate:a,monthlyPayment:o})})},n.amountChanged=function(t){n.setState({amount:t},n.getInterestRate)},n.durationChanged=function(t){n.setState({duration:t},n.getInterestRate)},n.state={loading:!1,amount:500,duration:6,interestRate:0,monthlyPayment:0},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.getInterestRate()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",null,"Loan amount: ",this.state.amount," USD"),o.a.createElement(v,{onSliderChange:this.amountChanged}),o.a.createElement("p",null,"Loan duration: ",this.state.duration," months"),o.a.createElement(b,{onSliderChange:this.durationChanged}),o.a.createElement("p",null,"Rate of Interest: ",this.state.interestRate),o.a.createElement("p",null,"Monthly payment: ",this.state.monthlyPayment," USD"),o.a.createElement(R,{isLoading:this.state.loading})))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},89:function(t,e,n){t.exports=n(197)},95:function(t,e,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.f5b471ba.chunk.js.map