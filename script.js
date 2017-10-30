"use strict";function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var javascriptLocales={copyMessage:"Just wanted to let you know that Satania is always with you! Even inside your clipboard! We are everywhere and you should really join us!\nAlso yes, any website can access your clipboard however they want, isn't that creepy?\nRegardless, Satania is the BEST WAIFU, and you should agree! http://satania.moe/",searchByVoice:"lmao, no one uses this button",searchButton:"but the results are already there =]",searchBar:"this isn't a real search bar",snedHelp:"pls send helppp",perfection:"perfection",searchBarName:"satania",newTab:"Link opens in a new tab."};function copy(){for(var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=window.getSelection(),c=[],d=0;d<b.rangeCount;d++)c[d]=b.getRangeAt(d);b.removeAllRanges();var e=document.createRange(),f=document.createElement("span");f.innerText=a,f.setAttribute("style","position:absolute !important;top:-9999vh !important;opacity:0 !important;height:0 !important;width:0 !important;pointer-events:none !important;z-index:-9999 !important;"),document.body.appendChild(f),e.selectNodeContents(f),b.addRange(e),document.execCommand("copy"),b.removeAllRanges(),document.body.removeChild(f);for(var g=0;g<c.length;g++)b.addRange(c[g])}var copied=!1;document.body.onclick=function(){copied||(copy(javascriptLocales.copyMessage),copied=!0)};function linkOpenInNewTab(a){"A"!==a.tagName||a.newTabHandled||(a.newTabHandled=!0,a.addEventListener("click",function(b){b.preventDefault(),window.open(a.href,"_blank").focus()}),a.addEventListener("mouseover",function(){a.titleBeforeHover=a.title,a.title=javascriptLocales.newTab||"Link opens in a new tab."}),a.addEventListener("mouseout",function(){a.title=a.titleBeforeHover,""===a.title&&a.removeAttribute("title")}))}function refreshLinks(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:document.body;linkOpenInNewTab(a);var b,c=a.getElementsByTagName("a"),d=!0,e=!1;try{for(var f,g,h=c[Symbol.iterator]();!(d=(f=h.next()).done);d=!0)g=f.value,linkOpenInNewTab(g)}catch(a){e=!0,b=a}finally{try{!d&&h.return&&h.return()}finally{if(e)throw b}}}window.onload=function(){refreshLinks();var a=new MutationObserver(function(a){a.forEach(function(a){refreshLinks(a.target)})});a.observe(document.body,{attributes:!0,childList:!0,characterData:!0,subtree:!0})};var _iteratorError2,slideshows=document.getElementsByClassName("slideshow"),preloadedImages=[],_loop=function(a){var b=a.getElementsByTagName("img");a.currentSlide=0,a.getElementsByClassName("source")[0].href=b[0].getAttribute("href"),window.setInterval(function(){b[a.currentSlide].classList.remove("shown"),a.currentSlide=(a.currentSlide+1)%b.length,b[a.currentSlide].classList.add("shown"),a.getElementsByClassName("source")[0].href=b[a.currentSlide].getAttribute("href")},2500);var c,d=!0,e=!1;try{for(var f,g,h=b[Symbol.iterator]();!(d=(f=h.next()).done);d=!0)g=f.value,preloadedImages.push(new Image().src=g.src)}catch(a){e=!0,c=a}finally{try{!d&&h.return&&h.return()}finally{if(e)throw c}}},_iteratorNormalCompletion2=!0,_didIteratorError2=!1;try{for(var _step2,slideshow,_iterator2=slideshows[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0)slideshow=_step2.value,_loop(slideshow)}catch(a){_didIteratorError2=!0,_iteratorError2=a}finally{try{!_iteratorNormalCompletion2&&_iterator2.return&&_iterator2.return()}finally{if(_didIteratorError2)throw _iteratorError2}}var searchbar=document.getElementById("searchbar");searchbar.onclick=function(a){var b=searchbar.getElementsByTagName("span")[0];switch(a.target.id){case"search-by-voice":b.innerText=javascriptLocales.searchByVoice;break;case"search-button":b.innerText=javascriptLocales.searchButton;break;default:b.innerText=javascriptLocales.searchBar;}window.setTimeout(function(){b.innerText=javascriptLocales.searchBarName||"satania"},2e3)};var audioPlayingAtOnce=0;document.getElementById("listen").onclick=function(){var a=new Audio;a.src="perfection.mp3",a.play(),a.addEventListener("ended",function(){audioPlayingAtOnce--,8>audioPlayingAtOnce&&(document.getElementById("definition-name").innerText=javascriptLocales.perfection)}),audioPlayingAtOnce++,10<audioPlayingAtOnce&&(document.getElementById("definition-name").innerText=javascriptLocales.snedHelp)},window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(a){var b,c=(this.document||this.ownerDocument).querySelectorAll(a),d=this;do for(b=c.length;0<=--b&&c.item(b)!==d;);while(0>b&&(d=d.parentElement));return d}),document.getElementById("card-container").onclick=function(a){a.target.closest(".card").classList.toggle("flipped")};var laughKeys=[38,38,40,40,37,39,37,39,66,65],laughPos=0,laughing=!1;document.body.onkeyup=function(a){if(!laughing){var b=a.keyCode;if(b!==laughKeys[laughPos])laughPos=0;else if(laughPos++,laughPos>=laughKeys.length){laughPos=0,laughing=!0;var c=new Audio;c.src="laugh.mp3",c.play(),c.addEventListener("ended",function(){laughing=!1})}}};function getContent(a){return new Promise(function(b,c){var d=new XMLHttpRequest;d.open("GET",a,!0),d.onreadystatechange=function(){if(4===d.readyState){console.log(d.getResponseHeader("content-type"));var a=d.getResponseHeader("content-type").startsWith("application/json")?JSON.parse(d.responseText):d.responseText;d.status.toString().startsWith(2)?b(a):c(a)}},d.onerror=c,d.send()})}function discordInfo(a){return getContent("https://discordapp.com/api/v6/invite/"+a+"?with_counts=true")}function subredditInfo(a){return getContent("https://www.reddit.com/r/"+a+"/about.json")}discordInfo("rC9ebp7").then(function(a){document.getElementById("discord-number").innerText=a.approximate_member_count,document.getElementById("discord-count").style.display="inline-block"}),subredditInfo("satania").then(function(a){document.getElementById("reddit-number").innerText=a.data.subscribers,document.getElementById("reddit-count").style.display="inline-block"});var localeSelect=document.getElementById("locale-select"),options=localeSelect.getElementsByTagName("option"),locales={};window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(a){var b,c=(this.document||this.ownerDocument).querySelectorAll(a),d=this;do for(b=c.length;0<=--b&&c.item(b)!==d;);while(0>b&&(d=d.parentElement));return d});function generateTranslationTable(){"use strict";function a(a,b,c){for(var d,e=0;e<b.length-1;e++)d=b[e],d in a?a=a[d]:(a[d]={},a=a[d]);a[b[b.length-1]]=c}for(var b=document.querySelectorAll("[i18n]"),c={},d=0;d<b.length;d++){for(var e,f=b[d],g=[f.getAttribute("i18n")],h=f.innerHTML;f.closest("[i18n-group]");)e=f.closest("[i18n-group]"),g.unshift(e.getAttribute("i18n-group")),f=e.parentElement;a(c,g,h)}return c._javascriptLocales=javascriptLocales,c}locales.default=generateTranslationTable();function changeLocale(a,b){function c(b,d){for(var e in b)"string"==typeof b[e]?d.querySelector("[i18n="+e+"]")&&("dra"===a&&(b[e]=b[e].toLowerCase(),b[e]=b[e].replace("aa","A"),b[e]=b[e].replace("ah","H"),b[e]=b[e].replace("ei","W"),b[e]=b[e].replace("ey","E"),b[e]=b[e].replace("ii","I"),b[e]=b[e].replace("ir","J"),b[e]=b[e].replace("oo","O"),b[e]=b[e].replace("uu","U"),b[e]=b[e].replace("ur","R"),b[e]=b[e].replace(",","")),d.querySelector("[i18n="+e+"]").innerHTML=b[e]):d.querySelector("[i18n-group="+e+"]")&&c(b[e],d.querySelector("[i18n-group="+e+"]"))}b||changeLocale("default",!0),c(locales[a],document.body),javascriptLocales=locales[a]._javascriptLocales,document.documentElement.lang="default"===a?"en":a,"default"===a?(document.documentElement.lang="en",window.history.pushState("","",window.location.pathname)):(document.documentElement.lang=a,window.location.hash=a)}var _iteratorError3,_loop2=function(a){if("default"!==a.value){var b=new XMLHttpRequest;b.open("GET","locale/"+a.value+".json",!0),b.onreadystatechange=function(){if(4===b.readyState&&200===b.status){var c=JSON.parse(b.responseText);locales[a.value]=c,a.disabled=!1,window.location.hash.replace(/^\#/g,"")===a.value&&(changeLocale(a.value),localeSelect.value=a.value)}},b.send()}},_iteratorNormalCompletion3=!0,_didIteratorError3=!1;try{for(var _step3,option,_iterator3=options[Symbol.iterator]();!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0)option=_step3.value,_loop2(option)}catch(a){_didIteratorError3=!0,_iteratorError3=a}finally{try{!_iteratorNormalCompletion3&&_iterator3.return&&_iterator3.return()}finally{if(_didIteratorError3)throw _iteratorError3}}localeSelect.onchange=function(a){changeLocale(a.target.value)};function prettyYAML(a){return a.replace(/^(\S.*)$/gm,"\n$1").replace(/\r\n|\r|\n/g,"\r\n")}document.getElementById("download").onclick=function(){var a=document.createElement("A"),b="yaml"===formatSelect.value;a.href=URL.createObjectURL(new Blob([b?prettyYAML(jsyaml.safeDump(locales.default)):JSON.stringify(locales.default,null,"\t")],{type:b?" application/x-yaml":"application/json"})),a.download=b?"locale.yaml":"locale.json",document.body.appendChild(a),a.click(),document.body.removeChild(a)};function selectFile(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return new Promise(function(b){var c=document.createElement("input");c.type="file",c.accept=a.accept||"",c.multiple=a.multiple||!1,c.webkitdirectory=a.directory||!1,c.setAttribute("style","position:absolute !important;top:-9999vh !important;opacity:0 !important;height:0 !important;width:0 !important; z-index:-9999 !important;"),document.body.appendChild(c),c.click(),c.onchange=function(){var d=c.files;document.body.removeChild(c),("undefined"==typeof a.array||a.array)&&(d=Array.apply(void 0,_toConsumableArray(d))),b(d)}})}function blobToString(a){return new Promise(function(b,c){var d=new FileReader;d.addEventListener("loadend",function(a){return b(a.target.result)}),d.addEventListener("error",c),d.readAsText(a)})}function loadScript(a){return new Promise(function(b,c){var d=document.createElement("script");d.src=a,d.onload=b,d.onerror=c,document.head.appendChild(d)})}var formatSelect=document.getElementById("format");document.getElementById("upload").onclick=function(){formatSelect.disabled||selectFile({accept:".json, .yaml"}).then(function(a){blobToString(a[0]).then(function(b){console.log(a[0].type),locales["translator-mode"]="application/json"===a[0].type?JSON.parse(b):jsyaml.safeLoad(b),changeLocale("translator-mode")})})},"#translator-mode"===window.location.hash&&loadScript("https://cdn.rawgit.com/nodeca/js-yaml/bee7e998/dist/js-yaml.min.js").then(function(){formatSelect.disabled=!1}).catch(function(){formatSelect.disabled=!1,formatSelect.value="json",document.getElementById("yaml").disabled=!0});