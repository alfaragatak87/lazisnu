document.addEventListener('DOMContentLoaded', function(){

    const phone = '6285134739466';
    const msg = encodeURIComponent(
      'Assalamualaikum, saya ingin konfirmasi donasi untuk LAZISNU Pandanwangi 01.'
    );
    const donateUrl = `https://wa.me/${phone}?text=${msg}`;
  
  // 🔗 SEMUA TOMBOL DONASI → HALAMAN DONASI
  document.querySelectorAll('.donateBtn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      window.location.href = 'donasi.html';
    });
  });

  // 📱 NAVBAR TOGGLE MOBILE
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if(navToggle && navLinks){
    navToggle.addEventListener('click', ()=>{
      navLinks.classList.toggle('nav-open');
    });
  }

  // 📅 TAHUN FOOTER OTOMATIS
  const yearEl = document.getElementById('year');
  if(yearEl){
    yearEl.textContent = new Date().getFullYear();
  }

});