// function removeActive(){
//     navList.forEach(function(e){
//         e.classList.remove('active-a');
//     });
// }

// var homeNav = new Waypoint({
//     element: document.getElementById('alfatv'),
//     handler: function(direction) {
//       removeActive()
//       navList[0].classList.add('active-a')
//     },
//     offset: '10%'
// })

var nasc1 = document.querySelector('.main-p1')
window.addEventListener('load', function() {
    nasc1.classList.add('animate')
});

var nasc2 = document.querySelector('.main-p2')
window.addEventListener('load', function() {
    nasc2.classList.add('animate')
});

var sobre1 = new Waypoint({
    element: document.querySelector('.texto-sobre'),
    handler: function(direction) {
      this.element.classList.add('animate')
    },
    offset: '75%'
})

var sobre2 = new Waypoint({
    element: document.querySelector('.swiper'),
    handler: function(direction) {
      this.element.classList.add('animate')
    },
    offset: '75%'
})

var formTexto = new Waypoint({
    element: document.querySelector('.form-textos'),
    handler: function(direction) {
      this.element.classList.add('animate')
    },
    offset: '75%'
})

var servicoContainer = new Waypoint({
    element: document.querySelector('.servico-container'),
    handler: function(direction) {
      this.element.classList.add('animate')
    },
    offset: '75%'
})

var treinos = new Waypoint({
    element: document.querySelector('.treino-ul'),
    handler: function(direction) {
      this.element.classList.add('animate')
    },
    offset: '75%'
})


