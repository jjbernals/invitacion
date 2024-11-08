// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).load(function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});
// Lista de nombres y cupos
const listaCupos = {
  "catalina_acosta": 1,
  "mariana_lopez": 1,
  "mariana_ospina": 1,
  "ambar_delgado": 1,
  "paula_y_camila_garcia": 2,
  "fredy_sapuy_sra_e_hija": 3,
  "juliana_bedoya": 1,
  "sara_pena": 1,
  "isabela_espinosa": 1,
  "susana_gonzalez": 1,
  "mariana_ramos": 1,
  "paola_vargas": 1,
  "isabela_castillo": 1,
  "dulce_maria_rojas": 1,
  "maria_jose_bonilla": 1,
  "pablo_romero": 1,
  "maria_paola_sierra": 1,
  "natalia_barragan": 2,
  "isabela_salazar": 1,
  "samuel_tellez": 1,
  "jorge_hoyos_sra_e_hijo": 3,
  "benicio_vargas_sra_e_hijo": 3,
  "andrea_bernuedez_e_hijas": 3,
  "amparo_esquivel_e_hija": 2,
  "oscar_bolanos_sra_e_hija": 3,
  "jhon_perez_sra_e_hija": 3,
  "leidy_torres": 1,
  "jhon_lozano_sra_e_hija": 3,
  "fernando_penaloza_y_sra": 2,
  "esteban_parra_y_sra": 2,
  "edward_lopez_y_sra": 2,
  "jorge_barrios_y_sra": 2,
  "erica_gonzalez": 1,
  "francisco_delgadillo": 1,
  "juan_francisco_ospina_y_sra": 2,
  "wilson_chamorro_y_sra": 2,
  "uber_giraldo_y_sra": 2,
  "paula_ramirez": 1,
  "cristian_ardila_y_sra": 2,
  "armando_marin_y_sra": 2,
  "alejandro_londono": 1,
  "andre_martinez_y_sra": 2,
  "martin_alfonso_botero_y_sra": 2,
  "leidy_reyes": 1,
  "julio_cesar_pardo_y_sra": 2,
  "jackeline_quintero": 1,
  "didier_cangrejo_y_sra": 2,
  "eva_vargas": 1,
  "jhon_jairo_arcinegas_sra_e_hijo": 3,
  "luis_ernesto_gomez_y_sra": 2,
  "felipe_duarte_y_sra": 2,
  "rafael_castellanos_y_sra": 2,
  "johana_garzon": 1,
  "luis_fernando_gonzalez_y_sra": 2,
  "luis_jaime_gutierreez_y_sra": 2,
  "efrain_sanchez_y_sra": 2,
  "laura_castro": 1,
  "felipe_y_diana_calle": 2,
  "alejandra_barreto": 1,
  "francis_y_miriam": 2,
  "andrea_penaloza": 1,
  "rosmery_devia": 1,
  "eliana_barreto": 1,
  "victor_bonilla_y_sra": 2,
  "henry_garcia_y_sra": 2,
  "jorge_rivera_y_sra": 2,
  "tia_paula": 1,
  "abue_gloria": 1,
  "abue_graciela": 1,
  "tio_mauricio": 1,
  "johan_lopez_nohora_y_johitan": 3,
  "rodolfo_vanegas_sra_e_hijo": 3,
  "diana_huertas_e_hijos": 3,
  "daniel_huertas_sra_e_hijo": 3,
  "ever_huertas_sra_e_hijo": 3,
  "martha_pinzon": 1,
  "pilar_pinzon_e_hija": 2,
  "jair_arias_sra_e_hijo": 4,
  "orlando_huertas_y_sra": 2,
  "edwin_huertas_y_sra": 2,
  "fabian_salazar_sra_e_hijos": 4,
  "sebastian_balanta_y_sra": 2,
  "oscar_vasquez_sra_e_hija": 3,
  "carlos_hernandez_y_sra": 2,
  "haner_y_vanessa": 2,
  "helena_olivares": 1,
  "fernando_y_martha": 2,
  "enrique_fonseca_sra_e_hija": 3,
  "deisy_rodriguez_e_hijos": 3,
  "tomas_y_johan": 2,
  "carlos_y_deisy": 2,
  "luisa_raigoso_e_hija": 2,
  "mauricio_conde_y_sra": 2,
  "agustin_sanabria_y_sra": 2,
  "harol_liberato_y_sra": 2,
  "jose_pedraza_y_sra": 2
};

// Función para extraer el parámetro de la URL
// Función para obtener el parámetro de la URL
function getUrlParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Función para actualizar el modal
function updateModal() {
  const param = getUrlParam('invitacion');
  if (param && listaCupos[param]) {
    const nombre = param.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase()); // Formatear el nombre
    const cupos = listaCupos[param];

    // Actualizar el mensaje del modal
    document.getElementById('modalMessage').textContent = `${nombre}, tienes ${cupos} cupo(s) para el evento.`;

    // Mostrar las opciones dinámicas si hay más de un cupo
    const dynamicOptions = document.getElementById('dynamicOptions');
    dynamicOptions.innerHTML = '';

    if (cupos > 1) {
      let optionsHtml = '';
      for (let i = cupos; i >= 1; i--) {
        optionsHtml += `<label class="radio">
                          <input type="radio" name="cupos" value="${i}"> ${i}
                        </label><br>`;
      }
      dynamicOptions.innerHTML = optionsHtml;
      document.getElementById('selectionMessage').style.display = 'block';
    }
  }
}

// Función para abrir el modal
function openModal() {
  updateModal();
  document.getElementById('confirmModal').classList.add('is-active');
}

// Función para cerrar el modal
function closeModal() {
  document.getElementById('confirmModal').classList.remove('is-active');
}

// Función para enviar los datos a la API
async function confirmarAsistencia() {
  const param = getUrlParam('invitacion');
  if (!param || !listaCupos[param]) return;

  const nombre = param.replace(/_/g, ' ');
  const cuposSeleccionados = document.querySelector('input[name="cupos"]:checked');
  const invitados = cuposSeleccionados ? parseInt(cuposSeleccionados.value) : listaCupos[param];

  // Preparar los datos para el envío
  const payload = {
    nombre: nombre,
    invitados: invitados
  };

  try {
    const response = await fetch('https://invitaciones-jboy.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      alert('Confirmación exitosa. ¡Gracias por tu respuesta!');
      closeModal();
    } else {
      alert('Error al enviar la confirmación. Por favor, inténtalo de nuevo.');
    }
  } catch (error) {
    console.error('Error al consumir la API:', error);
    alert('Hubo un problema al enviar la confirmación.');
  }
}

// Asignar el evento al botón de confirmación
document.querySelector('.confirm-button').addEventListener('click', confirmarAsistencia);
