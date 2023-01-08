(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(10),a=n.n(s),c=(n(20),n(5)),l=n(2),i=n(1),r=n(6),o=(n(8),n(0)),u=function(e){var t=Object(i.useRef)(),n=Object(i.useRef)(),s=Object(i.useRef)();return Object(o.jsxs)("form",{onSubmit:function(a){a.preventDefault();var c=t.current.value,l=n.current.value,i=s.current.value,r={title:c,amount:+l,date:new Date(i)};console.log(r),e.onSaveExpenseData(r),t.current.value="",n.current.value="",s.current.value=""},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{className:"new-expense__label",children:"Title"}),Object(o.jsx)("input",{className:"new-expense__input",type:"text",ref:t})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{className:"new-expense__label",children:"Amount"}),Object(o.jsx)("input",{className:"new-expense__input",type:"number",min:"0.01",step:"0.01",ref:n})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{className:"new-expense__label",children:"Date"}),Object(o.jsx)("input",{className:"new-expense__input",type:"date",min:"2017-01-01",max:"2023-12-31",ref:s})]})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{className:"new-expense__button",type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:"new-expense__button",type:"submit",children:"Add Expense"})]})]})},j=function(e){var t=Object(i.useState)(!1),n=Object(l.a)(t,2),s=n[0],a=n[1];return Object(o.jsxs)("div",{className:"new-expense",children:[!s&&Object(o.jsx)("button",{className:"new-expense__button",onClick:function(){a(!0)},children:"Add New Expense"}),s&&Object(o.jsx)(u,{onSaveExpenseData:function(t){var n=Object(r.a)(Object(r.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),a(!1)},onCancel:function(){a(!1)}})]})},x=(n(22),function(e){var t="card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})}),b=(n(23),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{className:"expenses-filter__label",children:"Filter by year"}),Object(o.jsxs)("select",{className:"expenses-filter__select",value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(o.jsx)("option",{value:"2023",children:"2023"}),Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"}),Object(o.jsx)("option",{value:"2018",children:"2018"}),Object(o.jsx)("option",{value:"2017",children:"2017"})]})]})})}),d=(n(24),n(25),n(26),function(e){var t=new Date(e.date).toLocaleString("en-US",{month:"long"}),n=new Date(e.date).toLocaleString("en-US",{day:"2-digit"}),s=new Date(e.date).getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("span",{className:"expense-date__month",children:t}),Object(o.jsx)("span",{className:"expense-date__year",children:s}),Object(o.jsx)("span",{className:"expense-date__day ",children:n})]})}),p=function(e){return Object(o.jsxs)("div",{className:"expense-delete",children:[Object(o.jsx)("p",{className:"expense-delete__text",children:"Do you want to delete expense?"}),Object(o.jsx)("button",{className:"expense-delete__button",onClick:function(){e.onEditExpense(!1)},children:"No"}),Object(o.jsx)("button",{className:"expense-delete__button",onClick:function(){e.onEditExpense(!1),e.onDeleteExpense(e.id)},children:"Yes"})]})},m=(n(27),function(e){var t=Object(i.useState)(!1),n=Object(l.a)(t,2),s=n[0],a=n[1];return Object(o.jsxs)("li",{onClick:function(e){e.target.closest(".expense-item")&&(a(!0),console.log(s))},children:[s&&Object(o.jsx)(p,{onEditExpense:function(e){a(e)},id:e.id,onDeleteExpense:e.onDeleteExpense}),!s&&Object(o.jsxs)(x,{className:"expense-item",children:[Object(o.jsx)(d,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{className:"expense-item__title",children:e.title}),Object(o.jsxs)("p",{className:"expense-item__amount",children:["$",e.amount]})]})]})]})}),O=function(e){return 0===e.items.length?Object(o.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses"}):Object(o.jsx)("ul",{className:"expenses-list",children:e.items.map((function(t){return Object(o.jsx)(m,{title:t.title,amount:t.amount,date:t.date,id:t.id,onDeleteExpense:e.onDeleteExpense},t.id)}))})},v=n(11),h=(n(9),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),f=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(c.a)(t));return Object(o.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(h,{value:e.value,maxValue:n,label:e.label},e.label)}))})},_=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],s=Object(v.a)(e.expenses);try{for(s.s();!(t=s.n()).done;){var a=t.value;n[new Date(a.date).getMonth()].value+=a.amount}}catch(c){s.e(c)}finally{s.f()}return Object(o.jsx)(f,{dataPoints:n})},N=function(e){var t=Object(i.useState)("2023"),n=Object(l.a)(t,2),s=n[0],a=n[1],c=e.items.filter((function(e){return new Date(e.date).getFullYear().toString()===s}));return Object(o.jsxs)(x,{className:"expenses",children:[Object(o.jsx)(b,{selected:s,onChangeFilter:function(e){a(e)}}),Object(o.jsx)(_,{expenses:c}),Object(o.jsx)(O,{items:c,onDeleteExpense:e.onDeleteExpense})]})},g=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1];Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("expenses"));e&&s(e)}),[]);return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{onAddExpense:function(e){var t=[e].concat(Object(c.a)(n));s(t),localStorage.setItem("expenses",JSON.stringify(t))}}),Object(o.jsx)(N,{items:n,onDeleteExpense:function(e){s((function(t){var n=t.filter((function(t){return t.id!==e}));return localStorage.removeItem("expenses"),localStorage.setItem("expenses",JSON.stringify(n)),n}))}})]})};a.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(g,{}))}],[[28,1,2]]]);
//# sourceMappingURL=main.383aff69.chunk.js.map