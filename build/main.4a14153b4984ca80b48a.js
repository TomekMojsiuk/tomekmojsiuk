!function(o){var t={};function e(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return o[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=o,e.c=t,e.d=function(o,t,n){e.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:n})},e.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},e.t=function(o,t){if(1&t&&(o=e(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var i in o)e.d(n,i,function(t){return o[t]}.bind(null,i));return n},e.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(t,"a",t),t},e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},e.p="",e(e.s=1)}([function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.desktopBreakPoint=740},function(o,t,e){"use strict";l(e(2));var n=l(e(3)),i=l(e(4)),s=l(e(5)),d=e(6),c=l(e(7)),a=l(e(8)),r=l(e(9));function l(o){return o&&o.__esModule?o:{default:o}}e(10),$(document).ready(function(){$("body").append("<div class='loading__page'><div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>"),setTimeout(()=>{$(".loading__page").hide(),(0,n.default)(),(0,i.default)(),(0,c.default)(),(0,a.default)(),(0,s.default)(),(0,d.copyrightsElement)(),(0,r.default)(),(0,d.sectionAbout)(),(0,d.sectionPortfolio)(),(0,d.sectionContact)()},2e3)})},function(o,t,e){},function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(0);t.default=(()=>{const o=$(".nav__list"),t=$(".nav__list__item>a");console.log(740),t.each(function(){const o=$(this).attr("href");$(this).on("click",function(){$("body, html").animate({scrollTop:$(o).offset().top},600)})}),window.innerWidth<n.desktopBreakPoint?o.hide():o.show(),$(window).on("scroll",function(){window.innerWidth>n.desktopBreakPoint&&window.pageYOffset>450?o.addClass("sticky__nav--add"):o.removeClass("sticky__nav--add")}),$(window).resize(function(){window.innerWidth<n.desktopBreakPoint?o.hide():o.show()})})},function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(()=>{const o=$("nav");let t=$("<div class='hamburger'><div class='hamburger__line'></div><div class='hamburger__line'></div><div class='hamburger__line'></div></div>");o.prepend(t);const e=$(".nav__list");t.on("click",function(){e.toggle()})})},function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e(0);t.default=(()=>{$(".social__media__icons");const o=$(".linkedin"),t=$(".github"),e=$(".email");o.on("click",function(){window.open("https://www.linkedin.com/in/tomasz-mojsiuk/")}),t.on("click",function(){window.open("https://github.com/TomekMojsiuk")}),e.on("click",function(){$("body, html").animate({scrollTop:$("#contact").offset().top},600)})})},function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sectionContact=t.sectionPortfolio=t.sectionAbout=t.copyrightsElement=void 0;var n=e(0);t.copyrightsElement=(()=>{const o=$("header").find(".copyrights"),t=$("footer").find(".copyrights"),e=()=>{window.innerWidth<n.desktopBreakPoint?(o.hide(),t.show()):(t.hide(),o.show())};e(),$(window).resize(function(){e()}),$(window).on("scroll",function(){window.pageYOffset>=500?o.addClass("displayCopyrights"):o.removeClass("displayCopyrights")})}),t.sectionAbout=(()=>{const o=$("#about").find("h2"),t=$("#about").find(".contentbox"),e=$("#about").find(".tech__box");$(window).on("scroll",function(){window.innerWidth>n.desktopBreakPoint&&(window.pageYOffset>700?(o.addClass("display__H2"),t.addClass("content__opacity"),e.addClass("content__opacity")):(o.removeClass("display__H2"),t.removeClass("content__opacity"),e.removeClass("content__opacity")))})}),t.sectionPortfolio=(()=>{const o=$("#portfolio").find("h2"),t=$("#portfolio").find(".projets__box");$(window).on("scroll",function(){window.innerWidth>n.desktopBreakPoint&&(window.pageYOffset>1200?(o.addClass("display__H2"),t.addClass("content__opacity")):(o.removeClass("display__H2"),t.removeClass("content__opacity")))})}),t.sectionContact=(()=>{const o=$("#contact").find("h2"),t=$("#contact").find(".contact__info");$(window).on("scroll",function(){window.innerWidth>n.desktopBreakPoint&&(window.pageYOffset>2e3?(o.addClass("display__H2"),t.addClass("content__opacity")):(o.removeClass("display__H2"),t.removeClass("content__opacity")))})})},function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(()=>{const o=$("nav"),t=$("<div class='arrow--down'></div>");o.append(t);const e=$(".arrow--down");window.addEventListener("scroll",function(){window.pageYOffset>=500?e.css("display","none"):e.css("display","block")}),e.on("click",function(){$("body, html").animate({scrollTop:$("#about").offset().top},600)})})},function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(()=>{const o=$(".main__container"),t=$("<div class='arrow--up'></div>");o.append(t);const e=$(".arrow--up");e.hide(),window.addEventListener("scroll",function(){window.pageYOffset>=500?t.css("display","initial"):t.css("display","none")}),e.on("click",function(){$("body, html").animate({scrollTop:$("header").offset().top},600)})})},function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(()=>{const o=$(".invoice__me").find(".icon"),t=$(".weather__app").find(".icon"),e=(o,t,e)=>{o.each(function(o,n){$(this).on("click",function(){0===n?window.open(t):window.open(e)})})};e(o,"https://github.com/TomekMojsiuk/invoice-generator","https://invoice-me.netlify.com/"),e(t,"https://github.com/TomekMojsiuk/weather-app","https://tm-weather.netlify.com/")})},function(o,t,e){}]);