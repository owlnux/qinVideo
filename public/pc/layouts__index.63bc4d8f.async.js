(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"+ego":function(n,e,t){"use strict";t.r(e);var a=t("d6i3"),i=t.n(a),o=t("1l/V"),r=t.n(o),c=t("mrSG"),s=t("q1tI"),l=t.n(s),p=(t("5NDa"),t("5rEg")),d=t("qIgq"),h=t.n(d),m=t("fFZ8"),u=t.n(m),f=t("TJpk"),g=t("vOnD"),x=t("3a4m"),y=t.n(x),b=t("LLXN"),v=t("mNhR"),w=t("bdvc");function E(){var n=u()(["\n  width: 50%;\n  height: 100%;\n  position: relative;\n\n  input {\n    background-color: rgba(255, 255, 255, 0.3);\n    color: white;\n    border: none;\n    outline: none;\n    height: 36px;\n    box-shadow: none;\n\n    &::placeholder {\n      color: white;\n    }\n\n    &:focus {\n      outline: none;\n      box-shadow: none;\n    }\n  }\n\n  .searchTab {\n    position: absolute;\n    left: 0;\n    top: 40px;\n    width: 100%;\n    min-height: 80px;\n    background-color: ",";\n    border-radius: 0 0 4px 4px;\n    padding: 0 15px 15px 15px;\n\n    .first {\n      font-size: 18px;\n      cursor: auto;\n    }\n\n    p {\n      line-height: 30px;\n      padding-left: 30px;\n      margin-bottom: 0;\n      cursor: pointer;\n\n      &:hover {\n        background-color: rgba(255, 255, 255, 0.4);\n      }\n    }\n  }\n"]);return E=function(){return n},n}function j(){var n=u()(["\n  width: calc(100% - 100px);\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  user-select: none;\n\n  span {\n    padding: 0 15px;\n    cursor: pointer;\n  }\n"]);return j=function(){return n},n}function k(){var n=u()(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  i {\n    height: 40px;\n    width: 30px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n\n    &:nth-child(1) {\n      justify-content: flex-start;\n      font-size: 20px;\n    }\n    &:nth-child(3) {\n      justify-content: center;\n      margin-right: 20px;\n      font-weight: bold;\n      font-size: 18px;\n    }\n    &:nth-child(4) {\n      justify-content: flex-end;\n      font-size: 18px;\n    }\n  }\n"]);return k=function(){return n},n}function O(){var n=u()(["\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  background: ",";\n  color: #fff;\n  position: fixed;\n  top: 0;\n  z-index: 999;\n\n  .bg {\n    position: absolute;\n    top: 40px;\n    left: 0;\n    width: 100vw;\n    height: calc(100vh - 40px);\n    z-index: -1;\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n"]);return O=function(){return n},n}var C=g["a"].nav(O(),n=>Object(w["b"])(n.color,.9)),N=g["a"].div(k()),M=g["a"].div(j()),q=g["a"].div(E(),n=>Object(w["b"])(n.color,.8)),z=n=>{"custom"===n.status?y.a.push("/".concat(n._id)):y.a.push("/cate/".concat(n.type,"/").concat(n._id))},L=n=>{y.a.push("/".concat(n))},D=n=>{var e=n.config,t=n.searchList,a=e.color,i=e.name,o=e.pcMenu,r=e.information,c=Object(s["useState"])(!0),d=h()(c,2),m=d[0],u=d[1],g=n=>{13===n.keyCode&&(L("search/".concat(n.target.value)),u(!0))},x=Object(w["e"])(o).map(n=>l.a.createElement("span",{onClick:()=>{z(n),u(!0)}},"string"===typeof n?n:n.slug)),y=l.a.createElement(q,{color:a},l.a.createElement(p["a"],{placeholder:Object(b["formatMessage"])({id:"header.search"}),onKeyDown:g}),l.a.createElement("div",{className:"searchTab"},l.a.createElement("span",{className:"first"},Object(b["formatMessage"])({id:"header.hot"})),t.map(n=>l.a.createElement("p",{onClick:()=>{L("search/".concat(n._id)),u(!0)}},n._id))));return l.a.createElement(C,{color:a},l.a.createElement(f["Helmet"],{title:i,meta:[{name:"description",content:r}]},l.a.createElement("link",{rel:"icon",href:e.logo}),l.a.createElement("meta",{name:"description",content:e.information})),!m&&l.a.createElement("div",{className:"bg",onClick:()=>u(!0)}),l.a.createElement("div",{className:"container"},l.a.createElement(N,null,l.a.createElement(v["a"],{type:"icon-zhuye",onClick:()=>L("")}),l.a.createElement(M,null,m?x:y," "),m?l.a.createElement(v["a"],{type:"icon-sousuo",onClick:()=>u(!1)}):l.a.createElement(v["a"],{type:"icon-guanbi1",onClick:()=>u(!0)}),l.a.createElement(v["a"],{type:"icon-modx",onClick:()=>L("user")}))))},S=D,T=(t("5Dmo"),t("3S7+"));function I(){var n=u()(["\n  width: 100%;\n  background-color: ",";\n  height: 260px;\n  color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .con {\n    width: 100%;\n    display: grid;\n    grid-template-areas: 'left right';\n\n    .left {\n      grid-area: left;\n\n      span {\n        display: block;\n        font-size: 32px;\n        margin-bottom: 20px;\n      }\n\n      p {\n        margin-bottom: 0;\n\n        &:nth-child(2) {\n          margin-bottom: 20px;\n        }\n      }\n    }\n\n    .right {\n      grid-area: right;\n\n      span {\n        font-size: 24px;\n        display: block;\n        margin-bottom: 20px;\n      }\n\n      p {\n        cursor: pointer;\n      }\n\n      .circle {\n        margin-top: 20px;\n        display: flex;\n\n        .list {\n          display: inline-block;\n          cursor: pointer;\n          width: 40px;\n          height: 40px;\n          border-radius: 50%;\n          border: 2px solid hsla(0, 0%, 100%, 0.5);\n          font-size: 18px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          margin-right: 20px;\n        }\n      }\n    }\n  }\n"]);return I=function(){return n},n}var _=g["a"].footer(I(),n=>n.color),R=n=>{window.open(n)},J=n=>{var e=n.config,t=e.color,a=e.name,i=(e.slogan,e.information),o=e.qq,r=e.email,c=e.app,s=(e.headimg,e.aboutus);return l.a.createElement(_,{color:t},l.a.createElement("div",{className:"container con"},l.a.createElement("div",{className:"left"},l.a.createElement("span",null,a),l.a.createElement("p",null,i),l.a.createElement("p",null,Object(b["formatMessage"])({id:"footer.desc"}),l.a.createElement("br",null),Object(b["formatMessage"])({id:"footer.right"}),l.a.createElement("a",{href:"https://qinvideo.org"},Object(b["formatMessage"])({id:"footer.right2"})))),l.a.createElement("div",{className:"right"},l.a.createElement("span",null,Object(b["formatMessage"])({id:"footer.offical"})),l.a.createElement("p",{onClick:()=>{s&&y.a.push("/post/".concat(s))}},Object(b["formatMessage"])({id:"footer.aboutus"})),l.a.createElement("div",{className:"circle"},l.a.createElement(T["a"],{title:Object(b["formatMessage"])({id:"footer.qq.tooltip"})},l.a.createElement("div",{className:"list",onClick:()=>{R(o)}},l.a.createElement(v["a"],{type:"icon-qq"}))),l.a.createElement(T["a"],{title:Object(b["formatMessage"])({id:"footer.app.tooltip"})},l.a.createElement("div",{className:"list",onClick:()=>{R(c)}},l.a.createElement(v["a"],{type:"icon-anzhuo"}))),l.a.createElement(T["a"],{title:Object(b["formatMessage"])({id:"footer.email.tooltip"})},l.a.createElement("div",{className:"list",onClick:()=>{R(r)}},l.a.createElement(v["a"],{type:"icon-ziyuan"})))))))},V=J,B=t("Dp36"),H=t("XEok"),U=t("MuoO"),X=t("faBS"),F=class extends s["Component"]{constructor(){var n;super(...arguments),n=this,this.state={config:{color:"#ffad14",name:"Qinmei",slogan:"May Change The World",information:"\u4f60\u597d\u5927\u5b8b\u5927",pcMenu:[],pcIndex:[]},searchList:[]},this.initVisit=r()(i.a.mark(function e(){var t;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B["a"].postData({data:{type:"visit"}});case 2:t=e.sent,t||setTimeout(n.initVisit,3e3);case 4:case"end":return e.stop()}},e)})),this.initRead=function(){var e=r()(i.a.mark(function e(t){var a;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B["a"].postData({data:{type:"read",target:t}});case 2:a=e.sent,a||setTimeout(n.initRead,3e3);case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),this.initSearch=r()(i.a.mark(function e(){var t;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B["a"].search({});case 2:t=e.sent,n.setState({searchList:t.data});case 4:case"end":return e.stop()}},e)})),this.initCategory=function(){var e=r()(i.a.mark(function e(t){var a;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=n.props.dispatch,a({type:"category/queryList",payload:{query:{type:t}}});case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),this.initConfig=(n=>{var e=this.props.dispatch;e({type:"category/initList",payload:{menu:n}})}),this.initUser=(()=>{var n=localStorage.getItem("userInfo");if(n){n=JSON.parse(n);var e=this.props.dispatch;e({type:"auth/changeLoginStatus",payload:{status:!0}}),e({type:"user/refreshInfo",payload:{}})}}),this.initTongji=(()=>{if(window.config.tongji){var n=document.createElement("script");n.innerHTML='\n              var _hmt = _hmt || [];\n              (function() {\n                var hm = document.createElement("script");\n                hm.src = "'.concat(window.config.tongji,'";\n                var s = document.getElementsByTagName("script")[0];\n                s.parentNode.insertBefore(hm, s);\n              })();\n              '),document.body.appendChild(n)}}),this.initData=(n=>{var e=this.props.dispatch,t=Object(w["d"])(n);t.forEach(n=>{var t=Object(X["c"])(n);e({type:"".concat(n.type,"/queryList"),payload:{query:t,addon:{type:n._id}}})})})}componentDidMount(){this.setState({config:window.config}),this.initSearch(),this.initCategory("all"),this.initConfig(Object(w["e"])(window.config.pcMenu)),this.initConfig(Object(w["e"])(window.config.pcIndex)),this.initUser(),this.initVisit(),this.initRead(this.props.location.pathname),this.initTongji(),this.initData(window.config.pcIndex)}componentDidUpdate(n){this.props.location.pathname!==n.location.pathname&&window.scrollTo(0,0),this.initRead(this.props.location.pathname)}render(){var n=this.state,e=n.config,t=n.searchList,a=this.props.children;return l.a.createElement(H["a"].Provider,{value:e.color},l.a.createElement("div",{className:"layout"},l.a.createElement(S,{config:e,searchList:t}),l.a.createElement("div",{style:{minHeight:"calc(100vh - 260px)"}},a),l.a.createElement(V,{config:e})))}};F=c["a"]([Object(U["connect"])(n=>{var e=n.category;return{category:e}})],F);e["default"]=F}}]);