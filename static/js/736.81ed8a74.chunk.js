"use strict";(self.webpackChunkmovie_mate=self.webpackChunkmovie_mate||[]).push([[736],{476:function(e,t,n){n.d(t,{Y5:function(){return d},k1:function(){return p},oO:function(){return x},on:function(){return o},y:function(){return f}});var r=n(861),a=n(687),i=n.n(a),c=n(294);function p(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function o(e){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},736:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r,a,i,c,p,u=n(439),o=n(766),s=n(867),d=s.ZP.ul(r||(r=(0,o.Z)(["\n  max-width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  @media (max-width: 1440px) {\n    max-width: 1440px;\n  }\n  @media (max-width: 378px) {\n    justify-content: center;\n  }\n"]))),h=s.ZP.li(a||(a=(0,o.Z)(["\n  list-style-type: none;\n  width: 200px;\n  max-height: none;\n  border: 1px solid #ddd;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 10px;\n\n  @media (max-width: 1440px) {\n    width: 120px;\n    max-height: 320px;\n  }\n  @media (max-width: 378px) {\n    width: 150px;\n  }\n"]))),f=s.ZP.img(i||(i=(0,o.Z)(["\n  border: 2px solid #ddd;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  width: 100%;\n  min-height: 180px;\n"]))),l=s.ZP.p(c||(c=(0,o.Z)([""]))),x=s.ZP.p(p||(p=(0,o.Z)([""]))),m=n(689),v=n(791),g=n(476),w=n(184),b=function(){var e=(0,m.UO)().movieId,t=(0,v.useState)([]),n=(0,u.Z)(t,2),r=n[0],a=n[1];return(0,v.useEffect)((function(){e&&(0,g.y)(e).then((function(e){e.cast.length>0&&a(e.cast)}))}),[e]),(0,w.jsx)("div",{children:(0,w.jsx)(d,{children:r.map((function(e){return(0,w.jsxs)(h,{children:[(0,w.jsx)(f,{src:e.profile_path?"".concat("https://image.tmdb.org/t/p/w200").concat(e.profile_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/images=300x200",alt:""}),(0,w.jsx)(l,{children:e.name}),(0,w.jsxs)(x,{children:["Character: ",e.character]})]},e.id)}))})})}}}]);
//# sourceMappingURL=736.81ed8a74.chunk.js.map