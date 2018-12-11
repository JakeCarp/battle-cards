(function(t){function e(e){for(var s,i,o=e[0],c=e[1],d=e[2],p=0,u=[];p<o.length;p++)i=o[p],r[i]&&u.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(u.length)u.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/battle-cards/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),r=a.n(s);r.a},"3f66":function(t,e,a){t.exports=a.p+"img/cardback.61c30676.png"},"52e0":function(t,e,a){},"568f":function(t,e,a){"use strict";var s=a("ff7b"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view")],1)},n=[],i=(a("034f"),a("2877")),o={},c=Object(i["a"])(o,r,n,!1,null,null,null);c.options.__file="App.vue";var d=c.exports,l=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"name"}},[a("h1",[t._v("Enter your Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gameRequest.gameConfig.playerName,expression:"gameRequest.gameConfig.playerName"}],attrs:{type:"text"},domProps:{value:t.gameRequest.gameConfig.playerName},on:{input:function(e){e.target.composing||t.$set(t.gameRequest.gameConfig,"playerName",e.target.value)}}}),a("p",[t._v(t._s(t.gameRequest.gameConfig.playerName))])]),a("div",{attrs:{id:"card-set"}},[a("h1",[t._v("Choose your Set")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gameRequest.gameConfig.set,expression:"gameRequest.gameConfig.set"}],attrs:{type:"number",min:"1",max:"4"},domProps:{value:t.gameRequest.gameConfig.set},on:{input:function(e){e.target.composing||t.$set(t.gameRequest.gameConfig,"set",e.target.value)}}}),a("p",[t._v(t._s(t.gameRequest.gameConfig.set))])]),a("button",{on:{click:function(e){t.startGame(t.gameRequest)}}},[t._v("Start Game")])])},u=[],m={name:"home",components:{},data(){return{gameRequest:{gameConfig:{playerName:"",set:0}}}},methods:{startGame(t){this.$store.dispatch("startGame",t)}}},v=m,C=Object(i["a"])(v,p,u,!1,null,null,null);C.options.__file="Home.vue";var f=C.exports;a("7d36");s["a"].use(l["a"]);var g=new l["a"]({routes:[{path:"/",name:"home",component:f},{path:"/game/:id",name:"game",component:function(){return Promise.resolve().then(a.bind(null,"7d36"))}}]}),_=a("2f62"),h=a("bc3a"),y=a.n(h);let b=y.a.create({baseURL:"//battlecardz.herokuapp.com/api/games"});s["a"].use(_["a"]);var x=new _["a"].Store({state:{game:{},attack:{},activeCards:{playerCard:{},opponentCard:{}}},mutations:{setGame(t,e){t.game=e,t.activeCards.playerCard={},t.activeCards.opponentCard={}},setOpponentCard(t,e){t.activeCards.opponentCard=e,t.attack.opponentCardId=e.id,console.log(t.activeCards)},setPlayerCard(t,e){t.activeCards.playerCard=e,t.attack.playerCardId=e.id,console.log(t.activeCards)}},actions:{startGame({commit:t},e){b.post("/",e).then(e=>{console.log(e),t("setGame",e.data.game),g.push({name:"game",params:{id:e.data.game.id}})}).catch(t=>alert(t))},getGame({commit:t},e){b.get("/"+e).then(e=>{t("setGame",e.data.data)}).catch(t=>alert(t))},setOpponentCard({commit:t},e){t("setOpponentCard",e)},setPlayerCard({commit:t},e){t("setPlayerCard",e)},attack({commit:t},e){b.put("/"+e.gameId,e.attack).then(e=>{t("setGame",e.data.game)})}}});s["a"].config.productionTip=!1,new s["a"]({router:g,store:x,render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,e,a){},"7d36":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[t.game.opponent?a("opponentHand",{staticClass:"col-12 d-flex hand"}):t._e()],1),a("div",{staticClass:"row"},[!t.game.player.dead&&t.game.opponent.dead?a("div",[a("h1",[t._v("You Win")])]):t._e(),t.game.player.dead&&!t.game.opponent.dead?a("div",[a("h1",[t._v("You Lose")])]):t._e(),t.game.player.dead&&t.game.opponent.dead?a("div",[a("h1",[t._v("It's a Tie")])]):t._e(),a("battle")],1),a("div",{staticClass:"row"},[t.game.player?a("playerHand",{staticClass:"col-12 d-flex hand"}):t._e()],1)])},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[t._v(t._s(t.player.name))]),a("h3",[t._v(t._s(t.player.remainingCards))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-8 d-flex hand"},t._l(t.player.hand,function(e){return a("div",{attrs:{id:"card-box"}},[a("div",{staticClass:"card",on:{click:function(a){t.setPlayerCard(e)}}},[a("img",{staticClass:"card-img-top",attrs:{src:e.img}}),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.attack))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.defense))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.health))])])])])}))])])])},i=[],o={name:"playerHand",methods:{setPlayerCard(t){this.$store.dispatch("setPlayerCard",t)}},computed:{player(){return this.$store.state.game.player},gameId(){return this.$store.state.game.id}}},c=o,d=a("2877"),l=Object(d["a"])(c,n,i,!1,null,null,null);l.options.__file="playerHand.vue";var p=l.exports,u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"},[s("h1",[t._v(t._s(t.opponent.name))]),s("h3",[t._v(t._s(t.opponent.remainingCards)+" ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-8 d-flex hand"},t._l(t.opponent.hand,function(e){return s("div",{attrs:{id:"card-box"}},[s("div",{staticClass:"card",on:{click:function(a){t.setOpponentCard(e)}}},[e.visible?s("div",[s("img",{staticClass:"card-img-top",attrs:{src:e.img},on:{click:function(a){t.setOpponentCard(e)}}}),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title",on:{click:function(a){t.setOpponentCard(e)}}},[t._v(t._s(e.name))]),s("p",{staticClass:"card-text"},[t._v(t._s(e.attack))]),s("p",{staticClass:"card-text"},[t._v(t._s(e.defense))]),s("p",{staticClass:"card-text"},[t._v(t._s(e.health))])])]):t._e(),e.visible?t._e():s("img",{attrs:{src:a("3f66"),id:"card-back"},on:{click:function(a){t.setOpponentCard(e)}}})])])}))])])])},m=[],v={name:"opponenthand",methods:{setOpponentCard(t){this.$store.dispatch("setOpponentCard",t)}},computed:{opponent(){return this.$store.state.game.opponent},gameId(){return this.$store.state.game.id}}},C=v,f=(a("c5eb"),Object(d["a"])(C,u,m,!1,null,null,null));f.options.__file="opponentHand.vue";var g=f.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.game.winner?t._e():s("div",{staticClass:"col-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 card"},[s("img",{staticClass:"card-img-top",attrs:{src:t.activeCards.playerCard.img}}),s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-text"},[t._v(t._s(t.activeCards.playerCard.name))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.activeCards.playerCard.attack))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.activeCards.playerCard.defense))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.activeCards.playerCard.health))])])]),s("div",{staticClass:"col-4"},[s("button",{on:{click:function(e){t.attack()}}},[t._v("Attack")])]),s("div",{staticClass:"col-4 card"},[t.activeCards.opponentCard.visible?s("div",[s("img",{staticClass:"card-img-top",attrs:{src:t.activeCards.playerCard.img}}),s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-text"},[t._v(t._s(t.activeCards.playerCard.name))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.activeCards.playerCard.attack))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.activeCards.playerCard.defense))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.activeCards.playerCard.health))])])]):t._e(),t.activeCards.opponentCard.id&&!t.activeCards.opponentCard.visible?s("img",{attrs:{src:a("3f66")}}):t._e()])])])])},h=[],y={name:"battle",methods:{attack(){let t={attack:{opponentCardId:this.activeCards.opponentCard.id,playerCardId:this.activeCards.playerCard.id},gameId:this.game.id};this.$store.dispatch("attack",t)}},data(){return{}},computed:{activeCards(){return this.$store.state.activeCards},game(){return this.$store.state.game}}},b=y,x=Object(d["a"])(b,_,h,!1,null,null,null);x.options.__file="battle.vue";var k=x.exports,w={name:"game",components:{battle:k,opponentHand:g,playerHand:p},mounted(){this.$store.dispatch("getGame",this.$route.params.id)},computed:{game(){return this.$store.state.game}}},O=w,$=(a("568f"),Object(d["a"])(O,s,r,!1,null,null,null));$.options.__file="Game.vue";e["default"]=$.exports},c5eb:function(t,e,a){"use strict";var s=a("52e0"),r=a.n(s);r.a},ff7b:function(t,e,a){}});
//# sourceMappingURL=app.05f656fd.js.map