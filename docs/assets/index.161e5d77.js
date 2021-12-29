import{n as f,L as v,c as w,u as y,j as b,a as e,R as x,b as d,S as L,d as u,e as R,F as S,v as N,f as k,g as E,h as A,i as O}from"./vendor.e854893f.js";const P=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};P();var j="/react-pwa-ghp/img/logo.svg";const C=f(v)`
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
		transform: translateX(30vw);
		transition: all 0.3s ease-in-out;
	}
`,W=w`
	color: #01cfa9;
	/* border-bottom: 3px solid #01cfa9;
	transition: all 0.8s ease-in-out; */

	:after {
		opacity: 1;
		transform: translateX(0px);
		transition: all 0.2s ease-in-out;
	}
`,p=({href:i,children:a})=>{const[s]=y(i);return b(C,{href:i,css:s&&W,children:a})},h=f.li`
	list-style: none;
	margin: 1rem;
`,B=f.div`
	display: flex;
	flex-direction: row;
`,I=()=>e(x,{base:"/react-pwa-ghp/",children:d(B,{children:[d("nav",{children:[e("img",{src:j,alt:"React Logo"}),d("ul",{children:[e(h,{children:e(p,{href:"",children:"Home"})}),e(h,{children:e(p,{href:"about",children:"About"})}),e(h,{children:e(p,{href:"developers",children:"Developers"})})]})]}),d(L,{children:[e(u,{path:"/",component:()=>e("h1",{children:"Home Page"})}),e(u,{path:"about",component:()=>e("h1",{children:"About Page"})}),e(u,{path:"developers",component:()=>e("h1",{children:"Developers Page"})}),e(u,{children:e(R,{to:"."})})]})]})}),M=()=>e(S,{children:e(I,{})});function D(i={}){const{immediate:a=!1,onNeedRefresh:s,onOfflineReady:l,onRegistered:t,onRegisterError:o}=i;let n,c;const m=async(r=!0)=>{r&&(n==null||n.addEventListener("controlling",g=>{g.isUpdate&&window.location.reload()})),c&&c.waiting&&await k(c.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){n=new N("/react-pwa-ghp/sw.js",{scope:"/react-pwa-ghp/"}),n.addEventListener("activated",r=>{r.isUpdate||l==null||l()});{const r=()=>{s==null||s()};n.addEventListener("waiting",r),n.addEventListener("externalwaiting",r)}n.register({immediate:a}).then(r=>{c=r,t==null||t(r)}).catch(r=>{o==null||o(r)})}return m}const F=D({onNeedRefresh(){O.fire({icon:"info",title:"New Content Available!!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ok, update it!"}).then(i=>{i.isConfirmed&&F()})}});E.render(e(A.StrictMode,{children:e(M,{})}),document.getElementById("root"));
