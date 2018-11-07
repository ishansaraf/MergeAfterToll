import { Car } from "../car-impl";
import { Vehicle } from "../vehicle";
import { Strategy } from "../strategy";

export class BasicStrategy extends Strategy {
  update() {
    const currX = this.car.getX();
    const currY = this.car.getY();

    // Retrieve current closest target
    const targetIndex = this.getClosestTargetIndex(currX, currY);
    const targetX = this.world.targetXs[targetIndex];
    const targetY = this.world.targetYs[targetIndex];

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

  private distance(x1: number, x2: number, y1: number, y2: number): number {
    const x = Math.pow(x1 - x2, 2);
    const y = Math.pow(y1 - y2, 2);
    return Math.sqrt(x + y);
  }

  private getClosestTargetIndex(currX, currY): number {
    var minDistance = this.distance(
      currX,
      this.world.targetXs[0],
      currY,
      this.world.targetYs[0]
    );
    var selectedTargetIndex = 0;

    for (var i = 1; i < this.world.targetXs.length; i++) {
      var newDistance = this.distance(
        currX,
        this.world.targetXs[i],
        currY,
        this.world.targetYs[i]
      );

      if (newDistance < minDistance) {
        minDistance = newDistance;
        selectedTargetIndex = i;
      }
    }

    return selectedTargetIndex;
  }
}
