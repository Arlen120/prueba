document.getElementById("formulario").addEventListener("submit",function(e){
    e.preventDefault();
}

const nombre = document.getElementById("nombre").value;
const fecha = document.getElementById("fecha").value;
const descripcion = document.getElementById("descripcion de la tarea").value;
const tipo = document.getElementById("tipo").value; 
const prioridad = document.querySelector("input[name='prioridad']:checked");

 if (!prioridad) {
    alert("seleccionar la prioridad de la tarea")
    return;
 } 

const tarea = document.createElement("div");
   tarea.className = "tarea";
   tarea.innerHTML = `

 


  