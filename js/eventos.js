var inicioApp = function()
{

	var Curriculum = function()
	{
		$("#cajaCurriculum").show("slow");
		$("#cajaPW").hide("slow");
		$("#cajaMagic").hide("slow");
		$("#cajaExamenes").hide("slow");
		$("#cajaProyectos").hide("slow");
	}
	var Magic = function()
	{
		$("#cajaCurriculum").hide("slow");
		$("#cajaPW").hide("slow");
		$("#cajaMagic").show("slow");
		$("#cajaExamenes").hide("slow");
		$("#cajaProyectos").hide("slow");
	}
	var PW = function()
	{
		$("#cajaCurriculum").hide("slow");
		$("#cajaPW").show("slow");
		$("#cajaMagic").hide("slow");
	}
	var Practicas = function()
	{
		$("#cajaProyectos").hide("slow");
		$("#cajaExamenes").show("slow");
	}
	var Examenes = function()
	{
		$("#cajaProyectos").show("slow");
		$("#cajaExamenes").hide("slow");
	}
	var Inicio = function()
	{
		$("#cajaCurriculum").hide("slow");
		$("#cajaPW").hide("slow");
		$("#cajaMagic").hide("slow");
		$("#cajaProyectos").hide("slow");
		$("#cajaExamenes").hide("slow");
	}


$("#btnCurriculum").on("click",Curriculum);
$("#btnMagic").on("click",Magic);
$("#btnPW").on("click",PW);
$("#btnPracticas").on("click",Practicas);
$("#btnExamenes").on("click",Examenes);
$("#btnInicio").on("click",Inicio);
var id = $("#menuPrincipal").val();
	if(id=="btnCurriculum")
		Curriculum();	
	else if(id=="btnMagic")
		Magic();
	else if (id=="btnPW")
		PW();
	else if (id=="btnInicio")
		Inicio();


var ip = $("#menuPW").val();
	if(ip=="btnExamenes")
		Examenes();	
	else if(ip=="btnPracticas")
		Practicas();	

}
$(document).on("ready",inicioApp);