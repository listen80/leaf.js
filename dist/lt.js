!function(){var e={};function n(r,t){var i;return e[r+=""]?e[r]:((i=document.getElementById(r))&&(t=t||r,r=i.innerHTML),e[t]=function(e){var r=function(e){for(var n="'use strict';var $t=this,$e=$t.$e,$f=$t.$f,$s=$t.$s,$o='';",r=e.split(/\{|\}/),t=0,i=r.length;t<i;t++)n+=t%2==0?a(r[t]):c(r[t]);return n+="return $o;",new Function("$d",n)}(e);return function(e){return r.call(n,e)}}(r))}function r(e){return void 0==e?e="":e+="",e}function t(e){return"$o+="+e+";"}function a(e){return e?t("'"+e.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"):e}function c(e){var n=e.replace(/^\s+|\s+$/,"").split(/\s+/);switch(n.shift()){case"if":e="if("+n.join(" ")+"){";break;case"else":e="}else{";break;case"elif":case"elseif":e="}else if("+n.join(" ")+"){";break;case"/if":e="};";break;case"for":n[0]=n[0]||"$d",n[1]=n[1]||"$v",n[2]=n[2]||"$k",e="$f("+n.shift()+",function("+n.join()+"){";break;case"/for":e="});";break;case"eval":e+=";";break;case"escape":e=t("$e("+n.join(" ")+")");break;case"include":e=t("$t("+n[0]+")("+n[1]+")");break;default:e=t("$s("+e+")")}return e}n.$e=function(e){return r(e).replace(/&(?![\w#]+;)|[<>"']/g,function(e){return{"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"}[e]})},n.$f=function(e,n){var r,t,a=0;if((c=e)&&"number"==typeof c.length)for(r=0,t=e.length;r<t;r++)n.call(e,e[r],r,r);else for(r in e)e.hasOwnProperty(r)&&(n.call(e,e[r],r,a),a++);var c},n.$s=r,"object"==typeof module?module.exports=n:this.lt=n}();