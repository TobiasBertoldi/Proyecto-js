class notaAlumno{

   constructor(materia,notaNueva,AoD){
      this.materia = materia;
      this.notaNueva = notaNueva;
      this.AoD = AoD;
   }
}

let AoD;
let promedio = 0;
const mat = document.querySelector(".mat");
const arrMat = [];
let acumuladorMat = 0;
const his = document.querySelector(".his");
const arrHis = [];
let acumuladorHis = 0;
const geo = document.querySelector(".geo");
const arrGeo = [];
let acumuladorGeo = 0;
const lit = document.querySelector(".lit");
const arrLit = [];
let acumuladorLit = 0;
const ciens = document.querySelector(".ciens");
const arrCiens = [];
let acumuladorCiens = 0;
const agregarNota = document.querySelector(".agregarNotas");
const notas = document.getElementById("notas");
const nuevaNota = document.querySelector(".nuevaNota");
const resultado = document.querySelector(".resultado");
const materia = document.querySelector(".nuevaMateria");
const arregloNotas = [];
let acumulador = 0;

agregarNota.addEventListener("click", () => {

   if (materia.value == "matematicas" & nuevaNota.value < 7) {
      
      mat.innerHTML =   ` 
                        <td class="hover notas"> Matematicas </td>
                        <td class="hover notas left desaprobado"> ${nuevaNota.value} </td> 
                        `  
      arrMat.push(new notaAlumno(materia.value, nuevaNota.value, "Desaprobado"));
   }if (materia.value == "geografia" & nuevaNota.value < 7) {
      
      geo.innerHTML =   ` 
                        <td class="hover notas"> Geografia </td>
                        <td class="hover notas left desaprobado"> ${nuevaNota.value} </td> 
                        `  
      arrGeo.push(new notaAlumno(materia.value, nuevaNota.value, "Desaprobado"));
      
   }if (materia.value == "historia" & nuevaNota.value < 7) {
      
      his.innerHTML =   ` 
                        <td class="hover notas"> Historia </td>
                        <td class="hover notas left desaprobado"> ${nuevaNota.value} </td> 
                        `  
      arrHis.push(new notaAlumno(materia.value, nuevaNota.value, "Desaprobado"));
                  
   }if (materia.value == "literatura" & nuevaNota.value < 7) {
      
      lit.innerHTML =   ` 
                        <td class="hover notas"> Literatura </td>
                        <td class="hover notas left desaprobado"> ${nuevaNota.value} </td> 
                        `  
      arrLit.push(new notaAlumno(materia.value, nuevaNota.value, "Desaprobado"));
   }if (materia.value == "ciencias sociales" & nuevaNota.value < 7) {
      
      ciens.innerHTML =   ` 
                        <td class="hover notas"> Ciencias Sociales </td>
                        <td class="hover notas left desaprobado"> ${nuevaNota.value} </td> 
                        `  
      arrCiens.push(new notaAlumno(materia.value, nuevaNota.value, "Desaprobado"));                 
   }
   
   
   if (materia.value == "matematicas" & nuevaNota.value >= 7) {
      
      mat.innerHTML =   ` 
                        <td class="hover2 notas"> Matematicas </td>
                        <td class="hover2 notas left aprobado"> ${nuevaNota.value} </td> 
                        `   
      arrMat.push(new notaAlumno(materia.value, nuevaNota.value, "Aprobado"));
   }if (materia.value == "geografia" & nuevaNota.value >= 7){

      geo.innerHTML =   ` 
                        <td class="hover2 notas"> Geografia </td>
                        <td class="hover2 notas left aprobado"> ${nuevaNota.value} </td> 
                        `   
      arrGeo.push(new notaAlumno(materia.value, nuevaNota.value, "Aprobado"));
   }if (materia.value == "historia" & nuevaNota.value >= 7){

      his.innerHTML =   ` 
                        <td class="hover2 notas"> Historia </td>
                        <td class="hover2 notas left aprobado"> ${nuevaNota.value} </td> 
                        `   
      arrHis.push(new notaAlumno(materia.value, nuevaNota.value, "Aprobado"));
   }if (materia.value == "literatura" & nuevaNota.value >= 7){

      lit.innerHTML =   ` 
                        <td class="hover2 notas"> Literatura </td>
                        <td class="hover2 notas left aprobado"> ${nuevaNota.value} </td> 
                        `   
      arrLit.push(new notaAlumno(materia.value, nuevaNota.value, "Aprobado"));
   }
   if (materia.value == "ciencias sociales" & nuevaNota.value >= 7){

      ciens.innerHTML =   ` 
                        <td class="hover2 notas"> Ciencias Sociales </td>
                        <td class="hover2 notas left aprobado"> ${nuevaNota.value} </td> 
                        `   
      arrCiens.push(new notaAlumno(materia.value, nuevaNota.value, "Aprobado"));
   }
   console.log(arrMat);
   console.log(arrGeo);
   console.log(arrHis);
   console.log(arrLit);
   console.log(arrCiens);

   if (materia.value == "matematicas") {
      acumuladorMat += Number(nuevaNota.value);
   }if (materia.value == "geografia") {
      acumuladorGeo += Number(nuevaNota.value);
   }if (materia.value == "historia") {
      acumuladorHis += Number(nuevaNota.value);
   }if (materia.value == "literatura") {
      acumuladorLit += Number(nuevaNota.value);
   }if (materia.value == "ciencias sociales") {
      acumuladorCiens += Number(nuevaNota.value);
   }
   

   if (materia.value == "matematicas" & acumuladorMat/arrMat.length >= 7) {
      mat.innerHTML += `<td class="hover2 notas left aprobado"> ${acumuladorMat/arrMat.length} </td>
                        <td class="hover2 notas left aprobado"> Aprobado </td>
                        `
   }if (materia.value == "geografia" & acumuladorGeo/arrGeo.length >= 7) {
      geo.innerHTML += `<td class="hover2 notas left aprobado"> ${acumuladorGeo/arrGeo.length} </td>
                        <td class="hover2 notas left aprobado"> Aprobado </td>
                        `
   }if (materia.value == "historia" & acumuladorHis/arrHis.length >= 7) {
      his.innerHTML += `<td class="hover2 notas left aprobado"> ${acumuladorHis/arrHis.length} </td>
                        <td class="hover2 notas left aprobado"> Aprobado </td>
                        `
   }if (materia.value == "literatura" & acumuladorLit/arrLit.length >= 7) {
      lit.innerHTML += `<td class="hover2 notas left aprobado"> ${acumuladorLit/arrLit.length} </td>
                        <td class="hover2 notas left aprobado"> Aprobado </td>
                        `
   }if (materia.value == "ciencias sociales" & acumuladorCiens/arrCiens.length >= 7) {
      ciens.innerHTML += `
                        <td class="hover2 notas left aprobado"> ${acumuladorCiens/arrCiens.length} </td>
                        <td class="hover2 notas left aprobado"> Aprobado </td>
                        `
   }

   if (materia.value == "matematicas" & acumuladorMat/arrMat.length < 7) {
      mat.innerHTML += `
                        <td class="hover notas left desaprobado"> ${acumuladorMat/arrMat.length} </td>
                        <td class="hover notas left desaprobado"> Desaprobado </td>
                        `
   }if (materia.value == "geografia" & acumuladorGeo/arrGeo.length < 7) {
      geo.innerHTML += `
                        <td class="hover notas left desaprobado"> ${acumuladorGeo/arrGeo.length} </td>
                        <td class="hover notas left desaprobado"> Desaprobado </td>
                        `
   }if (materia.value == "historia" & acumuladorHis/arrHis.length < 7) {
      his.innerHTML += `
                        <td class="hover notas left desaprobado"> ${acumuladorHis/arrHis.length} </td>
                        <td class="hover notas left desaprobado"> Desaprobado </td>
                        `
   }if (materia.value == "literatura" & acumuladorLit/arrLit.length < 7) {
      lit.innerHTML += `  
                        <td class="hover notas left desaprobado"> ${acumuladorLit/arrLit.length} </td>
                        <td class="hover notas left desaprobado"> Desaprobado </td>
                        `
   }if (materia.value == "ciencias sociales" & acumuladorCiens/arrCiens.length < 7) {
      ciens.innerHTML += ` 
                        <td class="hover notas left desaprobado"> ${acumuladorCiens/arrCiens.length} </td>
                        <td class="hover notas left desaprobado"> Desaprobado </td>
                        `
   }
})

