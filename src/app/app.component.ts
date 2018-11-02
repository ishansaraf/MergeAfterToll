import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MergeAfterToll';

  private cx = 10;
  private cy = 10;

  ngOnInit(): void {
    const simulationRef = d3.select('#simulation');

    const vehicleRef = simulationRef.append('circle')
      .attr('r', 50)
      .attr('fill', 'blue');

    d3.timer((elapsedTime) => {
      this.cx++;
      this.cy++;
      vehicleRef
        .attr('cx', this.cx)
        .attr('cy', this.cy);
    });
  }
}
