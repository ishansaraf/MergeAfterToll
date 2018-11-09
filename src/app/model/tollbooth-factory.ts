import { Tollbooth } from './tollbooth'
import { World } from "./world"

export class TollboothFactory {
  private world: World;
  private locktime: number;
  private rate: number;
  private separation = 100;

  constructor(world: World) {
    this.world = world;
    this.locktime = 500;
    this.rate = 3000;
  }

  createTollbooth(x: number,
                  y: number,
                  targetX: number,
                  targetY: number): Tollbooth {
    return new Tollbooth(this.world, this.rate, this.locktime, x, y, targetX, targetY);
  }

  createTollboothRows(boothCount: number, laneCount: number) {
    const top = 100;
    const bottom = this.world.ref.node().getBoundingClientRect().height - 100;
    const center = this.world.ref.node().getBoundingClientRect().width / 2;
    const boothWidth = this.separation * boothCount;
    const boothStart = center - (boothWidth / 2);
    const laneWidth = this.separation * laneCount;
    const laneStart = center - (laneWidth / 2);

    var lanes: number[] = []
    for(var i: number = 0; i < laneCount; i++) {
      lanes.push(laneStart + (i * this.separation));
    }

    var tollbooths: Tollbooth[] = []
    for(var i: number = 0; i < boothCount; i++) {
      var x = boothStart + (i * this.separation);
      var lane = lanes[Math.floor(i * laneCount / boothCount)];
      tollbooths.push(this.createTollbooth(x, bottom, lane, top));
    }
  }
}
