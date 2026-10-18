document.querySelectorAll('.copy').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const v=btn.parentElement.querySelector('.v');
    const done=()=>{btn.textContent='скопировано';setTimeout(()=>btn.textContent='копировать',1500)};
    const fallback=()=>{const r=document.createRange();r.selectNodeContents(v);const s=getSelection();s.removeAllRanges();s.addRange(r);btn.textContent='выделено'};
    try{navigator.clipboard.writeText(v.textContent.trim()).then(done,fallback)}catch(e){fallback()}
  });
});
const tabs=[...document.querySelectorAll('.nav a')];
tabs.forEach(t=>t.addEventListener('click',()=>{tabs.forEach(x=>x.classList.remove('on'));t.classList.add('on')}));
