 function toggleMenu() {
      document.getElementById('navMenu').classList.toggle('show');
    }

    function toggleMega(item) {
      if (window.innerWidth <= 992) {
        item.classList.toggle('active');
      }
    }

   const swiper = new Swiper(".hero.swiper", {
  loop: true,
  speed: 900,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  on: {
    slideChangeTransitionStart() {
      document.querySelectorAll(".hero-slide").forEach(slide => {
        const strength = slide.dataset.overlay || 0.7;
        slide.querySelector(".hero-overlay").style.background =
          `rgba(42,26,18,${strength})`;
      });
      handleHeroVideos();
    }
  }
});

/* =========================
   VIDEO HANDLING
========================= */

function handleHeroVideos() {
  document.querySelectorAll(".hero-bg video").forEach(video => {
    video.muted = true;
    video.pause();
  });

  const activeVideo =
    document.querySelector(".swiper-slide-active .hero-bg video");

  if (activeVideo) {
    activeVideo.currentTime = 0;
    activeVideo.play().catch(() => {});
  }
}

window.addEventListener("load", handleHeroVideos);

/* =========================
   TAB VISIBILITY
========================= */

document.addEventListener("visibilitychange", () => {
  const videos = document.querySelectorAll(".hero-bg video");

  if (document.hidden) {
    videos.forEach(v => v.pause());
  } else {
    handleHeroVideos();
  }
});

/* =========================
   REDUCED MOTION JS
========================= */

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  swiper.autoplay.stop();
  document.querySelectorAll(".hero-bg video").forEach(v => v.pause());
}



  const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));





const stackImages = document.querySelectorAll('.stack-img');
  let current = 0;

  setInterval(() => {
    stackImages[current].classList.remove('active');
    current = (current + 1) % stackImages.length;
    stackImages[current].classList.add('active');
  }, 9000); // calm, institutional timing


  document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".footprint-image");
  let index = 0;

  if (!images.length) return;

  images[index].classList.add("active");

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 9000); // top-tier timing
});



// About us
const revealItems = document.querySelectorAll("[data-reveal]");

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealItems.forEach(item => revealObserver.observe(item));

//Footer 
document.querySelector('.lf-back-top')
  ?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });



const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();




