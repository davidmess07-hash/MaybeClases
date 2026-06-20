// Año dinámico en el pie de página
document.getElementById('y').textContent = new Date().getFullYear();

// Menú móvil
const drawer = document.getElementById('drawer');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');

function openDrawer() {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
}

openBtn?.addEventListener('click', openDrawer);
closeBtn?.addEventListener('click', closeDrawer);
drawer?.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
});

document.querySelectorAll('[data-close]').forEach(a => a.addEventListener('click', closeDrawer));

// Formulario -> WhatsApp
const WA_NUMBER = '34699331196';
const form = document.getElementById('waForm');

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    
    const name = (data.get('name') || '').toString().trim();
    const level = (data.get('level') || '').toString().trim();
    const msg = (data.get('msg') || '').toString().trim();
    
    if (!name) {
        alert('Por favor, indícanos tu nombre.');
        return;
    }
    
    const text = `Hola Maybe, soy ${name}. 
Nivel del alumno: ${level}. 
${msg ? 'Mensaje: ' + msg : 'Me gustaría más información.'}`;
    
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
});

// Desplazamiento suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id && id.length > 1) {
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});
