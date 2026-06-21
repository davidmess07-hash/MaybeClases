/* =========================================================
   Maybe · Static script
   Handles dynamic year, mobile drawer toggle, contact form
   submission to WhatsApp, and smooth in-page scrolling.
   ========================================================= */

// ---------- Set current year in footer ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Mobile drawer ----------
const drawer = document.getElementById('mobile-drawer');
const openButton = document.getElementById('menu-open');
const closeButton = document.getElementById('menu-close');

function openDrawer() {
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

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

// ---------- Carousel ----------
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const dots = document.querySelectorAll('.carousel-dots .dot');

if (track && prevBtn && nextBtn && dots.length > 0) {
  const originalCards = Array.from(track.children);
  const totalOriginal = originalCards.length;
  
  // Clonar tarjetas al final para permitir scroll continuo sin cortes
  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });

  let currentIndex = 0;
  let isAnimating = false;

  function updateDots() {
    const activeIndex = currentIndex % totalOriginal;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  }

  function updateCarousel() {
    const card = track.firstElementChild;
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
    track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
    updateDots();
  }

  nextBtn.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex++;
    updateCarousel();

    if (currentIndex === totalOriginal) {
      setTimeout(() => {
        track.style.transition = 'none';
        currentIndex = 0;
        updateCarousel();
        track.offsetHeight; // Forzar repintado
        track.style.transition = '';
        isAnimating = false;
      }, 300);
    } else {
      setTimeout(() => { isAnimating = false; }, 300);
    }
  });

  prevBtn.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    if (currentIndex === 0) {
      track.style.transition = 'none';
      currentIndex = totalOriginal;
      updateCarousel();
      track.offsetHeight; // Forzar repintado
      
      requestAnimationFrame(() => {
        track.style.transition = '';
        currentIndex = totalOriginal - 1;
        updateCarousel();
        setTimeout(() => { isAnimating = false; }, 300);
      });
    } else {
      currentIndex--;
      updateCarousel();
      setTimeout(() => { isAnimating = false; }, 300);
    }
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (isAnimating) return;
      // Volver a la posición original si estábamos en los clones para un scroll correcto
      if (currentIndex >= totalOriginal) {
        track.style.transition = 'none';
        currentIndex = currentIndex % totalOriginal;
        updateCarousel();
        track.offsetHeight;
        track.style.transition = '';
      }
      currentIndex = index;
      updateCarousel();
    });
  });

  window.addEventListener('resize', () => {
    track.style.transition = 'none';
    updateCarousel();
    track.offsetHeight;
    track.style.transition = '';
  });
  
  // Inicializar
  setTimeout(updateCarousel, 50);
}

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
});
