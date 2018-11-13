import { Vehicle } from "./vehicle";
import { Car } from "./car-impl";
import { AvoidantStrategy } from "./strategies/avoidantStrategy";
import { World } from "./world";

export class CarFactory {
  SIZE_MULTIPLIER: number = 15;
  world: World;

  constructor(world: World) {
    this.world = world;
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
      strategy = AvoidantStrategy;
    }
    size = this.SIZE_MULTIPLIER * size;
    const carRef = this.world.ref
      .append("circle")
      .attr("fill", "blue")
      .attr("cx", startX)
      .attr("cy", startY)
      .attr("r", size);
    return new Car(
      startX,
      startY,
      targetX,
      targetY,
      size,
      carRef,
      new strategy()
    );
  }
}
