(this.webpackJsonptestapp=this.webpackJsonptestapp||[]).push([[0],{13:function(e,n,t){},27:function(e,n,t){},29:function(e,n,t){},32:function(e,n,t){},48:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(4),s=t.n(a),r=(t(27),t(1));function o(){return Object(r.jsxs)("div",{className:"topbar",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)("span",{children:"COLORED"})}),Object(r.jsx)("div",{className:"menu",children:Object(r.jsx)("span",{children:"by Joan Guitart"})})]})}var l,i=t(2),u=t(12),j=t(22),b=t(16),d=t(17),h=(t(29),["colorInput","onChange"]),x=d.a.span(l||(l=Object(b.a)(['\ndisplay: inline-flex;\nalign-items: center;\nwidth: 150px;\nmax-width: 150px;\npadding: 4px 12px;\nborder-radius: 4px;\n\ninput[type="color"] {\n    margin-right: 8px;\n    -webkit-appearance: none;\n    border: none;\n    width: auto;\n    height: auto;\n    cursor: pointer;\n    background: none;\n    &::-webkit-color-swatch-wrapper {\n    padding: 0;\n    width: 14px;\n    height: 14px;\n    }\n    &::-webkit-color-swatch {\n    border: 1px solid #bfc9d9;\n    border-radius: 4px;\n    padding: 0;\n    }\n}\n\ninput[type="text"] {\n    border: none;\n    border-radius: 4px;\n    text-align: center;\n    width: 100%;\n    height: 30px;\n    font-size: 14px;\n    font-family:  \'Quicksand\', sans-serif;\n}\n'])));function p(e){var n=e.colorInput,t=e.onChange,c=Object(j.a)(e,h);return Object(r.jsx)("div",{className:"input-color",children:Object(r.jsxs)(x,{children:[Object(r.jsx)("input",Object(u.a)({type:"color",value:n,onChange:t},c)),Object(r.jsx)("input",Object(u.a)({type:"text",value:n,onChange:t},c))]})})}t(13);function O(e){var n=e.x,t=e.y,c=e.z,a=e.mode;return Object(r.jsxs)("div",{className:"color-code",children:[Object(r.jsxs)("div",{className:"code",children:[Object(r.jsxs)("span",{children:[" ",n," "]}),Object(r.jsxs)("span",{children:[" ","rgb"===a?"R":"H"," "]})]}),Object(r.jsxs)("div",{className:"code",children:[Object(r.jsxs)("span",{children:[" ",t," "]}),Object(r.jsxs)("span",{children:[" ","rgb"===a?"G":"S"," "]})]}),Object(r.jsxs)("div",{className:"code",children:[Object(r.jsxs)("span",{children:[" ",c," "]}),Object(r.jsxs)("span",{children:[" ","rgb"===a?"B":"L"," "]})]})]})}function m(e){var n=e.colors,t=e.type,a=Object(c.useState)(!1),s=Object(i.a)(a,2),o=s[0],l=s[1],u=Object(c.useState)(""),j=Object(i.a)(u,2),b=j[0],d=j[1];return Object(r.jsxs)("div",{className:"palette",children:[n.map((function(e,n){return Object(r.jsxs)("div",{className:"palette-box",onClick:function(){return n=e.hex,d(n),l(!0),void setTimeout((function(){l(!1)}),400);var n},children:[Object(r.jsxs)("div",{className:"color",id:"color_".concat(n),children:[Object(r.jsx)("style",{children:"#color_".concat(n,"{\n                                        background-color: ").concat(e.hex,";\n                                        transition: all .3s ease-in-out; \n                                    ")}),Object(r.jsx)("div",{className:"copy-text",children:o?"Copied!":"Copy hex"}),Object(r.jsx)("span",{className:"name",children:e.name})]}),Object(r.jsxs)("div",{className:"values",children:["HEX"===t&&Object(r.jsx)("div",{className:"color-code",children:Object(r.jsx)("span",{children:e.hex})}),"RGB"===t&&Object(r.jsx)(O,{x:e.rgb[0],y:e.rgb[1],z:e.rgb[2],mode:"rgb"}),"HSL"===t&&Object(r.jsx)(O,{x:e.hsl[0],y:e.hsl[1],z:e.hsl[2],mode:"hsl"})]})]},n)})),Object(r.jsx)(v,{text:b})]})}var v=function(e){var n=e.text,t=Object(c.useRef)(null),a=Object(c.useState)(n),s=Object(i.a)(a,2),o=s[0],l=s[1];return Object(c.useEffect)((function(){return l(n)}),[n]),Object(c.useEffect)((function(){t.current&&o&&(t.current.select(),document.execCommand("copy"),l(null))}),[o,t.current]),Object(r.jsx)(r.Fragment,{children:o&&Object(r.jsx)("textarea",{ref:t,children:o})})},f=t(11),g=[{value:1,label:"monochrome"},{value:2,label:"monochrome-light"},{value:3,label:"monochrome-dark"},{value:4,label:"analogic"},{value:5,label:"analogic-complement"},{value:6,label:"complement"},{value:7,label:"triad"},{value:8,label:"quad"}],y=[{value:1,label:"HEX"},{value:2,label:"RGB"},{value:3,label:"HSL"}],N=(t(32),t(10)),w=t.n(N),k=t(20),C=function(){var e=Object(k.a)(w.a.mark((function e(n,t){var c,a,s,r,o,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.replace("#",""),a="https://www.thecolorapi.com/scheme?hex=".concat(c,"&mode=").concat(t),e.next=4,fetch(a);case 4:return s=e.sent,e.next=7,s.json();case 7:return r=e.sent,o=r.colors,l=o.map((function(e){var n=e.rgb,t=n.r,c=n.g,a=n.b,s=e.hsl,r=s.h,o=s.s,l=s.l;return{name:e.name.value,hex:e.hex.value,rgb:[t,c,a],hsl:[r,o,l]}})),e.abrupt("return",l);case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),S=t(21);function E(){var e=function(){return"#"+(16777215*Math.random()<<0).toString(16).padStart(6,"0")},n=Object(c.useState)(e()),t=Object(i.a)(n,2),a=t[0],s=t[1],o=Object(c.useState)("monochrome"),l=Object(i.a)(o,2),u=l[0],j=l[1],b=Object(c.useState)("HEX"),d=Object(i.a)(b,2),h=d[0],x=d[1],O=function(e,n){var t=Object(c.useState)({data:[]}),a=Object(i.a)(t,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){C(e,n).then((function(e){r({data:e})}))}),[e,n]),s}(a,u).data;return document.body.onkeyup=function(n){32===n.keyCode&&s(e())},Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("span",{children:"Press space-bar to generate random color"})}),Object(r.jsxs)("div",{className:"base-color",children:[Object(r.jsx)("style",{children:".base-color{background-color: ".concat(a,";")}),Object(r.jsx)(p,{value:a,onChange:function(e){e.target.value.length>6&&s(e.target.value)}}),Object(r.jsx)(f.a,{className:"selectors",options:g,onChange:function(e){return j(e.label)},placeholder:"monochrome","default-value":0}),Object(r.jsx)(f.a,{className:"selectors",options:y,onChange:function(e){return x(e.label)},placeholder:"HEX","default-value":0})]}),Object(r.jsx)(m,{colorInput:a,type:h,colors:O}),Object(r.jsxs)("button",{className:"mobile-btn",onClick:function(){return s(e())},children:[Object(r.jsx)("style",{children:".icon{\n                            color: ".concat(a,";\n                            transition: all .3s ease-in-out; \n                        ")}),Object(r.jsx)(S.a,{className:"icon"})]})]})}t(48);function H(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)("div",{className:"pages",children:Object(r.jsx)(E,{})})]})}s.a.render(Object(r.jsx)(H,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.b0981f58.chunk.js.map