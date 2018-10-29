//Create an object type paddle
const paddlePos = new Paddle();
//Create the variables wchich contains the sound effects
const song1 = new Audio('sound_effects/song1.mp3');
const song2 = new Audio('sound_effects/song2.mp3');
const song3 = new Audio('sound_effects/song3.mp3');

function Ball(){
    //This constructor handles all the features of the ball
    this.ballRadius = 20; //Set the balls's radius
    //Set the initial position of the ball
    this.ballXPos = 400;
    this.ballYPos = 300;
    const speed = randomBallPos(); //Set the x and y speed of the ball
    //Set the x and y acceleration of the ball
    this.accX = speed[0]; 
    this.accY = speed[1];
    this.score = {
        Player_1: 0,
        Player_2: 0
    }
    
    this.drawBall = function(paddle1Pos, paddle2Pos){
        //Increase updates the ball's position
        this.ballXPos += this.accX;
        this.ballYPos += this.accY;
            
        
        if(this.ballXPos  <= 770 && this.ballXPos >= 750 && this.ballYPos  >= paddle2Pos && this.ballYPos <= (paddle2Pos + paddlePos.paddleHeight)){
            //It checks if the ball hits the right paddle. If so, the speed is increased
            //and the direction is changed.
            this.accX += speed[0];
            this.accX = this.accX * -1;
            song1.play();

        }else if(this.ballXPos >= 20 && this.ballXPos <= 40 && this.ballYPos >= paddle1Pos && this.ballYPos <= (paddle1Pos + paddlePos.paddleHeight)){
            //It checks if the ball hits the left paddle. If so, the speed is increased
            //and the direction is changed.
            this.accX = this.accX * -1;
            this.accX += speed[0];
            song1.play();
        }else if(this.ballYPos > height){
            //It makes the ball bounce If the ball's position is grater than height
            this.accY += speed[1];
            this.accY = this.accY * -1;
            song2.play();
            
        }else if(this.ballYPos < 0){
            //It makes the ball bounce If the ball's position is smaller than 0
            this.accY = this.accY * -1;
            this.accY += speed[1];
            song2.play();
            
        }else if(this.ballXPos < 0){
            //If the left paddle can't hit the ball it means the player 2 scored
            this.ResetBallPos();
            this.score.Player_2++;
            song3.play();
        }else if(this.ballXPos > width){
            //If the right paddle can't hit the ball it means the player 2 scored
            this.ResetBallPos();
            this.score.Player_1++;
            song3.play();
        }
        //Draw the ball
        ellipse(this.ballXPos, this.ballYPos, this.ballRadius, this.ballRadius);
        
    }

    this.ResetBallPos = function(){
        //This function resets the ball's position when a player scores
        const speed = randomBallPos();
        this.accX = speed[0];
        this.accY = speed[1];
        this.ballXPos = 400;
        this.ballYPos = 300;
        ellipse(this.ballXPos + 5, this.ballYPos, this.ballRadius, this.ballRadius);
    }

    function randomBallPos(){
        //This function returns an array with 2 numbers. These numbers are both the x and y speed of the ball
        let spd;
        let spdArr = [];
        for(let i = 0; i < 2; i++){
            spd = ((Math.random() + 1.1) * 0.5);
            spd = truncateDecimals(spd, 1);
            spdArr.push(spd);
        }
        spdArr[0] = spdArr[1] * 1.5;
        return spdArr;
    }

    function truncateDecimals (num, digits) {
        //This function truncates the decimal places
        var numS = num.toString(),
            decPos = numS.indexOf('.'),
            substrLength = decPos == -1 ? numS.length : 1 + decPos + digits,
            trimmedResult = numS.substr(0, substrLength),
            finalResult = isNaN(trimmedResult) ? 0 : trimmedResult;
    
        return parseFloat(finalResult);
    }

}