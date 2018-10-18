export default class InputHandler {
  constructor(paddle) {
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
      }
    });
    document.addEventListener("keyup", e => {
      switch (e.key) {
        default:
          console.log("use left right arrow keys");
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
