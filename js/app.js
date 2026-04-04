// js/app.js
document.addEventListener('DOMContentLoaded',()=>{
  console.log('[Auto Detail Car Wash] Ready.');
});
export const debounce=(fn,d=300)=>{let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),d);}};
export const formatCurrency=(n,c='USD')=>new Intl.NumberFormat('en-US',{style:'currency',currency:c}).format(n);
export const truncate=(s,l=140)=>s.length>l?s.slice(0,l).trimEnd()+'...':s;
