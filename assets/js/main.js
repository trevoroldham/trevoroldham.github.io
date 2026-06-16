document.addEventListener("DOMContentLoaded", () => {
  // 1. Typing Effect in Hero Section
  const typedSpan = document.getElementById("typed");
  const words = ["Mathematician.", "Software Engineer.", "Quantitative Trader.", "ML Engineer."];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 2000; 
  let wordIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < words[wordIndex].length) {
      typedSpan.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      wordIndex++;
      if (wordIndex >= words.length) wordIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  if (words.length) setTimeout(type, newTextDelay + 250);

  // 2. Scroll Reveals
  const reveals = document.querySelectorAll('.reveal');

  function revealElements() {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  }

  // 3. Mobile Menu Toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
    });
  }

  // Close mobile menu when a link is clicked
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('mobile-active')) {
        navLinks.classList.remove('mobile-active');
      }
    });
  });

  window.addEventListener('scroll', revealElements);
  // Trigger once on load
  revealElements();
});
