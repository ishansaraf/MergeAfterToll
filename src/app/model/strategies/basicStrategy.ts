import { Car } from "car-impl";
import { World } from "../world";
import { Vehicle } from "../vehicle";

export class GoToLane {
  private currX = this.car.getX();
  private currY = this.car.getY();
  private targetX = this.car.getTargetX();
  private targetY = this.car.getTargetY();

  updatePosition() {
    // Update car's x value incrementally in relation to the target
    if (this.targetX - this.currX > 0) {
      this.car.x = this.currX + 1;
    } else if (this.targetX - this.currX < 0) {
      this.car.x = this.currX - 1;
    }

    if (this.targetY - this.currY > 0) {
      // Car already past merging point, unrender
      this.car.ref.remove();
    } else {
      this.car.y = this.currY - 1;
    }
  }
}
