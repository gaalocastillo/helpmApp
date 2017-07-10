

function cargarCats() {

    

    $.getJSON("diccionarioCategorias.json", function(data) {
        
        let opcion = $('<option></option>');
        opcion.attr("value", "");
        opcion.text("Categoria");
        $("#lista-categorias").append(opcion)
        $.each(data, function(key, val) {
            let categoria = val["categoria"];
            let tagcategoria=$('<option></option>');
            tagcategoria.attr("value",categoria);
            tagcategoria.text(categoria);
            $("#lista-categorias").append(tagcategoria);

           
            

        });
    });
}

function cargarSubcats(){
    $.getJSON("diccionarioCategorias.json", function(data) {
        $.each(data, function(key, val) {
            $('#lista-categorias').click(function(){

                var cat=$("#lista-categorias").val();

                let subcategorias= val["subcategorias"];

                $("#lista-subcategorias").empty();
                var listaCats=$("#lista-categorias").val();
                if(listaCats!=""){
                    let subcat=$('<option></option>');
                    subcat.attr("value","");
                    subcat.text("Subcategoria");
                    $("lista-subcategorias").append(subcat);
                    for(i=0;i<subcategorias.length;i++){
                        let nombresubcat=subcategorias[i];
                        let tagsubcat=$("<option></option");
                        tagsubcat.attr("value",nombresubcat);
                        tagsubcat.text(nombresubcat);
                        tagsubcat.attr("id","subcat"+i);
                        $("#lista-subcategorias").append(tagsubcat);
                    }
                }
            
            

            });
        });
    });
}


$(window).load(function() {

    
    cargarCats();
    cargarSubcats();
//    cargarInfoServicio();

});