
    function rollDice1(){
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        if(randomNumber1 === 1){
            document.querySelector("img").src = "/images/dice1.png";
        }else if (randomNumber1 === 2){
            document.querySelector("img").src = "/images/dice2.png";
        }else if (randomNumber1 === 3){
            document.querySelector("img").src = "/images/dice3.png";
        }else if (randomNumber1 === 4){
            document.querySelector("img").src = "/images/dice4.png";
        }else if (randomNumber1 === 5){
            document.querySelector("img").src = "/images/dice5.png";
        } else {
            document.querySelector("img").src = "/images/dice6.png";
        }
     return randomNumber1;
    } 
    

    function rollDice2(){
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;  

            if(randomNumber2 === 1){
                document.getElementById("img2").src = "/images/dice1.png";
            }else if (randomNumber2 === 2){
                document.getElementById("img2").src = "/images/dice2.png";
            }else if (randomNumber2 === 3){
                document.getElementById("img2").src = "/images/dice3.png";
            }else if (randomNumber2 === 4){
                document.getElementById("img2").src = "/images/dice4.png";
            }else if (randomNumber2 === 5){
                document.getElementById("img2").src = "/images/dice5.png";
            } else {
                document.getElementById("img2").src = "/images/dice6.png";
            }

        return randomNumber2;
        }

        function declareWinner(){
            var randomNumber1 = rollDice1(); 
            var randomNumber2 = rollDice2();
            
            if (randomNumber1 > randomNumber2){
                document.getElementById("winner").innerHTML = "Player 1 is the Winner!";
            }else if (randomNumber2 > randomNumber1){
                document.getElementById("winner").innerHTML = "Player 2 is the Winner!";
            }else {
                document.getElementById("winner").innerHTML = "It is a draw!";
            }
        }
        

function buttonClick () {
    rollDice1();
    rollDice2();
    declareWinner ();
}

