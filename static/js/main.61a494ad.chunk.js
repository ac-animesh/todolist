(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),s=n(4),a=n.n(s),r=(n(14),n(7)),d=n(5),u=n(6),o=n(2),l=n(9),h=n(8),j=(n(15),n(16),n(0));var m=function(t){var e=t.items.map((function(e){return Object(j.jsx)("div",{className:"list",children:Object(j.jsxs)("p",{children:[e.text,Object(j.jsx)("span",{children:Object(j.jsx)("button",{onClick:function(){return t.deleteItem(e.key)},children:"X"})})]})},e.key)}));return Object(j.jsx)("div",{children:e})},b=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},i.handleInput=i.handleInput.bind(Object(o.a)(i)),i.addItem=i.addItem.bind(Object(o.a)(i)),i.deleteItem=i.deleteItem.bind(Object(o.a)(i)),i}return Object(u.a)(n,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(console.log(e),""!==e.text){var n=[].concat(Object(r.a)(this.state.items),[e]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"ToDo-List"}),Object(j.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(j.jsx)("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),Object(j.jsx)("button",{type:"Submit",children:"Add"})]})]}),Object(j.jsx)(m,{items:this.state.items,deleteItem:this.deleteItem})]})}}]),n}(c.a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),s(t),a(t)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),f()}},[[18,1,2]]]);
//# sourceMappingURL=main.61a494ad.chunk.js.map