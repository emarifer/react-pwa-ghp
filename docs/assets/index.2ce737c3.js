import{n as d,L as v,c as w,u as y,j as b,a as t,R as x,b as u,d as p,F as L,v as R,e as S,f as N,g as k,S as E}from"./vendor.4b566654.js";const A=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};A();var O="/react-pwa-ghp/img/logo.svg";const P=d(v)`
	color: white;
	font-size: 1.5rem;
	text-decoration: none;
	text-transform: uppercase;
	position: relative;
	/* padding-bottom: 3px;
	border-bottom: 3px solid transparent; */

	:after {
		content: '';
		width: 3.5rem;
		height: 5px;
		background: #01cfa9;
		opacity: 0;
		position: absolute;
		bottom: -8px;
		left: 0;
		transform: translateX(150px);
		transition: all 0.3s ease-in-out;
	}
`,j=w`
	color: #01cfa9;
	/* border-bottom: 3px solid #01cfa9;
	transition: all 0.8s ease-in-out; */

	:after {
		opacity: 1;
		transform: translateX(0px);
		transition: all 0.2s ease-in-out;
	}
`,f=({href:i,children:a})=>{const[s]=y(i);return b(P,{href:i,css:s&&j,children:a})},h=d.li`
	list-style: none;
	margin: 1rem;
`,C=d.div`
	display: flex;
	flex-direction: row;
`,W=()=>t(x,{base:"/react-pwa-ghp/",children:u(C,{children:[u("nav",{children:[t("img",{src:O,alt:"React Logo"}),u("ul",{children:[t(h,{children:t(f,{href:"",children:"Home"})}),t(h,{children:t(f,{href:"about",children:"About"})}),t(h,{children:t(f,{href:"developers",children:"Developers"})})]})]}),t(p,{path:"",component:()=>t("h1",{children:"Home Page"})}),t(p,{path:"about",component:()=>t("h1",{children:"About Page"})}),t(p,{path:"developers",component:()=>t("h1",{children:"Developers Page"})})]})}),B=()=>t(L,{children:t(W,{})});function I(i={}){const{immediate:a=!1,onNeedRefresh:s,onOfflineReady:l,onRegistered:e,onRegisterError:o}=i;let n,c;const m=async(r=!0)=>{r&&(n==null||n.addEventListener("controlling",g=>{g.isUpdate&&window.location.reload()})),c&&c.waiting&&await S(c.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){n=new R("/react-pwa-ghp/sw.js",{scope:"/react-pwa-ghp/"}),n.addEventListener("activated",r=>{r.isUpdate||l==null||l()});{const r=()=>{s==null||s()};n.addEventListener("waiting",r),n.addEventListener("externalwaiting",r)}n.register({immediate:a}).then(r=>{c=r,e==null||e(r)}).catch(r=>{o==null||o(r)})}return m}const M=I({onNeedRefresh(){E.fire({icon:"info",title:"New Content Available!!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ok, update it!"}).then(i=>{i.isConfirmed&&M()})}});N.render(t(k.StrictMode,{children:t(B,{})}),document.getElementById("root"));
