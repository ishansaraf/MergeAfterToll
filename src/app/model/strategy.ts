import { Car } from "./car-impl";
import { World } from "./world";

export abstract class Strategy {
  protected car: Car;
  protected world: World;

  initialize(car: Car): void {
    this.car = car;
  }

  abstract update(): void;
}
