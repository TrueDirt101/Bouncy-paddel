var ball, ballimg, paddle, paddleimg;

function preload() {
  paddleimg = loadImage("paddle.png")
  ballimg = loadImage("ball.png")
}

function setup() {
  createCanvas(400, 400);
  //createEdgeSprites();
  /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(10, 200, 20, 20);
  paddle = createSprite(360, 200, 20, 40);

  /* assign the images to the sprites */
  ball.addAnimation("ball", ballimg)
  paddle.addAnimation("running", paddleimg)


  /* give the ball an initial velocity of 9 in the X direction */

  ball.velocityX = 5

}

function draw() {
  background(205, 153, 0);
  /* create Edge Sprites here */

  edge = createEdgeSprites();



  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edge[0])
  ball.bounceOff(edge[2])
  ball.bounceOff(edge[3])

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle, randomVelocity());


  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */


  /* Prevent the paddle from going out of the edges */
  paddle.collide(edge);

  if (keyDown(UP_ARROW)) {
    paddle.y = paddle.y - 10;
  }
  if (keyDown(DOWN_ARROW)) {
    paddle.y = paddle.y + 10;
  }

  drawSprites();

}

function randomVelocity() {
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  if (ball.isTouching(paddle)) {
    ball.velocityY = Math.round(random(1, 10));
  }
}