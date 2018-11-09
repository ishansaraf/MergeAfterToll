import { Car } from "../car-impl";
import { Vehicle } from "../vehicle";
import { Strategy } from "../strategy";

export class BasicStrategy extends Strategy {
  update() {
    const currX = this.car.getX();
    const currY = this.car.getY();
    const targetX = this.car.getTargetX();
    const targetY = this.car.getTargetY();

    // Update car's x value incrementally in relation to the target
    if (targetX - currX > 0) {
      this.car.x = currX + 1;
    } else if (targetX - currX < 0) {
      this.car.x = currX - 1;
    }

    if (targetY - currY > 0) {
      // TODO: Car already past merging point, unrender
      this.car.ref.remove();
    } else {
      this.car.y = currY - 1;
    }
  }
}
