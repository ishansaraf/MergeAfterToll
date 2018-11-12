import { Vehicle } from "./vehicle";
import { World } from "./world";

export abstract class Strategy {
  protected car: Vehicle;
  protected world: World;

  initialize(car: Vehicle): void {
    this.car = car;
  }

  abstract update(nearbyCars: Vehicle[]): void;
}
