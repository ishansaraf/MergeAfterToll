import { Vehicle } from "./vehicle";
import { CarFactory } from "./car-factory";
import { TollboothFactory } from "./tollbooth-factory";
import { Tollbooth } from "./tollbooth";

export class World {
  public ref;
  public carFactory: CarFactory;
  public tollboothFactory: TollboothFactory;
  public vehicles: Vehicle[] = [];
  public targetXs: number[] = [];
  public targetYs: number[] = [];
  public tollbooths: Tollbooth[] = [];
  public targetRefs: any[] = [];

  constructor(ref) {
    this.ref = ref;
    this.carFactory = new CarFactory(ref);
    this.tollboothFactory = new TollboothFactory(this);
    this.tollboothFactory.createTollboothRows(8, 3);
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
    this.vehicles.forEach(vehicle => vehicle.update(this.getNearbyCars(vehicle, 100)));
  }

  cleanup(): void {
    this.vehicles.filter(v => v.y <= v.targetY).map(v => v.ref.remove());
    this.vehicles = this.vehicles.filter(v => v.y > v.targetY);
  }

  getNearbyCars(vehicle: Vehicle, radius: number): Vehicle[] {
    return this.vehicles.filter(other => this.distance(vehicle, other) <= radius);
  }

  distance(first: Vehicle, second: Vehicle): number {
    return Math.sqrt(Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2));
  }

}
