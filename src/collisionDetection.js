export function detectCollision(rabbit, gameObject) {
  let topOfRabbit = rabbit.position.y;
  let bottomOfRabbit = rabbit.position.y + rabbit.size;

  let objectTopSide = gameObject.position.y;
  let objectLeftSide = gameObject.position.x;
  let objectRightSide = gameObject.position.x + gameObject.width;
  let objectBottomSide = gameObject.position.y + gameObject.height;
  if (
    bottomOfRabbit >= objectTopSide &&
    topOfRabbit <= objectBottomSide &&
    rabbit.position.x >= objectLeftSide &&
    rabbit.position.x + rabbit.size <= objectRightSide
  ) {
    return true;
  } else {
    return false;
  }
}
