import { Vehicle } from "./vehicle";

export class World {
  public ref;
  public vehicles: Vehicle[] = [];
  public targetXs: number[] = [];
  public targetYs: number[] = [];

  constructor(ref) {
    this.ref = ref;
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
