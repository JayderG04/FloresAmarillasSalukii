let nombre = document.querySelector(".nombre");
let apodo = document.querySelector(".apodo");
let oficio = document.querySelector(".oficio");
let harry = document.querySelector(".harry");
let tecnico = document.querySelector(".tecnico");
let Sumbit = document.getElementById("Sumbit");

const datosValue = () => {
  if (
    nombre.value == "Melani" &&
    apodo.value == "Saluki" &&
    oficio.value == "B" &&
    harry.value == "Lo Amo" &&
    tecnico.value == "Tributaria"
  ) {
    Swal.fire({
      title: "Correcto, eres la autentica Salukiiii!",
      Text: "Esta flor esta hecha para ti!",
      icon: "success",
      html: `<a href="flower.html">Ver Flores</a>`,
    });
  } else {
    Swal.fire({
      title: "Eres una falsa!",
      Text: "Veteme de ahi!",
      icon: "error",
    });
  }
};

Sumbit.addEventListener("click", (e) => {
  alert([nombre.value, apodo.value, oficio.value, harry.value, tecnico.value]);
  datosValue();

  e.preventDefault();
});
