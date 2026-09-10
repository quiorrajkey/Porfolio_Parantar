// Mobile Navigation Toggle
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
if (menu && nav) {
  menu.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('nav a').forEach((a) => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Dynamic Footer Year
const yearElem = document.querySelector('#year');
if (yearElem) {
  yearElem.textContent = new Date().getFullYear();
}

// Certificate Image Lightbox Modal
function openCertModal(src, caption) {
  const modal = document.getElementById('certModal');
  const img = document.getElementById('modalImg');
  const cap = document.getElementById('modalCaption');
  if (modal && img) {
    img.src = src;
    img.alt = caption || 'Certificate Preview';
    if (cap) cap.textContent = caption || '';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeCertModal() {
  const modal = document.getElementById('certModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCertModal();
  }
});