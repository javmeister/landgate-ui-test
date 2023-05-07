"use strict";(self.webpackChunklandgate_ui_test=self.webpackChunklandgate_ui_test||[]).push([["src_app_modules_people-ngrx_people-ngrx_module_ts"],{212:(Oe,G,v)=>{v.r(G),v.d(G,{PeopleNgrxModule:()=>Ze});var J=v(4755),m=v(2997),x=v(2655),e=v(2223),s=(()=>((s=s||{})[s.EntitiesOnly=0]="EntitiesOnly",s[s.Both=1]="Both",s[s.None=2]="None",s))();function b(n){return function(r,d){const l={ids:[...d.ids],entities:{...d.entities}},f=n(r,l);return f===s.Both?Object.assign({},d,l):f===s.EntitiesOnly?{...d,entities:l.entities}:d}}function Z(n,p){const r=p(n);return(0,e.X6Q)()&&void 0===r&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",n,"The `selectId` implementation:",p.toString()),r}function Y(n){function p(u,i){const o=Z(u,n);return o in i.entities?s.None:(i.ids.push(o),i.entities[o]=u,s.Both)}function r(u,i){let o=!1;for(const t of u)o=p(t,i)!==s.None||o;return o?s.Both:s.None}function l(u,i){const o=Z(u,n);return o in i.entities?(i.entities[o]=u,s.EntitiesOnly):(i.ids.push(o),i.entities[o]=u,s.Both)}function y(u,i){const t=(u instanceof Array?u:i.ids.filter(a=>u(i.entities[a]))).filter(a=>a in i.entities).map(a=>delete i.entities[a]).length>0;return t&&(i.ids=i.ids.filter(a=>a in i.entities)),t?s.Both:s.None}function C(u,i){return O([u],i)}function O(u,i){const o={};return(u=u.filter(a=>a.id in i.entities)).length>0?u.filter(c=>function U(u,i,o){const a=Object.assign({},o.entities[i.id],i.changes),c=Z(a,n),g=c!==i.id;return g&&(u[i.id]=c,delete o.entities[i.id]),o.entities[c]=a,g}(o,c,i)).length>0?(i.ids=i.ids.map(c=>o[c]||c),s.Both):s.EntitiesOnly:s.None}function N(u,i){const o=[],t=[];for(const g of u){const M=Z(g,n);M in i.entities?t.push({id:M,changes:g}):o.push(g)}const a=O(t,i),c=r(o,i);switch(!0){case c===s.None&&a===s.None:return s.None;case c===s.Both||a===s.Both:return s.Both;default:return s.EntitiesOnly}}return{removeAll:function P(u){return Object.assign({},u,{ids:[],entities:{}})},addOne:b(p),addMany:b(r),setAll:b(function d(u,i){return i.ids=[],i.entities={},r(u,i),s.Both}),setOne:b(l),setMany:b(function f(u,i){const o=u.map(t=>l(t,i));switch(!0){case o.some(t=>t===s.Both):return s.Both;case o.some(t=>t===s.EntitiesOnly):return s.EntitiesOnly;default:return s.None}}),updateOne:b(C),updateMany:b(O),upsertOne:b(function L(u,i){return N([u],i)}),upsertMany:b(N),removeOne:b(function h(u,i){return y([u],i)}),removeMany:b(y),map:b(function A(u,i){return O(i.ids.reduce((a,c)=>{const g=u(i.entities[c]);return g!==i.entities[c]&&a.push({id:c,changes:g}),a},[]).filter(({id:a})=>a in i.entities),i)}),mapOne:b(function k({map:u,id:i},o){const t=o.entities[i];return t?C({id:i,changes:u(t)},o):s.None})}}function te(n,p){const{removeOne:r,removeMany:d,removeAll:l}=Y(n);function f(o,t){return h([o],t)}function h(o,t){const a=o.filter(c=>!(Z(c,n)in t.entities));return 0===a.length?s.None:(i(a,t),s.Both)}function P(o,t){const a=Z(o,n);return a in t.entities?(t.ids=t.ids.filter(c=>c!==a),i([o],t),s.Both):f(o,t)}function C(o,t){return A([o],t)}function A(o,t){const a=[],c=o.filter(g=>function O(o,t,a){if(!(t.id in a.entities))return!1;const g=Object.assign({},a.entities[t.id],t.changes),M=Z(g,n);return delete a.entities[t.id],o.push(g),M!==t.id}(a,g,t)).length>0;if(0===a.length)return s.None;{const g=t.ids,M=[];return t.ids=t.ids.filter((_,w)=>_ in t.entities||(M.push(w),!1)),i(a,t),!c&&M.every(_=>t.ids[_]===g[_])?s.EntitiesOnly:s.Both}}function u(o,t){const a=[],c=[];for(const _ of o){const w=Z(_,n);w in t.entities?c.push({id:w,changes:_}):a.push(_)}const g=A(c,t),M=h(a,t);switch(!0){case M===s.None&&g===s.None:return s.None;case M===s.Both||g===s.Both:return s.Both;default:return s.EntitiesOnly}}function i(o,t){o.sort(p);const a=[];let c=0,g=0;for(;c<o.length&&g<t.ids.length;){const M=o[c],_=Z(M,n),w=t.ids[g];p(M,t.entities[w])<=0?(a.push(_),c++):(a.push(w),g++)}t.ids=a.concat(c<o.length?o.slice(c).map(n):t.ids.slice(g)),o.forEach((M,_)=>{t.entities[n(M)]=M})}return{removeOne:r,removeMany:d,removeAll:l,addOne:b(f),updateOne:b(C),upsertOne:b(function N(o,t){return u([o],t)}),setAll:b(function y(o,t){return t.entities={},t.ids=[],h(o,t),s.Both}),setOne:b(P),setMany:b(function U(o,t){const a=o.map(c=>P(c,t));switch(!0){case a.some(c=>c===s.Both):return s.Both;case a.some(c=>c===s.EntitiesOnly):return s.EntitiesOnly;default:return s.None}}),addMany:b(h),updateMany:b(A),upsertMany:b(u),map:b(function k(o,t){return A(t.ids.reduce((c,g)=>{const M=o(t.entities[g]);return M!==t.entities[g]&&c.push({id:g,changes:M}),c},[]),t)}),mapOne:b(function L({map:o,id:t},a){const c=a.entities[t];return c?C({id:t,changes:o(c)},a):s.None})}}const S=(0,m.PH)("[People] Request Load People"),F=(0,m.PH)("[People] People Loaded Successfully",(0,m.Ky)()),I=(0,m.PH)("[People] Update Person",(0,m.Ky)()),oe=(0,m.PH)("[People] Search People",(0,m.Ky)()),ie=(0,m.PH)("[People] Person Updated Successfully",(0,m.Ky)()),z="people",q=function ne(n={}){const{selectId:p,sortComparer:r}={selectId:n.selectId??(h=>h.id),sortComparer:n.sortComparer??!1},d=function X(){return{getInitialState:function n(p={}){return Object.assign({ids:[],entities:{}},p)}}}(),l=function ee(){return{getSelectors:function n(p){const r=h=>h.ids,d=h=>h.entities,l=(0,m.P1)(r,d,(h,y)=>h.map(P=>y[P])),f=(0,m.P1)(r,h=>h.length);return p?{selectIds:(0,m.P1)(p,r),selectEntities:(0,m.P1)(p,d),selectAll:(0,m.P1)(p,l),selectTotal:(0,m.P1)(p,f)}:{selectIds:r,selectEntities:d,selectAll:l,selectTotal:f}}}}();return{selectId:p,sortComparer:r,...d,...l,...r?te(p,r):Y(p)}}({selectId:n=>n.id}),re=q.getInitialState({isLoading:!0,error:null}),se=(0,m.Lq)(re,(0,m.on)(S,(n,p)=>q.setAll([],{...n,isLoading:!0})),(0,m.on)(F,(n,p)=>q.setAll(p.people,{...n,isLoading:!1})),(0,m.on)(I,(n,{person:p})=>q.updateOne(p,n))),{selectEntities:le,selectAll:ae}=q.getSelectors();var Q=v(4351),E=v(4004),D=v(262),H=v(515),B=v(9646);class ${constructor(p){this.id=p.id||Math.random().toString(36).substring(2,7).toLowerCase(),this.firstName=p.firstName||"",this.lastName=p.lastName||"",this.age=p.age||"",this.jobTitle=p.jobTitle||"",this.bio=p.bio||"",this.avatarImage=p.avatarImage||"",this.facebook=p.facebook||"",this.twitter=p.twitter||"",this.instagram=p.instagram||"",this.fullName=`${this.firstName} ${this.lastName}`}}let ue=(()=>{class n{constructor(){this.people=[],this.mockPeopleList=[{id:"kcvb",firstName:"John",lastName:"Doe",age:"41",jobTitle:"Wanna be Singer",avatarImage:"portrait-2.jpg"},{id:"dkja",firstName:"Jane",lastName:"Doe",age:"22",jobTitle:"Singer",avatarImage:"portrait-4.jpg"},{id:"cbxz",firstName:"Alice",lastName:"Doe",age:"21",jobTitle:"Astronaut",avatarImage:"portrait-1.jpg"},{id:"vmko",firstName:"Bob",lastName:"Doe",age:"30",jobTitle:"TV Host",avatarImage:"portrait-3.jpg"}],this.people=this.mockPeopleList.map(r=>new $(r))}getPeople(){return(0,B.of)(this.people)}getPerson(r){var d=this.people.find(l=>l.id===r?.toLowerCase());return(0,B.of)(d||new $)}search(r){return this.getPeople().pipe((0,E.U)(d=>d.filter(l=>l.firstName.toLowerCase().indexOf(r.toLowerCase())>-1)))}updatePerson(r,d){var l=this.people.findIndex(f=>f.id===r);return l>-1?(this.people=this.mockPeopleList.map((f,h)=>new $(h===l?{...this.people[l],...d}:f)),(0,B.of)(this.people[l])):(0,B.of)(new $)}static#e=this.\u0275fac=function(d){return new(d||n)};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),pe=(()=>{class n{constructor(r,d){this.actions$=r,this.peopleService=d,this.loadPeople$=(0,x.GW)(()=>this.actions$.pipe((0,x.l4)(S),(0,Q.b)(()=>this.peopleService.getPeople().pipe((0,E.U)(l=>F({people:l})),(0,D.K)(()=>H.E))))),this.searchPeople$=(0,x.GW)(()=>this.actions$.pipe((0,x.l4)(oe),(0,Q.b)(l=>this.peopleService.search(l.searchQuery).pipe((0,E.U)(f=>F({people:f})),(0,D.K)(()=>H.E))))),this.updatePerson$=(0,x.GW)(()=>this.actions$.pipe((0,x.l4)(I),(0,Q.b)(l=>this.peopleService.updatePerson(l.person.id,l.person.changes).pipe((0,E.U)(f=>ie({person:f})),(0,D.K)(()=>H.E)))))}static#e=this.\u0275fac=function(d){return new(d||n)(e.LFG(x.eX),e.LFG(ue))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac})}return n})();var R=v(6943),K=v(6823);const{selectRouteParams:ge}=(0,R.VF)(),j=(0,m.ZF)(z),me=((0,m.P1)(j,n=>n.isLoading),(0,m.P1)(j,n=>n.error),(0,m.P1)(j,ae)),fe=(0,m.P1)(j,le),he=(0,m.P1)(fe,ge,(n,{id:p})=>n[p]),be=function(n){return[n]};function ye(n,p){if(1&n&&(e.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9),e._UZ(4,"img",10),e.qZA(),e.TgZ(5,"span",11),e._uU(6),e.qZA(),e.TgZ(7,"h4",12),e._uU(8),e.qZA(),e._UZ(9,"p",13),e.qZA(),e.TgZ(10,"div",14)(11,"ul",15)(12,"li",16)(13,"a",17),e.O4$(),e.TgZ(14,"svg",18),e._UZ(15,"use",19),e.qZA()()(),e.kcU(),e.TgZ(16,"li",16)(17,"a",17),e.O4$(),e.TgZ(18,"svg",18),e._UZ(19,"use",20),e.qZA()()(),e.kcU(),e.TgZ(20,"li",16)(21,"a",17),e.O4$(),e.TgZ(22,"svg",18),e._UZ(23,"use",21),e.qZA()()()()()()()),2&n){const r=p.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(8,be,r.id)),e.xp6(3),e.MGl("src","./assets/images/",r.avatarImage,"",e.LSH),e.xp6(2),e.Oqu(r.jobTitle),e.xp6(2),e.Oqu(r.fullName),e.xp6(1),e.Q6J("innerHTML",r.bio,e.oJD),e.xp6(4),e.Q6J("href",r.facebook,e.LSH),e.xp6(4),e.s9C("href",r.twitter,e.LSH),e.xp6(4),e.s9C("href",r.instagram,e.LSH)}}let Me=(()=>{class n{constructor(r){this.store=r,this.store.dispatch(S()),this.people$=this.store.select(me)}ngOnInit(){}static#e=this.\u0275fac=function(d){return new(d||n)(e.Y36(m.yh))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-people-ngrx-component"]],decls:8,vars:3,consts:[[1,"container","mt-10"],[1,"w-md-75","w-lg-50","text-center","mx-md-auto","mb-5","mb-md-9"],[1,"text-black","fw-bolder"],[1,"container","mt-5","mb-10"],[1,"row","gx-3","mb-5"],["class","col-sm-6 col-lg-3 mb-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-lg-3","mb-3"],[1,"card","card-transition","shadow","h-100",3,"routerLink"],[1,"card-body","d-flex","flex-column"],[1,"avatar","avatar-xxl","mb-4"],["alt","Image Description",1,"avatar-img","rounded-circle",3,"src"],[1,"card-subtitle","fw-bold"],[1,"card-title"],[1,"card-text",3,"innerHTML"],[1,"card-footer","pt-0"],[1,"list-inline","mb-0","social"],[1,"list-inline-item"],["target","_blank",1,"btn","btn-primary-soft","btn-xs","rounded","d-flex","align-items-center","justify-content-center",3,"href"],["width","18","height","18"],[0,"xlink","href","#facebook"],[0,"xlink","href","#twitter"],[0,"xlink","href","#instagram"]],template:function(d,l){1&d&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3,"Our People"),e.qZA()()(),e.TgZ(4,"div",3)(5,"div",4),e.YNc(6,ye,24,10,"div",5),e.ALo(7,"async"),e.qZA()()),2&d&&(e.xp6(6),e.Q6J("ngForOf",e.lcZ(7,1,l.people$)))},dependencies:[J.sg,K.rH,J.Ov],styles:["[_nghost-%COMP%]   .text-cap[_ngcontent-%COMP%]{display:block;color:#1e2022;font-size:.8125rem;font-weight:600;letter-spacing:.03125rem;text-transform:uppercase;margin-bottom:1rem}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{color:#1e2022;font-weight:700}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%]{color:#677788}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{background-color:#fff}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.3125rem .5rem}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#377dff}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:#fff}[_nghost-%COMP%]   .card-transition[_ngcontent-%COMP%]{transition:all .2s ease-in-out}[_nghost-%COMP%]   .card-transition[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   .card-transition[_ngcontent-%COMP%]:hover{transform:translateY(-.1875rem)!important}"]})}return n})();var T=v(5030),V=v(7549);const ve=[{path:"",component:Me},{path:":id",component:(()=>{class n{constructor(r){this.store=r,this.store.dispatch(S()),this.person$=this.store.select(he),this._subscription$=this.person$.subscribe(d=>{this._personInitialValues=d})}ngOnDestroy(){this._subscription$?.unsubscribe?.()}onSubmit(r){this.store.dispatch(I({person:{id:r.value.id,changes:r.value}})),this.store.dispatch(S()),this.reset(r)}isDirty(r){return r.dirty&&r.touched}reset(r){r.reset(this._personInitialValues)}static#e=this.\u0275fac=function(d){return new(d||n)(e.Y36(m.yh))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-person-ngrx-component"]],decls:129,vars:52,consts:[[1,"bg-dark","pt-9","pb-11","d-none","d-md-block"],[1,"container-md"],[1,"row","align-items-center"],[1,"col"],[1,"fw-bold","text-white","mb-2"],[1,"fs-lg","text-white-75","mb-0"],[1,"fw-bold","text-white"],[1,"pb-8","pb-md-11","mt-md-n6"],[1,"row"],[1,"col-12","col-md-3"],[1,"card","card-bleed","border-bottom","border-bottom-md-0","shadow-light-lg"],["id","sidenavCollapse",1,"collapse","d-md-block"],[1,"card-body"],[1,"d-none","d-lg-block","text-center","mb-5"],[1,"avatar","avatar-xxl","mb-3"],["alt","Image Description",1,"avatar-img","rounded-circle",3,"src"],[1,"card-title","mb-0","fw-bolder"],[1,"card-text","small","text-uppercase"],[1,"fw-bolder","text-uppercase","mb-3"],[1,"card-list","list","text-gray-700","mb-6"],[1,"list-item","active"],["href","account-general.html",1,"list-link","text-reset"],[1,"list-item"],["href","account-security.html",1,"list-link","text-reset"],[1,"col-12","col-md-9"],[1,"card","card-bleed","shadow-light-lg","mb-6"],[1,"card-header"],[1,"mb-0","fw-bolder"],[3,"ngSubmit","reset"],["personBasicInfo","ngForm"],[1,"col-12","col-md-6"],[1,"form-group"],["for","firstName",1,"form-label"],["id","firstName","name","firstName","type","text","placeholder","Bronn",1,"form-control",3,"ngModel"],["for","lastName",1,"form-label"],["id","lastName","name","lastName","type","text","placeholder","Blackwater",1,"form-control",3,"ngModel"],["for","age",1,"form-label"],["id","age","name","age","type","text","placeholder","20",1,"form-control",3,"ngModel"],["for","jobTitle",1,"form-label"],["id","jobTitle","name","jobTitle","type","text","placeholder","Master of Coin",1,"form-control",3,"ngModel"],[1,"col-12"],["for","bio",1,"form-label"],["name","bio","id","bio",1,"bio-editor",3,"ngModel"],[1,"col-12","col-md-12","d-flex","justify-content-end"],["type","button",1,"btn","w-15","me-4","btn-white",3,"disabled","click"],["type","submit","value","Save Changes",1,"btn","w-25","btn-primary",3,"disabled"],["type","hidden","name","id","id","id",3,"ngModel","value"],[1,"card","card-bleed","shadow-light-lg","mb-8"],["personSocialMedia","ngForm"],[1,"col-12","col-md-12"],[1,"form-group","social"],["for","facebook",1,"form-label"],[1,"input-group"],[1,"input-group-text","d-flex","align-items-center","fw-bold"],["width","24","height","24",1,"me-3"],[0,"xlink","href","#facebook"],["id","facebook","name","facebook","type","text",1,"form-control",3,"ngModel"],["for","twitter",1,"form-label"],[0,"xlink","href","#twitter"],["id","twitter","name","twitter","type","text",1,"form-control",3,"ngModel"],["for","instagram",1,"form-label"],[0,"xlink","href","#instagram"],["id","instagram","name","instagram","type","text",1,"form-control",3,"ngModel"],[1,"col-12","col-md-12","mt-4","d-flex","justify-content-end"]],template:function(d,l){if(1&d){const f=e.EpF();e.TgZ(0,"header",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),e._uU(5," Personal Information "),e.qZA(),e.TgZ(6,"p",5),e._uU(7," for "),e.TgZ(8,"span",6),e._uU(9),e.ALo(10,"async"),e.qZA()()()()()(),e.TgZ(11,"main",7)(12,"div",1)(13,"div",8)(14,"div",9)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14),e._UZ(20,"img",15),e.ALo(21,"async"),e.qZA(),e.TgZ(22,"h4",16),e._uU(23),e.ALo(24,"async"),e.qZA(),e.TgZ(25,"p",17),e._uU(26),e.ALo(27,"async"),e.qZA()(),e.TgZ(28,"h6",18),e._uU(29," Account "),e.qZA(),e.TgZ(30,"ul",19)(31,"li",20)(32,"a",21),e._uU(33," Basic Information "),e.qZA()(),e.TgZ(34,"li",22)(35,"a",23),e._uU(36," Social Media "),e.qZA()()()()()()(),e.TgZ(37,"div",24)(38,"div",25)(39,"div",26)(40,"h4",27),e._uU(41," Basic Information "),e.qZA()(),e.TgZ(42,"div",12)(43,"form",28,29),e.NdJ("ngSubmit",function(){e.CHM(f);const y=e.MAs(44);return e.KtG(l.onSubmit(y))})("reset",function(y){return y.preventDefault()}),e.TgZ(45,"div",8)(46,"div",30)(47,"div",31)(48,"label",32),e._uU(49,"First Name"),e.qZA(),e._UZ(50,"input",33),e.ALo(51,"async"),e.qZA()(),e.TgZ(52,"div",30)(53,"div",31)(54,"label",34),e._uU(55,"Last Name"),e.qZA(),e._UZ(56,"input",35),e.ALo(57,"async"),e.qZA()(),e.TgZ(58,"div",30)(59,"div",31)(60,"label",36),e._uU(61,"Age"),e.qZA(),e._UZ(62,"input",37),e.ALo(63,"async"),e.qZA()(),e.TgZ(64,"div",30)(65,"div",31)(66,"label",38),e._uU(67,"Job Title"),e.qZA(),e._UZ(68,"input",39),e.ALo(69,"async"),e.qZA()(),e.TgZ(70,"div",40)(71,"div",31)(72,"label",41),e._uU(73,"Bio"),e.qZA(),e._UZ(74,"quill-editor",42),e.ALo(75,"async"),e.qZA()(),e.TgZ(76,"div",43)(77,"button",44),e.NdJ("click",function(){e.CHM(f);const y=e.MAs(44);return e.KtG(l.reset(y))}),e._uU(78," Cancel "),e.qZA(),e._UZ(79,"input",45)(80,"input",46),e.ALo(81,"async"),e.ALo(82,"async"),e.qZA()()()()(),e.TgZ(83,"div",47)(84,"div",26)(85,"h4",27),e._uU(86," Social Media "),e.qZA()(),e.TgZ(87,"div",12)(88,"form",28,48),e.NdJ("ngSubmit",function(){e.CHM(f);const y=e.MAs(89);return e.KtG(l.onSubmit(y))})("reset",function(y){return y.preventDefault()}),e.TgZ(90,"div",8)(91,"div",49)(92,"div",50)(93,"label",51),e._uU(94,"Facebook"),e.qZA(),e.TgZ(95,"div",52)(96,"span",53),e.O4$(),e.TgZ(97,"svg",54),e._UZ(98,"use",55),e.qZA(),e._uU(99,"https://facebook.com/"),e.qZA(),e.kcU(),e._UZ(100,"input",56),e.ALo(101,"async"),e.qZA()(),e.TgZ(102,"div",50)(103,"label",57),e._uU(104,"Twitter"),e.qZA(),e.TgZ(105,"div",52)(106,"span",53),e.O4$(),e.TgZ(107,"svg",54),e._UZ(108,"use",58),e.qZA(),e._uU(109,"https://twitter.com/"),e.qZA(),e.kcU(),e._UZ(110,"input",59),e.ALo(111,"async"),e.qZA()(),e.TgZ(112,"div",50)(113,"label",60),e._uU(114,"Instagram"),e.qZA(),e.TgZ(115,"div",52)(116,"span",53),e.O4$(),e.TgZ(117,"svg",54),e._UZ(118,"use",61),e.qZA(),e._uU(119,"https://instagram.com/"),e.qZA(),e.kcU(),e._UZ(120,"input",62),e.ALo(121,"async"),e.qZA()()(),e.TgZ(122,"div",63)(123,"button",44),e.NdJ("click",function(){e.CHM(f);const y=e.MAs(89);return e.KtG(l.reset(y))}),e._uU(124," Cancel "),e.qZA(),e._UZ(125,"input",45)(126,"input",46),e.ALo(127,"async"),e.ALo(128,"async"),e.qZA()()()()()()()()()}if(2&d){const f=e.MAs(44),h=e.MAs(89);let y,P,U,C,O,A,k,L,N,u,i,o,t,a,c,g;e.xp6(9),e.Oqu(null==(y=e.lcZ(10,20,l.person$))?null:y.fullName),e.xp6(11),e.MGl("src","./assets/images/",null==(P=e.lcZ(21,22,l.person$))?null:P.avatarImage,"",e.LSH),e.xp6(3),e.Oqu(null==(U=e.lcZ(24,24,l.person$))?null:U.fullName),e.xp6(3),e.Oqu(null==(C=e.lcZ(27,26,l.person$))?null:C.jobTitle),e.xp6(24),e.Q6J("ngModel",null==(O=e.lcZ(51,28,l.person$))?null:O.firstName),e.xp6(6),e.Q6J("ngModel",null==(A=e.lcZ(57,30,l.person$))?null:A.lastName),e.xp6(6),e.Q6J("ngModel",null==(k=e.lcZ(63,32,l.person$))?null:k.age),e.xp6(6),e.Q6J("ngModel",null==(L=e.lcZ(69,34,l.person$))?null:L.jobTitle),e.xp6(6),e.Q6J("ngModel",null==(N=e.lcZ(75,36,l.person$))?null:N.bio),e.xp6(3),e.Q6J("disabled",!l.isDirty(f)),e.xp6(2),e.Q6J("disabled",!l.isDirty(f)),e.xp6(1),e.Q6J("ngModel",null==(u=e.lcZ(81,38,l.person$))?null:u.id)("value",null==(i=e.lcZ(82,40,l.person$))?null:i.id),e.xp6(20),e.Q6J("ngModel",null==(o=e.lcZ(101,42,l.person$))?null:o.facebook),e.xp6(10),e.Q6J("ngModel",null==(t=e.lcZ(111,44,l.person$))?null:t.twitter),e.xp6(10),e.Q6J("ngModel",null==(a=e.lcZ(121,46,l.person$))?null:a.instagram),e.xp6(3),e.Q6J("disabled",!l.isDirty(h)),e.xp6(2),e.Q6J("disabled",!l.isDirty(h)),e.xp6(1),e.Q6J("ngModel",null==(c=e.lcZ(127,48,l.person$))?null:c.id)("value",null==(g=e.lcZ(128,50,l.person$))?null:g.id)}},dependencies:[T._Y,T.Fj,T.JJ,T.JL,T.On,T.F,V.g6,J.Ov],styles:["[_nghost-%COMP%]   header[_ngcontent-%COMP%]{background-image:url(/assets/images/wave-pattern-light.svg)}[_nghost-%COMP%]   .avatar-xxl[_ngcontent-%COMP%]{width:7rem;height:7rem}[_nghost-%COMP%]   .btn-white[_ngcontent-%COMP%]{background-color:#fff;border:.0625rem solid rgba(33,50,91,.1)!important;box-shadow:none}[_nghost-%COMP%]   .btn-white[_ngcontent-%COMP%]:hover{color:#1366ff;border-color:#21325b1a!important;background-color:#fff;box-shadow:0 3px 6px -2px #8c98a440}[_nghost-%COMP%]   .bio-editor[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .social[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#617393}"]})}return n})()}];let _e=(()=>{class n{static#e=this.\u0275fac=function(d){return new(d||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[K.Bz.forChild(ve),K.Bz]})}return n})(),Ze=(()=>{class n{static#e=this.\u0275fac=function(d){return new(d||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[J.ez,T.u5,V.fi,_e,m.Aw.forFeature(z,se),x.sQ.forFeature([pe]),R.Qi]})}return n})()}}]);