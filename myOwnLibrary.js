function bounceOff(blueBox,redBox,orangeBox,greenBox,ball,edge){

    if(blueBox.x-ball.x<ball.width/2+blueBox.width/2
        && ball.x-blueBox.x<blueBox.width/2+ball.width/2
        && ball.y-blueBox.y<blueBox.height/2+ball.height/2
        && blueBox.y-ball.y<ball.height/2+blueBox.height/2){
            ball.velocityY=-5;
        }
    if(ball.y-redBox.y<redBox.height/2+ball.height/2
        && redBox.y-ball.y<ball.height/2+redBox.height/2){
            ball.velocityY=-5;
        }
    if(ball.y-orangeBox.y<orangeBox.height/2+ball.height/2
        && orangeBox.y-ball.y<ball.height/2+orangeBox.height/2){
            ball.velocityY=-5;
        }
    if(ball.y-greenBox.y<greenBox.height/2+ball.height/2
        && greenBox.y-ball.y<ball.height/2+greenBox.height/2){
            ball.velocityY=-5;
        }
    if(ball.y-edge.y<edge.height/2+ball.height/2
        && edge.y-ball.y<ball.height/2+edge.height/2){
            ball.velocityY=-5;
        }
        if(ball.x-edge.x<edge.width/2+ball.width/2
            && edge.x-ball.x<ball.width/2+edge.width/2){
                ball.velocityX=4;
            }
}