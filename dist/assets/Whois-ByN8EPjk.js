import{u as z,c as I,r as p,b as r,e as s,t as i,j as _,g as d,x as M,G as N,H as W,q as g,F as C,m as E,o as n,k as S}from"./vendor-CF_RhtoL.js";import{_ as V,u as $,t as B,i as F}from"./index-DVAHHVfN.js";const O={class:"whois-section my-4"},K={class:"text-secondary"},T={class:"row"},A={class:"col-12 mb-3"},G={class:"card-body"},H={class:"col-12 col-md-auto"},J={for:"queryURLorIP",class:"col-form-label"},Q={class:"input-group mb-2 mt-2"},X=["disabled","placeholder"],Y=["disabled"],Z={key:0},x={key:1,class:"spinner-grow spinner-grow-sm","aria-hidden":"true"},ee={class:"jn-placeholder"},se={key:0,class:"text-danger"},ae={key:0},oe={class:"alert alert-success"},te=["data-bs-theme"],le=["id"],re=["data-bs-target","aria-expanded","aria-controls"],ie=["id","aria-labelledby"],ne={__name:"Whois",setup(ce){const{t:l}=z(),w=$(),m=I(()=>w.isDarkMode),P=I(()=>w.isMobile),f=p(""),u=p("idle"),c=p(""),b=p([]),v=p(""),h=p({}),y=e=>{e.match(/^https?:\/\//)||(e="http://"+e);try{const R=new URL(e).hostname.split(".").slice(-2).join(".");if(R.match(/^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i))return R}catch{}return!1},U=e=>y(e)?(v.value="domain",y(e)):F(e)?(v.value="ip",e):(c.value=l("whois.invalidURL"),!1),k=()=>{B("Section","StartClick","Whois"),c.value="",b.value=[],h.value={};const e=U(f.value);e&&D(e)},D=async e=>{u.value="running";try{const a=await fetch(`/api/whois?q=${e}`);if(!a.ok)throw new Error("Network response was not ok");const o=await a.json();L(o),v.value==="domain"&&b.value.length>=1||v.value==="ip"&&o.__raw?(h.value=o,c.value=""):c.value=l("whois.fetchError"),u.value="idle"}catch(a){console.error("Error fetching Whois results:",a),u.value="idle",c.value=l("whois.fetchError")}},L=e=>{if(v.value==="domain")for(const[a,o]of Object.entries(e))a.match(/^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i)&&e[a].__raw&&b.value.push(a)},j=e=>{e=e.replace(/^( {1,20})/gm,"");const a=e.indexOf(`
For more information`);return a!==-1?e.substring(0,a):e},q=e=>(e=e.replace(/^#.*\n/gm,""),e=e.replace(/^\n*/,""),e=e.replace(/\n$/,""),e);return(e,a)=>(n(),r("div",O,[s("div",K,[s("p",null,i(_(l)("whois.Note")),1)]),s("div",T,[s("div",A,[s("div",{class:d(["card jn-card",{"dark-mode dark-mode-border":m.value}])},[s("div",G,[s("div",H,[s("label",J,i(_(l)("whois.Note2")),1)]),s("div",Q,[M(s("input",{type:"text",class:d(["form-control",{"dark-mode":m.value}]),disabled:u.value==="running",placeholder:_(l)("whois.Placeholder"),"onUpdate:modelValue":a[0]||(a[0]=o=>f.value=o),onKeyup:W(k,["enter"]),name:"queryURLorIP",id:"queryURLorIP","data-1p-ignore":""},null,42,X),[[N,f.value]]),s("button",{class:"btn btn-primary",onClick:k,disabled:u.value==="running"||!f.value},[u.value==="idle"?(n(),r("span",Z,i(_(l)("whois.Run")),1)):g("",!0),u.value==="running"?(n(),r("span",x)):g("",!0)],8,Y)]),s("div",ee,[c.value?(n(),r("p",se,i(c.value),1)):g("",!0)]),h.value&&Object.keys(h.value).length?(n(),r("div",ae,[s("div",oe,i(_(l)("whois.Note3")),1),v.value==="domain"?(n(),r("div",{key:0,class:"accordion",id:"whoisResultAccordion","data-bs-theme":m.value?"dark":""},[(n(!0),r(C,null,E(b.value,(o,t)=>(n(),r("div",{class:"accordion-item",key:o},[s("h2",{class:"accordion-header",id:"heading"+t},[s("button",{class:d(["accordion-button",{collapsed:t!==0}]),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+t,"aria-expanded":t===0?"true":"false","aria-controls":"collapse"+t},[s("span",null,[s("i",{class:d(["bi","bi-"+(t+1)+"-circle-fill"])},null,2),a[1]||(a[1]=S("  ")),s("strong",null,i(_(l)("whois.Provider"))+" : "+i(o.toUpperCase()),1)])],10,re)],8,le),s("div",{id:"collapse"+t,class:d(["accordion-collapse collapse",{show:t===0}]),"aria-labelledby":"heading"+t},[s("div",{class:d(["accordion-body",[P.value?" p-2":""]])},[s("div",{class:d(["card card-body border-0 mt-3",[m.value?"bg-black text-light":"bg-light"]])},[s("pre",null,i(j(h.value[b.value[t]].__raw)),1)],2)],2)],10,ie)]))),128))],8,te)):(n(),r("div",{key:1,class:d(["card card-body border-0 mt-3",[m.value?"bg-black text-light":"bg-light"]])},[s("pre",null,i(q(h.value.__raw)),1)],2))])):g("",!0)])],2)])])]))}},he=V(ne,[["__scopeId","data-v-816e125c"]]);export{he as default};
