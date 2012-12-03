// jQuery.smoothsnap.js v0.0.1
// http://github.com/shokai/jQuery.smoothsnap
// (c) 2012 Sho Hashimoto <hashimoto@shokai.org>
// The MIT License
(function(e){e.fn.smoothsnap=function(t,n){t||(t=e("body")),typeof n!="function"&&(n=function(e){});var r=this;this.css("-webkit-user-select","none"),this.css("-moz-user-select","none");var i={mouse:{x:null,y:null},target:{x:null,y:null}},s=!1;r.mousedown(function(e){s=!0,i.mouse.x=e.screenX,i.mouse.y=e.screenY,i.target.x=window.scrollX,i.target.y=window.scrollY}),r.mouseup(function(){s=!1,i.mouse.x=null,i.mouse.y=null});var o=function(e){return e>0?Math.exp(e/30):e<0?-1*Math.exp(Math.abs(e)/30):0};return r.mousemove(function(e){if(s){var t=e.screenX-i.mouse.x,n=e.screenY-i.mouse.y;window.scrollTo(i.target.x+o(t),i.target.y+o(n))}}),this}})(jQuery);
