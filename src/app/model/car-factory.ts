import { Vehicle } from "./vehicle";
import { Car } from "./car-impl";
import { BasicStrategy } from "./strategies/basicStrategy";

export class CarFactory {
  SIZE_MULTIPLIER: number = 15;
  private ref;

  constructor(ref) {
    this.ref = ref;
  }

  public createCar(
    startX: number,
    startY: number,
    targetX: number,
    targetY: number,
    size: number,
    strategy?
  ): Car {
    if (!strategy) {
      strategy = BasicStrategy;
    }
    size = this.SIZE_MULTIPLIER * size;
    const carRef = this.ref
      .append("circle")
      .attr("fill", "blue")
      .attr("cx", startX)
      .attr("cy", startY)
      .attr("r", size);
    return new Car(startX, startY, targetX, targetY, size, carRef, new strategy());
  }
}
