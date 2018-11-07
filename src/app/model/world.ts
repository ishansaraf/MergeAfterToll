import { Vehicle } from "./vehcile";

export class World {
  public ref;
  private vehicles: Vehicle[] = [];

  constructor(ref) {
    this.ref = ref;
    // TODO: Create Tollbooths and Targets appropriately, maintain list of targets
  }

  addVehicle(vehicle: Vehicle) {
    this.vehicles.push(vehicle);
  }

  getVehicles(): Vehicle[] {
    return this.vehicles;
  }

  render() {
    this.vehicles.forEach(vehicle => vehicle.render());
  }

  update() {
    this.vehicles.forEach(vehicle => vehicle.update());
  }
}
