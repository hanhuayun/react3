(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{171:function(e,t,n){e.exports=n.p+"static/media/1.88d5d6e8.jpg"},172:function(e,t,n){e.exports=n.p+"static/media/2.f6aabf6b.jpg"},173:function(e,t,n){e.exports=n.p+"static/media/3.60b47325.jpg"},174:function(e,t,n){e.exports=n.p+"static/media/4.1a95720d.jpg"},175:function(e,t,n){e.exports=n.p+"static/media/l1.c12a2fe3.jpg"},176:function(e,t,n){e.exports=n.p+"static/media/l2.0ae0772a.jpg"},177:function(e,t,n){e.exports=n.p+"static/media/l4.e0847e95.jpg"},178:function(e,t,n){e.exports=n.p+"static/media/l5.6199ee93.jpg"},179:function(e,t,n){e.exports=n.p+"static/media/l6.31ecdc4d.jpg"},180:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),i=n.n(o),l=n(69),r=n(10),s=n(21),m=n(22),p=n(24),u=n(23),d=n(13),h=(n(88),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={data:["1","2","3"],imgHeight:176},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:[1,2,3]})}),100)}},{key:"render",value:function(){var e=this;return c.a.createElement(d.a,{autoplay:!0,infinite:!0},this.state.data.map((function(t){return c.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",height:e.state.imgHeight}},c.a.createElement("img",{src:n(89)("./".concat(t,".jpg")),alt:"",style:{width:"100%",height:"176px",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))}}]),a}(a.Component)),f=function(e){return[{img:"l1",title:"\u5ba2\u5385\u6c99\u53d1\u7eaf\u8272\u5750\u57ab",money:18,people:145},{img:"l2",title:"\u5ba2\u5385\u6c99\u53d1\u7eaf\u8272\u5750\u57ab",money:18,people:145},{img:"l3",title:"\u5ba2\u5385\u6c99\u53d1\u7eaf\u8272\u5750\u57ab",money:18,people:145},{img:"l4",title:"\u5ba2\u5385\u6c99\u53d1\u7eaf\u8272\u5750\u57ab",money:18,people:145},{img:"l5",title:"\u5ba2\u5385\u6c99\u53d1\u7eaf\u8272\u5750\u57ab",money:18,people:145},{img:"l6",title:"\u5ba2\u5385\u6c99\u53d1\u7eaf\u8272\u5750\u57ab",money:18,people:145},{img:"l1",title:"\u5ba2\u5385\u6c99\u53d1\u7eaf\u8272\u5750\u57ab",money:18,people:145},{img:"l2",title:"\u5ba2\u5385\u6c99\u53d1\u7eaf\u8272\u5750\u57ab",money:18,people:145},{img:"l3",title:"\u5ba2\u5385\u6c99\u53d1\u7eaf\u8272\u5750\u57ab",money:18,people:145},{img:"l4",title:"\u5ba2\u5385\u6c99\u53d1\u7eaf\u8272\u5750\u57ab",money:18,people:145}].map((function(t,a){return c.a.createElement("ul",{style:{listStyleType:"none",float:"left"}},c.a.createElement("li",{key:a,style:{width:"160px",height:"220px",background:"white",float:"left",margin:"10px 10px",borderRadius:"10px"}},c.a.createElement("img",{src:n(89)("./".concat(t.img,".jpg")),style:{width:"160px",height:"160px",borderRadius:"10px"},onClick:function(){return e.data.history.push("/details")}}),c.a.createElement("p",{style:{fontSize:"14px",fontFamily:"\u5b8b\u4f53"}},t.title),c.a.createElement("p",{style:{fontSize:"12px",paddingBottom:"10px"}},c.a.createElement("span",{style:{fontSize:"15px",color:"red",fontWeight:"bold"}},"\uffe5",t.money),"\xa0\xa0",t.people,"\u4eba\u5df2\u8d2d\u4e70")))}))},E=(n(180),function(e){return c.a.createElement("div",{className:"details"},c.a.createElement("img",{src:n(90)}),c.a.createElement(d.b,{type:"left",size:"lg",style:{position:"relative",top:"-400px",opacity:"0.5"},onClick:function(){return e.history.push("/home")}}),c.a.createElement("div",{className:"bot"},c.a.createElement("ul",null,c.a.createElement("li",{className:"iconfont icon-dianpu",onClick:function(){return e.history.push("/store")}},c.a.createElement("div",{id:"store"},"\u5e97\u94fa")),c.a.createElement("li",{className:"iconfont icon-kefuxiaoxixinxi",onClick:function(){return e.history.push("/service")}},c.a.createElement("div",{id:"service"},"\u5ba2\u670d")),c.a.createElement("li",{className:"iconfont icon-shoucang"},c.a.createElement("div",{id:"collect"},"\u6536\u85cf")),c.a.createElement("li",{id:"bright"},c.a.createElement("span",{id:"bright1",onClick:function(){return e.history.push("/getcart")}},"\u52a0\u5165\u8d2d\u7269\u8f66"),c.a.createElement("span",{id:"bright2",onClick:function(){return e.history.push("/buy")}},"\u7acb\u5373\u8d2d\u4e70")))))}),g=(n(181),function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hidden:!1,fullScreen:!1},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",bottom:"0",width:"100%"}},c.a.createElement(d.d,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white"},c.a.createElement(d.d.Item,{title:"\u9996\u9875",key:"\u9996\u9875",icon:c.a.createElement("i",{className:"iconfont icon-Homehomepagemenu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-Homehomepagemenu1"}),selected:"/home"===t,onPress:function(){e.props.history.push("/home")},"data-seed":"logId"}),c.a.createElement(d.d.Item,{icon:c.a.createElement("i",{className:"iconfont icon-gouwuche"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-gouwuche1"}),title:"\u8d2d\u7269\u8f66",key:"\u8d2d\u7269\u8f66",selected:"/cart"===t,onPress:function(){e.props.history.push("/cart")},"data-seed":"logId1"}),c.a.createElement(d.d.Item,{icon:c.a.createElement("i",{className:"iconfont icon-dingdan"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-dingdan1"}),title:"\u8ba2\u5355\u5217\u8868",key:"\u8ba2\u5355\u5217\u8868",selected:"/list"===t,onPress:function(){e.props.history.push("/list")}}),c.a.createElement(d.d.Item,{icon:c.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-wodedangxuan"}),title:"\u6211\u7684\u6dd8\u5b9d",key:"\u6211\u7684\u6dd8\u5b9d",selected:"/my"===t,onPress:function(){e.props.history.push("/my")}})))}}]),n}(c.a.Component)),y=Object(r.g)(g),b=function(e){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"top0"},c.a.createElement("div",{className:"search0",onClick:function(){return e.history.push("/search")}},c.a.createElement("p",null,"\u6dd8"),c.a.createElement("div",{className:"tright"},c.a.createElement("span",{className:"iconfont icon-wode"},"  \u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa"))),c.a.createElement("div",{className:"imgs"},c.a.createElement(h,null)),c.a.createElement("div",{className:"shops"},c.a.createElement(f,{data:e})),c.a.createElement("div",{className:""}),c.a.createElement(y,null)))},v=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,"cart",c.a.createElement(y,null))}}]),n}(a.Component),j=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,"List",c.a.createElement(y,null))}}]),n}(a.Component),x=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,"My",c.a.createElement(y,null))}}]),n}(a.Component),k=function(e){return c.a.createElement("div",null,c.a.createElement(d.c,{placeholder:"\u641c\u7d22\u5b9d\u8d1d",onCancel:function(){return e.history.push("/home")},showCancelButton:"true"}))},O=function(){return c.a.createElement("h2",null,"Store")},w=function(){return c.a.createElement("h2",null,"service")},N=function(){return c.a.createElement("h2",null,"getcart")},C=function(){return c.a.createElement("h2",null,"buy")},I=function(){return c.a.createElement(l.a,null,c.a.createElement(r.a,{to:"/home"}),c.a.createElement(r.d,null,c.a.createElement(r.b,{exact:!0,path:"/home",component:b}),c.a.createElement(r.b,{path:"/cart",component:v}),c.a.createElement(r.b,{path:"/list",component:j}),c.a.createElement(r.b,{path:"/my",component:x}),c.a.createElement(r.b,{path:"/details",component:E}),c.a.createElement(r.b,{path:"/search",component:k}),c.a.createElement(r.b,{path:"/shops",component:f}),c.a.createElement(r.b,{path:"/store",component:O}),c.a.createElement(r.b,{path:"/service",component:w}),c.a.createElement(r.b,{path:"/getcart",component:N}),c.a.createElement(r.b,{path:"/buy",component:C})))};i.a.render(c.a.createElement(I,null),document.getElementById("root"))},88:function(e,t,n){},89:function(e,t,n){var a={"./1.jpg":171,"./2.jpg":172,"./3.jpg":173,"./4.jpg":174,"./l1.jpg":175,"./l2.jpg":176,"./l3.jpg":90,"./l4.jpg":177,"./l5.jpg":178,"./l6.jpg":179};function c(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=o,e.exports=c,c.id=89},90:function(e,t,n){e.exports=n.p+"static/media/l3.3c959a9e.jpg"},97:function(e,t,n){e.exports=n(184)}},[[97,1,2]]]);
//# sourceMappingURL=main.4fddcb24.chunk.js.map