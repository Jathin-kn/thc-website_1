/* shared.js — injects nav + footer + floating WA + scroll animations */

const WA_NUMBER  = '917349491918';
const WA_MESSAGE = encodeURIComponent('Hi, I need help with surgery support. Can we talk?');
const WA_HREF    = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const WA_SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

function injectNav(activePage) {
  const pages = [
    { id: 'home',     label: 'Home',     href: 'index.html'   },
    { id: 'services', label: 'Services', href: 'services.html'},
    { id: 'about',    label: 'About',    href: 'about.html'   },
    { id: 'about-v2', label: 'About v2', href: 'about-v2.html' },
    { id: 'contact',  label: 'Contact',  href: 'contact.html' },
    
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="nav-link${activePage === p.id ? ' active' : ''}">${p.label}</a>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="nav">
      <a href="index.html" class="nav-logo">
        <img src="logo.png" alt="The Hospital Care"
             onerror="this.style.display='none';this.nextElementSibling.style.display='block'"/>
        <span class="nav-logo-fallback">The Hospital Care</span>
      </a>
      <div class="nav-links">
        ${links}
        <a href="${WA_HREF}" target="_blank" class="nav-cta">
          ${WA_SVG}<span>Chat with us</span>
        </a>
      </div>
    </nav>`;
}

function injectFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-brand-name">The Hospital Care</div>
          <p>Helping patients and families navigate surgery with clarity, compassion, and complete end-to-end support — from the first question to the day you come home.</p>
          <div class="footer-socials">
            <a href="https://www.instagram.com/the_hospital_care" target="_blank" class="footer-soc" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/share/18exiyppFq/" target="_blank" class="footer-soc" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="${WA_HREF}" target="_blank" class="footer-soc" aria-label="WhatsApp">
              ${WA_SVG}
            </a>
          </div>
        </div>
        <div class="footer-col">
          <div class="footer-col-h">Pages</div>
          <a href="index.html">Home</a>
          <a href="services.html">Services</a>
          <a href="about.html">About</a>
          <a href="about-v2.html">About v2</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-h">Contact</div>
          <a href="tel:+917349491918">+91 73494 91918</a>
          <a href="mailto:hello@thehospitalcare.in">hello@thehospitalcare.in</a>
          <a>Bengaluru, India</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 The Hospital Care. All rights reserved.</p>
        <p>Bengaluru, India</p>
      </div>
    </footer>`;
}

function injectFloatWA() {
  const btn = document.createElement('a');
  btn.href      = WA_HREF;
  btn.target    = '_blank';
  btn.className = 'float-wa';
  btn.setAttribute('aria-label', 'Chat on WhatsApp');
  btn.innerHTML = WA_SVG;
  document.body.appendChild(btn);
}

function initScrollFade() {
  const els = document.querySelectorAll('.fade-up');
  const io  = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollFade();
  injectFloatWA();
});
