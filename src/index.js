const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
    loop: true,
    slidesPerView: 1,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  
  });

// aside = document.querySelector('.aside-nav')
// menuIcon = document.querySelector('.menuIcon')
// closeIcon = document.querySelector('.closeIcon')

// menuIcon.addEventListener('click', () => {
//     aside.classList.toggle('dis-inline');
// });

// closeIcon.addEventListener('click', () => {
//     aside.classList.toggle('dis-inline');
// });

window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar');
  const navinfo = document.querySelector('.nav-info-container')
  console.log(navbar)
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 40) {
      navbar.classList.add('fixed');
      navinfo.classList.add('scroll-fixed')
  } else {
      navbar.classList.remove('fixed');
      navinfo.classList.remove('scroll-fixed')
  }
});

const servicos = document.querySelector('.li-servicos')
const servicosBox = document.querySelector('.servicos-box')

servicos.addEventListener("mouseenter", (event) => {
  servicosBox.style.display = 'absolute'
});

servicos.addEventListener("mouseleave", (event) => {
  servicosBox.style.display = 'absolute'
});


// var dataAtual = new Date();

// // Obtém o ano atual
// var anoAtual = dataAtual.getFullYear();

// var elementDate = document.querySelector('.year-date');
// elementDate.innerText = anoAtual;

