export class TollBooth {
  // parameters controlling production of cars
  private rate: number;
  private locktime: number;
  // position of tollbooth
  private x: number;
  private y: number;
  // position of target lane
  private targetX: number;
  private targetY: number;
  // world to add cars to
  private world;

  constructor(rate: number, locktime: number) {
    this.rate = rate;
    this.locktime = locktime;
    // TODO: set world
    this.beginGeneration()
  }

  beginGeneration: () => void =
  () => {
    setTimeout(this.doGeneration, this.generateInterval())
  }

  doGeneration: () => void =
  () => {
    console.log("Produced a car")
    setTimeout(this.doGeneration, this.generateInterval())
  }

  generateInterval: () => number =
  () => {
    return this.locktime - Math.log(1 - Math.random()) * this.rate
  }

}
