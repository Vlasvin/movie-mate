"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{476:function(e,t,n){n.d(t,{Y5:function(){return f},k1:function(){return i},oO:function(){return v},on:function(){return o},y:function(){return d}});var r=n(861),a=n(757),c=n.n(a),u=n(294);function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},387:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r,a,c,u,i=n(439),s=n(689),o=n(766),p=n(867),f=p.ZP.ul(r||(r=(0,o.Z)(["\nmax-width: 1440px;"]))),h=p.ZP.li(a||(a=(0,o.Z)(["\n  list-style-type: none;\n"]))),d=p.ZP.h4(c||(c=(0,o.Z)([""]))),l=p.ZP.p(u||(u=(0,o.Z)([""]))),v=n(791),g=n(476),w=n(184),b=function(){var e=(0,s.UO)().movieId,t=(0,v.useState)([]),n=(0,i.Z)(t,2),r=n[0],a=n[1];return(0,v.useEffect)((function(){e&&(0,g.oO)(e).then((function(e){e.results&&e.results.length>0&&a(e.results)}))}),[e]),(0,w.jsx)("div",{children:(0,w.jsx)(f,{children:r.length>0?r.map((function(e){return(0,w.jsxs)(h,{children:[(0,w.jsxs)(d,{children:["Author: ",e.author]}),(0,w.jsx)(l,{children:e.content})]},e.id)})):(0,w.jsx)(h,{children:"We don't have any reviews for this movie."},"no-reviews")})})}}}]);
//# sourceMappingURL=387.bcd20967.chunk.js.map