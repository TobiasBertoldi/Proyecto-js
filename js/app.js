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
/* class notaAlumno{

   constructor(nota,AoD){
      this.nota = nota;
      this.AoD = AoD
   }
}

let notas = [];
let AoD;
let nota;

const btn1 = document.querySelector(".boton1");

btn1.addEventListener("click", () =>{

   let nota1 = Number(document.querySelector(".nota1").value);
   let nota2 = Number(document.querySelector(".nota2").value);
   let nota3 = Number(document.querySelector(".nota3").value);
   let nota4 = Number(document.querySelector(".nota4").value);

   if (nota1 == "" || nota2 == "" || nota3 == "") {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Campo Obligatorio',
        confirmButtonText: 'Confirmar'
      });
   }else{
      Swal.fire({
        icon: 'success',
        title: 'Promediaste las notas',
        confirmButtonText: 'Confirmar'
      });
   }
    
   nota1 >= 1 && nota1 <= 10  && nota1 < 7 && notas.push(new notaAlumno(nota1, " Desaprobado"))
   
   nota1 >= 1 && nota1 <= 10  && nota1 >= 7 && notas.push(new notaAlumno(nota1, " Aprobado"))
   
   nota2 >= 1 && nota2 <= 10  && nota2 < 7 && notas.push(new notaAlumno(nota2, " Desaprobado"))
   
   nota2 >= 1 && nota2 <= 10  && nota2 >= 7 && notas.push(new notaAlumno(nota2, " Aprobado"))
   
   nota3 >= 1 && nota3 <= 10  && nota3 < 7 && notas.push(new notaAlumno(nota3, " Desaprobado"))
   
   nota3 >= 1 && nota3 <= 10  && nota3 >= 7 && notas.push(new notaAlumno(nota3, " Aprobado"))

   nota4 >= 1 && nota4 <= 10  && nota4 < 7 && notas.push(new notaAlumno(nota4, " Desaprobado"))
   
   nota4 >= 1 && nota4 <= 10  && nota4 >= 7 && notas.push(new notaAlumno(nota4, " Aprobado"))
     
   let prom1 = (nota1 + nota2 + nota3) / 3;
   document.querySelector(".promedio").innerHTML = prom1;
   
   sessionStorage.setItem("nota1", JSON.stringify(nota1));
   sessionStorage.setItem("nota2", JSON.stringify(nota2));
   sessionStorage.setItem("nota3", JSON.stringify(nota3));
   sessionStorage.setItem("nota4", JSON.stringify(nota4));
   
   console.log(notas);
});



const btn2 = document.querySelector(".boton2");

btn2.addEventListener("click", () =>{
   
   let tr1 = document.querySelectorAll(".hover")[3]; 
   let nuevaNota1 = "<td>Nota 4: </td><td><input class=nota4 type=number name=nota placeholder=0 ><td/>"
   tr1.innerHTML = nuevaNota1;
  
});

/*const btn3 = document.querySelector(".boton2");

btn3.addEventListener("click", () =>{
   
   let tr = document.querySelectorAll(".hover")[4]; 
   let nuevaNota = "<td>Nota 5: </td><td><input class=nota5 type=number name=nota placeholder=0 ><td/>"
   tr.innerHTML = nuevaNota;
  
});*/

/*Swal.fire({
   icon: 'error',
   title: 'Oops...',
   text: 'Something went wrong!',
   footer: '<a href="">Why do I have this issue?</a>'
})*/