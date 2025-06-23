document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    var nombre = document.getElementById("identificacion").value;
    var fecha = document.getElementById("fecha").value;
    var descripcion = document.getElementById("descripcion de tarea").value;
    var tipo = document.getElementById("tipo").value;
    var prioridad = document.querySelector("input[name='prioridad']:checked");
  
    if (!nombre || !fecha || !descripcion || !tipo || !prioridad) {
      alert("Por favor completa todos los campos.");
      return;
    }
  
    var tarea = document.createElement("div");
    tarea.className = "tarea";
    tarea.innerHTML =
      "<h3>" + nombre + "</h3>" +
      "<p><strong>Fecha:</strong> " + fecha + "</p>" +
      "<p><strong>Tipo:</strong> " + tipo + "</p>" +
      "<p><strong>Prioridad:</strong> " + prioridad.value + "</p>" +
      "<p>" + descripcion + "</p>";
  
    document.getElementById("listadetareas").appendChild(tarea);
    e.target.reset();
  });
  
