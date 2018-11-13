import { CarFactory } from "./car-factory";
import { World } from "./world";

export class Tollbooth {
  // world to add cars to
  private world: World;
  // parameters controlling production of cars
  private rate: number;
  private locktime: number;
  // position of tollbooth
  private x: number;
  private y: number;
  // position of target lane
  private targetX: number;
  private targetY: number;
  public ref;
  public active;
  public carFactory: CarFactory;

  constructor(
    world: World,
    rate: number,
    locktime: number,
    x: number,
    y: number,
    targetX: number,
    targetY: number,
    ref
  ) {
    this.world = world;
    this.rate = rate;
    this.locktime = locktime;
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.ref = ref;
    this.active = true;
    this.carFactory = new CarFactory(this.world);
  }

  public beginGeneration: () => void = () => {
    setTimeout(this.doGeneration, this.generateInterval());
  };

  private doGeneration: () => void = () => {
    if (this.active) {
      this.produceCar();
      setTimeout(this.doGeneration, this.generateInterval());
    }
  };

  private produceCar: () => void = () => {
    this.world.addVehicle(
      this.carFactory.createCar(this.x, this.y, this.targetX, this.targetY, 1)
    );
  };

  private generateInterval: () => number = () => {
    return this.locktime - Math.log(1 - Math.random()) * this.rate;
  };
}
