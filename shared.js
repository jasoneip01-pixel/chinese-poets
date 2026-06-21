// 十三诗人 — 共享脚本
(function(){
  // Active nav tracking
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  const sections = [];
  navLinks.forEach(a => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) sections.push({id, el, link: a});
  });

  function updateNav(){
    const scrollY = window.scrollY + 100;
    let current = sections[0];
    sections.forEach(s => {
      if(s.el.offsetTop <= scrollY) current = s;
    });
    navLinks.forEach(a => a.classList.remove('active'));
    if(current) current.link.classList.add('active');
  }

  // Back to top
  const backTop = document.getElementById('back-top');
  function toggleBackTop(){
    if(window.scrollY > 600) backTop.classList.add('visible');
    else backTop.classList.remove('visible');
  }
  if(backTop){
    backTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
  }

  window.addEventListener('scroll', () => {
    updateNav();
    if(backTop) toggleBackTop();
  }, {passive:true});
})();
