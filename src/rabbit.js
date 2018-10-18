export default class Rabbit {
  constructor() {
    this.image = document.getElementById("img-rabbit");
  }

  draw(ctx) {
    ctx.drawImage(this.image, 50, 50, 40, 40);
  }

  update() {}
}
