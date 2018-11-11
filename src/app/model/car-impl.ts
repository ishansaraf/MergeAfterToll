import { Vehicle } from "./vehicle";
import { Strategy } from "./strategy";

export class Car extends Vehicle {
  constructor(
    x: number,
    y: number,
    targetX: number,
    targetY: number,
    size: number,
    ref,
    strategy: Strategy
  ) {
    super();
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.size = size;
    this.ref = ref;
    this.strategy = strategy;
    this.strategy.initialize(this);
  }

  render(): void {
    this.ref.attr("cx", this.x).attr("cy", this.y);
  }

  update(): void {
    this.strategy.update();
  }
}
