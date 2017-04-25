$(document).ready(function() {
	$("#project1").click(function(){
		$(".project-description").fadeIn();
		$("#project1description").css("z-index", "290");
	});
	$("#project2").click(function(){
		$(".project-description").fadeIn();
		$("#project2description").css("z-index", "290");
	});
	$("#project3").click(function(){
		$(".project-description").fadeIn();
		$("#project3description").css("z-index", "290");
	});
	$("#project4").click(function(){
		$(".project-description").fadeIn();
		$("#project4description").css("z-index", "290");
	});
	$("#project5").click(function(){
		$(".project-description").fadeIn();
		$("#project5description").css("z-index", "290");
	});
	$("#overlay").click(function(){
		$(".project-description").hide();
		$("#project1description").css("z-index", "0");
		$("#project2description").css("z-index", "0");
		$("#project3description").css("z-index", "0");
		$("#project4description").css("z-index", "0");
		$("#project5description").css("z-index", "0");
	});
	$(".exit").click(function(){
		$(".project-description").hide();
		$("#project1description").css("z-index", "0");
		$("#project2description").css("z-index", "0");
		$("#project3description").css("z-index", "0");
		$("#project4description").css("z-index", "0");
		$("#project5description").css("z-index", "0");
	});

});