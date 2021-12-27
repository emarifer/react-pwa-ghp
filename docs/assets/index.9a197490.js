import{j as p,c as y,n as g,B as x,N as f,R as b,a as d,b as L,v as R,d as N,e as S,f as j,S as B}from"./vendor.9c49225c.js";const E=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}};E();var k="/react-pwa-ghp/img/logo.svg";const e=p.exports.jsx,u=p.exports.jsxs,O=p.exports.Fragment,P=y`
	color: #e28d2b;
	font-size: 1.2rem;
	text-decoration: none;
`,m=g.li`
	list-style: none;
	margin-bottom: 10px;

	a {
		${P}
	}
`,A=g.div`
	display: flex;
	flex-direction: row;
`,h={borderBottom:"3px solid blueviolet",transition:"all 1.5s ease-out"},C=()=>e(x,{basename:"//react-pwa-ghp/",children:u(A,{children:[u("nav",{children:[e("img",{src:k,alt:"React Logo"}),u("ul",{children:[e(m,{children:e(f,{to:"/",style:({isActive:i})=>i?h:{},children:"Home"})}),e(m,{children:e(f,{to:"/about",style:({isActive:i})=>i?h:{},children:"About"})}),e(m,{children:e(f,{to:"/developers",style:({isActive:i})=>i?h:{},children:"Developers"})})]})]}),u(b,{children:[e(d,{path:"developers",element:e("h1",{children:"Developers Page"})}),e(d,{path:"about",element:e("h1",{children:"About Page"})}),e(d,{path:"/",element:e("h1",{children:"Home Page"})}),e(d,{path:"/*",element:e(L,{to:"/",replace:!0})})]})]})}),W=()=>e(O,{children:e(C,{})});function I(i={}){const{immediate:s=!1,onNeedRefresh:l,onOfflineReady:a,onRegistered:t,onRegisterError:o}=i;let n,c;const v=async(r=!0)=>{r&&(n==null||n.addEventListener("controlling",w=>{w.isUpdate&&window.location.reload()})),c&&c.waiting&&await N(c.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){n=new R("/react-pwa-ghp/sw.js",{scope:"/react-pwa-ghp/"}),n.addEventListener("activated",r=>{r.isUpdate||a==null||a()});{const r=()=>{l==null||l()};n.addEventListener("waiting",r),n.addEventListener("externalwaiting",r)}n.register({immediate:s}).then(r=>{c=r,t==null||t(r)}).catch(r=>{o==null||o(r)})}return v}const M=I({onNeedRefresh(){B.fire({icon:"info",title:"New Content Available!!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ok, update it!"}).then(i=>{i.isConfirmed&&M()})}});S.render(e(j.StrictMode,{children:e(W,{})}),document.getElementById("root"));
