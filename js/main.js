document.addEventListener('DOMContentLoaded', function() {
// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
if (mobileMenuBtn && navLinks) {
 mobileMenuBtn.addEventListener('click', function() {
  navLinks.classList.toggle('active');
  const icon = this.querySelector('i');
  if (navLinks.classList.contains('active')) { icon.classList.remove('fa-bars'); icon.classList.add('fa-times'); }
  else { icon.classList.remove('fa-times'); icon.classList.add('fa-bars'); }
 });
 document.addEventListener('click', function(e) {
  if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target) && navLinks.classList.contains('active')) {
   navLinks.classList.remove('active');
   mobileMenuBtn.querySelector('i').classList.remove('fa-times');
   mobileMenuBtn.querySelector('i').classList.add('fa-bars');
  }
 });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
 const question = item.querySelector('.faq-question');
 if (question) {
  question.addEventListener('click', () => {
   const isActive = item.classList.contains('active');
   faqItems.forEach(i => i.classList.remove('active'));
   if (!isActive) item.classList.add('active');
  });
 }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
 window.addEventListener('scroll', function() {
  if (window.scrollY > 50) { navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'; }
  else { navbar.style.boxShadow = '0 1px 2px 0 rgba(0,0,0,0.05)'; }
 });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function(e) {
  const href = this.getAttribute('href');
  if (href !== '#') {
   const target = document.querySelector(href);
   if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }
 });
});

// Contact form handling (Formspree)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
 contactForm.addEventListener('submit', function(e) {
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;
  setTimeout(() => {
   btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
   btn.style.background = '#10b981';
   setTimeout(() => { btn.innerHTML = originalText; btn.disabled = false; btn.style.background = ''; }, 3000);
  }, 1500);
 });
}

// Intersection Observer for animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; }
 });
}, observerOptions);

document.querySelectorAll('.course-card, .testimonial-card, .why-card, .blog-card, .module').forEach(el => {
 el.style.opacity = '0';
 el.style.transform = 'translateY(20px)';
 el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 observer.observe(el);
});

// Back to top button
const backToTop = document.createElement('button');
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.className = 'back-to-top';
backToTop.style.cssText = 'position:fixed;bottom:2rem;right:2rem;width:48px;height:48px;border-radius:50%;background:var(--primary);color:white;border:none;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.15);display:none;align-items:center;justify-content:center;font-size:1.2rem;z-index:999;transition:all 0.3s ease;';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
 if (window.scrollY > 500) { backToTop.style.display = 'flex'; }
 else { backToTop.style.display = 'none'; }
});

backToTop.addEventListener('click', () => {
 window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add hover effect to back to top
backToTop.addEventListener('mouseenter', () => { backToTop.style.background = 'var(--primary-dark)'; backToTop.style.transform = 'translateY(-4px)'; });
backToTop.addEventListener('mouseleave', () => { backToTop.style.background = 'var(--primary)'; backToTop.style.transform = 'translateY(0)'; });

// External link tracking
document.querySelectorAll('a[href^="https://wa.me"], a[href^="https://facebook.com"], a[href^="https://twitter.com"]').forEach(link => {
 link.addEventListener('click', function() {
  console.log('External link clicked:', this.href);
 });
});

console.log('LearnTech Kenya - Website loaded successfully');
});
