let gameBoard 
let context;

const rows = 21;
const columns = 21;

const boxSize = 25;

let foodX;
let foodY;

let snakeX = 7 * boxSize;
let snakeY = 7 * boxSize;

let speedX = 0;
let speedY = 0;

let snakeBody = []

let gameOver = false;

let currentScore = 0;
let highScore = localStorage.getItem("highScore") ? localStorage.getItem("highScore") : 0

let intervalref;

window.onload = function (){
    gameBoard = document.getElementById("game-board");
     context = gameBoard.getContext("2d");
     gameBoard.height = rows * boxSize;
    gameBoard.width = columns * boxSize;
    intervalref = setInterval(start,100)
    getRandomFoodCoords()
    document.addEventListener("keyup", changeDirection);
}

function updateScore() {
    document.getElementById("current-score").innerHTML = `Score: ${currentScore}`;
  
    if (currentScore > highScore) {
      highScore = currentScore;
      localStorage.setItem("highScore", highScore); // new high score saved
    }
  
    document.getElementById("high-score").innerHTML = `High Score: ${highScore}`;
  }

function start()
{
    updateScore()
    if (gameOver) {
        clearInterval(intervalref);
        return;
      }

    //canvas
    context.fillStyle = "black";
    context.fillRect(0, 0, gameBoard.width, gameBoard.height);

    //food
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, boxSize, boxSize);

   


    //snake eating food
    if(snakeX === foodX && snakeY === foodY)
    {
        
        snakeBody.push([foodX,foodY])
        getRandomFoodCoords()
        ++currentScore
        updateScore()
    }

    for(let i = snakeBody.length -1; i>0 ; i--)
    {
        snakeBody[i] = snakeBody[i-1]
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    //draw snake's body whenever food is eaten
    snakeBody.forEach(indexArray => {
        context.fillStyle = "yellow";
        context.fillRect(indexArray[0],indexArray[1],boxSize,boxSize)
    });

    
    

     //snake head
     context.fillStyle = "yellow";
     snakeX += (speedX*boxSize)
     snakeY += (speedY*boxSize)
     context.fillRect(snakeX, snakeY, boxSize, boxSize);

    //touching border or going past
    if (
        snakeX < 0 ||
        snakeY < 0 ||
        snakeX > columns * boxSize ||
        snakeY > rows * boxSize
      )
       {
        gameOver = true;
        alert("Game Over");
      }

      //self hit
      for(let i =0 ; i<snakeBody.length;i++)
      {
        if(snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1])
        {
            gameOver = true
            alert("Game Over");
        }
      }

}

function getRandomFoodCoords()
{
    foodX = Math.floor(Math.random() * columns) * boxSize
    foodY =  Math.floor(Math.random() * rows) * boxSize
}

function changeDirection(event)
{
    if (event.code === "ArrowUp" && speedY != 1) {
        speedX = 0;
        speedY = -1;
      } else if (event.code === "ArrowDown" && speedY != -1) {
        speedX = 0;
        speedY = 1;
      } else if (event.code === "ArrowLeft" && speedX != 1) {
        speedX = -1;
        speedY = 0;
      } else if (event.code === "ArrowRight" && speedX != -1) {
        speedX = 1;
        speedY = 0;
      }

      if(gameOver && event.code === "Enter")
      {
        const restartConfirmed = confirm("Khel khatm!, Do u want to play again!");
        if(restartConfirmed)
        {
            restartGame()
        }
      }
}

function restartGame()
{
    clearInterval(intervalref);
    snakeX = 7 * boxSize;
    snakeY = 7 * boxSize;

    speedX = 0;
    speedY = 0;

    snakeBody = []

    gameOver = false;

    currentScore = 0;
    intervalref = setInterval(start, 100);
}