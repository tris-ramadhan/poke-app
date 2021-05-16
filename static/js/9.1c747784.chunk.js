(this["webpackJsonppoke-app"]=this["webpackJsonppoke-app"]||[]).push([[9],{61:function(e,n,t){"use strict";t.r(n);var a,o,c,r,i,l,s=t(43),b=t.n(s),d=t(45),u=t(21),p=t(0),m=t(39),f=t(2),O=t(18),j=t(47),g=(t(57),void 0),v=function(e){var n=e.onChange,t=e.onSubmit;return Object(m.b)("div",{id:"myModal",className:"modal",css:Object(m.a)(a||(a=Object(j.a)(["\n            display: none;\n            position: fixed;\n            z-index: 1;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            overflow: auto;\n            background-color: rgb(0,0,0);\n            background-color: rgba(0,0,0,0.4);\n        "])))},Object(m.b)("div",{className:"modal-content",css:Object(m.a)(o||(o=Object(j.a)(["\n                background-color: #fefefe;\n                margin: 15% auto;\n                padding: 20px;\n                border: 1px solid #888;\n                width: 80%;\n                position: relative;\n                background-color: #fefefe;\n                margin: auto;\n                padding: 0;\n                border: 1px solid #888;\n                width: 80%;\n                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n            "])))},Object(m.b)("div",{className:"modal-header",css:Object(m.a)(c||(c=Object(j.a)(["\n                    padding: 2px 16px;\n                    background-color: #5cb85c;\n                    color: white;\n                "])))},Object(m.b)("span",{className:"close",css:Object(m.a)(r||(r=Object(j.a)(["\n                        color: #aaa;\n                        float: right;\n                        font-size: 28px;\n                        font-weight: bold;\n                        &:hover,&:focus: {\n                            color: black;\n                            text-decoration: none;\n                            cursor: pointer;\n                        }\n                    "])))},"\xd7"),Object(m.b)("h2",null,"Modal Header")),Object(m.b)("div",{className:"modal-body",css:Object(m.a)(i||(i=Object(j.a)(["\n                    padding: 2px 16px;\n                "])))},Object(m.b)("form",{onSubmit:t.bind(g)},Object(m.b)("label",null,"Enter Nickname",Object(m.b)("input",{type:"text",placeholder:"Insert pokemon name",onChange:n.bind(g)})),Object(m.b)("input",{type:"submit",value:"Submit"}),Object(m.b)("span",{css:Object(m.a)(l||(l=Object(j.a)(["color:red;display:none"]))),className:"validation"},"Name is already taken")))))},y=void 0,k=Object(p.lazy)((function(){return t.e(8).then(t.bind(null,55))}));n.default=function(){var e=Object(f.f)().id,n=Object(p.useState)(),t=Object(u.a)(n,2),a=t[0],o=t[1],c=Object(p.useState)(),r=Object(u.a)(c,2),i=r[0],l=r[1],s=Object(p.useContext)(O.a),j=s.currentPokemon,g=s.capture,h=s.fetchCurrentPokemon,x=s.capturedPokemons;Object(p.useEffect)((function(){(function(){var e=Object(d.a)(b.a.mark((function e(n){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+n);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,h(a);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}})()(e)}),[h]);var w=function(){var e=document.getElementById("myModal"),n=document.getElementsByClassName("close")[0];e.style.display="block",n.onclick=function(){e.style.display="none"},window.onclick=function(n){n.target===e&&(e.style.display="none")}},S=function(){var e=document.getElementById("myModal"),n=a;n.owned.push({name:i}),o(n),l(""),g(n),localStorage.setItem("pokedex",JSON.stringify(x)),e.style.display="none"},N=function(e,n){for(var t=0;t<n.length;t++)if(n[t].name===e)return!0;return!1};return Object(m.b)("div",null,Object(m.b)("h2",null,"Pokemon Detail"),Object(m.b)(k,null),Object(m.b)("img",{alt:j&&j.name,src:j&&j.sprites&&j.sprites.front_default}),Object(m.b)("h3",null,j&&j.name),Object(m.b)("p",null,"Moves"),Object(m.b)("ul",null,j&&j.moves&&j.moves.map((function(e){return Object(m.b)("li",{key:e.move.name},e.move.name)}))),Object(m.b)("p",null,"Types"),Object(m.b)("ul",null,j&&j.types&&j.types.map((function(e){return Object(m.b)("li",{key:e.type.name},e.type.name)}))),Object(m.b)("button",{onClick:function(){return function(e){if(Math.random()<.5)if(x.some((function(n){return n.id===e.id}))){var n=JSON.parse(localStorage.getItem("pokedex")),t=parseInt(n.findIndex((function(n){return n.id===e.id})));o(n[t]),w()}else{var a={id:e.id,name:e.name,owned:[]};o(a),w()}else alert("failed")}(j)}},"Catch Pokemon"),Object(m.b)(v,{onChange:function(e){l(e.target.value)}.bind(y),onSubmit:function(e){e.preventDefault();var n=document.getElementsByClassName("validation")[0];if(localStorage.getItem("pokedex")&&JSON.parse(localStorage.getItem("pokedex")).length>0){var t=JSON.parse(localStorage.getItem("pokedex")),o=parseInt(t.findIndex((function(e){return e.id===a.id})));-1===o?S():N(i,t[o].owned)?n.style.display="block":(S(),n.style.display="none")}else S()}.bind(y)}))}}}]);
//# sourceMappingURL=9.1c747784.chunk.js.map