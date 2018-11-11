import { Car } from "../car-impl";
import { Vehicle } from "../vehicle";
import { Strategy } from "../strategy";

export class AvoidantStrategy extends Strategy {
  private maxTurnRate = Math.PI / 60;
  private maxAccel = 0.02;
  private topSpeed = 2;
  private targetSpeed = 1.5;

  initialize(car: Vehicle) {
    super.initialize(car);
    car.velocity = 0.5;
    car.direction = - Math.PI / 2;
  }

  update(nearbyCars: Vehicle[]) {
    const currX = this.car.x;
    const currY = this.car.y;
    const targetX = this.car.targetX;
    const targetY = this.car.targetY;

    // Remove car if it is beyond where it should be
    if (targetY - currY > 0) {
      this.car.ref.remove();
      return
    }

    // Turn toward the lane
    const targetAngle = Math.atan2(targetY - currY, targetX - currX);
    const angleChange = targetAngle - this.car.direction;
    if (Math.abs(angleChange) > this.maxTurnRate) {
      this.car.direction += Math.sign(angleChange) * this.maxTurnRate;
    } else {
      this.car.direction += angleChange;
    }

    // Change speed
    const speedChange = this.targetSpeed - this.car.velocity;
    if (Math.abs(speedChange) > this.maxAccel) {
      this.car.velocity += Math.sign(speedChange) * this.maxAccel;
    } else {
      this.car.velocity += speedChange;
    }

    // Move the car
    this.car.x += this.car.velocity * Math.cos(this.car.direction);
    this.car.y += this.car.velocity * Math.sin(this.car.direction);
  }
}
