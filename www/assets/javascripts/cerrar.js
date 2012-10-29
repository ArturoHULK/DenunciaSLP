	function trapForApplicationExit()
	{
	blackberry.app.event.onExit(handleExit);
	}


	function handleExit()
	{
	var answer = confirm("Cerrar esta aplicacion?");
	if (answer)
	blackberry.app.exit();
	}