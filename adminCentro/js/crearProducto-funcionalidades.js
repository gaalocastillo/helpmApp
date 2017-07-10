
$(document).ready(function(){
console.log('holaa')
//let's create arrays
var comida = [
    {display: "Enlatados", value: "enlatados" }, 
    {display: "Granos", value: "granos" }, 
    {display: "Comida de animales", value: "comidaAnimales"}];

var ropa = [
    {display: "Ropa de hombre", value: "ropaHombre" }, 
    {display: "Ropa de mujeres", value: "ropaMujer" }, 
    {display: "Ropa de niño", value: "ropaNino"}];

var agua = [
    {display: "Botella personal", value: "botellaPersonal" }, 
    {display: "Galonera", value: "galonera" }];
console.log($('#lista-categorias'));
//If parent option is changed
$("#lista-categorias").change(function() {
        var parent = $(this).val(); //get option value from parent 

        switch(parent){ //using switch compare selected option and populate child
              case 'comida':
                list(comida);
                break;
              case 'ropa':
                list(ropa);
                break;              
              case 'agua':
                list(agua);
                break;  
            default: //default child option is blank
                $("#child_selection").html('');  
                break;
           }
});

//function to populate child select box
function list(array_list)
{
    $("#lista-subategorias").html(""); //reset child options
    $(array_list).each(function (i) { //populate child options 
        $("#lista-subategorias").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
    });
}

});



// function cargarCats() {
//     console.log("holaCargarCats");

//     $.getJSON("./data/diccionarioCategorias.json", function(data) {

//             alert("holaAAAAA");
        
//         let opcion = $('<option></option>');
//         opcion.attr("value", "");
//         opcion.text("Categoria");
//         $("#lista-categorias").append(opcion);
//         console.log(opcion);
//         $.each(data, function(key, val) {
//             let categoria = val["categoria"];
//             console.log("hola");
//             let tagcategoria=$('<option></option>');
//             tagcategoria.attr("value",categoria);
//             tagcategoria.text(categoria);
//             $("#lista-categorias").append(tagcategoria);
//         });

//     });
// }

// function cargarSubcats(){
//     console.log('cargaaaaaaaaaaar SUBS')
//     $.getJSON("diccionarioCategorias.json", function(data) {
//         console.log('olaaaaaaa x222');
//         $.each(data, function(key, val) {
//             $('#lista-categorias').click(function(){

//                 var cat=$("#lista-categorias").val();

//                 let subcategorias= val["subcategorias"];

//                 $("#lista-subcategorias").empty();
//                 var listaCats=$("#lista-categorias").val();
//                 if(listaCats!=""){
//                     let subcat=$('<option></option>');
//                     subcat.attr("value","");
//                     subcat.text("Subcategoria");
//                     $("lista-subcategorias").append(subcat);
//                     for(i=0;i<subcategorias.length;i++){
//                         let nombresubcat=subcategorias[i];
//                         let tagsubcat=$("<option></option");
//                         tagsubcat.attr("value",nombresubcat);
//                         tagsubcat.text(nombresubcat);
//                         tagsubcat.attr("id","subcat"+i);
//                         $("#lista-subcategorias").append(tagsubcat);
//                     }
//                 }
//             });
//         });
//     });
// }







// $(window).load(function() {
//     cargarCats();
//     cargarSubcats();
// //    cargarInfoServicio();

// });