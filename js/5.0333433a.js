(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"6bb5":function(i,t,s){},9365:function(i,t,s){"use strict";s.r(t);var e=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",[s("h1",[i._v(" This is game.vue, new location for games ")]),s("div",{staticClass:"flex flex-center"},[s("p",[i._v(" "+i._s(i.message)+" ")]),s("q-btn",{attrs:{rounded:""},on:{click:function(t){return i.resetFunction()}}},[i._v(" reset ")]),s("br"),s("div",i._l(i.board,(function(t,e){return s("div",{key:t.id,staticClass:"row"},i._l(t,(function(t,n){return s("q-btn",{key:t.id,staticClass:"box",attrs:{color:"black"},on:{click:function(t){return i.makeMove(e,n)}}},[i._v("\n          "+i._s(i.board[e][n])+"\n        ")])})),1)})),0)],1)])},n=[],o={created:function(){this.board.push(this.line0),this.board.push(this.line1),this.board.push(this.line2),console.log("board getting pushed")},data:function(){return{body:"Welcome from John.vue",board:[],line0:["_","_","_"],line1:["_","_","_"],line2:["_","_","_"],turn:0,message:"No message",tie:0}},methods:{routeTo:function(i){this.$router.push(i).catch((function(){return!1}))},makeMove:function(i,t){console.log(i,t,this.turn),"O"!==this.board[i][t]&&"X"!==this.board[i][t]?(this.turn%2===0?(this.board[i][t]="O",this.turn=this.turn+1):(this.board[i][t]="X",this.turn=this.turn+1),this.tie=this.tie+1):(console.log("invalid user input"),this.message="Do not place over other pieces"),"O"===this.line0[0]&&"O"===this.line0[1]&&"O"===this.line0[2]?this.message="O wins":"X"===this.line0[0]&&"X"===this.line0[1]&&"X"===this.line0[2]?this.message="X wins":"O"===this.line1[0]&&"O"===this.line1[1]&&"O"===this.line1[2]?this.message="O wins":"X"===this.line1[0]&&"X"===this.line1[1]&&"X"===this.line1[2]?this.message="X wins":"O"===this.line2[0]&&"O"===this.line2[1]&&"O"===this.line2[2]?this.message="O wins":"X"===this.line2[0]&&"X"===this.line2[1]&&"X"===this.line2[2]?this.message="X wins":9===this.tie&&(this.message="It is a tie"),this.$forceUpdate()},resetFunction:function(){for(var i=0;i<3;i+=1)for(var t=0;t<3;t+=1)this.board[i][t]="_";this.message="No message",this.tie=0,this.$forceUpdate()}}},r=o,h=(s("f8bf"),s("2877")),a=Object(h["a"])(r,e,n,!1,null,null,null);t["default"]=a.exports},f8bf:function(i,t,s){"use strict";var e=s("6bb5"),n=s.n(e);n.a}}]);