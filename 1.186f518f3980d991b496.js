(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{AUsD:function(t,n,e){"use strict";e.r(n);var i=e("CcnG"),o=e("K9Ia"),l=e("dC0D"),u=function(){function t(){this.loading$=new o.a,this.latest$=new o.a,this.messages$=this.latest$.pipe(Object(l.a)(function(t,n){return n.concat(t)}))}return t.prototype.prepare=function(){this.loading$.next(!0)},t.prototype.addMessage=function(t){this.latest$.next([t]),this.loading$.next(!1)},t.ngInjectableDef=i.Q({factory:function(){return new t},token:t,providedIn:"root"}),t}(),s=e("VnD/"),r=e("mrSG"),c=function(t){function n(n,e){var i=t.call(this,n,e)||this;return i.scheduler=n,i.work=e,i.pending=!1,i}return r.b(n,t),n.prototype.schedule=function(t,n){if(void 0===n&&(n=0),this.closed)return this;this.state=t;var e=this.id,i=this.scheduler;return null!=e&&(this.id=this.recycleAsyncId(i,e,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(i,this.id,n),this},n.prototype.requestAsyncId=function(t,n,e){return void 0===e&&(e=0),setInterval(t.flush.bind(t,this),e)},n.prototype.recycleAsyncId=function(t,n,e){if(void 0===e&&(e=0),null!==e&&this.delay===e&&!1===this.pending)return n;clearInterval(n)},n.prototype.execute=function(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var e=this._execute(t,n);if(e)return e;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,n){var e=!1,i=void 0;try{this.work(t)}catch(t){e=!0,i=!!t&&t||new Error(t)}if(e)return this.unsubscribe(),i},n.prototype._unsubscribe=function(){var t=this.id,n=this.scheduler,e=n.actions,i=e.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&e.splice(i,1),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null},n}(function(t){function n(n,e){return t.call(this)||this}return r.b(n,t),n.prototype.schedule=function(t,n){return void 0===n&&(n=0),this},n}(e("pugT").a)),a=function(){function t(n,e){void 0===e&&(e=t.now),this.SchedulerAction=n,this.now=e}return t.prototype.schedule=function(t,n,e){return void 0===n&&(n=0),new this.SchedulerAction(this,t).schedule(e,n)},t.now=Date.now?Date.now:function(){return+new Date},t}(),h=new(function(t){function n(e,i){void 0===i&&(i=a.now);var o=t.call(this,e,function(){return n.delegate&&n.delegate!==o?n.delegate.now():i()})||this;return o.actions=[],o.active=!1,o.scheduled=void 0,o}return r.b(n,t),n.prototype.schedule=function(e,i,o){return void 0===i&&(i=0),n.delegate&&n.delegate!==this?n.delegate.schedule(e,i,o):t.prototype.schedule.call(this,e,i,o)},n.prototype.flush=function(t){var n=this.actions;if(this.active)n.push(t);else{var e;this.active=!0;do{if(e=t.execute(t.state,t.delay))break}while(t=n.shift());if(this.active=!1,e){for(;t=n.shift();)t.unsubscribe();throw e}}},n}(a))(c),d=e("FFOo"),f=e("G5J1"),p=e("F/XL"),y=e("6blF"),v=function(){function t(t,n,e){this.kind=t,this.value=n,this.error=e,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,n,e){switch(this.kind){case"N":return t&&t(this.value);case"E":return n&&n(this.error);case"C":return e&&e()}},t.prototype.accept=function(t,n,e){return t&&"function"==typeof t.next?this.observe(t):this.do(t,n,e)},t.prototype.toObservable=function(){var t;switch(this.kind){case"N":return Object(p.a)(this.value);case"E":return t=this.error,new y.a(function(n){return n.error(t)});case"C":return Object(f.b)()}throw new Error("unexpected notification kind value")},t.createNext=function(n){return void 0!==n?new t("N",n):t.undefinedValueNotification},t.createError=function(n){return new t("E",void 0,n)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}();function g(t,n){void 0===n&&(n=h);var e,i=(e=t)instanceof Date&&!isNaN(+e)?+t-n.now():Math.abs(t);return function(t){return t.lift(new b(i,n))}}var b=function(){function t(t,n){this.delay=t,this.scheduler=n}return t.prototype.call=function(t,n){return n.subscribe(new w(t,this.delay,this.scheduler))},t}(),w=function(t){function n(n,e,i){var o=t.call(this,n)||this;return o.delay=e,o.scheduler=i,o.queue=[],o.active=!1,o.errored=!1,o}return r.b(n,t),n.dispatch=function(t){for(var n=t.source,e=n.queue,i=t.scheduler,o=t.destination;e.length>0&&e[0].time-i.now()<=0;)e.shift().notification.observe(o);if(e.length>0){var l=Math.max(0,e[0].time-i.now());this.schedule(t,l)}else this.unsubscribe(),n.active=!1},n.prototype._schedule=function(t){this.active=!0,this.add(t.schedule(n.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))},n.prototype.scheduleNotification=function(t){if(!0!==this.errored){var n=this.scheduler,e=new m(n.now()+this.delay,t);this.queue.push(e),!1===this.active&&this._schedule(n)}},n.prototype._next=function(t){this.scheduleNotification(v.createNext(t))},n.prototype._error=function(t){this.errored=!0,this.queue=[],this.destination.error(t)},n.prototype._complete=function(){this.scheduleNotification(v.createComplete())},n}(d.a),m=function(t,n){this.time=t,this.notification=n},x=e("xMyE"),N=function(){function t(t){this.chat=t}return t.prototype.activate=function(){var t=this;this.chat.latest$.pipe(Object(s.a)(function(t){return 1===t[0].userId}),g(0),Object(x.a)(function(){return t.chat.prepare()}),g(1e3)).subscribe(function(n){t.chat.addMessage(t.getResponse(n))})},t.prototype.getResponse=function(t){return{text:this.intelligence.respond(t[0].text),userId:2}},t.ngInjectableDef=i.Q({factory:function(){return new t(i.U(u))},token:t,providedIn:"root"}),t}(),k=function(){function t(){}return t.prototype.respond=function(t){return t.split("").reverse().join("")},t}(),I=function(){function t(t,n){this.chat=t,this.bot=n}return t.prototype.ngOnInit=function(){this.bot.intelligence=new k,this.bot.activate(),this.messages$=this.chat.messages$,this.loading$=this.chat.loading$,this.chat.latest$.subscribe(function(){setTimeout(function(){window.scroll(0,2147483647)})})},t.prototype.onSend=function(t){this.chat.addMessage(t)},t}(),M=function(){},O=e("Ip0R"),$=function(){},C=i.La({encapsulation:0,styles:[["[_nghost-%COMP%]{min-height:100%;display:flex;flex-direction:column-reverse}p[_ngcontent-%COMP%]{margin-bottom:1em}"]],data:{animation:[{type:7,name:"appear",definitions:[{type:0,name:"any",styles:{type:6,styles:{opacity:1},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:null,timings:"500ms ease-in"}],options:null}],options:{}}]}});function _(t){return i.cb(0,[(t()(),i.Na(0,0,null,null,2,"p",[],[[2,"has-text-right",null],[24,"@appear",0]],null,null,null,null)),(t()(),i.Na(1,0,null,null,1,"span",[["class","bubble"]],[[2,"has-text-grey-light",null]],null,null,null,null)),(t()(),i.ab(2,null,["",""]))],null,function(t,n){t(n,0,0,1===n.context.$implicit.userId,"any"),t(n,1,0,1===n.context.$implicit.userId),t(n,2,0,n.context.$implicit.text)})}function j(t){return i.cb(2,[(t()(),i.Ea(16777216,null,null,1,null,_)),i.Ma(1,802816,null,0,O.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null)],function(t,n){t(n,1,0,n.component.messages)},null)}var E=function(){function t(){this.send=new i.m}return t.prototype.respond=function(t){this.send.emit({text:t,userId:1})},t}(),U=i.La({encapsulation:0,styles:[["[_nghost-%COMP%]{width:inherit;max-width:inherit;display:block;position:fixed;bottom:0;background:#fff}"]],data:{}});function V(t){return i.cb(2,[(t()(),i.Na(0,0,null,null,5,"div",[["class","field has-addons"]],null,null,null,null,null)),(t()(),i.Na(1,0,null,null,1,"div",[["class","control is-expanded"]],[[2,"is-loading",null]],null,null,null,null)),(t()(),i.Na(2,0,[["box",1]],null,0,"input",[["class","input"],["placeholder","Message"],["type","text"]],null,[[null,"keyup.enter"]],function(t,n,e){var o=!0;return"keyup.enter"===n&&(t.component.respond(i.Va(t,2).value),o=!1!==(i.Va(t,2).value="")&&o),o},null,null)),(t()(),i.Na(3,0,null,null,2,"div",[["class","control"]],null,null,null,null,null)),(t()(),i.Na(4,0,null,null,1,"button",[["class","button"]],null,[[null,"click"]],function(t,n,e){var o=!0;return"click"===n&&(t.component.respond(i.Va(t,2).value),o=!1!==(i.Va(t,2).value="")&&o),o},null,null)),(t()(),i.ab(-1,null,["Send"]))],null,function(t,n){t(n,1,0,n.component.loading)})}var A=i.La({encapsulation:0,styles:[["[_nghost-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center}.is-narrow[_ngcontent-%COMP%]{width:96%;max-width:400px;height:100%}ff-chat-output[_ngcontent-%COMP%]{padding-bottom:40vh}ff-chat-input[_ngcontent-%COMP%]{height:40vh}"]],data:{}});function D(t){return i.cb(2,[(t()(),i.Na(0,0,null,null,6,"div",[["class","content is-narrow"]],null,null,null,null,null)),(t()(),i.Na(1,0,null,null,2,"ff-chat-output",[],null,null,null,j,C)),i.Ma(2,49152,null,0,$,[],{messages:[0,"messages"]},null),i.Wa(131072,O.b,[i.h]),(t()(),i.Na(4,0,null,null,2,"ff-chat-input",[],null,[[null,"send"]],function(t,n,e){var i=!0;return"send"===n&&(i=!1!==t.component.onSend(e)&&i),i},V,U)),i.Ma(5,49152,null,0,E,[],{loading:[0,"loading"]},{send:"send"}),i.Wa(131072,O.b,[i.h])],function(t,n){var e=n.component;t(n,2,0,i.bb(n,2,0,i.Va(n,3).transform(e.messages$))),t(n,5,0,i.bb(n,5,0,i.Va(n,6).transform(e.loading$)))},null)}var q=i.Ja("ff-chat",I,function(t){return i.cb(0,[(t()(),i.Na(0,0,null,null,1,"ff-chat",[],null,null,null,D,A)),i.Ma(1,114688,null,0,I,[u,N],null,null)],function(t,n){t(n,1,0)},null)},{},{},[]),F=e("ZYCi");e.d(n,"ChatModuleNgFactory",function(){return P});var P=i.Ka(M,[],function(t){return i.Ta([i.Ua(512,i.j,i.Z,[[8,[q]],[3,i.j],i.v]),i.Ua(4608,O.l,O.k,[i.s,[2,O.q]]),i.Ua(4608,u,u,[]),i.Ua(4608,N,N,[u]),i.Ua(1073742336,O.c,O.c,[]),i.Ua(1073742336,F.m,F.m,[[2,F.r],[2,F.k]]),i.Ua(1073742336,M,M,[]),i.Ua(1024,F.i,function(){return[[{path:"",component:I}]]},[])])})}}]);