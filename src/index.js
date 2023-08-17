if(window.innerWidth < 768) {
  mainDiv = document.querySelector('main')
  const navbar2 = document.querySelector('.navbar');
  mainDiv.classList.add('mt110')
  navbar2.classList.add('fixed');
}

const body = document.querySelector("body")
const loading = document.querySelector(".loading")
window.addEventListener('load', function() {
  loading.classList.add("display-toggle")
  body.style.overflowY = 'auto'
});

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

aside = document.querySelector('.aside-nav')
menuIcon = document.querySelector('.menu-icon')
closeIcon = document.querySelector('.aside-x')
body = document.querySelector('body')

menuIcon.addEventListener('click', () => {
    aside.classList.toggle('display-toggle');
    body.classList.toggle('overflow-toggle')
});

closeIcon.addEventListener('click', () => {
    aside.classList.toggle('display-toggle');
    body.classList.toggle('overflow-toggle')
});

window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar');
  const navinfo = document.querySelector('.nav-info-container')
  const scrollPosition = window.scrollY;

  if (window.innerWidth > 768) {
    if (scrollPosition >= 40) {
      navbar.classList.add('fixed');
      navinfo.classList.add('scroll-fixed')
    } else {
      navbar.classList.remove('fixed');
      navinfo.classList.remove('scroll-fixed')
    }
  }
});

const servicos = document.querySelector('.li-servicos')
const servicosBox = document.querySelector('.servicos-box')
const servicosAside = document.querySelector('.aside-li-servicos')
const servicosBoxAside = servicosAside.querySelector('.aside-servicos-box')
const imgSeta = document.querySelector("imgSeta")

servicos.addEventListener("mouseenter", (event) => {
  servicosBox.classList.toggle('display-toggle')
});

servicos.addEventListener("mouseleave", (event) => {
  servicosBox.classList.toggle('display-toggle')
});

servicosAside.addEventListener("click", (event) => {
  servicosBoxAside.classList.toggle('display-toggle')
  imgSeta.classList.toggle('rotate-90')
});

const treinamentosList = document.querySelectorAll('.treinamentos-li');

treinamentosList.forEach((element) => {
  element.addEventListener('click', () => {
    const container2 = element.querySelector('.container2-li');
    const img = element.querySelector('img');
    img.classList.toggle('rotate-90')
    container2.classList.toggle('display-toggle');
  });
});

const servicoCards = document.querySelectorAll('.servico-cards');

servicoCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    let capaceteIcon = card.querySelector('.capacete-icon');
    capaceteIcon.src = 'public/capacete.png'; // Altere o src para a imagem desejada
  });

  card.addEventListener('mouseout', () => {
    let capaceteIcon = card.querySelector('.capacete-icon');
    capaceteIcon.src = 'public/capacete-branco.png'; // Volta para o src original
  });
});


// var dataAtual = new Date();

// // Obtém o ano atual
// var anoAtual = dataAtual.getFullYear();

// var elementDate = document.querySelector('.year-date');
// elementDate.innerText = anoAtual;

