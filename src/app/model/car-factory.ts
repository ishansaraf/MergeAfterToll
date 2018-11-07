import { Vehicle } from "./vehicle";
import { Car } from "./car";

export class CarFactory {
  SIZE_MULTIPLIER: number = 30;
  laneTargetXs: number[] = [];
  laneTargetYs: number[] = [];
  cars: Vehicle[] = [];

  public createCar(initialX: number, initialY: number, size: number): Car {
    const carRef = this.worldRef
      .append("circle")
      .attr("cx", initialX)
      .attr("cy", initialY)
      .attr("r", size)
      .attr("fill", "blue");
    targetIndex = getClosestTarget(initialX, initialY);
    return new Car(
      initialX,
      initialY,
      size * SIZE_MULTIPLIER,
      laneTargetXs[targetIndex],
      laneTargetYs[targetIndex],
      carRef
    );
  }

  private distance(x1: number, x2: number, y1: number, y2: number): number {
    x = Math.pow(x1 - x2, 2);
    y = Math.pow(y1 - y2, 2);
    return Math.sqrt(x + y);
  }

  private getClosestTarget(currX, currY) {
    minDistance: number = distance(
      currX,
      laneTargetXs[0],
      currY,
      laneTargetYs[0]
    );
    selectedTargetIndex: number = 0;

    for (i = 1; i < laneTargetXs.length; i++) {
      newDistance = distance(currX, laneTargetXs[i], currY, laneTargetYs[i]);
      if (newDistance < minDistance) {
        minDistance = newDistance;
        selectedTargetIndex = i;
      }
    }

    return i;
  }
}
