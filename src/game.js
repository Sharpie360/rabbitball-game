import InputHandler from "./input";
import Paddle from "./paddle";
import Rabbit from "./rabbit";
import Brick from "./brick";
import { buildLevel, level3 } from "./levels";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.gamestate = GAMESTATE.RUNNING;
    this.paddle = new Paddle(this);
    this.rabbit = new Rabbit(this);

    let bricks = buildLevel(this, level3);

    this.gameObjects = [this.rabbit, this.paddle, ...bricks];

    new InputHandler(this.paddle, this);
  }

  update(deltaTime) {
    if (this.gamestate === GAMESTATE.PAUSED) return;
    this.gameObjects.forEach(object => object.update(deltaTime));

    this.gameObjects = this.gameObjects.filter(
      object => !object.markedForDeletion
    );
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));
  }

  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }
}
