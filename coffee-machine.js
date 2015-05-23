window.onload = function(){ 

	var	dayCost, runningCost = 0, totalCups = 0, newCost,
	
	//places in the DOM 
		results = document.getElementById("results"),
		dailyResults = document.getElementById("dailyResults"),
		results = document.getElementById("results"),
		calculate = document.getElementById("calculate"),
		buttons = document.querySelectorAll(".coffeeButton"),

	//coffee buttons
		latteButton = document.getElementById("latte"),
		cappuccinoButton = document.getElementById("cappuccino"),
		americanoButton = document.getElementById("americano"),
		expressoButton = document.getElementById("expresso"),
		flatwhiteButton = document.getElementById("flatwhite"),
		form1 = document.getElementById("form1")


		//making the input button work

		addCoffeeForm = function(){
			if(form1[0].value){
					console.log("this is input value" + form1[0].value);
					inputNumber = parseInt(form1[0].value);
					addCoffee(inputNumber);
					//runningCost += inputNumber;
					//totalCups++;
					//addResults(runningCost, totalCups);
			}
			return false;
		},

	//addition function 
		addCoffee = function(newCost){
			runningCost += newCost;
			totalCups++;
			console.log(newCost + typeof newCost);
			console.log(runningCost + typeof runningCost);
			addResults(runningCost, totalCups);
		},

	//display daily results 
		addResults = function(runningCost, totalCups){
			var dailyCost = (runningCost).toFixed(2);
				resultText = "<p id = 'dayresult'> You drink: " + totalCups + " cups of coffee a day and you spend: &pound" + dailyCost + "</p>";

			dailyResults.innerHTML = resultText;
		},

	//display life results 
		lifeResults = function(runningCost){
			var lifeCost =  (runningCost * 10951).toFixed(2), 
				lifeResultText = "<h3>Cost IN YOUR LIFE</h3><p>In your long caffeine-addled working life you will spend: <strong> &pound" + lifeCost + " </strong> on coffee</p>"
								+ "<img src ='http://media.giphy.com/media/7qV3yswT0K8hi/giphy.gif'/>";

			results.innerHTML = lifeResultText;
		};


	//add event handlers and values to the coffeebuttons
 			latteButton.addEventListener(
 				"click",
 				function(){ 
 					addCoffee(2.5);
 				},
 				false
			);
 			cappuccinoButton.addEventListener(
 				"click",
 				function(){ 
 					addCoffee(2.4);
 				},
 				false
			);
			americanoButton.addEventListener(
 				"click",
 				function(){ 
 					addCoffee(2.1);
 				},
 				false
			);
			expressoButton.addEventListener(
 				"click",
 				function(){ 
 					addCoffee(1.5);
 				},
 				false
			);
			flatwhiteButton.addEventListener(
 				"click",
 				function(){ 
 					addCoffee(2.5);
 				},
 				false
			);
		


 	//add event handler to calculate button
 	calculate.addEventListener(
 		"click",
 		function(){
 			lifeResults(runningCost);
 		},
 		false
 		);
};



