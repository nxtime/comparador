(this.webpackJsonpcomparador=this.webpackJsonpcomparador||[]).push([[0],{149:function(e,t,i){},150:function(e,t,i){},156:function(e,t,i){},157:function(e,t,i){},163:function(e,t){},165:function(e,t){},175:function(e,t){},177:function(e,t){},204:function(e,t){},206:function(e,t){},207:function(e,t){},212:function(e,t){},214:function(e,t){},220:function(e,t){},222:function(e,t){},241:function(e,t){},253:function(e,t){},256:function(e,t){},259:function(e,t,i){},260:function(e,t,i){},261:function(e,t,i){},262:function(e,t,i){},263:function(e,t,i){},264:function(e,t,i){},265:function(e,t,i){},266:function(e,t,i){"use strict";i.r(t);var a=i(1),c=i.n(a),n=i(142),s=i.n(n),r=i(87),d=i(8),o=(i(149),i(3)),l=(i(150),i(17)),j=i(7),m=i(0),b=function(e){var t={id:e.id,value:""},i=Object(j.f)(),a=function(i){t.value=i.target.value,e.registration(t)};return"text"===e.type||"password"===e.type||"email"===e.type?Object(m.jsxs)("div",{className:"bg",children:["undefined"!==typeof e.icon&&Object(m.jsx)("label",{htmlFor:e.id,children:Object(m.jsx)(l.a,{icon:e.icon})}),"undefined"!==typeof e.char?Object(m.jsx)("input",{autoComplete:"off",type:e.type,id:e.id,placeholder:e.children,onChange:a}):Object(m.jsx)("input",{autoComplete:"off",type:e.type,id:e.id,placeholder:e.children,onChange:a,maxLength:"text"===e.type?"24":"password"===e.type?"8":"1000"})]}):Object(m.jsxs)("div",{className:"bg bg-secondary",children:["undefined"!==typeof e.icon&&Object(m.jsx)("label",{htmlFor:e.id,children:Object(m.jsx)(l.a,{icon:e.icon})}),Object(m.jsx)("input",{type:e.type,id:e.id,value:e.children,onClick:function(t){"email"===e.id&&i.push("/login"),"facebook"===e.id&&console.log("Logar facebook?"),"Enviar"!==e.id&&"ok"!==e.id||e.clickHandler(),"product"!==e.id&&"market"!==e.id&&"price"!==e.id||e.clickHandler(t),"Logar"===e.id&&e.clickHandler()}})]})},p=i.p+"static/media/login-avatar.291bc0a3.png",u=i(16),x=i(268),h=function(e){var t={duration:.35,type:"spring",damping:17.5,stiffness:225},i={hidden:{x:400,opacity:0},visible:{x:0,opacity:1}};return Object(m.jsx)(x.a.div,{className:"container",exit:{opacity:0},children:Object(m.jsxs)(x.a.div,{className:"container-flex",animate:{height:window.innerWidth>800?["500px","256px"]:"auto"},transition:t,children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(x.a.h1,{initial:{x:-400,opacity:0},animate:{x:0,opacity:1},transition:{delay:0,type:"spring",damping:25,stiffness:200},id:"title",className:"signin",children:"Pricing"}),Object(m.jsx)("div",{className:"image",children:Object(m.jsx)(x.a.img,{initial:{x:-400,opacity:0},animate:{x:0,opacity:.5},transition:{delay:.25,type:"spring",damping:20,stiffness:175},src:p,alt:"login-avatar",draggable:"false"})})]}),Object(m.jsx)(x.a.span,{animate:{height:window.innerWidth>800?["32rem","16rem"]:0},transition:t}),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)(x.a.div,{variants:i,initial:"hidden",animate:"visible",transition:Object(o.a)(Object(o.a)({},t),{},{delay:.125}),whileHover:{x:20,transition:Object(o.a)({},t)},children:Object(m.jsx)(b,{id:"email",type:"button",icon:"mdi:email",children:"Logar com email"})}),Object(m.jsx)(x.a.div,{variants:i,initial:"hidden",animate:"visible",transition:Object(o.a)(Object(o.a)({},t),{},{delay:.25}),whileHover:{x:20,transition:Object(o.a)({},t)},children:Object(m.jsx)(b,{id:"facebook",type:"button",icon:"brandico:facebook-rect",children:"Logar com facebook"})}),Object(m.jsxs)("p",{children:["N\xe3o tem uma conta?",Object(m.jsx)(u.b,{to:"/Signin",children:Object(m.jsx)("em",{children:"Cadastre-se"})})]})]})]})})},O=i(30),g=(i(156),function(e){var t={duration:1.25,type:"spring",damping:17.5,stiffness:225};return Object(m.jsx)(x.a.div,{className:"popup",animate:{backgroundColor:["#00000000","#00000040"],backdropFilter:["blur(0rem)","blur(.125rem)"],transition:Object(o.a)(Object(o.a)({},t),{},{duration:.25})},exit:{backgroundColor:"#00000000",duration:0},children:Object(m.jsxs)(x.a.div,{initial:{y:-100},animate:{y:20,type:"spring"},exit:{y:-250,duration:.125},transition:t,className:"popup-card",children:[Object(m.jsx)("p",{children:e.children}),Object(m.jsx)(b,{type:"button",id:"ok",clickHandler:function(){e.clickHandler()},children:"Ok"})]})})}),f=i(269),v=(i(157),i(46)),y=i.n(v),N=function(e){var t={hidden:{x:-400,opacity:0},visible:{x:0,opacity:1}},i=e.users,c=Object(a.useState)({name:"",singleName:"",pw:"",cpw:"",email:""}),n=Object(d.a)(c,2),s=n[0],r=n[1],l={duration:.35,type:"spring",damping:20,stiffness:225},h=Object(a.useState)({state:!1,popupText:""}),v=Object(d.a)(h,2),N=v[0],k=v[1],w=function(e){r(Object(o.a)(Object(o.a)({id:i.length},s),{},Object(O.a)({},e.id,e.value)))},C=Object(j.f)(),S=function(){C.push("/")};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a,{children:N.state&&Object(m.jsx)(g,{clickHandler:function(){k((function(){return!1}))},children:N.popupText})}),Object(m.jsx)(x.a.div,{className:"container signin",exit:{opacity:0},transition:l,children:Object(m.jsxs)(x.a.div,{className:"container-flex",animate:{height:["256px","500px"]},exit:{height:"256px"},transition:l,children:[Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)(x.a.div,{variants:t,initial:"hidden",animate:"visible",transition:Object(o.a)(Object(o.a)({},l),{},{delay:.125}),whileHover:{x:20,transition:Object(o.a)({},l)},children:Object(m.jsx)(b,{registration:w,id:"name",type:"text",icon:"bx:bxs-user",children:"Nome completo"})}),24===s.name.length&&Object(m.jsx)("p",{style:{textAlign:"center",fontSize:"10pt",margin:"-20px auto"},children:"Voc\xea s\xf3 pode digitar at\xe9 24 car\xe1cteres"}),Object(m.jsx)(x.a.div,{variants:t,initial:"hidden",animate:"visible",transition:Object(o.a)(Object(o.a)({},l),{},{delay:.25}),whileHover:{x:20,transition:Object(o.a)({},l)},children:Object(m.jsx)(b,{registration:w,id:"pw",type:"password",icon:"fa-solid:lock",children:"Senha"})}),s.pw.includes(" ")?Object(m.jsx)("p",{style:{textAlign:"center",fontSize:"10pt",margin:"-20px auto"},children:"N\xe3o use espa\xe7o na sua senha"}):s.pw.length>=4&&s.pw.length<8?Object(m.jsx)("p",{style:{textAlign:"center",fontSize:"10pt",margin:"-20px auto"},children:"Senha deve ter 8 car\xe1cteres"}):s.pw.length>=4&&s.pw!==s.cpw&&Object(m.jsx)("p",{style:{textAlign:"center",fontSize:"10pt",margin:"-20px auto"},children:"Senhas n\xe3o coincidem"}),Object(m.jsx)(x.a.div,{variants:t,initial:"hidden",animate:"visible",transition:Object(o.a)(Object(o.a)({},l),{},{delay:.375}),whileHover:{x:20,transition:Object(o.a)({},l)},children:Object(m.jsx)(b,{registration:w,id:"cpw",type:"password",icon:"fa-solid:lock",children:"Confirmar senha"})}),Object(m.jsx)(x.a.div,{variants:t,initial:"hidden",animate:"visible",transition:Object(o.a)(Object(o.a)({},l),{},{delay:.625}),whileHover:{x:20,transition:Object(o.a)({},l)},children:Object(m.jsx)(b,{registration:w,id:"email",type:"email",icon:"mdi:email",children:"Email"})}),s.email.length>5&&!s.email.includes("@")&&Object(m.jsx)("p",{style:{textAlign:"center",fontSize:"10pt",margin:"-20px auto"},children:"Digite um email valido"}),Object(m.jsx)(x.a.div,{variants:t,initial:"hidden",animate:"visible",transition:Object(o.a)(Object(o.a)({},l),{},{delay:.75}),whileHover:{x:20,transition:Object(o.a)({},l)},children:Object(m.jsx)(b,{type:"button",id:"Enviar",clickHandler:function(){if(s.pw!==s.cpw)k((function(e){return Object(o.a)(Object(o.a)({},e),{},{state:!0,popupText:"Senhas n\xe3o coincidem"})}));else{var t=s.name.trim().indexOf(" ");s.email=s.email.trim().toLowerCase();var i=s.name.trim().toLowerCase();i=i.charAt(0).toUpperCase()+i.slice(1),s.name=i,-1!==t&&(i=i.slice(0,t));var a=y.a.hash.sha256.hash(s.pw),c=y.a.codec.hex.fromBits(a);""===(s=Object(o.a)(Object(o.a)({},s),{},{pw:c,key:.821*Math.random(),singleName:i,image:"https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1"})).name||""===s.email||""===s.pw?k((function(e){return Object(o.a)(Object(o.a)({},e),{},{state:!0,popupText:"Preencha todos os campos"})})):(k((function(e){return Object(o.a)(Object(o.a)({},e),{},{state:!0,popupText:"Usu\xe1rio criado com sucesso",criarUsuario:!0})})),e.addUser(s),S())}},variants:t,children:"Enviar"})}),Object(m.jsxs)("p",{children:["J\xe1 tem uma conta?",Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("em",{children:"Logar"})})]})]}),Object(m.jsx)(x.a.span,{animate:{height:window.innerWidth>800?["16rem","32rem"]:0},transition:Object(o.a)(Object(o.a)({},l),{},{damping:10,stiffness:100})}),Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(x.a.h1,{initial:{x:400,opacity:0},animate:{x:0,opacity:1},transition:{delay:0,type:"spring",damping:25,stiffness:200},id:"title",children:"Pricing"}),Object(m.jsx)("div",{className:"image",children:Object(m.jsx)(x.a.img,{initial:{x:400,opacity:0},animate:{x:0,opacity:.5},transition:{delay:.25,type:"spring",damping:20,stiffness:175},src:p,alt:"login-avatar",draggable:"false"})})]})]})})]})},k=function(e){var t=e.users,i=e.loggedIn,c={hidden:{x:-400,opacity:0},visible:{x:0,opacity:1}},n=Object(a.useState)({email:"",pw:""}),s=Object(d.a)(n,2),r=s[0],l=s[1],h={duration:.35,type:"spring",damping:20,stiffness:225},v=Object(a.useState)({state:!1,popupText:""}),N=Object(d.a)(v,2),k=N[0],w=N[1],C=function(e){l(Object(o.a)(Object(o.a)({id:t.length},r),{},Object(O.a)({},e.id,e.value)))},S=Object(j.f)(),L=function(){S.push("/")};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a,{children:k.state&&Object(m.jsx)(g,{clickHandler:function(){w((function(){return!1}))},children:k.popupText})}),Object(m.jsx)(x.a.div,{className:"container",exit:{opacity:0},transition:h,children:Object(m.jsxs)(x.a.div,{className:"container-flex",animate:{height:["256px","360px"]},exit:{height:"256px"},transition:h,children:[Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)(x.a.div,{variants:c,initial:"hidden",animate:"visible",transition:Object(o.a)(Object(o.a)({},h),{},{delay:.125}),whileHover:{x:20,transition:Object(o.a)({},h)},children:Object(m.jsx)(b,{registration:C,id:"email",type:"email",icon:"mdi:email",variants:c,initial:"hidden",animate:"visible",children:"Email"})}),Object(m.jsx)(x.a.div,{variants:c,initial:"hidden",animate:"visible",transition:Object(o.a)(Object(o.a)({},h),{},{delay:.25}),whileHover:{x:20,transition:Object(o.a)({},h)},children:Object(m.jsx)(b,{registration:C,id:"pw",type:"password",icon:"fa-solid:lock",children:"Senha"})}),Object(m.jsx)(x.a.div,{variants:c,initial:"hidden",animate:"visible",transition:Object(o.a)(Object(o.a)({},h),{},{delay:.375}),whileHover:{x:20,transition:Object(o.a)({},h)},children:Object(m.jsx)(b,{type:"button",id:"Enviar",clickHandler:function(){if(""===r.email||""===r.pw)w((function(e){return Object(o.a)(Object(o.a)({},e),{},{state:!0,popupText:"Preencha todos os campos"})}));else{r.email=r.email.trim().toLowerCase();var e=t.filter((function(e){return e.email===r.email}));if(0!==e.length){var a=y.a.hash.sha256.hash(r.pw),c=y.a.codec.hex.fromBits(a);e[0].pw===c?(w((function(e){return Object(o.a)(Object(o.a)({},e),{},{state:!0,popupText:"Login com sucesso"})})),i({state:!0,user:e}),L()):w((function(e){return Object(o.a)(Object(o.a)({},e),{},{state:!0,popupText:"Senha incorreta"})}))}else w((function(e){return Object(o.a)(Object(o.a)({},e),{},{state:!0,popupText:"Email n\xe3o encontrado"})}))}},variants:c,initial:"hidden",animate:"visible",children:"Logar"})}),Object(m.jsxs)("p",{children:["Quer tentar com outra conta?",Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("em",{children:"Voltar"})})]})]}),Object(m.jsx)(x.a.span,{animate:{height:window.innerWidth>800?["16rem","24rem"]:0},transition:Object(o.a)(Object(o.a)({},h),{},{damping:10,stiffness:100})}),Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(x.a.h1,{initial:{x:400,opacity:0},animate:{x:0,opacity:1},transition:{delay:0,type:"spring",damping:25,stiffness:200},id:"title",className:"signin",children:"Pricing"}),Object(m.jsx)("div",{className:"image",children:Object(m.jsx)(x.a.img,{initial:{x:400,opacity:0},animate:{x:0,opacity:.5},transition:{delay:.25,type:"spring",damping:20,stiffness:175},src:p,alt:"login-avatar",draggable:"false"})})]})]})})]})},w=(i(259),function(e){var t=e.product,i=e.markets;return Object(m.jsxs)("div",{className:"product-interface",children:[Object(m.jsx)("div",{className:"back",children:Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)(l.a,{icon:"akar-icons:arrow-back-thick-fill"})})}),Object(m.jsxs)("div",{className:"product-header",children:[Object(m.jsx)("img",{src:t.image,alt:"",srcSet:""}),Object(m.jsxs)("p",{children:[t.name," ",t.type," ",t.brand," ",t.qt]}),Object(m.jsxs)("div",{className:"market-price",children:[Object(m.jsx)("img",{className:"market-img",src:i[0].image,alt:""}),Object(m.jsxs)("p",{className:"bestPrice",children:["R$",t.prices[0].price.toString().replace(".",",")]})]})]}),Object(m.jsx)("div",{className:"prices",children:t.prices.map((function(e,t){return Object(m.jsxs)("div",{className:"price-item",children:[Object(m.jsx)("p",{className:"price-item-market",children:e.market}),Object(m.jsxs)("p",{className:"price-item-value",children:["R$",e.price.toString().replace(".",",")]})]},Math.random())}))})]})}),C=[{name:"Leite",brand:"Italac",type:"Integral",qt:"1L",id:0,prices:[{market:"Extra",price:2.24},{market:"Walmart",price:2.28},{market:"Carrefour",price:2.32},{market:"Lopes",price:2.37}],image:"https://static.paodeacucar.com/img/uploads/1/194/531194.jpg"},{name:"A\xe7ucar",brand:"Uni\xe3o",type:"Refinado",qt:"1KG",id:1,prices:[{market:"Extra",price:4.59},{market:"Walmart",price:4.65},{market:"Carrefour",price:4.7},{market:"Lopes",price:4.77}],image:"https://carrefourbr.vtexassets.com/arquivos/ids/15813910/197564_1.jpg?v=637540293323270000"},{name:"Macarr\xe3o",brand:"Adria",type:"Parafuso",qt:"500g",id:2,prices:[{market:"Extra",price:3.95},{market:"Walmart",price:4.01},{market:"Carrefour",price:4.09},{market:"Lopes",price:4.12}],image:"https://static.clubeextra.com.br/img/uploads/1/755/12707755.jpg"},{name:"Leite",brand:"Italac",type:"Desnatado",qt:"1L",id:3,prices:[{market:"Extra",price:2.24},{market:"Walmart",price:2.28},{market:"Carrefour",price:2.32},{market:"Lopes",price:2.37}],image:"https://www.clubeextra.com.br/img/uploads/1/804/529804.jpg"}],S=(i(260),i(261),function(e){var t=e.user,i=e.products,a=e.markets,c=e.productSelected,n=function(e){c(e.target.getAttribute("data-number"))};return Object(m.jsxs)("header",{children:[Object(m.jsxs)("h1",{className:"title",children:["Ol\xe1",Object(m.jsx)("em",{children:t.singleName})]}),Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("ul",{className:"item-group",children:[Object(m.jsx)("li",{className:"item mercado-1",children:Object(m.jsx)("img",{src:a[0].image,alt:"",srcset:""})}),Object(m.jsx)("li",{className:"item mercado-2",children:Object(m.jsx)("img",{src:a[1].image,alt:"",srcset:""})}),Object(m.jsx)("li",{className:"item mercado-3",children:Object(m.jsx)("img",{src:a[2].image,alt:"",srcset:""})}),Object(m.jsx)("li",{className:"item mercado-4",children:Object(m.jsx)("img",{src:a[3].image,alt:"",srcset:""})})]})}),Object(m.jsx)("div",{className:"mercados",children:Object(m.jsx)(b,{id:"mercados",type:"button",children:"Produtos em alta"})}),Object(m.jsx)("div",{className:"home-container",children:i.map((function(e,t){return Object(m.jsx)("div",{className:"home-container-item",children:Object(m.jsxs)("div",{className:"item-text",onClick:n,"data-number":t,children:[Object(m.jsx)("img",{src:e.image,alt:"",srcset:"","data-number":t}),Object(m.jsxs)("p",{"data-number":t,children:[e.name," ",e.brand," ",e.type," ",e.qt]}),Object(m.jsxs)("p",{className:"item-price","data-number":t,children:["R$",e.prices[0].price.toString().replace(".",",")]})]})},Math.random())}))})]})}),L=(i(262),function(e){var t=e.products,i=e.productSelected,c=function(e){i(e.target.getAttribute("data-number"))},n=Object(a.useState)(t),s=Object(d.a)(n,2),r=s[0],o=s[1],l=Object(a.useState)({value:""}),j=Object(d.a)(l,2),p=j[0],u=j[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"header search",children:Object(m.jsx)(b,{registration:function(e){u({value:e.value}),o(t.filter((function(e){return e.name.includes(p.value)})))},id:"search-bar",type:"text",icon:"akar-icons:search",children:"Pesquisar"})}),""!==p.value&&Object(m.jsx)("div",{className:"search-container",children:r.map((function(e,t){return Object(m.jsx)("div",{className:"home-container-item",children:Object(m.jsxs)("div",{className:"item-text",onClick:c,"data-number":e.id,children:[Object(m.jsx)("img",{src:e.image,alt:"",srcset:"","data-number":e.id}),Object(m.jsxs)("p",{"data-number":e.id,children:[e.name," ",e.brand," ",e.type," ",e.qt]}),Object(m.jsxs)("p",{className:"item-price","data-number":e.id,children:["R$",e.prices[0].price.toString().replace(".",",")]})]})},Math.random())}))})]})}),E=function(e){e.user;return Object(m.jsxs)("div",{className:"header list",children:[Object(m.jsx)(b,{id:"list-add-bar",type:"text",children:"Adicionar"}),Object(m.jsx)(b,{classname:"list-add-button",type:"button",icon:"akar-icons:plus"})]})},A=(i(263),function(e){var t=e.user,i=e.isLoggedIn;return Object(m.jsxs)("header",{className:"user",children:[Object(m.jsxs)("h1",{className:"title",children:["Ol\xe1",Object(m.jsx)("em",{children:t.singleName})]}),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:t.image,alt:""}),Object(m.jsxs)("div",{className:"user-name",children:[Object(m.jsx)("p",{children:t.name}),Object(m.jsx)("p",{className:"user-edit-name",children:"Editar"})]})]}),Object(m.jsxs)("div",{className:"user-container",children:[Object(m.jsx)("div",{className:"user-container-item",children:Object(m.jsx)("div",{className:"item-text",children:"Configura\xe7\xf5es"})}),Object(m.jsx)("span",{className:"item-spacer"}),Object(m.jsx)("div",{className:"user-container-item",children:Object(m.jsx)("div",{className:"item-text",children:"Localiza\xe7\xe3o"})}),Object(m.jsx)("span",{className:"item-spacer"}),Object(m.jsx)("div",{className:"user-container-item",children:Object(m.jsx)("div",{className:"item-text disconnect",onClick:function(){i({state:!1,user:""})},children:"Desconectar"})})]})]})}),H=(i(264),i(265),function(e){var t=e.id,i=e.newItem,c=e.resetActive,n=Object(a.useState)({name:"",brand:"",type:"",qt:"",prices:[{market:"Extra",price:0}],image:"https://previews.123rf.com/images/myvector/myvector1606/myvector160600046/57846791-product-not-available-icon.jpg"}),s=Object(d.a)(n,2),r=s[0],j=s[1],p=function(e){j(Object(o.a)(Object(o.a)({},r),{},Object(O.a)({},e.id,e.value))),"price"===e.id&&(r.prices[0].price=e.value)},u=0;return u="market"===t?1:"price"===t?2:0,Object(m.jsxs)("div",{className:"container form",children:[Object(m.jsx)("div",{className:"back",onClick:function(e){c()},children:Object(m.jsx)(l.a,{icon:"akar-icons:arrow-back-thick-fill"})}),Object(m.jsx)("div",{className:"forms-header"}),Object(m.jsxs)("div",{className:"form-body",children:[Object(m.jsx)(m.Fragment,{}),[{name:"product",value:[{name:"name",description:"Nome Ex:. Leite"},{name:"brand",description:"Marca Ex:. Italac"},{name:"type",description:"Tipo Ex:. Desnatado"},{name:"qt",description:"Quantidade Ex:. 1L"},{name:"price",description:"Pre\xe7o Ex:. 2.8"},{name:"image",description:"Link da imagem"}]},{name:"market",value:[{name:"name",description:"Nome Ex:. Extra"},{name:"image",description:"Link da imagem"}]},{name:"prices",value:[{name:"product",description:"Nome do produto"},{name:"market",description:"Nome do mercado"},{name:"price",description:"Pre\xe7o"}]}][u].value.map((function(e,t){return Object(m.jsx)(b,{registration:p,id:e.name,type:"text",char:"no-limit",children:e.description},t)})),Object(m.jsx)(b,{type:"button",id:"Enviar",clickHandler:function(e){i(r)},children:"Adicionar"})]})]})}),I=function(e){var t=e.addNewItem,i=Object(a.useState)(""),c=Object(d.a)(i,2),n=c[0],s=c[1],r=function(e){s(e.target.id)};return Object(m.jsx)("div",{className:"add-interface",children:""===n?Object(m.jsxs)("div",{className:"header add",children:[Object(m.jsx)(b,{id:"product",type:"button",clickHandler:r,children:"Adicionar Produto"}),Object(m.jsx)(b,{id:"market",type:"button",clickHandler:r,children:"Adicionar Mercado"}),Object(m.jsx)(b,{id:"price",type:"button",clickHandler:r,children:"Adicionar Pre\xe7o"})]}):Object(m.jsx)(H,{id:n,newItem:function(e){t(e),s("")},resetActive:function(e){s("")}})})},P=function(e){var t=e.user,i=e.products,c=e.markets,n=e.selectProduct,s=e.loggedIn,r=e.newItem,o=Object(j.f)();t=t[0];var b=Object(a.useState)({id:"home",paddingLeft:"0"}),p=Object(d.a)(b,2),u=p[0],x=p[1],h=function(e){n(e),o.push("/product")},O=function(e){var t=e.target.id,i="search"===t?"75px":"list"===t?"250px":"user"===t?"325px":"add"===t?"20000px":"0";x({id:e.target.id,paddingLeft:i})};return Object(m.jsxs)("div",{className:"interface",children:[Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsxs)("div",{className:"movable-navbar",style:{minWidth:"405px"},children:[Object(m.jsx)("div",{className:"prev-item",style:{transform:"translateX("+u.paddingLeft+")"}}),Object(m.jsx)("div",{className:"next-item",style:{transform:"translateX("+u.paddingLeft+")"}}),Object(m.jsx)("div",{className:"current-item",style:{transform:"translateX("+u.paddingLeft+")"}})]}),Object(m.jsxs)("ul",{className:"navbar-items",children:[Object(m.jsx)("li",{id:"home",className:"home"===u.id?"navbar-item active":"navbar-item",onClick:O,children:Object(m.jsx)(l.a,{icon:"ant-design:home-filled"})}),Object(m.jsx)("li",{id:"search",className:"search"===u.id?"navbar-item active":"navbar-item",onClick:O,children:Object(m.jsx)(l.a,{icon:"akar-icons:search"})}),Object(m.jsx)("li",{id:"add",className:"navbar-item navbar-item-circle",onClick:O,children:Object(m.jsx)(l.a,{icon:"akar-icons:plus"})}),Object(m.jsx)("li",{id:"list",className:"list"===u.id?"navbar-item active":"navbar-item",onClick:O,children:Object(m.jsx)(l.a,{icon:"gg:notes"})}),Object(m.jsx)("li",{id:"user",className:"user"===u.id?"navbar-item active":"navbar-item",onClick:O,children:Object(m.jsx)(l.a,{icon:"bx:bxs-user"})})]})]}),"home"===u.id?Object(m.jsx)(S,{user:t,products:i,markets:c,productSelected:h}):"search"===u.id?Object(m.jsx)(L,{products:i,productSelected:h}):"list"===u.id?Object(m.jsx)(E,{}):"user"===u.id?Object(m.jsx)(A,{user:t,isLoggedIn:function(e){s(e)}}):"add"===u.id&&Object(m.jsx)(I,{addNewItem:function(e){r(e)}}),Object(m.jsx)("div",{className:"spacer"})]})};var q=function(){var e=Object(a.useState)({state:!1,user:""}),t=Object(d.a)(e,2),i=t[0],c=t[1],n=Object(a.useState)({product:""}),s=Object(d.a)(n,2),o=s[0],l=s[1],b=Object(a.useState)([{id:0,key:.821*Math.random(),name:"admin",singleName:"admin",pw:"03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",email:"admin@email.com",image:"https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1"}]),p=Object(d.a)(b,2),x=p[0],O=p[1],g=Object(a.useState)(C),v=Object(d.a)(g,2),y=v[0],S=v[1],L=Object(a.useState)([{name:"Extra",image:"https://publicoa.com.br/wp-content/uploads/2020/10/Capa-Extra.png"},{name:"Carrefour",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvpbn09rtKcD189GhqH6gSzuw1SgLSJ22CiqDP-WK5jl7v_J2xwgftIuP0lbouGaV-0Y&usqp=CAU"},{name:"Walmart",image:"https://thumbs.dreamstime.com/b/modelo-de-logotipo-walmart-ilustrativo-em-fundo-branco-%C3%ADcone-logotipos-%C3%ADcones-definir-m%C3%ADdias-sociais-banner-plano-vetores-svg-210443980.jpg"},{name:"Lopes",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBF7YLl1AEIW8c64mREGa5gQ3Ci6rU10jGH7VQ3h-AbkbENO2uMVGwEjmePFJF_LBH2c&usqp=CAU"}]),E=Object(d.a)(L,2),A=E[0],H=(E[1],function(e){c(e)});return Object(m.jsx)(u.a,{children:Object(m.jsx)(f.a,{initial:!0,exitBeforeEnter:!0,children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/",children:i.state?Object(m.jsx)(P,{user:i.user,products:y,markets:A,selectProduct:function(e){l(e)},loggedIn:H,newItem:function(e){e.id=y.length,S((function(t){return[].concat(Object(r.a)(t),[e])}))}}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{}),Object(m.jsx)("h1",{className:"usuarios",style:{textAlign:"center",color:"#effefe"},children:"Usu\xe1rios Cadastrados:"}),Object(m.jsx)("div",{className:"users",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",maxWidth:"800px",width:"80%",margin:"auto"},children:x.map((function(e){return Object(m.jsx)("h2",{style:{textAlign:"center",color:"#defefe",backgroundColor:"var(--primary)",margin:"10px",padding:".75rem 1.25rem",borderRadius:"50px"},children:e.singleName},.821*Math.random())}))})]})}),Object(m.jsx)(j.a,{exact:!0,path:"/product",children:Object(m.jsx)(w,{product:y[o],markets:A})}),Object(m.jsx)(j.a,{exact:!0,path:"/signin",children:Object(m.jsx)(N,{users:x,addUser:function(e){O((function(t){return[].concat(Object(r.a)(t),[e])}))}})}),Object(m.jsx)(j.a,{exact:!0,path:"/login",children:Object(m.jsx)(k,{users:x,loggedIn:H})})]})})})};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(q,{})}),document.getElementById("root"))}},[[266,1,2]]]);
//# sourceMappingURL=main.fd89c4d5.chunk.js.map