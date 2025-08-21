document.addEventListener('DOMContentLoaded', () => {
  const contenidoFuneraria = {
    honor: {
      titulo: 'Servicios Exequiales',
      texto: 'Brindamos servicios exequiales personalizadas que honran la vida y legado de tus seres queridos con respeto y solemnidad.'
    },
    traslado: {
      titulo: 'Cofres de Madera y Metal',
      texto: 'Ofrecemos cofres de alta calidad en diferentes materiales, asegurando dignidad y protección.'
    },
    guia: {
      titulo: 'Autocarroza',
      texto: 'Contamos con vehículo funerario equipado para un traslado respetuoso y puntual del ser querido.'
    },
    floral: {
      titulo: 'Arreglos Florales',
      texto: 'Creamos arreglos florales únicos que expresan cariño y homenaje en cada despedida.'
    }
  };
  const hasSwiperContainer = document.querySelector('.swiper');
  if (typeof Swiper !== 'undefined' && hasSwiperContainer) {
    new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: 800
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  const serviciosBtn = document.getElementById('servicios-btn');
  const dropdown = serviciosBtn ? serviciosBtn.closest('.dropdown') || serviciosBtn.parentElement : null;

  if (serviciosBtn && dropdown) {
    serviciosBtn.addEventListener('click', function (e) {
      e.preventDefault();
      dropdown.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target) && e.target !== serviciosBtn) {
        dropdown.classList.remove('show');
      }
    });
  }
  const carrusel = document.getElementById('carrusel');
  let desplazamiento = 0;

  if (carrusel) {
    const sampleCard = carrusel.querySelector('.card');
    const anchoCard = sampleCard ? (sampleCard.offsetWidth + 20) : 270; 

    window.moverCarrusel = function (direccion) {
      const maxScroll = carrusel.scrollWidth - carrusel.clientWidth;
      desplazamiento += direccion * anchoCard;
      if (desplazamiento < 0) desplazamiento = 0;
      if (desplazamiento > maxScroll) desplazamiento = maxScroll;
      carrusel.style.transform = `translateX(-${desplazamiento}px)`;
    };
  }
  const detalles = {
    1: `<h4>Placas Recordatorias</h4><p>Las placas recordatorias son piezas elaboradas en mármol o granito. Se utilizan para honrar y mantener viva la memoria de seres queridos en mausoleos, lápidas o nichos. Pueden incluir nombres, fechas, frases conmemorativas, símbolos religiosos o fotografías. Se fabrican con materiales resistentes a la intemperie.</p>`,
    2: `<h4>Lápidas Personalizadas</h4><p>Las lápidas personalizadas se diseñan a medida para representar la vida y el legado de la persona fallecida. En ellas se puede colocar nombre, fecha , oraciones y otros detalles simbólicos. Se utiliza mármol nacional, granito negro, marmol italiano importado, que garantizan durabilidad y belleza. El proceso incluye diseño gráfico, corte, pulido y grabado profundo para asegurar una presentación elegante y duradera.</p>`,
    3: `<h4>Artesanías en Mármol</h4><p>Estas artesanías son piezas únicas hechas a mano, esculpidas directamente en mármol, que pueden tener fines decorativos, religiosos o conmemorativos, cada figura es trabajada cuidadosamente con herramientas especializadas.</p>`,
    4: `<h4>Mausoleos</h4><p>Los mausoleos son estructuras funerarias familiares diseñadas para albergar varios nichos o cofres en un espacio común. Se construyen con mármol, granito, y pueden incluir columnas, puertas de bronce,o cruces. El proceso de elaboración abarca desde el diseño arquitectónico hasta el trabajo de obra, con acabados que garantizan solemnidad, respeto y protección.</p>`,
    5: `<h4>Cruces para Casa</h4><p>Estas cruces son fabricadas en mármol, y están pensadas para colocar en hogares como símbolo de fe, protección y recuerdo. Pueden incluir grabados con nombres, fechas. Se realizan en diferentes tamaños y estilos: desde cruces clásicas hasta tallados más elaborados con detalles únicos.</p>`,
    6: `<h4>Trabajos en Bronce</h4><p>Incluyen placas conmemorativas, letras sueltas, imágenes religiosas y figuras decorativas fundidas en bronce. Este material se elige por su durabilidad, elegancia y resistencia al clima. El proceso comienza con un diseño personalizado y finaliza con el pulido y acabado para su brillo y textura.</p>`
  };

  window.mostrarDetalle = function (id) {
    const detalleDiv = document.getElementById('detalle');
    if (!detalleDiv) return;
    detalleDiv.innerHTML = detalles[id] || '<p>Detalle no disponible.</p>';
    detalleDiv.style.display = 'block';
    detalleDiv.scrollIntoView({ behavior: 'smooth' });
  };
  window.mostrarInfo = function(tipo) {
    const infoBox = document.getElementById('infoBox');
    const titulo = document.getElementById('infoTitulo');
    const texto = document.getElementById('infoTexto');

    if (contenidoFuneraria[tipo]) {
      titulo.textContent = contenidoFuneraria[tipo].titulo;
      texto.textContent = contenidoFuneraria[tipo].texto;
      infoBox.style.display = 'block';
      infoBox.scrollIntoView({ behavior: 'smooth' });
    }
  };

});
