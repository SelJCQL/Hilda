function B(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(T)}function I(t){return typeof t=="function"}function ct(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function lt(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function L(t){return Object.keys(t).length===0}function ot(t,n,e,r){if(t){const c=O(t,n,e,r);return t[0](c)}}function O(t,n,e,r){return t[1]&&r?H(e.ctx.slice(),t[1](r(n))):e.ctx}function ut(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const a=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)a[o]=n.dirty[o]|c[o];return a}return n.dirty|c}return n.dirty}function at(t,n,e,r,c,a){if(c){const l=O(n,e,r,a);t.p(l,c)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let w=!1;function G(){w=!0}function J(){w=!1}function K(t,n,e,r){for(;t<n;){const c=t+(n-t>>1);e(c)<=r?t=c+1:n=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<n.length;u++){const s=n[u];s.claim_order!==void 0&&i.push(s)}n=i}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let c=0;for(let i=0;i<n.length;i++){const u=n[i].claim_order,s=(c>0&&n[e[c]].claim_order<=u?c+1:K(1,c,y=>n[e[y]].claim_order,u))-1;r[i]=e[s]+1;const f=s+1;e[f]=i,c=Math.max(f,c)}const a=[],l=[];let o=n.length-1;for(let i=e[c]+1;i!=0;i=r[i-1]){for(a.push(n[i-1]);o>=i;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);a.reverse(),l.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<l.length;i++){for(;u<a.length&&l[i].claim_order>=a[u].claim_order;)u++;const s=u<a.length?a[u]:null;t.insertBefore(l[i],s)}}function Q(t,n){if(w){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function st(t,n,e){w&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function _t(){return j(" ")}function dt(){return j("")}function ht(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,r,c=!1){X(t);const a=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const i=e(o);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const i=e(o);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return r()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function Y(t,n,e,r){return P(t,c=>c.nodeName===n,c=>{const a=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||a.push(o.name)}a.forEach(l=>c.removeAttribute(l))},()=>r(n))}function mt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return P(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>j(n),!0)}function pt(t){return Z(t," ")}function yt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function gt(t,n,e,r){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,r?"important":"")}function xt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let m;function h(t){m=t}function S(){if(!m)throw new Error("Function called outside component initialization");return m}function bt(t){S().$$.on_mount.push(t)}function $t(t){S().$$.after_update.push(t)}function wt(t,n){S().$$.context.set(t,n)}const d=[],q=[],b=[],M=[],z=Promise.resolve();let k=!1;function D(){k||(k=!0,z.then(F))}function Et(){return D(),z}function A(t){b.push(t)}const E=new Set;let x=0;function F(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),tt(n.$$)}for(h(null),d.length=0,x=0;q.length;)q.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(d.length);for(;M.length;)M.pop()();k=!1,E.clear(),h(t)}function tt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const $=new Set;let _;function kt(){_={r:0,c:[],p:_}}function At(){_.r||p(_.c),_=_.p}function nt(t,n){t&&t.i&&($.delete(t),t.i(n))}function jt(t,n,e,r){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function St(t,n){const e={},r={},c={$$scope:1};let a=t.length;for(;a--;){const l=t[a],o=n[a];if(o){for(const i in l)i in o||(r[i]=1);for(const i in o)c[i]||(e[i]=o[i],c[i]=1);t[a]=o}else for(const i in l)c[i]=1}for(const l in r)l in e||(e[l]=void 0);return e}function Nt(t){return typeof t=="object"&&t!==null?t:{}}function vt(t){t&&t.c()}function Ct(t,n){t&&t.l(n)}function et(t,n,e,r){const{fragment:c,on_mount:a,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),r||A(()=>{const i=a.map(T).filter(I);l?l.push(...i):p(i),t.$$.on_mount=[]}),o.forEach(A)}function it(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(d.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function qt(t,n,e,r,c,a,l,o=[-1]){const i=m;h(t);const u=t.$$={fragment:null,ctx:null,props:a,update:B,not_equal:c,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||i.$$.root};l&&l(u.root);let s=!1;if(u.ctx=e?e(t,n.props||{},(f,y,...N)=>{const v=N.length?N[0]:y;return u.ctx&&c(u.ctx[f],u.ctx[f]=v)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](v),s&&rt(t,f)),y}):[],u.update(),s=!0,p(u.before_update),u.fragment=r?r(u.ctx):!1,n.target){if(n.hydrate){G();const f=V(n.target);u.fragment&&u.fragment.l(f),f.forEach(R)}else u.fragment&&u.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),J(),F()}h(i)}class Mt{$destroy(){it(this,1),this.$destroy=B}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}$set(n){this.$$set&&!L(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{St as A,Nt as B,it as C,H as D,Et as E,ot as F,xt as G,lt as H,Q as I,at as J,ft as K,ut as L,Mt as S,V as a,ht as b,mt as c,R as d,U as e,gt as f,st as g,Z as h,qt as i,yt as j,_t as k,dt as l,pt as m,B as n,kt as o,jt as p,At as q,nt as r,ct as s,j as t,wt as u,$t as v,bt as w,vt as x,Ct as y,et as z};
