(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),o=l(26),i=l.n(o),r=(l(59),l(48)),c=l(49),u=l(52),d=l(50),h=l(53),s=l(51),f=l.n(s),p=(l(165),function(e){function t(){var e,l;Object(r.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(l=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={quillText:"",updatedQuillPlaceholder:"hi"},l.quillRef=null,l.reactQuillRef=null,l.attachQuillRefs=function(){"function"===typeof l.reactQuillRef.getEditor&&(l.quillRef=l.reactQuillRef.getEditor())},l.handleInputChange=function(e){l.setState({updatedQuillPlaceholder:e.target.value},function(){console.log(l.quillRef.root.dataset.placeholder),l.quillRef.root.dataset.placeholder=l.state.updatedQuillPlaceholder})},l.handleQuillChange=function(e){l.setState({quillText:e})},l.modules={toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"}],["link"],["clean"],["code-block"]]},l.formats=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","link","code-block"],l}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.attachQuillRefs()}},{key:"componentDidUpdate",value:function(){this.attachQuillRefs()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"quillPlaceholderChanger"},"Change React Quill Placeholder: "),n.a.createElement("input",{id:"quillPlaceholderChanger",type:"text",value:this.state.updatedQuillPlaceholder,onChange:this.handleInputChange}),n.a.createElement(f.a,{ref:function(t){e.reactQuillRef=t},value:this.state.quillText,onChange:this.handleQuillChange,"data-placeholder":"hi",placeholder:"hi"}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,t,l){e.exports=l(166)},59:function(e,t,l){}},[[54,1,2]]]);
//# sourceMappingURL=main.e2cbc85d.chunk.js.map