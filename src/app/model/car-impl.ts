import { Vehicle } from "./vehicle";
import { World } from "./world";

export class Car implements Vehicle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  ref;

  constructor(
    x: number,
    y: number,
    size: number,
    targetX: number,
    targetY: number,
    ref
  ) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.ref = ref;
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
}
