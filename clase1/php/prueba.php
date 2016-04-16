<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Intro Fast PHP</title>
</head>
<body>
	<form AcTiOn="" Method="post">
		<fieldset> 
			<legend>Contaco</legend>
			Nombre: <br><input type="text" name="nombre"><br>
			Correo: <br> <input type="text" name="correo"><br>
			Comentario: <br><textarea  name="comentario"></textarea><br>
			<input type="submit">
		</fieldset>
	</form>
	<?php 
	// si se activa el formulario en post
		if ($_POST) {
			//echo "Hola desde PHP......";
			//$n=$_POST['nombre'];
			// extract para leer las variables  como si fueran globales
			extract($_POST);
			//recupero todas las  variables
			$mensaje="$nombre,$correo, $comentario \n ";
			// creao el archivo en modo a es acumular
			// fopen file open
			$archivo=fopen("datos.txt","a");
			// file  write para ecribir mensaje en archivo
			fwrite($archivo,$mensaje);
			//cierro el archivo
			fclose($archivo);
			echo "Datos guardados...";
		}
	 ?>
</body>
</html>