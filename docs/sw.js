if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const d=e=>n(e,r),t={module:{uri:r},exports:c,require:d};i[r]=Promise.all(s.map((e=>t[e]||d(e)))).then((e=>(o(...e),c)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.5d4e5c87.css",revision:null},{url:"assets/index.f103d332.js",revision:null},{url:"assets/vendor.dc4f1669.js",revision:null},{url:"index.html",revision:"98b5b37c3d45959c687690eccf692471"},{url:"img/favicon.svg",revision:"1821c958bbe5e0a6a4563025af907760"},{url:"img/logo.svg",revision:"5d5d9eefa31e5e13a6610d9fa7a283bb"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"icons/apple-touch-icon.png",revision:"772c6d65ffef2622589360d6d93daaa1"},{url:"icons/android-chrome-192x192.png",revision:"57fc30a840d8fccc7221ed50a41a22ea"},{url:"icons/android-chrome-512x512.png",revision:"bfe7f7962b32b0c315b4b9c2bd02f605"},{url:"manifest.webmanifest",revision:"61cebb58ba99a53ad59b0af7b707d824"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
