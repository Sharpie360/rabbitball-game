import { detectCollision } from "./collisionDetection";

export default class Rabbit {
  constructor(game) {
    this.image = document.getElementById("img-rabbit");

    this.game = game;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.position = { x: 100, y: this.gameHeight - 100 };
    this.speed = { x: 7, y: -7 };
    this.size = 40;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime, game) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // left and right wall collision
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    // top and bottom wall collision
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // collision with paddle
    let bottomOfBall = this.position.y + this.size;
    let topOfPaddle = this.game.paddle.position.y;
    let paddleLeftSide = this.game.paddle.position.x;
    let paddleRightSide = this.game.paddle.position.x + this.game.paddle.width;

    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x >= paddleLeftSide &&
      this.position.x + this.size <= paddleRightSide
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }

    // if (bottomOfBall >= this.gameHeight) {
    //   this.game.gameOver();
    // }
  }
}
