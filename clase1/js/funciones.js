
// cuando el documento este listo haya cargado los recursos ejecute función anonima
$(document).on("ready",function(){
	//para cerrar la ventana modal
	$(".mensajemodal").on("click","h2",function(){

		$(".fondomodal,.mensajemodal").fadeOut("fast");
	})
	//para presionar el boton	
	$("#miboton").on("click",function(){
		// se invocan los dos selectores separados por coma par amostrarlos
		$(".fondomodal,.mensajemodal").fadeIn("fast");
		// se carga el mensaje
		$(".mensajemodal").html("<h2>Cerrar</h2><hr>");
	});

	//para cada ceda cumplase la siguiente función anonima
	$(".mitabla tr td").each(function(){
		// crear un numero aletorio de 0 a 99
		var num=parseInt(Math.random()*100);
		//cargar en la referencia  o celda el numero 
		$(this).text(num);
	});
	//cuando se presione click  en cada celda cumpla función anonima

	$(".mitabla tr td").on("click",function(){
		//crear variables
		var c1,c2,c3;
		//crear los aleatoreos
		c1=parseInt(Math.random()*256);
		c2=parseInt(Math.random()*256);
		c3=parseInt(Math.random()*256);
		// cargar el css con el color de los numeros aleatorios en la celda
		$(this).css("background","rgb("+c1+","+c2+","+c3+")");
	});
});