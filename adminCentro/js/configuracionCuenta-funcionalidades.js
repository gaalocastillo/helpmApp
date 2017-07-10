
function mostrarMensajeAceptacion(){
	
    $("#btn-submit").submit(function(e) {
        e.preventDefault();
        alert("Form submitted");
    });

	
	
}
$(window).load(function() {

    
    mostrarMensajeAceptacion();

});
