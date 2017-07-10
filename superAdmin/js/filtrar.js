function capturar(){
    console.log("fddf");
    $.getJSON("./data/provincias.json", function(data) {
    	alert("gjndfnfd");
    	let opcion = $('<option></option>');
        opcion.attr("value", "")
        opcion.text("Provincia");
        $("#province").append(opcion)
        $.each(data["rows"], function(key,val) {
            let nombre = val["nombre"];
            let opcion = $('<option></option>');
            opcion.attr("value", val["id_provincia"])
            opcion.text(nombre);
             $("#province").append(opcion);
        });
    });
}

function cargarCiudades(){
	$('#province').click(function(){
        var valor = $("#province").val();
        $("#city").empty();
        $.getJSON("./data/ciudades.json", function(data) {
        	if(valor != ""){
	        	let opcion = $('<option></option>');
		        opcion.attr("value", "")
		        opcion.text("Ciudad");
		        $("#city").append(opcion);
		        $.each(data["rows"], function(key,val) {
		        	if (valor == val["id_provincia"]){
			            let nombre = val["nombre"];
			            let opcion = $('<option></option>');
			            opcion.attr("value", val["id_ciudad"])
			            opcion.attr("id","ciudad");
			            opcion.text(nombre);
			            $("#city").append(opcion);
		         	}
		        });
		    }
	    });
    });
}


$(window).load(function() {
 	capturar();
 	cargarCiudades();

});