import { Vehicle } from "./vehicle";
import { Tollbooth } from "./tollbooth";

export class World {
  public ref;
  public vehicles: Vehicle[] = [];
  public tollbooths: Tollbooth[] = [];
  public targetRefs: any[] = [];
  private exitSpeeds: number[] = [];
  private cacheSize = 15;

  constructor(ref) {
    this.ref = ref;
  }

  addVehicle(vehicle: Vehicle): void {
    this.vehicles.push(vehicle);
  }

  addTollBooth(tollbooth: Tollbooth): void {
    this.tollbooths.push(tollbooth);
  }

  addTargetRef(ref): void {
    this.targetRefs.push(ref);
  }

  render(): void {
    this.vehicles.forEach(vehicle => vehicle.render());
  }

  update(): void {
    this.vehicles.forEach(vehicle =>
      vehicle.update(this.getNearbyCars(vehicle, 100))
    );
  }

  cleanup(): void {
    this.vehicles.filter(v => v.y <= v.targetY).map(v => v.ref.remove());
    this.exitSpeeds = this.exitSpeeds.concat(this.vehicles.filter(v => v.y <= v.targetY).map(v => v.velocity));
    if (this.exitSpeeds.length >= this.cacheSize) {
      this.exitSpeeds.splice(0, this.exitSpeeds.length - this.cacheSize);
    }
    this.vehicles = this.vehicles.filter(v => v.y > v.targetY);
  }

  getNearbyCars(vehicle: Vehicle, radius: number): Vehicle[] {
    return this.vehicles.filter(
      other => this.distance(vehicle, other) <= radius
    );
  }

  distance(first: Vehicle, second: Vehicle): number {
    return Math.sqrt(
      Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2)
    );
  }

  reset(): void {
    this.vehicles.forEach(vehicle => vehicle.ref.remove());
    this.tollbooths.forEach(tollbooth => {
      tollbooth.ref.remove();
      tollbooth.active = false;
    });
    this.targetRefs.forEach(ref => ref.remove());
    this.vehicles = [];
    this.tollbooths = [];
    this.targetRefs = [];
  }

  calculateAvgExitSpeed() {
    return this.exitSpeeds.reduce((acc, val) => acc + val, 0) / this.exitSpeeds.length;
  }

  calculateAvgOutputFlowRate() {
    return 0;
  }


}
