import Paddle from "./paddle";
import InputHandler from "./input";
import Rabbit from "./rabbit";

const canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.fillRect(20, 20, 50, 50);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let rabbit = new Rabbit();

paddle.draw(ctx);

new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  paddle.update(deltaTime);
  paddle.draw(ctx);
  rabbit.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();