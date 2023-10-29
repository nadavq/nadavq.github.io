window.onload = () => {
new Swiper(".swiper", {
    effect: "coverflow",
    direction: "vertical",
    grabCursor: true,
    centeredSlides: true,
    
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1560: {
        slidesPerView: 3,
      },
    },
  });

  new Swiper(".swiper-h", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1560: {
        slidesPerView: 3,
      },
    },
  });

  const job1 = document.querySelector(".job1");
  const job2 = document.querySelector(".job2");
  for(var i = 1; i < 10; i++) {
      const d = document.createElement("div");
      d.className = "swiper-slide";
      const e = document.createElement("img");
      e.src = `/assets/shakeTheme/${i}.png`;
      d.appendChild(e)
      if(i > 5) {
          job2.appendChild(d);
        } else {
            job1.appendChild(d);    
      }
  }
}