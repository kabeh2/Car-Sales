(this["webpackJsonpCar-Sales"]=this["webpackJsonpCar-Sales"]||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(6),i=a.n(c),u=a(2),l=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("figure",{className:"image is-128x128"},n.a.createElement("img",{src:e.car.image,alt:e.car.name})),n.a.createElement("h2",null,e.car.name),n.a.createElement("p",null,"Amount: $",e.car.price))},o=Object(u.b)(null,(function(e){return{removeFeature:function(t,a){return e(function(e,t){return{type:"REMOVE",featureId:e,featurePrice:t}}(t,a))}}}))((function(e){return n.a.createElement("li",null,n.a.createElement("button",{className:"button",onClick:function(){return e.removeFeature(e.index,e.feature.price)}},"X"),e.feature.name)})),m=function(e){return n.a.createElement("div",{className:"content"},n.a.createElement("h6",null,"Added features:"),e.car.features.length>0?n.a.createElement("ol",{type:"1"},e.car.features.map((function(t,a){return n.a.createElement(o,{key:Math.random(),feature:t,index:a,removeFeature:e.removeFeature})}))):n.a.createElement("p",null,"You can purchase items from the store."))},s=Object(u.b)(null,(function(e){return{addFeature:function(t,a){return e(function(e,t){return{type:"ADD",featureId:e,featurePrice:t}}(t,a))}}}))((function(e){return n.a.createElement("li",null,n.a.createElement("button",{className:"button",onClick:function(){return e.addFeature(e.feature.id,e.feature.price)}},"Add"),e.feature.name," (+",e.feature.price,")")})),d=function(e){return n.a.createElement("div",{className:"content"},n.a.createElement("h4",null,"Additional Features"),e.additionalFeatures.length?n.a.createElement("ol",{type:"1"},e.additionalFeatures.map((function(e){return n.a.createElement(s,{key:e.id,feature:e})}))):n.a.createElement("p",null,"Nice looking car!"))},f=function(e){return n.a.createElement("div",{className:"content"},n.a.createElement("h4",null,"Total Amount: $",e.car.price+e.additionalPrice))},E=Object(u.b)((function(e){return{state:e}}))((function(e){return n.a.createElement("div",{className:"boxes"},n.a.createElement("div",{className:"box"},n.a.createElement(l,{car:e.state.car}),n.a.createElement(m,{car:e.state.car})),n.a.createElement("div",{className:"box"},n.a.createElement(d,{additionalFeatures:e.state.additionalFeatures}),n.a.createElement(f,{car:e.state.car,additionalPrice:e.state.additionalPrice})))})),p=a(7),b=a(5),O=a(4),g={additionalPrice:0,car:{price:26395,name:"2019 Ford Mustang",image:"https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",features:[]},additionalFeatures:[{id:1,name:"V-6 engine",price:1500},{id:2,name:"Racing detail package",price:1500},{id:3,name:"Premium sound system",price:500},{id:4,name:"Rear spoiler",price:250}]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":var a=Object(O.a)(e.additionalFeatures).filter((function(e){return e.id===t.featureId}));return e.car.features.push(a[0]),Object(b.a)({},e,{car:Object(b.a)({},e.car,{price:e.car.price+t.featurePrice,features:Object(O.a)(e.car.features)}),additionalFeatures:Object(O.a)(e.additionalFeatures)});case"REMOVE":var r=Object(O.a)(e.car.features).filter((function(e,a){return a!==t.featureId}));return Object(b.a)({},e,{car:Object(b.a)({},e.car,{price:e.car.price-t.featurePrice,features:Object(O.a)(r)}),additionalFeatures:Object(O.a)(e.additionalFeatures)});default:return e}},h=(a(23),a(24),Object(p.b)(F,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),v=document.getElementById("root");i.a.render(n.a.createElement(u.a,{store:h},n.a.createElement(E,null)),v)}},[[14,1,2]]]);
//# sourceMappingURL=main.0ab2d08a.chunk.js.map