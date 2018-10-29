//Create new objects type Paddle and Ball respectively
const paddle = new Paddle(),
      ball   = new Ball();
//Set the variable gameState to false. This variable will be used to control if the game
//is paused or not
let gameState = false;

//Setup al the environment, before the game starts
function setup(){
    createCanvas(800, 600);
    textSize(50);
    textAlign(CENTER, CENTER);
    
}

//This function is run repeatedly. It checks the game state as well as the game functionality
function draw(){
    background(0); 
    fill(255);
    
    //If the game state is true it means the game is not paused
    if(!gameState){
        drawSquares(); //This function draw the squares the split the canvas into 2
        paddle.showPaddle(); //Show the paddles
        paddle.update(); //Update the paddles position
        ball.drawBall(paddle.posY1, paddle.posY2); //Update the ball position 
        updateScore(ball.score.Player_1, ball.score.Player_2); //Update the socre
        checkWinner(); //Check if there's a winner
    }else{
        //Otherwise the game is paused
        text("PAUSE", (width/2), (height/2));
    }
        
}

function drawSquares(){
    //Set the Width and Height of the squares
    const squareWidth = 10,
          squareHeight = 10;
          
    for(y = 0; y < height; y +=20){
        //There is a 20 pixels space between each square
        rect(width/2, y, squareWidth , squareHeight);
    }
    
}

function keyPressed(){
    //This function detects when a key is pressed 
    if(key === 'w'){
        //It moves upwards the left paddle
        paddle.moveUp1();
                         
     }else if(key === 's'){
         //It moves downwards the left paddle
        paddle.moveDown1();
     }else if(keyCode === UP_ARROW){
        //It moves upwards the right paddle
        paddle.moveUp2();
         
     }else if(keyCode === DOWN_ARROW){
        //It moves downwards the right paddle
        paddle.moveDown2();
        
    }else if(key === 'p'){
        //It pauses the game
        gameState =  !gameState;
    }

}

function keyReleased(){
    //This function detects when a key is released
    if(key === 'w' || key === 's'){
        //It stops the left paddle
        paddle.stp1();
    }
    else if(keyCode === UP_ARROW || keyCode === DOWN_ARROW){
        //it stops the right paddle 
        paddle.stp2();
    }
}

function updateScore(score1, score2){
    //It updates the score
    text(score1, (width/2 - width/4), 25);
    text(score2, (width/2 + width/4), 25);
}

function checkWinner(){
    for(let property in ball.score){
        //It checks if there's a winner
        if(ball.score[property] === 5){
            //If so, a message will be displayed to the user and then the game restart
            alert(`${property} won the match! Congratulations!!!`);
            ball.score.Player_1 = 0;
            ball.score.Player_2 = 0;
            document.location.reload();
        }
    }
}
     