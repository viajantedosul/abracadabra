"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_diffs_blob-lines_ts-app_assets_modules_github_diffs_linkable-line-n-ed3f24"],{56334:(e,t,n)=>{function i(e){let t=e.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);if(t){if(1===t.length){let e=a(t[0]);if(!e)return;return Object.freeze({start:e,end:e})}if(2!==t.length)return;{let e=a(t[0]),n=a(t[1]);if(!e||!n)return;return f(Object.freeze({start:e,end:n}))}}}function l(e){let{start:t,end:n}=f(e);return null!=t.column&&null!=n.column?`L${t.line}C${t.column}-L${n.line}C${n.column}`:null!=t.column?`L${t.line}C${t.column}-L${n.line}`:null!=n.column?`L${t.line}-L${n.line}C${n.column}`:t.line===n.line?`L${t.line}`:`L${t.line}-L${n.line}`}function r(e){let t=e.match(/(file-.+?-)L\d+?/i);return t?t[1]:""}function s(e){let t=i(e),n=r(e);return{blobRange:t,anchorPrefix:n}}function o({anchorPrefix:e,blobRange:t}){return t?`#${e}${l(t)}`:"#"}function a(e){let t=e.match(/L(\d+)/),n=e.match(/C(\d+)/);return t?Object.freeze({line:parseInt(t[1]),column:n?parseInt(n[1]):null}):null}function c(e,t){let[n,i]=u(e.start,!0,t),[l,r]=u(e.end,!1,t);if(!n||!l)return;let s=i,o=r;if(-1===s&&(s=0),-1===o&&(o=l.childNodes.length),!n.ownerDocument)throw Error("DOMRange needs to be inside document");let a=n.ownerDocument.createRange();return a.setStart(n,s),a.setEnd(l,o),a}function u(e,t,n){let i=[null,0],l=n(e.line);if(!l)return i;if(null==e.column)return[l,-1];let r=e.column-1,s=d(l);for(let e=0;e<s.length;e++){let n=s[e],i=r-(n.textContent||"").length;if(0===i){let i=s[e+1];if(t&&i)return[i,0];return[n,r]}if(i<0)return[n,r];r=i}return i}function d(e){if(e.nodeType===Node.TEXT_NODE)return[e];if(!e.childNodes||!e.childNodes.length)return[];let t=[];for(let n of e.childNodes)t=t.concat(d(n));return t}function f(e){let t=[e.start,e.end];return(t.sort(h),t[0]===e.start&&t[1]===e.end)?e:Object.freeze({start:t[0],end:t[1]})}function h(e,t){return e.line===t.line&&e.column===t.column?0:e.line===t.line&&"number"==typeof e.column&&"number"==typeof t.column?e.column-t.column:e.line-t.line}n.d(t,{Dw:()=>o,G5:()=>i,M9:()=>c,n6:()=>s})},57088:(e,t,n)=>{var i=n(56334),l=n(76745),r=n(69567),s=n(81574),o=n(36071),a=n(59753),c=n(95253),u=n(11445);let d=!1;function f(e,t){return document.querySelector(`#${e}LC${t}`)}function h({blobRange:e,anchorPrefix:t}){let n=document.querySelectorAll(".js-file-line");if(0!==n.length&&(m(),e)){if(null===e.start.column||null===e.end.column)for(let n=e.start.line;n<=e.end.line;n+=1){let e=f(t,n);e&&e.classList.add("highlighted")}else if(e.start.line===e.end.line&&null!=e.start.column&&null!=e.end.column){let n=(0,i.M9)(e,e=>f(t,e));if(n){let e=document.createElement("span");e.classList.add("highlighted"),(0,u.v)(n,e)}}}}function m(){for(let e of document.querySelectorAll(".js-file-line.highlighted"))e.classList.remove("highlighted");for(let e of document.querySelectorAll(".js-file-line .highlighted")){let t=e.closest(".js-file-line");e.replaceWith(...e.childNodes),t.normalize()}}function g(){let e=(0,i.n6)(window.location.hash);h(e),E();let{blobRange:t,anchorPrefix:n}=e,l=t&&f(n,t.start.line);if(!d&&l){l.scrollIntoView();let e=l.closest(".blob-wrapper, .js-blob-wrapper");e.scrollLeft=0}d=!1}function b(e){let t=[];for(let n of e)t.push(n.textContent);let n=document.getElementById("js-copy-lines");if(n instanceof l.Z){n.textContent=`Copy ${1===e.length?"line":"lines"}`,n.value=t.join("\n");let i=`Blob, copyLines, numLines:${e.length.toString()}`;n.setAttribute("data-ga-click",i)}}function p(e){let t=document.querySelector(".js-permalink-shortcut");if(t instanceof HTMLAnchorElement){let n=`${t.href}${window.location.hash}`,i=document.getElementById("js-copy-permalink");if(i instanceof l.Z){i.value=n;let t=`Blob, copyPermalink, numLines:${e.toString()}`;i.setAttribute("data-ga-click",t)}return n}}function L(e,t){let n=document.getElementById("js-new-issue");if(n instanceof HTMLAnchorElement){if(!n.href)return;let i=new URL(n.href,window.location.origin),l=new URLSearchParams(i.search);l.set("permalink",e),i.search=l.toString(),n.href=i.toString(),n.setAttribute("data-ga-click",`Blob, newIssue, numLines:${t.toString()}`)}}function w(e,t){let n=document.getElementById("js-new-discussion");if(!(n instanceof HTMLAnchorElement)||!n?.href)return;let i=new URL(n.href,window.location.origin),l=new URLSearchParams(i.search);l.set("permalink",e),i.search=l.toString(),n.href=i.toString(),n.setAttribute("data-ga-click",`Blob, newDiscussion, numLines:${t.toString()}`)}function y(e){let t=document.getElementById("js-view-git-blame");t&&t.setAttribute("data-ga-click",`Blob, viewGitBlame, numLines:${e.toString()}`)}function E(){let e=document.querySelector(".js-file-line-actions");if(!e)return;let t=document.querySelectorAll(".js-file-line.highlighted"),n=t[0];if(n){b(t),y(t.length);let i=p(t.length);i&&L(i,t.length),i&&w(i,t.length),e.style.top=`${n.offsetTop-2}px`,e.classList.remove("d-none")}else e.classList.add("d-none")}function S(e){let t=window.scrollY;d=!0,e(),window.scrollTo(0,t)}(0,s.Z)(function(){if(document.querySelector(".js-file-line-container")){setTimeout(g,0);let e=window.location.hash;for(let t of document.querySelectorAll(".js-update-url-with-hash"))if(t instanceof HTMLAnchorElement)t.hash=e;else if(t instanceof HTMLFormElement){let n=new URL(t.action,window.location.origin);n.hash=e,t.action=n.toString()}}}),(0,a.on)("click",".js-line-number",function(e){let t=(0,i.n6)(e.currentTarget.id),{blobRange:n}=t,l=(0,i.G5)(window.location.hash);l&&e.shiftKey&&(t.blobRange={start:l.start,end:n.end}),S(()=>{window.location.hash=(0,i.Dw)(t)})}),(0,a.on)("submit",".js-jump-to-line-form",function(e){let t=e.currentTarget.querySelector(".js-jump-to-line-field"),n=t.value.replace(/[^\d-]/g,""),i=n.split("-").map(e=>parseInt(e,10)).filter(e=>e>0).sort((e,t)=>e-t);i.length&&(window.location.hash=`L${i.join("-L")}`),e.preventDefault()}),(0,o.N7)(".js-check-bidi",A);let v=/[\u202A-\u202E]|[\u2066-\u2069]/,j={"\u202A":"U+202A","\u202B":"U+202B","\u202C":"U+202C","\u202D":"U+202D","\u202E":"U+202E","\u2066":"U+2066","\u2067":"U+2067","\u2068":"U+2068","\u2069":"U+2069"};function T(e,t){if(e.nodeType===Node.TEXT_NODE)return _(e,t);if(!e.childNodes||!e.childNodes.length)return!1;let n=!1;for(let i of e.childNodes)if(n||(n=T(i,t)),n&&!t)break;return n}function _(e,t){let n=!1;if(e.nodeValue)for(let i=e.nodeValue.length-1;i>=0;i--){let l=e.nodeValue.charAt(i);if(j[l]){if(n=!0,!t)break;let s=new r.R(t,{revealedCharacter:j[l]}),o=new Range;o.setStart(e,i),o.setEnd(e,i+1),o.deleteContents(),o.insertNode(s)}}return n}function A(e){let t=!1,n=performance.now(),i=e.textContent||"";if(v.test(i)){let n=e.querySelectorAll(".diff-table .blob-code-inner, .js-file-line-container .js-file-line, .js-suggested-changes-blob .blob-code-inner"),i=document.querySelector(".js-line-alert-template"),l=document.querySelector(".js-revealed-character-template");for(let s of n)if(T(s,l)&&(t=!0,i)){let t=new r.R(i,{});"before"===e.getAttribute("data-line-alert")?s.before(t):s.after(t)}}let l=performance.now()-n,s={durationMs:l.toString(),result:t.toString()};if((0,c.q)("blob_js_check_bidi_character",s),t){let t=document.querySelector(".js-file-alert-template");if(t){let n=new URL(window.location.href,window.location.origin);"1"===n.searchParams.get("h")?n.searchParams.delete("h"):n.searchParams.set("h","1");let i=new r.R(t,{revealButtonHref:n.href});e.prepend(i)}}e.classList.remove("js-check-bidi")}let k=class CodeListingLine{range(e,t){e=isNaN(e)?0:e,t=isNaN(t)?0:t;let n=null,i=0,l=0;for(let[r,s]of this.lineElement.childNodes.entries()){let o=(s.textContent||"").length;if(o>e&&!n&&(n=s,i=r),o>=t){l=r;break}e-=o,t-=o}let r=document.createRange();if(i===l){for(;n&&"#text"!==n.nodeName;)n=n.childNodes[0];if(!n)return null;r.setStart(n,e),r.setEnd(n,t)}else r.setStart(this.lineElement,i),r.setEnd(this.lineElement,l+1);return r}constructor(e,t){this.lineElement=e,this.numberElement=t}},$=class CodeListing{findLine(e){if(!e)return null;let t=this.container.querySelector(`.js-blob-rnum[data-line-number='${e}']`);if(!t)return null;let n=t.nextElementSibling;return n&&n.classList.contains("js-file-line")?(n=n.querySelector(".js-code-nav-pass")||n,new k(n,t)):null}constructor(e){this.container=e}},N=new WeakMap;function C(e){if(!e)return;let t=e.closest(".js-blob-code-container, .js-file-content"),n=e.querySelector(".js-codeowners-error-tooltip-template"),i=e.querySelector(".js-codeowners-error-line-alert-template");if(!t||!n||!i)return;let l=t.querySelector("deferred-diff-lines");if(l?.isAwaitingHighlight())return;let s=e.querySelectorAll(".js-codeowners-error"),o=new $(t);for(let e of s){if(N.get(e))continue;let t=e.getAttribute("data-line"),l=e.getAttribute("data-kind"),s=e.getAttribute("data-suggestion"),a=parseInt(e.getAttribute("data-start-offset")||"",10),c=parseInt(e.getAttribute("data-end-offset")||"",10),u=o.findLine(t),d=u?.range(a,c);if(!u||!d)continue;let f=l;s&&(f+=`: ${s}`);let h=document.createElement("SPAN");h.className="error-highlight",d.surroundContents(h);let m=new r.R(n,{message:f}).firstElementChild;d.surroundContents(m);let g=new r.R(i,{});u.numberElement.appendChild(g),N.set(e,!0)}}(0,o.N7)(".js-codeowners-errors",C),(0,a.on)("expander:expanded",".js-file",function(e){if(!e.target||!(e.target instanceof HTMLElement))return;let t=e.target.querySelector(".js-codeowners-errors");C(t)}),(0,a.on)("deferred-highlight:applied","deferred-diff-lines",function(e){if(!e.target||!(e.target instanceof HTMLElement))return;let t=e.target.closest(".js-file"),n=t?.querySelector(".js-codeowners-errors");C(n)})},37574:(e,t,n)=>{n.d(t,{s:()=>i});function i(e){let t=e.match(/^#?(diff-[a-f0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);if(null!=t&&6===t.length)return t;let n=e.match(/^#?(discussion-diff-[0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);return null!=n&&6===n.length?n:null}},47851:(e,t,n)=>{n.d(t,{MO:()=>L,vu:()=>m,Oz:()=>b});var i=n(87098);let l=class DiffPosition{sideForCommenting(){return this.element&&this.element.classList.contains("blob-num-context")?"right":({R:"right",L:"left"})[this.side]}isContext(){return!!this.element&&this.element.classList.contains("blob-num-context")}anchor(){return`${this.diffId}${this.anchorSuffix()}`}anchorSuffix(){return`${this.side}${this.lineNumber}`}is(e){return this.diffId===e.diffId&&this.side===e.side&&this.lineNumber===e.lineNumber}constructor(e,t,n){this.diffId=e,this.side=t,this.lineNumber=n,this.element=(0,i.Q)(document,this.anchor())}};let DiffRange=class DiffRange{anchor(){let e=[];return e.push(this.start.anchor()),this.start.is(this.end)||e.push(this.end.anchorSuffix()),e.join("-")}parse(){if(!this.diffTable)return;let e=this.unify(this.diffTable.querySelectorAll(".js-linkable-line-number"));e=this.filterInRange(e),this.lineCount=e.length,this.elements=this.expandRelatedElements(e),this._commentOutsideTheDiff=this.diffTable.classList.contains("js-comment-outside-the-diff"),this.isParsed=!0}unify(e){if(!this.isSplit)return Array.from(e);let t=[],n=[],i=[];for(let l of e)l.classList.contains("blob-num-addition")?n.push(l):l.classList.contains("blob-num-deletion")?i.push(l):(t.push(...i,...n,l),n=[],i=[]);return t.push(...i,...n),t}filterInRange(e){if(!this.start.element||!this.end.element)return[];let t=e.indexOf(this.start.element),n=e.indexOf(this.end.element);if(t>n){[t,n]=[n,t];let[e,i]=[this.end,this.start];this.start=e,this.end=i}return e.slice(t,n+1)}isContextOnly(){return this.isParsed||this.parse(),this._isContextOnly}isAcrossHunks(){return this.isParsed||this.parse(),this._isAcrossHunks}includesExpandedLine(){return this.isParsed||this.parse(),this._includesExpandedLine}commentOutsideTheDiffEnabled(){return this.isParsed||this.parse(),this._commentOutsideTheDiff}rows(){return this.isParsed||this.parse(),this._rows}expandRelatedElements(e){let t=this.isSplit,n=e[0],i=e[e.length-1];if(n&&i){let e=n.closest("[data-hunk]"),t=i.closest("[data-hunk]");if(e&&t){let n=e.getAttribute("data-hunk"),i=t.getAttribute("data-hunk");n!==i&&(this._isAcrossHunks=!0)}}let l=(e,n)=>{!this._includesExpandedLine&&n.closest(".blob-expanded")&&(this._includesExpandedLine=!0);let i=n.parentElement;i instanceof HTMLElement&&this._rows.add(i);let l=n.classList.contains("blob-num-deletion")||n.classList.contains("blob-num-addition");if(l&&(this._isContextOnly=!1),!i)return e;if(t&&l){let t=Array.from(i.children).indexOf(n);return t<2?e.add(i.children[0]).add(i.children[1]):e.add(i.children[2]).add(i.children[3])}for(let t of Array.from(i.children))e.add(t);return e};return e.reduce(l,new Set)}constructor(e,t,n,i,r){this.elements=new Set,this.isParsed=!1,this.isSplit=!1,this._rows=new Set,this._isAcrossHunks=!1,this._isContextOnly=!0,this._includesExpandedLine=!1,this._commentOutsideTheDiff=!1,this.diffId=e,this.diffTable=document.querySelector(`.js-diff-table[data-diff-anchor="${e}"]`),this.diffTable&&(this.isSplit=this.diffTable.classList.contains("js-file-diff-split")),this.start=new l(e,t,n),this.end=new l(e,i,r),this.lineCount=0,this.parse()}};var r=n(81574),s=n(37574),o=n(36071),a=n(59753),c=n(29764);let u=null,d=null,f=!1,h=null;function m(){return u}function g(e){return!!e.closest(".js-multi-line-comments-enabled")}function b(e,t){if(!g(e))return!1;let{start:{lineNumber:n},end:{lineNumber:i}}=t;return!(n===i&&t.isContextOnly()||!t.commentOutsideTheDiffEnabled()&&(t.isAcrossHunks()||t.includesExpandedLine()))}function p(e){return e.closest(".js-diff-table").classList.contains("is-selecting")}function L(){window.history.replaceState(null,"","#"),N()}function w(e,t){let n=e.id;if(t){let t=(0,s.s)(n);if(!t)return;let i=t[1],l=t[2],r=t[3];if(u&&u.diffId===i){if(l===u.start.side&&r<u.start.lineNumber)return;let t=new DiffRange(i,u.start.side,u.start.lineNumber,l,+r);n=t.anchor();let s=e.closest(".js-file-content[data-hydro-view]");if(s instanceof HTMLElement&&C(s,t),f&&p(e)){let n=e.closest(".js-diff-table");n.classList.toggle("is-commenting",b(e,t))}d=function(){if(b(e,t)){let n=t.end.sideForCommenting(),i=`.js-add-line-comment[data-side="${n}"]`,l=e.closest("tr").querySelector(i);l&&t&&l.click()}}}}window.history.replaceState(null,"",`#${n}`),N()}function y(e){if(!(e instanceof HTMLElement))return null;if(e.classList.contains("js-linkable-line-number"))return e;let t=e.previousElementSibling;return t?y(t):null}function E(e){!u||e.target.closest(".js-diff-table")||(window.history.replaceState(null,"","#"),N())}function S(){if(!h)return;w(h,!1);let e=h.closest(".js-diff-table");h=null,e.classList.add("is-selecting"),e.classList.add("is-commenting"),document.addEventListener("mouseup",function(t){e.classList.remove("is-selecting"),e.classList.remove("is-selecting","is-commenting"),d&&d(),d=null,A(e),t.preventDefault()},{once:!0})}function v(e){let t=y(e);t&&p(t)&&w(t,!0)}function j(e){p(e)&&w(e,!0)}function T(e){let t=e.target;if(!(t instanceof Element))return;h&&S();let n=t.closest(".blob-code, .js-linkable-line-number");if(n){if(n.classList.contains("blob-code"))return v(n);n.classList.contains("js-linkable-line-number")&&j(n)}}function _(e){e.addEventListener("mouseenter",T,{capture:!0})}function A(e){f=!1,e.removeEventListener("mouseenter",T,{capture:!0}),setTimeout(()=>{document.addEventListener("click",E,{once:!0})},0)}function k(){if(!u)return;for(let e of u.elements)e.classList.add("selected-line");let e=[],t=[],n=[],i=[];for(let l of u.rows()){let[r,s,o,a]=l.children;e.push(r),t.push(s),n.push(o),i.push(a)}function l(e){for(let[t,n]of e.entries()){if(n.classList.contains("empty-cell"))continue;let i=e[t-1];i&&i.classList.contains("selected-line")||n.classList.add("selected-line-top");let l=e[t+1];l&&l.classList.contains("selected-line")||n.classList.add("selected-line-bottom")}}for(let[r,s]of(l(e),l(t),l(n),l(i),t.entries()))i[r].classList.contains("selected-line")||s.classList.add("selected-line-right");for(let[e,i]of n.entries())t[e].classList.contains("selected-line")||i.classList.add("selected-line-left")}function $(){if(!u)return;for(let e of u.elements)e.classList.add("selected-line");let e=Array.from(u.rows()),t=e[0];for(let e of t.children)e.classList.add("selected-line-top");let n=e[e.length-1];for(let e of n.children)e.classList.add("selected-line-bottom")}function N(){if(u){for(let e of u.elements)e.classList.remove("selected-line","selected-line-top","selected-line-bottom","selected-line-left","selected-line-right");u=null}let e=(0,s.s)(window.location.hash);if(!e)return;let t=e[1],n=e[2],i=e[3],l=e[4]||n,r=e[5]||i;u=new DiffRange(t,n,+i,l,+r);let o=Array.from(u.elements),a=o[0];a&&(a.closest(".js-diff-table").classList.contains("file-diff-split")?k():$())}function C(e,t){let n={starting_diff_position:t.start.side+t.start.lineNumber,ending_diff_position:t.end.side+t.end.lineNumber,line_count:t.lineCount};e.setAttribute("data-hydro-client-context",JSON.stringify(n)),(0,c.Fk)(e)}(0,a.on)("mousedown",".js-add-line-comment",function(e){if(!(e instanceof MouseEvent)||0!==e.button)return;let t=e.target.parentElement;if(!t||!g(e.target))return;let n=y(t);if(!n)return;let i=e.target.closest(".js-diff-table");_(i),h=n,f=!0,e.target.addEventListener("mouseup",function(){A(i),h=null,f=!1},{once:!0}),u&&u.lineCount>1&&e.preventDefault()}),(0,a.on)("mousedown",".js-linkable-line-number",function(e){if(!(e instanceof MouseEvent)||0!==e.button)return;let t=e.target;if(!(t instanceof Element))return;let n=t.closest(".js-diff-table");n.classList.add("is-selecting"),_(n),document.addEventListener("mouseup",function(){t.closest(".js-diff-table").classList.remove("is-selecting"),A(n)},{once:!0}),w(t,e instanceof MouseEvent&&e.shiftKey),e.preventDefault()}),(0,r.Z)(N),(0,o.N7)(".blob-expanded",N),(0,o.N7)(".js-diff-progressive-loader",function(e){e.addEventListener("load",N)}),(0,o.N7)(".js-diff-entry-loader",function(e){e.addEventListener("load",N)})},99874:(e,t,n)=>{var i=n(59753);(0,i.on)("click",".js-rich-diff.collapsed .js-expandable",function(e){if(!(e.target instanceof Element))return;e.preventDefault();let t=e.target.closest(".js-rich-diff");t.classList.remove("collapsed")}),(0,i.on)("click",".js-show-rich-diff",function(e){let t=e.currentTarget.closest(".js-warn-no-visible-changes");if(!t)return;t.classList.add("d-none");let n=t.parentElement,i=n.querySelector(".js-no-rich-changes");i&&i.classList.remove("d-none")})},29764:(e,t,n)=>{n.d(t,{$S:()=>l,Fk:()=>r,sz:()=>s});var i=n(71643);function l(e,t,n){let l={hydroEventPayload:e,hydroEventHmac:t,visitorPayload:"",visitorHmac:"",hydroClientContext:n},r=document.querySelector("meta[name=visitor-payload]");r instanceof HTMLMetaElement&&(l.visitorPayload=r.content);let s=document.querySelector("meta[name=visitor-hmac]")||"";s instanceof HTMLMetaElement&&(l.visitorHmac=s.content),(0,i.b)(l,!0)}function r(e){let t=e.getAttribute("data-hydro-view")||"",n=e.getAttribute("data-hydro-view-hmac")||"",i=e.getAttribute("data-hydro-client-context")||"";l(t,n,i)}function s(e){let t=e.getAttribute("data-hydro-click-payload")||"",n=e.getAttribute("data-hydro-click-hmac")||"",i=e.getAttribute("data-hydro-client-context")||"";l(t,n,i)}},254:(e,t,n)=>{n.d(t,{ZG:()=>o,q6:()=>c,w4:()=>a});var i=n(8439);let l=!1,r=new i.Z;function s(e){let t=e.target;if(t instanceof HTMLElement&&t.nodeType!==Node.DOCUMENT_NODE)for(let e of r.matches(t))e.data.call(null,t)}function o(e,t){l||(l=!0,document.addEventListener("focus",s,!0)),r.add(e,t),document.activeElement instanceof HTMLElement&&document.activeElement.matches(e)&&t(document.activeElement)}function a(e,t,n){function i(t){let l=t.currentTarget;l&&(l.removeEventListener(e,n),l.removeEventListener("blur",i))}o(t,function(t){t.addEventListener(e,n),t.addEventListener("blur",i)})}function c(e,t){function n(e){let{currentTarget:i}=e;i&&(i.removeEventListener("input",t),i.removeEventListener("blur",n))}o(e,function(e){e.addEventListener("input",t),e.addEventListener("blur",n)})}},11445:(e,t,n)=>{n.d(t,{v:()=>i});function i(e,t){t.appendChild(e.extractContents()),e.insertNode(t)}},97629:(e,t,n)=>{function i(e){return e.offsetWidth<=0&&e.offsetHeight<=0}function l(e){return!i(e)}n.d(t,{Z:()=>l})},89359:(e,t,n)=>{function i(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function l(){let e=i("meta[name=analytics-location]");return e?e.content:window.location.pathname}function r(){let e=i("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=i("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}function s(){return`${window.location.protocol}//${window.location.host}${l()+r()}`}n.d(t,{S:()=>s})},24601:(e,t,n)=>{n.d(t,{aJ:()=>S,cI:()=>w,eK:()=>g});var i=n(82918),l=n(83314),r=n(28382),s=n(89359),o=n(68202),a=n(53729),c=n(86283);let u=!1,d=0,f=Date.now(),h=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function m(e){return!!("AbortError"===e.name||"TypeError"===e.name&&h.has(e.message)||e.name.startsWith("ApiError")&&h.has(e.message))}function g(e,t={}){m(e)||b(L(p(e),t))}async function b(e){if(!j())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(E(e.error.stacktrace)){u=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function p(e){return{type:e.name,value:e.message,stacktrace:w(e)}}function L(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,s.S)()||window.location.href,readyState:document.readyState,referrer:(0,o.wP)(),timeSinceLoad:Math.round(Date.now()-f),user:S()||void 0,bundler:a.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function w(e){return(0,r.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let y=/(chrome|moz|safari)-extension:\/\//;function E(e){return e.some(e=>y.test(e.filename)||y.test(e.function))}function S(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,i.b)();return`anonymous-${t}`}let v=!1;function j(){return!v&&!u&&d<10&&(0,l.Gb)()}if(c.iG?.addEventListener("pageshow",()=>v=!1),c.iG?.addEventListener("pagehide",()=>v=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{g(e.data.error)})}},95253:(e,t,n)=>{let i;n.d(t,{Y:()=>f,q:()=>h});var l=n(88149),r=n(86058),s=n(44544),o=n(71643);let{getItem:a}=(0,s.Z)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,l.n)("octolytics");delete e.baseContext,i=new r.R(e)}catch(e){}function d(e){let t=(0,l.n)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");if(n){let e=JSON.parse(atob(n.content));Object.assign(t,e)}let i=new URLSearchParams(window.location.search);for(let[e,n]of i)u.includes(e.toLowerCase())&&(t[e]=n);return t.staff=(0,o.B)().toString(),Object.assign(t,e)}function f(e){i?.sendPageView(d(e))}function h(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,l=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(l[e]=`${n}`);i&&(d(l),i.sendEvent(e||"unknown",d(l)))}},56959:(e,t,n)=>{n.d(t,{RB:()=>i,qC:()=>l,w0:()=>Subscription});let Subscription=class Subscription{constructor(e){this.closed=!1,this.unsubscribe=()=>{e(),this.closed=!0}}};function i(e,t,n,i={capture:!1}){return e.addEventListener(t,n,i),new Subscription(()=>{e.removeEventListener(t,n,i)})}function l(...e){return new Subscription(()=>{for(let t of e)t.unsubscribe()})}},7180:(e,t,n)=>{n.d(t,{O:()=>o,d:()=>TrustedTypesPolicyError});var i=n(46426),l=n(71643),r=n(24601);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};function s({policy:e,policyName:t,fallback:n,fallbackOnError:s=!1}){try{if((0,i.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;return e()}catch(e){if(e instanceof TrustedTypesPolicyError||((0,r.eK)(e),(0,l.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!s))throw e}return n}let o={apply:s}}}]);
//# sourceMappingURL=app_assets_modules_github_diffs_blob-lines_ts-app_assets_modules_github_diffs_linkable-line-n-ed3f24-270623450810.js.map