$(".imagen").click(function(e){
	var enlaceImagen = e.target.src;
	var abrir = '<div class="abrir">'+
					'<div class="recuadro">'+
						'<img src=" '+enlaceImagen+' " width="800" height="468">'+
						'<img class="boton-cerrar" src="img/cerrar.png">'+
					'</div>'+
				'</div>';

	$("body").append(abrir)
	$(".boton-cerrar").click(function(){
		$(".abrir").remove();
	})

		/*CERRAR IMAGENES CON LA TECLA ESC*/
			$(document).keyup(function(e){

    		if(e.which==27) {

        		$(".abrir").hide();

    		}

		});
		/*CERRAR IMAGENES CON LA TECLA ESC*/
})