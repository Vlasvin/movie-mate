"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[276,257],{672:function(n,e,t){t.d(e,{Z:function(){return x}});var r,i,o=t(168),s=t(867),l=s.ZP.ul(r||(r=(0,o.Z)(["\npadding-left: 20px;\ndisplay: flex;\ngap: 10px;\nflex-direction:column"]))),a=s.ZP.li(i||(i=(0,o.Z)(["\n  list-style-type: none;\n  font-size: 18px;\n"]))),c=t(689),d=t(87),p=t(184),x=function(n){var e=n.movies,t=(0,c.TH)();return(0,p.jsx)(l,{children:e.map((function(n){var e,r=null!==(e=n.name)&&void 0!==e?e:n.title;return t.pathname.includes("/movies")?(0,p.jsx)(a,{children:(0,p.jsx)(d.rU,{to:"".concat(n.id),state:{from:t},children:r})},n.id):(0,p.jsx)(a,{children:(0,p.jsxs)(d.rU,{to:"movies/".concat(n.id),state:{from:t},children:[r," "]})},n.id)}))})}},257:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,i,o,s,l,a,c,d,p,x,u,f,h,Z,m,v=t(683),g=t(861),j=t(439),b=t(311),y=t.n(b),P=t(689),w=t(87),k=t(791),_=t(134),z=t(168),U=t(867),S=U.ZP.div(r||(r=(0,z.Z)(["\n  border: 1px solid #ddd;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n"]))),C=U.ZP.button(i||(i=(0,z.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  margin-top: 20px;\n"]))),E=U.ZP.img(o||(o=(0,z.Z)(["\nmargin-left: 20px;"]))),Y=U.ZP.h2(s||(s=(0,z.Z)(["\n  font-size: 30px;\n"]))),q=U.ZP.p(l||(l=(0,z.Z)(["\n  font-size: 18px;\n"]))),A=U.ZP.h3(a||(a=(0,z.Z)([""]))),D=U.ZP.p(c||(c=(0,z.Z)(["\n  font-size: 18px;\n"]))),F=U.ZP.h3(d||(d=(0,z.Z)(["\n  font-weight: bold;\n"]))),I=U.ZP.p(p||(p=(0,z.Z)(["\n  font-size: 18px;\n"]))),O=U.ZP.div(x||(x=(0,z.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),T=U.ZP.p(u||(u=(0,z.Z)(["\n  font-size: 18px;\n  margin-left: 40px;\n"]))),G=U.ZP.ul(f||(f=(0,z.Z)(["\n"]))),H=U.ZP.li(h||(h=(0,z.Z)(["\n  list-style-type: none;\n \n"]))),R=U.ZP.div(Z||(Z=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n"]))),B=U.ZP.div(m||(m=(0,z.Z)(["\n  display: flex;\n"]))),J=t(819),K=t(184),L=function(){var n,e,t=(0,P.UO)().movieId,r=(0,k.useState)(null),i=(0,j.Z)(r,2),o=i[0],s=i[1],l=null!==(n=null===(e=(0,P.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,k.useEffect)((function(){var n=function(){var n=(0,g.Z)(y().mark((function n(){var e,r,i;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=8;break}return n.next=4,(0,J.Y5)(t);case 4:e=n.sent,r=new Date(e.release_date).getFullYear(),i=e.vote_average/10*100,s((0,v.Z)((0,v.Z)({},e),{},{releaseYear:r,percentage:i}));case 8:n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("Error fetching movie details:",n.t0),s(null);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]);return(0,K.jsx)("main",{children:o&&(0,K.jsxs)(S,{children:[(0,K.jsx)(w.rU,{to:l,style:{textDecoration:"none"},children:(0,K.jsxs)(C,{type:"button",children:[(0,K.jsx)(_.kyg,{}),"Go back"]})}),(0,K.jsxs)(B,{children:[(0,K.jsx)(E,{src:o.poster_path?"".concat("https://image.tmdb.org/t/p/w300").concat(o.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/images=1000x700"}),(0,K.jsxs)(R,{children:[(0,K.jsxs)(Y,{children:[o.title," (",o.releaseYear,")"]}),(0,K.jsxs)(q,{children:["User Score: ",o.percentage.toFixed(1),"%"]}),(0,K.jsx)(A,{children:"Overview"}),(0,K.jsx)(D,{children:o.overview}),(0,K.jsx)(F,{children:"Genres"}),(0,K.jsx)(O,{children:o.genres.map((function(n){return(0,K.jsx)(I,{children:n.name},n.id)}))})]})]}),(0,K.jsx)(T,{children:"Additional information"}),(0,K.jsxs)(G,{children:[(0,K.jsx)(H,{children:(0,K.jsx)(w.rU,{to:"cast",children:"Cast"})}),(0,K.jsx)(H,{children:(0,K.jsx)(w.rU,{to:"reviews",children:"Reviews"})})]}),(0,K.jsx)(P.j3,{})]})})}},276:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,i,o,s=t(439),l=t(257),a=t(168),c=t(867),d=c.ZP.form(r||(r=(0,a.Z)(["\n  display: flex;\n  gap: 14px;\n  margin-bottom: 20px;\n"]))),p=c.ZP.input(i||(i=(0,a.Z)(["\n  display: inline-block;\n  width: 500px;\n  height: 40px;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  border-radius: 50px;\n  outline: none;\n  padding-left: 16px;\n  padding-right: 16px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),x=c.ZP.button(o||(o=(0,a.Z)(["\n  background-color: #c2fbd7;\n  border-radius: 50px;\n  border-width: 0;\n  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;\n  color: #008000;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Arial, sans-serif;\n  font-size: 20px;\n  text-align: center;\n  font-weight: bold;\n  height: 40px;\n  padding: 8px 25px;\n  transition: all 200ms;\n  &:hover {\n    background-color: #afe6c3;\n    transform: scale(1.05);\n  }\n"]))),u=t(87),f=t(791),h=t(184),Z=function(n){var e=n.onSubmit,t=(0,u.lr)(),r=(0,s.Z)(t,2),i=r[0],o=r[1],l=(0,f.useState)(""),a=(0,s.Z)(l,2),c=a[0],Z=a[1];return(0,h.jsxs)(d,{onSubmit:function(n){n.preventDefault(),console.log(i),o({query:c}),""!==c.trim()&&e(c)},children:[(0,h.jsx)(p,{type:"text",autoComplete:"off",autoFocus:!0,value:c,onChange:function(n){Z(n.currentTarget.value)}}),(0,h.jsx)(x,{type:"submit",children:"Search"})]})},m=t(672),v=t(689),g=t(819),j=function(){var n=(0,f.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=(0,v.UO)().movieId,o=(0,u.lr)(),a=(0,s.Z)(o,1)[0].get("query")||"";(0,f.useEffect)((function(){}),[i]);return(0,f.useEffect)((function(){a&&(0,g.on)(a).then((function(n){n.results.length>0&&r(n.results)}))}),[a]),(0,h.jsxs)("main",{children:[(0,h.jsx)(Z,{onSubmit:function(n){}}),(0,h.jsx)(m.Z,{movies:t}),(0,h.jsx)(l.default,{movieId:i})]})}}}]);
//# sourceMappingURL=276.ce5413df.chunk.js.map