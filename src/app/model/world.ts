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
    this.vehicles.forEach(vehicle => vehicle.update());
  }
}
