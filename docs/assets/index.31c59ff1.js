import{j as d,c as w,n as m,R as y,L as u,a as p,v as x,b,d as L,e as R,S}from"./vendor.05f10ab4.js";const N=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}};N();var j="/react-pwa-ghp/img/logo.svg";const t=d.exports.jsx,f=d.exports.jsxs,E=d.exports.Fragment,O=w`
	color: white;
	font-size: 1.5rem;
	text-decoration: none;
	text-transform: uppercase;
	padding-bottom: 3px;
	border-bottom: 3px solid transparent;
`,h=m.li`
	list-style: none;
	margin: 1rem;

	a {
		${O}
	}
`,P=m.div`
	display: flex;
	flex-direction: row;
`,k=()=>t(y,{base:"/react-pwa-ghp/",children:f(P,{children:[f("nav",{children:[t("img",{src:j,alt:"React Logo"}),f("ul",{children:[t(h,{children:t(u,{href:".",children:"Home"})}),t(h,{children:t(u,{href:"about",children:"About"})}),t(h,{children:t(u,{href:"developers",children:"Developers"})})]})]}),t(p,{path:"developers",component:()=>t("h1",{children:"Developers Page"})}),t(p,{path:"about",component:()=>t("h1",{children:"About Page"})}),t(p,{path:"/",component:()=>t("h1",{children:"Home Page"})})]})}),A=()=>t(E,{children:t(k,{})});function C(a={}){const{immediate:i=!1,onNeedRefresh:l,onOfflineReady:s,onRegistered:e,onRegisterError:n}=a;let o,c;const g=async(r=!0)=>{r&&(o==null||o.addEventListener("controlling",v=>{v.isUpdate&&window.location.reload()})),c&&c.waiting&&await b(c.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){o=new x("/react-pwa-ghp/sw.js",{scope:"/react-pwa-ghp/"}),o.addEventListener("activated",r=>{r.isUpdate||s==null||s()});{const r=()=>{l==null||l()};o.addEventListener("waiting",r),o.addEventListener("externalwaiting",r)}o.register({immediate:i}).then(r=>{c=r,e==null||e(r)}).catch(r=>{n==null||n(r)})}return g}const W=C({onNeedRefresh(){S.fire({icon:"info",title:"New Content Available!!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ok, update it!"}).then(a=>{a.isConfirmed&&W()})}});L.render(t(R.StrictMode,{children:t(A,{})}),document.getElementById("root"));
