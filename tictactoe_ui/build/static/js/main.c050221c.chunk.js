(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(1),s=a(2),l=a(4),u=a(3),c=a(0),i=a.n(c),o=a(6),m=a.n(o);a(14);function d(e){return i.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},r}return Object(s.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();f(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return i.a.createElement(d,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=this,a=f(this.state.squares);return e=a?"Winner: "+a:"Next player: "+(this.state.xIsNext?"X":"O"),i.a.createElement("div",null,i.a.createElement("div",{className:"status"},e),i.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),i.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),i.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),i.a.createElement("div",{className:"status"},i.a.createElement("button",{onClick:function(){return t.handleNewGame()}},"New Game")))}},{key:"handleNewGame",value:function(){this.setState({squares:Array(9).fill(null),xIsNext:!0})}}]),a}(i.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"game"},i.a.createElement("div",{className:"game-board"},i.a.createElement(h,null)),i.a.createElement("div",{className:"game-info"},i.a.createElement("div",null),i.a.createElement("ol",null)))}}]),a}(i.a.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(r.a)(t[a],3),s=n[0],l=n[1],u=n[2];if(e[s]&&e[s]===e[l]&&e[s]===e[u])return e[s]}return null}m.a.render(i.a.createElement(v,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.c050221c.chunk.js.map