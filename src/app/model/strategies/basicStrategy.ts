import { Car } from "../car-impl";
import { Vehicle } from "../vehicle";
import { Strategy } from "../strategy";

export class BasicStrategy extends Strategy {
  update(nearbyCars: Vehicle[]) {
    const currX = this.car.x;
    const currY = this.car.y;
    const targetX = this.car.targetX;
    const targetY = this.car.targetY;

    // Update car's x value incrementally in relation to the target
    if (targetX - currX > 0) {
      this.car.x = currX + 1;
    } else if (targetX - currX < 0) {
      this.car.x = currX - 1;
    }
    this.car.y = currY - 1;
  }
}
