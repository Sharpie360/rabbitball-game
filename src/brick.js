import { detectCollision } from "./collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img-brick");

    this.game = game;
    this.position = position;

    this.width = 80;
    this.height = 35;

    this.markedForDeletion = false;
  }

  update() {
    if (detectCollision(this.game.rabbit, this)) {
      this.game.rabbit.speed.y = -this.game.rabbit.speed.y;

      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
