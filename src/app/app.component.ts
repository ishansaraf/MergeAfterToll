import { Component, OnInit } from "@angular/core";
import * as d3 from "d3";
import { World } from "./model/world";

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
  mergeDistance = 500;
  avgOutputFlowRate = 0;
  avgExitSpeed = 0;
  world: World;
  simulationRef;

  ngOnInit(): void {
    this.simulationRef = d3.select("#simulation");
    this.world = new World(this.simulationRef);

    d3.timer(elapsedTime => {
      this.world.update();
      this.world.render();
      this.world.cleanup();

      // TODO: this.avgOutputFlowRate = world.calculateAvgOutputFlowRate();
      // TODO: this.avgExitSpeed = world.calculateAvgExitSpeed();
    });
  }

  handleReset() {
    console.log("Resetting the world...");
    this.world.reset();
    this.world = new World(this.simulationRef, this.numBooths, this.numLanes);
  }
}
