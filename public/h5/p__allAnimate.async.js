(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{bZw3:function(t,e,a){"use strict";a.r(e);a("IzEo");var i=a("bx4M"),r=a("p0pE"),n=a.n(r),s=a("mrSG"),l=a("q1tI"),o=a.n(l),c=a("MuoO"),m=a("mOtZ"),y=a("WqWh"),u=a("faBS"),d=a("/88p"),p=a("Qp6+"),h=a("nLTe"),g=class extends l["Component"]{constructor(){super(...arguments),this.state={cate:"allAnimate",query:{key:"time",sort:!1,list:!0,size:20,page:1},filter:{area:"",year:"",kind:""}},this.initData=(t=>{var e=t.query,a=void 0===e?this.state.query:e,i=t.filter,r=void 0===i?this.state.filter:i,s=this.state.cate,l=this.props.dispatch,o=Object(u["b"])({cate:s,query:a,type:"kind"});l({type:"animate/queryList",payload:{query:n()({},o,r),addon:{type:s}}})}),this.listQuery=(t=>{var e=this.state.query,a=n()({},e,t);this.setState({query:a}),this.initData({query:a})}),this.filterQuery=(t=>{var e=this.state.filter,a=n()({},e,t);this.setState({filter:a}),this.initData({filter:a})})}componentDidMount(){this.initData({})}render(){var t=this.state,e=t.cate,a=t.query,r=t.filter,s=this.props,l=s.animate,c=s.category,g=s.loadingAnimate,v=(s.loadingCategory,a.list),f=(c[e],l[e]||[]),q=l.total[e]||0,E=n()({},r,Object(u["a"])(c.all));return o.a.createElement("div",null,o.a.createElement(h["a"],{active:"allAnimate"}),o.a.createElement("div",{className:"container"},o.a.createElement(p["a"],{value:E,onChange:this.filterQuery}),o.a.createElement(i["a"],{bordered:!1,style:{marginBottom:"20px",padding:"0",margin:"15px 0"},loading:g},o.a.createElement(m["a"],{value:a,onChange:this.listQuery}),v?o.a.createElement(d["b"],{type:"animate",list:f}):o.a.createElement(d["a"],{type:"animate",list:f}),o.a.createElement(y["a"],{value:n()({},a,{total:q}),onChange:this.listQuery}))))}};g=s["a"]([Object(c["connect"])(t=>{var e=t.animate,a=t.category,i=t.loading;return{animate:e,category:a,loadingAnimate:i.models.animate,loadingCategory:i.models.category}})],g),e["default"]=g}}]);