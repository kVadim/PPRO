(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{345:function(e,t,n){e.exports=n(680)},350:function(e,t,n){},351:function(e,t,n){},352:function(e,t,n){},357:function(e,t,n){},568:function(e,t,n){},569:function(e,t,n){},57:function(e,t,n){e.exports={"action-button":"buttons_action-button__3YCJ_","top-header-button":"buttons_top-header-button__3KCcm"}},570:function(e,t,n){},680:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(43),c=n.n(o),s=(n(350),n(12)),i=n(13),l=n(16),u=n(14),d=n(15),h=n(229),p=n(69),m=(n(351),n(352),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.onClose;return r.a.createElement("div",{className:"modal-wrapper"},r.a.createElement("div",{className:"modal"},r.a.createElement("button",{className:"close",onClick:function(){return n()}},"\xd7"),r.a.createElement("div",{className:"text"},t)))}}]),t}(a.Component)),f=document.getElementById("modal"),E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){f.appendChild(n.el)},n.componentWillUnmount=function(){f.removeChild(n.el)},n.el=document.createElement("div"),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createPortal(this.props.children,this.el)}}]),t}(a.Component),g=n(44),b="go-ahead",v="list-all",x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={modal:!1,portal:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"renderModal",value:function(){var e=this;return this.props.modalS?r.a.createElement(m,{text:"Modal1",onClose:function(){return e.toggleModalS()}}):null}},{key:"toggleModalS",value:function(){this.props.toggleModalS()}},{key:"navigateToTr",value:function(){this.props.history.push(v)}},{key:"render",value:function(){var e=this,t=this.state.portal?r.a.createElement(E,null,r.a.createElement("div",{className:"modal"},r.a.createElement("div",null,"With a portal, we can render content into a different part of the DOM, as if it were any other React child."),"This is being rendered inside the #modal-container div.",r.a.createElement("button",{onClick:function(){return e.setState({portal:!1})}},"Hide modal"))):null;return r.a.createElement("div",{className:"Modal container"},r.a.createElement("button",{className:"action-button",onClick:function(){return e.toggleModalS()}},"ModalS"),r.a.createElement("button",{className:"action-button",onClick:function(){return e.setState({portal:!0})}},"Portal"),r.a.createElement("button",{className:"action-button",onClick:function(){return e.navigateToTr()}},"Text"),this.renderModal(),t)}}]),t}(a.Component),O=Object(g.b)(function(e){return{modalS:e.modalS.modalS}},function(e){return{toggleModalS:function(){return e({type:"TOGGLE_MODAL"})}}})(x),I=(n(357),n(57)),C=n.n(I),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"toggleModalS",value:function(){this.props.toggleModalS()}},{key:"navigateTo",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"top-header-container",style:{backgroundColor:"grey",height:"40px"}},r.a.createElement("div",{className:"buttons flex-start"},r.a.createElement("button",{className:C.a["top-header-button"],onClick:function(){return e.navigateTo(v)}},"list all"),r.a.createElement("button",{className:"".concat(C.a["top-header-button"]," margin-right-auto"),onClick:function(){return e.navigateTo(b)}},"go ahead")))}}]),t}(a.Component),w=Object(g.b)(function(e){return{a:"a"}},function(e){return{toggleModalS:function(){return e({type:"TOGGLE_MODAL"})}}})(Object(p.e)(y)),_=n(158),N=n(79),k=n(32),j=n(10),T=n.n(j),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChangeRiddle=function(e){n.setState({riddle:e.target.value})},n.handleChangeAnswer=function(e){n.setState({answer:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t={riddle:n.state.riddle,answer:n.state.answer,solved:!1};n.props.addItem(t),n.setState({riddle:"",answer:"#BDBDBD"})},console.log("this.props in FORM",n.props),n.state={riddle:"",answer:""},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=T()("flex-container","flex-center","margin-top20","flex-direction-column640");return r.a.createElement("form",{action:"/myform",method:"post",onSubmit:this.handleSubmit},r.a.createElement("div",{className:e},r.a.createElement("p",null,r.a.createElement("span",{className:"bracket-left"},"["),r.a.createElement("input",{tabIndex:"1",className:"simple-input",type:"text",name:"test",placeholder:"-",value:this.state.riddle,onChange:this.handleChangeRiddle}),r.a.createElement("span",{className:"bracket-right"},"]")),r.a.createElement("p",null,r.a.createElement("button",{className:"btn-add border-radius5",type:"submit"},"+")),r.a.createElement("p",null,r.a.createElement("span",{className:"bracket-left"},"["),r.a.createElement("input",{tabIndex:"2",className:"simple-input",type:"text",name:"test",placeholder:"-",value:this.state.answer,onChange:this.handleChangeAnswer}),r.a.createElement("span",{className:"bracket-right"},"]"))))}}]),t}(a.Component);(function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:n.props.value},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("textarea",{id:this.props.id,name:this.props.name,defaultValue:this.state.value,onChange:this.handleChange})}}]),t}(r.a.Component)).defaultProps={value:""},(function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selected:n.props.selected},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("input",{type:"radio",defaultChecked:this.state.selected,onChange:this.handleChange,id:this.props.id,name:this.props.name})," ",this.props.label)}}]),t}(r.a.Component)).defaultProps={selected:!1},(function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={checked:n.props.checked},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("input",{type:"checkbox",defaultChecked:this.state.checked,onChange:this.handleChange,id:this.props.id,name:this.props.name})," ",this.props.label)}}]),t}(r.a.Component)).defaultProps={checked:!1};var A=n(81),L=n.n(A),R=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleKeyDown=function(e){switch(e.key){case"ArrowRight":n.increaseIndex();break;case"ArrowLeft":n.decreaseIndex()}},n.handleTouchStart=function(e){n.setState({clientX:e.touches[0].clientX})},n.handleTouchMove=function(e){if(n.state.clientX){var t=n.state.clientX-e.touches[0].clientX;void 0===n.setState.rightToLeft&&n.setState({rightToLeft:t>0}),(n.state.rightToLeft?n.state.offset-t:n.state.offset+t)<0&&(n.state.rightToLeft?n.increaseIndex():n.decreaseIndex(),n.handleTouchEnd())}},n.handleTouchEnd=function(e){n.setState({clientX:void 0,rightToLeft:void 0})},n.increaseIndex=function(){n.props.index<n.props.items.length-1&&(n.setState({rc:!0,showItem:!1},n.props.increaseCatNameIndex),n.setState({showItem:!0}),setTimeout(function(){n.setState({rc:!1})},1e3))},n.decreaseIndex=function(){n.props.index>0&&(n.setState({lc:!0},n.props.decreaseCatNameIndex),setTimeout(function(){n.setState({lc:!1})},1e3))},n.state={lc:!1,rc:!1,showItem:!0,offset:50,clientX:void 0,rightToLeft:void 0},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.items||[],t=T()("".concat(L.a.card),{rightClicked:this.state.rc},{leftClicked:this.state.lc}),n=this.state.showItem&&e.length?e[this.props.index]:"",a=T()("flex-container","flex-center","grey","margin-top20"),o=T()("".concat(L.a.task),{uppercase:this.props.uppercase}),c=this.props.index<=0,s=e.length<=this.props.index+1;return r.a.createElement("div",{className:a},r.a.createElement("div",{className:t},r.a.createElement("div",{className:o,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},r.a.createElement("div",{className:"flex-container flex-space-between"},r.a.createElement("p",{className:"no-margins left",disabled:c,onClick:this.decreaseIndex},c?"x":"<-"),r.a.createElement("p",{className:"no-margins"},n),r.a.createElement("p",{className:"no-margins right",disabled:s,onClick:this.increaseIndex},s?"x":"->")))))}}]),t}(a.Component),D=n(232),M=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).addItem=function(e){var t=n.props.cats[n.props.currentCatNameIndex];console.log("newItem",e);var a=[].concat(Object(_.a)(t.data),[e]);console.log("newArr",a);var r=t.id;console.log("id",r),n.props.createItem(r,a)},n.getRows=function(e,t){function n(e){var n=e.index,a=e.key,o=e.style;return t.length?r.a.createElement("div",{key:a,className:"row",style:o},r.a.createElement("div",{className:"flex-container flex-space-between flex-direction-column500"},r.a.createElement("div",{className:"cell"},t[n].riddle),r.a.createElement("div",{className:"cell darkgrey"},t[n].answer))):null}return r.a.createElement("div",{className:"table grey",key:e},r.a.createElement(D.a,null,function(e){e.height;var a=e.width;return r.a.createElement(D.b,{width:a,height:160,rowCount:t.length,rowHeight:40,rowRenderer:n,className:"margin-both-auto",overscanRowCount:3,style:{outline:"none"}})}))},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"navigateToModalPage",value:function(){this.props.history.push("/")}},{key:"showList",value:function(){console.log("this.props",this.props);var e=null;return this.props.cats&&(e=this.props.cats[0].data.map(function(e){return console.log("key",e),r.a.createElement("div",{className:"flex-container flex-center",key:e.riddle},r.a.createElement("p",null,e.riddle),r.a.createElement("p",null," - "),r.a.createElement("p",null,e.answer))})),this.props.showList?{list:e}:null}},{key:"render",value:function(){var e=this,t=this.props.cats||[],n=t.map(function(e){return e.name}),a=t.length&&t[this.props.currentCatNameIndex],o=a&&this.props.showList&&this.getRows(a.id,a.data);return r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:C.a["action-button"],onClick:function(){return e.props.toggleShowList()}},(this.props.showList?"hide":"show")+"-list"),r.a.createElement("h2",{className:"no-margins"},"----"),o,r.a.createElement(R,{items:n,uppercase:!0,increaseCatNameIndex:this.props.increaseCatNameIndex,decreaseCatNameIndex:this.props.decreaseCatNameIndex,index:this.props.currentCatNameIndex}),r.a.createElement(S,{addItem:this.addItem}))}}]),t}(a.Component),X=Object(k.d)(Object(N.firestoreConnect)([{collection:"cats"}]),Object(g.b)(function(e){return{cats:e.firestore.ordered.cats,showList:e.showList.showList,currentCatNameIndex:e.filters.listAll.currentCatNameIndex}},function(e){return{toggleShowList:function(){return e({type:"TOGGLE_SHOW_LIST"})},createItem:function(t,n){return e(function(e,t){return function(n,a,r){var o=r.getFirestore;r.getFirebase,o().collection("cats").doc(e).update({data:t}).then(function(){n({type:"CREATE_ITEM",newArray:t})}).catch(function(e){n({type:"CREATE_ITEM_ERROR",err:e})})}}(t,n))},increaseCatNameIndex:function(){return e({type:"LIST_ALL_INCREASE_CAT_NAME_INDEX"})},decreaseCatNameIndex:function(){return e({type:"LIST_ALL_DECREASE_CAT_NAME_INDEX"})}}}))(M),F=n(80),G=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){n.setState(function(e){return++e.stage})},n.handleKeyDown=function(e){switch(console.log("e.key in GoAhead",e.key),e.key){case" ":case"ArrowUp":n.increaseStage();break;case"ArrowRight":e.shiftKey?n.increaseCatIndex():n.increaseIndex();break;case"ArrowLeft":e.shiftKey?n.decreaseCatIndex():n.decreaseIndex();break;case"ArrowDown":n.setDone();break;case"Enter":e.shiftKey?n.resetAll():n.reset()()}},n.increaseIndex=function(){n.setState(function(e){return e.index<n.props.cats[n.state.catIndex].data.length-1&&{index:++e.index,stage:0}})},n.increaseCatIndex=function(){n.setState(function(e){return e.catIndex<n.props.cats.length-1&&{catIndex:++e.catIndex,index:0,stage:0}})},n.decreaseIndex=function(){n.setState(function(e){return e.index>0&&{index:--e.index,stage:0}})},n.decreaseCatIndex=function(){n.setState(function(e){return e.catIndex>0&&{catIndex:--e.catIndex,index:0,stage:0}})},n.increaseStage=function(){n.props.increaseCatIndex()},n.setDone=function(){var e=n.props.cats[n.state.catIndex].id,t=[];n.props.cats[n.state.catIndex].data.forEach(function(e){var n=Object(F.a)({},e);t.push(n)}),t[n.state.index].solved||(t[n.state.index].solved=!0),n.props.setDone(e,t)},n.reset=function(e){return function(t){var a=e||n.state.catIndex,r=n.props.cats[a].id,o=Object(_.a)(n.props.cats[a].data);o.map(function(e){return e.solved=!1,e}),console.log("data",o),n.props.reset(r,o)}},n.resetAll=function(){var e=n.props.cats.length;for(console.log("catLength0",e);e--;)console.log("catLength",e),n.reset(e)()},n.state={index:0,stage:0,catIndex:0},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"getOptions",value:function(){return Object.keys(this.state.categories).map(function(e){return r.a.createElement("option",{value:e,key:e},e.toUpperCase())})}},{key:"render",value:function(){console.log("this.props",this.props);var e=this.props.cats,t=this.state.index,n=this.state.stage,a=e&&e.length&&e[this.state.catIndex].data[t]&&e[this.state.catIndex].data[t].solved,o=this.state.stage?"answer":"riddle",c=this.props.catsNames[this.state.catIndex]||"not found",s=e.length&&e[this.state.catIndex].data[t]?e[this.state.catIndex].data[t][o]:"not found",i=T()("flex-container","flex-center",{grey:!n},"margin-top20"),l=T()({green:a}),u=T()("title flex-container flex-start grey margin-top20");return r.a.createElement("div",{className:"page-container"},r.a.createElement("button",{className:"".concat(C.a["action-button"]),onClick:this.reset()},"reset cat"),r.a.createElement("button",{className:"".concat(C.a["action-button"]),onClick:this.resetAll},"reset all"),r.a.createElement("div",{className:u},"stage: ".concat(n)),r.a.createElement("div",{className:u},"index: ".concat(this.state.index)),r.a.createElement("div",{className:u},"solved: ".concat(a)),r.a.createElement("div",{className:i},r.a.createElement("button",{disabled:0===this.state.catIndex,onClick:this.decreaseCatIndex},"<-"),r.a.createElement("div",{className:L.a.task,onClick:this.handleClick},c),r.a.createElement("button",{disabled:e.length-1===this.state.catIndex,onClick:this.increaseCatIndex},"->")),r.a.createElement("div",{className:i+" "+l},r.a.createElement("button",{disabled:0===this.state.index,onClick:this.decreaseIndex},"<-"),r.a.createElement("div",{className:L.a.task,onClick:this.handleClick},s),r.a.createElement("button",{disabled:e.length&&e[this.state.catIndex].data.length-1===this.state.index,onClick:this.increaseIndex},"->")))}}]),t}(a.Component),K=Object(k.d)(Object(N.firestoreConnect)([{collection:"cats"}]),Object(g.b)(function(e){var t=e.firestore.ordered.cats||[],n=t?t.map(function(e){return e.name}):[];return{cats:t,catsNames:n,solved:!!e.solved}},function(e){return{setDone:function(t,n){return e(function(e,t){return console.warn(e,t),function(n,a,r){var o=r.getFirestore;r.getFireBase,o().collection("cats").doc(e).update({data:t}).then(function(){n({type:"SET_ITEM_DONE",id:e})}).catch(function(e){n({type:"SET_ITEM_DONE_ERROR",err:e})})}}(t,n))},reset:function(t,n){return e(function(e,t){return console.warn(e,t),function(n,a,r){(0,r.getFirestore)().collection("cats").doc(e).update({data:t}).then(function(){n({type:"RESET",id:e})}).catch(function(e){n({type:"RESET_ERROR",err:e})})}}(t,n))}}}))(G),B=(n(568),n(569),n(570),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(w,{topProps:42}),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:O}),r.a.createElement(p.a,{path:"/list-all",component:X}),r.a.createElement(p.a,{path:"/go-ahead",component:K}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U={modalS:!1},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;switch((arguments.length>1?arguments[1]:void 0).type){case"TOGGLE_MODAL":return console.log("blah")||Object(F.a)({},e,{modalS:!e.modalS});default:return e}},P={showList:!0},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;switch((arguments.length>1?arguments[1]:void 0).type){case"TOGGLE_SHOW_LIST":return Object(F.a)({},e,{showList:!e.showList});default:return e}},H={items:[{id:1,riddle:"\u0442\u044b \u0436\u0435 \u044d\u0442\u043e \u043d\u0435 \u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e",answer:"you can not be serious"}]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_ITEM":return console.log("CREATE_ITEM"),e;case"CREATE_ITEM_ERROR":return console.log("CREATE_ITEM_ERROR",t.err),e;default:return e}},z=n(106),Y={solved:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEM_DONE":return console.log("SET_ITEM_DONE_REDUCER"),e;case"SET_ITEM_DONE_ERROR":return console.log("SET_ITEM_DONE_REDUCER_ERROR",t.err),e;default:return e}},q={listAll:{currentCatNameIndex:0}},Q=Object(k.c)({filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_ALL_INCREASE_CAT_NAME_INDEX":return console.log("LIST_ALL_INCREASE_CAT_NAME_INDEX"),{listAll:{currentCatNameIndex:e.listAll.currentCatNameIndex+1}};case"LIST_ALL_DECREASE_CAT_NAME_INDEX":return console.log("LIST_ALL_DECREASE_CAT_NAME_INDEX"),{listAll:{currentCatNameIndex:e.listAll.currentCatNameIndex-1}};case"LIST_ALL_DECREASE_CAT_NAME_INDEX_ERROR":return console.log("LIST_ALL_DECREASE_CAT_NAME_INDEX_ERROR",t.err),e;default:return e}},items:V,modalS:W,showList:J,firestore:z.firestoreReducer,setDoneReducer:$}),Z=n(344),ee=n(160),te=n.n(ee);n(673),n(678);te.a.initializeApp({apiKey:"AIzaSyBNmslbkuFJDr78zGfhrVgFKkJ4oBpX30g",authDomain:"ppro-71a44.firebaseapp.com",databaseURL:"https://ppro-71a44.firebaseio.com",projectId:"ppro-71a44",storageBucket:"ppro-71a44.appspot.com",messagingSenderId:"909420255714"}),te.a.firestore().settings({});var ne=te.a,ae=Object(k.e)(Q,Object(k.d)(Object(k.a)(Z.a.withExtraArgument({getFirebase:N.getFirebase,getFirestore:z.getFirestore})),Object(z.reduxFirestore)(ne),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));c.a.render(r.a.createElement(g.a,{store:ae},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,n){e.exports={card:"tasks_card__1OPe7",task:"tasks_task__257Gp"}}},[[345,1,2]]]);
//# sourceMappingURL=main.cb527838.chunk.js.map