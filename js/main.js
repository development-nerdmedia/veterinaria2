AOS.init();




if (navigator.userAgent.indexOf('Mac OS X') != -1) {
  $("body").addClass("mac");
}

/* close nav when clicking on a nav item */
document.addEventListener("click", function (e) {
  if (e.target.closest(".close")) {
    jQuery('body').removeClass('scrollhidden');
    document.querySelector(".contacto").classList.toggle("open");
  }
});






function toggleNav() {
  navToggler.classList.toggle("activo");
}

document.addEventListener("click", (e) => {
  if (e.target.closest(".btnContacto")) {
    document.querySelector(".contacto").classList.toggle("open");
    jQuery('body').addClass('scrollhidden');
  }

})




function cambiar(imgchange) {
  document.getElementById('cuadro').style.backgroundImage = imgchange;
  document.getElementById('title1').style.display = 'block';
  document.getElementById('title2').style.display = 'none';
}

function cambiartexto() {
  document.getElementById('title1').style.display = 'block';
  document.getElementById('title2').style.display = 'none';
  document.getElementById('title3').style.display = 'none';
}

function cambiartexto2() {
  document.getElementById('title1').style.display = 'none';
  document.getElementById('title2').style.display = 'block';
  document.getElementById('title3').style.display = 'none';
}

function cambiartexto3() {
  document.getElementById('title1').style.display = 'none';
  document.getElementById('title2').style.display = 'none';
  document.getElementById('title3').style.display = 'block';
}

function cambiartexto4() {
  document.getElementById('title1').style.display = 'none';
  document.getElementById('title2').style.display = 'none';
}

function cambiarcolor(col, colnn) {
  document.getElementById('btn1').style.backgroundColor = col;
  document.getElementById('btn2').style.backgroundColor = colnn;
  document.getElementById('btn1').style.color = '#FFF';
  document.getElementById('btn2').style.color = '#494748';
  document.getElementById('btn3').style.backgroundColor = colnn;
  document.getElementById('btn3').style.color = '#494748';
}

function cambiarcolor2(col, colnn) {
  document.getElementById('btn1').style.backgroundColor = colnn;
  document.getElementById('btn2').style.backgroundColor = col;
  document.getElementById('btn2').style.color = '#FFF';
  document.getElementById('btn1').style.color = '#494748';
  document.getElementById('btn3').style.backgroundColor = colnn;
  document.getElementById('btn3').style.color = '#494748';
}

function cambiarcolor3(col, colnn) {
  document.getElementById('btn1').style.backgroundColor = colnn;
  document.getElementById('btn2').style.backgroundColor = colnn;
  document.getElementById('btn3').style.backgroundColor = col;
  document.getElementById('btn3').style.color = colnn;
  document.getElementById('btn2').style.color = '#494748';
  document.getElementById('btn1').style.color = '#494748';
}

function cambiarcolor4(col, colnn) {
  document.getElementById('btn1').style.backgroundColor = colnn;
  document.getElementById('btn2').style.backgroundColor = colnn;
  document.getElementById('btn2').style.color = '#494748';
  document.getElementById('btn1').style.color = '#494748';
}

$(document).ready(function () {
  // $('.responsive').slick({    
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   adaptiveHeight: true,
  //   infinite: true,
  //   // autoplay: true,
  //   autoplaySpeed: 5000,
  //   responsive: [
  //     {
  //       breakpoint: 1025,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 581,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });
  // $('.slider-equipo').slick({
  //   dots: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   responsive: [
  //     {
  //       breakpoint: 581,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     }
  //   ]
  // });
  // $('.slider-servicio').slick({
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  // });

  var swiper = new Swiper("section.equipo .slider-equipo", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".equipo .swiper-button-next",
      prevEl: ".equipo .swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '769': {
        slidesPerView: 2,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  });

  var swiper2 = new Swiper("section.administracion.team .sliderAdmin", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 0,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".administracion.team .swiper-button-next",
      prevEl: ".administracion.team .swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '1025': {
        slidesPerView: 3,
      },
      '625': {
        slidesPerView: 2,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  });

  var swiper3 = new Swiper("section.administracion.groomer .sliderAdmin", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 0,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".administracion.groomer .swiper-button-next",
      prevEl: ".administracion.groomer .swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '1025': {
        slidesPerView: 3,
      },
      '687': {
        slidesPerView: 2,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  });
  var swiper4 = new Swiper("section.Servicios .sliderAdmin", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    slidesPerGroup: 1,
    navigation: {
      nextEl: "section.Servicios .swiper-button-next",
      prevEl: "section.Servicios .swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
    },
  });

});


MyApp = {
  selectFocus: {
    init: function () {
      document.addEventListener("click", (e) => {
        var formespacioselect = document.querySelectorAll('.libroReclamaciones form select');
        if (e.target.closest(".libroReclamaciones form select")) {
          e.target.parentElement.classList.toggle("active");
        }
        else {
          formespacioselect.forEach(function (shinyItem2) {
            shinyItem2.parentElement.classList.remove("active")
          });
        }
      })
    }
  },
  contactoPage: {
    init: function () {
      setTimeout(function () {
        var mi_elemento = document.getElementById("contactoPage");
        mi_elemento.style.display = "block";
      }, 1000);
    }
  },
  header: {
    init: function () {
      /* close nav when clicking on a nav item */
      document.addEventListener("click", function (e) {
        if (e.target.closest(".close-menu-movil")) {
          menumovilact();
        }
      });
      /* MENU MOVIL */
      var menumovil = document.querySelector(".icon-menu");
      menumovil.addEventListener("click", menumovilact);
      function menumovilact() {
        menumovil.classList.toggle("activo");
        document.querySelector(".secmenumovil").classList.toggle("open");
      }
    }
  },
  marquee: {
    init: function () {
      $('.marquee-with-options').marquee({
        speed: 30000,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
      });
    }
  }
}


if ($('.libroReclamaciones').length > 0) {
  MyApp.selectFocus.init();
}

if ($('#contactoPage').length > 0) {
  MyApp.contactoPage.init();
}

if ($('.header').length > 0) {
  MyApp.header.init();
}

if ($('.marquee-with-options').length > 0) {
  MyApp.marquee.init();
}




