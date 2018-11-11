import { Vehicle } from "./vehicle";
import { CarFactory } from "./car-factory";
import { TollboothFactory } from "./tollbooth-factory";

export class World {
  public ref;
  public carFactory: CarFactory
  public tollboothFactory: TollboothFactory
  public vehicles: Vehicle[] = [];
  public targetXs: number[] = [];
  public targetYs: number[] = [];

  constructor(ref) {
    this.ref = ref;
    this.carFactory = new CarFactory(ref);
    this.tollboothFactory = new TollboothFactory(this);
    this.tollboothFactory.createTollboothRows(8, 3);
    // TODO: Create Tollbooths and Targets appropriately, maintain list of targets
  }

  addVehicle(vehicle: Vehicle): void {
    this.vehicles.push(vehicle);
  }

  getVehicles(): Vehicle[] {
    return this.vehicles;
  }

  render(): void {
    this.vehicles.forEach(vehicle => vehicle.render());
  }

  update(): void {
    this.vehicles.forEach(vehicle => vehicle.update());
  }
}
