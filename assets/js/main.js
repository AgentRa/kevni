$(document).ready(function () {
    $('.navbar-toggler').on('click', function () {
        if ($(this).hasClass('collapsed')) {
            $('header').addClass('header-white');
        } else {
            $('header').removeClass('header-white');
        }
    });
});

$(document).on('click', '.scrollable', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        575: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});


const header = document.querySelector('header').style;
const coll = document.getElementsByClassName('des-collapsible');
const navbar = document.getElementById('collapsibleNavbar');
const main = document.querySelector('main');

window.addEventListener('scroll', function() {
  switch (true) {
    case(pageYOffset === 0 ):
      if (!!document.querySelector('.header-white')) {
        break;
      } header.backgroundColor = 'transparent';
      break;
    case(pageYOffset > 0):
      document.querySelector('main').style.overflowX = 'hidden';
      header.backgroundColor = '#F1F5F8';
      break;
    case (window.innerWidth < 1000 && pageYOffset === 0):
      header.removeProperty('background-color');
    case (window.innerWidth > 1000 && pageYOffset < 800):
      header.backgroundColor = 'transparent';
    default:
      return;
  }
});

document.querySelector('.navbar-toggler').addEventListener('click', () => {
  if (window.pageYOffset <= 800) header.backgroundColor = 'white';
});


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    this.querySelector('img').classList.toggle('rotateUp');
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.paddingBottom = '0';
    } else {
      content.style.maxHeight = content.scrollHeight + 550 + 'px';
      content.style.paddingBottom = '50px';
    }
  });
}

document.querySelector('.no-decor').addEventListener('mouseover', () => {
  console.log('WTF')
});

