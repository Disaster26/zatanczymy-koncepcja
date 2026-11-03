(function(){
  var b=document.getElementById('burger'),n=document.getElementById('nav');
  function close(){n.classList.remove('open');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Otwórz menu')}
  b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu')});
  n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});

  // dolny pasek na telefonie: dopiero po przewinięciu za przyciski z pierwszego ekranu, chowany przy formularzu
  var mob=document.getElementById('mob'),cta=document.getElementById('heroCta'),kontakt=document.getElementById('kontakt');
  var past=false,inK=false;
  function upd(){mob.classList.toggle('widac',past&&!inK)}
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(e){past=!e[0].isIntersecting&&e[0].boundingClientRect.top<0;upd()}).observe(cta);
    new IntersectionObserver(function(e){inK=e[0].isIntersecting;upd()},{threshold:.1}).observe(kontakt);
  }

  // formularz: to podgląd, nic nie wysyła
  var f=document.getElementById('form'),m=document.getElementById('formMsg');
  f.addEventListener('submit',function(e){e.preventDefault();m.hidden=false;m.scrollIntoView({block:'nearest',behavior:'smooth'})});
})();
