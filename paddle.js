function Paddle(){
    //Set the initial conditions of the 2 paddles
    this.paddleWidth = 12;
    this.paddleHeight = 100;
    this.accY1 = 0;
    this.accY2 = 0;
    this.speed = 10;
    this.maxSpeed = 10;
    //This will be the paddles' initial position when the game starts. The firs argument is
    //The x position and the second is the y.
    this.posY1 =  (300 - this.paddleHeight/2); 
    this.posY2 = (300 - this.paddleHeight/2);
    
    this.showPaddle = function(){
        //This function shows the paddles on the screen
        rect(this.paddleWidth*2, this.posY1, this.paddleWidth, this.paddleHeight);
        rect(width - this.paddleWidth * 3, this.posY2, this.paddleWidth, this.paddleHeight);
        fill(255);
    }

    //Everytime a key (W, S, UP_ARROW or DOWN_ARROW) is pressed, the paddle will move up or down
    //Those functions will handle that
    this.moveUp1 = function(){
        this.accY1 -= this.speed;
    }
    this.moveUp2 = function(){
        this.accY2 -= this.speed;
    }
    this.moveDown1 = function(){
        this.accY1 += this.speed;
    }
    this.moveDown2 = function(){
        this.accY2 += this.speed;
    }

    //This function stops the paddle when a key (W, S, UP_ARROW or DOWN_ARROW) is released
    this.stp1 = function(){
        this.accY1 = 0;
    }
    this.stp2 = function(){
        this.accY2 = 0;
    }

    this.update = function(){
        //It updates the new paddles's position, according to the new X and Y position
        this.accY2 = constrain(this.accY2, -this.maxSpeed, this.maxSpeed);
        this.posY1 += this.accY1;
        this.posY1 = constrain(this.posY1, 0, height - this.paddleHeight);
        this.posY2 += this.accY2;
        this.posY2 = constrain(this.posY2, 0, height - this.paddleHeight);
    }
}