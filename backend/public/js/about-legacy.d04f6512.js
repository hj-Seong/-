"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[443],{926:function(t,e,n){n.r(e),n.d(e,{default:function(){return i}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("메모")]),t._l(t.memo,(function(e,r){return n("table",{key:r},[n("tr",[n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.writer))]),n("td",{on:{click:function(n){return t.$router.push("/about/"+e.id)}}},[t._v(t._s(e.title))])])])}))],2)},u=[],a={created(){this.$http.get("/api/memo").then((t=>{console.log(t.data),this.memo=t.data}))},data(){return{memo:[]}}},o=a,l=n(1),s=(0,l.Z)(o,r,u,!1,null,null,null),i=s.exports}}]);
//# sourceMappingURL=about-legacy.d04f6512.js.map