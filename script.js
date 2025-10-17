const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-menu');
const overlay = document.getElementById('overlay');
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");


const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');

menuBtn.onclick = () => {
      sideMenu.classList.add('open');
      overlay.classList.add('show');
    };
closeBtn.onclick = () => {
      sideMenu.classList.remove('open');
      overlay.classList.remove('show');
    };
overlay.onclick = () => {
      sideMenu.classList.remove('open');
      overlay.classList.remove('show');
    };


document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});



window.addEventListener('scroll', () => {
  const bg = document.querySelector('.peach-hero-bg');
  if (bg) {
    const scrollY = window.pageYOffset;
    bg.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
});

document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for subscribing!");
  this.reset();
});



document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.animate-title');

  if (!title) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        title.classList.add('visible');
        observer.unobserve(title); // Animate once only
      }
    });
  }, { threshold: 0.5 });

  observer.observe(title);
});

  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = newsletterEmail.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email.toLowerCase())) {
      alert('Thank you for subscribing!');
      newsletterEmail.value = '';
    } else {
      alert('Please enter a valid email address.');
      newsletterEmail.focus();
    }
  });





prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -200, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 200, behavior: "smooth" });
});
