import { Vehicle } from "./vehicle";
import { World } from "./world";
import { Strategy } from "./strategy";

export class Car implements Vehicle {
  x: number;
  y: number;
  size: number;
  ref;
  world: World;
  strategy: Strategy;

  constructor(
    x: number,
    y: number,
    size: number,
    ref,
    strategy: Strategy,
    world: World
  ) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.ref = ref;
    this.world = world;
    this.strategy = strategy;
    this.strategy.initialize(this, this.world);
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getSize(): number {
    return this.size;
  }

  render(): void {
    this.ref.attr("cx", this.x).attr("cy", this.y);
  }

  update(): void {
    this.strategy.update();
  }
}
