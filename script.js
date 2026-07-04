// ===== Mobile nav toggle =====
const railToggle = document.getElementById('railToggle');
const railRungs = document.querySelector('.rail-rungs');

if (railToggle && railRungs) {
  railToggle.addEventListener('click', () => {
    const isOpen = railRungs.classList.toggle('open');
    railToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close mobile menu after a link is tapped
  railRungs.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      railRungs.classList.remove('open');
      railToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Active rung highlighting on scroll =====
const sections = document.querySelectorAll('main .section[id]');
const rungLinks = document.querySelectorAll('.rung');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      rungLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, {
  rootMargin: '-40% 0px -50% 0px',
  threshold: 0
});

sections.forEach(section => observer.observe(section));
