export function detectCollision(rabbit, gameObject) {
  let topOfRabbit = this.position.y;
  let bottomOfRabbit = this.position.y + this.size;

  let topOfPaddle = this.game.paddle.position.y;
  let paddleLeftSide = this.game.paddle.position.x;
  let paddleRightSide = this.game.paddle.position.x + this.game.paddle.width;

  if (
    bottomOfRabbit >= topOfPaddle &&
    this.position.x >= paddleLeftSide &&
    this.position.x + this.size <= paddleRightSide
  ) {
    this.speed.y = -this.speed.y;
    this.position.y = this.game.paddle.position.y - this.size;
  }
}
