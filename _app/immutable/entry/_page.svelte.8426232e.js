var pe=Object.defineProperty;var we=(n,t,e)=>t in n?pe(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var p=(n,t,e)=>(we(n,typeof t!="symbol"?t+"":t,e),e);import{S as Q,i as X,s as z,k as B,l as T,m as D,h as P,n as M,b as Z,H as _,I as Y,o as oe,w as j,J as le,K as ge,L as be,M as ue,q as H,a as N,y as fe,r as U,c as R,z as ce,p as ke,N as se,A as he,O as J,u as ye,P as de,d as S,f as Ee,g as x,B as _e,Q as Pe,G as Ae,v as ve,R as Be}from"../chunks/index.51f46b54.js";import{_ as O}from"../chunks/preload-helper.41c905a7.js";import{p as Te}from"../chunks/stores.279b9797.js";function Ce(){return new Worker(""+new URL("../workers/editor.worker-cfd5aa4a.js",import.meta.url).href,{type:"module"})}function De(n){let t,e;return{c(){t=B("main"),e=B("div"),this.h()},l(a){t=T(a,"MAIN",{class:!0});var s=D(t);e=T(s,"DIV",{class:!0}),D(e).forEach(P),s.forEach(P),this.h()},h(){M(e,"class","h-screen svelte-17n7r9x"),M(t,"class","svelte-17n7r9x")},m(a,s){Z(a,t,s),_(t,e),n[4](e)},p:Y,i:Y,o:Y,d(a){a&&P(t),n[4](null)}}}function Ie(n,t,e){const a=()=>i.getValue(),s={cpp:`#include <bits/stdc++.h>

using namespace std;

int main() {
    int a;
    cout << "Enter a number: ";
    cin >> a;
    for(int i = 0; i < a; i++) cout << i << endl;
}`,python:`a = int(input("Enter a number: "))
for i in range(a):
    print(i)`};let u=null,{editor:i,language:r}=t,o;oe(async()=>(self.MonacoEnvironment={getWorker(l,g){return new Ce}},o=await O(()=>import("../chunks/editor.main.cc6be788.js").then(l=>l.e),["../chunks/editor.main.cc6be788.js","../chunks/preload-helper.41c905a7.js","../assets/editor.c266e5b1.css"],import.meta.url),e(1,i=o.editor.create(u,{value:s[r],language:r})),()=>i.dispose()));function c(l){j[l?"unshift":"push"](()=>{u=l,e(0,u)})}return n.$$set=l=>{"editor"in l&&e(1,i=l.editor),"language"in l&&e(3,r=l.language)},[u,i,a,r,c]}class Fe extends Q{constructor(t){super(),X(this,t,Ie,De,z,{value:2,editor:1,language:3})}get value(){return this.$$.ctx[2]}}const K={Tango_Dark:{foreground:"#eee",background:"#00000000",cursor:"#FFFFFF",cursorAccent:"#ffffff",selection:"#ffffff44",black:"#000000",red:"#CC0000",green:"#4E9A06",yellow:"#C4A000",blue:"#3465A4",magenta:"#75507B",cyan:"#06989A",white:"#D3D7CF",brightBlack:"#555753",brightRed:"#EF2929",brightGreen:"#8AE234",brightYellow:"#FCE94F",brightBlue:"#729FCF",brightMagenta:"#AD7FA8",brightCyan:"#34E2E2",brightWhite:"#EEEEEC"},Tango_Light:{foreground:"#111",background:"#FFFFFF00",cursor:"#000000",cursorAccent:"#000000",selection:"#00000044",black:"#000000",red:"#CC0000",green:"#4E9A06",yellow:"#C4A000",blue:"#3465A4",magenta:"#75507B",cyan:"#06989A",white:"#D3D7CF",brightBlack:"#555753",brightRed:"#EF2929",brightGreen:"#8AE234",brightYellow:"#FCE94F",brightBlue:"#729FCF",brightMagenta:"#AD7FA8",brightCyan:"#34E2E2",brightWhite:"#EEEEEC"}};async function Oe(n){const{FitAddon:t}=await O(()=>import("../chunks/xterm-addon-fit.c2723777.js").then(o=>o.x),["../chunks/xterm-addon-fit.c2723777.js","../chunks/_commonjsHelpers.725317a4.js"],import.meta.url),{SearchAddon:e}=await O(()=>import("../chunks/xterm-addon-search.f6b7d278.js").then(o=>o.x),["../chunks/xterm-addon-search.f6b7d278.js","../chunks/_commonjsHelpers.725317a4.js"],import.meta.url),{SerializeAddon:a}=await O(()=>import("../chunks/xterm-addon-serialize.774cd5fb.js").then(o=>o.x),["../chunks/xterm-addon-serialize.774cd5fb.js","../chunks/_commonjsHelpers.725317a4.js"],import.meta.url),{WebLinksAddon:s}=await O(()=>import("../chunks/xterm-addon-web-links.779ca841.js").then(o=>o.x),["../chunks/xterm-addon-web-links.779ca841.js","../chunks/_commonjsHelpers.725317a4.js"],import.meta.url),{WebglAddon:u}=await O(()=>import("../chunks/xterm-addon-webgl.6cf65e46.js").then(o=>o.x),["../chunks/xterm-addon-webgl.6cf65e46.js","../chunks/_commonjsHelpers.725317a4.js"],import.meta.url),{Unicode11Addon:i}=await O(()=>import("../chunks/xterm-addon-unicode11.5dec502f.js").then(o=>o.x),["../chunks/xterm-addon-unicode11.5dec502f.js","../chunks/_commonjsHelpers.725317a4.js"],import.meta.url),r={fit:new t,search:new e,serialize:new a,weblink:new s,webgl:new u,unicode:new i};for(const o in r)n.loadAddon(r[o]);return r}const Le=""+new URL("../workers/clang-37494b66.js",import.meta.url).href;class Ye{constructor(){p(this,"ts",Date.now());p(this,"output",null);p(this,"worker",null);p(this,"buffer",new SharedArrayBuffer(1024));p(this,"interruptBuffer",new SharedArrayBuffer(1));p(this,"internalBuffer",[]);p(this,"begin",0);p(this,"elapse",0);p(this,"uid",0)}load(t,e="",a=!0){return new Promise(async s=>{this.internalBuffer=[],this.worker?s():(this.worker=new Worker(Le,{type:"module"}),this.worker.onmessage=u=>{s()},this.worker.postMessage({load:!0,path:t,log:a,code:e}))})}write(t){this.internalBuffer.push(t)}_write(t){let e=t,a=4-e.length%4;for(;e.length%4!==3;)e+=" ";e+=a;const s=new Int32Array(this.buffer),i=new TextEncoder().encode(e);s.set(new Int32Array(i.buffer.slice(i.byteOffset),0))}eof(){}run(t){return new Promise(async(e,a)=>{const s=new Uint8Array(this.interruptBuffer),u=++this.uid,i=r=>{if(u!==this.uid){this.worker.onmessage=null;return}const{id:o,output:c,results:l,log:g,error:y,buffer:w}=r.data;w&&this.internalBuffer.length&&this._write(this.internalBuffer.splice(0,1)[0]),c&&this.output(c),l&&(this.elapse=Date.now()-this.begin,e(l)),g&&console.log(g),y&&(this.elapse=Date.now()-this.begin,a(y))};s[0]=0,this.worker.onmessage=i,this.begin=Date.now(),this.worker.postMessage({code:t,buffer:this.buffer,interrupt:this.interruptBuffer,context:{}})})}terminate(){const t=new Uint8Array(this.interruptBuffer);t[0]=2}async clear(){this.terminate(),this.internalBuffer=[],this.worker&&(this.worker.onmessage=null),new Int32Array(this.buffer).fill(0),await new Promise(e=>setTimeout(e,200))}}const Ne=""+new URL("../workers/python-a6592203.js",import.meta.url).href;class Re{constructor(){p(this,"ts",Date.now());p(this,"output",null);p(this,"worker",null);p(this,"buffer",new SharedArrayBuffer(1024));p(this,"interruptBuffer",new SharedArrayBuffer(1));p(this,"internalBuffer",[]);p(this,"begin",0);p(this,"elapse",0);p(this,"uid",0)}load(t,e="",a=!0){return new Promise(async s=>{this.internalBuffer=[],this.worker?s():(this.worker=new Worker(Ne,{type:"module"}),this.worker.onmessage=u=>{s()},this.worker.postMessage({load:!0,path:t,log:a,code:e}))})}write(t){this.internalBuffer.push(t)}_write(t){let e=t,a=4-e.length%4;for(;e.length%4!==3;)e+=" ";e+=a;const s=new Int32Array(this.buffer),i=new TextEncoder().encode(e);s.set(new Int32Array(i.buffer.slice(i.byteOffset),0))}eof(){}run(t){return new Promise(async(e,a)=>{const s=new Uint8Array(this.interruptBuffer),u=++this.uid,i=r=>{if(u!==this.uid){this.worker.onmessage=null;return}const{id:o,output:c,results:l,log:g,error:y,buffer:w}=r.data;w&&this.internalBuffer.length&&this._write(this.internalBuffer.splice(0,1)[0]),c&&this.output(c),l&&(this.elapse=Date.now()-this.begin,e(l)),g&&console.log(g),y&&(this.elapse=Date.now()-this.begin,a(y))};s[0]=0,this.worker.onmessage=i,this.begin=Date.now(),this.worker.postMessage({code:t,buffer:this.buffer,interrupt:this.interruptBuffer,context:{}})})}terminate(){new Uint8Array(this.interruptBuffer)[0]=2}async clear(){this.terminate(),this.internalBuffer=[],this.worker&&(this.worker.onmessage=null),new Int32Array(this.buffer).fill(0),await new Promise(e=>setTimeout(e,200))}}const C={};async function Me(n){if(C[n])return C[n];let t;switch(n){case"PYTHON3":case"PYTHON":case"PYPY3":t=new Re;break;case"C":case"CPP":t=new Ye}return C[n]=t,t&&(n==="PYTHON3"&&(C.PYPY3=C.PYTHON=t),n==="PYTHON"&&(C.PYTHON3=C.PYPY3=t),n==="PYPY3"&&(C.PYTHON3=C.PYTHON=t),n==="C"&&(C.C=t),n==="CPP"&&(C.CPP=t)),t}function We(n){let t,e,a;return{c(){t=B("main"),e=B("div"),this.h()},l(s){t=T(s,"MAIN",{class:!0});var u=D(t);e=T(u,"DIV",{class:!0}),D(e).forEach(P),u.forEach(P),this.h()},h(){M(e,"class","svelte-ictpep"),le(()=>n[9].call(e)),M(t,"class","svelte-ictpep")},m(s,u){Z(s,t,u),_(t,e),n[8](e),a=ge(e,n[9].bind(e))},p:Y,i:Y,o:Y,d(s){s&&P(t),n[8](null),a()}}}function Ve(n,t,e){const a=be();let s,u,i,r,o=!0,c="",l,g=!0;const y=()=>new Promise(f=>{const k=setInterval(()=>{r&&(clearInterval(k),f())},100)}),w={async clear(){await y(),r.clear(),r.write("\x1B[?25l"),r.write("\x1B[0m"),r.write("\x1B[?25h"),e(6,r.options.cursorBlink=!1,r),g=!0,await new Promise(f=>setTimeout(f,100))},async run(f,k,d=!0){await y(),l&&await l.clear(),c="",o=!1,l=await Me(f),await l.clear(),l.output=I=>{r.write(I.replaceAll(`
`,`\r
`))},e(6,r.options.cursorBlink=!0,r),g||r.write(`\r
\x1B[0m`),await l.load(L,k,d),r.focus(),g=!1,l.run(k).then(()=>{a("finish"),o=!0,r.write(`\r
Process finished after ${l.elapse}ms\r
\x1B[?25l`),e(6,r.options.cursorBlink=!1,r)}).catch(I=>{a("finish"),o=!0,r.write(`\r
\x1B[1;3;31m${I}`),e(6,r.options.cursorBlink=!1,r)})}};let{dark:m=!1,path:L=""}=t,A;oe(()=>(O(()=>import("../chunks/xterm.1ef7a739.js").then(f=>f.x),["../chunks/xterm.1ef7a739.js","../chunks/_commonjsHelpers.725317a4.js"],import.meta.url).then(async({Terminal:f})=>{e(6,r=new f({theme:m?K.Tango_Dark:K.Tango_Light,cursorBlink:!1,allowTransparency:!0,fontFamily:"'D2 coding', monospace",fontWeight:"bold",allowProposedApi:!0})),r.open(s),r.onKey(k=>{if(o)return;const d=k.domEvent,I=!d.altKey&&!d.ctrlKey&&!d.metaKey;d.key==="Enter"?(r.write(`\r
`),l.write(c+`
`),c=""):d.key==="Backspace"?r._core.buffer.x>0&&(r.write("\b \b"),c.length>0&&(c=c.substring(0,c.length-1))):I?(k.key>=String.fromCharCode(32)&&k.key<=String.fromCharCode(126)||k.key>=" ")&&(c+=k.key,r.write(k.key)):(d.ctrlKey||d.metaKey)&&d.key==="c"||(d.ctrlKey||d.metaKey)&&d.key==="d"?l.kill():(d.ctrlKey||d.metaKey)&&d.key==="v"&&navigator.clipboard.readText().then(F=>{r.write(F),l.write(F)})}),e(7,A=await Oe(r))}),a("load"),async()=>{r.dispose(),l&&await l.clear()}));function W(f){j[f?"unshift":"push"](()=>{s=f,e(1,s)})}function V(){u=this.clientWidth,i=this.clientHeight,e(2,u),e(0,i)}return n.$$set=f=>{"dark"in f&&e(4,m=f.dark),"path"in f&&e(5,L=f.path)},n.$$.update=()=>{if(n.$$.dirty&80&&r&&(m?e(6,r.options.theme=K.Tango_Dark,r):e(6,r.options.theme=K.Tango_Light,r)),n.$$.dirty&129&&A)try{A.fit.fit()}catch{}},[i,s,u,w,m,L,r,A,W,V]}class He extends Q{constructor(t){super(),X(this,t,Ve,We,z,{terminal:3,dark:4,path:5})}get terminal(){return this.$$.ctx[3]}}function ae(n){let t,e,a;function s(i){n[9](i)}let u={language:n[4].toLowerCase()};return n[1]!==void 0&&(u.editor=n[1]),t=new Fe({props:u}),j.push(()=>ue(t,"editor",s)),{c(){fe(t.$$.fragment)},l(i){ce(t.$$.fragment,i)},m(i,r){he(t,i,r),a=!0},p(i,r){const o={};r&16&&(o.language=i[4].toLowerCase()),!e&&r&2&&(e=!0,o.editor=i[1],de(()=>e=!1)),t.$set(o)},i(i){a||(x(t.$$.fragment,i),a=!0)},o(i){S(t.$$.fragment,i),a=!1},d(i){_e(t,i)}}}function Ue(n){let t,e,a,s,u,i,r,o,c,l,g,y,w,m,L,A,W,V,f,k,d,I=n[4],F,G,$;function me(h){n[8](h)}let ee={path:n[0]};n[2]!==void 0&&(ee.terminal=n[2]),f=new He({props:ee}),j.push(()=>ue(f,"terminal",me));let v=ae(n);return{c(){t=B("main"),e=B("div"),a=H(n[0]),s=N(),u=B("button"),i=H("Run"),r=N(),o=B("input"),c=N(),l=B("label"),g=H("Log"),y=N(),w=B("select"),m=B("option"),L=H("C++"),A=B("option"),W=H("Python"),V=N(),fe(f.$$.fragment),d=N(),v.c(),this.h()},l(h){t=T(h,"MAIN",{class:!0});var E=D(t);e=T(E,"DIV",{style:!0});var b=D(e);a=U(b,n[0]),s=R(b),u=T(b,"BUTTON",{});var te=D(u);i=U(te,"Run"),te.forEach(P),r=R(b),o=T(b,"INPUT",{type:!0}),c=R(b),l=T(b,"LABEL",{});var re=D(l);g=U(re,"Log"),re.forEach(P),y=R(b),w=T(b,"SELECT",{});var q=D(w);m=T(q,"OPTION",{});var ne=D(m);L=U(ne,"C++"),ne.forEach(P),A=T(q,"OPTION",{});var ie=D(A);W=U(ie,"Python"),ie.forEach(P),q.forEach(P),V=R(b),ce(f.$$.fragment,b),b.forEach(P),d=R(E),v.l(E),E.forEach(P),this.h()},h(){M(o,"type","checkbox"),m.__value="CPP",m.value=m.__value,A.__value="PYTHON",A.value=A.__value,n[4]===void 0&&le(()=>n[7].call(w)),ke(e,"width","50%"),M(t,"class","svelte-blc2i2")},m(h,E){Z(h,t,E),_(t,e),_(e,a),_(e,s),_(e,u),_(u,i),_(e,r),_(e,o),o.checked=n[3],_(e,c),_(e,l),_(l,g),_(e,y),_(e,w),_(w,m),_(m,L),_(w,A),_(A,W),se(w,n[4],!0),_(e,V),he(f,e,null),_(t,d),v.m(t,null),F=!0,G||($=[J(u,"click",n[5]),J(o,"change",n[6]),J(w,"change",n[7])],G=!0)},p(h,[E]){(!F||E&1)&&ye(a,h[0]),E&8&&(o.checked=h[3]),E&16&&se(w,h[4]);const b={};E&1&&(b.path=h[0]),!k&&E&4&&(k=!0,b.terminal=h[2],de(()=>k=!1)),f.$set(b),E&16&&z(I,I=h[4])?(ve(),S(v,1,1,Y),Ee(),v=ae(h),v.c(),x(v,1),v.m(t,null)):v.p(h,E)},i(h){F||(x(f.$$.fragment,h),x(v),F=!0)},o(h){S(f.$$.fragment,h),S(v),F=!1},d(h){h&&P(t),_e(f),v.d(h),G=!1,Pe($)}}}function Ke(n,t,e){let a;Ae(n,Te,m=>e(10,a=m));let s=a.url.pathname;s.endsWith("/")&&(s=s.slice(0,-1));let u,i,r=!0,o="CPP";function c(){i.clear(),i.run(o,u.getValue(),r)}function l(){r=this.checked,e(3,r)}function g(){o=Be(this),e(4,o)}function y(m){i=m,e(2,i)}function w(m){u=m,e(1,u)}return[s,u,i,r,o,c,l,g,y,w]}class Ge extends Q{constructor(t){super(),X(this,t,Ke,Ue,z,{})}}export{Ge as default};
