$(document).ready(function(){

	var count = parseInt($("#num").html());
	var time = parseInt($("#breakNum").html());

	$("#stop").hide();

	$("#minus5Clock").click(function(){
		if(count>5){
			count -=5;
			$("#num").html(count);
		}
	});

	$("#add5Clock").click(function(){
		count +=5;
		$("#num").html(count);
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
	});

	$("#start").click(function(){

		var counter = setInterval(timer, 1000);

			function timer(){
				$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #reset").hide();
				$("#stop").show();
				count -=1;
				if(count===0){
					var startBreak = setInterval(breakTimer, 1000);
					clearInterval(counter);
				}

				$("#num").html(count);

				function breakTimer(){
					time -=1;
					if(time===0){
						clearInterval(startBreak);
						$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #reset").show();
						$("#stop").hide();
					}
				$("#breakNum").html(time);	
				}
			}
			$("#stop").click(function(){
				clearInterval(counter);
				clearInterval(time);
				count = 25;
				time = 5;
				$("#num").html(25);
				$("#breakNum").html(5);
				$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #reset").show();
				$("#stop").hide();
			});
	});

	$("#reset").click(function(){
		count = 25;
		time = 5;
		$("#num").html(25);
		$("#breakNum").html(5);
	});

});