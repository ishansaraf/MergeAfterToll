import { Component, OnInit } from "@angular/core";
import * as d3 from "d3";
import { World } from "./model/world";
import { TollboothFactory } from "./model/tollbooth-factory";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "MergeAfterToll";
  numBooths = 8;
  numLanes = 3;
  poissonRate = 3000;
  lockTime = 500;
  tollboothSpacing = 100;
  mergeDistance = 625;
  avgOutputFlowRate = 0;
  avgExitSpeed = 0;
  world: World;
  simulationRef;
  tollboothFactory: TollboothFactory;

  ngOnInit(): void {
    this.simulationRef = d3.select("#simulation");
    this.handleReset();

    d3.timer(elapsedTime => {
      this.world.update();
      this.world.render();
      this.world.cleanup();

      // TODO: this.avgOutputFlowRate = world.calculateAvgOutputFlowRate();
      // TODO: this.avgExitSpeed = world.calculateAvgExitSpeed();
    });
  }

  handleReset() {
    if (this.world) {
      console.log("Resetting the world...");
      this.world.reset();
    }

    this.world = new World(this.simulationRef);
    this.tollboothFactory = new TollboothFactory(
      this.world,
      this.lockTime,
      this.poissonRate,
      this.tollboothSpacing,
      this.mergeDistance
    );
    this.tollboothFactory.createTollboothRows(this.numBooths, this.numLanes);
  }
}
