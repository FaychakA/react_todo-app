(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(7),c=n.n(o),r=(n(14),n(15),n(1)),i=n(8),s=n(2),d=n(3),u=n(5),m=n(4),p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={currentValue:""},e.handleValue=function(t){e.setState({currentValue:t.target.value})},e.handleAddTodo=function(t){t.preventDefault(),e.setState({currentValue:""}),e.state.currentValue.split(" ").join("")&&e.props.addTodo({title:e.state.currentValue,id:+new Date,completed:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){return l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("form",{onSubmit:this.handleAddTodo},l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:this.state.currentValue,onChange:this.handleValue})))}}]),n}(l.a.Component),f=function(e){var t=e.items,n=e.filter,a=e.changeCompleted,o=e.isToggledAll,c=e.changeAllCompleted,r=e.removeTodo,i=function(e){return"All"===n?e:"Active"===n?e.filter((function(e){return!e.completed})):"Completed"===n?e.filter((function(e){return e.completed})):null},s=function(e){r(+e.target.id)};return l.a.createElement("section",{className:"main"},!!t.length&&l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:o,onChange:function(){return c()}}),!!t.length&&l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement("ul",{className:"todo-list"},0===i(t).length||i(t).map((function(e){return l.a.createElement("li",{key:e.id,className:e.completed?"completed":""},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-".concat(e.id),checked:e.completed,onChange:function(){return t=e.id,void a(t);var t}}),l.a.createElement("label",{htmlFor:"todo-".concat(e.id)},e.title),l.a.createElement("button",{type:"button",className:"destroy",id:e.id,onClick:s})),l.a.createElement("input",{type:"text",className:"edit"}))}))))},h=function(e){var t=e.todos,n=e.handleFilter,a=e.handleClearCompleted,o=e.isVisible,c=e.filterName,r=function(e){n(e)};return l.a.createElement(l.a.Fragment,null,!!t.length&&l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},"".concat(t.filter((function(e){return!1===e.completed})).length," items left")),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:"All"===c?"selected":"",onClick:function(){return r("All")}},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active",className:"Active"===c?"selected":"",onClick:function(){return r("Active")}},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed",className:"Completed"===c?"selected":"",onClick:function(){return r("Completed")}},"Completed"))),o&&l.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){a()}},"Clear completed")))},g=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={todos:[],isToggledAll:!1,filterName:"All",isVisible:!1},e.addTodo=function(t){e.setState((function(e){var n=e.todos;return{todos:[].concat(Object(i.a)(n),[t]),isToggledAll:!1}}))},e.changeCompleted=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e})),isToggledAll:!1}}),(function(){e.checkAnythingCompleted(),e.checkAllCompleted()}))},e.changeAllCompleted=function(){e.state.todos.every((function(e){return!1===e.completed}))?e.setState((function(e){return{todos:e.todos.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed})})),isToggledAll:!0}}),(function(){return e.checkAnythingCompleted()})):e.state.todos.every((function(e){return!0===e.completed}))?e.setState((function(e){return{todos:e.todos.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed})})),isToggledAll:!1}}),(function(){return e.checkAnythingCompleted()})):e.setState((function(e){return{todos:e.todos.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!0})})),isToggledAll:!0}}))},e.handleFilter=function(t){e.setState({filterName:t})},e.removeTodo=function(t){var n=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:n})},e.handleClearCompleted=function(){var t=e.state.todos.filter((function(e){return!e.completed}));e.setState({todos:t,isVisible:!1})},e.checkAnythingCompleted=function(){var t=e.state.todos.some((function(e){return e.completed}));e.setState({isVisible:t})},e.checkAllCompleted=function(){var t=e.state.todos.every((function(e){return e.completed}));e.setState({isToggledAll:t})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("initialState"),t=e&&JSON.parse(e);t&&this.setState(Object(r.a)({},t))}},{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.state);localStorage.setItem("initialState",e)}},{key:"render",value:function(){return l.a.createElement("section",{className:"todoapp"},l.a.createElement(p,{addTodo:this.addTodo}),l.a.createElement(f,{items:this.state.todos,filter:this.state.filterName,changeCompleted:this.changeCompleted,isToggledAll:this.state.isToggledAll,changeAllCompleted:this.changeAllCompleted,removeTodo:this.removeTodo}),l.a.createElement(h,{todos:this.state.todos,handleFilter:this.handleFilter,handleClearCompleted:this.handleClearCompleted,isVisible:this.state.isVisible,filterName:this.state.filterName}))}}]),n}(l.a.Component);c.a.render(l.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.14aab5c5.chunk.js.map