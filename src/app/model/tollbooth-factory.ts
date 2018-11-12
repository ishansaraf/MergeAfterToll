import { Tollbooth } from "./tollbooth";
import { World } from "./world";

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

  createTollbooth(
    x: number,
    y: number,
    targetX: number,
    targetY: number
  ): Tollbooth {
    const boothRef = this.world.ref
      .append("rect")
      .attr("x", x - 15)
      .attr("y", y - 15)
      .attr("width", 30)
      .attr("height", 30)
      .attr("fill", "red")
      .attr("opacity", 0.5);
    return new Tollbooth(
      this.world,
      this.rate,
      this.locktime,
      x,
      y,
      targetX,
      targetY,
      boothRef
    );
  }

  createTollboothRows(boothCount: number, laneCount: number): void {
    const top = 100;
    const bottom = this.world.ref.node().getBoundingClientRect().height - 100;
    const center = this.world.ref.node().getBoundingClientRect().width / 2;
    const boothWidth = this.separation * boothCount;
    const boothStart = center - boothWidth / 2;
    const laneWidth = this.separation * laneCount;
    const laneStart = center - laneWidth / 2;

    var lanes: number[] = [];
    for (var i: number = 0; i < laneCount; i++) {
      lanes.push(laneStart + i * this.separation);
    }

    for (var i: number = 0; i < boothCount; i++) {
      var x = boothStart + i * this.separation;
      var lane = lanes[Math.floor((i * laneCount) / boothCount)];
      var tollbooth = this.createTollbooth(x, bottom, lane, top);
      tollbooth.beginGeneration();
      this.world.addTollBooth(tollbooth);
    }

    this.createTargets(lanes, top);
  }

  createTargets(lanes: number[], offset: number): void {
    lanes.forEach(lane => {
      const laneRef = this.world.ref
        .append("rect")
        .attr("x", lane - 15)
        .attr("y", offset - 15)
        .attr("width", 30)
        .attr("height", 30)
        .attr("fill", "green")
        .attr("opacity", 0.5);
      this.world.addTargetRef(laneRef);
    });
  }
}
