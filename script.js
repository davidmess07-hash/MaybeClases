// Año dinámico en el footer
document.getElementById('y').textContent = new Date().getFullYear();
/* =========================================================
   Maybe · Static script
   Handles dynamic year, mobile drawer toggle, contact form
   submission to WhatsApp, and smooth in-page scrolling.
   ========================================================= */
// Menú móvil
const drawer = document.getElementById('drawer');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
function openDrawer(){ drawer.classList.add('open'); document.body.style.overflow='hidden'; }
function closeDrawer(){ drawer.classList.remove('open'); document.body.style.overflow=''; }
// ---------- Mobile drawer ----------
const drawer = document.getElementById('mobile-drawer');
const openButton = document.getElementById('menu-open');
const closeButton = document.getElementById('menu-close');
openBtn?.addEventListener('click', openDrawer);
closeBtn?.addEventListener('click', closeDrawer);
drawer?.addEventListener('click', (e)=>{ if(e.target === drawer) closeDrawer(); });
document.querySelectorAll('[data-close]').forEach(a => a.addEventListener('click', closeDrawer));
function openDrawer() {
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}
// Formulario -> WhatsApp
const WA_NUMBER = '34699331196';
const form = document.getElementById('waForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get('name') || '').toString().trim();
  const level = (data.get('level') || '').toString().trim();
  const msg = (data.get('msg') || '').toString().trim();
function closeDrawer() {
  drawer.classList.remove('open');
  document.body.style.overflow = '';
}
openButton?.addEventListener('click', openDrawer);
closeButton?.addEventListener('click', closeDrawer);
drawer?.addEventListener('click', (event) => {
  if (event.target === drawer) closeDrawer();
});
document.querySelectorAll('[data-close]').forEach((link) => {
  link.addEventListener('click', closeDrawer);
});
// ---------- Contact form → WhatsApp ----------
const WHATSAPP_NUMBER = '34699331196';
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = (formData.get('name') || '').toString().trim();
  const level = (formData.get('level') || '').toString().trim();
  const message = (formData.get('message') || '').toString().trim();
  if (!name) {
    alert('Por favor, indícanos tu nombre.');
    return;
  }
  const text =
  const whatsappText =
`Hola Maybe, soy ${name}.
Nivel del alumno: ${level}.
${msg ? 'Mensaje: ' + msg : 'Me gustaría más información.'}`;
${message ? 'Mensaje: ' + message : 'Me gustaría más información.'}`;
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener');
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
  window.open(whatsappUrl, '_blank', 'noopener');
});
// Smooth scroll para enlaces internos (por si el navegador no aplica scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
// ---------- Smooth scrolling for in-page anchors ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    if (targetId && targetId.length > 1) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
