import { Car } from "../car-impl";
import { Vehicle } from "../vehicle";
import { Strategy } from "../strategy";

export class AvoidantStrategy extends Strategy {
  private maxTurnRate = Math.PI / 60;
  private maxAccel = 0.02;
  private maxDecel = -0.1;
  private passFactor = 0.01;
  private brakeFactor = 0.03;
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

    // Turn toward the lane
    const targetAngle = Math.atan2(targetY - currY, targetX - currX);
    var angleChange = targetAngle - this.car.direction;
    if (Math.abs(angleChange) > this.maxTurnRate) {
      angleChange = Math.sign(angleChange) * this.maxTurnRate;
    }

    // Change speed
    var speedChange = 0
    if (nearbyCars != []) {
      speedChange = this.targetSpeed - this.car.velocity;
      speedChange = Math.min(speedChange, this.maxAccel);
      speedChange = Math.max(speedChange, this.maxDecel);
    }

    // Correct for collisions
    nearbyCars.forEach(otherCar => {
      if (otherCar.y < this.car.y) {
        speedChange -= this.brakeFactor;
        speedChange = Math.max(speedChange, this.maxDecel);
      } else {
        speedChange += this.passFactor;
        speedChange = Math.min(speedChange, this.maxAccel);
      }
    });


    // Move the car
    this.car.velocity += speedChange;
    this.car.velocity = Math.min(this.car.velocity, this.topSpeed);
    this.car.velocity = Math.max(this.car.velocity, 0);
    this.car.direction += angleChange;
    this.car.x += this.car.velocity * Math.cos(this.car.direction);
    this.car.y += this.car.velocity * Math.sin(this.car.direction);
  }
}
