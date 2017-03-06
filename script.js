$(document).ready(function(){

	var count = parseInt($("#num").html());
	var time = parseInt($("#breakNum").html());
	console.log(count);

	$("#reset").hide();

	$("#minus5Clock").click(function(){
		if(count>5){
			count -=5;
			$("#num").html(count);
			console.log(count);
		}
	});

	$("#add5Clock").click(function(){
		count +=5;
		$("#num").html(count);
		console.log(count);
	});

	$("#minus5Break").click(function(){
		if(time>5){
			time -=5;
			$("#breakNum").html(time);
			console.log(time);
		}
	});

	$("#add5Break").click(function(){
			time +=5;
			$("#breakNum").html(time);
			console.log(time);
	});

	$("#start").click(function(){
			var counter = setInterval(timer, 1000);

			function timer(){
				$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide();
				count -=1;
				if(count===0){
					clearInterval(counter);
					$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").show();
				}

				$("#num").html(count);
			}
	});

});