const hover = document.querySelector(".hover");
const hover2 = document.querySelector(".hover2");
const agregarMat = document.querySelector(".agregarMat");

agregarMat.addEventListener("click", () => {


   console.log(arregloNotas);

   
   if (nuevaNota.value > 10) {
      Swal.fire('Ingresar nota menor o igual a 10')
   } 

   if(materia.value == "" ||  nuevaNota.value == ""){
      
      Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Campo Obligatorio',
                  confirmButtonText: 'Confirmar'
               })

   }
       
   acumulador += Number(nuevaNota.value);

   if (nuevaNota.value < 7) {
      notas2.innerHTML += `
                        <tr class="hover">
                           <td class="notas"> ${materia.value} </td>
                           <td class="notas left desaprobado"> ${nuevaNota.value} </td>
                        </tr>
                         `
      arregloNotas.push(new notaAlumno(materia.value, nuevaNota.value, "Desaprobado"));
   }else{
      notas2.innerHTML += `
                        <tr class="hover2">
                           <td class="notas"> ${materia.value} </td>
                           <td class="notas left aprobado"> ${nuevaNota.value} </td> 
                        </tr>
                         `
      arregloNotas.push(new notaAlumno(materia.value, nuevaNota.value, "Aprobado"));
   }

   if (acumulador/arregloNotas.length < 7) {
     notas3.innerHTML += ` 
                        <tr class="hover">
                           <td class="notas left desaprobado"> ${acumulador/arregloNotas.length} </td>
                           <td class="notas left desaprobado"> Desaprobado </td> 
                        </tr>
                        `
   }else{
      notas3.innerHTML += ` 
                        <tr class="hover2">
                           <td class="notas left aprobado"> ${acumulador/arregloNotas.length} </td>
                           <td class="notas left aprobado"> Aprobado </td> 
                        </tr>
                        `  
   }


})

//comente la api por el hecho de que no tiene nada que ver con mi proyecto, para que se vea mejor visualmente
//pero para que de todas maneras puedan ver como traje los datos de la api y que cumpli con la consigna.

/*function obtenerDatos() {
   
   fetch('https://api.nasa.gov/planetary/apod?api_key=3f1ZgwyCNvNceRdRzmM2mHelf25phGHaVa3O7rIk')
      .then(response => response.json())
      .then(result => mostrarDatos(result))
}

function mostrarDatos({date, explanation, media_type, title, url}){

   const titulo = document.querySelector(".title");
   titulo.innerHTML = title;
   
   const multimedia = document.querySelector(".multimedia");
   multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`
   
   const fecha = document.querySelector(".fecha");                        
   fecha.innerHTML = date;                        
   
   const exp = document.querySelector(".explicacion"); 
   exp.innerHTML = explanation;    
   
  
   
};

obtenerDatos();*/