import { Strategy } from "./strategy";

export abstract class Vehicle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  ref;
  strategy: Strategy;
  abstract render(): void;
  abstract update(nearbyCars: Vehicle[]): void;
}
