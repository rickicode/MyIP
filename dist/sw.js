if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const t=s=>n(s,r),a={module:{uri:r},exports:o,require:t};e[r]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(l(...s),o)))}}define(["./workbox-1f723fb5"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/BrowserInfo-CQcxGfV8.js",revision:null},{url:"assets/BrowserInfo-PPFVARMm.css",revision:null},{url:"assets/CensorshipCheck-ChMUPN6N.js",revision:null},{url:"assets/CensorshipCheck-VPGOS-Y9.css",revision:null},{url:"assets/DnsResolver-4tMkGdUf.js",revision:null},{url:"assets/DnsResolver-CZmDq_8h.css",revision:null},{url:"assets/Empty-DPTjzuDl.js",revision:null},{url:"assets/GlobalLatencyTest-B2pTDOCs.js",revision:null},{url:"assets/index-BiQatJ82.css",revision:null},{url:"assets/index-DKohEsrZ.js",revision:null},{url:"assets/InvisibilityTest-B32e7ldP.js",revision:null},{url:"assets/InvisibilityTest-DNZGY6_t.css",revision:null},{url:"assets/MacChecker-CkmBwo0r.css",revision:null},{url:"assets/MacChecker-DNAyn4Ze.js",revision:null},{url:"assets/MtrTest-C0e3ghaP.js",revision:null},{url:"assets/MtrTest-iUHu6i-a.css",revision:null},{url:"assets/RuleTest-BLci3Wqv.js",revision:null},{url:"assets/RuleTest-CIJCpr-A.css",revision:null},{url:"assets/vendor-DKmbn-kt.js",revision:null},{url:"assets/vendor-LjphnS28.css",revision:null},{url:"assets/Whois-DnOwxmY6.css",revision:null},{url:"assets/Whois-DUfLNdYq.js",revision:null},{url:"fonts/bootstrap-icons.woff",revision:"ba49e844892321d8540ea3b7c088cf97"},{url:"fonts/bootstrap-icons.woff2",revision:"cc1e5eda776be5f0ff614285c31d4892"},{url:"index.html",revision:"a01b6ca186197b2fa99d4e2f58ba4065"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.svg",revision:"6498e075340c9fc6168870db3acfff24"},{url:"logos/ios-logo-192.png",revision:"52b69c6186aeb02bc14feae804e51149"},{url:"logos/ios-logo-512.png",revision:"a6e12b595f6c94af8d0c3e86b27ac14b"},{url:"logos/logo-192.webp",revision:"5ad3535ae9e4d0b23aeb1680037a2f9b"},{url:"manifest.webmanifest",revision:"3eea313b2d933401abb2f7af1d8c4af1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/\/(sw\.js|registerSW\.js|manifest\.webmanifest)$/,new s.NetworkFirst({cacheName:"critical-assets",plugins:[new s.ExpirationPlugin({maxEntries:3,maxAgeSeconds:14400})]}),"GET"),s.registerRoute(/\.(?:png|jpg|jpeg|svg|webp|woff|woff2)$/,new s.CacheFirst({cacheName:"images",plugins:[new s.ExpirationPlugin({maxEntries:60,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:js|css)$/,new s.StaleWhileRevalidate({cacheName:"assets",plugins:[new s.ExpirationPlugin({maxEntries:30,maxAgeSeconds:259200})]}),"GET"),s.registerRoute(/\/$/,new s.NetworkFirst({cacheName:"html",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:259200})]}),"GET")}));
