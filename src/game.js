import InputHandler from "./input";
import Paddle from "./paddle";
import Rabbit from "./rabbit";
import Brick from "./brick";
import { buildLevel, level1 } from "./levels";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.rabbit = new Rabbit(this);

    let bricks = buildLevel(this, level1);

    this.gameObjects = [this.rabbit, this.paddle, ...bricks];

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => object.update(deltaTime));
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
