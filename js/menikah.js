// Get that hamburger menu cookin' //
document.addEventListener('DOMContentLoaded', async () => {
  await obtenerDatosIniciales();
});

async function obtenerDatosIniciales() {
  const param = getUrlParam('invitacion');
  const confirmButton = document.querySelector('.confirm-button'); // Botón de confirmar
  const buttonText = document.querySelector('.button-text'); // Texto dentro del botón
  const loader = document.querySelector('.loader'); // Cargador

  try {
    // Realiza la llamada a la API
    const response = await fetch('https://invitaciones-jboy.onrender.com/invitado/' + param);

    if (response.ok) {
      const data = await response.json();
      console.log('Datos recibidos:', data);

      // Verificamos si la consulta devuelve true o false
      if (data === true) {
        // Si la respuesta es true, deshabilitamos el botón
        confirmButton.disabled = true;
        buttonText.textContent = 'No disponible'; // Cambiar texto del botón
      } else if (data === false) {
        // Si la respuesta es false, habilitamos el botón
        confirmButton.disabled = false;
        buttonText.textContent = 'Confirmar'; // Cambiar texto del botón a Confirmar
      }
    } else {
      console.error('Error en la respuesta del servidor:', response.statusText);
      confirmButton.disabled = true; // Deshabilitar el botón en caso de error
    }
  } catch (error) {
    console.error('Error al obtener datos:', error);
    confirmButton.disabled = true; // Deshabilitar el botón en caso de error
  }
}

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
  "Catalina_Acosta": 1,
  "Mariana_Lopez": 1,
  "Mariana_Ospina": 1,
  "Ambar_Delgado": 1,
  "Paula_Y_Camila_Garcia": 2,
  "Fredy_Sapuy_Sra_E_Hija": 3,
  "Juliana_Bedoya": 1,
  "Sara_Peña": 1,
  "Isabela_Espinosa": 1,
  "Susana_Gonzalez": 1,
  "Mariana_Ramos": 1,
  "Paola_Vargas": 1,
  "Isabela_Castillo": 1,
  "Dulce_Maria_Rojas": 1,
  "Maria_Jose_Bonilla": 1,
  "Sarah_Millan": 1,
  "Maria_Paola_Sierra": 1,
  "Angel_Eheverry_Y_Sra": 2,
  "Isabela_Salazar": 1,
  "Samuel_Tellez": 1,
  "Jorge_Hoyos_Sra_E_Hijo": 3,
  "Benicio_Vargas_Sra_E_Hijo": 3,
  "Andrea_Bermudez_E_Hijas": 3,
  "Amparo_Esquivel_E_Hija": 2,
  "Oscar_Bolaños_Sra_E_Hija": 3,
  "Jhon_Perez_Sra_E_Hija": 3,
  "Leidy_Torres": 1,
  "Jhon_Lozano_Sra_E_Hija": 3,
  "Fernando_Peñaloza_Y_Sra": 2,
  "Esteban_Parra_Y_Sra": 2,
  "Edward_Lopez_Y_Sra": 2,
  "Jorge_Barrios_Y_Sra": 2,
  "Erica_Gonzalez": 1,
  "Francisco_Delgadillo": 1,
  "Juan_Francisco_Ospina_Y_Sra": 2,
  "Wilson_Chamorro_Y_Sra": 2,
  "Uber_Giraldo_Y_Sra": 2,
  "Paula_Ramirez": 1,
  "Cristian_Ardila_Y_Sra": 2,
  "Armando_Marin_Y_Sra": 2,
  "Alejandro_Londoño": 1,
  "Andre_Martinez_Y_Sra": 2,
  "Martin_Alfonso_Botero_Y_Sra": 2,
  "Leidy_Reyes": 1,
  "Julio_Cesar_Pardo_Y_Sra": 2,
  "Jackeline_Quintero": 1,
  "Didier_Cangrejo_Y_Sra": 2,
  "Eva_Vargas": 1,
  "Jhon_Jairo_Arcinegas_Sra_E_Hijo": 3,
  "Luis_Ernesto_Gomez_Y_Sra": 2,
  "Felipe_Duarte_Y_Sra": 2,
  "Rafael_Castellanos_Y_Sra": 2,
  "Johana_Garzon": 1,
  "Luis_Fernando_Gonzalez_Y_Sra": 2,
  "Luis_Jaime_Gutierrez_Y_Sra": 2,
  "Efrain_Sanchez_Y_Sra": 2,
  "Laura_Castro": 1,
  "Felipe_Higuita_Y_Sra": 2,
  "Alejandra_Barreto": 1,
  "Francis_Y_Miriam": 2,
  "Andrea_Peñaloza": 1,
  "Rosmery_Devia": 1,
  "Eliana_Barreto": 1,
  "Victor_Bonilla_Y_Sra": 2,
  "Henry_Garcia_Y_Sra": 2,
  "Jorge_Rivera_Y_Sra": 2,
  "Tia_Paula": 1,
  "Abue_Gloria": 1,
  "Abue_Graciela": 1,
  "Tio_Mauricio": 1,
  "Johan_Lopez_Nohora_Y_Johitan": 3,
  "Rodolfo_Vanegas_Sra_E_Hijo": 3,
  "Diana_Huertas_E_Hijos": 3,
  "Daniel_Huertas_Sra_E_Hijo": 3,
  "Ever_Huertas_Sra_E_Hijo": 3,
  "Martha_Pinzon": 1,
  "Pilar_Pinzon_E_Hija": 2,
  "Jair_Arias_Sra_E_Hijo": 4,
  "Orlando_Huertas_Y_Sra": 2,
  "Edwin_Huertas_Y_Sra": 2,
  "Fabian_Salazar_Sra_E_Hijos": 4,
  "Sebastian_Balanta_Y_Sra": 2,
  "Oscar_Vasquez_Sra_E_Hija": 3,
  "Carlos_Hernandez_Y_Sra": 2,
  "Haner_Y_Vanessa": 2,
  "Fernando_Martha_Y_Helena": 3,
  "Enrique_Fonseca_Sra_E_Hija": 3,
  "Deisy_Rodriguez_E_Hijos": 3,
  "Tomas_Y_Johan": 2,
  "Carlos_Uribe_Y_Sra": 2,
  "Juan_Carlos_Ayala_Y_Sra": 2,
  "Mauricio_Conde_Y_Sra": 2,
  "Agustin_Sanabria_Y_Sra": 2,
  "Harol_Liberato_Y_Sra": 2,
  "Jose_Pedraza_Y_Sra": 2,
  "Johana_Molina": 1
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

    if (cupos > 0) {
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
  const nombre = getUrlParam('invitacion');
  const seleccion = document.querySelector('input[name="cupos"]:checked');

  if (!seleccion) {
    alert('Por favor, selecciona cuántas personas asistirán.');
    return;
  }

  const payload = {
    nombre: nombre,
    invitados: parseInt(seleccion.value)
  };

  const confirmButton = document.querySelector('.confirm-button');
  const buttonText = document.querySelector('.button-text');
  const loader = document.querySelector('.loader');

  // Cambiar el texto y mostrar el spinner
  buttonText.textContent = 'Confirmando...';
  loader.style.display = 'inline-block';
  confirmButton.disabled = true;

  try {
    const response = await fetch('https://invitaciones-jboy.onrender.com/invitado', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      alert('¡Asistencia confirmada!');
      closeModal();
    } else {
      alert('Hubo un error al confirmar la asistencia.');
    }
  } catch (error) {
    console.error('Error en la API:', error);
    alert('No se pudo conectar con el servidor.');
  } finally {
    // Restaurar el estado del botón
    buttonText.textContent = 'Confirmar';
    loader.style.display = 'none';
    confirmButton.disabled = false;
  }
}

// Asignar el evento al botón de confirmación
document.querySelector('.confirm-button').addEventListener('click', confirmarAsistencia);
