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

  ngOnInit(): void {
    const simulationRef = d3.select('#simulation');
    const world: World = new World(simulationRef)

    d3.timer((elapsedTime) => {
      world.update()
      world.render()
    });
  }
}
