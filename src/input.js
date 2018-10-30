export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", e => {
      console.log(e.key);
      switch (e.key) {
        default:
          console.log("please use arrow keys for now.. thanks");
          break;
        case "ArrowLeft":
          paddle.moveLeft();
          break;
        case "ArrowRight":
          paddle.moveRight();
          break;
        case "Escape":
          game.togglePause();
      }
    });
    document.addEventListener("keyup", e => {
      switch (e.key) {
        default:
          break;
        case "ArrowLeft":
          if (paddle.speed < 0) paddle.stop();
          break;
        case "ArrowRight":
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });

    const leftBtn = document.getElementById("leftBtn");
    leftBtn.addEventListener("click", () => {
      alert("move left");
    });
  }
}
