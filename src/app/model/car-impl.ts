import { Vehicle } from "./vehicle";
import { Strategy } from "./strategy";

export class Car implements Vehicle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  ref;
  strategy: Strategy;

  constructor(
    x: number,
    y: number,
    targetX: number,
    targetY: number,
    size: number,
    ref,
    strategy: Strategy,
  ) {
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.size = size;
    this.ref = ref;
    this.strategy = strategy;
    this.strategy.initialize(this);
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getTargetX(): number {
    return this.targetX;
  }

  getTargetY(): number {
    return this.targetY;
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
