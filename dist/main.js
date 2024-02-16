(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap);"]),i.push([n.id,'html, body {\n  height: 100vh;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: \'Roboto\', sans-serif;\n  background-image: url("https://i.ytimg.com/vi/6lvZ9x2ntoU/maxresdefault.jpg");\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: rgb(255, 255, 255);\n  overflow: auto;\n}\n\nheader {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-top: 0;\n  font-size: 20px;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\nheader ul,\nheader h1 {\n    margin: 0;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n}\n\nul {\n  display: flex;\n  list-style: none;\n  align-items: center;\n}\n\nul:first-child {\n  font-family: "Dancing Script", cursive;\n  font-size: 30px;\n}\n\n.buttons {\n  margin-left: 730px;\n  display: flex;\n}\n\n\nnav button {\n  color: white;\n  height: 40px;\n  width: 100px;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\nnav button:hover {\n  background-color: #433a30;\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n}\n\nfooter {\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 25px;\n}\n\nfooter a {\n  color: white;\n  text-decoration: none;\n  margin: 0 10px;\n}\n\n/* home page */\n.title {\n  width: 70%;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 120px;\n  margin-bottom: 120px;\n  align-items: center;\n}\n\n.title h1 {\n  font-family: "Dancing Script", cursive;\n  font-size: 80px;\n  text-align: center;\n  width: 100%;\n  margin: 0;\n}\n\n.container {\n  text-align: center;\n  width: 40%;\n  font-size: 20px;\n}\n\n.title button {\n  height: 40px;\n  width: 150px;\n  background-color: #9F8170;\n  color: white;\n  font-size: 20px;\n  border: none;\n  border-radius: 25px;\n  cursor: pointer;\n}\n\n.title button:hover {\n  background-color: #433a30;\n}\n\n/* menu page */\n.menu_container {\n  height: fit-content;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  font-family: "Dancing Script", cursive;\n  padding-top: 1%;\n  margin: 30px;\n  width: 50%;\n  font-size: 40px;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.menu_items {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  font-size: 15px;\n  padding: 10px;\n}\n\n.items {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.items h2 {\n  margin: 0;\n  font-size: 40px;\n}\n\n.items p {\n  margin: 15px;\n  text-align: center;\n  font-size: 20px;\n  font-family: \'Roboto\', sans-serif;\n}',""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),i=t.n(a),c=t(56),s=t.n(c),d=t(540),l=t.n(d),p=t(113),u=t.n(p),f=t(208),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const h=function(){let n=document.querySelector("#content");for(;n.firstChild;)n.removeChild(n.firstChild);let e=document.createElement("div"),t=document.createElement("div"),o=document.createElement("h1"),r=document.createElement("p"),a=document.createElement("button");e.classList.add("title"),t.classList.add("container"),o.textContent="Mountain Brew Coffee",r.textContent="We are a small coffee shop located in the heart of the Rocky Mountains. We pride ourselves on our unique blend of coffee and our cozy atmosphere. We are open 7 days a week and we hope to see you soon!",a.textContent="Book a Table",e.appendChild(o),e.appendChild(t),t.appendChild(r),e.appendChild(a),n.appendChild(e)};function g(n,e,t,o){let r=document.createElement("h2"),a=document.createElement("p"),i=document.createElement("h3");r.textContent=e,a.textContent=t,i.textContent=o,n.appendChild(r),n.appendChild(a),n.appendChild(i)}h();let v=document.querySelector(".home"),y=document.querySelector(".menu"),x=document.querySelector(".contact");v.addEventListener("click",(()=>{h()})),y.addEventListener("click",(()=>{!function(){document.body.style.backgroundImage="none";let n=document.querySelector("#content");for(;n.firstChild;)n.removeChild(n.firstChild);let e=document.createElement("div"),t=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div");o.classList.add("items"),r.classList.add("items"),a.classList.add("items"),i.classList.add("items"),c.classList.add("items"),s.classList.add("items"),o.id="americano",r.id="cappuccino",a.id="espresso",i.id="latte",c.id="mocha",s.id="tea",g(o,"Americano","A shot or two of espresso with hot water added","$3.00"),g(r,"Cappuccino","A shot of espresso with steamed milk and a layer of frothed milk","$3.50"),g(a,"Espresso","A shot of strong black coffee","$2.50"),g(i,"Latte","A shot of espresso with steamed milk","$3.00"),g(c,"Mocha","A shot of espresso with steamed milk and chocolate","$3.50"),g(s,"Tea","A cup of hot tea","$2.00"),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(i),t.appendChild(c),t.appendChild(s),e.innerHTML="Available Menu Items",e.appendChild(t),e.classList.add("menu_container"),t.classList.add("menu_items"),n.appendChild(e)}()})),x.addEventListener("click",(()=>{createContact()}))})()})();