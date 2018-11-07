import { Car } from "./car-impl";
import { World } from "./world";

export abstract class Strategy {
  protected car: Car;
  protected world: World;

  initialize(car: Car, world: World): void {
    this.car = car;
    this.world = world;
  }

  abstract update(): void;
}
