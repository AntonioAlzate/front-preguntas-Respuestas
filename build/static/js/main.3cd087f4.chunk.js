(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,n){e.exports=n(71)},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),o=n(21),i=n(5),u=n(42),l=n(43),s=n(11),p=n(10),m=n(22),d=n(32),f=(n(72),n(56),"LOGIN"),E="LOGOUT",b=function(){return{type:E}},O=function(){return r.a.createElement("nav",null,r.a.createElement("section",null,r.a.createElement(p.b,{to:"/"},"Home"),r.a.createElement(p.b,{to:"/questions"},"Questions")))},v=function(){return r.a.createElement("nav",null,r.a.createElement("section",null,r.a.createElement(p.b,{to:"/"},"Home"),r.a.createElement(p.b,{to:"/questions"},"Questions"),r.a.createElement(p.b,{to:"/new"},"New"),r.a.createElement(p.b,{to:"/list"},"List"),r.a.createElement(p.b,{to:"/favorites"},"Favorites"),r.a.createElement(p.b,{to:"/profile"},"Profile")))},h=function(e){var t=e.children;return r.a.createElement("section",{className:"mt-5"},r.a.createElement("h1",null,"Home"),r.a.createElement("div",null,t),r.a.createElement("p",null,"welcome to the question and answer app."),r.a.createElement(p.b,{to:"/questions",className:"btn btn-primary btn-lg"},"View Questions"))},y=n(2),g=n.n(y),j=n(8),N=n(19),x=n.n(N),I="https://questions-answers-sofka.herokuapp.com",w="LOADING",T="LOADED_SUCCESS",q="LOADED_FAILURE",R=function(){return{type:w}},S=function(e){return{type:T,payload:e}},C=function(){return{type:q}};function A(){return function(){var e=Object(j.a)(g.a.mark(function e(t){var n,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(R()),e.prev=1,e.next=4,fetch("".concat(I,"/getAll"));case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,t(S({questions:a,redirect:null})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t(C());case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}()}function k(e){return function(){var t=Object(j.a)(g.a.mark(function t(n){var a,r;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(R()),t.prev=1,t.next=4,fetch("".concat(I,"/getOwnerAll/").concat(e));case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,n(S({questions:r,redirect:null})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),n(C());case 14:case"end":return t.stop()}},t,null,[[1,11]])}));return function(e){return t.apply(this,arguments)}}()}function L(e){return function(){var t=Object(j.a)(g.a.mark(function t(n){var a,r;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(R()),t.prev=1,t.next=4,fetch("".concat(I,"/get/").concat(e));case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,n(S({question:r,redirect:null})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),n(C());case 14:case"end":return t.stop()}},t,null,[[1,11]])}));return function(e){return t.apply(this,arguments)}}()}var P="CREAR_PERFIL",_="CREAR_PERFIL_EXITO",D="CREAR_PERFIL_EXITO",F="OBTENER_PERFIL",B="OBTENER_PERFIL_EXITO",U="OBTENER_PERFIL_ERROR",V="COMENZAR_EDICION_PERFIL",H="PERFIL_EDITADO_EXITO",X="PERFIL_EDITADO_ERROR",G="COMENZAR_OBTENER_FAVORITOS",W="OBTENER_FAVORITOS_EXITO",Q="OBTENER_PERFIL_ERROR",z="CREAR_FAVORITO",J="CREAR_FAVORITO_EXITO",M="CREAR_FAVORITO_ERROR",K="QUITAR_FAVORITO",Z="QUITAR_FAVORITO_EXITO",Y="QUITAR_FAVORITO_ERROR",$="https://questions-answers-sofka.herokuapp.com";var ee=function(){return{type:F,payload:!0}},te=function(e){return{type:B,payload:e}},ne=function(e){return{type:U,payload:e}};var ae=function(){return{type:P,payload:!0}},re=function(e){return{type:_,payload:e}},ce=function(e){return{type:D,payload:e}};var oe=function(){return{type:V}},ie=function(e){return{type:H,payload:e}},ue=function(){return{type:X,payload:!0}};function le(e){return function(){var t=Object(j.a)(g.a.mark(function t(n){var a,r;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(se()),t.prev=1,t.next=4,fetch("".concat($,"/getfavorites/").concat(e));case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,n(pe(r)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0),n(me(!0));case 15:case"end":return t.stop()}},t,null,[[1,11]])}));return function(e){return t.apply(this,arguments)}}()}var se=function(){return{type:G,payload:!0}},pe=function(e){return{type:W,payload:e}},me=function(e){return{type:Q,payload:e}};var de=function(){return{type:z,payload:!0}},fe=function(e){return{type:J,payload:e}},Ee=function(e){return{type:M,payload:e}};var be=function(){return{type:K,payload:!0}},Oe=function(e){return{type:Z,payload:e}},ve=function(){return{type:Y,payload:!0}},he=function(e){var t=e.question,n=e.excerpt,c=e.onDelete,o=e.favorite,u=Object(i.c)(function(e){return e.auth}),l=Object(i.c)(function(e){return e.profile.favorites}),m=(Object(i.c)(function(e){return e.profile.loading}),Object(i.b)()),d=Object(a.useState)(o),f=Object(s.a)(d,2),E=f[0],b=f[1];Object(a.useEffect)(function(){b(o)},[o]);var O=function(e,t){if(e){var n=l.filter(function(e){return e.userId===u.uid&&e.questionId===t}).map(function(e){return e.id});m((c=n[0],function(){var e=Object(j.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(be()),e.prev=1,e.next=4,fetch("".concat($,"/delete/favorite/").concat(c),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"}});case 4:t(Oe(c)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),t(ve());case 11:case"end":return e.stop()}},e,null,[[1,7]])}));return function(t){return e.apply(this,arguments)}}()))}else{var a={userId:u.uid,questionId:t};m((r=a,function(){var e=Object(j.a)(g.a.mark(function e(t){var n,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(de()),e.prev=1,e.next=4,fetch("".concat($,"/add/favorite"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,t(fe(a)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),t(Ee(!0));case 15:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}()))}var r,c;b(!E)};return r.a.createElement("article",{className:n?"question-excerpt":"question"},r.a.createElement("h2",{className:"mt-2"},t.question),r.a.createElement("p",null,t.category," - ",r.a.createElement("small",null,t.type)),u.uid&&void 0!=E&&r.a.createElement("button",{className:"btn btn-".concat(E?"danger":"success"," right m-2"),onClick:function(){return O(E,t.id)}},E?"unFAV":"ADD FAV"),c&&r.a.createElement("button",{className:"btn btn-danger right m-2",onClick:function(){return e=t.id,void x.a.fire({title:"\xbfEst\xe1s seguro?",text:"Una vez eliminada no podras recuperar la pregunta!!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!",cancelButtonText:"Cancelar"}).then(function(t){t.isConfirmed&&c(e)});var e}},"DELETE"),n&&r.a.createElement(p.b,{to:"/question/".concat(t.id,"/").concat(E),className:"btn btn-primary m-2"},"View Question"))},ye=function(e){var t=e.answer,n=e.log,a=Object(i.b)(),c=function(e){x.a.fire({title:"\xbfEst\xe1s seguro?",text:"Una vez eliminada no podras recuperar la respuesta!!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!",cancelButtonText:"Cancelar"}).then(function(n){n.isConfirmed&&a(function(e,t){return function(){var n=Object(j.a)(g.a.mark(function n(a){return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(R()),n.prev=1,n.next=4,fetch("".concat(I,"/delete/answer/").concat(e),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"}});case 4:x.a.fire("Eliminada!","La Respuesta ha sido eliminada correctamente","success"),a(L(t)),a(S({redirect:null})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),a(C());case 12:case"end":return n.stop()}},n,null,[[1,9]])}));return function(e){return n.apply(this,arguments)}}()}(e,t.questionId))})};return r.a.createElement("aside",{className:"answer"},r.a.createElement("p",null,t.answer),n===t.userId&&r.a.createElement("button",{type:"button",className:"btn btn-danger float-right",onClick:function(){return c(t.id)}},"DELETE"))},ge=function(e){var t=e.match,n=Object(i.b)(),c=Object(i.c)(function(e){return e.question}),o=Object(i.c)(function(e){return e.auth}),u=t.params,l=u.id,m=u.fav,d=Object(a.useState)(m),f=Object(s.a)(d,2),E=f[0],b=f[1];Object(a.useEffect)(function(){n(L(l)),n(le(o.uid)),b("true"===m)},[n,l]);return r.a.createElement("section",null,c.loading.question?r.a.createElement("p",null,"Loading question..."):c.hasErrors.question?r.a.createElement("p",null,"Unable to display question."):r.a.createElement(he,{question:c.question,favorite:E}),o.uid&&r.a.createElement(p.b,{to:"/answer/".concat(l,"/").concat(E),className:"btn btn-primary right m-2"},"Reply"),r.a.createElement("h2",null,"Answers"),c.question.answers&&c.question.answers.length?c.question.answers.map(function(e){return r.a.createElement(ye,{key:e.id,answer:e,log:o.uid})}):r.a.createElement("p",null,"Empty answer!"))},je=function(){var e=Object(i.b)(),t=Object(i.c)(function(e){return e.question}),n=Object(i.c)(function(e){return e.auth}),c=Object(i.c)(function(e){return e.profile});Object(a.useEffect)(function(){e(A()),null!==n.uid&&void 0!==n.uid&&e(le(n.uid))},[e,n.uid]);return r.a.createElement("section",{className:"mt-5"},r.a.createElement("h1",null,"Questions"),t.loading?r.a.createElement("p",null,"Loading questions..."):t.hasErrors?r.a.createElement("p",null,"Unable to display questions."):t.questions.map(function(e){var t=0!==c.favorites.filter(function(t){return(null===t||void 0===t?void 0:t.questionId)===e.id}).length;return r.a.createElement(he,{key:e.id,question:e,excerpt:!0,favorite:t})}))},Ne=n(31),xe=function(){var e=Object(Ne.a)(),t=e.register,n=e.handleSubmit,c=Object(m.g)(),o=Object(i.b)(),u=Object(i.c)(function(e){return e.question}),l=Object(i.c)(function(e){return e.auth});return Object(a.useEffect)(function(){u.redirect&&c.push(u.redirect)},[u.redirect,c]),r.a.createElement("section",{className:"mt-5"},r.a.createElement("h1",null,"New Question"),r.a.createElement("form",{onSubmit:n(function(e){var t;e.userId=l.uid,e.ownerEmail=l.email,o((t=e,function(){var e=Object(j.a)(g.a.mark(function e(n){var a,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n(R()),e.prev=1,e.next=4,fetch("".concat(I,"/create"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a.text();case 7:r=e.sent,n(S({redirect:"/question/".concat(r,"/false")})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n(C());case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}()))})},r.a.createElement("div",null,r.a.createElement("label",{for:"type"},"Type"),r.a.createElement("select",Object.assign({},t("type"),{id:""}),r.a.createElement("option",{value:"OPEN (LONG OPEN BOX)"},"OPEN (LONG OPEN BOX)"),r.a.createElement("option",{value:"OPINION (SHORT OPEN BOX)"},"OPINION (SHORT OPEN BOX)"),r.a.createElement("option",{value:"WITH RESULT (OPEN BOX WITH LINK)"},"WITH RESULT (OPEN BOX WITH LINK)"),r.a.createElement("option",{value:"WITH EVIDENCE (OPEN BOX WITH VIDEO)"},"WITH EVIDENCE (OPEN BOX WITH VIDEO)"))),r.a.createElement("div",null,r.a.createElement("label",{for:"category"},"Category"),r.a.createElement("select",Object.assign({},t("category"),{id:"category"}),r.a.createElement("option",{value:"TECHNOLOGY AND COMPUTER"},"TECHNOLOGY AND COMPUTER"),r.a.createElement("option",{value:"SCIENCES"},"SCIENCES"),r.a.createElement("option",{value:"SOFTWARE DEVELOPMENT"},"SOFTWARE DEVELOPMENT"),r.a.createElement("option",{value:"SOCIAL SCIENCES"},"SOCIAL SCIENCES"),r.a.createElement("option",{value:"LANGUAGE"},"LANGUAGE"))),r.a.createElement("div",null,r.a.createElement("label",{for:"question"},"Question"),r.a.createElement("textarea",Object.assign({id:"question"},t("question",{required:!0,maxLength:300})))),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:u.loading},u.loading?"Saving ....":"Save")))},Ie=function(e){var t=e.match,n=Object(i.b)(),c=Object(i.c)(function(e){return e.question}),o=Object(i.c)(function(e){return e.auth}),u=Object(Ne.a)(),l=u.register,s=u.handleSubmit,p=t.params,d=p.id,f=p.fav,E=Object(m.g)();Object(a.useEffect)(function(){n(L(d))},[n,d]),Object(a.useEffect)(function(){c.redirect&&E.push(c.redirect)},[c.redirect,E]);return r.a.createElement("section",null,c.loading.question?r.a.createElement("p",null,"Loading question..."):c.hasErrors.question?r.a.createElement("p",null,"Unable to display question."):r.a.createElement(he,{question:c.question}),r.a.createElement("h1",null,"New Answer"),r.a.createElement("form",{onSubmit:s(function(e){e.userId=o.uid,e.questionId=d;var t={emailTo:c.question.ownerEmail,body:'Se ha agregado una respuesta a tu pregunta "'.concat(c.question.question,'"')},a=c.question.ownerEmail!==o.email;n(function(e,t,n,a){return function(){var r=Object(j.a)(g.a.mark(function r(c){return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return c(R()),r.prev=1,r.next=4,fetch("".concat(I,"/add"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if(!n){r.next=7;break}return r.next=7,fetch("".concat(I,"/send/email"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 7:c(S({redirect:"/question/".concat(e.questionId,"/").concat(a)})),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),c(C());case 13:case"end":return r.stop()}},r,null,[[1,10]])}));return function(e){return r.apply(this,arguments)}}()}(e,t,a,"true"===f))})},r.a.createElement("div",null,r.a.createElement("label",{for:"answer"},"Answer"),r.a.createElement("textarea",Object.assign({id:"answer"},l("answer",{required:!0,maxLength:300})))),r.a.createElement("button",{type:"submit",className:"button",disabled:c.loading},c.loading?"Saving ....":"Save")))},we=function(){var e=Object(i.b)(),t=Object(i.c)(function(e){return e.question}),n=Object(i.c)(function(e){return e.auth}),c=Object(i.c)(function(e){return e.profile});Object(a.useEffect)(function(){e(k(n.uid)),e(le(n.uid))},[e,n.uid]),Object(a.useEffect)(function(){t.redirect&&(e(k(n.uid)),e(le(n.uid)))},[t.redirect,e,n.uid]);var o=function(t){e(function(e){return function(){var t=Object(j.a)(g.a.mark(function t(n){return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(R()),t.prev=1,t.next=4,fetch("".concat(I,"/delete/").concat(e),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"}});case 4:x.a.fire("Eliminada!","La pregunta ha sido eliminada correctamente","success"),n(S({redirect:"/list"})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(C());case 11:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()}(t))};return r.a.createElement("section",{className:"mt-5"},r.a.createElement("h1",null,"Questions"),t.loading?r.a.createElement("p",null,"Loading questions..."):t.hasErrors?r.a.createElement("p",null,"Unable to display questions."):t&&t.questions.map(function(e){var t=0!==c.favorites.filter(function(t){return(null===t||void 0===t?void 0:t.questionId)===e.id}).length;return r.a.createElement(he,{key:e.id,question:e,excerpt:!0,onDelete:o,favorite:t})}))},Te=n(45),qe=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("footer",{className:"bg-light text-center text-lg-start"},r.a.createElement("div",{className:"text-center bg-dark mt-5"},r.a.createElement("p",{className:"text-muted"},"Aplicaci\xf3n de preguntas y respuestas, \xfanete a la comunidad, colabora poniendo tus preguntas y dando respuesta a las de los dem\xe1s"),r.a.createElement("p",{className:"text-light"},"\xa9 2022 Copyright: Antonio Alzate Naranjo"))))},Re=n(20),Se=n(7),Ce=function(){var e=Object(i.b)(),t=Object(i.c)(function(e){return e.profile.profile}),n=Object(i.c)(function(e){return e.profile.loading}),c=Object(i.c)(function(e){return e.profile.error}),o=Object(i.c)(function(e){return e.auth}),u=Object(a.useState)(!0),l=Object(s.a)(u,2),p=l[0],m=l[1],d=Object(a.useState)({nombre:"",apellido:""}),f=Object(s.a)(d,2),E=f[0],b=f[1];Object(a.useEffect)(function(){!function(){var t;e((t=o.uid,function(){var e=Object(j.a)(g.a.mark(function e(n){var a,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n(ee()),e.prev=1,e.next=4,fetch("".concat($,"/get/profile/").concat(t));case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,n(te(r)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),n(ne(!0));case 15:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}()))}()},[e]),Object(a.useEffect)(function(){b({nombre:t.nombres,apellido:t.apellidos})},[t]);var O=function(e){m(!1),b(Object(Se.a)(Object(Se.a)({},E),{},Object(Re.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"row justify-content-center mt-5"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"text-center mb-4 font-weight-bold"},"Perfil de usuario"),r.a.createElement("form",{onSubmit:function(n){if(n.preventDefault(),null===t.id){var a={userId:o.uid,nombres:E.nombre,apellidos:E.apellido,correo:o.email};e((c=a,function(){var e=Object(j.a)(g.a.mark(function e(t){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(ae()),e.prev=1,e.next=4,fetch("".concat($,"/create/profile"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 4:n=e.sent,t(re(n)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(ce(!0));case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()))}else{var r={id:t.id,userId:o.uid,nombres:E.nombre,apellidos:E.apellido,correo:o.email};e(function(e){return function(){var t=Object(j.a)(g.a.mark(function t(n){return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(oe()),t.prev=1,t.next=4,fetch("".concat($,"/profile/").concat(e.id),{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:n(ie(e)),x.a.fire("Actualizado","Su informaci\xf3n se actualizo exitosamente.","success"),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n(ue()),x.a.fire({icon:"error",tittle:"Error",text:"Se presento un error tratando de actualizar su informaci\xf3n"});case 13:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()}(r))}var c}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",name:"nombre",value:E.nombre,onChange:O})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Last Name",name:"apellido",value:E.apellido,onChange:O})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"email",name:"correo",value:o.email,readOnly:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-5",disabled:p},"Save Changes")),n?r.a.createElement("p",{className:"p2 mt-4 text-center"},"Cargando..."):null,c?r.a.createElement("p",{className:"alert alert-danger p2 mt-4 text-center"},"Se present\xf3 un error"):null))))},Ae=function(){var e=Object(i.c)(function(e){return e.auth}),t=Object(i.c)(function(e){return e.profile}),n=Object(i.c)(function(e){return e.question}),c=Object(i.b)();Object(a.useEffect)(function(){c(A()),c(le(e.uid))},[c]);return r.a.createElement("section",{className:"mt-5"},r.a.createElement("h1",null,"Favorites"),function(){if(t.loading)return r.a.createElement("p",null,"Loading questions...");if(t.error)return r.a.createElement("p",null,"Unable to display questions.");var e=[];return n.questions.forEach(function(n){t.favorites.forEach(function(t){n.id===t.questionId&&e.push(n)})}),e.map(function(e){return r.a.createElement(he,{key:e.id,question:e,excerpt:!0,favorite:!0})})}())};d.a.initializeApp({apiKey:"AIzaSyDUhnIiSKTrzZAS_arbEyPMTZIvkPkm7PE",authDomain:"preguntas-respuestas-50b8f.firebaseapp.com",projectId:"preguntas-respuestas-50b8f",storageBucket:"preguntas-respuestas-50b8f.appspot.com",messagingSenderId:"883930830938",appId:"1:883930830938:web:98dcdc700b19a89036a063"});var ke=d.a.auth();function Le(){return r.a.createElement("button",{className:"button right",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;ke.signInWithPopup(e)}},"Sign in with google")}function Pe(e){var t=e.dispatch;return ke.currentUser&&r.a.createElement("button",{className:"button right",onClick:function(){t(b()),ke.signOut()}},"Sign out")}var _e=function(){var e=Object(Te.a)(ke),t=Object(s.a)(e,1)[0],n=Object(i.b)();return Object(a.useEffect)(function(){var e,a;n((e=null===t||void 0===t?void 0:t.email,a=null===t||void 0===t?void 0:t.uid,{type:f,payload:{email:e,uid:a}}))},[t]),r.a.createElement(p.a,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:function(){return r.a.createElement(h,null,r.a.createElement(Pe,{dispatch:n}))}}),r.a.createElement(m.b,{exact:!0,path:"/questions",component:je}),r.a.createElement(m.b,{exact:!0,path:"/question/:id/:fav",component:ge}),r.a.createElement(m.b,{exact:!0,path:"/list",component:we}),r.a.createElement(m.b,{exact:!0,path:"/answer/:id/:fav",component:Ie}),r.a.createElement(m.b,{exact:!0,path:"/new",component:xe}),r.a.createElement(m.b,{exact:!0,path:"/profile",component:Ce}),r.a.createElement(m.b,{exact:!0,path:"/favorites",component:Ae}),r.a.createElement(m.a,{to:"/"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:function(){return r.a.createElement(h,null,r.a.createElement(Le,{dispatch:n}))}}),r.a.createElement(m.b,{exact:!0,path:"/questions",component:je}),r.a.createElement(m.b,{exact:!0,path:"/question/:id",component:ge}),r.a.createElement(m.b,{exact:!0,path:"/answer/:id",component:Ie}),r.a.createElement(m.a,{to:"/"}))),r.a.createElement(qe,null))},De={loading:!1,hasErrors:!1,questions:[],question:{},redirect:null};var Fe={email:null,uid:null};var Be=n(12),Ue={profile:{},error:null,loading:!1,favorites:[]};var Ve=Object(o.combineReducers)({question:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(Se.a)(Object(Se.a)({},e),{},{loading:!0});case T:return Object(Se.a)(Object(Se.a)(Object(Se.a)({},e),t.payload),{},{loading:!1,hasErrors:!1});case q:return Object(Se.a)(Object(Se.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n=t.payload;return{email:n.email,uid:n.uid};case E:return Fe;default:return e}},profile:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case P:case F:case V:case G:case z:case K:return Object(Se.a)(Object(Se.a)({},t),{},{loading:n.payload});case _:return Object(Se.a)(Object(Se.a)({},t),{},{loading:!1,profile:n.payload});case D:case U:case X:case Q:case M:case Y:return Object(Se.a)(Object(Se.a)({},t),{},{loading:!1,error:n.payload});case B:case H:return Object(Se.a)(Object(Se.a)({},t),{},{loading:!1,error:null,profile:n.payload});case W:return Object(Se.a)(Object(Se.a)({},t),{},{loading:!1,error:null,favorites:n.payload});case J:return Object(Se.a)(Object(Se.a)({},t),{},{loading:!1,favorites:[].concat(Object(Be.a)(t.favorites),[n.payload])});case Z:return Object(Se.a)(Object(Se.a)({},t),{},{favorites:null===(e=t.favorites)||void 0===e?void 0:e.filter(function(e){return e.id!==n.payload}),loading:!1});default:return t}}}),He=(n(70),Object(o.createStore)(Ve,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(u.a))));Object(c.render)(r.a.createElement(i.a,{store:He},r.a.createElement(_e,{dispatch:He.dispatch})),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.3cd087f4.chunk.js.map