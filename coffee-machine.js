window.onload = function(){

  var dayCost, runningCost = 0, totalCups = 0, newCost,

  //places in the DOM
    results = document.getElementById("results"),
    dailyResults = document.getElementById("dailyResults"),
    results = document.getElementById("results"),
    calculate = document.getElementById("calculate"),
    buttons = document.querySelectorAll(".coffeeButton"),
    submitbutton = document.getElementById("form-submit"),

  //coffee buttons
    latteButton = document.getElementById("latte"),
    cappuccinoButton = document.getElementById("cappuccino"),
    americanoButton = document.getElementById("americano"),
    expressoButton = document.getElementById("expresso"),
    flatwhiteButton = document.getElementById("flatwhite"),
    input1 = document.getElementById("userNumber"),

    //making the input button work

    addCoffeeForm = function(e){
      inputNumber = parseInt(input1.value);
      if(typeof inputNumber === "number"){
        addCoffee(inputNumber);
        console.log("This form worked" + inputNumber);
      }
      else{
        alert("This must be a number");
      }
    },

  //addition function
    addCoffee = function(newCost){
      runningCost += newCost;
      totalCups++;
      addResults(runningCost, totalCups);
    },

  //display daily results
    addResults = function(runningCost, totalCups){
      var dailyCost = (runningCost).toFixed(2);
        resultText = "<p id = 'dayresult'> You drink: "
        + totalCups + " cups of coffee a day and you spend: &pound"
        + dailyCost + "</p>";

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
        submitbutton.addEventListener(
          "click",
          function(){
            addCoffeeForm();
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



