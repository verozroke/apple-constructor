import{u as w,a as x,b as I,c as N,d as B,_ as D}from"./LaundryCareStore-2006cd6f.js";/* empty css                                                                   */import{_ as p,o as n,b as i,a as t,h as r,t as l,p as v,g as b,l as T,r as g,f as m,F as k,d as h,u as d,w as $,n as C,i as A}from"./index-be86c3b0.js";function E(){const e=document.querySelector(".tsukue__desk");if(e.querySelector(".tsukue__item")){const a=e.querySelectorAll(".tsukue__item"),o=document.querySelector(".tsukue__items");a.forEach(s=>{o.appendChild(s)})}}const f=e=>(v("data-v-8b68fc6c"),e=e(),b(),e),M={class:"block"},F={class:"block__type"},P=f(()=>t("b",null,"Тип торговой точки: ",-1)),R={class:"block__status"},U=f(()=>t("b",null,"Статус:",-1)),V={class:"block__conditions"},H=f(()=>t("b",null,"Условия:",-1)),O={class:"block__description"},j={__name:"UIDescriptionBlock",props:{status:String,conditions:String,description:String},setup(e){return(a,o)=>(n(),i("div",M,[t("div",F,[P,r(" "+l(a.$route.params.marketType.toUpperCase()),1)]),t("div",R,[U,r(" "+l(e.status),1)]),t("div",V,[H,r(" "+l(e.conditions),1)]),t("div",O,l(e.description),1)]))}},z=p(j,[["__scopeId","data-v-8b68fc6c"]]),W=e=>(v("data-v-34fdc747"),e=e(),b(),e),X={class:"tsukue"},G={class:"tsukue__desk"},J={class:"tsukue__desk-box"},K={class:"tsukue__shelfs"},Q={class:"tsukue__cell"},Y=W(()=>t("div",{class:"tsukue__limit hidden"},"Превышен лимит товаров на полке! Первый товар на полке был перемещен обратно.",-1)),Z={class:"tsukue__box"},ee={class:"tsukue__items"},te=["id","onDblclick"],se=["src","alt"],oe={__name:"TsukueDesk",props:{data:Object,imgs:Array},setup(e){function a(o){const s=document.querySelector(".tsukue__items"),c=document.getElementById(`${o}`).cloneNode(!0);s.appendChild(c)}return T(()=>{dragula([document.querySelector(".tsukue__items"),document.querySelector(".tsukue__2-term-shelf-1"),document.querySelector(".tsukue__2-term-shelf-2"),document.querySelector(".tsukue__2-term-shelf-3"),document.querySelector(".tsukue__2-term-shelf-4"),document.querySelector(".tsukue__2-term-shelf-5")]).on("drop",function(o){const s=o.parentNode,u=document.querySelector(".tsukue__items");if(s.querySelectorAll(".tsukue__cell").forEach(c=>{s.removeChild(c)}),s!==document.querySelector(".tsukue__items")){let c=0;const _=s.childElementCount,L=Math.floor(s.querySelectorAll(".tsukue__item.wide").length/2);if(c=_+L,c>=17){for(;c>17;){const S=s.querySelector(".tsukue__item");if(!S)break;u.appendChild(S),c--}const y=document.querySelector(".tsukue__limit");y.classList.remove("hidden"),setTimeout(()=>{y.classList.add("hidden")},3e3)}}})}),(o,s)=>{const u=g("router-link");return n(),i("div",X,[m(z,{status:e.data.status,conditions:e.data.conditions,description:e.data.description},null,8,["status","conditions","description"]),t("div",G,[t("div",J,[t("ul",K,[(n(),i(k,null,h(5,c=>t("li",{class:"tsukue__shelf",key:c},[t("ul",{class:C(`tsukue__2-term-shelf-${c}`)},[(n(),i(k,null,h(15,_=>t("li",Q)),64))],2)])),64))])])]),Y,t("div",Z,[t("ul",ee,[(n(!0),i(k,null,h(e.imgs,c=>(n(),i("li",{class:C(["tsukue__item",{wide:c.isWide}]),key:c.id,id:c.id,onDblclick:_=>a(c.id)},[t("img",{src:c.src,alt:c.id},null,8,se)],42,te))),128))])]),t("div",{id:"clearButton",onClick:s[0]||(s[0]=c=>d(E)()),class:"tsukue__button"},"Очистить"),m(u,{to:{name:"Category"},class:"tsukue__button"},{default:$(()=>[r(l("<<< Назад к выбору"))]),_:1})])}}},ce=p(oe,[["__scopeId","data-v-34fdc747"]]);const q=e=>(v("data-v-38377d72"),e=e(),b(),e),ae={class:"level"},ne={class:"level__container"},ie={class:"level__box"},le=q(()=>t("div",{class:"level__logo"},[t("img",{src:D,alt:""})],-1)),ue=q(()=>t("div",{class:"level__title"},"КАТЕГОРИЯ",-1)),_e={class:"level__subtitle"},re={__name:"LevelPage",setup(e){const a=A();let o=null,s=null;switch(a.params.category){case"dishCare":o=B();break;case"babyCare":o=N();break;case"femCare":o=I();break;case"hairCare":o=x();break;case"laundryCare":o=w();break}switch(a.params.marketType){case"st":s=o.ST;break;case"lt":s=o.LT;break;case"mt":s=o.MT;break;case"oma":s=o.OMA;break;case"x2":s=o.X2;break;case"d2":s=o.D2;break;case"b2":s=o.B2;break}return(u,c)=>{const _=g("RouterLink");return n(),i("div",ae,[t("div",ne,[t("div",ie,[m(_,{to:{name:"Home"}},{default:$(()=>[le]),_:1}),ue,t("div",_e,l(d(s).title),1),m(ce,{data:d(s),imgs:d(o).imgs},null,8,["data","imgs"])])])])}}},he=p(re,[["__scopeId","data-v-38377d72"]]);export{he as default};
