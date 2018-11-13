import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { World } from './model/world'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MergeAfterToll';
  numBooths = 8;
  numLanes = 3;
  poissonRate = 3000;
  lockTime = 500;
  tollboothSpacing = 100;
  mergeDistance = 500;
  avgOutputFlowRate = 0;
  avgExitSpeed = 0;


  ngOnInit(): void {
    const simulationRef = d3.select('#simulation');
    const world: World = new World(simulationRef)

    d3.timer((elapsedTime) => {
      world.update()
      world.render()
      world.cleanup()

      // TODO: this.avgOutputFlowRate = world.calculateAvgOutputFlowRate();
      // TODO: this.avgExitSpeed = world.calculateAvgExitSpeed();
    });
  }

  handleReset() {
    // TODO: Reset the world with current parameters (numLanes, numBooths, etc.) specified in the UI
    console.log("Resetting the world...");
  }
}
