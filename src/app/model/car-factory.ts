import { Vehicle } from "./vehicle";
import { Car } from "./car-impl";
import { World } from "./world";
import { BasicStrategy } from "./strategies/basicStrategy";

export class CarFactory {
  SIZE_MULTIPLIER: number = 30;
  private world: World;

  constructor(world: World) {
    this.world = world;
  }

  public createCar(
    startX: number,
    startY: number,
    size: number,
    ref,
    strategy?
  ): Car {
    if (!strategy) {
      strategy = BasicStrategy;
    }
    size = this.SIZE_MULTIPLIER * size;
    const carRef = this.world.ref
      .append("circle")
      .attr("fill", "blue")
      .attr("cx", startX)
      .attr("cy", startY)
      .attr("r", size);
    return new Car(startX, startY, size, carRef, new strategy(), this.world);
  }
}
