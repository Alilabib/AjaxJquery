/*global $, console,alert */
$(function () {
	'use strict';
	$('button').click(function(){
		var name = $("#name").val();
		var age  = $("#age").val();
		
		$.ajax({
			url:"includes/helpers/serve.php",
			type:"POST",
			data:{
				name:name,
				age :age
			},
		}).done(function(data){

			$("p").html(data);
			$("#name").val("");


		})
	});
	
});