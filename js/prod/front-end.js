(()=>{"use strict";var e={4251:e=>{var t=function(){var e={tolerance:0,duration:800,easing:"easeOutQuart",container:window,callback:function(){}};function t(e,t,n,o){return e/=o,-n*(--e*e*e*e-1)+t}function n(e,t){var n={};return Object.keys(e).forEach((function(t){n[t]=e[t]})),Object.keys(t).forEach((function(e){n[e]=t[e]})),n}function o(e){return e instanceof HTMLElement?e.scrollTop:e.pageYOffset}function r(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.options=n(e,o),this.easeFunctions=n({easeOutQuart:t},r)}return r.prototype.registerTrigger=function(e,t){var o=this;if(e){var r=e.getAttribute("href")||e.getAttribute("data-target"),i=r&&"#"!==r?document.getElementById(r.substring(1)):document.body,a=n(this.options,function(e,t){var n={};return Object.keys(t).forEach((function(t){var o=e.getAttribute("data-mt-".concat(t.replace(/([A-Z])/g,(function(e){return"-"+e.toLowerCase()}))));o&&(n[t]=isNaN(o)?o:parseInt(o,10))})),n}(e,this.options));"function"==typeof t&&(a.callback=t);var l=function(e){e.preventDefault(),o.move(i,a)};return e.addEventListener("click",l,!1),function(){return e.removeEventListener("click",l,!1)}}},r.prototype.move=function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0===e||e){r=n(this.options,r);var i,a="number"==typeof e?e:e.getBoundingClientRect().top,l=o(r.container),c=null;a-=r.tolerance;window.requestAnimationFrame((function n(s){var d=o(t.options.container);c||(c=s-1);var u=s-c;if(i&&(a>0&&i>d||a<0&&i<d))return r.callback(e);i=d;var g=t.easeFunctions[r.easing](u,l,a,r.duration);r.container.scroll(0,g),u<r.duration?window.requestAnimationFrame(n):(r.container.scroll(0,a+l),r.callback(e))}))}},r.prototype.addEaseFunction=function(e,t){this.easeFunctions[e]=t},r}();e.exports=t}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return void 0===window.air_light_screenReaderText||void 0===window.air_light_screenReaderText[e]?(console.error("Missing translation for ".concat(e)),""):window.air_light_screenReaderText[e]}function r(e){var n=t(e.children);if(0===n.length)return"";var o=n.filter((function(e){return"img"===e.tagName.toLowerCase()}));if(n.length!==o.length)return"";var r=o.filter((function(e){return e.alt&&""!==e.alt})).map((function(e){return e.alt}));return r.length?r.join(", "):""}function i(){var e=[window.location.host];void 0!==window.air_light_externalLinkDomains&&(e=e.concat(window.air_light_externalLinkDomains));var n=t(document.querySelectorAll("a")).filter((function(t){return function(e,t){if(!e.length)return!1;var n;if(["#","tel:","mailto:","/"].some((function(t){return new RegExp("^".concat(t),"g").test(e)})))return!1;try{n=new URL(e)}catch(t){return console.log("Invalid URL: ".concat(e)),!1}return!t.some((function(e){return n.host===e}))}(t.href,e)}));n.forEach((function(e){if(1===e.childElementCount&&"img"===e.children[0].tagName.toLowerCase())return!1;if(!e.classList.contains("no-external-link-label")){var t=e.textContent.trim().length?e.textContent.trim():r(e),n="_blank"===e.target?"".concat(t,": ").concat(o("external_link"),", ").concat(o("target_blank")):"".concat(t,": ").concat(o("external_link"));e.setAttribute("aria-label",n)}["no-external-link-indicator","global-link","button"].some((function(t){return e.classList.contains(t)}))||e.insertAdjacentHTML("beforeend",'<svg class="external-link-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 9 9"><path d="M4.499 1.497h4v4m0-4l-7 7" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>')}))}var a=n(4251),l=n.n(a);const c=function(){for(var e=new(l())({ease:"easeInQuad"},{easeInQuad:function(e,t,n,o){return n*(e/=o)*e+t},easeOutQuad:function(e,t,n,o){return-n*(e/=o)*(e-2)+t}}),t=document.getElementsByClassName("js-trigger"),n=0;n<t.length;n++)e.registerTrigger(t[n])};const s=function(){var e=new(l())({duration:300,easing:"easeOutQuart"}),t=document.getElementById("top"),n=document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');t&&(t.addEventListener("click",(function(t){t.preventDefault(),e.move(n[0])})),t.addEventListener("keydown",(function(){n[0].focus()}))),window.addEventListener("scroll",(function(){var e=window.pageYOffset,n=document.documentElement.clientHeight;e>n&&t.classList.add("is-visible"),e<n&&t.classList.remove("is-visible")}))};const d=function(){var e=document.querySelectorAll("h1, h2, h3, h4, h5, h6")[0],t=document.querySelectorAll(".skip-link")[0],n=new(l());t&&t.addEventListener("click",(function(){e.setAttribute("tabindex","-1"),e.focus(),n.move(e)}))};const u=function(){var e=window.location.search;if(new URLSearchParams(e).has("s")){var t=document.querySelector('main input[name="s"]');t&&t.focus({preventScroll:!0})}};const g=function(e,t,n){t.forEach((function(t){return e.addEventListener(t,n)}))};const m=function(){if(document.getElementById("nav-toggle")&&document.querySelector(".site-header")&&document.getElementById("menu-items-wrapper")){var e=window.innerWidth;e=e||document.documentElement.clientWidth||document.body.clientWidth;var t=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--width-max-mobile"),10),n=document.querySelector(".site-header").offsetHeight,o=document.getElementById("nav-toggle").offsetHeight;if(document.getElementById("nav-toggle").style.top="".concat((n-o)/2,"px"),e<=t){if(document.getElementById("menu-items-wrapper").style.top="".concat(n,"px"),document.getElementById("menu-items-wrapper").style.height="calc(100vh - ".concat(n,"px)"),document.querySelector(".air-notification")){var r=document.querySelectorAll(".air-notification"),i=0;r.forEach((function(e){i=e.offsetHeight+i})),document.getElementById("menu-items-wrapper").style.height="calc(100vh - ".concat(n+i,"px)"),document.getElementById("menu-items-wrapper").style.top="".concat(n+i,"px"),r.forEach((function(e){var t=e.querySelector("button"),o=e.offsetHeight;t&&t.addEventListener("click",(function(){i-=o,document.getElementById("menu-items-wrapper").style.height="calc(100vh - ".concat(n+i,"px)"),document.getElementById("menu-items-wrapper").style.top="".concat(n+i,"px")}))}))}}else document.getElementById("menu-items-wrapper").style.top="0",document.getElementById("menu-items-wrapper").style.height="auto"}else console.log("Warning: No nav-toggle or site-header found.")};const p=function(e){var n,o=document.getElementById("nav"),r=document.getElementById("nav-toggle"),i=getComputedStyle(document.documentElement).getPropertyValue("--width-max-mobile"),a=window.matchMedia("(max-width: ".concat(i,")")).matches;if(o&&r&&a){var l=(n=t(o.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')).filter((function(e){return!e.hasAttribute("disabled")})).filter((function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)})))[0],c=n[n.length-1];l===e.target&&"Tab"===e.code&&e.shiftKey&&(e.preventDefault(),c.focus()),c!==e.target||"Tab"!==e.code||e.shiftKey||(e.preventDefault(),l.focus())}};const f=function(){document.querySelectorAll(".dropdown-toggle")?document.querySelectorAll(".dropdown-toggle").forEach((function(e){var t=e.previousElementSibling.offsetHeight;e.style.height="".concat(t,"px")})):console.log("Warning: No dropdown-toggles found.")};const v=function(e){var t=e.getBoundingClientRect(),n={};return n.top=t.top<0,n.left=t.left<0,n.bottom=t.bottom>(window.innerHeight||document.documentElement.clientHeight),n.right=t.right>(window.innerWidth||document.documentElement.clientWidth),n.any=n.top||n.left||n.bottom||n.right,n};const h=function(e){e?e.forEach((function(e){var t=e.querySelectorAll(".sub-menu");t.forEach((function(e){void 0!==t&&(v(e).right&&e.classList.add("is-out-of-viewport"))}))})):console.log("Warning: No items for sub-menus found.")};const y=function(e){e.forEach((function(e){e.addEventListener("mouseover",(function(){var t=this,n=getComputedStyle(document.documentElement).getPropertyValue("--width-max-mobile"),o=window.matchMedia("(max-width: ".concat(n,")")).matches;e.classList.contains("removing-hover")||o||(this.classList.add("hover-intent"),this.classList.add("hovering"),this.parentNode.classList.add("hover-intent"),this.parentNode.classList.add("hovering"),setTimeout((function(){t.classList.remove("hovering"),t.parentNode.classList.remove("hovering")}),500),document.addEventListener("keydown",(function(n){!t.classList.contains("removing-hover")&&t.classList.contains("hovering")&&t.parentNode.classList.contains("hovering")&&"Escape"===n.key&&(e.classList.remove("hover-intent"),e.parentNode.classList.remove("hover-intent"),e.parentNode.parentNode.classList.remove("hover-intent"),e.classList.add("removing-hover"),e.parentNode.classList.add("removing-hover"),setTimeout((function(){t.classList.remove("removing-hover"),t.parentNode.classList.remove("removing-hover")}),500))})),setTimeout((function(){t.classList.remove("removing-hover"),t.parentNode.classList.remove("removing-hover")}),500))})),e.addEventListener("mouseleave",(function(){var e=this;setTimeout((function(){e.classList.remove("hover-intent"),e.parentNode.classList.remove("hover-intent"),e.querySelectorAll(".dropdown-toggle").forEach((function(e){if(e.setAttribute("aria-expanded","false"),e.parentNode.querySelector(".dropdown")){var t=e.parentNode.querySelector(".dropdown").textContent;e.setAttribute("aria-label","".concat(air_light_screenReaderText.expand_for," ").concat(t))}}))}),0),setTimeout((function(){e.classList.remove("removing-hover"),e.parentNode.classList.remove("removing-hover")}),500)}))}))};const b=function(e){e.forEach((function(e){if(e.querySelector(".dropdown")){var t=e.querySelector(".dropdown-toggle"),n=e.querySelector(".dropdown").innerText;t.setAttribute("aria-label","".concat(air_light_screenReaderText.expand_for," ").concat(n))}}))};const w=function(e,t){t.forEach((function(e){e.addEventListener("keyup",(function(e){var t=e.target;if(("main-menu"===t.parentNode.parentNode.id||t.classList.contains("button-nav")&&"main-menu"===t.parentNode.parentNode.id)&&t.parentNode.previousElementSibling){var n=t.parentNode.previousElementSibling;if(n.classList.remove("toggled-on"),n.classList.remove("hover-intent"),n.querySelector(".sub-menu")){var o=n.querySelector(".sub-menu");o.classList.remove("toggled-on"),o.classList.remove("hover-intent"),n.querySelector(".dropdown-toggle").setAttribute("aria-label","".concat(air_light_screenReaderText.expand_for," ").concat(n.querySelector(".dropdown-item").innerText)),n.querySelector(".dropdown-toggle").setAttribute("aria-expanded","false"),n.querySelector(".dropdown-toggle").classList.remove("toggled-on")}}})),g(e,["click","keydown","keypress"],(function(e){var t=e.target,n=t.parentNode,o=t.parentNode.parentNode.parentNode.querySelector(".sub-menu"),r=t.nextElementSibling,i=t.parentNode.parentNode.parentNode.querySelector(".dropdown-toggle");if(t.classList.remove("removing-hover"),n.parentNode.classList.remove("removing-hover"),"Enter"===e.key||"click"===e.type){if("A"===t.tagName)return;var a=t.parentNode.querySelector(".dropdown-item").innerText;t.classList.toggle("toggled-on"),"false"===t.getAttribute("aria-expanded")?(t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","".concat(air_light_screenReaderText.collapse_for," ").concat(a))):(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","".concat(air_light_screenReaderText.expand_for," ").concat(a))),r&&!r.classList.contains("toggled-on")?(n.classList.add("hover-intent"),r.classList.add("toggled-on")):(n&&n.classList.remove("hover-intent"),r&&r.classList.remove("toggled-on"))}if("Escape"===e.key){if("main-menu"!==t.parentNode.parentNode.id||t.parentNode.classList.contains("toggled-on")||(document.body.classList.remove("js-nav-active"),document.getElementById("nav-toggle").focus()),"main-menu"===t.parentNode.parentNode.id&&!t.parentNode.classList.contains("hover-intent"))return;o.classList.remove("toggled-on"),n.classList.remove("hover-intent"),n.parentNode.parentNode.classList.remove("hover-intent"),i.setAttribute("aria-expanded","false"),i.classList.remove("toggled-on");var l=t.parentNode.querySelector(".dropdown-item").innerText;i.setAttribute("aria-label","".concat(air_light_screenReaderText.expand_for," ").concat(l)),t.classList.contains("dropdown-toggle")&&(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","".concat(air_light_screenReaderText.expand_for," ").concat(l))),"main-menu"!==t.parentNode.parentNode.id&&setTimeout((function(){i.focus()}),100)}if("ArrowUp"===e.key||"ArrowDown"===e.key||"ArrowLeft"===e.key||"ArrowRight"===e.key)switch(e.code){case"ArrowUp":if(e.stopPropagation(),e.preventDefault(),t.parentNode.parentNode.previousElementSibling&&t.parentNode.parentNode.previousElementSibling.classList.contains("dropdown-toggle")&&t.parentNode.parentNode.previousElementSibling.focus(),t.classList.contains("dropdown-toggle")&&"true"===t.getAttribute("aria-expanded")){n.classList.remove("hover-intent"),r.classList.remove("toggled-on"),t.setAttribute("aria-expanded","false");var c=t.parentNode.querySelector(".dropdown-item").innerText;t.setAttribute("aria-label","".concat(air_light_screenReaderText.expand_for," ").concat(c)),i.focus()}if("A"===t.tagName||"BUTTON"===t.tagName){if(!t.parentNode.previousElementSibling)return;var s=t.parentNode.previousElementSibling.querySelector("a"),d=t.parentNode.previousElementSibling.querySelector(".dropdown-toggle");d&&!t.querySelector(".dropdown-toggle")?d.focus():s.focus()}break;case"ArrowDown":if(e.stopPropagation(),e.preventDefault(),t.parentNode.parentNode.nextElementSibling&&t.parentNode.parentNode.nextElementSibling.classList.contains("dropdown-toggle")&&t.parentNode.parentNode.nextElementSibling.focus(),t.classList.contains("dropdown-toggle")&&"true"===t.getAttribute("aria-expanded")&&t.parentNode.querySelector(".sub-menu").querySelector("li:first-child").querySelector("a").focus(),t.classList.contains("dropdown-toggle")&&"false"===t.getAttribute("aria-expanded")&&!t.parentNode.parentNode.classList.contains("sub-menu"))return t.click(),void t.parentNode.querySelector(".sub-menu").querySelector("li:first-child").querySelector("a").focus();if(t.parentNode.parentNode.classList.contains("sub-menu")&&t.parentNode.nextElementSibling.querySelector("a").focus(),("A"===t.tagName||"BUTTON"===t.tagName)&&!t.classList.contains("dropdown-toggle")){if(!t.parentNode.nextElementSibling)return;var u=t.parentNode.nextElementSibling.querySelector("a"),g=t.parentNode.nextElementSibling.querySelector(".dropdown-toggle");t.classList.contains("dropdown-item")&&t.nextElementSibling&&(g=t.nextElementSibling)&&g.focus(),g&&!t.querySelector(".dropdown-toggle")?g.focus():u.focus()}break;case"ArrowLeft":if(e.stopPropagation(),e.preventDefault(),null===t.parentNode.previousElementSibling&&"main-menu"!==t.parentNode.parentNode.id)return t.parentNode.parentNode.parentNode.querySelector(".dropdown-toggle").focus(),void t.parentNode.parentNode.parentNode.querySelector(".dropdown-toggle").click();if(t.parentNode.previousElementSibling&&t.classList.contains("dropdown-toggle")&&"true"===t.getAttribute("aria-expanded")&&"main-menu"!==t.parentNode.parentNode.id&&t.parentNode.previousElementSibling.querySelector("a").focus(),t.classList.contains("dropdown-toggle")&&"false"===t.getAttribute("aria-expanded")&&"main-menu"!==t.parentNode.parentNode.id){n.classList.remove("hover-intent"),r.classList.remove("toggled-on"),t.setAttribute("aria-expanded","false");var m=t.parentNode.querySelector(".dropdown-item").innerText;t.setAttribute("aria-label","".concat(air_light_screenReaderText.expand_for," ").concat(m)),i.focus()}if("A"===t.tagName||"BUTTON"===t.tagName){if(t.previousElementSibling&&t.classList.contains("dropdown-toggle")&&"false"===t.getAttribute("aria-expanded"))return void t.previousElementSibling.focus();if(!t.parentNode.previousElementSibling)return;var p=t.parentNode.previousElementSibling.querySelector("a"),f=t.parentNode.previousElementSibling.querySelector(".dropdown-toggle");f?f.focus():p.focus()}break;case"ArrowRight":if(e.stopPropagation(),e.preventDefault(),t.classList.contains("dropdown-toggle")&&"true"===t.getAttribute("aria-expanded")&&"main-menu"!==t.parentNode.parentNode.id&&t.parentNode.querySelector(".sub-menu").querySelector("li:first-child").querySelector("a").focus(),t.nextElementSibling&&(t.nextElementSibling.focus(),t.classList.contains("dropdown-item")))return;if(t.classList.contains("dropdown-toggle")&&"false"===t.getAttribute("aria-expanded")&&"main-menu"!==t.parentNode.parentNode.id)return void t.click();if(t.classList.contains("dropdown-toggle")&&"true"===t.getAttribute("aria-expanded")&&"main-menu"!==t.parentNode.parentNode.id)return void t.parentNode.querySelector(".sub-menu").querySelector("li:first-child").querySelector("a").focus();if("A"===t.tagName||"BUTTON"===t.tagName){if(!t.parentNode.nextElementSibling)return;var v=t.parentNode.nextElementSibling.querySelector("a"),h=t.parentNode.nextElementSibling.querySelector(".dropdown-toggle");h?h.focus():v.focus()}}}))}))};window.addEventListener("resize",(function(){m(),f(),h(document.querySelectorAll(".menu-item"))})),document.addEventListener("DOMContentLoaded",(function(){var e,n;c(),s(),i(),t(document.querySelectorAll("a")).forEach((function(e){if(""===e.textContent.trim()&&!e.ariaLabel){var t=r(e);""!==t&&(e.ariaLabel=t)}})),d(),u(),e=document.querySelectorAll(".menu-item"),n=document.querySelectorAll(".menu-item a, .dropdown button, .button-nav"),document.getElementById("main-menu")&&(b(e),w(e,n),y(e),h(e)),document.getElementById("nav-toggle")?(g(document.getElementById("nav-toggle"),["click","keydown","keypress"],(function(e){"click"!==e.type&&13!==e.keyCode||(document.body.classList.toggle("js-nav-active"),window.scrollTo(0,0),"false"===document.getElementById("nav-toggle").getAttribute("aria-expanded")?document.getElementById("nav-toggle").setAttribute("aria-expanded","true"):document.getElementById("nav-toggle").setAttribute("aria-expanded","false"),document.getElementById("nav-toggle").getAttribute("aria-label")===air_light_screenReaderText.expand_toggle?document.getElementById("nav-toggle").setAttribute("aria-label",air_light_screenReaderText.collapse_toggle):document.getElementById("nav-toggle").setAttribute("aria-label",air_light_screenReaderText.expand_toggle),f(),t(document.getElementById("nav").querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')).filter((function(e){return!e.hasAttribute("disabled")})).filter((function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)})).forEach((function(e){e.addEventListener("keydown",p)})))})),document.querySelectorAll(".dropdown-toggle").forEach((function(e){g(e,["click","keydown","keypress"],f)})),m()):console.log("Warning: No nav-toggle found."),function(e,t){var n,o,r="string"==typeof e?document.querySelectorAll(e):e,i=t||"js-reframe";"length"in r||(r=[r]);for(var a=0;a<r.length;a+=1){var l=r[a];if(-1!==l.className.split(" ").indexOf(i)||l.style.width.indexOf("%")>-1)return;var c=l.getAttribute("height")||l.offsetHeight,s=l.getAttribute("width")||l.offsetWidth,d=("string"==typeof c?parseInt(c):c)/("string"==typeof s?parseInt(s):s)*100,u=document.createElement("div");u.className=i;var g=u.style;g.position="relative",g.width="100%",g.paddingTop="".concat(d,"%");var m=l.style;m.position="absolute",m.width="100%",m.height="100%",m.left="0",m.top="0",null===(n=l.parentNode)||void 0===n||n.insertBefore(u,l),null===(o=l.parentNode)||void 0===o||o.removeChild(l),u.appendChild(l)}}(".wp-has-aspect-ratio iframe")}))})()})();