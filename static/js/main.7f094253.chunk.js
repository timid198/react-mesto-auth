(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(20),s=n.n(o),i=n(8),r=(n(30),n(24)),l=n(2),u=n(3),p=n(0);var d=function(e){var t=e.loggedIn,n=e.mail,a=e.handleLogout,c=e.handleLinkClick,o=e.headerLink,s=e.headerLinkText;return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("div",{className:"header__logo"}),Object(p.jsxs)("ul",{className:"header__menu",children:[Object(p.jsx)("li",{className:"header__mail",children:n}),Object(p.jsx)("li",{children:t?Object(p.jsx)("button",{onClick:a,type:"button",className:"header__button",children:"\u0412\u044b\u0439\u0442\u0438"}):Object(p.jsx)(i.b,{onClick:c,className:"header__link",to:o,children:s})})]})]})},j=c.a.createContext("");var h=function(e){var t=e.card,n=e.cardClick,a=e.onCardDelete,o=e.onCardLike,s=c.a.useContext(j),i=t.owner._id===s._id,r="element__trash ".concat(i?"element__trash_set":"element__trash_unset"),l=t.likes.some((function(e){return e._id===s._id})),u="element__title-like ".concat(l?"element__title-like_unset":"element__title-like_set");return Object(p.jsxs)("div",{className:"element",children:[Object(p.jsx)("img",{src:t.link,alt:t.name,className:"element__image",onClick:function(){n(t)}}),Object(p.jsx)("button",{type:"submit",className:u,onClick:function(){o(t)}}),Object(p.jsx)("p",{className:"element__title-counter",children:t.likes.length}),Object(p.jsxs)("div",{className:"element__title",children:[Object(p.jsx)("button",{type:"button",className:r,onClick:function(){a(t)}}),Object(p.jsx)("h2",{className:"element__title-text",children:t.name})]})]})};var _=function(e){var t=e.onEditProfile,n=e.onAddPlace,a=e.onEditAvatar,o=e.onCardClick,s=(e.deleteCard,e.cards),i=e.onCardLike,r=e.onCardDelete,l=c.a.useContext(j);return Object(p.jsxs)("main",{className:"main",children:[Object(p.jsx)("section",{className:"profile",children:Object(p.jsxs)("div",{className:"profile__content",children:[Object(p.jsxs)("div",{className:"profile__image",children:[Object(p.jsx)("img",{src:l.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(p.jsx)("button",{type:"button",className:"profile__overlay",onClick:a})]}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__info-title",children:[Object(p.jsx)("h2",{className:"profile__visitor-name",children:l.name}),Object(p.jsx)("button",{type:"button",className:"profile__edit-button",onClick:t})]}),Object(p.jsx)("p",{className:"profile__visitor-attribute",children:l.about})]}),Object(p.jsx)("div",{className:"profile__add",children:Object(p.jsx)("button",{type:"button",className:"profile__add-button",onClick:n})})]})}),Object(p.jsx)("section",{className:"elements",children:s.map((function(e){return Object(p.jsx)(h,{card:e,cardClick:o,onCardDelete:r,onCardLike:i},e._id)}))})]})};var m=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsxs)("article",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var b=function(e){var t=e.card,n=e.onClose,a=e.closeOverlay,c="popup ".concat(t.link?"popup_opened":"");return Object(p.jsx)("div",{className:c,onClick:a,children:Object(p.jsxs)("div",{className:"popup__window popup-view__window",children:[Object(p.jsx)("button",{type:"reset",className:"popup__close popup-view__close",onClick:n}),Object(p.jsxs)("div",{className:"popup-view__form",children:[Object(p.jsx)("img",{src:t.link,alt:t.name,className:"popup-view__image"}),Object(p.jsx)("h2",{className:"popup-view__title",children:t.name})]})]})})},f=n(22),O=n(23),v=new(function(){function e(t){var n=t.address,a=t.token,c=t.groupID;Object(f.a)(this,e),this._address=n,this._token=a,this._groupID=c}return Object(O.a)(e,[{key:"_checkPromise",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._address,"v1/").concat(this._groupID,"/cards"),{headers:{authorization:"".concat(this._token)}}).then((function(t){return e._checkPromise(t)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._address,"v1/").concat(this._groupID,"/users/me"),{headers:{authorization:"".concat(this._token)}}).then((function(t){return e._checkPromise(t)}))}},{key:"pushUserData",value:function(e){var t=this;return fetch("".concat(this._address,"v1/").concat(this._groupID,"/users/me"),{method:"PATCH",headers:{authorization:"".concat(this._token),"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.name),about:"".concat(e.about)})}).then((function(e){return t._checkPromise(e)}))}},{key:"pushAddCardData",value:function(e){var t=this;return fetch("".concat(this._address,"v1/").concat(this._groupID,"/cards"),{method:"POST",headers:{authorization:"".concat(this._token),"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.name),link:"".concat(e.link)})}).then((function(e){return t._checkPromise(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"v1/").concat(this._groupID,"/cards/").concat(e),{method:"DELETE",headers:{authorization:"".concat(this._token)}}).then((function(e){return e.ok?Promise.resolve("sucsess"):Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}},{key:"changeCardsLikes",value:function(e,t){var n=this,a=t?"DELETE":"PUT";return fetch("".concat(this._address,"v1/").concat(this._groupID,"/cards/likes/").concat(e),{method:a,headers:{authorization:"".concat(this._token)}}).then((function(e){return n._checkPromise(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._address,"v1/").concat(this._groupID,"/users/me/avatar"),{method:"PATCH",headers:{authorization:"".concat(this._token),"Content-Type":"application/json"},body:JSON.stringify({avatar:"".concat(e)})}).then((function(e){return t._checkPromise(e)}))}}]),e}())({address:"https://mesto.nomoreparties.co/",token:"4f64f170-2de3-4b0f-8592-8133023e0f4d",groupID:"cohort-22"});var x=function(e){var t=e.name,n=e.title,a=e.buttonText,c=e.isOpen,o=e.onClose,s=e.onSubmit,i=e.children,r=e.closeOverlay,l="popup popup-".concat(t," ").concat(c?"popup_opened":"");return Object(p.jsx)("div",{className:l,onClick:r,children:Object(p.jsxs)("div",{className:"popup__window popup-".concat(t,"__window"),children:[Object(p.jsx)("button",{type:"reset",className:"popup__close popup-".concat(t,"__close"),onClick:o}),Object(p.jsx)("h2",{className:"popup__title popup-".concat(t,"__title"),children:n}),Object(p.jsxs)("form",{className:"popup__form popup-".concat(t,"__form"),onSubmit:s,children:[i,Object(p.jsx)("button",{type:"submit",className:"popup__button popup-".concat(t,"__button"),children:a})]})]})})};var g=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,o=e.closeOverlay,s=c.a.useState(""),i=Object(l.a)(s,2),r=i[0],u=i[1],d=c.a.useState(""),h=Object(l.a)(d,2),_=h[0],m=h[1],b=c.a.useContext(j);return c.a.useEffect((function(){u(b.name),m(b.about)}),[b,t]),Object(p.jsxs)(x,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:r,about:_})},closeOverlay:o,children:[Object(p.jsxs)("section",{className:"popup__section",children:[Object(p.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)},name:"name",className:"popup__input popup__input_name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),Object(p.jsx)("span",{className:"popup__error popup__error_name",id:"name-error",children:" "})]}),Object(p.jsxs)("section",{className:"popup__section",children:[Object(p.jsx)("input",{type:"text",value:_,onChange:function(e){m(e.target.value)},name:"about",className:"popup__input popup__input_about",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0}),Object(p.jsx)("span",{className:"popup__error popup__error_about",id:"about-error",children:" "})]})]})};var k=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,o=e.closeOverlay,s=c.a.useRef();return Object(p.jsx)(x,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:s.current.value}),s.current.value=""},closeOverlay:o,children:Object(p.jsxs)("section",{className:"popup__section",children:[Object(p.jsx)("input",{type:"url",ref:s,name:"avatar",className:"popup__input popup__input_avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),Object(p.jsx)("span",{className:"popup__error popup__error_avatar",id:"avatar-error",children:" "})]})})};var N=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,o=e.closeOverlay,s=c.a.useState(""),i=Object(l.a)(s,2),r=i[0],u=i[1],d=c.a.useState(""),j=Object(l.a)(d,2),h=j[0],_=j[1];return c.a.useEffect((function(){u(""),_("")}),[t]),Object(p.jsxs)(x,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:r,link:h})},closeOverlay:o,children:[Object(p.jsxs)("section",{className:"popup__section",children:[Object(p.jsx)("input",{type:"text",name:"title",value:r,onChange:function(e){u(e.target.value)},className:"popup__input popup__input_title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(p.jsx)("span",{className:"popup__error popup__error_title",id:"title-error"})]}),Object(p.jsxs)("section",{className:"popup__section",children:[Object(p.jsx)("input",{type:"url",name:"link",value:h,onChange:function(e){_(e.target.value)},className:"popup__input popup__input_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(p.jsx)("span",{className:"popup__error popup__error_link",id:"link-error"})]})]})};var C=function(e){var t=e.isOpen,n=e.onClose,a=e.onCardDelete,c=e.closeOverlay;return Object(p.jsx)(x,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({_id:t})},closeOverlay:c})};n(37);var y=function(e){return e.isLoading,Object(p.jsx)("div",{className:"spinner"})},w=n(11),S=n(9);var L=function(e){var t=e.data,n=e.handleChange;return Object(p.jsxs)("fieldset",{className:"login__fieldset",children:[Object(p.jsx)("input",{value:t.email,onChange:n,type:"email",name:"email",className:"login__input login__input_email",placeholder:"Email",minLength:"2",maxLength:"40",required:!0}),Object(p.jsx)("span",{className:"login__error login__error_email",id:"email-error",children:" "}),Object(p.jsx)("input",{value:t.password,onChange:n,type:"password",name:"password",className:"login__input login__input_password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"2",maxLength:"40",required:!0}),Object(p.jsx)("span",{className:"login__error login__error_password",id:"password-error",children:" "})]})};var D=function(e){var t=e.handleLogin,n=Object(a.useState)({password:"",email:""}),c=Object(l.a)(n,2),o=c[0],s=c[1];return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),o.password&&o.email){var n=o.password,a=o.email;t({password:n,email:a})}},className:"login__form",children:[Object(p.jsx)(L,{data:o,handleChange:function(e){var t=e.target,n=t.name,a=t.value;s(Object(S.a)(Object(S.a)({},o),{},Object(w.a)({},n,a)))}}),Object(p.jsx)("button",{type:"submit",className:"login__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var P=function(e){var t=e.handleRegister,n=e.clear,o=Object(a.useState)({password:"",email:""}),s=Object(l.a)(o,2),r=s[0],u=s[1];return c.a.useEffect((function(){u({password:"",email:""})}),[n]),Object(p.jsxs)("div",{className:"register",children:[Object(p.jsx)("h2",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=r.password,a=r.email;console.log(n,a),t({password:n,email:a})},className:"register__form",children:[Object(p.jsx)(L,{data:r,handleChange:function(e){var t=e.target,n=t.name,a=t.value;u(Object(S.a)(Object(S.a)({},r),{},Object(w.a)({},n,a)))}}),Object(p.jsx)("button",{type:"submit",className:"register__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(p.jsxs)("p",{className:"register__content",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(p.jsx)(i.b,{className:"register__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},T=n(25),E=function(e){var t=e.component,n=Object(T.a)(e,["component"]);return Object(p.jsx)(u.b,{children:function(){return n.loggedIn?Object(p.jsx)(t,Object(S.a)({},n)):Object(p.jsx)(u.a,{to:"./sign-in"})}})};var I=function(e){var t=e.isOpen,n=e.content,a=e.onClose,c=e.closeOverlay,o="popup ".concat(t?"popup_opened":""),s="".concat(n?"popup-infotooltip__image-suc\u0441ess":"popup-infotooltip__image-failed"),i="".concat(n?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.");return Object(p.jsx)("div",{className:o,onClick:c,children:Object(p.jsxs)("div",{className:"popup__window popup-infotooltip",children:[Object(p.jsx)("button",{type:"reset",className:"popup__close popup-infotooltip__close",onClick:a}),Object(p.jsx)("div",{className:s}),Object(p.jsx)("h2",{className:"popup-infotooltip__title",children:i})]})})},A="https://auth.nomoreparties.co/",U=function(e){return e.ok?e.json():Promise.reject()};var z=function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],s=c.a.useState(!1),i=Object(l.a)(s,2),h=i[0],f=i[1],O=c.a.useState(!1),x=Object(l.a)(O,2),w=x[0],S=x[1],L=c.a.useState({}),T=Object(l.a)(L,2),z=T[0],q=T[1],J=c.a.useState({}),F=Object(l.a)(J,2),R=F[0],B=F[1];function H(){o(!1),f(!1),S(!1),q({}),B({}),he(!1)}var M=Object(a.useState)({name:"",about:"",avatar:"",_id:""}),G=Object(l.a)(M,2),Y=G[0],K=G[1],Q=Object(a.useState)([]),V=Object(l.a)(Q,2),W=V[0],X=V[1],Z=Object(a.useState)(!1),$=Object(l.a)(Z,2),ee=$[0],te=$[1];Object(a.useEffect)((function(){te(!0),Promise.all([v.getUserData(),v.getCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];K(n),X(a)})).catch((function(e){return console.log(e)})).finally((function(){te(!1)}))}),[]);var ne=Object(a.useState)(!1),ae=Object(l.a)(ne,2),ce=ae[0],oe=ae[1],se=Object(a.useState)(""),ie=Object(l.a)(se,2),re=ie[0],le=ie[1],ue=Object(u.g)();Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("jwt");e&&(t=e,fetch("".concat(A,"users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(U)).then((function(e){e.data.email&&(le(e.data.email),oe(!0))})).catch((function(e){return console.error(e)}));var t}()}),[ce]),Object(a.useEffect)((function(){ce&&u.a}),[ce]);var pe=Object(a.useState)(!1),de=Object(l.a)(pe,2),je=de[0],he=de[1],_e=Object(a.useState)(!1),me=Object(l.a)(_e,2),be=me[0],fe=me[1],Oe=Object(a.useState)("/sign-up"),ve=Object(l.a)(Oe,2),xe=ve[0],ge=ve[1],ke=Object(a.useState)("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),Ne=Object(l.a)(ke,2),Ce=Ne[0],ye=Ne[1];function we(e){e.target===e.currentTarget&&H()}return Object(a.useEffect)((function(){var e=function(e){"Escape"===e.key&&H()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),Object(p.jsx)(j.Provider,{value:Y,children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)(d,{loggedIn:ce,handleLogout:function(){le(""),oe(!1),localStorage.removeItem("jwt"),ue.push("/sign-in")},mail:re,handleLinkClick:function(){"/sign-up"===xe?(ge("/sign-in"),ye("\u0412\u043e\u0439\u0442\u0438")):(ge("/sign-up"),ye("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))},headerLink:xe,headerLinkText:Ce}),ee?Object(p.jsx)(y,{}):"",Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/sign-up",children:Object(p.jsx)(P,{handleRegister:function(e){(function(e,t){return fetch("".concat(A,"signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(U)})(e.password,e.email).then((function(e){he(!0),fe(!0)})).catch((function(e){console.error(e),he(!0),fe(!1)}))},clear:je})}),Object(p.jsx)(u.b,{path:"/sign-in",children:Object(p.jsx)(D,{handleLogin:function(e){(function(e,t){return fetch("".concat(A,"signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(U)})(e.password,e.email).then((function(e){e.token&&(oe(!0),localStorage.setItem("jwt",e.token),ue.push("/"))})).catch((function(e){console.error(e),le(""),he(!0),fe(!1)}))}})}),Object(p.jsx)(E,{exact:!0,path:"/",component:_,onEditProfile:function(){S(!0)},onAddPlace:function(){f(!0)},onEditAvatar:function(){o(!0)},onCardClick:function(e){B(e)},onCardDelete:function(e){q(e)},cards:W,onCardLike:function(e){te(!0);var t=e.likes.some((function(e){return e._id===Y._id}));v.changeCardsLikes(e._id,t).then((function(t){X((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)})).finally((function(){te(!1)}))},loggedIn:ce}),Object(p.jsx)(u.b,{children:ce?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsx)(u.a,{to:"/sign-in"})})]}),Object(p.jsx)(m,{}),Object(p.jsx)(I,{isOpen:je,content:be,onClose:H,closeOverlay:we}),Object(p.jsx)(g,{isOpen:w,onClose:H,onUpdateUser:function(e){te(!0),v.pushUserData(e).then((function(e){K(e),H()})).catch((function(e){return console.log(e)})).finally((function(){te(!1)}))},closeOverlay:we}),Object(p.jsx)(k,{isOpen:n,onClose:H,onUpdateAvatar:function(e){te(!0),v.changeAvatar(e.avatar).then((function(e){K(e),H()})).catch((function(e){return console.log(e)})).finally((function(){te(!1)}))},closeOverlay:we}),Object(p.jsx)(N,{isOpen:h,onClose:H,onAddPlace:function(e){te(!0),v.pushAddCardData(e).then((function(e){X([e].concat(Object(r.a)(W))),H()})).catch((function(e){return console.log(e)})).finally((function(){te(!1)}))},closeOverlay:we}),Object(p.jsx)(C,{isOpen:z._id,onClose:H,onCardDelete:function(e){te(!0),v.deleteCard(e._id).then((function(t){X((function(n){return n.filter((function(n){return n._id===e._id?!t:n}))})),H()})).catch((function(e){return console.log(e)})).finally((function(){te(!1)}))},closeOverlay:we}),Object(p.jsx)(b,{card:R,onClose:H,closeOverlay:we})]})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(i.a,{children:Object(p.jsx)(z,{})})}),document.getElementById("root")),q()}},[[38,1,2]]]);
//# sourceMappingURL=main.7f094253.chunk.js.map