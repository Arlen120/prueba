document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var descripcion = document.getElementById("descripcion").value;
    var tipo = document.getElementById("tipo").value;
    var prioridad = document.querySelector("input[name='prioridad']:checked");
  
    if (!prioridad) {
      alert("Selecciona una prioridad");
      return;
    }
  
    var tarea = document.createElement("div");
    tarea.className = "tarea";
    tarea.innerHTML =
      "<h3>" + nombre + "</h3>" +
      "<p>Fecha: " + fecha + "</p>" +
      "<p>Tipo: " + tipo + "</p>" +
      "<p>Prioridad: " + prioridad.value + "</p>" +
      "<p>" + descripcion + "</p>";
  
    document.getElementById("listaTareas").appendChild(tarea);
    e.target.reset();
  });
  



  